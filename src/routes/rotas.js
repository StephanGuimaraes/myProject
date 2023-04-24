import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Paginainicial from "../componentes/paginaincial/paginaincial";
import Login from '../componentes/Login/painellogin';
import Registro from "../componentes/registro/registro";
import PrivateRoute from './PrivateRota';




function Rotas(){
    return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/perfil-gerenciamento" element={<PrivateRoute><Paginainicial /></PrivateRoute>} />
    </Routes>
  </BrowserRouter>
)};

export default Rotas;