import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';




const initialState =
{
    nome: '',
    senha: '',
    isLogado: false,
    isLoading: false,
    error: null
}


const AuthSlice = createSlice({

    name:"Auth",
    initialState,
    reducers: {
       
        setNome(state, action) {
          state.nome = action.payload;
        },
        setSenha(state, action) {
          state.senha = action.payload;
        },
        setLoading(state, action) {
          state.isLoading = action.payload;
        },
        setError(state, action) {
          state.error = action.payload;
        },
        setLogado(state, action) {
          state.isLogado = action.payload;
          state.nome = state.nome
        }
      }
    });

      
   


export const { setNome, setSenha, setLoading, setError, setLogado } = AuthSlice.actions;

export const verificarLogin = (nome, senha) => async dispatch => {
    dispatch(setLoading(true));
    
  
    try {
      const response = await axios.post('http://localhost:5000/login', { nome, senha });
      dispatch(setLogado(true));
      dispatch(setLoading(false));
      localStorage.setItem('nome', nome);
    
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(false));
    }
  };


export default AuthSlice.reducer;