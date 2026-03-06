"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function OurStoryPage() {
    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    }

    return (
        <div className="min-h-screen pt-32 pb-24 px-6 max-w-4xl mx-auto font-sans">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                className="space-y-12"
            >
                {/* Header */}
                <motion.div variants={textVariants} className="text-center">
                    <h1 className="font-heading text-5xl md:text-7xl text-puja-ivory font-bold mb-6 text-glow">
                        The Origin of Our <span className="text-puja-gold">Tradition</span>
                    </h1>
                    <p className="text-xl text-puja-gold-light mt-4 tracking-wide">
                        A legacy forged in devotion, preserved through generations.
                    </p>
                </motion.div>

                {/* Hero Image */}
                <motion.div variants={textVariants} className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                    <Image
                        src="/river.jpg"
                        alt="Devotees in the river"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-puja-dark/60 to-transparent" />
                </motion.div>

                {/* Story Text */}
                <div className="prose prose-lg prose-invert text-white/80 max-w-none space-y-8">
                    <motion.p variants={textVariants} className="text-2xl font-light text-puja-ivory leading-relaxed border-l-4 border-puja-gold pl-6">
                        &quot;It started with a simple belief: the Goddess resides not just in temples, but wherever hearts unite in pure devotion.&quot;
                    </motion.p>

                    <motion.p variants={textVariants}>
                        On the sacred land where our family gathers today, our beloved grandfather once worshipped <span className="font-semibold text-puja-gold">Mata Annadata</span>, a revered form of <span className="font-semibold text-puja-gold">Maa Durga</span>, seeking blessings for prosperity, protection, and unity.
                    </motion.p>

                    <motion.p variants={textVariants}>
                        In his heart, he carried a beautiful dream — a dream of one day celebrating <span className="font-semibold text-puja-gold">Durga Puja</span> on this very land, bringing the family and the community together in devotion to the Divine Mother.
                    </motion.p>

                    <motion.div variants={textVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-12">
                        <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10">
                            <Image src="/madurgaaga.jpeg" alt="Maa Durga Photo" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                        </div>
                        <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10">
                            <Image src="/praying.jpg.jpg" alt="Person praying in front of Maa Durga" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                        </div>
                    </motion.div>

                    <motion.p variants={textVariants}>
                        But destiny had another plan. Before he could see that dream come to life, our grandfather left this world, leaving behind an unfulfilled wish that quietly lived on in our hearts.
                    </motion.p>

                    <motion.p variants={textVariants}>
                        For fifteen long years, that dream remained a silent promise within our family. Then came <span className="font-semibold text-puja-gold">2020</span>, a year when the entire world was shaken by the darkness of the <span className="font-semibold text-puja-gold">COVID-19 pandemic</span>. In those uncertain times, when fear and isolation surrounded humanity, a thought arose within us — perhaps this was the moment to honor his dream.
                    </motion.p>

                    <motion.p variants={textVariants}>
                        The path was not easy. Plans were made and postponed, doubts arose, and many times the idea seemed impossible. Yet, through every hesitation and every dilemma, the faith in Maa Durga guided us forward.
                    </motion.p>

                    <motion.p variants={textVariants}>
                        Finally, with courage, devotion, and the blessings of the Divine Mother, the dream that had waited for fifteen years came alive.
                    </motion.p>

                    <motion.p variants={textVariants}>
                        In <span className="font-semibold text-puja-gold">2020</span>, our family celebrated <span className="font-semibold text-puja-gold">Durga Puja for the very first time</span> on this sacred land — not just as a festival, but as the fulfillment of a grandfather’s cherished dream.
                    </motion.p>

                    <motion.p variants={textVariants}>
                        Since then, every year this puja stands as a tribute to his faith, his vision, and the unbreakable bond of family and devotion.
                    </motion.p>

                    <motion.div variants={textVariants} className="pt-8 border-t border-white/10 mt-12 text-center text-puja-gold-light italic text-xl">
                        What began as a dream has now become our <span className="font-semibold">tradition, our pride, and our prayer to Maa Durga.</span>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}
