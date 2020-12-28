module.exports = api => {
  api.cache(true);

  return {
    extends: '../../.babelrc',
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            components: './src/components',
            constants: './src/constants',
            hooks: './src/hooks',
            navigators: './src/navigators',
            screens: './src/screens',
            utils: './src/utils',
          },
        },
      ],
    ],
  };
};
