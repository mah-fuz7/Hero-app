import React from 'react';
import logo from '../../B12-A08-Hero-Apps/assets/logo.png'

const Loading = () => {
    return (
        <div>
<img src={logo} className='h-48 mt-[50%] ml-[90%] lg:ml-[150%] animate-spin'/>
        </div>
    );
};

export default Loading;