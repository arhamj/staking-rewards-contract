const StakingRewards = artifacts.require("StakingRewards");

module.exports = function (deployer) {
    deployer.deploy(StakingRewards, "0x93353d42d71f98a56ce00c246374be97b2f2ac7b",
        "0xbb4748449157bed2150b1289b1f30fd1297abb21", "0xbb4748449157bed2150b1289b1f30fd1297abb21",
        "0x92d89111777259833f9b698e87fe990f4d38691a");
};
