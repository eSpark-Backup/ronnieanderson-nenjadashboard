import { Box } from '@mui/system';
import CardLayout from '../../components/Card/CardLayout/CardLayout'
import { makeStyles } from '@mui/styles';
import { AvailableBalance } from '../../assets';
import { Typography } from '@mui/material';


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
    fontWeight: 'bold',
  }
});


const Payout = () => {
  const classes = useStyles();


  return (
    <div>
      <CardLayout sx={{ px: { xs: 1, md: 5 } }}>
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
        </Box>
      

        {/* details section  */}
        <Box>

        </Box>
      </CardLayout>
    </div>
  )
}

export default Payout