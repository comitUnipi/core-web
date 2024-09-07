import { mentor } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Mentor = () => {
  return (
    <div className="mb-40">
      <div className="mx-auto max-w-lg text-center py-24">
        <h2 className="text-4xl mb-6 uppercase">Mentor Kami</h2>
        <p className="text-md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-4 px-4">
        {mentor.map((item, index) => (
          <div key={index}>
            <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-md shadow-blue-400 rounded-xl p-5">
              <div className="mx-auto">
                <Image
                  className="object-cover shadow-xl rounded-md"
                  src={item.img}
                  alt={`profile ${item.name}`}
                  width={200}
                  height={150}
                />
              </div>
              <div className="text-center mt-5">
                <p className="text-xl sm:text-2xl font-semibold text-gray-900">
                  {item.name}
                </p>
                <p className="text-xs sm:text-base text-gray-800 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
                  {item.desc}
                </p>
                <div className="flex align-center justify-center mt-4">
                  {item.sosmed.map((item, index) => (
                    <Link
                      key={index}
                      className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
                      href={item.href}
                    >
                      {item.icon && <item.icon />}
                      <span className="sr-only">{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
