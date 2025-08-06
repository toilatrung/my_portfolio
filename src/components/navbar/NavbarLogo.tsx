const NavbarLogo = () => {
  return (
    <a href="#" className="cursor-pointer flex items-center gap-2">
      <img src="/images/logo_pixel.png" alt="Logo" className="w-12 sm:block md:hidden" />
      <h1 className='text-white text-2xl hover:text-cyan transition-all duration-300 sm:hidden md:block'>
        Trinh Quang Trung
      </h1>
    </a>
  )
}

export default NavbarLogo