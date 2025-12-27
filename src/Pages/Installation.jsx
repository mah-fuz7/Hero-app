import React, { useState } from 'react';
import InstallApp from '../Components/InstallApp';


const Installation = () => {
    const installApps=JSON.parse(localStorage.getItem('install')) || {}
    const [sort,setSort]=useState('')
    const sortedApps=[...installApps]
if(sort==='LTH'){
    sortedApps.sort((a,b)=>a.size-b.size)
}else if(sort==='HTL'){
    sortedApps.sort((a,b)=>b.size-a.size)
}
// remove app
    const[install,setInstall]=useState(()=>{JSON.parse(localStorage.getItem('install')) ||[] }) 

const handleRemove= (id) =>{
 const updatedlist=sortedApps.filter(app=>app.id !== id) 
 setInstall(updatedlist)
 localStorage.setItem('install',JSON.stringify(updatedlist))
}

 
    // console.log(installApps)
    return (
        <div>
            <div className='flex flex-col items-center my-5'>
                <h1 className='font-bold text-3xl'>Your Installed Apps</h1>
                <h4 className='font-extralight'>Explore All Trending Apps on the Market Developed by us</h4>
            </div>
            <div className='flex justify-between  my-3'>
                <h1 className='font-bold  ml-4 mt-4'>{sortedApps.length} App found</h1>
              <select className='btn btn-ghost mr-4' value={sort} onChange={(e)=>{setSort(e.target.value)}}>
                <option value="">Sorted By Size </option>
                <option value="LTH">Low to High</option>
                <option value="HTL">High to Low</option>
              </select>
            </div>
           {
            sortedApps.map(app=>(<InstallApp key={app.id} handleRemove={handleRemove} app={app}></InstallApp>))
           }

        </div>
    );
};

export default Installation;