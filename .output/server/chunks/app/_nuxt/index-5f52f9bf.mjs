import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as _export_sfc, u as useRouter, d as __nuxt_component_0$3 } from '../server.mjs';
import { useSSRContext, defineComponent, ref, unref, withCtx, createTextVNode, createVNode } from 'vue';
import { ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_3 } from './editBtn-0b916dab.mjs';
import { U as UserDataComponent } from './UserDataComponent-8721ea75.mjs';
import UploadPhotoComponent from './UploadPhotoComponent-481b8108.mjs';
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

const _imports_0 = "" + buildAssetsURL("camera.7557b9ff.svg");
const _imports_1 = "" + buildAssetsURL("editBtnWhite.8e8ae023.svg");
const _imports_2 = "" + buildAssetsURL("location.d095fd92.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const userData = ref([]);
    const companyData = ref([]);
    let Age = ref();
    ref([]);
    let userRole = ref("");
    const editMode = ref(false);
    const content = ref("");
    const showModal = ref(false);
    const uploadModal = ref(false);
    const closeModal = () => {
      showModal.value = false;
    };
    const closeUploadModal = () => {
      uploadModal.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      _push(`<!--[-->`);
      if (unref(userRole) == "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C") {
        _push(`<div class="container" data-v-0dafda97><div class="container-head" data-v-0dafda97><div class="main-profile" data-v-0dafda97>`);
        if (userData.value.photo != null) {
          _push(`<img class="user-photo" alt="user-photo"${ssrRenderAttr("src", `data:image/jpeg;base64,${userData.value.photo}`)} data-v-0dafda97>`);
        } else {
          _push(`<button class="btn user-photo" data-v-0dafda97><img${ssrRenderAttr("src", _imports_0)} alt="add-photo" data-v-0dafda97></button>`);
        }
        _push(`<div class="user-dataBtn_block" data-v-0dafda97><div class="user-info" data-v-0dafda97><div class="user-nameEdit_block" data-v-0dafda97><h2 class="user-name" data-v-0dafda97>${ssrInterpolate(userData.value.name)}</h2><button class="btn" data-v-0dafda97><img${ssrRenderAttr("src", _imports_1)} alt="edit-btn" data-v-0dafda97></button></div><div class="user-tagAgeGender_block" data-v-0dafda97>`);
        if (userData.value.tag == "") {
          _push(`<div class="user-tag" data-v-0dafda97></div>`);
        } else {
          _push(`<div class="user-tag" data-v-0dafda97>${ssrInterpolate(userData.value.tag)}</div>`);
        }
        if (userData.value.birthday != "") {
          _push(`<div class="user-ageGender" data-v-0dafda97></div>`);
        } else {
          _push(`<!---->`);
        }
        if (userData.value.age == null) {
          _push(`<div class="user-ageGender" data-v-0dafda97></div>`);
        } else {
          _push(`<div class="user-ageGender" data-v-0dafda97>${ssrInterpolate(userData.value.gender)}, ${ssrInterpolate(unref(Age))}</div>`);
        }
        _push(`</div><div class="user-locationStatus_block" data-v-0dafda97>`);
        if (userData.value.location == "") {
          _push(`<div class="user-location" data-v-0dafda97></div>`);
        } else {
          _push(`<div class="user-location" data-v-0dafda97><img${ssrRenderAttr("src", _imports_2)} alt="location" data-v-0dafda97>${ssrInterpolate(userData.value.location)}</div>`);
        }
        _push(`<div class="user-status" data-v-0dafda97>${ssrInterpolate(userData.value.status)}</div></div><div class="user-emailPhone_block" data-v-0dafda97><div class="user-email" data-v-0dafda97>${ssrInterpolate(userData.value.email)}</div><div class="user-phone" data-v-0dafda97></div></div></div><div class="btn-block" data-v-0dafda97>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "btn employee",
          to: "/employer"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u0420\u0430\u0431\u043E\u0442\u043E\u0434\u0430\u0442\u0435\u043B\u044F\u043C`);
            } else {
              return [
                createTextVNode("\u0420\u0430\u0431\u043E\u0442\u043E\u0434\u0430\u0442\u0435\u043B\u044F\u043C")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<button class="btn download-cv disable" data-v-0dafda97>\u0421\u043A\u0430\u0447\u0430\u0442\u044C CV</button></div><div class="brand-logout_btn" data-v-0dafda97><div class="brand" data-v-0dafda97>itprofessionalswork</div><button class="btn" data-v-0dafda97>\u0412\u044B\u0445\u043E\u0434</button></div></div></div></div><div class="container-content" data-v-0dafda97><div class="about-me_block" data-v-0dafda97><div class="about-me_head" data-v-0dafda97><h2 data-v-0dafda97>\u041E\u0431\u043E \u043C\u043D\u0435</h2><button class="btn" data-v-0dafda97><img${ssrRenderAttr("src", _imports_3)} alt="edit-btn" data-v-0dafda97></button></div><div class="about-me_content" data-v-0dafda97>`);
        if (editMode.value) {
          _push(`<div class="textArea" data-v-0dafda97><textarea rows="4" data-v-0dafda97>${ssrInterpolate(content.value)}</textarea></div>`);
        } else {
          _push(`<div class="content" data-v-0dafda97><p data-v-0dafda97>${ssrInterpolate(userData.value.description)}</p></div>`);
        }
        _push(`</div></div><div class="second-content_block" data-v-0dafda97><div class="education-block" data-v-0dafda97><div class="education-head" data-v-0dafda97><h2 data-v-0dafda97>\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435</h2><button class="btn" data-v-0dafda97><img${ssrRenderAttr("src", _imports_3)} alt="edit-btn" data-v-0dafda97></button></div><div class="education-content" data-v-0dafda97></div></div><div class="experience-block" data-v-0dafda97><div class="experience-head" data-v-0dafda97><h2 data-v-0dafda97>\u041E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B</h2><button class="btn" data-v-0dafda97><img${ssrRenderAttr("src", _imports_3)} alt="edit-btn" data-v-0dafda97></button></div><div class="experience-content" data-v-0dafda97></div></div></div><div class="resume-block" data-v-0dafda97><div class="resume-header" data-v-0dafda97><h2 data-v-0dafda97>\u0420\u0435\u0437\u044E\u043C\u0435</h2>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "btn",
          to: "/create-resume"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", _imports_3)} alt="add-resume" data-v-0dafda97${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_3,
                  alt: "add-resume"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="resume-content" data-v-0dafda97></div></div><div class="stack-block" data-v-0dafda97><div class="stack-head" data-v-0dafda97><h2 data-v-0dafda97>\u0421\u0442\u044D\u043A</h2><button class="btn" data-v-0dafda97><img${ssrRenderAttr("src", _imports_3)} alt="edit-btn" data-v-0dafda97></button></div><div class="stack-content" data-v-0dafda97></div></div></div></div>`);
      } else {
        _push(`<div class="container" data-v-0dafda97><div class="container-head" data-v-0dafda97><div class="main-profile" data-v-0dafda97>`);
        if (userData.value.photo != null) {
          _push(`<img class="user-photo" alt="user-photo"${ssrRenderAttr("src", `data:image/jpeg;base64,${userData.value.photo}`)} data-v-0dafda97>`);
        } else {
          _push(`<button class="btn user-photo" data-v-0dafda97><img${ssrRenderAttr("src", _imports_0)} alt="add-photo" data-v-0dafda97></button>`);
        }
        _push(`<div class="user-dataBtn_block" data-v-0dafda97><div class="user-info" data-v-0dafda97><div class="user-nameEdit_block" data-v-0dafda97><h2 class="user-name" data-v-0dafda97>${ssrInterpolate(userData.value.name)}</h2><button class="btn" data-v-0dafda97><img${ssrRenderAttr("src", _imports_1)} alt="edit-btn" data-v-0dafda97></button></div><div class="user-tagAgeGender_block" data-v-0dafda97>`);
        if (userData.value.tag == "") {
          _push(`<div class="user-tag" data-v-0dafda97></div>`);
        } else {
          _push(`<div class="user-tag" data-v-0dafda97>${ssrInterpolate(userData.value.tag)}</div>`);
        }
        if (userData.value.birthday != "") {
          _push(`<div class="user-ageGender" data-v-0dafda97></div>`);
        } else {
          _push(`<div class="user-ageGender" data-v-0dafda97>${ssrInterpolate(userData.value.gender)}, ${ssrInterpolate(unref(Age))}</div>`);
        }
        _push(`</div><div class="user-locationStatus_block" data-v-0dafda97>`);
        if (userData.value.location == "") {
          _push(`<div class="user-location" data-v-0dafda97></div>`);
        } else {
          _push(`<div class="user-location" data-v-0dafda97><span data-v-0dafda97><img${ssrRenderAttr("src", _imports_2)} alt="location" data-v-0dafda97></span> ${ssrInterpolate(userData.value.location)}</div>`);
        }
        if (userData.value.status == "") {
          _push(`<div class="user-status" data-v-0dafda97></div>`);
        } else {
          _push(`<div class="user-status" data-v-0dafda97>${ssrInterpolate(userData.value.status)}</div>`);
        }
        _push(`</div><div class="user-emailPhone_block" data-v-0dafda97><div class="user-email" data-v-0dafda97>${ssrInterpolate(userData.value.email)}</div><div class="user-phone" data-v-0dafda97></div></div></div>`);
        if (unref(userRole) != "HR") {
          _push(`<div class="btn-block" data-v-0dafda97>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            class: "btn employee",
            to: "/employer"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`\u0420\u0430\u0431\u043E\u0442\u043E\u0434\u0430\u0442\u0435\u043B\u044F\u043C`);
              } else {
                return [
                  createTextVNode("\u0420\u0430\u0431\u043E\u0442\u043E\u0434\u0430\u0442\u0435\u043B\u044F\u043C")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`<button class="btn download-cv disable" data-v-0dafda97>\u0421\u043A\u0430\u0447\u0430\u0442\u044C CV</button></div>`);
        } else {
          _push(`<div class="btn-block" data-v-0dafda97>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            class: "btn employee",
            to: "/employer"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`\u0420\u0430\u0431\u043E\u0442\u043E\u0434\u0430\u0442\u0435\u043B\u044F\u043C`);
              } else {
                return [
                  createTextVNode("\u0420\u0430\u0431\u043E\u0442\u043E\u0434\u0430\u0442\u0435\u043B\u044F\u043C")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`<button class="btn download-cv disable" data-v-0dafda97>\u0421\u043A\u0430\u0447\u0430\u0442\u044C CV</button></div>`);
        }
        _push(`</div></div><div class="company" data-v-0dafda97><img class="logo" alt="logo"${ssrRenderAttr("src", `data:image/jpeg;base64,${companyData.value.photo}`)} data-v-0dafda97><div class="company-data" data-v-0dafda97><div class="company-name" data-v-0dafda97>${ssrInterpolate(companyData.value.name)}</div><div class="company-location" data-v-0dafda97>${ssrInterpolate(companyData.value.location)}</div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "btn success company-about_btn",
          to: `/company/${companyData.value.id}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435`);
            } else {
              return [
                createTextVNode("\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div><div class="container-content" data-v-0dafda97><div class="about-me_block" data-v-0dafda97><div class="about-me_head" data-v-0dafda97><h2 data-v-0dafda97>\u041E\u0431\u043E \u043C\u043D\u0435</h2><button class="btn" data-v-0dafda97><img${ssrRenderAttr("src", _imports_3)} alt="edit-btn" data-v-0dafda97></button></div><div class="about-me_content" data-v-0dafda97>`);
        if (editMode.value) {
          _push(`<div class="textArea" data-v-0dafda97><textarea rows="4" data-v-0dafda97>${ssrInterpolate(content.value)}</textarea></div>`);
        } else {
          _push(`<div class="content" data-v-0dafda97><p data-v-0dafda97>${ssrInterpolate(userData.value.description)}</p></div>`);
        }
        _push(`</div></div><div class="second-content_block" data-v-0dafda97><div class="education-block" data-v-0dafda97><div class="education-head" data-v-0dafda97><h2 data-v-0dafda97>\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435</h2><button class="btn" data-v-0dafda97><img${ssrRenderAttr("src", _imports_3)} alt="edit-btn" data-v-0dafda97></button></div><div class="education-content" data-v-0dafda97></div></div><div class="experience-block" data-v-0dafda97><div class="experience-head" data-v-0dafda97><h2 data-v-0dafda97>\u041E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B</h2><button class="btn" data-v-0dafda97><img${ssrRenderAttr("src", _imports_3)} alt="edit-btn" data-v-0dafda97></button></div><div class="experience-content" data-v-0dafda97></div></div></div><div class="resume-block" data-v-0dafda97><div class="resume-header" data-v-0dafda97><h2 data-v-0dafda97>\u0420\u0435\u0437\u044E\u043C\u0435</h2>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "btn",
          to: "/create-resume"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", _imports_3)} alt="add-resume" data-v-0dafda97${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_3,
                  alt: "add-resume"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="resume-content" data-v-0dafda97></div></div><div class="stack-block" data-v-0dafda97><div class="stack-head" data-v-0dafda97><h2 data-v-0dafda97>\u0421\u0442\u044D\u043A</h2><button class="btn" data-v-0dafda97><img${ssrRenderAttr("src", _imports_3)} alt="edit-btn" data-v-0dafda97></button></div><div class="stack-content" data-v-0dafda97></div></div></div></div>`);
      }
      if (showModal.value) {
        _push(`<div class="modal" data-v-0dafda97>`);
        _push(ssrRenderComponent(UserDataComponent, { closeModal }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (uploadModal.value) {
        _push(`<div class="modal" data-v-0dafda97>`);
        _push(ssrRenderComponent(UploadPhotoComponent, { closeUploadModal }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0dafda97"]]);

export { index as default };
//# sourceMappingURL=index-5f52f9bf.mjs.map
