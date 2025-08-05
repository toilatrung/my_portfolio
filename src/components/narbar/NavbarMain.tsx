import React from 'react';
import NavbarLogo from './NavbarLogo';
import NavbarLink from './NavbarLink';
import NavbarBtn from './NavbarBtn';

const NavbarMain = () => {
  return (
  <nav className ='max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2'>
    <div className='flex justify-between w-full max-w-[1200px] mx-auto bg-[rgba(30,25,23,0.31)] backdrop-blur-lg items-center px-4 py-2 rounded-2xl border-[0.5px] border-orange'>
      <NavbarLogo/>
      <NavbarLink/>
      <NavbarBtn/>
    </div>
    <div>
      
    </div>
  </nav>
  );
}

export default NavbarMain