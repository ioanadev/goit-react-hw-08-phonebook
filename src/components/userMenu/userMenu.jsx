import { useDispatch, useSelector } from "react-redux"
import { getUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import { Link } from "components/MeniuBar/MeniuBar";
import { FiUserCheck } from "react-icons/fi";
import "./userMenu.css"

export const UserMenu = () =>{

    const dispach = useDispatch();
    const user = useSelector(getUser);
    

 return (
     <>
     <div className="usermeniucontainer">
        <div><Link to = "/contacts">Contacts</Link></div>
     
     
     <div className="usermeniu">
        <FiUserCheck className="user"/>
     <p>Welcome, {user.name}</p>
     <button className="logoutbutton"
     type="button" 
     onClick={()=>{dispach(logOut())}} >
         Log out
     </button>
     </div></div>
 
     
     
     </>
 )


}