import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="container pt-28 pb-8">
        <h2 className='font-bold text-h1 text-left mb-16'>Get in Touch</h2>
        <div className='flex gap-8'>
            <div className='w-[35%]'>
                <h3 className='text-h3 text-left mb-2 font-bold'>Lets talk about Everything</h3>
                <p className='text-left text-normal mb-2 text-titleColor font-[400]'>Send me an Email!👋</p>
                <p className='flex gap-4 items-center font-semibold text-small text-left'> <i class="fa fa-envelope" aria-hidden="true"></i> gargshubham21156@gmail.com</p>
             </div> 

             <form action="" className='flex flex-col gap-6 w-[65%]'>
                <input type="text" placeholder='Insert your name' className='w-[100%] px-4 py-6 shadow-lg focus:outline-none rounded-xl' ></input>
                <input type="email" placeholder='Insert your email' className='w-[100%] px-4 py-6 shadow-lg focus:outline-none rounded-xl' ></input>
                <input type="text" placeholder='Insert your Subject' className='w-[100%] px-4 py-6 shadow-lg focus:outline-none rounded-xl' ></input>
                <textarea name="" id="" cols="30" rows={10} placeholder='Write Your message' className='w-[100%] px-4 py-6 shadow-lg focus:outline-none rounded-xl' ></textarea>
                <button className="px-8 py-3 mt-4 bg-firstColor rounded-3xl shadow-black shadow-2xl inline-block font-semibold text-white border border-solid 
                    border-transparent hover:scale-[.8] z-100">Send Message</button>
            </form>  
        </div>
    </section>
  )
}

export default Contact