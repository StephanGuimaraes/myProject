import React,{useEffect} from "react";
import './footer.css'

export default function Footer(props){

    useEffect(() => {
        props.mantercor();
      }, []);
    
    
    return(
   <div id="footerpai">

           <p className="pfootter1">Stephan</p> <p className="pfootter2">redes sociais</p>

   </div>
    )
}
