import AnimatedLine from './animated-line'
import AnimatedVerticalLine from './animated-vertical-line'
import ContactForm from './contact-form'

export default function Contact() {
  return (
    <section id='contact' className='px-6 md:px-12'>
      <div className='relative py-8 md:py-16'>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-[1fr_1px_1fr] lg:gap-12 lg:grid-cols-[1fr_1px_.45fr]'>
          <div className='flex flex-col justify-between'>
            <div>
              <p className='uppercase font-roboto-mono font-light tracking-widest'>
                Contact
              </p>
              <p className='font-syne mt-4 text-4xl lg:text-5xl'>
                Passionate about the web or have an interesting opportunity to
                share?
              </p>
            </div>

            <ul className='flex flex-row mt-4'>
              <li className='w-8 h-8 flex items-center justify-center border border-black rounded-full text-xs lg:transition-all lg:duration-200 lg:hover:bg-black lg:hover:text-light-yellow'>
                <a
                  className='w-full h-full flex items-center justify-center'
                  href='https://www.linkedin.com/in/dominicfaulring'
                  target='_blank'
                >
                  LI
                  <span className='sr-only'>LinkedIn</span>
                </a>
              </li>
              <li className='w-8 h-8 flex items-center justify-center border border-black rounded-full text-xs ml-4 lg:transition-all lg:duration-200 lg:hover:bg-black lg:hover:text-light-yellow'>
                <a
                  className='w-full h-full flex items-center justify-center'
                  href='https://www.github.com/dfaulring'
                  target='_blank'
                >
                  GH
                  <span className='sr-only'>Github</span>
                </a>
              </li>
            </ul>
          </div>

          <AnimatedVerticalLine />

          <div>
            <ContactForm />
          </div>
        </div>
        <AnimatedLine />
      </div>
    </section>
  )
}
