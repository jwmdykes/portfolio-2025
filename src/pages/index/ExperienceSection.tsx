import { useState } from 'react';
import { DownChevron, RightArrow } from '../../components/Icons';
import { SectionHeader } from './SectionHeader';

export { ExperienceSection };

function ExperienceSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="mt-30 sm:mt-60 container mx-auto px-2 sm:px-8 flex flex-col w-[min(100%,900px)]">
      <SectionHeader>Recent Experience</SectionHeader>

      <div className="flex w-full gap-6 mt-4">
        <div className="grow">
          <ol className="grid grid-cols-1 gap-10">
            <li className="">
              <h3 className="text-xl font-medium">
                <a href="https://langpanel.com" className="flex gap-2 group">
                  LangPanel
                  <RightArrow className="w-4 fill-white group-hover:fill-accent group-hover:translate-x-1 translate-y-[1px] transition-all duration-300"></RightArrow>
                </a>
              </h3>
              <h4 className="text-base text-neutral-300 font-light mb-2">
                Founder / May 2024 &mdash; Present
              </h4>
              <ul className="text-neutral-200 flex flex-col gap-1">
                <li className="before:shrink-0 before:w-[0.48rem] before:aspect-square before:bg-accent before:rounded-full before:mt-2 flex items-start gap-2">
                  Developing AI powered translation application for comics
                </li>
                <li className="before:shrink-0 before:w-[0.48rem] before:aspect-square before:bg-accent before:rounded-full before:mt-2 flex items-start gap-2">
                  OCR AI model designed and trained using pytorch and
                  proprietary text rendering library.
                </li>
                <li className="before:shrink-0 before:w-[0.48rem] before:aspect-square before:bg-accent before:rounded-full before:mt-2 flex items-start gap-2">
                  Models run in the browser with WebGPU, reducing costs
                </li>
              </ul>
            </li>

            <li className="">
              <h3 className="text-xl font-medium">
                Communications Security Establishment
              </h3>
              <h4 className="text-bas text-neutral-300 font-light mb-2">
                Cryptanalyst / September 2020 &mdash; May 2024
              </h4>
              <ul className="text-neutral-200 flex flex-col gap-1">
                <li className="before:shrink-0 before:w-[0.48rem] before:aspect-square before:bg-accent before:rounded-full before:mt-2 flex items-start gap-2">
                  Implementing, evaluating cryptographic standards and
                  algorithms
                </li>
                <li className="before:shrink-0 before:w-[0.48rem] before:aspect-square before:bg-accent before:rounded-full before:mt-2 flex items-start gap-2">
                  Other top secret cryptographic research
                </li>
              </ul>
            </li>

            <li className="">
              <h3 className="text-xl font-medium">
                Communications Research Centre Canada
              </h3>
              <h4 className="text-base text-neutral-300 font-light mb-2">
                Analyst / September 2019 &mdash; September 2020
              </h4>
              <ul className="text-neutral-200 flex flex-col gap-1">
                <li className="before:shrink-0 before:w-[0.48rem] before:aspect-square before:bg-accent before:rounded-full before:mt-2 flex items-start gap-2">
                  Implementing, evaluating cryptographic standards and
                  algorithms
                </li>
                <li className="before:shrink-0 before:w-[0.48rem] before:aspect-square before:bg-accent before:rounded-full before:mt-2 flex items-start gap-2">
                  Other top secret cryptographic research
                </li>
              </ul>
            </li>

            <li className="">
              <h3 className="text-xl font-medium">University of Waterloo</h3>
              <h4 className="text-base text-neutral-300 font-light mb-2">
                Graduate Student / January 2019 &mdash; December 2019
              </h4>
              <ul className="text-neutral-200 flex flex-col gap-1">
                <li className="before:shrink-0 before:w-[0.48rem] before:aspect-square before:bg-accent before:rounded-full before:mt-2 flex items-start gap-2">
                  Master's degree program in mathematics
                </li>
                <li className="before:shrink-0 before:w-[0.48rem] before:aspect-square before:bg-accent before:rounded-full before:mt-2 flex items-start gap-2">
                  <span>
                    Studied analytic number theory with{' '}
                    <a
                      href="https://uwaterloo.ca/pure-mathematics/yu-ru-liu"
                      className="inline underline underline-offset-2 decoration-white decoration-1 hover:decoration-accent transition-all duration-300"
                    >
                      Professor Yu-Ru Liu
                    </a>
                  </span>
                </li>
              </ul>
            </li>

            {expanded && (
              <>
                <li className="">
                  <h3 className="text-xl font-medium">
                    University of Waterloo
                  </h3>
                  <h4 className="text-base text-neutral-300 font-light mb-2">
                    Graduate Student / January 2019 &mdash; December 2019
                  </h4>
                  <ul className="text-neutral-200 flex flex-col gap-1">
                    <li className="before:shrink-0 before:w-[0.48rem] before:aspect-square before:bg-accent before:rounded-full before:mt-2 flex items-start gap-2">
                      Master's degree program in mathematics
                    </li>
                    <li className="before:shrink-0 before:w-[0.48rem] before:aspect-square before:bg-accent before:rounded-full before:mt-2 flex items-start gap-2">
                      <span>
                        Studied analytic number theory with{' '}
                        <a
                          href="https://uwaterloo.ca/pure-mathematics/yu-ru-liu"
                          className="inline underline underline-offset-2 decoration-white decoration-1 hover:decoration-accent transition-all duration-300"
                        >
                          Professor Yu-Ru Liu
                        </a>
                      </span>
                    </li>
                  </ul>
                </li>
                <li className="">
                  <h3 className="text-xl font-medium">
                    University of Waterloo
                  </h3>
                  <h4 className="text-base text-neutral-300 font-light mb-2">
                    Graduate Student / January 2019 &mdash; December 2019
                  </h4>
                  <ul className="text-neutral-200 flex flex-col gap-1">
                    <li className="before:shrink-0 before:w-[0.48rem] before:aspect-square before:bg-accent before:rounded-full before:mt-2 flex items-start gap-2">
                      Master's degree program in mathematics
                    </li>
                    <li className="before:shrink-0 before:w-[0.48rem] before:aspect-square before:bg-accent before:rounded-full before:mt-2 flex items-start gap-2">
                      <span>
                        Studied analytic number theory with{' '}
                        <a
                          href="https://uwaterloo.ca/pure-mathematics/yu-ru-liu"
                          className="inline underline underline-offset-2 decoration-white decoration-1 hover:decoration-accent transition-all duration-300"
                        >
                          Professor Yu-Ru Liu
                        </a>
                      </span>
                    </li>
                  </ul>
                </li>
              </>
            )}
          </ol>
          <input
            type="checkbox"
            className="sr-only"
            id="show-more-experience"
            checked={expanded}
            onChange={() => setExpanded((b) => !b)}
          />
          <label
            htmlFor="show-more-experience"
            className="mt-10 hover:cursor-pointer text-neutral-100 hover:text-white font-medium transition-all duration-300 flex justify-start group items-center gap-2"
          >
            <DownChevron
              className={`translate-y-[1px] w-4 fill-white group-hover:fill-accent transition-all duration-300 ${
                expanded
                  ? 'rotate-180 group-hover:-translate-y-0.5'
                  : 'group-hover:translate-y-0.5'
              }`}
            ></DownChevron>
            {expanded ? 'Show Less' : 'Show More'}
          </label>
        </div>
        <div className="hidden sm:grid">
          <div className="justify-self-center row-start-1 col-start-1 w-[1px] rounded-full h-full bg-neutral-300"></div>
          <div className="row-start-1 col-start-1 rounded-[3px] w-2 aspect-square bg-accent" />
        </div>
      </div>
    </section>
  );
}
