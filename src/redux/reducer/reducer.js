import { combineReducers } from 'redux';

import loginStateReducer from './isLogin';

export default combineReducers({
    loginState: loginStateReducer
});
