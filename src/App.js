import { useEffect,useState } from 'react';
import Card from "./components/Card";

function App() {

const [userData,setUserData] = useState([]);

   useEffect(() =>{
    fetch("https://api.github.com/users")
.then((res)=>res.json())
.then((data)=>{
 console.log(data);

 setUserData(data);
})
   },[]);

  return (
    <>
   <h1 className="mainheading">Github Users!</h1> 
   <div className="cardContainer">
   {userData.map(user=>{
    console.log(user);

    return <h4>
      <Card userName={user.login} 
    profileUrl={user.html_url} 
    avatarUrl={user.avatar_url}/></h4>
    
    })
   }
  </div>
  </>
  );
};

export default App;
