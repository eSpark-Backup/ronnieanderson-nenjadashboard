import { Box } from '@mui/system';
import CardLayout from '../../components/Card/CardLayout/CardLayout'
import { makeStyles } from '@mui/styles';
import { AvailableBalance } from '../../assets';
import { Button, OutlinedInput, Stack, TextField, Typography } from '@mui/material';
import { CustomButton } from '../../components';
import { payOutDetailsTypeOne, payOutDetailsTypeTwo } from '../../constants';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';


const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },

  balanceCardContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: "center",
    flexDirection: "column",
    gap: "50px"
  },

  balanceCard: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    background: '#fff',
    borderRadius: '10px',
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)',
    marginBottom: '20px',
    width: '200px',
  },

  balanceCardHeadingBox: {
    marginLeft: '10px',
  },
  balacneCardTitle: {
    fontSize: '14px',
  },

  balacneCardValue: {
    fontSize: '20px',
    fontWeight: 'bolder',
    color: "red"
  },
  balanceInputsContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "30px"
  },
  inputGroupButton: {
    backgroundColor: "#7C7F84",
    borderRadius: "5px 0px 0px 5px"
  },
  inputGroupTextfield1: {
    borderTopLeftRadius: "5px !important",
    borderBottomLeftRadius: "5px !important",
    borderTopRightRadius: "none",
    borderBottomRightRadius: "none",
    width: "50%",
    textAlign: "right",
    height: "50px"
  },
  inputGroupTextfield2: {
    borderTopLeftRadius: '5px !important',
    borderBottomLeftRadius: '5px !important',
    borderTopRightRadius: 'none',
    borderBottomRightRadius: 'none',
    width: '51%',
    height: "50px"
  },

  inputGroupTypeOne: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  inputGroupTypeTwo: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  inputGroupTypeTwoChild: {
    width: "66%",
    marginRight: "8px",
    display: "flex",
    flexDirection: "row"
  },
  balanceCardFooter: {
    width: "70%",
    display: "flex",
    justifyContent: "flex-end"
  },
  icon: {
    marginLeft: "3px",
    fontSize: "16px !important",
    color: "#7C7F84"
  },
  '@media (max-width:1200px)': {
    inputGroupTypeTwoChild: {
      width: "100%",
    },
    inputGroupTypeTwo: {
      justifyContent: "center"
    },
    balanceCardFooter: {
      justifyContent: "center"
    }
  },
  '@media (max-width: 700px)': {
    inputGroupTypeOne: {
      flexDirection: "column",
      rowGap: "5px"
    },
    inputGroupTextfield1: {
      width: "100%"
    },
    inputGroupTypeTwo: {
      justifyContent: "flex-start"
    },
    inputGroupTypeTwoChild: {
      justifyContent: "flex-start",
      flexDirection: "column",
      width: "100%",
      rowGap: "5px"
    },
    inputGroupTextfield2: {
      width: "100%"
    },
    balanceCardFooter: {
      width: "100%",
      justifyContent: "flex-start"
    }
  }

});

const inputStyle = {
  borderTopRightRadius: '5px !important', // Adjust the value as needed
  borderBottomRightRadius: '5px !important',
  borderTopLeftRadius: '0px !important', // Adjust the value as needed
  borderBottomLeftRadius: '0px !important',
  outline: "none", // Adjust the value as needed
};


const Payout = () => {
  const classes = useStyles();


  return (
    <div>
      <CardLayout sx={{ px: { xs: 1, md: 5 },height:"80vh" }}>
        <Typography variant="h6">
          Payout
        </Typography>

        <br />


        {/* balance card  */}
        <Box className={classes.balanceCardContainer}>
          <Box className={classes.balanceCard}>
            <Box>
              <img src={AvailableBalance} width={"35px"} alt="loading" />
            </Box>
            <Box className={classes.balanceCardHeadingBox}>
              <Typography className={classes.balacneCardTitle}>Available Balance</Typography>
              <Typography className={classes.balacneCardValue}>$15,000</Typography>
            </Box>
          </Box>
          <Box className={classes.balanceInputsContainer}>
            {payOutDetailsTypeOne.map((eachItem, index) => (
              <div className={classes.inputGroupTypeOne} key={index}>
                <CustomButton sx={{
                  backgroundColor: "#7C7F84", borderRadius: "5px 0px 0px 5px", height: "50px", paddingLeft: index === 0 ? "0px" : "60px", minWidth: "250px", maxWidth: "260px", fontWeight: "300", '@media (max-width: 700px)': {
                    width: "100%",
                    maxWidth: "none",
                    paddingLeft: "0px",
                  },
                }}>
                  {eachItem?.buttonText}
                </CustomButton>
                <OutlinedInput style={inputStyle} inputProps={{ style: { textAlign: 'right' } }} className={classes.inputGroupTextfield1} placeholder={eachItem?.inputText} />
              </div>
            ))}
            {payOutDetailsTypeTwo?.map((eachItem, index) => (
              <Box className={classes.inputGroupTypeTwo} key={index}>
                <div className={classes.inputGroupTypeTwoChild}>
                  <CustomButton sx={{
                    backgroundColor: "#7C7F84", borderRadius: "5px 0px 0px 5px", height: "50px", width: "250px", fontWeight: "300", '@media (max-width: 700px)': {
                      width: "100%",
                      maxWidth: "none",
                      paddingLeft: "0px",
                    },
                  }}>
                    {eachItem?.buttonText}
                  </CustomButton>
                  <OutlinedInput inputProps={{ style: { textAlign: 'right' } }} className={classes.inputGroupTextfield2} placeholder={eachItem?.inputText} endAdornment={eachItem?.hasIcon ? <ContentCopyIcon className={classes.icon} /> : null} />
                  {eachItem?.hasButton ? <CustomButton sx={{
                    height: "50px", width: "150px", fontWeight: "300", marginLeft: "10px", '@media (max-width: 700px)': {
                      width: "100%",
                      maxWidth: "none",
                      paddingLeft: "0px",
                      marginLeft: "0px"
                    },
                  }}>
                    {eachItem?.button2Text}
                  </CustomButton> : null}
                </div>
              </Box>
            ))}
          </Box>
          <Box className={classes.balanceCardFooter}>
            <CustomButton sx={{
              height: "50px", width: "150px", fontWeight: "300", marginRight: "15px", '@media (max-width: 700px)': {
                width: "100%",
                maxWidth: "none",
                paddingLeft: "0px",
                marginLeft: "0px"
              },
            }}>
              Save
            </CustomButton>
          </Box>
        </Box>
      </CardLayout>
    </div>
  )
}

export default Payout