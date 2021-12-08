import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import reducer from './reducers'
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
import reportWebVitals from './reportWebVitals';


const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/events/new" element={< EventsNew />}/>
        <Route path="/" element={< EventsIndex />}/>
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
