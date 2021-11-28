import NextLink from 'next/link';

export const Link = ({
  href,
  passHref = true,
  ...props
}) => (
  <NextLink href={href} passHref={passHref}>
    <a {...props} />
  </NextLink>
);
