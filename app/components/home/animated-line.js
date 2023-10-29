import { useInView } from 'react-intersection-observer'

const AnimatedLine = ({ classes }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  })

  return (
    <div
      ref={ref}
      className={`absolute bottom-0 h-[1px] bg-black w-[0%] transition-[width] duration-[1500ms] ease-in-out ${
        inView ? '!w-[100%]' : ''
      } ${classes ? classes : ''}`}
    ></div>
  )
}

export default AnimatedLine
