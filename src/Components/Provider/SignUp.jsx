import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import './Provider.css';
import { BASE_URL } from "../../BASE_URL";
import InPut from "../Input/Input";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


export default function SignUp(props) {
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
        toast.error("Email non conforme ou déja pris")
        navigate('/login')
    }
    const addAdmin = async() =>{
        const data = {
            email : username,
            password : password,
            roles : "ADMIN",
        }
        const promise = await axios.post(`${BASE_URL}/signup`,data)
        promise.then(res=> res.status === 200 ? navigate('/home'): navigate('/login'))
        .catch((error)=>console.log(error) ,error() )
    }
return(
 <>  { 
    choose ? <Login/> :
<div className="body">
    <div className="container1" id="container" >
		<div className="form-container sign-in-container">
			<form action="#" onSubmit={handlesubmit}>
				<h1 className="title">Sign Up</h1>
                <InPut type ="email" placeholder="EMAIL" setValue={setUsername} />
                <InPut type ="password" placeholder="PASSWORD" setValue={setPassword} />
                <ToastContainer
                position="top-center"
                closeButton={true}
                />
				<p>Already member , click<a color="yellow" onClick={()=>setChoose(true)} ><b> SIGN IN</b></a></p>
				<button className="button1" onClick={()=>addAdmin()}>Sign Up</button>
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