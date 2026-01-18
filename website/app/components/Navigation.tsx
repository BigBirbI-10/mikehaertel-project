'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Global">
        <div className="flex items-center justify-between py-4">
          {/* Logo/Name */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Michael Haertel
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-700 dark:text-zinc-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            <a
              href="https://github.com/BigBirbI-10"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold leading-6 text-zinc-900 hover:text-zinc-600 dark:text-zinc-50 dark:hover:text-zinc-300"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/michaelhaertel/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold leading-6 text-zinc-900 hover:text-zinc-600 dark:text-zinc-50 dark:hover:text-zinc-300"
            >
              LinkedIn
            </a>
          </div>

          {/* CTA */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="https://farescout.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold leading-6 text-zinc-900 hover:text-zinc-600 dark:text-zinc-50 dark:hover:text-zinc-300"
            >
              FareScout.App <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="space-y-2 py-6">
              <a
                href="https://github.com/BigBirbI-10"
                target="_blank"
                rel="noopener noreferrer"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-zinc-900 hover:bg-zinc-50 dark:text-zinc-50 dark:hover:bg-zinc-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/michaelhaertel/"
                target="_blank"
                rel="noopener noreferrer"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-zinc-900 hover:bg-zinc-50 dark:text-zinc-50 dark:hover:bg-zinc-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                LinkedIn
              </a>
              <a
                href="https://farescout.app"
                target="_blank"
                rel="noopener noreferrer"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-zinc-900 hover:bg-zinc-50 dark:text-zinc-50 dark:hover:bg-zinc-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                FareScout.App
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
