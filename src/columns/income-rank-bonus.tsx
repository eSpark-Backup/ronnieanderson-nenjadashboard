import { Box, Checkbox, Stack, Typography } from "@mui/material";
import { styles } from "../utils/styles";
import { ruby2, emerald, diamondRank } from "../assets";

export const columns = (): IColumn[] => {
    const classes = styles.rankRewardStyles()
    return [
        { name: "RANK", key: "rank", boldRank: true },
        {
            name: "QUALIFICATION",
            key: "qualification",
            component: (item: IRankBonus) => {
                const percentage = (item.qualification.myPrice / item.qualification.totalPrice) * 100;
                return (
                    <Box width="315px">
                        <Typography variant="body1" fontWeight={600}>$ {item?.qualification?.totalPrice}</Typography>
                        <Stack mt={1} direction="row" alignItems="center" justifyContent="space-between">
                            <Typography fontSize="12px" color="#7C7F84">$ {item.qualification.myPrice}</Typography>
                            <Typography fontSize="12px" color="#7C7F84">$ {item.qualification.totalPrice}</Typography>
                        </Stack>
                        <Stack p="7px 0 !important" direction="column" alignItems="center" justifyContent="flex-end" className={classes.progress}>
                            <Box
                                p="7px 0 !important"
                                width={`${percentage}%`}
                                className={
                                    [classes.progressFill, item.qualification.myPrice > item.qualification.totalPrice - 5 ? classes.borderRadiusFull : classes.borderRadiusHalf, item.qualification.myPrice >= 1 ? classes.flex : classes.none].join(" ")
                                }>
                            </Box>
                        </Stack>
                        {item?.qualification?.checks ?
                            (<Stack direction="row" alignItems="center" justifyContent="flex-end" gap={3}>
                                {item.qualification.checks.map(({ name, value }, index: number) => {
                                    return (
                                        <Stack key={index} direction="row" alignItems="center" justifyContent="center" gap={0}>
                                            <Typography>{name}</Typography>
                                            <Checkbox className={classes.checkBox} checked={value} />
                                            <img className={value ? classes.opacity : classes.noOpacity} src={name === "Ruby" ? ruby2 : name === "Diamond" ? diamondRank : emerald} width={30} height={30} alt="rank" />
                                        </Stack>
                                    )
                                })}
                            </Stack>)
                            : null}
                    </Box>
                )
            }
        },
        { name: "REWARD", key: "reward", }
    ];
};