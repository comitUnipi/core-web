import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

export const Section = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }
  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="-mt-24 pt-24 w-full h-screen bg-white flex flex-wrap"
      >
        <motion.div
          className="md:-px-0 w-full md:w-4/12 bg-white flex items-center justify-start md:justify-end"
          variants={itemVariants}
        >
          <motion.div
            className="shadow-xl md:shadow-none rounded-md px-12 py-12 md:pl-0 md:pr-24 bg-white md:-mr-64 relative z-10"
            variants={itemVariants}
          >
            <h1 className="mb-8 text-2xl md:text-5xl text-primary text-bold uppercase font-bold tracking-widest leading-tight">
              Community of
              <br />
              Information
              <br />
              Technology
            </h1>
            <h2 className="text-lg md:text-xl font-serif text-muted-foreground">
              Semangat COMIT, Salam Teknologi.
            </h2>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLScQTo1aPq0ejEg0lNiusVxI1FRk995zjQh05d5JlFWLK26TKA/viewform"
              passHref
            >
              <motion.div
                className="mt-8 text-sm text-white font-semibold bg-primary rounded-md flex items-center justify-center py-3 px-4 hover:scale-110 hover:opacity-80"
                whileHover={{ scale: 1.1, opacity: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                Gabung Sekarang
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="-mt-20 md:mt-0 w-full md:flex-1"
          variants={itemVariants}
        >
          <Image
            src="/banner.png"
            className="w-full h-full rounded-md brightness-75 object-cover"
            alt="banner"
            width={1280}
            height={720}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
