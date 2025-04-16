import {
  CV,
  Folder,
  Home,
  Blog,
  Bomb,
  Gear,
  Youtube,
  Github,
  Medium,
  Envelope,
} from './Icons';

function App() {
  return (
    <div className="h-dvh bg-linear-to-b from-bg-top to-bg-bottom grid grid-cols-[78px_1fr] grid-rows-1">
      <Nav />
      <article className="row-span-1 col-start-2 overflow-y-scroll pb-12">
        <section className="h-[400px] mt-12 container mx-auto outline-red-500 outline grid grid-cols-2 px-8">
          <div className="flex flex-col self-center">
            <h1 className="text-white text-6xl mb-4 font-semibold tracking-wide">
              John Dykes
            </h1>
            <h2 className="text-neutral-300 text-2xl mb-5">
              Full Stack Web Developer
            </h2>

            <hr className="h-1 bg-accent mb-16 border-none rounded-[1px] w-[min(21rem,100%)]" />

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
          <div className="outline outline-red-500"></div>
        </section>

        <section className="h-[200px] mt-12 container mx-auto outline-green-500 outline px-8">
          <p className="text-white">Section 2</p>
        </section>

        <section className="h-[400px] mt-12 container mx-auto outline-blue-500 outline px-8">
          <p className="text-white">Section 3</p>
        </section>
      </article>
    </div>
  );
}

function Nav() {
  return (
    <nav className="h-dvh col-span-1 row-span-1 flex flex-col justify-between border-r border-border py-8 text-[11px] font-semibold tracking-wide">
      <section className="grow flex flex-col gap-7">
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
          Explode
        </a>
      </section>
      <section className="flex flex-col items-center">
        <button
          className="text-white flex flex-col items-center hover:cursor-pointer bg-transparent hover:bg-icon-bg p-2 translate-y-2 rounded-xl group"
          aria-label="Open Settings"
        >
          <Gear className="fill-icon-fill w-8 group-hover:rotate-90 transition-all duration-500"></Gear>
        </button>
      </section>
    </nav>
  );
}

export default App;
