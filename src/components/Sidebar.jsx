import React , {useState} from 'react'
import Logo from "../assets/logo.png"
import { motion } from 'framer-motion'
import { Link } from "react-scroll";

const Sidebar = ({handleThemeSwitch}) => {
  return (
    <motion.aside initial={{ x:-100 }} animate={{ x: 0}} className='hidden sm:flex fixed left-0 top-0 bg-bodyColor border-r-1 border-r-solid border-r-[rgba(0,0,0,0.05)]-500 p-10 w-[110px] 
    min-h-[100vh] flex-col gap-[200px] z-10 dark:bg-black'>
      <a href="#home" className='nav_logo'>
        <img alt="logo" src={Logo} />
      </a>

      <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list flex flex-col gap-4">
                <ListItem section="home" iconClassname="icon-home"/>
                <ListItem section="about" iconClassname="icon-user-following"/>
                <ListItem section="skills" iconClassname="icon-briefcase"/>
                {/* <ListItem section="resume" iconClassname="icon-graduation"/> */}
                <ListItem section="projects" iconClassname="icon-layers"/>
                {/* <ListItem section="blog" iconClassname="icon-note"/> */}
                <ListItem section="contact" iconClassname="icon-bubble"/>
            </ul>
          </div>
      </nav>

      <button className='bg-green-200 p-8 rounded-full' onClick={handleThemeSwitch}>
          
      </button>
      {/* <div className="nav__footer">
        <span className="copyright text-[hsl(245,15%,65%)] text-[var(--small-font-size)] transform -rotate-180 vertical-rl">&copy; 2022-2023</span>
      </div> */}
    </motion.aside>
  )
}

const ListItem = ({section,iconClassname}) => {
  const [showTooltip,setShowTooltip] = useState(false);
  return(
    <li className='flex items-center gap-2 relative transition-all delay:200' onMouseOver={() => setShowTooltip(true)} onMouseOut={() => setShowTooltip(false)}>
      <Link
              activeClass="active"
              to={`${section}`}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
        <a href={`#${section}`} className='text-[1.5rem] text-titleColor font-bold'>
          <i className={iconClassname}></i>
        </a>
      </Link>
      <span className={`text-sm opacity-0 ${showTooltip && "opacity-[1]"}`}>{section}</span>
    </li>
  )
}

export default Sidebar