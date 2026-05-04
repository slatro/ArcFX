import React, { useState, useEffect } from 'react';
import { ChevronDown, Globe, Menu, ShieldCheck, Wallet, Loader2 } from 'lucide-react';
import { useAccount, useConnect, useReadContract } from 'wagmi';
import { formatUnits } from 'viem';
import { Logo } from './Logo';
import { ProfileModal, AVATARS } from './ProfileModal';
import { CONTRACT_ADDRESSES } from '../config/contracts';
import ERC20_ABI from '../abis/ERC20.json';

export const Header = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) => {
  const { address, isConnected } = useAccount();
  const { connect, connectors, isPending } = useConnect();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(AVATARS[0]);

  // Persist avatar selection
  useEffect(() => {
    const saved = localStorage.getItem('arc_avatar');
    if (saved) setSelectedAvatar(saved);
  }, []);

  const handleSetAvatar = (url: string) => {
    setSelectedAvatar(url);
    localStorage.setItem('arc_avatar', url);
  };

  const { data: balanceUSDC } = useReadContract({
    address: CONTRACT_ADDRESSES.mUSDC as `0x${string}`,
    abi: ERC20_ABI,
    functionName: 'balanceOf',
    args: address ? [address] : undefined,
    query: { enabled: !!address }
  });

  const formattedBalance = balanceUSDC ? parseFloat(formatUnits(balanceUSDC as bigint, 6)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '0.00';

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-12 pointer-events-auto">
          <Logo />
          
          <nav className="flex items-center p-1 bg-white/[0.03] border border-white/5 backdrop-blur-md rounded-2xl">
            {['dashboard', 'swap', 'pools'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                  activeTab === tab 
                    ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]" 
                    : "text-white/40 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4 pointer-events-auto">
          <div className="hidden lg:flex items-center gap-6 mr-4 opacity-40 hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
              <span className="text-[9px] font-bold text-white uppercase tracking-widest">Network: <span className="text-white/80">Arc Testnet</span></span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={12} className="text-emerald-500" />
              <span className="text-[9px] font-bold text-white uppercase tracking-widest">Secure Layer</span>
            </div>
          </div>

          {!isConnected ? (
            <button 
              onClick={() => connect({ connector: connectors[0] })}
              disabled={isPending}
              className="px-6 py-3 rounded-2xl bg-white text-black font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/50 disabled:opacity-50"
            >
              {isPending ? <Loader2 size={14} className="animate-spin" /> : <Wallet size={14} />}
              {isPending ? 'Connecting...' : 'Connect Wallet'}
            </button>
          ) : (
            <button 
              onClick={() => setIsProfileOpen(true)}
              className="group flex items-center h-12 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/30 hover:bg-white/[0.06] transition-all pl-5 pr-2 gap-4 backdrop-blur-xl"
            >
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-black text-white leading-none mb-1">{formattedBalance} <span className="text-blue-400">USDC</span></span>
                <span className="text-[8px] font-bold text-white/30 uppercase tracking-tighter">Verified Member</span>
              </div>
              
              <div className="h-6 w-px bg-white/10" />
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border border-white/10 p-0.5 bg-black/40 group-hover:scale-110 transition-transform">
                  <img src={selectedAvatar} alt="Profile" className="w-full h-full rounded-full" />
                </div>
                <div className="flex flex-col items-start pr-2">
                  <span className="text-[10px] font-bold text-white/80">{address?.slice(0, 4)}...{address?.slice(-4)}</span>
                  <ChevronDown size={10} className="text-white/20 group-hover:text-blue-400 group-hover:rotate-180 transition-all" />
                </div>
              </div>
            </button>
          )}
          
          <button className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 text-white/40 hover:text-white transition-all backdrop-blur-md">
            <Menu size={20} />
          </button>
        </div>
      </header>

      <ProfileModal 
        isOpen={isProfileOpen} 
        onClose={() => setIsProfileOpen(false)}
        selectedAvatar={selectedAvatar}
        setSelectedAvatar={handleSetAvatar}
      />
    </>
  );
};
