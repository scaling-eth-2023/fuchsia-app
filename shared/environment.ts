/**
 * Environment Variables defined in `.env.local`.
 * See `env.local.example` for documentation.
 */
export const env = {
  url:
    process.env.NEXT_PUBLIC_VERCEL_URL &&
    process.env.NEXT_PUBLIC_VERCEL_ENV! === "preview"
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : process.env.NEXT_PUBLIC_URL,
  isProduction: process.env.NEXT_PUBLIC_PRODUCTION_MODE === "true",

  defaultChain: parseInt(process.env.NEXT_PUBLIC_DEFAULT_CHAIN!),
  supportedChains: JSON.parse(process.env.NEXT_PUBLIC_SUPPORTED_CHAINS!),

  rpcUrls: {
    1337: process.env.NEXT_PUBLIC_RPC_1337!, // Hardhat

    1: process.env.NEXT_PUBLIC_RPC_1!, // Ethereum Mainnet
    5: process.env.NEXT_PUBLIC_RPC_5!, // Goerli

    137: process.env.NEXT_PUBLIC_RPC_137!, // Polygon Mainnet
    80001: process.env.NEXT_PUBLIC_RPC_80001!, // Mumbai
  },
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  graphEndPoint: process.env.NEXT_PUBLIC_GRAPH_END_POINT || "",
};
