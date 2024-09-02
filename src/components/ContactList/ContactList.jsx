import Contact from "../Contact/Contact";
import { useSelector, useDispatch } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

import css from "./ContactList.module.css";
import { deleteContact } from "../../redux/contactsOps";

export default function ContactList() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  function handleDelete(contactId) {
    dispatch(deleteContact(contactId));
  }

  return (
    <div className={css.gridContainer}>
      {filteredContacts.map((contact) => {
        return (
          <li className={css.item} key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
              onDelete={handleDelete}
            />
          </li>
        );
      })}
    </div>
  );
}
