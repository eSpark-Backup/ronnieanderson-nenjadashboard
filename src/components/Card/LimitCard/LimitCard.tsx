import { Box } from '@mui/material'
import pic from "../../../assets/5X.png"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const LimitCard = () => {
    return (
        <Box sx={{ width: "100%", height: "220px", backgroundColor: "lightgrey", borderRadius: "15px", position: "relative" }}>
            <img src={pic} alt='5X' style={{ position: "absolute", right: 20, top: 0 }} />
            <div style={{ height: "80px", width: "120px", position: "absolute", top: 60, left: 30 }}>
                <CircularProgressbar value={70} text='25,000' styles={buildStyles({
        pathColor: '#00CCF2',
        textColor: 'black',
        trailColor: 'darkgrey', // Set this to transparent if you don't want a trail
      })} />
            </div>
            <div style={{ position: 'absolute', right: 10, bottom: 30, fontWeight:"400" }}>
                <p>Limit:</p>
            </div>
            <div style={{ width: "120px", height: "30px", backgroundColor: "#51C9F4", position: 'absolute', right: 0, bottom: 10, borderTopLeftRadius: "18px", borderBottomLeftRadius:"18px", display:"flex", justifyContent:"center", alignItems:"center", color:"white" }}>
                $100,000
            </div>
        </Box>
    )
}

export default LimitCard
