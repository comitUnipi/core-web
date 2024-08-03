import { activity } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Activity = () => {
    return (
        <div className='mt-24'>
            <h2 className="text-center uppercase font-display text-4xl text-black py-12 md:py-24 px-6">Kegiatan Kami</h2>
            {activity.map((item, index) => {
                const isEvenIndex = (index + 1) % 2 === 0;
                return (
                    <div
                        key={index}
                        className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 lg:mb-24">
                        <div className="relative h-52 md:h-72 lg:h-auto">
                            <div>
                                <Image
                                    className="absolute inset-0 w-full h-full object-cover"
                                    src={item.img}
                                    alt={item.title}
                                    fill />
                            </div>
                        </div>
                        <div className={
                            `px-6 py-12 md:p-16 lg:p-32 flex items-center justify-center 
                            ${isEvenIndex ?
                                'order-last md:order-first' : 'order-last'}`}>
                            <div>
                                <h3
                                    className="text-4xl mb-6 font-display text-black leading-tight">
                                    {item.title}
                                </h3>
                                <p className='text-muted-foreground'>{item.desc}</p>
                            </div>
                        </div>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default Activity