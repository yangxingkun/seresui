"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const withInstall = (comp) => {
  comp.install = (app) => {
    const name = comp.name;
    app.component(name, comp);
  };
  return comp;
};
exports.withInstall = withInstall;
