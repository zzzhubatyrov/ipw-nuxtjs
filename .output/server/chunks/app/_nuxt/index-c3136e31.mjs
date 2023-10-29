import { _ as _export_sfc, d as __nuxt_component_0$3 } from '../server.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createTextVNode, ref, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import Cookies from 'js-cookie';
import { U as UserDataComponent } from './UserDataComponent-8721ea75.mjs';
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
      const _component_NuxtLink = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "notice_container" }, _attrs))} data-v-31b89954><div class="notice_head" data-v-31b89954><div class="head" data-v-31b89954>\u0423\u0432\u0435\u0434\u043E\u043C\u0435\u043D\u0438\u0435!</div><div class="tag" data-v-31b89954>@notice</div></div><div class="notice_content" data-v-31b89954><div class="notice_info" data-v-31b89954>\u0421\u0430\u0439\u0442 \u043D\u0430 \u0441\u0442\u0430\u0434\u0438\u0438 MVP, \u043C\u043D\u043E\u0433\u0438\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u043C\u043E\u0433\u0443\u0442 \u043D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0438\u043B\u0438 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u043F\u043B\u043E\u0445\u043E</div><div class="notice_second-info" data-v-31b89954><div class="email" data-v-31b89954>\u2022 \u0411\u0430\u0433\u0438 \u0438\u043B\u0438 \u043E\u0448\u0438\u0431\u043A\u0438? \u043F\u0438\u0448\u0438\u0442\u0435 \u0441\u044E\u0434\u0430 \u2192 `);
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
      _push(`</div><div class="github" data-v-31b89954>\u2022 github \u2192 `);
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
      _push(`</div></div></div><div class="notice_footer" data-v-31b89954><button class="btn success_btn" data-v-31b89954>\u041F\u043E\u043D\u044F\u0442\u043D\u043E</button></div></div>`);
    };
  }
});
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
      return isAuth ? "\u041F\u0440\u043E\u0444\u0438\u043B\u044C" : "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F / \u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F";
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$3;
  const _component_NoticeComponent = __nuxt_component_1;
  _push(`<!--[--><div class="container" data-v-5baab9b2><div class="centName" data-v-5baab9b2>\u0417\u0434\u0435\u0441\u044C \u0432\u044B \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0432\u043E\u0451 \u0420\u0435\u0437\u044E\u043C\u0435!</div><div class="name" data-v-5baab9b2>IT Professionals Work</div>`);
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

export { index as default };
//# sourceMappingURL=index-c3136e31.mjs.map
