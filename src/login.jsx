import React, {useState} from "react";
import Axios from 'axios'

import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

import List from './List';


export function Login(){

  const [usernameReg,setUsernameReg] = useState("")
  const [passwordReg,setPasswordReg] = useState("")

  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")

  const [loginStaus, setLoginStatus] = useState("");


  const register = ()=>{
    Axios.post("http://localhost:3002/register",{
    username: usernameReg,
    password: passwordReg,
  }).then((response)=>{
    console.log(response)
  });
  }


  const login = ()=>{
    Axios.post("http://localhost:3002/login",{
    username: username,
    password: password,
  }).then((response)=>{
    if(response.data.message){
      setLoginStatus(response.data.message)
    }
    else{
      setLoginStatus("Inicio válido!!")
    }
      //console.log(response.data)
  });
}
    

    return (
    
        <div>

            <h1 className="titulo1">TOUCH CENTER</h1>

            <Form className='formLogin'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                
                <Form.Control type="text" placeholder="Usuario" onChange={(e)=>{
                  setUsername(e.target.value);
                }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPlaintextPassword">
                
                <Form.Control type="password" placeholder="Contraseña" onChange={(e)=>{
                  setPassword(e.target.value);
                }} />
                </Form.Group>
                <div className='button'>
                
                <Button variant='primary' onClick={login}>Ingresar</Button>
                </div>

            </Form>


            <h1>{loginStaus}</h1>

        </div>
    
    );

}


// App.js



