import React from "react";
import { Footer } from "../Footer/Footer";
import { Menu } from "../Navigation/Menu";
import { Pricing } from "../Pricing/Pricing";
import photo from "./image/banner.jpg";
import "./home.css";
import image from './image/chambre.jpg'
import Banner from "../Banner/Banner";


export function Home() {
    return (
        <div id="top">
            <Menu 
            button="Se connecter" 
            label1="Nos Offres" 
            id1="/#offres"
            label2= "A propos" 
            id2="#apropos"
            />
            <Banner/>
            <Pricing />
            <div className="container my-5 text-center" id="apropos">
                <h2 className="py-3">A Propos</h2>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <img src={photo} alt="" className="homeImage"/>
                    </div>
                    <div className="col-md-6 col-sm-12 text-center">
                        <p className="imageText">
Notre hotel NHOTEL qui se trouve au Sud d'Ivandry , vous offre un large choix et de chambre suivant les règles de la santé .
                        </p>
                    </div>
                    <div className="col-md-6 col-sm-15 text-center">
                    <p className="imageText">
La reservation de chambre se fait en-dessus et disponible 24h/24 et 7j/7 , avec un cadre très agréable et faite pour vos goûts de confort .
                    </p>
                    </div>
                    <div className="col-md-6 col-sm-12 ">
                        <img src={image} alt="" className="homeImage"/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}