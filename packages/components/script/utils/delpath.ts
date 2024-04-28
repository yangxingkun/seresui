import fs from 'fs';
import { resolve } from 'path';
import { pkgPath } from './paths';
const currentFileName = 'seres_ui';
//保留的文件
const stayFile = ['package.json', 'README.md', 'LICENSE'];

const delPath = async (path: string) => {
  let files: string[] = [];

  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);

    files.forEach(async (file) => {
      const curPath = resolve(path, file);

      if (fs.statSync(curPath).isDirectory()) {
        // recurse
        if (file != 'node_modules') await delPath(curPath);
      } else {
        // delete file
        if (!stayFile.includes(file)) {
          fs.unlinkSync(curPath);
        }
      }
    });
    console.log('[ path ] >', path, `${pkgPath}/${currentFileName}`);
    if (path != `${pkgPath}/${currentFileName}`)
      fs.rmSync(path, { recursive: true, force: true });
  }
};

export { delPath, currentFileName };
