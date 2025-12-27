import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import Loading from '../Components/Loading';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const RootLayout = () => {

    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar/>
            <main className='flex-1'>
             <Outlet></Outlet>
           </main>
            <Footer></Footer>
                  <ToastContainer />

        </div>
    );
};

export default RootLayout;