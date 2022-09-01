import React, { useEffect, useState } from "react";
import "../../Style/bootstrap/bootstrap.css"
import instance from "../Config/axios";
import Modal from "../Modal/Modal";
import './pricing.css'
export function Pricing() {
    const [types, setTypes] = useState([]);
    const [show,setShow] = useState(false);
    const closeModalHandler = () => setShow(false);
    const [id, setId] = useState(1);


    useEffect(()=>{
        const promise = instance.get("types?page=0&page_size=10");
        promise.then((res) => {
            setTypes(res.data);
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    },[]);
    function showWindow(index) {
        setId(index);
        setShow(true);
    }
    return(
        <>
            <Modal show={show} closeModalHandler={closeModalHandler} id={id}/>
           <div className="container text-center mt-5" id="offres">
                <h2 className="my-3" >Nos Offres</h2>
            <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
                {
                    types.map((elt, k) => (
                    <div class="col">
                        <div class="card mb-4 rounded-3 shadow">
                        <div class="card-header py-3">
                            <h4 class="my-0 fw-normal">{(elt?.name).toUpperCase()}</h4>
                        </div>
                        <div class="card-body">
                            <ul class="list-unstyled mt-3 mb-4">
                                {
                                (elt?.name).toUpperCase() == "SUIT" || (elt?.name).toUpperCase() =="PREMIUM" ? <>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                </>   
                                : elt?.price < ((elt?.name).toUpperCase() == "SUIT").price  ?
                                <>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                </>
                                 : 
                                <i className="fa fa-star"></i>
                                }
                                <li>{elt?.description}</li>
                                <li>{elt?.price}</li>
                            </ul>
                            <button type="button" class="w-100 bt</del>n btn-lg btn-outline-primary" onClick={()=>showWindow(elt?.id)}>Reserver</button>
                        </div>
                        </div>
                    </div>
                    ))
                }
            </div>
            </div>
        </>
    )
}
