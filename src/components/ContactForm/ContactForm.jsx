import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from './ContactForm.module.css'
import {addContact} from '../../redux/contactsSlice'
import { useDispatch } from "react-redux";

export default function ContactForm() {
    
    const dispatch = useDispatch()
    

    const initialValues = {
        name: "",
        number: "",
    };

     // Generating unique IDs for form fields
    const nameField = useId();
    const numberField = useId();

    const FormSchema = Yup.object().shape({    
       name: Yup.string().min(3, "Too short name!").max(50, "Too long name!").required("This field is required."),
       number: Yup.string().min(3, "Too short number!").max(50, "Too long number!").required("This field is required."),
    });

    const handleSubmit = (values, actions) => {
        dispatch(addContact(values)) // Dispatching addContact action with form values
    actions.resetForm(); // Resetting form after submission
  };

    return (
        <Formik initialValues={initialValues} validationSchema={FormSchema} onSubmit={handleSubmit}>
            <Form className={css.container}> 
                <div className={css.inputCont}>
                    <label className={css.inputLabel} htmlFor={nameField}>Name</label>
                    <Field className={css.inputField} name="name" type="text" id={nameField}></Field>
                    <ErrorMessage className={css.error} name="name" component="span"/>
                </div>

                <div className={css.inputCont}>
                    <label className={css.inputLabel} htmlFor={numberField}>Number</label>
                    <Field className={css.inputField} name="number" type="text" id={numberField}></Field>
                    <ErrorMessage className={css.error} name="number" component="span"/>
                </div>

                <button className={css.btnForm} type="submit">Add contact</button>
            </Form>
</Formik>
    )
}