import { BigNumber } from 'ethers';
import { ethers } from "hardhat";

async function main() {
  const [owner] = await ethers.getSigners();
  
  // Deployment and awardToken function execution
  const Crypto = await ethers.getContractFactory("Crypto");
  const crypto = await Crypto.deploy();
  await crypto.deployed();

  await crypto.awardToken(owner.address,  1000);
  const issuedAmount = await crypto.balanceOf(owner.address);
  console.log(
    `crypto  ${issuedAmount}, smart contract address ${crypto.address}`
  );
  
  // Approve token expendature to smart contract for nft trade
  // const contract = await ethers.getContractAt('IERC20', "0x2B1E9C405db4Bc32fac6eA92fC8068f5B7dBD152");

  // await contract.approve("0x5BA4DC4cDD52c45707e3AFCD0b5753625EfDB64c", BigNumber.from("200000000000000"));
  // const allowance = await contract.allowance(owner.address, "0x5BA4DC4cDD52c45707e3AFCD0b5753625EfDB64c")
  // console.log(
  //   `crypto  ${allowance}`
  // );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
