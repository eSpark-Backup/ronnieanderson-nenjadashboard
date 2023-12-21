import { Box, Checkbox, Stack, Typography } from '@mui/material';
import { CustomButton, CustomInput } from '../components';
import logoImage from "../assets/Dashboard_logo.png";
import { SigupData } from '../constants';
import React from 'react';

const SignUp = () => {
  return (
    <Stack width="100%" height="100vh" direction="row" alignItems="center" justifyContent="center">
      <Box sx={{ width: { xs: "100%", md: "620px" }, border: { xs: "0px", md: "1px solid #1D3B6A" }, borderRadius: "20px", }}>
        <Stack direction="column" alignItems="center" justifyContent="center" sx={{ p: { xs: "30px", md: "78px" } }}>
          <img src={logoImage} width="175px" height="43px" alt="logo" />
          <Typography sx={{ color: "#1D3B6A", fontSize: "30px", fontWeight: 600, my: 1 }}>Sign up</Typography>
          <Stack direction={"column"} gap={3} sx={{ width: "100%" }}>
            {SigupData?.map((eachInput, index) => (
              <React.Fragment key={index}>
                <CustomInput options={eachInput?.options} type={eachInput?.type} required={eachInput?.required} label={eachInput?.label} placeholder={eachInput?.placeholder} />
              </React.Fragment>
            ))}
          </Stack>
          <Stack direction={"row"} width="100%" mt={1}>
            <Checkbox defaultChecked size="small" />
            <Typography sx={{ fontSize: "16px", color: "black" }}>I have read and accepted the terms & conditions of Nenja (click here to read)</Typography>
          </Stack>
          {/* <Typography sx={{ color: "#1D3B6A", fontSize: "30px", fontWeight: 600, my: 1 }}>Sign up</Typography>
          <CustomInput type={"text"} required label="Sponsor Username" placeholder="NENJA123456789" /> */}
          <Stack direction={"column"} gap={2} width="100%" mt={2}>
            <CustomButton sx={{ backgroundColor: "#E2E2E2", color: "#1D3B6A", fontWeight: "bold" }}>Sign Up</CustomButton>
            <Box>
              <Typography mb={1} textAlign="center">Already have an account?</Typography>
              <CustomButton>Sign in</CustomButton>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  )
}

export default SignUp