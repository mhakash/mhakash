'use client';

import HomeContent from '@/data/markdown/home.mdx';

export default function Home() {
  return (
    <div className="w-full">
      <article className="p-4 mx-auto prose">
        <HomeContent />
      </article>
    </div>
  );
}
