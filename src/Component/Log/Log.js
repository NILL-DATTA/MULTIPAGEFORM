import React,{useState} from 'react'
import './Log.css'

import {useHistory,Link} from 'react-router-dom'


import { useDispatch,useSelector } from 'react-redux'

const validateEmail=RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
const validatePassword=RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)

export default function Login() {
    
    const dispatchMethod=useDispatch();
    const userData=useSelector(stateValue=>stateValue.authData)
    const [inputState,setInputState]=useState({
        isError:{
        
            email:"",
            password:""

    }}
        )
    const handleChange=(event)=>{
       console.log(event)
        let{name,value}=event.target
        let isErrors={...inputState.isError}
        switch(name){
      
            case "email" :
                isErrors.email=validateEmail.test(value)? "":"email pattern does not match";
                break;
                case "password":
                    isErrors.password=validatePassword.test(value) ? "":"password pattern should be correct";
                    break;
                    default:
                        break;


        }
        setInputState({...inputState,[name]:value,isError:isErrors})
        console.log(inputState)
    }
    const submithandler=(event)=>{
        event.preventDefault()
        console.log(inputState)
        let user=inputState;
        console.log(user)
       
    }
    const history=useHistory()
    return (
        <div>
             <form onSubmit={submithandler} class="qw"  >
                 <h1>LOGIN HERE</h1>

               
                <input type='email' class='ru' name="email" onChange={handleChange}  placeholder='email'></input>
                {inputState.isError.email.length>0 && ( <span style={{color:"red"}}>{inputState.isError.email}</span>)}
                <input type='text' class='ru' name="password" onChange={handleChange}  placeholder='password'></input>
                {inputState.isError.password.length>0 && ( <span style={{color:"red"}}>{inputState.isError.password}</span>)}
                <button class="to" >Submit</button>
                <h2>DO YOU HAVE ACCOUNT</h2>
                <Link id="btn"onClick={() =>history.push(`/home/`)}>Click</Link> 
            </form>
        </div>
    )
}



