import { useCallback, useState } from 'react';
import { Folder, Hamburger, Home } from './Icons';

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((b) => !b);
  }, []);

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
            href="https://medium.com/@98johndykes"
            className="text-neutral-100 flex items-center gap-2 underline decoration-transparent underline-offset-2 hover:decoration-white transition-all"
            aria-label="Link To Blog"
          >
            View Blog
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
            onClick={toggleMenu}
            className="p-2 translate-x-2 hover:cursor-pointer hover:bg-neutral-800 rounded-xl"
            aria-label="Toggle Sidemenu button"
          >
            <Hamburger className="fill-icon-fill w-6" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <>
          <div
            className="fixed top-0 left-0 h-dvh w-dvh"
            onPointerDown={(e) => {
              e.preventDefault();
              toggleMenu();
            }}
          ></div>
          <div className="z-10 absolute top-[calc(100%+10px)] right-2 rounded-lg  bg-bg-top text-white py-4 flex flex-col items-end px-4 gap-4 border border-border">
            <a
              href="https://medium.com/@98johndykes"
              className="underline decoration-transparent underline-offset-2 hover:decoration-white transition-all"
              aria-label="Link To Blog"
            >
              View Blog
            </a>
            <a
              href="#"
              className="underline decoration-transparent underline-offset-2 hover:decoration-white transition-all"
              aria-label="Link To Download Resume"
            >
              Download CV
            </a>
          </div>
        </>
      )}
    </nav>
  );
}
