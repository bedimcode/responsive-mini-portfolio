import React from 'react'
import './skills.css'
import skills from './skillsDatabase'
import { RiCheckboxCircleLine } from 'react-icons/ri'

function Skills() {
  const frontendSkills = skills.frontendSkills.map(skill => {
    return (
      <div className="skills__data">
        <RiCheckboxCircleLine className="skills__data-icon"/>
        <div>
          <h3 className="skills__name">{skill.skill}</h3>
          <span className="skills__level">{skill.level}</span>
        </div>
      </div>
    )
  })

  const backendSkills = skills.backendSkills.map(skill => {
    return (
      <div className="skills__data">
        <RiCheckboxCircleLine className="skills__data-icon"/>
        <div>
          <h3 className="skills__name">{skill.skill}</h3>
          <span className="skills__level">{skill.level}</span>
        </div>
      </div>
    )
  })

  return(
    <div className="skills__content">
      <div className="skills__container">
        <h3 className="skills__title">Frontend Developer</h3>
        <div className="skills__box">
          {frontendSkills}
        </div>
      </div>

      <div className="skills__container">
        <h3 className="skills__title">Backend Developer</h3>
        <div className="skills__box">
          {backendSkills}
        </div>
      </div>
    </div>
  )
}

export default Skills
