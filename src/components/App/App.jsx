import ContactForm from "../ContactForm/ContactForm"
import SearchBox from "../SearchBox/SearchBox"
import ContactList from "../ContactList/ContactList"
import Loader from "../Loader/Loader"
import css from './App.module.css'
import { useEffect } from "react";
import {fetchContacts} from '../../redux/contactsOps'
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "../../redux/contactsSlice"



export default function App() {

  const loading = useSelector(selectLoading)
  const error = useSelector(selectError)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);



  return (
    <div className={css.container}>
  <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <div className={css.LoaderOrError}>{loading && <Loader />}
        {error && error}
      </div>
      <ContactList />
</div>
  )
}