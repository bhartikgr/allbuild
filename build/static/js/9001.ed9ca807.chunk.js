"use strict";(self.webpackChunkkeiretsuproject=self.webpackChunkkeiretsuproject||[]).push([[9001],{1508:(e,t,s)=>{s.d(t,{A:()=>c});var a=s(5043),r=s(6213),n=s(6022),o=s(9677),i=s(3393),l=s(579);const d=(0,o.c)("pk_test_51RUJzWAx6rm2q3pys9SgKUPRxNxPZ4P1X6EazNQvnPuHKOOfzGsbylaTLUktId9ANHULkwBk67jnp5aqZ9Dlm6PR00jKdDwvSq"),c=e=>{let{moduledata:t,paytmmodule:s,show:o,onClose:c,onSubmit:p}=e;var u="https://blueprintcatalyst.com/api/user/aifile/";document.title="Dataroom Management & Diligence";const m=localStorage.getItem("UserLoginData"),x=JSON.parse(m),h=()=>{(0,a.useEffect)((()=>{t(s)}),[s]);const[e,t]=(0,a.useState)(s),[o,d]=(0,a.useState)(""),c=(0,i.useStripe)(),p=(0,i.useElements)(),[m,h]=(0,a.useState)(""),[g,f]=(0,a.useState)(!1),[y,j]=(0,a.useState)(""),[v,b]=(0,a.useState)(!1),[w,N]=(0,a.useState)("Onetime"),[S,k]=(0,a.useState)(""),[C,E]=(0,a.useState)(""),A=async e=>{try{await r.A.post(`${u}CreateuserSubscription_Academy`,e,{headers:{Accept:"application/json","Content-Type":"application/json"}}),j("Payment successful! \ud83c\udf89"),b(!1),setTimeout((()=>{window.location.reload()}),2e3)}catch(v){console.error("Success handler error:",v),j("Payment was captured, but post-process failed."),b(!0)}finally{f(!1)}};return(0,l.jsxs)("form",{onSubmit:async t=>{if(t.preventDefault(),!c||!p)return;const s=p.getElement(i.CardElement);if(!s)return j("Payment form is not ready. Please reload the page."),void b(!0);f(!0);try{const{data:t}=await r.A.post(`${u}CreateuserSubscription_AcademyCheck`,{user_id:x.id,amount:e}),a=await c.confirmCardPayment(t.clientSecret,{payment_method:{card:s}});if(a.error)j(a.error.message),b(!0),f(!1);else if("succeeded"===a.paymentIntent.status){const s={code:m,user_id:x.id,amount:e,clientSecret:t.clientSecret,PayidOnetime:S,payment_status:a.paymentIntent.status};await A(s)}else j("Payment failed. Try again."),b(!0),f(!1)}catch(a){j("Unexpected error occurred."),b(!0),f(!1)}},children:[(0,l.jsx)("div",{className:"form-control rounded-3",style:{padding:"0.75rem",border:"1px solid #000",borderColor:"#ced4da"},children:(0,l.jsx)(i.CardElement,{options:{style:{base:{fontSize:"16px",color:"#32325d",fontFamily:'"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',"::placeholder":{color:"#a0aec0"},padding:"0.75rem"},invalid:{color:"#e5424d"}},classes:{base:"stripe-card-element",focus:"border-primary",invalid:"border-danger"}}})}),(0,l.jsxs)("div",{className:"d-flex gap-2 d-md-flex justify-content-md-end mt-4",children:[(0,l.jsxs)("div",{className:"d-flex flex-column",children:[(0,l.jsx)("input",{type:"text",name:"refferal_code",defaultValue:m,onChange:async e=>{const t=e.target.value.toUpperCase();h(t)},className:"form-control w-auto",placeholder:"Apply Referral Code",autoComplete:"off",style:{textTransform:"uppercase"}}),C&&(0,l.jsx)("span",{className:"text-danger mt-1",style:{fontSize:"0.875rem"},children:C})]}),(0,l.jsx)(n.$n,{type:"button",onClick:async()=>{if(""===m)E("Enter the code");else{let a={code:m};console.log(a);try{const n=await r.A.post(`${u}checkreferCode`,a,{headers:{Accept:"application/json","Content-Type":"application/json"}});if(n.data.results.length>0){var e=n.data.results[0];if(e.usage_limit>e.used_count){d(e.percentage);const a=s*e.percentage/100;t(s-a),E("")}else E("This code already used")}else E("Invalid code!")}catch(v){}}},className:"submit d-flex align-items-center gap-2",style:{background:"#5C636B",height:"fit-content"},children:"Apply Code"})]}),o&&(0,l.jsxs)("div",{className:"d-flex gap-2 d-md-flex justify-content-md-end mt-4",children:[(0,l.jsx)("b",{children:"Discount:"})," ",o,"%"]}),(0,l.jsx)("div",{className:"d-flex gap-2 d-md-flex justify-content-md-end mt-4",children:(0,l.jsxs)(n.$n,{disabled:!c||g,type:"submit",className:"submit d-flex align-items-center gap-2",style:{background:"#003b21"},children:[!g&&(0,l.jsxs)("span",{children:["Pay \u20ac",e]}),g&&(0,l.jsx)("div",{className:"spinner-border text-white spinneronetimepay m-0",role:"status",children:(0,l.jsx)("span",{className:"visually-hidden"})})]})}),y&&(0,l.jsx)("p",{className:v?" mt-3 error_pop":"success_pop mt-3",children:y})]})},[g,f]=(0,a.useState)(!1);return o?(0,l.jsx)("div",{className:"modal fade show d-block",style:{backgroundColor:"rgba(0, 0, 0, 0.5)"},tabIndex:"-1",role:"dialog","aria-labelledby":"paymentModalLabel","aria-hidden":"false",children:(0,l.jsx)("div",{className:"modal-dialog modal-dialog-centered modal-lg",children:(0,l.jsxs)("div",{className:"modal-content rounded-4 shadow-lg p-4",children:[(0,l.jsx)("button",{type:"button",className:"btn-close position-absolute top-0 end-0 m-3",onClick:c,"aria-label":"Close"}),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h2",{className:"modal-title text-center fw-bold text-dark mb-4",id:"paymentModalLabel",children:"Payment"}),(0,l.jsx)("div",{className:"mb-4",children:(0,l.jsx)("h5",{className:"fw-bold text-dark mb-2",children:t.name})}),(0,l.jsxs)("div",{className:"mb-4",children:[(0,l.jsxs)("div",{className:"fs-4 fw-semibold text-dark",children:["Fee:",(0,l.jsxs)("span",{style:{color:"#2e5692"},className:"fw-bold",children:["\u20ac",s]})]}),(0,l.jsx)("ul",{className:"list-group list-group-flush mt-3",children:(0,l.jsx)("li",{className:"list-group-item text-dark ps-0",children:(0,l.jsx)("strong",{children:"1,200 Euros. ONE-TIME. This will include participation in all modules for each company."})})})]})]}),(0,l.jsx)("div",{className:"text-center mb-4",children:(0,l.jsx)("img",{src:"/assets/user/images/cardimage.jpg",alt:"cards",className:"img-fluid rounded",style:{maxWidth:"200px"}})}),(0,l.jsx)(i.Elements,{stripe:d,children:(0,l.jsx)(h,{})})]})})}):null}},1541:(e,t,s)=>{s.d(t,{$K:()=>r,$m:()=>c,CB:()=>o,Jn:()=>p,Q1:()=>l,mH:()=>d,mS:()=>i,mg:()=>n});var a=s(5464);const r=a.default.div`
  display: block;
  padding: 3rem 0; /* py-5 is 3rem top & bottom */
  background-color: #f3f5f7;
`,n=a.default.div`
  background: #fff;
  border-radius: 0px;
  padding: 40px 20px;
  box-shadow: 2px 2px 3px #dddddd;
  @media (max-width: 576px) {
    padding: 40px 15px;
  }
`,o=a.default.div`
  color: #c00000;
  font-size: 30px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  text-decoration: underline;
  display: inline-block;

  @media only screen and (max-width: 991.98px) {
    font-size: 26px;
  }
`,i=a.default.div`
  display: grid;
  gap: 1rem;
  padding:0;

  /* Desktop: 4 columns */
  grid-template-columns: repeat(4, 1fr);

  /* Desktop: 3 columns */
    @media (max-width: 1200px) {
  grid-template-columns: repeat(3, 1fr);
}
  /* Tablet: 2 columns */
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Mobile: 1 column */
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,l=a.default.div`
  cursor: pointer;

  video {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`,d=a.default.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: ${e=>{let{open:t}=e;return t?"flex":"none"}};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,c=a.default.div`
  position: relative;
  width: 80%;
  max-width: 800px;

  video {
    width: 100%;
    border-radius: 8px;
  }
`,p=a.default.button`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  background: #fff;
  border: none;
  color: #000;
  font-size: 30px;
  border-radius: 50%;
  cursor: pointer;
  padding: 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  aspect-ratio: 1;
  line-height: 0;
  padding-bottom: 5px;
`},9001:(e,t,s)=>{s.r(t),s.d(t,{default:()=>p});var a=s(5043),r=s(5136),n=s(1541),o=s(6022),i=s(1508),l=s(4710),d=s(6213),c=s(579);function p(){const[e,t]=(0,a.useState)(!1),[s,p]=(0,a.useState)(!1),[u,m]=(0,a.useState)([]),[x,h]=(0,a.useState)(""),[g,f]=(0,a.useState)(null),y=(0,a.useRef)(),j="https://blueprintcatalyst.com/api/upload/video",v="https://blueprintcatalyst.com/api/user/",b=localStorage.getItem("UserLoginData"),w=JSON.parse(b),[N,S]=(0,a.useState)(""),[k,C]=(0,a.useState)(!1),[E,A]=(0,a.useState)(""),[_,D]=(0,a.useState)("");(0,a.useEffect)((()=>{document.title="Investor Presentation Structure - Expert Advice Video"}),[]),(0,a.useEffect)((()=>{const e=e=>e.preventDefault();document.addEventListener("contextmenu",e);const t=e=>{("F12"===e.key||e.ctrlKey&&e.shiftKey&&"I"===e.key||e.ctrlKey&&"u"===e.key)&&e.preventDefault()};document.addEventListener("keydown",t);const s=setInterval((()=>{const e=window.outerWidth-window.innerWidth>160,t=window.outerHeight-window.innerHeight>160;(e||t)&&(p(!1),f(null))}),1e3);return()=>{document.removeEventListener("contextmenu",e),document.removeEventListener("keydown",t),clearInterval(s)}}),[]),(0,a.useEffect)((()=>{P()}),[]);const P=async()=>{let e={id:"",user_id:w.id};try{(await d.A.post(v+"checkmodulesubscription",e,{headers:{Accept:"application/json","Content-Type":"application/json"}})).data.results.length>0&&D("1")}catch(t){}};(0,a.useEffect)((()=>{T()}),[]);const T=async()=>{let e={user_id:""};try{var t=(await d.A.post("https://blueprintcatalyst.com/api/admin/module/getDataroompayment",e,{headers:{Accept:"application/json","Content-Type":"application/json"}})).data.row;A(t[0].academy_Fee)}catch(s){s.response||(s.request?console.error("Request data:",s.request):console.error("Error message:",s.message))}},q=async e=>{let s={user_id:w.id,video_id:e.id,limit:e.max_limit};try{var a=(await d.A.post(v+"videolimitsave",s,{headers:{Accept:"application/json","Content-Type":"application/json"}})).data;"2"===a.status?(f(null),t(!0),h(a.message),setTimeout((()=>{y.current&&(y.current.pause(),y.current.currentTime=0),h("")}),1800)):(h(""),p(!0),setTimeout((()=>{var e;null===(e=y.current)||void 0===e||e.play()}),100))}catch(r){r.response||(r.request?console.error("Request data:",r.request):console.error("Error message:",r.message))}};(0,a.useEffect)((()=>{I()}),[]);const I=async()=>{let e={user_id:""};try{var t=(await d.A.post("https://blueprintcatalyst.com/api/admin/video/getvideolist",e,{headers:{Accept:"application/json","Content-Type":"application/json"}})).data.results;m(t)}catch(s){s.response||(s.request?console.error("Request data:",s.request):console.error("Error message:",s.message))}},[$,L]=(0,a.useState)(!1);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r.A,{}),(0,c.jsx)(n.$K,{className:"d-block py-5",children:(0,c.jsx)("div",{className:"container-lg",children:(0,c.jsxs)("div",{className:"row justify-content-center",children:[(0,c.jsx)("div",{className:"col-md-3",children:(0,c.jsx)(l.A,{})}),(0,c.jsxs)("div",{className:"col-md-9",children:[x&&(0,c.jsx)("p",{className:e?" mt-3 error_pop":"success_pop mt-3",children:x}),(0,c.jsx)(n.mg,{children:(0,c.jsxs)("div",{className:"d-flex flex-column gap-5",children:[(0,c.jsx)(n.CB,{children:"investor presentation structure - expert advice videos"}),(0,c.jsx)(n.mS,{children:u.map(((e,t)=>{const s=e.video.replace(/\\/g,"/");return(0,c.jsx)(n.Q1,{onClick:()=>(e=>{if(""===_)return void C(!0);f(null),e.id;const t=e.video;f(`${j}/${t}`),q(e)})(e),children:(0,c.jsxs)("video",{muted:!0,onContextMenu:e=>e.preventDefault(),onError:e=>console.error("Error loading video:",e),children:[(0,c.jsx)("source",{src:`${j}/${s}`,type:"video/mp4"}),(0,c.jsx)("p",{children:"Your browser does not support the video tag or the video format."})]})},t)}))})]})})]})]})})}),(0,c.jsx)(n.mH,{open:s,children:(0,c.jsxs)(n.$m,{children:[g&&(0,c.jsxs)("video",{ref:y,className:"advicevideo",controls:!0,autoPlay:!0,controlsList:"nodownload nofullscreen noremoteplayback",onContextMenu:e=>e.preventDefault(),style:{width:"100%"},children:[(0,c.jsx)("source",{src:g,type:"video/mp4"}),"Your browser does not support the video tag."]}),(0,c.jsx)(n.Jn,{onClick:()=>{p(!1),y.current&&(y.current.pause(),y.current.currentTime=0),f(null)},children:"\xd7"})]})}),(0,c.jsx)(o.mO,{children:$&&(0,c.jsx)(o.hJ,{children:(0,c.jsxs)(o.zD,{children:[(0,c.jsx)(o.nj,{onClick:()=>L(!1),children:"\xd7"}),(0,c.jsx)(o.rL,{children:"Payment Details"}),(0,c.jsx)(o.V7,{children:(0,c.jsx)(o.MH,{src:"/assets/user/images/cardimage.jpg",alt:"cards"})}),(0,c.jsxs)(o.lV,{onSubmit:e=>{e.preventDefault(),console.log(e.target),L(!1)},children:[(0,c.jsxs)(o.gE,{children:[(0,c.jsx)(o.JU,{children:"Name"}),(0,c.jsx)(o.pd,{type:"text",name:"name",required:!0,placeholder:"name"})]}),(0,c.jsxs)(o.gE,{children:[(0,c.jsx)(o.JU,{children:"Email"}),(0,c.jsx)(o.pd,{type:"email",name:"email",required:!0,placeholder:"email"})]}),(0,c.jsxs)(o.gE,{children:[(0,c.jsx)(o.JU,{children:"Card Number"}),(0,c.jsx)(o.pd,{type:"text",name:"cardNumber",required:!0,placeholder:"card number",inputMode:"numeric",maxLength:19,onInput:e=>{let t=e.target.value.replace(/\D/g,"");t=t.substring(0,16),t=t.replace(/(.{4})/g,"$1 ").trim(),e.target.value=t}})]}),(0,c.jsxs)(o.fI,{children:[(0,c.jsxs)(o.gE,{children:[(0,c.jsx)(o.JU,{children:"Expiry Date"}),(0,c.jsx)(o.pd,{type:"text",name:"expiry",required:!0,placeholder:"MM/YYYY",inputMode:"numeric",maxLength:7,pattern:"(0[1-9]|1[0-2])\\/\\d{4}",onInput:e=>{let t=e.target.value.replace(/\D/g,"");t.length>6&&(t=t.slice(0,6)),t.length>=3&&(t=t.slice(0,2)+"/"+t.slice(2)),e.target.value=t}})]}),(0,c.jsxs)(o.gE,{children:[(0,c.jsx)(o.JU,{children:"CVV"}),(0,c.jsx)(o.pd,{type:"text",name:"cvv",required:!0,placeholder:"123"})]})]}),(0,c.jsxs)(o.e2,{children:[(0,c.jsx)(o.$n,{type:"button",className:"cancel",onClick:()=>L(!1),children:"Cancel"}),(0,c.jsx)(o.$n,{type:"submit",className:"submit",children:"Pay Now"})]})]})]})})}),(0,c.jsx)(i.A,{moduledata:N,paytmmodule:E,show:k,onClose:()=>C(!1),onSubmit:()=>{}})]})}}}]);
//# sourceMappingURL=9001.ed9ca807.chunk.js.map