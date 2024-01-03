export const columns = (width: string): IColumn[] => {
    return [
        { name: "DATE", key: "date", width },
        { name: "TRADING PROFIT", key: "tradingProfit", width:"50px" },
    ];
};