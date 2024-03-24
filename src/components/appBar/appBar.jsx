import { Link } from "../MeniuBar/MeniuBar";
import "./appBar.css"

const AppBar = () =>{
    return (
     <>     
     <div className="barmeniu">
     <Link to="/register">Sing up</Link>
     <Link to="/login">Log in</Link>
     </div>

     </>
    )
}
export default AppBar;