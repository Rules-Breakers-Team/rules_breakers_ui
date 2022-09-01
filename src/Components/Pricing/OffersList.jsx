import React from "react";
import { Menu } from "../Navigation/Menu";
import { useEffect, useState } from "react";
import instance from "../Config/axios";
import ModifyOffer from "./ModifyOffer";
import { Footer } from "../Footer/Footer";
import AddOffer from "./AddOffer";

const OffersList =  () => {
    const [types, setTypes] = useState([]);
    const [show, setShow] = useState(false);
    const [id , setId] = useState()
    const [showAdd, setShowAdd] = useState(false);
    const closeModal = () => {
        setShow(false);
    };
    const closeAddModal = () => {
        setShowAdd(false);
    }
    function update(iden) {
        setShow(true)
        setId(iden)
    }
    useEffect(()=>{
        const promise = instance.get("types?page=0&page_size=10");
        promise.then((res) => {
            setTypes(res.data);
            console.log(id)
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
            <AddOffer
                show={showAdd}
                closeModal={closeAddModal}
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
                        <div class="col" key={k}>
                    <div class="card mb-4 rounded-3 shadow">
                    <div class="card-header py-3">
                        <h4 class="my-0 fw-normal" >{elt?.name}</h4>
                    </div>
                    <div class="card-body">
                        <ul class="list-unstyled mt-3 mb-4">
                            <li>{elt?.description}</li>
                            <li>{elt?.price}</li>
                        </ul>
                       <button className="button1" onClick={()=>update(k)}>Modifier</button>
                </div>
                </div>
            </div>
                        </>
                    ))
                }
                <button className="btn btn-success m-auto" onClick={() => setShowAdd(true)}>Ajouter une offre</button>
                </div>
            </div>
		<br/>
		<br/>
        <Footer/>
        </>
    )
}
export default OffersList;