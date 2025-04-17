import { RightArrow } from '../../components/Icons';
import { ContactForm } from '../../components/ContactForm';
import { ExperienceSection } from './ExperienceSection';
import { SectionHeader } from './SectionHeader';
import { SocialLinks } from './SocialLinks';
import { ToolsSection } from './ToolsSection';

export function Page() {
  return (
    <article className="row-span-1 col-start-2 relative overflow-hidden">
      <section className="h-[calc(100svh-60px)] grid z-50">
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

          <SocialLinks />
        </div>
      </section>

      <section className="mt-16 text-white flex flex-col mx-auto max-w-[1472px]">
        <SectionHeader className="px-2">Featured Projects</SectionHeader>
        <ul className="grow grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-2 px-2">
          <li className="bg-neutral-600 aspect-video rounded-xl overflow-hidden">
            <img
              src="/langpanel.webp"
              alt="LangPanel Project Thumbnail"
              className="scale-100  hover:scale-105  transition-all"
            />
          </li>
          <li className="bg-neutral-600 aspect-video rounded-xl overflow-hidden">
            <img
              src="/react-calculator.webp"
              alt="React Calculator Video Project Thumbnail"
              className="scale-100  hover:scale-105 transition-all"
            />
          </li>
          <li className="bg-[#191f26] aspect-video rounded-xl overflow-hidden">
            <img
              src="/web-synth.webp"
              alt="WebAudio Synthesizer Project Thumbnail"
              className="scale-100 hover:scale-105 transition-all"
            />
          </li>
          <li className="bg-[#382370] aspect-video rounded-xl overflow-hidden">
            <img
              src="/coming-soon.webp"
              alt="WebAudio Synthesizer Project Thumbnail"
              className="scale-100 hover:scale-105 transition-all"
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
      <ToolsSection />

      <section className="mt-30 sm:mt-60 container mx-auto px-2 sm:px-8">
        <SectionHeader>Get In Touch</SectionHeader>
        <ContactForm />
      </section>
    </article>
  );
}
