import { motion } from "motion/react";
import { Leaf, Cpu, Shield, Zap } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
            <Leaf className="text-black w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white">EcoBit<span className="text-emerald-500">.org</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <a href="#vision" className="hover:text-emerald-400 transition-colors">Vision</a>
          <a href="#stamps" className="hover:text-emerald-400 transition-colors">Stamps</a>
          <a href="#ordinals" className="hover:text-emerald-400 transition-colors">AI Ordinals</a>
          <a href="#network" className="hover:text-emerald-400 transition-colors">Network</a>
        </div>

        <button className="bg-emerald-500 hover:bg-emerald-400 text-black px-4 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95">
          Join the IPO
        </button>
      </div>
    </nav>
  );
}
