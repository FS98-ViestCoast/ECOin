/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import NFTShowcase from "./components/NFTShowcase";
import AIAgentOrdinal from "./components/AIAgentOrdinal";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-500 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <NFTShowcase />
        <AIAgentOrdinal />
      </main>
      
      <footer className="py-12 border-t border-white/5 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-emerald-500 rounded flex items-center justify-center">
              <span className="text-black font-bold text-xs">E</span>
            </div>
            <span className="font-bold text-lg tracking-tight">EcoBit<span className="text-emerald-500">.org</span></span>
          </div>
          
          <div className="flex gap-8 text-xs font-mono text-zinc-600 uppercase tracking-widest">
            <span>© 2026 EcoBit Foundation</span>
            <a href="#" className="hover:text-emerald-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Terms</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

