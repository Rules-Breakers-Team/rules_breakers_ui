import "../../Style/bootstrap/bootstrap.css";
import './Listres.css';
import React, { useEffect, useState } from "react";
import instance from "../Config/axios";
import { Menu } from "../Navigation/Menu";
import { Footer } from "../Footer/Footer";
import Pagination from "../Pagination/Pagination";

export function Listres(){
	const [data,setData] = useState([]);
	const [type, setType] = useState([]);
	const [page, setPage] = useState(0);
	const [typeItem, setTypeItem] = useState(1)
	useEffect(() => {
		const promise = instance.get("booking?page="+page+"&page_size=8");
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
	        <select className="filtre form-control">
			{
                        type.map((elt,k) => (
                            <option value={elt?.id}>{elt?.name}</option>
                        ))
                    }
            </select>
          </div>
          <div className="liste my-3">
            <table className="table-striped rounded-2 shadow text-center tab">
			 <thead>
		       <th className="th">Nom du client</th>
		       <th className="th">Contact</th>
		       <th className="th">Type de chambre</th>
			   <th className="th">Numero de chambre</th>
		       <th className="th">Date de réservation</th>
			   <th className="th">Debut de réservation</th>
			   <th className="th">Fin de réservation</th>
	         </thead>
	         <tbody>
				{
					data?.map((elt, k) => (
						<tr>
							<td className="p-2">{elt?.client}</td>
							<td className="p-2">{elt?.phone_number}</td>
							<td className="p-2">{elt?.room_type}</td>
							<td className="p-2">{elt?.room}</td>
							<td className="p-2">{elt?.bookingDate.slice(0,10)}</td>
							<td className="p-2">{elt?.bookingStart.slice(0,10)}</td>
							<td className="p-2">{elt?.bookingEnd.slice(0,10)}</td>
		      			</tr>
					))
				}
	         </tbody>
            </table>
			<Pagination page={page} setPage={setPage} data={data}/>
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

