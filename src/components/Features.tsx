/* eslint-disable max-lines-per-function */
import { BrainCircuit, Workflow, MessageSquare, Briefcase, ActivitySquare, ShieldCheck } from 'lucide-react';

export default function Features() {
  const features = [
    {
       icon: <BrainCircuit className="w-6 h-6 text-indigo-400" />,
      title: "Persona Studio & IA Genômica",
      description: "Crie agentes com memória persistente, Blueprint visual e integração Dual-Route (Visão via Gemini Pro) para total autonomia."
    },
    {
      icon: <Workflow className="w-6 h-6 text-blue-400" />,
      title: "Cockpit Agentic Central",
      description: "Motor de Workflow autônomo baseado no Cortex Loop. Automatize decisões operacionais e gerencie multi-agentes simultaneamente."
    },
    {
       icon: <MessageSquare className="w-6 h-6 text-purple-400" />,
      title: "Unified Inbox Omnichannel",
      description: "Acompanhe WhatsApp e Telegram em tempo real com sincronia absoluta e intervenção state-sync inteligente."
    },
    {
      icon: <Briefcase className="w-6 h-6 text-amber-400" />,
      title: "CRM (Party-Model)",
      description: "Pipelines dinâmicos e relacionais. Gerencie ciclos de venda interligando contatos, oportunidades globais e cadência orgânica."
    },
    {
      icon: <ActivitySquare className="w-6 h-6 text-rose-400" />,
      title: "Follow-up System & Pacing",
      description: "Algoritmos just-in-time que analisam vácuos e acionam follow-ups empáticos sem engessar a relação B2B."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: "Governança H.I.T.L.",
      description: "Soberania Humana-no-Loop. Monitore, assuma conversas (takeover) e intervenha na tomada de decisão dos agentes com 1 clique."
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">A Era da Execução Soberana.</h2>
          <p className="text-slate-400 text-lg">
            Muito além do mosaico tradicional. O Pilott OS traz inteligência genuína, fundindo automação de workflows, mensageria orgânica e CRM escalável sob a supervisão total do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 hover:border-slate-600 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-black/50">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 tracking-snug text-slate-100">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {feature.description}
              </p>
              
              {/* O Placeholder para pequenas vitrines (substituir dps por prints ou SVG diagramas das funções) */}
              <div className="mt-6 w-full h-32 rounded bg-slate-900/50 border border-slate-700/30 overflow-hidden relative grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                  <img src={`/images/feature-mock-${i+1}.png`} alt={`Módulo ${feature.title}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center text-[10px] text-slate-600 font-mono tracking-widest uppercase bg-slate-950/80">Requer Print Real</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
