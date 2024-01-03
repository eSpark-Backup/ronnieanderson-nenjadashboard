import { countriesFlags } from "./countriesFlag";
import { rankingBoldImages, rankingImages } from "./rankImages";
import { rewardImages } from "./rewardImages";

export function getValue<T>(item: T, keys: any): string {
    if (keys.length === 1) {
        return (item as { [key: string]: any })[keys[0]];
    }
    let value: any = item;

    keys.forEach((key: any) => {
        value = value[key];
    });

    return value;
}

export const getCountryFlag = (countryName: string) => {
    return countriesFlags[countryName]
}

export const getRankImage = (rank: string, bold: boolean | undefined) => {
    const rankFormatted = rank && rank.toLowerCase().replaceAll(" ", "-")
    return bold ? rankingBoldImages[rankFormatted] : rankingImages[rankFormatted]
}


export const getRewardImages = (reward: string) => {
    const rewardFormatted = reward && reward.toLowerCase().replaceAll(" ", "-")
    return rewardImages[rewardFormatted]
}