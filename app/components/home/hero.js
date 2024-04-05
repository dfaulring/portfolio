import AnimatedLine from './animated-line'
import { useTranslation } from 'react-i18next'

export default function Hero() {
  let { t } = useTranslation()

  return (
    <section className='px-6 md:px-12'>
      <div className='relative py-8 md:py-16'>
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
          <div>
            <h2 className='font-syne text-6xl sm:text-8xl'>
              <span>Full Stack</span> Developer {t('greeting')}
            </h2>
            <p className='mt-4 text-2xl max-w-xl font-light leading-[1.5] sm:text-3xl'>
              Hi! I&apos;m Dominic Faulring, a Seattle-based full-stack
              developer passionate about creating impactful web solutions.
            </p>
          </div>
          <img
            className='w-full h-full object-cover mt-3'
            src={'/avatar.webp'}
            alt='Placeholder'
            width={500}
            height={500}
            priority='true'
          />
        </div>
        <AnimatedLine />
      </div>
    </section>
  )
}
