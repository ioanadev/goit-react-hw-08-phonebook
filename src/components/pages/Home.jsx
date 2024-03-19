import { Link } from "components/MeniuBar/MeniuBar";
import "./Home.css"

export default function Home() {
    return (
      <div className="homepage">
        <h1>Phonebook</h1>
        <div className="homemnav">
        <Link to="/register">Sing up</Link>
        <Link to="/login">Log in</Link>
        </div>
        {/* <button class="custom-button">Apasă-mă</button> */}
      </div>
    );
  }
  