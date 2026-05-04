
export const ARC_TESTNET_CONFIG = {
  chainId: 5042002,
  hexChainId: "0x4CEF72",
  chainName: "Arc Testnet",
  rpcUrl: "https://rpc.testnet.arc.network",
  nativeCurrency: { name: "USDC", symbol: "USDC", decimals: 18 },
  blockExplorerUrl: "https://testnet.arcscan.app",
};

export const CONTRACT_ADDRESSES = {
  mUSDC: "0x8bda7Ed54D0D0025656b07C1e99B6EF5A4958F4d",
  mEURC: "0xc70307C62DC194AB493D10782A2B7e4B138aF9Eb",
  mTRYC: "0xF2e97227e35faf7Ca9CB14eD7d0eD76C79b45Dd4",
  mGBPC: "0xA86B7654b495163229E84c0935c56932dC494b08",
  mJPYC: "0xF215C85074BD7AA41EfF6982FDaBf25f5218c690",
  AMM: "0xb237c1153EE46091af6dEfCD7d4E8F8Ce3324672", // Default pool
  POOLS: {
    "mEURC": "0xb237c1153EE46091af6dEfCD7d4E8F8Ce3324672",
    "mTRYC": "0x2bFfAe0a06983f6891d5100D22D489908dBD2559",
    "mGBPC": "0x550F248b722655AC336025Fa0d4Af75f8CddA05d",
    "mJPYC": "0xea5FC1920627D8eD9B69E0238268E0A4492eE5A0",
  }
} as const;
