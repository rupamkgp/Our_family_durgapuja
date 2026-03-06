import Hero from '@/components/Hero'
import ImageSlider from '@/components/ImageSlider'
import Timeline from '@/components/Timeline'
import DatesSchedule from '@/components/DatesSchedule'
import OurStoryPreview from '@/components/OurStoryPreview'
import BengaliChant from '@/components/BengaliChant'

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />
            <DatesSchedule />
            <ImageSlider />
            <Timeline />
            <OurStoryPreview />
            <BengaliChant />
        </div>
    )
}
