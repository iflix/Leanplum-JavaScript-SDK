module.exports = {
  'extends': 'google',
  'parserOptions': {
    'ecmaVersion': 7,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    },
    'sourceType': 'module'
  },
  'env': {
    'node': true,
    'es6': true
  },
  'rules': {
    'semi': [
      'warn',
      'never'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'eqeqeq': 'off',
    'max-len': [2, 100, 2], // specify the maximum length of a line in your program (off by default)
    'comma-dangle': 0,
    'space-before-function-paren': ['warn', 'never'],
    'radix': [
      'error',
      'as-needed'
    ],
    'operator-linebreak': ['error', 'after'],
    'no-var': 0,
    'space-before-blocks': 0,
    'require-jsdoc': 1,
  },
  'globals': {
    'window': true,
    'navigator': true,
    'btoa': true,
    'location': true,
    'XMLHttpRequest': true,
    'XDomainRequest': true,
    'WebSocket': true,
    'localStorage': true,
    'alert': true
  }
}
