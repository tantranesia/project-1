import React, { useState } from 'react';
import { Modal } from 'flowbite-react';
import logo from '../style/image/logo.svg';
import fire from '../style/image/fire.svg';
import time from '../style/image/time.svg';
import file from '../style/image/file.svg';
import { Search } from 'react-feather';

function Header() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-row justify-between items-center px-6 py-3">
      <div
        className="py-2 px-3 border border-xylo-border/30 rounded-lg phone:absolute phone:right-2"
        onClick={() => setShow(true)}
      >
        <Search className="text-white phone:w-4" />
      </div>
      <img src={logo} alt="logo" style={{ fill: 'white', width: '162px' }} />

      <button className="text-white px-4 py-2 rounded  border border-xylo-border/30 phone:invisible">
        Subscribe
      </button>
      <Modal
        show={show}
        onClose={() => setShow(false)}
        style={{ backgroundColor: '#121212' }}
        size="md"
      >
        <Modal.Header
          style={{
            color: '#FFFFFF',
            backgroundColor: '#121212',
            border: '1px solid #rgb(224,224,224) 0.7',
            borderRadius: '6px',
          }}
        >
          <p className="text-white px-16 text-sm text-center">
            Quickly find episodes, articles, and pages across the website.
          </p>
        </Modal.Header>
        <Modal.Body
          style={{
            color: '#FFFFFF',
            backgroundColor: '#121212',
            border: '1px solid #rgb(224,224,224) 0.7',
            borderRadius: '6px',
          }}
        >
          <div className="flex flex-col gap-3 relative">
            <div className="py-2 px-3 border bg-xylo-solidBlack border-xylo-border/30 rounded-xl flex flex-row items-center gap-2">
              <Search className="text-white phone:w-4" />
              <input
                placeholder="Search..."
                className="bg-xylo-solidBlack p-2 rounded-xl w-full"
              />
            </div>
            <button className="bg-xylo-solidBlack hover:bg-xylo-blackCard/20 border border-xylo-border/40 rounded-xl p-4 w-full">
              Search
            </button>
            <div className="h-0.5 bg-xylo-border/30" />
            <div className="flex flex-row justify-evenly my-2">
              <div className="flex flex-col gap-2 hover:text-xylo-yellow items-center">
                <div className="bg-xylo-solidBlack border border-xylo-border rounded-full w-[50%] p-4 flex justify-center">
                  <img src={fire} alt="fire" className="w-44" />
                </div>
                <p>Popular</p>
              </div>
              <div className="flex flex-col gap-2 hover:text-xylo-yellow items-center">
                <div className="bg-xylo-solidBlack border border-xylo-border rounded-full w-[50%] p-4 flex justify-center">
                  <img src={time} alt="fire" className="w-44" />
                </div>
                <p>Recent</p>
              </div>
              <div className="flex flex-col gap-2 hover:text-xylo-yellow items-center">
                <div className="bg-xylo-solidBlack border border-xylo-border rounded-full w-[50%] p-4 flex justify-center">
                  <img src={file} alt="fire" className="w-44" />
                </div>
                <p>Browse All</p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Header;
