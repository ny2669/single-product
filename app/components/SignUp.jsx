import React from 'react'

const SignUp = () => {
  return (
    <div className=' w-full h-[50vh%] bg-[url(/Asset/images/random.jpg)] bg-cover bg-no-repeat bg-center bg-blend-overlay bg-red-500 sticky'>
        <main className='my-10 p-10'>
<div className='text-center p-10 z-30'>
    <h2 className='text-4xl my-2 text-white font-bold'>Subscribe to Our Newsletter</h2>
    <p className='text-white'>Submit your all infomation for get latest update libero lobortis, eu per faucibus in vehicula nunc luctusEgeetiam lorem lectus, sodales vestibulum, vestibulum.</p>
</div>
<div className='flex items-center bg-white sm:w-auto md:w-[500px] mx-auto border rounded-xl my-5 shadow-md '>
<input type='text' placeholder='Enter Your Email ' className='bg-white p-2 outline-none flex-grow sm:shrink-0 h-full '/>
<button className='uppercase text-white bg-black p-5 h-full  rounded-tr-lg rounded-br-lg '>submit Now</button>
</div>

        </main>
    </div>
  )
}

export default SignUp