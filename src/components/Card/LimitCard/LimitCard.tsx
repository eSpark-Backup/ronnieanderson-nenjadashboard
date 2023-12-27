import { Box } from '@mui/material'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Limit5x } from '../../../assets';
import { styles } from '../../../utils/styles';

const LimitCard = () => {
    const classes = styles.cardStyles({})
    return (
        <Box className={classes.limitCardContainer}>
            <img src={Limit5x} alt='5X' className={classes.limitCardImg} />
            <div className={classes.limitCardProgress}>
                <CircularProgressbar value={70} text='25,000' styles={buildStyles({
                    pathColor: '#00CCF2',
                    textColor: 'black',
                    trailColor: 'darkgrey', // Set this to transparent if you don't want a trail
                })} />
            </div>
            <div className={classes.limitCardLimit}>
                <p>Limit:</p>
            </div>
            <div className={classes.limitCardCount}>
                $100,000
            </div>
        </Box>
    )
}

export default LimitCard
