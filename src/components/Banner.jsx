import React from 'react';
import fire from '../style/image/fire.svg';
import time from '../style/image/time.svg';
import file from '../style/image/file.svg';

function Banner() {
  return (
    <div className="flex px-32 gap-10 justify-center my-10 phone:flex-col phone:px-16">
      <div className="bg-white rounded-lg flex flex-col justify-center items-center gap-5 py-6 px-8 hover:text-xylo-yellow">
        <div className="bg-xylo-black rounded-full w-[15%] p-4 flex justify-center">
          <img src={fire} alt="fire" className="w-5" />
        </div>
        <p className="font-bold">TRENDING NOW</p>
        <p className="w-[70%] text-center">
          Find the interviews and articles hat are trending now
        </p>
      </div>
      <div className="bg-white rounded-lg flex flex-col justify-center items-center gap-5 py-6 px-8 hover:text-xylo-yellow">
        <div className="bg-xylo-black rounded-full w-[15%] p-4 flex justify-center">
          <img src={time} alt="fire" className="w-5" />
        </div>
        <p className="font-bold ">NEW RELEASES</p>
        <p className="w-[70%] text-center">
          Catch up on all the latest interviews and articles
        </p>
      </div>
      <div className="bg-white rounded-lg flex flex-col justify-center items-center gap-5 py-6 px-8 hover:text-xylo-yellow">
        <div className="bg-xylo-black rounded-full w-[15%] p-4 flex justify-center">
          <img src={file} alt="fire" className="w-5" />
        </div>
        <p className="font-bold ">THE ARCHIVES</p>
        <p className="w-[70%] text-center ">
          Explore the archives by browsing categories and tags
        </p>
      </div>
    </div>
  );
}

export default Banner;
