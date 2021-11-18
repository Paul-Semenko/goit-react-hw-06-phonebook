
import style from './components/Filter/style.module.css';
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList  from './components/ContactList/ContactList';
import Filter from "./components/Filter/Filter";


export default function App() {
  
return (
      <div>
        <ContactForm/>
        <h2 className={style.contacts__title}>Contacts</h2>
        <Filter/>
        <ContactList/>
      </div>
    );

  
}


