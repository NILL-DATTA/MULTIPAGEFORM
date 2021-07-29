 import React,{useState} from 'react'
 import './Home.css'
 const validateEmail=RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
 const validatePassword=RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
 const validatePincode=RegExp(/[0-9]/)
 
 
export default function Home(){
    const[page,setPage]=useState(1);
    const [inputState,setInputState]=useState({
        isError:{
            fname:"",
            lname:"",
            email:"",
            password:"",
            city:"",
            state:"",
            pincode:""


    },
    
}
        )
        const handleChange=(event)=>{
            console.log(event)
             let{name,value}=event.target
             let isErrors={...inputState.isError}
             switch(name){
              case "fname" :
                     isErrors.fname=value.length <4 ? "Atleast 4 character required":"";
                 break;
              case "lname":
                      isErrors.lname=value.length <4? "Atleast 4 character required ":"";
                  break;
                 case "email" :
                     isErrors.email=validateEmail.test(value)? "":"email pattern does not match";
                     break;
                     case "password":
                         isErrors.password=validatePassword.test(value) ? "":"password pattern should be correct";
                         break;
                         case "city":
                            isErrors.city=value.length <4? "Atleast 4 character required ":"";
                        break;
                        case "state":
                            isErrors.state=value.length <4? "Atleast 4 character required ":"";
                        break;
                        case "pincode":
                            isErrors.pincode=validatePincode.test(value) ? "":"pincode pattern should be correct";
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
               
            }

    {

    return(
        <div>
            <div style={{display:"flex",width:"100vw",justifyContent:"space-around"}}>






<div class="ty"onClick={()=>setPage(1)}> Home{page ===1 &&<span role="img">✔️</span>}</div>
<div class="ty" onClick={()=>setPage(1)}>Registration{page ===2 && <span role="img">✔️</span>}</div>
<div  class="ty"onClick={()=>setPage(1)}>Sign{page===3 && <span role="img">✔️</span>}</div>
            </div>
            {page ===1 && (
              
            <div class="yu">
               <form onSubmit={submithandler}>
                <h1>Registration
                😊

                </h1>
                <input type='text' class='ru' name="fname" onChange={handleChange}  placeholder='firstname' ></input>
                {inputState.isError.fname.length>0 && ( <span style={{color:"red"}}>{inputState.isError.fname}</span>)}
                <input type='text' class='ru' name="lname" onChange={handleChange} placeholder='lname' ></input>
                {inputState.isError.lname.length>0 && ( <span style={{color:"red"}}>{inputState.isError.lname}</span>)}
                <input type='text' class='ru' name="email" onChange={handleChange}  placeholder='eamil' ></input>
                {inputState.isError.email.length>0 && ( <span style={{color:"red"}}>{inputState.isError.email}</span>)}
                <input type='text' class='ru' name="password"onChange={handleChange} placeholder='password' ></input>
                {inputState.isError.password.length>0 && ( <span style={{color:"red"}}>{inputState.isError.password}</span>)}
               
                <h3>THANKS FOR YOUR REGISTRATION</h3>
                </form>
            </div> 
             ) }
            {page ===2 && (

            
            
            <div class="yu">
                  <form onSubmit={submithandler}>
                <h1>Registration 🙏</h1>
                <input type='text' class='ru' name="city" onChange={handleChange}   placeholder='city' ></input>
                {inputState.isError.city.length>0 && ( <span style={{color:"red"}}>{inputState.isError.city}</span>)}
                <input type='text' class='ru' name="state" onChange={handleChange}   placeholder='state' ></input>
                {inputState.isError.state.length>0 && ( <span style={{color:"red"}}>{inputState.isError.state}</span>)}
                <input type='text' class='ru' name="pincode" onChange={handleChange}   placeholder='pincode' ></input>
                {inputState.isError.pincode.length>0 && ( <span style={{color:"red"}}>{inputState.isError.pincode}</span>)}
                
                <h3>COMPLETE YOUR REGISTRATION</h3>
                </form>
            </div> 
              
            )}
            {page ===3 &&(
            
            <div class="yu">
<h1>DETAILS TAKEN 👍</h1>
            </div> )
            }
            {(page<1 || page >3)&&(
                <button class="bn"onClick={()=>setPage(1)}>Reset</button>
            )}
            <button class="ip" onClick={()=>setPage(page-1)}>Back</button>
            <button  class="it"onClick={()=>setPage(page+1)} disabled={!inputState.fname || !inputState.lname || !inputState.email || !inputState.password}>Next</button>
            <button  class="it"onClick={()=>setPage(page-2)}>Final</button>
        </div>
    )
}

}