import React from 'react'
import NavbarLogo from './NavbarLogo'
import NavbarLink from './NavbarLink'
import NavbarBtn from './NavbarBtn'
import { RiDropdownList } from "react-icons/ri";
import { useState } from 'react'

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className='w-full fixed left-[50%] -translate-x-[50%] z-20 flex items-center mt-2'>
      <div className='flex justify-between items-center w-full max-w-[1200px] mx-auto px-4'>
        <div className='flex justify-between w-full bg-[rgba(30,25,23,0.31)] backdrop-blur-lg items-center px-4 py-[6px] rounded-2xl border-[0.5px] border-orange'>
          <NavbarLogo />
          <div className={`${menuOpen ? 'sm:block' : 'sm:hidden'} lg:block lg:w-[650px] h-fit`}>
            <NavbarLink />
          </div>
          <NavbarBtn />
        </div>
        <button aria-label="Open menu" className='ml-4 text-2xl lg:hidden text-white hover:text-cyan transition-all duration-300' onClick={toggleMenu}>
          <RiDropdownList />
        </button>
      </div>
    </nav>
  )
}

export default NavbarMain