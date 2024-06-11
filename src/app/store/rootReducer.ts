import { combineReducers } from 'redux';

import authReducer from '../entities/user/model/reducer';
import userReducer from '../entities/user/model/reducer';

const rootReducers = combineReducers({
    auth: authReducer,
    user: userReducer,
});

export { rootReducers };
