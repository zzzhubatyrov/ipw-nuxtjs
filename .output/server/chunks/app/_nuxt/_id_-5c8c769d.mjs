import { useSSRContext, defineComponent, ref, mergeProps } from 'vue';
import { _ as _export_sfc, a as useRoute } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
    const wantToWork = "<\u0425\u043E\u0447\u0443 \u0442\u0443\u0442 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C />";
    useRoute().params;
    const company = ref([]);
    return {
      company,
      wantToWork
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-f3ddec5b><div class="container-head" data-v-f3ddec5b><div class="company" data-v-f3ddec5b><img class="logo"${ssrRenderAttr("src", `data:image/jpeg;base64,${_ctx.company.photo}`)} alt="logo" data-v-f3ddec5b><div class="company-data" data-v-f3ddec5b><div class="name" data-v-f3ddec5b>${ssrInterpolate(_ctx.company.name)}</div><div class="location" data-v-f3ddec5b>${ssrInterpolate(_ctx.company.location)}</div></div></div><div class="company-contacts" data-v-f3ddec5b><div class="contacts-info" data-v-f3ddec5b><div class="vacancy-count" data-v-f3ddec5b><h3 data-v-f3ddec5b>\u0412\u0430\u043A\u0430\u043D\u0441\u0438\u0438</h3> 200</div><div class="company-size" data-v-f3ddec5b><h3 data-v-f3ddec5b>\u0420\u0430\u0437\u043C\u0435\u0440 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438</h3><p data-v-f3ddec5b>\u043E\u0442 100 \u0434\u043E 500</p></div><div class="main-contacts" data-v-f3ddec5b><div class="phone" data-v-f3ddec5b><p data-v-f3ddec5b>\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430:</p> ${ssrInterpolate(_ctx.company.phone)}</div><div class="email" data-v-f3ddec5b><p data-v-f3ddec5b>\u041F\u043E\u0447\u0442\u0430:</p> ${ssrInterpolate(_ctx.company.email)}</div></div></div><div class="social-btn_block" data-v-f3ddec5b><div class="social-contacts" data-v-f3ddec5b></div><button class="btn want-to-work_btn" data-v-f3ddec5b>${ssrInterpolate(_ctx.wantToWork)}</button></div></div></div><div class="container-content" data-v-f3ddec5b><div class="about-company" data-v-f3ddec5b><div class="about-company_head" data-v-f3ddec5b>\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 &quot;${ssrInterpolate(_ctx.company.name)}&quot;</div><div class="about-company_content" data-v-f3ddec5b>${ssrInterpolate(_ctx.company.description)}</div></div><div class="company-vacancy" data-v-f3ddec5b><div class="company-vacancy_head" data-v-f3ddec5b>\u0412\u0430\u043A\u0430\u043D\u0441\u0438\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438</div>`);
  if (_ctx.company.vacancies == null) {
    _push(`<div class="not-vacancies" data-v-f3ddec5b>\u041D\u0435\u0442 \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0439</div>`);
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

export { _id_ as default };
//# sourceMappingURL=_id_-5c8c769d.mjs.map
