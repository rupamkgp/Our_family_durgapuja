"use client"

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Calendar } from 'lucide-react'

const timelineData = [
    { year: '2020', title: 'The Beginning', desc: 'Our first family puja celebration.' },
    { year: '2021', title: 'Growing Together', desc: 'Expanding traditions and rituals.' },
    { year: '2022', title: 'Grand Celebration', desc: 'A year of elaborate decorations.' },
    { year: '2023', title: 'Cultural Revival', desc: 'Focusing on heritage and arts.' },
    { year: '2024', title: '5 Years Completion', desc: 'Marking a special milestone.' },
    { year: '2025', title: 'Legacy Continues', desc: 'Passing the torch to the next gen.' },
    { year: '2026', title: 'Upcoming Puja', desc: 'Join us for this year’s festivities.' },
]

export default function Timeline() {
    const containerRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    })

    // Smooth drawing of the vertical line
    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

    return (
        <section
            ref={containerRef}
            className="py-24 bg-gradient-to-br from-[#D9252B] to-[#FF7A7F] relative overflow-hidden"
        >
            <div className="max-w-6xl mx-auto px-6 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="font-heading text-4xl md:text-5xl text-puja-gold mb-4 font-bold tracking-wide">
                        Our Puja Journey
                    </h2>
                    <p className="font-sans text-puja-ivory/70 max-w-2xl mx-auto">
                        A visual walk through the history, devotion, and togetherness of our family over the years.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Timeline Line Base */}
                    <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-white/10 rounded-full" />

                    {/* Animated Timeline Line */}
                    <motion.div
                        className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-puja-gold via-puja-red to-puja-gold rounded-full origin-top"
                        style={{ scaleY }}
                    />

                    <div className="space-y-16">
                        {timelineData.map((item, index) => {
                            const isEven = index % 2 === 0
                            return (
                                <div
                                    key={item.year}
                                    className={`relative flex flex-col md:flex-row items-center justify-between group ${isEven ? "md:flex-row-reverse" : ""
                                        }`}
                                >
                                    {/* Empty space for alternating layout */}
                                    <div className="hidden md:block w-1/2 px-12" />

                                    {/* Node Marker */}
                                    <motion.div
                                        initial={{ scale: 0, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
                                        className="absolute left-[12px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 bg-puja-dark border-4 border-puja-gold rounded-full z-10 
                      group-hover:scale-150 group-hover:bg-puja-gold group-hover:shadow-[0_0_20px_rgba(255,215,0,0.8)] transition-all duration-300"
                                    />

                                    {/* Content Card */}
                                    <motion.div
                                        initial={{ opacity: 0, x: isEven ? 50 : -50, y: 20 }}
                                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                        className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? "md:pr-16 text-left md:text-right" : "md:pl-16 text-left"
                                            }`}
                                    >
                                        <Link href={`/memories/${item.year}`} className="block">
                                            <div className="glass-effect p-6 rounded-2xl hover:bg-white/10 transition-colors border border-white/5 hover:border-puja-gold/30 
                        transform hover:-translate-y-2 duration-300 relative overflow-hidden group/card shadow-lg"
                                            >
                                                {/* Glow effect on hover */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-puja-gold/0 via-puja-gold/5 to-puja-gold/0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 translate-x-[-100%] group-hover/card:translate-x-[100%]" />

                                                <div className={`flex items-center gap-3 mb-2 ${isEven ? "md:justify-end" : ""}`}>
                                                    <Calendar className="w-5 h-5 text-puja-gold" />
                                                    <span className="font-heading text-3xl font-bold text-puja-ivory text-glow">
                                                        {item.year}
                                                    </span>
                                                </div>
                                                <h3 className="font-sans text-xl font-semibold text-puja-gold-light mb-2">
                                                    {item.title}
                                                </h3>
                                                <p className="font-sans text-white/60 text-sm">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </Link>
                                    </motion.div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
