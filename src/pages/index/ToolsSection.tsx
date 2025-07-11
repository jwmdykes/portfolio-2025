import {
  Brain,
  Checkmark,
  Database,
  Fastify,
  Postgres,
  PyTorch,
  ReactLogo,
  Server,
  Tailwind,
} from '../../components/Icons';
import { SectionHeader } from './SectionHeader';

function ReactGlowLogo() {
  return (
    <ReactLogo className="row-start-1 col-start-1 sm:col-start-2 translate-x-1/2 sm:translate-x-0 justify-self-end sm:justify-self-center self-center h-11/12 fill-neutral-700 drop-shadow-transparent drop-shadow-sm group-hover:drop-shadow-neutral-400 transition-all duration-500 animate-slowSpin"></ReactLogo>
  );
}

export function ToolsSection() {
  return (
    <section className="mt-30 sm:mt-60 container max-w-5xl mx-auto px-2 sm:px-8">
      <SectionHeader>My Favourite Tools</SectionHeader>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-5 md:grid-rows-3 lg:grid-rows-2">
        <div className="col-span-1 md:col-span-2 bg-neutral-800 aspect-video px-3 sm:px-5 py-5 sm:py-7 rounded-2xl border border-neutral-700 grid grid-cols-1 sm:grid-cols-2 overflow-x-clip group">
          <ReactGlowLogo />
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
                I use it for almost everything I make on the web, including this
                website!
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
        <div className="grid grid-rows-1 grid-cols-1 col-span-1 bg-neutral-800 rounded-2xl border border-neutral-700 px-5 py-7 overflow-hidden group">
          <div className="row-start-1 col-start-1 translate-y-1/2 group-hover:translate-y-2/5 transition-all duration-500">
            <Database className="w-full h-full fill-neutral-700 group-hover:stroke-transparent group-hover:drop-shadow-neutral-400 drop-shadow-transparent drop-shadow-sm transition-all duration-500"></Database>
          </div>
          <div className="row-start-1 col-start-1">
            <h3 className="text-xl flex gap-2 items-center justify-start font-medium">
              <Postgres className="w-7 h-7 stroke-[1px]"></Postgres>
              PostgreSQL
            </h3>
            <p className="mt-4 text-base text-neutral-100">
              My SQL database of choice
            </p>
            <p className="mt-1 text-sm text-neutral-400">
              Used by LangPanel, alongside the postgres provider Supabase.
            </p>
          </div>
        </div>
        <div className="overflow-hidden col-span-1 bg-neutral-800 rounded-2xl border border-neutral-700 pt-7 flex flex-col justify-between">
          <div className="px-5">
            <h3 className="text-xl flex gap-2 items-center justify-start font-medium">
              <Tailwind className="w-6 fill-accent stroke-none"></Tailwind>
              Tailwind CSS
            </h3>
            <p className="mt-4 text-base text-neutral-100">
              Making everything look pretty
            </p>
            <p className="mt-1 text-sm text-neutral-400">
              For my styling needs, I often reach for Tailwind over plain CSS.
            </p>
          </div>
          <div className="text-2xl text-neutral-700 font-bold font-mono scale-105">
            <div className="animate-scroll-3 whitespace-nowrap inline-block">
              <p className="inline-block mr-2">
                w-full md:w-auto inline-flex items-center justify-center px-6
                py-3 border border-transparent text-base font-medium
              </p>
              <p className="inline-block">
                w-full md:w-auto inline-flex items-center justify-center px-6
                py-3 border border-transparent text-base font-medium
              </p>
            </div>
            <div className="animate-scroll-5 whitespace-nowrap inline-block">
              <p className="inline-block mr-2">
                grid grid-rows-[auto_1fr] gap-y-6 grid-cols-1 col-span-1
                bg-neutral-800 rounded-2xl border border-neutral-700 px-5 py-7
                overflow-hidden group
              </p>
              <p className="inline-block">
                grid grid-rows-[auto_1fr] gap-y-6 grid-cols-1 col-span-1
                bg-neutral-800 rounded-2xl border border-neutral-700 px-5 py-7
                overflow-hidden group
              </p>
            </div>
            <div className="animate-scroll-2 whitespace-nowrap inline-block">
              <p className="inline-block mr-2">
                row-start-2 col-start-1 w-3/4 self-end justify-self-center
                transition-all duration-500 mt-1 text-sm text-neutral-400
              </p>
              <p className="inline-block">
                row-start-2 col-start-1 w-3/4 self-end justify-self-center
                transition-all duration-500 mt-1 text-sm text-neutral-400
              </p>
            </div>
            <div className="animate-scroll-6 whitespace-nowrap inline-block">
              <p className="inline-block mr-2">
                grid grid-rows-[auto_1fr] gap-y-6 grid-cols-1 col-span-1
                bg-neutral-800 rounded-2xl border border-neutral-700 px-5 py-7
                overflow-hidden group
              </p>
              <p className="inline-block">
                grid grid-rows-[auto_1fr] gap-y-6 grid-cols-1 col-span-1
                bg-neutral-800 rounded-2xl border border-neutral-700 px-5 py-7
                overflow-hidden group
              </p>
            </div>
            <div className="animate-scroll-3 whitespace-nowrap inline-block">
              <p className="inline-block mr-2">
                col-span-1 bg-neutral-800 rounded-2xl border border-neutral-700
                px-5 py-7 mt-4 text-base text-neutral-100 w-7 fill-white
                stroke-none
              </p>
              <p className="inline-block">
                col-span-1 bg-neutral-800 rounded-2xl border border-neutral-700
                px-5 py-7 mt-4 text-base text-neutral-100 w-7 fill-white
                stroke-none
              </p>
            </div>
            <div className="animate-scroll-1 whitespace-nowrap inline-block">
              <p className="inline-block mr-2">
                w-full h-full fill-neutral-700 group-hover:stroke-transparent
                group-hover:drop-shadow-neutral-400 drop-shadow-transparent
                drop-shadow-xs transition-all duration-500
              </p>
              <p className="inline-block">
                w-full h-full fill-neutral-700 group-hover:stroke-transparent
                group-hover:drop-shadow-neutral-400 drop-shadow-transparent
                drop-shadow-xs transition-all duration-500
              </p>
            </div>
            <div className="animate-scroll-3 whitespace-nowrap inline-block">
              <p className="inline-block mr-2">
                col-span-1 md:col-span-2 bg-neutral-800 aspect-video px-3
                sm:px-5 py-5 sm:py-7 rounded-2xl border border-neutral-700 grid
                grid-cols-1 sm:grid-cols-2 overflow-x-clip group
              </p>
              <p className="inline-block">
                col-span-1 md:col-span-2 bg-neutral-800 aspect-video px-3
                sm:px-5 py-5 sm:py-7 rounded-2xl border border-neutral-700 grid
                grid-cols-1 sm:grid-cols-2 overflow-x-clip group
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-[auto_1fr] gap-y-6 grid-cols-1 col-span-1 bg-neutral-800 rounded-2xl border border-neutral-700 px-5 py-7 overflow-hidden group">
          <div className="row-start-1 col-start-1">
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
          <div className="row-start-2 col-start-1 h-4/5 self-end justify-self-center transition-all duration-500">
            <Brain className="w-full h-full fill-neutral-700 group-hover:stroke-transparent group-hover:drop-shadow-neutral-400 drop-shadow-transparent drop-shadow-xs transition-all duration-500"></Brain>
          </div>
        </div>
        <div className="col-span-1 bg-neutral-800 rounded-2xl border border-neutral-700 pt-7 flex flex-col justify-between overflow-hidden group">
          <div className="px-5">
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

          <div className="flex justify-center items-center py-6">
            <Server className="fill-neutral-700 w-3/4 group-hover:stroke-transparent group-hover:drop-shadow-neutral-400 drop-shadow-transparent drop-shadow-sm transition-all duration-500"></Server>
          </div>
        </div>
      </div>
    </section>
  );
}
