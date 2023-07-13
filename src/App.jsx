import { Login } from "./components/login";
import { IngresoDatos } from "./components/IngresoDatos";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App(){
    return (
       
            <BrowserRouter>

            <Routes>
              <Route path="/" element={<Login />}/>
              <Route path="/Ventas" element={<IngresoDatos/>}/>
             
             </Routes>
             </BrowserRouter>
       
    )
}