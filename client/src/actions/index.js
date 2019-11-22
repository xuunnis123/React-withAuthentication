import axios from 'axios';
import { FETCH_USER} from './types';

export const fetchUser=() => async dispatch=>{
  const res=await axios.get('/api/current_user');
  dispatch({type: FETCH_USER, payload:res});
  };


/*EQUAL

export const fetchUser=() => {
 return function(dispatch){
  axios
  .get('/api/current_user')
  .then(dispatch({type: FETCH_USER, payload:res}));
  };
}

*/
