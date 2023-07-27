import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import logo from '../img/logotouch.png';


export function IngresoProv () {

  const [proveedores, setProveedores] = useState([]);

  useEffect(() => {
    
    fetch('http://localhost:3002/touchapp/proveedor/') 
      .then((response) => response.json())
      .then((data) => setProveedores(data))
      .catch((error) => console.error('Error al obtener los proveedores:', error));
  }, []);

  return (

    <div>

      <img className='logo-ventas' src={logo} alt="Logo" />

      <h1 className='titulo-1'>Ingreso Proveedores</h1>

      <section className='ingreso-prov'>

        <Form className='form1-prov'>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="Nombre Empresa" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="number" placeholder="Nit" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="Dirección" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="number" placeholder="Telefono" />
          </Form.Group>
          <div className='button'>
                <Button variant='primary'>Ingresar</Button>
                </div>
          
        </Form>
      </section>

      <section className='table1'>

      <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre Empresa</th>
              <th>Nit</th>
              <th>Email</th>
              <th>Dirección</th>
              <th>Telefono</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {proveedores.map((proveedor, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{proveedor.N_PROVEEDOR}</td>
                <td>{proveedor.NIT_PROVEEDOR}</td>
                <td>{proveedor.EMAIL_PROVEEDOR}</td>
                <td>{proveedor.DIR_PROVEEDOR}</td>
                <td>{proveedor.TEL_PROVEEDOR}</td>
                <td>
                  <div className='button'>
                    <Button className='btn1' variant='primary'>Editar</Button>
                    <Button className='btn2' variant='danger'>Eliminar</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
    </section>
    </div>
  );


}