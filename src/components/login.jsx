import React, { useState } from "react";
import Axios from 'axios'

import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'




export function Login() {

  const [usernameReg, setUsernameReg] = useState("")
  const [passwordReg, setPasswordReg] = useState("")

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [loginStaus, setLoginStatus] = useState("");

  const navigate = useNavigate();
  const navigateVentas = () => {
    //  navigate a /ventas
    navigate('/ventas');
  };


  const register = () => {
    Axios.post("http://localhost:3002/register", {
      N_USUARIO: usernameReg,
      PWD_USUARIO: passwordReg,
    }).then((response) => {
      console.log(response)
    });
  }


  const login = () => {
    console.log(username)
    console.log(password)
    Axios.post("http://localhost:3002/touchapp/usuarios/login", {
      N_USUARIO: username,
      PWD_USUARIO: password,
    }).then((response) => {
        
        console.log(response.data)

      if (response.data.status === false) {
        //Variable que se carga al html
        //setLoginStatus(response.data.message)
        const MySwal = withReactContent(Swal)

        MySwal.fire({
          title: <strong>{response.data.message}</strong>,
          html: <i>{response.data.message}</i>,
          icon: 'error'
        })
      }
      else {
        console.log("LOGIN EXITOSO")
        
        //direccionamiento a ventas
        navigateVentas()
      }
      
    });
  }


  return (


    <div>


      <h1 className="titulo1">TOUCH CENTER</h1>

      <Form className='formLogin'>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

          <Form.Control type="text" placeholder="Usuario" onChange={(e) => {
            setUsername(e.target.value);
          }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPlaintextPassword">

          <Form.Control type="password" placeholder="Contraseña" onChange={(e) => {
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



