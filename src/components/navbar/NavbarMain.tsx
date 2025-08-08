import { FaArrowDown, FaTimes } from "react-icons/fa";
import NavbarBtn from './NavbarBtn';
import NavbarLink from './NavbarLink';
import NavbarLogo from './NavbarLogo';

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className='w-full fixed left-1/2 -translate-x-1/2 z-20 mt-2 flex items-center'>
      <div className='relative mx-auto flex w-full max-w-[1200px] items-center justify-between px-4'>
        <div
          className='
            flex w-full items-center justify-between
            rounded-2xl border-[0.5px] border-orange
            bg-[rgba(30,25,23,0.31)] px-4 py-[6px]
            backdrop-blur-lg'
        >
          <NavbarLogo />
          <div className="hidden lg:block">
            <NavbarLink onLinkClick={() => {}} />
          </div>
          <NavbarBtn />
        </div>

        <button
          aria-label="Toggle menu"
          className='ml-4 text-2xl text-white transition-all duration-300 hover:text-cyan lg:hidden'
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaArrowDown style={{imageRendering: 'pixelated',filter: 'contrast(200%) brightness(1)'}} />}
        </button>

        {menuOpen && (
          <div className="lg:hidden">
            <NavbarLink onLinkClick={() => setMenuOpen(false)} />
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavbarMain