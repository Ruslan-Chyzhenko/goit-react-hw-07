import Contact from "../Contact/Contact";
// import { deleteContact, selectContacts } from "../../redux/contactsSlice";
import { useSelector } from "react-redux";
// import { selectNameFilter } from "../../redux/filtersSlice";
import { selectFilteredContacts } from "../../redux/contactsSlice";

import css from "./ContactList.module.css";
// import { useEffect } from "react";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  // const dispatch = useDispatch();
  // const loading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  // const contact = useSelector(selectContact);

  // useEffect(() => {
  //   dispatch(fetshContacts());
  // }, [dispatch]);

  // const handleDeleteContact = (id) => {
  //   dispatch(deleteContact(id));
  // };

  return (
    <div className={css.gridContainer}>
      {filteredContacts.map((contact) => {
        return (
          <li className={css.item}>
            <Contact
              name={contact.name}
              number={contact.number}
              key={contact.id}
              id={contact.id}
            />
          </li>
        );
      })}
    </div>
  );
}
