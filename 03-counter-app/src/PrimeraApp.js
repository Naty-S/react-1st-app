import React from 'react';
import PropTypes from 'prop-types'; // properties(componentes), envian info del padre al hijo 
// import React, { Fragment } from 'react';

// Functional component
const PrimeraApp = ({ saludo, subtitulo }) => {
  return (
    <> {/* <Fragment></Fragment> para no poner un <div></div> adicional */}
      <h1> {saludo} </h1>
      {/* <pre> {  JSON.stringify( saludo, null, 3 )  } </pre> Para colocar objetos */}
      <p> {subtitulo} </p>
    </>
  );
}

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired // de tipo string requerido
  // , otraPropiedad: PropTypes.bool
}

PrimeraApp.defaultProps = {
  subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;
