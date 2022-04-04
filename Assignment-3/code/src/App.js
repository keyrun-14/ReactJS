import React from 'react';

import './App.css';
import CustomerInfo from './Components/CustomerInfo';
import Header from './Components/Header';
import OrderInfo from './Components/OrderInfo';
import ProductList from './Components/ProductList';
function App(props) {
  const { employee } = props;

  

  return (
    <div className="site-container">
      <Header employee={employee}/>
      <CustomerInfo employee={employee}/>
      <OrderInfo employee={employee}/>
      <ProductList employee={employee}/>
      {/* Start Your code here */}
    </div>
  );
}

export default App;
