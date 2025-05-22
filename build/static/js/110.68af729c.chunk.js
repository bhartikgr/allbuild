"use strict";(self.webpackChunkkeiretsuproject=self.webpackChunkkeiretsuproject||[]).push([[110],{2837:(e,t,o)=>{o.d(t,{$K:()=>d,CB:()=>c,Cd:()=>b,FC:()=>l,Jq:()=>x,R3:()=>w,SD:()=>a,Zw:()=>u,dN:()=>g,hJ:()=>m,mO:()=>i,mg:()=>s,nj:()=>v,pd:()=>y,uM:()=>f,vE:()=>n,z6:()=>p});var r=o(5464);const i=r.default.div`
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
`,n=r.default.span`
  svg {
    width: 16px;
    height: 16px;
    stroke: #9c9c9c;
    stroke-width: 1.2;
    margin-right: 6px;
    vertical-align: middle;
  }
`,a=(r.default.div`
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
`,r.default.div`
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
`),l=r.default.div`
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
`,d=r.default.div`
  display: block;
  padding: 3rem 0; /* py-5 is 3rem top & bottom */
  background-color: #f3f5f7;
  min-height: 100vh;
`,s=r.default.div`
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
`,c=r.default.div`
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
`,p=r.default.div`
  display: flex;
  flex-direction: column;
  gap: 10px 0;
`,u=r.default.div`
  label {
    font-weight: 400;
    cursor: pointer;
    margin-left: 10px;
  }
`,x=(r.default.div`
  > .intl-tel-input.allow-dropdown {
    flex: 1 1 auto;
    width: 1%;
  }
`,r.default.div`
  &.intl-tel-input.allow-dropdown.separate-dial-code.iti-sdc-2 .flag-container {
    margin-left: 35px;
  }

  &.intl-tel-input.allow-dropdown > .flag-container {
    z-index: 4;
  }
`,r.default.input`
  &.intl-tel-input.allow-dropdown.separate-dial-code.iti-sdc-2 #mobile {
    padding-left: 120px;
  }
`,r.default.div`
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
`),f=(r.default.div`
  background-image: url("https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/12.1.6/img/flags.png");

  @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (-o-min-device-pixel-ratio: 2/1),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 192dpi),
    only screen and (min-resolution: 2dppx) {
    background-image: url("https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/12.1.6/img/flags@2x.png");
  }
`,r.default.div`
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
`),h=(r.default.div`
  background: #fff;
  border-radius: 0px;
  padding: 40px 20px;
  box-shadow: 2px 2px 3px #dddddd;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`,r.default.div`
  &.popup {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    container-type: inline-size;
    container-name: video-gallery;
  }
`,r.default.div`
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
`,r.default.button`
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
`,r.default.div`
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
`,r.default.video`
  background-color: black;
  border: none;
`,r.default.div`
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
`,r.default.div`
  position: relative;
  margin-top: 0px;
  text-align: center;

  video {
    aspect-ratio: 16/9;
    object-fit: cover;
    width: 100%;
  }
`,r.default.button`
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
`),g=((0,r.default)(h)`
  left: -60px;

  @media only screen and (max-width: 991.98px) {
    left: -30px;
  }
`,(0,r.default)(h)`
  right: -60px;

  @media only screen and (max-width: 991.98px) {
    right: -30px;
  }
`,r.default.sup`
  color: var(--primary-color);
`),m=r.default.div`
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
`,b=r.default.div`
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
`,v=r.default.button`
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
`,y=r.default.input`
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 16px;
`,w=r.default.button`
  padding: 0.6rem 1.2rem;
  background-color: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`},3579:(e,t,o)=>{o.d(t,{$K:()=>n,C:()=>u,FC:()=>l,SD:()=>a,V4:()=>d,c0:()=>s,i3:()=>f,jl:()=>c,mO:()=>i,rI:()=>x,vT:()=>p});var r=o(5464);const i=r.default.div`
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
`,n=r.default.div`
  display: block;
  padding: 3rem 0; /* py-5 is 3rem top & bottom */
  background-color: #f3f5f7;
  min-height: 100vh;
`,a=r.default.div`
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
`,l=r.default.div`
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
`,d=(r.default.div`
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
`,r.default.div`
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
`),s=r.default.ul`
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
`,c=r.default.li`
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
`,p=r.default.nav`
  // display: ${e=>{let{isOpen:t}=e;return t?"flex":"none"}};
  background: #fff;
  height: 635px;
  overflow-y: auto;
`,u=r.default.button`
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
`,x=r.default.ul`
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
`,f=r.default.span`
  display: inline-block;
  transition: transform 0.3s ease;
  flex-shrink: 0;
  font-size: 20px;
  transform: ${e=>{let{isOpen:t}=e;return t?"rotate(0deg)":"rotate(-90deg)"}};
`},4710:(e,t,o)=>{o.d(t,{A:()=>p});var r=o(5043),i=(o(8421),o(5475)),n=o(3216),a=o(3579),l=o(2983),d=o(6213),s=o(579);const c=[{label:"Subscription Plan",href:"/subscription"},{label:"Modules",dynamicDropdownKey:"modules"},{label:"Investor Presentation Structure - Expert Advice Video",href:"/advicevideos"},{label:"Settings",dropdown:[{label:"Profile Settings",href:"/settings/profile"}]}];function p(e){let{isOpen:t}=e;const[o,p]=(0,r.useState)(!1),[u,x]=(0,r.useState)(""),f=(0,n.Zp)(),[h,g]=(0,r.useState)(null),[m,b]=(0,r.useState)([]);(0,r.useEffect)((()=>{const e=localStorage.getItem("UserLoginData"),t=JSON.parse(e);x(t),null===t&&(localStorage.removeItem("UserLoginData"),f("/login"))}),[]),(0,r.useEffect)((()=>{v();const e=localStorage.getItem("selectedDropdown");e&&g(Number(e))}),[]);const v=async()=>{let e={id:""};try{const t=await d.A.post("https://blueprintcatalyst.com/api/user/getModules",e,{headers:{Accept:"application/json","Content-Type":"application/json"}});b(t.data.results)}catch(t){console.error("Error fetching modules:",t)}};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.V4,{children:(0,s.jsx)("button",{type:"button",onClick:()=>p(!o),children:(0,s.jsx)(l.A,{strokeWidth:2})})}),(0,s.jsx)(a.vT,{isOpen:t,children:(0,s.jsx)(a.c0,{children:c.map(((e,t)=>(0,s.jsx)(a.jl,{children:e.dropdown||e.dynamicDropdownKey?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.C,{onClick:()=>(e=>{const t=h===e?null:e;g(t),localStorage.setItem("selectedDropdown",null!==t?t:"")})(t),children:(0,s.jsxs)("div",{className:"d-flex gap-2 align-items-start",children:[(0,s.jsx)(a.i3,{isOpen:h===t,children:"\u25be"}),e.label]})}),h===t&&(0,s.jsxs)(a.rI,{children:[e.dropdown&&e.dropdown.map(((e,t)=>(0,s.jsx)("li",{children:(0,s.jsx)(i.N_,{to:e.href,children:e.label})},t))),"modules"===e.dynamicDropdownKey&&m.map(((e,t)=>(0,s.jsx)("li",{children:"DATAROOM AND DUE DILIGENCE"===e.name?(0,s.jsx)(i.N_,{to:"/dataroom-Duediligence",children:e.name}):(0,s.jsx)(i.N_,{to:`/moduleone/${e.id}`,children:e.name})},t)))]})]}):(0,s.jsx)(i.N_,{to:e.href,children:e.label})},t)))})})]})}},4939:(e,t,o)=>{o.d(t,{A:()=>n});var r=o(5043),i=o(579);const n=function(e){let{message:t,onClose:o}=e;const[n,a]=(0,r.useState)("show");return(0,r.useEffect)((()=>{const e=setTimeout((()=>{a("")}),3500),t=setTimeout((()=>{o()}),3e3);return()=>{clearTimeout(e),clearTimeout(t)}}),[o]),(0,i.jsxs)("div",{className:`alert alert-danger alert-dismissible fade ${n}`,role:"alert",style:{position:"fixed",top:"20px",right:"20px",zIndex:9999,minWidth:"300px",maxWidth:"90%"},children:[(0,i.jsx)("strong",{children:"Error!"})," ",t,(0,i.jsx)("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:o})]})}},5136:(e,t,o)=>{o.d(t,{A:()=>p});var r=o(5043),i=(o(8421),o(5475)),n=o(3579),a=o(3216),l=o(2983),d=o(5731),s=o(6213),c=o(579);function p(){const[e,t]=(0,r.useState)(""),o=(0,a.Zp)(),[p,u]=(0,r.useState)([]);(0,r.useEffect)((()=>{const e=localStorage.getItem("UserLoginData"),r=JSON.parse(e);t(r),null===r&&(localStorage.removeItem("UserLoginData"),o("/login"))}),[]),(0,r.useEffect)((()=>{x()}),[]);const x=async()=>{let e={id:""};try{const t=await s.A.post("https://blueprintcatalyst.com/api/user/getModules",e,{headers:{Accept:"application/json","Content-Type":"application/json"}});u(t.data.results)}catch(t){}},[f,h]=(0,r.useState)(!1);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(n.SD,{children:(0,c.jsx)("div",{className:"container-lg",children:(0,c.jsxs)("div",{className:"d-flex gap-4 position-relative",children:[(0,c.jsx)(i.N_,{href:"/",className:"logo",children:(0,c.jsx)("img",{src:"/assets/user/images/logo.png",alt:"logo"})}),(0,c.jsx)(n.V4,{children:(0,c.jsx)("button",{type:"button",onClick:()=>{h(!f)},children:(0,c.jsx)(l.A,{strokeWidth:2})})}),(0,c.jsxs)(n.FC,{children:[(0,c.jsx)(d.A,{strokeWidth:1.5}),(0,c.jsxs)("select",{name:"",id:"",className:"form-control",children:[(0,c.jsx)("option",{value:"",children:"Select Language"}),(0,c.jsx)("option",{value:"",children:"Mandarin"}),(0,c.jsx)("option",{value:"",children:"English"})]}),(0,c.jsx)(i.N_,{to:"/logout",className:"btn bg-dark py-2 hoverbge",children:"Logout"})]})]})})})})}},6022:(e,t,o)=>{o.d(t,{$n:()=>h,JU:()=>p,MH:()=>m,V7:()=>g,e2:()=>f,fI:()=>x,gE:()=>c,hJ:()=>n,lV:()=>s,mO:()=>i,nj:()=>l,pd:()=>u,rL:()=>d,zD:()=>a});var r=o(5464);const i=r.default.div`
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
`,n=r.default.div`
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
`,a=r.default.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  position: relative;
`,l=r.default.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #fff;
  color: #000;
  border: none;
  font-size: 20px;
  cursor: pointer;
`,d=r.default.h2`
  font-size: 18px;
  font-weight: 700;
  color: var(--primary-color);
  text-align: center;
  margin-bottom: 10px;
`,s=r.default.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,c=r.default.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,p=r.default.label`
  font-weight: 500;
  font-size: 14px;
`,u=r.default.input`
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
`,x=r.default.div`
  display: flex;
  gap: 20px;
`,f=r.default.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`,h=r.default.button`
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
`,g=r.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 200px; // Adjust width as needed
  margin: 0 auto;
`,m=r.default.img`
  width: 100%; // Makes the image responsive
  height: auto; // Keeps the aspect ratio intact
`},8150:(e,t,o)=>{o.r(t),o.d(t,{default:()=>x});var r=o(5043),i=(o(5015),o(5136)),n=(o(4939),o(8622),o(8421),o(6022)),a=o(2837),l=o(6178),d=o.n(l),s=o(7692),c=(o(3656),o(1173),o(4710)),p=o(6213),u=o(579);function x(){(0,s.ye)(d());const[e,t]=(0,r.useState)([]),[o,l]=(0,r.useState)("monthly"),[x,f]=(0,r.useState)(!1),[h,g]=(0,r.useState)(""),m="https://blueprintcatalyst.com/api/user/",b=localStorage.getItem("UserLoginData"),v=JSON.parse(b);(0,r.useEffect)((()=>{y()}),[]);const y=async()=>{let e={user_id:""};try{var o=(await p.A.post(m+"getallSubscriptionPlan",e,{headers:{Accept:"application/json","Content-Type":"application/json"}})).data.results;console.log(o),t(o)}catch(r){r.response||(r.request?console.error("Request data:",r.request):console.error("Error message:",r.message))}},w=e.filter((e=>"monthly"===e.period)),k=e.filter((e=>"yearly"===e.period));return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a.mO,{children:(0,u.jsxs)("div",{className:"fullpage d-block",children:[(0,u.jsx)(i.A,{}),(0,u.jsx)(a.$K,{className:"d-block py-5",children:(0,u.jsx)("div",{className:"container-lg",children:(0,u.jsxs)("div",{className:"row justify-content-center",children:[(0,u.jsx)("div",{className:"col-md-3",children:(0,u.jsx)(c.A,{})}),(0,u.jsxs)("div",{className:"col-md-9",children:[(0,u.jsxs)("div",{className:"d-flex justify-content-end mb-4 gap-2",role:"group","aria-label":"Billing period toggle",children:[(0,u.jsx)("button",{type:"button",className:"btn btn-outline-dark "+("monthly"===o?"active":""),onClick:()=>l("monthly"),children:"Monthly"}),(0,u.jsx)("button",{type:"button",className:"btn btn-outline-dark "+("yearly"===o?"active":""),onClick:()=>l("yearly"),children:"Yearly"})]}),(0,u.jsx)("div",{className:"row g-4 justify-content-center",children:("monthly"===o?w:k).map((e=>(0,u.jsx)("div",{className:"col-md-4",children:(0,u.jsxs)("div",{className:"card h-100 shadow",children:[(0,u.jsx)("div",{className:"card-header text-center subscriptionplan text-white",children:(0,u.jsx)("h4",{className:"mb-0",children:e.name})}),(0,u.jsxs)("div",{className:"card-body text-center",children:[(0,u.jsxs)("h1",{className:"card-title fw-bold",children:["$",e.price,(0,u.jsxs)("small",{className:"text-muted fs-6",children:["/","monthly"===o?"mo":"year"]})]}),(0,u.jsx)("ul",{className:"list-unstyled mt-3 mb-4",children:(0,u.jsxs)("li",{children:["\u2714 ",e.module," ",1===parseInt(e.module)?"module":"modules"]})}),(0,u.jsxs)("button",{className:"btn subscriptionplan text-white w-100",type:"button",onClick:()=>{return t=e.id,g(t),void f(!0);var t},children:["Choose ",e.name]})]})]})},e.id)))})]})]})})})]})}),x&&(0,u.jsx)(n.hJ,{children:(0,u.jsxs)(n.zD,{children:[(0,u.jsx)(n.nj,{onClick:()=>f(!1),children:"\xd7"}),(0,u.jsx)(n.rL,{children:"Payment"}),(0,u.jsx)(n.V7,{children:(0,u.jsx)(n.MH,{src:"/assets/user/images/cardimage.jpg",alt:"cards"})}),(0,u.jsxs)(n.lV,{onSubmit:async e=>{e.preventDefault(),console.log(e.target);var t=e.target;let o={name:t.name.value,email:t.email.value,cardnumber:t.cardnumber.value,expiry:t.expiry.value,cvv:t.cvv.value,user_id:v.id,plan_id:h};try{(await p.A.post(m+"usersubscription",o,{headers:{Accept:"application/json","Content-Type":"application/json"}})).data.results}catch(r){r.response||(r.request?console.error("Request data:",r.request):console.error("Error message:",r.message))}f(!1)},children:[(0,u.jsxs)(n.gE,{children:[(0,u.jsx)(n.JU,{children:"Name"}),(0,u.jsx)(n.pd,{type:"text",name:"name",required:!0,placeholder:"name"})]}),(0,u.jsxs)(n.gE,{children:[(0,u.jsx)(n.JU,{children:"Email"}),(0,u.jsx)(n.pd,{type:"email",name:"email",required:!0,placeholder:"email"})]}),(0,u.jsxs)(n.gE,{children:[(0,u.jsx)(n.JU,{children:"Card Number"}),(0,u.jsx)(n.pd,{type:"text",name:"cardnumber",required:!0,placeholder:"card number",inputMode:"numeric",maxLength:19,onInput:e=>{let t=e.target.value.replace(/\D/g,"");t=t.substring(0,16),t=t.replace(/(.{4})/g,"$1 ").trim(),e.target.value=t}})]}),(0,u.jsxs)(n.fI,{children:[(0,u.jsxs)(n.gE,{children:[(0,u.jsx)(n.JU,{children:"Expiry Date"}),(0,u.jsx)(n.pd,{type:"text",name:"expiry",required:!0,placeholder:"MM/YYYY",inputMode:"numeric",maxLength:7,pattern:"(0[1-9]|1[0-2])\\/\\d{4}",onInput:e=>{let t=e.target.value.replace(/\D/g,"");t.length>6&&(t=t.slice(0,6)),t.length>=3&&(t=t.slice(0,2)+"/"+t.slice(2)),e.target.value=t}})]}),(0,u.jsxs)(n.gE,{children:[(0,u.jsx)(n.JU,{children:"CVV"}),(0,u.jsx)(n.pd,{type:"text",name:"cvv",required:!0,placeholder:"123"})]})]}),(0,u.jsxs)(n.e2,{children:[(0,u.jsx)(n.$n,{type:"button",className:"cancel",onClick:()=>f(!1),children:"Cancel"}),(0,u.jsx)(n.$n,{type:"submit",className:"submit",children:"Pay Now"})]})]})]})})]})}},8622:(e,t,o)=>{o.d(t,{A:()=>n});var r=o(5043),i=o(579);const n=function(e){let{message:t,onClose:o}=e;const[n,a]=(0,r.useState)("show");return(0,r.useEffect)((()=>{const e=setTimeout((()=>{a("")}),2500),t=setTimeout((()=>{o()}),3e3);return()=>{clearTimeout(e),clearTimeout(t)}}),[o]),(0,i.jsxs)("div",{className:`alert alert-success alert-dismissible fade ${n}`,role:"alert",style:{position:"fixed",top:"20px",right:"20px",zIndex:9999,minWidth:"300px",maxWidth:"90%"},children:[(0,i.jsx)("strong",{children:"Success!"})," ",t,(0,i.jsx)("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:o})]})}}}]);
//# sourceMappingURL=110.68af729c.chunk.js.map