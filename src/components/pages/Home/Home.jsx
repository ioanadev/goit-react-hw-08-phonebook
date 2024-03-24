import { Link } from "components/MeniuBar/MeniuBar";
import "./Home.css"
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../../redux/auth/selectors";


export default function Home() {
  const isLoggedIn = useSelector(getIsLoggedIn)
    return (
      <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.9 }}
    >
      <div className="homepage">
        <h1>Phonebook</h1>

        {isLoggedIn ? ( 
        <Link to = "/contacts">Contacts</Link>
        ):(
          <div className="homemnav">
        <Link to="/register">Sing up</Link>
        <Link to="/login">Log in</Link>
        </div>
        )}
       
       
      </div>
      </motion.div>
    );
  }
  