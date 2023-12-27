import { makeStyles } from '@mui/styles';
import CardLayout from '../../../components/Card/CardLayout/CardLayout';
import { Box } from '@mui/system';
import { Grid, ThemeProvider, Typography } from '@mui/material';
import { diamond } from '../../../assets';
import { styles } from '../../../utils/styles';
import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { CustomButton, CustomInput, CustomPhone, CustomSelector } from '../../../components';
import { accountSecurityData, accountSettingsData } from '../../../constants';
import profile from "../../../assets/photo.png"
import rank from "../../../assets/rank icon.png"
import logo from "../../../assets/logos.png"
import pic from "../../../assets/Group 2330.png"

// Define a simple TabPanel component
const TabPanel: React.FC<{ value: string, index: string, children: React.ReactNode }> = ({ value, index, children }) => {
  return (
    <div hidden={value !== index}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};


const Account = () => {
  const classes = styles.profileMainStyles();
  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <CardLayout >
      <Box className={classes.ProfileMainContainer}>
        <Grid container>
          <Grid item xs={12} md={3}>
            <Box className={classes.profileSectionContainer}>
              <Box className={classes.profileBox}>
                <img src={profile} alt="Profile" />
                <img src={pic} alt="" className={classes.imageIcon} />
              </Box>
              <Typography className={classes.userName}>Philip John</Typography>
              <Box>
                <img src={rank} alt="Rank" />
              </Box>
              <Box>
                <Typography className={classes.userRank1}>Rank</Typography>
                <Typography className={classes.userRank2}>Emerald</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box className={classes.profileConatiner}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="secondary tabs example"
              >
                <Tab value="one" label="Account Setting" />
                <Tab value="two" label="Security" />
              </Tabs>
              <TabPanel value={value} index="one">
                <Grid container spacing={6} pt={3}>
                  {accountSettingsData?.map((eachInput, index) => (
                    <Grid item xs={12} md={6} key={index}>
                      <React.Fragment key={index}>
                        {eachInput?.type === "select" ?
                          <CustomSelector name={eachInput?.name} options={eachInput?.options} required={eachInput?.required} label={eachInput?.label} placeholder={eachInput?.placeholder} />
                          : eachInput?.type === "phone" ?
                            <CustomPhone name={eachInput?.name} />
                            :
                            <>
                              <CustomInput
                                name={eachInput?.name}
                                type={eachInput?.type}
                                required={eachInput?.required}
                                label={eachInput?.label}
                                placeholder={eachInput?.placeholder}
                              />

                            </>
                        }
                      </React.Fragment>
                    </Grid>
                  ))}
                </Grid>
                <Box className={classes.profileFooter}>
                  <CustomButton className={[classes.buttons]}>
                    Update
                  </CustomButton>
                  <CustomButton className={[classes.buttons]} variant='outlined'>
                    Cancel
                  </CustomButton>
                </Box>
              </TabPanel>
              <TabPanel value={value} index="two">
                <Typography className={classes.securityHeading}>Change Password</Typography>
                <Grid container spacing={3} pt={5}>
                  {accountSecurityData?.map((eachInput, index) => (
                    <Grid item xs={12} key={index}>
                      <CustomInput
                        name={eachInput?.name}
                        type={eachInput?.type}
                        required={eachInput?.required}
                        label={eachInput?.label}
                        placeholder={eachInput?.placeholder}
                      />
                    </Grid>
                  ))}

                </Grid>
                <Box className={classes.profileFooter}>
                  <CustomButton className={[classes.updatePwButton]}>
                    Update Password
                  </CustomButton>
                </Box>
                <Box className={classes.securityFooterParent}>
                  <Box className={classes.securityFooterChild}>
                    <CustomButton className={[classes.faButton]}>
                      Setup 2FA
                    </CustomButton>
                    <img src={logo} alt="Logo" className={classes.securityFooterImage} />
                  </Box>
                </Box>
              </TabPanel>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </CardLayout>
  );
};

export default Account;
