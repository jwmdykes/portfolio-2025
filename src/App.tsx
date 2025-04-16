import { ComponentProps } from 'react';
import {
  Youtube,
  Github,
  Medium,
  Envelope,
  RightArrow,
  DownChevron,
  ReactLogo,
  Database,
} from './Icons';
import { ContactForm } from './ContactForm';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { twMerge } from 'tailwind-merge';
import { Terminal } from './Terminal';

function SectionHeader({ children, className, ...rest }: ComponentProps<'h2'>) {
  return (
    <h2
      className={twMerge(
        'text-center text-5xl font-semibold tracking-wide mb-18',
        className
      )}
      {...rest}
    >
      {children}
    </h2>
  );
}

function App() {
  return (
    <div className="bg-linear-to-b from-bg-top to-bg-bottom">
      <Nav />
      <article className="row-span-1 col-start-2 ">
        <section className="h-[calc(100dvh-56.8px)] container mx-auto grid px-8">
          <div className="flex flex-col self-center items-center">
            <h1 className="text-white text-6xl mb-4 font-semibold tracking-wide">
              John Dykes
            </h1>
            <h2 className="text-neutral-300 text-2xl mb-5">
              Full Stack Web and AI Developer
            </h2>

            <hr className="h-1 bg-accent mb-8 border-none rounded-[1px] w-[min(21rem,100%)]" />

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
        </section>

        <section className="mt-16 text-white flex flex-col mx-auto max-w-[1472px]">
          <SectionHeader>Featured Projects</SectionHeader>
          <ul className="grow grid grid-cols-2 gap-2 px-2">
            <li className="bg-neutral-600 aspect-video rounded-xl overflow-hidden">
              <img
                src="/langpanel.webp"
                alt="LangPanel Project Thumbnail Image"
              />
            </li>
            <li className="bg-neutral-600 aspect-video">Second Project</li>
            <li className="bg-neutral-600 aspect-video">Third Project</li>
            <li className="bg-neutral-600 aspect-video">Fourth Project</li>
          </ul>
          <div className="flex justify-end">
            <a
              href="/projects"
              className="mt-10 text-neutral-100 hover:text-white font-medium px-10 transition-all duration-300 flex gap-2 justify-end group items-center"
            >
              View All Projects
              <RightArrow className="w-4 fill-white group-hover:fill-accent group-hover:translate-x-1 translate-y-[1px] transition-all duration-300"></RightArrow>
            </a>
          </div>
        </section>

        <section className="mt-60 container mx-auto px-8 flex flex-col w-[min(100%,900px)]">
          <SectionHeader>Recent Experience</SectionHeader>

          <div className="flex w-full gap-6">
            <div className="grow">
              <ol className="grid grid-cols-1 gap-10">
                <li className="">
                  <h3 className="text-xl font-medium">
                    <a
                      href="https://langpanel.com"
                      className="flex gap-2 group"
                    >
                      LangPanel
                      <RightArrow className="w-4 fill-white group-hover:fill-accent group-hover:translate-x-1 translate-y-[1px] transition-all duration-300"></RightArrow>
                    </a>
                  </h3>
                  <h4 className="text-lg text-neutral-300 font-light mb-2">
                    Founder / May 2024 &mdash; Present
                  </h4>
                  <ul className="text-neutral-200">
                    <li className="before:w-2 before:aspect-square before:bg-accent before:rounded-full flex items-center gap-2">
                      Developing AI powered translation application for comics
                    </li>
                    <li className="before:w-2 before:aspect-square before:bg-accent before:rounded-full flex items-center gap-2">
                      OCR AI model designed and trained using pytorch and
                      proprietary text rendering library.
                    </li>
                    <li className="before:w-2 before:aspect-square before:bg-accent before:rounded-full flex items-center gap-2">
                      Models run in the browser with WebGPU, reducing costs
                    </li>
                  </ul>
                </li>

                <li className="">
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
                </li>

                <li className="">
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
                </li>

                <li className="">
                  <h3 className="text-xl font-medium">
                    University of Waterloo
                  </h3>
                  <h4 className="text-lg text-neutral-300 font-light mb-2">
                    Graduate Student / January 2019 &mdash; December 2019
                  </h4>
                  <ul className="text-neutral-200">
                    <li className="before:w-2 before:aspect-square before:bg-accent before:rounded-full flex items-center gap-2">
                      Master's degree program in mathematics
                    </li>
                    <li className="before:w-2 before:aspect-square before:bg-accent before:rounded-full flex items-center gap-2">
                      Studied analytic number theory with
                      <a
                        href="https://uwaterloo.ca/pure-mathematics/yu-ru-liu"
                        className="underline underline-offset-2 decoration-white decoration-1 hover:decoration-accent transition-all duration-300"
                      >
                        Professor Yu-Ru Liu
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="flex justify-start">
                  <a
                    href="/projects"
                    className="text-neutral-100 hover:text-white font-medium transition-all duration-300 flex justify-center group items-center gap-2"
                  >
                    <DownChevron className="translate-y-[1px] w-4 fill-white group-hover:fill-accent group-hover:translate-y-0.5 transition-all duration-300"></DownChevron>
                    Show More
                  </a>
                </li>
              </ol>
            </div>
            <div className="grid">
              <div className="justify-self-center row-start-1 col-start-1 w-[1px] rounded-full h-full bg-neutral-400"></div>
              <div className="row-start-1 col-start-1 rounded-[2px] w-2 aspect-square bg-muted-accent" />
            </div>
          </div>
        </section>

        <section className="mt-60 container mx-auto px-8">
          <SectionHeader>My Favourite Tools</SectionHeader>
          <div className="grid grid-cols-3 gap-4">
            <div className="hover:border-neutral-500 col-span-2 bg-neutral-800 aspect-video p-5 rounded-2xl border border-neutral-700 grid grid-cols-2 transition-all duration-100">
              <h3>React JS</h3>
              <ReactLogo className="justify-self-center self-center h-4/5 fill-neutral-700 stroke-3 stroke-neutral-600"></ReactLogo>
            </div>
            <div className="hover:border-neutral-500 transition-all duration-100 col-span-1 bg-neutral-800 rounded-2xl border border-neutral-700 p-5">
              <h3 className="flex gap-2 items-center justify-start font-medium">
                <Database className="w-6 fill-accent stroke-none"></Database>
                PostgreSQL
              </h3>
              <p className="mt-4 text-sm">My SQL database of choice</p>
              <p className="mt-1 text-sm text-neutral-400">
                Used by LangPanel, alongside the postgres provider Supabase.
              </p>
            </div>
            <div className="hover:border-neutral-500 transition-all duration-100 col-span-1 bg-neutral-800 rounded-2xl border border-neutral-700 p-5">
              Tailwind CSS
            </div>
            <div className="hover:border-neutral-500 transition-all duration-100 col-span-2 bg-neutral-800 aspect-video rounded-2xl border border-neutral-700 p-5">
              PyTorch
            </div>
          </div>
        </section>

        <section className="mt-60 container mx-auto px-8">
          <SectionHeader>Something Cool</SectionHeader>
          <Terminal />
        </section>

        <section className="mt-60 container mx-auto px-8">
          <SectionHeader>Get In Touch</SectionHeader>
          <ContactForm />
        </section>

        <Footer className="mt-48" />
      </article>
    </div>
  );
}

export default App;
