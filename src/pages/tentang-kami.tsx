import Image from 'next/image'
import React from 'react'

export default function About() {
    return (
        <main>
            <div className='h-full'>
                <div className='px-6 flex items-center justify-center'>
                    <div className='max-w-2xl'>
                        <div className='flex items-center gap-4'>
                            <div>
                                <Image src='/comitHello.png' alt='logo' width={100} height={100} className='w-full h-full' />
                            </div>
                            <h3
                                className=" text-2xl md:text-4xl pt-4 mb-6 font-semibold text-blue-600 leading-tight">
                                Tentang Kami
                            </h3>
                        </div>
                        <p className='text-muted-foreground text-justify'>Sebagai mahasiswa yang sadar akan panggilan ilmu pengetahuan dan perkembangan teknologi serta mengupayakan penerapan etika Ilmu Pengetahuan dan Tri Dharma Perguruan Tinggi. Menyadari akan tanggung jawab itu maka kami mahasiswa Kampus Insan Pembangunan berkewajiban membina diri agar menjadi bangsa yang memiliki kemampuan akademik dan profesi, sehingga dapat menerapkan ilmu pengetahuan dan mengembangkan teknologi. Oleh karena itu kami menghimpun diri dalam suatu wadah Organisasi dibidang Teknologi, dengan nama “ Community of Information Technology “ pada tanggal 14 Februari 2010.</p>
                        <div className='mt-10'>
                            <h3
                                className=" text-2xl md:text-4xl pt-4 mb-6 font-display text-black leading-tight">
                                Visi Kami
                            </h3>

                            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                                <li className="mb-3 ms-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <p className='text-muted-foreground text-justify'>Melaksanakan berbagai kegiatan yang bermanfaat dan yang bernilai positif.</p>
                                </li>
                                <li className="mb-3 ms-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <p className='text-muted-foreground text-justify'>Menjalin kerjasama dengan berbagai pihak dalam bidang teknologi informasi.</p>
                                </li>
                            </ol>


                            
                            
                        </div>
                        <div className='mt-10'>
                            <h3
                                className=" text-2xl md:text-4xl pt-4 mb-6 font-display text-black leading-tight">
                                Misi Kami
                            </h3>
                            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                                <li className="mb-3 ms-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <p className='text-muted-foreground text-justify'>Menghasilkan anggota COMIT yang handal dalam dunia informasi.</p>
                                </li>
                                <li className="mb-3 ms-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <p className='text-muted-foreground text-justify'>Memajukan dan mengembangkan almamater.</p>
                                </li>
                                <li className="mb-3 ms-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <p className='text-muted-foreground text-justify'>Menjadikan organisasi COMIT, sebagai organisasi yang unggul baik secara akademis maupun non akademis.</p>
                                </li>
                            </ol>
                            
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
