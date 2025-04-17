import {
  Youtube,
  Github,
  Medium,
  Envelope,
  RightArrow,
  ReactLogo,
  Checkmark,
  Tailwind,
  PyTorch,
  Postgres,
  Fastify,
  Stars,
} from '../../components/Icons';
import { ContactForm } from '../../components/ContactForm';
import { Nav } from '../../components/Nav';
import { Footer } from '../../components/Footer';
import { ExperienceSection } from './ExperienceSection';
import { SectionHeader } from './SectionHeader';

export function Page() {
  return (
    <div className="bg-bg-top">
      <Nav />
      <article className="row-span-1 col-start-2 relative overflow-hidden">
        <section className="h-[calc(100svh-60px)] grid z-50">
          <div className="z-0 col-start-1 row-start-1 self-center justify-self-center relative">
            <Stars className="absolute h-svh -translate-y-1/2 -translate-x-1/2 fill-none stroke-accent/70 stroke-3 [stroke-dasharray:0,299,0,0,0,0]"></Stars>
            <Stars className="absolute h-svh -translate-y-1/2 -translate-x-1/2 fill-none stroke-accent/80 stroke-2 [stroke-dasharray:0,203,0,0,0,0]"></Stars>
            <Stars className="absolute h-svh -translate-y-1/2 -translate-x-1/2 fill-none stroke-accent/90 stroke-1 [stroke-dasharray:0,100,0,0,0,0]"></Stars>
          </div>
          <div className="z-10 self-center justify-self-center col-start-1 row-start-1 h-[170px] aspect-[5/3] bg-radial from-bg-top from-70% to-transparent"></div>
          <div className="col-start-1 row-start-1 z-10 self-end w-full h-16 bg-gradient-to-b from-transparent to-bg-top from-0% to-90% translate-y-[60px]"></div>
          <div className="z-20 col-start-1 row-start-1 flex flex-col self-center items-center container mx-auto px-4 sm:px-8">
            <h1 className="text-white text-5xl sm:text-6xl mb-4 font-semibold tracking-wide text-center">
              John Dykes
            </h1>
            <h2 className="text-neutral-300 text-xl sm:text-2xl mb-5 text-center">
              Full Stack Web and AI Developer
            </h2>

            <hr className="h-1 bg-accent mb-6 sm:mb-8 border-none rounded-[1px] w-[min(21rem,100%)]" />

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
          <SectionHeader className="px-2">Featured Projects</SectionHeader>
          <ul className="grow grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-2 px-2">
            <li className="bg-neutral-600 aspect-video rounded-xl overflow-hidden">
              <img
                src="/langpanel.webp"
                alt="LangPanel Project Thumbnail"
                className="scale-100 translate-x-0 hover:scale-105 hover:translate-x-3 transition-all"
              />
            </li>
            <li className="bg-neutral-600 aspect-video rounded-xl overflow-hidden">
              <img
                src="/react-calculator.webp"
                alt="React Calculator Video Project Thumbnail"
                className="scale-100 translate-x-0 hover:scale-105 hover:-translate-x-2  hover:-translate-y-1 transition-all"
              />
            </li>
            <li className="bg-[#191f26] aspect-video rounded-xl overflow-hidden">
              <img
                src="/web-synth.webp"
                alt="WebAudio Synthesizer Project Thumbnail"
                className="scale-100 translate-x-0 hover:scale-105 transition-all"
              />
            </li>
            <li className="bg-[#382370] aspect-video rounded-xl overflow-hidden">
              <img
                src="/coming-soon.webp"
                alt="WebAudio Synthesizer Project Thumbnail"
                className="scale-100 translate-x-0 hover:scale-105 transition-all"
              />
            </li>{' '}
          </ul>
          <div className="flex justify-end">
            <a
              href="/projects"
              className="mt-6 sm:mt-10 text-neutral-100 hover:text-white font-medium px-6 sm:px-10 transition-all duration-300 flex gap-2 justify-end group items-center"
            >
              View All Projects
              <RightArrow className="w-4 fill-white group-hover:fill-accent group-hover:translate-x-1 translate-y-[1px] transition-all duration-300"></RightArrow>
            </a>
          </div>
        </section>

        <ExperienceSection />

        <section className="mt-30 sm:mt-60 container max-w-5xl mx-auto px-2 sm:px-8">
          <SectionHeader>My Favourite Tools</SectionHeader>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-5 md:grid-rows-3 lg:grid-rows-2">
            <div className="col-span-1 md:col-span-2 bg-neutral-800 aspect-video px-3 sm:px-5 py-5 sm:py-7 rounded-2xl border border-neutral-700 grid grid-cols-1 sm:grid-cols-2 overflow-x-clip">
              <ReactLogo className="row-start-1 col-start-1 sm:col-start-2 translate-x-1/2 sm:translate-x-0 justify-self-end sm:justify-self-center self-center h-11/12 fill-neutral-700 stroke-3 stroke-neutral-600"></ReactLogo>
              <div className="z-10 row-start-1 col-start-1 flex flex-col justify-between gap-12 sm:gap-0">
                <div>
                  <h3 className="text-xl flex gap-2 items-center justify-start font-medium">
                    <ReactLogo className="fill-react-blue w-7" />
                    React JS
                  </h3>
                  <p className="mt-4 text-base text-neutral-100">
                    For creating awesome web apps
                  </p>
                  <p className="mt-1 text-sm text-neutral-400">
                    I use it for almost everything I make on the web, including
                    this website!
                  </p>
                </div>

                <ul className="flex flex-col text-sm gap-1">
                  <li className="flex gap-1">
                    <Checkmark className="w-[0.8rem] fill-white translate-y-[1px]" />
                    <span>Over five years of experience</span>
                  </li>
                  <li className="flex gap-1">
                    <Checkmark className="w-[0.8rem] fill-white translate-y-[1px]" />
                    <span>Crafting lightning fast pages</span>
                  </li>
                  <li className="flex gap-1">
                    <Checkmark className="w-[0.8rem] fill-white translate-y-[1px]" />
                    <span>Making interactive web apps</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-1 bg-neutral-800 rounded-2xl border border-neutral-700 px-5 py-7">
              <h3 className="text-xl flex gap-2 items-center justify-start font-medium">
                <Postgres className="w-7 h-7 stroke-[1px]"></Postgres>
                PostgreSQL
              </h3>
              <p className="mt-4 text-base text-neutral-100 ">
                My SQL database of choice
              </p>
              <p className="mt-1 text-sm text-neutral-400">
                Used by LangPanel, alongside the postgres provider Supabase.
              </p>
            </div>
            <div className="col-span-1 bg-neutral-800 rounded-2xl border border-neutral-700 px-5 py-7">
              <h3 className="text-xl flex gap-2 items-center justify-start font-medium">
                <Tailwind className="w-6 fill-accent stroke-none"></Tailwind>
                Tailwind CSS
              </h3>
              <p className="mt-4 text-base text-neutral-100 ">
                Making everything look pretty
              </p>
              <p className="mt-1 text-sm text-neutral-400">
                For my styling needs, I often reach for Tailwind over plain CSS.
              </p>
            </div>
            <div className="col-span-1 bg-neutral-800 rounded-2xl border border-neutral-700 px-5 py-7 ">
              <h3 className="text-xl flex gap-2 items-center justify-start font-medium">
                <PyTorch className="w-6  stroke-none"></PyTorch>
                PyTorch
              </h3>
              <p className="mt-4 text-base text-neutral-100 ">
                AI Powered Applications
              </p>
              <p className="mt-1 text-sm text-neutral-400">
                Training custom AI models, or using existing ones with
                <a
                  href="https://huggingface.co/"
                  className="ml-[0.7ch] text-neutral-200"
                >
                  Huggingface
                </a>
                .
              </p>
            </div>
            <div className="col-span-1 bg-neutral-800 rounded-2xl border border-neutral-700 px-5 py-7">
              <h3 className="text-xl flex gap-2 items-center justify-start font-medium">
                <Fastify className="w-7 fill-white stroke-none"></Fastify>
                Fastify
              </h3>
              <p className="mt-4 text-base text-neutral-100 ">
                My go-to backend framework
              </p>
              <p className="mt-1 text-sm text-neutral-400">
                Serverless is great, but sometimes you need a real backend. I
                default to Fastify.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-30 sm:mt-60 container mx-auto px-2 sm:px-8">
          <SectionHeader>Get In Touch</SectionHeader>
          <ContactForm />
        </section>

        <Footer className="mt-16 sm:mt-48" />
      </article>
    </div>
  );
}
