import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 as uuid } from "uuid";
import { contactSubmit } from '../../redux/actions';
import style from './Style.module.css';



function ContactForm({handleSubmit}) {
    const nameInputId = uuid();
    const numberInputId = uuid();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    
    const handleInputChange = (event) => {
        if (event.currentTarget.name === 'name') {
            setName(event.currentTarget.value);
        } else if (event.currentTarget.name === 'number') {
            setNumber(event.currentTarget.value);
    }
        
    };
     
    return (
        <>
        <form onSubmit={(e) => {
            e.preventDefault();
            handleSubmit([name, number]);
            setName('');
        setNumber('')
        }}
            className={style.form}>
                <h1>Phonebook</h1>
          <label htmlFor={nameInputId} className={style.form__title}>Name
        <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        value={name}
                        onChange={handleInputChange}
                        id={nameInputId}
                        className={style.form__input}
                        
          />
          </label>
          <label htmlFor={numberInputId} className={style.form__title}>Number
          <input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    value={number}
                        onChange={handleInputChange}
                        id={numberInputId}
                        className={style.form__input}
/>
         </label> 
          <button className={style.form__button}>Add contact</button>
        </form>
        </>
    )
    
}

const dispatchProps = dispatch => ({
    handleSubmit: data => dispatch(contactSubmit(data))
});
export default connect(null, dispatchProps)(ContactForm);

 ContactForm.propTypes = {
    handleSubmit: PropTypes.func,
}