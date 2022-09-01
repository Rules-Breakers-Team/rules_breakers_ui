import React, { useEffect, useState } from "react";
import instance from "../Config/axios";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer , toast } from 'react-toastify';


export function AddType({show, closeModalHandler}){
  const [type,setType] = useState();
  const [roomNumber, setRoomNumber] = useState();
  const [description, setDescription] = useState();
  const [roomType, setRoomType] = useState();

  const error =()=>{
    toast.error("Chambre ajoutée");
  }
  const success =()=>{
    toast.success("Ajout non éffectuée");
  }
  const data = {
      roomNumber: roomNumber,
      description: description,
      type: roomType
    }

  useEffect(() => {
    const type = instance.get("types?page=0&page_size=5");
    type.then((res) => {
      setType(res.data);
    })
    .catch((err) => {
    })
  })
  const postRoom = async() => {
    const promise = instance.post("rooms", [data]);
    promise.then((res) => {
      console.log(res);
        success();
        closeModalHandler();
    })
    .catch((err) => {
      alert(err)
        error();
        closeModalHandler();
    })
}

    return (
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
        <div className="modal-header" >
            <b className="add" ></b>
            <h2 className='text-light'>Ajouter chambre</h2>
            <span className="close-modal-btn" onClick={closeModalHandler}>X</span>
        </div> 
        <div className="modal-content">
            <div className="modal-body">
            <form >

                <label htmlFor="">N° de la chambre</label>
                <input className='form-control' 
                    type="text"placeholder="N° de chambre" 
                    onChange={(e) =>setRoomNumber(e.target.value)}
                    />

                <label htmlFor="">Description de la chambre : </label>
                <input className='form-control' 
                    type="text" placeholder="Description..." 
                    onChange={(e) => setDescription(e.target.value)}
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
                <br/>
                <button className="button1" onClick={() => postRoom()}>Ajouter</button>
                </form>

            </div>
            <div className="modal-footer">
               
            </div>
        </div>
      </div>
        </>
    )
}