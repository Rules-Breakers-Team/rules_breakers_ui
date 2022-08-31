import React from "react";
import "./footer.css"
import "../../Style/bootstrap/bootstrap.css"


export function Footer() {
    return(
        <>
            <footer id="footer">
            <div className="container d-flex py-3 text-muted">
                <div className="col-md-3 reveal-2">
                <h5>Notre adresse <i className="mx-2 fas fa-map-marker-alt fa-1x"></i></h5>
                <p>Ivandry 101 Antananarivo</p>
                </div>
                <div className="col-md-3 reveal-3">
                <h5>Email<i className="mx-2 fas fa-envelope fa-1x"></i></h5>
                <p>N.hotel@gmail.com</p>
                </div>
                <div className="col-md-3 reveal-4">
                <h5>Téléphone<i className="mx-2 fas fa-phone fa-1x"></i></h5>
                <p>+261 32 40 636 16</p>
                </div>
                <div className="col-md-3 reveal-5">
                <h5>Réseaux sociaux</h5>
                <div className="icn">
                <a href="#"><i className="mx-2 text-muted fab fa-facebook fa-2x"></i></a>   
                <a href="#"><i className="fab text-muted fa-linkedin fa-2x"></i></a>
                </div>   
                </div>
            </div>
            </footer>
            <div>
            <div className="container-fluid pt-2 bg-dark text-white">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <p className="ending reveal-2">© Rules Breakers - Hackathon Intra-HEI</p>             
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}