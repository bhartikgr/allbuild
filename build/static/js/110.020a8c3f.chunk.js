"use strict";(self.webpackChunkkeiretsuproject=self.webpackChunkkeiretsuproject||[]).push([[110],{6022:(e,t,r)=>{r.d(t,{$n:()=>m,JU:()=>p,MH:()=>j,V7:()=>g,e2:()=>h,fI:()=>x,gE:()=>d,hJ:()=>l,lV:()=>c,mO:()=>s,nj:()=>i,pd:()=>u,rL:()=>o,zD:()=>n});var a=r(5464);const s=a.default.div`
  input,
  textarea,
  select,
  a,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    text-decoration: none;
    outline: none;
    word-break: break-word;
    overflow-wrap: break-word;
  }

  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
    box-shadow: none;
    border-color: inherit;
  }
`,l=a.default.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,n=a.default.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  position: relative;
`,i=a.default.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #fff;
  color: #000;
  border: none;
  font-size: 20px;
  cursor: pointer;
`,o=a.default.h2`
  font-size: 18px;
  font-weight: 700;
  color: var(--primary-color);
  text-align: center;
  margin-bottom: 10px;
`,c=a.default.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,d=a.default.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,p=a.default.label`
  font-weight: 500;
  font-size: 14px;
`,u=a.default.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  width: 100%;
  color: #000;

  &:focus {
    border-color: var(--primary-color);
    outline: none;
  }
`,x=a.default.div`
  display: flex;
  gap: 20px;
`,h=a.default.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`,m=a.default.button`
  padding: 10px 20px;
  font-size: 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &.cancel {
    background-color: #ccc;
    color: #333;
  }

  &.submit {
    background-color: var(--primary-color);
    color: white;
  }
`,g=a.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 200px; // Adjust width as needed
  margin: 0 auto;
`,j=a.default.img`
  width: 100%; // Makes the image responsive
  height: auto; // Keeps the aspect ratio intact
`},8150:(e,t,r)=>{r.r(t),r.d(t,{default:()=>x});var a=r(5043),s=(r(5015),r(5136)),l=(r(4939),r(8622),r(8421),r(6022)),n=r(2837),i=r(6178),o=r.n(i),c=r(7692),d=(r(3656),r(1173),r(4710)),p=r(6213),u=r(579);function x(){(0,c.ye)(o());const[e,t]=(0,a.useState)([]),[r,i]=(0,a.useState)("monthly"),[x,h]=(0,a.useState)(!1),[m,g]=(0,a.useState)(""),j="https://blueprintcatalyst.com/api/user/",f=localStorage.getItem("UserLoginData"),b=JSON.parse(f);(0,a.useEffect)((()=>{y()}),[]);const y=async()=>{let e={user_id:""};try{var r=(await p.A.post(j+"getallSubscriptionPlan",e,{headers:{Accept:"application/json","Content-Type":"application/json"}})).data.results;console.log(r),t(r)}catch(a){a.response||(a.request?console.error("Request data:",a.request):console.error("Error message:",a.message))}},v=e.filter((e=>"monthly"===e.period)),w=e.filter((e=>"yearly"===e.period));return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(n.mO,{children:(0,u.jsxs)("div",{className:"fullpage d-block",children:[(0,u.jsx)(s.A,{}),(0,u.jsx)(n.$K,{className:"d-block py-5",children:(0,u.jsx)("div",{className:"container-lg",children:(0,u.jsxs)("div",{className:"row justify-content-center",children:[(0,u.jsx)("div",{className:"col-md-3",children:(0,u.jsx)(d.A,{})}),(0,u.jsxs)("div",{className:"col-md-9",children:[(0,u.jsxs)("div",{className:"d-flex justify-content-end mb-4 gap-2",role:"group","aria-label":"Billing period toggle",children:[(0,u.jsx)("button",{type:"button",className:"btn btn-outline-dark "+("monthly"===r?"active":""),onClick:()=>i("monthly"),children:"Monthly"}),(0,u.jsx)("button",{type:"button",className:"btn btn-outline-dark "+("yearly"===r?"active":""),onClick:()=>i("yearly"),children:"Yearly"})]}),(0,u.jsx)("div",{className:"row g-4 justify-content-center",children:("monthly"===r?v:w).map((e=>(0,u.jsx)("div",{className:"col-md-4",children:(0,u.jsxs)("div",{className:"card h-100 shadow",children:[(0,u.jsx)("div",{className:"card-header text-center subscriptionplan text-white",children:(0,u.jsx)("h4",{className:"mb-0",children:e.name})}),(0,u.jsxs)("div",{className:"card-body text-center",children:[(0,u.jsxs)("h1",{className:"card-title fw-bold",children:["$",e.price,(0,u.jsxs)("small",{className:"text-muted fs-6",children:["/","monthly"===r?"mo":"year"]})]}),(0,u.jsx)("ul",{className:"list-unstyled mt-3 mb-4",children:(0,u.jsxs)("li",{children:["\u2714 ",e.module," ",1===parseInt(e.module)?"module":"modules"]})}),(0,u.jsxs)("button",{className:"btn subscriptionplan text-white w-100",type:"button",onClick:()=>{return t=e.id,g(t),void h(!0);var t},children:["Choose ",e.name]})]})]})},e.id)))})]})]})})})]})}),x&&(0,u.jsx)(l.hJ,{children:(0,u.jsxs)(l.zD,{children:[(0,u.jsx)(l.nj,{onClick:()=>h(!1),children:"\xd7"}),(0,u.jsx)(l.rL,{children:"Payment"}),(0,u.jsx)(l.V7,{children:(0,u.jsx)(l.MH,{src:"/assets/user/images/cardimage.jpg",alt:"cards"})}),(0,u.jsxs)(l.lV,{onSubmit:async e=>{e.preventDefault(),console.log(e.target);var t=e.target;let r={name:t.name.value,email:t.email.value,cardnumber:t.cardnumber.value,expiry:t.expiry.value,cvv:t.cvv.value,user_id:b.id,plan_id:m};try{(await p.A.post(j+"usersubscription",r,{headers:{Accept:"application/json","Content-Type":"application/json"}})).data.results}catch(a){a.response||(a.request?console.error("Request data:",a.request):console.error("Error message:",a.message))}h(!1)},children:[(0,u.jsxs)(l.gE,{children:[(0,u.jsx)(l.JU,{children:"Name"}),(0,u.jsx)(l.pd,{type:"text",name:"name",required:!0,placeholder:"name"})]}),(0,u.jsxs)(l.gE,{children:[(0,u.jsx)(l.JU,{children:"Email"}),(0,u.jsx)(l.pd,{type:"email",name:"email",required:!0,placeholder:"email"})]}),(0,u.jsxs)(l.gE,{children:[(0,u.jsx)(l.JU,{children:"Card Number"}),(0,u.jsx)(l.pd,{type:"text",name:"cardnumber",required:!0,placeholder:"card number",inputMode:"numeric",maxLength:19,onInput:e=>{let t=e.target.value.replace(/\D/g,"");t=t.substring(0,16),t=t.replace(/(.{4})/g,"$1 ").trim(),e.target.value=t}})]}),(0,u.jsxs)(l.fI,{children:[(0,u.jsxs)(l.gE,{children:[(0,u.jsx)(l.JU,{children:"Expiry Date"}),(0,u.jsx)(l.pd,{type:"text",name:"expiry",required:!0,placeholder:"MM/YYYY",inputMode:"numeric",maxLength:7,pattern:"(0[1-9]|1[0-2])\\/\\d{4}",onInput:e=>{let t=e.target.value.replace(/\D/g,"");t.length>6&&(t=t.slice(0,6)),t.length>=3&&(t=t.slice(0,2)+"/"+t.slice(2)),e.target.value=t}})]}),(0,u.jsxs)(l.gE,{children:[(0,u.jsx)(l.JU,{children:"CVV"}),(0,u.jsx)(l.pd,{type:"text",name:"cvv",required:!0,placeholder:"123"})]})]}),(0,u.jsxs)(l.e2,{children:[(0,u.jsx)(l.$n,{type:"button",className:"cancel",onClick:()=>h(!1),children:"Cancel"}),(0,u.jsx)(l.$n,{type:"submit",className:"submit",children:"Pay Now"})]})]})]})})]})}}}]);
//# sourceMappingURL=110.020a8c3f.chunk.js.map