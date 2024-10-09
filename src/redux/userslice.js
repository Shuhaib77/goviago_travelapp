import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  confirmpass: "",
  details:[]
};
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    email: (state, action) => {
      state.email = action.payload;
    },
    password: (state, action) => {
      state.password = action.payload;
    },
    confirmpassword: (state, action) => {
      state.confirmpass = state.password;
    },
    details:(state,action)=>{
        state.details=[...state.details,{email:state.email,password:state.password,confirmpass:state.confirmpass}]

    }
  },
});

export const{email,password,confirmpassword,details}=usersSlice.actions

export default usersSlice.reducer