import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  Home  from "./Component/Home/Home";
import  Log from "./Component/Log/Log"
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';

function App() {


 
  return (
  <div className="App">
<Router>


         <Switch>
        
            
          <Route component={ Home} path="/home" />
         
         <Route component={Log} path="/" exact/>
        
        </Switch> 

   
 </Router>
 
   

     </div> 
   
  )
}

export default App;





