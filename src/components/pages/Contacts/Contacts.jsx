import { ContactForm } from "components/contactForm/contactForm";
import { ContactList } from "components/contactList/contactList";
import { Section } from "components/section/section";



const Contacts = () =>{

    return(
        <>
        <div > 
        <Section title={'Phonebook'}/>
         <br/>
        <ContactForm/>
        {/* <Section title={'Contacts'} /> */}
        <ContactList/>
        </div>
        
        
        </>
    )
}
export default Contacts;