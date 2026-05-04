import React from 'react';
import { Logo } from './Logo';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Globe, ShieldCheck, Zap } from 'lucide-react';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 border-b border-white/[0.04] bg-[#060607]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Logo />
          
          <div className="hidden md:flex items-center gap-6">
            <div className="h-4 w-px bg-white/10" />
            <div className="flex items-center gap-2 text-[9px] font-black text-white/30 uppercase tracking-[0.2em]">
              <Globe size={12} className="text-blue-500/50" />
              <span>Multi-Currency Active</span>
            </div>
            <div className="flex items-center gap-2 text-[9px] font-black text-white/30 uppercase tracking-[0.2em]">
              <ShieldCheck size={12} className="text-emerald-500/50" />
              <span>Secure Layer</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/[0.03] border border-white/5">
            <div className="flex flex-col items-end">
              <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">Network</span>
              <span className="text-[10px] font-black text-white uppercase tracking-tighter">Arc Testnet</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
          </div>
          
          <ConnectButton />
        </div>
      </div>
    </header>
  );
};
