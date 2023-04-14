import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState={
    username:'',
    email:'',
    password:'',
    confirmpassword:'',
}

const ValidPasswords = createAsyncThunk(
    'checarsenhas',
    
)

const RegistreSlice = createSlice({
    name:"Register",
    initialState,
    reducers: {

        setUsername(state,action){
            state.username = action.payload;
        },
        setEmail(state,action){
            state.email = action.payload;
        },
        setPassword(state,action){
            state.password = action.payload;
        },
        setConfirmpw(state,action){
            state.confirmpassword = action.payload;             
        },

    }

})


export const {setUsername, setEmail, setPassword, setConfirmpw} = RegistreSlice.actions;

export default RegistreSlice.reducer;