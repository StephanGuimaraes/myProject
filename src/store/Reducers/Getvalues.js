import { createSlice } from "@reduxjs/toolkit";

const initialState =
{
    nome: '',
    valor: '',
    total:'',
    gastos:[
       ],
    
}


const ValueSlice = createSlice({

    name:"Value",
    initialState,
    reducers: {
       
        setNome(state, action) {
        state.nome = action.payload;
        },
        setValor(state, action) {
        state.valor = action.payload;
          },
        setTotal(state, action) {
            state.total = action.payload;
          },
          
          setGastos(state, action) {

            state.gastos = state.gastos.concat([action.payload]);
         },

         deleteGasto(state, action) {
            state.gastos.splice(action.payload, 1);
          },

        
        
      }
    });


export const { setNome, setValor, setTotal,setGastos,deleteGasto } = ValueSlice.actions;

export default ValueSlice.reducer;