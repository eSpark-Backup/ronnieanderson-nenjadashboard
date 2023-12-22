import * as Yup from "yup";

export const signUpSchema = Yup.object({
  sponsorName: Yup.string().min(3).max(25).required("Please Fill The Field"),
  username: Yup.string().min(3).max(25).required("Please Fill The Field"),
  firstName: Yup.string().min(3).max(25).required("Please Fill The Field"),
  lastName: Yup.string().min(3).max(25).required("Please Fill The Field"),
  email: Yup.string().email().required("Please Fill The Field"),
  password: Yup.string().min(3).max(10).required("Please Fill The Field"),
  confirmPassword: Yup.string()
    .required("Please fill in this field")
    .oneOf([Yup.ref("password")], "Password and Confirm Password must match"),
  country: Yup.string().required("Please Select any option"),
  phone: Yup.string().required("Please Enter a Valid Phone Number"), 
});

export const signInSchema = Yup.object({
  email: Yup.string().email().required("Please Fill The Field"),
  password: Yup.string().min(3).max(10).required("Please Fill The Field"),
});
