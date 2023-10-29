import AnimatedLine from './animated-line'

export default function AboutMe() {
  return (
    <section id='about-me' className='px-6 md:px-12'>
      <div className='relative py-8 md:py-16'>
        <div>
          <h2 className='text-center uppercase text-7xl'>About Me</h2>
        </div>
        <AnimatedLine />
      </div>
    </section>
  )
}
