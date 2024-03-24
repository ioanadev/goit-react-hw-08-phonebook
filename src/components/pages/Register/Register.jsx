import { useState } from "react";
import "./Register.css"
import { useDispatch } from "react-redux";
import { register } from "../../../redux/auth/operations";


export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showButton, setShowButton] =useState(false);

  const dispach = useDispatch();

const handleSubmitRegister = (e) =>{
e.preventDefault();
const form = e.currentTarget;

dispach(
 register({  
    name:form.elements.name.value,
    email: form.elements.email.value,
    password: password,
  })
);

console.log(form.elements.name.value);
console.log(form.elements.email.value);
console.log(password);
setShowButton(name.includes(" "));
setShowButton(password.length >= 7);


form.reset();
}

const handlePasswordOnChange = (e) =>{
  const password = e.target.value;
  setPassword(password);
  setShowButton(password.length >= 7);
}

const handleEmailOnChange = (e) =>{
  const email = e.target.value;
  setEmail(email);

  // setShowButton(email.includes("@") && email.length > 0);
}

const handleNameOnChange = (e) => {
const name = e.target.value;
setName(name);
// setShowButton(name.length == 0 && name.length < 5);
}
  
    return (
      <div className="register">
        {/* <Helmet> */}
          <title>Registration</title>
         

          <form className="formregister" onSubmit = {handleSubmitRegister}> 
             <h1 className="titleregister" >Sing up!</h1>
            <label className="labelregister">Full name:</label>
              <br/>
              <input 
              className = "inputregister" 
              placeholder = "Julia Rose" 
              type ="text"
              name = "name"
              onChange={handleNameOnChange}/>
              <br/>
              <label className="labelregister">Email:</label>
              <br/>
              <input 
              className = "inputregister" 
              placeholder = "exemple@exemple.com" 
              type = "email"
              name = "email"
              value={email}
              onChange={handleEmailOnChange}/>
              <br/>
              <label className="labelregister">Password:</label>
              <br/>
              <input 
              className ="inputregister" 
              placeholder ="password" 
              type ="password"
               onChange={handlePasswordOnChange}/>
              <br/>


  {showButton && (
  <button 
  type="submit" 
  className="buttonregister">
    CREATE ACCONT
  </button>
  ) }

{!showButton && password.length > 1 && password.length < 7 && <p>Password should be at least 7 characters long!</p>}
{!showButton && name.length > 1 && !name.includes(" ") && <p>Please enter your full name ! </p>}

          </form>
        {/* </Helmet>
        <RegisterForm /> */}
      </div>
    );
  }
  