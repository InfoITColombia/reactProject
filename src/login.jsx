import React, {useState} from "react";
import Axios from 'axios'

import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export function Login(){

    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const register = () =>{
        Axios.post("http://localhost:3001/register",{
            username :usernameReg,
            password : passwordReg,
        }).then((response)=>{
            console.log(response);
        });
    };

    const login = () =>{
        Axios.post("http://localhost:3001/login",{
            username :username,
            password : password,
        }).then((response)=>{
            console.log(response);
        });
    };


    return (
    
        <div>

            <h1 className="titulo1">TOUCH CENTER</h1>

            <Form className='formLogin'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Usuario" onChange={(e)=>{
                    setUsername(e.target.value);
                }}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPlaintextPassword">
                <Form.Control type="password" placeholder="Contraseña"  onChange={(e)=>{
                    setPassword(e.target.value);
                }} />
                </Form.Group>
                <div className='button'>
                <Button variant='primary' onClick={login} >Ingresar</Button>
                </div>
                
            </Form>

            

        </div>
    
    );

}

