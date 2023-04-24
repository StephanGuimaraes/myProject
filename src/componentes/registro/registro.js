import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './registro.css';
import { useSelector, useDispatch } from "react-redux";
import {checkUser,setisSuccess,setmessageerro} from '../../store/Reducers/registroReducer';
import {useForm} from 'react-hook-form';

function Registro(){

  const {register, handleSubmit, reset} = useForm();
        
const dispatch =useDispatch();

const {messageerro,messageacerto,isSuccess,isLoading} = useSelector(state => state.Registro);
const [errorMessage, setErrorMessage] = useState('');
const [erroemail, seterroemail] = useState('');
const [mensagembol, setmensagembol] = useState(false);
const [mensagemsucess, setmensagemsucess] = useState('');
// dados de envio local
const [password, setpassword] = useState('');
const [confirmpassword, setconfirmpassword] = useState('');


useEffect(() => {
  if (isSuccess) {
    setmensagembol(true);
    setmensagemsucess('CADASTRADO COM SUCESSO');
    
  }},[isSuccess])

 
 


function Enviarcadastro(data){

  setpassword(data.password);
  setconfirmpassword(data.confirmpassword);

  
  const username = data.username;
  const email = data.email;
  const password = data.password;
  const salario = data.salario;
  const nascimento = data.nascimento;
  
  dispatch(checkUser({username,email,password,salario,nascimento}));
  
 
}


function sendclick(){
  if(password != confirmpassword){
    
    setErrorMessage("As senhas não são iguais. Tente novamente.")
    return;
  }
  

  setmensagembol(false);
}

function cleanemail(){
  
  seterroemail('');
  dispatch(setmessageerro(null));
  
}

function reseteregistro(){
  dispatch(setisSuccess(false));
}

    return(

        <div className='boxregister ' >
      
        <div className='boxFormRegister'>
        <span className='BorderLineRegister'></span>
          <form onSubmit={handleSubmit(Enviarcadastro)}>
          
            <h2>Register</h2>

            <div className='divpairegister'>

            <div id ='Inputboxregister'>

              <input type="text" {...register('username',{required:true})}/>
              <span>UserName</span>
              <i></i>

            </div>
            <div id='Inputboxregister'>

            <input type="number" {...register('salario',{required:true})}/>
              <span>Salario</span>
              <i></i>

            </div>
            <div id ='Inputboxregister'>

              <input type="date" {...register('nascimento',{required:true})}/>
              <span>Nascimento</span>
              <i></i>

            </div>

            <p className='msgerro'></p>

            </div>

            <div className='divpairegister'>

            <div id ='Inputboxregister'>

              <input type="text" {...register('email',{required:true})} onClick={cleanemail}/>

              <span>Email</span>
              
              <i></i>
              
            </div>

            <p className='msgerro'>{erroemail}</p>

            </div>

            <div className='divpairegister'>

            <div id ='Inputboxregister'>

              <input type="password" {...register('password',{required:true})} onClick={()=>{setErrorMessage('')}}/>

              <span>password</span>

              <i></i>

            </div>

            <p className='msgerro'>{errorMessage}</p>

            </div>

            <div className='divpairegister'>

            <div id ='Inputboxregister'>

              <input type="password" {...register('confirmpassword',{required:true})} onClick={()=>{setErrorMessage('')}}/>

              <span>Confirm password</span>

              <i></i>

            </div>

            <p className='msgerro'>{messageerro}</p>

            </div>
            
            <div className='LinksRegister'>                    
              
            <Link to="/" className='loginpequeno'>Login</Link>
            
            </div>
            { mensagembol ? (
              <div onClick={reseteregistro}><Link to="/" className='loginvoltar' >Login</Link></div>
            ) : (
             <button type="submit" onClick={sendclick} className='buttonregistrar'>Registrar</button>
            )}
            <h5 className='registradocomsucesso'>{mensagemsucess}</h5>
          </form>
          
        </div>
    </div>
    )
}



export default Registro;
