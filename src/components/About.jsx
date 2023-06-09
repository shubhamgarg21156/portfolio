import React from 'react'
import AboutAvatar from "../assets/avatar-2.svg";

const About = () => {
  return (
    <section className="pt-28 pb-8 container" id="about">
        <h2 className='font-bold text-h1 ml-4  mb-[40px] sm:mb-16'>About Me</h2>

        <div className='flex-col sm:flex-row flex px-[20px] sm:px-[50px] gap-[25px] sm:gap-[100px]'>
            <img src={AboutAvatar} alt="avatar" className='m-auto h-[200px]'></img>

            <div>
                <div className='flex flex-col justify-center items-center'>
                    <p className='mt-[20px] text-left font-thin'>
                        I am Shubham Garg, Full Stack Web developer. I have Developed few projects in this domain. Additionally, I have actively honed my problem-solving skills by tackling over <span className='font-bold'>350+ </span> 
                        <span><a href="https://leetcode.com/gargshubham21156/" className='font-semibold text-firstColor' target='_blank'>Leetcode</a></span> problems, further enhancing my abilities as a software engineer.
                        At this point, I am actively seeking opportunities in SDE (Software Development Engineer) roles or web development positions, where I can apply my skills and contribute to meaningful projects 
                    </p>
                    
                </div>
            </div>
        </div> 
        <a href="https://drive.google.com/file/d/19fepTj3OpUABU47a4u1VaGZfj90dxSv9/view?usp=sharing" target={"_blank"} className='px-8 py-3 mt-[50px] sm:mt-6 bg-firstColor rounded-3xl shadow-black shadow-2xl inline-block font-semibold text-white border border-solid 
            border-transparent hover:scale-[.8] z-100'>
                Resume
        </a>   
    </section>
  )
}

export default About