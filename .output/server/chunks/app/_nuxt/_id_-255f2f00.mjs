import { useSSRContext, defineComponent, ref, mergeProps } from 'vue';
import { _ as _export_sfc, a as useRoute } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@unhead/shared';
import 'vue-router';

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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-44cf161a><div class="container-head" data-v-44cf161a><div class="company" data-v-44cf161a><img class="logo"${ssrRenderAttr("src", `data:image/jpeg;base64,${_ctx.companyData.photo}`)} alt="logo" data-v-44cf161a><div class="company-data" data-v-44cf161a><div class="name" data-v-44cf161a>${ssrInterpolate(_ctx.companyData.name)}</div><div class="location" data-v-44cf161a>${ssrInterpolate(_ctx.companyData.location)}</div><div class="company-btn_block" data-v-44cf161a><button class="btn about-company_btn" data-v-44cf161a>\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</button></div></div></div><div class="main-vacancy" data-v-44cf161a><div class="skills-block" data-v-44cf161a><div class="skills-head" data-v-44cf161a>\u041A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u043D\u0430\u0432\u044B\u043A\u0438</div><div class="skills-content" data-v-44cf161a><!--[-->`);
  ssrRenderList(_ctx.skills, (skill) => {
    _push(`<div class="skill-item" data-v-44cf161a>${ssrInterpolate(skill)}</div>`);
  });
  _push(`<!--]--></div></div><div class="vacancy-info" data-v-44cf161a><div class="vacancy-data" data-v-44cf161a><div class="vacancy-titleSalary_block" data-v-44cf161a><div class="vacancy-title" data-v-44cf161a>${ssrInterpolate(_ctx.vacancy.level)} ${ssrInterpolate(_ctx.vacancy.direction)}</div><div class="vacancy-salary" data-v-44cf161a>\u0434\u043E ${ssrInterpolate(_ctx.vacancy.salary)} \u20BD \u043D\u0430 \u0440\u0443\u043A\u0438</div></div><div class="employment-exp_block" data-v-44cf161a><div class="vacancy-description-item" data-v-44cf161a>\u0422\u0440\u0435\u0431\u0443\u0435\u043C\u044B\u0439 \u043E\u043F\u044B\u0442: <span data-v-44cf161a>${ssrInterpolate(_ctx.vacancy.experience)}</span></div><div class="vacancy-description-item" data-v-44cf161a>${ssrInterpolate(_ctx.vacancy.workTime)}</div></div></div><button class="btn success req-btn" data-v-44cf161a>\u041E\u0442\u043A\u043B\u0438\u043A\u043D\u0443\u0442\u044C\u0441\u044F</button></div></div></div><div class="container-content" data-v-44cf161a><div class="about-company_block" data-v-44cf161a><h2 class="about-company_head" data-v-44cf161a>\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438</h2><div class="about-company_content" data-v-44cf161a>${ssrInterpolate(_ctx.vacancy.description)}</div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/vacancies/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-44cf161a"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-255f2f00.mjs.map
