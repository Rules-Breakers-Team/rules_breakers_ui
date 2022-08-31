import "../../Style/bootstrap/bootstrap.css";
import './Listres.css';
import React from "react";

export function Listres(){
	return (
        <>
            <div className="bgr">
		<div className="containerr">
		  <h2>Liste des réservations</h2>
          <div class="form-group test">
	        <label className="lab">Type de chambre : </label>
	        <select className="filtre">
			<option value="default">default</option>
              <option value="double">Chambre double</option>
              <option value="familiale">Chambre familiale</option>
              <option value="suite">Suite</option>
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
		      <tr>
			   <td className="p-2">Faniry Keziah</td>
			   <td className="p-2">0344267854</td>
			   <td className="p-2">0344267854</td>
			   <td className="p-2">2022-06-12</td>
			   <td className="p-2">2022-06-12</td>
			   <td className="p-2">12</td>
		      </tr>
			  <tr>
			   <td className="p-2">Faniry Keziah</td>
			   <td className="p-2">0344267854</td>
			   <td>waw</td>
			   <td className="p-2">2022-06-12</td>
			   <td className="p-2">2022-06-12</td>
			   <td className="p-2">12</td>
		      </tr>
			  <tr>
			   <td className="p-2">Faniry Keziah</td>
			   <td className="p-2">0344267854</td>
			   <td className="p-2">0344267854</td>
			   <td className="p-2">2022-06-12</td>
			   <td className="p-2">2022-06-12</td>
			   <td className="p-2">12</td>
		      </tr>
			  <tr>
			   <td className="p-2">Faniry Keziah</td>
			   <td className="p-2">0344267854</td>
			   <td className="p-2">0344267854</td>
			   <td className="p-2">2022-06-12</td>
			   <td className="p-2">2022-06-12</td>
			   <td className="p-2">12</td>
		      </tr>
			  <tr>
			   <td className="p-2">Faniry Keziah</td>
			   <td className="p-2">0344267854</td>
			   <td className="p-2">0344267854</td>
			   <td className="p-2">2022-06-12</td>
			   <td className="p-2">2022-06-12</td>
			   <td className="p-2">12</td>
		      </tr>
	         </tbody>
            </table>
          </div>
		</div>
		</div>
        </>
		
		
	)
}

