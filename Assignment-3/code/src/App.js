import React from 'react';

import './App.css';
function App(props) {
  const { employee } = props;


  return (
    <div className="site-container">
      <div className='header'>
      <input type="button" value="<" onclick="history.back()"/>
      <p>{employee.Name}</p>
      <p>{employee.Id}</p>
      <button>print</button>

      </div>
      <div className='customer-info'>
      <p> Appointment: {employee.Appointment}</p>
      <p> Email: {employee.Email}</p>
      <p>Phone: {employee.Phone}  </p>       
      </div>
      <div className='order-info'>
        <input type="radio" />in process
        
      </div>
      <div className='product-list'>

      </div>

    {/* Start Your code here */}
    </div>
  );
}

export default App;
