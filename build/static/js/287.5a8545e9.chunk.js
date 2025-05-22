/*! For license information please see 287.5a8545e9.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkkeiretsuproject=self.webpackChunkkeiretsuproject||[]).push([[287],{2983:(e,t,r)=>{r.d(t,{A:()=>o});const o=(0,r(7784).A)("menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]])},3579:(e,t,r)=>{r.d(t,{$K:()=>i,C:()=>u,FC:()=>s,SD:()=>a,V4:()=>l,c0:()=>d,i3:()=>h,jl:()=>c,mO:()=>n,rI:()=>x,vT:()=>p});var o=r(5464);const n=o.default.div`
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
  display: block;
  padding: 3rem 0; /* py-5 is 3rem top & bottom */
  background-color: #f3f5f7;
  min-height: 100vh;
`,a=o.default.div`
  margin-bottom: auto;
  padding: 15px 0;
  background: var(--primary-color);
  .logo {
    display: inline-block;
    width: 140px;
    img {
      width: 100%;
    }
  }
`,s=o.default.div`
  display: flex;
  gap: 15px;
  align-items: center;
  margin-left: auto;
  svg {
    stroke: #fff;
    stroke-width: 1.2; /* thinner stroke if needed */
  }
  a {
    display: inline-block;
    color: #fff;
    text-decoration: none;
    flex-shrink: 0;
    font-size: 13px;
    padding: 0px 10px 6px 10px;
    text-transform: capitalize;

    &:hover {
      background: var(--secondary);
    }
  }
  ,
  select {
    background: #fff;
    color: #111;
    border: none;
    font-size: 14px;
  }
`,l=(o.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(255, 255, 255);
  height: 100%;
  flex: 1;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    background: var(--primary-color);
    left: -15px;
    right: -15px;
    top: 65px;
    z-index: 33;
    display: ${e=>{let{isOpen:t}=e;return t?"flex":"none"}};
  }
`,o.default.div`
  // gap: 15px;
  // button {
  //   margin-left: auto;
  //   background: none;
  //   border: none;
  //   cursor: pointer;
  //   color: #fff;
  //   background: rgb(158, 9, 9);
  display: none;
  //   @media (max-width: 991px) {
  //     display: block;
  //   }
  // }
`),d=o.default.ul`
  display: flex;
  flex-direction: column;
  gap: 1px;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 991px) {
    flex-direction: column;
    gap: 0rem;
    width: 100%;
  }
`,c=o.default.li`
  position: relative;
  a {
    color: #fff;
    width: 100%;
    font-size: 13px;
    line-height: 20px;
    text-decoration: none;
    padding: 10px 10px;
    display: block;
    text-transform: capitalize;
    background: #000000;
    &:hover {
      background: var(--primary-color);
      color: #fff;
    }
  }
`,p=o.default.nav`
  // display: ${e=>{let{isOpen:t}=e;return t?"flex":"none"}};
  background: #fff;
  height: 635px;
  overflow-y: auto;
`,u=o.default.button`
  border: none;
  cursor: pointer;
  color: #fff;
  width: 100%;
  font-size: 13px;
  line-height: 20px;
  text-decoration: none;
  padding: 10px 10px;
  display: block;
  text-transform: capitalize;
  background: #000000;
  text-align: left;
  &:hover {
    background: var(--primary-color);
    color: #fff;
  }
`,x=o.default.ul`
  position: relative;
  top: 100%;
  left: 0;
  // background: rgb(240, 240, 240);
  list-style: none;
  padding: 0;
  // box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
  flex-direction: column;
  gap: 0px;
  a {
    background: rgb(240, 240, 240);
    color: #000;
    border-bottom: 1px solid rgb(223, 223, 223);
    &:hover {
      background: var(--primary-color);
      color: #fff;
    }
  }
`,h=o.default.span`
  display: inline-block;
  transition: transform 0.3s ease;
  flex-shrink: 0;
  font-size: 20px;
  transform: ${e=>{let{isOpen:t}=e;return t?"rotate(0deg)":"rotate(-90deg)"}};
`},4710:(e,t,r)=>{r.d(t,{A:()=>p});var o=r(5043),n=(r(8421),r(5475)),i=r(3216),a=r(3579),s=r(2983),l=r(6213),d=r(579);const c=[{label:"Subscription Plan",href:"/subscription"},{label:"Modules",dynamicDropdownKey:"modules"},{label:"Investor Presentation Structure - Expert Advice Video",href:"/advicevideos"},{label:"Settings",dropdown:[{label:"Profile Settings",href:"/settings/profile"}]}];function p(e){let{isOpen:t}=e;const[r,p]=(0,o.useState)(!1),[u,x]=(0,o.useState)(""),h=(0,i.Zp)(),[m,f]=(0,o.useState)(null),[g,b]=(0,o.useState)([]);(0,o.useEffect)((()=>{const e=localStorage.getItem("UserLoginData"),t=JSON.parse(e);x(t),null===t&&(localStorage.removeItem("UserLoginData"),h("/login"))}),[]),(0,o.useEffect)((()=>{v();const e=localStorage.getItem("selectedDropdown");e&&f(Number(e))}),[]);const v=async()=>{let e={id:""};try{const t=await l.A.post("https://blueprintcatalyst.com/api/api/user/getModules",e,{headers:{Accept:"application/json","Content-Type":"application/json"}});b(t.data.results)}catch(t){console.error("Error fetching modules:",t)}};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.V4,{children:(0,d.jsx)("button",{type:"button",onClick:()=>p(!r),children:(0,d.jsx)(s.A,{strokeWidth:2})})}),(0,d.jsx)(a.vT,{isOpen:t,children:(0,d.jsx)(a.c0,{children:c.map(((e,t)=>(0,d.jsx)(a.jl,{children:e.dropdown||e.dynamicDropdownKey?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.C,{onClick:()=>(e=>{const t=m===e?null:e;f(t),localStorage.setItem("selectedDropdown",null!==t?t:"")})(t),children:(0,d.jsxs)("div",{className:"d-flex gap-2 align-items-start",children:[(0,d.jsx)(a.i3,{isOpen:m===t,children:"\u25be"}),e.label]})}),m===t&&(0,d.jsxs)(a.rI,{children:[e.dropdown&&e.dropdown.map(((e,t)=>(0,d.jsx)("li",{children:(0,d.jsx)(n.N_,{to:e.href,children:e.label})},t))),"modules"===e.dynamicDropdownKey&&g.map(((e,t)=>(0,d.jsx)("li",{children:"DATAROOM AND DUE DILIGENCE"===e.name?(0,d.jsx)(n.N_,{to:"/dataroom-Duediligence",children:e.name}):(0,d.jsx)(n.N_,{to:`/moduleone/${e.id}`,children:e.name})},t)))]})]}):(0,d.jsx)(n.N_,{to:e.href,children:e.label})},t)))})})]})}},4939:(e,t,r)=>{r.d(t,{A:()=>i});var o=r(5043),n=r(579);const i=function(e){let{message:t,onClose:r}=e;const[i,a]=(0,o.useState)("show");return(0,o.useEffect)((()=>{const e=setTimeout((()=>{a("")}),3500),t=setTimeout((()=>{r()}),3e3);return()=>{clearTimeout(e),clearTimeout(t)}}),[r]),(0,n.jsxs)("div",{className:`alert alert-danger alert-dismissible fade ${i}`,role:"alert",style:{position:"fixed",top:"20px",right:"20px",zIndex:9999,minWidth:"300px",maxWidth:"90%"},children:[(0,n.jsx)("strong",{children:"Error!"})," ",t,(0,n.jsx)("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:r})]})}},5136:(e,t,r)=>{r.d(t,{A:()=>p});var o=r(5043),n=(r(8421),r(5475)),i=r(3579),a=r(3216),s=r(2983),l=r(5731),d=r(6213),c=r(579);function p(){const[e,t]=(0,o.useState)(""),r=(0,a.Zp)(),[p,u]=(0,o.useState)([]);(0,o.useEffect)((()=>{const e=localStorage.getItem("UserLoginData"),o=JSON.parse(e);t(o),null===o&&(localStorage.removeItem("UserLoginData"),r("/login"))}),[]),(0,o.useEffect)((()=>{x()}),[]);const x=async()=>{let e={id:""};try{const t=await d.A.post("https://blueprintcatalyst.com/api/api/user/getModules",e,{headers:{Accept:"application/json","Content-Type":"application/json"}});u(t.data.results)}catch(t){}},[h,m]=(0,o.useState)(!1);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(i.SD,{children:(0,c.jsx)("div",{className:"container-lg",children:(0,c.jsxs)("div",{className:"d-flex gap-4 position-relative",children:[(0,c.jsx)(n.N_,{href:"/",className:"logo",children:(0,c.jsx)("img",{src:"/assets/user/images/logo.png",alt:"logo"})}),(0,c.jsx)(i.V4,{children:(0,c.jsx)("button",{type:"button",onClick:()=>{m(!h)},children:(0,c.jsx)(s.A,{strokeWidth:2})})}),(0,c.jsxs)(i.FC,{children:[(0,c.jsx)(l.A,{strokeWidth:1.5}),(0,c.jsxs)("select",{name:"",id:"",className:"form-control",children:[(0,c.jsx)("option",{value:"",children:"Select Language"}),(0,c.jsx)("option",{value:"",children:"Mandarin"}),(0,c.jsx)("option",{value:"",children:"English"})]}),(0,c.jsx)(n.N_,{to:"/logout",className:"btn bg-dark py-2 hoverbge",children:"Logout"})]})]})})})})}},5731:(e,t,r)=>{r.d(t,{A:()=>o});const o=(0,r(7784).A)("globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]])},6022:(e,t,r)=>{r.d(t,{$n:()=>m,JU:()=>p,MH:()=>g,V7:()=>f,e2:()=>h,fI:()=>x,gE:()=>c,hJ:()=>i,lV:()=>d,mO:()=>n,nj:()=>s,pd:()=>u,rL:()=>l,zD:()=>a});var o=r(5464);const n=o.default.div`
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
`,a=o.default.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  position: relative;
`,s=o.default.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #fff;
  color: #000;
  border: none;
  font-size: 20px;
  cursor: pointer;
`,l=o.default.h2`
  font-size: 18px;
  font-weight: 700;
  color: var(--primary-color);
  text-align: center;
  margin-bottom: 10px;
`,d=o.default.form`
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
`,h=o.default.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`,m=o.default.button`
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
`},7708:(e,t,r)=>{r.r(t),r.d(t,{default:()=>v});var o=r(5043);r.p;var n=r(5136),i=r(5464);const a=i.default.div`
  display: block;
  padding: 3rem 0; /* py-5 is 3rem top & bottom */
  background-color: #f3f5f7;
`,s=i.default.div`
  background: #fff;
  border-radius: 0px;
  padding: 40px 20px;
  box-shadow: 2px 2px 3px #dddddd;
  @media (max-width: 576px) {
    padding: 40px 15px;
  }
`,l=i.default.div`
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
`,d=i.default.div`
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
`;var h=r(6022),m=r(4710),f=r(6213),g=r(4939),b=r(579);function v(){const[e,t]=(0,o.useState)(!1),[r,i]=(0,o.useState)([]),[v,y]=(0,o.useState)(""),[j,w]=(0,o.useState)(null),k=(0,o.useRef)(),N="https://blueprintcatalyst.com/api",E=localStorage.getItem("UserLoginData"),A=JSON.parse(E);(0,o.useEffect)((()=>{document.title="Investor Presentation Structure - Expert Advice Video"}),[]),(0,o.useEffect)((()=>{const e=e=>e.preventDefault();document.addEventListener("contextmenu",e);const r=e=>{("F12"===e.key||e.ctrlKey&&e.shiftKey&&"I"===e.key||e.ctrlKey&&"u"===e.key)&&e.preventDefault()};document.addEventListener("keydown",r);const o=setInterval((()=>{const e=window.outerWidth-window.innerWidth>160,r=window.outerHeight-window.innerHeight>160;(e||r)&&(t(!1),w(null))}),1e3);return()=>{document.removeEventListener("contextmenu",e),document.removeEventListener("keydown",r),clearInterval(o)}}),[]);const C=async e=>{let r={user_id:A.id,video_id:e.id,limit:e.max_limit};try{var o=(await f.A.post("https://blueprintcatalyst.com/api/api/user/videolimitsave",r,{headers:{Accept:"application/json","Content-Type":"application/json"}})).data;"2"===o.status?(y(o.message),setTimeout((()=>{k.current&&(k.current.pause(),k.current.currentTime=0),z(!0),y("")}),1500)):(y(""),t(!0),setTimeout((()=>{var e;null===(e=k.current)||void 0===e||e.play()}),100))}catch(n){n.response||(n.request?console.error("Request data:",n.request):console.error("Error message:",n.message))}};(0,o.useEffect)((()=>{S()}),[]);const S=async()=>{let e={user_id:""};try{var t=(await f.A.post("https://blueprintcatalyst.com/api/api/admin/video/getvideolist",e,{headers:{Accept:"application/json","Content-Type":"application/json"}})).data.results;i(t)}catch(r){r.response||(r.request?console.error("Request data:",r.request):console.error("Error message:",r.message))}},[D,z]=(0,o.useState)(!1);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(n.A,{}),(0,b.jsx)(a,{className:"d-block py-5",children:(0,b.jsx)("div",{className:"container-lg",children:(0,b.jsxs)("div",{className:"row justify-content-center",children:[(0,b.jsx)("div",{className:"col-md-3",children:(0,b.jsx)(m.A,{})}),(0,b.jsxs)("div",{className:"col-md-9",children:[v&&(0,b.jsx)(g.A,{message:v,onClose:()=>y("")}),(0,b.jsx)(s,{children:(0,b.jsxs)("div",{className:"d-flex flex-column gap-5",children:[(0,b.jsx)(l,{children:"investor presentation structure - expert advice videos"}),(0,b.jsx)(d,{children:r.map(((e,t)=>{const r=e.video.replace(/\\/g,"/");return(0,b.jsx)(c,{onClick:()=>(e=>{e.id;const t=e.video.replace(/\\/g,"/");w(`${N}/${t}`),C(e)})(e),children:(0,b.jsxs)("video",{muted:!0,onContextMenu:e=>e.preventDefault(),onError:e=>console.error("Error loading video:",e),children:[(0,b.jsx)("source",{src:`${N}/${r}`,type:"video/mp4"}),(0,b.jsx)("p",{children:"Your browser does not support the video tag or the video format."})]})},t)}))})]})})]})]})})}),(0,b.jsx)(p,{open:e,children:(0,b.jsxs)(u,{children:[j&&(0,b.jsxs)("video",{ref:k,className:"advicevideo",controls:!0,autoPlay:!0,controlsList:"nodownload nofullscreen noremoteplayback",onContextMenu:e=>e.preventDefault(),style:{width:"100%"},children:[(0,b.jsx)("source",{src:j,type:"video/mp4"}),"Your browser does not support the video tag."]}),(0,b.jsx)(x,{onClick:()=>{t(!1),console.log(k.current),k.current&&(k.current.pause(),k.current.currentTime=0)},children:"\xd7"})]})}),(0,b.jsx)(h.mO,{children:D&&(0,b.jsx)(h.hJ,{children:(0,b.jsxs)(h.zD,{children:[(0,b.jsx)(h.nj,{onClick:()=>z(!1),children:"\xd7"}),(0,b.jsx)(h.rL,{children:"Payment Details"}),(0,b.jsx)(h.V7,{children:(0,b.jsx)(h.MH,{src:"/assets/user/images/cardimage.jpg",alt:"cards"})}),(0,b.jsxs)(h.lV,{onSubmit:e=>{e.preventDefault(),console.log(e.target),z(!1)},children:[(0,b.jsxs)(h.gE,{children:[(0,b.jsx)(h.JU,{children:"Name"}),(0,b.jsx)(h.pd,{type:"text",name:"name",required:!0,placeholder:"name"})]}),(0,b.jsxs)(h.gE,{children:[(0,b.jsx)(h.JU,{children:"Email"}),(0,b.jsx)(h.pd,{type:"email",name:"email",required:!0,placeholder:"email"})]}),(0,b.jsxs)(h.gE,{children:[(0,b.jsx)(h.JU,{children:"Card Number"}),(0,b.jsx)(h.pd,{type:"text",name:"cardNumber",required:!0,placeholder:"card number",inputMode:"numeric",maxLength:19,onInput:e=>{let t=e.target.value.replace(/\D/g,"");t=t.substring(0,16),t=t.replace(/(.{4})/g,"$1 ").trim(),e.target.value=t}})]}),(0,b.jsxs)(h.fI,{children:[(0,b.jsxs)(h.gE,{children:[(0,b.jsx)(h.JU,{children:"Expiry Date"}),(0,b.jsx)(h.pd,{type:"text",name:"expiry",required:!0,placeholder:"MM/YYYY",inputMode:"numeric",maxLength:7,pattern:"(0[1-9]|1[0-2])\\/\\d{4}",onInput:e=>{let t=e.target.value.replace(/\D/g,"");t.length>6&&(t=t.slice(0,6)),t.length>=3&&(t=t.slice(0,2)+"/"+t.slice(2)),e.target.value=t}})]}),(0,b.jsxs)(h.gE,{children:[(0,b.jsx)(h.JU,{children:"CVV"}),(0,b.jsx)(h.pd,{type:"text",name:"cvv",required:!0,placeholder:"123"})]})]}),(0,b.jsxs)(h.e2,{children:[(0,b.jsx)(h.$n,{type:"button",className:"cancel",onClick:()=>z(!1),children:"Cancel"}),(0,b.jsx)(h.$n,{type:"submit",className:"submit",children:"Pay Now"})]})]})]})})})]})}},7784:(e,t,r)=>{r.d(t,{A:()=>d});var o=r(5043);const n=e=>{const t=(e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,((e,t,r)=>r?r.toUpperCase():t.toLowerCase())))(e);return t.charAt(0).toUpperCase()+t.slice(1)},i=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter(((e,t,r)=>Boolean(e)&&""!==e.trim()&&r.indexOf(e)===t)).join(" ").trim()},a=e=>{for(const t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0};var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const l=(0,o.forwardRef)(((e,t)=>{let{color:r="currentColor",size:n=24,strokeWidth:l=2,absoluteStrokeWidth:d,className:c="",children:p,iconNode:u,...x}=e;return(0,o.createElement)("svg",{ref:t,...s,width:n,height:n,stroke:r,strokeWidth:d?24*Number(l)/Number(n):l,className:i("lucide",c),...!p&&!a(x)&&{"aria-hidden":"true"},...x},[...u.map((e=>{let[t,r]=e;return(0,o.createElement)(t,r)})),...Array.isArray(p)?p:[p]])})),d=(e,t)=>{const r=(0,o.forwardRef)(((r,a)=>{let{className:s,...d}=r;return(0,o.createElement)(l,{ref:a,iconNode:t,className:i(`lucide-${c=n(e),c.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,s),...d});var c}));return r.displayName=n(e),r}}}]);
//# sourceMappingURL=287.5a8545e9.chunk.js.map