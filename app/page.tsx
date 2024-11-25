"use client";
// import Image from "next/image";
// pages/_app.js or pages/_document.js
import '@fontsource/ibm-plex-sans/400.css'; // Regular
import '@fontsource/ibm-plex-sans/500.css'; // Medium
import '@fontsource/ibm-plex-sans/700.css'; // Bold
// import React, { useState, useEffect } from "react";
// import Counter from "./Components/Home/Counter";
import Contribute from "./Components/Home/Contribute";
import Numbers from "./Components/Home/Numbers";
import OurHome from "./Components/Home/OurHome";
import Infomertial from "./Components/Home/Infomertial";
import Landing from "./Components/Home/Landing";
import Header from "./Components/Home/Header";
import Gallery from "./Components/Home/Gallery";
import Message from "./Components/Home/Message";
import Facebook from "./Components/Home/Facebook";
import Joinus from "./Components/Home/Joinus";
// import Contact from './Components/Home/Contact';
// import Help from './Components/Home/Help';

export default function Home() {
  
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <Header />
      <div className="flex flex-col w-full  text-xs">

          <Landing />
          <Infomertial />
          <OurHome />
          <Numbers />
          <Contribute />
          <Gallery />
          <Message />
          <Facebook />
          <div className="h-[800px] bg-red-700">
            <Joinus />
          </div>
        </div>
      </div>
    );
}
