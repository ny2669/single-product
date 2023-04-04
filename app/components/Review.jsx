'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const Review = () => {



const [rating, setRating] = useState(4) 


const getRating = Array(rating).fill().map((_,i) => (

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
</svg>


))

  return (
    <div id='review' className='scroll-smooth'>
        <main className=''>
            <div className='text-center p-5'>
                <h2 className='text-4xl p-2'>What Our
Customer Say</h2>
                <p>Convallis elit senectus justo dolor lorem, metus ex amet ac. Litora mattis in diam risus turpis vivamus, diam nisl lorem ligula vestibulum.</p>
            </div>
<div className='flex mx-auto justify-start  space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3  '>


            <div className='flex  justify-center gap-8 p-5 text-white w-auto'>
                <div className='bg-[rgb(52,58,64)] p-5 rounded-xl '>
                    <div className='flex gap-4 items-center p-5 w-[500px]'>
                        <Image src="/Asset/images/man.jpg" alt="" width={50} height={50} className='object-contain rounded-[100%] object-center '/>
                        <div >
                        <p>Michael Swan</p>
                        <p>CEO Founder</p>
                        </div>
                       
                    </div>
                    <p className=''>Convallis elit senectus justo dolor lorem, metus ex amet ac. Litora mattis in diam risus turpis vivamus, diam nisl lorem ligula vestibulum.</p>

                    <span className='flex text-yellow-500 my-2'> 
                        {getRating}
                    </span>
                </div>
              
            </div>

            <div className='flex justify-center gap-8 p-5 text-white w-auto '>
                <div className='bg-[rgb(52,58,64)] p-5 w-[500px] rounded-xl'>
                    <div className='flex gap-4 items-center p-5'>
                        <Image src="/Asset/images/man.jpg" alt="" width={50} height={50} className='object-contain rounded-[100%] object-center'/>
                        <div >
                        <p>Michael Swan</p>
                        <p>CEO Founder</p>
                        </div>
                       
                    </div>
                    <p className=''>Convallis elit senectus justo dolor lorem, metus ex amet ac. Litora mattis in diam risus turpis vivamus, diam nisl lorem ligula vestibulum.</p>

                    <span className='flex text-yellow-500 my-2'> 
                        {getRating}
                    </span>
                </div>
              
            </div>

            
            <div className='flex justify-center gap-8 p-5 text-white w-auto'>
                <div className='bg-[rgb(52,58,64)] p-5 w-[500px] rounded-xl'>
                    <div className='flex gap-4 items-center p-5'>
                        <Image src="/Asset/images/man.jpg" alt="" width={50} height={50} className='object-contain rounded-[100%] object-center'/>
                        <div >
                        <p>Michael Swan</p>
                        <p>CEO Founder</p>
                        </div>
                       
                    </div>
                    <p className=''>Convallis elit senectus justo dolor lorem, metus ex amet ac. Litora mattis in diam risus turpis vivamus, diam nisl lorem ligula vestibulum.</p>

                    <span className='flex text-yellow-500 my-2'> 
                        {getRating}
                    </span>
                </div>
              
            </div>

            
            <div className='flex justify-center gap-8 p-5 text-white w-auto'>
                <div className='bg-[rgb(52,58,64)] p-5 w-[600px] rounded-xl'>
                    <div className='flex gap-4 items-center p-5'>
                        <Image src="/Asset/images/man.jpg" alt="" width={50} height={100} className='object-contain rounded-[100%] object-center'/>
                        <div >
                        <p>Michael Swan</p>
                        <p>CEO Founder</p>
                        </div>
                       
                    </div>
                    <p className=''>Convallis elit senectus justo dolor lorem, metus ex amet ac. Litora mattis in diam risus turpis vivamus, diam nisl lorem ligula vestibulum.</p>

                    <span className='flex text-yellow-500 my-2'> 
                        {getRating}
                    </span>
                </div>
              
            </div>

            </div>

        </main>
    </div>
  )
}

export default Review