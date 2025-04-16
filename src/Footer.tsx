import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

export function Footer({
  className,
  ...props
}: ComponentPropsWithoutRef<'footer'>) {
  return (
    <footer
      className={twMerge(
        'flex justify-center py-8 text-lg text-neutral-300',
        className
      )}
      {...props}
    >
      © 2025 John Dykes
    </footer>
  );
}
