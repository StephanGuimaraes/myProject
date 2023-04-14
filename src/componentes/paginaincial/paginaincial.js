import React from "react";
import Navbar from '../navbar/MenuSuperior'
import Footer from "../footer";
import CorpoMain from "../main/CorpoPage";
import './paginainicial.css'
import { trocarcorrosa, trocarcorblack, trocarcorroxo, trocarcorcinza,mantercor } from './trocarcor';





function Paginainicial(){

    

        return(
           
            <div className="divpaipagina">

                <div className="divnavbar">
               <Navbar
               trocarcorrosa={trocarcorrosa}
               trocarcorblack={trocarcorblack}
               trocarcorroxo={trocarcorroxo}
               trocarcorcinza={trocarcorcinza}
               mantercor={mantercor}
               
               />
               </div>

             
               <div className="divcorpo">
                <CorpoMain 
                    trocarcorrosa={trocarcorrosa}
                    trocarcorblack={trocarcorblack}
                    trocarcorroxo={trocarcorroxo}
                    trocarcorcinza={trocarcorcinza}
                    mantercor={mantercor}
                />
                </div>

                <div className="divfooter">
                <Footer
                trocarcorrosa={trocarcorrosa}
                trocarcorblack={trocarcorblack}
                trocarcorroxo={trocarcorroxo}
                trocarcorcinza={trocarcorcinza}
                mantercor={mantercor}
                
                />

                </div>  
           </div>

        
        )
}

export default Paginainicial;