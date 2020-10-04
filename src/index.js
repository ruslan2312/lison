import * as serviceWorker from './serviceWorker';
import store from './redux/redux-stroe'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import StoreContext from './StoreContext';
import StoreContex from './StoreContext';


function RenderTree(state) {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <StoreContex.Provider value = {store} >
                    <App />
                </StoreContex.Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

RenderTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    RenderTree(state);
});













// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
