/*! For license information please see 445.85a02e8e.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkkeiretsuproject=self.webpackChunkkeiretsuproject||[]).push([[445],{2837:(e,t,a)=>{a.d(t,{$K:()=>s,CB:()=>c,Cd:()=>b,FC:()=>l,Jq:()=>x,R3:()=>y,SD:()=>n,Zw:()=>u,dN:()=>f,hJ:()=>g,mO:()=>i,mg:()=>d,nj:()=>w,pd:()=>v,uM:()=>m,vE:()=>r,z6:()=>p});var o=a(5464);const i=o.default.div`
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
`,r=o.default.span`
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

  .logo {
    display: inline-block;
    width: 140px;
    img {
      width: 100%;
    }
  }
`),l=o.default.div`
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
`,s=o.default.div`
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
`,x=(o.default.div`
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
`),m=(o.default.div`
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
`,w=o.default.button`
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
`,y=o.default.button`
  padding: 0.6rem 1.2rem;
  background-color: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`},3590:(e,t,a)=>{a.d(t,{A:()=>i});a(5043);var o=a(579);const i=function(e){let{message:t,onClose:a}=e;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"alert alert-danger alert-dismissible fade show mt-3",role:"alert",children:[(0,o.jsx)("strong",{children:"Error!"})," ",t,(0,o.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close",onClick:a})]})})}},4459:(e,t,a)=>{a.d(t,{A:()=>o});const o=(0,a(7784).A)("user",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]])},5015:()=>{},5016:()=>{},5445:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var o=a(5043),i=a(3216),r=a(6213),n=a(3590),l=(a(8421),a(5015),a(5016),a(2837)),s=a(5475),d=a(5731),c=a(4459);const p=(0,a(7784).A)("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);var u=a(579);function x(){const e=(0,i.Zp)(),[t,a]=(0,o.useState)(new Date),[x,m]=(0,o.useState)(!1),[h,f]=(0,o.useState)(!1),[g,b]=(0,o.useState)([]),[w,v]=(0,o.useState)(null),[y,k]=(0,o.useState)(null),[j,S]=(0,o.useState)(!0),[z,N]=(0,o.useState)(!1),[_,C]=(0,o.useState)(!1),[A,M]=(0,o.useState)(!1),[E,L]=(0,o.useState)(!1),[$,D]=(0,o.useState)(!1),[J,W]=(0,o.useState)(!1),[q,F]=(0,o.useState)(!1),[O,R]=(0,o.useState)(""),[B,U]=(0,o.useState)([]),[Z,T]=(0,o.useState)(""),[H,I]=(0,o.useState)(""),[K,P]=((0,o.useRef)(null),(0,o.useState)(0)),[V,Y]=(0,o.useState)(0),[G,Q]=(0,o.useState)(0),[X,ee]=(0,o.useState)(0),[te,ae]=(0,o.useState)(0),[oe,ie]=(0,o.useState)(0),[re,ne]=(0,o.useState)(0),[le,se]=(0,o.useState)(0),[de,ce]=(0,o.useState)(""),[pe,ue]=(0,o.useState)("");(0,o.useEffect)((()=>{const e=localStorage.getItem("UserLoginData"),t=JSON.parse(e);ue(t),null!==t&&(window.location.href="/dashboard")}),[pe]);const[xe,me]=(0,o.useState)(1),[he,fe]=(0,o.useState)({first_name:"",last_name:"",role:"",email:"",confirm_email:"",linked_in:"",maimai:"",wechat:"",boss_zhipin:"",phone:"",area:""});(0,o.useEffect)((()=>{ge()}),[]);const ge=async()=>{try{const e=await r.A.post(_e+"getallcountry",he,{headers:{Accept:"application/json","Content-Type":"application/json"}});b(e.data.results)}catch(e){}},[be,we]=(0,o.useState)({emailMatch:""}),[ve,ye]=(0,o.useState)({city_step2:"",country:"",company_name:"",year_registration:"",company_website:"",employee_number:"",company_linkedin:"",company_maimai:"",company_wechat:"",company_zhipin:"",company_mail_address:"",company_state:"",company_city:"",company_postal_code:"",company_country:""}),[ke,je]=(0,o.useState)({}),[Se,ze]=(0,o.useState)({}),Ne=e=>{const{name:t,value:a}=e.target;fe((e=>({...e,[t]:a}))),ye((e=>({...e,[t]:a}))),je((e=>({...e,[t]:a}))),"email"!==t&&"confirm_email"!==t||("email"===t&&a!==he.confirm_email||"confirm_email"===t&&a!==he.email?we((e=>({...e,emailMatch:"Emails do not match."}))):we((e=>({...e,emailMatch:""}))))};var _e="https://blueprintcatalyst.com/api/api/user/";g.map((e=>({value:e.code,label:e.name})));return(0,u.jsx)(l.mO,{children:(0,u.jsxs)("div",{className:"fullpage d-block",children:[(0,u.jsx)(l.SD,{children:(0,u.jsx)("div",{className:"container-lg",children:(0,u.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,u.jsx)("a",{href:"#",className:"logo",children:(0,u.jsx)("img",{src:"/assets/user/images/logo.png",alt:"logo"})}),(0,u.jsxs)(l.FC,{children:[(0,u.jsx)(d.A,{strokeWidth:1.5}),(0,u.jsxs)("select",{name:"",id:"",className:"form-control",children:[(0,u.jsx)("option",{value:"",children:"Select Language"}),(0,u.jsx)("option",{value:"",children:"Mandarin"}),(0,u.jsx)("option",{value:"",children:"English"})]}),(0,u.jsx)(s.N_,{to:"/",className:"logo text-white",children:"Register"})]})]})})}),(0,u.jsx)(l.$K,{className:"d-block py-5",children:(0,u.jsx)("div",{className:"container-lg",children:(0,u.jsx)("div",{className:"row justify-content-center",children:(0,u.jsxs)("div",{className:"col-lg-6 col-md-10",children:[de&&(0,u.jsx)(n.A,{message:de,onClose:()=>ce("")}),(0,u.jsx)("form",{action:"javascript:void(0)",method:"post",onSubmit:async t=>{t.preventDefault();let a={email:he.email,password:he.password};console.log(a);try{const t=(await r.A.post(_e+"userLogin",a,{headers:{Accept:"application/json","Content-Type":"application/json"}})).data;if("2"===t.status)we((e=>({...e,emailMatch:t.message}))),ce(t.message),setTimeout((()=>{ce(""),we((e=>({...e,emailMatch:""})))}),2500);else{we((e=>({...e,emailMatch:""})));let a={id:t.id,email:t.email,first_name:t.first_name,last_name:t.last_name,access_token:t.access_token};localStorage.setItem("UserLoginData",JSON.stringify(a)),e("/home")}}catch(o){o.response&&o.response.data&&o.response.data.message}},children:(0,u.jsx)(l.mg,{id:"step1",children:(0,u.jsxs)("div",{className:"d-flex flex-column gap-5",children:[(0,u.jsx)(l.CB,{children:"Login"}),(0,u.jsxs)("div",{className:"row gy-3",children:[(0,u.jsx)("div",{className:"col-md-12",children:(0,u.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,u.jsxs)("label",{htmlFor:"",children:["Email ",(0,u.jsx)(l.dN,{children:"*"})]}),(0,u.jsxs)(l.Jq,{children:[(0,u.jsx)(c.A,{}),(0,u.jsx)("input",{value:he.email,onChange:Ne,type:"email",name:"email",required:!0,placeholder:""})]})]})}),(0,u.jsx)("div",{className:"col-md-12",children:(0,u.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,u.jsxs)("label",{htmlFor:"",children:["Password ",(0,u.jsx)(l.dN,{children:"*"})]}),(0,u.jsxs)(l.Jq,{children:[(0,u.jsx)(p,{}),(0,u.jsx)("input",{value:he.password,onChange:Ne,type:"text",name:"password",required:!0,placeholder:""})]})]})}),(0,u.jsx)("div",{className:"col-12",children:(0,u.jsx)("div",{className:"d-flex justify-content-end mt-4",children:(0,u.jsx)("div",{className:"flex-shrink-0 gap-4",children:(0,u.jsx)("button",{type:"submit",className:"sbtn nextbtn","data-step":"1",children:"Login"})})})})]})]})})})]})})})})]})})}},5731:(e,t,a)=>{a.d(t,{A:()=>o});const o=(0,a(7784).A)("globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]])},7784:(e,t,a)=>{a.d(t,{A:()=>d});var o=a(5043);const i=e=>{const t=(e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,((e,t,a)=>a?a.toUpperCase():t.toLowerCase())))(e);return t.charAt(0).toUpperCase()+t.slice(1)},r=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(((e,t,a)=>Boolean(e)&&""!==e.trim()&&a.indexOf(e)===t)).join(" ").trim()},n=e=>{for(const t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0};var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const s=(0,o.forwardRef)(((e,t)=>{let{color:a="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:d,className:c="",children:p,iconNode:u,...x}=e;return(0,o.createElement)("svg",{ref:t,...l,width:i,height:i,stroke:a,strokeWidth:d?24*Number(s)/Number(i):s,className:r("lucide",c),...!p&&!n(x)&&{"aria-hidden":"true"},...x},[...u.map((e=>{let[t,a]=e;return(0,o.createElement)(t,a)})),...Array.isArray(p)?p:[p]])})),d=(e,t)=>{const a=(0,o.forwardRef)(((a,n)=>{let{className:l,...d}=a;return(0,o.createElement)(s,{ref:n,iconNode:t,className:r(`lucide-${c=i(e),c.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,l),...d});var c}));return a.displayName=i(e),a}}}]);
//# sourceMappingURL=445.85a02e8e.chunk.js.map