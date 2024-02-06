import React from 'react'
import SkillDataProvider from './SkillsDataProvider'
import { skillData } from '@/constants'

const Skills = () => {
  return (
    <section className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'
    style={{transform: "scale(0.9"}}
    >
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {skillData.map((image, index) => (
           <SkillDataProvider 
        key={index}
        src={image.Image}
        width={image.width}
        height={image.height} 
        index={index}
        />
        ))}
    </div>
    </section>
    
  )
}

export default Skills