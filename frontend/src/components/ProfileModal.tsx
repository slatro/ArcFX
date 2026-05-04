import React, { useState } from 'react';
import { X, Copy, LogOut, CheckCircle2, Wallet, ExternalLink, Zap } from 'lucide-react';
import { useAccount, useDisconnect, useReadContract } from 'wagmi';
import { formatUnits } from 'viem';
import { CONTRACT_ADDRESSES } from '../config/contracts';
import ERC20_ABI from '../abis/ERC20.json';

export const AVATARS = [
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Nala',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Kiki',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Lilly',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Milo',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Jasper',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Coco',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Buster',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Shadow',
];

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedAvatar: string;
  setSelectedAvatar: (url: string) => void;
}

const TOKEN_ICONS: Record<string, string> = {
  mUSDC: '/stable_logos/usdc.png',
  mEURC: '/stable_logos/eurc.png',
  mTRYC: '/stable_logos/tryc.png',
  mGBPC: '/stable_logos/gbpc.png',
  mJPYC: '/stable_logos/jpyc.png',
};

export const ProfileModal = ({ isOpen, onClose, selectedAvatar, setSelectedAvatar }: ProfileModalProps) => {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const [copied, setCopied] = useState(false);

  const { data: balanceUSDC } = useReadContract({ address: CONTRACT_ADDRESSES.mUSDC as `0x${string}`, abi: ERC20_ABI, functionName: 'balanceOf', args: address ? [address] : undefined });
  const { data: balanceEURC } = useReadContract({ address: CONTRACT_ADDRESSES.mEURC as `0x${string}`, abi: ERC20_ABI, functionName: 'balanceOf', args: address ? [address] : undefined });
  const { data: balanceTRYC } = useReadContract({ address: CONTRACT_ADDRESSES.mTRYC as `0x${string}`, abi: ERC20_ABI, functionName: 'balanceOf', args: address ? [address] : undefined });
  const { data: balanceGBPC } = useReadContract({ address: CONTRACT_ADDRESSES.mGBPC as `0x${string}`, abi: ERC20_ABI, functionName: 'balanceOf', args: address ? [address] : undefined });
  const { data: balanceJPYC } = useReadContract({ address: CONTRACT_ADDRESSES.mJPYC as `0x${string}`, abi: ERC20_ABI, functionName: 'balanceOf', args: address ? [address] : undefined });

  if (!isOpen) return null;

  const handleCopy = () => {
    if (address) {
      navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const balances = [
    { symbol: 'mUSDC', amount: balanceUSDC, dec: 6 },
    { symbol: 'mEURC', amount: balanceEURC, dec: 18 },
    { symbol: 'mTRYC', amount: balanceTRYC, dec: 18 },
    { symbol: 'mGBPC', amount: balanceGBPC, dec: 18 },
    { symbol: 'mJPYC', amount: balanceJPYC, dec: 18 },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={onClose} />
      
      <div className="relative w-full max-w-md premium-card overflow-hidden animate-in zoom-in-95 duration-300 flex flex-col h-auto max-h-[85vh]">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500" />
        
        {/* HEADER AREA - FIXED TOP */}
        <div className="p-5 pb-0">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <h2 className="text-[10px] font-black text-white/90 uppercase tracking-[0.3em]">User Profile</h2>
            </div>
            <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-white/5 text-white/20 hover:text-white transition-all">
              <X size={18} />
            </button>
          </div>

          <div className="flex flex-col items-center mb-4">
            <div className="relative group">
              <div className="absolute -inset-3 bg-blue-500/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all" />
              <div className="w-16 h-16 rounded-full border border-white/10 p-0.5 bg-black/40 relative">
                <img src={selectedAvatar} alt="Avatar" className="w-full h-full rounded-full" />
                <div className="absolute -bottom-0.5 -right-0.5 w-6 h-6 rounded-full bg-emerald-500 border-2 border-black flex items-center justify-center">
                  <CheckCircle2 size={12} className="text-white" />
                </div>
              </div>
            </div>
            <div className="mt-2 flex flex-col items-center">
              <button onClick={handleCopy} className="flex items-center gap-2 px-2 py-1 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-all">
                <span className="text-[10px] font-bold text-white/50">{address?.slice(0, 6)}...{address?.slice(-4)}</span>
                {copied ? <CheckCircle2 size={10} className="text-emerald-400" /> : <Copy size={10} className="text-white/20" />}
              </button>
              <div className="mt-1 text-[8px] font-black text-blue-400/60 uppercase tracking-widest flex items-center gap-1">
                <Zap size={8} /> ArcFX Early Adopter
              </div>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-2 mb-4 p-3 bg-white/[0.02] rounded-xl border border-white/5">
            {AVATARS.map((url, i) => (
              <button 
                key={i}
                onClick={() => setSelectedAvatar(url)}
                className={`aspect-square rounded-lg overflow-hidden border transition-all hover:scale-105 active:scale-95 ${selectedAvatar === url ? 'border-blue-500 bg-blue-500/10' : 'border-transparent opacity-30 hover:opacity-100'}`}
              >
                <img src={url} alt={`Avatar ${i}`} className="w-full h-full" />
              </button>
            ))}
          </div>
        </div>

        {/* SCROLLABLE BALANCE AREA */}
        <div className="flex-1 overflow-y-auto px-5 py-2 custom-scrollbar min-h-0">
          <h3 className="text-[8px] font-black text-white/15 uppercase tracking-[0.2em] ml-1 mb-2">My Balances</h3>
          <div className="space-y-2">
            {balances.map((token) => (
              <div key={token.symbol} className="flex items-center justify-between p-3 bg-white/[0.03] rounded-xl border border-white/[0.05] hover:bg-white/[0.06] transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full overflow-hidden bg-black/20 p-1">
                    <img src={TOKEN_ICONS[token.symbol]} alt={token.symbol} className="w-full h-full object-contain" />
                  </div>
                  <span className="text-xs font-bold text-white/70">{token.symbol}</span>
                </div>
                <span className="text-xs font-black text-white tracking-tight">
                  {token.amount ? Number(formatUnits(token.amount as bigint, token.dec)).toLocaleString(undefined, { minimumFractionDigits: 2 }) : '0.00'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* FIXED FOOTER */}
        <div className="p-5 pt-3">
          <button 
            onClick={() => { disconnect(); onClose(); }}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 hover:bg-red-500 hover:text-white transition-all font-black text-[10px] uppercase tracking-[0.2em]"
          >
            <LogOut size={14} />
            Disconnect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};
