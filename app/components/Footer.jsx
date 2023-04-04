import Image from 'next/image'
import React from 'react'
import {  FaFacebookF, FaGooglePlusG, FaTwitter } from 'react-icons/fa';
import { BsPinterest } from 'react-icons/bs';
import { TfiYoutube } from 'react-icons/tfi';

const Footer = () => {
  return (
    <footer className='bg-[rgb(52,58,64)]'>
        <main className='p-10'>
<Image src={'/Asset/images/logo.png'} width={200} height={100} className='mx-auto '/>

<div className='flex justify-center space-x-8 p-2 my-5 text-white'>
    <span className='border p-2 border-red-500 rounded-full'>
    <FaFacebookF className='border-red-500 rounded-full'/>
    </span>
   <span className='border p-2 border-red-500 rounded-full'>
   <FaGooglePlusG/>
   </span>
   <span className='border p-2 border-red-500 rounded-full'>  <FaTwitter /></span>
   <span className='border p-2 border-red-500 rounded-full'>  <BsPinterest/></span>
   <span className='border p-2 border-red-500 rounded-full'>     <TfiYoutube /></span>
   



</div>

<p className='text-sm text-white text-center my-3'>Copyright © 2018 PORTUM . Template Made by ThemeSurf.</p>
        </main>
    </footer>
  )
}

export default Footer