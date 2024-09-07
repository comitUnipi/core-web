import Link from 'next/link'
import React from 'react'
import { IoClose } from 'react-icons/io5'

interface ToggleNavbarProps {
  toggleMobileMenu: () => void
  toggleContactInfo: () => void
}

const NavbarMobile: React.FC<ToggleNavbarProps> = ({
  toggleContactInfo,
  toggleMobileMenu,
}) => {
  return (
    <div className="md:hidden fixed inset-0 w-full h-full flex flex-col items-center justify-center bg-primary z-40 uppercase space-y-4 text-xl tracking-widest transition-all text-center text-white">
      <Link onClick={toggleMobileMenu} href="/tentang-kami">
        Tentang Kami
      </Link>
      <Link onClick={toggleMobileMenu} href="/kegiatan">
        Kegiatan
      </Link>
      <Link onClick={toggleMobileMenu} href="/struktur">
        Struktur
      </Link>
      <button
        onClick={toggleContactInfo}
        type="button"
        className="uppercase tracking-widest text-white"
      >
        Kontak
      </button>
      <button
        className="absolute top-0 right-0 pr-8 pt-4"
        onClick={toggleMobileMenu}
        type="button"
      >
        <IoClose />
      </button>
    </div>
  )
}

export default NavbarMobile
