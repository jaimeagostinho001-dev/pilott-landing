/* eslint-disable max-lines-per-function */
import { Rocket, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 pt-24 pb-12 border-t border-slate-900 border-opacity-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 mb-16">
          <div className="max-w-xs text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Pilott<span className="text-blue-500">OS</span></span>
            </div>
            <p className="text-slate-400 text-sm">
              Sua operação em um único cockpit. O Sistema Operacional para gestão B2B moderna, segura e escalável.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-center lg:text-left">
            <div>
              <h4 className="text-white font-semibold mb-6">Produto</h4>
              <ul className="space-y-4">
                <li><a href="#features" className="text-slate-400 hover:text-white transition-colors text-sm">CRM</a></li>
                <li><a href="#features" className="text-slate-400 hover:text-white transition-colors text-sm">Pipelines</a></li>
                <li><a href="#features" className="text-slate-400 hover:text-white transition-colors text-sm">Analytics</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6">Empresa</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Sobre</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Contato</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Privacidade</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-white font-semibold mb-6">Conexões</h4>
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 border border-slate-800 hover:text-white hover:border-blue-500 transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 border border-slate-800 hover:text-white hover:border-blue-500 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 border border-slate-800 hover:text-white hover:border-blue-500 transition-colors">
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Pilott OS. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300">Termos de Uso</a>
            <a href="#" className="hover:text-slate-300">Política de Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
