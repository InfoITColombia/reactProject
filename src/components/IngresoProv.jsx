import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import logo from '../img/logotouch.png';


export function IngresoProv () {


  return (

    <div>

      <img className='logo-ventas' src={logo} alt="Logo" />

      <h1 className='titulo-1'>Ingreso Proveedores</h1>

      <section className='table1'>

    <Table  striped bordered hover>
      <thead >
        <tr>
          <th>#</th>
          <th>Nombre Empresa</th>
          <th>Nit </th>
          <th>Email</th>
          <th>Dirección</th>
          <th>Telefono</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Apple</td>
          <td>988765128</td>
          <td>comercial@apple.com</td>
          <td>1234 Florida</td>
          <td>3002986345</td>
          <td>
          <div className='button'>
                <Button className='btn1' variant='primary'>Editar</Button>
                <Button className='btn2' variant='danger'>Eliminar</Button>
          </div>
          </td>
        </tr>
                
      </tbody>
      
    </Table>
    </section>
    </div>
  );


}