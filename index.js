module.exports = {
  "semi": false,
  "singleQuote": true,
  "singleAttributePerLine": true,
  "importOrder": [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "^@/app/(.*)$",
    "^@/components/(.*)$",
    "^@/constants/(.*)$",
    "^@/utils/(.*)$",
    "^@/types$",
    "^@/styles/(.*)$"
  ],
  "plugins": ["@ianvs/prettier-plugin-sort-imports"]
}
