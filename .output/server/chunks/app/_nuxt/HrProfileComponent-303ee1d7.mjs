import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_3 } from './editBtn-0b916dab.mjs';
import { _ as _export_sfc } from '../server.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-eebb9f4a><div class="container-head" data-v-eebb9f4a><div class="main-profile" data-v-eebb9f4a><div class="user-photo" data-v-eebb9f4a></div><div class="user-dataBtn_block" data-v-eebb9f4a><div class="user-info" data-v-eebb9f4a><div class="user-nameEdit_block" data-v-eebb9f4a><h2 data-v-eebb9f4a>Donkey Lover</h2><button class="btn" data-v-eebb9f4a><img${ssrRenderAttr("src", _imports_3)} alt="edit-btn" data-v-eebb9f4a></button></div><div class="user-tagAgeGender_block" data-v-eebb9f4a><div class="user-tag" data-v-eebb9f4a>@donkeylover</div><div class="user-ageGender" data-v-eebb9f4a></div></div><div class="user-locationStatus_block" data-v-eebb9f4a><div class="user-location" data-v-eebb9f4a>\u041D\u0435\u0444\u0442\u0435\u043A\u0430\u043C\u0441\u043A</div><div class="user-status" data-v-eebb9f4a>\u043D\u0435 \u0433\u043E\u0442\u043E\u0432 \u043A \u043F\u0435\u0440\u0435\u0435\u0437\u0434\u0443</div></div><div class="user-emailPhone_block" data-v-eebb9f4a><div class="user-email" data-v-eebb9f4a>worker@gmail.com</div><div class="user-phone" data-v-eebb9f4a></div></div></div><div class="btn-block" data-v-eebb9f4a><button class="btn success send-message" data-v-eebb9f4a>\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435</button><button class="btn success download-cv" data-v-eebb9f4a>\u0421\u043A\u0430\u0447\u0430\u0442\u044C CV</button></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/components/HrProfileComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HrProfileComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-eebb9f4a"]]);

export { HrProfileComponent as default };
//# sourceMappingURL=HrProfileComponent-303ee1d7.mjs.map
