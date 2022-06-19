import React from 'react';
import Banner from '../components/Banner';
import Body from '../components/Body';
import Card from '../components/Card';
import Carousels from '../components/Carousel';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Logos from '../components/Logos';
import Navbar from '../components/Navbar';

function Dashboard() {
  return (
    <div className="bg-xylo-black py-2">
      <Header />
      <div className="h-1 bg-color-border" />
      <Navbar />
      <Body />
      <div className="h-1 bg-color-border" />
      <div className="invisible">
        <Logos />
      </div>
      <div className="h-1 bg-color-border" />
      <Carousels />
      <Banner />
      <Card />
      <Footer />
    </div>
  );
}

export default Dashboard;
