import { activity } from '@/constants';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

export default function Kegiatan() {
    return (
        <main>
            <div className="mx-auto max-w-lg text-center pt-4 pb-10 md:py-24">
                <motion.h2
                    className="text-4xl text-blue-600 font-semibold mb-6 uppercase"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Kegiatan Acara Kami
                </motion.h2>
                <motion.p
                    className="text-md text-muted-foreground"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    Kami dengan bangga mempersembahkan berbagai kegiatan dan acara yang telah kami selenggarakan. Setiap acara dirancang untuk memberikan pengalaman yang berkesan dan penuh makna.
                </motion.p>
            </div>
            {activity.map((item, index) => {
                const isEvenIndex = (index + 1) % 2 === 0;
                return (
                    <motion.div
                        key={index}
                        className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 lg:mb-24"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className="relative h-52 md:h-72 lg:h-auto">
                                <Image
                                    className="absolute rounded-md shadow-sm shadow-blue-400 inset-0 w-full h-full object-cover"
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    priority
                                />
                        </div>
                        <div className={
                            `px-6 py-12 md:p-16 lg:p-32 flex items-center justify-center 
                            ${isEvenIndex ? 'order-last md:order-first' : 'order-last'}`}>
                            <div>
                                <motion.h3
                                    className="text-4xl mb-6 font-display text-black leading-tight"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {item.title}
                                </motion.h3>
                                <motion.p
                                    className='text-muted-foreground'
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    {item.desc}
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </main>
    );
}
