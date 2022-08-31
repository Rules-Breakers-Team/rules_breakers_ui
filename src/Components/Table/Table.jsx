import React, { useEffect, useState } from "react";
import instance from "../Config/axios";
import { Menu } from "../Navigation/Menu";
import Pagination from "../Pagination/Pagination";
import "./table.css";

const Table = (props) => {
    const {children} = props;
    const [data, setData] = useState([]);
    const [type, setType] = useState([]);
    useEffect(() => {
        const data = instance.get("rooms?page=0&page_size=2");
        data.then((res) => {
            setData(res.data);
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
    })

    return(
        <>
            <Menu button="Se déconnecter"/>
            <div className="mt-5 mb-5">
                <h2>Liste des chambre</h2>
            </div>
            <div className="container" >
            <div className="btn-toolbar mb-2 mb-md-0 my-2" id="table-action">
                <div className="btn-group me-2" >
                    <button type="button" className="btn btn-sm btn-outline-secondary">Add</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                </div>
                <select name="" id="" className="btn btn-sm btn-outline-secondary">
                    <option value="titre">Chambres libre</option>
                    <option value="auteur">Chambres occupés</option>
                    {
                        type.map((elt,k) => (
                            <option value="category">{elt?.name}</option>
                        ))
                    }
                </select>
                </div>
            <table className="table-striped rounded-2 shadow text-center" id="pdfdiv">
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
                                <td className="p-2">{elt?.room_number}</td>
                                <td className="p-2">{elt?.description}</td>
                                <td className="p-2">
                                    {elt?.available ? "Libre" : "Réservé"}
                                    </td>
                                <td className="p-2">{elt?.type.name}</td>
                                <td className="p-2">{elt?.type.price}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Pagination />
           </div>
        </>
    )
}
export default Table;