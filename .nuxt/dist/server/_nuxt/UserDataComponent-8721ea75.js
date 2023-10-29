import { defineComponent, ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "user-data_component" }, _attrs))} data-v-49ff142e><div class="userData_header" data-v-49ff142e><h1 class="fillData" data-v-49ff142e>Заполните данные</h1><h3 class="fillData_second" data-v-49ff142e>Осталось совсем немного</h3></div><form class="userData_form" data-v-49ff142e><label for="name" data-v-49ff142e>Введите имя</label><input${ssrRenderAttr("value", name.value)} type="text" name="name" id="name" placeholder="прим. Иван Иванов" data-v-49ff142e><label for="tag" data-v-49ff142e>Введите тэг</label><input${ssrRenderAttr("value", tag.value)} type="text" name="tag" id="tag" placeholder="прим. @ipw" data-v-49ff142e><label for="date" data-v-49ff142e>Введите дату рождения</label><input${ssrRenderAttr("value", birthday.value)} type="text" name="date" id="date" placeholder="прим. 01.01.1987" data-v-49ff142e><label for="location" data-v-49ff142e>Введите город</label><input${ssrRenderAttr("value", location.value)} type="text" name="location" id="location" placeholder="прим. Уфа" data-v-49ff142e><label for="gender" data-v-49ff142e>Выберите гендер</label><select name="gender" id="gender-select" data-v-49ff142e><option value="Мужчина" data-v-49ff142e${ssrIncludeBooleanAttr(Array.isArray(gender.value) ? ssrLooseContain(gender.value, "Мужчина") : ssrLooseEqual(gender.value, "Мужчина")) ? " selected" : ""}>Мужчина</option><option value="Женщина" data-v-49ff142e${ssrIncludeBooleanAttr(Array.isArray(gender.value) ? ssrLooseContain(gender.value, "Женщина") : ssrLooseEqual(gender.value, "Женщина")) ? " selected" : ""}>Женщина</option><option value="Другое" data-v-49ff142e${ssrIncludeBooleanAttr(Array.isArray(gender.value) ? ssrLooseContain(gender.value, "Другое") : ssrLooseEqual(gender.value, "Другое")) ? " selected" : ""}>Другое</option></select><label for="number" data-v-49ff142e>Введите номер телефона</label><input${ssrRenderAttr("value", number.value)} type="tel" name="number" id="number" placeholder="прим. +7(999)999-99-99" data-v-49ff142e></form><div class="footer" data-v-49ff142e><div class="btnForm" data-v-49ff142e><button class="btn cancelBtn" data-v-49ff142e>Отмена</button><button class="btn saveBtn" data-v-49ff142e>Сохранить</button></div></div></div>`);
    };
  }
});
const UserDataComponent_vue_vue_type_style_index_0_scoped_49ff142e_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UserDataComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const UserDataComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-49ff142e"]]);
export {
  UserDataComponent as U
};
//# sourceMappingURL=UserDataComponent-8721ea75.js.map
