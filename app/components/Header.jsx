'use client'
import Image from 'next/image'
import React, { useEffect, useState, useRef  } from 'react'
import Typewriter from 'typewriter-effect';
import * as THREE from 'three'
import BIRDS from 'vanta/dist/vanta.birds.min'
import Link from 'next/link';
import Particles from './Particle';








const Header = (props) => {


  const myRef = useRef(null)


  // const particlesInit = useCallback(async engine => {
  //   console.log(engine);
  //   // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
  //   // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  //   // starting from v2 you can add only the features you need reducing the bundle size
  //   await loadFull(engine);
  // }, []);
  
  // const particlesLoaded = useCallback(async container => {
  //  console.log(container);
  // }, []);
  
  

    const [menu,setMenu] = useState(true)

    const [vantaEffect, setVantaEffect] = useState(null)
 
  
  //   useEffect(() => {
  //     if (!vantaEffect) {
  //       setVantaEffect(BIRDS({
  //         el: myRef.current,
  //         mouseControls: true,
  // touchControls: true,
  // gyroControls: false,
  // minHeight: 200.00,
  // minWidth: 200.00,
  // scale: 1.00,
  // scaleMobile: 1.00,
  // THREE: THREE 
  //       }))
  //     }
  //     return () => {
  //       if (vantaEffect) vantaEffect.destroy();
  //     };
  //   }, [vantaEffect]);

const toggle = () => {

<Typewriter
  options={{
    strings: ['Hello', 'World'],
    autoStart: true,
    loop: true,
  }}
/>
  

  return  setMenu(prev => !prev)
}

  return (
 

    <div className='w-full  bg-red-500 scroll-smooth' id='home'  ref={myRef}>

 
<header className='flex flex-grow justify-around items-center relative'>
  
   <div className='relative w-[200px] flex-grow p-2'>
   <Image src={!menu ? '/Asset/images/logo-dark.png': '/Asset/images/logo.png'} width={200} height={20} alt='' className='object-contain ml-5'/>
   </div>


<div>

</div>
<div className='border p-2 mt-3 mr-5  text-white rounded-lg z-10 md:hidden' onClick={toggle}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-10 z-[999]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
</svg>
</div>
  

<nav className={`absolute w-full p-10 sm:block md:static  top-20 mx-auto ${menu?'top-[-1500%] transition-all duration-300 ease-in-out': 'top-20 transition-all duration-300 ease-in-out backdrop-blur-lg bg-white'}`}>
    <ul className='space-y-20 text-black md:space-y-0 md:flex md:items-center md:justify-end uppercase md:text-white p-10 '>
        <li className='text-lg text-center p-5 uppercase hover:underline '><Link href={'#home'} passHref className='scroll-smooth'>Home</Link></li>
        <li className='text-lg text-center p-5 uppercase hover:underline '><Link href={'#about'} passHref className='scroll-smooth'>About</Link></li>
        <li className='text-lg text-center p-5 uppercase hover:underline '><Link href={'#products'} passHref className='scroll-smooth'>products</Link></li>
        <li className='text-lg text-center p-5 uppercase hover:underline '><Link href={'#review'} passHref className='scroll-smooth'>review</Link></li> 
        <li className='text-lg text-center p-5 uppercase hover:underline '><Link href={'#contact'} passHref className='scroll-smooth'>Contact</Link></li>
    </ul>
</nav>

</header>

<div className='flex flex-col justify-center md:flex-row gap-10 my-5 md:p-10 '>
    <div className='space-y-10 text-white p-10'>
      <div>
      <h1 className='text-4xl md:text-4xl font-semibold'>Now get your </h1>
      <div className='flex items-center'>
      <h1 className='text-4xl md:text-4xl font-semibold flex items-center mr-3'>awsome </h1>


    <Typewriter
  options={{
    strings: ['VR Here', 'Product', 'Watch'],
    autoStart: true,
    loop: true,
    wrapperClassName:'text-4xl',
    cursorClassName: 'text-4xl'
  }}
/>
      </div>
 
      </div>


    <p className='line-clamp-2 text-lg'>Vitae leo, sit ultrices quis, dictummolliscondimentum urna debitis, venenatis wisi donec </p>

    <button className='flex relative  bg-white p-5 text-red-500 font-bold rounded-full my-10 uppercase'>See our product</button>
    </div>
    
<div className='flex relative'>
<Image src='/Asset/images/man.png' width={800} height={500} className='flex justify-end  object-contain object-right'/>

</div>
</div>


<Particles height='800px'/>

    </div>
    
    
  )
}

export default Header