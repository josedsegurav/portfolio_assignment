'use client'
import { HeroImageWithHydration } from './components/herohydratedcomponent'
import { useRouter } from 'next/navigation'
import { Table } from './components/Table'
import { TableHeader } from './components/Table/TableHeader'
import { TableRow } from './components/Table/TableRow'
import { TableCell } from './components/Table/TableCell'
import Navbar from './components/navbar'
import Footer from './components/footer'

export default function Home() {
  const router = useRouter()

  return (
    <div className="bg-gray-50 text-gray-800">
      <Navbar />
      <HeroImageWithHydration
        title="I'm Jose Segura"
        subtitle="Full-Stack Web Developer"
        src="banner.png"
        height="full"
        overlay={true}
        buttonLabel="See Projects"
        heroOnClick={() => router.push('/work')}
        centered={false}
      />
      <section className="mx-auto mt-20 max-w-5xl px-6">
        <div className="flex justify-center shadow-xl">
          <Table $size="large">
            <thead>
              <TableRow>
                <TableHeader
                  $backgroundColor="#fff"
                  content="About Me"
                  $size="medium"
                  $weight="bold"
                />
              </TableRow>
            </thead>
            <tbody>
              <TableRow $size="small">
                <TableCell
                  $backgroundColor="#fff"
                  $size="large"
                  content="I come from a diverse background. I've worked in sales and customer service, owned a music studio where I recorded, mixed, and mastered tracks, and even handled audio engineering for live shows and events. My wife and I also ran a delivery business for a couple of years, which helped us through the pandemic.
                          I've always been passionate about technology and understanding how things work. I once 'Frankensteined' a bass guitar by experimenting with pickup changes (it was a small project, really!), and I built my own PC from scratch, meticulously researching components and compatibility."
                />
              </TableRow>
            </tbody>
          </Table>
          <div className="flex min-w-max flex-col bg-white p-5">
            <p>Connect:</p>
            <a
              className="text-blue-600"
              href="https://www.linkedin.com/in/jose-segura-viteri/"
              target="_blank"
            >
              LinkedIn
            </a>
            <p>Contact:</p>{' '}
            <a
              className="text-blue-600"
              href="mailto:josesegurav@outlook.com"
              target="_blank"
            >
              Email{' '}
            </a>
            <p>See My Projects</p>
            <a
              className="text-blue-600"
              href="https://github.com/josedsegurav"
              target="_blank"
            >
              Github{' '}
            </a>
            <p>Check out my blog website!</p>
            <a
              className="text-blue-600"
              href="https://consoleloglife.com/"
              target="_blank"
            >
              consoleLogLife
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
