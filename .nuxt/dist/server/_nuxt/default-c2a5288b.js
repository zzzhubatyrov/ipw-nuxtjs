import { _ as _export_sfc, a as useRoute, d as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, mergeProps, useSSRContext, ref, withCtx, createTextVNode, unref } from "vue";
import "hookable";
import "destr";
import "devalue";
import "defu";
import "klona";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NotifyModalComponent",
  __ssrInlineRender: true,
  props: {
    closeModal: {
      type: Function,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-97d793b4><div class="notice-head" data-v-97d793b4><h2 data-v-97d793b4>Уведомление!</h2><h4 data-v-97d793b4>@notice</h4></div><div class="notice-content" data-v-97d793b4><p data-v-97d793b4>Здесь какой-то контент</p></div><div class="notice-footer" data-v-97d793b4><div class="btn success" data-v-97d793b4>Закрыть</div></div></div>`);
    };
  }
});
const NotifyModalComponent_vue_vue_type_style_index_0_scoped_97d793b4_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NotifyModalComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const NotifyModalComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-97d793b4"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    let isActive = ref(true);
    const route = useRoute();
    let showModal = ref(false);
    const closeModal = () => {
      showModal.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><header class="header" data-v-03259be8><div class="header-logoNotify_block" data-v-03259be8><div class="header_logo" data-v-03259be8>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`IPW`);
          } else {
            return [
              createTextVNode("IPW")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><button class="header_notification" data-v-03259be8>notify</button></div><nav class="navbar" data-v-03259be8>`);
      if (unref(route).path != "/" && unref(route).path != "/profile" && unref(route).path != "/auth") {
        _push(`<div data-v-03259be8>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "btn",
          to: "/profile"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Профиль`);
            } else {
              return [
                createTextVNode("Профиль")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/resumes" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Резюме`);
          } else {
            return [
              createTextVNode("Резюме")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/vacancies" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Вакансии`);
          } else {
            return [
              createTextVNode("Вакансии")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(isActive)) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: { "disable": unref(isActive) },
          to: unref(isActive) ? "/" : "/about"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`О нас`);
            } else {
              return [
                createTextVNode("О нас")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</nav></header>`);
      if (unref(showModal)) {
        _push(`<div class="modal" data-v-03259be8>`);
        _push(ssrRenderComponent(NotifyModalComponent, { closeModal }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<!--]-->`);
    };
  }
});
const default_vue_vue_type_style_index_0_scoped_03259be8_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-03259be8"]]);
export {
  _default as default
};
//# sourceMappingURL=default-c2a5288b.js.map
