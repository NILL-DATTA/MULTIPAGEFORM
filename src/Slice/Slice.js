import {  createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstname:null,
    lastname:null,
    email:null,
    password:null,
    city:null,
    state:null,
    pincode:null
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
              state.city=action.payload.city
              state.state=action.payload.state
              state.pincode=action.payload.pincode
          }
      }
  });
  export const{setSliceData}=Slice.actions
  export default Slice.reducer