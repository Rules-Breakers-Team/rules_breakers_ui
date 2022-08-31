import { useState } from 'react';
import './Modal.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer , toast } from 'react-toastify';
import instance from '../Config/axios';

export default function Modal({ show , closeModalHandler}){  
    const handleSubmit = (e) => {
        e.preventDefault();
     }; 
    const [nom,setNom] = useState();
    const [numero,setNumero] = useState();
    const [date,setDate] = useState();

    const error =()=>{
        toast.error("Reservation non effectuée")
    }
    const success =()=>{
        toast.success("Reservation éffectuée")
    }
    const data =   {
            client: nom,
            phone_number: numero,
            booking_date: date ,
            room_type: 1
          }
    const postBooking = async() => {
        const promise = instance.post("booking", [data]);
        promise.then((res) => {
            success();
            closeModalHandler();
        })
        .catch((err) => {
            error();
            closeModalHandler();
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
        <div className="modal-header" onClick={closeModalHandler}>
            <b className="add" ></b>
            <span className="close-modal-btn"onClick={closeModalHandler} >X</span>
        </div> 
        <div className="modal-content">
            <div className="modal-body">
            <form onSubmit={handleSubmit}>

                <label htmlFor="">Nom du client : </label>
                <input className='input' type="text"placeholder="Nom" onChange={(e)=>setNom(e.target.value)}/>

                <label htmlFor="">Numero de telephone : </label>
                <input className='input' type="text" placeholder="+261..." onChange={(e)=>setNumero(e.target.value)}/>
                
                <label htmlFor="">Date de reservation : </label>
                <input className='input' type="date"  placeholder="Date de reservation" onChange={(e)=>setDate(e.target.value)}/>

                <button className="button1" onClick={()=>postBooking()} >Réserver</button>
                </form>

            </div>
            <div className="modal-footer">
               
            </div>
        </div>
      </div>
      </>      
    )
}