import "../../Style/bootstrap/bootstrap.css";
import './Listres.css';
import React, { useEffect, useState } from "react";
import instance from "../Config/axios";
import { Menu } from "../Navigation/Menu";
import { Footer } from "../Footer/Footer";

export function Listres(){
	const [data,setData] = useState([]);
	const [type, setType] = useState([]);
	useEffect(() => {
		const promise = instance.get("booking?page=0&page_size=10");
		promise.then((res) => {
			setData(res.data);
			console.log(res.data);
		})
		.catch((err)=> {
			console.log(err);
		})
		const type = instance.get("types?page=0&page_size=5");
            type.then((res) => {
                setType(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
	}, [data]);
	return (
        <>
		<Menu button="Se déconnecter"
		label1="Chambres"
		link1="/room"
		label2="Offres"
		link2="/type"
		/>
            <div className="bgr">
		<div className="containerr">
		  <h2>Liste des réservations</h2>
          <div class="form-group test">
	        <label className="lab">Type de chambre : </label>
	        <select className="filtre">
			{
                        type.map((elt,k) => (
                            <option value="category">{elt?.name}</option>
                        ))
                    }
            </select>
          </div>
          <div className="liste">
            <table className="table-striped rounded-2 shadow text-center tab">
			 <thead>
		       <th className="th">Nom du client</th>
		       <th className="th">Contact</th>
		       <th className="th">Type de chambre</th>
		       <th className="th">Date de réservation</th>
		       <th className="th">Effectué le</th>
		       <th className="th">Numero de chambre</th>
	         </thead>
	         <tbody>
				{
					data?.map((elt, k) => (
						<tr>
							<td className="p-2">{elt?.client}</td>
							<td className="p-2">{elt?.phoneNumber}</td>
							<td className="p-2">{elt?.roomType}</td>
							<td className="p-2">{elt?.bookingStart}</td>
							<td className="p-2">{elt?.bookingDate}</td>
							<td className="p-2">{elt?.roomNumber}</td>
		      			</tr>
					))
				}
	         </tbody>
            </table>
          </div>
		</div>
		</div>
		<br/>
		<br/>
		<br/>
		<Footer/>
        </>
		
		
	)
}

