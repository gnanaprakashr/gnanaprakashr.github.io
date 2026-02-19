import React from 'react'
import './experience.scss'

function Experience() {
     const technologies = [
          {
               name: 'REACT JS',
               link: 'https://react.dev/',
          },
          {
               name: 'REACT NATIVE',
               link: 'https://reactnative.dev/',
          },
          {
               name: 'EXPO',
               link: 'https://expo.dev/',
          },
          {
               name: 'NEXT JS',
               link: 'https://nextjs.org/',
          },
          {
               name: 'TAILWIND CSS',
               link: 'https://tailwindcss.com/',
          },
          {
               name: 'FIREBASE',
               link: 'https://firebase.google.com/',
          },
          {
               name: 'FIGMA',
               link: 'https://www.figma.com/',
          },
     ]
     return (
          <div className='experienceContainer' id='experience'>
               <div className='titleContainer'>
                    <h2>Work Experience</h2>
                    <p>My professional journey and contributions.</p>
               </div>

               <div className='experienceCard'>
                    <div className='cardHeader'>
                         <div className='roleInfo'>
                              <h3>Junior Software Developer</h3>
                              <a 
                                   href='https://www.bytecompass.tech/' 
                                   target='_blank' 
                                   rel='noreferrer'
                                   className='company'
                              >
                                   @ Bytecompass LLP
                              </a>
                         </div>
                         <span className='date'>April 2022 - Current</span>
                    </div>

                    <div className='cardBody'>
                         <ul className='pointsContainer'>
                              <li>
                                   Spearheaded the development and deployment of the company&apos;s new website, enhancing animations, responsiveness, and overall visual appeal.
                              </li>
                              <li>
                                   Collaborated within a team of 6 developers, taking ownership of frontend development for both web and mobile applications using React and React Native.
                              </li>
                         </ul>

                         <div className='techContainer'>
                              <h4>Technologies Used:</h4>
                              <div className='techGrid'>
                                   {technologies.map((tech, i) => (
                                        <a
                                             className='techTag'
                                             key={i}
                                             href={tech.link}
                                             target='_blank'
                                             rel='noreferrer'
                                        >
                                             {tech.name}
                                        </a>
                                   ))}
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Experience
