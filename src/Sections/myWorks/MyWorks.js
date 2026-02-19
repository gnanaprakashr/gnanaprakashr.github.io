import React, { useState } from 'react'
import './MyWorks.scss'
import { myworkArr } from '@/constants/Data'
import AccordionItem from './AccordionItem'

function MyWorks() {
     const [activeIndex, setActiveIndex] = useState(null)

     const toggleAccordion = (index) => {
          setActiveIndex(activeIndex === index ? null : index)
     }

     return (
          <div className='myWorksContainer' id='myworks'>
               <div className='titleContainer'>
                    <h2>Tech Odyssey</h2>
                    <p>Click to explore the details of each project.</p>
               </div>
               
               <div className='projectsAccordion'>
                    {myworkArr.map((work, index) => (
                         <AccordionItem 
                              key={work.id}
                              work={work}
                              index={index}
                              isActive={activeIndex === index}
                              onToggle={() => toggleAccordion(index)}
                         />
                    ))}
               </div>
          </div>
     )
}

export default MyWorks
