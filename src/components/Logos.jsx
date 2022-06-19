import React from 'react';
import billboard from '../style/image/billoard.svg';
import newyork from '../style/image/new york times.svg';
import bloomberg from '../style/image/bloomberg.svg';
import washington from '../style/image/washington post.svg';
import espn from '../style/image/espn.svg';

function Logos() {
  return (
    <div className="flex flex-row jutstify-evenly justify-center my-5">
      <img src={billboard} alt="billboard" />
      <img src={newyork} alt="new-york" />
      <img src={bloomberg} alt="bloomberg" />
      <img src={washington} alt="washington" />
      <img src={espn} alt="espn" />
    </div>
  );
}

export default Logos;
