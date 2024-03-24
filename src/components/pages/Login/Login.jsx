
import "./Login.css"
import { useDispatch} from "react-redux";
import { logIn } from "../../../redux/auth/operations";
import { motion } from "framer-motion";

export default function Login() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  // const isLoggedIn =useSelector(getIsLoggedIn);

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
     <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.9 }}
    >
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
    </motion.div>
    </>
     
    );
  }