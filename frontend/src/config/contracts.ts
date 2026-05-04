
export const ARC_TESTNET_CONFIG = {
  chainId: 5042002,
  hexChainId: "0x4CEF72",
  chainName: "Arc Testnet",
  rpcUrl: "https://rpc.testnet.arc.network",
  nativeCurrency: {
    name: "USDC",
    symbol: "USDC",
    decimals: 18,
  },
  blockExplorerUrl: "https://testnet.arcscan.app",
};

export const CONTRACT_ADDRESSES = {
  mUSDC: "0x20F8E9e92194a9041b9689C30E4Eb88CC252cC6d",
  mEURC: "0xE4BbB05d6Ed12a9AF188D3fD9e4Eb2C18DC44502",
  AMM: "0x2c8121e448843AB05114710F5BB1b9472cDA00d3",
} as const;
