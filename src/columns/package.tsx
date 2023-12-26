import { Typography } from "@mui/material";

export const columns = (): IColumn[] => {
    return [
        { name: "Date", key: "date", },
        {
            name: "Package",
            key: "package",
            component: (item: IPackage) => {
                return <Typography variant="body2" fontWeight={600}>{item?.package}</Typography>
            }
        },
        { name: "Status", key: "status", }
    ];
};