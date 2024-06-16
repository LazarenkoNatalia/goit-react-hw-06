import stylContact from "./Contact.module.css"
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
export default function Contact({
    id,
    name,
    number,
 onDel }) {
    // let status = isOnline ? stylefrcard.online : stylefrcard.offline;
    return (
        <>
            <div className={stylContact.card}>
                <div>
                <p className={stylContact.contField}><BsFillPersonFill /> {name}</p>
                <p className={stylContact.contField}><BsFillTelephoneFill /> {number}</p>
                </div>
                <button className={stylContact.btn} onClick={()=>onDel(id)}>Delete</button>
                
               
            </div>
        </>
    )
}