// import { useState } from "react";
import "./Login.css"
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../../redux/auth/operations";
import { getIsLoggedIn } from "../../../redux/auth/selectors";
import { Route } from "react-router-dom";
import Contacts from "../Contacts/Contacts";

export default function Login() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isLoggedIn =useSelector(getIsLoggedIn);

  const handleSubmitLogIn = (e) =>{
    e.preventDefault();
    const form = e.currentTarget;
   console.log(e)
   dispatch(

    logIn({
      email:form.elements.email.value,
      password: form.elements.password.value,
    })
   
   ); 

   form.reset();
  }
    return (
      <>
       {/* {isLoggedIn ? (
        <Contacts/>
       ):(
        <div className="login">
        <title>Log in</title>
       

        <form className="formlogin" onSubmit={handleSubmitLogIn}> 
           <h1 className="titlelogin" >Log in!</h1>
            <label className="labellogin">Email:</label>
            <br/>
            <input 
            className="inputlogin" 
            placeholder="exemple@exemple.com" 
            type = "email"
            name = "email"
            // value = {email}
            />
            <br/>
            <label className="labellogin">Password:</label>
            <br/>
            <input 
            className="inputlogin" 
            placeholder="password" 
            type="password"
            name="password"
            // value = {password}
            />
            <br/>
          <button type="submit" className="buttonlogin">LOG IN</button>
        </form>

    </div>
       )} */}
      <div className="login">
        <title>Log in</title>
  
        <form className="formlogin" onSubmit={handleSubmitLogIn}> 
           <h1 className="titlelogin" >Log in!</h1>
            <label className="labellogin">Email:</label>
            <br/>
            <input 
            className="inputlogin" 
            placeholder="exemple@exemple.com" 
            type = "email"
            name = "email"
            // value = {email}
            />
            <br/>
            <label className="labellogin">Password:</label>
            <br/>
            <input 
            className="inputlogin" 
            placeholder="password" 
            type="password"
            name="password"
            // value = {password}
            />
            <br/>
          <button type="submit" className="buttonlogin">LOG IN</button>
        </form>

    </div>
    </>
     
    );
  }