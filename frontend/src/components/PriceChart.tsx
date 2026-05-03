import React from 'react';

export const PriceChart = () => {
  // Pure SVG Path for a beautiful price curve
  const chartPath = "M0 80 Q 50 70, 100 90 T 200 40 T 300 60 T 400 20 T 500 50";
  const areaPath = `${chartPath} L 500 120 L 0 120 Z`;

  return (
    <div className="premium-card p-6 h-[460px] flex flex-col gap-6 animate-fade-in">
      {/* Chart Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex -space-x-3">
            <div className="w-9 h-9 rounded-full border-2 border-[#03040b] bg-slate-800 flex items-center justify-center shadow-lg">
              <span className="text-xs font-bold">€</span>
            </div>
            <div className="w-9 h-9 rounded-full border-2 border-[#03040b] bg-blue-600 flex items-center justify-center shadow-lg">
              <span className="text-xs font-bold">$</span>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-widest">mEURC / mUSDC</h3>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-[10px] text-white/30 font-bold uppercase tracking-tighter">Live Market Data</p>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-black font-mono text-white tracking-tighter">1.0838</div>
          <div className="text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-md inline-block mt-1">+0.12% (24h)</div>
        </div>
      </div>

      {/* SVG Chart Area */}
      <div className="flex-1 relative mt-4 overflow-hidden rounded-2xl bg-white/[0.01] border border-white/[0.03]">
        <svg viewBox="0 0 500 120" className="w-full h-full preserve-3d" preserveAspectRatio="none">
          <defs>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          
          {/* Grid Lines */}
          {[20, 40, 60, 80, 100].map((y) => (
            <line key={y} x1="0" y1={y} x2="500" y2={y} stroke="white" strokeOpacity="0.03" strokeWidth="0.5" />
          ))}

          {/* Area Fill */}
          <path d={areaPath} fill="url(#areaGradient)" />
          
          {/* Main Price Line */}
          <path 
            d={chartPath} 
            fill="none" 
            stroke="#3B82F6" 
            strokeWidth="3" 
            strokeLinecap="round" 
            filter="url(#glow)"
          />

          {/* Moving Indicator Dot */}
          <circle cx="500" cy="50" r="4" fill="#3B82F6" filter="url(#glow)">
            <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>

        {/* Floating Price Tooltip (Mock) */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 p-2 rounded-xl bg-slate-900/90 border border-white/10 backdrop-blur-md shadow-2xl">
          <div className="text-[9px] font-bold text-white/40 uppercase mb-1">Price at 16:00</div>
          <div className="text-xs font-mono font-bold text-blue-400">1.0828</div>
        </div>
      </div>

      {/* Chart Footer / Selectors */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          {['1H', '1D', '1W', '1M', '1Y'].map((t) => (
            <button 
              key={t} 
              className={`text-[10px] font-bold tracking-widest transition-colors ${t === '1D' ? 'text-blue-400' : 'text-white/20 hover:text-white/40'}`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4 text-[10px] font-bold text-white/20 uppercase tracking-widest">
          <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Price</span>
          <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-white/10" /> EMA 20</span>
        </div>
      </div>
    </div>
  );
};
