module.exports = () => {
  return {
    webpack(config) {
      config.module.rules.unshift({
        test: /\.tsx?$/u,
        include: path => path.includes('libraries') || path.includes('modules'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react', '@babel/typescript', '@emotion/css-prop'],
            plugins: ['@babel/transform-runtime'],
          },
        },
      });

      return config;
    },
  };
};
