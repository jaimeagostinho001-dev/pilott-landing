/* eslint-disable max-lines-per-function */
import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Investimento Escalonável</h2>
          <p className="text-slate-400 text-lg">
            No Pilott OS não existem surpresas no formato de assinaturas fixas irreais. Nossa infraestrutura é moldada para o balanço de carga que a sua operação exige mês a mês.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="flex items-center gap-4 mb-8 border-b border-slate-800 pb-6">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center flex-shrink-0">
              <Check className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Como Funciona a Precificação?</h3>
              <p className="text-slate-400 text-sm mt-1">Sua fatura é diretamente proporcional ao nível de processamento e dados em uso na sua Stack.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                Volume Operacional (Eventos)
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Toda operação no ecossistema (atualização num card de pipeline, disparo de um script do Cortex Loop ou armazenamento e sincronismo omnichoannel de dados) compõe o volume que trafega na infraestrutura. O custo computacional flutua estritamente conforme esses picos.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                Processamento Intelectual (IA)
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Tokens gerados nos modelos de linguagem do Persona Studio (Gemini, Claude, GPT, etc.) e os custos exatos da Vision API para processamentos de áudios, validações biométricas ou geradores de imagens via Flux. 
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Serviços de Terceiros e Mensageria
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Custo exato do tráfego repassado em uso de APIs externas sob demanda e tráfego omnichannel (WhatsApp Evolution API, Telegram, envios de SMS/Email), evitando sobrepreço em recursos que a empresa já teria que absorver de outras frentes.
              </p>
            </div>

            <div className="bg-slate-950/50 p-6 rounded-2xl border border-slate-800/80">
              <p className="text-slate-300 text-sm italic font-medium leading-relaxed">
                "Este modelo Pay-as-you-go garante que organizações menores não paguem o mesmo de uma empresa com centenas de atendentes processando milhares de pipelines e eventos automáticos simultâneos."
              </p>
              <div className="mt-4 pt-4 border-t border-slate-800">
                <a href="https://app.pilottos.io" className="text-blue-400 font-medium hover:text-blue-300 transition-colors inline-flex items-center gap-1 text-sm">
                  Simular um Orçamento 
                  <Check className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
