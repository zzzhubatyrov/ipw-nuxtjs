import { ref, unref, useSSRContext } from "vue";
import "hookable";
import { _ as _export_sfc, u as useRouter } from "../server.mjs";
import "destr";
import "devalue";
import "defu";
import "klona";
import { ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import UploadPhotoComponent from "./UploadPhotoComponent-503d4747.js";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
const index_vue_vue_type_style_index_0_scoped_995bc19a_lang = "";
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
      _push(`<!--[--><div class="container" data-v-995bc19a><div class="create-company_block" data-v-995bc19a><h2 class="create-company_head" data-v-995bc19a>Создание профиля компании</h2><div class="create-company_content" data-v-995bc19a><form class="create-company_form" enctype="multipart/form-data" data-v-995bc19a><input type="file" id="photo" accept="image/*" data-v-995bc19a><input type="text"${ssrRenderAttr("value", unref(companyName))} placeholder="Название компании" data-v-995bc19a><input type="text"${ssrRenderAttr("value", unref(companyTag))} placeholder="Тэг компании" data-v-995bc19a><textarea placeholder="Описание компании" data-v-995bc19a>${ssrInterpolate(unref(companyDescription))}</textarea><input type="text"${ssrRenderAttr("value", unref(companyLocation))} placeholder="Местоположение" data-v-995bc19a><input type="text"${ssrRenderAttr("value", unref(companyWebSite))} placeholder="Веб-сайт" data-v-995bc19a><input type="email"${ssrRenderAttr("value", unref(companyEmail))} placeholder="Email" data-v-995bc19a><input type="text"${ssrRenderAttr("value", unref(companyPhone))} placeholder="Телефон" data-v-995bc19a><button class="btn success" type="submit" data-v-995bc19a>Создать</button></form></div></div></div>`);
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
export {
  index as default
};
//# sourceMappingURL=index-40e0e452.js.map
