const { expect } = require("chai");
const { ethers } = require("hardhat");

const WRAPPED_HOLDER_ADDRESS = process.env.WRAPPED_HOLDER_ADDRESS;
const UNWRAPPED_HOLDER_ADDRESS = process.env.UNWRAPPED_HOLDER_ADDRESS;

describe("CurioIndex", function () {
  // == Test Wrapped Lookup == //
  it("Should return balance of wrapped contract id 1", async function () {
    const CurioIndex = await ethers.getContractFactory("CurioIndex");
    const index = await CurioIndex.deploy();
    await index.deployed();

    expect(await index.balanceOf(WRAPPED_HOLDER_ADDRESS, "201")).to.equal(7);
  });
  it("Should return balance of wrapped contract id 30", async function () {
    const CurioIndex = await ethers.getContractFactory("CurioIndex");
    const index = await CurioIndex.deploy();
    await index.deployed();

    expect(await index.balanceOf(WRAPPED_HOLDER_ADDRESS, "230")).to.equal(7);
  });
  it("Should fail for a nonexistent wrapped card (id 240)", async function () {
    const CurioIndex = await ethers.getContractFactory("CurioIndex");
    const index = await CurioIndex.deploy();
    await index.deployed();

    await expect(index.balanceOf(WRAPPED_HOLDER_ADDRESS, "240")).to.be.revertedWith(
      "Invalid ID for wrapped curio"
    );
  });

  // == Test Unwrapped Lookup == //
  it("Get balance for CRO1", async function () {
    const CurioIndex = await ethers.getContractFactory("CurioIndex");
    const index = await CurioIndex.deploy();
    await index.deployed();

    expect(
      await index.balanceOf(UNWRAPPED_HOLDER_ADDRESS, "101")
    ).to.equal(1);
  });
  it("Get balance for CRO13", async function () {
    const CurioIndex = await ethers.getContractFactory("CurioIndex");
    const index = await CurioIndex.deploy();
    await index.deployed();

    expect(
      await index.balanceOf(UNWRAPPED_HOLDER_ADDRESS, "113")
    ).to.equal(3);
  });
  it("Get balance for CRO30", async function () {
    const CurioIndex = await ethers.getContractFactory("CurioIndex");
    const index = await CurioIndex.deploy();
    await index.deployed();

    expect(
      await index.balanceOf(UNWRAPPED_HOLDER_ADDRESS, "130")
    ).to.equal(2);
  });
  it("Should fail for a nonexistent id under 101 (id 90)", async function () {
    const CurioIndex = await ethers.getContractFactory("CurioIndex");
    const index = await CurioIndex.deploy();
    await index.deployed();

    await expect(index.balanceOf(UNWRAPPED_HOLDER_ADDRESS, "90")).to.be.revertedWith(
      "Invalid ID under 101"
    );
  });
  it("Should fail for a nonexistent wrapped card (id 140)", async function () {
    const CurioIndex = await ethers.getContractFactory("CurioIndex");
    const index = await CurioIndex.deploy();
    await index.deployed();

    await expect(index.balanceOf(UNWRAPPED_HOLDER_ADDRESS, "140")).to.be.revertedWith(
      "Invalid ID for unwrapped curio"
    );
  });

  // == Test Wrapped Sets Lookup == //
});
