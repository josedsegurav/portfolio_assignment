'use client'
import { Text } from '../components/Text'
import { Image } from '../components/Image'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Skills() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Navbar />
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
      <Footer />
    </div>
  )
}
