import { useCallback, useState } from 'react';
import { Hamburger, Logo } from './Icons';

export function Links() {
  return (
    <>
      <a
        href="https://medium.com/@98johndykes"
        className="text-neutral-100 flex items-center gap-2 underline decoration-transparent underline-offset-2 hover:underline-offset-4 hover:decoration-white transition-all duration-300"
        aria-label="Link To Blog"
      >
        View Blog
      </a>
      <a
        href="Resume John Dykes.pdf"
        className="text-neutral-100 flex items-center gap-2 underline decoration-transparent underline-offset-2 hover:underline-offset-4 hover:decoration-white transition-all duration-300"
        aria-label="Link To Download Resume"
      >
        Download CV
      </a>
    </>
  );
}

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((b) => !b);
  }, []);

  return (
    <nav className="z-50 bg-bg-top sticky top-0 flex flex-col justify-between px-2 sm:px-4 h-[60px] tracking-wide border-b border-border">
      <div className="grow flex justify-between">
        <div className="flex gap-4 sm:gap-7 text-sm font-medium items-center">
          <a
            href="/"
            className="text-white flex items-center gap-2 hover:brightness-90 transition-all"
            aria-label="Link To Home Page"
          >
            <Logo className="fill-white h-7"></Logo>
          </a>
        </div>
        <div className="gap-7 items-center text-sm hidden sm:flex font-medium">
          <Links />
        </div>

        <div className="sm:hidden flex items-center justify-center">
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
            <Links />
          </div>
        </>
      )}
    </nav>
  );
}
