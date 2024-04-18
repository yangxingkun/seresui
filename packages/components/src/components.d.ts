import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    KnButton: typeof components.Button;
  }
}
export {};
