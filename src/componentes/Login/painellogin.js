import React from 'react';
import { Link } from 'react-router-dom';
import './painellogin.css';
import { useSelector, useDispatch } from "react-redux";
import { setNome, setSenha, verificarLogin } from '../../store/Reducers/CheckLogin';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';




export default function Login() {

  const [mensagemfailedlogin, setMensagemFailedLogin] = useState('');

  function handleInputClick() {
    setMensagemFailedLogin('');
  }

  const navigate = useNavigate();
 

  const dispatch = useDispatch();

  const { nome, senha, isLoading, error,isLogado } = useSelector(state => state.Auth);

  

  const handleNomeChange = event => {
    dispatch(setNome(event.target.value));
  };

  const handleSenhaChange = event => {
    dispatch(setSenha(event.target.value));
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(verificarLogin(nome, senha));
    if (isLogado) {
      navigate('/perfil-gerenciamento');
    }else{
      setMensagemFailedLogin('Login ou senha incorretos');
    }
    
  };

  
  return (
    <div className='boxlogin'>
      <div className='boxForm'>
        <span className='BorderLine'></span>
        <form>
          <h2>Login</h2>

          <div className='Inputboxlogin'>
            <p className='erronomelogin'></p>
            <input
              type="text"
              required="required"
              value={nome}
              onChange={handleNomeChange}
              onClick={handleInputClick}
                            
            />
            <span>UserName</span>
            <i></i>
            
          </div>
          <div className='Inputboxlogin'>
            <p className='loginsenha'></p>
            <input
              type="password"
              required="required"
              value={senha}
              onChange={handleSenhaChange}  
              onClick={handleInputClick}               
            />
            <span>password</span>
            <i></i>
            
          </div>
          
            <div className='LinksLogin'>

              <Link to="#" className='Linkcss'>Esqueci a senha</Link>
              <Link to="/registro" className='Linkcss'>Registrar</Link>
              

            </div>

            <button type="submit" className='butonlogin' disabled={isLoading} onClick={handleSubmit}>Login</button>
            

              <p className='Loginerrado'>{mensagemfailedlogin}</p>
             {error && <div>{error}</div>}
            

          </form>
          
        </div>
    </div>
  );
}


  