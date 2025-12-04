import React from 'react'
import { useState, useEffect } from 'react'
import './LandingPage.scss'

function LandingPage() {
     const [rectValue, setRectValue] = useState({ width: 0, height: 0 })
     const [pdfUrl, setPdfUrl] = useState('../../assets/Gnana_Prakash_R_CV.pdf')
     const [windowWidth, setWindowWidth] = useState(null)

     useEffect(() => {
          if (window) {
               setWindowWidth(window.innerWidth)
          }
     }, [])

     useEffect(() => {
          setTimeout(() => {
               const element = document.getElementById('btnContainer')

               if (element) {
                    let rect = element.getBoundingClientRect()
                    setRectValue(rect)
               }
          }, 1)
     }, [])

     const scrollToTarget = () => {
          const target = document.getElementById('myworks')
          const sectionWrapper = document.getElementById('sectionWrapper')
          if (target) {
               let targetOffset = target.offsetTop
               sectionWrapper.scrollTo({
                    top: targetOffset,
                    behavior: 'smooth',
               })
          }
     }

     return (
          <div className='landingPageContainer'>
               <h1>
                    <span className='welcomeText'>Hi{windowWidth <= 500 ? ',' : ''}</span>
                    <span className='introText'>{windowWidth > 500 ? ',  I am' : ''}</span>
                    <span className='firstName'>
                         {windowWidth <= 500 && (
                              <span
                                   className='introText'
                                   style={{ marginRight: '10px', fontSize: '21px' }}
                              >
                                   {' '}
                                   I am
                              </span>
                         )}
                         {['G', 'N', 'A', 'N', 'A'].map((letter, i) => {
                              return (
                                   <span key={i} className={'letter'}>
                                        {letter}
                                   </span>
                              )
                         })}
                    </span>
                    <span className='secondName'>
                         {['P', 'R', 'A', 'K', 'A', 'S', 'H'].map((letter, i) => {
                              return (
                                   <span key={i} className={'letter'}>
                                        {letter}
                                   </span>
                              )
                         })}
                    </span>
               </h1>
               <p className={'description'}>
                    As a frontend developer with 3.5+ years of expertise in React JS, React Native Next.js, committed to
pushing conventional boundaries to create innovative web and mobile solutions that
elevate the technological experience. I
                    bring a versatile skill set and a commitment to delivering optimal user
                    experiences. I have successfully led a team of 6 individuals
on multiple projects, consistently delivering state-of-the-art solutions.
               </p>

               <h4 className='languages'>
                    JS <span className='line'>|</span> React <span className='line'>|</span> React
                    Native <span className='line'>|</span> Next Js
               </h4>

               <div onClick={scrollToTarget} className={'btnContainer'} id='btnContainer'>
                    <span>View my works</span>
               </div>

               <div className='links'>
                    <a href='https://www.linkedin.com/in/gnana-prakash-071a231a2' target='_blank'>
                         <svg
                              className='linkedlnIcon'
                              width='72'
                              height='72'
                              viewBox='0 0 72 72'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                         >
                              <path
                                   d='M36 0C16.119 0 0 16.119 0 36C0 55.881 16.119 72 36 72C55.881 72 72 55.881 72 36C72 16.119 55.881 0 36 0ZM22.488 16.209C25.014 16.209 26.697 17.892 26.697 20.136C26.697 22.38 25.014 24.063 22.209 24.063C19.683 24.066 18 22.38 18 20.136C18 17.892 19.683 16.209 22.488 16.209ZM27 51H18V27H27V51ZM57 51H48.528V37.884C48.528 34.257 46.269 33.42 45.423 33.42C44.577 33.42 41.751 33.978 41.751 37.884C41.751 38.442 41.751 51 41.751 51H33V27H41.754V30.348C42.882 28.395 45.141 27 49.377 27C53.613 27 57 30.348 57 37.884V51Z'
                                   fill='white'
                              />
                         </svg>
                    </a>
                    <a href='https://github.com/R-Gnana-Prakash'>
                         <svg
                              width='72'
                              height='72'
                              viewBox='0 0 72 72'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                         >
                              <path
                                   d='M36 0C16.119 0 0 16.3714 0 36.5637C0 53.6968 11.616 68.0328 27.276 72C27.108 71.5064 27 70.9336 27 70.2236V63.9743C25.539 63.9743 23.091 63.9743 22.476 63.9743C20.013 63.9743 17.823 62.8987 16.761 60.8999C15.582 58.6786 15.378 55.2813 12.456 53.2032C11.589 52.5116 12.249 51.7224 13.248 51.829C15.093 52.3592 16.623 53.645 18.063 55.5524C19.497 57.4629 20.172 57.8956 22.851 57.8956C24.15 57.8956 26.094 57.8194 27.924 57.5269C28.908 54.9887 30.609 52.6517 32.688 51.5487C20.7 50.2964 14.979 44.239 14.979 36.0152C14.979 32.4747 16.464 29.0499 18.987 26.1644C18.159 23.3002 17.118 17.4592 19.305 15.2349C24.699 15.2349 27.96 18.7876 28.743 19.7474C31.431 18.812 34.383 18.2818 37.485 18.2818C40.593 18.2818 43.557 18.812 46.251 19.7535C47.025 18.7998 50.289 15.2349 55.695 15.2349C57.891 17.4622 56.838 23.3276 56.001 26.1857C58.509 29.0651 59.985 32.4807 59.985 36.0152C59.985 44.2329 54.273 50.2873 42.303 51.5457C45.597 53.2916 48 58.1972 48 61.8932V70.2236C48 70.5405 47.931 70.769 47.895 71.0402C61.923 66.0462 72 52.5176 72 36.5637C72 16.3714 55.881 0 36 0Z'
                                   fill='white'
                              />
                         </svg>
                    </a>
                    <a
                         href='./Gnana_prakash_resume.pdf'
                         download={'Gnana_Prakash_R_CV'}
                         title='Resume'
                    >
                         <svg
                              className='pdfIcon'
                              width='62'
                              height='62'
                              viewBox='0 0 62 62'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                         >
                              <path
                                   d='M25.1401 16.0766V2.79475L12.9951 17.4333H23.6219C24.0246 17.4333 24.4107 17.2903 24.6954 17.0359C24.9801 16.7815 25.1401 16.4364 25.1401 16.0766ZM0.444647 53.0013C0.72935 53.2558 1.11549 53.3987 1.51812 53.3987H42.9931C43.3958 53.3987 43.7819 53.2558 44.0666 53.0013C44.3513 52.7469 44.5113 52.4018 44.5113 52.042V38.4753C44.5113 38.1155 44.3513 37.7704 44.0666 37.516C43.7819 37.2615 43.3958 37.1186 42.9931 37.1186H1.51812C1.11549 37.1186 0.72935 37.2615 0.444647 37.516C0.159945 37.7704 0 38.1155 0 38.4753V52.042C0 52.4018 0.159945 52.7469 0.444647 53.0013ZM61.5554 61.6026C61.8401 61.3482 62 61.0031 62 60.6433V1.35667C62 0.996862 61.8401 0.651787 61.5554 0.397361C61.2706 0.142935 60.8845 0 60.4819 0H28.1763V16.0766C28.1763 17.156 27.6965 18.1913 26.8424 18.9545C25.9883 19.7178 24.8298 20.1466 23.6219 20.1466H11.477V34.4053H42.9931C44.201 34.4053 45.3595 34.8341 46.2136 35.5973C47.0677 36.3606 47.5475 37.3958 47.5475 38.4753V52.042C47.5475 53.1215 47.0677 54.1567 46.2136 54.92C45.3595 55.6832 44.201 56.112 42.9931 56.112H11.477V60.6433C11.477 61.0031 11.6369 61.3482 11.9216 61.6026C12.2063 61.8571 12.5925 62 12.9951 62H60.4819C60.8845 62 61.2706 61.8571 61.5554 61.6026ZM14.6415 49.0549V46.1245H16.1293C16.9669 46.1639 17.7888 45.9109 18.4216 45.419C18.7059 45.1829 18.9292 44.8944 19.076 44.5734C19.2228 44.2524 19.2896 43.9067 19.2718 43.5603C19.2784 43.0829 19.1365 42.6132 18.8619 42.2037C18.5906 41.8106 18.1941 41.4988 17.7233 41.3083C17.0618 41.0774 16.3526 40.9756 15.6435 41.0098H12V49.0549H14.6415ZM15.522 44.4015H14.6415V42.8413H15.6131C16.3266 42.8413 16.6758 43.0719 16.6758 43.601C16.6758 44.1301 16.2963 44.4015 15.522 44.4015ZM20.2586 41.0098V49.0549H23.7047C24.2734 49.0761 24.8404 48.985 25.3652 48.788C25.89 48.591 26.3597 48.293 26.7409 47.9153C27.544 47.1132 27.9588 46.0596 27.8947 44.9848C27.9139 43.9732 27.5321 42.988 26.8168 42.2037C26.4198 41.7926 25.9205 41.4705 25.3589 41.2632C24.7973 41.0558 24.1892 40.969 23.5833 41.0098H20.2586ZM23.5833 47.1962H22.9001V42.8413H23.5833C23.822 42.837 24.0572 42.8933 24.2614 43.0038C24.4657 43.1143 24.6306 43.2743 24.737 43.4654C25.008 43.9347 25.1436 44.4569 25.1317 44.9848C25.1624 45.5497 25.0095 46.1104 24.6915 46.5993C24.5819 46.7772 24.4217 46.9261 24.2271 47.0309C24.0325 47.1357 23.8104 47.1927 23.5833 47.1962ZM31.5837 46.0431H34.3771V44.2794H31.5837V42.9227H35.2272V41.0098H29.0181V49.0549H31.5837V46.0431Z'
                                   fill='white'
                                   style={{ fillRule: 'evenodd', clipRule: 'evenodd' }}
                              />
                         </svg>
                    </a>
               </div>
          </div>
     )
}

export default LandingPage
