import React,{useState} from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [register,setregister] = useState('Register')
  const [login, setlogin] = useState('Login')
  const vis = () =>{
    if(props.visibilty==="1")
    {
      setregister('Profile');
      setlogin('Logout');
    }
  }
  return (
    <div className="nbar">
      <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container-fluid ">
          <Link className="navbar-brand" to="/">
            Toolkit
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  pr-5" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  {register}
                </Link>
              </li>
              <li className="nav-item" id="lastlink">
                <Link className="nav-link" to="/login">
                  {login}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
