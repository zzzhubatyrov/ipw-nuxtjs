import { defineComponent, ref, mergeProps, useSSRContext } from "vue";
import "hookable";
import { a as useRoute, _ as _export_sfc } from "../server.mjs";
import "destr";
import "devalue";
import "defu";
import "klona";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup() {
    const wantToWork = "<Хочу тут работать />";
    useRoute().params;
    const company = ref([]);
    return {
      company,
      wantToWork
    };
  }
});
const _id__vue_vue_type_style_index_0_scoped_f3ddec5b_lang = "";
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-f3ddec5b><div class="container-head" data-v-f3ddec5b><div class="company" data-v-f3ddec5b><img class="logo"${ssrRenderAttr("src", `data:image/jpeg;base64,${_ctx.company.photo}`)} alt="logo" data-v-f3ddec5b><div class="company-data" data-v-f3ddec5b><div class="name" data-v-f3ddec5b>${ssrInterpolate(_ctx.company.name)}</div><div class="location" data-v-f3ddec5b>${ssrInterpolate(_ctx.company.location)}</div></div></div><div class="company-contacts" data-v-f3ddec5b><div class="contacts-info" data-v-f3ddec5b><div class="vacancy-count" data-v-f3ddec5b><h3 data-v-f3ddec5b>Вакансии</h3> 200</div><div class="company-size" data-v-f3ddec5b><h3 data-v-f3ddec5b>Размер компании</h3><p data-v-f3ddec5b>от 100 до 500</p></div><div class="main-contacts" data-v-f3ddec5b><div class="phone" data-v-f3ddec5b><p data-v-f3ddec5b>Номер телефона:</p> ${ssrInterpolate(_ctx.company.phone)}</div><div class="email" data-v-f3ddec5b><p data-v-f3ddec5b>Почта:</p> ${ssrInterpolate(_ctx.company.email)}</div></div></div><div class="social-btn_block" data-v-f3ddec5b><div class="social-contacts" data-v-f3ddec5b></div><button class="btn want-to-work_btn" data-v-f3ddec5b>${ssrInterpolate(_ctx.wantToWork)}</button></div></div></div><div class="container-content" data-v-f3ddec5b><div class="about-company" data-v-f3ddec5b><div class="about-company_head" data-v-f3ddec5b>О компании &quot;${ssrInterpolate(_ctx.company.name)}&quot;</div><div class="about-company_content" data-v-f3ddec5b>${ssrInterpolate(_ctx.company.description)}</div></div><div class="company-vacancy" data-v-f3ddec5b><div class="company-vacancy_head" data-v-f3ddec5b>Вакансии компании</div>`);
  if (_ctx.company.vacancies == null) {
    _push(`<div class="not-vacancies" data-v-f3ddec5b>Нет вакансий</div>`);
  } else {
    _push(`<div class="not-vacancies" data-v-f3ddec5b></div>`);
  }
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/company/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f3ddec5b"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-5c8c769d.js.map
