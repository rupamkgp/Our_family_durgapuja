"use client"

import { motion } from 'framer-motion'
import { Calendar, Droplet, Music, Smile, Sun, CheckCircle } from 'lucide-react'

const events = [
    { id: 1, title: 'Sandhi Puja', time: '11:45 PM - 12:30 AM', desc: 'The sacred transition from Ashtami to Navami, marked by lighting 108 diyas and offering 108 lotus flowers.', icon: Sun },
    { id: 2, title: 'Pushpanjali', time: '8:30 AM (Daily)', desc: 'Morning offering of flowers to Maa Durga by the entire family, accompanied by chanting of mantras.', icon: CheckCircle },
    { id: 3, title: 'Bhog Distribution', time: '1:30 PM (Daily)', desc: 'Community feast featuring traditional Khichuri, Labra, Chutney, and Payesh served to all guests.', icon: Droplet },
    { id: 4, title: 'Cultural Program', time: '7:00 PM (Saptami & Ashtami)', desc: 'Evening entertainment featuring dance, music, and recitations performed by family members.', icon: Music },
    { id: 5, title: 'Sindoor Khela', time: '4:00 PM (Dashami)', desc: 'Married women smear vermilion on each other, celebrating womanhood and praying for long married lives.', icon: Smile },
    { id: 6, title: 'Visarjan', time: '6:30 PM (Dashami)', desc: 'The emotional farewell as Maa Durga returns to Kailash, concluding with gathering at the ghats.', icon: Droplet },
]

export default function EventsPage() {
    return (
        <div className="min-h-screen pt-32 pb-24 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h1 className="font-heading text-5xl md:text-6xl text-puja-ivory font-bold mb-6 text-glow">
                    Puja <span className="text-puja-gold">Events</span>
                </h1>
                <p className="font-sans text-xl text-white/70 max-w-2xl mx-auto">
                    Join us for the rituals, celebrations, and cultural moments that define our puja.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events.map((event, index) => {
                    const Icon = event.icon
                    return (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                            className="glass-effect p-8 rounded-2xl hover:bg-white/10 transition-colors border border-white/5 hover:border-puja-gold/30 
                        transform hover:-translate-y-2 duration-300 relative overflow-hidden group shadow-lg"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-puja-gold/5 blur-3xl group-hover:bg-puja-gold/10 transition-colors duration-500 rounded-full" />

                            <div className="flex items-center gap-4 mb-6 relative z-10">
                                <div className="w-12 h-12 rounded-full bg-puja-red/20 flex items-center justify-center border border-puja-red/50 text-puja-gold group-hover:scale-110 transition-transform duration-300">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-heading text-2xl font-semibold text-puja-ivory">{event.title}</h3>
                                    <div className="flex items-center gap-2 text-sm text-puja-gold-light mt-1">
                                        <Calendar className="w-3 h-3" />
                                        <span>{event.time}</span>
                                    </div>
                                </div>
                            </div>

                            <p className="font-sans text-white/70 leading-relaxed relative z-10">
                                {event.desc}
                            </p>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}
