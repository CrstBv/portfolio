import Card from "@/components/home/Card";
export default function Home() {
  return (
    <div className="container relative">
      <div className="max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full grid grid-cols-1 gap-7 md:grid-cols-2 2xl:gap-3">
      <section id="#about" className="items-center py-6 md:py-12 md:pb-8 xl:py-20 xl:pb-16">
        <div >Contact</div>
      </section>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>
      </div>
      <div >

      </div>
      <div id="#projects">
        <h1>
          Projects
          <Card />
        </h1>
      </div>

      <div id="#contact">
        <h1>
          Contact
        </h1>
      </div>
      </div>

    </div>
  );
}
