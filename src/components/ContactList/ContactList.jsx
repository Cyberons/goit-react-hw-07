import { useDispatch, useSelector } from 'react-redux'
import Contact from '../Contact/Contact'
import css from './ContactList.module.css'

export default function ContactList() {
    const contacts = useSelector((state) => state.contacts.items)
    const filter = useSelector((state)=> state.filter.name)
    

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim()) ||
        contact.number.toLowerCase().trim().includes(filter.toLowerCase().trim()));
    

    return (
        <ul className={css.contactList}>
            {filteredContacts.map(contact => (
                <li className={css.contactListItem} key={contact.id}>
                    <Contact name={contact.name}
                        number={contact.number}
                        id = {contact.id}
                    />
                </li>
            ))}
        </ul>
)
}