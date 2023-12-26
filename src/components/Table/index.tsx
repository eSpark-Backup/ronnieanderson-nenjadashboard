import {
    Box,
    LinearProgress,
    Table as MUITable,
    Pagination,
    Stack,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import CardLayout from "../Card/CardLayout/CardLayout";
import { NoData } from "../../assets";
import { getCountryFlag, getRankImage, getValue } from "../../utils/helpers";
import { styles } from "../../utils/styles";

const DynamicTable = <T extends IBase>({
    title,
    rightNode,
    data,
    columns,
    isLoading,
    handlePageChange,
    total,
    ...rest
}: IDynamicTable<T>): ReactNode => {
    const classes = styles.tableStyle();

    const extendedColumns = columns?.map((column) => {
        return { ...column, key: column.key.split(".") };
    });

    const generateCell = (
        column: {
            key: string[];
            name: string;
            component?: (string: any) => ReactNode;
            width?: string;
        },
        item: T
    ): ReactNode | string => {
        const cell = column.component
            ? column.component(item)
            : getValue(item, column.key);

        return column.key[0] === "status" ? (
            <Stack
                direction="row"
                justifyContent={"flex-start"}
                justifyItems="center"
                alignItems="center"
                spacing={1}
            >
                {column.component ? (
                    cell
                ) : (
                    <>
                        <Stack direction="row" alignItems="center" justifyContent="flex-start" gap={2}>
                            <Box className={`${cell ? classes.activeDot : classes.inActiveDot} ${classes.statusDot}`}>{""}</Box>
                            <Typography variant="body2">{cell ? "Active" : "Inactive"}</Typography>
                        </Stack>
                    </>
                )}
            </Stack>
        ) : column.key[0] === "country" ? (
            <>
                <Stack direction="row" alignItems="center" justifyContent="flex-start" gap={2}>
                    {cell && getCountryFlag(cell) && <img className={classes.rounded} src={getCountryFlag(cell)} width={26} height={26} alt="flag" />}
                    <Typography variant="body2">{cell}</Typography>
                </Stack>
            </>
        ) : column.key[0] === "rank" ? (
            <>
                <Stack direction="row" alignItems="center" justifyContent="flex-start" gap={2}>
                    {cell && getRankImage(cell) && <img style={{ objectFit: "none" }} src={getRankImage(cell)} width={40} height={40} alt="flag" />}
                    <Typography variant="body2">{cell}</Typography>
                </Stack>
            </>
        ) : (
            <Typography variant="body2">{cell}</Typography>
        );
    };

    return (
        <CardLayout>
            <Stack gap={2} direction={{ xs: "column", sm: "row" }} alignItems="center" justifyContent="space-between" p={2}>
                <Typography variant="h6">{title}</Typography>
                {rightNode}
            </Stack>
            {data.length === 0 && !isLoading ?
                <Stack direction="row" justifyContent="center" alignItems="center">
                    <img src={NoData} width="300px" height="300px" alt="no-data" />
                </Stack>
                :
                <TableContainer {...rest} className="table">
                    <MUITable className={classes.muiTableWidth}>
                        <TableHead>
                            <TableRow>
                                {extendedColumns?.map((column, index) => (
                                    <TableCell
                                        key={`${index}`}
                                    >
                                        <Stack
                                            direction={"row"}
                                            alignItems={"center"}
                                            justifyContent={
                                                column.key[0] === "action"
                                                    ? "flex-end"
                                                    : "space-between"
                                            }
                                        >
                                            <Stack direction="row" alignItems={"center"}>
                                                {column.name}
                                            </Stack>
                                        </Stack>
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        {!isLoading && (
                            <TableBody>
                                {data?.map((item, index) => (
                                    <TableRow className={index % 2 === 0 ? '' : classes.evenRow} hover key={item.id as string}>
                                        {extendedColumns?.map((column) => (
                                            <TableCell key={column.key.join(".")}>
                                                {generateCell(column, item)}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))}
                            </TableBody>
                        )}
                    </MUITable>
                    {isLoading && (
                        <Box className={classes.fullWidth}>
                            <LinearProgress />
                        </Box>
                    )}
                </TableContainer>
            }
            <Stack mt={0.5} p={{ xs: 0, sm: 2 }} alignItems="flex-end">
                <Pagination onChange={handlePageChange ? (_, page) => handlePageChange(page) : () => { }} count={(total || 1) / 10} color="primary" />
            </Stack>
        </CardLayout>
    );
};

export default DynamicTable;
