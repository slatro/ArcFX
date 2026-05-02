import React from "react";
import { Header } from "./components/Header";
import { SwapCard } from "./components/SwapCard";
import { TransactionPanel } from "./components/TransactionPanel";
import { Info, Shield, Zap } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-glow" />
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 relative">
        {/* Background Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="w-full max-w-[480px] space-y-8 animate-fade-in">
          {/* Hero Text */}
          <div className="text-center space-y-3">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
              Trade with Arc
            </h1>
            <p className="text-text-muted font-medium">
              Seamlessly swap stablecoins on the Arc Testnet.
            </p>
          </div>

          <SwapCard />

          {/* Quick Stats / Info */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "Slippage", value: "0.1%", icon: Zap },
              { label: "Network", value: "Arc", icon: Shield },
              { label: "Fee", value: "0.03%", icon: Info },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-1.5 py-3 px-2 bg-white/[0.02] border border-white/[0.05] rounded-2xl">
                <item.icon size={14} className="text-white/20" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">{item.label}</span>
                <span className="text-xs font-bold text-white/80">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Transaction History - More subtle */}
        <div className="w-full max-w-4xl mt-24">
          <div className="flex items-center justify-between mb-8 px-4">
            <h2 className="text-xl font-bold">Recent Activity</h2>
            <div className="h-px flex-1 bg-white/[0.05] mx-6" />
            <span className="text-sm font-medium text-white/20">Updated just now</span>
          </div>
          <TransactionPanel />
        </div>
      </main>

      <footer className="py-12 px-6 border-t border-white/[0.05] mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-white/40">Arc Testnet Status: Operational</span>
          </div>
          <div className="flex gap-8 text-[11px] font-bold uppercase tracking-widest text-white/20">
            <a href="#" className="hover:text-white transition-colors">Documentation</a>
            <a href="#" className="hover:text-white transition-colors">Arcscan</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
