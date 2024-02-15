import logo from "../static/logo.png";
import "../static/Navbar.css";

function Navbar(){
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <img src={logo} className="logo-img" />
                <span className="logo-text">Photofolio</span>
            </div>
        </div>
    )
}

export default Navbar;