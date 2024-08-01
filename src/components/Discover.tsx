import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Discover = () => {
    return (
        <div>
            <div className="py-20 mt-12">
                <div className="bg-primary relative">
                    <div className="relative z-10 text-white text-center px-6 md:px-12 py-24">
                        <h3 className="font-semibold text-2xl">Gabung Bersama Kami</h3>
                        <p className="mt-6">Pelajari lebih dalam tentang ilmu teknologi dan komputer bersama kami</p>
                        <Link href="/" className="inline-block bg-blue-500 rounded-md uppercase text-sm py-4 px-6 mt-8 hover:opacity-75">Gabung Sekarang</Link>
                    </div>
                    {/* <Image src="" className="absolute inset-0 w-full h-full object-cover opacity-75" alt="" fill /> */}
                </div>
            </div>
        </div>
    )
}
