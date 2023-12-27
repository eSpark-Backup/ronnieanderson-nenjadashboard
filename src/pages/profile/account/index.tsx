import { makeStyles } from '@mui/styles';
import CardLayout from '../../../components/Card/CardLayout/CardLayout';
import { Box } from '@mui/system';
import { Grid, ThemeProvider, Typography, createTheme } from '@mui/material';
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

const useStyles = makeStyles({
  ProfileMainContainer: {
    display: 'flex',
  },
  profileName: {
    fontSize: 20,
    fontWeight: 600,
  },
  profileSectionContainer: {
    backgroundColor: '#F9F9F9',
    height: "100%",
    paddingTop: "10px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    rowGap: "10px"

  },
  diamondHeading: {
    fontSize: 16,
  },
});

const Account = () => {
  const classes2 = styles.profileMainStyles();
  const classes = useStyles();
  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const theme = createTheme({
    components: {
      MuiTabs: {
        styleOverrides: {
          indicator: {
            backgroundColor: '#51C9F4',
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            color: '#7C7F84',
            '&.Mui-selected': {
              color: '#1D3B6A',
              fontWeight: "bolder",

            },
          },
        },
      },
    },
  });

  return (
    <CardLayout >
      <Box className={classes.ProfileMainContainer}>
        <Grid container>
          <Grid item xs={12} md={3}>
            <Box className={classes.profileSectionContainer}>
              <Box className={classes2.profileBox}>
                <img src={profile} alt="Profile" />
                <img src={pic} alt="" className={classes2.imageIcon} />
              </Box>
              <Typography className={classes2.userName}>Philip John</Typography>
              <Box>
                <img src={rank} alt="Rank" />
              </Box>
              <Box>
                <Typography className={classes2.userRank1}>Rank</Typography>
                <Typography className={classes2.userRank2}>Emerald</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box className={classes2.profileConatiner}>
              <ThemeProvider theme={theme}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="secondary tabs example"
                >
                  <Tab value="one" label="Account Setting" />
                  <Tab value="two" label="Security" />
                </Tabs>
              </ThemeProvider>
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
                                sx={{ border: "1px solid #D7D7D7" }}
                              />

                            </>
                        }
                      </React.Fragment>
                    </Grid>
                  ))}
                </Grid>
                <Box className={classes2.profileFooter}>
                  <CustomButton sx={{ width: "150px", height: "50px" }}>
                    Update
                  </CustomButton>
                  <CustomButton sx={{ width: "150px", height: "50px", background: "transparent", color: "#1D3B6A", border: "1px solid #1D3B6A" }}>
                    Cancel
                  </CustomButton>
                </Box>
              </TabPanel>
              <TabPanel value={value} index="two">
                <Typography className={classes2.securityHeading}>Change Password</Typography>
                <Grid container spacing={3} pt={5}>
                  {accountSecurityData?.map((eachInput, index) => (
                    <Grid item xs={12} key={index}>
                      <CustomInput
                        name={eachInput?.name}
                        type={eachInput?.type}
                        required={eachInput?.required}
                        label={eachInput?.label}
                        placeholder={eachInput?.placeholder}
                        sx={{ border: "1px solid #D7D7D7" }}
                      />
                    </Grid>
                  ))}

                </Grid>
                <Box className={classes2.profileFooter}>
                  <CustomButton sx={{ width: "200px", height: "50px" }}>
                    Update Password
                  </CustomButton>
                </Box>
                <Box className={classes2.securityFooterParent}>
                  <Box className={classes2.securityFooterChild}>
                    <CustomButton sx={{ width: "90%", height: "70px" }}>
                      Setup 2FA
                    </CustomButton>
                    <img src={logo} alt="Logo" className={classes2.securityFooterImage} />
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
