import { d as __nuxt_component_0, _ as _export_sfc } from "../server.mjs";
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext, ref, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import Cookies from "js-cookie";
import { U as UserDataComponent } from "./UserDataComponent-8721ea75.js";
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
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NoticeComponent",
  __ssrInlineRender: true,
  props: {
    closeModal: {
      type: Function,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "notice_container" }, _attrs))} data-v-31b89954><div class="notice_head" data-v-31b89954><div class="head" data-v-31b89954>Уведомение!</div><div class="tag" data-v-31b89954>@notice</div></div><div class="notice_content" data-v-31b89954><div class="notice_info" data-v-31b89954>Сайт на стадии MVP, многие функции могут не работать или работать плохо</div><div class="notice_second-info" data-v-31b89954><div class="email" data-v-31b89954>• Баги или ошибки? пишите сюда → `);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "mailto:ipwpost@bk.ru" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`ipwpost@bk.ru`);
          } else {
            return [
              createTextVNode("ipwpost@bk.ru")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="github" data-v-31b89954>• github → `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://github.com/zzzhubatyrov",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`@zzzhubatyrov`);
          } else {
            return [
              createTextVNode("@zzzhubatyrov")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="notice_footer" data-v-31b89954><button class="btn success_btn" data-v-31b89954>Понятно</button></div></div>`);
    };
  }
});
const NoticeComponent_vue_vue_type_style_index_0_scoped_31b89954_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NoticeComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-31b89954"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  UserDataComponent,
  NoticeComponent: __nuxt_component_1,
  setup() {
    const showNotice = ref(true);
    const closeNotice = () => {
      showNotice.value = false;
    };
    return {
      showNotice,
      closeNotice
    };
  },
  computed: {
    linkToProfileOrAuth() {
      const isAuth = Cookies.get("ipw");
      return isAuth ? "/profile" : "/auth";
    },
    linkText() {
      const isAuth = Cookies.get("ipw");
      return isAuth ? "Профиль" : "Регистрация / Авторизация";
    }
  }
});
const index_vue_vue_type_style_index_0_scoped_5baab9b2_lang = "";
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_NoticeComponent = __nuxt_component_1;
  _push(`<!--[--><div class="container" data-v-5baab9b2><div class="centName" data-v-5baab9b2>Здесь вы сможете создать своё Резюме!</div><div class="name" data-v-5baab9b2>IT Professionals Work</div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "btn",
    to: _ctx.linkToProfileOrAuth
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.linkText)}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.linkText), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  if (_ctx.showNotice) {
    _push(`<div class="modal" data-v-5baab9b2>`);
    _push(ssrRenderComponent(_component_NoticeComponent, { closeModal: _ctx.closeNotice }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-5baab9b2"]]);
export {
  index as default
};
//# sourceMappingURL=index-c3136e31.js.map
