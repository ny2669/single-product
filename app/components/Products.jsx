import React from 'react'
import ProductCard from './ProductCard'

const Products = () => {
  return (
    <div id='products'>
        <main className='my-32'>
<h1 className='text-center font-bold text-2xl '>Awesome Product That You Never Seen</h1>
<p className='text-center text-lg pt-5 px-10'>Convallis elit senectus justo dolor lorem, metus ex amet ac. Litora mattis in diam risus turpis vivamus, diam nisl lorem ligula vestibulum.</p>

<div className='flex flex-col md:flex-row p-10 gap-5'>
<ProductCard img={'/Asset/images/product-a.png'} title={'Gear VR Box'} price={'$250'}/>

<ProductCard img={'/Asset/images/product-b.png'} title={'HTC Vive'} price={'$364'} className='only:bg-gradient-to-r from-red-500 to-orange-400'/>

<ProductCard img={'/Asset/images/product-c.png'} title={'Playstation VR'} price={'$475'}/>
</div>

        </main>

    </div>
  )
}

export default Products