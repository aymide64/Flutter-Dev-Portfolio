
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 border-t border-zinc-900 bg-zinc-950 text-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#home" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center font-bold text-zinc-950">F</div>
          <span className="font-bold tracking-tight">DEV_LOG</span>
        </a>
        
        <p className="text-zinc-600 text-sm">
          © {new Date().getFullYear()} Flutter Dev Portfolio. Built with passion & clean architecture.
        </p>

        <div className="flex items-center gap-6">
          <a href="#home" className="text-zinc-500 hover:text-cyan-400 transition-colors text-sm">Twitter</a>
          <a href="#home" className="text-zinc-500 hover:text-cyan-400 transition-colors text-sm">Instagram</a>
          <a href="#home" className="text-zinc-500 hover:text-cyan-400 transition-colors text-sm">Dribbble</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
