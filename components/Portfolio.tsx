
import React from 'react';
import { PROJECTS } from '../constants';
import PhoneMockup from './PhoneMockup';

const Portfolio: React.FC = () => {
  return (
    <section id="work" className="py-24 px-4 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-cyan-500 font-mono mb-2 uppercase tracking-widest text-sm">Case Studies</h2>
            <h3 className="text-5xl font-bold">Featured Flutter Apps</h3>
          </div>
          <p className="text-zinc-500 max-w-md">
            A selection of my most recent work, ranging from fintech solutions to health & wellness platforms.
          </p>
        </div>

        <div className="space-y-32">
          {PROJECTS.map((project, idx) => (
            <div 
              key={project.id} 
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}
            >
              {/* Text Side */}
              <div className="flex-1 space-y-8">
                <div>
                  <h4 className="text-zinc-600 font-mono text-xl mb-2">0{idx + 1}</h4>
                  <h5 className="text-4xl font-bold mb-4">{project.name}</h5>
                  <p className="text-zinc-400 text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map(s => (
                    <span key={s} className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-400">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="space-y-4">
                  <h6 className="font-bold text-zinc-300">Key Features:</h6>
                  <ul className="grid grid-cols-2 gap-3">
                    {project.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-zinc-500 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-6 pt-4">
                  <button className="px-6 py-3 rounded-xl bg-cyan-500 text-zinc-950 font-bold hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/10">
                    Live Preview
                  </button>
                  <button className="text-white font-bold hover:text-cyan-400 transition-colors flex items-center gap-2">
                    Case Study →
                  </button>
                </div>
              </div>

              {/* Mockup Side */}
              <div className="flex-1 flex justify-center w-full">
                <PhoneMockup images={project.mockupImages} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
