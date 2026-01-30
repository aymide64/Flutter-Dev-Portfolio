
import React from 'react';
import { STATS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 bg-zinc-950 relative overflow-hidden scroll-mt-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-cyan-500/20 blur-3xl rounded-full"></div>
          <img 
            src="https://picsum.photos/id/64/800/800" 
            alt="Developer Avatar" 
            className="relative rounded-3xl grayscale hover:grayscale-0 transition-all duration-500 border border-zinc-800 shadow-2xl"
          />
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-cyan-500 font-mono mb-2 uppercase tracking-widest text-sm">Who am I?</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">A Passionate Creator Behind the Screen</h3>
            <p className="text-zinc-400 text-lg leading-relaxed">
              I specialize in building complex mobile ecosystems with Flutter. My philosophy centers on writing "Self-Documenting Code" and building scalable architectures that stand the test of time. 
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mt-4">
              With deep expertise in the Dart ecosystem, I transform abstract ideas into high-performance digital products that users love.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors group">
                <div className="text-3xl font-black text-white group-hover:text-cyan-400 transition-colors">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-zinc-500 text-sm font-medium mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
