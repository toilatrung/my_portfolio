import { RiCursorFill } from "react-icons/ri";

const NavbarBtn = () => {
  return (
    <button
      className='
      flex items-center gap-2
      px-4 py-2
      text-xl font-jersey15 text-yellow
      bg-cyan border-4 border-black
      shadow-[4px_4px_0px_#1e1917,inset_0_0_0_2px_#f1e1d9]
      hover:bg-lightCyan
      active:bg-darkCyan active:translate-x-1 active:translate-y-1 active:shadow-none
      transition-colors duration-150'
    >
      Hire Me
      <div className="sm:hidden md:block">
        <RiCursorFill />
      </div>
    </button>
  );
};

export default NavbarBtn;