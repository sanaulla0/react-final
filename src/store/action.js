

export const setToken =(token)=>{
  return{
   type : 'SET_TOKEN',
   payload : token,
  };
 };
 
 export const setUserId = (userId) => {
  return {
    type: 'SET_USER_ID',
    payload: userId,
  };
 };