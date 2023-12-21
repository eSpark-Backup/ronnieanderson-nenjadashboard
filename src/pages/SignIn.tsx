import { Box, Checkbox, FormControlLabel, FormGroup, Stack, Typography } from '@mui/material';
import { CustomButton, CustomInput } from '../components';
import logoImage from "../assets/Dashboard_logo.png";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

const SignIn = () => {
  return (
    <Stack width="100%" height="100vh" direction="row" alignItems="center" justifyContent="center">
      <Box sx={{ width: { xs: "100%", md: "660px" }, border: { xs: "0px", md: "1px solid #1D3B6A" }, borderRadius: "20px" }}>
        <Stack direction="column" alignItems="center" justifyContent="center" sx={{ p: { xs: "30px", md: "78px" } }}>
          <img src={logoImage} width="175px" height="43px" alt="logo" />
          <Typography sx={{ fontSize: "30px", fontWeight: 600, mt: 1 }}>Sign in</Typography>
          <Typography sx={{ fontSize: "20px", fontWeight: 300, mb: 1 }}>to continue to Nenja</Typography>
          <CustomInput startIcon={<PersonIcon style={{ color: '#E2E2E2' }} />} sx={{ my: 1 }} type={"email"} placeholder="philipjohn2023@gmail.com" />
          <CustomInput startIcon={<LockIcon style={{ color: '#E2E2E2' }} />} sx={{ my: 1 }} type={"password"} placeholder="•••••••••" />
          <Stack flexWrap="wrap" width="100%" direction="row" alignItems="center" justifyContent="space-between">
            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
            </FormGroup>
            <CustomButton variant="text" sx={{ width: "max-content" }}>Forgot password?</CustomButton>
          </Stack>
          <CustomButton sx={{ width: "200px", mt: 5, height: "50px" }}>Sign in</CustomButton>
          <Typography sx={{ fontSize: "16px", mt: 5 }}>Terms and Conditions <span style={{ margin: "0 10px" }}>|</span> Privacy Policy</Typography>
        </Stack>
      </Box>
    </Stack>
  )
}

export default SignIn