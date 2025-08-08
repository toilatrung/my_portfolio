const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
        <h2 className='lg:text-2xl sm:text-xl uppercase text-white font-montserrat'>Web Developer</h2>
        <h1 className='md:text-[2.8rem] lg:text-6xl sm:text-4xl font-jersey15 text-yellow'>Trinh Quang Trung</h1>
        <p className='font-montserrat text-lg mt-4 text-white'>I am a senior Computer Science student at HUST, <br/> focusing on web development, including both front-end <br/> and back-end technologies.</p>
    </div>
  )
}

export default HeroText