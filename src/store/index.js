import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './Reducers/CheckLogin';
import ValueSlice from './Reducers/Getvalues';
import RegistreSlice from './Reducers/registroReducer';

const store = configureStore({
    reducer:{
        Auth:AuthSlice,
        Value:ValueSlice,
        Register:RegistreSlice,
    }
});

export default store;