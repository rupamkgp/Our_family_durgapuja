import AboutUs from '@/components/AboutUs'

export const metadata = {
    title: 'About Us | Our Family Durga Puja',
    description: 'A prayer and dedication to Maa Durga.',
}

export default function AboutUsPage() {
    return (
        <main className="min-h-screen bg-puja-dark selection:bg-puja-gold/30 selection:text-puja-ivory">
            <AboutUs />
        </main>
    )
}
