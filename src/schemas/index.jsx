import * as Yup from "yup";

export const signupSchema = Yup.object({
    name : Yup.string().min(2).max(18).required("Please Enter Valid Name"),
    email : Yup.string().email().required("Please Enter Valid Email Id"),
    password : Yup.string().min(6).required("Please Enter Valid Password And More Then 6 Characters"),
    verify : Yup.string().required().oneOf([Yup.ref('password'),null] , "Password Must Match")
});
