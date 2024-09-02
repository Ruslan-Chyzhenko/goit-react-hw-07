import css from "./Contact.module.css";
import { HiUser } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Contact({ id, name, number, onDelete }) {
  return (
    <div className={css.container}>
      <div className={css.info}>
        <p className={css.name}>
          <HiUser className={css.icon} /> {name}
        </p>
        <p className={css.number}>
          <BsFillTelephoneFill className={css.icon} /> {number}
        </p>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
