module.exports = {
    // 注册 stylelint 的 prettier 插件
    plugins: ["stylelint-prettier"],
    // 继承一系列规则集合
    extends: [
        // standard 规则集合
        "stylelint-config-standard",
        "stylelint-config-recommended-less",
        // 样式属性顺序规则
        "stylelint-config-recess-order",
        // 接入 Prettier 规则
        "stylelint-config-prettier",
        "stylelint-prettier/recommended"
    ],
    "customSyntax": "postcss-less",
    // 配置 rules
    rules: {
        // 开启 Prettier 自动格式化功能
        "prettier/prettier": true,
        "no-duplicate-selectors":null,
        // "selector-class-pattern": null , // 自定义类名格式规则
        "selector-class-pattern": "^[a-z][a-zA-Z0-9]*([-_]{1,9}[a-zA-Z0-9]+)*$"  // 支持单个或双连字符和下划线
        // 自定义类名格式规则

    }
};