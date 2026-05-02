import React from "react";
import { Header } from "./components/Header";
import { TradePanel } from "./components/TradePanel";
import { TradingChart } from "./components/TradingChart";
import { OrderBook } from "./components/OrderBook";
import { StatsBar } from "./components/StatsBar";
import { TransactionPanel } from "./components/TransactionPanel";
import { AlertCircle } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-main text-white selection:bg-blue-500/30 flex flex-col">
      <Header />
      <StatsBar />

      <main className="flex-1 terminal-grid max-w-[1600px] mx-auto w-full">
        {/* Left/Main Column: Chart & Info */}
        <div className="flex flex-col gap-3 min-h-0">
          {/* Warning Banner */}
          <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-3 flex items-start gap-3">
            <AlertCircle className="text-yellow-500 shrink-0 mt-0.5" size={16} />
            <p className="text-[10px] font-bold text-yellow-500/80 uppercase tracking-wider">
              Testnet environment active. Assets have no real-world value. Trading is for simulation purposes.
            </p>
          </div>

          <div className="flex-1 min-h-0">
            <TradingChart />
          </div>

          <div className="h-[250px]">
            <TransactionPanel />
          </div>
        </div>

        {/* Right Column: Execution & Book */}
        <div className="flex flex-col gap-3 min-h-0">
          <TradePanel />
          <div className="flex-1 min-h-0">
            <OrderBook />
          </div>
        </div>
      </main>

      <footer className="h-8 border-t border-white/5 flex items-center justify-between px-4 text-[10px] font-bold text-white/20 uppercase tracking-widest">
        <div>© 2026 ArcFX Protocol</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">Status: Normal</a>
          <a href="#" className="hover:text-white">Latency: 12ms</a>
          <a href="#" className="hover:text-white">TPS: 1,420</a>
        </div>
      </footer>
    </div>
  );
}
