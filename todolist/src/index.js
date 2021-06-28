import React from 'react';
import ReactDOM from 'react-dom'
import App from './App.js'
import store from './store.js';
import {Provider} from 'react-redux'


ReactDOM.render(
    <React.strictMode>
        <Provider store = {store}>
            <App />
        </Provider>
    </React.strictMode>

, document.getElementById('root'))