import React from 'react';
import './ErrorPage.css';
import { linkHome } from '../../helper/linkData';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
 return (
  <div id='notfound'>
   <div className='notfound'>
    <div className='notfound-404'>
     <h3>Oops! Page not found</h3>
     <h1>
      <span>4</span>
      <span>0</span>
      <span>4</span>
     </h1>
    </div>
    <h2>We are sorry, but the page you requested was not found</h2>
    <Link to={linkHome}>
     <button className='btn btn-dark'>Go Back Home</button>
    </Link>
   </div>
  </div>
 );
};

export default ErrorPage;
