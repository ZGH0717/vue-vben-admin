var l=(u,d,s)=>new Promise((m,t)=>{var r=o=>{try{e(s.next(o))}catch(n){t(n)}},i=o=>{try{e(s.throw(o))}catch(n){t(n)}},e=o=>o.done?m(o.value):Promise.resolve(o.value).then(r,i);e((s=s.apply(u,d)).next())});import{a2 as f,m as k,bd as x,by as v,e as b}from"./index.js";import{P as C}from"./index-7bb076d5.js";import{_ as g}from"./CurrentPermissionMode.vue_vue_type_script_setup_true_lang-8318effc.js";import{d as y,c as B,a7 as P,Z as S,a8 as A,a9 as c,l as a,u as p,$ as M,E as _}from"./vue-f962b0e4.js";import{x as T,u as $}from"./antd-2f1e67c0.js";import"./useContentViewHeight-4ea1ac81.js";import"./useWindowSizeFn-844b46eb.js";import"./onMountedOrActivated-affa4888.js";import"./isNumber-f0336cfd.js";const w={class:"mt-4"},N=y({__name:"index",setup(u){const{refreshMenu:d}=f(),s=k(),m=x(),t=B(()=>m.getProjectConfig.permissionMode===v.BACK);function r(i){return l(this,null,function*(){const e="fakeToken"+i;s.setToken(e),s.getUserInfoAction(),d()})}return(i,e)=>{const o=P("a-button");return S(),A(p(C),{title:"后台权限示例",contentBackground:"",contentClass:"p-4",content:"目前mock了两组数据， id为1 和 2 具体返回的菜单可以在mock/sys/menu.ts内查看"},{default:c(()=>[a(g),a(p(T),{class:"mt-4",type:"info",message:"点击后请查看左侧菜单变化","show-icon":""}),M("div",w,[_(" 权限切换(请先切换权限模式为后台权限模式): "),a(p($),null,{default:c(()=>[a(o,{onClick:e[0]||(e[0]=n=>r(1)),disabled:!t.value},{default:c(()=>[_(" 获取用户id为1的菜单 ")]),_:1},8,["disabled"]),a(o,{onClick:e[1]||(e[1]=n=>r(2)),disabled:!t.value},{default:c(()=>[_(" 获取用户id为2的菜单 ")]),_:1},8,["disabled"])]),_:1})])]),_:1})}}});const z=b(N,[["__scopeId","data-v-176e63cc"]]);export{z as default};
