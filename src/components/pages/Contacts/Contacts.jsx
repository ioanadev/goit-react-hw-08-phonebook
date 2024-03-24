import { ContactForm } from "components/contactForm/contactForm";
import { ContactList } from "components/contactList/contactList";
import { Filter } from "components/filter/filter";
import { Section } from "components/section/section";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { getContacts } from "../../../redux/contacts/selectors";


const Contacts = () =>{
    const contacts = useSelector(getContacts);
    return(
        <>
         <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.9 }}
    >
        <Section title={'Phonebook'}/>
         <br/>
        <ContactForm/>
        {/* <Section title={'Contacts'} /> */}
        {contacts.length >=2 ? <Filter/> : ""}

        <ContactList/>
        </motion.div>
        
        
        </>
    )
}
export default Contacts;