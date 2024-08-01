import React, { useState } from 'react'
import Link from 'next/link'
import ToggleNavbar from './ToggleNavbar'
import NavbarMobile from './NavbarMobile';
import { contactitems, navitems } from '@/constants'
import { IoMdMenu } from 'react-icons/io';

const Navbar: React.FC = () => {
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
                <Link
                    href="/"
                    className="text-2xl font-bold text-primary tracking-tighter h-full flex items-center">COMIT</Link>
                <div className="hidden lg:flex items-center text-xs uppercase tracking-wider ml-4">
                    {navitems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="ml-8 hover:underline hover:scale-110 transition-all">
                            {item.title}
                        </Link>
                    ))}
                    <button onClick={toggleContactInfo} type="button" className="uppercase ml-8 hover:underline hover:scale-110 transition-all">Kontak</button>
                </div>
            </div>
            <ToggleNavbar
                show={showContactInfo}
                toggleFunction={toggleContactInfo}>
                {contactitems.map((item, index) => (
                    <Link key={index} href={item.href} className="flex items-center gap-2 my-2">
                        {item.icon && <item.icon />}
                        {item.title}
                    </Link>
                ))}
            </ToggleNavbar>
            <div className="flex justify-center items-center">
                <button
                    onClick={toggleMobileMenu}
                    className="flex lg:hidden uppercase text-md rounded-md border border-black p-2 items-center">
                    <IoMdMenu />
                </button>
            </div>
            {showMobileMenu && (
                <NavbarMobile
                    toggleMobileMenu={toggleMobileMenu}
                    toggleContactInfo={toggleContactInfo} />
            )}
        </div>
    );
};

export default Navbar
