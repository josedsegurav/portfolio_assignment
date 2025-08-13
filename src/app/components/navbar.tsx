// components/Navbar.jsx
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [showNav, setShowNav] = useState(false)

  return (
    <nav className="bg-gray-900 px-6 py-4 text-white shadow-md">
      {showNav && (
        <div className="h-screen md:hidden">
          <button
            className="focus:outline-none md:hidden"
            onClick={() => setShowNav(!showNav)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="flex flex-col">
            <Link
              href="/work"
              className="transition-colors hover:text-[#E46948]"
            >
              Work
            </Link>
            <Link
              href="/skills"
              className="transition-colors hover:text-[#E46948]"
            >
              Skills
            </Link>
            <Link
              href="/resources"
              className="transition-colors hover:text-[#E46948]"
            >
              Resources
            </Link>
          </div>
        </div>
      )}
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo / Site Name */}
        <Link
          href="/"
          className="text-xl font-bold tracking-wide transition-colors hover:text-[#E46948]"
        >
          MyPortfolio
        </Link>

        {/* Navigation Links */}

        <div className="hidden space-x-6 md:flex">
          <Link href="/work" className="transition-colors hover:text-[#E46948]">
            Work
          </Link>
          <Link
            href="/skills"
            className="transition-colors hover:text-[#E46948]"
          >
            Skills
          </Link>
          <Link
            href="/resources"
            className="transition-colors hover:text-[#E46948]"
          >
            Resources
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="focus:outline-none md:hidden"
          onClick={() => setShowNav(!showNav)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  )
}
