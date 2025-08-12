'use client'
import { HeroImageComponent } from './components/HeroImage'
import { useRouter } from 'next/navigation'
import { Table } from './components/Table'
import { TableHeader } from './components/Table/TableHeader'
import { TableRow } from './components/Table/TableRow'
import { TableCell } from './components/Table/TableCell'
import { CardComponent } from './components/Card'
import { Text } from './components/Text'
import { Image } from './components/Image'

export default function Home() {
  const router = useRouter()

  return (
    <div className="bg-gray-50 text-gray-800">
      <HeroImageComponent
        title="I'm Jose Segura"
        subtitle="Full-Stack Web Developer"
        src="banner.png"
        height="full"
        overlay={true}
        buttonLabel="See Projects"
        heroOnClick={() => router.push('#projects')}
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
      <section
        id="projects"
        className="mx-auto mt-20 max-w-6xl px-6 text-center"
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
      <section className="mx-auto mt-20 max-w-6xl px-6 text-center">
        <Text content="Skills" $size="medium" $weight="bolder" />
        <div className="mt-6 space-y-4">
          <div>
            <p className="mr-3 inline text-xl font-semibold">
              Active Projects:
            </p>
            <p className="inline">
              Full-stack web applications with modern frameworks
            </p>
          </div>
          <div>
            <p className="mr-3 inline text-xl font-semibold">Collaboration:</p>
            <p className="inline">
              Experienced in team environments (80+ developer hackathon)
            </p>
          </div>
          <p>🎵 Smooth API integrations that actually work</p>
          <p>💻 Full-stack apps that scale beyond localhost</p>
          <p>🚀 Fast deployment and modern development practices</p>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Image
            alt="js"
            src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"
          />
          <Image
            alt="ts"
            src="https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"
          />
          <Image
            alt="react"
            src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black"
          />
          <Image
            alt="next"
            src="https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=next.js&logoColor=white"
          />
          <Image
            alt="php"
            src="https://img.shields.io/badge/-PHP-777BB4?style=flat-square&logo=php&logoColor=white"
          />
          <Image
            alt="node"
            src="https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white"
          />
          <Image
            alt="tw"
            src="https://img.shields.io/badge/-Tailwind%20CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white"
          />
          <Image
            alt="sb"
            src="https://img.shields.io/badge/-Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white"
          />
          <Image
            alt="ruby"
            src="https://img.shields.io/badge/-Ruby-CC342D?style=flat-square&logo=ruby&logoColor=white"
          />
          <Image
            alt="rails"
            src="https://img.shields.io/badge/-Ruby_on_Rails-CC0000?style=flat-square&logo=rubyonrails&logoColor=white"
          />
        </div>
        <div className="mt-8 flex justify-center">
          <Image
            alt="stats"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=josedsegurav&layout=compact&theme=default&hide_border=true"
          />
        </div>
      </section>
      <section className="mt-20 bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Text content="Resources" $size="medium" $weight="bolder" />
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <a href="https://vercel.com/" target="_blank">
              <CardComponent
                shadow="large"
                src="vercel.jpg"
                title="Vercel"
                description="Build and deploy on the AI Cloud. Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web."
              />
            </a>
            <a href="https://www.w3schools.com/" target="_blank">
              <CardComponent
                shadow="large"
                src="w3.png"
                title="W3Schools"
                description="Learn to Code. With the world's largest web developer site."
              />
            </a>
            <a href="https://developer.mozilla.org/" target="_blank">
              <CardComponent
                shadow="large"
                src="mdn.jpg"
                title="MDN Web Docs"
                description="Comprehensive resource for web development documentation, covering everything from CSS, HTML, JavaScript, Web APIs, and other web technologies."
              />
            </a>
            <a href="https://www.frontendmentor.io/" target="_blank">
              <CardComponent
                shadow="large"
                src="frontend.png"
                title="Frontend Mentor"
                description="Front-end and full-stack coding challenges that provides professional design-to-code challenges that mirror real-world development work."
              />
            </a>
          </div>
        </div>
      </section>
      <footer className="mt-20 bg-gray-900 py-8 text-gray-300">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Jose Segura. All rights reserved.
          </p>

          <div className="flex space-x-6">
            <a
              href="https://github.com/josedsegurav"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition hover:text-white"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.43c.6.11.82-.26.82-.58v-2.16c-3.34.73-4.04-1.61-4.04-1.61a3.18 3.18 0 00-1.34-1.76c-1.1-.75.09-.74.09-.74a2.5 2.5 0 011.82 1.22 2.53 2.53 0 003.46 1 2.53 2.53 0 01.75-1.58c-2.67-.3-5.47-1.34-5.47-5.94a4.66 4.66 0 011.24-3.22 4.33 4.33 0 01.12-3.17s1-.32 3.28 1.22a11.31 11.31 0 016 0c2.27-1.54 3.28-1.22 3.28-1.22a4.33 4.33 0 01.12 3.17 4.65 4.65 0 011.24 3.22c0 4.61-2.81 5.63-5.49 5.93a2.84 2.84 0 01.81 2.2v3.27c0 .32.22.7.82.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/jose-segura-viteri/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition hover:text-white"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M4.98 3.5A2.5 2.5 0 002.5 6v12a2.5 2.5 0 002.48 2.5h14.04a2.5 2.5 0 002.48-2.5V6a2.5 2.5 0 00-2.48-2.5H4.98zm.02 3.75a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm.06 2.72v8.03h-3.4v-8.03h3.4zm7.13 0v1.1c.45-.77 1.57-1.56 3.2-1.56 3.43 0 4.06 2.23 4.06 5.12v4.37h-3.39v-3.87c0-.92-.02-2.1-1.28-2.1-1.28 0-1.48 1-1.48 2.04v3.93h-3.4v-8.03h3.27z" />
              </svg>
            </a>
            <a
              href="mailto:josesegurav@outlook.com"
              aria-label="Email"
              className="transition hover:text-white"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2l-8 5-8-5V6l8 5 8-5v.01z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
