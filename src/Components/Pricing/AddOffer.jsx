import React, { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer , toast } from 'react-toastify';
import instance from "../Config/axios";
import Loader from "../Loader/Loader";


const AddOffer = ({show, closeModal}) => {
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [loading, setLoading] = useState(false);
    

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
        const promise = instance.post(`type`, [data]);
        promise.then((res) => {
            success();
            closeModal();
            setLoading(false)
        })
        .catch((err) => {
            error();
            closeModal();
            setLoading(false)
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
            <h2 className='text-light'>Ajouter une nouvelle offre</h2>
            <span className="close-modal-btn" onClick={closeModal}>X</span>
        </div> 
        <div className="modal-content">
            <div className="modal-body">
            <form onSubmit={handleSubmit}>

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
                <button className="button1" onClick={() => {
                    postType();
                    setLoading(true);
                    }}><Loader/></button>
                </form>

            </div>
            <div className="modal-footer">
               
            </div>
        </div>
        </div>
                </>
                : 
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
            <form onSubmit={handleSubmit}>

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
                <button className="button1" onClick={() => {
                    postType();
                    setLoading(true);
                    }}>Ajouter</button>
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
export default AddOffer;