/*! For license information please see 422.59eacb7d.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkkeiretsuproject=self.webpackChunkkeiretsuproject||[]).push([[422],{5264:(e,t,s)=>{s.d(t,{A:()=>a});const a=(0,s(7784).A)("building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]])},6022:(e,t,s)=>{s.d(t,{$n:()=>x,JU:()=>u,MH:()=>j,V7:()=>g,e2:()=>m,fI:()=>h,gE:()=>d,hJ:()=>o,lV:()=>c,mO:()=>n,nj:()=>i,pd:()=>p,rL:()=>l,zD:()=>r});var a=s(5464);const n=a.default.div`
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
`,o=a.default.div`
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
`,r=a.default.div`
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
`,l=a.default.h2`
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
`,u=a.default.label`
  font-weight: 500;
  font-size: 14px;
`,p=a.default.input`
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
`,h=a.default.div`
  display: flex;
  gap: 20px;
`,m=a.default.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`,x=a.default.button`
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
`},9333:(e,t,s)=>{s.d(t,{A:()=>a});const a=(0,s(7784).A)("video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]])},9534:(e,t,s)=>{s.r(t),s.d(t,{default:()=>w});var a=s(5043),n=s(8286),o=(s(5015),s(5136)),r=s(4939),i=s(8622),l=(s(8421),s(2837)),c=s(6022),d=s(579);const u=e=>{let{moduledata:t,show:s,onClose:a,onSubmit:n}=e;return s?(0,d.jsx)(c.hJ,{children:(0,d.jsxs)(c.zD,{children:[(0,d.jsx)(c.nj,{onClick:a,children:"\xd7"}),(0,d.jsx)(c.rL,{children:"Payment"}),(0,d.jsx)(c.V7,{children:(0,d.jsx)(c.MH,{src:"/assets/user/images/cardimage.jpg",alt:"cards"})}),(0,d.jsxs)(c.lV,{onSubmit:n,children:[(0,d.jsxs)(c.gE,{children:[(0,d.jsx)(c.JU,{children:"Name"}),(0,d.jsx)(c.pd,{type:"text",name:"name",required:!0,placeholder:"name"})]}),(0,d.jsxs)(c.gE,{children:[(0,d.jsx)(c.JU,{children:"Email"}),(0,d.jsx)(c.pd,{type:"email",name:"email",required:!0,placeholder:"email"})]}),(0,d.jsxs)(c.gE,{children:[(0,d.jsx)(c.JU,{children:"Card Number"}),(0,d.jsx)(c.pd,{type:"text",name:"cardnumber",required:!0,placeholder:"card number",inputMode:"numeric",maxLength:19,onInput:e=>{let t=e.target.value.replace(/\D/g,"");t=t.substring(0,16),t=t.replace(/(.{4})/g,"$1 ").trim(),e.target.value=t}})]}),(0,d.jsxs)(c.fI,{children:[(0,d.jsxs)(c.gE,{children:[(0,d.jsx)(c.JU,{children:"Expiry Date"}),(0,d.jsx)(c.pd,{type:"text",name:"expiry",required:!0,placeholder:"MM/YYYY",inputMode:"numeric",maxLength:7,pattern:"(0[1-9]|1[0-2])\\/\\d{4}",onInput:e=>{let t=e.target.value.replace(/\D/g,"");t.length>6&&(t=t.slice(0,6)),t.length>=3&&(t=t.slice(0,2)+"/"+t.slice(2)),e.target.value=t}})]}),(0,d.jsxs)(c.gE,{children:[(0,d.jsx)(c.JU,{children:"CVV"}),(0,d.jsx)(c.pd,{type:"text",name:"cvv",required:!0,placeholder:"123"})]})]}),(0,d.jsxs)(c.e2,{children:[(0,d.jsx)(c.$n,{type:"button",className:"cancel",onClick:a,children:"Cancel"}),(0,d.jsxs)(c.$n,{type:"submit",className:"submit",children:["Pay Now $",t.price]})]})]})]})}):null};var p=s(3216),h=s(6178),m=s.n(h);const x=(0,s(7784).A)("clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);var g=s(9333),j=s(5264),f=s(7692),v=(s(3656),s(1173)),y=s(4710),b=s(6213);function w(){const e=(0,p.Zp)(),[t,s]=(0,a.useState)(!1),[c,h]=(0,a.useState)(!1),[w,k]=(0,a.useState)({name:"",email:""}),S=(0,f.ye)(m()),[N,C]=(0,a.useState)([]),[A,E]=(0,a.useState)(""),[D,M]=(0,a.useState)(""),[I,T]=(0,a.useState)(""),[q,z]=(0,a.useState)(""),[F,J]=(0,a.useState)(null),[V,Z]=(0,a.useState)(""),[O,U]=(0,a.useState)(!0),[H,L]=(0,a.useState)(""),[Y,P]=(0,a.useState)(""),[$,_]=(0,a.useState)(""),[K,R]=(0,a.useState)(""),{id:B}=(0,p.g)(),G=localStorage.getItem("UserLoginData"),W=JSON.parse(G),[Q,X]=(0,a.useState)(""),ee="https://blueprintcatalyst.com/api/user/",te=e=>{k({...w,[e.target.name]:e.target.value})};(0,a.useEffect)((()=>{if(Intl.supportedValuesOf){const e=Intl.supportedValuesOf("timeZone");ne(e)}}),[]),(0,a.useEffect)((()=>{"undefined"!==B&&se()}),[B]);const se=async()=>{let e={id:B};try{(await b.A.post(ee+"checkmodulesubscription",e,{headers:{Accept:"application/json","Content-Type":"application/json"}})).data.results.length>0&&R("1")}catch(t){}};(0,a.useEffect)((()=>{(async()=>{let t={id:B};try{const s=await b.A.post(ee+"selectModule",t,{headers:{Accept:"application/json","Content-Type":"application/json"}});s.data.results.length>0?(se(),P(s.data.results[0])):e("/dashboard")}catch(s){}})()}),[B]),(0,a.useEffect)((()=>{document.title="Module Page"}),[]);(0,a.useEffect)((()=>{(async()=>{try{const e=await fetch("https://api.ipify.org?format=json"),t=await e.json();E(t.ip)}catch(e){console.error("Failed to fetch IP",e)}})()}),[]);const[ae,ne]=(0,a.useState)([]),[oe,re]=(0,a.useState)(Intl.DateTimeFormat().resolvedOptions().timeZone);(0,a.useEffect)((()=>{if(Intl.supportedValuesOf){const e=Intl.supportedValuesOf("timeZone");ne(e)}}),[]),(0,a.useEffect)((()=>{const e=()=>{const e=new Intl.DateTimeFormat("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0,timeZone:oe}).format(new Date);L(e)};e();const t=setInterval(e,6e4);return()=>clearInterval(t)}),[oe]);const ie=new Date;ie.setHours(0,0,0,0);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(l.mO,{children:[(0,d.jsxs)("div",{className:"fullpage d-block",children:[(0,d.jsx)(o.A,{}),(0,d.jsx)(l.$K,{className:"d-block py-5",children:(0,d.jsx)("div",{className:"container-lg",children:(0,d.jsxs)("div",{className:"row justify-content-center",children:[(0,d.jsx)("div",{className:"col-md-3",children:(0,d.jsx)(y.A,{})}),(0,d.jsx)("div",{className:"col-md-9",children:(0,d.jsx)("form",{action:"",children:(0,d.jsx)(l.mg,{id:"step5",children:(0,d.jsxs)("div",{className:"d-flex flex-column gap-5",children:[I&&(0,d.jsx)(r.A,{message:I,onClose:()=>T("")}),q&&(0,d.jsx)(i.A,{message:q,onClose:()=>z("")}),(0,d.jsx)(l.CB,{children:Y.name}),(0,d.jsxs)("div",{className:"row gy-3",children:[(0,d.jsx)("div",{className:"col-md-6",children:(0,d.jsxs)(l.uM,{children:[(0,d.jsxs)("div",{className:"d-flex flex-column gap-3",children:[(0,d.jsx)("div",{className:"klogo",children:(0,d.jsx)("div",{className:"inlogo fulw",children:(0,d.jsx)("img",{src:"/assets/user/images/logoblack.png",alt:"logo"})})}),(0,d.jsx)("h3",{children:"Keiretsu Forum Conoda"}),(0,d.jsx)("h4",{children:"Deal Screening - 30 minutes"})]}),(0,d.jsxs)("h6",{children:[(0,d.jsx)(l.vE,{children:(0,d.jsx)(x,{})}),"30 min"]}),(0,d.jsxs)("h6",{children:[(0,d.jsx)(l.vE,{children:(0,d.jsx)(g.A,{})}),"Web conferencing details provided upon confirmation."]}),(0,d.jsx)("p",{children:"Keiretsu Forum has grown to be the worlds largest and most active early stage investor network (as ranked by Pitchbook!) with over 3.000 accredited investor members throughout chapters in countrjes on 4 continents"}),(0,d.jsx)("p",{children:"The first step to participation es a 30 menute Deat Screening Session (via on online Zoom meeting). This is a no-obligation / no-cost opportunity for out Deol Screening Committee"})]})}),(0,d.jsx)("div",{className:"col-md-6",children:(0,d.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,d.jsx)("label",{htmlFor:"",children:"Select a date and time"}),(0,d.jsxs)(l.Jq,{children:[(0,d.jsx)(f.Vv,{localizer:S,events:N,startAccessor:"start",endAccessor:"end",selectable:!0,onSelectSlot:e=>{let{start:t,end:s}=e;if(""===K)h(!0);else{const e=new Date;e.setHours(0,0,0,0);const a=new Date(t);if(a.setHours(0,0,0,0),a<e)return void T("You cannot select a past date.");if(N.some((e=>new Date(e.start).setHours(0,0,0,0)===a.getTime()))){const e=N.filter((e=>new Date(e.start).setHours(0,0,0,0)!==a.getTime()));return C(e),T(""),void U(0===e.length)}if(N.length>=3)return void T("You can only select up to 3 meetings.");const n={start:t,end:s},o=[...N,n];C(o),T(""),U(!1)}},onSelectEvent:e=>console.log("Clicked event",e),views:["month"],style:{height:300},popup:!0,dayPropGetter:e=>{const t=new Date(e);return t.setHours(0,0,0,0),t<ie?{style:{backgroundColor:"#e0e0e0",pointerEvents:"none",opacity:.6,cursor:"none"}}:{}}}),(0,d.jsx)("strong",{children:"Time Zone"}),(0,d.jsx)("div",{children:(0,d.jsx)("select",{value:oe,onChange:e=>re(e.target.value),children:ae.map((e=>(0,d.jsxs)("option",{value:e,children:[e," (",new Intl.DateTimeFormat("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0,timeZone:e}).format(new Date),")"]},e)))})})]}),(0,d.jsx)("button",{style:{opacity:O?.5:1,pointerEvents:O?"none":"auto"},className:"registerzoom",onClick:()=>s(!0),type:"button",children:"Register For Zoom"})]})}),(0,d.jsx)("div",{className:"col-12",children:(0,d.jsxs)(l.Jq,{children:[(0,d.jsx)(j.A,{}),(0,d.jsx)("textarea",{id:"",rows:"5",onInput:e=>{X(e.target.value)},name:"description",placeholder:"The marketing description will go here. It will outline the 'Be The Investor' module."})]})})]})]})})})})]})})})]}),(0,d.jsx)(l.hJ,{show:t,children:(0,d.jsxs)(l.Cd,{children:[(0,d.jsx)(l.nj,{onClick:()=>s(!1),children:"\xd7"}),(0,d.jsx)("form",{onSubmit:async e=>{e.preventDefault();let t={name:e.target.name.value,email:e.target.email.value,timeset:V,module_id:B,ip_address:A,selectedZone:oe,selectedSlots:N,description:Q};_(!0);try{const e=await b.A.post(ee+"registerforZoom",t,{headers:{Accept:"application/json","Content-Type":"application/json"}});_(!1);var a=e.data;if("2"===a.status)return z(""),void T(a.message);if("1"===a.status)return T(""),z(a.message),s(!1),void setTimeout((()=>{window.location.reload()}),3e3)}catch(n){}console.log("Form submitted",t)},children:(0,d.jsxs)("div",{className:"d-flex flex-column gap-3",children:[(0,d.jsx)("h3",{className:"text-center",children:"Register"}),(0,d.jsx)("div",{className:"d-block",children:(0,d.jsx)(l.pd,{type:"text",name:"name",placeholder:"Your Name *",value:w.name,onChange:te,required:!0})}),(0,d.jsx)("div",{className:"d-block",children:(0,d.jsx)(l.pd,{type:"email",name:"email",placeholder:"Your Email *",value:w.email,onChange:te,required:!0})}),(0,d.jsx)("div",{className:"d-block",children:(0,d.jsx)(n.Ay,{name:"time",selected:F,onChange:e=>{const t=(0,v.L_)(e,oe),s=(0,v.GP)(e,"hh:mm a");Z(s),J(t)},showTimeSelect:!0,showTimeSelectOnly:!0,timeIntervals:15,dateFormat:"h:mm aa",placeholderText:"Select Time *"})}),(0,d.jsxs)("div",{className:"d-flex align-items-center justify-content-end gap-2",children:[$&&(0,d.jsx)("div",{className:"spinner-border text-dark",role:"status",style:{width:"1.5rem",height:"1.5rem"},children:(0,d.jsx)("span",{className:"visually-hidden",children:"Loading..."})}),(0,d.jsx)(l.R3,{type:"submit",style:{width:"100%",opacity:$?.5:1,pointerEvents:$?"none":"auto"},children:"Submit For Zoom"})]})]})})]})})]}),(0,d.jsx)(u,{moduledata:Y,show:c,onClose:()=>h(!1),onSubmit:async e=>{e.preventDefault(),console.log(e.target);var t=e.target;let a={name:t.name.value,email:t.email.value,cardnumber:t.cardnumber.value,expiry:t.expiry.value,cvv:t.cvv.value,user_id:W.id,plan_id:B};try{(await b.A.post(ee+"usersubscription",a,{headers:{Accept:"application/json","Content-Type":"application/json"}})).data.results}catch(n){n.response||(n.request?console.error("Request data:",n.request):console.error("Error message:",n.message))}s(!1)}})]})}}}]);
//# sourceMappingURL=422.59eacb7d.chunk.js.map