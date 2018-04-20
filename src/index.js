import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'mobx-react'
import Store from './stores'

import './assets/scss/main.scss';
// import '../node_modules/jquery/dist/jquery.min.js';
// import '../node_modules/popper.js/dist/umd/popper.min.js';
// import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

ReactDOM.render(
<Provider {...Store}>
        <App /> 
</Provider>
, document.getElementById('root'));
