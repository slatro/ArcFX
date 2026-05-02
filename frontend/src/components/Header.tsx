import React, { useState } from 'react';
import { Logo } from './Logo';

export const Header = () => {
  const [address, setAddress] = useState("");
  const mockConnect = () => setAddress("0x71C...3912");

  return (
    <header className="h-14 border-b border-white/5 bg-main backdrop-blur-xl z-50">
      <div className="max-w-[1600px] mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Logo />
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-xs font-bold text-white uppercase tracking-wider hover:text-blue-400 transition-colors">Trade</a>
            <a href="#" className="text-xs font-bold text-white/40 uppercase tracking-wider hover:text-white transition-colors">Pools</a>
            <a href="#" className="text-xs font-bold text-white/40 uppercase tracking-wider hover:text-white transition-colors">Stats</a>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] font-bold text-blue-400 uppercase">Arc Testnet</span>
          </div>
          
          <button 
            onClick={mockConnect}
            className={`h-9 px-4 rounded-lg text-xs font-bold transition-all duration-300 ${
              address ? "bg-white/5 text-white border border-white/10" : "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20"
            }`}
          >
            {address || "Connect Wallet"}
          </button>
        </div>
      </div>
    </header>
  );
};
