const { expect } = require("chai");
const { ethers } = require("hardhat");

const WRAPPED_HOLDER_ADDRESS = "0xeD47015Bb8080B9399f9D0ddFc427B9Cee2CaAB1"; // picked from leaderboard
const UNWRAPPED_HOLDER_ADDRESS = "0x46A96D603ec2aC6d75Fa8824bE3197fA8EbcE37b"; // top zombie wallet


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

    await expect(
      index.balanceOf(WRAPPED_HOLDER_ADDRESS, "240")
    ).to.be.revertedWith("Invalid ID for wrapped curio");
  });

  // == Test Unwrapped Lookup == //
  it("Get balance for CRO1", async function () {
    const CurioIndex = await ethers.getContractFactory("CurioIndex");
    const index = await CurioIndex.deploy();
    await index.deployed();

    expect(await index.balanceOf(UNWRAPPED_HOLDER_ADDRESS, "101")).to.equal(1);
  });
  it("Get balance for CRO13", async function () {
    const CurioIndex = await ethers.getContractFactory("CurioIndex");
    const index = await CurioIndex.deploy();
    await index.deployed();

    expect(await index.balanceOf(UNWRAPPED_HOLDER_ADDRESS, "113")).to.equal(3);
  });
  it("Get balance for CRO30", async function () {
    const CurioIndex = await ethers.getContractFactory("CurioIndex");
    const index = await CurioIndex.deploy();
    await index.deployed();

    expect(await index.balanceOf(UNWRAPPED_HOLDER_ADDRESS, "130")).to.equal(2);
  });
  it("Should fail for a nonexistent id under 101 (id 90)", async function () {
    const CurioIndex = await ethers.getContractFactory("CurioIndex");
    const index = await CurioIndex.deploy();
    await index.deployed();

    await expect(
      index.balanceOf(UNWRAPPED_HOLDER_ADDRESS, "90")
    ).to.be.revertedWith("Invalid ID under 101");
  });
  it("Should fail for a nonexistent wrapped card (id 140)", async function () {
    const CurioIndex = await ethers.getContractFactory("CurioIndex");
    const index = await CurioIndex.deploy();
    await index.deployed();

    await expect(
      index.balanceOf(UNWRAPPED_HOLDER_ADDRESS, "140")
    ).to.be.revertedWith("Invalid ID for unwrapped curio");
  });

  // == Test Wrapped Sets Lookup == //
  it("Test batch balance for story set (id 301)", async function () {
    const CurioIndex = await ethers.getContractFactory("CurioIndex");
    const index = await CurioIndex.deploy();
    await index.deployed();

    expect(await index.balanceOf(WRAPPED_HOLDER_ADDRESS, "301")).to.equal(7);
  });
  it("Test batch balance for full set (id 302)", async function () {
    const CurioIndex = await ethers.getContractFactory("CurioIndex");
    const index = await CurioIndex.deploy();
    await index.deployed();

    expect(await index.balanceOf(WRAPPED_HOLDER_ADDRESS, "302")).to.equal(2);
  });
  it("Test batch balance for cryptograffiti set (id 303)", async function () {
    const CurioIndex = await ethers.getContractFactory("CurioIndex");
    const index = await CurioIndex.deploy();
    await index.deployed();

    expect(await index.balanceOf(WRAPPED_HOLDER_ADDRESS, "303")).to.equal(3);
  });
  it("Test batch balance for phneep set (id 304)", async function () {
    const CurioIndex = await ethers.getContractFactory("CurioIndex");
    const index = await CurioIndex.deploy();
    await index.deployed();

    expect(await index.balanceOf(WRAPPED_HOLDER_ADDRESS, "304")).to.equal(3);
  });
  it("Test batch balance for cryptopop set (id 305)", async function () {
    const CurioIndex = await ethers.getContractFactory("CurioIndex");
    const index = await CurioIndex.deploy();
    await index.deployed();

    expect(await index.balanceOf(WRAPPED_HOLDER_ADDRESS, "305")).to.equal(2);
  });
  it("Test batch balance for robek set (id 306)", async function () {
    const CurioIndex = await ethers.getContractFactory("CurioIndex");
    const index = await CurioIndex.deploy();
    await index.deployed();

    expect(await index.balanceOf(WRAPPED_HOLDER_ADDRESS, "306")).to.equal(2);
  });
  it("Test batch balance for daniel set (id 307)", async function () {
    const CurioIndex = await ethers.getContractFactory("CurioIndex");
    const index = await CurioIndex.deploy();
    await index.deployed();

    expect(await index.balanceOf(WRAPPED_HOLDER_ADDRESS, "307")).to.equal(2);
  });
  it("Test batch balance for marisol set (id 308)", async function () {
    const CurioIndex = await ethers.getContractFactory("CurioIndex");
    const index = await CurioIndex.deploy();
    await index.deployed();

    expect(await index.balanceOf(WRAPPED_HOLDER_ADDRESS, "308")).to.equal(2);
  });
});
