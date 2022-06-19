import React from 'react';

import hero_banner from '../style/image/hero-banner.png';
import card from '../style/image/card.jpeg';

function Body() {
  return (
    <div className="bg-xylo-solidBlack flex flex-row px-32 justify-between phone:px-16 phone:flex-col">
      <div className="text-white w-2/4 phone:w-full m-10 ">
        <p className="text-2xl phone:text-lg phone:font-bold phone:text-center phone:px-10">Timeless insights for business and life.</p>
        <p className="text-lg phone:text-sm phone:my-5 phone:px-6">
          Every week, I sit down with someone in the Top 1% of their field —
          from NYT bestselling authors to Oscar winners — to decode what they've
          mastered. Listen as I uncover the tactics, routines, and habits that
          will propel you to the top of your field.
        </p>
        <div className="flex flex-row bg-xylo-blackCard gap-4 p-3 rounded border border-xylo-border/10 w-[388px] items-center phone:flex-col phone:w-[300px]">
          <img src={card} alt="card" className="w-24 h-20 rounded" />
          <div>
            <p className="text-xylo-yellow text-xs phone:text-center">LATEST EPISODE</p>
            <p className="text-sm phone:text-center phone:px-10 phone:my-3">
              #113 Mo Islam: On Learning from the Apollo Era, Killing Them with
              Kindness, and How Humility Saves Startups | Co-Founder of Payload
            </p>
          </div>
        </div>
        <div className="flex flex-row w-[388px] phone:w-[300px] gap-3 my-2 phone:flex-col">
          <button className="px-2 py-2 bg-xylo-blackCard border border-xylo-border/10 rounded text-sm w-[30%] phone:w-[100%]">
            Start Here
          </button>
          <button className="px-6 py-2 bg-xylo-blackCard border border-xylo-border/10 rounded text-sm w-[70%] phone:w-[100%]">
            Listen to the podcast
          </button>
        </div>
      </div>
      <div className="w-2/4 m-10 phone:w-[90%]">
        <img src={hero_banner} alt="hero_banner" />
      </div>
    </div>
  );
}

export default Body;
