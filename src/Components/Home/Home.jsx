import React from "react";
import { Footer } from "../Footer/Footer";
import { Menu } from "../Navigation/Menu";
import { Pricing } from "../Pricing/Pricing";
import photo from "./image/banner.jpg";
import "./home.css";
import image from './image/chambre2.jpg';
import Banner from "../Banner/Banner";


export function Home() {
    return (
        <div id="top">
            <Menu 
            label1="Nos Offres" 
            id1="/#offres"
            link1="/"
            label2= "A propos" 
            id2="#apropos"
            link2="/"
            />
            <Banner/>
            <Pricing />
            <div className="container my-5 text-center" id="apropos">
                <h2 className="py-3">A Propos</h2>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <img src={photo} alt="" className="homeImage"/>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="imageText">
                        <p >
                        N'Hôtel est un hôtel créé en 2018 dont l'objectif est de vous donner la satisfaction avec luxure pendant vos moments importants et préférés : vos
                        vacances , lune de miel , etc....Sans oublier nos jaccouzzi qui vont vous permettre de se détendre pendant vos séjours.</p>
                        <p>Nos personnels sont des gens de confiance et réspecteux , ils vont s'assurer de la 
                        propreté de votre chambre tous les jours.</p>
                        </div> 
                    </div>
                </div>
                <div>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                    <div className="imageText">
                         <p>La réservation d'une chambre peut se faire en ligne,au téléphone ou encore dans nos siège</p>
                         <p>Rendez vos séjours inhabituels marquantes en vous plaçant dans un endroit digne de vous. 
                         C'est un plaisir pour nous de vous satisfaire.</p>
                        <h5>Faites vos réservations en cliquant le réserver dans la partie NOS OFFRES</h5>
                        </div> 
                    </div>
                    <div className="col-md-6 col-sm-12">
                    <img src={image} alt="" className="homeImage"/>
                       
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        </div>
    )
}