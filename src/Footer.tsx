import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Github } from './Icons';

export function Footer({
  className,
  ...props
}: ComponentPropsWithoutRef<'footer'>) {
  return (
    <footer
      className={twMerge(
        'flex justify-between px-4 sm:px-6 py-5 text-base text-neutral-300 bg-bg-bottom',
        className
      )}
      {...props}
    >
      <span>© 2025 John Dykes</span>
      <a
        href="https://github.com/jwmdykes/portfolio-2025"
        className="flex gap-2 fill-neutral-300 hover:fill-white hover:text-white transition-all"
      >
        <Github className="w-5" />
        Source Code
      </a>
    </footer>
  );
}
