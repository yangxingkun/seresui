//帮助内容
const helpSections = [
  {
    header: 'create-puracli',
    content: '一个快速生成组件库搭建环境的脚手架'
  },
  {
    header: 'Options',
    optionList: [
      {
        name: 'version',
        typeLabel: '{underline boolean}',
        description: '版本号'
      },
      {
        name: 'arg1',
        typeLabel: '{underline string}',
        description: '参数1'
      },
      {
        name: 'arg2',
        typeLabel: '{underline number}',
        description: '参数2'
      }
    ]
  }
];

//配置命令参数
const optionDefinitions = [
  {
    name: 'help',
    alias: 'h',
    type: Boolean
  },
  {
    name: 'version',
    alias: 'v',
    type: Boolean
  },
  {
    name: 'arg1',
    type: String
  },
  {
    name: 'arg2',
    type: Number
  }
];

export { helpSections, optionDefinitions };
