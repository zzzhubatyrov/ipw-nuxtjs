import { defineComponent, ref, mergeProps, useSSRContext } from "vue";
import "hookable";
import { u as useRouter, _ as _export_sfc } from "../server.mjs";
import "destr";
import "devalue";
import "defu";
import "klona";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import "js-cookie";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
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
        _push(`<form${ssrRenderAttrs(mergeProps({ class: "authForm" }, _attrs))} data-v-c37ca175><h1 data-v-c37ca175>Авторизация <span data-v-c37ca175>/</span> Регистрация</h1><input type="email"${ssrRenderAttr("value", email.value)} placeholder="Почта" required data-v-c37ca175><input type="password"${ssrRenderAttr("value", password.value)} placeholder="Пароль" required data-v-c37ca175><button class="btn" type="submit" data-v-c37ca175>Войти</button><p data-v-c37ca175>Нет аккаунта? <button class="btn" data-v-c37ca175>Зарегистрироваться</button></p></form>`);
      } else {
        _push(`<form${ssrRenderAttrs(mergeProps({ class: "authForm" }, _attrs))} data-v-c37ca175><h1 data-v-c37ca175>Авторизация <span data-v-c37ca175>/</span> Регистрация</h1><input type="text"${ssrRenderAttr("value", name.value)} placeholder="Имя / фамилия" required data-v-c37ca175><input type="email"${ssrRenderAttr("value", email.value)} placeholder="E-mail" required data-v-c37ca175><input type="password"${ssrRenderAttr("value", password.value)} placeholder="Пароль" required data-v-c37ca175><input type="password"${ssrRenderAttr("value", repeatPassword.value)} placeholder="Повторите пароль" required data-v-c37ca175><button class="btn" type="submit" data-v-c37ca175>Зарегистрироваться</button><p data-v-c37ca175> Уже есть аккаунт? <button class="btn" data-v-c37ca175>Войти</button></p></form>`);
      }
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_c37ca175_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c37ca175"]]);
export {
  index as default
};
//# sourceMappingURL=index-c39e58f0.js.map
