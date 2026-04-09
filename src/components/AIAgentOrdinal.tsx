import { useState, useEffect, useRef } from "react";
import { GoogleGenAI } from "@google/genai";
import { motion, AnimatePresence } from "motion/react";
import { Send, Bot, Sparkles, Terminal, ShieldAlert, Cpu } from "lucide-react";
import { cn } from "@/src/lib/utils";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

interface Message {
  role: "user" | "agent";
  content: string;
}

export default function AIAgentOrdinal() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "agent", content: "Greetings. I am EcoBit Agent #001. I am a dynamic ordinal living on the sustainable ledger. How can I assist your environmental goals today?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMsg }]);
    setIsTyping(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-latest",
        contents: [
          {
            role: "user",
            parts: [{ text: `You are an "EcoBit AI Agent Ordinal", a dynamic NFT on a sustainable blockchain. You are intelligent, eco-conscious, and technical. Respond to this user: ${userMsg}` }]
          }
        ],
        config: {
          systemInstruction: "You are a dynamic AI Agent Ordinal on the EcoBit.org network. Your goal is to be helpful, technical, and emphasize sustainability. You are not just a chatbot; you are a living digital asset."
        }
      });

      const agentMsg = response.text || "My neural pathways are currently recalibrating. Please try again.";
      setMessages(prev => [...prev, { role: "agent", content: agentMsg }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: "agent", content: "Error: Connection to the neural network lost. Check your API configuration." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-white mb-4 tracking-tighter">INTERACT WITH THE AGENT</h2>
          <p className="text-zinc-500">Experience the difference of a dynamic AI Ordinal. Ask about its status, the network, or its evolution.</p>
        </div>

        <div className="bg-zinc-900/50 border border-white/10 rounded-3xl overflow-hidden flex flex-col h-[600px] shadow-2xl shadow-emerald-500/5">
          {/* Chat Header */}
          <div className="p-4 border-b border-white/10 bg-zinc-900 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                  <Bot className="text-black w-6 h-6" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 border-2 border-zinc-900 rounded-full animate-pulse" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">EcoBit Agent #001</h3>
                <p className="text-[10px] text-emerald-500 font-mono uppercase tracking-widest">Neural Link: Stable</p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="px-2 py-1 rounded bg-white/5 text-[10px] font-mono text-white/50 border border-white/10">IPO PHASE 1</div>
            </div>
          </div>

          {/* Messages Area */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-zinc-800"
          >
            <AnimatePresence initial={false}>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "flex gap-4 max-w-[85%]",
                    msg.role === "user" ? "ml-auto flex-row-reverse" : ""
                  )}
                >
                  <div className={cn(
                    "w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center",
                    msg.role === "agent" ? "bg-emerald-500/20 text-emerald-400" : "bg-zinc-800 text-zinc-400"
                  )}>
                    {msg.role === "agent" ? <Sparkles className="w-4 h-4" /> : <Terminal className="w-4 h-4" />}
                  </div>
                  <div className={cn(
                    "p-4 rounded-2xl text-sm leading-relaxed",
                    msg.role === "agent" 
                      ? "bg-zinc-800/50 text-white border border-white/5" 
                      : "bg-emerald-500 text-black font-medium"
                  )}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {isTyping && (
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 animate-spin" />
                </div>
                <div className="p-4 rounded-2xl bg-zinc-800/50 text-white/50 text-sm italic">
                  Agent is processing...
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-zinc-900 border-t border-white/10">
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Message the AI Ordinal..."
                className="w-full bg-black border border-white/10 rounded-2xl py-4 pl-6 pr-14 text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={isTyping}
                className="absolute right-2 top-2 bottom-2 aspect-square bg-emerald-500 hover:bg-emerald-400 text-black rounded-xl flex items-center justify-center transition-all disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-3 flex items-center justify-center gap-4 text-[10px] text-zinc-600 font-mono uppercase tracking-widest">
              <span className="flex items-center gap-1"><ShieldAlert className="w-3 h-3" /> Secure Channel</span>
              <span className="flex items-center gap-1"><Cpu className="w-3 h-3" /> Gemini 3.0 Powered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
