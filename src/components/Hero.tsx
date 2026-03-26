/* eslint-disable @typescript-eslint/no-unused-vars, max-lines-per-function */
'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Activity, Globe, Database, Cpu } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-60 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full" />
        <div className="absolute top-20 left-1/4 -translate-x-1/2 w-[400px] h-[400px] bg-indigo-500/20 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
          Pilott OS 1.0 lançado para gestão escalável
          <ChevronRight className="w-4 h-4 ml-1" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8"
        >
          Sua operação em um <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
            único cockpit.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed"
        >
          O Sistema Operacional desenhado para empresas B2B. Centralizamos CRM, pipelines de vendas e gestão operacional inteligente para automatizar decisões e impulsionar resultados.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a
            href="https://app.pilottos.io"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
          >
            Acessar o Pilott OS
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#features"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all flex items-center justify-center"
          >
            Entender os Módulos
          </a>
        </motion.div>

        {/* Floating elements showcasing the UI feeling */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative max-w-5xl mx-auto rounded-xl sm:rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl p-2 sm:p-4 shadow-2xl overflow-hidden before:absolute before:-inset-2 before:bg-gradient-to-b before:from-white/5 before:to-transparent before:pointer-events-none before:rounded-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" 
            alt="Interface do Pilott OS" 
            className="rounded-lg sm:rounded-xl opacity-70 border border-white/5 w-full object-cover aspect-[16/9]"
          />
          
          {/* Dashboard overlay mocks */}
          <div className="absolute top-10 -left-6 md:-left-12 px-4 py-3 bg-slate-800/90 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl flex items-center gap-3 animate-bounce shadow-blue-500/10" style={{ animationDuration: '3s' }}>
            <div className="bg-emerald-500/20 p-2 rounded-lg">
              <Activity className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="text-left">
              <p className="text-xs text-slate-400 font-medium tracking-wide">Conversão</p>
              <p className="text-lg text-white font-bold">+28.4%</p>
            </div>
          </div>
          
          <div className="absolute bottom-20 -right-6 md:-right-10 px-4 py-3 bg-slate-800/90 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl flex items-center gap-3 animate-bounce shadow-purple-500/10" style={{ animationDuration: '4s', animationDelay: '1s' }}>
            <div className="bg-purple-500/20 p-2 rounded-lg">
              <Database className="w-5 h-5 text-purple-400" />
            </div>
            <div className="text-left">
              <p className="text-xs text-slate-400 font-medium tracking-wide">Pipelines Ativos</p>
              <p className="text-lg text-white font-bold">144</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
