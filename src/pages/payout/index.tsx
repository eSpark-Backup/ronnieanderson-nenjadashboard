import { Box } from '@mui/system';
import CardLayout from '../../components/Card/CardLayout/CardLayout'
import { AvailableBalance } from '../../assets';
import { OutlinedInput, Typography } from '@mui/material';
import { CustomButton } from '../../components';
import { payOutDetailsTypeOne, payOutDetailsTypeTwo } from '../../constants';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { styles } from '../../utils/styles';

const Payout = () => {
  const classes = styles.payOutScreenStyles();

  return (
    <div>
      <CardLayout className={[classes.root]}>
        <Typography mt={2} variant="h6">
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
                <CustomButton className={[classes.button, index === 0 ? classes.padding0 : classes.padding60]}>
                  {eachItem?.buttonText}
                </CustomButton>
                <OutlinedInput inputProps={{ className: classes.textRight }} className={classes.inputGroupTextfield1} placeholder={eachItem?.inputText} />
              </div>
            ))}
            {payOutDetailsTypeTwo?.map((eachItem, index) => (
              <Box className={classes.inputGroupTypeTwo} key={index}>
                <div className={classes.inputGroupTypeTwoChild}>
                  <CustomButton className={[classes.button, index === 0 ? classes.padding0 : classes.padding60]}>
                    {eachItem?.buttonText}
                  </CustomButton>
                  <OutlinedInput inputProps={{ className: classes.textRight }} className={classes.inputGroupTextfield2} placeholder={eachItem?.inputText} endAdornment={eachItem?.hasIcon ? <ContentCopyIcon className={classes.icon} /> : null} />
                  {eachItem?.hasButton ? <CustomButton className={[classes.button2]}>
                    {eachItem?.button2Text}
                  </CustomButton> : null}
                </div>
              </Box>
            ))}
          </Box>
          <Box className={classes.balanceCardFooter}>
            <CustomButton className={[classes.button3]}>
              Save
            </CustomButton>
          </Box>
        </Box>
      </CardLayout>
    </div>
  )
}

export default Payout