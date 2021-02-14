module.exports = {
  i18n: {
    defaultLocale: 'ko-KR',
    locales: ['en-US', 'ko-KR'],
  },
  images: {},
  publicRuntimeConfig: {
    TMDB_ACCESS_TOKEN: process.env.TMDB_ACCESS_TOKEN,
  },
  target: 'serverless',
};
