var E=(h,m,t)=>new Promise((e,l)=>{var f=r=>{try{i(t.next(r))}catch(a){l(a)}},_=r=>{try{i(t.throw(r))}catch(a){l(a)}},i=r=>r.done?e(r.value):Promise.resolve(r.value).then(f,_);i((t=t.apply(h,m)).next())});import{d as v,f as k,w as D,x as R,a7 as T,Z as u,_ as g,F as A,aa as V,n as I,z as S,l as s,u as o,a9 as n,E as y,a0 as b,a8 as $,ab as B}from"./vue-f962b0e4.js";import{_ as M}from"./DetailModal.vue_vue_type_script_setup_true_lang-5e0f9f36.js";import{_ as N}from"./BasicTable.vue_vue_type_script_setup_true_lang-042f0129.js";import"./TableImg.vue_vue_type_style_index_0_lang-0fa6f8d4.js";import{a as j}from"./componentMap-f7f5ce27.js";import{u as F}from"./useTable-b7ede229.js";import{b as z}from"./index-05c55ef7.js";import{b as H,i as Z,bs as q,c as G}from"./index.js";import{getColumns as J}from"./data-47e2b819.js";import"./index-1fca6610.js";import"./antd-2f1e67c0.js";import"./get-3d19de2f.js";import"./useDescription-6356518e.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-0624b790.js";import"./FormItem.vue_vue_type_script_lang-ed1080df.js";import"./helper-b0407d84.js";import"./isNumber-f0336cfd.js";import"./isBoolean-9388e2d6.js";import"./BasicForm.vue_vue_type_style_index_0_lang-9667d3a7.js";import"./uniqBy-3d1a97d8.js";import"./useForm-8838369c.js";import"./uuid-31b8b5a4.js";import"./sortable.esm-4ae27e0b.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-b737c8dd.js";import"./useFormItem-be9db066.js";import"./useWindowSizeFn-844b46eb.js";import"./onMountedOrActivated-affa4888.js";import"./useSortable-b9fa3fd2.js";import"./download-4dc1f19b.js";import"./base64Conver-39fc0d26.js";import"./index-328dacc6.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-32ae3128.js";import"./copyTextToClipboard-1186e738.js";import"./index-8a187562.js";import"./index-c694e7f6.js";const K=()=>H.get({url:"/error"}),O={class:"p-4"},P=["src"],Ir=v({__name:"index",setup(h){const m=k(),t=k([]),{t:e}=Z(),l=q(),[f,{setTableData:_}]=F({title:e("sys.errorLog.tableTitle"),columns:J(),actionColumn:{width:80,title:"Action",dataIndex:"action"}}),[i,{openModal:r}]=z();D(()=>l.getErrorLogInfoList,p=>{R(()=>{_(G(p))})},{immediate:!0});function a(p){m.value=p,r(!0)}function w(){throw new Error("fire vue error!")}function C(){t.value.push(`${new Date().getTime()}.png`)}function L(){return E(this,null,function*(){yield K()})}return(p,Q)=>{const d=T("a-button");return u(),g("div",O,[(u(!0),g(A,null,V(t.value,c=>I((u(),g("img",{key:c,src:c,alt:""},null,8,P)),[[S,!1]])),128)),s(M,{info:m.value,onRegister:o(i)},null,8,["info","onRegister"]),s(o(N),{onRegister:o(f),class:"error-handle-table"},{toolbar:n(()=>[s(d,{onClick:w,type:"primary"},{default:n(()=>[y(b(o(e)("sys.errorLog.fireVueError")),1)]),_:1}),s(d,{onClick:C,type:"primary"},{default:n(()=>[y(b(o(e)("sys.errorLog.fireResourceError")),1)]),_:1}),s(d,{onClick:L,type:"primary"},{default:n(()=>[y(b(o(e)("sys.errorLog.fireAjaxError")),1)]),_:1})]),bodyCell:n(({column:c,record:x})=>[c.key==="action"?(u(),$(o(j),{key:0,actions:[{label:o(e)("sys.errorLog.tableActionDesc"),onClick:a.bind(null,x)}]},null,8,["actions"])):B("",!0)]),_:1},8,["onRegister"])])}}});export{Ir as default};
