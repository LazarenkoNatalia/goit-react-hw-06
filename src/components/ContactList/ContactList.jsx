import stylContList from "./ContactList.module.css"

import Contact from '../Contact/Contact.jsx';

export default function ContactList({
    contactitems, onDel }
) {
    return (
        <ul className={stylContList.listCard}>
            {contactitems.map(contlist => {
                return (
                    <li key={contlist.id} className={stylContList.card}>
                        <Contact
                            id={contlist.id}
                            name={contlist.name}
                            number={contlist.number}
                            onDel={onDel}
                        />
                    </li>
                );
            })}
        </ul>
    )
}