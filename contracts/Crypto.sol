// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Crypto is ERC20 {
  constructor() ERC20("Crypto", "CR") {

    // msg.sender: address of the wallet calling the contract
    _mint(msg.sender, 1000*10**18);
  }
}