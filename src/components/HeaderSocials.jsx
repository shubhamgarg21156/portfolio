import React from 'react'

const HeaderSocials = () => {
  return (
    <div className="flex justify-around mt-4">
       <IconLink SocialMedia="instagram" link="https://www.instagram.com/auspicious_am/" />
       <IconLink SocialMedia="twitter" link="https://twitter.com/__ShubhamGarg__"/>
       <IconLink SocialMedia="github" link="https://github.com/shubhamgarg21156"/>
       <IconLink SocialMedia="linkedin" link="https://www.linkedin.com/in/gargshubham2/"/>
    </div>
  )
}

const IconLink = ({SocialMedia,link}) => {
    return(
        <a href={link} className="text-titleColor text-lg transition duration-300 hover:text-firstColor" target="_blank" rel="noreferrer">
            <i className={`fa-brands fa-${SocialMedia} text-3xl`}></i>
        </a>
    )
}
export default HeaderSocials