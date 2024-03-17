import { Section } from './section/section';
import { ContactForm } from './contactForm/contactForm';
import { ContactList } from './contactList/contactList';
import { Filter } from './filter/filter';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts} from '../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operations';
import "./App.css"

export const App = () => {
  const dispatch = useDispatch();
  const contact = useSelector(getContacts);

  useEffect(() =>{
    dispatch(fetchContacts());
  }, [dispatch]);
console.log(contact);
  return (
    <div className='phonebook'>
      <Section title={'Phonebook'} />
      <ContactForm />
      <Section title={'Contacts'} />
      <Filter />
      <ContactList/>
      </div>
  );
};
