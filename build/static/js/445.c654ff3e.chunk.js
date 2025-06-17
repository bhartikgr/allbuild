/*! For license information please see 445.c654ff3e.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkkeiretsuproject=self.webpackChunkkeiretsuproject||[]).push([[445],{2837:(e,t,o)=>{o.d(t,{$K:()=>d,CB:()=>c,Cd:()=>b,FC:()=>l,Jq:()=>u,R3:()=>y,SD:()=>r,Zw:()=>x,dN:()=>g,hJ:()=>h,mO:()=>i,mg:()=>s,nj:()=>w,pd:()=>v,uM:()=>m,vE:()=>n,z6:()=>p});var a=o(5464);const i=a.default.div`
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
`,n=a.default.span`
  svg {
    width: 16px;
    height: 16px;
    stroke: #9c9c9c;
    stroke-width: 1.2;
    margin-right: 6px;
    vertical-align: middle;
  }
`,r=(a.default.div`
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
`,a.default.div`
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
`),l=a.default.div`
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
`,d=a.default.div`
  display: block;
  padding: 3rem 0; /* py-5 is 3rem top & bottom */
  background-color: #f3f5f7;
  min-height: 100vh;
`,s=a.default.div`
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
`,c=a.default.div`
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
`,p=a.default.div`
  display: flex;
  flex-direction: column;
  gap: 10px 0;
`,x=a.default.div`
  label {
    font-weight: 400;
    cursor: pointer;
    margin-left: 10px;
  }
`,u=(a.default.div`
  > .intl-tel-input.allow-dropdown {
    flex: 1 1 auto;
    width: 1%;
  }
`,a.default.div`
  &.intl-tel-input.allow-dropdown.separate-dial-code.iti-sdc-2 .flag-container {
    margin-left: 35px;
  }

  &.intl-tel-input.allow-dropdown > .flag-container {
    z-index: 4;
  }
`,a.default.input`
  &.intl-tel-input.allow-dropdown.separate-dial-code.iti-sdc-2 #mobile {
    padding-left: 120px;
  }
`,a.default.div`
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
`),m=(a.default.div`
  background-image: url("https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/12.1.6/img/flags.png");

  @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (-o-min-device-pixel-ratio: 2/1),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 192dpi),
    only screen and (min-resolution: 2dppx) {
    background-image: url("https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/12.1.6/img/flags@2x.png");
  }
`,a.default.div`
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
`),f=(a.default.div`
  background: #fff;
  border-radius: 0px;
  padding: 40px 20px;
  box-shadow: 2px 2px 3px #dddddd;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`,a.default.div`
  &.popup {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    container-type: inline-size;
    container-name: video-gallery;
  }
`,a.default.div`
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
`,a.default.button`
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
`,a.default.div`
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
`,a.default.video`
  background-color: black;
  border: none;
`,a.default.div`
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
`,a.default.div`
  position: relative;
  margin-top: 0px;
  text-align: center;

  video {
    aspect-ratio: 16/9;
    object-fit: cover;
    width: 100%;
  }
`,a.default.button`
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
`),g=((0,a.default)(f)`
  left: -60px;

  @media only screen and (max-width: 991.98px) {
    left: -30px;
  }
`,(0,a.default)(f)`
  right: -60px;

  @media only screen and (max-width: 991.98px) {
    right: -30px;
  }
`,a.default.sup`
  color: var(--primary-color);
`),h=a.default.div`
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
`,b=a.default.div`
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
`,w=a.default.button`
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
`,v=a.default.input`
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 16px;
`,y=a.default.button`
  padding: 0.6rem 1.2rem;
  background-color: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`},3590:(e,t,o)=>{o.d(t,{A:()=>i});o(5043);var a=o(579);const i=function(e){let{message:t,onClose:o}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"alert alert-danger alert-dismissible fade show mt-3",role:"alert",children:[(0,a.jsx)("strong",{children:"Error!"})," ",t,(0,a.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close",onClick:o})]})})}},4459:(e,t,o)=>{o.d(t,{A:()=>a});const a=(0,o(7784).A)("user",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]])},5015:()=>{},5016:()=>{},5445:(e,t,o)=>{o.r(t),o.d(t,{default:()=>x});var a=o(5043),i=o(3216),n=o(6213),r=o(3590),l=(o(8421),o(5015),o(5016),o(2837)),d=o(5475),s=o(4459);const c=(0,o(7784).A)("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);var p=o(579);function x(){const e=(0,i.Zp)(),[t,o]=(0,a.useState)([]);(0,a.useRef)(null);document.title="Login Page";const[x,u]=(0,a.useState)(""),[m,f]=(0,a.useState)("");(0,a.useEffect)((()=>{const e=localStorage.getItem("UserLoginData"),t=JSON.parse(e);f(t),null!==t&&(window.location.href="/dataroom-Duediligence")}),[m]);const[g,h]=(0,a.useState)(1),[b,w]=(0,a.useState)({first_name:"",last_name:"",role:"",email:"",confirm_email:"",linked_in:"",maimai:"",wechat:"",boss_zhipin:"",phone:"",area:""});(0,a.useEffect)((()=>{v()}),[]);const v=async()=>{try{const e=await n.A.post(M+"getallcountry",b,{headers:{Accept:"application/json","Content-Type":"application/json"}});o(e.data.results)}catch(e){}},[y,k]=(0,a.useState)({emailMatch:""}),[j,z]=(0,a.useState)({city_step2:"",country:"",company_name:"",year_registration:"",company_website:"",employee_number:"",company_linkedin:"",company_maimai:"",company_wechat:"",company_zhipin:"",company_mail_address:"",company_state:"",company_city:"",company_postal_code:"",company_country:""}),[_,N]=(0,a.useState)({}),[S,C]=(0,a.useState)({}),A=e=>{const{name:t,value:o}=e.target;w((e=>({...e,[t]:o}))),z((e=>({...e,[t]:o}))),N((e=>({...e,[t]:o}))),"email"!==t&&"confirm_email"!==t||("email"===t&&o!==b.confirm_email||"confirm_email"===t&&o!==b.email?k((e=>({...e,emailMatch:"Emails do not match."}))):k((e=>({...e,emailMatch:""}))))};var M="https://blueprintcatalyst.com//api/user/";t.map((e=>({value:e.code,label:e.name})));return(0,p.jsx)(l.mO,{children:(0,p.jsxs)("div",{className:"fullpage d-block",children:[(0,p.jsx)(l.SD,{children:(0,p.jsx)("div",{className:"container-lg",children:(0,p.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,p.jsx)("a",{href:"/",className:"logo",children:(0,p.jsx)("img",{src:"/logos/logo.png",alt:"logo"})}),(0,p.jsx)(l.FC,{children:(0,p.jsx)(d.N_,{to:"/register",className:"logo text-white",children:"Register"})})]})})}),(0,p.jsx)(l.$K,{className:"d-block py-5",children:(0,p.jsx)("div",{className:"container-lg",children:(0,p.jsx)("div",{className:"row justify-content-center",children:(0,p.jsxs)("div",{className:"col-lg-6 col-md-10",children:[x&&(0,p.jsx)(r.A,{message:x,onClose:()=>u("")}),(0,p.jsx)("form",{action:"javascript:void(0)",method:"post",onSubmit:async t=>{t.preventDefault();let o={email:b.email,password:b.password};console.log(o);try{const t=(await n.A.post(M+"userLogin",o,{headers:{Accept:"application/json","Content-Type":"application/json"}})).data;if("2"===t.status)k((e=>({...e,emailMatch:t.message}))),u(t.message),setTimeout((()=>{u(""),k((e=>({...e,emailMatch:""})))}),2500);else{k((e=>({...e,emailMatch:""})));let o={id:t.id,email:t.email,first_name:t.first_name,last_name:t.last_name,access_token:t.access_token};localStorage.setItem("UserLoginData",JSON.stringify(o)),e("/dataroom-Duediligence")}}catch(a){a.response&&a.response.data&&a.response.data.message}},children:(0,p.jsx)(l.mg,{id:"step1",children:(0,p.jsxs)("div",{className:"d-flex flex-column gap-5",children:[(0,p.jsx)(l.CB,{children:"Login"}),(0,p.jsxs)("div",{className:"row gy-3",children:[(0,p.jsx)("div",{className:"col-md-12",children:(0,p.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,p.jsxs)("label",{htmlFor:"",children:["Email ",(0,p.jsx)(l.dN,{children:"*"})]}),(0,p.jsxs)(l.Jq,{children:[(0,p.jsx)(s.A,{}),(0,p.jsx)("input",{value:b.email,onChange:A,type:"email",name:"email",required:!0,placeholder:""})]})]})}),(0,p.jsx)("div",{className:"col-md-12",children:(0,p.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,p.jsxs)("label",{htmlFor:"",children:["Password ",(0,p.jsx)(l.dN,{children:"*"})]}),(0,p.jsxs)(l.Jq,{children:[(0,p.jsx)(c,{}),(0,p.jsx)("input",{value:b.password,onChange:A,type:"text",name:"password",required:!0,placeholder:""})]})]})}),(0,p.jsx)("div",{className:"col-12",children:(0,p.jsx)("div",{className:"d-flex justify-content-end mt-4",children:(0,p.jsx)("div",{className:"flex-shrink-0 gap-4",children:(0,p.jsx)("button",{type:"submit",className:"sbtn nextbtn","data-step":"1",children:"Login"})})})})]})]})})})]})})})})]})})}}}]);
//# sourceMappingURL=445.c654ff3e.chunk.js.map