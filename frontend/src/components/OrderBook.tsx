import React from 'react';

export const OrderBook = () => {
  const asks = [
    { price: 1.0852, size: 12450, total: 12450 },
    { price: 1.0851, size: 8200, total: 20650 },
    { price: 1.0850, size: 15100, total: 35750 },
    { price: 1.0849, size: 5400, total: 41150 },
    { price: 1.0848, size: 9800, total: 50950 },
  ];

  const bids = [
    { price: 1.0845, size: 14200, total: 14200 },
    { price: 1.0844, size: 6800, total: 21000 },
    { price: 1.0843, size: 11200, total: 32200 },
    { price: 1.0842, size: 19500, total: 51700 },
    { price: 1.0841, size: 7300, total: 59000 },
  ];

  return (
    <div className="glass-panel p-4 h-full flex flex-col gap-4 overflow-hidden">
      <div className="flex items-center justify-between border-b border-white/5 pb-2">
        <h3 className="text-sm font-bold uppercase tracking-wider text-white/60">Order Book</h3>
        <span className="text-[10px] font-mono text-white/20">mUSDC/mEURC</span>
      </div>

      <div className="flex-1 flex flex-col gap-1 overflow-y-auto pr-1">
        {/* Asks (Sell) */}
        <div className="space-y-1">
          {asks.reverse().map((ask, i) => (
            <div key={i} className="flex justify-between text-xs font-mono relative group cursor-pointer hover:bg-white/5 py-0.5 px-1 rounded transition-colors">
              <div 
                className="absolute right-0 top-0 bottom-0 bg-danger/10 group-hover:bg-danger/20 transition-all" 
                style={{ width: `${(ask.size / 20000) * 100}%` }}
              />
              <span className="text-danger relative z-10">{ask.price.toFixed(4)}</span>
              <span className="text-white/60 relative z-10">{ask.size.toLocaleString()}</span>
            </div>
          ))}
        </div>

        {/* Spread */}
        <div className="py-2 border-y border-white/5 my-1 flex justify-between items-center px-1">
          <span className="text-lg font-bold font-mono">1.0848</span>
          <span className="text-[10px] text-white/30 font-medium">Spread 0.0003</span>
        </div>

        {/* Bids (Buy) */}
        <div className="space-y-1">
          {bids.map((bid, i) => (
            <div key={i} className="flex justify-between text-xs font-mono relative group cursor-pointer hover:bg-white/5 py-0.5 px-1 rounded transition-colors">
              <div 
                className="absolute right-0 top-0 bottom-0 bg-success/10 group-hover:bg-success/20 transition-all" 
                style={{ width: `${(bid.size / 20000) * 100}%` }}
              />
              <span className="text-success relative z-10">{bid.price.toFixed(4)}</span>
              <span className="text-white/60 relative z-10">{bid.size.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
