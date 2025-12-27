import React from 'react';
import hero from '../../B12-A08-Hero-Apps/assets/hero.png'
import TrustBanner from './TrustBanner';
import playstoreicon from '../../../Hero-app/B12-A08-Hero-Apps/assets/playstore.png'
import appstoreicon from '../../../Hero-app/B12-A08-Hero-Apps/assets/appstore.jpg'
const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 p-0 min-h-0">
                <div className="hero-content flex-col p-0 m-0 w-full max-w-full">
                    
                    <div className='items-center text-center lg:text-left mt-10 px-6 lg:ml-[15%]'>
                        <h1 className="text-5xl font-bold">
                            We Build <br />
                            <span className='text-purple-800'>Productive</span> Apps
                        </h1>
                        <p className="py-6 max-w-xl mx-auto ">
                            At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. 
                            Our goal is to turn your ideas into digital experiences that truly make an impact.
                        </p>
                        <div className='flex justify-center lg:justify-start gap-4 mb-10'>
                            <a href="https://play.google.com/store/games?hl=en&pli=1">                            <button className="btn  "> <img src={playstoreicon} alt="" className='h-4 ' />play Store </button>
</a>
<a href="https://www.apple.com/app-store/">
                                <button className="btn "><img src={appstoreicon} className='h-4' alt="" /> App store</button>

</a>
                        </div>
                    </div>

                    
                    <img
                        src={hero}
                        className="w-full max-w-4xl mx-auto block object-cover"
                        alt="Mobile App Preview"
                    />
                </div>
            </div>
            
            <TrustBanner />
        </div>
    );
};

export default Banner;