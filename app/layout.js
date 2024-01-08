import { Inter } from 'next/font/google'
import './globals.css'




const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Devyanshu Jadon',
  description: "Hey everyone! 🎉 I'm a cheerful final year undergrad student who fell in love with coding in Class 8. Currently juggling placement preparation and exploring the world of Full Stack Development. 🚀 It's a fun journey, and I can't wait to see what's next! 🌟 #CodingEnthusiast  #FullStackDeveloper",
}



export default function RootLayout({ children }) {
  return (
    <html lang="en" className=''>
      <body className={inter.className } >{children}
      
      </body>
    </html>
  )
}
