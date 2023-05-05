import { useEffect,useState } from "react";
import axios from 'axios';
import { useSelector } from "react-redux";
const Profile =()=>{
    let [data,setData] = useState({});
    // let obj;
    const userId = useSelector((state) => state.userId);
    const token = useSelector((state) => state.token);
    useEffect(()=>{
      // let id = localStorage.getItem('loginUser')

      axios.get(`https://dummyjson.com/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response)=>{setData(response.data)
        console.log("res",response.data);
    })
    .catch((error)=>{console.log('error')});
    }
,[userId, token])

useEffect(() => {
  console.log("my",data);
  
}, [data]);

    
   
    return (
        <div>
            
          {
           <div>
            
            <img src={data.image} alt="" />
            <p>id:{data.id}</p>
            <p>userName:{data.username}</p>

            <p>firstName:{data.firstName}</p>
            <p>lastName:{data.lastName}</p>

            <p>Age:{data.age}</p>
            <p>Gender:{data.gender}</p>
            <p>email:{data.email}</p>

           </div>
                    
        
          }
        </div>
    )
}
export default Profile;