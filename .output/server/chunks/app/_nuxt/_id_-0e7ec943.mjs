import { useSSRContext, defineComponent, ref, mergeProps } from 'vue';
import { _ as _export_sfc, a as useRoute } from '../server.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  setup() {
    useRoute().params;
    const resume = ref([]);
    return { resume };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-2304f438><div class="resume_block" data-v-2304f438><div class="resume_header" data-v-2304f438><div class="resume_header_container" data-v-2304f438><div class="resume_header_userInfo_block" data-v-2304f438><div class="resume_user_logo" data-v-2304f438></div><div class="resume_user_info" data-v-2304f438><div class="resume_nameAgeCity_block" data-v-2304f438><div class="resume_nameTag" data-v-2304f438><div class="resume_userName" data-v-2304f438>${ssrInterpolate(_ctx.resume.userName)}</div><div class="resume_userTag" data-v-2304f438>${ssrInterpolate(_ctx.resume.userTag)}</div></div>`);
  if (_ctx.resume.city === "" || _ctx.resume.userGender === "") {
    _push(`<div data-v-2304f438></div>`);
  } else {
    _push(`<div class="resume_ageLocation" data-v-2304f438><div class="resume_userAge" data-v-2304f438>${ssrInterpolate(_ctx.resume.userGender)}, ${ssrInterpolate(_ctx.resume.userAge)} \u043B\u0435\u0442</div><div class="resume_userLocation" data-v-2304f438>\u0413\u043E\u0440\u043E\u0434: ${ssrInterpolate(_ctx.resume.location)}</div></div>`);
  }
  _push(`<div class="resume_status" data-v-2304f438>${ssrInterpolate(_ctx.resume.status)}</div></div><div class="resume_user_contacts" data-v-2304f438><div class="resume_userEmail" data-v-2304f438>${ssrInterpolate(_ctx.resume.userEmail)}</div><div class="resume_userNumber" data-v-2304f438>${ssrInterpolate(_ctx.resume.userNumber)}</div></div></div></div></div><div class="brand" data-v-2304f438>itprofessionalswork</div></div><div class="resume_second_container" data-v-2304f438><div class="resume_description" data-v-2304f438><div class="resume_description_head" data-v-2304f438>\u0420\u0435\u0437\u044E\u043C\u0435 ${ssrInterpolate(_ctx.resume.level)} ${ssrInterpolate(_ctx.resume.direction)}</div><div class="resume_description_content" data-v-2304f438>${ssrInterpolate(_ctx.resume.description)}</div></div><div class="resume_userStack" data-v-2304f438><div class="resume_userStack_head" data-v-2304f438>\u0421\u0442\u044D\u043A</div><div class="resume_userStack_content" data-v-2304f438>${ssrInterpolate(_ctx.resume.skills)}</div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/resumes/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2304f438"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-0e7ec943.mjs.map
