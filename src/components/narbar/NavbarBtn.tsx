import { GoChevronRight } from "react-icons/go";

const NavbarBtn = () => {
  return (
    <button className='px-4 py-2 rounded-full text-xl font-jersey15 text-while border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow'>
      Hire Me
      <GoChevronRight />
    </button>
  );
}

export default NavbarBtn