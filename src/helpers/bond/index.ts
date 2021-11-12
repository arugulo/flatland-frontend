import { Networks } from "../../constants/blockchain";
import { StableBond, CustomBond } from "./stable-bond";

import MimIcon from "../../assets/tokens/MIM.svg";

import { StableBondContract, StableReserveContract } from "../../abi";

export const mim = new StableBond({
    name: "dai",
    displayName: "DAI",
    bondToken: "DAI",
    bondIconSvg: MimIcon,
    bondContractABI: StableBondContract,
    reserveContractAbi: StableReserveContract,
    networkAddrs: {
        [Networks.ARBI_TEST]: {
            bondAddress: "0x1a4e885e369876ff8217F19ae42A1eb801DD2E7b",
            reserveAddress: "0x928a5f68D5763fC2Df628972E004B827898fbb64",
        },
    },
});

export default [mim];
