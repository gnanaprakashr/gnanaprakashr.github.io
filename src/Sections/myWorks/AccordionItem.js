import React, { useRef, useState, useEffect } from 'react'
import './MyWorks.scss'

function AccordionItem({ work, isActive, onToggle, index }) {
     const contentRef = useRef(null)
     const [height, setHeight] = useState(0)

     useEffect(() => {
          if (isActive) {
               const scrollHeight = contentRef.current.scrollHeight
               setHeight(scrollHeight)
          } else {
               setHeight(0)
          }
     }, [isActive])

     return (
          <div 
               className={`accordionItem ${isActive ? 'active' : ''}`}
               onClick={onToggle}
          >
               <div className='accordionHeader'>
                    <span className='projectIndex'>0{index + 1}</span>
                    <h3>{work.name}</h3>
                    <span className='category'>{work.category}</span>
                    <div className='arrow'>{isActive ? '−' : '+'}</div>
               </div>

               <div 
                    className='accordionBody'
                    style={{ height: `${height}px` }}
                    ref={contentRef}
               >
                    <div className='bodyContent'>
                         <p className='description'>{work.description}</p>
                         <div className='techStack'>
                              {work.techs.map((tech, i) => (
                                   <span key={i} className='techTag'>{tech}</span>
                              ))}
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default AccordionItem
