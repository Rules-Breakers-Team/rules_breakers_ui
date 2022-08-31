import React from "react";

export function AddType(){
    return (
        <>
          <div className="modale">
                <label htmlFor="">Type de chambre </label>
                <input className='form-control text-center' type="text"placeholder="type"/>
                <label htmlFor="">Chambre </label>
                <input className='form-control text-center' type="text" placeholder="chambre"/>
                <button className="button1">Enregistrer</button>
          </div>
        </>
    )
}