import './globals.css'
import Navigation from './shared/Navbar'
import WordGenerator from './shared/WordGenerator'
import { Oswald } from '@next/font/google'


const oswald = Oswald()

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={oswald.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='container mx-auto mt-20  ' >
        
        <Navigation />
        {children}
        <WordGenerator />
        
      </body>
      
      
    </html>
  )
}
