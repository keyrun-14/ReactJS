import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const employee = {
  Name:"Alan Ford",
  Id: "00005152",
  Appointment: '9:00 (24-05-2016)',
  Email: 'alan.form@email.ni',
  Phone: +31123456789,
       }

ReactDOM.render(
  <React.StrictMode>
    <App employee={employee} />
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
