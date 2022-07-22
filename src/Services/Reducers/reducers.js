import { ADD_TO_CART,REMOVE_TO_CART } from "../constants";
const initialState = {
    cartData: []
}
export default function cartItems(state=[], action) {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case ADD_TO_CART:
            console.log("reducer",action)
            return [
                ...state,
                {cartData: action.data}
            ]
            // eslint-disable-next-line no-unreachable
            break;
        case REMOVE_TO_CART:
            state.pop();
            return[
                ...state,
            ]    
        default:
            return state;
    }
}