const { expect } = require("chai");
const { ethers } = require("hardhat");

const WRAPPED_HOLDER_ADDRESS = "0xeD47015Bb8080B9399f9D0ddFc427B9Cee2CaAB1"; // picked from leaderboard
const UNWRAPPED_HOLDER_ADDRESS = "0x46A96D603ec2aC6d75Fa8824bE3197fA8EbcE37b"; // top zombie wallet

// Prefixes:
// 100 - unwrapped
// 200 - wrapped
// 300 - wrapped sets

describe("CurioIndex", function () {
  // == Test Unwrapped Lookup == //
  it("Get unwrapped balance for CRO1", async function () {
    const CurioIndex = await ethers.getContractFactory("CurioIndex");
    const index = await CurioIndex.deploy();
    await index.deployed();

    expect(await index.balanceOf(UNWRAPPED_HOLDER_ADDRESS, "101")).to.equal(0);
  });
  it("Get unwrapped balance for CRO10", async function () {
    const CurioIndex = await ethers.getContractFactory("CurioIndex");
    const index = await CurioIndex.deploy();
    await index.deployed();

    expect(await index.balanceOf(UNWRAPPED_HOLDER_ADDRESS, "110")).to.equal(48);
  });
  it("Get unwrapped balance for CRO25", async function () {
    const CurioIndex = await ethers.getContractFactory("CurioIndex");
    const index = await CurioIndex.deploy();
    await index.deployed();

    expect(await index.balanceOf(UNWRAPPED_HOLDER_ADDRESS, "125")).to.equal(157);
  });
  it("Should fail for a nonexistent id under 101 (id 90)", async function () {
    const CurioIndex = await ethers.getContractFactory("CurioIndex");
    const index = await CurioIndex.deploy();
    await index.deployed();

    await expect(index.balanceOf(UNWRAPPED_HOLDER_ADDRESS, "90"))
      .to.be.revertedWith("Invalid ID: unwrapped id under 101");
  });
  it("Should fail for a nonexistent id over 130 (id 140)", async function () {
    const CurioIndex = await ethers.getContractFactory("CurioIndex");
    const index = await CurioIndex.deploy();
    await index.deployed();

    await expect(index.balanceOf(UNWRAPPED_HOLDER_ADDRESS, "140"))
      .to.be.revertedWith("Invalid ID: unwrapped id over 130");
  });

  // == Test Wrapped Lookup == //
  it("Should return balance of wrapped contract id 1 (id 201)", async function () {
    const CurioIndex = await ethers.getContractFactory("CurioIndex");
    const index = await CurioIndex.deploy();
    await index.deployed();

    expect(await index.balanceOf(WRAPPED_HOLDER_ADDRESS, "201")).to.equal(3);
  });
  it("Should return balance of wrapped contract id 18", async function () {
    const CurioIndex = await ethers.getContractFactory("CurioIndex");
    const index = await CurioIndex.deploy();
    await index.deployed();

    expect(await index.balanceOf(WRAPPED_HOLDER_ADDRESS, "218")).to.equal(2);
  });
  it("Should return balance of wrapped contract id 30", async function () {
    const CurioIndex = await ethers.getContractFactory("CurioIndex");
    const index = await CurioIndex.deploy();
    await index.deployed();

    expect(await index.balanceOf(WRAPPED_HOLDER_ADDRESS, "230")).to.equal(4);
  });
  it("Should fail for a nonexistent wrapped card (id 240)", async function () {
    const CurioIndex = await ethers.getContractFactory("CurioIndex");
    const index = await CurioIndex.deploy();
    await index.deployed();

    await expect(index.balanceOf(WRAPPED_HOLDER_ADDRESS, "240"))
      .to.be.revertedWith("Invalid ID: wrapped curio id over 30");
  });

  // == Test Wrapped Sets Lookup == //
  it("Should fail for a nonexistent set (id 309)", async function () {
    const CurioIndex = await ethers.getContractFactory("CurioIndex");
    const index = await CurioIndex.deploy();
    await index.deployed();

    await expect(index.balanceOf(WRAPPED_HOLDER_ADDRESS, "309"))
      .to.be.revertedWith("Invalid ID: curio set id over 308");
  });
  it("Test balance for story set (id 301)", async function () {
    const CurioIndex = await ethers.getContractFactory("CurioIndex");
    const index = await CurioIndex.deploy();
    await index.deployed();

    expect(await index.balanceOf(WRAPPED_HOLDER_ADDRESS, "301")).to.equal(1);
  });
  it("Test balance for full set (id 302)", async function () {
    const CurioIndex = await ethers.getContractFactory("CurioIndex");
    const index = await CurioIndex.deploy();
    await index.deployed();

    expect(await index.balanceOf(WRAPPED_HOLDER_ADDRESS, "302")).to.equal(1);
  });
  it("Test balance for cryptograffiti set (id 303)", async function () {
    const CurioIndex = await ethers.getContractFactory("CurioIndex");
    const index = await CurioIndex.deploy();
    await index.deployed();

    expect(await index.balanceOf(WRAPPED_HOLDER_ADDRESS, "303")).to.equal(1);
  });
  it("Test balance for phneep set (id 304)", async function () {
    const CurioIndex = await ethers.getContractFactory("CurioIndex");
    const index = await CurioIndex.deploy();
    await index.deployed();

    expect(await index.balanceOf(WRAPPED_HOLDER_ADDRESS, "304")).to.equal(1);
  });
  it("Test balance for cryptopop set (id 305)", async function () {
    const CurioIndex = await ethers.getContractFactory("CurioIndex");
    const index = await CurioIndex.deploy();
    await index.deployed();

    expect(await index.balanceOf(WRAPPED_HOLDER_ADDRESS, "305")).to.equal(2);
  });
  it("Test balance for robek set (id 306)", async function () {
    const CurioIndex = await ethers.getContractFactory("CurioIndex");
    const index = await CurioIndex.deploy();
    await index.deployed();

    expect(await index.balanceOf(WRAPPED_HOLDER_ADDRESS, "306")).to.equal(1);
  });
  it("Test balance for daniel set (id 307)", async function () {
    const CurioIndex = await ethers.getContractFactory("CurioIndex");
    const index = await CurioIndex.deploy();
    await index.deployed();

    expect(await index.balanceOf(WRAPPED_HOLDER_ADDRESS, "307")).to.equal(1);
  });
  it("Test balance for marisol set (id 308)", async function () {
    const CurioIndex = await ethers.getContractFactory("CurioIndex");
    const index = await CurioIndex.deploy();
    await index.deployed();

    expect(await index.balanceOf(WRAPPED_HOLDER_ADDRESS, "308")).to.equal(1);
  });

  // == Test batch balance lookup == //
  it("Test batch balance checking for 1 card (id 301)", async function () {
    const CurioIndex = await ethers.getContractFactory("CurioIndex");
    const index = await CurioIndex.deploy();
    await index.deployed();

    expect((await index.balanceOfBatch([WRAPPED_HOLDER_ADDRESS], ["301"]))[0]).to.equal([1]);
  });
  it("Test batch balance checking for many cards (id 101, 102, 110, 205, 230, 303)", async function () {
    const CurioIndex = await ethers.getContractFactory("CurioIndex");
    const index = await CurioIndex.deploy();
    await index.deployed();

    let response = await index.balanceOfBatch([
      WRAPPED_HOLDER_ADDRESS,
      WRAPPED_HOLDER_ADDRESS,
      WRAPPED_HOLDER_ADDRESS,
      WRAPPED_HOLDER_ADDRESS,
      WRAPPED_HOLDER_ADDRESS
    ],
      ["101", "201", "230", "301", "307"]);

    expect(response[0]).to.equal(0);
    expect(response[1]).to.equal(3);
    expect(response[2]).to.equal(4);
    expect(response[3]).to.equal(1);
    expect(response[4]).to.equal(1);
  });
  it("Test batch balance checking for many cards, with one wrong (id 240)", async function () {
    const CurioIndex = await ethers.getContractFactory("CurioIndex");
    const index = await CurioIndex.deploy();
    await index.deployed();

    let response = index.balanceOfBatch([
      WRAPPED_HOLDER_ADDRESS,
      WRAPPED_HOLDER_ADDRESS,
      WRAPPED_HOLDER_ADDRESS,
      WRAPPED_HOLDER_ADDRESS,
      WRAPPED_HOLDER_ADDRESS
    ],
      ["101", "201", "240", "301", "307"]);

    await expect(response).to.be.revertedWith("Invalid ID: wrapped curio id over 30");
  });
});
