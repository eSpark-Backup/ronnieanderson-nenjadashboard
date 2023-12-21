import { Box, Stack, Typography } from '@mui/material';
import { CustomButton, CustomInput } from '../components';
import logoImage from "../assets/Dashboard_logo.png";

const SignUp = () => {
  return (
    <Stack width="100%" height="100vh" direction="row" alignItems="center" justifyContent="center">
      <Box sx={{ width: { xs: "100%", md: "660px" }, border: { xs: "0px", md: "1px solid #1D3B6A" }, borderRadius: "20px" }}>
        <Stack direction="column" alignItems="center" justifyContent="center" sx={{ p: { xs: "30px", md: "78px" } }}>
          <img src={logoImage} width="175px" height="43px" alt="logo" />
          <Typography sx={{ color: "#1D3B6A", fontSize: "30px", fontWeight: 600, my: 1 }}>Sign up</Typography>
          <CustomInput type={"text"} required label="Sponsor Username" placeholder="NENJA123456789" />
          <Box width="100%" mt={2}>
            <Typography mb={1} textAlign="center">Already have an account?</Typography>
            <CustomButton>Sign in</CustomButton>
          </Box>
        </Stack>
      </Box>
    </Stack>
  )
}

export default SignUp