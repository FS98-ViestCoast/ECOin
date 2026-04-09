import { motion } from "motion/react";
import { Image, Cpu, Sparkles, Lock } from "lucide-react";

const STAMPS = [
  { id: 1, name: "Genesis Leaf", rarity: "Common", img: "https://picsum.photos/seed/leaf/400/400" },
  { id: 2, name: "Ancient Root", rarity: "Rare", img: "https://picsum.photos/seed/root/400/400" },
  { id: 3, name: "Solar Bloom", rarity: "Epic", img: "https://picsum.photos/seed/flower/400/400" },
];

export default function NFTShowcase() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Static Stamps Section */}
          <div id="stamps">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-zinc-800 rounded-lg">
                <Image className="text-zinc-400 w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-white">NFT Stamps</h2>
            </div>
            <p className="text-zinc-500 mb-8 max-w-md">
              Static, immutable digital artifacts. Preserved forever on the EcoBit ledger. 
              Classic collectibles for the modern age.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {STAMPS.map((stamp) => (
                <motion.div 
                  key={stamp.id}
                  whileHover={{ y: -5 }}
                  className="bg-zinc-900 border border-white/5 p-4 rounded-2xl group"
                >
                  <div className="aspect-square rounded-xl overflow-hidden mb-4 relative">
                    <img src={stamp.img} alt={stamp.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                    <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-white/70 flex items-center gap-1">
                      <Lock className="w-3 h-3" /> STATIC
                    </div>
                  </div>
                  <h3 className="text-white font-bold">{stamp.name}</h3>
                  <p className="text-zinc-500 text-sm">{stamp.rarity}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Dynamic Ordinals Section */}
          <div id="ordinals" className="relative">
            <div className="absolute -inset-4 bg-emerald-500/5 blur-3xl rounded-full -z-10" />
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-emerald-500/20 rounded-lg">
                <Cpu className="text-emerald-400 w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-white">AI Ordinals</h2>
            </div>
            <p className="text-emerald-500/60 mb-8 max-w-md">
              Dynamic, autonomous agents. These aren't just images—they are IPO Agents AI 
              that evolve, interact, and generate value in real-time.
            </p>

            <div className="bg-emerald-950/20 border border-emerald-500/20 p-8 rounded-3xl backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center">
                  <Sparkles className="text-black w-8 h-8 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Agent #001: Verdant</h3>
                  <p className="text-emerald-400 text-sm font-mono uppercase tracking-widest">Status: Active & Learning</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="h-2 bg-emerald-500/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    className="h-full bg-emerald-500" 
                  />
                </div>
                <div className="flex justify-between text-[10px] font-mono text-emerald-500/50 uppercase tracking-tighter">
                  <span>Intelligence Level</span>
                  <span>75% Optimal</span>
                </div>
              </div>

              <div className="p-4 bg-black/40 rounded-xl border border-emerald-500/10 font-mono text-xs text-emerald-400/80 leading-relaxed">
                "I am currently analyzing the carbon offset of the last 1,000 blocks. 
                Efficiency has increased by 12.4% since my last iteration."
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
