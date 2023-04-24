import React from 'react';
import { Link } from 'react-router-dom';
import './painellogin.css';
import { useSelector, useDispatch } from "react-redux";
import {setMensagem } from '../../store/Reducers/CheckLogin';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {useEffect} from 'react';
import {CheckLogin} from '../../store/Reducers/CheckLogin';
import {useForm} from 'react-hook-form';





export default function Login() {

  const {register, handleSubmit} = useForm();

  const [emailbol, setemailbol] = useState(false);
  const [emailfail, setemailfail] = useState('');
  

  function verificarlogin(data){
    const email = data.email;
    const password = data.password;
    
    dispatch(CheckLogin({email, password}));
  }

 
  function handleInputClick(action) {
    action.preventDefault();
    dispatch(setMensagem(null));
    setemailfail('');
    setemailbol(false);
  }

  const navigate = useNavigate();
 

  const dispatch = useDispatch();

  const { email, password, isLoading, error,isSuccess,mensagem } = useSelector(state => state.Auth);

  
  useEffect(() => {
    if (isSuccess) {
      navigate('/perfil-gerenciamento');

    }

    if (mensagem) {
      setemailbol(true);
      setemailfail('Usuário não encontrado');
    }
  }, [mensagem, navigate]);
  



  return (
    <div className='boxlogin'>
      <div className='boxForm'>
        <span className='BorderLine'></span>
        <form onSubmit={handleSubmit(verificarlogin)}>
          <h2>Login</h2>

          <div className='Inputboxlogin'>
            <p className='erronomelogin'></p>
            <input
              type="text"
              {...register('email',{required:true})}
              
              onClick={handleInputClick}
                            
            />
            <span>Email</span>
            <i></i>
            
          </div>
          <div className='Inputboxlogin'>
            <p className='loginsenha'></p>
            <input
              type="password"
              {...register('password',{required:true})}
              onClick={handleInputClick}               
            />
            <span>password</span>
            <i></i>
            
          </div>
          
            <div className='LinksLogin'>

              <Link to="#" className='Linkcss'>Esqueci a senha</Link>
              <Link to="/registro" className='Linkcss'>Registrar</Link>
              

            </div>

            <button type="submit" className='butonlogin' disabled={isLoading}>Login</button>
            

            {emailbol ? (
            <p className='Loginerrado'>{emailfail}</p>
            ):<p className='Loginerrado'></p>}
             {error && <div>{error}</div>}
            

          </form>
          
        </div>
    </div>
  );
}


  