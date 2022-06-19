import React from 'react';

import one from '../style/image/image-1-1.jpeg';
import two from '../style/image/image-1-2.jpeg';
import three from '../style/image/image-1-3.jpeg';
import four from '../style/image/image-1-4.jpeg';
import five from '../style/image/image-1-5.jpeg';
import six from '../style/image/image-1-6.jpeg';
import seven from '../style/image/image-2-1.jpeg';
import eight from '../style/image/image-2-2.jpeg';
import nine from '../style/image/image-2-3.jpeg';
import ten from '../style/image/image-2-4.jpeg';
import eleven from '../style/image/image-2-5.jpeg';
import tweleve from '../style/image/image-2-6.jpeg';

function Card() {
  return (
    <div className="flex flex-col px-32 phone:px-16">
      <div className="flex flex-row  gap-10 phone:flex-col">
        <div className="w-[50%] border border-xylo-border/10 rounded-lg phone:w-[100%]">
          <div className="flex flex-col items-center p-6 gap-3">
            <p className="text-xylo-yellow font-bold">LISTEN NOW</p>
            <p className="text-white text-xl phone:text-lg">Outliers Podcast</p>
            <p className="text-white text-lg px-10 phone:text-sm phone:px-2 phone:text-center">
              Every week, I sit down with someone in the Top 1% of their field
              to decode what they've mastered and what they've learned along the
              way.
            </p>
            <button className="bg-white rounded-xl py-3 w-[25%] px-4 hover:bg-white/70 font-bold phone:w-full">
              Explore Episode
            </button>
          </div>
          <div className="flex flex-wrap gap-4 rounded justify-between phone:gap-2">
            <img
              src={one}
              alt="card"
              className="w-52 h-64 phone:w-24 phone:h-28 rounded-r-lg"
            />
            <img
              src={two}
              alt="card"
              className="w-52 h-64 phone:w-24 phone:h-28 rounded-lg"
            />
            <img
              src={three}
              alt="card"
              className="w-52 h-64 phone:w-24 phone:h-28 rounded-l-lg"
            />
            <img
              src={four}
              alt="card"
              className="w-52 h-36 phone:w-24 phone:h-20 rounded-r-lg"
            />
            <img
              src={five}
              alt="card"
              className="w-52 h-36 phone:w-24 phone:h-20  rounded-lg"
            />
            <img
              src={six}
              alt="card"
              className="w-52 h-36 phone:w-24 phone:h-20 rounded-l-lg"
            />
          </div>
        </div>
        <div className="w-[50%] border border-xylo-border/10 rounded-lg phone:w-[100%]">
          <div className="flex flex-col items-center p-6 gap-3">
            <p className="text-xylo-yellow font-bold">SUBSCRIBE NOW</p>
            <p className="text-white text-xl phone:text-lg">Friday 5 Email</p>
            <p className="text-white text-lg px-10 phone:text-sm phone:px-2 phone:text-center">
              Every Friday, I share five things I've been reading, using, and
              loving—including articles, biohacks, gadgets, and more.
            </p>
            <button className="bg-white rounded-xl py-3 w-[25%] px-4 hover:bg-white/70 font-bold  phone:w-full">
              Subscribe Now
            </button>
          </div>
          <div className="flex flex-wrap gap-4 rounded justify-between phone:gap-2">
            <img
              src={seven}
              alt="card"
              className="w-52 h-64 phone:w-24 phone:h-28 rounded-r-lg"
            />
            <img
              src={eight}
              alt="card"
              className="w-52 h-64 phone:w-24 phone:h-28 rounded-lg"
            />
            <img
              src={nine}
              alt="card"
              className="w-52 h-64 phone:w-24 phone:h-28 rounded-l-lg"
            />
            <img
              src={ten}
              alt="card"
              className="w-52 h-36 phone:w-24 phone:h-20  rounded-r-lg"
            />
            <img
              src={eleven}
              alt="card"
              className="w-52 h-36 phone:w-24 phone:h-20  rounded-lg"
            />
            <img
              src={tweleve}
              alt="card"
              className="w-52 h-36 phone:w-24 phone:h-20  rounded-l-lg"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center mx-auto items-center w-[50%] gap-8 mt-16 phone:w-full">
        <p className="text-white text-lg font-bold phone:text-center">
          GET THE WEEKLY SUMMARY
        </p>
        <p className="text-white text-center">
          Join 7,500+ including Fortune 500 CEOs, championship coaches, and
          bestselling authors who get my free weekly summary.
        </p>
        <div className="flex w-[70%] phone:w-full phone:flex-col">
          <input
            placeholder="Enter your email"
            className="border-2 border-white bg-xylo-black py-4 rounded-l-lg px-10 focus:none w-[100%] phone:rounded-t-lg phone:rounded-bl-none"
          />
          <button className="bg-white rounded-r-lg w-[30%] hover:bg-white/70 font-bold phone:w-full phone:rounded-b-lg phone:py-3 phone:rounded-tr-none">
            Try It
          </button>
        </div>
      </div>
      <p className="text-white/40 text-sm text-center my-5">
        By subscribing, you agree to our{' '}
        <span className="hover:text-white underline text-sm">
          privacy policy.
        </span>
      </p>
    </div>
  );
}

export default Card;
