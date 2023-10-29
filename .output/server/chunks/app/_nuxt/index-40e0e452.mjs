import { ref, unref, useSSRContext } from 'vue';
import { _ as _export_sfc, u as useRouter } from '../server.mjs';
import { ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import UploadPhotoComponent from './UploadPhotoComponent-503d4747.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    let companyName = ref("");
    let companyTag = ref("");
    let companyDescription = ref("");
    let companyLocation = ref("");
    let companyWebSite = ref("");
    let companyEmail = ref("");
    let companyPhone = ref("");
    ref(null);
    useRouter();
    const uploadModal = ref(false);
    const closeUploadModal = () => {
      uploadModal.value = false;
    };
    ref(null);
    ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="container" data-v-995bc19a><div class="create-company_block" data-v-995bc19a><h2 class="create-company_head" data-v-995bc19a>\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0444\u0438\u043B\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438</h2><div class="create-company_content" data-v-995bc19a><form class="create-company_form" enctype="multipart/form-data" data-v-995bc19a><input type="file" id="photo" accept="image/*" data-v-995bc19a><input type="text"${ssrRenderAttr("value", unref(companyName))} placeholder="\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438" data-v-995bc19a><input type="text"${ssrRenderAttr("value", unref(companyTag))} placeholder="\u0422\u044D\u0433 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438" data-v-995bc19a><textarea placeholder="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438" data-v-995bc19a>${ssrInterpolate(unref(companyDescription))}</textarea><input type="text"${ssrRenderAttr("value", unref(companyLocation))} placeholder="\u041C\u0435\u0441\u0442\u043E\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435" data-v-995bc19a><input type="text"${ssrRenderAttr("value", unref(companyWebSite))} placeholder="\u0412\u0435\u0431-\u0441\u0430\u0439\u0442" data-v-995bc19a><input type="email"${ssrRenderAttr("value", unref(companyEmail))} placeholder="Email" data-v-995bc19a><input type="text"${ssrRenderAttr("value", unref(companyPhone))} placeholder="\u0422\u0435\u043B\u0435\u0444\u043E\u043D" data-v-995bc19a><button class="btn success" type="submit" data-v-995bc19a>\u0421\u043E\u0437\u0434\u0430\u0442\u044C</button></form></div></div></div>`);
      if (uploadModal.value) {
        _push(`<div class="modal" data-v-995bc19a>`);
        _push(ssrRenderComponent(UploadPhotoComponent, { closeUploadModal }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/employer/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-995bc19a"]]);

export { index as default };
//# sourceMappingURL=index-40e0e452.mjs.map
