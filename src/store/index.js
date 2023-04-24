import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './Reducers/CheckLogin';
import ValueSlice from './Reducers/Getvalues';
import RegistroSlice from './Reducers/registroReducer';
import storage from 'redux-persist/lib/storage';
import {persistReducer,
    FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';


const persistConfig = {
    key:'root',
    version: 1,
    storage,
    blacklist: ['Registro'],
    
};

const reducer = combineReducers({
    Auth:AuthSlice,
    Value:ValueSlice,
    Registro:RegistroSlice,

});

const persistedReducer = persistReducer(persistConfig,reducer);


const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    
});

export default store;