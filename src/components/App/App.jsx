import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import { changeFilter } from '../../redux/filtersSlice';
import { addContact } from '../../redux/contactsSlice';

function App() {
  const contacts = useSelector(changeFilter);
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />
      <SearchBox />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
