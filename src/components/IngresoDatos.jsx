import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import logo from '../img/logotouch.png';



export function IngresoDatos(){

    return (
    
        <div>
            
            
            <img className='logo-ventas' src={logo} alt="Logo" />

            <h1 className="titulo1">Ventas</h1>

            <Form className='formVentas'>
                <Form.Group className="mb-3 date-vent" controlId="ControlInput1">
                <Form.Control type="date" placeholder="Fecha" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ControlInput1">
                <Form.Control type="text" placeholder="Nombre Cliente" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ControlInput1">
                <Form.Control type="number" placeholder="Documento"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="ControlInput1">
                <Form.Control type="text" placeholder="Articulo"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="ControlInput1">
                <Form.Control type="number" placeholder="Precio"/>
                </Form.Group>
                <div className='button'>
                <Button variant='primary'>Ingresar</Button>
                </div>
                
            </Form>

            

        </div>
    
    );

}