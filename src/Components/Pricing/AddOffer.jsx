import React, { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer , toast } from 'react-toastify';
import instance from "../Config/axios";


const AddOffer = ({show, closeModal}) => {
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    

    const error =()=>{
        toast.error("Ajout non effectuée");
    }
    const success =()=>{
        toast.success("Ajout éffectuée");
    }
    const data = {
        id: 1,
        name: name,
        description: description,
        price: price
    }
    const postType = async() => {
        await instance.post("/types", [data])
        .then((res) => {
            success();
            closeModal();
        })
        .catch((err) => {
            error();
            closeModal();
        })
    } 
    return(
        <>
            <ToastContainer
            position="top-center"
            closeButton={true}
        />
            <div className="modal-wrapper"
      style={{
        transform : show ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0'
      }}
      >
            <div className="modal-header" onClick={closeModal}>
            <b className="add" ></b>
            <h2 className='text-light'>Ajouter une nouvelle offre</h2>
            <span className="close-modal-btn" onClick={closeModal}>X</span>
        </div> 
        <div className="modal-content">
            <div className="modal-body">
            <form>

                <label htmlFor="">Nom de l'offre :</label>
                <input className='input' 
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nom de l'offre..."
                    />

                <label htmlFor="">Description de l'offre : </label>
                <input className='input' 
                    type="text"
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description..."
                    />
                
                <label htmlFor="">Prix : </label>
                <input className='input' 
                    type="text" 
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Price..."
                    />
                <button className="button1" onClick={() => postType()}>Ajouter</button>
                </form>

            </div>
            <div className="modal-footer">
               
            </div>
        </div>
        </div>
        </>
    )
}
export default AddOffer;