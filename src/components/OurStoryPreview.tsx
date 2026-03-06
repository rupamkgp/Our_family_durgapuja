"use client"

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { BookOpen } from 'lucide-react'

export default function OurStoryPreview() {
    const containerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(containerRef, { once: true, margin: "-100px" })

    return (
        <section ref={containerRef} className="py-24 bg-gradient-to-br from-[#D9252B] to-[#FF7A7F] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:w-1/2 relative"
                    >
                        {/* Decorative elements */}
                        <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-puja-gold rounded-tl-3xl z-0" />
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-puja-gold rounded-br-3xl z-0" />

                        <div className="relative z-10 rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
                            <Image
                                src="/madurgaaga.jpeg"
                                alt="Family Durga Puja History"
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-puja-dark/80 via-transparent to-transparent" />
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="w-full lg:w-1/2 text-center lg:text-left"
                    >
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-puja-red/20 text-puja-gold mb-8 mx-auto lg:mx-0">
                            <BookOpen className="w-8 h-8" />
                        </div>

                        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-puja-ivory mb-8 font-bold leading-tight">
                            Our <span className="text-puja-gold">Story</span>
                        </h2>

                        <p className="font-sans text-lg text-white/80 leading-relaxed mb-8 max-w-2xl">
                            What started as a small gathering of devotion decades ago has blossomed into a grand, time-honored tradition. Our family Durga Puja is not just a festival; it's a testament to our roots, a celebration of togetherness, and a legacy of love passed down through generations.
                        </p>
                        <p className="font-sans text-lg text-white/80 leading-relaxed mb-10 max-w-2xl">
                            Every autumn, our ancestral home echoes with the sound of dhak, the fragrance of shiuli flowers, and the joy of a reunited family welcoming Maa Durga.
                        </p>

                        <Link
                            href="/our-story"
                            className="inline-flex items-center gap-2 group relative px-8 py-4 bg-transparent border border-puja-gold text-puja-gold font-sans font-semibold rounded-full overflow-hidden transition-all duration-300 hover:text-puja-dark"
                        >
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-puja-dark">
                                Read Full Story
                            </span>
                            <div className="absolute inset-0 bg-puja-gold translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        </Link>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
