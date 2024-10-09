import { Input } from "@material-tailwind/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { useFormik } from "formik";


function Login() {
  // const {email,password}=useSelector((state)=>state.userdata)

  const dispatch=useDispatch()

  const {errors,handleBlur,handleChange,handleSubmit,values}=useFormik({

    initialValues:{
      email:"",
      password:"",
      confirmpassword:""
    },



  })


  return (
    <>
      <div className=" flex justify-center items-center   h-[100vh] [w-100vh] bg-login-bg bg-cover ">
        <div className=" absolute h-full w-full bg-black bg-opacity-50">

        </div>
        <div className="z-30 w-[100vh] flex justify-between items-center h-[50vh] bg-[rgba(48,89,121,0.97)]  ">
          <div className="w-[50%] h-[100%]  ">
            <img src="https://www.keralatourism.org/images/homecontentimage/desktop/ecotourism.jpg" className="w-[100%] h-[100%]"   alt="" />

          </div>
          <div className="mb-5 mt-5 3 w-[60vh] mr-5 ml-5 ">
            <h1 className="text-center text-3xl font-bold mb-8 text-white ">Login</h1>
            <div className="mb-5">
              {" "}
              <Input className="mb-5 text-white "  label="mail" onChange={handleChange} onBlur={handleBlur} value={values.email} id="email"></Input>
              {
                console.log(values)
                
              }
              
            </div>
            <div className="mb-5 text-white ">
              {" "}
              <Input className="mb-5 text-white  " label="password" onChange={handleChange} onBlur={handleBlur} value={values.password} id="password"></Input>
            </div>
            <div className="mb-5  ">
              {" "}
              <Input className="mb-5 text-white " label="confirmpassword" onChange={handleChange} onBlur={handleBlur} value={values.confirmpassword} id="confirmpassword" ></Input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
