import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./menu.css";
import logo from "./image/logo.png";
import "../../Style/bootstrap/bootstrap.css"


export function Menu(props) {
  const {button, label1, label2, link1} = props;
  const navigate = useNavigate()
    return(
        <>
  <header className="sticky-top">
    <div className="px-3 navbar" >
      <div className="container d-flex justify-content-between">
        <div>
          <a href="#top">
          <img src={logo} alt="" className="avatar my-2"  />
          </a>
        </div>
        <div className="justify-content-lg-start">
          <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <Link to={link1}><a href="#offres" className="nav-link text-white" to="/home"> {label1}</a></Link>
            </li>
            <li>
              <a href="#apropos" className="nav-link text-white" to="/history"> {label2}</a>
            </li>
          </ul>
        </div>
        <div class="text-end">
          <button type="button" className="button2" onClick={()=> navigate('/login')}>{button}</button>
        </div>
      </div>
    </div>
  </header>
        </>
    )
}