import React, { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer , toast } from 'react-toastify';
import instance from "../Config/axios";
import Loader from "../Loader/Loader";

const ModifyOffer = ({show, closeModal}) => {
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [loading, setLoading] = useState(false);
    

    const error =()=>{
        toast.error("Modification non effectuée");
    }
    const success =()=>{
        toast.success("Modification éffectuée");
    }
    const data = {
        id: 1,
        name: name,
        description: description,
        price: price
    }
    const putType = async() => {
        await instance.put(`types`, data)
        .then((res) => {
            success();
            closeModal();
            setLoading(false);
        })
        .catch((err) => {
            error();
            closeModal();
            setLoading(false);
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
     }; 
    return(
        <>
            {
                loading ? 
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
            <h2 className='text-light'>Modifier les détails d'une offre</h2>
            <span className="close-modal-btn" onClick={closeModal}>X</span>
        </div> 
        <div className="modal-content">
            <div className="modal-body">
            <form onSubmit={handleSubmit}>

                <label htmlFor="">Nom de l'offre :</label>
                <input className='input' 
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    />

                <label htmlFor="">Description de l'offre : </label>
                <input className='input' 
                    type="text"
                    onChange={(e) => setDescription(e.target.value)}
                    />
                
                <label htmlFor="">Prix : </label>
                <input className='input' 
                    type="text" 
                    onChange={(e) => setPrice(e.target.value)}

                    />
                <button className="button1" onClick={() => {
                    putType();
                    setLoading(true);
                    }}><Loader/></button>
                </form>

            </div>
            <div className="modal-footer">
               
            </div>
        </div>
        </div>
                </>: 
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
            <h2 className='text-light'>Modifier les détails d'une offre</h2>
            <span className="close-modal-btn" onClick={closeModal}>X</span>
        </div> 
        <div className="modal-content">
            <div className="modal-body">
            <form onSubmit={handleSubmit}>

                <label htmlFor="">Nom de l'offre :</label>
                <input className='input' 
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    />

                <label htmlFor="">Description de l'offre : </label>
                <input className='input' 
                    type="text"
                    onChange={(e) => setDescription(e.target.value)}
                    />
                
                <label htmlFor="">Prix : </label>
                <input className='input' 
                    type="text" 
                    onChange={(e) => setPrice(e.target.value)}

                    />
                <button className="button1" onClick={() => {
                    putType();
                    setLoading(true);
                    }}>Modifier</button>
                </form>

            </div>
            <div className="modal-footer">
               
            </div>
        </div>
        </div>
                </>
            }
        </>
    )
}
export default ModifyOffer;