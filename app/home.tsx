'use client';

import Image from 'next/image';
import HomeContent from '@/data/markdown/home.mdx';

export default function Home() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-teal-700 z-50" />
      <div className="w-full py-16 px-4 pt-18">
        <div className="mx-auto max-w-prose">
          <Image
            src="/mhakash.svg"
            alt="mhakash logo"
            width={52}
            height={52}
            className="mb-10 opacity-85"
          />
          <article className="prose prose-stone prose-a:text-teal-700 prose-a:decoration-teal-700/40 prose-a:underline-offset-2 prose-hr:border-stone-200">
            <HomeContent />
          </article>
        </div>
      </div>
    </>
  );
}
