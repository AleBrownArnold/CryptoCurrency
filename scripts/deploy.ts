import { ethers } from "hardhat";

async function main() {
  const Crypto = await ethers.getContractFactory("Crypto");
  const crypto = await Crypto.deploy();

  await crypto.deployed();
  const issuedAmount = await crypto.balanceOf(crypto.address);
  console.log(
    `crypto deployed to ${crypto.address}, issued ${issuedAmount}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
