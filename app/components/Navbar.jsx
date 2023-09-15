"use client"
import React, { useState } from "react";
// import lpatch from '../Assets/left-top-patch.png';
// import { AiOutlineAlignRight } from 'react-icons/ai';
import Link from "next/link";
export default function Navbar() {
  // const [Toggle,setToggle]=useState(false);

  // const handleClick = () => {
  //   setToggle(!Toggle);
  // };

  return (
    <div>
      <nav id="navbar">
        <div></div>
       <Link href="/"> <img src="/logo.png" alt="logo" className="logo" /></Link>
        <div className="items" id="features">
          <ul className="first hidden md:flex">
            <li><Link href="/">Featured Events</Link></li>
            <li><Link href="/">Inventory</Link></li>
            <li><Link href="/">Docs</Link></li>
          </ul>
          {/* <ul className="first md:hidden h-screen w-full fixed left-[0] top-[-80px]" >
            <li><Link href="/">Featured Events</Link></li>
            <li><Link href="/">Inventory</Link></li>
            <li><Link href="/">Docs</Link></li>
          </ul> */}
        </div>
        <div id="host">
          <button className="btn-nav bg-gradient-to-r from-purple-500 to-purple-800 shadow-md text-white font-bold py-2 px-8 rounded-full">
          {/* <h1  className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter"                                     data-aos="zoom-y-out"
>
            
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-400 "
                  >
            Coming Soon

                            </span>

          </h1>
          
          */}
          Coming Soon
          <img src="/comingsoon.png" className="img-nav inline ml-2"alt="" />
            </button>
        </div>

        {/* {Toggle ? <img src="/hamburger (1).png" alt="" className="md:hidden h-[15px]" onClick={handleClick} /> : <img src="/close.png" alt="" className="md:hidden h-[15px]" onClick={handleClick}/>} */}

        <div id="Connect">
          {/* <button className="btn-hc">Connect Wallet</button> */}
        </div>
      </nav>
    </div>
  );
}
