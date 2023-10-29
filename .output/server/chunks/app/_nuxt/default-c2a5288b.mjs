import { _ as _export_sfc, a as useRoute, d as __nuxt_component_0$3 } from '../server.mjs';
import { useSSRContext, defineComponent, mergeProps, ref, withCtx, createTextVNode, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@unhead/shared';
import 'vue-router';

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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-97d793b4><div class="notice-head" data-v-97d793b4><h2 data-v-97d793b4>\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435!</h2><h4 data-v-97d793b4>@notice</h4></div><div class="notice-content" data-v-97d793b4><p data-v-97d793b4>\u0417\u0434\u0435\u0441\u044C \u043A\u0430\u043A\u043E\u0439-\u0442\u043E \u043A\u043E\u043D\u0442\u0435\u043D\u0442</p></div><div class="notice-footer" data-v-97d793b4><div class="btn success" data-v-97d793b4>\u0417\u0430\u043A\u0440\u044B\u0442\u044C</div></div></div>`);
    };
  }
});
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
      const _component_NuxtLink = __nuxt_component_0$3;
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
              _push2(`\u041F\u0440\u043E\u0444\u0438\u043B\u044C`);
            } else {
              return [
                createTextVNode("\u041F\u0440\u043E\u0444\u0438\u043B\u044C")
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
            _push2(`\u0420\u0435\u0437\u044E\u043C\u0435`);
          } else {
            return [
              createTextVNode("\u0420\u0435\u0437\u044E\u043C\u0435")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/vacancies" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0412\u0430\u043A\u0430\u043D\u0441\u0438\u0438`);
          } else {
            return [
              createTextVNode("\u0412\u0430\u043A\u0430\u043D\u0441\u0438\u0438")
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
              _push2(`\u041E \u043D\u0430\u0441`);
            } else {
              return [
                createTextVNode("\u041E \u043D\u0430\u0441")
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-03259be8"]]);

export { _default as default };
//# sourceMappingURL=default-c2a5288b.mjs.map
