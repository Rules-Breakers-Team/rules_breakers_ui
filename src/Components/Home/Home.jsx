import React from "react";
import { Footer } from "../Footer/Footer";
import { Menu } from "../Navigation/Menu";
import { Pricing } from "../Pricing/Pricing";
import photo from "./image/banner.jpg";
import "./home.css";


export function Home() {
    return (
        <div id="top">
            <Menu button="Se connecter"/>
            <Pricing />
            <div className="container my-5 text-center" id="apropos">
                <h2 className="py-3">A Propos</h2>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <img src={photo} alt="" className="banner"/>
                    </div>
                    <div className="col-md-6 col-sm-12 text-center">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis minus ullam veniam dolore harum vitae rem eligendi! Reiciendis architecto impedit laudantium sed aut dignissimos excepturi accusamus atque aspernatur provident! Distinctio.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}