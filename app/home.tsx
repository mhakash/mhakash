'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaEnvelope, FaLinkedinIn, FaGithub, FaFacebookF } from 'react-icons/fa6';
import { LuSun, LuMoon } from 'react-icons/lu';

const timeline = [
  {
    when: '2022 - Present',
    role: 'AI Engineer',
    org: 'IQVIA',
    note: 'Agentic platforms coordinating AI agents across multi-step pharma workflows.',
    dot: 'bg-teal-600',
    ring: 'bg-teal-600/20',
  },
  {
    when: '2020 - 2022',
    role: 'Software Engineer',
    org: 'CricWhiz',
    note: 'Fantasy cricket app in React Native, Python, serverless AWS.',
    dot: 'bg-teal-500',
    ring: 'bg-teal-500/20',
  },
  {
    when: '2017 - 2022',
    role: 'BSc, Computer Science',
    org: 'BUET',
    note: 'Where it all started.',
    dot: 'bg-teal-400',
    ring: 'bg-teal-400/20',
  },
];

const links = [
  {
    label: 'Email',
    href: 'mailto:mhakash211998@gmail.com',
    Icon: FaEnvelope,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mhakash/',
    Icon: FaLinkedinIn,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/mhakash',
    Icon: FaGithub,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/mhakash21/',
    Icon: FaFacebookF,
  },
];

function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'));
    setMounted(true);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.theme = next ? 'dark' : 'light';
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="fixed right-4 top-4 z-50 flex h-9 w-9 items-center justify-center rounded-full border border-stone-300 bg-white/70 text-stone-600 backdrop-blur transition-colors hover:border-teal-600 hover:text-teal-600 dark:border-stone-700 dark:bg-stone-800/70 dark:text-stone-300 dark:hover:border-teal-400 dark:hover:text-teal-400"
    >
      <span className="relative h-4 w-4">
        <LuSun
          className={`absolute inset-0 h-4 w-4 transition-all duration-500 ${
            mounted && dark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
          }`}
        />
        <LuMoon
          className={`absolute inset-0 h-4 w-4 transition-all duration-500 ${
            mounted && dark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
          }`}
        />
      </span>
    </button>
  );
}

export default function Home() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-teal-700 z-50 dark:bg-teal-400" />
      <ThemeToggle />
      <main className="fade-in mx-auto max-w-prose px-6 pb-20 pt-6 sm:pt-20">
        <header className="mb-10 flex flex-row items-center gap-4 pr-10 sm:gap-5 sm:pr-0">
          <Image
            src="/mhakash.svg"
            alt="mhakash logo"
            width={64}
            height={64}
            className="h-12 w-12 shrink-0 opacity-90 dark:opacity-100 dark:invert sm:h-16 sm:w-16"
          />
          <div>
            <h1
              className="font-bold tracking-tight text-stone-900 dark:text-stone-100"
              style={{ fontSize: 'clamp(0.95rem, 4.6vw, 2.25rem)' }}
            >
              Hi, I&rsquo;m{' '}
              <span className="text-teal-700 dark:text-teal-400">Mehdi Hassan Akash</span>
            </h1>
            <p
              className="mt-1.5 font-mono text-stone-500 dark:text-stone-400 sm:mt-2"
              style={{ fontSize: 'clamp(0.7rem, 2.4vw, 0.875rem)' }}
            >
              AI Engineer · Cloud &amp; Distributed Systems
            </p>
          </div>
        </header>

        <p className="max-w-md text-base leading-snug text-stone-600 dark:text-stone-300">
          Building{' '}
          <span className="font-medium text-stone-900 dark:text-stone-100">AI systems</span> for
          pharma, drawn to{' '}
          <span className="font-medium text-teal-700 dark:text-teal-400">cloud computing</span> and{' '}
          <span className="font-medium text-teal-700 dark:text-teal-400">distributed systems</span>.
          Off the clock: games, books, and the occasional unplanned rabbit hole.
        </p>

        <section className="relative mt-12">
          <svg
            className="pointer-events-none absolute left-0 top-0 h-full w-12"
            viewBox="0 0 48 300"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="rail" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0f766e" />
                <stop offset="50%" stopColor="#14b8a6" />
                <stop offset="100%" stopColor="#5eead4" />
              </linearGradient>
            </defs>
            {/* Passes through x=11 at y=50/150/250 — the vertical centers of three equal rows */}
            <path
              d="M11 0 C 24 22, 24 32, 11 50 C 0 66, 0 134, 11 150 C 24 168, 24 232, 11 250 C 2 266, 7 286, 11 300"
              stroke="url(#rail)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
          <ol className="relative">
            {timeline.map(({ when, role, org, note, dot, ring }) => (
              <li key={role} className="group relative flex h-32 flex-col justify-center pl-12">
                <span className="absolute left-[3px] top-1/2 flex h-4 w-4 -translate-y-1/2 items-center justify-center">
                  <span
                    className={`absolute h-4 w-4 rounded-full ${ring} transition-transform duration-300 group-hover:scale-150`}
                  />
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${dot} ring-2 ring-[#f7f6f2] dark:ring-[#1c1917]`}
                  />
                </span>
                <span className="font-mono text-xs text-stone-400 dark:text-stone-500">{when}</span>
                <h2 className="mt-0.5 text-base font-semibold text-stone-900 dark:text-stone-100">
                  {role}{' '}
                  <span className="text-teal-700 dark:text-teal-400">· {org}</span>
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                  {note}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <footer className="mt-12 flex items-center gap-4">
          {links.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-300 text-stone-500 transition-colors hover:border-teal-700 hover:text-teal-700 dark:border-stone-700 dark:text-stone-400 dark:hover:border-teal-400 dark:hover:text-teal-400"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </footer>
      </main>
    </>
  );
}
