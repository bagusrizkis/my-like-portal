async function main() {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();

    console.log("Deploying contracts with account: ", deployer.address);
    console.log("Account balance: ", accountBalance.toString());

    const likeContractFactory = await hre.ethers.getContractFactory("LikePortal");
    const likeContact = await likeContractFactory.deploy();
    await likeContact.deployed();

    console.log("Contract Deployed to: ", likeContact.address);
}

async function runMain() {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

runMain();