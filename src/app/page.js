'use client'

import React from 'react'
import './page.scss'
import { useEffect, useState } from 'react'
import BallAnimation from '@/components/BallAnimation'
import LandingPage from '@/Sections/LandingPage/LandingPage'
import Experience from '@/Sections/experience/Experience'
import Skills from '@/Sections/Skills/Skills'
import MyWorks from '@/Sections/myWorks/MyWorks'
import { myworkArr } from '@/constants/Data'
import ProjectCard from '@/Sections/myWorks/ProjectCard'
import Loading from './loading'
import Contact from '@/Sections/Contact/Contact'

export default function Home() {
     const [windowWidth, setWindowWidth] = useState(null)

     useEffect(() => {
          if (window) {
               setWindowWidth(window.innerWidth)
          }
     }, [])
     return (
          <>
               {!windowWidth ? (
                    <Loading />
               ) : (
                    <div className='wrapper'>
                         <BallAnimation />
                         <div className='skyBackground'></div>
                         <div className='container' id='sectionWrapper'>
                              <LandingPage />
                              <Experience />
                              <Skills />
                              <MyWorks />
                              <Contact />
                         </div>
                    </div>
               )}
          </>
     )
}
