import {  createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstname:null,
    lastname:null,
    email:null,
    password:null,
  };

  const Slice =createSlice({
      name:'register',
      initialState,
      reducers:{
          setSliceData : (state,action)=>{
              state.fname=action.payload.fname
              state.lastname=action.payload.lastname
              state.email=action.payload.email
              state.password=action.payload.password
          }
      }
  });
  export const{setSliceData}=Slice.actions
  export default Slice.reducer