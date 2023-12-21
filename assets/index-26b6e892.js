import k from"./CollapseItem-105ebca6.js";import B from"./FormComponentPanel-c31ae343.js";import G from"./JsonModal-4e75d711.js";import V from"./index-b2fd52ab.js";import{_ as N}from"./useForm.vue_vue_type_script_setup_true_lang-4d20675c.js";import Z from"./Toolbar-26a1cd8a.js";import q from"./PropsPanel-c7a193ce.js";import Q from"./ImportJsonModal-db0cca7d.js";import U from"./CodeModal-41ba059e.js";import"./index-3ed7fac6.js";import{g as P,f as X}from"./index-a99c5411.js";import{b as Y,c as ee,l as oe}from"./formItemConfig-1ea6f4c2.js";import{h as te,bA as re,C as b,c,e as ne}from"./index.js";import{g as se}from"./formItemPropsConfig-3f089238.js";import{aO as J,aP as le,L as ae}from"./antd-2f1e67c0.js";import{d as ie,f as a,p as f,Z as me,_ as pe,l as n,a9 as i,u as s,a1 as z,ad as ue,aa as de,N as ce,ai as fe,aj as ve,F as he}from"./vue-f962b0e4.js";import"./vuedraggable.umd-39acd589.js";import"./LayoutItem-41313b1c.js";import"./FormNode-bcba8b9a.js";import"./FormNodeOperate-b59a24e9.js";import"./useFormDesignState-4fbefc60.js";import"./index-e0200f83.js";import"./PreviewCode-fadd0298.js";import"./copyTextToClipboard-1186e738.js";import"./index-01ed1c0c.js";import"./FormRender-fa695290.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-0624b790.js";import"./FormItem.vue_vue_type_script_lang-ed1080df.js";import"./componentMap-f7f5ce27.js";import"./useFormItem-be9db066.js";import"./get-3d19de2f.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-b737c8dd.js";import"./index-05c55ef7.js";import"./useWindowSizeFn-844b46eb.js";import"./isBoolean-9388e2d6.js";import"./uuid-31b8b5a4.js";import"./useSortable-b9fa3fd2.js";import"./download-4dc1f19b.js";import"./base64Conver-39fc0d26.js";import"./index-328dacc6.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-32ae3128.js";import"./index-8a187562.js";import"./index-c694e7f6.js";import"./helper-b0407d84.js";import"./isNumber-f0336cfd.js";import"./BasicForm.vue_vue_type_style_index_0_lang-9667d3a7.js";import"./uniqBy-3d1a97d8.js";import"./useForm-8838369c.js";import"./FormProps.vue_vue_type_script_setup_true_name_FormProps_lang-3a3259be.js";import"./FormItemProps.vue_vue_type_script_setup_true_name_FormItemProps_lang-6374b0f5.js";import"./RuleProps-77d95fc7.js";import"./ComponentProps-a0ebe7bd.js";import"./FormOptions-afdc59ec.js";import"./FormItemColumnProps-b53120ed.js";const ye=ie({__name:"index",props:{title:{type:String,default:"v-form-antd表单设计器"}},setup(Pe){const{prefixCls:F}=te("form-design"),D=a(null),I=a(null),M=a(null),w=a(null),L=a(null),S=a(null),A=a({}),t=a({schemas:[],layout:"horizontal",labelLayout:"flex",labelWidth:100,labelCol:{},wrapperCol:{},currentItem:{component:"",componentProps:{}},activeKey:1}),O=o=>{o.schemas=o.schemas||[],o.schemas.forEach(e=>{e.colProps=e.colProps||{span:24},e.componentProps=e.componentProps||{},e.itemProps=e.itemProps||{}}),t.value=o},T=re(t,{deep:!0,capacity:20,parse:o=>{const e=c(o),{currentItem:r,schemas:l}=e,d=l&&l.find(m=>m.key===(r==null?void 0:r.key));return d&&(e.currentItem=d),e}}),p=o=>{t.value.currentItem=o,E(o.key?t.value.activeKey===1?2:t.value.activeKey:1)},H=o=>{o.colProps=o.colProps||{},o.colProps.span=se.span},v=(o,e)=>{},g=o=>{const e=c(o);return H(e),P(e),e},h=o=>{var r;const e=c(o);if(H(e),P(e),!((r=t.value.currentItem)!=null&&r.key)){p(e),t.value.schemas&&t.value.schemas.push(e);return}$(e,!1)},W=o=>{const e=c(o);return e.component==="Grid"&&X([o],r=>{P(r)}),e},$=(o=t.value.currentItem,e=!0)=>{var d;const r=(d=t.value.currentItem)==null?void 0:d.key,l=m=>{m.some((y,C)=>{var K;if(y.key===r){e?m.splice(C,0,W(y)):m.splice(C+1,0,o);const _={newIndex:C+1};return x(_,m,e),!0}["Grid","Tabs"].includes(y.component)&&((K=y.columns)==null||K.forEach(_=>{l(_.children)}))})};t.value.schemas&&l(t.value.schemas)},x=({newIndex:o},e,r=!1)=>{const l=e[o];r&&P(l),p(l)},u=o=>{const e=c(t.value);o==null||o.showModal(e)},E=o=>{t.value.activeKey=o},R=()=>{t.value.schemas=[],p({component:""})},j=(o,e)=>A.value[o]=e;return f("formModel",A),f("setFormModelMethod",j),f("formConfig",t),f("historyReturn",T),f("formDesignMethods",{handleBeforeColAdd:x,handleCopy:$,handleListPush:h,handleSetSelectItem:p,handleAddAttrs:v,setFormConfig:O}),(o,e)=>(me(),pe(he,null,[n(s(ae),null,{default:i(()=>[n(s(J),{class:z(`left ${s(F)}-sider`),collapsible:"",collapsedWidth:"0",width:"270",zeroWidthTriggerStyle:{"margin-top":"-70px","background-color":"gray"},breakpoint:"md"},{default:i(()=>[n(s(b),{title:"基础控件"},{default:i(()=>[n(k,{list:s(Y),handleListPush:g,onAddAttrs:v,onHandleListPush:h},null,8,["list"])]),_:1}),n(s(b),{title:"自定义控件"},{default:i(()=>[n(k,{list:s(ee),onAddAttrs:v,handleListPush:g,onHandleListPush:h},null,8,["list"])]),_:1}),n(s(b),{title:"布局控件"},{default:i(()=>[n(k,{list:s(oe),handleListPush:g,onAddAttrs:v,onHandleListPush:h},null,8,["list"])]),_:1})]),_:1},8,["class"]),n(s(le),null,{default:i(()=>[n(Z,{onHandleOpenJsonModal:e[0]||(e[0]=r=>u(I.value)),onHandleOpenImportJsonModal:e[1]||(e[1]=r=>u(M.value)),onHandlePreview:e[2]||(e[2]=r=>u(w.value)),onHandlePreview2:e[3]||(e[3]=r=>u(L.value)),onHandleOpenCodeModal:e[4]||(e[4]=r=>u(S.value)),onHandleClearFormItems:R}),n(B,{"current-item":t.value.currentItem,data:t.value,onHandleSetSelectItem:p},null,8,["current-item","data"])]),_:1}),n(s(J),{class:z(`right ${s(F)}-sider`),collapsible:"",reverseArrow:!0,collapsedWidth:"0",width:"270",zeroWidthTriggerStyle:{"margin-top":"-70px","background-color":"gray"},breakpoint:"lg"},{default:i(()=>[n(q,{ref_key:"propsPanel",ref:D,activeKey:t.value.activeKey},ue({_:2},[de(t.value.schemas,r=>({name:`${r.component}Props`,fn:i(l=>[ce(o.$slots,`${r.component}Props`,fe(ve({formItem:l,props:l.componentProps})),void 0,!0)])}))]),1032,["activeKey"])]),_:3},8,["class"])]),_:3}),n(G,{ref_key:"jsonModal",ref:I},null,512),n(U,{ref_key:"codeModal",ref:S},null,512),n(Q,{ref_key:"importJsonModal",ref:M},null,512),n(V,{ref_key:"eFormPreview",ref:w,formConfig:t.value},null,8,["formConfig"]),n(N,{ref_key:"eFormPreview2",ref:L,formConfig:t.value},null,8,["formConfig"])],64))}});const Co=ne(ye,[["__scopeId","data-v-331ea7e8"]]);export{Co as default};
