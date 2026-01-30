
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-zinc-950 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Mastered Technologies</h2>
          <p className="text-zinc-400">The tools I use to bring modern experiences to life.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SKILLS.map((skill) => (
            <div 
              key={skill.name} 
              className="group p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:bg-zinc-900 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center justify-center text-center"
            >
              <span className="text-5xl mb-4 grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110">
                {skill.icon}
              </span>
              <h4 className="text-lg font-bold text-zinc-300 group-hover:text-cyan-400">{skill.name}</h4>
              <span className="text-xs text-zinc-600 mt-2 uppercase tracking-widest">{skill.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
