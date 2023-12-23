import { Box, Checkbox, FormControlLabel, SelectChangeEvent, Stack, Typography } from '@mui/material';
import { CustomButton, CustomInput, CustomPhone, CustomSelector } from '../components';
import { SigupData } from '../constants';
import React, { ChangeEvent, ReactNode, useState } from 'react';
import { CountryData } from 'react-phone-input-2';
import { useFormik } from 'formik';
import { signUpSchema } from '../schemas';
import { logo } from '../assets';

interface UserData {
  sponsorName: string;
  username: string;
  firstName: string;
  lastName: string;
  country: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp = () => {
  const [userData, setUserData] = useState<UserData>({
    sponsorName: '',
    username: '',
    firstName: '',
    lastName: '',
    country: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
    initialValues: {
      sponsorName: '',
      username: '',
      firstName: '',
      lastName: '',
      country: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log(values);
    }
  });

  const HandlePhoneChange = (value: string, country: CountryData, event: ChangeEvent<HTMLInputElement>, formattedValue: string) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      phone: value,
    }));
  };

  const handleCountryChange = (event: SelectChangeEvent<any>, child: ReactNode, name: string) => {
    const value = event.target.value as string;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  return (
    <Stack width="100%" sx={{ my: 10 }} direction="row" alignItems="center" justifyContent="center">
      <Box sx={{ width: { xs: "100%", md: "620px" }, border: { xs: "0px", md: "1px solid #1D3B6A" }, borderRadius: "20px", }}>
        <Stack direction="column" alignItems="center" justifyContent="center" sx={{ p: { xs: "30px", md: "78px" } }}>
          <form style={{ display: "flex", justifyContent: 'center', alignItems: "center", flexDirection: "column" }} onSubmit={handleSubmit}>
            <img src={logo} width="175px" height="43px" alt="logo" />
            <Typography sx={{ color: "#1D3B6A", fontSize: "30px", fontWeight: 600, my: 1 }}>Sign up</Typography>
            <Stack direction={"column"} gap={3} sx={{ width: "100%" }}>
              {SigupData?.map((eachInput, index) => (
                <React.Fragment key={index}>
                  {eachInput?.type === "select" ?
                    <CustomSelector onChange={handleCountryChange} name={eachInput?.name} options={eachInput?.options} required={eachInput?.required} label={eachInput?.label} placeholder={eachInput?.placeholder} />
                    : eachInput?.type === "phone" ?
                      <CustomPhone name={eachInput?.name} onChange={HandlePhoneChange} />
                      :
                      <>
                        <CustomInput
                          error={!!(errors[eachInput?.name as keyof UserData] && touched[eachInput?.name as keyof UserData])}
                          helperText={errors[eachInput?.name as keyof UserData]}
                          value={values[eachInput?.name as keyof UserData]}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          name={eachInput?.name}
                          type={eachInput?.type}
                          required={eachInput?.required}
                          label={eachInput?.label}
                          placeholder={eachInput?.placeholder}
                        />

                      </>
                  }
                </React.Fragment>
              ))}
              <FormControlLabel control={<Checkbox defaultChecked />} label="I have read and accepted the terms & conditions of Nenja (click here to read)" />
            </Stack>
            <Stack direction={"column"} gap={2} width="100%" mt={2}>
              <CustomButton type color='secondary' sx={{ height: "50px" }}>Sign up</CustomButton>
              <Box>
                <Typography mb={1} textAlign="center">Already have an account?</Typography>
                <CustomButton sx={{ height: "50px" }}>Sign in</CustomButton>
              </Box>
            </Stack>
          </form>
        </Stack>
      </Box>
    </Stack>
  )
}

export default SignUp;
