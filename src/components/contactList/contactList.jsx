import { useDispatch, useSelector } from 'react-redux';
import './contactList.css';
import { getError, getIsLoading, selectVisibleContacts } from '../../redux/contacts/selectors';

import { deleteContact, fetchContacts } from '../../redux/contacts/operations';
import { useEffect } from 'react';
import { CircleLoader } from 'react-spinners';
import { Section } from 'components/section/section';


export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
 
 useEffect(()=>{
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = (id) => {
   dispatch(deleteContact(id));
   console.log(id);

  };
 

  return (
  
    <ul>
   <Section title={'Contacts'} />
     {isLoading && !error ? (
     <CircleLoader/>
     ) : (
      fetchContacts === 0 & !error ? (
        <p>The Phonebook is empty!</p>
        ): (
          filteredContacts.map(contact => (
        <li key={contact.id}>
          <div className="contact-list-container">
            <div className="contact-list">
              {contact.name}: {contact.number}
            </div>
            <button
              className="delete-button"
              onClick={() => handleDelete(contact.id)}
            >
              Delete
            </button>
          </div>
        </li>
      )))
      )}
    </ul>
  );
};
