// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CoinFlip {
    address public owner;

    event FlipResult(address indexed player, bool won, uint256 amount);

    constructor() {
        owner = msg.sender;
    }

    function flip(bool _guess) public payable {
        require(msg.value > 0, "Must bet some ETH");

        bool won = (block.timestamp % 2 == 0) == _guess;

        if (won) {
            payable(msg.sender).transfer(msg.value * 2);
        }

        emit FlipResult(msg.sender, won, msg.value);
    }

    function withdraw() external {
        require(msg.sender == owner, "Only owner can withdraw");
        payable(owner).transfer(address(this).balance);
    }

    receive() external payable {}
}
