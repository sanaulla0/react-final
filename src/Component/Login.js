import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useState } from "react";
import { setToken, setUserId } from "../store/action";
import './Login.css';
async function loginUser(credentials) {

   return fetch('https://dummyjson.com/auth/login', {
  
     method: 'POST',
  
     headers: {
  
       'Content-Type': 'application/json'
  
     },
  
     body: JSON.stringify(credentials)
  
   })
  
     .then(data => data.json())
     .then(res=>{
      // console.log(res);
      // localStorage.setItem("loginUser" , res.id);

      return res;
     
   }
      )
      .catch((error)=>{
        // console.log("hii")
      alert("enter valid details")
      return (console.log(error));
  })  
  }
  
  export default function Login() {
    const[error , setError] = useState(false);
  const dispatch = useDispatch();
    const [username, setUserName] = useState();
  
    const [password, setPassword] = useState();
    let Navigate = useNavigate();

    const HandleSubmit = async (e) => {
  
      e.preventDefault();
  
      const response = await loginUser({
  
        username,
  
        password,
      });
    if (response === 'error') {
      console.log("response",response);
      alert("please Enter correct details");
    }
    else{
      dispatch(setToken(response.token));
      dispatch(setUserId(response.id));
      Navigate('/profile');
    }
  
     
      
      // setToken(token);
      // console.log(token)
      
  
    }
   
  
    return(
  
      <div className="login-wrapper">
  
        <h1>Please Sign in!</h1>
  
        <form onSubmit={HandleSubmit}>
  
          <label>
  
            <p>Username</p>
  
            <input type="text" onChange={e => setUserName(e.target.value)} />
  
          </label>
  
          <label>
  
            <p>Password</p>
  
            <input type="password" onChange={e => setPassword(e.target.value)} />
  
          </label>
  
          <div>
  
            <button className="btn" type="submit">Submit</button>
  
          </div>
  
        </form>
  
      </div>
  
    )
  
  }
  
