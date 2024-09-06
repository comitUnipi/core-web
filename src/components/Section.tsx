import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Section = () => {
    return (
        <div>
            <div className="-mt-24 pt-24 w-full h-screen bg-white flex flex-wrap">
                <div className="md:-px-0 w-full md:w-4/12 bg-white flex items-center justify-start md:justify-end">
                    <div className="shadow-xl md:shadow-none rounded-md px-12 py-12 md:pl-0 md:pr-24 bg-white md:-mr-64 relative z-10">
                        <h1 className="mb-8 text-2xl md:text-5xl text-primary text-bold uppercase font-bold tracking-widest leading-tight">
                            Community of<br />Information<br />Technology
                        </h1>
                        <h2 className="text-lg md:text-xl font-serif text-muted-foreground">Semangat COMIT, Salam Teknologi.</h2>
                        <Link href="https://docs.google.com/forms/d/e/1FAIpQLScQTo1aPq0ejEg0lNiusVxI1FRk995zjQh05d5JlFWLK26TKA/viewform" className="flex items-center mt-8 text-sm text-white font-semibold">
                            <div className='bg-primary rounded-md flex items-center py-2 px-4 hover:scale-110 hover:opacity-80'>
                                Gabung Sekarang
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="-mt-20 md:mt-0 w-full md:flex-1">
                    <Image src="/banner.JPG" className="w-full h-full rounded-md brightness-75 object-cover" alt="banner" width={1280} height={720} />
                </div>

            </div>
        </div>
    )
}
