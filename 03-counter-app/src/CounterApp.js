import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value = 0 }) => {

  const [counter, setCounter] = useState(value); // useState -> Hook/Func tiene 'use' como prefijo

  const handleAdd = () => {
    setCounter(counter + 1); // Como sabe que carajo es la funcion? es porque en si se psas una funcion?
    // setCounter( c => c + 1 );
  }

  const handleReset = () => setCounter(value);
  const handleSubtract = () => setCounter(counter - 1);

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>
      {/* <button onClick={ eventt => console.log(eventt) }>+1</button> */}
      {/* <button onClick={handleAdd()}>+1</button> React ejecuta la funcion cuando llega
        a este punto para renderizar el boton, entonces no funcionara si el return es undefined.
        Se puede hacer return de una func para ejecutarla al hacer click
      */}
      <button onClick={handleAdd}>+1</button> {/* Paso como ref la func para que cuando haga click se ejecute */}
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubtract}>-1</button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number
}

export default CounterApp;


