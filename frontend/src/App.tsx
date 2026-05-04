import React, { useState } from 'react';
import { Header } from './components/Header';
import { SwapCard } from './components/SwapCard';
import { Dashboard } from './components/Dashboard';
import { useAccount } from 'wagmi';

function App() {
  const { isConnected } = useAccount();
  const [slippage, setSlippage] = useState('0.5');

  return (
    <div className="min-h-screen bg-[#060607] text-white selection:bg-blue-500/30">
      <Header />
      
      <main className="pt-24 px-4 max-w-7xl mx-auto pb-20">
        {!isConnected ? (
          <div className="flex flex-col items-center justify-center min-h-[60vh] animate-in fade-in zoom-in duration-700">
            <div className="w-24 h-24 rounded-full bg-blue-500/10 flex items-center justify-center mb-8 border border-blue-500/20 shadow-[0_0_50px_rgba(59,130,246,0.15)]">
               <div className="w-12 h-12 rounded-full bg-blue-500 animate-pulse shadow-[0_0_30px_rgba(59,130,246,0.8)]" />
            </div>
            <h1 className="text-4xl font-black mb-4 tracking-tighter text-center bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
              THE FUTURE OF GLOBAL FX
            </h1>
            <p className="text-white/40 text-sm font-bold uppercase tracking-[0.4em] text-center max-w-md leading-loose">
              Connect your wallet to enter the next generation stablecoin ecosystem.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {/* Swap Section - Centered and Hero */}
            <div className="flex justify-center py-8">
              <SwapCard slippage={slippage} setSlippage={setSlippage} />
            </div>

            {/* Dashboard Section - Below Swap */}
            <div className="border-t border-white/5 pt-12">
              <Dashboard />
            </div>
          </div>
        )}
      </main>

      {/* Footer / Info */}
      <footer className="fixed bottom-6 right-6 flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.3em] text-white/10 pointer-events-none">
        <span>ArcFX Protocol v1.0.2</span>
        <div className="w-1 h-1 rounded-full bg-blue-500/40" />
        <span>Mainnet Alpha</span>
      </footer>
    </div>
  );
}

export default App;
