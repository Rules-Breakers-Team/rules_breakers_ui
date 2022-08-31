import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../Style/bootstrap/bootstrap.css"


export function Pricing() {
    const [types, setTypes] = useState([]);

    useEffect(()=>{
        const promise = axios.get("https://virtserver.swaggerhub.com/Oniitsiky/api-title/1.0/types?page=1&page_size=2")
        promise.then((res)=>{
            setTypes(res.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[types])
    return(
        <>
            <div className="container text-center mt-5">
                <h2 className="my-3">Nos Offres</h2>
            <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
                {
                    types.map((elt, k)=>{
                        <>
                         <div class="col">
                            <div class="card mb-4 rounded-3 shadow">
                            <div class="card-header py-3">
                                <h4 class="my-0 fw-normal">{elt?.name?.toUpperCase()}</h4>
                            </div>
                            <div class="card-body">
                                <ul class="list-unstyled mt-3 mb-4">
                                    <li>{elt?.description}</li>
                                    <li>PROMO</li>
                                    <li>250 000 Ar</li>
                                    <li>{elt?.price}</li>
                                </ul>
                                <button type="button" class="w-100 btn btn-lg btn-primary">Reserver</button>
                            </div>
                            </div>
                        </div>
                        </>
                    })
                }
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