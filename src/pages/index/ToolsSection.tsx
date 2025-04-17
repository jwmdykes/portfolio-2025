import {
  Checkmark,
  Fastify,
  Postgres,
  PyTorch,
  ReactLogo,
  Tailwind,
} from '../../components/Icons';
import { SectionHeader } from './SectionHeader';

function ReactGlowLogo() {
  return (
    <ReactLogo className="row-start-1 col-start-1 sm:col-start-2 translate-x-1/2 sm:translate-x-0 justify-self-end sm:justify-self-center self-center h-11/12 fill-neutral-700 stroke-3 stroke-neutral-600"></ReactLogo>
  );
}

export function ToolsSection() {
  return (
    <section className="mt-30 sm:mt-60 container max-w-5xl mx-auto px-2 sm:px-8">
      <SectionHeader>My Favourite Tools</SectionHeader>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-5 md:grid-rows-3 lg:grid-rows-2">
        <div className="col-span-1 md:col-span-2 bg-neutral-800 aspect-video px-3 sm:px-5 py-5 sm:py-7 rounded-2xl border border-neutral-700 grid grid-cols-1 sm:grid-cols-2 overflow-x-clip">
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
  );
}
