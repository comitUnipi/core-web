import { useState, useEffect, useRef } from 'react'

interface IntersectionObserverOptions {
  threshold?: number | number[]
  root?: Element | null
  rootMargin?: string
}

const useIntersectionObserver = (options: IntersectionObserverOptions) => {
  const [inView, setInView] = useState(false)
  const ref = useRef<any | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting)
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [options])

  return [ref, inView] as const
}

export default useIntersectionObserver
