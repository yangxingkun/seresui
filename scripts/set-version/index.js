const fs = require('fs');
const path = require('path');

const componentPath = path.join(__dirname, '../../packages/seres_ui/package.json');
const utilsPath = path.join(__dirname, '../../packages/utils/package.json');

const componentPackage = require(componentPath);
const utilsPackage = require(utilsPath);

// 更新 component 的 dependencies 中的 utils 版本
componentPackage.dependencies['@seresui/utils'] = `^${utilsPackage.version}`;
fs.writeFileSync(componentPath, JSON.stringify(componentPackage, null, 2), 'utf8');

console.log(`Updated component dependencies to utils@${utilsPackage.version}`);
