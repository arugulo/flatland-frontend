import { Networks } from "./blockchain";

const ARBITRUM_TESTNNET = {
    DAO_ADDRESS: "0x06E3aac56bd9063eA1E4d6D5B0Caa5289b3c9BE4", // Multisig wallet not in contracts
    MEMO_ADDRESS: "0x1822b8Fd63970f1b173Fcf18A2e86ab83406375f", // sFACT address
    TIME_ADDRESS: "0x5a51F5c7Db03A7575A96faf0b041d70a5A0b1dcE", // FACT address
    MIM_ADDRESS: "0x928a5f68D5763fC2Df628972E004B827898fbb64", // MIM address
    STAKING_ADDRESS: "0x650590f75394A64dA36E55bBB85B2A146E60afDd", // Staking address
    STAKING_HELPER_ADDRESS: "0xcC207c3f6deF95017156dCaAE74BA3e90EB3B066", // Staking helper address
    TIME_BONDING_CALC_ADDRESS: "0x3a54B5F6a0A727bC41aaAefB22a0BB003c173A4F",
    TREASURY_ADDRESS: "0x9E5681Ef3A8A051fD006Ff47A556987591542ec9", // Treasury address
};

export const getAddresses = (networkID: number) => {
    if (networkID === Networks.ARBI_TEST) return ARBITRUM_TESTNNET;

    throw Error("Network don't support");
};
