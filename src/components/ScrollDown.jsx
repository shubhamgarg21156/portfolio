import React from 'react'

const ScrollDown = () => {
  return (
    <div className='absolute bottom-[20px] sm:bottom-9 left-0 w-full'>
        <a href="#about" className='cursor-pointer'>
            <span className="text-sm">Scroll Down</span>
            <span className="block h-8 w-5 m-auto mt-3 rounded-2xl border-2 border-textColor relative" >
                <span className="absolute h-1 w-1 rounded-full top-2 left-[50%] bg-titleColor translate-x-[-50%] animate-mouse">
                </span>
            </span>
        </a>
    </div>
  )
}

export default ScrollDown