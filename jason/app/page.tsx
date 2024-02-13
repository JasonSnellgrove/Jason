import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex ">
        <p className="hover:rotate-45 fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Jason Snellgrove &&nbsp;
          <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert "
          src="/next.svg"
          alt="Next.js Logo"
          width={50}
          height={10}
          priority
          />
          <code className="font-mono font-bold">:) Hover over me!</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
  
      <div className="relative flex place-items-center before:absolute before:h-[100px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[380px] after:translate-x-1/2 after:bg-gradient-conic after:from-red-200 after:via-red-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-red-700 before:dark:opacity-10 after:dark:from-red-900 after:dark:via-red after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div className="underline decoration-red-800 decoration-8 text-5xl font-bold bg-red-500 shadow-lg shadow-red-500/50 select-none">JASON SNELLGROVE</div>
      </div>
      <h1>You can't select the above text.</h1>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          v blur-sm v
          <h2 className={`blur-sm blur-3xlmb-3 text-2xl font-semibold`}>
            Link 1{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`blur-sm m-0 max-w-[30ch] text-sm opacity-50`}>
          There's a link here or something
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          v blur v
          <h2 className={`blur mb-3 text-2xl font-semibold`}>
          Link 2{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`blur m-0 max-w-[30ch] text-sm opacity-50`}>
          There's a link here or something
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          v blur-md v
          <h2 className={`blur-md mb-3 text-2xl font-semibold`}>
          Link 3{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`blur-md m-0 max-w-[30ch] text-sm opacity-50`}>
          There's a link here or something
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          v blur-lg v
          <h2 className={`blur-lg mb-3 text-2xl font-semibold`}>
          Link 4{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`blur-lg m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            There's a link here or something
          </p>
        </a>
      </div>
      <h1>^ Testing blur settings ^</h1>
    <ul className="list-disc bg-gradient-to-r from-red-500 to-blue-500 border-solid border-4 border-red-500">
    <li>List Item 1</li>
    <li>List Item 2</li>
    <li>List Item 3</li>
    </ul>
    </main>
  );
}