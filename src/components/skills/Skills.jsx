import React from 'react'
import "./skills.css"
import { SkillsData } from "./Data";
import {
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My tecnical level</span>

        <div className="skills__container container grid">
          {SkillsData.map(({id, image, progress, title, alt}) => {
            return (

                <div className="Skills__circle" title={title} key={id}>
              
                    <CircularProgressbarWithChildren value={progress} className="progress__bar">
                      {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                      <img
                        className="skills__img"
                        src={image}
                        alt={alt}
                      />
                    </CircularProgressbarWithChildren>

                </div>
             ) 
          })}

          
          
        </div>
    </section>
  )
}

export default Skills