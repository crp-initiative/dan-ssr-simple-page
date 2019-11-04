/**
 * Eslint Configuration
 *
 * http://eslint.org/docs/user-guide/configuring
 *
 */

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  // eslint configs
  extends: ['airbnb-base', 'plugin:node/recommended', 'prettier'],
  // eslint plugins
  plugins: ['prettier'],
  // environments -- test and node
  env: {
    es6: true,
    node: true,
    jest: true
  },
  // rule overrides
  rules: {
    // forbid the import of external modules that are not
    // declared in the package.json's dependencies/devDependencies,
    'import/no-extraneous-dependencies': ['error', { packageDir: '.' }],
    // set the maximum line length to hard limit, urls ignored
    'max-len': ['error', { code: 120, ignoreUrls: true }],
    // do not allow console.log, only warn and error
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info']
      }
    ],
    'node/no-unsupported-features/es-syntax': [
      'error',
      {
        ignores: ['modules']
      }
    ],
    // apply prettier rules
    'prettier/prettier': 'error'
  },
  // webpack module resolution
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', './']
      }
    }
  }
};
