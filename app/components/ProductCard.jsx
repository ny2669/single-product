import Image from 'next/image'
import React from 'react'

const ProductCard = ({img, title, price}) => {
  return (
    <div className='w-[400px] h-[500px]  flex flex-col items-center mx-auto border p-10 space-y-5 mt-20 rounded-lg shadow-md hover:bg-gradient-to-r from-red-500 to-orange-400 cursor-pointer even:bg-gradient-to-r from-red-500 to-orange-400'>
<Image src={img} alt='' width={200} height={100} className='mx-auto object-contain object-center'/>

<div className='text-center space-y-3'>
    <p>{title}</p>
    <p>{price}</p>
    <button className='p-3 border-2 rounded-full font-bold '>Shop Now</button>
</div>

    </div>
  )
}

export default ProductCard