
import React from 'react';


import Banner from '../Components/Banner';
import HomeCard from '../Components/HomeCard';
import useApps from '../Hooks/useApps';
import { Link } from 'react-router';
import Loading from '../Components/Loading';




const Home = () => {
    const {appsData,loading}=useApps()
        const featureApps=appsData.slice(0,5)

    // console.log(appsData.appsData)
    return (
        <div >
   <Banner/>
   <div className='flex flex-col justify-center items-center'>
    <h1 className='font-bold text-4xl'>Trending Apps</h1>
    <h5 className='font-extralight'>Explore All Trending Apps on the Market developed by us</h5>
   </div>       
   <div className='my-auto max-w-300 mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-0 '>

   {
    loading?<Loading/>:(  featureApps.map(app=>(<HomeCard key={app.id} app={app}></HomeCard>))
  )
   }
   </div>
   <Link to={'/apps'}>   <div className='items-center flex justify-center'><button className='btn btn-ghost bg-purple-600 my-5 text-white'>Show All</button></div>
</Link>
        </div>
    );
};

export default Home;
