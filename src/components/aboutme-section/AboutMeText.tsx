const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
        <h2 className='text-6xl text-yellow mb-5 font-jersey15'>About Me</h2>
        <p className='text-white font-montserrat mb-5'>
            I am Trinh Quang Trung, a third-year Computer Science student in the Troy University joint program at Hanoi University of Science and Technology. I am the founder and leader of several academic and technical initiatives, including Troy Research and Learning Club (a student-led academic community), Troy Course Lab (a curated resource platform), and Troy Tracker (a course and GPA management tool). Currently, I’m developing Gia sư AI – Bright Future, an AI-powered web platform that helps students review lessons and complete homework through intelligent, document-based interaction. I am passionate about building impactful educational tools and scalable systems that solve real-world problems.
        </p>
        <a href="#projects" className='
      flex items-center gap-2
      px-4 py-2
      text-xl font-jersey15 text-yellow
      bg-cyan border-4 border-black
      shadow-[4px_4px_0px_#1e1917,inset_0_0_0_2px_#f1e1d9]
      hover:bg-lightCyan
      active:bg-darkCyan active:translate-x-1 active:translate-y-1 active:shadow-none
      transition-colors duration-500 md:self-start sm:self-center'>My Project</a>
    </div>
  )
}

export default AboutMeText