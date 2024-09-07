import { activity } from '@/constants'
import useIntersectionObserver from '@/hooks/IntersectionObserver'
import { motion, useAnimation, useInView } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect } from 'react'

const Activity = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } },
  }

  const [containerRef, inView] = useIntersectionObserver({ threshold: 0.2 })

  return (
    <motion.div
      ref={containerRef}
      className="mt-24"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <h2 className="text-center uppercase font-semibold text-3xl text-blue-600 py-12 md:py-24 px-6">
        Kegiatan Kami
      </h2>
      {activity.slice(1).map((item, index) => {
        const isEvenIndex = (index + 1) % 2 === 0
        return (
          <motion.div
            key={index}
            className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 lg:mb-24"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
          >
            <motion.div
              className="relative h-52 md:h-72 lg:h-auto"
              variants={itemVariants}
            >
              <div>
                <Image
                  className="absolute inset-0 w-full h-full rounded-md shadow-sm shadow-blue-500 object-cover"
                  src={item.img}
                  alt={item.title}
                  fill
                />
              </div>
            </motion.div>
            <motion.div
              className={`px-6 py-12 md:p-16 lg:p-32 flex items-center justify-center
                                ${isEvenIndex ? 'order-last md:order-first' : 'order-last'}`}
              variants={itemVariants}
            >
              <div>
                <h3 className="text-3xl mb-6 font-display text-black leading-tight">
                  {item.title}
                </h3>
                <p className="text-justify text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

export default Activity
