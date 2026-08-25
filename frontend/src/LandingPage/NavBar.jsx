import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
return (
    <nav className="navbar navbar-expand-lg border-bottom " style={{backgroundColor:"#fff"}}>
        <div className="container ">
        <Link className="navbar-brand" to="/">
            <img src="media/images/stockForU_logo.svg" alt="logo" className="logo"/>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav ms-auto mb-lg-0">
            <li claclassNamess="nav-item">
                <Link className="nav-link active" aria-current="page" to="/signup">
                Signup
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" to="/about">
                About
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" to="/product">
                Product
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" to="/pricing">
                Pricing
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" to="/support">
                Support
                </Link>
            </li>
        
    
            </ul>
            
        </div>
        </div>
    </nav>
);
}

export default NavBar;
