import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../entities/user/model/reducer';
import authReducer from '../entities/auth/model/reducer';

const store = configureStore({
    reducer: {
        user: userReducer,
        auth: authReducer,
    },
});

export default store;
