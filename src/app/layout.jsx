import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'

const inter = Poppins({ subsets: ['latin'] ,weight : ['300','400','500','700']})

export const metadata = {
  title: 'Animeaja',
  description: 'Website Anime Aja',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-color-dark`}  suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
