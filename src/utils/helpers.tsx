import { countriesFlags } from "./countriesFlag";
import { rankingImages } from "./rankImages";

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

export const getRankImage = (rank: string) => {
    const rankFormatted = rank && rank.toLowerCase().replaceAll(" ", "-")
    return rankingImages[rankFormatted]
}

