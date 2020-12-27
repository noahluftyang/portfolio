module.exports = api => {
  api.cache(true);

  return {
    presets: ['babel-preset-expo', '@babel/typescript'],
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
            requests: './src/requests',
            screens: './src/screens',
          },
        },
      ],
    ],
  };
};
