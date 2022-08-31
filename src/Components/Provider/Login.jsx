import InPut from "../Input/Input";
import SignUp from "./SignUp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Provider.css';
import { BASE_URL } from "../../BASE_URL";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function Login(props) {
    const handlesubmit=(e)=>{
        e.preventDefault()
        console.log(username)
        console.log(password)
    };
   const navigate = useNavigate()
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const [choose , setChoose ] = useState(false)

    const error =()=>{
        toast.error("Non autoriser ")
        navigate('/login')
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
        }
    
            await fetch(`${BASE_URL}/login`, options)
            .then(response => response.status === 200 ? navigate('/home'): error() )
            .catch(error => {
                console.log(error)
                alert("couldn't attempt")
            }) 
    }
return(
 <>  
  {
    choose ? <SignUp/> :
<div className="body">
    <div className="container1" id="container" >
		<div className="form-container sign-in-container">
			<form action="#" onSubmit={handlesubmit}>
				<h1 className="title">Se connecter</h1>
                <InPut type ="text" placeholder="EMAIL" setValue={setUsername} />
                <InPut type ="password" placeholder="PASSWORD" setValue={setPassword} />
                <ToastContainer
                position="top-center"
                closeButton={true}
                />
				<p>Pour les nouveaux , <a href="#" className="retour" color="yellow" onClick={()=>setChoose(true)} ><b> S'enregistrer</b></a></p>
				<button onClick={()=>getData()} className='button1' >Se connecter</button><br />
                <em><a className="retour" onClick={()=>navigate('/')} ><i className="fa fa-arrow-left"></i>  RETOUR </a> à la page principal</em><br/>
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