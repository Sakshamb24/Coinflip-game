async function main() {
    // Get the contract factory
    const CoinFlip = await ethers.getContractFactory("CoinFlip");
  
    // Deploy the contract
    const coinflip = await CoinFlip.deploy();
  
    // Wait for the contract to be deployed
    await coinflip.deployed();
  
    console.log("CoinFlip deployed to:", coinflip.address);
  }
  
  // Execute the main function
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  