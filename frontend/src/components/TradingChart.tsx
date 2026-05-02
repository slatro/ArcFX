import React from 'react';

export const TradingChart = () => {
  // Mock price data for the chart
  const data = [40, 35, 45, 42, 55, 48, 65, 60, 75, 72, 85, 80, 95, 90, 100, 95, 110, 105, 115];
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min;
  
  const width = 800;
  const height = 400;
  const padding = 40;
  
  const points = data.map((val, i) => {
    const x = padding + (i * (width - 2 * padding)) / (data.length - 1);
    const y = height - padding - ((val - min) * (height - 2 * padding)) / range;
    return `${x},${y}`;
  }).join(' ');

  const areaPoints = `
    ${padding},${height - padding} 
    ${points} 
    ${width - padding},${height - padding}
  `;

  return (
    <div className="glass-panel p-6 h-full flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-bold">mUSDC / mEURC</h2>
          <span className="text-success font-mono font-bold">+2.45%</span>
        </div>
        <div className="flex gap-2">
          {['1H', '4H', '1D', '1W'].map((t) => (
            <button key={t} className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${t === '1H' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' : 'text-white/40 hover:text-white'}`}>
              {t}
            </button>
          ))}
        </div>
      </div>
      
      <div className="flex-1 relative min-h-[300px]">
        <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Grid Lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((p) => (
            <line 
              key={p}
              x1={padding} 
              y1={padding + p * (height - 2 * padding)} 
              x2={width - padding} 
              y2={padding + p * (height - 2 * padding)} 
              stroke="white" 
              strokeOpacity="0.05" 
              strokeWidth="1"
            />
          ))}

          {/* Area */}
          <polyline points={areaPoints} fill="url(#chartGradient)" />
          
          {/* Line */}
          <polyline points={points} fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinejoin="round" />
          
          {/* Last Point pulse */}
          <circle cx={width - padding} cy={height - padding - ((data[data.length - 1] - min) * (height - 2 * padding)) / range} r="4" fill="#3b82f6" className="animate-pulse" />
        </svg>
      </div>

      <div className="flex items-center justify-between text-xs font-medium text-white/30 border-t border-white/5 pt-4">
        <div className="flex gap-6">
          <div className="flex flex-col">
            <span>24h High</span>
            <span className="text-white font-mono">1.0924</span>
          </div>
          <div className="flex flex-col">
            <span>24h Low</span>
            <span className="text-white font-mono">1.0845</span>
          </div>
          <div className="flex flex-col">
            <span>24h Vol</span>
            <span className="text-white font-mono">2.4M USDC</span>
          </div>
        </div>
        <div className="text-blue-400 font-bold tracking-widest uppercase">Live Trading Active</div>
      </div>
    </div>
  );
};
