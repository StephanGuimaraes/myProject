import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './registro.css';
import { useSelector, useDispatch } from "react-redux";
import {setUsername, setEmail, setPassword, setConfirmpw} from '../../store/Reducers/registroReducer';


function Registro(){
       
const dispatch =useDispatch();

const {username, email, password, confirmpassword} = useSelector(state => state.Register);



function handleusername(action){

  dispatch(setUsername(action.target.value));

}

function handleemail(action){

  dispatch(setEmail(action.target.value));

}

function handlepassword(action){
  
  dispatch(setPassword(action.target.value));

}


function handleconfirmpassword(action){

  dispatch(setConfirmpw(action.target.value));

}



            // Verificação de email
            // const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            // if (!emailRegex.test(email)) {
            //   this.setState({ erromail: 'erro email invalido' });
            //   return;
            // }

            // Enviar dados para o servidor
            // ...

            // Limpar estado e exibir mensagem de sucesso
            
    return(

        <div className='boxregister'>
      
        <div className='boxFormRegister'>
        <span className='BorderLineRegister'></span>
          <form >
          
            <h2>Register</h2>

            <div className='divpairegister'>
            <div className='Inputboxregister'>

              <input type="text" required="required" value={username} onChange={handleusername}/>
              <span>UserName</span>
              <i></i>

            </div>

            <p className='msgerro'></p>

            </div>

            <div className='divpairegister'>

            <div className='Inputboxregister'>

              <input type="text" required="required" value={email} onChange={handleemail}/>

              <span>Email</span>
              
              <i></i>
              
            </div>

            <p className='msgerro'></p>

            </div>

            <div className='divpairegister'>

            <div className='Inputboxregister'>

              <input type="password" required="required" value={password} onChange={handlepassword}/>

              <span>password</span>

              <i></i>

            </div>

            <p className='msgerro'></p>

            </div>

            <div className='divpairegister'>

            <div className='Inputboxregister'>

              <input type="password" required="required" value={confirmpassword} onChange={handleconfirmpassword}/>

              <span>Confirm password</span>

              <i></i>

            </div>

            <p className='msgerro'></p>

            </div>
            
            <div className='LinksRegister'>                    
              
            {/* {  '' ? <Link to="/" className='loginpequeno'>Login</Link> : <Link to="/" style={{visibility:"hidden"}}></Link>} */}
            
            </div>

            {  ''? <input type="submit"  value="Registrar" /> : <div><Link to="/" className='loginvoltar'>Login</Link></div>}
            <h5 className='registradocomsucesso'></h5>
          </form>
          
        </div>
    </div>
    )
}



export default Registro;
