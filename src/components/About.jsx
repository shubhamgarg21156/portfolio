import React from 'react'
import AboutAvatar from "../assets/avatar-2.svg";

const About = () => {
  return (
    <section className="pt-28 pb-8 container" id="about">
        <h2 className='font-bold text-h1 ml-4 mb-16'>About Me</h2>

        <div className='grid'>
            <img src={AboutAvatar} alt="avatar" className='m-auto'></img>

            <div>
                <div>
                    <p>
                        I am Shubham Garg, Web Developer from India. I make web Apps.
                    </p>
                    <a href="#home" className='px-8 py-3 mt-4 bg-firstColor rounded-3xl shadow-black shadow-2xl inline-block font-semibold text-white border border-solid 
            border-transparent hover:scale-[.8] z-100'>
                        Download CV
                    </a>
                </div>
            </div>
        </div>    
    </section>
  )
}

export default About