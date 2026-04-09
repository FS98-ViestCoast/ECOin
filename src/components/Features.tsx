import { motion } from "motion/react";
import { Shield, Globe, Zap, Heart } from "lucide-react";
import { cn } from "@/src/lib/utils";

const FEATURES = [
  {
    title: "Carbon Negative",
    desc: "Every transaction on EcoBit funds reforestation projects worldwide.",
    icon: Heart,
    color: "text-red-400"
  },
  {
    title: "Proof of Intelligence",
    desc: "Our network uses AI agents to optimize energy consumption and security.",
    icon: Zap,
    color: "text-yellow-400"
  },
  {
    title: "Global Governance",
    desc: "A decentralized .org structure owned by the community, for the planet.",
    icon: Globe,
    color: "text-blue-400"
  },
  {
    title: "Immutable Security",
    desc: "The same battle-tested security of Bitcoin, with a green heart.",
    icon: Shield,
    color: "text-emerald-400"
  }
];

export default function Features() {
  return (
    <section id="vision" className="py-24 bg-zinc-950 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-emerald-500/30 transition-all group"
            >
              <f.icon className={cn("w-10 h-10 mb-6 transition-transform group-hover:scale-110", f.color)} />
              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
