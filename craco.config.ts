// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import CracoAlias from 'craco-alias';

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        tsConfigPath: './tsconfig.paths.json',
      },
    },
  ],
  webpack: {
    configure: {
      resolve: {
        fallback: {
          util: require.resolve('util/'),
        },
      },
    },
  },
};
