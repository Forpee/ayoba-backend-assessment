module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb-base",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
  ],
  rules: {
    "max-len": ["error", { "code": 110, "tabWidth": 4 }],
    "no-undef": "off", // TypeScript will check this
    "no-unused-vars": "off", // TypeScript will check this
    "linebreak-style": ["error", "windows"],
    "indent": ["error", 4],
    "quotes": ["error", "double"],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ]
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts"],
      },
    },
  },

};
