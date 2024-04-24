import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 计算当前文件所在目录
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentPath = path.join(__dirname, './packages/seres_ui/package.json');
const utilsPath = path.join(__dirname, './packages/utils/package.json');

// 使用动态导入来异步加载 JSON 文件
const loadJsonFile = async (filePath) => {
  const data = await import(`${filePath}`);
  return data.default;
};

async function updateDependencies() {
  const componentPackage = await loadJsonFile(componentPath);
  const utilsPackage = await loadJsonFile(utilsPath);

  // 更新 component 的 dependencies 中的 utils 版本
  componentPackage.dependencies['@seresui/utils'] = `^${utilsPackage.version}`;
  fs.writeFileSync(componentPath, JSON.stringify(componentPackage, null, 2), 'utf8');

  console.log(`Updated component dependencies to utils@${utilsPackage.version}`);
}

updateDependencies().catch(console.error);
