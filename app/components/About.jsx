import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about'>
        <main className='flex flex-col md:flex-row my-10 justify-center'>
            <div>
                <Image src={'/Asset/images/vr.jpg'} width={500} height={500} className='oject-contain p-5 mx-auto'/>
            </div>

            <div className='p-10 space-y-8 md:w-[50%]'>
                <h2 className='text-xl font-bold'>This Products Make You Surprised</h2>
                <p className='line-clamp-2'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum</p>

                <div className='flex gap-5 '>

                <div className='text-center '>
                <Image src={'/Asset/images/icon.png'} width={100} height={50} className='object-contain p-5  mx-auto'/>
                  <p>360 VIEWING ANGEL</p>
                    </div>
                <div>
                <Image src={'/Asset/images/icon.png'} width={100} height={50} className='oject-contain p-5 mx-auto'/>
                    CONFORT FOR HEAD</div>
                <div>
                <Image src={'/Asset/images/icon.png'} width={100} height={50} className='oject-contain p-5 mx-auto'/>
                    EASY OPERATING SYSTEM</div>
            </div>
            <div className=' flex items-center mt-5 gap-5'>
                    <button className='flex font-bold bg-gradient-to-r from-red-500 to-orange-500 p-5 rounded-full text-xl text-white'>Learn More</button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-red-500 border border-red-500 p-3 rounded-full">
  <path fillRule="evenodd" d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z" clipRule="evenodd" />
</svg>

                </div>
            </div>

         
        </main>
    </div>
  )
}

export default About