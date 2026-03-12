import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Planos claros, sem surpresas.</h2>
          <p className="text-slate-400 text-lg">
            Um ecossistema robusto para acelerar e proteger a gestão de todas as frentes da sua empresa. Escolha o licenciamento adequado para sua organização.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Pro Plan */}
          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 hover:border-blue-500/50 transition-colors">
            <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
            <p className="text-slate-400 mb-6 text-sm">Perfeito para quem está solidificando a operação de vendas.</p>
            <div className="mb-8">
              <span className="text-4xl font-extrabold text-white">R$ 499</span>
              <span className="text-slate-400">/mês</span>
            </div>
            <ul className="space-y-4 mb-8">
              {['CRM Multi-Pipeline', 'Até 5 colaboradores', 'Painel de Analytics', 'Suporte via Chat / Ticket'].map((feature, i) => (
                <li key={i} className="flex gap-3 text-slate-300">
                  <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a href="https://app.pilottos.io" className="block w-full text-center py-3 rounded-xl border border-slate-700 hover:bg-slate-800 transition-colors font-medium">
              Avaliação Gratuita (14 dias)
            </a>
          </div>

          {/* Enterprise Plan */}
          <div className="rounded-3xl bg-gradient-to-b from-blue-900/40 to-slate-900 border border-blue-500/50 p-8 shadow-2xl shadow-blue-900/20 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full tracking-wider uppercase">Mais popular</div>
            <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
            <p className="text-slate-400 mb-6 text-sm">Workflows complexos e ACL para quem necessita de precisão.</p>
            <div className="mb-8">
              <span className="text-4xl font-extrabold text-white">R$ 1.250</span>
              <span className="text-slate-400">/mês</span>
            </div>
            <ul className="space-y-4 mb-8">
              {['Tudo do Pro', 'Assinaturas Ilimitadas', 'Automação de Pipelines (Inteligência)', 'Bancos Isolados Expansivos', 'Onboarding Avançado'].map((feature, i) => (
                <li key={i} className="flex gap-3 text-white font-medium">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a href="https://app.pilottos.io" className="block w-full text-center py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-lg font-medium">
              Assinar Enterprise
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
