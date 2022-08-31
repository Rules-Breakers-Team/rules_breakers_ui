import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./menu.css";
import logo from "./image/logo.png";
import "../../Style/bootstrap/bootstrap.css"


export function Menu(props) {
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
              <a href="#offres" className="nav-link text-white" to="/home"> {label1}</a>
            </li>
            <li>
              <a href="#apropos" className="nav-link text-white" to="/history"> {label2}</a>
            </li>
          </ul>
        </div>
        <div class="text-end">
          <button type="button" className="button2" onClick={()=> navigate('/login')}>Se connecter</button>
        </div>
      </div>
    </div>
  </header>
        </>
    )
}