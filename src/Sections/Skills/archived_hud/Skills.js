import React, { useState } from 'react'
import './Skills.scss'
import { skillsArr } from '@/constants/Data'

function Skills() {
     const [hoveredCategory, setHoveredCategory] = useState(null)

     return (
          <div className='skillsContainer' id='skills'>
               <div className='titleContainer'>
                    <h2>Stellar Skills</h2>
                    <p>Exploring the universe of technologies.</p>
               </div>

               <div className='stardustGrid'>
                    {skillsArr.map((category, index) => (
                         <div 
                              key={index} 
                              className={`starCluster ${hoveredCategory === index ? 'active' : ''}`}
                              onMouseEnter={() => setHoveredCategory(index)}
                              onMouseLeave={() => setHoveredCategory(null)}
                              style={{ animationDelay: `${index * 0.2}s` }}
                         >
                              <div className='clusterCore'>
                                   <h3>{category.category}</h3>
                              </div>
                              <div className='orbitingSkills'>
                                   {category.items.map((item, i) => (
                                        <span 
                                             key={i} 
                                             className='starSkill'
                                             style={{ 
                                                  transitionDelay: `${i * 0.05}s`,
                                                  transform: hoveredCategory === index ? `translateY(0) scale(1)` : `translateY(10px) scale(0.9)`
                                             }}
                                        >
                                             {item}
                                        </span>
                                   ))}
                              </div>
                         </div>
                    ))}
               </div>
          </div>
     )
}

export default Skills
