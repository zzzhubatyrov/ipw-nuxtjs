import { _ as _export_sfc, f as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
import "devalue";
import "defu";
import "klona";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup() {
    const vacancies = ref([]);
    return { vacancies };
  }
});
const index_vue_vue_type_style_index_0_scoped_38d67905_lang = "";
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VacancyComponent = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-38d67905><!--[-->`);
  ssrRenderList(_ctx.vacancies, (v) => {
    _push(`<section data-v-38d67905>`);
    _push(ssrRenderComponent(_component_VacancyComponent, { vacancy: v }, null, _parent));
    _push(`</section>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/vacancies/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-38d67905"]]);
export {
  index as default
};
//# sourceMappingURL=index-1c5db468.js.map
