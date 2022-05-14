import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Main from './apps/Main';
import ToDo from './apps/ToDo';
import TicTacToe from './apps/TicTacToe';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WeatherApp from './apps/WeatherApp';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>

      <Routes>
        <Route exact path="/" element={<Main />}/>
        <Route path="/todo" element={<ToDo />}/>
        <Route path="/tictactoe" element={<TicTacToe />} />
        <Route path="/weather" element={<WeatherApp />}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
