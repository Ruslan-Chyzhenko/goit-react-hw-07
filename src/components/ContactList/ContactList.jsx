import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { deleteContact, selectContacts } from "../../redux/contactsSlice";
import { useSelector, useDispatch } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice";

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.gridContainer}>
      {visibleContacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact data={contact} onDelete={handleDeleteContact} />
        </li>
      ))}
    </div>
  );
}
