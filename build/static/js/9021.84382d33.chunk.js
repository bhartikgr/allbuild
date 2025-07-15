/*! For license information please see 9021.84382d33.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkkeiretsuproject=self.webpackChunkkeiretsuproject||[]).push([[9021],{1067:(e,t,a)=>{a.r(t),a.d(t,{default:()=>N});var o=a(5043),s=(a(5015),a(5136)),i=a(4939),n=a(8622),r=a(579);const l=function(e){let{children:t,onClose:a}=e;const[s,i]=(0,o.useState)("show");return(0,r.jsxs)("div",{className:`alert alert-success alert-dismissible fade ${s}`,role:"alert",style:{position:"fixed",top:"20px",right:"20px",zIndex:9999,minWidth:"300px",maxWidth:"90%"},children:[t,(0,r.jsx)("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:a})]})};a(8421);var d=a(4348),c=a.n(d),p=a(2837),u=a(6213),m=a(6022),x=a(9677),h=a(3393);const f=(0,x.c)("pk_test_51RUJzWAx6rm2q3pys9SgKUPRxNxPZ4P1X6EazNQvnPuHKOOfzGsbylaTLUktId9ANHULkwBk67jnp5aqZ9Dlm6PR00jKdDwvSq"),g=e=>{let{moduledata:t,paytmmodule:a,show:s,onClose:i,onSubmit:n}=e;var l="https://blueprintcatalyst.com/api/user/aifile/";document.title="Dataroom Management & Diligence";const d=localStorage.getItem("UserLoginData"),c=JSON.parse(d),p=()=>{(0,o.useEffect)((()=>{t(a)}),[a]);const[e,t]=(0,o.useState)(a),[s,i]=(0,o.useState)(""),n=(0,h.useStripe)(),d=(0,h.useElements)(),[p,x]=(0,o.useState)(""),[f,g]=(0,o.useState)(!1),[b,y]=(0,o.useState)(""),[v,j]=(0,o.useState)(!1),[w,k]=(0,o.useState)("Onetime"),[N,S]=(0,o.useState)(""),[C,z]=(0,o.useState)(""),A=async e=>{try{await u.A.post(`${l}CreateuserSubscription_Academy`,e,{headers:{Accept:"application/json","Content-Type":"application/json"}}),y("Payment successful! \ud83c\udf89"),j(!1),setTimeout((()=>{window.location.reload()}),2e3)}catch(v){console.error("Success handler error:",v),y("Payment was captured, but post-process failed."),j(!0)}finally{g(!1)}};return(0,r.jsxs)("form",{onSubmit:async t=>{if(t.preventDefault(),!n||!d)return;const a=d.getElement(h.CardElement);if(!a)return y("Payment form is not ready. Please reload the page."),void j(!0);g(!0);try{const{data:t}=await u.A.post(`${l}CreateuserSubscription_AcademyCheck`,{user_id:c.id,amount:e}),o=await n.confirmCardPayment(t.clientSecret,{payment_method:{card:a}});if(o.error)y(o.error.message),j(!0),g(!1);else if("succeeded"===o.paymentIntent.status){const a={code:p,user_id:c.id,amount:e,clientSecret:t.clientSecret,PayidOnetime:N,payment_status:o.paymentIntent.status};await A(a)}else y("Payment failed. Try again."),j(!0),g(!1)}catch(o){y("Unexpected error occurred."),j(!0),g(!1)}},children:[(0,r.jsx)("div",{className:"form-control rounded-3",style:{padding:"0.75rem",border:"1px solid #000",borderColor:"#ced4da"},children:(0,r.jsx)(h.CardElement,{options:{style:{base:{fontSize:"16px",color:"#32325d",fontFamily:'"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',"::placeholder":{color:"#a0aec0"},padding:"0.75rem"},invalid:{color:"#e5424d"}},classes:{base:"stripe-card-element",focus:"border-primary",invalid:"border-danger"}}})}),(0,r.jsxs)("div",{className:"d-flex gap-2 d-md-flex justify-content-md-end mt-4",children:[(0,r.jsxs)("div",{className:"d-flex flex-column",children:[(0,r.jsx)("input",{type:"text",name:"refferal_code",defaultValue:p,onChange:async e=>{const t=e.target.value.toUpperCase();x(t)},className:"form-control w-auto",placeholder:"Apply Referral Code",autoComplete:"off",style:{textTransform:"uppercase"}}),C&&(0,r.jsx)("span",{className:"text-danger mt-1",style:{fontSize:"0.875rem"},children:C})]}),(0,r.jsx)(m.$n,{type:"button",onClick:async()=>{if(""===p)z("Enter the code");else{let o={code:p};console.log(o);try{const s=await u.A.post(`${l}checkreferCode`,o,{headers:{Accept:"application/json","Content-Type":"application/json"}});if(s.data.results.length>0){var e=s.data.results[0];if(e.usage_limit>e.used_count){i(e.percentage);const o=a*e.percentage/100;t(a-o),z("")}else z("This code already used")}else z("Invalid code!")}catch(v){}}},className:"submit d-flex align-items-center gap-2",style:{background:"#5C636B",height:"fit-content"},children:"Apply Code"})]}),s&&(0,r.jsxs)("div",{className:"d-flex gap-2 d-md-flex justify-content-md-end mt-4",children:[(0,r.jsx)("b",{children:"Discount:"})," ",s,"%"]}),(0,r.jsx)("div",{className:"d-flex gap-2 d-md-flex justify-content-md-end mt-4",children:(0,r.jsxs)(m.$n,{disabled:!n||f,type:"submit",className:"submit d-flex align-items-center gap-2",style:{background:"#003b21"},children:[!f&&(0,r.jsxs)("span",{children:["Pay \u20ac",e]}),f&&(0,r.jsx)("div",{className:"spinner-border text-white spinneronetimepay m-0",role:"status",children:(0,r.jsx)("span",{className:"visually-hidden"})})]})}),b&&(0,r.jsx)("p",{className:v?" mt-3 error_pop":"success_pop mt-3",children:b})]})},[x,g]=(0,o.useState)(!1);return s?(0,r.jsx)("div",{className:"modal fade show d-block",style:{backgroundColor:"rgba(0, 0, 0, 0.5)"},tabIndex:"-1",role:"dialog","aria-labelledby":"paymentModalLabel","aria-hidden":"false",children:(0,r.jsx)("div",{className:"modal-dialog modal-dialog-centered modal-lg",children:(0,r.jsxs)("div",{className:"modal-content rounded-4 shadow-lg p-4",children:[(0,r.jsx)("button",{type:"button",className:"btn-close position-absolute top-0 end-0 m-3",onClick:i,"aria-label":"Close"}),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{className:"modal-title text-center fw-bold text-dark mb-4",id:"paymentModalLabel",children:"Payment"}),(0,r.jsx)("div",{className:"mb-4",children:(0,r.jsx)("h5",{className:"fw-bold text-dark mb-2",children:t.name})}),(0,r.jsx)("div",{className:"mb-4",children:(0,r.jsxs)("div",{className:"fs-4 fw-semibold text-dark",children:["Fee:",(0,r.jsxs)("span",{style:{color:"#2e5692"},className:"fw-bold",children:["$",a]})]})})]}),(0,r.jsx)("div",{className:"text-center mb-4",children:(0,r.jsx)("img",{src:"/assets/user/images/cardimage.jpg",alt:"cards",className:"img-fluid rounded",style:{maxWidth:"200px"}})}),(0,r.jsx)(h.Elements,{stripe:f,children:(0,r.jsx)(p,{})})]})})}):null};var b=a(3216);const y=(0,a(7784).A)("clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);var v=a(9333),j=a(5264),w=a(7268),k=(a(3656),a(4710));function N(){const e=(0,b.Zp)(),[t,a]=(0,o.useState)([]),[d,m]=(0,o.useState)(Intl.DateTimeFormat().resolvedOptions().timeZone),[x,h]=(0,o.useState)(!1),[f,N]=(0,o.useState)(!1),[S,C]=(0,o.useState)(!1),[z,A]=(0,o.useState)({name:"",email:""}),M=(0,w.ye)(c()),[_,E]=(0,o.useState)(""),[T,D]=(0,o.useState)([]),[I,P]=(0,o.useState)(""),[$,Y]=(0,o.useState)(""),[O,R]=(0,o.useState)(""),[F,q]=(0,o.useState)(""),{id:Z}=(0,b.g)(),U=localStorage.getItem("UserLoginData"),W=JSON.parse(U),[J,V]=(0,o.useState)(""),L="https://blueprintcatalyst.com/api/user/",[K,B]=(0,o.useState)(null),[H,G]=(0,o.useState)([]),[Q,X]=(0,o.useState)({name:"",email:""}),[ee,te]=(0,o.useState)([]);document.title="Module Page",(0,o.useEffect)((()=>{if(Intl.supportedValuesOf){const e=Intl.supportedValuesOf("timeZone");a(e)}}),[]);const[ae,oe]=(0,o.useState)([]);(0,o.useEffect)((()=>{se()}),[Z]);const se=async()=>{try{const e=(await u.A.post(L+"get_combined_zoom_meetings",{module_id:Z,user_id:W.id,selectedZone:Intl.DateTimeFormat().resolvedOptions().timeZone})).data.meetings,t=e,a=e.filter((e=>e.isRegistered));te(t),oe(a),console.log(a)}catch(e){console.error("Failed to fetch combined meetings",e)}};(0,o.useEffect)((()=>{ie()}),[]);const ie=async()=>{let e={user_id:""};try{var t=(await u.A.post("https://blueprintcatalyst.com/api/admin/module/getDataroompayment",e,{headers:{Accept:"application/json","Content-Type":"application/json"}})).data.row;V(t[0].academy_Fee)}catch(a){a.response||(a.request?console.error("Request data:",a.request):console.error("Error message:",a.message))}};(0,o.useEffect)((()=>{"undefined"!==Z&&ne()}),[Z]);const ne=async()=>{let e={id:Z,user_id:W.id};try{(await u.A.post(L+"checkmodulesubscription",e,{headers:{Accept:"application/json","Content-Type":"application/json"}})).data.results.length>0&&q("1")}catch(t){}};(0,o.useEffect)((()=>{Z&&re()}),[Z]);const re=async()=>{let t={id:Z};try{const a=await u.A.post(L+"selectModule",t,{headers:{Accept:"application/json","Content-Type":"application/json"}});console.log(a.data.zoomMeetings),a.data.results.length>0?(ne(),R(a.data.results[0]),D(a.data.zoomMeetings)):e("/dataroom-Duediligence")}catch(a){}};(0,o.useEffect)((()=>{(async()=>{try{const e=await fetch("https://api.ipify.org?format=json"),t=await e.json();E(t.ip)}catch(e){console.error("Failed to fetch IP",e)}})()}),[]),(0,o.useEffect)((()=>{if(Intl.supportedValuesOf){const e=Intl.supportedValuesOf("timeZone");a(e)}}),[]);(new Date).setHours(0,0,0,0);c()().format("YYYY-MM-DD");const[le,de]=(0,o.useState)([]),ce=(0,o.useRef)(null);(0,o.useEffect)((()=>{if(null!==T&&void 0!==T&&T.length&&null!==t&&void 0!==t&&t.length){const e=c()().format("YYYY-MM-DD"),a=T.find((t=>c()(t.start).format("YYYY-MM-DD")===e));if(a){const e=`${Z}_${a.id}_${c()(a.start).format()}`;if(ce.current===e)return;ce.current=e;const o=c()(a.start),s=t.map((e=>({value:e,label:`${e} (${o.clone().tz(e).format("hh:mm A")})`})));de(s)}}else de([])}),[T,t,Z]);const[pe,ue]=(0,o.useState)(!0);(0,o.useEffect)((()=>{H.length>0&&!K?ue(!1):(X({name:"",email:""}),ue(!0))}),[H,K]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(p.mO,{children:[(0,r.jsxs)("div",{className:"fullpage d-block",children:[(0,r.jsx)(s.A,{}),(0,r.jsx)(p.$K,{className:"d-block py-5",children:(0,r.jsx)("div",{className:"container-lg",children:(0,r.jsxs)("div",{className:"row justify-content-center",children:[(0,r.jsx)("div",{className:"col-md-3",children:(0,r.jsx)(k.A,{})}),(0,r.jsx)("div",{className:"col-md-9",children:(0,r.jsx)("form",{action:"",children:(0,r.jsx)(p.mg,{id:"step5",children:(0,r.jsxs)("div",{className:"d-flex flex-column gap-5",children:[I&&(0,r.jsx)(i.A,{message:I,onClose:()=>P("")}),$&&(0,r.jsx)(n.A,{message:$,onClose:()=>Y("")}),K&&(0,r.jsx)(l,{onClose:()=>(B(null),void setTimeout((()=>{N(!1)}),5)),children:(0,r.jsxs)("div",{className:"alert alert-success mt-3",children:[(0,r.jsx)("h5",{children:"\u2705 Registered Successfully!"}),(0,r.jsx)("p",{children:"Your scheduled Zoom meetings are listed below on the calendar:"}),(0,r.jsx)("ul",{children:K.map(((e,t)=>(0,r.jsxs)("li",{children:[e.title," \u2014"," ",c()(e.start).format("DD MMM, hh:mm A")]},t)))}),(0,r.jsx)("p",{className:"mt-2",children:"You can view and join these sessions directly using the links in your email."})]})}),(0,r.jsx)(p.CB,{children:O.name}),(0,r.jsxs)("div",{className:"row gy-3",children:[(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)(p.uM,{children:[(0,r.jsxs)("div",{className:"d-flex flex-column gap-3",children:[(0,r.jsx)("div",{className:"klogo",children:(0,r.jsx)("div",{className:"inlogo fulw",children:(0,r.jsx)("img",{src:"/logos/logoblack.png",alt:"logo"})})}),(0,r.jsx)("h3",{children:"Keiretsu Forum Conoda"}),(0,r.jsx)("h4",{children:"Deal Screening - 30 minutes"})]}),(0,r.jsxs)("h6",{children:[(0,r.jsx)(p.vE,{children:(0,r.jsx)(y,{})}),"30 min"]}),(0,r.jsxs)("h6",{children:[(0,r.jsx)(p.vE,{children:(0,r.jsx)(v.A,{})}),"Web conferencing details provided upon confirmation."]}),(0,r.jsx)("p",{children:O.description})]})}),(0,r.jsx)("div",{className:"col-md-8",children:(0,r.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,r.jsx)("label",{children:"Select a date and time"}),(0,r.jsxs)(p.Jq,{children:[(0,r.jsx)(w.Vv,{localizer:M,events:ee,startAccessor:"start",endAccessor:"end",style:{height:600},popup:!0,selectable:!0,defaultView:"month",views:["month"],onSelectEvent:e=>{if(ae.some((t=>t.id===e.id)))return;new Date;if(H.find((t=>t.id===e.id)))G(H.filter((t=>t.id!==e.id)));else{if(H.length>=3)return P("Only 3 meetings allowed."),void setTimeout((()=>P("")),2e3);G([...H,e])}},eventPropGetter:e=>{const t=ae.some((t=>t.id===e.id)),a=H.some((t=>t.id===e.id));let o="event-default";return t?o="event-registered":a&&(o="event-selected"),{className:o}}}),(0,r.jsx)("strong",{children:"Time Zone"}),(0,r.jsx)("select",{value:d,onChange:e=>m(e.target.value),children:le.map((e=>(0,r.jsx)("option",{value:e.value,children:e.label},e.value)))})]}),(0,r.jsx)("button",{style:{opacity:pe?.5:1,pointerEvents:pe?"none":"auto"},className:"registerzoom",onClick:()=>(X({name:"",email:""}),void(H.length>0&&!K?N(!0):N(!1))),type:"button",children:"Register For Zoom"})]})}),(0,r.jsx)("div",{className:"col-12",children:(0,r.jsxs)(p.Jq,{children:[(0,r.jsx)(j.A,{}),(0,r.jsx)("p",{children:O.textt})]})})]})]})})})})]})})})]}),(0,r.jsx)(p.hJ,{show:f,children:(0,r.jsxs)(p.Cd,{children:[(0,r.jsx)(p.nj,{onClick:()=>N(!1),children:"\xd7"}),(0,r.jsxs)("div",{className:"card p-3 mt-3",children:[(0,r.jsx)("h5",{className:"mb-2",children:"Register Your Email"}),(0,r.jsx)("input",{placeholder:"Name",value:Q.name,onChange:e=>X({...Q,name:e.target.value}),className:"form-control mb-2"}),(0,r.jsx)("input",{placeholder:"Email",value:Q.email,onChange:e=>X({...Q,email:e.target.value}),className:"form-control mb-2"}),(0,r.jsx)("button",{type:"button",className:"btn btn-primary",onClick:async()=>{if(!Q.name||!Q.email)return P("Please enter your name and email."),void setTimeout((()=>{P("")}),1200);let e={email:Q.email,name:Q.name,user_id:W.id,selectedMeetings:H.map((e=>e.id)),ip:_};try{const t=await u.A.post(L+"register_zoom",e);console.log(t.data),"success"===t.data.status?(B(t.data.selectedMeetings),G([]),se(),re()):P(t.data.message),setTimeout((()=>{Y(""),P("")}),1200)}catch(t){console.error("Error creating zoom meet",t)}},children:"Confirm Registration"})]})]})})]}),(0,r.jsx)(g,{moduledata:O,paytmmodule:J,show:S,onClose:()=>C(!1),onSubmit:async e=>{e.preventDefault();var t=e.target;let a={name:t.name.value,email:t.email.value,cardnumber:t.cardnumber.value,expiry:t.expiry.value,cvv:t.cvv.value,user_id:W.id,plan_id:Z};try{(await u.A.post(L+"usersubscription",a,{headers:{Accept:"application/json","Content-Type":"application/json"}})).data.results}catch(o){o.response||(o.request?console.error("Request data:",o.request):console.error("Error message:",o.message))}N(!1)}})]})}},2837:(e,t,a)=>{a.d(t,{$K:()=>l,CB:()=>c,Cd:()=>b,FC:()=>r,Jq:()=>m,R3:()=>j,SD:()=>n,Zw:()=>u,dN:()=>f,hJ:()=>g,mO:()=>s,mg:()=>d,nj:()=>y,pd:()=>v,uM:()=>x,vE:()=>i,z6:()=>p});var o=a(5464);const s=o.default.div`
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
`,i=o.default.span`
  svg {
    width: 16px;
    height: 16px;
    stroke: #9c9c9c;
    stroke-width: 1.2;
    margin-right: 6px;
    vertical-align: middle;
  }
`,n=(o.default.div`
  .react-datepicker-wrapper {
    display: block;
    width: 100%;
  }

  .react-datepicker__input-container {
    display: block;
    width: 100%;
  }

  input.react-datepicker-ignore-onclickoutside {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 14px;
    outline: none;
    background: #fff;
    color: #333;

    &:focus {
      border-color: #999;
      box-shadow: none;
    }
  }

  /* 🔻 Hide the triangle */
  .react-datepicker__triangle {
    display: none !important;
  }
`,o.default.div`
  margin-bottom: auto;
  padding: 15px 0;
  background: var(--primary-color);
  border-bottom: 10px solid var(--secondary-color);
  .logo {
    display: inline-block;
    width: 140px;
    img {
      width: 100%;
    }
  }
`),r=o.default.div`
  display: flex;
  gap: 10px;
  align-items: center;
  svg {
    stroke: #fff;
    stroke-width: 1.2; /* thinner stroke if needed */
  }

  select {
    background: #fff;
    color: #111;
    border: none;
    font-size: 14px;
  }
`,l=o.default.div`
  display: block;
  padding: 3rem 0; /* py-5 is 3rem top & bottom */
  background-color: #f3f5f7;
  min-height: 100vh;
`,d=o.default.div`
  // display: none;
  background: #fff;
  border-radius: 0px;
  padding: 40px 20px;
  box-shadow: 2px 2px 3px #dddddd;

  &.active {
    display: block;
  }

  label {
    font-size: 16px;
    font-weight: 600;
    text-transform: capitalize;
  }

  input[type="text"],
  input[type="number"],
  input[type="email"],
  input[type="tel"],
  select {
    padding: 6px 8px 6px 35px;
    font-size: 16px;
    height: 37px;
    border-bottom: 2px solid #ccc;
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0px;
    width: 100%;
    background: #fff;
  }

  textarea {
    padding: 6px 8px 6px 35px;
    font-size: 16px;
    border-bottom: 2px solid #ccc;
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0px;
    width: 100%;
    background: #fff;
  }

  .sbtn {
    border: none;
    border-radius: 4px;
    display: inline-block;
    padding: 6px 20px;
    text-transform: capitalize;
    font-size: 16px;
  }

  .nextbtn {
    background: var(--primary-color);
    color: #fff;

    &:hover {
      background: var(--primary-color);
    }
  }

  .backbtn {
    background: #111;
    color: #fff;

    &:hover {
      background: #2b2b2b;
    }
  }
`,c=o.default.div`
  color: var(--primary-color);
  font-size: 30px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  text-decoration: underline;
  display: inline-block;

  @media only screen and (max-width: 991.98px) {
    font-size: 26px;
  }
`,p=o.default.div`
  display: flex;
  flex-direction: column;
  gap: 10px 0;
`,u=o.default.div`
  label {
    font-weight: 400;
    cursor: pointer;
    margin-left: 10px;
  }
`,m=(o.default.div`
  > .intl-tel-input.allow-dropdown {
    flex: 1 1 auto;
    width: 1%;
  }
`,o.default.div`
  &.intl-tel-input.allow-dropdown.separate-dial-code.iti-sdc-2 .flag-container {
    margin-left: 35px;
  }

  &.intl-tel-input.allow-dropdown > .flag-container {
    z-index: 4;
  }
`,o.default.input`
  &.intl-tel-input.allow-dropdown.separate-dial-code.iti-sdc-2 #mobile {
    padding-left: 120px;
  }
`,o.default.div`
  position: relative;

  svg {
    position: absolute;
    z-index: 2;
    top: 9px;
    left: 6px;
    width: 16px; /* smaller width */
    height: 16px; /* smaller height */
    stroke: #9c9c9c;
    stroke-width: 1.2;
  }
`),x=(o.default.div`
  background-image: url("https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/12.1.6/img/flags.png");

  @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (-o-min-device-pixel-ratio: 2/1),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 192dpi),
    only screen and (min-resolution: 2dppx) {
    background-image: url("https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/12.1.6/img/flags@2x.png");
  }
`,o.default.div`
  .klogo {
    width: 50px;
  }
  .inlogo {
    width: 170px;
    img {
      width: 100%;
    }
  }

  h3 {
    color: #999;
    font-size: 14px;
    font-weight: 500;
  }

  h4 {
    color: var(--primary-color);
    font-weight: 600;
    font-size: 24px;
  }

  h6 {
    color: #999;
    font-size: 14px;
  }

  p {
    color: #111;
    font-size: 14px;
  }
`),h=(o.default.div`
  background: #fff;
  border-radius: 0px;
  padding: 40px 20px;
  box-shadow: 2px 2px 3px #dddddd;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`,o.default.div`
  &.popup {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    container-type: inline-size;
    container-name: video-gallery;
  }
`,o.default.div`
  display: inline-block;
  margin: 0px;
  transition: all 0.3s ease;
  border: 1px solid #cecece;
  position: relative;
  flex: 1 1 300px;
  max-width: 100%;

  video {
    aspect-ratio: 16/9;
  }

  &:before {
    content: "▶";
    color: white;
    font-size: 35px;
    position: absolute;
    width: 60px;
    height: 60px;
    left: 50%;
    top: 50%;
    text-align: center;
    line-height: 60px;
    transition: all 0.3s ease;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 2;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);

    .desc {
      padding-bottom: 20px;
    }
  }

  @container video-gallery (max-width: 800px) {
    flex: 1 1 100%;
  }
`,o.default.button`
  background: none;
  border: none;
  font-size: 35px;
  position: absolute;
  width: 60px;
  height: 60px;
  left: 50%;
  top: 50%;
  text-align: center;
  line-height: 60px;
  transition: all 0.3s ease;
  transform: translate(-50%, -50%);
  z-index: 5;
`,o.default.div`
  transition: all 0.3s ease;
  padding: 10px 10px;
  color: white;
  position: absolute;
  top: 0px;
  box-sizing: border-box;
  left: 0px;
  width: 100%;
  margin-top: 0px;
  font-family: arial;
  font-size: 14px;
  text-align: left;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.42) 36%,
    rgb(0, 0, 0) 100%
  );
`,o.default.video`
  background-color: black;
  border: none;
`,o.default.div`
  z-index: 999;
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .overlay {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);
    position: absolute;
  }

  .vid-show {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: transparent;
    padding: 0px;
    background: none;
    width: 80vw;
  }

  .close {
    font-family: arial;
    font-weight: bold;
    background-color: #111;
    color: white;
    font-size: 20px;
    position: absolute;
    right: -5px;
    top: -5px;
    display: grid;
    place-items: center;
    border-radius: 100px;
    width: 40px;
    height: 40px;
    text-align: center;
    transition: all 0.3s ease;
    cursor: pointer;
    z-index: 888;

    &:hover {
      background-color: rgba(80, 80, 80, 0.8);
    }
  }
`,o.default.div`
  position: relative;
  margin-top: 0px;
  text-align: center;

  video {
    aspect-ratio: 16/9;
    object-fit: cover;
    width: 100%;
  }
`,o.default.button`
  display: grid;
  color: #111;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 20px;
  line-height: 40px;
  padding: 9px;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 44;

  i {
    height: 20px;
  }

  &:hover {
    background-color: rgb(255, 255, 255);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`),f=((0,o.default)(h)`
  left: -60px;

  @media only screen and (max-width: 991.98px) {
    left: -30px;
  }
`,(0,o.default)(h)`
  right: -60px;

  @media only screen and (max-width: 991.98px) {
    right: -30px;
  }
`,o.default.sup`
  color: var(--primary-color);
`),g=o.default.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: ${e=>{let{show:t}=e;return t?"flex":"none"}};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,b=o.default.div`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 400px;
  position: relative;

  input {
    width: 100%;
    padding: 10px 14px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 14px;
    color: #333;
    background-color: #fff;
    transition: border 0.3s ease;

    &:focus {
      border-color: #999;
      outline: none;
    }

    &::placeholder {
      color: #aaa;
    }
  }
`,y=o.default.button`
  position: absolute;
  top: -8px;
  right: -8px;
  border: none;
  background: #111;
  color: #fff;
  padding: 0px;
  border-radius: 100%;
  cursor: pointer;
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  height: 26px;
`,v=o.default.input`
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 16px;
`,j=o.default.button`
  padding: 0.6rem 1.2rem;
  background-color: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`},4939:(e,t,a)=>{a.d(t,{A:()=>i});var o=a(5043),s=a(579);const i=function(e){let{message:t,onClose:a}=e;const[i,n]=(0,o.useState)("show");return(0,o.useEffect)((()=>{const e=setTimeout((()=>{n("")}),3500),t=setTimeout((()=>{a()}),3e3);return()=>{clearTimeout(e),clearTimeout(t)}}),[a]),(0,s.jsxs)("div",{className:`alert alert-danger alert-dismissible fade ${i}`,role:"alert",style:{position:"fixed",top:"20px",right:"20px",zIndex:9999,minWidth:"300px",maxWidth:"90%"},children:[(0,s.jsx)("strong",{children:"Error!"})," ",t,(0,s.jsx)("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:a})]})}},5015:()=>{},5264:(e,t,a)=>{a.d(t,{A:()=>o});const o=(0,a(7784).A)("building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]])},8622:(e,t,a)=>{a.d(t,{A:()=>i});var o=a(5043),s=a(579);const i=function(e){let{message:t,onClose:a}=e;const[i,n]=(0,o.useState)("show");return(0,o.useEffect)((()=>{const e=setTimeout((()=>{n("")}),2500),t=setTimeout((()=>{a()}),3e3);return()=>{clearTimeout(e),clearTimeout(t)}}),[a]),(0,s.jsxs)("div",{className:`alert alert-success alert-dismissible fade ${i}`,role:"alert",style:{position:"fixed",top:"20px",right:"20px",zIndex:9999,minWidth:"300px",maxWidth:"90%"},children:[(0,s.jsx)("strong",{children:"Success!"})," ",t,(0,s.jsx)("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:a})]})}},9333:(e,t,a)=>{a.d(t,{A:()=>o});const o=(0,a(7784).A)("video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]])}}]);
//# sourceMappingURL=9021.84382d33.chunk.js.map