import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

export const Mentoring = () => {
    return (
        <main>
            <h1 className="text-center uppercase font-semibold text-3xl text-blue-600  px-6">Perkenalkan Mentor kami</h1>
            <h2 className="text-center font-base text-md text-muted-foreground pt-4 pb-12 px-6">Kami mempunyai beberapa mentor yang sudah berpengalaman di bidangnya masing-masing</h2>
            <div className='container mx-auto h-auto lg:ml-60 xl:ml-96'>
                <ol className="relative border-s border-gray-200">
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                        <h1 className="mb-1 text-xl font-normal leading-none text-blue-600">Mentor Programming</h1>
                        <div className="items-center block p-3 sm:flex sm:gap-4">
                            <Image className="w-[150px] h-[150px] object-cover mt-3 mb-3 me-3 rounded-full sm:mb-0" src="/idham_mubarok.jpg" alt="picture" width={100} height={100} />
                            <div className="text-gray-600 dark:text-gray-400">
                                <h1 className="text-xl text-black font-normal">Idham Mubarok</h1>
                                <div className='flex gap-2 items-center'>
                                    <Link className="mt-3 hover:scale-110 flex items-center gap-2 text-sm" href="https://www.instagram.com/idham_mubarok">
                                        <FaInstagram size={28} className='text-rose-500' />
                                    </Link>
                                    <Link className="mt-3 hover:scale-110 flex items-center gap-2 text-sm" href="https://www.linkedin.com/in/idham-mubarok-71543b171/">
                                        <FaLinkedin size={28} className='text-blue-500' />
                                    </Link>
                                    <Link className="mt-3 hover:scale-110 flex items-center gap-2 text-sm" href="https://web.facebook.com/idam.mubarok">
                                        <FaFacebook size={28} className='text-blue-500' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                        <h1 className="mb-1 text-xl font-normal leading-none text-blue-600">Mentor Graphic Design</h1>
                        <div className="items-center block p-3 sm:flex sm:gap-4">
                            <Image className="w-[150px] h-[150px] mt-3 mb-3 object-cover me-3 rounded-full sm:mb-0" src="/aditya_anwary.jpeg" alt="picture" width={100} height={100} />
                            <div className="text-gray-600 dark:text-gray-400">
                                <h1 className="text-xl text-black font-normal">Aditya Anwary</h1>
                                <div className='flex gap-2 items-center'>
                                    <Link className="mt-3 hover:scale-110 flex items-center gap-2 text-sm" href="https://www.instagram.com/adnr_id">
                                        <FaInstagram size={28} className='text-rose-500' />
                                    </Link>
                                    <Link className="mt-3 hover:scale-110 flex items-center gap-2 text-sm" href="https://www.linkedin.com/in/aditya-anwary-graphic-designer-a6486b1b2/">
                                        <FaLinkedin size={28} className='text-blue-500' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </li>
                </ol>
            </div>
        </main>
    )
}
