// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Crypto is ERC20 {
  constructor() ERC20("CryptoT", "CRT") { }

  function awardToken(address to, uint256 amount) public {
    _mint(to, amount*10**18);
  }
}