import React from 'react';
import { ExternalLink, RefreshCw, ArrowDown, Plus } from 'lucide-react';

export const TransactionPanel = () => {
  const transactions = [
    { type: 'Swap', status: 'confirmed', hash: '0x123...456', amount: '100 mUSDC -> 91.8 mEURC', time: '2m ago' },
    { type: 'Mint', status: 'confirmed', hash: '0xabc...def', amount: '1,000 mUSDC', time: '10m ago' },
    { type: 'Add Liquidity', status: 'pending', hash: '0x789...012', amount: '500 mUSDC / 460 mEURC', time: 'Just now' },
  ];

  return (
    <div className="premium-card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/[0.05] bg-white/[0.01]">
              <th className="px-8 py-5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/20">Time</th>
              <th className="px-8 py-5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/20">Pair</th>
              <th className="px-8 py-5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/20">Side</th>
              <th className="px-8 py-5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/20">Price</th>
              <th className="px-8 py-5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/20">Amount</th>
              <th className="px-8 py-5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/20 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.05]">
            {[
              { time: "14:20:12", pair: "mUSDC / mEURC", side: "BUY", price: "1.0848", amount: "1,200.00", status: "Success" },
              { time: "14:18:45", pair: "mUSDC / mEURC", side: "SELL", price: "1.0845", amount: "450.00", status: "Success" },
              { time: "14:15:22", pair: "mUSDC / mEURC", side: "BUY", price: "1.0842", amount: "2,100.00", status: "Success" },
              { time: "14:12:10", pair: "mUSDC / mEURC", side: "BUY", price: "1.0844", amount: "890.00", status: "Success" },
            ].map((tx, i) => (
              <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                <td className="px-8 py-6 text-sm font-medium text-white/30">{tx.time}</td>
                <td className="px-8 py-6 text-sm font-bold text-white/90">{tx.pair}</td>
                <td className="px-8 py-6">
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-md ${tx.side === 'BUY' ? 'bg-blue-500/10 text-blue-400' : 'bg-purple-500/10 text-purple-400'}`}>
                    {tx.side}
                  </span>
                </td>
                <td className="px-8 py-6 text-sm font-mono font-medium text-white/60">{tx.price}</td>
                <td className="px-8 py-6 text-sm font-bold text-white">{tx.amount}</td>
                <td className="px-8 py-6 text-right">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <div className="w-1 h-1 rounded-full bg-emerald-500" />
                    <span className="text-[10px] font-bold text-emerald-500 uppercase">Confirmed</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
