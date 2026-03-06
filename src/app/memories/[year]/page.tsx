"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ArrowLeft, X, Play } from 'lucide-react'

// Dummy images for masonry
const getImages = (year: string) => [
    { id: 1, src: 'https://images.unsplash.com/photo-1541701391482-42173fec72ff?q=80&w=800&auto=format&fit=crop', tall: true },
    { id: 2, src: 'https://images.unsplash.com/photo-1601058268499-e52658b8bb88?q=80&w=800&auto=format&fit=crop', tall: false },
    { id: 3, src: 'https://images.unsplash.com/photo-1571408103348-1dbde1fe9b78?q=80&w=800&auto=format&fit=crop', tall: false },
    { id: 4, src: 'https://images.unsplash.com/photo-1541701391482-42173fec72ff?q=80&w=800&auto=format&fit=crop', tall: true },
    { id: 5, src: 'https://images.unsplash.com/photo-1601058268499-e52658b8bb88?q=80&w=800&auto=format&fit=crop', tall: false },
    { id: 6, src: 'https://images.unsplash.com/photo-1571408103348-1dbde1fe9b78?q=80&w=800&auto=format&fit=crop', tall: true },
]

export default function YearMemoriesPage() {
    const params = useParams()
    const year = params.year as string
    const images = getImages(year)

    const [selectedImg, setSelectedImg] = useState<string | null>(null)

    return (
        <div className="min-h-screen pt-32 pb-24 px-6 max-w-7xl mx-auto">
            <Link href="/memories" className="inline-flex items-center gap-2 text-puja-gold hover:text-white transition-colors mb-10 group">
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Back to all memories
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
            >
                <h1 className="font-heading text-5xl md:text-6xl text-puja-ivory font-bold mb-4 text-glow">
                    Our <span className="text-puja-gold">{year}</span> Celebration
                </h1>
                <p className="font-sans text-xl text-white/70 max-w-3xl">
                    Witness the devotion, joy, and key highlights of our grand Durga Puja from {year}.
                </p>
            </motion.div>

            {/* Video Highlight Banner placeholder */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden mb-16 group cursor-pointer border border-white/10"
            >
                <Image
                    src="https://images.unsplash.com/photo-1601058268499-e52658b8bb88?q=80&w=2070&auto=format&fit=crop"
                    alt={`${year} Video Highlight`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="w-20 h-20 bg-puja-gold/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-puja-gold/40 transition-all duration-300">
                        <Play className="w-8 h-8 text-puja-gold ml-1" fill="currentColor" />
                    </div>
                    <span className="text-puja-ivory font-sans font-semibold tracking-wider uppercase drop-shadow-md">
                        Watch Highlights
                    </span>
                </div>
            </motion.div>

            {/* Masonry Grid */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                {images.map((img, index) => (
                    <motion.div
                        key={img.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                        className={`relative w-full rounded-xl overflow-hidden cursor-pointer group break-inside-avoid ${img.tall ? 'aspect-[3/4]' : 'aspect-square'}`}
                        onClick={() => setSelectedImg(img.src)}
                    >
                        <Image
                            src={img.src}
                            alt={`Memory ${img.id}`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-puja-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                ))}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
                        onClick={() => setSelectedImg(null)}
                    >
                        <button className="absolute top-6 right-6 text-white hover:text-puja-gold p-2 bg-white/5 rounded-full backdrop-blur-md transition-colors z-50">
                            <X className="w-8 h-8" />
                        </button>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            className="relative w-full h-full max-w-6xl max-h-[90vh] rounded-lg overflow-hidden cursor-default pointer-events-none"
                            onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
                        >
                            <Image
                                src={selectedImg}
                                alt="Enlarged Memory"
                                fill
                                className="object-contain"
                                quality={100}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    )
}
