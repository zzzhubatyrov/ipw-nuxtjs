import { _ as _export_sfc, e as __nuxt_component_0 } from "../server.mjs";
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
    const resumes = ref([]);
    return { resumes };
  }
});
const index_vue_vue_type_style_index_0_scoped_c01f4f83_lang = "";
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ResumeComponent = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-c01f4f83><!--[-->`);
  ssrRenderList(_ctx.resumes, (r) => {
    _push(`<div class="r_item" data-v-c01f4f83>`);
    _push(ssrRenderComponent(_component_ResumeComponent, { resume: r }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/resumes/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c01f4f83"]]);
export {
  index as default
};
//# sourceMappingURL=index-c9d94702.js.map
