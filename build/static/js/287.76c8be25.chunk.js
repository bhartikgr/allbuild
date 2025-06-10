"use strict";(self.webpackChunkkeiretsuproject=self.webpackChunkkeiretsuproject||[]).push([[287],{4939:(e,t,r)=>{r.d(t,{A:()=>i});var o=r(5043),n=r(579);const i=function(e){let{message:t,onClose:r}=e;const[i,s]=(0,o.useState)("show");return(0,o.useEffect)((()=>{const e=setTimeout((()=>{s("")}),3500),t=setTimeout((()=>{r()}),3e3);return()=>{clearTimeout(e),clearTimeout(t)}}),[r]),(0,n.jsxs)("div",{className:`alert alert-danger alert-dismissible fade ${i}`,role:"alert",style:{position:"fixed",top:"20px",right:"20px",zIndex:9999,minWidth:"300px",maxWidth:"90%"},children:[(0,n.jsx)("strong",{children:"Error!"})," ",t,(0,n.jsx)("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:r})]})}},6022:(e,t,r)=>{r.d(t,{$n:()=>h,JU:()=>p,MH:()=>g,V7:()=>f,e2:()=>m,fI:()=>x,gE:()=>c,hJ:()=>i,lV:()=>l,mO:()=>n,nj:()=>a,pd:()=>u,rL:()=>d,zD:()=>s});var o=r(5464);const n=o.default.div`
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
`,i=o.default.div`
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
`,s=o.default.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  position: relative;
`,a=o.default.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #fff;
  color: #000;
  border: none;
  font-size: 20px;
  cursor: pointer;
`,d=o.default.h2`
  font-size: 18px;
  font-weight: 700;
  color: var(--primary-color);
  text-align: center;
  margin-bottom: 10px;
`,l=o.default.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,c=o.default.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,p=o.default.label`
  font-weight: 500;
  font-size: 14px;
`,u=o.default.input`
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
`,x=o.default.div`
  display: flex;
  gap: 20px;
`,m=o.default.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`,h=o.default.button`
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
`,f=o.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 200px; // Adjust width as needed
  margin: 0 auto;
`,g=o.default.img`
  width: 100%; // Makes the image responsive
  height: auto; // Keeps the aspect ratio intact
`},7708:(e,t,r)=>{r.r(t),r.d(t,{default:()=>b});var o=r(5043);r.p;var n=r(5136),i=r(5464);const s=i.default.div`
  display: block;
  padding: 3rem 0; /* py-5 is 3rem top & bottom */
  background-color: #f3f5f7;
`,a=i.default.div`
  background: #fff;
  border-radius: 0px;
  padding: 40px 20px;
  box-shadow: 2px 2px 3px #dddddd;
  @media (max-width: 576px) {
    padding: 40px 15px;
  }
`,d=i.default.div`
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
`,l=i.default.div`
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
`,c=i.default.div`
  cursor: pointer;

  video {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`,p=i.default.div`
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
`,u=i.default.div`
  position: relative;
  width: 80%;
  max-width: 800px;

  video {
    width: 100%;
    border-radius: 8px;
  }
`,x=i.default.button`
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
`;var m=r(6022),h=r(4710),f=r(6213),g=r(4939),v=r(579);function b(){const[e,t]=(0,o.useState)(!1),[r,i]=(0,o.useState)([]),[b,j]=(0,o.useState)(""),[y,w]=(0,o.useState)(null),k=(0,o.useRef)(),E="https://blueprintcatalyst.com/api/upload/video",C=localStorage.getItem("UserLoginData"),N=JSON.parse(C);(0,o.useEffect)((()=>{document.title="Investor Presentation Structure - Expert Advice Video"}),[]),(0,o.useEffect)((()=>{const e=e=>e.preventDefault();document.addEventListener("contextmenu",e);const r=e=>{("F12"===e.key||e.ctrlKey&&e.shiftKey&&"I"===e.key||e.ctrlKey&&"u"===e.key)&&e.preventDefault()};document.addEventListener("keydown",r);const o=setInterval((()=>{const e=window.outerWidth-window.innerWidth>160,r=window.outerHeight-window.innerHeight>160;(e||r)&&(t(!1),w(null))}),1e3);return()=>{document.removeEventListener("contextmenu",e),document.removeEventListener("keydown",r),clearInterval(o)}}),[]);const D=async e=>{let r={user_id:N.id,video_id:e.id,limit:e.max_limit};try{var o=(await f.A.post("https://blueprintcatalyst.com/api/user/videolimitsave",r,{headers:{Accept:"application/json","Content-Type":"application/json"}})).data;"2"===o.status?(j(o.message),setTimeout((()=>{k.current&&(k.current.pause(),k.current.currentTime=0),T(!0),j("")}),1500)):(j(""),t(!0),setTimeout((()=>{var e;null===(e=k.current)||void 0===e||e.play()}),100))}catch(n){n.response||(n.request?console.error("Request data:",n.request):console.error("Error message:",n.message))}};(0,o.useEffect)((()=>{z()}),[]);const z=async()=>{let e={user_id:""};try{var t=(await f.A.post("https://blueprintcatalyst.com/api/admin/video/getvideolist",e,{headers:{Accept:"application/json","Content-Type":"application/json"}})).data.results;i(t)}catch(r){r.response||(r.request?console.error("Request data:",r.request):console.error("Error message:",r.message))}},[q,T]=(0,o.useState)(!1);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(n.A,{}),(0,v.jsx)(s,{className:"d-block py-5",children:(0,v.jsx)("div",{className:"container-lg",children:(0,v.jsxs)("div",{className:"row justify-content-center",children:[(0,v.jsx)("div",{className:"col-md-3",children:(0,v.jsx)(h.A,{})}),(0,v.jsxs)("div",{className:"col-md-9",children:[b&&(0,v.jsx)(g.A,{message:b,onClose:()=>j("")}),(0,v.jsx)(a,{children:(0,v.jsxs)("div",{className:"d-flex flex-column gap-5",children:[(0,v.jsx)(d,{children:"investor presentation structure - expert advice videos"}),(0,v.jsx)(l,{children:r.map(((e,t)=>{const r=e.video.replace(/\\/g,"/");return(0,v.jsx)(c,{onClick:()=>(e=>{e.id;const t=e.video;w(`${E}/${t}`),D(e)})(e),children:(0,v.jsxs)("video",{muted:!0,onContextMenu:e=>e.preventDefault(),onError:e=>console.error("Error loading video:",e),children:[(0,v.jsx)("source",{src:`${E}/${r}`,type:"video/mp4"}),(0,v.jsx)("p",{children:"Your browser does not support the video tag or the video format."})]})},t)}))})]})})]})]})})}),(0,v.jsx)(p,{open:e,children:(0,v.jsxs)(u,{children:[y&&(0,v.jsxs)("video",{ref:k,className:"advicevideo",controls:!0,autoPlay:!0,controlsList:"nodownload nofullscreen noremoteplayback",onContextMenu:e=>e.preventDefault(),style:{width:"100%"},children:[(0,v.jsx)("source",{src:y,type:"video/mp4"}),"Your browser does not support the video tag."]}),(0,v.jsx)(x,{onClick:()=>{t(!1),console.log(k.current),k.current&&(k.current.pause(),k.current.currentTime=0)},children:"\xd7"})]})}),(0,v.jsx)(m.mO,{children:q&&(0,v.jsx)(m.hJ,{children:(0,v.jsxs)(m.zD,{children:[(0,v.jsx)(m.nj,{onClick:()=>T(!1),children:"\xd7"}),(0,v.jsx)(m.rL,{children:"Payment Details"}),(0,v.jsx)(m.V7,{children:(0,v.jsx)(m.MH,{src:"/assets/user/images/cardimage.jpg",alt:"cards"})}),(0,v.jsxs)(m.lV,{onSubmit:e=>{e.preventDefault(),console.log(e.target),T(!1)},children:[(0,v.jsxs)(m.gE,{children:[(0,v.jsx)(m.JU,{children:"Name"}),(0,v.jsx)(m.pd,{type:"text",name:"name",required:!0,placeholder:"name"})]}),(0,v.jsxs)(m.gE,{children:[(0,v.jsx)(m.JU,{children:"Email"}),(0,v.jsx)(m.pd,{type:"email",name:"email",required:!0,placeholder:"email"})]}),(0,v.jsxs)(m.gE,{children:[(0,v.jsx)(m.JU,{children:"Card Number"}),(0,v.jsx)(m.pd,{type:"text",name:"cardNumber",required:!0,placeholder:"card number",inputMode:"numeric",maxLength:19,onInput:e=>{let t=e.target.value.replace(/\D/g,"");t=t.substring(0,16),t=t.replace(/(.{4})/g,"$1 ").trim(),e.target.value=t}})]}),(0,v.jsxs)(m.fI,{children:[(0,v.jsxs)(m.gE,{children:[(0,v.jsx)(m.JU,{children:"Expiry Date"}),(0,v.jsx)(m.pd,{type:"text",name:"expiry",required:!0,placeholder:"MM/YYYY",inputMode:"numeric",maxLength:7,pattern:"(0[1-9]|1[0-2])\\/\\d{4}",onInput:e=>{let t=e.target.value.replace(/\D/g,"");t.length>6&&(t=t.slice(0,6)),t.length>=3&&(t=t.slice(0,2)+"/"+t.slice(2)),e.target.value=t}})]}),(0,v.jsxs)(m.gE,{children:[(0,v.jsx)(m.JU,{children:"CVV"}),(0,v.jsx)(m.pd,{type:"text",name:"cvv",required:!0,placeholder:"123"})]})]}),(0,v.jsxs)(m.e2,{children:[(0,v.jsx)(m.$n,{type:"button",className:"cancel",onClick:()=>T(!1),children:"Cancel"}),(0,v.jsx)(m.$n,{type:"submit",className:"submit",children:"Pay Now"})]})]})]})})})]})}}}]);
//# sourceMappingURL=287.76c8be25.chunk.js.map