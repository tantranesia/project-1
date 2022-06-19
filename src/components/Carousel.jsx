import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { ChevronRight } from 'react-feather';
// import { Carousel } from 'flowbite-react';
import Carousel from 'react-simply-carousel';

import card from '../style/image/card.jpeg';
import two from '../style/image/62a76706787a7ca203c84869_Milind-Mehere_Hero.jpeg';
import three from '../style/image/3.jpeg';
import four from '../style/image/4.jpeg';
import five from '../style/image/5.jpeg';
import six from '../style/image/6.jpeg';

function Card(props) {
  const { index } = props;
  const data = [
    {
      photo: card,
      title: `#113 Mo Islam: On Learning from the Apollo Era, Killing Them with Kindness, and How Humility Saves Startups | Co-Founder of Payload`,
      body: `In Episode #113, we’re joined by Mo Islam, Payload’s Co-Founder. We cover lessons we can learn from the Apollo space era, why killing them with kindness is the best option, and why founders should stay focused on what they love.`,
    },
    {
      photo: two,
      title: `#112 Yieldstreet: Building the Alternative Investment Platform of the Future Across Income, Equity, and Real Estate | Milind Mehere, Co-Founder & CEO`,
      body: `In Episode #112, we explore building an alternative investment platform across income, equity, and real estate. We’re joined by Milind Mehere, Yieldstreet’s Founder and CEO. We cover the entrepreneurial spirit, building a portfolio of liquidity, and why you should invest in private markets.`,
    },
    {
      photo: three,
      title:
        '#111 – 20 Minute Playbook: Illia Polosukhin of NEAR Protocol and Unchain Fund',
      body: `In Episode #111, we deconstruct Illia Polosukhin's peak performance playbook—from his favorite book to the tiny habit that's had the biggest impact on his life. Illia is the co-founder of NEAR Protocol and Unchain Fund. We cover why context switching is a necessary skill for founders, Illia’s recommended books, and the nuance of the Russian language in writing.`,
    },
    {
      photo: four,
      title: `Founder Spotlight: Elude – Building a New Search Engine and Brand for Global Travel with Alex Simon, Co-Founder and CEO`,
      body: `Alex Simon is CEO and Co-Founder of Elude, a travel app that allows users to discover new destinations based on timing and budget. In this episode, Alex and Daniel dive deep into building and scaling a business in the notoriously difficult travel industry.`,
    },
    {
      photo: five,
      title: `20 Minute Playbook: Howie Schwab – Lead Portfolio Manager for Emerging Markets Growth at Driehaus Capital`,
      body: `Howie Schwab is Lead Portfolio Manager for Emerging Markets Growth at Driehaus Capital. In this episode, Howie and Daniel discuss regime shifts in the market and obsessing over failures.`,
    },
    {
      photo: six,
      title: `20 Minute Playbook: Gokul Rajaram – Prolific Angel Investor and Product and Business Helper at DoorDash`,
      body: `Gokul Rajaram is an angel investor and Product and Business Helper at DoorDash. In this episode, Gokul and Daniel discuss crypto, international investing, and habits and routines.`,
    },
  ];
  return (
    <>
      {data.map((col, idx) => {
        return (
          <div
            className="bg-white rounded-lg w-[32%] phone:w-[80%] phone:px-16"
            key={idx}
          >
            <img src={col.photo} alt="card" className="rounded-t-lg" />
            <div className="p-6 flex flex-col gap-3">
              <p className="text-xylo-black font-bold text-lg">{col.title}</p>
              <p className="text-xylo-black text-md">{col.body}</p>
              <p className="text-xylo-yellow flex gap-3 items-center font-bold">
                Show notes{' '}
                <span>
                  <ChevronRight className="w-5" />
                </span>
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}

let count = 0;
function Carousels() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const setActiveSlideIndex = (newActiveSlideIndex) => {
    setCurrentIndex(newActiveSlideIndex);
  };

  return (
    <Carousel
      activeSlideIndex={currentIndex}
      onRequestChange={setActiveSlideIndex}
      itemsToShow={3}
      itemsToScroll={3}
      // autoplay={true}
      updateOnItemClick={true}
      style={{ width: 'full', height: '900px' }}
    >
      <div
        className="bg-white rounded-lg phone:w-[80%] phone:px-16"
        style={{ width: 'full', height: '900px' }}
      >
        <img src={card} alt="card" className="rounded-t-lg" />
        <div className="p-6 flex flex-col gap-3">
          <p className="text-xylo-black font-bold text-lg">
            #113 Mo Islam: On Learning from the Apollo Era, Killing Them with
            Kindness, and How Humility Saves Startups | Co-Founder of Payload
          </p>
          `In Episode #113, we’re joined by Mo Islam, Payload’s Co-Founder. We
          cover lessons we can learn from the Apollo space era, why killing them
          with kindness is the best option, and why founders should stay focused
          on what they love.`,
          <p className="text-xylo-black text-md"></p>
          <p className="text-xylo-yellow flex gap-3 items-center font-bold">
            Show notes{' '}
            <span>
              <ChevronRight className="w-5" />
            </span>
          </p>
        </div>
      </div>
      <div
        className="bg-white rounded-lg phone:w-[80%] phone:px-16"
        style={{ width: 'full', height: '900px' }}
      >
        <img src={card} alt="card" className="rounded-t-lg" />
        <div className="p-6 flex flex-col gap-3">
          <p className="text-xylo-black font-bold text-lg">
            #112 Yieldstreet: Building the Alternative Investment Platform of
            the Future Across Income, Equity, and Real Estate | Milind Mehere,
            Co-Founder & CEO
          </p>
          `In Episode #113, we’re joined by Mo Islam, Payload’s Co-Founder. We
          cover lessons we can learn from the Apollo space era, why killing them
          with kindness is the best option, and why founders should stay focused
          on what they love.`,
          <p className="text-xylo-black text-md"></p>
          <p className="text-xylo-yellow flex gap-3 items-center font-bold">
            Show notes{' '}
            <span>
              <ChevronRight className="w-5" />
            </span>
          </p>
        </div>
      </div>
      <div
        className="bg-white rounded-lg phone:w-[80%] phone:px-16"
        style={{ width: 'full', height: '900px' }}
      >
        <img src={two} alt="card" className="rounded-t-lg" />
        <div className="p-6 flex flex-col gap-3">
          <p className="text-xylo-black font-bold text-lg">
            #113 Mo Islam: On Learning from the Apollo Era, Killing Them with
            Kindness, and How Humility Saves Startups | Co-Founder of Payload
          </p>
          In Episode #112, we explore building an alternative investment
          platform across income, equity, and real estate. We’re joined by
          Milind Mehere, Yieldstreet’s Founder and CEO. We cover the
          entrepreneurial spirit, building a portfolio of liquidity, and why you
          should invest in private markets.
          <p className="text-xylo-black text-md"></p>
          <p className="text-xylo-yellow flex gap-3 items-center font-bold">
            Show notes{' '}
            <span>
              <ChevronRight className="w-5" />
            </span>
          </p>
        </div>
      </div>
      <div
        className="bg-white rounded-lg phone:w-[80%] phone:px-16"
        style={{ width: 'full', height: '900px' }}
      >
        <img src={three} alt="card" className="rounded-t-lg" />
        <div className="p-6 flex flex-col gap-3">
          <p className="text-xylo-black font-bold text-lg">
            #111 – 20 Minute Playbook: Illia Polosukhin of NEAR Protocol and
            Unchain Fund
          </p>
          In Episode #111, we deconstruct Illia Polosukhin's peak performance
          playbook—from his favorite book to the tiny habit that's had the
          biggest impact on his life. Illia is the co-founder of NEAR Protocol
          and Unchain Fund. We cover why context switching is a necessary skill
          for founders, Illia’s recommended books, and the nuance of the Russian
          language in writing.
          <p className="text-xylo-black text-md"></p>
          <p className="text-xylo-yellow flex gap-3 items-center font-bold">
            Show notes{' '}
            <span>
              <ChevronRight className="w-5" />
            </span>
          </p>
        </div>
      </div>
      <div
        className="bg-white rounded-lg phone:w-[80%] phone:px-16"
        style={{ width: 'full', height: '900px' }}
      >
        <img src={four} alt="card" className="rounded-t-lg" />
        <div className="p-6 flex flex-col gap-3">
          <p className="text-xylo-black font-bold text-lg">
            Founder Spotlight: Elude – Building a New Search Engine and Brand
            for Global Travel with Alex Simon, Co-Founder and CEO
          </p>
          Alex Simon is CEO and Co-Founder of Elude, a travel app that allows
          users to discover new destinations based on timing and budget. In this
          episode, Alex and Daniel dive deep into building and scaling a
          business in the notoriously difficult travel industry.
          <p className="text-xylo-black text-md"></p>
          <p className="text-xylo-yellow flex gap-3 items-center font-bold">
            Show notes{' '}
            <span>
              <ChevronRight className="w-5" />
            </span>
          </p>
        </div>
      </div>
      <div
        className="bg-white rounded-lg phone:w-[80%] phone:px-16"
        style={{ width: 'full', height: '900px' }}
      >
        <img src={five} alt="card" className="rounded-t-lg" />
        <div className="p-6 flex flex-col gap-3">
          <p className="text-xylo-black font-bold text-lg">
            20 Minute Playbook: Howie Schwab – Lead Portfolio Manager for
            Emerging Markets Growth at Driehaus Capital
          </p>
          Howie Schwab is Lead Portfolio Manager for Emerging Markets Growth at
          Driehaus Capital. In this episode, Howie and Daniel discuss regime
          shifts in the market and obsessing over failures.
          <p className="text-xylo-black text-md"></p>
          <p className="text-xylo-yellow flex gap-3 items-center font-bold">
            Show notes{' '}
            <span>
              <ChevronRight className="w-5" />
            </span>
          </p>
        </div>
      </div>
      <div
        className="bg-white rounded-lg phone:w-[80%] phone:px-16"
        style={{ width: 'full', height: '900px' }}
      >
        <img src={six} alt="card" className="rounded-t-lg" />
        <div className="p-6 flex flex-col gap-3">
          <p className="text-xylo-black font-bold text-lg">
            20 Minute Playbook: Gokul Rajaram – Prolific Angel Investor and
            Product and Business Helper at DoorDash
          </p>
          Gokul Rajaram is an angel investor and Product and Business Helper at
          DoorDash. In this episode, Gokul and Daniel discuss crypto,
          international investing, and habits and routines.
          <p className="text-xylo-black text-md"></p>
          <p className="text-xylo-yellow flex gap-3 items-center font-bold">
            Show notes{' '}
            <span>
              <ChevronRight className="w-5" />
            </span>
          </p>
        </div>
      </div>
    </Carousel>
  );
}

export default Carousels;
