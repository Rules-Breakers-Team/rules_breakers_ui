import React, { useEffect, useState } from "react";
import "./UpdateRoom.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer , toast } from 'react-toastify';
import instance from "../Config/axios";
import { type } from "@testing-library/user-event/dist/type";
import Loader from "../Loader/Loader";
import axios from "axios";


const UpdateRoom = ({show, closeModal, roomId, roomD, roomN, roomP}) => {
    const [roomNumber, setRoomNumber] = useState();
    const [roomDescription, setRoomDescription] = useState();
    const [roomPrice, setRoomPrice] = useState();
    const [roomType, setRoomType] = useState();
    const [id, setId] = useState(roomId);
    const [type,setType] = useState();
    useEffect(() => {
        const type = instance.get("types?page=0&page_size=5");
        type.then((res) => {
          setType(res.data);
        })
        .catch((err) => {
        })
      })
    
    const [loading, setLoading] = useState();
  

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

        const data = {
            id : id,
            description: roomDescription,
            roomNumber : roomNumber,
            price: roomPrice,
            type: roomType
        }
         axios.put("http://localhost:8080/room", data)
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
            <h2 className='text-light'>Modifier les détails d'une chambre</h2>
            <span className="close-modal-btn" onClick={closeModal}>X</span>
        </div> 
        <div className="modal-content">
            <div className="modal-body">
            <form onSubmit={handleSubmit}>

                <label htmlFor="">N° de chambre : </label>
                <input className='input' 
                    type="text"
                    onChange={(e) => setRoomNumber(e.target.value)}
                    />

                <label htmlFor="">Description de la chambre : </label>
                <input className='input' 
                    type="text"
                    onChange={(e) => setRoomDescription(e.target.value)}
                    />
                
                <label htmlFor="">Prix : </label>
                <input className='input' 
                    type="text"  
                    onChange={(e) => setRoomPrice(e.target.value)}
                    />
                <button className="button1" onClick={() => {
                    putRoom();
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
            <h2 className='text-light'>Modifier les détails d'une chambre</h2>
            <span className="close-modal-btn" onClick={closeModal}>X</span>
        </div> 
        <div className="modal-content">
            <div className="modal-body">
            <form onSubmit={handleSubmit}>

                <label htmlFor="">N° de chambre : </label>
                <input className='input' 
                    type="text"
                    onChange={(e) => setRoomNumber(e.target.value)}
                    placeholder={roomN}
                    />

                <label htmlFor="">Description de la chambre : </label>
                <input className='input' 
                    type="text"
                    onChange={(e) => setRoomDescription(e.target.value)}
                    placeholder={roomD}
                    />
                
                <label htmlFor="">Prix : </label>
                <input className='input' 
                    type="text"  
                    onChange={(e) => setRoomPrice(e.target.value)}
                    placeholder={roomP}
                    />
                <label htmlFor="">Type : </label>
                <select className="form-control" 
                onChange={(e) =>{
                  setRoomType(e.target.value);
                }}>
                    {
                        type?.map((elt,k) => (
                            <option value={elt?.id}>{elt?.name}</option>
                        ))
                        
                    }
                </select>
                <button className="button1" onClick={() => {
                    putRoom();
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
export default UpdateRoom;