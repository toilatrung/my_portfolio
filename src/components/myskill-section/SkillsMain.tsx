import React from 'react'
import AllSkills from './AllSkills'
import SkillsText from './SkillsText'

const SkillsMain = () => {
  return (
        <div id='skills' className=''>
        <div className='max-w-[1200px] px-4 mx-auto relative overflow-hidden'>
            <SkillsText />
            <div className='flex items-center justify-center relative mt-8'>
                <AllSkills />
            </div>
        </div>
    </div>
  )
}

export default SkillsMain