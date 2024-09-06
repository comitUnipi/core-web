import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

export const Mentoring = () => {
    return (
        <main>
            <h2 className="text-center uppercase font-semibold text-3xl text-blue-600 py-12 md:py-24 px-6">Perkenalkan Mentor kami</h2>
            <div className='container mx-auto h-[400px] flex item-center'>
                <ol className="items-center sm:flex">
                    <li className="relative mb-6 sm:mb-0">
                        <div className="flex items-center">
                            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                <FaUserCircle />
                            </div>
                            <h2 className='px-3'>Programing</h2>
                            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                        </div>
                        <div className="mt-3 sm:pe-8">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Idham Mubarok</h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Mentor Programing</time>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
                        </div>
                    </li>
                    <li className="relative mb-6 sm:mb-0">
                        <div className="flex items-center">
                            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                <FaUserCircle />
                            </div>
                            <h2 className='px-3'>Graphic Desainer</h2>
                            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                        </div>
                        <div className="mt-3 sm:pe-8">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Aditya Anwary</h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Mentor Graphic Designer</time>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
                        </div>
                    </li>
                    <li className="relative mb-6 sm:mb-0">
                        <div className="flex items-center">
                            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                <FaUserCircle />
                            </div>
                            <h2 className='px-3'>Comp & Network</h2>
                            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                        </div>
                        <div className="mt-3 sm:pe-8">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.3.0</h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 5, 2022</time>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
                        </div>
                    </li>
                </ol>
            </div>
        </main>
    )
}
