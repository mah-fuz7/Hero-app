import React from 'react';
import { Link } from 'react-router';
import logo from '../../B12-A08-Hero-Apps/assets/logo.png'
import { Github } from 'lucide-react';



const Navbar = () => {
    return (
      <div>
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start ml-10">
 
   <Link to={'/'}> <img src={logo} className='h-13'/></Link>
    <p className='text-purple-600 font-bold'>HERO.IO</p>
  </div>
  <div className="navbar-center lg:flex">
    
      <Link to={'/'} className='btn btn-ghost'>Home</Link>
      <Link to={'/apps'} className='btn btn-ghost'>Apps</Link>
      <Link to={'/installation' } className='btn btn-ghost'>Installation</Link>
   
  </div>
  <div className="navbar-end rounded-3xl mr-8">
    
    <a href='https://github.com/mah-fuz7' className="btn text-white bg-purple-700"> <span className='rounded-xl bg-white text-purple-600 pt-0.5 font-bold'><Github  /></span>  Contribute</a>
  </div>
</div>
      </div>
    
  );
   
};

export default Navbar;