import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import store from './stores/ReduxStores'

ReactDOM.render(
<Provider store={store}>
    <Layout />
</Provider>,
document.getElementById('redux'))
