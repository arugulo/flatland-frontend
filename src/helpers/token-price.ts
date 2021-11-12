import axios from "axios";

const cache: { [key: string]: number } = {};

export const loadTokenPrices = async () => {
    cache["DAI"] = 1;
    cache["FLAT"] = 42;
};

export const getTokenPrice = (symbol: string): number => {
    return Number(cache[symbol]);
};
