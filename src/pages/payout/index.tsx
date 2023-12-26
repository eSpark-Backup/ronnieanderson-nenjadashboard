import { Box } from '@mui/system';
import CardLayout from '../../components/Card/CardLayout/CardLayout'
import { makeStyles } from '@mui/styles';
import { AvailableBalance } from '../../assets';
import { Button, OutlinedInput, Stack, TextField, Typography } from '@mui/material';
import { CustomButton } from '../../components';
import { payOutDetailsTypeOne, payOutDetailsTypeTwo } from '../../constants';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { styles } from '../../utils/styles';




const Payout = () => {
  const classes = styles.payOutScreenStyles();


  return (
    <div>
      <CardLayout sx={{ px: { xs: 1, md: 5 },minHeight:"80vh" }}>
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
                <OutlinedInput inputProps={{ style: { textAlign: 'right' } }}  className={classes.inputGroupTextfield1} placeholder={eachItem?.inputText} />
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