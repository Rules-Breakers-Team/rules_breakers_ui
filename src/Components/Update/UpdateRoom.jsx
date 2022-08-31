import React, { useState } from "react";
import "./UpdateRoom.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer , toast } from 'react-toastify';
import instance from "../Config/axios";


const UpdateRoom = ({roomId, roomD, roomN, roomP, show, closeModal}) => {
    const [roomNumber, setRoomNumber] = useState();
    const [roomDescription, setRoomDescription] = useState();
    const [roomPrice, setRoomPrice] = useState();

    const data = {
        newDescription: roomDescription,
        newType: roomNumber,
        newPrice: roomPrice
    }

    const handleSubmit = (e) => {
        e.preventDefault();
     }; 

    const error =()=>{
        toast.error("Modification non effectuée")
    }
    const success =()=>{
        toast.success("Modification éffectuée")
    }
    const putRoom = async() => {
        const promise = instance.put(`room/${roomId}`, [data]);
        promise.then((res) => {
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
            <h2 className='text-light'>Modifier les détails d'une chambre</h2>
            <span className="close-modal-btn" onClick={closeModal}>X</span>
        </div> 
        <div className="modal-content">
            <div className="modal-body">
            <form onSubmit={handleSubmit}>

                <label htmlFor="">N° de chambre : </label>
                <input className='input' 
                    type="text"
                    defaultValue={roomN}
                    onChange={(e) => setRoomNumber(e.target.value)}
                    />

                <label htmlFor="">Description de la chambre : </label>
                <input className='input' 
                    type="text"
                    defaultValue={roomD}
                    onChange={(e) => setRoomDescription(e.target.value)}
                    />
                
                <label htmlFor="">Prix : </label>
                <input className='input' 
                    type="text" 
                    defaultValue={roomP} 
                    onChange={(e) => setRoomPrice(e.target.value)}
                    />
                <button className="button1" onClick={() => putRoom()}>Modifier</button>
                </form>

            </div>
            <div className="modal-footer">
               
            </div>
        </div>
        </div>
        </>
    )   
}
export default UpdateRoom;