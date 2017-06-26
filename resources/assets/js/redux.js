import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout.js';
import TaskContainer from './TaskContainer';
import { Provider } from 'react-redux';
import taskApp from './reducers';
import { createStore } from 'redux';



let store = createStore(taskApp)


ReactDOM.render(
<Provider store={store}>
    <Layout />
</Provider>,
document.getElementById('redux'))
