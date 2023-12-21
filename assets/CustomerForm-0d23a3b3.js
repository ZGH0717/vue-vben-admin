var D=(C,f,r)=>new Promise((_,p)=>{var b=a=>{try{u(r.next(a))}catch(l){p(l)}},e=a=>{try{u(r.throw(a))}catch(l){p(l)}},u=a=>a.done?_(a.value):Promise.resolve(a.value).then(b,e);u((r=r.apply(C,f)).next())});import{_ as h}from"./BasicForm.vue_vue_type_script_setup_true_lang-0624b790.js";import"./BasicForm.vue_vue_type_style_index_0_lang-9667d3a7.js";import"./componentMap-f7f5ce27.js";import{u as V}from"./useForm-8838369c.js";import{C as B,a as x,e as P}from"./index.js";import{P as g}from"./index-7bb076d5.js";import{F as c,h as n,r as s,v as F}from"./antd-2f1e67c0.js";import{d as S,a7 as I,Z as U,a8 as q,a9 as i,l as t,u as d,m as O,E as m}from"./vue-f962b0e4.js";import"./FormItem.vue_vue_type_script_lang-ed1080df.js";import"./helper-b0407d84.js";import"./isNumber-f0336cfd.js";import"./isBoolean-9388e2d6.js";import"./get-3d19de2f.js";import"./uniqBy-3d1a97d8.js";import"./index-05c55ef7.js";import"./useWindowSizeFn-844b46eb.js";import"./useFormItem-be9db066.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-b737c8dd.js";import"./uuid-31b8b5a4.js";import"./useSortable-b9fa3fd2.js";import"./download-4dc1f19b.js";import"./base64Conver-39fc0d26.js";import"./index-328dacc6.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-32ae3128.js";import"./copyTextToClipboard-1186e738.js";import"./index-8a187562.js";import"./index-c694e7f6.js";import"./useContentViewHeight-4ea1ac81.js";import"./onMountedOrActivated-affa4888.js";const w=S({__name:"CustomerForm",setup(C){const f=e=>[{required:!0,validator:()=>D(this,null,function*(){if(!e.typeKey)return Promise.reject("请选择类型");if(!e.typeValue)return Promise.reject("请输入数据");Promise.resolve()})}],r=[{field:"field1",component:"Input",label:"render方式",colProps:{span:8},dynamicDisabled:({values:e})=>!!e.field_disabled,rules:[{required:!0}],render:({model:e,field:u},{disabled:a})=>O(n,{placeholder:"请输入",value:e[u],onChange:l=>{e[u]=l.target.value},disabled:a})},{field:"field2",component:"Input",label:"render组件slot",colProps:{span:8},dynamicDisabled:({values:e})=>!!e.field_disabled,rules:[{required:!0}],renderComponentContent:(e,{disabled:u})=>({suffix:()=>u?"suffix_disabled":"suffix_default"})},{field:"field3",label:"自定义Slot",slot:"f3",colProps:{span:8},dynamicDisabled:({values:e})=>!!e.field_disabled,rules:[{required:!0}]},{field:"field4",component:"Input",renderColContent({model:e,field:u},{disabled:a}){return t(c,{name:"field4",label:"renderColContent渲染",rules:[{required:!0}]},{default:()=>[t(n,{placeholder:"请输入",value:e[u],"onUpdate:value":l=>e[u]=l,disabled:a},null)]})},colProps:{span:8},dynamicDisabled:({values:e})=>!!e.field_disabled},{field:"field5",component:"Input",label:"自定义colSlot",colSlot:"colSlot_field5",colProps:{span:8},dynamicDisabled:({values:e})=>!!e.field_disabled},{required:!0,field:"typeKey2",defaultValue:"测试类型",fields:["typeValue2"],defaultValueObj:{typeValue2:"默认测试_文字"},component:"Input",label:"复合field render",render({model:e,field:u},{disabled:a}){return t(n.Group,{compact:!0},{default:()=>[t(s,{disabled:a,style:"width: 120px",allowClear:!0,value:e[u],"onUpdate:value":l=>e[u]=l},{default:()=>[t(s.Option,{value:"测试类型"},{default:()=>[m("测试类型")]}),t(s.Option,{value:"测试名称"},{default:()=>[m("测试名称")]})]}),t(c,{name:"typeValue2",class:"local_typeValue",rules:[{required:!0}]},{default:()=>[t(F,null,{default:()=>[t(n,{placeholder:"请输入",value:e.typeValue2,"onUpdate:value":l=>e.typeValue2=l,disabled:a},null)]})]})]})},colProps:{span:8},dynamicDisabled:({values:e})=>!!e.field_disabled},{field:"typeKey",defaultValue:"公司名称",fields:["typeValue"],defaultValueObj:{typeValue:"默认文字"},component:"Input",renderColContent({model:e,field:u},{disabled:a}){return t(c,{name:"typeKey",label:"复合field renderColContent",rules:f(e)},{default:()=>[t(n.Group,{compact:!0},{default:()=>[t(s,{allowClear:!0,disabled:a,style:"width: 120px",value:e[u],"onUpdate:value":l=>e[u]=l},{default:()=>[t(s.Option,{value:"公司名称"},{default:()=>[m("公司名称")]}),t(s.Option,{value:"产品名称"},{default:()=>[m("产品名称")]})]}),t(F,null,{default:()=>[t(n,{style:"width: calc(100% - 120px); margin-left: -1px;",placeholder:"请输入",value:e.typeValue,"onUpdate:value":l=>e.typeValue=l,disabled:a},null)]})]})]})},colProps:{span:16},dynamicDisabled:({values:e})=>!!e.field_disabled},{field:"field_disabled",component:"Switch",label:"是否禁用 编辑字段",colProps:{span:8},labelWidth:200}],{createMessage:_}=x(),[p]=V({labelWidth:120,schemas:r,actionColOptions:{span:24}});function b(e){_.success("click search,values:"+JSON.stringify(e))}return(e,u)=>{const a=I("a-input");return U(),q(d(g),{title:"自定义组件示例"},{default:i(()=>[t(d(B),{title:"自定义表单"},{default:i(()=>[t(d(h),{class:"local_form",onRegister:d(p),onSubmit:b},{f3:i(({model:l,field:o,disabled:y})=>[t(a,{value:l[o],"onUpdate:value":v=>l[o]=v,disabled:y,placeholder:"自定义slot"},null,8,["value","onUpdate:value","disabled"])]),colSlot_field5:i(({model:l,field:o,disabled:y})=>[t(d(c),{name:o,label:"自定义colSlot",rules:[{required:!0}]},{default:i(()=>[t(a,{value:l[o],"onUpdate:value":v=>l[o]=v,disabled:y,placeholder:"自定义colSlot"},null,8,["value","onUpdate:value","disabled"])]),_:2},1032,["name"])]),_:1},8,["onRegister"])]),_:1})]),_:1})}}});const de=P(w,[["__scopeId","data-v-f92491f2"]]);export{de as default};
