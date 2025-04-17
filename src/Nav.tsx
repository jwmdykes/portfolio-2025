import { Folder, Home } from './Icons';

export function Nav() {
  return (
    <nav className="bg-bg-top sticky top-0 flex flex-col justify-between border-b border-border px-6 py-4 font-semibold tracking-wide">
      <div className="grow flex justify-between">
        <div className="flex gap-7">
          <a
            href="#"
            className="text-white flex items-center gap-2 hover:brightness-90 transition-all"
            aria-label="Link To Home Page"
          >
            <Home className="fill-icon-fill-focus w-[1.35rem]"></Home>
            <span>Home</span>
          </a>

          <a
            href="/projects"
            className="text-white flex items-center gap-2 hover:brightness-90 transition-all"
            aria-label="Link To Projects Archive"
          >
            <Folder className="fill-icon-fill w-6"></Folder>
            Projects
          </a>
        </div>

        <div className="flex gap-7 items-center">
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
      </div>
    </nav>
  );
}
