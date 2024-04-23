import search from "./config/search";
// import algolia from "./config/algolia";
import socialLinks from "./config/socialLinks";
import nav from "./config/nav";
import sidebar from "./config/sidebar";

export default {
    // base: process.env.NODE_ENV === 'production' ? '/seres/' : '/',//gitee
    base: process.env.NODE_ENV === 'production' ? '/seresui/' : '/',//github
    // base:"/",//github
    lang: "zh", // 中文，英文设置en-US
    title: "杨兴坤编程学习笔记", // 浏览器标签标题
    description: "软件开发计：开发文档和开发计划，完成功能工具，和待开发的功能和工具",
    markdown: {
        // 主题选择：https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes
        // 主题预览：https://vscodethemes.com/
        // 添加自定义的主题(加载主题)：https://github.com/shikijs/shiki/blob/main/docs/themes.md#loading-theme
        theme: "one-dark-pro",
        lineNumbers: true, // 显示代码行数
    },

    themeConfig: {
        siteTitle: "赛力斯",
        // logo:""
        search,
        nav,
        socialLinks,
        sidebar,

        // 编辑
        // editLink: {
        //     pattern: 'https://gitee.com/muyaCode/program-learn-notes/edit/main/docs/:path',
        //     text: '在 Gitee上编辑此页'
        // },
        // 自定义上次更新的文本和日期格式
        lastUpdated: {
            text: '上次更新：',
            formatOptions: {
                dateStyle: 'full',
                timeStyle: 'medium'
            }
        },
        docFooter: {
            prev: '上一篇',
            next: '下一篇'
        },
        // 右边文档大纲下面的-卡片广告
        // carbonAds: {
        //   code: '卡片广告 code',
        //   placement: '卡片广告布置'
        // },

        // 首页页脚配置。您可以添加消息和版权。仅当页面由于设计原因不包含边栏时，才会显示页脚。
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2024  heyu'
        },
    },
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: './logo3.webp'
            }
        ]
        // ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ],

};