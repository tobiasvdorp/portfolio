import nextConfig from 'eslint-config-next/core-web-vitals';

const config = [
  {
    ignores: ['.next/**', 'out/**', 'node_modules/**', 'public/**'],
  },
  ...nextConfig,
  {
    rules: {
      'react-hooks/set-state-in-effect': 'off',
    },
  },
];

export default config;
