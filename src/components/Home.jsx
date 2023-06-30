import React from 'react'
import Me from "../assets/avatar-1.svg";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section className={`flex justify-center items-center min-h-[100vh] bg-home relative`} id="home">
        <div className="max-w-[540px] text-center">
            <img alt="MyImage" className='m-auto mb-6 z-100' src={Me} />
            <motion.h1  initial={{ fontSize: "1rem" }} animate={{ fontSize : "1.875rem"}}  className="font-bold text-3xl mb-2 dark:text-white">Shubham Garg</motion.h1>
            <span className='text-md font-semibold text-slate-500'>I am a full Stack MERN Developer</span>
            <HeaderSocials/>              
            <a href="#contact" className="px-8 py-3 mt-4 bg-firstColor rounded-3xl shadow-black shadow-2xl inline-block font-semibold text-white border border-solid 
            border-transparent hover:scale-[.8] z-100">Hire Me</a>
            <ScrollDown />
            <Shapes />
        </div>
    </section>
  )
}

export default Home