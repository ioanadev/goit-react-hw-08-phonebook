import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "./MeniuBar.css"
import AppBar from "components/appBar/appBar";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/auth/selectors";
import { UserMenu } from "components/userMenu/userMenu";
// import { FiAlignJustify } from "react-icons/fi";

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 15px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  border-bottom: 1px solid rgba(51, 4, 4, 0.3);
  border-top: 1px solid rgba(51, 4, 4, 0.3);
  &:hover{
    cursor: pointer;
  }
  

  &.active {
    color: white;
    background-color: rgba(51, 4, 4, 0.896);
  }
`;
const MeniuBar = () =>{
   const isLoggedIn = useSelector(getIsLoggedIn);
    
    return (
        <>
        
        <nav className="meniu">
        <div className="left-bar"> 
         <h3 className="title">Phonebook</h3>
  {/* <FiAlignJustify /> */}
         <Link  to="/">Home</Link>
        </div>
        <div className="right-bar">
       {isLoggedIn ? <UserMenu/> : <AppBar/>} 
        </div>
        
        
      </nav>
      </>
    )
}
export default MeniuBar;