import { Folder, Hamburger, Home } from './Icons';

export function Nav() {
  return (
    <nav className="z-50 bg-bg-top sticky top-0 flex flex-col justify-between px-2 sm:px-6 h-[60px] font-semibold tracking-wide border-b border-border">
      <div className="grow flex justify-between">
        <div className="flex gap-4 sm:gap-7 text-sm">
          <a
            href="/"
            className="text-white flex items-center gap-2 hover:brightness-90 transition-all"
            aria-label="Link To Home Page"
          >
            <Home className="fill-accent w-[1.35rem]"></Home>
            <span>Home</span>
          </a>

          <a
            href="/projects"
            className="text-white flex items-center gap-2 hover:brightness-90 transition-all"
            aria-label="Link To Projects Archive"
          >
            <Folder className="fill-icon-fill w-6"></Folder>
            <span>Projects</span>
          </a>
        </div>

        <div className="gap-7 items-center text-sm hidden sm:flex">
          <a
            href="#"
            className="text-neutral-100 flex items-center gap-2 underline decoration-transparent underline-offset-2 hover:decoration-white transition-all"
            aria-label="Link To Blog"
          >
            View Blog
          </a>
          <a
            href="#"
            className="text-neutral-100 flex items-center gap-2 underline decoration-transparent underline-offset-2 hover:decoration-white transition-all"
            aria-label="Link To Blog"
          >
            Socials
          </a>
          <a
            href="#"
            className="text-neutral-100 flex items-center gap-2 underline decoration-transparent underline-offset-2 hover:decoration-white transition-all"
            aria-label="Link To Download Resume"
          >
            Download CV
          </a>
        </div>

        <div className="sm:hidden flex items-center justify-center ">
          <button
            className="p-2 translate-x-2 hover:cursor-pointer hover:bg-neutral-800 rounded-xl"
            aria-label="Toggle Sidemenu button"
          >
            <Hamburger className="fill-icon-fill w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
