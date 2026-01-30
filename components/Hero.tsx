
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-20 scroll-mt-24">
      {/* Background Orbs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 -right-40 w-80 h-80 bg-purple-500/10 blur-[120px] rounded-full"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="z-10 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-6 animate-bounce">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Available for new projects
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
          Flutter Developer Building <br className="hidden md:block" />
          High-Performance Mobile Apps
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Crafting pixel-perfect, natively compiled applications for mobile, web, and desktop with a focus on Clean Architecture and exceptional UI/UX.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#work" className="w-full sm:w-auto px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold rounded-xl transition-all hover:scale-105 shadow-lg shadow-cyan-500/20 active:scale-95 text-center">
            View My Apps
          </a>
          <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-white font-bold rounded-xl transition-all active:scale-95 text-center">
            Contact Me
          </a>
        </div>
      </div>

      {/* Floating Elements Simulation */}
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-zinc-800/30 border border-zinc-700/50 rounded-2xl backdrop-blur-sm -rotate-12 animate-[float_6s_ease-in-out_infinite] hidden lg:block">
        <div className="p-4 space-y-2">
            <div className="w-full h-2 bg-cyan-500/20 rounded"></div>
            <div className="w-2/3 h-2 bg-zinc-600/20 rounded"></div>
        </div>
      </div>
      <div className="absolute top-40 right-10 w-32 h-32 bg-zinc-800/30 border border-zinc-700/50 rounded-3xl backdrop-blur-sm rotate-6 animate-[float_8s_ease-in-out_infinite_1s] hidden lg:block">
        <div className="p-6 flex flex-col items-center justify-center">
            <div className="w-12 h-12 bg-cyan-500/40 rounded-full mb-3"></div>
            <div className="w-full h-1 bg-zinc-600/30 rounded"></div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(var(--tw-rotate, 0deg)); }
          50% { transform: translateY(-20px) rotate(var(--tw-rotate, 0deg)); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
