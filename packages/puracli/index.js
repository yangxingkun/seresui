#! /usr/bin/env node

import commandLineArgs from 'command-line-args';
import commandLineUsage from 'command-line-usage';
import chalk from 'chalk';
import prompts from 'prompts';
import download from 'download-git-repo';
import ora from 'ora';
import fs from 'fs';
import { helpSections, optionDefinitions } from './lib/helper.js';
import { successBox, errorBox } from './lib/utils.js';
const options = commandLineArgs(optionDefinitions);

const promptsOptions = [
  {
    type: 'text', //单选
    name: 'name',
    message: 'project-name',
    validate(val) {
      if (!val) return '模板名称不能为空！';
      if (fs.existsSync(val)) return '项目名已存在';
      if (val.match(/[^A-Za-z0-9\u4e00-\u9fa5_-]/g))
        return '模板名称包含非法字符，请重新输入';
      return true;
    }
  },

  {
    type: 'select', //单选
    name: 'template',
    message: 'select a framework',
    choices: [
      {
        title: 'Xmw-Admin',
        value: 1
      },
      {
        title: 'unibest-MiniProgram',
        value: 2
      }
    ]
  }
];

//clone方法
const gitClone = (remote, name, option) => {
  const loadingOra = ora('正在下载模板...').start();
  return new Promise((resolve, reject) => {
    download(remote, name, option, (err) => {
      if (err) {
        loadingOra.fail();
        process.stdout.write(
          errorBox(err, '因为克隆GitHub项目，网络稳定很重要，创建失败！')
        );
        reject(err);
        return;
      }
      loadingOra.succeed(chalk.green('success'));

      process.stdout.write(
        successBox(
          `您可以通过以下命令运行项目：\n\n$ cd ${name} \n$ pnpm install \n$ pnpm dev`,
          `${name} 创建完成 🎉`
        )
      );
      resolve();
    });
  });
};
const remoteList = {
  1: 'https://github.com/yangxingkun/Xmw-Admin.git',
  2: 'https://github.com/codercup/unibest.git'
};
const branch = 'main';
const getInputInfo = async () => {
  const res = await prompts(promptsOptions);
  if (!(res.name && res.template)) return;
  gitClone(`direct:${remoteList[res.template]}#${branch}`, res.name, {
    clone: true
  });
};

if (options.help) {
  console.log(chalk.green(commandLineUsage(helpSections)));
} else {
  getInputInfo();
}
