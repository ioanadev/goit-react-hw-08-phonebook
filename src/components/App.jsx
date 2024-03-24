import { useDispatch, useSelector } from 'react-redux';
import { getContacts} from '../redux/contacts/selectors';
import { Suspense, lazy, useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';
import "./App.css"
import { Route, Routes } from 'react-router-dom';
// import Home from './pages/Home/Home';
// import Register from './pages/Register/Register';
// import Login from './pages/Login/Login';
import MeniuBar from './MeniuBar/MeniuBar';
import Container from './container/Container';
// import Contacts from './pages/Contacts/Contacts';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';


const Home = lazy(() => import("./pages/Home/Home"));
const Register = lazy(() => import("./pages/Register/Register"));
const Login = lazy(() => import("./pages/Login/Login"));
const Contacts = lazy(() => import ("./pages/Contacts/Contacts"));

export const App = () => {
  const dispatch = useDispatch();
  const contact = useSelector(getContacts);
  // const isLoggedIn = useSelector(getIsLoggedIn);


  useEffect(() =>{
    dispatch(fetchContacts());
  }, [dispatch]);
console.log(contact);
  return (
    <>
    <MeniuBar/>
    <Container>
      <Suspense>
       <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/contacts' 
      element = {
        <PrivateRoute>
          <Contacts/>
          </PrivateRoute>
      }/>
      <Route path='/register' 
      element = {
      <PublicRoute>
        <Register/>
        </PublicRoute>}/>
      <Route path='/login'
       element = {
        <PublicRoute>
          <Login/>
        </PublicRoute>
       }/>
    </Routes>
    </Suspense>

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
