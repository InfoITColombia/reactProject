import { Login } from "./components/login";
import { IngresoDatos } from "./components/IngresoDatos";
import { DashBoard } from "./components/dashboard";
import { IngresoProv } from "./components/IngresoProv";
import "./index.css";
import { Routes, Route } from "react-router-dom";

export default function App(){
    return (
       
           

            <Routes>
              <Route path="/" element={<Login />}/>
              <Route path="/Ventas" element={<IngresoDatos/>}/>
              <Route path="/dashboard" element={<DashBoard/>}/>
              <Route path="/ingresoprov" element={<IngresoProv/>}/>
             
             </Routes>
            
       
    )
}