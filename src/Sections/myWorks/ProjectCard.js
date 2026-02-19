import React, { useEffect, useLayoutEffect, useState } from 'react'
import './projectCard.scss'
import montserrat from '@/assets/fonts/montserrat'
import Image from 'next/image'
import rotateIcon from '../../assets/images/ic_rotate.svg'

function ProjectCard({ workData }) {
     const [hoverIndex, setHoverIndex] = useState(null)
     const [isHovered, setIsHovered] = useState(false)
     const [width, setWidth] = useState(0)
     const [windowWidth, setWindowWidth] = useState(null)

     useEffect(() => {
          if (window) {
               setWindowWidth(window.innerWidth)
          }
     }, [])

     useLayoutEffect(() => {
          const element = document.getElementById(`${workData.name}_mockup`)
          if (element) {
               let { width } = element.getBoundingClientRect()
               setWidth(width * 0.8)
          }
     }, [workData])

     const onClickFunc = () => {
          if (window?.innerWidth <= 500) {
               setIsHovered(!isHovered)
          }
     }

     const onMouseEnterFunc = () => {
          if (window?.innerWidth > 500) {
               setIsHovered(true)
          }
     }

     const onMouseLeaveFunc = () => {
          if (window?.innerWidth > 500) {
               setIsHovered(false)
          }
     }

     return (
          <div
               className={`flipper ${isHovered ? 'hover' : ''}`}
               onClick={onClickFunc}
               onMouseEnter={onMouseEnterFunc}
               onMouseLeave={onMouseLeaveFunc}
          >
               <div className='cardContainer'>
                    <div className='front'>
                         <div
                              className='imageContainer'
                              style={{ width: '100%', height: '60%', overflow: 'hidden' }}
                         >
                              <Image
                                   className='coverImage'
                                   alt='Cover Image'
                                   src={workData.coverImage}
                                   width={500}
                                   height={300}
                                   style={{ objectFit: 'cover' }}
                              ></Image>
                         </div>
                         <div className='bottomContainer'>
                              <h3 style={{ color: workData.colorCode }}>{workData.name}</h3>
                              <p>{workData.description}</p>
                         </div>
                         {windowWidth <= 500 && (
                              <div className='rotateIconContainer'>
                                   <svg
                                        width='32'
                                        height='20'
                                        viewBox='0 0 32 20'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                   >
                                        <path
                                             d='M14.266 13.9555C14.833 13.9845 15.412 13.9996 16 13.9996C23.18 13.9996 29 11.7461 29 8.96672C29 7.35495 28 5.99934 24.002 4.99957M10 13.4321C5.84 12.5929 3 10.9081 3 8.96672V8.96672C3 7.47194 4.61294 6.57249 5.99138 5.99434C11.6586 3.61738 20.001 4.11061 24 4.99957'
                                             stroke={`${workData.colorCode}`}
                                             style={{
                                                  strokeWidth: '2',
                                                  strokeMiterlimit: '10',
                                                  strokeLinecap: 'round',
                                                  strokeLinejoin: 'round',
                                             }}
                                        />
                                        <path
                                             d='M17 11L14 14L17 17'
                                             stroke={`${workData.colorCode}`}
                                             style={{
                                                  strokeWidth: '2',
                                                  strokeMiterlimit: '10',
                                                  strokeLinecap: 'round',
                                                  strokeLinejoin: 'round',
                                             }}
                                        />
                                   </svg>
                              </div>
                         )}
                    </div>
                    <div className='back'>
                         <div className='imageContainer' id={`${workData.name}_mockup`}>
                              <Image
                                   className='mockup'
                                   src={workData.mockup}
                                   alt='Mock up images'
                                   priority={true}
                              ></Image>
                         </div>
                         <div className='bottomContainer'>
                              <h4>Tech used</h4>
                              <div className='techWrapper'>
                                   {workData.techs.map((tech, i) => {
                                        return (
                                             <div
                                                  key={i}
                                                  style={{
                                                       border: `1px solid ${workData.colorCode}`,
                                                       color:
                                                            hoverIndex == i
                                                                 ? '#fff'
                                                                 : workData.colorCode,
                                                       background:
                                                            hoverIndex == i
                                                                 ? workData.colorCode
                                                                 : 'transparent',
                                                  }}
                                                  onMouseEnter={() => setHoverIndex(i)}
                                                  onMouseLeave={() => setHoverIndex(null)}
                                                  className='techNames'
                                             >
                                                  {tech}
                                             </div>
                                        )
                                   })}
                              </div>
                         </div>
                         {windowWidth <= 500 && (
                              <div className='rotateIconContainer'>
                                   <svg
                                        width='32'
                                        height='20'
                                        viewBox='0 0 32 20'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                   >
                                        <path
                                             d='M14.266 13.9555C14.833 13.9845 15.412 13.9996 16 13.9996C23.18 13.9996 29 11.7461 29 8.96672C29 7.35495 28 5.99934 24.002 4.99957M10 13.4321C5.84 12.5929 3 10.9081 3 8.96672V8.96672C3 7.47194 4.61294 6.57249 5.99138 5.99434C11.6586 3.61738 20.001 4.11061 24 4.99957'
                                             stroke={`${workData.colorCode}`}
                                             style={{
                                                  strokeWidth: '2',
                                                  strokeMiterlimit: '10',
                                                  strokeLinecap: 'round',
                                                  strokeLinejoin: 'round',
                                             }}
                                        />
                                        <path
                                             d='M17 11L14 14L17 17'
                                             stroke={`${workData.colorCode}`}
                                             style={{
                                                  strokeWidth: '2',
                                                  strokeMiterlimit: '10',
                                                  strokeLinecap: 'round',
                                                  strokeLinejoin: 'round',
                                             }}
                                        />
                                   </svg>
                              </div>
                         )}
                    </div>
               </div>
          </div>
     )
}

export default ProjectCard
