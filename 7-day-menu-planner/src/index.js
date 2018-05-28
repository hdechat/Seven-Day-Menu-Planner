import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import rootReducer from './reducers';
import listenForChooseCategory from './sagas';

const sagaMiddleware = createSagaMiddleware();
const devTools = const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, devTools, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(listenForChooseCategory);

const app = <Provider store={store}>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </Provider>

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
