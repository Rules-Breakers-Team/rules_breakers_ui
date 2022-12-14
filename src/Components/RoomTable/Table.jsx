import React, { useEffect, useState } from "react";
import { AddType } from "../AddType/AddType";
import instance from "../Config/axios";
import { Menu } from "../Navigation/Menu";
import Pagination from "../Pagination/Pagination";
import UpdateRoom from "../Update/UpdateRoom";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import "./table.css";
import { Footer } from "../Footer/Footer";

const Table = () => {
    const [data, setData] = useState([]);
    const [type, setType] = useState([]);
    const [show, setShow] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);
    const [roomNum, setRoomNum] = useState();
    const [roomDesc, setRoomDesc] = useState();
    const [roomIdent, setRoomIdent] = useState();
    const [roomPrice, setRoomPrice] = useState();
    const [roomType, setRoomType] = useState();
    const closeModal = () => {
        setShowUpdate(false);
    };
    const closeModalHandler = () => setShow(false);
    const [page, setPage] = useState(0)

    useEffect(() => {
        const data = instance.get("http://localhost:8080/room?page="+page+"&page_size=7");
        data.then((res) => {
            setData(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
        const type = instance.get("types?page=0&page_size=5");
            type.then((res) => {
                setType(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    })
    function handleUpdate(id, number, price, description, roomType) {
        setShowUpdate(true);
        setRoomIdent(id);
        setRoomNum(number);
        setRoomPrice(price);
        setRoomDesc(description);
        setRoomType(roomType);
    }
    function printDocument() {  
        const input = document.getElementById('pdfdiv');  
        html2canvas(input)  
          .then((canvas) => {  
            var imgWidth = 210;    
            var imgHeight = canvas.height * imgWidth / canvas.width;    
            const imgData = canvas.toDataURL('image/png');  
            const pdf = new jsPDF();
            var position = 0;    
            pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);  
            pdf.save("download.pdf");  
          });  
      } 
    return(
        <>
            <AddType show={show} closeModalHandler={closeModalHandler} />
           <UpdateRoom show={showUpdate} 
            closeModal={closeModal} 
            roomId={roomIdent}
            roomD={roomDesc}
            roomN={roomNum}
            roomP={roomPrice}
    />
            <Menu button="Se d??connecter" 
            label1="R??servations" 
            link1="/booking"
            label2="Offres"
            link2="/type"
            />
            <div className="mt-5 mb-5">
                <h2>Liste des chambres</h2>
            </div>
            <div className="container" >
            <div className="btn-toolbar mb-2 mb-md-3 my-2" id="table-action">
                <div className="btn-group me-2" >
                    <button type="button" className="btn btn-sm btn-outline-secondary">Partager</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary" onClick={printDocument}>Exporter</button>
                </div>
                <select className="btn btn-outline-secondary rounded-2" >
                    <option value="titre">Tout</option>
                    <option value="titre">Chambres libre</option>
                    <option value="auteur">Chambres occup??s</option>
                    {
                        type.map((elt,k) => (
                            <option value={k+1}>{elt?.name}</option>
                        ))
                    }
                </select>
                </div>
            <table className="table-striped rounded-2 shadow text-center room-table" id="pdfdiv">
                <thead>
                    <tr>
                        <td>N?? de chambre</td>
                        <td>Description</td>
                        <td>Status</td>
                        <td>Type</td>
                        <td>Prix de location</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((elt, key) => (
                            <tr key={key}>
                                <td className="p-2">
                                    {elt?.roomNumber}
                                    </td>

                                <td className="p-2">{elt?.description}</td>

                                <td className="p-2">
                                    {elt?.available ? "Libre" : "R??serv??"}
                                    </td>
                                <td className="p-2">{elt?.type?.name}</td>
                                <td className="p-2">{elt?.type?.price}</td>
                                <td>
                                    <button className="btn btn-primary" 
                                   onClick={() => handleUpdate(key+1, elt?.roomNumber, elt?.type?.price, elt?.description, elt?.type?.id)}>Modifier</button>
                                </td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>
            <button className="mt-5 btn btn-success rounded-3" onClick={()=>setShow(true)}>Ajouter</button>
            <Pagination page={page} setPage={setPage} data={data}/>
           </div>
           <br/>
           <br/>
           <Footer/>
        </>
    )
}
export default Table;