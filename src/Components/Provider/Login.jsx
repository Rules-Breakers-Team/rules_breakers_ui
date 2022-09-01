import InPut from "../Input/Input";
import SignUp from "./SignUp";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import './Provider.css';
import { BASE_URL } from "../Config/BASE_URL";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function Login(props) {
    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log(username);
        console.log(password);
    };
   const navigate = useNavigate()
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const [choose , setChoose ] = useState(false);
    const [errormess, setErrorMess] = useState("");

    const error =()=>{
        toast.error(errormess);
        navigate('/login');
    }
    const envoie = {
                email : username,
                password : password
            }
     const getData = async ()=>{
     const options = {
            method : 'POST' ,
            headers : {
                "Content-type":"application/Json"
            },
            body : JSON.stringify(envoie)
        };
    
            await fetch(`${BASE_URL}login`, options)
            .then(response => response.status === 200 ? navigate('/room'): error() )
            .catch(error => {
                setErrorMess("Non autoriser");
            });
    }
return(
 <>  
  {
    choose ? <SignUp/> :
<div className="body">
    <div className="container1" id="container" >
		<div className="form-container sign-in-container">
			<form action="#" onSubmit={handlesubmit} className="form">
				<h1 className="title">Se connecter</h1>
                <InPut type ="text" placeholder="Email or username" setValue={setUsername} />
                <InPut type ="password" placeholder="Password" setValue={setPassword} />
                <ToastContainer
                position="top-center"
                closeButton={true}
                />
		{/*	<p className="sign-up-text">Pour les nouveaux , <a href="#" className="back " color="yellow" onClick={()=>setChoose(true)} ><b> s'enregistrer</b></a></p> */}
				<button onClick={()=>getData()} className='button1' >Se connecter</button><br />
                <em><a className="back" onClick={()=>navigate('/')} ><i className="fa fa-arrow-left"></i>  RETOUR </a> à la page principal</em><br/>
			</form>
		</div>
		<div className="overlay-container">
			<div className="overlay">
					<div className="overlay-panel overlay-right">
					</div>
				</div>
			</div>
		</div>  
    </div>
    } 
 </>
)
}