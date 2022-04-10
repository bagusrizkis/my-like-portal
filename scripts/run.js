async function main(){
    const [owner, randomPerson] = await hre.ethers.getSigners();

    const likeContractFactory = await hre.ethers.getContractFactory("LikePortal");
    const likeContract = await likeContractFactory.deploy();
    await likeContract.deployed();

    console.log("Contract Deployed to: ", likeContract.address);
    console.log("Contract deployed by: ", owner.address);

    let likedCount;
    likedCount = await likeContract.getTotalLikes();

    let likedTxn = await likeContract.like();
    await likedTxn.wait();

    likedCount = await likeContract.getTotalLikes();

    likedTxn = await likeContract.connect(randomPerson).like();
    await likedTxn.wait();

    likedCount = await likeContract.getTotalLikes();
}

async function runMain() {
    try {
        await main();
        process.exit(0);
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
}

runMain();