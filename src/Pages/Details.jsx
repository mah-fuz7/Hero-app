import React, { useState } from 'react';
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import Loading from '../Components/Loading';
import Chart from '../Components/Chart';


const Details = () => {
    const [installed, setInstalled]=useState(false);
    const {id}=useParams()
      const {appsData,loading } =useApps()
      if(loading){
        return <Loading/>
      }
      const appData=appsData.find(app=>app.id==id) || {}
   
   const{title,companyName,image,size,ratingAvg,downloads,reviews,description}=appData
const handleInstall = () =>{

    setInstalled(true)
const existingApps=JSON.parse(localStorage.getItem('install')) ||{}
let updateApps=[]
if(existingApps.length>0){
    const DuplicateApp=existingApps.some(app=>app.id==appData.id)
    if(DuplicateApp){
         alert('already Install')
         return
    }else{
updateApps=[...existingApps,appData]

    }
}else{
    updateApps.push(appData)
}

localStorage.setItem('install',JSON.stringify(updateApps))
}


   return (

        
            <div>
                      <div className=' rounded-lg p-6 bg-gray-50'>
            <div className='flex gap-6'>
                {/* App Icon */}
                <div className='w-32 h-32 flex-shrink-0'>
                    <img 
                        src={image}
                        alt='App Icon' 
                        className='w-full h-full rounded-lg object-cover'
                    />
                </div>

                {/* App Details */}
                <div className='flex-1'>
                    <h2 className='text-2xl font-bold text-gray-800 mb-1'>
                        {title}
                    </h2>
                    <p className='text-sm text-gray-600 mb-4'>
                        Developed by <span className='text-blue-600'>{companyName}</span>
                    </p>

                    {/* Stats Section */}
                    <div className='flex gap-8 mb-4'>
                        {/* Downloads */}
                        <div className='flex flex-col items-center'>
                            <div className='w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-2'>
                                <span className='text-2xl'>⬇️</span>
                            </div>
                            <p className='text-xs text-gray-600'>Downloads</p>
                            <p className='text-2xl font-bold text-gray-800'>{downloads}</p>
                        </div>

                        {/* Average Ratings */}
                        <div className='flex flex-col items-center'>
                            <div className='w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mb-2'>
                                <span className='text-2xl'>⭐</span>
                            </div>
                            <p className='text-xs text-gray-600'>Average Ratings</p>
                            <p className='text-2xl font-bold text-gray-800'>{ratingAvg}</p>
                        </div>

                        {/* Total Reviews */}
                        <div className='flex flex-col items-center'>
                            <div className='w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-2'>
                                <span className='text-2xl'>💬</span>
                            </div>
                            <p className='text-xs text-gray-600'>Total Reviews</p>
                            <p className='text-2xl font-bold text-gray-800'>{reviews}</p>
                        </div>
                    </div>

                    {/* Install Button */}
                    <button disabled={installed} onClick={handleInstall} className='bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2.5 rounded-md transition-colors'>
                       {installed?"Installed":`Install Now (${size}MB)`}
                    </button>
                </div>
                
            </div>
        </div>
        
        <Chart appData={appData} ></Chart>
       <div className='max-w-300 mx-auto my-4'>
                <h1 className='font-bold text-3xl '>Description</h1>
                <hr />
                <p className='font-extralight'>{description}</p>
       </div>

        </div>
        
    );
};

export default Details;