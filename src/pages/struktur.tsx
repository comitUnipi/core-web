import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaUserCircle } from 'react-icons/fa'

export default function Struktur() {
    return (
        <main>
            <div className='h-full container mx-auto'>
                <ol className="relative border-s border-gray-200">
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <h1 className="mb-1 text-sm font-normal leading-none text-blue-600">Ketua Umum</h1>
                        <div className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                            <Image className="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0" src="https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg" alt="picture" width={150} height={150} />
                            <div className="text-gray-600 dark:text-gray-400">
                                <h1 className="text-base text-black font-normal">Arif Alfaridzi</h1>
                                <Link className="flex items-center gap-2 text-sm" href="https://www.instagram.com/arifalfridzi/">
                                    <FaInstagram className='text-rose-500' />
                                    <h2>arifalfridzi</h2>
                                </Link>
                            </div>
                        </div>
                    </li>
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <h1 className="mb-1 text-sm font-normal leading-none text-blue-600">Wakil Ketua Umum</h1>
                        <div className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                            <Image className="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0" src="https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg" alt="picture" width={150} height={150} />
                            <div className="text-gray-600 dark:text-gray-400">
                                <h1 className="text-base text-black font-normal">Andika</h1>
                                <Link className="flex items-center gap-2 text-sm" href="https://www.instagram.com/_andika_pg/">
                                    <FaInstagram className='text-rose-500' />
                                    <h2>_andika_pg</h2>
                                </Link>
                            </div>
                        </div>
                    </li>
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <div className='flex item-center gap-4'>
                            <div>
                                <h1 className="mb-1 text-sm font-normal leading-none text-blue-600">Staff Sekertaris 1</h1>
                                <div className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <Image className="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0" src="https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg" alt="picture" width={150} height={150} />
                                    <div className="text-gray-600 dark:text-gray-400">
                                        <h1 className="text-base text-black font-normal">Riska Amalia</h1>
                                        <Link className="flex items-center gap-2 text-sm" href="https://www.instagram.com/riszkha.jm/">
                                            <FaInstagram className='text-rose-500' />
                                            <h2>riszkha.jm</h2>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h1 className="mb-1 text-sm font-normal leading-none text-blue-600">Staff Sekertaris 2</h1>
                                <div className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <Image className="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0" src="https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg" alt="picture" width={150} height={150} />
                                    <div className="text-gray-600 dark:text-gray-400">
                                        <h1 className="text-base text-black font-normal">Melvinda Dewi</h1>
                                        <Link className="flex items-center gap-2 text-sm" href="https://www.instagram.com/mdkrin_/">
                                            <FaInstagram className='text-rose-500' />
                                            <h2>mdkrin_</h2>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <div className='flex item-center gap-4'>
                            <div>
                                <h1 className="mb-1 text-sm font-normal leading-none text-blue-600">Staff Bendahara 1</h1>
                                <div className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <Image className="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0" src="https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg" alt="picture" width={150} height={150} />
                                    <div className="text-gray-600 dark:text-gray-400">
                                        <h1 className="text-base text-black font-normal">Yumi Aprina</h1>
                                        <Link className="flex items-center gap-2 text-sm" href="https://www.instagram.com/yumitayo_/">
                                            <FaInstagram className='text-rose-500' />
                                            <h2>yumitayo_</h2>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h1 className="mb-1 text-sm font-normal leading-none text-blue-600">Staff Bendahara 2</h1>
                                <div className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <Image className="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0" src="https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg" alt="picture" width={150} height={150} />
                                    <div className="text-gray-600 dark:text-gray-400">
                                        <h1 className="text-base text-black font-normal">Siti Alpiah</h1>
                                        <Link className="flex items-center gap-2 text-sm" href="https://www.instagram.com/alpi__piah/">
                                            <FaInstagram className='text-rose-500' />
                                            <h2>alpi__piah</h2>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <h1 className="mb-1 text-sm font-normal leading-none text-blue-600">Staff SDM</h1>
                        <div className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                            <Image className="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0" src="https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg" alt="picture" width={150} height={150} />
                            <div className="text-gray-600 dark:text-gray-400">
                                <h1 className="text-base text-black font-normal">Arif Rhamadan</h1>
                                <Link className="flex items-center gap-2 text-sm" href="https://www.instagram.com/xarchieee/">
                                    <FaInstagram className='text-rose-500' />
                                    <h2>xarchieee</h2>
                                </Link>
                            </div>
                        </div>
                    </li>
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <h1 className="mb-1 text-sm font-normal leading-none text-blue-600">Staff Koor.Humas</h1>
                        <div className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                            <Image className="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0" src="https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg" alt="picture" width={150} height={150} />
                            <div className="text-gray-600 dark:text-gray-400">
                                <h1 className="text-base text-black font-normal">Haerul Anwar</h1>
                                <Link className="flex items-center gap-2 text-sm" href="https://www.instagram.com/haaeeruul/">
                                    <FaInstagram className='text-rose-500' />
                                    <h2>haaeeruul</h2>
                                </Link>
                            </div>
                        </div>
                    </li>

                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <div className='flex item-center gap-4'>
                            <div>
                                <h1 className="mb-1 text-sm font-normal leading-none text-blue-600">Humas Internal 1</h1>
                                <div className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <Image className="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0" src="https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg" alt="picture" width={150} height={150} />
                                    <div className="text-gray-600 dark:text-gray-400">
                                        <h1 className="text-base text-black font-normal">Dinda Angraini</h1>
                                        <Link className="flex items-center gap-2 text-sm" href="">
                                            <FaInstagram className='text-rose-500' />
                                            <h2></h2>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h1 className="mb-1 text-sm font-normal leading-none text-blue-600">Humas Internal 2</h1>
                                <div className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <Image className="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0" src="https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg" alt="picture" width={150} height={150} />
                                    <div className="text-gray-600 dark:text-gray-400">
                                        <h1 className="text-base text-black font-normal">Ita Safitri</h1>
                                        <Link className="flex items-center gap-2 text-sm" href="https://www.instagram.com/ita_safitri_/">
                                            <FaInstagram className='text-rose-500' />
                                            <h2>ita_safitri_</h2>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <div className='flex item-center gap-4'>
                            <div>
                                <h1 className="mb-1 text-sm font-normal leading-none text-blue-600">Staff Humas Eksternal 1</h1>
                                <div className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <Image className="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0" src="https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg" alt="picture" width={150} height={150} />
                                    <div className="text-gray-600 dark:text-gray-400">
                                        <h1 className="text-base text-black font-normal">Rio Pratama</h1>
                                        <Link className="flex items-center gap-2 text-sm" href="https://www.instagram.com/rpratama_1/">
                                            <FaInstagram className='text-rose-500' />
                                            <h2>rpratama_1</h2>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h1 className="mb-1 text-sm font-normal leading-none text-blue-600">Staff Humas Eksternal 2</h1>
                                <div className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <Image className="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0" src="https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg" alt="picture" width={150} height={150} />
                                    <div className="text-gray-600 dark:text-gray-400">
                                        <h1 className="text-base text-black font-normal">Miftah Fadhilah</h1>
                                        <Link className="flex items-center gap-2 text-sm" href="https://www.instagram.com/fdhllh19_/">
                                            <FaInstagram className='text-rose-500' />
                                            <h2>fdhllh19_</h2>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <div className='flex item-center gap-4'>
                            <div>
                                <h1 className="mb-1 text-sm font-normal leading-none text-blue-600">Staff Prasarana 1</h1>
                                <div className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <Image className="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0" src="https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg" alt="picture" width={150} height={150} />
                                    <div className="text-gray-600 dark:text-gray-400">
                                        <h1 className="text-base text-black font-normal">Ridho Amin</h1>
                                        <Link className="flex items-center gap-2 text-sm" href="https://www.instagram.com/do_min____/">
                                            <FaInstagram className='text-rose-500' />
                                            <h2>do_min____</h2>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h1 className="mb-1 text-sm font-normal leading-none text-blue-600">Staff Prasarana 2</h1>
                                <div className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <Image className="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0" src="https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg" alt="picture" width={150} height={150} />
                                    <div className="text-gray-600 dark:text-gray-400">
                                        <h1 className="text-base text-black font-normal">Hardika Rohmatullah</h1>
                                        <Link className="flex items-center gap-2 text-sm" href="https://www.instagram.com/namikazedika_/">
                                            <FaInstagram className='text-rose-500' />
                                            <h2>namikazedika_</h2>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <h1 className="mb-1 text-sm font-normal leading-none text-blue-600">Staff Koor.Akademik</h1>
                        <div className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                            <Image className="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0" src="https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg" alt="picture" width={150} height={150} />
                            <div className="text-gray-600 dark:text-gray-400">
                                <h1 className="text-base text-black font-normal">Maulana Firdaus N</h1>
                                <Link className="flex items-center gap-2 text-sm" href="https://www.instagram.com/doss.idoss/">
                                    <FaInstagram className='text-rose-500' />
                                    <h2>doss.idoss</h2>
                                </Link>
                            </div>
                        </div>
                    </li>

                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <div className='flex item-center gap-4'>
                            <div>
                                <h1 className="mb-1 text-sm font-normal leading-none text-blue-600">Staff Programming 1</h1>
                                <div className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <Image className="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0" src="https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg" alt="picture" width={150} height={150} />
                                    <div className="text-gray-600 dark:text-gray-400">
                                        <h1 className="text-base text-black font-normal">Sholikul Ardian</h1>
                                        <Link className="flex items-center gap-2 text-sm" href="https://www.instagram.com/s.ardian642/">
                                            <FaInstagram className='text-rose-500' />
                                            <h2>s.ardian642</h2>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h1 className="mb-1 text-sm font-normal leading-none text-blue-600">Staff Programming 2</h1>
                                <div className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <Image className="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0" src="https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg" alt="picture" width={150} height={150} />
                                    <div className="text-gray-600 dark:text-gray-400">
                                        <h1 className="text-base text-black font-normal">Mupid Ahmadiawan</h1>
                                        <Link className="flex items-center gap-2 text-sm" href="https://www.instagram.com/yuefii_/">
                                            <FaInstagram className='text-rose-500' />
                                            <h2>yuefii_</h2>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <div className='flex item-center gap-4'>
                            <div>
                                <h1 className="mb-1 text-sm font-normal leading-none text-blue-600">Staff Graphic Design 1</h1>
                                <div className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <Image className="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0" src="https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg" alt="picture" width={150} height={150} />
                                    <div className="text-gray-600 dark:text-gray-400">
                                        <h1 className="text-base text-black font-normal">Aziz Norvian</h1>
                                        <Link className="flex items-center gap-2 text-sm" href="https://www.instagram.com/aziz_novrian/">
                                            <FaInstagram className='text-rose-500' />
                                            <h2>aziz_novrian</h2>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h1 className="mb-1 text-sm font-normal leading-none text-blue-600">Staff Graphic Design 2</h1>
                                <div className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <Image className="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0" src="https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg" alt="picture" width={150} height={150} />
                                    <div className="text-gray-600 dark:text-gray-400">
                                        <h1 className="text-base text-black font-normal">Liya Safitri</h1>
                                        <Link className="flex items-center gap-2 text-sm" href="https://www.instagram.com/liyaa_sftr/">
                                            <FaInstagram className='text-rose-500' />
                                            <h2>liyaa_sftr</h2>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <div className='flex item-center gap-4'>
                            <div>
                                <h1 className="mb-1 text-sm font-normal leading-none text-blue-600">Staff Comp & Network 1</h1>
                                <div className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <Image className="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0" src="https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg" alt="picture" width={150} height={150} />
                                    <div className="text-gray-600 dark:text-gray-400">
                                        <h1 className="text-base text-black font-normal">Alfian Akmal F</h1>
                                        <Link className="flex items-center gap-2 text-sm" href="https://www.instagram.com/c1seee/">
                                            <FaInstagram className='text-rose-500' />
                                            <h2>c1seee</h2>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h1 className="mb-1 text-sm font-normal leading-none text-blue-600">Staff Comp & Network 2</h1>
                                <div className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <Image className="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0" src="https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg" alt="picture" width={150} height={150} />
                                    <div className="text-gray-600 dark:text-gray-400">
                                        <h1 className="text-base text-black font-normal">Maulana Laksana P</h1>
                                        <Link className="flex items-center gap-2 text-sm" href="https://www.instagram.com/maulanalp/">
                                            <FaInstagram className='text-rose-500' />
                                            <h2>maulanalp</h2>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <div className='flex item-center gap-4'>
                            <div>
                                <h1 className="mb-1 text-sm font-normal leading-none text-blue-600">Staff Kominfo 1</h1>
                                <div className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <Image className="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0" src="https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg" alt="picture" width={150} height={150} />
                                    <div className="text-gray-600 dark:text-gray-400">
                                        <h1 className="text-base text-black font-normal">Maulidya Rabeca</h1>
                                        <Link className="flex items-center gap-2 text-sm" href="https://www.instagram.com/maulidyarabecaaaa/">
                                            <FaInstagram className='text-rose-500' />
                                            <h2>maulidyarabecaaaa</h2>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h1 className="mb-1 text-sm font-normal leading-none text-blue-600">Staff Kominfo 2</h1>
                                <div className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <Image className="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0" src="https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg" alt="picture" width={150} height={150} />
                                    <div className="text-gray-600 dark:text-gray-400">
                                        <h1 className="text-base text-black font-normal">Sri Astuti A</h1>
                                        <Link className="flex items-center gap-2 text-sm" href="https://www.instagram.com/alwyntya/">
                                            <FaInstagram className='text-rose-500' />
                                            <h2>alwyntya</h2>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ol>
            </div>
        </main>
    )
}
