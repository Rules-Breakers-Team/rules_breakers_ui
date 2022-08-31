import React from "react";


export function BookingForm() {
    return (
        <>
            <form className="container justify-content-center">
                <div className="form-group">
                    <label htmlFor="">Nom du client : </label>
                    <input className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Numero de telephone : </label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Type de chambre : </label>
                    <select name="" id="" className="form-control">
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="">Date de reservation : </label>
                    <input type="date" />
                </div>
            </form>
        </>
    )
}