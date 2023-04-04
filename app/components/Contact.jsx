import React from 'react'

const Contact = () => {
  return (
    <div id='contact'>
        <main className='p-5 w-full'>
            <div className='text-center my-5'>
            <h2 className='text-2xl font-semibold'>We are allways ready to hear you</h2>
            <p>Convallis elit senectus justo dolor lorem, metus ex amet ac. Litora mattis in diam risus turpis vivamus, diam nisl lorem ligula vestibulum.</p>
            </div>
         

            <div className='flex gap-5  justify-around flex-col md:flex-row '>

                <div className='space-y-10 items-center'>
                <h3 className='mt-10 font-bold text-2xl'>Get in Touch</h3>

                <div>
<p className='font-bold '>Office Location</p>
<p>803 Raccoon Run -</p> 
<p>Seattle,</p>
<p>WA 98109</p>
                </div>
                <div>
                <h4 className='font-bold'>Phone Number</h4>
<p>+880 176 5545 646</p>
<p>+880132 21549 745</p>

         
                </div>
                <div>
                <h4 className='font-bold'>Email Address</h4>
<p>info@themesurf.com</p>
<p>contact@portum.com</p>

         
                </div>
                </div>

                <div>
                    <h3 className='mt-10 font-bold text-2xl'>Get a Call Back</h3>

                    <form className='space-y-12 my-10 p-5'>
<div className='flex gap-5'>
    <div className='border rounded-full p-2'>
    <input type="text" placeholder='Full Name' className='rounded-full outline-none' />
    </div>
<div className='border rounded-full p-2' >
<input type="text" placeholder=' Last Name' className='rounded-full outline-none'/>

</div>
</div>

         <div className='border rounded-full p-2'>
<input type="text" placeholder='Subject' className='rounded-full outline-none'/>
</div>
<div className='border rounded-xl'>
<textarea placeholder='message' className='outline-none p-2 ' />    
<div>
</div>
         

</div>
       

<button className='flex font-bold bg-gradient-to-r from-red-500 to-orange-500 p-5 rounded-full text-sm uppercase text-white submit message'>submit message</button>



                    </form>



                </div>
            </div>
        </main>
    </div>
  )
}

export default Contact