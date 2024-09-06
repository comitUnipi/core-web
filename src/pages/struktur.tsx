import Image from 'next/image'
import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

export default function Struktur() {
    return (
        <main>
            <div className='h-screen container mx-auto'>
                <ol className="relative border-s border-gray-200">
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <h1 className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Ketua Umum</h1>
                        <a href="#" className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                            <Image className="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0" src="/pelatihan.jpeg" alt="picture" width={150} height={150} />
                            <div className="text-gray-600 dark:text-gray-400">
                                <div className="text-base text-black font-normal">Arif</div>
                            </div>
                        </a>
                    </li>
                </ol>
            </div>
        </main>
    )
}
