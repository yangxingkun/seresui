export default {
    "/guide/": [{
            text: "基础",
            items: [{
                    collapsible: true, // 可折叠
                    collapsed: true, // 初始不折叠
                    text: "安装",
                    link: "/guide/installation",
                },
                {
                    text: "快速开始",
                    link: "/guide/quickstart",
                },
            ],
            children: [
                '/guide/installation',
                '/guide/quickstart',
            ]
        },
        {
            text: "进阶",
            items: [{
                text: "极致体验小米SU7",
                link: "/guide/SU7",
            }, ],
        },
    ],
    "/components/": [{
        text: "基础组件",
        items: [{
            text: "Button",
            link: "/components/button",
        }],
    }]
}