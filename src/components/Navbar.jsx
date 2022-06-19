import React, { useState } from 'react';

function Navbar() {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="flex flex-row justify-evenly text-white px-10 items-center mt-10 mb-4 relative">
      <button className="hover:text-xylo-yellow">Podcast</button>
      <button className="hover:text-xylo-yellow">Newsletter</button>
      <button className="hover:text-xylo-yellow">Topics & Tags</button>
      <div
        className="hover:text-xylo-yellow"
        onMouseEnter={() => setIsHover(true)}
      >
        <button>More</button>
      </div>

      {isHover && (
        <div
          onMouseLeave={() => setIsHover(false)}
          className=" absolute top-6 p-6 flex flex-col gap-4 devide-y right-[12%] w-48 py-2 mt-2 bg-xylo-black text-white rounded-md shadow-xl border border-xylo-border/40 z-10 text-center"
        >
          <p className="hover:text-xylo-yellow">More</p>
          <p className="hover:text-xylo-yellow">Newsroom</p>
          <p className="hover:text-xylo-yellow">Contact</p>
        </div>
      )}
    </div>
  );
}

export default Navbar;
