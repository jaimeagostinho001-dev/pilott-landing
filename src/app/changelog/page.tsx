/* eslint-disable react-refresh/only-export-components, max-lines-per-function, @typescript-eslint/no-explicit-any, max-lines */
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Novidades do Pilott | Changelog',
  description: 'Acompanhe todas as atualizações, novas funcionalidades e melhorias da plataforma Pilott OS.',
  openGraph: {
    title: 'Novidades do Pilott | Changelog',
    description: 'Acompanhe todas as atualizações, novas funcionalidades e melhorias da plataforma Pilott OS.',
    url: 'https://pilottos.io/changelog',
    siteName: 'Pilott OS',
    locale: 'pt_BR',
    type: 'website',
  },
};

// ─── Estrutura de dados (tipagem local simples para a landing) ────────────────
interface ChangelogEntry {
  id: string;
  version: string;
  title: string;
  summary: string;
  date: string;            // ISO string (já processado server-side)
  highlights?: string[];
  categories?: {
    type: 'feature' | 'fix' | 'improvement' | 'breaking';
    label: string;
    items: string[];
  }[];
}

// ─── Busca dados via Firestore REST (sem SDK no servidor Next.js) ─────────────
async function fetchPublishedReleases(): Promise<ChangelogEntry[]> {
  try {
    const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
    if (!projectId) return [];

    const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/changelogs?pageSize=50`;
    const res = await fetch(url, { next: { revalidate: 300 } }); // revalida a cada 5 min
    if (!res.ok) return [];

    const json = await res.json();
    const docs = json.documents ?? [];

    const releases: ChangelogEntry[] = docs
      .map((doc: any) => {
        const f = doc.fields ?? {};
        const status = f.status?.stringValue ?? 'draft';
        if (status !== 'published') return null;

        const toDate = (v: any): string => {
          if (!v) return '';
          const ts = v.timestampValue ?? v.stringValue ?? '';
          return ts ? new Date(ts).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }) : '';
        };

        const toArray = (v: any): string[] => {
          if (!v?.arrayValue?.values) return [];
          return v.arrayValue.values.map((i: any) => i.stringValue ?? '');
        };

        const toCategories = (v: any) => {
          if (!v?.arrayValue?.values) return [];
          return v.arrayValue.values.map((item: any) => {
            const m = item.mapValue?.fields ?? {};
            return {
              type: m.type?.stringValue ?? 'feature',
              label: m.label?.stringValue ?? '',
              items: toArray(m.items),
            };
          });
        };

        const id = doc.name?.split('/').pop() ?? '';
        return {
          id,
          version: f.version?.stringValue ?? '',
          title: f.title?.stringValue ?? '',
          summary: f.summary?.stringValue ?? '',
          date: toDate(f.date),
          highlights: toArray(f.highlights),
          categories: toCategories(f.categories),
        } as ChangelogEntry;
      })
      .filter(Boolean) as ChangelogEntry[];

    return releases.sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch {
    return [];
  }
}

// ─── Mapa visual por categoria ─────────────────────────────────────────────────
const CATEGORY_META: Record<string, { emoji: string; label: string; color: string }> = {
  feature:     { emoji: '✨', label: 'Funcionalidade', color: 'text-blue-400' },
  improvement: { emoji: '📈', label: 'Melhoria',       color: 'text-green-400' },
  fix:         { emoji: '🔧', label: 'Correção',        color: 'text-orange-400' },
  breaking:    { emoji: '⚠️', label: 'Breaking',        color: 'text-red-400' },
};

// ─── Componente de Card (Server Component) ────────────────────────────────────
function ReleaseCard({ release }: { release: ChangelogEntry }) {
  return (
    <article className="relative p-6 rounded-2xl border border-white/10 bg-slate-900/60 hover:border-blue-500/30 transition-all duration-300">
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-xl">
          🚀
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span className="font-mono text-xs font-bold text-slate-400 bg-slate-800 px-2 py-0.5 rounded-md border border-white/10">
              v{release.version}
            </span>
            {release.date && (
              <span className="text-[11px] text-slate-500 ml-auto">{release.date}</span>
            )}
          </div>
          <h2 className="text-base font-bold text-white leading-snug">{release.title}</h2>
          <p className="mt-1 text-sm text-slate-400 leading-relaxed">{release.summary}</p>
        </div>
      </div>

      {/* Highlights */}
      {release.highlights && release.highlights.length > 0 && (
        <ul className="mb-4 space-y-1.5">
          {release.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
              <span className="text-blue-400 mt-0.5 shrink-0">★</span>
              {h}
            </li>
          ))}
        </ul>
      )}

      {/* Categories */}
      {release.categories && release.categories.length > 0 && (
        <div className="space-y-3 pt-4 border-t border-white/10">
          {release.categories.map((cat, idx) => {
            const meta = CATEGORY_META[cat.type] ?? { emoji: '•', label: cat.type, color: 'text-slate-400' };
            return (
              <div key={idx}>
                <div className={`flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest mb-1.5 ${meta.color}`}>
                  <span>{meta.emoji}</span>
                  {meta.label}
                </div>
                <ul className="space-y-1">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="shrink-0 mt-1.5 w-1 h-1 rounded-full bg-slate-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      )}
    </article>
  );
}

// ─── Página (Server Component) ─────────────────────────────────────────────────
export default async function ChangelogPage() {
  const releases = await fetchPublishedReleases();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 selection:bg-blue-500/30">
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-32 pb-20">
        {/* Hero */}
        <div className="mb-12 text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
            Changelog
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-3">
            Novidades do Pilott OS
          </h1>
          <p className="text-slate-400 text-base max-w-lg mx-auto">
            Acompanhe todas as atualizações, melhorias e novas funcionalidades da plataforma.
          </p>
        </div>

        {/* Lista */}
        {releases.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4 opacity-40">
            <span className="text-4xl">📭</span>
            <p className="text-sm text-slate-400">Nenhuma novidade publicada ainda.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {releases.map((release) => (
              <ReleaseCard key={release.id} release={release} />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
