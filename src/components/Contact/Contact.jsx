import css from './Contact.module.css'
import { RiContactsFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from 'react-redux'
import {deleteContact} from '../../redux/contactsSlice'


export default function Contact({ name, number, id }) {
    const dispatch = useDispatch()
    return (
        <>
            <div className={css.boxContactCont}>
                <div className={css.boxText}><RiContactsFill size={18} /> <p>{name}</p></div>
               <div className={css.boxText}><FaPhoneAlt size={16}/> <p>{number}</p></div>
                
            </div>
            
            <button className={css.contBtn} onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </>
)
}