import React from 'react';
import { ExternalLink, RefreshCw, ArrowDown, Plus } from 'lucide-react';

export const TransactionPanel = () => {
  const transactions = [
    { type: 'Swap', status: 'confirmed', hash: '0x123...456', amount: '100 mUSDC -> 91.8 mEURC', time: '2m ago' },
    { type: 'Mint', status: 'confirmed', hash: '0xabc...def', amount: '1,000 mUSDC', time: '10m ago' },
    { type: 'Add Liquidity', status: 'pending', hash: '0x789...012', amount: '500 mUSDC / 460 mEURC', time: 'Just now' },
  ];

  return (
    <div className="glass-panel p-4 h-full flex flex-col gap-4 overflow-hidden">
      <div className="flex items-center justify-between border-b border-white/5 pb-2">
        <div className="flex gap-4">
          <button className="text-[10px] font-bold uppercase tracking-wider text-white">Recent Trades</button>
          <button className="text-[10px] font-bold uppercase tracking-wider text-white/40 hover:text-white">Your Orders</button>
        </div>
        <span className="text-[10px] font-mono text-white/20">Live Sync</span>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar">
        <table className="w-full text-left">
          <thead>
            <tr className="text-[10px] font-bold text-white/30 uppercase tracking-wider">
              <th className="pb-2 font-medium">Time</th>
              <th className="pb-2 font-medium">Pair</th>
              <th className="pb-2 font-medium">Side</th>
              <th className="pb-2 font-medium">Price</th>
              <th className="pb-2 font-medium">Amount</th>
              <th className="pb-2 font-medium text-right">Status</th>
            </tr>
          </thead>
          <tbody className="text-[11px] font-mono">
            {[
              { time: "14:20:12", pair: "mUSDC/mEURC", side: "BUY", price: "1.0848", amount: "1,200.00", status: "Success" },
              { time: "14:18:45", pair: "mUSDC/mEURC", side: "SELL", price: "1.0845", amount: "450.00", status: "Success" },
              { time: "14:15:22", pair: "mUSDC/mEURC", side: "BUY", price: "1.0842", amount: "2,100.00", status: "Success" },
              { time: "14:12:10", pair: "mUSDC/mEURC", side: "BUY", price: "1.0844", amount: "890.00", status: "Success" },
            ].map((tx, i) => (
              <tr key={i} className="border-t border-white/5 hover:bg-white/5 transition-colors group">
                <td className="py-2 text-white/40">{tx.time}</td>
                <td className="py-2 font-bold text-white/80">{tx.pair}</td>
                <td className={`py-2 font-bold ${tx.side === 'BUY' ? 'text-success' : 'text-danger'}`}>{tx.side}</td>
                <td className="py-2 text-white">{tx.price}</td>
                <td className="py-2 text-white">{tx.amount}</td>
                <td className="py-2 text-right">
                  <span className="px-2 py-0.5 rounded bg-success/10 text-success text-[9px] font-bold uppercase">Settled</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
