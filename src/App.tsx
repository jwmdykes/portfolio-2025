import { ComponentProps } from 'react';
import {
  CV,
  Folder,
  Home,
  Blog,
  Bomb,
  Gear,
  Youtube,
  Github,
  Medium,
  Envelope,
} from './Icons';

function SectionHeader({ children, className, ...rest }: ComponentProps<'h2'>) {
  return (
    <h2
      className="text-center text-5xl font-semibold tracking-wide mb-18"
      {...rest}
    >
      {children}
    </h2>
  );
}

function App() {
  return (
    <div className="h-dvh bg-linear-to-b from-bg-top to-bg-bottom grid grid-cols-[78px_1fr] grid-rows-1">
      <Nav />
      <article className="row-span-1 col-start-2 overflow-y-scroll pb-12">
        <section className="h-[70dvh] mt-12 container mx-auto  grid grid-cols-2 px-8">
          <div className="flex flex-col self-center">
            <h1 className="text-white text-6xl mb-4 font-semibold tracking-wide">
              John Dykes
            </h1>
            <h2 className="text-neutral-300 text-2xl mb-5">
              Full Stack Web Developer
            </h2>

            <hr className="h-1 bg-accent mb-16 border-none rounded-[1px] w-[min(21rem,100%)]" />

            <ul className="flex items-center gap-4 fill-white">
              <li>
                <Github className="w-7"></Github>
              </li>
              <li>
                <Youtube className="w-8"></Youtube>
              </li>
              <li>
                <Medium className="w-9"></Medium>
              </li>
              <li>
                <Envelope className="w-7"></Envelope>
              </li>
            </ul>
          </div>
          <div></div>
        </section>

        <section className="mt-16  text-white flex flex-col mx-auto max-w-[1472px]">
          <SectionHeader>Featured Projects</SectionHeader>
          <ul className="grow grid grid-cols-2 gap-2 mb-6 px-2">
            <li className="bg-neutral-600 aspect-video">First Project</li>
            <li className="bg-neutral-600 aspect-video">Second Project</li>
            <li className="bg-neutral-600 aspect-video">Third Project</li>
            <li className="bg-neutral-600 aspect-video">Fourth Project</li>
          </ul>
          <a
            href="/projects"
            className="text-neutral-300 hover:text-white font-medium text-right underline decoration-transparent hover:decoration-accent px-4 transition-all duration-400"
          >
            View All Projects
          </a>
        </section>

        <section className="mt-16 container mx-auto px-8 flex flex-col">
          <SectionHeader>Experience</SectionHeader>

          <div className="flex gap-8 mx-auto w-[min(100%,770px)]">
            <div className="grow">
              <div className="grid grid-cols-1 gap-10">
                <div className="">
                  <h3 className="text-xl font-medium">LangPanel</h3>
                  <h4 className="text-lg text-neutral-300 font-light mb-2">
                    Founder / May 2024 &mdash; Present
                  </h4>
                  <ul className="text-neutral-200">
                    <li className="before:w-2 before:aspect-square before:bg-accent before:rounded-full flex items-center gap-2">
                      Developing AI powered translation application for comics
                    </li>
                    <li className="before:w-2 before:aspect-square before:bg-accent before:rounded-full flex items-center gap-2">
                      Custom AIs run in the browser with WebGPU, reducing costs
                    </li>
                  </ul>
                </div>

                <div className="">
                  <h3 className="text-xl font-medium">
                    Communications Security Establishment
                  </h3>
                  <h4 className="text-lg text-neutral-300 font-light mb-2">
                    Cryptanalyst / September 2020 &mdash; May 2024
                  </h4>
                  <ul className="text-neutral-200">
                    <li className="before:w-2 before:aspect-square before:bg-accent before:rounded-full flex items-center gap-2">
                      Implementing, evaluating cryptographic standards and
                      algorithms
                    </li>
                    <li className="before:w-2 before:aspect-square before:bg-accent before:rounded-full flex items-center gap-2">
                      Other top secret cryptographic research
                    </li>
                  </ul>
                </div>

                <div className="">
                  <h3 className="text-xl font-medium">
                    Communications Research Centre Canada
                  </h3>
                  <h4 className="text-lg text-neutral-300 font-light mb-2">
                    Analyst / September 2019 &mdash; September 2020
                  </h4>
                  <ul className="text-neutral-200">
                    <li className="before:w-2 before:aspect-square before:bg-accent before:rounded-full flex items-center gap-2">
                      Implementing, evaluating cryptographic standards and
                      algorithms
                    </li>
                    <li className="before:w-2 before:aspect-square before:bg-accent before:rounded-full flex items-center gap-2">
                      Other top secret cryptographic research
                    </li>
                  </ul>
                </div>

                <div className="">
                  <h3 className="text-xl font-medium">
                    Communications Research Centre Canada
                  </h3>
                  <h4 className="text-lg text-neutral-300 font-light mb-2">
                    Analyst / September 2019 &mdash; September 2020
                  </h4>
                  <ul className="text-neutral-200">
                    <li className="before:w-2 before:aspect-square before:bg-accent before:rounded-full flex items-center gap-2">
                      Implementing, evaluating cryptographic standards and
                      algorithms
                    </li>
                    <li className="before:w-2 before:aspect-square before:bg-accent before:rounded-full flex items-center gap-2">
                      Other top secret cryptographic research
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="justify-self-center row-start-1 col-start-1 w-[1px] rounded-full h-full bg-neutral-400"></div>
              <div className="row-start-1 col-start-1 rounded-[2px] w-2 aspect-square bg-muted-accent" />
            </div>
          </div>
        </section>

        <section className="h-[400px] mt-16 container mx-auto px-8">
          <SectionHeader>Technologies</SectionHeader>
        </section>
      </article>
    </div>
  );
}

function Nav() {
  return (
    <nav className="h-dvh col-span-1 row-span-1 flex flex-col justify-between border-r border-border py-8 text-[11px] font-semibold tracking-wide">
      <div className="grow flex flex-col gap-7">
        <a
          href="#"
          className="text-white flex flex-col items-center"
          aria-label="Link To Home Page"
        >
          <Home className="fill-icon-fill-focus w-[1.7rem]"></Home>
          Home
        </a>

        <a
          href="#"
          className="text-white flex flex-col items-center"
          aria-label="Link To Projects Archive"
        >
          <Folder className="fill-icon-fill w-7"></Folder>
          Projects
        </a>

        <a
          href="#"
          className="text-white flex flex-col items-center"
          aria-label="Link To Download Resume"
        >
          <CV className="fill-icon-fill w-[1.85rem]"></CV>
          Resume
        </a>

        <a
          href="#"
          className="text-white flex flex-col items-center"
          aria-label="Link To Blog"
        >
          <Blog className="fill-icon-fill w-[1.85rem]"></Blog>
          Blog
        </a>

        <a
          href="#"
          className="text-white flex flex-col items-center"
          aria-label="Link To Home Page"
        >
          <Bomb className="fill-icon-fill w-8"></Bomb>
          Explode!
        </a>
      </div>
      <div className="flex flex-col items-center">
        <button
          className="text-white flex flex-col items-center hover:cursor-pointer bg-transparent hover:bg-icon-bg p-2 translate-y-2 rounded-xl group"
          aria-label="Open Settings"
        >
          <Gear className="fill-icon-fill w-8 group-hover:rotate-90 transition-all duration-500"></Gear>
        </button>
      </div>
    </nav>
  );
}

export default App;
