import React from 'react'

const links = [
  { link: 'About Me', section: 'about' },
  { link: 'Projects', section: 'projects' },
  { link: 'Resume', section: 'resume' },
  { link: 'Blog', section: 'blog' },
  { link: 'Contact', section: 'contact' },
]

const NavbarLink = () => {
  return (
    <ul className='flex items-center gap-6 text-white font-jersey15 text-center'>
      {links.map((link, index) => {
        return <li key={index} className='group'>
          <a href='#' className='cursor-pointer text-white hover:text-cyan transition-all duration-500 text-xl'>{link.link}</a>
          <div className='mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500'></div>
        </li>
      })}
    </ul>
  )
}

export default NavbarLink