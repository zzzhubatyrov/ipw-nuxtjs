import { useSSRContext, defineComponent, ref, mergeProps, unref, toRef, isRef } from 'vue';
import { _ as _export_sfc, b as useNuxtApp } from '../server.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@unhead/shared';
import 'vue-router';

const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxt = useNuxtApp();
  const state = toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const createResumeHeadTitle = "<info />";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const steps = ref([1]);
    const currentStep = useState("currentStep", () => 0);
    const specializeInput = ref("");
    const statusSelect = ref("");
    const salaryInput = ref("");
    const descResume = ref("");
    const skillsValue = ref("");
    const dotClass = (index2) => {
      return {
        "progress-dot": true,
        "active": index2 <= currentStep.value
      };
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-6794c0e1><div class="createResume-left_block" data-v-6794c0e1><h1 class="logo" data-v-6794c0e1>IPW</h1><h3 class="second-logo" data-v-6794c0e1>itprofessionalswork</h3><h2 class="createResume-title" data-v-6794c0e1>\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0420\u0435\u0437\u044E\u043C\u0435</h2></div><div class="createResume-right_block" data-v-6794c0e1><div class="createResume-content_block" data-v-6794c0e1><h1 class="createResume-head" data-v-6794c0e1>${ssrInterpolate(createResumeHeadTitle)}</h1><div class="createResume-progressDot_block" data-v-6794c0e1><div class="progress-dots" data-v-6794c0e1><!--[-->`);
      ssrRenderList(steps.value, (step, index2) => {
        _push(`<div class="${ssrRenderClass(dotClass(index2))}" data-v-6794c0e1></div>`);
      });
      _push(`<!--]--></div></div><div class="createResume-content" data-v-6794c0e1><div class="step" style="${ssrRenderStyle(unref(currentStep) === 0 ? null : { display: "none" })}" data-v-6794c0e1><div class="createResume-specialize_block" data-v-6794c0e1><h3 class="createResume-specialize_head" data-v-6794c0e1>\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F</h3><div class="createResume-specialize_content" data-v-6794c0e1><input${ssrRenderAttr("value", specializeInput.value)} type="text" class="specialize-input" data-v-6794c0e1></div></div><div class="createResume-status_block" data-v-6794c0e1><h3 class="createResume-status_head" data-v-6794c0e1>\u0413\u043E\u0442\u043E\u0432\u043D\u043E\u0441\u0442\u044C \u043A \u0440\u0430\u0431\u043E\u0442\u0435</h3><div class="createResume-status_content" data-v-6794c0e1><select class="status-select" name="status-select" data-v-6794c0e1><option value="\u0418\u0449\u0443 \u0440\u0430\u0431\u043E\u0442\u0443" data-v-6794c0e1${ssrIncludeBooleanAttr(Array.isArray(statusSelect.value) ? ssrLooseContain(statusSelect.value, "\u0418\u0449\u0443 \u0440\u0430\u0431\u043E\u0442\u0443") : ssrLooseEqual(statusSelect.value, "\u0418\u0449\u0443 \u0440\u0430\u0431\u043E\u0442\u0443")) ? " selected" : ""}>\u0418\u0449\u0443 \u0440\u0430\u0431\u043E\u0442\u0443</option><option value="\u041D\u0435 \u0438\u0449\u0443 \u0440\u0430\u0431\u043E\u0442\u0443" data-v-6794c0e1${ssrIncludeBooleanAttr(Array.isArray(statusSelect.value) ? ssrLooseContain(statusSelect.value, "\u041D\u0435 \u0438\u0449\u0443 \u0440\u0430\u0431\u043E\u0442\u0443") : ssrLooseEqual(statusSelect.value, "\u041D\u0435 \u0438\u0449\u0443 \u0440\u0430\u0431\u043E\u0442\u0443")) ? " selected" : ""}>\u041D\u0435 \u0438\u0449\u0443 \u0440\u0430\u0431\u043E\u0442\u0443</option><option value="\u0420\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u044E \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F" data-v-6794c0e1${ssrIncludeBooleanAttr(Array.isArray(statusSelect.value) ? ssrLooseContain(statusSelect.value, "\u0420\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u044E \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F") : ssrLooseEqual(statusSelect.value, "\u0420\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u044E \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F")) ? " selected" : ""}>\u0420\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u044E \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F</option></select></div></div><div class="createResume-salary_block" data-v-6794c0e1><h3 class="createResume-salary_head" data-v-6794c0e1>\u041E\u0436\u0438\u0434\u0430\u0435\u043C\u043E\u0435 \u0432\u043E\u0437\u043D\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043D\u0438\u0435</h3><div class="createResume-salary_content" data-v-6794c0e1><input${ssrRenderAttr("value", salaryInput.value)} type="text" class="salary-input" data-v-6794c0e1></div></div><div class="createResume-description_block" data-v-6794c0e1><h3 class="createResume-description_head" data-v-6794c0e1>\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043E \u0441\u0435\u0431\u0435</h3><div class="createResume-description_content" data-v-6794c0e1><textarea type="text" class="descriptionResume-textarea" data-v-6794c0e1>${ssrInterpolate(descResume.value)}</textarea></div></div><div class="createResume-skills_block" data-v-6794c0e1><h3 class="createResume-skills_head" data-v-6794c0e1>\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 \u0441\u0442\u044D\u043A</h3><div class="createResume-skills_content" data-v-6794c0e1><textarea type="text" class="skillsResume-textarea" data-v-6794c0e1>${ssrInterpolate(skillsValue.value)}</textarea></div></div></div></div></div><div class="createResume-btn_block" data-v-6794c0e1><button class="btn"${ssrIncludeBooleanAttr(unref(currentStep) === 0) ? " disabled" : ""} data-v-6794c0e1>\u041D\u0430\u0437\u0430\u0434</button>`);
      if (unref(currentStep) == 0) {
        _push(`<button class="btn" data-v-6794c0e1>\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/create-resume/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6794c0e1"]]);

export { index as default };
//# sourceMappingURL=index-9ef03a81.mjs.map
