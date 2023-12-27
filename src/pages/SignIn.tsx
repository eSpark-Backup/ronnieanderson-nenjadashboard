import { Box, Checkbox, FormControlLabel, FormGroup, Stack, Typography } from '@mui/material';
import { CustomButton, CustomInput } from '../components';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { useFormik } from 'formik';
import { signInSchema } from '../schemas';
import { logo } from '../assets';
import { styles } from '../utils/styles';


const SignIn: React.FC = () => {
  const classes = styles.authStyles()

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: signInSchema,
    onSubmit: (values) => {
      console.log(values);
    }
  });

  return (
    <Stack width="100%" height="100vh" direction="row" alignItems="center" justifyContent="center">
      <Box className={classes.mainContainer}>
        <Stack direction="column" alignItems="center" justifyContent="center" className={classes.innerBox}>
          <form className={classes.form} onSubmit={handleSubmit}>
            <img src={logo} width="175px" height="43px" alt="logo" />
            <Typography fontSize="30px" fontWeight={600} mt={1}>Sign in</Typography>
            <Typography fontSize="20px" fontWeight={300} mb={1}>to continue to Nenja</Typography>

            <CustomInput
              name="email"
              startIcon={<PersonIcon className={classes.icon} />}
              className={[classes.signInInputs]}
              type="email"
              placeholder="philipjohn2023@gmail.com"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              error={!!(errors.email && touched.email)}
              helperText={touched.email ? errors.email : ''}
            />

            <CustomInput
              onBlur={handleBlur}
              onChange={handleChange}
              name="password"
              startIcon={<LockIcon className={classes.icon} />}
              className={[classes.signInInputs]}
              type="password"
              placeholder="•••••••••"
              value={values.password}
              error={!!(errors.password && touched.password)}
              helperText={touched.password ? errors.password : ''}
            />

            <Stack flexWrap="wrap" width="100%" direction="row" alignItems="center" justifyContent="space-between">
              <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
              </FormGroup>
              <CustomButton variant="text" className={[classes.forgotPasswordButton]}>Forgot password?</CustomButton>
            </Stack>
            <CustomButton type={"submit"} className={[classes.signInButton]}>Sign in</CustomButton>
            <Typography fontSize="15px" mt={5}>Terms and Conditions <span className={classes.divider}>|</span> Privacy Policy</Typography>
          </form>
        </Stack>
      </Box>
    </Stack>
  );
}

export default SignIn;
