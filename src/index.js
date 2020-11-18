import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducer from './Redux/Reducer'

const middleWares = [thunk];

const store = createStore(reducer, applyMiddleware(...middleWares))

const app = (
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);


ReactDOM.render(app, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log());
