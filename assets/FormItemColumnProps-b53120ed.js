import{e as d}from"./formItemPropsConfig-3f089238.js";import C from"./RuleProps-77d95fc7.js";import{u as y}from"./useFormDesignState-4fbefc60.js";import{ah as _,h,y as I,F as P,a8 as F,z as k,r as v,a9 as b}from"./antd-2f1e67c0.js";import{am as g,e as E}from"./index.js";import{d as w,a7 as s,Z as e,_ as n,a8 as m,a9 as p,F as S,aa as $,ah as A,ac as B,ab as a}from"./vue-f962b0e4.js";import"./formItemConfig-1ea6f4c2.js";import"./componentMap-f7f5ce27.js";import"./useFormItem-be9db066.js";import"./get-3d19de2f.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-b737c8dd.js";import"./index-05c55ef7.js";import"./useWindowSizeFn-844b46eb.js";import"./isBoolean-9388e2d6.js";import"./uuid-31b8b5a4.js";import"./useSortable-b9fa3fd2.js";import"./download-4dc1f19b.js";import"./base64Conver-39fc0d26.js";import"./index-328dacc6.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-32ae3128.js";import"./copyTextToClipboard-1186e738.js";import"./index-8a187562.js";import"./index-c694e7f6.js";import"./index-a99c5411.js";import"./isNumber-f0336cfd.js";const D=w({name:"FormItemProps",components:{RuleProps:C,Empty:_,Input:h,Form:I,FormItem:P,Switch:F,Checkbox:k,Select:v,Slider:b},setup(){const{formConfig:o}=y();return{baseItemColumnProps:d,formConfig:o,showProps:t=>t&&g(t)?!t.includes(o.value.currentItem.component):!0}}}),U={class:"properties-content"},z={key:0,class:"properties-body"};function L(o,i,t,N,R,V){const c=s("Empty"),l=s("FormItem"),u=s("Form");return e(),n("div",U,[o.formConfig.currentItem?(e(),n("div",z,[o.formConfig.currentItem.key?(e(),m(u,{key:1,"label-align":"left",layout:"vertical"},{default:p(()=>[(e(!0),n(S,null,$(o.baseItemColumnProps,r=>(e(),n("div",{key:r.name},[o.showProps(r.exclude)?(e(),m(l,{key:0,label:r.label},{default:p(()=>[o.formConfig.currentItem.colProps&&r.component?(e(),m(A(r.component),B({key:0,class:"component-props"},r.componentProps,{value:o.formConfig.currentItem.colProps[r.name],"onUpdate:value":f=>o.formConfig.currentItem.colProps[r.name]=f}),null,16,["value","onUpdate:value"])):a("",!0)]),_:2},1032,["label"])):a("",!0)]))),128))]),_:1})):(e(),m(c,{key:0,class:"hint-box",description:"未选择控件"}))])):a("",!0)])}const co=E(D,[["render",L]]);export{co as default};
