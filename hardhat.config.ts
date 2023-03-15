import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from 'dotenv';
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    test: {
      url: process.env.GOERLI_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  }
};

export default config;
