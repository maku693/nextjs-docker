module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/recommended",
    "plugin:import/react",
    "prettier",
  ],
  overrides: [
    {
      env: {
        "jest/globals": true,
      },
      extends: ["plugin:jest/recommended", "plugin:jest-dom/recommended"],
      files: [
        "__tests__/**/*.js",
        "__tests__/**/*.jsx",
        "**/*.test.js",
        "**/*.test.jsx",
      ],
    },
  ],
  root: true,
  rules: {
    "import/no-unresolved": "off",
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
        },
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "never",
      },
    ],
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
  },
  settings: {
    "import/internal-regex": "^@/pages",
    react: {
      version: "detect",
    },
  },
};
