import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';


export function DashBoard () {


  return (

    <div>

      

      <h1 className='titulo-1'>Reporte de Ventas</h1>

      <section className='table1'>

    <Table  striped bordered hover>
      <thead >
        <tr>
          <th>#</th>
          <th>Fecha</th>
          <th>Nombre Cliente</th>
          <th>Documento</th>
          <th>Articulo</th>
          <th>Proveedor</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>13/07/2023</td>
          <td>Andres Velazco</td>
          <td>4569845</td>
          <td>Pantalla Iphone 11</td>
          <td>Proveedor</td>
          <td>430000</td>
          <td>
          <div className='button'>
                <Button className='btn1' variant='primary'>Editar</Button>
                <Button className='btn2' variant='danger'>Eliminar</Button>
          </div>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>13/07/2023</td>
          <td>Carlos Gutierrez</td>
          <td>25789214</td>
          <td>Bateria Iphone 10</td>
          <td>Proveedor</td>
          <td>300000</td>
          <td>
          <div className='button'>
                <Button className='btn3' variant='primary'>Editar</Button>
                <Button className='btn4' variant='danger'>Eliminar</Button>
          </div>
          </td>
          
        </tr>
        <tr>
          <td>3</td>
          <td>13/07/2023</td>
          <td>Camilo Fonseca</td>
          <td>79568412</td>
          <td>Board Iphone 12 pro</td>
          <td>Proveedor</td>
          <td>800000</td>
          <td>
          <div className='button'>
                <Button className='btn5' variant='primary'>Editar</Button>
                <Button className='btn6' variant='danger'>Eliminar</Button>
          </div>
          </td>
        </tr>
      </tbody>
      
    </Table>
    </section>
    </div>
  );


}