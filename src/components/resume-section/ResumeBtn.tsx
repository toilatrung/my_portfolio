import { RiDownload2Fill } from "react-icons/ri";

const ResumeButton = () => {
  return (
    <div className="flex justify-center">
      <a
        href="https://drive.google.com/file/d/1nOXrAGxTUa_sDEe6PEIJsUGJlbELrvZo/view?usp=sharing"
        download
        target="_blank"
        rel="noopener noreferrer"
        className='
          flex items-center gap-2
          px-4 py-2
          text-xl font-jersey15 text-yellow
          bg-cyan border-4 border-black
          shadow-[4px_4px_0px_#1e1917,inset_0_0_0_2px_#f1e1d9]
          hover:bg-lightCyan
          active:bg-darkCyan active:translate-x-1 active:translate-y-1 active:shadow-none
          transition-colors duration-150
        '
      >
        Resume
        <div className="sm:hidden md:block">
          <RiDownload2Fill />
        </div>
      </a>
    </div>
  );
};

export default ResumeButton;
