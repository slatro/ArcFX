import React, { useState } from 'react';
import { Logo } from './Logo';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { LayoutDashboard, ArrowLeftRight, Droplets, Globe, ShieldCheck } from 'lucide-react';

export const Header = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 border-b border-white/[0.04] bg-[#060607]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Logo />
          
          {/* Navigation Tabs - Re-integrated */}
          <nav className="hidden lg:flex items-center p-1 bg-white/[0.03] border border-white/5 rounded-2xl">
            {[
              { id: 'dashboard', label: 'DASHBOARD', icon: LayoutDashboard },
              { id: 'swap', label: 'SWAP', icon: ArrowLeftRight },
              { id: 'pools', label: 'POOLS', icon: Droplets },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-2 rounded-xl text-[10px] font-black transition-all tracking-[0.2em] ${
                  activeTab === tab.id 
                  ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.1)]' 
                  : 'text-white/30 hover:text-white'
                }`}
              >
                <tab.icon size={12} />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-4 px-4 py-2 rounded-2xl bg-white/[0.03] border border-white/5">
            <div className="flex items-center gap-2 text-[9px] font-black text-white/30 uppercase tracking-[0.2em]">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
              <span>Arc Testnet</span>
            </div>
          </div>
          <ConnectButton chainStatus="none" showBalance={true} />
        </div>
      </div>
    </header>
  );
};
