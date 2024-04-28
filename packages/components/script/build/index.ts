import { series, parallel, src, dest } from 'gulp';
import less from 'gulp-less';
import autoprefixer from 'gulp-autoprefixer';
import { delPath, currentFileName } from '../utils/delpath';
import { componentPath, pkgPath } from '../utils/paths';
import run from '../utils/run';

// 删除 seres_ui
export const removeDist = () => {
  return delPath(`${pkgPath}/${currentFileName}`);
};

//打包样式
export const buildStyle = () => {
  return src(`${componentPath}/src/**/style/**.less`)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/${currentFileName}/lib/src`))
    .pipe(dest(`${pkgPath}/${currentFileName}/es/src`));
};

//打包组件
export const buildComponent = async () => {
  run('pnpm run build', componentPath);
};

// parallel 并行

export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
) as () => void;
