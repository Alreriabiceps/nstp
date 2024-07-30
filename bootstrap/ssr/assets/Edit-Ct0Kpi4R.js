import { onMounted, unref, withCtx, createVNode, createTextVNode, withModifiers, withDirectives, vModelSelect, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-BY_rBIip.js";
import { useForm, Head } from "@inertiajs/vue3";
import { _ as _sfc_main$2, a as _sfc_main$4 } from "./InputLabel-9qluswvY.js";
import { P as PrimaryButton } from "./PrimaryButton-Bxknhggv.js";
import { _ as _sfc_main$3 } from "./TextInput-Dmhkk7Cm.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    student: {
      type: Object,
      default: {}
    },
    courses: {
      type: Array,
      default: []
    },
    graduationYears: {
      type: Array,
      default: []
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      student_id: "",
      first_name: "",
      middle_name: "",
      last_name: "",
      extension_name: "",
      email: "",
      phone: "",
      sex: "",
      region: "Central Luzon",
      province: "Pampanga",
      city: "Arayat",
      brgy: "Mapalad",
      course_id: null,
      year_level: 1,
      enrollment_type: "CWTS",
      enrollment_year: "",
      nstp_serial_no: "",
      processing: false
    });
    const submit = () => {
      form.put(route("students.update", props.student.id), {
        onStart: () => {
          form.processing = true;
        },
        onFinish: () => {
          form.processing = false;
        },
        onSuccess: () => {
          alert("Student updated successfully!");
        }
      });
    };
    const resetPassword = async () => {
      try {
        await axios.get(
          route("students.reset-password", props.student.id)
        );
        alert("Password Update Successful!");
      } catch (error) {
        console.log(error);
      }
    };
    onMounted(() => {
      form.student_id = props.student.student_id;
      form.first_name = props.student.first_name;
      form.middle_name = props.student.middle_name;
      form.last_name = props.student.last_name;
      form.extension_name = props.student.extension_name;
      form.email = props.student.email;
      form.phone = props.student.phone;
      form.sex = props.student.sex;
      form.region = props.student.region;
      form.province = props.student.province;
      form.city = props.student.city;
      form.brgy = props.student.brgy;
      form.course_id = props.student.course_id;
      form.year_level = props.student.year_level;
      form.enrollment_type = props.student.enrollment_type;
      form.enrollment_year = props.student.enrollment_year;
      form.nstp_serial_no = props.student.nstp_serial_no;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Edit Student" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> Edit Student </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, " Edit Student ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white overflow-hidden shadow-sm sm:rounded-lg"${_scopeId}><div class="p-6 text-gray-900"${_scopeId}><form method="POST"${_scopeId}><div class="flex flex-wrap -mx-3 mb-6"${_scopeId}><div class="w-full md:w-2/4 px-3 mb-4 md:mb-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "student_id",
              value: "Student ID"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "student_id",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).student_id,
              "onUpdate:modelValue": ($event) => unref(form).student_id = $event,
              required: "",
              autofocus: "",
              placeholder: "Please enter student id"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.student_id
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex flex-wrap -mx-3 mb-6"${_scopeId}><div class="w-full md:w-3/12 px-3 mb-4 md:mb-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "first_name",
              value: "Firstname"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "first_name",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).first_name,
              "onUpdate:modelValue": ($event) => unref(form).first_name = $event,
              required: "",
              autofocus: "",
              placeholder: "First Name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.first_name
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="w-full md:w-2/12 px-3 mb-4 md:mb-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "extension_name",
              value: "Ext Name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "extension_name",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).extension_name,
              "onUpdate:modelValue": ($event) => unref(form).extension_name = $event,
              placeholder: "Ext Name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.extension_name
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="w-full md:w-3/12 px-3 mb-4 md:mb-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "middle_name",
              value: "Middlename"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "middle_name",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).middle_name,
              "onUpdate:modelValue": ($event) => unref(form).middle_name = $event,
              required: "",
              autofocus: "",
              placeholder: "Middle Name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.middle_name
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="w-full md:w-3/12 px-3 mb-4 md:mb-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "last_name",
              value: "Lastname"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "last_name",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).last_name,
              "onUpdate:modelValue": ($event) => unref(form).last_name = $event,
              required: "",
              autofocus: "",
              placeholder: "Last Name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.last_name
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex flex-wrap -mx-3 mb-6"${_scopeId}><div class="w-full md:w-2/6 px-3 mb-4 md:mb-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "email",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              required: "",
              autofocus: "",
              placeholder: "Email Address"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="w-full md:w-2/6 px-3 mb-4 md:mb-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "phone",
              value: "Phone"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "phone",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).phone,
              "onUpdate:modelValue": ($event) => unref(form).phone = $event,
              required: "",
              autofocus: "",
              placeholder: "0900000000"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.phone
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="w-full md:w-1/6 px-3 mb-4 md:mb-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "sex",
              value: "Sex"
            }, null, _parent2, _scopeId));
            _push2(`<select id="sex" class="block mt-1 w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm" name="sex" autofocus required${_scopeId}><option value="M"${ssrIncludeBooleanAttr(Array.isArray(unref(form).sex) ? ssrLooseContain(unref(form).sex, "M") : ssrLooseEqual(unref(form).sex, "M")) ? " selected" : ""}${_scopeId}>Male</option><option value="F"${ssrIncludeBooleanAttr(Array.isArray(unref(form).sex) ? ssrLooseContain(unref(form).sex, "F") : ssrLooseEqual(unref(form).sex, "F")) ? " selected" : ""}${_scopeId}>Female</option></select>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.sex
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex flex-wrap -mx-3 mb-6"${_scopeId}><div class="w-full md:w-1/2 px-3 mb-4 md:mb-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "region",
              value: "Region"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "region",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).region,
              "onUpdate:modelValue": ($event) => unref(form).region = $event,
              required: "",
              autofocus: "",
              placeholder: "Region"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.region
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="w-full md:w-1/2 px-3 mb-4 md:mb-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "province",
              value: "Province"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "province",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).province,
              "onUpdate:modelValue": ($event) => unref(form).province = $event,
              required: "",
              autofocus: "",
              placeholder: "Province"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.province
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex flex-wrap -mx-3 mb-6"${_scopeId}><div class="w-full md:w-1/2 px-3 mb-4 md:mb-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "city",
              value: "City/Municipality"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "city",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).city,
              "onUpdate:modelValue": ($event) => unref(form).city = $event,
              required: "",
              autofocus: "",
              placeholder: "City/Municipality"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.city
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="w-full md:w-1/2 px-3 mb-4 md:mb-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "brgy",
              value: "Brgy"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "brgy",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).brgy,
              "onUpdate:modelValue": ($event) => unref(form).brgy = $event,
              required: "",
              autofocus: "",
              placeholder: "Barangay"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.brgy
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex flex-wrap -mx-3 mb-6"${_scopeId}><div class="w-full md:w-2/4 px-3 mb-4 md:mb-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "course_id",
              value: "Program/Course"
            }, null, _parent2, _scopeId));
            _push2(`<select id="course_id" class="block mt-1 w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm" autofocus required${_scopeId}><option selected${_scopeId}>Select Course</option><!--[-->`);
            ssrRenderList(__props.courses, (course) => {
              _push2(`<option${ssrRenderAttr("value", course.id)}${_scopeId}>${ssrInterpolate(course.name)}</option>`);
            });
            _push2(`<!--]--></select>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.course_id
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="w-full md:w-1/4 px-3 mb-4 md:mb-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "year_level",
              value: "Year Level"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "year_level",
              type: "number",
              class: "mt-1 block w-full",
              modelValue: unref(form).year_level,
              "onUpdate:modelValue": ($event) => unref(form).year_level = $event,
              required: "",
              autofocus: "",
              placeholder: "Year Level",
              step: "1",
              min: "0"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.year_level
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex flex-wrap -mx-3 mb-6"${_scopeId}><div class="w-full md:w-1/4 px-3 mb-4 md:mb-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "enrollment_type",
              value: "NSTP TYPE"
            }, null, _parent2, _scopeId));
            _push2(`<select id="enrollment_type" class="block mt-1 w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm" autofocus required${_scopeId}><option value="CWTS"${ssrIncludeBooleanAttr(Array.isArray(unref(form).enrollment_type) ? ssrLooseContain(unref(form).enrollment_type, "CWTS") : ssrLooseEqual(unref(form).enrollment_type, "CWTS")) ? " selected" : ""}${_scopeId}>CWTS</option><option value="ROTC"${ssrIncludeBooleanAttr(Array.isArray(unref(form).enrollment_type) ? ssrLooseContain(unref(form).enrollment_type, "ROTC") : ssrLooseEqual(unref(form).enrollment_type, "ROTC")) ? " selected" : ""}${_scopeId}>ROTC</option><option value="LTS"${ssrIncludeBooleanAttr(Array.isArray(unref(form).enrollment_type) ? ssrLooseContain(unref(form).enrollment_type, "LTS") : ssrLooseEqual(unref(form).enrollment_type, "LTS")) ? " selected" : ""}${_scopeId}>LTS</option></select>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.enrollment_type
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="w-full md:w-1/4 px-3 mb-4 md:mb-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "enrollment_year",
              value: "Graduation Year"
            }, null, _parent2, _scopeId));
            _push2(`<select id="enrollment_year" class="block mt-1 w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm" autofocus required${_scopeId}><option selected${_scopeId}>Select Year</option><!--[-->`);
            ssrRenderList(__props.graduationYears, (year) => {
              _push2(`<option${ssrRenderAttr("value", year)}${_scopeId}>${ssrInterpolate(year)}</option>`);
            });
            _push2(`<!--]--></select>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.enrollment_year
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex flex-wrap -mx-3 mb-6"${_scopeId}><div class="w-full md:w-1/4 px-3 mb-4 md:mb-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "nstp_serial_no",
              value: "NSTP Serial No."
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "nstp_serial_no",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).nstp_serial_no,
              "onUpdate:modelValue": ($event) => unref(form).nstp_serial_no = $event,
              required: "",
              autofocus: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.nstp_serial_no
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(PrimaryButton, {
              class: ["ms-4", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Update `);
                } else {
                  return [
                    createTextVNode(" Update ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form></div></div></div></div><div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white overflow-hidden shadow-sm sm:rounded-lg"${_scopeId}><div class="p-6 text-gray-900"${_scopeId}><button type="button" class="bg-red-500 hover:bg-red-600 px-2 py-1 rounded text-white"${_scopeId}>Password Reset</button></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white overflow-hidden shadow-sm sm:rounded-lg" }, [
                    createVNode("div", { class: "p-6 text-gray-900" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(submit, ["prevent"]),
                        method: "POST"
                      }, [
                        createVNode("div", { class: "flex flex-wrap -mx-3 mb-6" }, [
                          createVNode("div", { class: "w-full md:w-2/4 px-3 mb-4 md:mb-0" }, [
                            createVNode(_sfc_main$2, {
                              for: "student_id",
                              value: "Student ID"
                            }),
                            createVNode(_sfc_main$3, {
                              id: "student_id",
                              type: "text",
                              class: "mt-1 block w-full",
                              modelValue: unref(form).student_id,
                              "onUpdate:modelValue": ($event) => unref(form).student_id = $event,
                              required: "",
                              autofocus: "",
                              placeholder: "Please enter student id"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_sfc_main$4, {
                              class: "mt-2",
                              message: unref(form).errors.student_id
                            }, null, 8, ["message"])
                          ])
                        ]),
                        createVNode("div", { class: "flex flex-wrap -mx-3 mb-6" }, [
                          createVNode("div", { class: "w-full md:w-3/12 px-3 mb-4 md:mb-0" }, [
                            createVNode(_sfc_main$2, {
                              for: "first_name",
                              value: "Firstname"
                            }),
                            createVNode(_sfc_main$3, {
                              id: "first_name",
                              type: "text",
                              class: "mt-1 block w-full",
                              modelValue: unref(form).first_name,
                              "onUpdate:modelValue": ($event) => unref(form).first_name = $event,
                              required: "",
                              autofocus: "",
                              placeholder: "First Name"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_sfc_main$4, {
                              class: "mt-2",
                              message: unref(form).errors.first_name
                            }, null, 8, ["message"])
                          ]),
                          createVNode("div", { class: "w-full md:w-2/12 px-3 mb-4 md:mb-0" }, [
                            createVNode(_sfc_main$2, {
                              for: "extension_name",
                              value: "Ext Name"
                            }),
                            createVNode(_sfc_main$3, {
                              id: "extension_name",
                              type: "text",
                              class: "mt-1 block w-full",
                              modelValue: unref(form).extension_name,
                              "onUpdate:modelValue": ($event) => unref(form).extension_name = $event,
                              placeholder: "Ext Name"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_sfc_main$4, {
                              class: "mt-2",
                              message: unref(form).errors.extension_name
                            }, null, 8, ["message"])
                          ]),
                          createVNode("div", { class: "w-full md:w-3/12 px-3 mb-4 md:mb-0" }, [
                            createVNode(_sfc_main$2, {
                              for: "middle_name",
                              value: "Middlename"
                            }),
                            createVNode(_sfc_main$3, {
                              id: "middle_name",
                              type: "text",
                              class: "mt-1 block w-full",
                              modelValue: unref(form).middle_name,
                              "onUpdate:modelValue": ($event) => unref(form).middle_name = $event,
                              required: "",
                              autofocus: "",
                              placeholder: "Middle Name"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_sfc_main$4, {
                              class: "mt-2",
                              message: unref(form).errors.middle_name
                            }, null, 8, ["message"])
                          ]),
                          createVNode("div", { class: "w-full md:w-3/12 px-3 mb-4 md:mb-0" }, [
                            createVNode(_sfc_main$2, {
                              for: "last_name",
                              value: "Lastname"
                            }),
                            createVNode(_sfc_main$3, {
                              id: "last_name",
                              type: "text",
                              class: "mt-1 block w-full",
                              modelValue: unref(form).last_name,
                              "onUpdate:modelValue": ($event) => unref(form).last_name = $event,
                              required: "",
                              autofocus: "",
                              placeholder: "Last Name"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_sfc_main$4, {
                              class: "mt-2",
                              message: unref(form).errors.last_name
                            }, null, 8, ["message"])
                          ])
                        ]),
                        createVNode("div", { class: "flex flex-wrap -mx-3 mb-6" }, [
                          createVNode("div", { class: "w-full md:w-2/6 px-3 mb-4 md:mb-0" }, [
                            createVNode(_sfc_main$2, {
                              for: "email",
                              value: "Email"
                            }),
                            createVNode(_sfc_main$3, {
                              id: "email",
                              type: "text",
                              class: "mt-1 block w-full",
                              modelValue: unref(form).email,
                              "onUpdate:modelValue": ($event) => unref(form).email = $event,
                              required: "",
                              autofocus: "",
                              placeholder: "Email Address"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_sfc_main$4, {
                              class: "mt-2",
                              message: unref(form).errors.email
                            }, null, 8, ["message"])
                          ]),
                          createVNode("div", { class: "w-full md:w-2/6 px-3 mb-4 md:mb-0" }, [
                            createVNode(_sfc_main$2, {
                              for: "phone",
                              value: "Phone"
                            }),
                            createVNode(_sfc_main$3, {
                              id: "phone",
                              type: "text",
                              class: "mt-1 block w-full",
                              modelValue: unref(form).phone,
                              "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                              required: "",
                              autofocus: "",
                              placeholder: "0900000000"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_sfc_main$4, {
                              class: "mt-2",
                              message: unref(form).errors.phone
                            }, null, 8, ["message"])
                          ]),
                          createVNode("div", { class: "w-full md:w-1/6 px-3 mb-4 md:mb-0" }, [
                            createVNode(_sfc_main$2, {
                              for: "sex",
                              value: "Sex"
                            }),
                            withDirectives(createVNode("select", {
                              id: "sex",
                              class: "block mt-1 w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",
                              name: "sex",
                              autofocus: "",
                              "onUpdate:modelValue": ($event) => unref(form).sex = $event,
                              required: ""
                            }, [
                              createVNode("option", { value: "M" }, "Male"),
                              createVNode("option", { value: "F" }, "Female")
                            ], 8, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(form).sex]
                            ]),
                            createVNode(_sfc_main$4, {
                              class: "mt-2",
                              message: unref(form).errors.sex
                            }, null, 8, ["message"])
                          ])
                        ]),
                        createVNode("div", { class: "flex flex-wrap -mx-3 mb-6" }, [
                          createVNode("div", { class: "w-full md:w-1/2 px-3 mb-4 md:mb-0" }, [
                            createVNode(_sfc_main$2, {
                              for: "region",
                              value: "Region"
                            }),
                            createVNode(_sfc_main$3, {
                              id: "region",
                              type: "text",
                              class: "mt-1 block w-full",
                              modelValue: unref(form).region,
                              "onUpdate:modelValue": ($event) => unref(form).region = $event,
                              required: "",
                              autofocus: "",
                              placeholder: "Region"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_sfc_main$4, {
                              class: "mt-2",
                              message: unref(form).errors.region
                            }, null, 8, ["message"])
                          ]),
                          createVNode("div", { class: "w-full md:w-1/2 px-3 mb-4 md:mb-0" }, [
                            createVNode(_sfc_main$2, {
                              for: "province",
                              value: "Province"
                            }),
                            createVNode(_sfc_main$3, {
                              id: "province",
                              type: "text",
                              class: "mt-1 block w-full",
                              modelValue: unref(form).province,
                              "onUpdate:modelValue": ($event) => unref(form).province = $event,
                              required: "",
                              autofocus: "",
                              placeholder: "Province"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_sfc_main$4, {
                              class: "mt-2",
                              message: unref(form).errors.province
                            }, null, 8, ["message"])
                          ])
                        ]),
                        createVNode("div", { class: "flex flex-wrap -mx-3 mb-6" }, [
                          createVNode("div", { class: "w-full md:w-1/2 px-3 mb-4 md:mb-0" }, [
                            createVNode(_sfc_main$2, {
                              for: "city",
                              value: "City/Municipality"
                            }),
                            createVNode(_sfc_main$3, {
                              id: "city",
                              type: "text",
                              class: "mt-1 block w-full",
                              modelValue: unref(form).city,
                              "onUpdate:modelValue": ($event) => unref(form).city = $event,
                              required: "",
                              autofocus: "",
                              placeholder: "City/Municipality"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_sfc_main$4, {
                              class: "mt-2",
                              message: unref(form).errors.city
                            }, null, 8, ["message"])
                          ]),
                          createVNode("div", { class: "w-full md:w-1/2 px-3 mb-4 md:mb-0" }, [
                            createVNode(_sfc_main$2, {
                              for: "brgy",
                              value: "Brgy"
                            }),
                            createVNode(_sfc_main$3, {
                              id: "brgy",
                              type: "text",
                              class: "mt-1 block w-full",
                              modelValue: unref(form).brgy,
                              "onUpdate:modelValue": ($event) => unref(form).brgy = $event,
                              required: "",
                              autofocus: "",
                              placeholder: "Barangay"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_sfc_main$4, {
                              class: "mt-2",
                              message: unref(form).errors.brgy
                            }, null, 8, ["message"])
                          ])
                        ]),
                        createVNode("div", { class: "flex flex-wrap -mx-3 mb-6" }, [
                          createVNode("div", { class: "w-full md:w-2/4 px-3 mb-4 md:mb-0" }, [
                            createVNode(_sfc_main$2, {
                              for: "course_id",
                              value: "Program/Course"
                            }),
                            withDirectives(createVNode("select", {
                              id: "course_id",
                              class: "block mt-1 w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",
                              autofocus: "",
                              "onUpdate:modelValue": ($event) => unref(form).course_id = $event,
                              required: ""
                            }, [
                              createVNode("option", { selected: "" }, "Select Course"),
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.courses, (course) => {
                                return openBlock(), createBlock("option", {
                                  key: course.id,
                                  value: course.id
                                }, toDisplayString(course.name), 9, ["value"]);
                              }), 128))
                            ], 8, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(form).course_id]
                            ]),
                            createVNode(_sfc_main$4, {
                              class: "mt-2",
                              message: unref(form).errors.course_id
                            }, null, 8, ["message"])
                          ]),
                          createVNode("div", { class: "w-full md:w-1/4 px-3 mb-4 md:mb-0" }, [
                            createVNode(_sfc_main$2, {
                              for: "year_level",
                              value: "Year Level"
                            }),
                            createVNode(_sfc_main$3, {
                              id: "year_level",
                              type: "number",
                              class: "mt-1 block w-full",
                              modelValue: unref(form).year_level,
                              "onUpdate:modelValue": ($event) => unref(form).year_level = $event,
                              required: "",
                              autofocus: "",
                              placeholder: "Year Level",
                              step: "1",
                              min: "0"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_sfc_main$4, {
                              class: "mt-2",
                              message: unref(form).errors.year_level
                            }, null, 8, ["message"])
                          ])
                        ]),
                        createVNode("div", { class: "flex flex-wrap -mx-3 mb-6" }, [
                          createVNode("div", { class: "w-full md:w-1/4 px-3 mb-4 md:mb-0" }, [
                            createVNode(_sfc_main$2, {
                              for: "enrollment_type",
                              value: "NSTP TYPE"
                            }),
                            withDirectives(createVNode("select", {
                              id: "enrollment_type",
                              class: "block mt-1 w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",
                              autofocus: "",
                              "onUpdate:modelValue": ($event) => unref(form).enrollment_type = $event,
                              required: ""
                            }, [
                              createVNode("option", { value: "CWTS" }, "CWTS"),
                              createVNode("option", { value: "ROTC" }, "ROTC"),
                              createVNode("option", { value: "LTS" }, "LTS")
                            ], 8, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(form).enrollment_type]
                            ]),
                            createVNode(_sfc_main$4, {
                              class: "mt-2",
                              message: unref(form).errors.enrollment_type
                            }, null, 8, ["message"])
                          ]),
                          createVNode("div", { class: "w-full md:w-1/4 px-3 mb-4 md:mb-0" }, [
                            createVNode(_sfc_main$2, {
                              for: "enrollment_year",
                              value: "Graduation Year"
                            }),
                            withDirectives(createVNode("select", {
                              id: "enrollment_year",
                              class: "block mt-1 w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",
                              autofocus: "",
                              "onUpdate:modelValue": ($event) => unref(form).enrollment_year = $event,
                              required: ""
                            }, [
                              createVNode("option", { selected: "" }, "Select Year"),
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.graduationYears, (year) => {
                                return openBlock(), createBlock("option", {
                                  key: year,
                                  value: year
                                }, toDisplayString(year), 9, ["value"]);
                              }), 128))
                            ], 8, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(form).enrollment_year]
                            ]),
                            createVNode(_sfc_main$4, {
                              class: "mt-2",
                              message: unref(form).errors.enrollment_year
                            }, null, 8, ["message"])
                          ])
                        ]),
                        createVNode("div", { class: "flex flex-wrap -mx-3 mb-6" }, [
                          createVNode("div", { class: "w-full md:w-1/4 px-3 mb-4 md:mb-0" }, [
                            createVNode(_sfc_main$2, {
                              for: "nstp_serial_no",
                              value: "NSTP Serial No."
                            }),
                            createVNode(_sfc_main$3, {
                              id: "nstp_serial_no",
                              type: "text",
                              class: "mt-1 block w-full",
                              modelValue: unref(form).nstp_serial_no,
                              "onUpdate:modelValue": ($event) => unref(form).nstp_serial_no = $event,
                              required: "",
                              autofocus: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_sfc_main$4, {
                              class: "mt-2",
                              message: unref(form).errors.nstp_serial_no
                            }, null, 8, ["message"])
                          ])
                        ]),
                        createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                          createVNode(PrimaryButton, {
                            class: ["ms-4", { "opacity-25": unref(form).processing }],
                            disabled: unref(form).processing
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Update ")
                            ]),
                            _: 1
                          }, 8, ["class", "disabled"])
                        ])
                      ], 32)
                    ])
                  ])
                ])
              ]),
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white overflow-hidden shadow-sm sm:rounded-lg" }, [
                    createVNode("div", { class: "p-6 text-gray-900" }, [
                      createVNode("button", {
                        type: "button",
                        class: "bg-red-500 hover:bg-red-600 px-2 py-1 rounded text-white",
                        onClick: resetPassword
                      }, "Password Reset")
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Students/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
