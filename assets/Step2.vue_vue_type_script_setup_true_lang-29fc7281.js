var d=(f,m,a)=>new Promise((u,n)=>{var l=e=>{try{o(a.next(e))}catch(_){n(_)}},p=e=>{try{o(a.throw(e))}catch(_){n(_)}},o=e=>e.done?u(e.value):Promise.resolve(e.value).then(l,p);o((a=a.apply(f,m)).next())});import{_ as b}from"./BasicForm.vue_vue_type_script_setup_true_lang-0624b790.js";import"./BasicForm.vue_vue_type_style_index_0_lang-9667d3a7.js";import"./componentMap-f7f5ce27.js";import{u as x}from"./useForm-8838369c.js";import{step2Schemas as h}from"./data-fc21c644.js";import{d as g,Z as v,_ as B,l as s,u as t,a9 as i,E as c}from"./vue-f962b0e4.js";import{x as O,O as r,E as F}from"./antd-2f1e67c0.js";const w={class:"w-120 m-auto"},D=g({__name:"Step2",emits:["next","prev"],setup(f,{emit:m}){const[a,{validate:u,setProps:n}]=x({labelWidth:80,schemas:h,actionColOptions:{span:14},resetButtonOptions:{text:"上一步"},submitButtonOptions:{text:"提交"},resetFunc:l,submitFunc:p});function l(){return d(this,null,function*(){m("prev")})}function p(){return d(this,null,function*(){try{const o=yield u();n({submitButtonOptions:{loading:!0}}),setTimeout(()=>{n({submitButtonOptions:{loading:!1}}),m("next",o)},1500)}catch(o){}})}return(o,e)=>(v(),B("div",w,[s(t(O),{message:"确认转账后，资金将直接打入对方账户，无法退回。","show-icon":""}),s(t(r),{column:1,class:"mt-5"},{default:i(()=>[s(t(r).Item,{label:"付款账户"},{default:i(()=>[c(" ant-design@alipay.com ")]),_:1}),s(t(r).Item,{label:"收款账户"},{default:i(()=>[c(" test@example.com ")]),_:1}),s(t(r).Item,{label:"收款人姓名"},{default:i(()=>[c(" Vben ")]),_:1}),s(t(r).Item,{label:"转账金额"},{default:i(()=>[c(" 500元 ")]),_:1})]),_:1}),s(t(F)),s(t(b),{onRegister:t(a)},null,8,["onRegister"])]))}});export{D as _};
