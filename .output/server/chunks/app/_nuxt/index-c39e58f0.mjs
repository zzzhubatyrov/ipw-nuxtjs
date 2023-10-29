import { useSSRContext, defineComponent, ref, mergeProps } from 'vue';
import { _ as _export_sfc, u as useRouter } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const isLogin = ref(true);
    ref("");
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const repeatPassword = ref("");
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      if (isLogin.value) {
        _push(`<form${ssrRenderAttrs(mergeProps({ class: "authForm" }, _attrs))} data-v-c37ca175><h1 data-v-c37ca175>\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F <span data-v-c37ca175>/</span> \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F</h1><input type="email"${ssrRenderAttr("value", email.value)} placeholder="\u041F\u043E\u0447\u0442\u0430" required data-v-c37ca175><input type="password"${ssrRenderAttr("value", password.value)} placeholder="\u041F\u0430\u0440\u043E\u043B\u044C" required data-v-c37ca175><button class="btn" type="submit" data-v-c37ca175>\u0412\u043E\u0439\u0442\u0438</button><p data-v-c37ca175>\u041D\u0435\u0442 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430? <button class="btn" data-v-c37ca175>\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F</button></p></form>`);
      } else {
        _push(`<form${ssrRenderAttrs(mergeProps({ class: "authForm" }, _attrs))} data-v-c37ca175><h1 data-v-c37ca175>\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F <span data-v-c37ca175>/</span> \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F</h1><input type="text"${ssrRenderAttr("value", name.value)} placeholder="\u0418\u043C\u044F / \u0444\u0430\u043C\u0438\u043B\u0438\u044F" required data-v-c37ca175><input type="email"${ssrRenderAttr("value", email.value)} placeholder="E-mail" required data-v-c37ca175><input type="password"${ssrRenderAttr("value", password.value)} placeholder="\u041F\u0430\u0440\u043E\u043B\u044C" required data-v-c37ca175><input type="password"${ssrRenderAttr("value", repeatPassword.value)} placeholder="\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C" required data-v-c37ca175><button class="btn" type="submit" data-v-c37ca175>\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F</button><p data-v-c37ca175> \u0423\u0436\u0435 \u0435\u0441\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442? <button class="btn" data-v-c37ca175>\u0412\u043E\u0439\u0442\u0438</button></p></form>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c37ca175"]]);

export { index as default };
//# sourceMappingURL=index-c39e58f0.mjs.map
