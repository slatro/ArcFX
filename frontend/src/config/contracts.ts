
export const ARC_TESTNET_CONFIG = {
  chainId: 5042002,
  hexChainId: "0x4CEF72",
  chainName: "Arc Testnet",
  rpcUrl: "https://rpc.testnet.arc.network",
  nativeCurrency: { name: "USDC", symbol: "USDC", decimals: 18 },
  blockExplorerUrl: "https://testnet.arcscan.app",
};

export const CONTRACT_ADDRESSES = {
  mUSDC: "0x8E6E43D69555b6d703f50aE580E161e6B497c182",
  mEURC: "0x99b0b133508f16105949a58E84A74ce460dc4caf",
  mTRYC: "0x3f17dfFE8CDe7D02e570B5c0CE77ee0ecdE3960A",
  mGBPC: "0xC39b7d80Dcea78833A14382BDA934378463c2c23",
  mJPYC: "0x03df011501aEDEd725A272362Dd6acEc9a1F3c77",
  AMM: "0xcEeCCd99843718dB16795908941390D3037cE4fa", // Default pool
  POOLS: {
    "mEURC": "0xcEeCCd99843718dB16795908941390D3037cE4fa",
    "mTRYC": "0x178b48644fEb0E4f64ADD83c141894967A1C2648",
    "mGBPC": "0x75289d246bdF576F4DFC610c6823Ea1A4Dd0e5dD",
    "mJPYC": "0x4Ab2c61B317Fdf4Ce04c89Bed0F518424cA56C4C",
  }
} as const;
