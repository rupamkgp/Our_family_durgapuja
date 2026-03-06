"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const years = [
    { year: '2026', img: '' },
    { year: '2025', img: '/puja2025/1000014566.jpg' },
    { year: '2024', img: '/puja2024/DSC_0971.JPG' },
    { year: '2023', img: '/puja2023/IMG_20231021_181254_1.jpg' },
    { year: '2022', img: '/puja2022/IMG20221001200203.jpg' },
    { year: '2021', img: '/puja2021/DSC_0137.JPG' },
    { year: '2020', img: '/puja2020/WhatsApp Image 2021-09-25 at 11.15.56 AM.jpeg' },
]

export default function MemoriesIndexPage() {
    return (
        <div className="min-h-screen pt-32 pb-24 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h1 className="font-heading text-5xl md:text-6xl text-puja-ivory font-bold mb-6 text-glow">
                    Our <span className="text-puja-gold">Memories</span>
                </h1>
                <p className="font-sans text-xl text-white/70 max-w-2xl mx-auto">
                    A timeless collection of our devotion, joy, and family togetherness through the years.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {years.map((item, index) => (
                    <motion.div
                        key={item.year}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                        <Link href={`/memories/${item.year}`} className="block relative aspect-[4/3] rounded-2xl overflow-hidden group">
                            {item.img ? (
                                <Image
                                    src={item.img}
                                    alt={`${item.year} Memories`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            ) : (
                                <div className="absolute inset-0 bg-puja-dark/40 flex items-center justify-center">
                                    <div className="w-16 h-16 border-2 border-puja-gold/20 rounded-full animate-pulse-slow" />
                                </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-puja-dark via-puja-dark/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="font-heading text-4xl font-bold text-puja-ivory translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    {item.year}
                                </span>
                            </div>
                            {item.year === '2026' && (
                                <div className="absolute top-4 right-4 z-10">
                                    <span className="bg-puja-gold text-puja-dark px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                                        Upcoming
                                    </span>
                                </div>
                            )}
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
