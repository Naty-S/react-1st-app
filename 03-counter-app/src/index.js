import React from 'react';
import ReactDOM from 'react-dom';

// import PrimeraApp from './PrimeraApp'
import CounterApp from './CounterApp';

import './index.css';


const divRoot = document.querySelector('#app');

ReactDOM.render(<CounterApp value={1} />, divRoot); // value={10}, propiedad pasada como arg a la app
