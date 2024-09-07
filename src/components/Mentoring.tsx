import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import useIntersectionObserver from '@/hooks/IntersectionObserver';

const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const iconVariants = {
    hover: { scale: 1.2, rotate: 15, transition: { duration: 0.3 } },
};

export const Mentoring = () => {
    const [titleRef, titleInView] = useIntersectionObserver({ threshold: 0.2 });
    const [itemRefs, itemInView] = useIntersectionObserver({ threshold: 0.2 });
    return (
        <main className='h-auto md:h-screen'>
            <motion.h1 
                ref={titleRef}
                className="text-center uppercase font-semibold text-3xl text-blue-600 px-6"
                initial="hidden"
                animate={titleInView ? "visible" : "hidden"}
                variants={titleVariants}
            >
                Perkenalkan Mentor kami
            </motion.h1>
            <motion.h2
                ref={titleRef}
                className="text-center font-base text-md text-muted-foreground pt-4 pb-12 px-6"
                initial="hidden"
                animate={titleInView ? "visible" : "hidden"}
                variants={titleVariants}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                Kami mempunyai beberapa mentor yang sudah berpengalaman di bidangnya masing-masing
            </motion.h2>
            <div className='container mx-auto h-auto lg:ml-60 xl:ml-96'>
                <ol className="relative border-s border-gray-200">
                    <motion.li
                        className="mb-10 ms-4"
                        ref={itemRefs}
                        initial="hidden"
                        animate={itemInView ? "visible" : "hidden"}
                        variants={listItemVariants}
                    >
                        <div className="absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                        <h1 className="mb-1 text-xl font-normal leading-none text-blue-600">Mentor Programming</h1>
                        <div className="items-center block p-3 sm:flex sm:gap-4">
                            <motion.div
                                className="relative w-[150px] h-[150px]"
                                variants={imageVariants}
                            >
                                <Image
                                    className="w-full h-full object-cover mt-3 mb-3 me-3 rounded-full sm:mb-0"
                                    src="/idham_mubarok.jpg"
                                    alt="picture"
                                    width={100}
                                    height={100}
                                />
                            </motion.div>
                            <div className="text-gray-600 dark:text-gray-400">
                                <h1 className="text-xl text-black font-normal">Idham Mubarok</h1>
                                <div className='flex gap-2 items-center'>
                                    <motion.div
                                        whileHover="hover"
                                        variants={iconVariants}
                                    >
                                        <Link className="mt-3 flex items-center gap-2 text-sm" href="https://www.instagram.com/idham_mubarok">
                                            <FaInstagram size={28} className='text-rose-500' />
                                        </Link>
                                    </motion.div>
                                    <motion.div
                                        whileHover="hover"
                                        variants={iconVariants}
                                    >
                                        <Link className="mt-3 flex items-center gap-2 text-sm" href="https://www.linkedin.com/in/idham-mubarok-71543b171/">
                                            <FaLinkedin size={28} className='text-blue-500' />
                                        </Link>
                                    </motion.div>
                                    <motion.div
                                        whileHover="hover"
                                        variants={iconVariants}
                                    >
                                        <Link className="mt-3 flex items-center gap-2 text-sm" href="https://web.facebook.com/idam.mubarok">
                                            <FaFacebook size={28} className='text-blue-500' />
                                        </Link>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.li>
                    <motion.li
                        className="mb-10 ms-4"
                        ref={itemRefs}
                        initial="hidden"
                        animate={itemInView ? "visible" : "hidden"}
                        variants={listItemVariants}
                    >
                        <div className="absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                        <h1 className="mb-1 text-xl font-normal leading-none text-blue-600">Mentor Graphic Design</h1>
                        <div className="items-center block p-3 sm:flex sm:gap-4">
                            <motion.div
                                className="relative w-[150px] h-[150px]"
                                variants={imageVariants}
                            >
                                <Image
                                    className="w-full h-full mt-3 mb-3 object-cover me-3 rounded-full sm:mb-0"
                                    src="/aditya_anwary.jpeg"
                                    alt="picture"
                                    width={100}
                                    height={100}
                                />
                            </motion.div>
                            <div className="text-gray-600 dark:text-gray-400">
                                <h1 className="text-xl text-black font-normal">Aditya Anwary</h1>
                                <div className='flex gap-2 items-center'>
                                    <motion.div
                                        whileHover="hover"
                                        variants={iconVariants}
                                    >
                                        <Link className="mt-3 flex items-center gap-2 text-sm" href="https://www.instagram.com/adnr_id">
                                            <FaInstagram size={28} className='text-rose-500' />
                                        </Link>
                                    </motion.div>
                                    <motion.div
                                        whileHover="hover"
                                        variants={iconVariants}
                                    >
                                        <Link className="mt-3 flex items-center gap-2 text-sm" href="https://www.linkedin.com/in/aditya-anwary-graphic-designer-a6486b1b2/">
                                            <FaLinkedin size={28} className='text-blue-500' />
                                        </Link>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.li>
                </ol>
            </div>
        </main>
    )
}
