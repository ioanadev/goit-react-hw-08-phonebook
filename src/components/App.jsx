import { Section } from './section/section';
import { ContactForm } from './contactForm/contactForm';
import { ContactList } from './contactList/contactList';
import { Filter } from './filter/filter';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts} from '../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operations';
import "./App.css"
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import MeniuBar from './MeniuBar/MeniuBar';
import Container from './container/Container';

export const App = () => {
  const dispatch = useDispatch();
  const contact = useSelector(getContacts);

  useEffect(() =>{
    dispatch(fetchContacts());
  }, [dispatch]);
console.log(contact);
  return (
    <>
    <MeniuBar/>
    <Container>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/register' element = {<Register/>}/>
      <Route path='/login' element = {<Login/>}/>
    </Routes>
    </Container>
    </>
    // <div className='phonebook'>
    //   <Section title={'Phonebook'} />
    //   <ContactForm />
    //   <Section title={'Contacts'} />
    //   <Filter />
    //   <ContactList/>
    //   </div>
  );
};
