import facepaint from 'facepaint';

export const sm = 640 as const;
export const md = 768 as const;
export const lg = 1024 as const;
export const xl = 1280 as const;
export const xxl = 1536 as const;

export const mq = facepaint([
  `@media(min-width: ${sm}px)`,
  `@media(min-width: ${md}px)`,
  `@media(min-width: ${lg}px)`,
  `@media(min-width: ${xl}px)`,
  `@media(min-width: ${xxl}px)`,
]);
