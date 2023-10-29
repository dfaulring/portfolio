import { useState } from 'react'
import AnimatedLine from '../home/animated-line'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <nav className='px-6 md:px-12 relative'>
      <div className='relative py-8 flex items-center justify-between'>
        <a className='flex items-center' href='/'>
          <span className='text-4xl uppercase'>(DF)</span>
        </a>

        <ul className='hidden items-center md:flex'>
          <li className='ml-8'>
            <a
              className='uppercase font-roboto-mono font-light tracking-widest hover:underline hover:underline-offset-2'
              href='#my-stack'
            >
              My Stack
            </a>
          </li>
          <li className='ml-8'>
            <a
              className='uppercase font-roboto-mono font-light tracking-widest hover:underline hover:underline-offset-2'
              href='#projects'
            >
              Projects
            </a>
          </li>
          <li className='ml-8'>
            <a
              className='group relative rounded-md uppercase font-roboto-mono font-light bg-black text-light-yellow h-10 flex flex-col items-center justify-center px-6 tracking-widest overflow-hidden lg:after:inset-0 lg:after:flex lg:after:items-center lg:after:justify-center lg:after:transition-all lg:after:duration-200 lg:after:absolute lg:after:content-["Contact"] lg:after:translate-y-[110%] lg:hover:after:translate-y-0 '
              href='#contact'
            >
              <span className='inline-block lg:transition-all lg:duration-200 lg:group-hover:-translate-y-[110%]'>
                Contact
              </span>
            </a>
          </li>
        </ul>

        <button
          className='group relative w-[30px] h-[20px] cursor-pointer md:hidden'
          type='button'
          aria-label='toggle-mobile-navigation'
          aria-expanded={open}
          aria-controls='mobile-nav-list'
          onClick={() => setOpen(!open)}
        >
          <div
            className={`absolute top-0 h-[1px] w-[30px] bg-black right-0 transition ease transform duration-300 ${
              open
                ? 'rotate-45 translate-y-2 opacity-50 group-hover:opacity-100'
                : 'opacity-50 group-hover:opacity-100'
            }`}
          ></div>
          <div
            className={`absolute top-[50%] -tranlate-y-[50%] h-[1px] w-[30px] bg-black right-0 transition ease transform duration-300 ${
              open ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'
            }`}
          ></div>
          <div
            className={`absolute bottom-0 h-[1px] w-[30px] bg-black right-0 transition ease transform duration-300 ${
              open
                ? '-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100'
                : 'opacity-50 group-hover:opacity-100'
            }`}
          ></div>
        </button>

        <AnimatedLine />
      </div>

      <div
        className={`bottom-auto left-0 right-0 absolute -mt-[1px] z-10 bg-[#fdfbf5] transition-opacity duration-500 ease-in-out ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } md:hidden`}
      >
        <div
          className={`px-6 md:px-12 transition-transform duration-500 ease-in-out ${
            open ? 'translate-y-0' : 'translate-y-1/4'
          }`}
        >
          <div className='border border-black py-4 px-6'>
            <ul id='mobile-nav-list'>
              <li className='border-b border-black pb-3'>
                <a
                  className='uppercase font-light font-roboto-mono block'
                  href='#my-stack'
                >
                  My Stack
                </a>
              </li>
              <li className='border-b border-black pb-3 mt-3'>
                <a
                  className='uppercase font-light font-roboto-mono block'
                  href='#projects'
                >
                  Projects
                </a>
              </li>
              <li className='rounded-md mt-3 uppercase font-roboto-mono font-light bg-black text-light-yellow h-10 flex items-center justify-center'>
                <a
                  className='flex w-full h-full items-center justify-center'
                  href='#contact'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
