import React , {useState} from 'react'
import Logo from "../assets/logo.svg"
import { motion } from 'framer-motion'

const Sidebar = () => {
  return (
    <motion.aside initial={{ x:-100 }} animate={{ x: 0}} className='fixed left-0 top-0 bg-bodyColor border-r-1 border-r-solid border-r-[rgba(0,0,0,0.05)]-500 p-10 w-[110px] 
    min-h-[100vh] flex flex-col justify-between z-10'>
      <a href="#home" className='nav_logo'>
        <img alt="logo" src={Logo} />
      </a>

      <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list flex flex-col gap-4">
                <ListItem section="home" iconClassname="icon-home"/>
                <ListItem section="about" iconClassname="icon-user-following"/>
                <ListItem section="services" iconClassname="icon-briefcase"/>
                {/* <ListItem section="resume" iconClassname="icon-graduation"/> */}
                <ListItem section="portfolio" iconClassname="icon-layers"/>
                {/* <ListItem section="blog" iconClassname="icon-note"/> */}
                <ListItem section="contact" iconClassname="icon-bubble"/>
            </ul>
          </div>
      </nav>

      <div className="nav__footer">
        <span className="copyright text-[hsl(245,15%,65%)] text-[var(--small-font-size)] transform -rotate-180 vertical-rl">&copy; 2022-2023</span>
      </div>
    </motion.aside>
  )
}

const ListItem = ({section,iconClassname}) => {
  const [showTooltip,setShowTooltip] = useState(false);
  return(
    <li className='flex items-center gap-2 relative transition-all delay:200' onMouseOver={() => setShowTooltip(true)} onMouseOut={() => setShowTooltip(false)}>
      <a href={`#${section}`} className='text-[1.5rem] text-titleColor font-bold'>
        <i className={iconClassname}></i>
      </a>
      <span className={`text-sm opacity-0 ${showTooltip && "opacity-[1]"}`}>{section}</span>
    </li>
  )
}

export default Sidebar