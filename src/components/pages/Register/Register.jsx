import { useState } from "react";
import "./Register.css"
import { useDispatch } from "react-redux";
import { register } from "../../../redux/auth/operations";
import { motion } from "framer-motion";



export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showButton, setShowButton] =useState(false);
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('')

  const dispach = useDispatch();

const handleSubmitRegister = (e) =>{
e.preventDefault();
const form = e.currentTarget;
 if(!name || !email || !password){
  if(!name) setNameError('Please enter your full name!');
  if(!email) setEmailError('Please enter your email adress!');
  if(!password) setPasswordError('Please enter your password!');
  return;

 }
dispach(
 register({  
    name:form.elements.name.value,
    email: form.elements.email.value,
    password: password,
  })
);
setName('');
setEmail('');
setPassword('');
setShowButton(false);
setNameError('');
setEmailError('');
setPasswordError('');
form.reset();
}

const handlePasswordOnChange = (e) =>{
  const password = e.target.value;
  setPassword(password);
  setShowButton(password.length >= 7);
  setPasswordError(password.length >=7 ? "": "Password should be at least 7 characters long!")
}

const handleEmailOnChange = (e) =>{
  const email = e.target.value;
  setEmail(email);
  setShowButton(email.includes("@")&& email.length > 1);
  setEmailError(email.includes('@') ? "" :"Please enter a valid email address!")
  // setShowButton(email.includes("@") && email.length > 0);
}

const handleNameOnChange = (e) => {
const name = e.target.value;
setName(name);
setShowButton(name.trim().length > 0);
setNameError(name.trim().length > 0 ? '' : 'Please enter your full name!')
// setShowButton(name.length == 0 && name.length < 5);
}
  
    return (
      <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.9 }}
    >
      <div className="register">
          <title>Registration</title>
         

          <form className="formregister" onSubmit = {handleSubmitRegister}> 
             <h1 className="titleregister" >Sing up!</h1>

            <label className="labelregister">Full name:</label>
              <br/>
              <div>

              <input 
              className = "inputregister" 
              placeholder = "Julia Rose" 
              type ="text"
              name = "name"
              onChange={handleNameOnChange}/>
               {nameError && <p className="p-s">{nameError}</p>}
              <br/>
              </div>
             
             
              <label className="labelregister">Email:</label>
              <br/>

              <input 
              className = "inputregister" 
              placeholder = "exemple@exemple.com" 
              type = "email"
              name = "email"
              value={email}
              onChange={handleEmailOnChange}/>
              {emailError && <p className="p-s">{emailError}</p>}
              <br/>

              <label className="labelregister">Password:</label>
              <br/>
              <input 
              className ="inputregister" 
              placeholder ="password" 
              type ="password"
               onChange={handlePasswordOnChange}/>
               {passwordError && <p className="p-s">{passwordError}</p>}
              <br/>
              


  {showButton && (
  <button 
  type="submit" 
  className="buttonregister">
    CREATE ACCONT
  </button>
  ) }
          </form>
      </div>
      </motion.div>
    );
  }
  