import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './MenuSuperior.css';



class MenuSuperior extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {
      this.props.mantercor();
  
    }

    
    render(){
      
  return (
    
    <div >
      
       <nav className="navbar navbar-expand-lg navbar-dark " id="navtrocacor">
      <Link to="/perfil-gerenciamento" className="navbar-brand letrastrocacor" id="LinkGe">Gerenciamento</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">

        <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse"  id="navbarTogglerDemo01">
          <ul className="navbar-nav" id="Links-nav">
            <li className="nav-item">
              <Link to="/resumo" className="nav-link letrastrocacor resumoedit">Resumo</Link>
            </li>
            <li className="nav-item">
              
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
    }
}

export default MenuSuperior;