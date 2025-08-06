import React from 'react'

const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
        <h2 className='text-6xl text-yellow mb-5'>About Me</h2>
        <p className='text-while font-montserrat mb-5'>
            I specialize in backend development with Python/Django and have experience with TypeScript, ReactJS, NextJS, as well as C++, Java, and tools like Docker, Git, MySQL, and MongoDB. I founded and currently lead several student-driven initiatives at Troy HUST, including Troy Research and Learning Club (academic community), Troy Course Lab (learning resource platform), and Troy Tracker (course and GPA management tool). I’m also building Gia sư AI – Bright Future, an AI-powered web platform that helps students review lessons and homework through document-based interaction.
        </p>
        <button className='
      flex items-center gap-2
      px-4 py-2
      text-xl font-jersey15 text-yellow
      bg-cyan border-4 border-black
      shadow-[4px_4px_0px_#1e1917,inset_0_0_0_2px_#f1e1d9]
      hover:bg-lightCyan
      active:bg-darkCyan active:translate-x-1 active:translate-y-1 active:shadow-none
      transition-colors duration-500 cursor-pointer md:self-start sm:self-center'>My Project</button>
    </div>
  )
}

export default AboutMeText