import React from 'react';
import errorPage from '../../B12-A08-Hero-Apps/assets/error-404.png'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
const ErrorPage = () => {
    return (
      <div className='flex flex-col min-h-screen'>
        <Navbar/>
        <div className='flex-1 ml-[20%] lg:ml-[35%] '>
          
        <img src={errorPage}/>
        </div>
        <Footer/>
        </div>
    );
};

export default ErrorPage;