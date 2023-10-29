import { mergeProps, useSSRContext } from "vue";
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
const index_vue_vue_type_style_index_0_scoped_86b1b36b_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-86b1b36b><div class="msg-user_block" data-v-86b1b36b><div class="msg-usr_item" data-v-86b1b36b><div class="user-info" data-v-86b1b36b><div class="logo" data-v-86b1b36b></div><div class="user-data" data-v-86b1b36b><div class="nameTag_block" data-v-86b1b36b><div class="name" data-v-86b1b36b>Donkey Lover</div><div class="tag" data-v-86b1b36b>@donkeylover</div></div><div class="email" data-v-86b1b36b>worker@gmail.com</div></div></div><div class="message" data-v-86b1b36b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cum deleniti dignissimos dolor dolore facere inventore iste labore laboriosam minus omnis perspiciatis quae quibusdam quidem rem sequi sunt, tenetur veritatis. </div></div></div><div class="msg-user_content" data-v-86b1b36b><div class="msg-content_head" data-v-86b1b36b><div class="msg-usr_info" data-v-86b1b36b><div class="logo" data-v-86b1b36b></div><div class="user-data" data-v-86b1b36b><div class="nameTag_block" data-v-86b1b36b><div class="name" data-v-86b1b36b>Donkey Lover</div><div class="tag" data-v-86b1b36b>@donkeylover</div></div><div class="email" data-v-86b1b36b>worker@gmail.com</div></div></div></div><div class="msg-content" data-v-86b1b36b><div class="msg-item" data-v-86b1b36b><div class="msg-usr_info" data-v-86b1b36b><div class="logo" data-v-86b1b36b></div><div class="user-data" data-v-86b1b36b><div class="name" data-v-86b1b36b>Donkey Lover</div></div></div><div class="msg-item_content" data-v-86b1b36b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi ipsum quam reprehenderit voluptatem. Animi atque dicta dolore doloribus enim et exercitationem expedita explicabo illo molestiae, molestias necessitatibus nulla praesentium quisquam repellendus sed sunt tempora. Ad amet consequatur deserunt maxime odit optio porro quam, qui quidem quod ut vero voluptatem? </div></div></div><div class="msg-content_footer" data-v-86b1b36b>this input</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/messenger/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-86b1b36b"]]);
export {
  index as default
};
//# sourceMappingURL=index-749b7c7d.js.map
