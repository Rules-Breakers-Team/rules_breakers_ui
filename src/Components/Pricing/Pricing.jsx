import React from "react";
import "../../Style/bootstrap/bootstrap.css"


export function Pricing() {
    return(
        <>
            <div className="container text-center mt-5">
                <h2 className="my-3">Nos Offres</h2>
            <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
            <div class="col">
                <div class="card mb-4 rounded-3 shadow">
                <div class="card-header py-3">
                    <h4 class="my-0 fw-normal">CHAMBRE DOUBLE</h4>
                </div>
                <div class="card-body">
                    <ul class="list-unstyled mt-3 mb-4">
                    <li>Equipe d'un lit double place, de CanalSat et d'eau chaude.</li>
                    <li>PROMO</li>
                    <li>250 000 Ar</li>
                    <li>100 000 Ar</li>
                    </ul>
                    <button type="button" class="w-100 btn btn-lg btn-primary">Reserver</button>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card mb-4 rounded-3 shadow">
                <div class="card-header py-3">
                    <h4 class="my-0 fw-normal">CHAMBRE FAMILIALE</h4>
                </div>
                <div class="card-body">
                    <ul class="list-unstyled mt-3 mb-4">
                        <li>Equipe d'un lit double place, de CanalSat et d'eau chaude.</li>
                        <li>PROMO</li>
                        <li>250 000 Ar</li>
                        <li>100 000 Ar</li>
                    </ul>
                    <button type="button" class="w-100 btn btn-lg btn-primary">Reserver</button>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card mb-4 rounded-3 shadow">
                <div class="card-header py-3">
                    <h4 class="my-0 fw-normal">SUITE</h4>
                </div>
                <div class="card-body">
                    <ul class="list-unstyled mt-3 mb-4">
                        <li>Equipe d'un lit double place, de CanalSat et d'eau chaude.</li>
                        <li>PROMO</li>
                        <li>250 000 Ar</li>
                        <li>100 000 Ar</li>
                    </ul>
                    <button type="button" class="w-100 btn btn-lg btn-primary">Reserver</button>
                </div>
                </div>
            </div>
            </div>
            </div>
        </>
    )
}