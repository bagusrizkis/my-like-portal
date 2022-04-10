// SPDX-License-Identifier: UNLICENCED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract LikePortal {
    uint256 totalLikes;

    constructor() {
        console.log("Yo yo, Hello I am smart contract");
    }

    function like() public {
        totalLikes++;
        console.log("%s has liked!", msg.sender);
    }

    function getTotalLikes() public view returns (uint256) {
        console.log("We have liked %s times", totalLikes);
        return totalLikes;
    }
}
