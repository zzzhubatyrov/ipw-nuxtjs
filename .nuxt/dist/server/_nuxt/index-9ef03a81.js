import { toRef, isRef, defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import "hookable";
import { b as useNuxtApp, _ as _export_sfc } from "../server.mjs";
import "destr";
import "devalue";
import "defu";
import "klona";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-6794c0e1><div class="createResume-left_block" data-v-6794c0e1><h1 class="logo" data-v-6794c0e1>IPW</h1><h3 class="second-logo" data-v-6794c0e1>itprofessionalswork</h3><h2 class="createResume-title" data-v-6794c0e1>Создание Резюме</h2></div><div class="createResume-right_block" data-v-6794c0e1><div class="createResume-content_block" data-v-6794c0e1><h1 class="createResume-head" data-v-6794c0e1>${ssrInterpolate(createResumeHeadTitle)}</h1><div class="createResume-progressDot_block" data-v-6794c0e1><div class="progress-dots" data-v-6794c0e1><!--[-->`);
      ssrRenderList(steps.value, (step, index2) => {
        _push(`<div class="${ssrRenderClass(dotClass(index2))}" data-v-6794c0e1></div>`);
      });
      _push(`<!--]--></div></div><div class="createResume-content" data-v-6794c0e1><div class="step" style="${ssrRenderStyle(unref(currentStep) === 0 ? null : { display: "none" })}" data-v-6794c0e1><div class="createResume-specialize_block" data-v-6794c0e1><h3 class="createResume-specialize_head" data-v-6794c0e1>Специализация</h3><div class="createResume-specialize_content" data-v-6794c0e1><input${ssrRenderAttr("value", specializeInput.value)} type="text" class="specialize-input" data-v-6794c0e1></div></div><div class="createResume-status_block" data-v-6794c0e1><h3 class="createResume-status_head" data-v-6794c0e1>Готовность к работе</h3><div class="createResume-status_content" data-v-6794c0e1><select class="status-select" name="status-select" data-v-6794c0e1><option value="Ищу работу" data-v-6794c0e1${ssrIncludeBooleanAttr(Array.isArray(statusSelect.value) ? ssrLooseContain(statusSelect.value, "Ищу работу") : ssrLooseEqual(statusSelect.value, "Ищу работу")) ? " selected" : ""}>Ищу работу</option><option value="Не ищу работу" data-v-6794c0e1${ssrIncludeBooleanAttr(Array.isArray(statusSelect.value) ? ssrLooseContain(statusSelect.value, "Не ищу работу") : ssrLooseEqual(statusSelect.value, "Не ищу работу")) ? " selected" : ""}>Не ищу работу</option><option value="Рассмотрю предложения" data-v-6794c0e1${ssrIncludeBooleanAttr(Array.isArray(statusSelect.value) ? ssrLooseContain(statusSelect.value, "Рассмотрю предложения") : ssrLooseEqual(statusSelect.value, "Рассмотрю предложения")) ? " selected" : ""}>Рассмотрю предложения</option></select></div></div><div class="createResume-salary_block" data-v-6794c0e1><h3 class="createResume-salary_head" data-v-6794c0e1>Ожидаемое вознаграждение</h3><div class="createResume-salary_content" data-v-6794c0e1><input${ssrRenderAttr("value", salaryInput.value)} type="text" class="salary-input" data-v-6794c0e1></div></div><div class="createResume-description_block" data-v-6794c0e1><h3 class="createResume-description_head" data-v-6794c0e1>Напишите о себе</h3><div class="createResume-description_content" data-v-6794c0e1><textarea type="text" class="descriptionResume-textarea" data-v-6794c0e1>${ssrInterpolate(descResume.value)}</textarea></div></div><div class="createResume-skills_block" data-v-6794c0e1><h3 class="createResume-skills_head" data-v-6794c0e1>Укажите свой стэк</h3><div class="createResume-skills_content" data-v-6794c0e1><textarea type="text" class="skillsResume-textarea" data-v-6794c0e1>${ssrInterpolate(skillsValue.value)}</textarea></div></div></div></div></div><div class="createResume-btn_block" data-v-6794c0e1><button class="btn"${ssrIncludeBooleanAttr(unref(currentStep) === 0) ? " disabled" : ""} data-v-6794c0e1>Назад</button>`);
      if (unref(currentStep) == 0) {
        _push(`<button class="btn" data-v-6794c0e1>Сохранить</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_6794c0e1_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/create-resume/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6794c0e1"]]);
export {
  index as default
};
//# sourceMappingURL=index-9ef03a81.js.map
