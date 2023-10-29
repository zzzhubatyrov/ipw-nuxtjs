import { defineComponent, ref, mergeProps, useSSRContext } from "vue";
import "hookable";
import { u as useRouter, _ as _export_sfc } from "../server.mjs";
import "destr";
import "devalue";
import "defu";
import "klona";
import { ssrRenderAttrs } from "vue/server-renderer";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const activeContent = ref("users");
    useRouter();
    ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-b5c3e4b5><div class="container-head" data-v-b5c3e4b5><div class="profile-container" data-v-b5c3e4b5><div class="photo" data-v-b5c3e4b5></div><div class="info-block" data-v-b5c3e4b5><div class="info-block_content" data-v-b5c3e4b5><div class="nameTag-block" data-v-b5c3e4b5><div class="name" data-v-b5c3e4b5>Rodion Zhubatyrov</div><div class="tag" data-v-b5c3e4b5>@zhubatyrov</div></div><div class="ageLocation-block" data-v-b5c3e4b5><div class="age" data-v-b5c3e4b5>Мужчина, 17</div><div class="location" data-v-b5c3e4b5>Город: Нефтекамск</div></div></div><div class="contacts-block" data-v-b5c3e4b5><div class="email" data-v-b5c3e4b5>whqhub@bk.ru</div><div class="phoneNumber" data-v-b5c3e4b5>+7(999)999-99-99</div></div><div class="role" data-v-b5c3e4b5>admin</div></div></div><p class="brand" data-v-b5c3e4b5>itprofessionalswork</p></div><div class="container-content" data-v-b5c3e4b5><div class="content-head" data-v-b5c3e4b5><div class="btn blue-btn users-btn" data-v-b5c3e4b5>Пользователи</div><div class="btn blue-btn resume-btn" data-v-b5c3e4b5>Резюме</div><div class="btn blue-btn companies-btn" data-v-b5c3e4b5>Компании</div><div class="btn blue-btn vacancies-btn" data-v-b5c3e4b5>Вакансии</div></div><div class="content" data-v-b5c3e4b5>`);
      if (activeContent.value === "users") {
        _push(`<div data-v-b5c3e4b5>Users Content</div>`);
      } else {
        _push(`<!---->`);
      }
      if (activeContent.value === "resume") {
        _push(`<div data-v-b5c3e4b5><p data-v-b5c3e4b5>Resumes Content</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (activeContent.value === "companies") {
        _push(`<div data-v-b5c3e4b5>Companies Content</div>`);
      } else {
        _push(`<!---->`);
      }
      if (activeContent.value === "vacancies") {
        _push(`<div data-v-b5c3e4b5>Vacancies Content</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_b5c3e4b5_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b5c3e4b5"]]);
export {
  index as default
};
//# sourceMappingURL=index-b843741d.js.map
