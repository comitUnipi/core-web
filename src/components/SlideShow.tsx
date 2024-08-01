import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Slideshow = () => {
    const [current, setCurrent] = useState(0);
    const items = [
        {
            image: "/1.jpeg",
        },
        {
            image: "/2.jpeg",
        },
        {
            image: "/3.jpeg",
        },
    ];

    const prevSlide = () => {
        setCurrent(current > 0 ? current - 1 : items.length - 1);
    };

    const nextSlide = () => {
        setCurrent(current < items.length - 1 ? current + 1 : 0);
    };

    return (
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 py-12 md:px-12 md:py-32 flex items-center justify-center">
                <div className="max-w-sm">
                    <h1 className="text-5xl mb-6 font-display text-primary font-semibold leading-tight">Community of Information Technology</h1>
                    <p className='text-muted-foreground'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLScQTo1aPq0ejEg0lNiusVxI1FRk995zjQh05d5JlFWLK26TKA/viewform" className="flex items-center mt-8 text-sm text-white font-semibold">
                        <div className='bg-primary rounded-md flex items-center py-2 px-4 hover:scale-110 hover:opacity-80'>
                            Gabung Sekarang
                        </div>
                    </Link>
                </div>
            </div>
            <div className="lg:col-span-7 relative h-52 md:h-72 lg:h-auto">
                <div>
                    <Image src={items[current].image} className="absolute inset-0 w-full h-full rounded-md object-cover" alt="Slideshow" fill />
                </div>
                <div className="absolute bottom-0 right-0 grid grid-cols-2">
                    <button className="p-4 md:p-6 rounded-tl-md bg-white hover:bg-gray-100 hover:opacity-80" onClick={prevSlide}>
                        <IoIosArrowBack />
                    </button>
                    <button className="p-4 md:p-6 bg-white hover:bg-gray-100 hover:opacity-80" onClick={nextSlide}>
                        <IoIosArrowForward />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Slideshow;
