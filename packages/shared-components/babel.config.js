let defaultPresets;

if (process.env.BABEL_ENV === 'es') {
  defaultPresets = [];
} else {
  defaultPresets = [
    [
      '@babel/preset-env',
      {
        modules: ['esm', 'production-umd'].includes(process.env.BABEL_ENV) ? false : 'commonjs',
      },
    ],
  ];
}

const plugins = [
  ['@babel/plugin-proposal-class-properties', { loose: true }],
  ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
  '@babel/plugin-transform-object-assign',
  '@babel/plugin-transform-runtime',
]

const productionPlugins = [
  'transform-react-constant-elements',
  'transform-dev-warning'
];

module.exports = {
  presets: defaultPresets.concat(['@babel/preset-react']),
  plugins,
  ignore: [/@babel[\\|/]runtime/],
  env: {
    cjs: {
      plugins: productionPlugins,
    },
    esm: {
      plugins: productionPlugins,
    },
    es: {
      plugins: productionPlugins,
    },
    production: {
      plugins: productionPlugins,
    },
    'production-umd': {
      plugins: productionPlugins,
    },
    development: {
      plugins: [
        [
          'babel-plugin-module-resolver',
          {
            alias: {
              modules: './modules',
            },
          },
        ],
      ],
    },
  }
}