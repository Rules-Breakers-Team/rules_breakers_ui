import { useState } from 'react';
import './Modal.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer , toast } from 'react-toastify';
import instance from '../Config/axios';

export default function Modal({ show , closeModalHandler, id}){  
    const handleSubmit = (e) => {
        e.preventDefault();
     }; 
    const [nom,setNom] = useState();
    const [numero,setNumero] = useState();
    const [dateStart,setDateStart] = useState();
    const [dateEnd, setDateEnd] = useState();

    const error =()=>{
        toast.error("Reservation non effectuée, aucune chambre disponible pour cette date. Veuillez entrez une autre date")
    }
    const success =()=>{
        toast.success("Reservation éffectuée")
    }
    const data =   {
            client: nom,
            phoneNumber: numero,
            roomType: id,
            bookingDate: new Date().toISOString().slice(0,10),
            bookingStart: dateStart ,
            bookingEnd: dateEnd
          }
          console.log(data);
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
      <div className="modal-wrapper text-center"
      style={{
        transform : show ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0'
      }}
      >
        <div className="modal-header" onClick={closeModalHandler}>
            <b className="add" ></b>
            <h2 className='text-light'>Réserver une chambre</h2>
            <span className="close-modal-btn"onClick={closeModalHandler}>X</span>
        </div> 
        <div className="modal-content">
            <div className="modal-body">
            <form onSubmit={handleSubmit}>

                <label htmlFor="">Nom du client : </label>
                <input className='form-control text-center' 
                    type="text"placeholder="Nom" 
                    onChange={(e)=>setNom(e.target.value)}/>

                <label htmlFor="">Numero de telephone : </label>
                <input className='form-control text-center' 
                    type="text" placeholder="+261..." 
                    onChange={(e)=>setNumero(e.target.value)}/>
                
                <label htmlFor="">Date de dédut de réservation : </label>
                <input className='form-control text-center' 
                    type="date" 
                    min={new Date().toISOString().slice(0,10)} 
                    placeholder="Date de reservation" 
                    onChange={(e)=>setDateStart(e.target.value)}/>
                <label htmlFor="">Date de fin de réservation : </label>
                <input className='form-control input text-center' 
                    type="date" 
                    min={dateStart} 
                    placeholder="Date de reservation" 
                    onChange={(e)=>setDateEnd(e.target.value)}/>
                <button className="button1" onClick={()=>postBooking()} >Réserver</button>
                </form>

            </div>
        </div>
      </div>
      </>      
    )
}