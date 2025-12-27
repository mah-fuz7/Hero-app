import React from 'react';
import Chart from './Chart';

const InstallApp = ({app,handleRemove}) => {
    const{image,title,size,downloads,ratingAvg }=app
   

    return (
        <div>
             <div className='bg-white rounded-lg p-4 shadow-sm border border-gray-200'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                    <div className='w-16 h-16 bg-gray-300 rounded-lg flex-shrink-0'>
                        <img 
                            src={image} 
                            alt='App Icon'
                            className='w-full h-full rounded-lg object-cover'
                        />
                    </div>

                    <div>
                        <h3 className='text-lg font-semibold text-gray-800 mb-1'>
                            {title}
                        </h3>
                        
                        <div className='flex items-center gap-4 text-sm'>
                            <div className='flex items-center gap-1 text-green-600'>
                                <span>⬇️</span>
                                <span className='font-medium'>{downloads}</span>
                            </div>

                            <div className='flex items-center gap-1 text-yellow-600'>
                                <span>⭐</span>
                                <span className='font-medium'>{ratingAvg}</span>
                            </div>

                            <div className='text-gray-600'>
                                <span>{size} MB</span>
                            </div>
                        </div>
                    </div>
                </div>

                <button onClick={()=>handleRemove(app.id)} className='bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors'>
                    Uninstall
                </button>
            </div>
        </div>
        </div>
     
    );
};

export default InstallApp;