import React from 'react';
import { Link } from 'react-router';

const HomeCard = ({app}) => {
    const{title,image,ratingAvg,downloads ,id}=app
    return (
      <>
      <Link to={`/details/${id}`}> 
        <div className="w-80p-8 rounded-lg  flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-xs">
        {/* Image Container */}
        <div className="w-full h-64 bg-gray-300 flex items-center justify-center ">
         <img src={image} alt='title' className="w-full h-full object-cover" />
        </div>
        
        <div className="p-4">
          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {title}
          </h3>
          
          {/* Stats Container */}
          <div className="flex items-center justify-between">
            {/* Downloads */}
            <div className="flex items-center gap-2">
              <svg 
                className="w-5 h-5 text-emerald-500" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path 
                  fillRule="evenodd" 
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
              <span className="text-emerald-500 font-medium">
                {downloads}
              </span>
            </div>
            
            {/* Rating */}
            <div className="flex items-center gap-1">
              <svg 
                className="w-5 h-5 text-orange-400" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-orange-400 font-medium">
                {ratingAvg}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Link>
</>
    );
};

export default HomeCard;