import { Inter } from 'next/font/google'
import './globals.css'
import montserrat from '@/assets/fonts/montserrat'
import montserrat_Alternates from '@/assets/fonts/montserrat_Alternates'
import roboto from '@/assets/fonts/Roboto'
import Loading from './loading'
import { Suspense } from 'react'

export const metadata = {
     title: 'Gnana Prakash | Senior Full Stack & Mobile Engineer',
     description: 'Senior Full Stack & Mobile Engineer with 4+ years of experience specializing in React.js, Next.js, React Native, and Node.js. Expert in Fintech, ERP, and AI ecosystems. Based in Dubai, UAE.',
     keywords: ['Full Stack Developer Dubai', 'React Native Specialist UAE', 'Senior Node.js Engineer', 'Fintech Developer', 'ERP System Architect', 'Next.js Portfolio', 'Gnana Prakash', 'Software Engineer Dubai'],
     openGraph: {
          title: 'Gnana Prakash | Senior Full Stack & Mobile Engineer',
          description: 'Building end-to-end ecosystems for web and mobile. Expert in React, Node.js, and Cloud Architectures.',
          url: 'https://gnanaprakashr.github.io/', // Assuming GitHub Pages or similar based on repo
          siteName: 'Gnana Prakash Portfolio',
          locale: 'en_US',
          type: 'website',
     },
}

export default function RootLayout({ children }) {
     return (
          <html
               lang='en'
               className={`${montserrat.variable} ${montserrat_Alternates.variable} ${roboto.variable}`}
          >
               <body>
                    <Suspense fallback={<Loading />}>
                         <div
                              style={{
                                   width: '100%',
                                   height: '100%',
                                   overflow: 'hidden',
                                   position: 'relative',
                              }}
                         >
                              {children}
                         </div>
                    </Suspense>
               </body>
          </html>
     )
}
