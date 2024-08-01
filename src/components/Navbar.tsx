import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [showContactInfo, setShowContactInfo] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const toggleContactInfo = () => {
        setShowContactInfo(!showContactInfo);
    };

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    return (
        <div className="container mx-auto px-6 flex justify-between items-center py-4 h-32">
            <div className="flex items-center h-full">
                <Link href="/" className="text-2xl font-bold text-primary tracking-tighter h-full flex items-center">COMIT</Link>
                <div className="hidden lg:flex items-center text-xs uppercase tracking-wider ml-4">
                    <Link href="#" className="ml-8">Tentang Kami</Link>
                    <Link href="#" className="ml-8">Kegiatan</Link>
                    <Link href="#" className="ml-8">Struktur</Link>
                    <button onClick={toggleContactInfo} type="button" className="uppercase ml-8">Kontak</button>
                </div>
            </div>
            {showContactInfo && (
                <div className="z-50 bg-black bg-opacity-50 fixed inset-0 w-screen min-h-screen lg:h-screen flex justify-center items-center p-12">
                    <div className="w-full max-w-sm rounded-md bg-primary text-white text-xs uppercase shadow-2xl">
                        <div className="pt-6 pr-6 flex justify-end">
                            <button onClick={toggleContactInfo} type="button">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="px-12 pb-12 pt-2">
                            <Link href="mailto:comitunipi@gmail.com" className="flex items-center my-2">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                    </path>
                                </svg>
                                comitunipi@gmail.com
                            </Link>
                            <Link href="#" className="flex items-center my-2">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                    </path>
                                </svg>
                                comit.ipem
                            </Link>
                            <Link href="#" target="_blank"
                                className="flex items-center my-2">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                                    </path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                jln raya bitung bla bla
                            </Link>
                        </div>
                    </div>
                </div>
            )}
            <div className="flex justify-center items-center">
                <button onClick={toggleMobileMenu} className="flex lg:hidden uppercase text-xs items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16"></path>
                    </svg>
                    Menu
                </button>
            </div>
            {showMobileMenu && (
                <div className="md:hidden fixed inset-0 w-full h-full flex flex-col items-center justify-center bg-gray-100 z-40 uppercase space-y-4 text-xl tracking-widest text-center text-black">
                    <Link href="/products">Tentang Kami</Link>
                    <Link href="/about">Kegiatan</Link>
                    <Link href="/blog">Struktur</Link>
                    <button onClick={toggleContactInfo} type="button"
                        className="uppercase tracking-widest text-black">Kontak</button>
                    <button className="absolute top-0 right-0 pr-8 pt-4" onClick={toggleMobileMenu} type="button">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
};

export default Navbar;
