'use client';

import Image from 'next/image';
import { FaEnvelope, FaLinkedinIn, FaGithub, FaFacebookF } from 'react-icons/fa6';

const timeline = [
  {
    when: '2022 - Present',
    role: 'AI Engineer',
    org: 'IQVIA',
    note: 'Agentic platforms coordinating AI agents across multi-step pharma workflows.',
  },
  {
    when: '2020 - 2022',
    role: 'Software Engineer',
    org: 'CricWhiz',
    note: 'Fantasy cricket app in React Native, Python, serverless AWS.',
  },
  {
    when: '2017 - 2022',
    role: 'BSc, Computer Science',
    org: 'BUET',
    note: 'Where it all started.',
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

export default function Home() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-teal-700 z-50" />
      <main className="fade-in mx-auto max-w-prose px-6 pb-20 pt-6 sm:pt-20">
        <header className="mb-10 flex flex-row items-center gap-4 sm:gap-5">
          <Image
            src="/mhakash.svg"
            alt="mhakash logo"
            width={64}
            height={64}
            className="h-12 w-12 shrink-0 opacity-90 sm:h-16 sm:w-16"
          />
          <div>
            <h1 className="text-xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              Hi, I&rsquo;m <span className="text-teal-700">Mehdi Hassan Akash</span>
            </h1>
            <p className="mt-1.5 font-mono text-[0.625rem] text-stone-500 sm:mt-2 sm:text-sm">
              AI Engineer · Cloud &amp; Distributed Systems
            </p>
          </div>
        </header>

        <p className="max-w-md text-base leading-snug text-stone-600">
          Building{' '}
          <span className="font-medium text-stone-900">AI systems</span> for
          pharma, drawn to{' '}
          <span className="font-medium text-teal-700">cloud computing</span> and{' '}
          <span className="font-medium text-teal-700">distributed systems</span>.
          Off the clock: games, books, and the occasional unplanned rabbit hole.
        </p>

        <section className="mt-12">
          <ol className="relative ml-1 border-l border-stone-200">
            <span className="absolute left-0 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-teal-600 via-teal-500/40 to-transparent" />
            {timeline.map(({ when, role, org, note }) => (
              <li key={role} className="group relative pl-7 pb-9 last:pb-0">
                <span className="absolute -left-[7px] top-1.5 flex h-3.5 w-3.5 items-center justify-center">
                  <span className="absolute h-3.5 w-3.5 rounded-full bg-teal-500/20 transition-transform duration-300 group-hover:scale-150" />
                  <span className="h-2 w-2 rounded-full bg-teal-600 ring-2 ring-[#f7f6f2]" />
                </span>
                <span className="font-mono text-xs text-stone-400">{when}</span>
                <h2 className="mt-0.5 text-base font-semibold text-stone-900">
                  {role} <span className="text-teal-700">· {org}</span>
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-stone-600">{note}</p>
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
              className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-300 text-stone-500 transition-colors hover:border-teal-700 hover:text-teal-700"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </footer>
      </main>
    </>
  );
}
