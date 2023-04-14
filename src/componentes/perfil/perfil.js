import React, { useEffect } from "react";
import './perfil.css';




export default function Perfil(props){
    
    

    useEffect(() => {
        props.mantercor();
      }, []);

      const nome = localStorage.getItem('nome');
   
        return(

            <div className="col-md-4 div-perfil" id="container-img">
            
            <div className="perfil-interno">
            
            <img className="img-fluid  mx-auto p-2 " id="img-corpo" src="stephanfoto.jpg"></img>
            <h1 className="text-center colorh1 editcolor editcolorname">{nome}</h1>
            <h5 className="text-center colorh5 editcolor">29/12/1992</h5>
            <p className="text-center p-container editcolor">total ganho mensal : 2800,00</p>
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


