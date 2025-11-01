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

// REFACTORED: The logo no longer needs complex positioning classes.
// The parent grid will handle all centering.
function ReactGlowLogo() {
  return (
    <ReactLogo className="h-full w-full fill-neutral-700 drop-shadow-transparent transition-all duration-500 group-hover:drop-shadow-neutral-400" />
  );
}

export function ToolsSection() {
  return (
    <section className="container mx-auto mt-30 max-w-5xl px-2 sm:mt-60 sm:px-8">
      <SectionHeader>My Favourite Tools</SectionHeader>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-[340px_340px_340px] lg:grid-rows-[400px_400px]">
        {/* === REFACTORED REACT CARD === */}
        <div className="group grid grid-cols-1 grid-rows-1 place-items-center overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-800">
          {/* BG Logo Container: Occupies the whole space but is visually behind */}
          <div className="col-start-1 row-start-1 h-3/4 w-3/4 animate-slowSpin">
            <ReactGlowLogo />
          </div>

          {/* Text Content: Also in the first cell, but with padding and a higher z-index. */}
          <div className="z-10 col-start-1 row-start-1 flex h-full w-full flex-col justify-between gap-12 p-5 sm:p-7 sm:gap-0">
            <div>
              <h3 className="flex items-center justify-start gap-2 text-xl font-medium">
                <ReactLogo className="w-7 fill-react-blue" />
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
            <ul className="flex flex-col gap-1 text-sm">
              <li className="flex gap-1">
                <Checkmark className="w-[0.8rem] translate-y-[1px] fill-white" />
                <span>Over five years of experience</span>
              </li>
              <li className="flex gap-1">
                <Checkmark className="w-[0.8rem] translate-y-[1px] fill-white" />
                <span>Crafting lightning fast pages</span>
              </li>
              <li className="flex gap-1">
                <Checkmark className="w-[0.8rem] translate-y-[1px] fill-white" />
                <span>Making interactive web apps</span>
              </li>
            </ul>
          </div>
        </div>

        {/* === REFACTORED POSTGRESQL CARD === */}
        <div className="group grid grid-cols-1 grid-rows-1 overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-800 p-5 py-7">
          {/* BG Icon Container: Use flexbox to push the icon to the bottom and center it. */}
          <div className="col-start-1 row-start-1 flex h-full w-full items-end justify-center opacity-40">
            <Database className="h-5/6 w-5/6 fill-neutral-700 drop-shadow-transparent transition-all duration-500 group-hover:drop-shadow-neutral-400" />
          </div>

          {/* Text Content: On top, with a higher z-index. */}
          <div className="z-10 col-start-1 row-start-1">
            <h3 className="flex items-center justify-start gap-2 text-xl font-medium">
              <Postgres className="h-7 w-7 stroke-[1px]" />
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

        {/* === TAILWIND CARD (UNCHANGED) === */}
        <div className="col-span-1 flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-800 pt-7">
          <div className="px-5">
            <h3 className="flex items-center justify-start gap-2 text-xl font-medium">
              <Tailwind className="w-6 fill-accent stroke-none" />
              Tailwind CSS
            </h3>
            <p className="mt-4 text-base text-neutral-100">
              Making everything look pretty
            </p>
            <p className="mt-1 text-sm text-neutral-400">
              For my styling needs, I often reach for Tailwind over plain CSS.
            </p>
          </div>
          <div className="scale-105 text-2xl font-mono font-bold text-neutral-700">
            <div className="animate-scroll-3 inline-block whitespace-nowrap">
              <p className="mr-2 inline-block">
                w-full md:w-auto inline-flex items-center justify-center px-6
                py-3 border border-transparent text-base font-medium
              </p>
              <p className="inline-block">
                w-full md:w-auto inline-flex items-center justify-center px-6
                py-3 border border-transparent text-base font-medium
              </p>
            </div>
            <div className="animate-scroll-5 inline-block whitespace-nowrap">
              <p className="mr-2 inline-block">
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
          </div>
        </div>

        {/* === PYTORCH CARD (UNCHANGED) === */}
        <div className="group grid grid-cols-1 grid-rows-[auto_1fr] gap-y-4 overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-800 px-5 py-7">
          <div>
            <h3 className="flex items-center justify-start gap-2 text-xl font-medium">
              <PyTorch className="w-6 stroke-none" />
              PyTorch
            </h3>
            <p className="mt-4 text-base text-neutral-100">
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
          <div className="col-start-1 row-start-2 h-full self-center justify-self-center transition-all duration-500">
            <Brain className="h-full w-full fill-neutral-700 drop-shadow-transparent drop-shadow-xs transition-all duration-500 group-hover:stroke-transparent group-hover:drop-shadow-neutral-400" />
          </div>
        </div>

        {/* === FASTIFY CARD (UNCHANGED) === */}
        <div className="group col-span-1 flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-800 pt-7">
          <div className="px-5">
            <h3 className="flex items-center justify-start gap-2 text-xl font-medium">
              <Fastify className="w-7 fill-white stroke-none" />
              Fastify
            </h3>
            <p className="mt-4 text-base text-neutral-100">
              My go-to backend framework
            </p>
            <p className="mt-1 text-sm text-neutral-400">
              Serverless is great, but sometimes you need a real backend. I
              default to Fastify.
            </p>
          </div>

          <div className="flex items-center justify-center py-6">
            <Server className="w-3/4 fill-neutral-700 drop-shadow-transparent drop-shadow-sm transition-all duration-500 group-hover:stroke-transparent group-hover:drop-shadow-neutral-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
