import { LayoutDashboard, Users, Workflow, Zap, Lock, BarChart3 } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <LayoutDashboard className="w-6 h-6 text-blue-400" />,
      title: "Gestão Unificada",
      description: "Tenha a visão 360º de todas as métricas críticas da empresa no mesmo painel administrativo."
    },
    {
      icon: <Users className="w-6 h-6 text-indigo-400" />,
      title: "CRM Multi-Pipeline",
      description: "Acompanhe todo o fluxo comercial (Lead → Conversão → Pós-Venda) de forma hiper-personalizada."
    },
    {
      icon: <Workflow className="w-6 h-6 text-purple-400" />,
      title: "Inteligência Operacional",
      description: "Workflows construídos nativamente para realizar tarefas automáticas e otimizar rotinas complexas."
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-400" />,
      title: "Automações Dinâmicas",
      description: "Desencadeie eventos automaticamente sempre que as etapas de negócios ou processos mudarem."
    },
    {
      icon: <Lock className="w-6 h-6 text-emerald-400" />,
      title: "Segurança Granular",
      description: "ACLs rígidas baseadas em funções. Controle meticuloso de quem vê e opera o seu sistema."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-rose-400" />,
      title: "Analytics Avançado",
      description: "Entenda o tráfego do MRR e da retenção por meio de dashboards desenhados para gestores B2B."
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Feito para dominar processos complexos.</h2>
          <p className="text-slate-400 text-lg">
            Esqueça o mosaico de ferramentas que não conversam entre si. O Pilott OS reúne em módulos modulares tudo que a operação B2B precisa para escalar rápido.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 hover:border-slate-600 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 tracking-snug">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
