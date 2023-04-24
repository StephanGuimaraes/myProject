import React, { useEffect } from "react";
import './perfil.css';
import { useSelector, useDispatch } from "react-redux";



export default function Perfil(props){
    
  const dispatch = useDispatch();
    const {nome,salario,nascimento} = useSelector(state=>state.Auth.profile[0]);
    const birthDate = new Date(nascimento);
    const formattedDate = birthDate.toLocaleDateString('pt-BR');

    useEffect(() => {
     
      props.mantercor();
    }, []);
    
        return(

            <div className="col-md-4 div-perfil" id="container-img">
            
            <div className="perfil-interno">
            
            <div className="div-imagemperfil"><img className="img-fluid  mx-auto p-2 " id="img-corpo" src="stephanfoto.jpg"></img></div>
            <h1 className="text-center colorh1 editcolor editcolorname">{nome}</h1>
            <h5 className="text-center colorh5 editcolor">{formattedDate}</h5>
            <p className="text-center p-container editcolor">total ganho mensal : {salario}</p>
            <div className='divcolors'>
            <div className='colors color1' onClick={props.trocarcorrosa}></div>
            <div className='colors color2' onClick={props.trocarcorblack}></div>
            <div className='colors color3' onClick={props.trocarcorroxo}></div>
            <div className='colors color4' onClick={props.trocarcorcinza}></div>
            </div>
          </div>
        </div>

            
        )


    }


