import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Paginainicial from "./componentes/paginaincial/paginaincial";
import Login from './componentes/Login/painellogin';
import Registro from "./componentes/registro/registro";



const Rotas= () => {
    
    return(
    
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Login />}/>
    <Route path="/registro" element={<Registro/>}/>
    <Route path="/perfil-gerenciamento" element={<Paginainicial/>}/>
    
    </Routes>
    
    </BrowserRouter>
    )
}

export default Rotas;