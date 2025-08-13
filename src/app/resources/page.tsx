'use client'
import { CardComponent } from '../components/Card'
import { Text } from '../components/Text'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Resources() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Navbar />
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
      <Footer />
    </div>
  )
}
