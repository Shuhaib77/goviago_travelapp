import { Input } from "@material-tailwind/react";
import React from "react";

function Register() {
  return (
    <>
   
      <div className="w-[100vw] h-[100vh] flex justify-center items-center absalute bg-black bg-opacity-100   bg-login-bg2 bg-no-repeat bg-cover    ">
      <div className=" absolute h-full w-full bg-black bg-opacity-40">

</div>
        <div className="bg-[#21513897]  mb-10 w-[50vh] h-[50vh] flex justify-center items-center  border rounded-2xl">
          <div className="flex-col justify-center items-center w-[50vh]  m-5">
            <h1 className="text-center text-5xl font-bold mb-10 text-brown-50">
              REGISTER
            </h1>
            <div className="mb-5 bg-white rounded-lg">
              <Input label="email"></Input>
            </div>
            <div className="mb-5 bg-white rounded-lg ">
              <Input label="password"></Input>
            </div>
            <div className="bg-white rounded-lg ">
              <Input label="confirmpassword "></Input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
