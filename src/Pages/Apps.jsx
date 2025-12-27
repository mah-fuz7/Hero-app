import React, { useState } from 'react';
import useApps from '../Hooks/useApps';
import HomeCard from '../Components/HomeCard';
import Loading from '../Components/Loading';
import NotFound from '../../../Hero-app/B12-A08-Hero-Apps/assets/App-Error.png'
const Apps = () => {
    const {appsData,loading}=useApps()
        const [search,setSearch]=useState('')


const updateSearch=search.trim().toLocaleLowerCase()
const searchApps=updateSearch?appsData.filter(apps=>apps.title?.toLowerCase().includes(updateSearch)):appsData
    return (
        <>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='font-bold text-4xl'>Our All Applications</h1>
            <h2 className='font-extralight'>Explore All Apps on the Market Developed by us. We code for Millions</h2>
           </div>
           <div className='max-w-300 mx-auto flex justify-between'>
            <h1 className='font-bold '>({searchApps.length})Apps found</h1>
            <label className='input'>
                <input type='search' placeholder='Search Your App' value={search} onChange={(e)=>setSearch(e.target.value)}/>
            </label>
           </div>
        <div className='max-w-300 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-8'>
           
           {
           loading?<Loading/>:((searchApps.length===0?<p><img src={NotFound} className='ml-[100%] lg:ml-[130%]' alt="" /></p>:(( searchApps.map(app=>(<HomeCard key={app.id} app={app}></HomeCard>))))))
           }
        </div>
        </>
    );
};

export default Apps;
