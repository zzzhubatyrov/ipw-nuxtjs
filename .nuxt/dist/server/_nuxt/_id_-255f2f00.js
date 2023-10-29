import { defineComponent, ref, mergeProps, useSSRContext } from "vue";
import "hookable";
import { a as useRoute, _ as _export_sfc } from "../server.mjs";
import "destr";
import "devalue";
import "defu";
import "klona";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup() {
    useRoute().params;
    const vacancy = ref([]);
    const skills = ref([]);
    const companyData = ref([]);
    return {
      companyData,
      vacancy,
      skills
    };
  }
});
const _id__vue_vue_type_style_index_0_scoped_44cf161a_lang = "";
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-44cf161a><div class="container-head" data-v-44cf161a><div class="company" data-v-44cf161a><img class="logo"${ssrRenderAttr("src", `data:image/jpeg;base64,${_ctx.companyData.photo}`)} alt="logo" data-v-44cf161a><div class="company-data" data-v-44cf161a><div class="name" data-v-44cf161a>${ssrInterpolate(_ctx.companyData.name)}</div><div class="location" data-v-44cf161a>${ssrInterpolate(_ctx.companyData.location)}</div><div class="company-btn_block" data-v-44cf161a><button class="btn about-company_btn" data-v-44cf161a>Подробнее</button></div></div></div><div class="main-vacancy" data-v-44cf161a><div class="skills-block" data-v-44cf161a><div class="skills-head" data-v-44cf161a>Ключевые навыки</div><div class="skills-content" data-v-44cf161a><!--[-->`);
  ssrRenderList(_ctx.skills, (skill) => {
    _push(`<div class="skill-item" data-v-44cf161a>${ssrInterpolate(skill)}</div>`);
  });
  _push(`<!--]--></div></div><div class="vacancy-info" data-v-44cf161a><div class="vacancy-data" data-v-44cf161a><div class="vacancy-titleSalary_block" data-v-44cf161a><div class="vacancy-title" data-v-44cf161a>${ssrInterpolate(_ctx.vacancy.level)} ${ssrInterpolate(_ctx.vacancy.direction)}</div><div class="vacancy-salary" data-v-44cf161a>до ${ssrInterpolate(_ctx.vacancy.salary)} ₽ на руки</div></div><div class="employment-exp_block" data-v-44cf161a><div class="vacancy-description-item" data-v-44cf161a>Требуемый опыт: <span data-v-44cf161a>${ssrInterpolate(_ctx.vacancy.experience)}</span></div><div class="vacancy-description-item" data-v-44cf161a>${ssrInterpolate(_ctx.vacancy.workTime)}</div></div></div><button class="btn success req-btn" data-v-44cf161a>Откликнуться</button></div></div></div><div class="container-content" data-v-44cf161a><div class="about-company_block" data-v-44cf161a><h2 class="about-company_head" data-v-44cf161a>О компании</h2><div class="about-company_content" data-v-44cf161a>${ssrInterpolate(_ctx.vacancy.description)}</div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/vacancies/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-44cf161a"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-255f2f00.js.map
