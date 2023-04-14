import axios from "axios";

const RegisterServices ={

    Checkbd: (userData) => async (dispatch) => {
            const { username, email, password, confirmpassword } = userData;
          
            // Verifica se as senhas coincidem
            if (password !== confirmpassword) {
              dispatch({
                type: 'REGISTER_ERROR',
                message: 'As senhas não coincidem'
              });
              return;
            }
          
            // Verifica se o email é válido
            if (!isValidEmail(email)) {
              dispatch({
                type: 'REGISTER_ERROR',
                message: 'Email inválido'
              });
              return;
            }
          
            try {
              // Verifica se o usuário já existe no banco de dados
              const userExists = await axios.get('http://localhost:5000/register',{ email});
              if (userExists) {
                dispatch({
                  type: 'REGISTER_ERROR',
                  message: 'Usuário já existe'
                });
                return;
              }
          
              // Cadastra o usuário no banco de dados
              const response = await axios.post('http://localhost:5000/register',{email});
              dispatch({
                type: 'REGISTER_SUCCESS',
                payload: response.data
              });
            } catch (error) {
              dispatch({
                type: 'REGISTER_ERROR',
                message: 'Erro ao cadastrar usuário'
              });
            }
          }
    }

    export default RegisterServices;
