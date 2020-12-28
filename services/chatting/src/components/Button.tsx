import { Button as MaterialButton } from '@material-ui/core';
import { useRouter } from 'next/router';
import { ComponentProps, forwardRef } from 'react';

interface LinkButtonProps extends ComponentProps<typeof MaterialButton> {
  href: string;
  replace?: boolean;
}

const LinkButton = forwardRef<HTMLButtonElement, LinkButtonProps>(
  ({ children, href, replace = false, onClick, ...props }, ref) => {
    const router = useRouter();

    return (
      <MaterialButton
        ref={ref}
        onClick={e => {
          onClick?.(e);

          if (replace) {
            router.replace(href);
          }

          router.push(href);
        }}
        {...props}
      >
        {children}
      </MaterialButton>
    );
  }
);

export const Button = {
  Link: LinkButton,
};
