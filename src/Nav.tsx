import { CV, Folder, Home, Blog, Bomb, Gear } from './Icons';

export function Nav() {
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
