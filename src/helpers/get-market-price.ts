import { ethers } from "ethers";
import { StableReserveContract } from "../abi";
import { mim } from "../helpers/bond";
import { Networks } from "../constants/blockchain";

export async function getMarketPrice(networkID: Networks, provider: ethers.Signer | ethers.providers.Provider): Promise<number> {
    return 42000000000;
}
