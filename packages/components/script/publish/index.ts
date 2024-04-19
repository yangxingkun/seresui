import run from "../utils/run";
import { pkgPath } from "../utils/paths";
import { series } from "gulp";
export const publishComponent = async () => {
 await  run("release-it", `${pkgPath}/utils`);
 await  run("release-it", `${pkgPath}/seres_ui`);
};
export default series(async () => publishComponent()) as ()=>void;
