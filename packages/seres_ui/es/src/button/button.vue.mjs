import { defineComponent as e, computed as s, openBlock as u, createElementBlock as l, normalizeClass as p, renderSlot as a } from "vue";
import "./style/index.css";
const c = e({ name: "kn-button" }), d = /* @__PURE__ */ e({
  ...c,
  props: {
    type: {}
  },
  setup(n) {
    const t = n, o = s(() => ({ [`kn-button-${t.type}`]: t.type }));
    return (r, m) => (u(), l("button", {
      class: p(["kn-button", o.value])
    }, [
      a(r.$slots, "default")
    ], 2));
  }
});
export {
  d as default
};
