import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/actions';
import style from './style.module.css';

 function Filter({handleChange}) {
  
    return (
      <>
        <label htmlFor="search" className={style.filter__title}>
          Find contacts by name
        
        <input
          
                    autoComplete="off"
                    id="search"
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]"
                    onChange={(e) => {
                        e.preventDefault();
                        handleChange(e);
                    }}
                    className={style.filter__input}
            ></input>
            </label>
      </>
    );
}

const dispatchProps = dispatch => ({
  handleChange: e => dispatch(changeFilter(e.target.value.toLowerCase()))
});

export default connect(null, dispatchProps)(Filter);

Filter.propTypes = {
    handleChange: PropTypes.func,
}

