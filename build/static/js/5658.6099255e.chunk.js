/*! For license information please see 5658.6099255e.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkkeiretsuproject=self.webpackChunkkeiretsuproject||[]).push([[5658],{1258:(e,t,a)=>{a.r(t),a.d(t,{default:()=>C});var s=a(5043),o=(a(5015),a(5136)),n=a(4939),i=a(8622),r=a(579);const l=function(e){let{children:t,onClose:a}=e;const[o,n]=(0,s.useState)("show");return(0,r.jsxs)("div",{className:`alert alert-success alert-dismissible fade ${o}`,role:"alert",style:{position:"fixed",top:"20px",right:"20px",zIndex:9999,minWidth:"300px",maxWidth:"90%"},children:[t,(0,r.jsx)("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:a})]})};const d=function(e){let{children:t,onClose:a}=e;const[o,n]=(0,s.useState)("show");return(0,r.jsxs)("div",{className:`alert alert-danger alert-dismissible fade ${o}`,role:"alert",style:{position:"fixed",top:"20px",right:"20px",zIndex:9999,minWidth:"300px",maxWidth:"90%"},children:[t,(0,r.jsx)("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:a})]})};a(8421);var c=a(4348),p=a.n(c),m=a(2837),u=a(6213),h=a(6022),x=a(9677),f=a(3393);const g=(0,x.c)("pk_test_51RUJzWAx6rm2q3pys9SgKUPRxNxPZ4P1X6EazNQvnPuHKOOfzGsbylaTLUktId9ANHULkwBk67jnp5aqZ9Dlm6PR00jKdDwvSq"),b=e=>{let{moduledata:t,paytmmodule:a,show:o,onClose:n,onSubmit:i}=e;var l="https://blueprintcatalyst.com/api/user/aifile/";document.title="Dataroom Management & Diligence";const d=localStorage.getItem("UserLoginData"),c=JSON.parse(d),p=()=>{(0,s.useEffect)((()=>{t(a)}),[a]);const[e,t]=(0,s.useState)(a),[o,n]=(0,s.useState)(""),i=(0,f.useStripe)(),d=(0,f.useElements)(),[p,m]=(0,s.useState)(""),[x,g]=(0,s.useState)(!1),[b,y]=(0,s.useState)(""),[j,v]=(0,s.useState)(!1),[w,k]=(0,s.useState)("Onetime"),[N,S]=(0,s.useState)(""),[C,z]=(0,s.useState)(""),A=async e=>{try{await u.A.post(`${l}CreateuserSubscription_Academy`,e,{headers:{Accept:"application/json","Content-Type":"application/json"}}),y("Payment successful! \ud83c\udf89"),v(!1),setTimeout((()=>{window.location.reload()}),2e3)}catch(j){console.error("Success handler error:",j),y("Payment was captured, but post-process failed."),v(!0)}finally{g(!1)}};return(0,r.jsxs)("form",{onSubmit:async t=>{if(t.preventDefault(),!i||!d)return;const a=d.getElement(f.CardElement);if(!a)return y("Payment form is not ready. Please reload the page."),void v(!0);g(!0);try{const{data:t}=await u.A.post(`${l}CreateuserSubscription_AcademyCheck`,{user_id:c.id,amount:e}),s=await i.confirmCardPayment(t.clientSecret,{payment_method:{card:a}});if(s.error)y(s.error.message),v(!0),g(!1);else if("succeeded"===s.paymentIntent.status){const a={code:p,user_id:c.id,amount:e,clientSecret:t.clientSecret,PayidOnetime:N,payment_status:s.paymentIntent.status};await A(a)}else y("Payment failed. Try again."),v(!0),g(!1)}catch(s){y("Unexpected error occurred."),v(!0),g(!1)}},children:[(0,r.jsx)("div",{className:"form-control rounded-3",style:{padding:"0.75rem",border:"1px solid #000",borderColor:"#ced4da"},children:(0,r.jsx)(f.CardElement,{options:{style:{base:{fontSize:"16px",color:"#32325d",fontFamily:'"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',"::placeholder":{color:"#a0aec0"},padding:"0.75rem"},invalid:{color:"#e5424d"}},classes:{base:"stripe-card-element",focus:"border-primary",invalid:"border-danger"}}})}),(0,r.jsxs)("div",{className:"d-flex gap-2 d-md-flex justify-content-md-end mt-4",children:[(0,r.jsxs)("div",{className:"d-flex flex-column",children:[(0,r.jsx)("input",{type:"text",name:"refferal_code",defaultValue:p,onChange:async e=>{const t=e.target.value.toUpperCase();m(t)},className:"form-control w-auto",placeholder:"Apply Referral Code",autoComplete:"off",style:{textTransform:"uppercase"}}),C&&(0,r.jsx)("span",{className:"text-danger mt-1",style:{fontSize:"0.875rem"},children:C})]}),(0,r.jsx)(h.$n,{type:"button",onClick:async()=>{if(""===p)z("Enter the code");else{let s={code:p};console.log(s);try{const o=await u.A.post(`${l}checkreferCode`,s,{headers:{Accept:"application/json","Content-Type":"application/json"}});if(o.data.results.length>0){var e=o.data.results[0];if(e.usage_limit>e.used_count){n(e.percentage);const s=a*e.percentage/100;t(a-s),z("")}else z("This code already used")}else z("Invalid code!")}catch(j){}}},className:"submit d-flex align-items-center gap-2",style:{background:"#5C636B",height:"fit-content"},children:"Apply Code"})]}),o&&(0,r.jsxs)("div",{className:"d-flex gap-2 d-md-flex justify-content-md-end mt-4",children:[(0,r.jsx)("b",{children:"Discount:"})," ",o,"%"]}),(0,r.jsx)("div",{className:"d-flex gap-2 d-md-flex justify-content-md-end mt-4",children:(0,r.jsxs)(h.$n,{disabled:!i||x,type:"submit",className:"submit d-flex align-items-center gap-2",style:{background:"#003b21"},children:[!x&&(0,r.jsxs)("span",{children:["Pay \u20ac",e]}),x&&(0,r.jsx)("div",{className:"spinner-border text-white spinneronetimepay m-0",role:"status",children:(0,r.jsx)("span",{className:"visually-hidden"})})]})}),b&&(0,r.jsx)("p",{className:j?" mt-3 error_pop":"success_pop mt-3",children:b})]})},[m,x]=(0,s.useState)(!1);return o?(0,r.jsx)("div",{className:"modal fade show d-block",style:{backgroundColor:"rgba(0, 0, 0, 0.5)"},tabIndex:"-1",role:"dialog","aria-labelledby":"paymentModalLabel","aria-hidden":"false",children:(0,r.jsx)("div",{className:"modal-dialog modal-dialog-centered modal-lg",children:(0,r.jsxs)("div",{className:"modal-content rounded-4 shadow-lg p-4",children:[(0,r.jsx)("button",{type:"button",className:"btn-close position-absolute top-0 end-0 m-3",onClick:n,"aria-label":"Close"}),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{className:"modal-title text-center fw-bold text-dark mb-4",id:"paymentModalLabel",children:"Payment"}),(0,r.jsx)("div",{className:"mb-4",children:(0,r.jsx)("h5",{className:"fw-bold text-dark mb-2",children:t.name})}),(0,r.jsx)("div",{className:"mb-4",children:(0,r.jsxs)("div",{className:"fs-4 fw-semibold text-dark",children:["Fee:",(0,r.jsxs)("span",{style:{color:"#2e5692"},className:"fw-bold",children:["$",a]})]})})]}),(0,r.jsx)("div",{className:"text-center mb-4",children:(0,r.jsx)("img",{src:"/assets/user/images/cardimage.jpg",alt:"cards",className:"img-fluid rounded",style:{maxWidth:"200px"}})}),(0,r.jsx)(f.Elements,{stripe:g,children:(0,r.jsx)(p,{})})]})})}):null};var y=a(3216),j=a(7022);const v=(0,a(7784).A)("clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);var w=a(9333),k=a(5264),N=a(7268),S=(a(3656),a(4710));function C(){const e=(0,y.Zp)(),[t,a]=(0,s.useState)([]),[c,h]=(0,s.useState)([]),[x,f]=(0,s.useState)(Intl.DateTimeFormat().resolvedOptions().timeZone),[g,C]=(0,s.useState)(null),[z,A]=(0,s.useState)(null),[M,T]=(0,s.useState)(!1),[D,_]=(0,s.useState)(!1),[E,I]=(0,s.useState)(!1),[P,$]=(0,s.useState)({name:"",email:""}),Z=(0,N.ye)(p()),[O,Y]=(0,s.useState)(""),[R,F]=(0,s.useState)([]),[q,W]=(0,s.useState)(""),[J,H]=(0,s.useState)(""),[L,V]=(0,s.useState)(""),[U,B]=(0,s.useState)(""),{id:K}=(0,y.g)(),G=localStorage.getItem("UserLoginData"),Q=JSON.parse(G),[X,ee]=(0,s.useState)(""),te="https://blueprintcatalyst.com/api/user/",[ae,se]=(0,s.useState)(null),[oe,ne]=(0,s.useState)(null),[ie,re]=(0,s.useState)(null),[le,de]=(0,s.useState)([]),[ce,pe]=(0,s.useState)({name:"",email:""}),[me,ue]=(0,s.useState)([]);document.title="Module Page",(0,s.useEffect)((()=>{if(Intl.supportedValuesOf){const e=Intl.supportedValuesOf("timeZone");a(e)}}),[]);const[he,xe]=(0,s.useState)([]);(0,s.useEffect)((()=>{fe()}),[K]);const fe=async()=>{try{const e=(await u.A.post(te+"get_combined_zoom_meetings",{module_id:K,user_id:Q.id,selectedZone:Intl.DateTimeFormat().resolvedOptions().timeZone})).data.meetings,t=e,a=e.filter((e=>e.isRegistered));ue(t),xe(a),console.log(a),console.log(x)}catch(e){console.error("Failed to fetch combined meetings",e)}};(0,s.useEffect)((()=>{ge()}),[]);const ge=async()=>{let e={user_id:""};try{var t=(await u.A.post("https://blueprintcatalyst.com/api/admin/module/getDataroompayment",e,{headers:{Accept:"application/json","Content-Type":"application/json"}})).data.row;ee(t[0].academy_Fee)}catch(a){a.response||(a.request?console.error("Request data:",a.request):console.error("Error message:",a.message))}};(0,s.useEffect)((()=>{"undefined"!==K&&be()}),[K]);const be=async()=>{let e={id:K,user_id:Q.id};try{(await u.A.post(te+"checkmodulesubscription",e,{headers:{Accept:"application/json","Content-Type":"application/json"}})).data.results.length>0&&B("1")}catch(t){}};(0,s.useEffect)((()=>{K&&ye()}),[K]);const ye=async()=>{let t={id:K};try{const a=await u.A.post(te+"selectModule",t,{headers:{Accept:"application/json","Content-Type":"application/json"}});console.log(a.data.zoomMeetings),a.data.results.length>0?(be(),V(a.data.results[0]),F(a.data.zoomMeetings)):e("/dataroom-Duediligence")}catch(a){}};(0,s.useEffect)((()=>{(async()=>{try{const e=await fetch("https://api.ipify.org?format=json"),t=await e.json();Y(t.ip)}catch(e){console.error("Failed to fetch IP",e)}})()}),[]),(0,s.useEffect)((()=>{if(Intl.supportedValuesOf){const e=Intl.supportedValuesOf("timeZone");a(e)}}),[]),(0,s.useEffect)((()=>{if(Intl.supportedValuesOf){const e=Intl.supportedValuesOf("timeZone"),t=p()(),a=e.map((e=>({value:e,label:`${e} (${t.clone().tz(e).format("hh:mm A")})`})));h(a)}}),[]);(new Date).setHours(0,0,0,0);p()().format("YYYY-MM-DD");const[je,ve]=(0,s.useState)([]),we=(0,s.useRef)(null);(0,s.useEffect)((()=>{if(null!==R&&void 0!==R&&R.length&&null!==t&&void 0!==t&&t.length){const e=p()().format("YYYY-MM-DD"),a=R.find((t=>p()(t.start).format("YYYY-MM-DD")===e));if(a){const e=`${K}_${a.id}_${p()(a.start).format()}`;if(we.current===e)return;we.current=e;const s=p()(a.start),o=t.map((e=>({value:e,label:`${e} (${s.clone().tz(e).format("hh:mm A")})`})));ve(o)}}else ve(c)}),[R,t,K,c]);const[ke,Ne]=(0,s.useState)(!0);(0,s.useEffect)((()=>{le.length>0&&!oe?Ne(!1):(pe({name:"",email:""}),Ne(!0))}),[le,oe]);const[Se,Ce]=(0,s.useState)(null),[ze,Ae]=(0,s.useState)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(m.mO,{children:[(0,r.jsxs)("div",{className:"fullpage d-block",children:[(0,r.jsx)(o.A,{}),ze&&Se&&(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:Se},style:{width:"100%",height:"80vh"}}),(0,r.jsx)(m.$K,{className:"d-block py-5",children:(0,r.jsx)("div",{className:"container-lg",children:(0,r.jsxs)("div",{className:"row justify-content-center",children:[(0,r.jsx)("div",{className:"col-md-3",children:(0,r.jsx)(S.A,{})}),(0,r.jsx)("div",{className:"col-md-9",children:(0,r.jsx)("form",{action:"",children:(0,r.jsx)(m.mg,{id:"step5",children:(0,r.jsxs)("div",{className:"d-flex flex-column gap-5",children:[z&&(0,r.jsx)(j.A,{message:(0,r.jsxs)("div",{className:"alert alert-warning mt-3",children:[(0,r.jsx)("h5",{children:"\ud83d\udcdd Confirm Meeting Registration"}),(0,r.jsx)("p",{children:"You're about to register for the following Zoom meeting. Please review the details carefully before proceeding:"}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Topic:"})," ",z.topic]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Date & Time:"})," ",p()(z.start).format("DD MMM, hh:mm A")]})]}),(0,r.jsxs)("p",{className:"mt-3",children:["\ud83d\udc49 Once you confirm, the"," ",(0,r.jsx)("strong",{children:'"Register For Zoom"'})," button will be enabled."]}),(0,r.jsx)("p",{className:"mt-2",children:"Do you want to continue with the registration?"})]}),onConfirm:()=>{const e=g;if(le.find((t=>t.id===e.id)))de(le.filter((t=>t.id!==e.id)));else{if(le.length>=3)return W("Only 3 meetings allowed."),void setTimeout((()=>W("")),2e3);de([...le,e])}A(null)},onCancel:()=>A(null)}),q&&(0,r.jsx)(n.A,{message:q,onClose:()=>W("")}),J&&(0,r.jsx)(i.A,{message:J,onClose:()=>H("")}),ae&&(0,r.jsx)(d,{onClose:()=>se(null),children:(0,r.jsxs)("div",{className:"alert alert-danger mt-3",children:[(0,r.jsx)("h5",{children:"\u274c Meeting Scheduling Failed!"}),(0,r.jsx)("p",{children:"There was an issue with your meeting schedule. Please review the following details:"}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Topic:"})," ",ae.topic," \u2014"," "]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"DateTime:"})," ",p()(ae.start).format("DD MMM, hh:mm A")]})]}),(0,r.jsx)("p",{className:"mt-2",children:"The selected meeting time may have already passed or is invalid. Please choose a future date and time, and try again."})]})}),oe&&(0,r.jsx)(l,{onClose:()=>(ne(null),void setTimeout((()=>{_(!1)}),5)),children:(0,r.jsxs)("div",{className:"alert alert-success mt-3",children:[(0,r.jsx)("h5",{children:"\u2705 Registered Successfully!"}),(0,r.jsx)("p",{children:"Your scheduled Zoom meetings are listed below on the calendar:"}),(0,r.jsx)("ul",{children:oe.map(((e,t)=>(0,r.jsxs)("li",{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"Topic:"})," ",e.title]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"DateTime:"})," ",p()(e.start).format("DD MMM, hh:mm A")]})]},t)))}),(0,r.jsxs)("p",{className:"mt-2",children:["A ",(0,r.jsx)("strong",{children:'"Join"'})," button will appear 5 minutes before the session starts. You can use it to join the Zoom meeting directly from here."]})]})}),ie&&(0,r.jsx)(l,{onClose:()=>re(null),children:(0,r.jsxs)("div",{className:"alert alert-info mt-3",children:[(0,r.jsx)("h5",{children:"\ud83d\udcc5 Zoom Meeting Details"}),(0,r.jsx)("p",{children:"The following Zoom meeting is scheduled. Please find the details below:"}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Topic:"})," ",ie.topic," "]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Date & Time:"})," ",p()(ie.start).format("DD MMM, hh:mm A")]})]}),(0,r.jsxs)("p",{className:"mt-2",children:["A ",(0,r.jsx)("strong",{children:"Join"})," button will appear 5 minutes before the session starts. You can use it to join the Zoom meeting directly from here."]}),p()().isSameOrAfter(p()(ie.start).subtract(5,"minutes"))&&p()().isBefore(p()(ie.start).add(45,"hour"))&&(0,r.jsx)("button",{onClick:()=>(async e=>{let t={id:e,ip_address:O};try{const e=await u.A.post(te+"openZoomLink",t,{headers:{Accept:"application/json","Content-Type":"application/json"}});"2"===e.data.status?W(e.data.message):(Ce(e.data),Ae(!0),setTimeout((()=>{Ae(!1)}),1e3))}catch(a){}})(ie.id),type:"button",rel:"noopener noreferrer",className:"btn btn-primary mt-3",children:"Join Zoom Meeting"})]})}),(0,r.jsx)(m.CB,{children:L.name}),(0,r.jsxs)("div",{className:"row gy-3",children:[(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)(m.uM,{children:[(0,r.jsxs)("div",{className:"d-flex flex-column gap-3",children:[(0,r.jsx)("div",{className:"klogo",children:(0,r.jsx)("div",{className:"inlogo fulw",children:(0,r.jsx)("img",{src:"/logos/logoblack.png",alt:"logo"})})}),(0,r.jsx)("h3",{children:"Keiretsu Forum Conoda"}),(0,r.jsx)("h4",{children:"Deal Screening - 30 minutes"})]}),(0,r.jsxs)("h6",{children:[(0,r.jsx)(m.vE,{children:(0,r.jsx)(v,{})}),"30 min"]}),(0,r.jsxs)("h6",{children:[(0,r.jsx)(m.vE,{children:(0,r.jsx)(w.A,{})}),"Web conferencing details provided upon confirmation."]}),(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:L.description}})]})}),(0,r.jsx)("div",{className:"col-md-8",children:(0,r.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,r.jsx)("label",{children:"Select a date and time"}),(0,r.jsxs)(m.Jq,{children:[(0,r.jsx)(N.Vv,{localizer:Z,events:me,startAccessor:"start",endAccessor:"end",style:{height:600},popup:!0,selectable:!0,defaultView:"month",views:["month"],onSelectEvent:e=>{const t=new Date;if(e.time){const a=e.end.split("T")[0],s=e.time,o=p()(s,"HH:mm").add(30,"minutes").format("HH:mm");if(!(new Date(`${a}T${o}:00`)>t))return void se(e)}if(he.some((t=>t.id===e.id)))return void re(e);new Date;A(e),C(e)},eventPropGetter:e=>{const t=he.some((t=>t.id===e.id)),a=le.some((t=>t.id===e.id));let s="event-default";return t?s="event-registered":a&&(s="event-selected"),{className:s}}}),(0,r.jsx)("strong",{children:"Time Zone"}),(0,r.jsx)("select",{value:x,onChange:e=>f(e.target.value),children:je.map((e=>(0,r.jsx)("option",{value:e.value,children:e.label},e.value)))})]}),(0,r.jsx)("button",{style:{opacity:ke?.5:1,pointerEvents:ke?"none":"auto"},className:"registerzoom",onClick:()=>(pe({name:"",email:""}),void(le.length>0&&!oe?_(!0):_(!1))),type:"button",children:"Register For Zoom"})]})}),(0,r.jsx)("div",{className:"col-12",children:(0,r.jsxs)(m.Jq,{children:[(0,r.jsx)(k.A,{}),(0,r.jsx)("p",{children:L.textt})]})})]})]})})})})]})})})]}),(0,r.jsx)(m.hJ,{show:D,children:(0,r.jsxs)(m.Cd,{children:[(0,r.jsx)(m.nj,{onClick:()=>_(!1),children:"\xd7"}),(0,r.jsxs)("div",{className:"card p-3 mt-3",children:[(0,r.jsx)("h5",{className:"mb-2",children:"Register Your Email"}),(0,r.jsx)("input",{placeholder:"Name",value:ce.name,onChange:e=>pe({...ce,name:e.target.value}),className:"form-control mb-2"}),(0,r.jsx)("input",{placeholder:"Email",value:ce.email,onChange:e=>pe({...ce,email:e.target.value}),className:"form-control mb-2"}),(0,r.jsx)("button",{type:"button",className:"btn btn-primary",onClick:async()=>{if(!ce.name||!ce.email)return W("Please enter your name and email."),void setTimeout((()=>{W("")}),1200);let e={email:ce.email,name:ce.name,user_id:Q.id,timezone:x,selectedMeetings:le.map((e=>e.id)),ip:O};try{const t=await u.A.post(te+"register_zoom",e);console.log(t.data),"success"===t.data.status?(ne(t.data.selectedMeetings),de([]),fe(),ye()):W(t.data.message),setTimeout((()=>{_(!1),H(""),W("")}),1200)}catch(t){console.error("Error creating zoom meet",t)}},children:"Confirm Registration"})]})]})})]}),(0,r.jsx)(b,{moduledata:L,paytmmodule:X,show:E,onClose:()=>I(!1),onSubmit:async e=>{e.preventDefault();var t=e.target;let a={name:t.name.value,email:t.email.value,cardnumber:t.cardnumber.value,expiry:t.expiry.value,cvv:t.cvv.value,user_id:Q.id,plan_id:K};try{(await u.A.post(te+"usersubscription",a,{headers:{Accept:"application/json","Content-Type":"application/json"}})).data.results}catch(s){s.response||(s.request?console.error("Request data:",s.request):console.error("Error message:",s.message))}_(!1)}})]})}},2837:(e,t,a)=>{a.d(t,{$K:()=>l,CB:()=>c,Cd:()=>b,FC:()=>r,Jq:()=>u,R3:()=>v,SD:()=>i,Zw:()=>m,dN:()=>f,hJ:()=>g,mO:()=>o,mg:()=>d,nj:()=>y,pd:()=>j,uM:()=>h,vE:()=>n,z6:()=>p});var s=a(5464);const o=s.default.div`
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
`,n=s.default.span`
  svg {
    width: 16px;
    height: 16px;
    stroke: #9c9c9c;
    stroke-width: 1.2;
    margin-right: 6px;
    vertical-align: middle;
  }
`,i=(s.default.div`
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
`,s.default.div`
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
`),r=s.default.div`
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
`,l=s.default.div`
  display: block;
  padding: 3rem 0; /* py-5 is 3rem top & bottom */
  background-color: #f3f5f7;
  min-height: 100vh;
`,d=s.default.div`
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
`,c=s.default.div`
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
`,p=s.default.div`
  display: flex;
  flex-direction: column;
  gap: 10px 0;
`,m=s.default.div`
  label {
    font-weight: 400;
    cursor: pointer;
    margin-left: 10px;
  }
`,u=(s.default.div`
  > .intl-tel-input.allow-dropdown {
    flex: 1 1 auto;
    width: 1%;
  }
`,s.default.div`
  &.intl-tel-input.allow-dropdown.separate-dial-code.iti-sdc-2 .flag-container {
    margin-left: 35px;
  }

  &.intl-tel-input.allow-dropdown > .flag-container {
    z-index: 4;
  }
`,s.default.input`
  &.intl-tel-input.allow-dropdown.separate-dial-code.iti-sdc-2 #mobile {
    padding-left: 120px;
  }
`,s.default.div`
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
`),h=(s.default.div`
  background-image: url("https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/12.1.6/img/flags.png");

  @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (-o-min-device-pixel-ratio: 2/1),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 192dpi),
    only screen and (min-resolution: 2dppx) {
    background-image: url("https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/12.1.6/img/flags@2x.png");
  }
`,s.default.div`
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
`),x=(s.default.div`
  background: #fff;
  border-radius: 0px;
  padding: 40px 20px;
  box-shadow: 2px 2px 3px #dddddd;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`,s.default.div`
  &.popup {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    container-type: inline-size;
    container-name: video-gallery;
  }
`,s.default.div`
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
`,s.default.button`
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
`,s.default.div`
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
`,s.default.video`
  background-color: black;
  border: none;
`,s.default.div`
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
`,s.default.div`
  position: relative;
  margin-top: 0px;
  text-align: center;

  video {
    aspect-ratio: 16/9;
    object-fit: cover;
    width: 100%;
  }
`,s.default.button`
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
`),f=((0,s.default)(x)`
  left: -60px;

  @media only screen and (max-width: 991.98px) {
    left: -30px;
  }
`,(0,s.default)(x)`
  right: -60px;

  @media only screen and (max-width: 991.98px) {
    right: -30px;
  }
`,s.default.sup`
  color: var(--primary-color);
`),g=s.default.div`
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
`,b=s.default.div`
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
`,y=s.default.button`
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
`,j=s.default.input`
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 16px;
`,v=s.default.button`
  padding: 0.6rem 1.2rem;
  background-color: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`},4939:(e,t,a)=>{a.d(t,{A:()=>n});var s=a(5043),o=a(579);const n=function(e){let{message:t,onClose:a}=e;const[n,i]=(0,s.useState)("show");return(0,s.useEffect)((()=>{const e=setTimeout((()=>{i("")}),3500),t=setTimeout((()=>{a()}),3e3);return()=>{clearTimeout(e),clearTimeout(t)}}),[a]),(0,o.jsxs)("div",{className:`alert alert-danger alert-dismissible fade ${n}`,role:"alert",style:{position:"fixed",top:"20px",right:"20px",zIndex:999999,minWidth:"300px",maxWidth:"90%"},children:[(0,o.jsx)("strong",{children:"Error!"})," ",t,(0,o.jsx)("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:a})]})}},5015:()=>{},5264:(e,t,a)=>{a.d(t,{A:()=>s});const s=(0,a(7784).A)("building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]])},7022:(e,t,a)=>{a.d(t,{A:()=>o});a(5043);var s=a(579);const o=function(e){let{message:t,onConfirm:a,onCancel:o}=e;return(0,s.jsx)("div",{className:"position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center",style:{backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:9999},children:(0,s.jsxs)("div",{className:"bg-white p-4 rounded d-flex flex-column gap-2 shadow-lg alert-pop-mess",style:{maxWidth:"40%"},children:[(0,s.jsx)("p",{children:t}),(0,s.jsxs)("div",{className:"d-flex justify-content-end gap-2",children:[(0,s.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:o,children:"No"}),(0,s.jsx)("button",{type:"button",className:"btn btn-danger",onClick:a,children:"Yes"})]})]})})}},8622:(e,t,a)=>{a.d(t,{A:()=>n});var s=a(5043),o=a(579);const n=function(e){let{message:t,onClose:a}=e;const[n,i]=(0,s.useState)("show");return(0,s.useEffect)((()=>{const e=setTimeout((()=>{i("")}),2500),t=setTimeout((()=>{a()}),3e3);return()=>{clearTimeout(e),clearTimeout(t)}}),[a]),(0,o.jsxs)("div",{className:`alert alert-success alert-dismissible fade ${n}`,role:"alert",style:{position:"fixed",top:"20px",right:"20px",zIndex:9999,minWidth:"300px",maxWidth:"90%"},children:[(0,o.jsx)("strong",{children:"Success!"})," ",t,(0,o.jsx)("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:a})]})}},9333:(e,t,a)=>{a.d(t,{A:()=>s});const s=(0,a(7784).A)("video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]])}}]);
//# sourceMappingURL=5658.6099255e.chunk.js.map