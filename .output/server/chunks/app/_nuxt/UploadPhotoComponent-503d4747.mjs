import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
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
      }, _attrs))} data-v-d495fda0><h2 class="head" data-v-d495fda0>\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u043E\u0442\u043E</h2><div class="content" data-v-d495fda0><input id="file-input" type="file" name="photo" data-v-d495fda0><label for="file-input" data-v-d495fda0></label><div class="upload-btn_block" data-v-d495fda0><button class="btn success" data-v-d495fda0>\u0417\u0430\u043A\u0440\u044B\u0442\u044C</button></div></div></form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/employer/components/UploadPhotoComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const UploadPhotoComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d495fda0"]]);

export { UploadPhotoComponent as default };
//# sourceMappingURL=UploadPhotoComponent-503d4747.mjs.map
