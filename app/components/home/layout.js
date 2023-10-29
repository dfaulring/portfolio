import './globals.css'
import { Syne, Roboto_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import Footer from './footer'

const syne = Syne({ subsets: ['latin'], variable: '--font-syne' })
const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
})
const satoshi = localFont({
  src: '../public/Satoshi-Variable.woff2',
  display: 'swap',
  variable: '--font-satoshi',
})

export const metadata = {
  title: 'Dominic Faulring | Full Stack Developer',
  description:
    'Hi! I&apos;m Dominic Faulring, a Seattle-based full-stack developer passionate about creating impactful web solutions.',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={`${syne.variable} ${satoshi.variable} ${robotoMono.variable} scroll-smooth`}
    >
      <body>
        <div className='border border-black'>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
