export default function Footer() {
  return (
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
  )
}
