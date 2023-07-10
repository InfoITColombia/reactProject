import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react';
import List from './List';
//import Form from './Form';
import Axios from 'axios';

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


function App() {
  const [data, setData] = useState([]);

  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('/api');
    const jsonData = await response.json();
    setData(jsonData);
  };

  const handleAddItem = async (item) => {
    const response = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });
    const newItem = await response.json();
    setData([...data, newItem]);
  };

  return (
    <div>
      <h1>CRUD en React y Node.js</h1>
      <List data={data} />
      <Form onAddItem={handleAddItem} />
    </div>
  );
}

export default App;