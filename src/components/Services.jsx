import React from 'react'
import Image1 from "../assets/service-1.svg";
import Image2 from "../assets/service-2.svg";
import Image3 from "../assets/service-3.svg";
import { motion } from 'framer-motion';
const Services = () => {

    const data =[
        {
            id : 1,
            image: Image1,
            title: "UI/UX Design",
            description:"I am awesome at making designs. I design world class designs. Facebook and Google are designed by me."
        },
        {
            id : 2,
            image: Image2,
            title: "Web Development",
            description:"I am awesome web developer too. Some of my works include Amazon and Shaadi.com"
        },{
            id : 3,
            image: Image3,
            title: "Photography",
            description:"Do part time photography. Shaadi party ke order bhi liye jaate hain."
        },
    ] 

  return (
    <section className='container pt-28 pb-8' id="services">
        <motion.h2 initial={{ x:-100 }} animate={{ x: 0}} className='font-bold text-h1 ml-4 mb-16'>Services</motion.h2>

        <div className='grid grid-cols-3 gap-8'>
            {data.map(({id, image, title, description}) => {
                return(
                    <div key={id} className='text-center p-7 rounded-[20px] bg-bodyColor transition-all ease-in-out delay-200 hover:-translate-y-2
                    [&:nth-child(1)]:bg-[rgb(108,108,229)] shadow-lg [&:nth-child(1)]:shadow-[rgb(108,108,229 / 50%)]
                    [&:nth-child(2)]:bg-[rgb(249,215,75)] [&:nth-child(2)]:shadow-[rgb(249,215,75 / 50%)]
                    [&:nth-child(3)]:bg-[rgb(249,123,139)] [&:nth-child(3)]:shadow-[rgb(249,123,229 / 50%)]
                    '>
                        <img src={image} alt="" className='h-[100px] w-[100px] m-auto mb-8'></img>
                        <h3 className='font-bold text-h3 mb-4'>{title}</h3>
                        <p className='text-sm'>{description}</p>
                    </div>    
                )
            })}
        </div>
    </section>
  )
}

export default Services