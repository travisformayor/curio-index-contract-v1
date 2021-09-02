const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CurioIndex", function () {
  it("Should return 4 for any balanceOf call", async function () {
    const CurioIndex = await ethers.getContractFactory("CurioIndex");
    const index = await CurioIndex.deploy();
    await index.deployed();

    expect(await index.balanceOf("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", "1")).to.equal(4);

  });
});
