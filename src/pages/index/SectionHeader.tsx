import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export function SectionHeader({
  children,
  className,
  ...rest
}: ComponentProps<'h2'>) {
  return (
    <h2
      className={twMerge(
        'sm:text-center text-5xl sm:text-6xl font-semibold tracking-wide mb-4 sm:mb-18 leading-14',
        className
      )}
      {...rest}
    >
      {children}
    </h2>
  );
}
