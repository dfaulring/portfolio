import { useInView } from 'react-intersection-observer'

const AnimatedVerticalLine = ({ classes }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  })

  return (
    <div className={`relative ${classes ? classes : ''}`}>
      <div
        ref={ref}
        className={`top-0 h-[0%] bg-black w-[1px] transition-[height] duration-[1500ms] ease-in-out ${
          inView ? '!h-[100%]' : ''
        }`}
      ></div>
    </div>
  )
}

export default AnimatedVerticalLine
