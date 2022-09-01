import React, { useEffect, useState } from "react";
import { AddType } from "../AddType/AddType";
import instance from "../Config/axios";
import { Menu } from "../Navigation/Menu";
import Pagination from "../Pagination/Pagination";
import UpdateRoom from "../Update/UpdateRoom";
import "./table.css";
import { Footer } from "../Footer/Footer";


const Table = () => {
    const [data, setData] = useState([]);
    const [type, setType] = useState([]);
    const [show, setShow] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);
    const [roomNum, setRoomNum] = useState();
    const [roomDesc, setRoomDesc] = useState();
    const [roomIdent, setRoomIdent] = useState();
    const [roomPrice, setRoomPrice] = useState();
    const closeModal = () => {
        setShowUpdate(false);
    };
    const closeModalHandler = () => setShow(false);


    useEffect(() => {
        const data = instance.get("rooms?page=0&page_size=2");
        data.then((res) => {
            setData(res.data);
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
        const type = instance.get("types?page=0&page_size=5");
            type.then((res) => {
                setType(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    },[]);
    
    return(
        <>
            <AddType show={show} closeModalHandler={closeModalHandler} />
           <UpdateRoom show={showUpdate} 
            closeModal={closeModal} 
            roomId={roomIdent}
            roomD={roomDesc}
            roomN={roomNum}
            roomP={roomPrice}
    />
            <Menu button="Se déconnecter" 
            label1="Réservations" 
            link1="/booking"
            label2="Offres"
            link2="/type"
            />
            <div className="mt-5 mb-5">
                <h2>Liste des chambres</h2>
            </div>
            <div className="container" >
            <div className="btn-toolbar mb-2 mb-md-3 my-2" id="table-action">
                <div className="btn-group me-2" >
                    <button type="button" className="btn btn-sm btn-outline-secondary">Add</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                </div>
                <select className="btn btn-outline-secondary rounded-2" >
                    <option value="titre">Tout</option>
                    <option value="titre">Chambres libre</option>
                    <option value="auteur">Chambres occupés</option>
                    {
                        type.map((elt,k) => (
                            <option value="category">{elt?.name}</option>
                        ))
                    }
                </select>
                </div>
            <table className="table-striped rounded-2 shadow text-center room-table" id="pdfdiv">
                <thead>
                    <tr>
                        <td>N° de chambre</td>
                        <td>Description</td>
                        <td>Status</td>
                        <td>Type</td>
                        <td>Prix de location</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((elt, key) => (
                            <tr key={key}>
                                <td className="p-2">
                                    {elt?.room_number}
                                    </td>

                                <td className="p-2">{elt?.description}</td>

                                <td className="p-2">
                                    {elt?.available ? "Libre" : "Réservé"}
                                    </td>
                                <td className="p-2">{elt?.type.name}</td>
                                <td className="p-2">{elt?.type.price}</td>
                                <td>
                                    <button className="btn btn-primary" 
                                   onClick={() => setShowUpdate(true)}>Modifier</button>
                                </td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>
            <button className="mt-5 btn btn-success rounded-3" onClick={()=>setShow(true)}>Ajouter</button>
            <Pagination />
           </div>
           <br/>
           <br/>
           <Footer/>
        </>
    )
}
export default Table;