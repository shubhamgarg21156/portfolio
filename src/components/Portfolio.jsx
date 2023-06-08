import React, { useState } from 'react'
import ProjectsData from "../helper/ProjectsData";

const Portfolio = () => {

    const [projects,setProjects] =  useState(ProjectsData);
    const [active, setActive] = useState("All");

    //function to filter the projects on the basis of category
    const filterProjects = (category) => {

        setActive(category); //set the active category to highlight the color.

        if(category === "All"){
            setProjects(ProjectsData);
        }else{
            const updatedProjects = ProjectsData.filter((project) => {
                return project.category.includes(category)
            })
    
            setProjects(updatedProjects)
        }
    }

    const filters = ["All","React.js","Node.js","Javascript","Firebase"] //list of all filters

    return (
    <section className="container pt-28 pb-8" id="projects">
        <h2 className='font-bold text-h1 mb-10'>My Projects</h2>

        <div className='flex flex-wrap items-center gap-8 mb-10'>
            {filters.map((filter) => {
                return(
                    <span className={`cursor-pointer font-bold text-normal hover:text-firstColor transition-all delay-150 ${active===filter && "text-firstColor"}`} onClick={() => filterProjects(`${filter}`)}>{filter}</span>
                )   
            })}
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8'>
            {projects.map(({id, image, title, link, projectLink , details}) => {
                return(
                    <div className='group relative overflow-hidden rounded-[20px] shadow-lg h-[300px]' key={id}>
                        <div className='h-full w-full'>
                            <img src={image} alt="" className='h-full w-full'/>
                            <div className='bg-[#6c6ce5] absolute left-0 top-0 w-full h-full opacity-0  group-hover:opacity-[0.9] transition '></div>
                        </div>  
                        
                        <span className='text-white bg-firstColor rounded-b-2xl absolute top-0 left-6 text-small inline-block py-[0.19rem] px-[0.625rem] -translate-y-10 
                        transition delay-100 group-hover:translate-y-0'>{title}</span>
                        <p className='text-white font-h3 absolute top-14 px-6 mb-[30px] font-semibold translate-y-8 opacity-0 transition delay-100 group-hover:opacity-[1] group-hover:translate-y-0 text-left'>{details}</p>
                        <button  className='opacity-0 group-hover:opacity-[1] bg-[#ffd15c] absolute bottom-6 left-6 text-white py-2 px-4 w-[100px] rounded-lg'>
                            <a href={link} target = {"_blank"}>Github</a>
                        </button>
                        <button href={link} target = {"_blank"} className='opacity-0 group-hover:opacity-[1] bg-[#ffd15c] absolute bottom-6 right-6 text-white py-2 px-4 w-[150px] rounded-lg'>
                        <a href={projectLink} target = {"_blank"}>Live Project</a>
                        </button>
                        {/* <a href={link} target = {"_blank"} className='opacity-0 group-hover:opacity-[1] text-white absolute bottom-6 left-6 text-h3 block bg-[#ffd15c] h-10 w-10 rounded-full text-center leading-10 transition delay-100'>
                            <i className='icon-link'></i>
                        </a> */}
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Portfolio