import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState(''); // No dejar como 'undefined' el estado inicial
  const handleInputChange = (e) => { setInputValue(e.target.value); }
  const handleSubmit = (e) => {
    e.preventDefault(); // Para que no haga refresh al presionar 'enter' estando en el form

    if (inputValue.trim().length > 2) { // Para que no agregue cosas vacias
      setCategories(cats => [inputValue, ...cats,]);
      setInputValue('');
    }
  }

  return (
    // No es necesario el fragment <></> porque 'form' ya es un elemento agrupador
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange} // Para que se pueda cambiar el valor en la caja del input
      />
    </form>
  )
}

AddCategory.propTypes = {setCategories: PropTypes.func.isRequired}
