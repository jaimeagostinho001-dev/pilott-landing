/* eslint-disable max-lines-per-function */
'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Logo className="w-8 h-8 shadow-lg shadow-blue-500/20" />
            <span className="text-xl font-bold tracking-tight text-white">Pilott<span className="text-blue-500">OS</span></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-slate-300 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-sm text-slate-300 hover:text-white transition-colors">Planos</a>
            <a href="/changelog" className="text-sm text-slate-300 hover:text-white transition-colors">Novidades</a>
            <a href="https://app.pilottos.io" className="text-sm font-medium text-white px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all">
              Login
            </a>
            <a href="https://app.pilottos.io" className="text-sm font-medium text-white px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/25">
              Começar Agora
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-300 hover:text-white">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-white/10 p-4 flex flex-col gap-4 shadow-xl">
          <a href="#features" className="text-slate-300 hover:text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
          <a href="#pricing" className="text-slate-300 hover:text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>Planos</a>
          <a href="/changelog" className="text-slate-300 hover:text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>Novidades</a>
          <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
            <a href="https://app.pilottos.io" className="text-center font-medium text-white px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all">
              Login
            </a>
            <a href="https://app.pilottos.io" className="text-center font-medium text-white px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition-all">
              Começar Agora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
