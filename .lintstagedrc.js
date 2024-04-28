module.exports = {
  '**/*.{ts,tsx}': [
    "tsc --noEmit", // 检查 TypeScript
    "eslint --cache --fix",
  ],
  '**/*.{js,jsx}': [
    "eslint --cache --fix",
  ],
  "**/*.vue": [
    "eslint --cache --fix",
  ],
  "**/*.{css,less}": [
    "stylelint --cache --fix",
  ]
}