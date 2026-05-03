import React from "react";
import { Header } from "./components/Header";
import { LogoIcon } from "./components/LogoIcon";
import { SwapCard } from "./components/SwapCard";
import { PriceChart } from "./components/PriceChart";
import { TransactionPanel } from "./components/TransactionPanel";
import { Zap } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-500/30">
      <div className="bg-glow" />
      <Header />
      
      {/* Restructured Top Info Bar */}
      <div className="bg-white/[0.02] border-b border-white/[0.05] py-3 px-6">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4">
          {/* Left: Protocol Status */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-2 py-0.5 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <Zap size={10} className="text-blue-400" />
              <span className="text-[9px] font-extrabold text-blue-400 uppercase tracking-widest">v2.0 Active</span>
            </div>
            <div className="h-4 w-px bg-white/10 hidden md:block" />
            <p className="text-[10px] text-white/20 font-medium hidden md:block uppercase tracking-wider">
              Institutional stablecoin settlement.
            </p>
          </div>

          {/* Right: Arc Ecosystem Section (Moved from Side) */}
          <div className="flex items-center gap-3 bg-white/[0.03] px-3 py-1.5 rounded-xl border border-white/[0.05]">
            <img 
              src="/assets/logo-final.png" 
              alt="Arc" 
              className="w-5 h-5 mix-blend-screen" 
              style={{ 
                filter: 'contrast(1.6) brightness(0.85)',
                maskImage: 'radial-gradient(circle, black 60%, transparent 95%)',
                WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 95%)'
              }}
            />
            <span className="text-[11px] font-bold uppercase tracking-widest text-white/60">Arc Ecosystem</span>
          </div>
        </div>
      </div>

      <main className="flex-1 flex flex-col items-center relative py-8 px-6">
        {/* Decorative Background Beams */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[120%] bg-blue-500/5 blur-[120px] rotate-12" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[120%] bg-purple-500/5 blur-[120px] -rotate-12" />
        </div>

        {/* Professional 2-Column Layout */}
        <div className="w-full max-w-[1400px] grid grid-cols-1 xl:grid-cols-[1fr_460px] gap-8 items-start">
          
          {/* Left: Dynamic Price Chart */}
          <PriceChart />

          {/* Right: Main Swap Card */}
          <div className="flex flex-col items-center animate-fade-in-right">
            <SwapCard />
            
            <div className="mt-8 flex gap-4 w-full">
              {[
                { label: "Slippage", value: "0.1%" },
                { label: "Fee", value: "0.03%" },
                { label: "Stability", value: "99.9%" },
              ].map((item, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1 px-4 py-3 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                  <span className="text-[8px] font-extrabold uppercase tracking-widest text-white/20">{item.label}</span>
                  <span className="text-[10px] font-bold text-white/60">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Transaction History Section */}
        <div className="w-full max-w-[1400px] mt-16">
          <div className="flex items-center justify-between mb-6 px-4">
            <div className="flex items-center gap-3">
              <h2 className="text-lg font-bold tracking-tight">Market Activity</h2>
            </div>
            <div className="h-px flex-1 bg-white/[0.05] mx-8" />
            <button className="text-[10px] font-bold text-blue-400 hover:text-white transition-colors uppercase tracking-widest">
              Live Scanner
            </button>
          </div>
          <TransactionPanel />
        </div>
      </main>

      <footer className="py-12 px-8 border-t border-white/[0.05] bg-white/[0.01]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-xs font-bold text-white uppercase tracking-widest">ArcFX Protocol</span>
            </div>
            <p className="text-[10px] text-white/20 font-medium max-w-xs uppercase tracking-wider">
              Institutional stablecoin settlement.
            </p>
          </div>
          <div className="flex gap-12 text-[10px] font-bold uppercase tracking-widest text-white/20">
            <a href="#" className="hover:text-white transition-colors">Docs</a>
            <a href="#" className="hover:text-white transition-colors">Arcscan</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
