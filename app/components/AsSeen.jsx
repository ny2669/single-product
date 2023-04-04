import Image from 'next/image'
import React from 'react'

const AsSeen = () => {
  return (
    <div>
        <main className='my-10'>
            <h2 className='font-bold m-10 text-lg text-center'>AS SEEN IN</h2>

            <div className='flex justify-start gap-10 md:justify-center space-x-5 p-10 overflow-scroll scrollbar-hide '>
              
<Image src={'/Asset/images/logo-dark.png'} width={200} height={50} className='object-contain object-center'/>
 
               
           
                <Image src={'/Asset/images/logo-dark.png'} width={200} height={50} className='mx-auto object-contain object-center'/>
 
         
                <Image src={'/Asset/images/logo-dark.png'} width={200} height={50} className='mx-auto object-contain object-center'/>

       
           
                <Image src={'/Asset/images/logo-dark.png'} width={200} height={50} className='mx-auto object-contain object-center'/>

            </div>

        </main>
    </div>
  )
}

export default AsSeen