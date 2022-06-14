module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: 2021,
  },
  plugins: ["simple-import-sort", "import"],
  rules: {
    quotes: "off",
    "max-len": "off",
    "no-console": "error",
    "no-tabs": "off",
    "consistent-return": "off",
    "comma-dangle": "off",
    "object-curly-newline": "off",
    "implicit-arrow-linebreak": "off",
    "newline-per-chained-call": "off",
    "operator-linebreak": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
      },
    ],
    "import/prefer-default-export": "off",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Packages. `react` related packages come first
          ["^express", "^@?\\w"],
          // Internal components & containers
          ["^(models|middlewares)(/.*|$)"],
          // Internal apis
          ["^(services)(/.*|$)"],
          // Parent imports. Put `..` last
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          // Other relative imports. Put same-folder imports and `.` last
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
        ],
      },
    ],
    "simple-import-sort/exports": "error",
    // Main Rules
    "spaced-comment": "error",
    "no-inline-comments": "error",
    "no-nested-ternary": "off",
    "no-underscore-dangle": "off",
    "no-use-before-define": "error",
    "no-unsafe-optional-chaining": "error",
    "no-shadow": [
      "error",
      {
        hoist: "all",
        allow: ["resolve", "reject", "done", "next", "err", "error"],
      },
    ],
    "prettier/prettier": "off",
  },
  ignorePatterns: ["node_modules/"],
};
