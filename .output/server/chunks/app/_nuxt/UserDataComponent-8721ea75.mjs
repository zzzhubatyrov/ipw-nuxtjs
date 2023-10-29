import { useSSRContext, defineComponent, ref, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UserDataComponent",
  __ssrInlineRender: true,
  props: {
    closeModal: {
      type: Function,
      required: true
    }
  },
  setup(__props) {
    const name = ref("");
    const tag = ref("");
    const birthday = ref("");
    const location = ref("");
    const gender = ref("");
    const number = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "user-data_component" }, _attrs))} data-v-49ff142e><div class="userData_header" data-v-49ff142e><h1 class="fillData" data-v-49ff142e>\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u044B\u0435</h1><h3 class="fillData_second" data-v-49ff142e>\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0432\u0441\u0435\u043C \u043D\u0435\u043C\u043D\u043E\u0433\u043E</h3></div><form class="userData_form" data-v-49ff142e><label for="name" data-v-49ff142e>\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F</label><input${ssrRenderAttr("value", name.value)} type="text" name="name" id="name" placeholder="\u043F\u0440\u0438\u043C. \u0418\u0432\u0430\u043D \u0418\u0432\u0430\u043D\u043E\u0432" data-v-49ff142e><label for="tag" data-v-49ff142e>\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u044D\u0433</label><input${ssrRenderAttr("value", tag.value)} type="text" name="tag" id="tag" placeholder="\u043F\u0440\u0438\u043C. @ipw" data-v-49ff142e><label for="date" data-v-49ff142e>\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F</label><input${ssrRenderAttr("value", birthday.value)} type="text" name="date" id="date" placeholder="\u043F\u0440\u0438\u043C. 01.01.1987" data-v-49ff142e><label for="location" data-v-49ff142e>\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0433\u043E\u0440\u043E\u0434</label><input${ssrRenderAttr("value", location.value)} type="text" name="location" id="location" placeholder="\u043F\u0440\u0438\u043C. \u0423\u0444\u0430" data-v-49ff142e><label for="gender" data-v-49ff142e>\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u0435\u043D\u0434\u0435\u0440</label><select name="gender" id="gender-select" data-v-49ff142e><option value="\u041C\u0443\u0436\u0447\u0438\u043D\u0430" data-v-49ff142e${ssrIncludeBooleanAttr(Array.isArray(gender.value) ? ssrLooseContain(gender.value, "\u041C\u0443\u0436\u0447\u0438\u043D\u0430") : ssrLooseEqual(gender.value, "\u041C\u0443\u0436\u0447\u0438\u043D\u0430")) ? " selected" : ""}>\u041C\u0443\u0436\u0447\u0438\u043D\u0430</option><option value="\u0416\u0435\u043D\u0449\u0438\u043D\u0430" data-v-49ff142e${ssrIncludeBooleanAttr(Array.isArray(gender.value) ? ssrLooseContain(gender.value, "\u0416\u0435\u043D\u0449\u0438\u043D\u0430") : ssrLooseEqual(gender.value, "\u0416\u0435\u043D\u0449\u0438\u043D\u0430")) ? " selected" : ""}>\u0416\u0435\u043D\u0449\u0438\u043D\u0430</option><option value="\u0414\u0440\u0443\u0433\u043E\u0435" data-v-49ff142e${ssrIncludeBooleanAttr(Array.isArray(gender.value) ? ssrLooseContain(gender.value, "\u0414\u0440\u0443\u0433\u043E\u0435") : ssrLooseEqual(gender.value, "\u0414\u0440\u0443\u0433\u043E\u0435")) ? " selected" : ""}>\u0414\u0440\u0443\u0433\u043E\u0435</option></select><label for="number" data-v-49ff142e>\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430</label><input${ssrRenderAttr("value", number.value)} type="tel" name="number" id="number" placeholder="\u043F\u0440\u0438\u043C. +7(999)999-99-99" data-v-49ff142e></form><div class="footer" data-v-49ff142e><div class="btnForm" data-v-49ff142e><button class="btn cancelBtn" data-v-49ff142e>\u041E\u0442\u043C\u0435\u043D\u0430</button><button class="btn saveBtn" data-v-49ff142e>\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C</button></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UserDataComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const UserDataComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-49ff142e"]]);

export { UserDataComponent as U };
//# sourceMappingURL=UserDataComponent-8721ea75.mjs.map
