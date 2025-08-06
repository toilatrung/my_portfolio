import React from 'react';

const links = [
  { link: 'About Me', section: 'about' },
  { link: 'Projects', section: 'projects' },
  { link: 'Resume', section: 'resume' },
  { link: 'Blog', section: 'blog' },
  { link: 'Contact', section: 'contact' }
];

type NavbarLinkProps = {
  onLinkClick: () => void;
};

const NavbarLink = ({ onLinkClick }: NavbarLinkProps) => {
  return (
    <ul
      className='
        absolute top-[120%] left-1/2 w-full max-w-[calc(100vw-2rem)] -translate-x-1/2
        flex flex-col items-center rounded-lg bg-[rgba(30,25,23,0.31)]
        px-4 py-6 text-center font-jersey15 text-white
        shadow-xl backdrop-blur-lg backdrop-saturate-150
        
        lg:static lg:inset-auto lg:w-auto lg:min-w-[500px] lg:max-w-none
        lg:translate-x-0 lg:flex-row lg:gap-6 lg:rounded-none
        lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-filter-none'
    >
      {links.map((link) => (
        <li key={link.section} className='group w-full'>
          <a
            href={`#${link.section}`}
            onClick={onLinkClick}
            className='
              block cursor-pointer rounded-md px-4 py-2
              text-xl text-white transition-all duration-500
              hover:bg-cyan/10 hover:text-cyan
              
              lg:rounded-none lg:p-0 lg:hover:bg-transparent'
          >
            {link.link}
          </a>
          <div
            className='
              mx-auto hidden h-[1px] w-0 bg-cyan
              transition-all duration-500 group-hover:w-full lg:block'
          />
        </li>
      ))}
    </ul>
  )
}

export default NavbarLink