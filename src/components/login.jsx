import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import logo from '../img/logotouch.png';



export function Login(){

    return (

          
        <div> 

            <img className='logo' src={logo} alt="Logo" />
            

            <Form className='formLogin'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Usuario" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPlaintextPassword">
                <Form.Control type="password" placeholder="Contraseña" />
                </Form.Group>
                <div className='button'>
                <Button variant='primary'>Ingresar</Button>
                </div>
                
            </Form>

            

        </div>
    
    );

}

