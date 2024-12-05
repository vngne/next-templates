import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <Link
              href="https://githbu.com/ekovegeance"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              ekovegeance
            </Link>
            . The source code is available on{" "}
            <Link
              href="https://github.com/ekovegeance/Fullstack-Nextjs-Templates"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}

