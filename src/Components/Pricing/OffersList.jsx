import React from "react";
import { Menu } from "../Navigation/Menu";
import { useEffect, useState } from "react";
import instance from "../Config/axios";
import ModifyOffer from "./ModifyOffer";



const OffersList =  () => {
    const [types, setTypes] = useState([]);
    const [show, setShow] = useState(false);
    const closeModal = () => {
        setShow(false);
    };
    useEffect(()=>{
        const promise = instance.get("types?page=0&page_size=10");
        promise.then((res) => {
            setTypes(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    },[]);

    return (
        <>
            <ModifyOffer
                show={show}
                closeModal={closeModal}
            />
            <Menu 
            button="Se déconnecter"
            label1="Chambres"
            link1="/room"
            id1="#"
            label2="Réservations"
            link2="/booking"
            id2="#"
            />
            <div className="container text-center mt-5" id="offres">
                <h2 className="my-3 mb-5" >Nos Offres</h2>
                <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
                {
                    types.map((elt, k) => (
                        <>
                        <div class="col">
                    <div class="card mb-4 rounded-3 shadow">
                    <div class="card-header py-3">
                        <h4 class="my-0 fw-normal">{elt?.name}</h4>
                    </div>
                    <div class="card-body">
                        <ul class="list-unstyled mt-3 mb-4">
                            <li>{elt?.description}</li>
                            <li>{elt?.price}</li>
                        </ul>
                       <button type="button" class="w-100 bt</del>n btn-lg btn-outline-primary" onClick={() => setShow(true)}>Modifier</button>
                </div>
                </div>
            </div>
                        </>
                    ))
                }
                </div>
            </div>
        </>
    )
}
export default OffersList;