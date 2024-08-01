import { navitems } from '@/constants'
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaInstagram } from 'react-icons/fa'

export const Footer = () => {
    return (
        <div>
            <div className="text-center py-12 mt-12 bg-primary text-xs text-white uppercase">
                <div className="w-full text-center">
                    <h4 className='text-2xl'>Community of information technology</h4>
                    <div className="flex justify-center items-center gap-4 mt-4">
                        {navitems.map((item, index) => (
                            <li
                                key={index}
                                className='hover:underline'>
                                <Link href={item.href}>{item.title}</Link>
                            </li>
                        ))}
                    </div>
                </div>
                <div className="w-full sm:w-auto flex items-center justify-center px-6 mt-6 mb-5">
                    <Link href="https://www.instagram.com/comit.ipem" className="mx-2">
                        <FaInstagram size={24} />
                    </Link>
                    <Link href="https://github.com/comitUnipi" className="mx-2">
                        <FaGithub size={24} />
                    </Link>
                </div>
                <div>Copyright &copy; 2024 comit</div>
            </div>
        </div>
    )
}
