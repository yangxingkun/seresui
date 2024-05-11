module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "plugin:@typescript-eslint/recommended",
        // 接入 prettier 的规则
        "prettier",
        "plugin:prettier/recommended"
    ],
    globals: {
        defineOptions: true
    },
    parser: "vue-eslint-parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        parser: "@typescript-eslint/parser"
    },
    plugins: ["vue", "@typescript-eslint"],
    rules: {
        // 开启 prettier 自动修复的功能
        "prettier/prettier": "error",
        "@typescript-eslint/ban-ts-comment": "off",
        "vue/multi-word-component-names": "off",
        '@typescript-eslint/no-var-requires': 'off', // 强制使用 import 且不允许使用 require 设置off关闭检查
        "@typescript-eslint/no-unused-vars":"warn",
        "@typescript-eslint/no-empty-function":"warn",
    }
};
