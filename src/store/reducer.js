import {setToken} from "../store/action";
import { setUserId } from "../store/action";
import Login from '../Component/Login';

const initialState = {
 token: null,
 userId: null,
}


function reducer(state = initialState, action) {
 switch (action.type) {
   case 'SET_TOKEN':
     return {
       ...state,
       token: action.payload,
     };
   case 'SET_USER_ID':
     return {
       ...state,
       userId: action.payload,
     };
   default:
     return state;
 }
}
export default reducer;





