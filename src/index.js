// Set up your application entry point here...

import React from 'react';
import { render } from 'react-dom';
import Calculator from './components/Calculator';

require('./favicon.ico'); // Tell webpack to load favicon.ico

render(
    <Calculator />, document.getElementById('app')
);

