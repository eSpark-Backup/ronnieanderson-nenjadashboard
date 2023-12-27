import React from 'react'
import CardLayout from '../../../components/Card/CardLayout/CardLayout'
import { Box, Checkbox, FormControlLabel, Grid, Typography } from '@mui/material'
import { CustomButton, CustomInput, CustomPhone, CustomSelector } from '../../../components'
import { newTeamData } from '../../../constants'
import { styles } from '../../../utils/styles'

const TeamNew = () => {
  const classes = styles.newTeamStyles();

    return (
        <CardLayout sx={{ padding: "20px 20px 20px 40px" }}>
            <Typography className={classes.mainHeading}>Request New</Typography>
            <Grid container pt={3} spacing={2}>
                {newTeamData?.map((eachInput, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <React.Fragment key={index}>
                            {eachInput?.type === "select" ?
                                <CustomSelector name={eachInput?.name} options={eachInput?.options} required={eachInput?.required} label={eachInput?.label} placeholder={eachInput?.placeholder} />
                                : eachInput?.type === "phone" ?
                                    <CustomPhone name={eachInput?.name} />
                                    :
                                    eachInput?.type === "text" || eachInput?.type === "email" || eachInput?.type === "password" ?
                                        <>
                                            <CustomInput
                                                name={eachInput?.name}
                                                type={eachInput?.type}
                                                required={eachInput?.required}
                                                label={eachInput?.label}
                                                placeholder={eachInput?.placeholder}
                                                sx={{ border: "1px solid #D7D7D7" }}
                                            />

                                        </>
                                        : <Box className={classes.buttonBox}>
                                            <Typography>Select Leg*</Typography>
                                            <CustomButton  sx={{ width: "25%" }}>
                                                LEFT
                                            </CustomButton>
                                            <CustomButton color='secondary' sx={{ width: "25%", color:"#1D3B6A" }}>
                                                RIGHT
                                            </CustomButton>
                                        </Box>
                            }
                        </React.Fragment>
                    </Grid>
                ))}
            </Grid>
            <FormControlLabel className={classes.checkBox} control={<Checkbox defaultChecked />} label="I have read and accepted the terms & conditions of Nenja (click here to read)" />
            <Box className={classes.footer}>
                <CustomButton sx={{width:"200px", marginTop:"20px", height:"55px"}}>Create Account</CustomButton>
            </Box>

        </CardLayout>
    )
}

export default TeamNew
