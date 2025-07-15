"use strict";(self.webpackChunkkeiretsuproject=self.webpackChunkkeiretsuproject||[]).push([[9001],{1541:(e,t,r)=>{r.d(t,{$K:()=>n,$m:()=>c,CB:()=>a,Jn:()=>p,Q1:()=>d,mH:()=>l,mS:()=>o,mg:()=>i});var s=r(5464);const n=s.default.div`
  display: block;
  padding: 3rem 0; /* py-5 is 3rem top & bottom */
  background-color: #f3f5f7;
`,i=s.default.div`
  background: #fff;
  border-radius: 0px;
  padding: 40px 20px;
  box-shadow: 2px 2px 3px #dddddd;
  @media (max-width: 576px) {
    padding: 40px 15px;
  }
`,a=s.default.div`
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
`,o=s.default.div`
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
`,d=s.default.div`
  cursor: pointer;

  video {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`,l=s.default.div`
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
`,c=s.default.div`
  position: relative;
  width: 80%;
  max-width: 800px;

  video {
    width: 100%;
    border-radius: 8px;
  }
`,p=s.default.button`
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
`},9001:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var s=r(5043),n=r(5136),i=r(1541),a=r(6022),o=r(4710),d=r(6213),l=r(579);function c(){const[e,t]=(0,s.useState)(!1),[r,c]=(0,s.useState)(!1),[p,u]=(0,s.useState)([]),[m,x]=(0,s.useState)(""),[h,g]=(0,s.useState)(null),v=(0,s.useRef)(),j="https://blueprintcatalyst.com/api/upload/video",f=localStorage.getItem("UserLoginData"),y=JSON.parse(f);(0,s.useEffect)((()=>{document.title="Investor Presentation Structure - Expert Advice Video"}),[]),(0,s.useEffect)((()=>{const e=e=>e.preventDefault();document.addEventListener("contextmenu",e);const t=e=>{("F12"===e.key||e.ctrlKey&&e.shiftKey&&"I"===e.key||e.ctrlKey&&"u"===e.key)&&e.preventDefault()};document.addEventListener("keydown",t);const r=setInterval((()=>{const e=window.outerWidth-window.innerWidth>160,t=window.outerHeight-window.innerHeight>160;(e||t)&&(c(!1),g(null))}),1e3);return()=>{document.removeEventListener("contextmenu",e),document.removeEventListener("keydown",t),clearInterval(r)}}),[]);const b=async e=>{let r={user_id:y.id,video_id:e.id,limit:e.max_limit};try{var s=(await d.A.post("https://blueprintcatalyst.com/api/user/videolimitsave",r,{headers:{Accept:"application/json","Content-Type":"application/json"}})).data;"2"===s.status?(t(!0),x(s.message),setTimeout((()=>{v.current&&(v.current.pause(),v.current.currentTime=0),x("")}),1800)):(x(""),c(!0),setTimeout((()=>{var e;null===(e=v.current)||void 0===e||e.play()}),100))}catch(n){n.response||(n.request?console.error("Request data:",n.request):console.error("Error message:",n.message))}};(0,s.useEffect)((()=>{w()}),[]);const w=async()=>{let e={user_id:""};try{var t=(await d.A.post("https://blueprintcatalyst.com/api/admin/video/getvideolist",e,{headers:{Accept:"application/json","Content-Type":"application/json"}})).data.results;u(t)}catch(r){r.response||(r.request?console.error("Request data:",r.request):console.error("Error message:",r.message))}},[k,E]=(0,s.useState)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.A,{}),(0,l.jsx)(i.$K,{className:"d-block py-5",children:(0,l.jsx)("div",{className:"container-lg",children:(0,l.jsxs)("div",{className:"row justify-content-center",children:[(0,l.jsx)("div",{className:"col-md-3",children:(0,l.jsx)(o.A,{})}),(0,l.jsxs)("div",{className:"col-md-9",children:[m&&(0,l.jsx)("p",{className:e?" mt-3 error_pop":"success_pop mt-3",children:m}),(0,l.jsx)(i.mg,{children:(0,l.jsxs)("div",{className:"d-flex flex-column gap-5",children:[(0,l.jsx)(i.CB,{children:"investor presentation structure - expert advice videos"}),(0,l.jsx)(i.mS,{children:p.map(((e,t)=>{const r=e.video.replace(/\\/g,"/");return(0,l.jsx)(i.Q1,{onClick:()=>(e=>{e.id;const t=e.video;g(`${j}/${t}`),b(e)})(e),children:(0,l.jsxs)("video",{muted:!0,onContextMenu:e=>e.preventDefault(),onError:e=>console.error("Error loading video:",e),children:[(0,l.jsx)("source",{src:`${j}/${r}`,type:"video/mp4"}),(0,l.jsx)("p",{children:"Your browser does not support the video tag or the video format."})]})},t)}))})]})})]})]})})}),(0,l.jsx)(i.mH,{open:r,children:(0,l.jsxs)(i.$m,{children:[h&&(0,l.jsxs)("video",{ref:v,className:"advicevideo",controls:!0,autoPlay:!0,controlsList:"nodownload nofullscreen noremoteplayback",onContextMenu:e=>e.preventDefault(),style:{width:"100%"},children:[(0,l.jsx)("source",{src:h,type:"video/mp4"}),"Your browser does not support the video tag."]}),(0,l.jsx)(i.Jn,{onClick:()=>{c(!1),v.current&&(v.current.pause(),v.current.currentTime=0)},children:"\xd7"})]})}),(0,l.jsx)(a.mO,{children:k&&(0,l.jsx)(a.hJ,{children:(0,l.jsxs)(a.zD,{children:[(0,l.jsx)(a.nj,{onClick:()=>E(!1),children:"\xd7"}),(0,l.jsx)(a.rL,{children:"Payment Details"}),(0,l.jsx)(a.V7,{children:(0,l.jsx)(a.MH,{src:"/assets/user/images/cardimage.jpg",alt:"cards"})}),(0,l.jsxs)(a.lV,{onSubmit:e=>{e.preventDefault(),console.log(e.target),E(!1)},children:[(0,l.jsxs)(a.gE,{children:[(0,l.jsx)(a.JU,{children:"Name"}),(0,l.jsx)(a.pd,{type:"text",name:"name",required:!0,placeholder:"name"})]}),(0,l.jsxs)(a.gE,{children:[(0,l.jsx)(a.JU,{children:"Email"}),(0,l.jsx)(a.pd,{type:"email",name:"email",required:!0,placeholder:"email"})]}),(0,l.jsxs)(a.gE,{children:[(0,l.jsx)(a.JU,{children:"Card Number"}),(0,l.jsx)(a.pd,{type:"text",name:"cardNumber",required:!0,placeholder:"card number",inputMode:"numeric",maxLength:19,onInput:e=>{let t=e.target.value.replace(/\D/g,"");t=t.substring(0,16),t=t.replace(/(.{4})/g,"$1 ").trim(),e.target.value=t}})]}),(0,l.jsxs)(a.fI,{children:[(0,l.jsxs)(a.gE,{children:[(0,l.jsx)(a.JU,{children:"Expiry Date"}),(0,l.jsx)(a.pd,{type:"text",name:"expiry",required:!0,placeholder:"MM/YYYY",inputMode:"numeric",maxLength:7,pattern:"(0[1-9]|1[0-2])\\/\\d{4}",onInput:e=>{let t=e.target.value.replace(/\D/g,"");t.length>6&&(t=t.slice(0,6)),t.length>=3&&(t=t.slice(0,2)+"/"+t.slice(2)),e.target.value=t}})]}),(0,l.jsxs)(a.gE,{children:[(0,l.jsx)(a.JU,{children:"CVV"}),(0,l.jsx)(a.pd,{type:"text",name:"cvv",required:!0,placeholder:"123"})]})]}),(0,l.jsxs)(a.e2,{children:[(0,l.jsx)(a.$n,{type:"button",className:"cancel",onClick:()=>E(!1),children:"Cancel"}),(0,l.jsx)(a.$n,{type:"submit",className:"submit",children:"Pay Now"})]})]})]})})})]})}}}]);
//# sourceMappingURL=9001.73de7333.chunk.js.map