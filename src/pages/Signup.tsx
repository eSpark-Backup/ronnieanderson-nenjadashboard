import { Box, Checkbox, FormControlLabel, SelectChangeEvent, Stack, Typography } from '@mui/material';
import { CustomButton, CustomInput, CustomPhone, CustomSelector } from '../components';
import { SigupData } from '../constants';
import React, { ChangeEvent, ReactNode, useEffect } from 'react';
import { CountryData } from 'react-phone-input-2';
import { useFormik } from 'formik';
import { signUpSchema } from '../schemas';
import { logo } from '../assets';
import { styles } from '../utils/styles';

const SignUp = () => {
  const classes = styles.authStyles()

  const { values, setValues, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
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
      console.log(values, "values");
    }
  });

  const HandlePhoneChange = (value: string, country: CountryData, event: ChangeEvent<HTMLInputElement>, formattedValue: string) => {
    setValues({ ...values, phone: value });
  };

  const handleCountryChange = (event: SelectChangeEvent<any>, child: ReactNode, name: string) => {
    const value = event.target.value as string;
    setValues({ ...values, [name]: value });
  };

  useEffect(() => {
    console.log(values, "userData");
  }, [values])

  return (
    <Stack width="100%" my={10} direction="row" alignItems="center" justifyContent="center">
      <Box className={classes.mainContainer}>
        <Stack direction="column" alignItems="center" justifyContent="center" className={classes.innerBox}>
          <form className={classes.form} onSubmit={handleSubmit}>
            <img src={logo} width="175px" height="43px" alt="logo" />
            <Typography color="#1D3B6A" fontSize="30px" fontWeight={600} my={1}>Sign up</Typography>
            <Stack direction={"column"} gap={3} width="100%">
              {SigupData?.map((eachInput, index) => (
                <React.Fragment key={index}>
                  {eachInput?.type === "select" ?
                    <CustomSelector onChange={handleCountryChange} name={eachInput?.name} options={eachInput?.options} required={eachInput?.required} label={eachInput?.label} placeholder={eachInput?.placeholder} />
                    : eachInput?.type === "phone" ?
                      <CustomPhone name={eachInput?.name} onChange={HandlePhoneChange} />
                      :
                      <>
                        <CustomInput
                          error={!!(errors[eachInput?.name as keyof IUserData] && touched[eachInput?.name as keyof IUserData])}
                          helperText={errors[eachInput?.name as keyof IUserData]}
                          value={values[eachInput?.name as keyof IUserData]}
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
              <CustomButton type={"submit"} color='secondary' className={[classes.buttons]}>Sign up</CustomButton>
              <Box>
                <Typography mb={1} textAlign="center">Already have an account?</Typography>
                <CustomButton className={[classes.buttons]}>Sign in</CustomButton>
              </Box>
            </Stack>
          </form>
        </Stack>
      </Box>
    </Stack>
  )
}

export default SignUp;
