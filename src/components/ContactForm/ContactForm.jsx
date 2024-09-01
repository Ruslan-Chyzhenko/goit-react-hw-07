import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { addContact, selectContacts } from "../../redux/contactsSlice";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    const { username, number } = values;

    if (contacts.some((contact) => contact.name === username)) {
      alert("Contact already exists");
      return;
    }

    dispatch(
      addContact({
        id: nanoid(),
        name: username,
        number: number,
      })
    );
    resetForm();
  };

  return (
    <Formik
      initialValues={{ username: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.fieldContainer}>
          <label htmlFor="username" className={css.label}>
            Name
          </label>
          <Field className={css.field} type="text" name="username" />
          <ErrorMessage name="username" component="div" className={css.error} />
        </div>
        <div className={css.fieldContainer}>
          <label htmlFor="number" className={css.label}>
            Number
          </label>
          <Field className={css.field} type="text" name="number" />
          <ErrorMessage name="username" component="div" className={css.error} />
        </div>
        <div className={css.buttonContainer}>
          <button className={css.button} type="submit">
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
}
