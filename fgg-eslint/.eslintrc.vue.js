// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
      parser: 'babel-eslint'
    },
    env: {
      browser: true,
      node: true,
      es6: true,
      mocha: true
    },
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    extends: [
      'standard',
      'eslint:recommended',
      'plugin:vue/essential',
      'plugin:vue/strongly-recommended'
    ],
    // required to lint *.vue files
    plugins: [
      'vue'
    ],
    // check if imports actually resolve
    settings: {
      'import/resolver': {
        webpack: {
          config: 'client/build/webpack.base.conf.js'
        }
      }
    },
    // add your custom rules here
    "rules": {
      "prefer-const": ["error", {
        "destructuring": "any",
        "ignoreReadBeforeAssign": true
      }],
      "comma-spacing": ["error", { "before": false, "after": true }],
      "no-console": ["error", { "allow": ["info", "error"] }],
      "quotes": [2, "single", "avoid-escape"],
      "semi": ["error", "never"],
      "no-var": 2,
      "no-unused-vars": ["error", {
        "varsIgnorePattern": "[iI]gnored",
        "args": "none",
        "caughtErrors": "all",
        "ignoreRestSiblings": true
      }],
      "camelcase": [1],
      "indent": ["error", 4],
      "comma-dangle": 1,
      "max-len": 1,
      "no-multi-str": 1,
      "global-require": 1,
      "no-mixed-operators": 1,
      "space-before-function-paren": ["error", {
        "anonymous": "always",
        "named": "always",
        "asyncArrow": "always"
      }],
      "no-trailing-spaces": ["error"],
      "object-curly-spacing": ["error", "always"],
      "keyword-spacing": ["error"],
      "key-spacing": ["error", { "beforeColon": false }],
      "padding-line-between-statements": [
        "error",
        { "blankLine": "always", "prev": "*", "next": "return" },
        { "blankLine": "always", "prev": "block-like", "next": "*" },
        { "blankLine": "always", "next": "block-like", "prev": "*" },
        { "blankLine": "always", "prev": ["const", "let", "var"], "next": "*" },
        { "blankLine": "any", "prev": ["const", "let", "var"], "next": ["const", "let", "var"] }
      ],
      // VUE rules:
      "import/no-duplicates": 1,
      "vue/no-reserved-keys": 0
    }
  }
  
