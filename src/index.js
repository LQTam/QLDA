import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './components/Store';
import Firebase, { FirebaseContext } from './components/Firebase';
import Loadable from 'react-loadable';
import {Spinner} from '@blueprintjs/core';
const AppLoadable = Loadable({
    loader: ()=>import ('./components/App'),
    loading : ()=> <h1 style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}}>Loading... <Spinner /></h1>
})
ReactDOM.render(
    <Provider store={store}>
        <FirebaseContext.Provider value={new Firebase()}>
            <App />
        </FirebaseContext.Provider>
    </Provider>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
