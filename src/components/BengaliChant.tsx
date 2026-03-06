"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function BengaliChant() {
    const containerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(containerRef, { once: true, margin: "-100px" })

    return (
        <section ref={containerRef} className="py-24 bg-gradient-to-br from-[#D9252B] to-[#FF7A7F] relative border-t border-white/5">
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="bg-black/20 backdrop-blur-md p-10 md:p-16 rounded-3xl border border-white/10 shadow-2xl"
                >
                    <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-puja-gold font-bold tracking-wide text-glow drop-shadow-xl mb-10">
                        বলো দুর্গা মা কি জয়!
                    </h2>

                    <div className="w-32 h-1 bg-gradient-to-r from-transparent via-puja-gold to-transparent mx-auto mb-10 opacity-50" />

                    <div className="space-y-8">
                        <p className="font-sans text-2xl md:text-3xl lg:text-4xl text-puja-ivory leading-relaxed font-semibold tracking-wide">
                            আসছে বছর আবার হবে,
                            <br /><br />
                            বছর বছর আবার মা-কে আনতে হবে।
                        </p>

                        <p className="font-sans text-xl md:text-2xl text-white/90 leading-relaxed font-medium mt-8">
                            মা দুর্গার আশীর্বাদে ভরে উঠুক সকলের জীবন।
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
