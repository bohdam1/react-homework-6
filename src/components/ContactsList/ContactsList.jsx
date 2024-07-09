import React from "react";
import css from "./contactlist.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/Contact/slise";

export const ContactsList = () => {
    const dispatch = useDispatch();
    const contactsObject = useSelector((state) => state.contacts);
    const contacts = contactsObject.contacts; // Отримуємо масив контактів з вкладеного об'єкта
    const filter = useSelector((state) => state.filter.filter); // Отримуємо фільтр з Redux

    // Фільтруємо контакти за значенням фільтра
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    const handleDelete = (id) => {
        dispatch(deleteContact(id));
    };

    return (
        <ul className={css.contact_list}>
            {filteredContacts.map(({ id, name, number }) => (
                <li key={id} className={css.contact_item}>
                    {name}: {number}
                    <button onClick={() => handleDelete(id)} className={css.button_close}>
                        x
                    </button>
                </li>
            ))}
        </ul>
    );
};
