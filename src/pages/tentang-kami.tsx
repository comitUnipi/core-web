import Image from 'next/image'
import React from 'react'

export default function About() {
    return (
        <main>
            <div className='h-screen'>
                <div className='px-6 py-12 md:p-16 lg:p-32 flex items-center justify-center'>
                    <div className='max-w-2xl'>
                        <div className='flex items-center gap-4'>
                            <div>
                                <Image src='/comitHello.png' alt='logo' width={100} height={100} className='w-full h-full' />
                            </div>
                            <h3
                                className=" text-2xl md:text-4xl pt-4 mb-6 font-display text-black leading-tight">
                                Tentang Kami
                            </h3>
                        </div>
                        <p className='text-muted-foreground text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat harum, sint inventore sed dignissimos non nisi, veritatis facilis aliquid illo voluptatum. Quaerat molestias magnam laudantium totam corrupti eveniet nulla veritatis!</p>
                        <div className='mt-10'>
                            <h3
                                className=" text-2xl md:text-4xl pt-4 mb-6 font-display text-black leading-tight">
                                Visi Kami
                            </h3>
                            <p className='text-muted-foreground text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat harum, sint inventore sed dignissimos non nisi, veritatis facilis aliquid illo voluptatum. Quaerat molestias magnam laudantium totam corrupti eveniet nulla veritatis!</p>
                        </div>
                        <div className='mt-10'>
                            <h3
                                className=" text-2xl md:text-4xl pt-4 mb-6 font-display text-black leading-tight">
                                Misi Kami
                            </h3>
                            <p className='text-muted-foreground text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat harum, sint inventore sed dignissimos non nisi, veritatis facilis aliquid illo voluptatum. Quaerat molestias magnam laudantium totam corrupti eveniet nulla veritatis!</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
