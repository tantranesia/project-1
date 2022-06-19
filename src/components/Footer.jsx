import React, { useState } from 'react';
import { ChevronRight, ArrowRight } from 'react-feather';

import logo from '../style/image/logo.svg';

function Footer() {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="flex flex-col my-5 phone:flex-col">
      <div className="flex flex-row px-32 my-10 phone:flex-col phone:px-10">
        <div className="w-[20%] flex flex-col phone:w-[100%]">
          <p className="text-white phone:text-center">
            Daniel Scrivner is an entreprenuer and investor focused on building
            enduring companies and breakthrough products.
          </p>
          <a
            href="#"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className="text-white/50 hover:text-xylo-yellow flex flex-row items-center gap-3 my-2 phone:text-center phone:justify-center"
          >
            See what he’s working on now{' '}
            <span>
              {isHover ? (
                <ArrowRight className="text-xylo-yellow w-4" />
              ) : (
                <ChevronRight className="text-white w-4" />
              )}
            </span>
          </a>
          <img src={logo} alt="logo" className="w-[192px] my-12 phone:w-[250px] phone:mx-auto" />
        </div>
        <div className="flex flex-row w-[80%] justify-evenly items-center phone:flex-col phone:w-full phone:gap-5 phone:justify-center">
          <div className="flex flex-col gap-6 phone:text-center">
            <p className="text-white font-bold">Explore</p>
            <p className="text-white/60 hover:text-white">Most Popular</p>
            <p className="text-white/60 hover:text-white">Most Recent</p>
            <p className="text-white/60 hover:text-white">Topics & Tags</p>
            <p className="text-white/60 hover:text-white">Friday Five</p>
          </div>
          <div className="flex flex-col gap-6 phone:text-center">
            <p className="text-white font-bold">Outliners</p>
            <p className="text-white/60 hover:text-white">Episodes</p>
            <p className="text-white/60 hover:text-white">Subscribe Now</p>
            <p className="text-white/60 hover:text-white">About the Show</p>
            <p className="text-white/60 hover:text-white">Sponsors</p>
          </div>
          <div className="flex flex-col gap-6 phone:text-center">
            <p className="text-white font-bold">Articles</p>
            <p className="text-white/60 hover:text-white">Show Notes</p>
            <p className="text-white/60 hover:text-white">Transcript</p>
            <p className="text-white/60 hover:text-white">Essays</p>
            <p className="text-white/60 hover:text-white">Snippets</p>
          </div>
          <div className="flex flex-col gap-6 phone:text-center">
            <p className="text-white font-bold">More</p>
            <p className="text-white/60 hover:text-white">About Daniel</p>
            <p className="text-white/60 hover:text-white">Business Card</p>
            <p className="text-white/60 hover:text-white">Newsroom</p>
            <p className="text-white/60 hover:text-white">Contact</p>
          </div>
        </div>
      </div>
      <div className='px-32 flex justify-between phone:px-16 phone:flex-col phone:gap-5'>
        <p className='text-white/30 text-xs phone:px-10 phone:text-center'>Copyright © 2020 Daniel Scrivner. All rights reserved.</p>
        <div className='text-white/30 hover:text-white text-xs flex gap-12'>
          <p>Privacy & Terms</p>
          <p>Disclosure</p>
          <p>Sitemap</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
