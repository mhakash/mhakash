import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex items-center justify-center">
        <h1 className="text-xl text-center max-w-xl">Hello world</h1>
      </main>

      <footer className="flex justify-center border-t py-4">
        <Image
          unoptimized
          src="/icon.svg"
          alt="mhakash logo"
          className=""
          width={20}
          height={20}
        />
        <span className="ml-2">2022</span>
      </footer>
    </div>
  );
};

export default Home;
