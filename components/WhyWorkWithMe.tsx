
import React from 'react';

const WHY_REASONS = [
  {
    title: 'Clean Architecture',
    desc: 'Modular, testable, and maintainable codebases using industry best practices like SOLID and DRY.',
    icon: '🏗️'
  },
  {
    title: 'Performance First',
    desc: 'Optimized rendering cycles and state management to ensure 60FPS+ animations and low memory usage.',
    icon: '🚀'
  },
  {
    title: 'Modern UI/UX',
    desc: 'Deep understanding of Material Design and Cupertino patterns for truly native-feeling experiences.',
    icon: '✨'
  },
  {
    title: 'Robust Security',
    desc: 'Implementation of high-level encryption and secure storage practices for enterprise applications.',
    icon: '🛡️'
  }
];

const WhyWorkWithMe: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Work With Me?</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">Beyond just writing code, I bring strategic thinking and quality-first mindset to every project.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_REASONS.map((reason) => (
            <div key={reason.title} className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 group">
              <div className="text-4xl mb-6 group-hover:scale-125 transition-transform duration-300 inline-block">{reason.icon}</div>
              <h4 className="text-xl font-bold mb-4">{reason.title}</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
