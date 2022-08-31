import '../Provider/Provider.css'
export default function InPut(props) {
    const {setValue , type , placeholder} = props;

    return(
<>
    <input className="input1" type={type}  placeholder={placeholder} required onChange={(e)=>setValue(e.target.value)}/>
</>
    )
}