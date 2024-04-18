import glupSass from 'gulp-sass';
import sassLang from 'sass';

import { series, parallel, src, dest } from "gulp";
import autoprefixer from "gulp-autoprefixer";
import { delPath, currentFileName } from "../utils/delpath";
import { componentPath, pkgPath } from "../utils/paths";
import run from "../utils/run";

// 删除 prince_ui
export const removeDist = () => {
    return delPath(`${pkgPath}/${currentFileName}`);
};

const sass = glupSass(sassLang);



export const buildStyle = () => {
return src(`${componentPath}/src/**/style/**.scss`)
.pipe(sass())
.pipe(autoprefixer())
.pipe(dest(`${pkgPath}/acoinfogz_ui/lib/packages/components/src`))
.pipe(dest(`${pkgPath}/acoinfogz_ui/es/packages/components/src`));
};

//打包组件
export const buildComponent = async () => {
    run("pnpm run build", componentPath);
};

// parallel 并行
export default  series(
    async () => removeDist(),
    parallel(
        async () => buildStyle(),
        async () => buildComponent()
    )
) as ()=>void;