import React from 'react';

const TrustBanner = () => {
    return (
        <div>
            <div className="w-full bg-[#834df4] py-20 px-6 font-sans text-white my-0">
      <div className="max-w-6xl mx-auto">
        {/* Main Title */}
        <h2 className="text-center text-4xl md:text-[42px] font-bold mb-16 tracking-tight">
          Trusted By Millions, Built For You
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 text-center">
          
          <div className="flex flex-col gap-2">
            <p className="text-[15px] font-medium opacity-80 uppercase tracking-wide">
              Total Downloads
            </p>
            <h3 className="text-6xl md:text-[84px] font-black leading-none">
              29.6M
            </h3>
            <p className="text-sm font-medium opacity-70 mt-2">
              21% More Than Last Month
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-[15px] font-medium opacity-80 uppercase tracking-wide">
              Total Reviews
            </p>
            <h3 className="text-6xl md:text-[84px] font-black leading-none">
              906K
            </h3>
            <p className="text-sm font-medium opacity-70 mt-2">
              46% More Than Last Month
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-[15px] font-medium opacity-80 uppercase tracking-wide">
              Active Apps
            </p>
            <h3 className="text-6xl md:text-[84px] font-black leading-none">
              132+
            </h3>
            <p className="text-sm font-medium opacity-70 mt-2">
              31 More Will Launch
            </p>
          </div>

        </div>
      </div>
    </div>
        </div>
    );
};

export default TrustBanner;