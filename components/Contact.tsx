
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-zinc-950 scroll-mt-24">
      <div className="max-w-5xl mx-auto bg-zinc-900 border border-zinc-800 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 blur-[100px] pointer-events-none"></div>

        <div className="grid md:grid-cols-2 gap-16 relative z-10">
          <div>
            <h2 className="text-4xl font-bold mb-6">Let's Build Something Exceptional</h2>
            <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
              Have a mobile app idea or need to scale your existing Flutter project? I'm currently open to freelance opportunities and full-time roles.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-xl group-hover:bg-cyan-500 group-hover:text-zinc-950 transition-all">
                  📧
                </div>
                <div>
                  <div className="text-sm text-zinc-500 uppercase tracking-widest font-bold">Email Me</div>
                  <div className="text-zinc-200 font-bold">hello@flutterdev.log</div>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-xl group-hover:bg-cyan-500 group-hover:text-zinc-950 transition-all">
                    💼
                </div>
                <div>
                  <div className="text-sm text-zinc-500 uppercase tracking-widest font-bold">LinkedIn</div>
                  <div className="text-zinc-200 font-bold">linkedin.com/in/flutterdev</div>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-xl group-hover:bg-cyan-500 group-hover:text-zinc-950 transition-all">
                    💻
                </div>
                <div>
                  <div className="text-sm text-zinc-500 uppercase tracking-widest font-bold">GitHub</div>
                  <div className="text-zinc-200 font-bold">github.com/flutterdev</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-zinc-800 border border-zinc-700 rounded-2xl focus:border-cyan-500 focus:outline-none transition-colors text-white" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 bg-zinc-800 border border-zinc-700 rounded-2xl focus:border-cyan-500 focus:outline-none transition-colors text-white" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Project Budget</label>
                <select className="w-full px-6 py-4 bg-zinc-800 border border-zinc-700 rounded-2xl focus:border-cyan-500 focus:outline-none transition-colors text-zinc-400">
                    <option>$2k - $5k</option>
                    <option>$5k - $10k</option>
                    <option>$10k+</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Message</label>
                <textarea rows={4} placeholder="Tell me about your project..." className="w-full px-6 py-4 bg-zinc-800 border border-zinc-700 rounded-2xl focus:border-cyan-500 focus:outline-none transition-colors text-white resize-none"></textarea>
              </div>
            </div>
            <button className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-black rounded-2xl transition-all active:scale-95 shadow-lg shadow-cyan-500/20">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
