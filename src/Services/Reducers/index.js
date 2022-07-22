// root reducer: to combine all reducers in single reducer:
// in react project only one root reducers
import {combineReducers} from 'redux'
import cartItems from "./reducers";

export default combineReducers({
    cartItems,
});
