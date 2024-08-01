import { activity } from '@/constants';
import Image from 'next/image';
import React from 'react'

export default function Kegiatan() {
    return (
        <main>
            <div className="mx-auto max-w-lg text-center pt-4 pb-10 md:py-24">
                <h2 className="text-4xl mb-6 uppercase">Kegiatan Acara Kami</h2>
                <p className="text-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            {activity.map((item, index) => {
                const isEvenIndex = (index + 1) % 2 === 0;
                return (
                    <div
                        key={index}
                        className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 lg:mb-24">
                        <div className="relative h-52 md:h-72 lg:h-auto">
                            <div>
                                <Image
                                    className="absolute rounded-md inset-0 w-full h-full object-cover"
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
        </main>
    )
}
