import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <div>
        
        <main className='feature'>

            <div className='text-center my-10'>
            <h3 className='font-bold'>PRODUCT FEATURES</h3>
            <h1 className='font-bold text-4xl w-[50%] mx-auto'>Ultramordern Virtual Reality all Around the World</h1>
            </div>
<div className='flex flex-col md:flex-row gap-10  mt-38'>
<div className=' p-10 space-y-10  flex-1'>
    <h4 className='font-bold text-xl'>Soft Leather Frame</h4>
    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>

    <h4 className='font-bold text-xl'>Head Support</h4>
    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
</div>

<Image src={'/Asset/images/mainimg.jpg'} width={500} height={400} alt='' className='flex justify-center items-center mx-auto col-span-3  flex-2'/>

<div className='  p-10 space-y-8  flex-1'>
    <h4 className='font-bold text-xl'>Large Quality Lenses</h4>
    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>

    <h4 className='font-bold text-xl'>IDP Adjustment</h4>
    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
</div>
</div>



        </main>
    </div>
  )
}

export default Features