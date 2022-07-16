import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <Head>
        <title>Zaki Mubarok</title>
        <meta name="description" content="A Passionate Flutter Developer 🌍" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-screen min-h-screen flex flex-col justify-center items-center p-4 overflow-y-scroll">
      <div className="flex flex(col sm:row) gap-8">
        <img
          src="/me.webp"
          alt="zaki mubarok"
          width="500"
          height="500"
          class="w(24 md:32) h(24 md:32) rounded-full"
        />
        <div className="flex flex-col justify-center">
          <p className="leading-tight text(gray-900 2xl md:3xl)">Hello, I'm</p>
          <h1 className="leading-tight text(gray-900 4xl md:5xl) font-semibold">
            Zaki Mubarok
          </h1>
        </div>
      </div>
        <p className="text-2xl text-gray-700">This stack uses</p>
        <div className="grid grid-cols-1 grid-rows-3 lg:grid-rows-2 md:grid-rows-2 justify-center items-center lg:grid-cols-2 md:grid-cols-2 gap-3 mt-3 pt-3 w-full lg:w-2/3 md:w-full">
          <div className="hover:scale-105 cursor-pointer duration-500 flex flex-col justify-center items-center text-center rounded shadow-xl border-2 border-gray-500 h-full w-full p-6">
            <h2 className="text-lg text-gray-700">NextJS</h2>
            <p className="text-sm text-gray-600">
              The React framework for production
            </p>
            <a
              className="text-sm text-violet-500 underline decoration-dotted underline-offset-2 cursor-pointer mt-3"
              href="https://nextjs.org/"
              target="_blank"
              rel="noreferrer"
            >
              Documentation
            </a>
          </div>
          <div className="hover:scale-105 cursor-pointer duration-500 flex flex-col justify-center items-center text-center rounded shadow-xl border-2 border-gray-500 h-full w-full p-6">
            <h2 className="text-lg text-gray-700">TypeScript</h2>
            <p className="text-sm text-gray-600">
              Strongly typed programming language that builds on JavaScript,
              giving you better tooling at any scale
            </p>
            <a
              className="text-sm text-violet-500 underline decoration-dotted underline-offset-2 cursor-pointer mt-3"
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noreferrer"
            >
              Documentation
            </a>
          </div>
          <div className="hover:scale-105 cursor-pointer duration-500 flex flex-col justify-center items-center text-center rounded shadow-xl border-2 border-gray-500 h-full w-full p-6">
            <h2 className="text-lg text-gray-700">TailwindCSS</h2>
            <p className="text-sm text-gray-600">
              Rapidly build modern websites without ever leaving your HTML
            </p>
            <a
              className="text-sm text-violet-500 underline decoration-dotted underline-offset-2 cursor-pointer mt-3"
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noreferrer"
            >
              Documentation
            </a>
          </div>
          <div className="hover:scale-105 cursor-pointer duration-500 flex flex-col justify-center items-center text-center rounded shadow-xl border-2 border-gray-500 h-full w-full p-6">
            <h2 className="text-lg text-gray-700">tRPC</h2>
            <p className="text-sm text-gray-600">
              End-to-end typesafe APIs made easy
            </p>
            <a
              className="text-sm text-violet-500 underline decoration-dotted underline-offset-2 cursor-pointer mt-3"
              href="https://trpc.io/"
              target="_blank"
              rel="noreferrer"
            >
              Documentation
            </a>
          </div>
        </div>
        <div className="pt-6 text-2xl text-blue-500 flex justify-center items-center w-full">
          {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
        </div>
      </div>
    </>
  );
};

export default Home;
