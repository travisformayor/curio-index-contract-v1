const { expect } = require("chai");
const { ethers } = require("hardhat");

const SAMPLE_ADDRESS = process.env.SAMPLE_ADDRESS;

describe("CurioIndex", function () {
  it("Should return balance of wrapped contract id 1", async function () {
    const CurioIndex = await ethers.getContractFactory("CurioIndex");
    const index = await CurioIndex.deploy();
    await index.deployed();

    expect(await index.balanceOf(SAMPLE_ADDRESS, "201")).to.equal(7);

  });
    it("Should return balance of wrapped contract id 30", async function () {
    const CurioIndex = await ethers.getContractFactory("CurioIndex");
    const index = await CurioIndex.deploy();
    await index.deployed();

    expect(await index.balanceOf(SAMPLE_ADDRESS, "230")).to.equal(7);

  });
  it("Should fail for a nonexistent wrapped card (id 240)", async function () {
    const CurioIndex = await ethers.getContractFactory("CurioIndex");
    const index = await CurioIndex.deploy();
    await index.deployed();

    await expect(
      index.balanceOf(SAMPLE_ADDRESS, "240")
    ).to.be.revertedWith("Invalid ID for wrapped curio");
  });
});
