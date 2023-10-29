import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
const UploadPhotoComponent_vue_vue_type_style_index_0_scoped_26bef779_lang = "";
const _sfc_main = {
  __name: "UploadPhotoComponent",
  __ssrInlineRender: true,
  props: {
    closeUploadModal: {
      type: Function,
      required: true
    }
  },
  setup(__props) {
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(mergeProps({
        class: "upload-form",
        enctype: "multipart/form-data"
      }, _attrs))} data-v-26bef779><h2 class="head" data-v-26bef779>Загрузить фото</h2><div class="content" data-v-26bef779><input id="file-input" type="file" name="photo" data-v-26bef779><label for="file-input" data-v-26bef779></label><div class="upload-btn_block" data-v-26bef779><button class="btn success" data-v-26bef779>Закрыть</button><button class="btn success" type="submit" data-v-26bef779>Загрузить</button></div></div></form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/components/UploadPhotoComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const UploadPhotoComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-26bef779"]]);
export {
  UploadPhotoComponent as default
};
//# sourceMappingURL=UploadPhotoComponent-481b8108.js.map
