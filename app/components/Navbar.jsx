"use client"
import React, { useState } from "react";
// import lpatch from '../Assets/left-top-patch.png';
// import { AiOutlineAlignRight } from 'react-icons/ai';
import Link from "next/link";
export default function Navbar() {
  const [Toggle,setToggle]=useState(true);

  const handleClick = () => {
    setToggle(!Toggle);
  };

  return (
    <div>
      <nav id="navbar">
        <div></div>
       <Link href="/"> <img src="/logo.png" alt="logo" className="logo" /></Link>
          <ul className="first hidden md:flex">
            <li><Link href="/">Featured Events</Link></li>
            <li><Link href="/">Inventory</Link></li>
            <li><Link href="/">Docs</Link></li>
          </ul>
          
          <ul className={ `delay-300 md:hidden h-screen bg-black/90 w-full fixed top-[80px] text-white text-left  flex-col ${Toggle? 'right-[100%]':'left-[100%]}'}`} >
            <li className="p-5 md:p-[0px]"><Link href="/">Featured Events</Link></li>
            <li className="p-5 md:p-[0px]"><Link href="/">Inventory</Link></li>
            <li className="p-5 md:p-[0px]"><Link href="/">Docs</Link></li>
          </ul>
          
        <div id="host">
          <button className="btn-nav z-0 relative bg-gradient-to-r from-purple-500 to-purple-800 shadow-md text-white font-bold py-2 px-8 rounded-full">
          Coming Soon
          <img src="/comingsoon.png" className="img-nav inline ml-2"alt="" />
            </button>
        </div>

        <div id="Connect">
          {/* <button className="btn-hc">Connect Wallet</button> */}
        </div>

        {Toggle ? <img src="/hamburger (1).png" alt="" className="z-0 md:hidden h-[20px]" onClick={handleClick} /> : <img src="/close.png" alt="" className="z-0 md:hidden h-[20px]" onClick={handleClick}/>}

      </nav>
    </div>
  );
}
