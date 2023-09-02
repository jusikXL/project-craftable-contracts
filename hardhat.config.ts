import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    mantle_testnet: {
      url: `https://rpc.testnet.mantle.xyz`,
      accounts: [process.env.PRIVATE_KEY!],
      chainId: 5001,
    },
    alfajores: {
      url: "https://alfajores-forno.celo-testnet.org",
      accounts: [process.env.PRIVATE_KEY!],
      chainId: 44787,
    },
  },
};

export default config;
