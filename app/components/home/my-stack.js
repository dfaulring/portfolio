import AnimatedLine from './animated-line'
import AnimatedVerticalLine from './animated-vertical-line'

export default function MyStack() {
  return (
    <section id='my-stack' className='px-6 md:px-12'>
      <div className='relative py-8 md:py-16'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-[auto_1px_1fr] md:gap-16'>
          <div className='flex justify-start items-start lg:items-center'>
            <p className='uppercase font-roboto-mono font-light tracking-widest'>
              My Stack
            </p>
          </div>
          <AnimatedVerticalLine />
          <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8'>
            <div className='flex items-center justify-center'>
              <img
                src='./nextjs-icon.svg'
                width={72}
                height={72}
                alt='Nextjs Logo'
              />
            </div>
            <div className='flex items-center justify-center'>
              <img
                src='./figma-icon.svg'
                width={72}
                height={72}
                alt='Figma Icon'
              />
            </div>
            <div className='flex items-center justify-center'>
              <img
                src='./tailwindcss-icon.svg'
                width={72}
                height={72}
                alt='Tailwind Icon'
              />
            </div>
            <div className='flex items-center justify-center'>
              <img
                src='./react-icon.svg'
                width={72}
                height={72}
                alt='React Logo'
              />
            </div>
            <div className='flex items-center justify-center'>
              <img
                src='./ts-logo-round-icon.svg'
                width={72}
                height={72}
                alt='Typescript Logo'
              />
            </div>
            <div className='flex items-center justify-center'>
              <img
                src='./graphql-icon.svg'
                width={72}
                height={72}
                alt='Graphql Logo'
              />
            </div>
            <div className='flex items-center justify-center'>
              <img
                src='./rust-logo-blk.svg'
                width={72}
                height={72}
                alt='Rust Logo'
              />
            </div>
            <div className='flex items-center justify-center'>
              <img src='./nodejs.svg' width={72} height={72} alt='Figma Icon' />
            </div>
          </div>
        </div>
        <AnimatedLine />
      </div>
    </section>
  )
}
