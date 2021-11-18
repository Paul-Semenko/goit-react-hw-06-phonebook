import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { contactRemove } from '../../redux/actions';
import style from './style.module.css';


 function  ContactList ({contacts, filter, handleRemove}) {
 
  const handleFilter = () => {
    return contacts.filter((el) => {
      const arr = el.name.toLowerCase().split(" ");

      for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase().match(filter) !== null) {
          return true;
        }
      }
      return false;
    });
};
    return (
      <ul className={style.contacts__list} >
        {handleFilter().map((el) => (
          <li key={el.id} className={style.contacts__item}>
            {el.name} : {el.number}
           <button
              type="button"
              id={el.id}
            onClick={handleRemove}
                    className={style.contact__button}
            >
              Delete
            </button>
            </li>            
        ))}
            
        </ul>
         
    );
}


const stateProps = state => {
  return {
    contacts: state?.contacts?? [],
    filter: state?.filter??''
  }
};

const dispatchProps = dispatch => ({
  handleRemove: e => dispatch(contactRemove(e.target.id))
});

export default connect(stateProps, dispatchProps)(ContactList);

ContactList.propTypes = {
    contacts: PropTypes.array,
    handleRemove: PropTypes.func,
}
