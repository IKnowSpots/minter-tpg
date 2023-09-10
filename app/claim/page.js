"use client"

import React from 'react'

import SideBar from '../components/Sidebar'
import NFT from '../components/NFT'
const page = () => {
  return (
    <div className='flex bg-[#140d1e] text-white'>
    {/* <SideBar/> */}
    <SideBar/>
    
    <div className='left '>
        <NFT/>
    </div>
     </div>

  )
}

export default page
