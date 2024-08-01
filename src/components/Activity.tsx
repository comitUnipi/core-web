import Image from 'next/image'
import React from 'react'

const Activity = () => {
    return (
        <div>
            <h2 className="text-center uppercase font-display text-lg md:text-3xl text-black py-12 md:py-24 px-6">Kegiatan Kami</h2>
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 lg:mb-24">
                <div className="relative h-52 md:h-72 lg:h-auto">
                    <div>
                        <Image src="/2.jpeg" alt='' fill className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                </div>
                <div className="px-6 py-12 md:p-16 lg:p-32 flex items-center justify-center order-last">
                    <div>
                        <h3 className="text-4xl mb-6 font-display text-black leading-tight">Pelatihan Rutin</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 lg:mb-24">
                <div className="relative h-52 md:h-72 lg:h-auto">
                    <div>
                        <Image src="/2.jpeg" alt='' fill className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                </div>
                <div className="px-6 py-12 md:p-16 lg:p-32 flex items-center justify-center order-last lg:order-first">
                    <div>
                        <h3 className="text-4xl mb-6 font-display text-black leading-tight">Workshop Arduino</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 lg:mb-24">
                <div className="relative h-52 md:h-72 lg:h-auto">
                    <div>
                        <Image src="/2.jpeg" alt='' fill className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                </div>
                <div className="px-6 py-12 md:p-16 lg:p-32 flex items-center justify-center order-last">
                    <div>
                        <h3 className="text-4xl mb-6 font-display text-black leading-tight">Penerimaan Anggota Baru LDKO</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activity
