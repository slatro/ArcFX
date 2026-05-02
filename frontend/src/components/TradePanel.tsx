import React, { useState } from 'react';
import { ArrowDownUp, Info, Zap } from 'lucide-react';

export const TradePanel = () => {
  const [mode, setMode] = useState<'buy' | 'sell'>('buy');
  
  return (
    <div className="glass-panel p-5 flex flex-col gap-6">
      <div className="flex gap-2 p-1 bg-white/5 rounded-xl">
        <button 
          onClick={() => setMode('buy')}
          className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${mode === 'buy' ? 'bg-success text-white shadow-lg shadow-success/20' : 'text-white/40 hover:text-white'}`}
        >
          Buy mUSDC
        </button>
        <button 
          onClick={() => setMode('sell')}
          className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${mode === 'sell' ? 'bg-danger text-white shadow-lg shadow-danger/20' : 'text-white/40 hover:text-white'}`}
        >
          Sell mUSDC
        </button>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-bold text-white/40">
            <span>Pay With</span>
            <span>Balance: 2,450.00</span>
          </div>
          <div className="trading-input-container">
            <div className="flex items-center justify-between">
              <input type="number" className="trading-input" placeholder="0.00" />
              <div className="flex items-center gap-2 px-2 py-1 bg-white/5 rounded-lg border border-white/5">
                <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-[10px] font-bold">€</div>
                <span className="text-sm font-bold">mEURC</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center -my-2 relative z-10">
          <button className="w-8 h-8 rounded-full bg-[#1e2235] border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-blue-500/50 transition-all">
            <ArrowDownUp size={14} />
          </button>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-xs font-bold text-white/40">
            <span>Receive (Estimated)</span>
            <span>Balance: 1,200.00</span>
          </div>
          <div className="trading-input-container">
            <div className="flex items-center justify-between">
              <input type="number" className="trading-input" placeholder="0.00" readOnly />
              <div className="flex items-center gap-2 px-2 py-1 bg-white/5 rounded-lg border border-white/5">
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-[10px] font-bold">$</div>
                <span className="text-sm font-bold">mUSDC</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3 bg-white/5 rounded-xl p-4 border border-white/5">
        <div className="flex justify-between text-xs font-medium text-white/40">
          <div className="flex items-center gap-1">Price <Info size={12} /></div>
          <span className="font-mono text-white">1.0848 EURC/USDC</span>
        </div>
        <div className="flex justify-between text-xs font-medium text-white/40">
          <div className="flex items-center gap-1">Slippage <Info size={12} /></div>
          <span className="font-mono text-white">0.5%</span>
        </div>
        <div className="flex justify-between text-xs font-medium text-white/40">
          <div className="flex items-center gap-1">Protocol Fee <Info size={12} /></div>
          <span className="font-mono text-white">0.03%</span>
        </div>
      </div>

      <button className={`btn-trading ${mode === 'buy' ? 'btn-buy' : 'btn-sell'}`}>
        <Zap size={18} fill="currentColor" />
        {mode === 'buy' ? 'Execute Buy Order' : 'Execute Sell Order'}
      </button>

      <p className="text-[10px] text-center text-white/20 font-medium">
        Transactions are instant on Arc Testnet.
      </p>
    </div>
  );
};
