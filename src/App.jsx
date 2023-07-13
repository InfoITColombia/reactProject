import { Login } from "./components/login";
import { IngresoDatos } from "./components/IngresoDatos";
import { DashBoard } from "./components/dashboard";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function App(){
    return (
       
            <BrowserRouter>

            <Routes>
              <Route path="/" element={<Login />}/>
              <Route path="/Ventas" element={<IngresoDatos/>}/>
              <Route path="/dashboard" element={<DashBoard/>}/>
             
             </Routes>
             </BrowserRouter>
       
    )
}