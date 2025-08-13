'use client'
import { CardComponent } from '../components/Card'
import { Text } from '../components/Text'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

export default function Work() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Navbar />
      <section
        id="projects"
        className="mx-auto mt-20 max-w-6xl px-6 pb-20 text-center"
      >
        <Text content="Projects" $size="medium" $weight="bolder" />
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href="https://personal-finance-track-six.vercel.app/"
            target="_blank"
          >
            <CardComponent
              shadow="large"
              src="pft.png"
              title="Personal Finance Tracker"
              description="Tech: React, Next.js, Supabase, Tailwind CSS Features: Expense tracking, income monitoring, detailed analytics Achievement Unlocked: Finally knowing where my money goes!"
              footer="Teaching money management, one expense at a time"
            />
          </a>
          <a href="https://github.com/josedsegurav/musicapp" target="_blank">
            <CardComponent
              shadow="large"
              src="playlist.png"
              title="Your Music App"
              description="Tech: React, Next.js, TypeScript, Spotify API
                            Features: OAuth 2.0 authentication, real-time music data, integrated player
                            Fun Fact: Discovered I listen to way too much Final Fantasy soundtracks while coding"
              footer="Because who doesn't want to stalk their own Spotify habits?"
            />
          </a>
          <a
            href="https://github.com/josedsegurav/ecommercepercec"
            target="_blank"
          >
            <CardComponent
              shadow="large"
              src="pec.png"
              title="Percusion Ecuador Ecommerce"
              description="Tech: Ruby, Rails, React
                            Features: ActiveAdmin, ActiveStorage, Kaminari, Bootstrap"
              footer="For a fun experience while shopping for drum accesories"
            />
          </a>
        </div>
      </section>
      <Footer />
    </div>
  )
}
