import { makeStyles } from '@mui/styles';
import CardLayout from "../../../components/Card/CardLayout/CardLayout"
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { diamond } from '../../../assets';

const useStyles = makeStyles({
  ProfileMainContainer: {
    display: "flex", 
  },
  profileName: {
    fontSize: 20,
    fontWeight: 600
  },
  profileSectionContainer: {
    backgroundColor: "#F9F9F9",
    width: "20%",
  },
  diamondHeading: {
    fontSize: 16,
  }

});

const Account = () => {
  const classes = useStyles()

  return (
    <CardLayout sx={{ px: { xs: 1, md: 5 } }}>
      <Box className={classes.ProfileMainContainer}>
        <Box className={classes.profileSectionContainer}>
          <Box>
            <Box>
              {/* Profile picture */}
              <Typography className={classes.profileName} >Philip John</Typography>
            </Box>
          </Box>

          <Box>
            <Box>
            <img src={diamond} alt="diamond" />
            </Box>
            <Box>
            <Typography className={classes.diamondHeading}>Rank</Typography>
            <Typography className={classes.profileName} >Emerald</Typography>
            </Box>
          </Box>
        </Box>
        <Box>
        </Box>
      </Box>
    </CardLayout>
  )
}

export default Account