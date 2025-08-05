import React from 'react'

const links = [
  { link: 'About Me', section: 'about' },
  { link: 'Projects', section: 'projects' },
  { link: 'Resume', section: 'resume' },
  { link: 'Blog', section: 'blog' },
  { link: 'Contact', section: 'contact' }
]

const NavbarLink = () => {
  return (
    <ul className='flex items-center text-white font-jersey15 text-center lg:flex-row lg:relative lg:bg-transparent lg:gap-6 lg:min-w-[500px] sm:flex-col sm:absolute sm:top-[120%] sm:left-[50%] sm:-translate-x-[50%] sm:w-full sm:max-w-[calc(100vw-2rem)] sm:py-6 sm:px-4 sm:rounded-lg sm:bg-[rgba(8,145,178,0.15)] sm:backdrop-blur-xl sm:shadow-lg'>
      {links.map((link, index) => (
        <li key={index} className='group w-full'>
          <a 
            href={`#${link.section}`} 
            className='cursor-pointer text-white hover:text-cyan transition-all duration-500 text-xl block lg:p-0 sm:py-2 sm:px-4 sm:hover:bg-cyan/10 sm:rounded-md'
          >
            {link.link}
          </a>
          <div className='mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500 lg:block sm:hidden'/>
        </li>
      ))}
    </ul>
  )
}

export default NavbarLink