import React from 'react';
import { Activity, ShieldCheck, Zap } from 'lucide-react';

export const StatsBar = () => {
  return (
    <div className="flex items-center gap-6 px-4 py-2 bg-white/5 border-b border-white/5 overflow-x-auto no-scrollbar">
      <div className="flex items-center gap-2 whitespace-nowrap">
        <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
        <span className="text-[10px] font-bold uppercase text-white/40">Network Status:</span>
        <span className="text-[10px] font-mono text-success">Arc Testnet Live</span>
      </div>

      <div className="h-4 w-px bg-white/10" />

      {[
        { label: "24h Volume", value: "$4.82M", icon: Activity, color: "text-blue-400" },
        { label: "Total TVL", value: "$12.4M", icon: ShieldCheck, color: "text-emerald-400" },
        { label: "Avg. Gas", value: "0.0001 USDC", icon: Zap, color: "text-yellow-400" },
      ].map((stat, i) => (
        <div key={i} className="flex items-center gap-2 whitespace-nowrap">
          <stat.icon size={12} className={stat.color} />
          <span className="text-[10px] font-bold uppercase text-white/40">{stat.label}:</span>
          <span className="text-[10px] font-mono text-white">{stat.value}</span>
        </div>
      ))}

      <div className="flex-1" />

      <div className="flex items-center gap-4 text-[10px] font-bold text-white/30">
        <span>Slippage: 0.5%</span>
        <span>Version: v2.0.0-terminal</span>
      </div>
    </div>
  );
};
