import * as yup from "yup";

export const EnquiryFormSchema = yup.object().shape({
  firstname: yup.string().required("Required First Name"),
  lastname: yup.string().required("Required Last Name"),
  email: yup
    .string()
    .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,"Please Enter Valid Email")
    .required("Email Required"),
  phone: yup
    .string()
    .matches(/^\d{10}$/, "Please Enter valid number")
    .required("Required Phone No."),
  projectdescription: yup.string().required("Required Project Description"),
});