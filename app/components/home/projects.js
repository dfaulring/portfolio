import AnimatedLine from './animated-line'
import AnimatedVerticalLine from './animated-vertical-line'

export default function Projects() {
  return (
    <section id='projects' className='px-6 md:px-12'>
      <div className='relative py-8 md:py-16'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-[1fr_1px_1fr] md:gap-12 lg:grid-cols-[.47fr_1px_1fr] lg:gap-16'>
          <div>
            <div className='sticky top-12'>
              <h2 className='uppercase font-syne text-5xl font-normal leading-1.2 lg:text-6xl'>
                Recent Projects
              </h2>
              {/* <p className='mt-4 text-2xl'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p> */}
            </div>
          </div>
          <AnimatedVerticalLine />
          <div className='grid grid-cols-1 gap-12'>
            <div className='relative lg:pb-8'>
              <a className='block' href='https://www.scalis.ai' target='_blank'>
                <div className='relative pt-[56.25%] bg-[#0020D3] rounded-2xl'>
                  <div className='absolute inset-0 w-full h-full flex items-center justify-center'>
                    <img
                      src='/scalis-logo-white.svg'
                      width={127}
                      height={25}
                      alt='Scalis logo'
                    />
                  </div>
                </div>
                <div className='mt-4 flex justify-between items-center'>
                  <h3 className='font-syne text-2xl font-light'>Scalis</h3>
                  <p className='font-roboto-mono font-light'>2023</p>
                </div>
              </a>
              <AnimatedLine classes={'hidden lg:block'} />
            </div>

            <div className='grid grid-cols-1 gap-12 lg:gap-12 lg:grid-cols-[1fr_1px_1fr]'>
              <a
                className='block'
                href='https://www.wineinsiders.com'
                target='_blank'
              >
                <div className='relative pt-[56.25%] bg-[#AD1A27] rounded-2xl'>
                  <div className='absolute inset-0 w-full h-full flex items-center justify-center'>
                    <img
                      src='./wine-insiders-logo.svg'
                      width={127}
                      height={25}
                      alt='Wine Insiders Logo'
                    />
                  </div>
                </div>
                <div className='mt-4 flex justify-between items-center'>
                  <h3 className='font-syne text-2xl font-light'>
                    Wine Insiders
                  </h3>
                  <p className='font-roboto-mono font-light'>2023</p>
                </div>
              </a>
              <AnimatedVerticalLine classes={'hidden lg:block'} />
              <a
                className='block'
                href='https://www.yoursuper.com'
                target='_blank'
              >
                <div className='relative pt-[56.25%] bg-[#fcf7f0] rounded-2xl'>
                  <div className='absolute inset-0 w-full h-full flex items-center justify-center'>
                    <img
                      src='/your-super-logo.png'
                      width={196}
                      height={24}
                      alt='Your Super logo'
                    />
                  </div>
                </div>
                <div className='mt-4 flex justify-between items-center'>
                  <h3 className='font-syne text-2xl font-light'>Your Super</h3>
                  <p className='font-roboto-mono font-light'>2022</p>
                </div>
              </a>
              <a
                className='block'
                href='https://www.florencebymills.com'
                target='_blank'
              >
                <div className='relative pt-[56.25%] bg-[#A3A7E4] rounded-2xl'>
                  <div className='absolute inset-0 w-full h-full flex items-center justify-center'>
                    <img
                      src='/florence-by-mills-logo.png'
                      width={196}
                      height={24}
                      alt='Florence by Mills logo'
                    />
                  </div>
                </div>
                <div className='mt-4 flex justify-between items-center'>
                  <h3 className='font-syne text-2xl font-light'>
                    Florence by Mills
                  </h3>
                  <p className='font-roboto-mono font-light'>2021</p>
                </div>
              </a>
              <AnimatedVerticalLine classes={'hidden lg:block'} />
              <a
                className='block'
                href='https://www.ellaola.com'
                target='_blank'
              >
                <div className='relative pt-[56.25%] bg-[#c5d9f3] rounded-2xl'>
                  <div className='absolute inset-0 w-full h-full flex items-center justify-center'>
                    <img
                      src='/ellaola-logo.svg'
                      width={196}
                      height={24}
                      alt='EllaOla logo'
                    />
                  </div>
                </div>
                <div className='mt-4 flex justify-between items-center'>
                  <h3 className='font-syne text-2xl font-light'>EllaOla</h3>
                  <p className='font-roboto-mono font-light'>2021</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <AnimatedLine />
      </div>
    </section>
  )
}
