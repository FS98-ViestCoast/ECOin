import { motion } from "motion/react";
import { ArrowRight, Leaf, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Zap className="w-3 h-3" />
            The Next Evolution of Bitcoin
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8">
            ECOBIT IS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">INTELLIGENT.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg text-white/60 mb-10 leading-relaxed">
            A carbon-negative blockchain where assets aren't just data—they're alive. 
            Static <span className="text-white font-semibold">Stamps</span> meet Dynamic <span className="text-emerald-400 font-semibold">AI Ordinals</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-emerald-500 hover:text-black transition-all group">
              Explore Ecosystem
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/5 transition-all">
              Read Whitepaper
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
