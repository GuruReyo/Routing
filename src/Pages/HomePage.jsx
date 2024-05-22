import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate=useNavigate();
  function navigateHandler(){
    navigate('/products');
  }
  return ( 
    <>
  <h1>My Home Page</h1>
  <p>
    Go to <Link to="products">Products Page</Link>
  </p>

  <button onClick={navigateHandler}>Navigate</button>
  </>
);
  
}

export default HomePage;