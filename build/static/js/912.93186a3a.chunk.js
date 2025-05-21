"use strict";(self.webpackChunkkeiretsuproject=self.webpackChunkkeiretsuproject||[]).push([[912],{2837:(e,t,o)=>{o.d(t,{$K:()=>s,CB:()=>c,Cd:()=>b,FC:()=>l,Jq:()=>x,R3:()=>y,SD:()=>r,Zw:()=>u,dN:()=>g,hJ:()=>m,mO:()=>n,mg:()=>d,nj:()=>v,pd:()=>w,uM:()=>f,vE:()=>a,z6:()=>p});var i=o(5464);const n=i.default.div`
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
`,a=i.default.span`
  svg {
    width: 16px;
    height: 16px;
    stroke: #9c9c9c;
    stroke-width: 1.2;
    margin-right: 6px;
    vertical-align: middle;
  }
`,r=(i.default.div`
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
`,i.default.div`
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
`),l=i.default.div`
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
`,s=i.default.div`
  display: block;
  padding: 3rem 0; /* py-5 is 3rem top & bottom */
  background-color: #f3f5f7;
  min-height: 100vh;
`,d=i.default.div`
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
`,c=i.default.div`
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
`,p=i.default.div`
  display: flex;
  flex-direction: column;
  gap: 10px 0;
`,u=i.default.div`
  label {
    font-weight: 400;
    cursor: pointer;
    margin-left: 10px;
  }
`,x=(i.default.div`
  > .intl-tel-input.allow-dropdown {
    flex: 1 1 auto;
    width: 1%;
  }
`,i.default.div`
  &.intl-tel-input.allow-dropdown.separate-dial-code.iti-sdc-2 .flag-container {
    margin-left: 35px;
  }

  &.intl-tel-input.allow-dropdown > .flag-container {
    z-index: 4;
  }
`,i.default.input`
  &.intl-tel-input.allow-dropdown.separate-dial-code.iti-sdc-2 #mobile {
    padding-left: 120px;
  }
`,i.default.div`
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
`),f=(i.default.div`
  background-image: url("https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/12.1.6/img/flags.png");

  @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (-o-min-device-pixel-ratio: 2/1),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 192dpi),
    only screen and (min-resolution: 2dppx) {
    background-image: url("https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/12.1.6/img/flags@2x.png");
  }
`,i.default.div`
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
`),h=(i.default.div`
  background: #fff;
  border-radius: 0px;
  padding: 40px 20px;
  box-shadow: 2px 2px 3px #dddddd;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`,i.default.div`
  &.popup {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    container-type: inline-size;
    container-name: video-gallery;
  }
`,i.default.div`
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
`,i.default.button`
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
`,i.default.div`
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
`,i.default.video`
  background-color: black;
  border: none;
`,i.default.div`
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
`,i.default.div`
  position: relative;
  margin-top: 0px;
  text-align: center;

  video {
    aspect-ratio: 16/9;
    object-fit: cover;
    width: 100%;
  }
`,i.default.button`
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
`),g=((0,i.default)(h)`
  left: -60px;

  @media only screen and (max-width: 991.98px) {
    left: -30px;
  }
`,(0,i.default)(h)`
  right: -60px;

  @media only screen and (max-width: 991.98px) {
    right: -30px;
  }
`,i.default.sup`
  color: var(--primary-color);
`),m=i.default.div`
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
`,b=i.default.div`
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
`,v=i.default.button`
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
`,w=i.default.input`
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 16px;
`,y=i.default.button`
  padding: 0.6rem 1.2rem;
  background-color: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`},3579:(e,t,o)=>{o.d(t,{$K:()=>a,C:()=>u,FC:()=>l,SD:()=>r,V4:()=>s,c0:()=>d,i3:()=>f,jl:()=>c,mO:()=>n,rI:()=>x,vT:()=>p});var i=o(5464);const n=i.default.div`
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
`,a=i.default.div`
  display: block;
  padding: 3rem 0; /* py-5 is 3rem top & bottom */
  background-color: #f3f5f7;
  min-height: 100vh;
`,r=i.default.div`
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
`,l=i.default.div`
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
`,s=(i.default.div`
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
`,i.default.div`
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
`),d=i.default.ul`
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
`,c=i.default.li`
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
`,p=i.default.nav`
  // display: ${e=>{let{isOpen:t}=e;return t?"flex":"none"}};
  background: #fff;
  height: 635px;
  overflow-y: auto;
`,u=i.default.button`
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
`,x=i.default.ul`
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
`,f=i.default.span`
  display: inline-block;
  transition: transform 0.3s ease;
  flex-shrink: 0;
  font-size: 20px;
  transform: ${e=>{let{isOpen:t}=e;return t?"rotate(0deg)":"rotate(-90deg)"}};
`},4939:(e,t,o)=>{o.d(t,{A:()=>a});var i=o(5043),n=o(579);const a=function(e){let{message:t,onClose:o}=e;const[a,r]=(0,i.useState)("show");return(0,i.useEffect)((()=>{const e=setTimeout((()=>{r("")}),3500),t=setTimeout((()=>{o()}),3e3);return()=>{clearTimeout(e),clearTimeout(t)}}),[o]),(0,n.jsxs)("div",{className:`alert alert-danger alert-dismissible fade ${a}`,role:"alert",style:{position:"fixed",top:"20px",right:"20px",zIndex:9999,minWidth:"300px",maxWidth:"90%"},children:[(0,n.jsx)("strong",{children:"Error!"})," ",t,(0,n.jsx)("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:o})]})}},8622:(e,t,o)=>{o.d(t,{A:()=>a});var i=o(5043),n=o(579);const a=function(e){let{message:t,onClose:o}=e;const[a,r]=(0,i.useState)("show");return(0,i.useEffect)((()=>{const e=setTimeout((()=>{r("")}),2500),t=setTimeout((()=>{o()}),3e3);return()=>{clearTimeout(e),clearTimeout(t)}}),[o]),(0,n.jsxs)("div",{className:`alert alert-success alert-dismissible fade ${a}`,role:"alert",style:{position:"fixed",top:"20px",right:"20px",zIndex:9999,minWidth:"300px",maxWidth:"90%"},children:[(0,n.jsx)("strong",{children:"Success!"})," ",t,(0,n.jsx)("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:o})]})}},9572:(e,t,o)=>{o.r(t),o.d(t,{default:()=>w});var i=o(5043),n=o(8286),a=(o(5015),o(8421),o(5475)),r=o(3579),l=o(3216),s=o(2983),d=o(5731),c=o(6213),p=o(579);function u(){const[e,t]=(0,i.useState)(""),[o,n]=((0,l.Zp)(),(0,i.useState)([]));const u=localStorage.getItem("UserLoginData"),x=JSON.parse(u);(0,i.useEffect)((()=>{const e=localStorage.getItem("UserLoginData"),o=JSON.parse(e);t(o)}),[]),(0,i.useEffect)((()=>{f()}),[]);const f=async()=>{let e={id:""};try{const t=await c.A.post("http://184.168.31.145:3000/api/user/getModules",e,{headers:{Accept:"application/json","Content-Type":"application/json"}});n(t.data.results)}catch(t){}},[h,g]=(0,i.useState)(!1);return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(r.SD,{children:(0,p.jsx)("div",{className:"container-lg",children:(0,p.jsxs)("div",{className:"d-flex gap-4 position-relative",children:[(0,p.jsx)(a.N_,{href:"/",className:"logo",children:(0,p.jsx)("img",{src:"/assets/user/images/logo.png",alt:"logo"})}),(0,p.jsx)(r.V4,{children:(0,p.jsx)("button",{type:"button",onClick:()=>{g(!h)},children:(0,p.jsx)(s.A,{strokeWidth:2})})}),(0,p.jsxs)(r.FC,{children:[(0,p.jsx)(d.A,{strokeWidth:1.5}),(0,p.jsxs)("select",{name:"",id:"",className:"form-control",children:[(0,p.jsx)("option",{value:"",children:"Select Language"}),(0,p.jsx)("option",{value:"",children:"Mandarin"}),(0,p.jsx)("option",{value:"",children:"English"})]}),null!==x&&(0,p.jsx)(a.N_,{to:"/logout",className:"btn bg-dark py-2 hoverbge",children:"Logout"})]})]})})})})}o(4939),o(8622);var x=o(2837),f=o(6178),h=o.n(f),g=o(7692),m=(o(3656),o(1173));const b=[{label:"Module",href:""},{label:"Modules",dynamicDropdownKey:"modules"}];function v(e){let{isOpen:t}=e;const o=(0,l.zy)().pathname.split("/").pop(),[n,d]=(0,i.useState)(!1),[u,x]=(0,i.useState)(""),[f,h]=((0,l.Zp)(),(0,i.useState)(null)),[g,m]=(0,i.useState)([]),v=localStorage.getItem("UserLoginData"),w=JSON.parse(v);(0,i.useEffect)((()=>{const e=localStorage.getItem("UserLoginData"),t=JSON.parse(e);x(t)}),[]),(0,i.useEffect)((()=>{y();const e=localStorage.getItem("selectedDropdown");e&&h(Number(e))}),[]);const y=async()=>{let e={id:""};try{const t=await c.A.post("http://184.168.31.145:3000/api/user/getModules",e,{headers:{Accept:"application/json","Content-Type":"application/json"}});m(t.data.results)}catch(t){console.error("Error fetching modules:",t)}};return console.log(o),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r.V4,{children:(0,p.jsx)("button",{type:"button",onClick:()=>d(!n),children:(0,p.jsx)(s.A,{strokeWidth:2})})}),(0,p.jsx)(r.vT,{isOpen:t,children:(0,p.jsx)(r.c0,{children:b.map(((e,t)=>(0,p.jsx)(r.jl,{children:e.dropdown||e.dynamicDropdownKey?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r.C,{onClick:()=>(e=>{const t=f===e?null:e;h(t),localStorage.setItem("selectedDropdown",null!==t?t:"")})(t),children:(0,p.jsxs)("div",{className:"d-flex gap-2 align-items-start",children:[(0,p.jsx)(r.i3,{isOpen:f===t,children:"\u25be"}),e.label]})}),f===t&&(0,p.jsxs)(r.rI,{children:[e.dropdown&&e.dropdown.map(((e,t)=>(0,p.jsx)("li",{children:(0,p.jsx)(a.N_,{href:e.href,children:e.label})},t))),"modules"===e.dynamicDropdownKey&&g.map(((e,t)=>(0,p.jsx)("li",{children:(0,p.jsx)(a.N_,{className:o===String(e.id)?"leftside active":"leftside",to:`/moduleone/${e.id}`,children:e.name})},t)))]}),null!==w&&(0,p.jsx)(a.N_,{to:"/dataroom-Duediligence",children:"DataRoom And Due Diligence"}),null!==w&&(0,p.jsx)(a.N_,{to:"/advicevideos",children:"Investor Presentation Structure - Expert Advice Video"})]}):(0,p.jsx)(a.N_,{href:e.href,children:e.label})},t)))})})]})}function w(){(0,l.Zp)();const[e,t]=(0,i.useState)(!1),[o,a]=(0,i.useState)({name:"",email:""}),[r,s]=((0,g.ye)(h()),(0,i.useState)([])),[d,f]=(0,i.useState)(""),[b,w]=(0,i.useState)(""),[y,k]=(0,i.useState)(""),[j,S]=(0,i.useState)(""),[z,N]=(0,i.useState)(null),[C,D]=(0,i.useState)(""),[I,T]=(0,i.useState)(!0),[E,O]=(0,i.useState)(""),[A,_]=(0,i.useState)(""),[F,Z]=(0,i.useState)(""),{id:M}=(0,l.g)(),[$,L]=(0,i.useState)(""),V="http://184.168.31.145:3000/api/user/",J=e=>{a({...o,[e.target.name]:e.target.value})};(0,i.useEffect)((()=>{if(Intl.supportedValuesOf){const e=Intl.supportedValuesOf("timeZone");W(e)}}),[]),(0,i.useEffect)((()=>{(async()=>{let e={id:M};try{const t=await c.A.post(V+"selectModule",e,{headers:{Accept:"application/json","Content-Type":"application/json"}});t.data.results.length>0&&_(t.data.results[0])}catch(t){}})()}),[M]),(0,i.useEffect)((()=>{document.title="Module Page"}),[]);(0,i.useEffect)((()=>{(async()=>{try{const e=await fetch("https://api.ipify.org?format=json"),t=await e.json();f(t.ip)}catch(e){console.error("Failed to fetch IP",e)}})()}),[]);const[K,W]=(0,i.useState)([]),[P,U]=(0,i.useState)(Intl.DateTimeFormat().resolvedOptions().timeZone);(0,i.useEffect)((()=>{if(Intl.supportedValuesOf){const e=Intl.supportedValuesOf("timeZone");W(e)}}),[]),(0,i.useEffect)((()=>{const e=()=>{const e=new Intl.DateTimeFormat("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0,timeZone:P}).format(new Date);O(e)};e();const t=setInterval(e,6e4);return()=>clearInterval(t)}),[P]);const R=new Date;R.setHours(0,0,0,0);return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(x.mO,{children:[(0,p.jsxs)("div",{className:"fullpage d-block",children:[(0,p.jsx)(u,{}),(0,p.jsx)(x.$K,{className:"d-block py-5",children:(0,p.jsx)("div",{className:"container-lg",children:(0,p.jsxs)("div",{className:"row justify-content-center",children:[(0,p.jsx)("div",{className:"col-md-3",children:(0,p.jsx)(v,{})}),(0,p.jsx)("div",{className:"col-md-9",children:(0,p.jsx)("form",{action:"",children:(0,p.jsx)(x.mg,{id:"step5",children:(0,p.jsxs)("div",{className:"d-flex flex-column gap-5",children:[(0,p.jsx)(x.CB,{children:"Keiretsu Meetings"}),(0,p.jsx)("div",{className:"row gy-3",children:(0,p.jsx)("div",{className:"col-md-12 text-center",children:(0,p.jsx)("p",{children:"Please Select Modules"})})})]})})})})]})})})]}),(0,p.jsx)(x.hJ,{show:e,children:(0,p.jsxs)(x.Cd,{children:[(0,p.jsx)(x.nj,{onClick:()=>t(!1),children:"\xd7"}),(0,p.jsx)("form",{onSubmit:async e=>{e.preventDefault();let o={name:e.target.name.value,email:e.target.email.value,timeset:C,module_id:M,ip_address:d,selectedZone:P,selectedSlots:r,description:$};Z(!0);try{const e=await c.A.post(V+"registerforZoom",o,{headers:{Accept:"application/json","Content-Type":"application/json"}});Z(!1);var i=e.data;if("2"===i.status)return S(""),void k(i.message);if("1"===i.status)return k(""),S(i.message),t(!1),void setTimeout((()=>{window.location.reload()}),3e3)}catch(n){}console.log("Form submitted",o)},children:(0,p.jsxs)("div",{className:"d-flex flex-column gap-3",children:[(0,p.jsx)("h3",{className:"text-center",children:"Register"}),(0,p.jsx)("div",{className:"d-block",children:(0,p.jsx)(x.pd,{type:"text",name:"name",placeholder:"Your Name *",value:o.name,onChange:J,required:!0})}),(0,p.jsx)("div",{className:"d-block",children:(0,p.jsx)(x.pd,{type:"email",name:"email",placeholder:"Your Email *",value:o.email,onChange:J,required:!0})}),(0,p.jsx)("div",{className:"d-block",children:(0,p.jsx)(n.Ay,{name:"time",selected:z,onChange:e=>{const t=(0,m.L_)(e,P),o=(0,m.GP)(e,"hh:mm a");D(o),N(t)},showTimeSelect:!0,showTimeSelectOnly:!0,timeIntervals:15,dateFormat:"h:mm aa",placeholderText:"Select Time *"})}),(0,p.jsxs)("div",{className:"d-flex align-items-center justify-content-end gap-2",children:[F&&(0,p.jsx)("div",{className:"spinner-border text-danger",role:"status",style:{width:"1.5rem",height:"1.5rem"},children:(0,p.jsx)("span",{className:"visually-hidden",children:"Loading..."})}),(0,p.jsx)(x.R3,{type:"submit",style:{width:"100%",opacity:F?.5:1,pointerEvents:F?"none":"auto"},children:"Submit For Zoom"})]})]})})]})})]})})}}}]);
//# sourceMappingURL=912.93186a3a.chunk.js.map