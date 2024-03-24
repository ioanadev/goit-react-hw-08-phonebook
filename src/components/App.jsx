

import { useDispatch, useSelector } from 'react-redux';
import { getContacts} from '../redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';
import "./App.css"
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import MeniuBar from './MeniuBar/MeniuBar';
import Container from './container/Container';
import { getIsLoggedIn } from "../redux/auth/selectors";
import Contacts from './pages/Contacts/Contacts';

export const App = () => {
  const dispatch = useDispatch();
  const contact = useSelector(getContacts);
  const isLoggedIn = useSelector(getIsLoggedIn);

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

      {isLoggedIn ? (
      <Route path='/contacts' element = {<Contacts/>}/>
      ):(
      <>
      <Route path='/register' element = {<Register/>}/>
      <Route path='/login' element = {<Login/>}/></>
      )}
      
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
