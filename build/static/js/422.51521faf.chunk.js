/*! For license information please see 422.51521faf.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkkeiretsuproject=self.webpackChunkkeiretsuproject||[]).push([[422],{2837:(e,t,o)=>{o.d(t,{$K:()=>s,CB:()=>c,Cd:()=>b,FC:()=>l,Jq:()=>x,R3:()=>j,SD:()=>r,Zw:()=>u,dN:()=>g,hJ:()=>m,mO:()=>i,mg:()=>d,nj:()=>v,pd:()=>y,uM:()=>h,vE:()=>a,z6:()=>p});var n=o(5464);const i=n.default.div`
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
`,a=n.default.span`
  svg {
    width: 16px;
    height: 16px;
    stroke: #9c9c9c;
    stroke-width: 1.2;
    margin-right: 6px;
    vertical-align: middle;
  }
`,r=(n.default.div`
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
`,n.default.div`
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
`),l=n.default.div`
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
`,s=n.default.div`
  display: block;
  padding: 3rem 0; /* py-5 is 3rem top & bottom */
  background-color: #f3f5f7;
  min-height: 100vh;
`,d=n.default.div`
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
`,c=n.default.div`
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
`,p=n.default.div`
  display: flex;
  flex-direction: column;
  gap: 10px 0;
`,u=n.default.div`
  label {
    font-weight: 400;
    cursor: pointer;
    margin-left: 10px;
  }
`,x=(n.default.div`
  > .intl-tel-input.allow-dropdown {
    flex: 1 1 auto;
    width: 1%;
  }
`,n.default.div`
  &.intl-tel-input.allow-dropdown.separate-dial-code.iti-sdc-2 .flag-container {
    margin-left: 35px;
  }

  &.intl-tel-input.allow-dropdown > .flag-container {
    z-index: 4;
  }
`,n.default.input`
  &.intl-tel-input.allow-dropdown.separate-dial-code.iti-sdc-2 #mobile {
    padding-left: 120px;
  }
`,n.default.div`
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
`),h=(n.default.div`
  background-image: url("https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/12.1.6/img/flags.png");

  @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (-o-min-device-pixel-ratio: 2/1),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 192dpi),
    only screen and (min-resolution: 2dppx) {
    background-image: url("https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/12.1.6/img/flags@2x.png");
  }
`,n.default.div`
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
`),f=(n.default.div`
  background: #fff;
  border-radius: 0px;
  padding: 40px 20px;
  box-shadow: 2px 2px 3px #dddddd;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`,n.default.div`
  &.popup {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    container-type: inline-size;
    container-name: video-gallery;
  }
`,n.default.div`
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
`,n.default.button`
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
`,n.default.div`
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
`,n.default.video`
  background-color: black;
  border: none;
`,n.default.div`
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
`,n.default.div`
  position: relative;
  margin-top: 0px;
  text-align: center;

  video {
    aspect-ratio: 16/9;
    object-fit: cover;
    width: 100%;
  }
`,n.default.button`
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
`),g=((0,n.default)(f)`
  left: -60px;

  @media only screen and (max-width: 991.98px) {
    left: -30px;
  }
`,(0,n.default)(f)`
  right: -60px;

  @media only screen and (max-width: 991.98px) {
    right: -30px;
  }
`,n.default.sup`
  color: var(--primary-color);
`),m=n.default.div`
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
`,b=n.default.div`
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
`,v=n.default.button`
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
`,y=n.default.input`
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 16px;
`,j=n.default.button`
  padding: 0.6rem 1.2rem;
  background-color: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`},3579:(e,t,o)=>{o.d(t,{$K:()=>a,C:()=>u,FC:()=>l,SD:()=>r,V4:()=>s,c0:()=>d,i3:()=>h,jl:()=>c,mO:()=>i,rI:()=>x,vT:()=>p});var n=o(5464);const i=n.default.div`
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
`,a=n.default.div`
  display: block;
  padding: 3rem 0; /* py-5 is 3rem top & bottom */
  background-color: #f3f5f7;
  min-height: 100vh;
`,r=n.default.div`
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
`,l=n.default.div`
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
`,s=(n.default.div`
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
`,n.default.div`
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
`),d=n.default.ul`
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
`,c=n.default.li`
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
`,p=n.default.nav`
  // display: ${e=>{let{isOpen:t}=e;return t?"flex":"none"}};
  background: #fff;
  height: 635px;
  overflow-y: auto;
`,u=n.default.button`
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
`,x=n.default.ul`
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
`,h=n.default.span`
  display: inline-block;
  transition: transform 0.3s ease;
  flex-shrink: 0;
  font-size: 20px;
  transform: ${e=>{let{isOpen:t}=e;return t?"rotate(0deg)":"rotate(-90deg)"}};
`},4710:(e,t,o)=>{o.d(t,{A:()=>p});var n=o(5043),i=(o(8421),o(5475)),a=o(3216),r=o(3579),l=o(2983),s=o(6213),d=o(579);const c=[{label:"Subscription Plan",href:"/subscription"},{label:"Modules",dynamicDropdownKey:"modules"},{label:"Investor Presentation Structure - Expert Advice Video",href:"/advicevideos"},{label:"Settings",dropdown:[{label:"Profile Settings",href:"/settings/profile"}]}];function p(e){let{isOpen:t}=e;const[o,p]=(0,n.useState)(!1),[u,x]=(0,n.useState)(""),h=(0,a.Zp)(),[f,g]=(0,n.useState)(null),[m,b]=(0,n.useState)([]);(0,n.useEffect)((()=>{const e=localStorage.getItem("UserLoginData"),t=JSON.parse(e);x(t),null===t&&(localStorage.removeItem("UserLoginData"),h("/login"))}),[]),(0,n.useEffect)((()=>{v();const e=localStorage.getItem("selectedDropdown");e&&g(Number(e))}),[]);const v=async()=>{let e={id:""};try{const t=await s.A.post("https://blueprintcatalyst.com/api/api/user/getModules",e,{headers:{Accept:"application/json","Content-Type":"application/json"}});b(t.data.results)}catch(t){console.error("Error fetching modules:",t)}};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.V4,{children:(0,d.jsx)("button",{type:"button",onClick:()=>p(!o),children:(0,d.jsx)(l.A,{strokeWidth:2})})}),(0,d.jsx)(r.vT,{isOpen:t,children:(0,d.jsx)(r.c0,{children:c.map(((e,t)=>(0,d.jsx)(r.jl,{children:e.dropdown||e.dynamicDropdownKey?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.C,{onClick:()=>(e=>{const t=f===e?null:e;g(t),localStorage.setItem("selectedDropdown",null!==t?t:"")})(t),children:(0,d.jsxs)("div",{className:"d-flex gap-2 align-items-start",children:[(0,d.jsx)(r.i3,{isOpen:f===t,children:"\u25be"}),e.label]})}),f===t&&(0,d.jsxs)(r.rI,{children:[e.dropdown&&e.dropdown.map(((e,t)=>(0,d.jsx)("li",{children:(0,d.jsx)(i.N_,{to:e.href,children:e.label})},t))),"modules"===e.dynamicDropdownKey&&m.map(((e,t)=>(0,d.jsx)("li",{children:"DATAROOM AND DUE DILIGENCE"===e.name?(0,d.jsx)(i.N_,{to:"/dataroom-Duediligence",children:e.name}):(0,d.jsx)(i.N_,{to:`/moduleone/${e.id}`,children:e.name})},t)))]})]}):(0,d.jsx)(i.N_,{to:e.href,children:e.label})},t)))})})]})}},4939:(e,t,o)=>{o.d(t,{A:()=>a});var n=o(5043),i=o(579);const a=function(e){let{message:t,onClose:o}=e;const[a,r]=(0,n.useState)("show");return(0,n.useEffect)((()=>{const e=setTimeout((()=>{r("")}),3500),t=setTimeout((()=>{o()}),3e3);return()=>{clearTimeout(e),clearTimeout(t)}}),[o]),(0,i.jsxs)("div",{className:`alert alert-danger alert-dismissible fade ${a}`,role:"alert",style:{position:"fixed",top:"20px",right:"20px",zIndex:9999,minWidth:"300px",maxWidth:"90%"},children:[(0,i.jsx)("strong",{children:"Error!"})," ",t,(0,i.jsx)("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:o})]})}},5136:(e,t,o)=>{o.d(t,{A:()=>p});var n=o(5043),i=(o(8421),o(5475)),a=o(3579),r=o(3216),l=o(2983),s=o(5731),d=o(6213),c=o(579);function p(){const[e,t]=(0,n.useState)(""),o=(0,r.Zp)(),[p,u]=(0,n.useState)([]);(0,n.useEffect)((()=>{const e=localStorage.getItem("UserLoginData"),n=JSON.parse(e);t(n),null===n&&(localStorage.removeItem("UserLoginData"),o("/login"))}),[]),(0,n.useEffect)((()=>{x()}),[]);const x=async()=>{let e={id:""};try{const t=await d.A.post("https://blueprintcatalyst.com/api/api/user/getModules",e,{headers:{Accept:"application/json","Content-Type":"application/json"}});u(t.data.results)}catch(t){}},[h,f]=(0,n.useState)(!1);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(a.SD,{children:(0,c.jsx)("div",{className:"container-lg",children:(0,c.jsxs)("div",{className:"d-flex gap-4 position-relative",children:[(0,c.jsx)(i.N_,{href:"/",className:"logo",children:(0,c.jsx)("img",{src:"/assets/user/images/logo.png",alt:"logo"})}),(0,c.jsx)(a.V4,{children:(0,c.jsx)("button",{type:"button",onClick:()=>{f(!h)},children:(0,c.jsx)(l.A,{strokeWidth:2})})}),(0,c.jsxs)(a.FC,{children:[(0,c.jsx)(s.A,{strokeWidth:1.5}),(0,c.jsxs)("select",{name:"",id:"",className:"form-control",children:[(0,c.jsx)("option",{value:"",children:"Select Language"}),(0,c.jsx)("option",{value:"",children:"Mandarin"}),(0,c.jsx)("option",{value:"",children:"English"})]}),(0,c.jsx)(i.N_,{to:"/logout",className:"btn bg-dark py-2 hoverbge",children:"Logout"})]})]})})})})}},5264:(e,t,o)=>{o.d(t,{A:()=>n});const n=(0,o(7784).A)("building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]])},6022:(e,t,o)=>{o.d(t,{$n:()=>f,JU:()=>p,MH:()=>m,V7:()=>g,e2:()=>h,fI:()=>x,gE:()=>c,hJ:()=>a,lV:()=>d,mO:()=>i,nj:()=>l,pd:()=>u,rL:()=>s,zD:()=>r});var n=o(5464);const i=n.default.div`
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
`,a=n.default.div`
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
`,r=n.default.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  position: relative;
`,l=n.default.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #fff;
  color: #000;
  border: none;
  font-size: 20px;
  cursor: pointer;
`,s=n.default.h2`
  font-size: 18px;
  font-weight: 700;
  color: var(--primary-color);
  text-align: center;
  margin-bottom: 10px;
`,d=n.default.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,c=n.default.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,p=n.default.label`
  font-weight: 500;
  font-size: 14px;
`,u=n.default.input`
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
`,x=n.default.div`
  display: flex;
  gap: 20px;
`,h=n.default.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`,f=n.default.button`
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
`,g=n.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 200px; // Adjust width as needed
  margin: 0 auto;
`,m=n.default.img`
  width: 100%; // Makes the image responsive
  height: auto; // Keeps the aspect ratio intact
`},8622:(e,t,o)=>{o.d(t,{A:()=>a});var n=o(5043),i=o(579);const a=function(e){let{message:t,onClose:o}=e;const[a,r]=(0,n.useState)("show");return(0,n.useEffect)((()=>{const e=setTimeout((()=>{r("")}),2500),t=setTimeout((()=>{o()}),3e3);return()=>{clearTimeout(e),clearTimeout(t)}}),[o]),(0,i.jsxs)("div",{className:`alert alert-success alert-dismissible fade ${a}`,role:"alert",style:{position:"fixed",top:"20px",right:"20px",zIndex:9999,minWidth:"300px",maxWidth:"90%"},children:[(0,i.jsx)("strong",{children:"Success!"})," ",t,(0,i.jsx)("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:o})]})}},9333:(e,t,o)=>{o.d(t,{A:()=>n});const n=(0,o(7784).A)("video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]])},9534:(e,t,o)=>{o.r(t),o.d(t,{default:()=>w});var n=o(5043),i=o(8286),a=(o(5015),o(5136)),r=o(4939),l=o(8622),s=(o(8421),o(2837)),d=o(6022),c=o(579);const p=e=>{let{moduledata:t,show:o,onClose:n,onSubmit:i}=e;return o?(0,c.jsx)(d.hJ,{children:(0,c.jsxs)(d.zD,{children:[(0,c.jsx)(d.nj,{onClick:n,children:"\xd7"}),(0,c.jsx)(d.rL,{children:"Payment"}),(0,c.jsx)(d.V7,{children:(0,c.jsx)(d.MH,{src:"/assets/user/images/cardimage.jpg",alt:"cards"})}),(0,c.jsxs)(d.lV,{onSubmit:i,children:[(0,c.jsxs)(d.gE,{children:[(0,c.jsx)(d.JU,{children:"Name"}),(0,c.jsx)(d.pd,{type:"text",name:"name",required:!0,placeholder:"name"})]}),(0,c.jsxs)(d.gE,{children:[(0,c.jsx)(d.JU,{children:"Email"}),(0,c.jsx)(d.pd,{type:"email",name:"email",required:!0,placeholder:"email"})]}),(0,c.jsxs)(d.gE,{children:[(0,c.jsx)(d.JU,{children:"Card Number"}),(0,c.jsx)(d.pd,{type:"text",name:"cardnumber",required:!0,placeholder:"card number",inputMode:"numeric",maxLength:19,onInput:e=>{let t=e.target.value.replace(/\D/g,"");t=t.substring(0,16),t=t.replace(/(.{4})/g,"$1 ").trim(),e.target.value=t}})]}),(0,c.jsxs)(d.fI,{children:[(0,c.jsxs)(d.gE,{children:[(0,c.jsx)(d.JU,{children:"Expiry Date"}),(0,c.jsx)(d.pd,{type:"text",name:"expiry",required:!0,placeholder:"MM/YYYY",inputMode:"numeric",maxLength:7,pattern:"(0[1-9]|1[0-2])\\/\\d{4}",onInput:e=>{let t=e.target.value.replace(/\D/g,"");t.length>6&&(t=t.slice(0,6)),t.length>=3&&(t=t.slice(0,2)+"/"+t.slice(2)),e.target.value=t}})]}),(0,c.jsxs)(d.gE,{children:[(0,c.jsx)(d.JU,{children:"CVV"}),(0,c.jsx)(d.pd,{type:"text",name:"cvv",required:!0,placeholder:"123"})]})]}),(0,c.jsxs)(d.e2,{children:[(0,c.jsx)(d.$n,{type:"button",className:"cancel",onClick:n,children:"Cancel"}),(0,c.jsxs)(d.$n,{type:"submit",className:"submit",children:["Pay Now $",t.price]})]})]})]})}):null};var u=o(3216),x=o(6178),h=o.n(x);const f=(0,o(7784).A)("clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);var g=o(9333),m=o(5264),b=o(7692),v=(o(3656),o(1173)),y=o(4710),j=o(6213);function w(){const e=(0,u.Zp)(),[t,o]=(0,n.useState)(!1),[d,x]=(0,n.useState)(!1),[w,k]=(0,n.useState)({name:"",email:""}),S=(0,b.ye)(h()),[z,N]=(0,n.useState)([]),[C,D]=(0,n.useState)(""),[A,E]=(0,n.useState)(""),[I,T]=(0,n.useState)(""),[M,O]=(0,n.useState)(""),[F,J]=(0,n.useState)(null),[V,L]=(0,n.useState)(""),[Z,$]=(0,n.useState)(!0),[_,U]=(0,n.useState)(""),[q,P]=(0,n.useState)(""),[H,K]=(0,n.useState)(""),[Y,W]=(0,n.useState)(""),{id:R}=(0,u.g)(),B=localStorage.getItem("UserLoginData"),G=JSON.parse(B),[Q,X]=(0,n.useState)(""),ee="https://blueprintcatalyst.com/api/api/user/",te=e=>{k({...w,[e.target.name]:e.target.value})};(0,n.useEffect)((()=>{if(Intl.supportedValuesOf){const e=Intl.supportedValuesOf("timeZone");ie(e)}}),[]),(0,n.useEffect)((()=>{"undefined"!==R&&oe()}),[R]);const oe=async()=>{let e={id:R};try{(await j.A.post(ee+"checkmodulesubscription",e,{headers:{Accept:"application/json","Content-Type":"application/json"}})).data.results.length>0&&W("1")}catch(t){}};(0,n.useEffect)((()=>{(async()=>{let t={id:R};try{const o=await j.A.post(ee+"selectModule",t,{headers:{Accept:"application/json","Content-Type":"application/json"}});o.data.results.length>0?(oe(),P(o.data.results[0])):e("/dashboard")}catch(o){}})()}),[R]),(0,n.useEffect)((()=>{document.title="Module Page"}),[]);(0,n.useEffect)((()=>{(async()=>{try{const e=await fetch("https://api.ipify.org?format=json"),t=await e.json();D(t.ip)}catch(e){console.error("Failed to fetch IP",e)}})()}),[]);const[ne,ie]=(0,n.useState)([]),[ae,re]=(0,n.useState)(Intl.DateTimeFormat().resolvedOptions().timeZone);(0,n.useEffect)((()=>{if(Intl.supportedValuesOf){const e=Intl.supportedValuesOf("timeZone");ie(e)}}),[]),(0,n.useEffect)((()=>{const e=()=>{const e=new Intl.DateTimeFormat("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0,timeZone:ae}).format(new Date);U(e)};e();const t=setInterval(e,6e4);return()=>clearInterval(t)}),[ae]);const le=new Date;le.setHours(0,0,0,0);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.mO,{children:[(0,c.jsxs)("div",{className:"fullpage d-block",children:[(0,c.jsx)(a.A,{}),(0,c.jsx)(s.$K,{className:"d-block py-5",children:(0,c.jsx)("div",{className:"container-lg",children:(0,c.jsxs)("div",{className:"row justify-content-center",children:[(0,c.jsx)("div",{className:"col-md-3",children:(0,c.jsx)(y.A,{})}),(0,c.jsx)("div",{className:"col-md-9",children:(0,c.jsx)("form",{action:"",children:(0,c.jsx)(s.mg,{id:"step5",children:(0,c.jsxs)("div",{className:"d-flex flex-column gap-5",children:[I&&(0,c.jsx)(r.A,{message:I,onClose:()=>T("")}),M&&(0,c.jsx)(l.A,{message:M,onClose:()=>O("")}),(0,c.jsx)(s.CB,{children:q.name}),(0,c.jsxs)("div",{className:"row gy-3",children:[(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsxs)(s.uM,{children:[(0,c.jsxs)("div",{className:"d-flex flex-column gap-3",children:[(0,c.jsx)("div",{className:"klogo",children:(0,c.jsx)("div",{className:"inlogo fulw",children:(0,c.jsx)("img",{src:"/assets/user/images/logoblack.png",alt:"logo"})})}),(0,c.jsx)("h3",{children:"Keiretsu Forum Conoda"}),(0,c.jsx)("h4",{children:"Deal Screening - 30 minutes"})]}),(0,c.jsxs)("h6",{children:[(0,c.jsx)(s.vE,{children:(0,c.jsx)(f,{})}),"30 min"]}),(0,c.jsxs)("h6",{children:[(0,c.jsx)(s.vE,{children:(0,c.jsx)(g.A,{})}),"Web conferencing details provided upon confirmation."]}),(0,c.jsx)("p",{children:"Keiretsu Forum has grown to be the worlds largest and most active early stage investor network (as ranked by Pitchbook!) with over 3.000 accredited investor members throughout chapters in countrjes on 4 continents"}),(0,c.jsx)("p",{children:"The first step to participation es a 30 menute Deat Screening Session (via on online Zoom meeting). This is a no-obligation / no-cost opportunity for out Deol Screening Committee"})]})}),(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,c.jsx)("label",{htmlFor:"",children:"Select a date and time"}),(0,c.jsxs)(s.Jq,{children:[(0,c.jsx)(b.Vv,{localizer:S,events:z,startAccessor:"start",endAccessor:"end",selectable:!0,onSelectSlot:e=>{let{start:t,end:o}=e;if(""===Y)x(!0);else{const e=new Date;e.setHours(0,0,0,0);const n=new Date(t);if(n.setHours(0,0,0,0),n<e)return void T("You cannot select a past date.");if(z.some((e=>new Date(e.start).setHours(0,0,0,0)===n.getTime()))){const e=z.filter((e=>new Date(e.start).setHours(0,0,0,0)!==n.getTime()));return N(e),T(""),void $(0===e.length)}if(z.length>=3)return void T("You can only select up to 3 meetings.");const i={start:t,end:o},a=[...z,i];N(a),T(""),$(!1)}},onSelectEvent:e=>console.log("Clicked event",e),views:["month"],style:{height:300},popup:!0,dayPropGetter:e=>{const t=new Date(e);return t.setHours(0,0,0,0),t<le?{style:{backgroundColor:"#e0e0e0",pointerEvents:"none",opacity:.6,cursor:"none"}}:{}}}),(0,c.jsx)("strong",{children:"Time Zone"}),(0,c.jsx)("div",{children:(0,c.jsx)("select",{value:ae,onChange:e=>re(e.target.value),children:ne.map((e=>(0,c.jsxs)("option",{value:e,children:[e," (",new Intl.DateTimeFormat("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0,timeZone:e}).format(new Date),")"]},e)))})})]}),(0,c.jsx)("button",{style:{opacity:Z?.5:1,pointerEvents:Z?"none":"auto"},className:"registerzoom",onClick:()=>o(!0),type:"button",children:"Register For Zoom"})]})}),(0,c.jsx)("div",{className:"col-12",children:(0,c.jsxs)(s.Jq,{children:[(0,c.jsx)(m.A,{}),(0,c.jsx)("textarea",{id:"",rows:"5",onInput:e=>{X(e.target.value)},name:"description",placeholder:"The marketing description will go here. It will outline the 'Be The Investor' module."})]})})]})]})})})})]})})})]}),(0,c.jsx)(s.hJ,{show:t,children:(0,c.jsxs)(s.Cd,{children:[(0,c.jsx)(s.nj,{onClick:()=>o(!1),children:"\xd7"}),(0,c.jsx)("form",{onSubmit:async e=>{e.preventDefault();let t={name:e.target.name.value,email:e.target.email.value,timeset:V,module_id:R,ip_address:C,selectedZone:ae,selectedSlots:z,description:Q};K(!0);try{const e=await j.A.post(ee+"registerforZoom",t,{headers:{Accept:"application/json","Content-Type":"application/json"}});K(!1);var n=e.data;if("2"===n.status)return O(""),void T(n.message);if("1"===n.status)return T(""),O(n.message),o(!1),void setTimeout((()=>{window.location.reload()}),3e3)}catch(i){}console.log("Form submitted",t)},children:(0,c.jsxs)("div",{className:"d-flex flex-column gap-3",children:[(0,c.jsx)("h3",{className:"text-center",children:"Register"}),(0,c.jsx)("div",{className:"d-block",children:(0,c.jsx)(s.pd,{type:"text",name:"name",placeholder:"Your Name *",value:w.name,onChange:te,required:!0})}),(0,c.jsx)("div",{className:"d-block",children:(0,c.jsx)(s.pd,{type:"email",name:"email",placeholder:"Your Email *",value:w.email,onChange:te,required:!0})}),(0,c.jsx)("div",{className:"d-block",children:(0,c.jsx)(i.Ay,{name:"time",selected:F,onChange:e=>{const t=(0,v.L_)(e,ae),o=(0,v.GP)(e,"hh:mm a");L(o),J(t)},showTimeSelect:!0,showTimeSelectOnly:!0,timeIntervals:15,dateFormat:"h:mm aa",placeholderText:"Select Time *"})}),(0,c.jsxs)("div",{className:"d-flex align-items-center justify-content-end gap-2",children:[H&&(0,c.jsx)("div",{className:"spinner-border text-dark",role:"status",style:{width:"1.5rem",height:"1.5rem"},children:(0,c.jsx)("span",{className:"visually-hidden",children:"Loading..."})}),(0,c.jsx)(s.R3,{type:"submit",style:{width:"100%",opacity:H?.5:1,pointerEvents:H?"none":"auto"},children:"Submit For Zoom"})]})]})})]})})]}),(0,c.jsx)(p,{moduledata:q,show:d,onClose:()=>x(!1),onSubmit:async e=>{e.preventDefault(),console.log(e.target);var t=e.target;let n={name:t.name.value,email:t.email.value,cardnumber:t.cardnumber.value,expiry:t.expiry.value,cvv:t.cvv.value,user_id:G.id,plan_id:R};try{(await j.A.post(ee+"usersubscription",n,{headers:{Accept:"application/json","Content-Type":"application/json"}})).data.results}catch(i){i.response||(i.request?console.error("Request data:",i.request):console.error("Error message:",i.message))}o(!1)}})]})}}}]);
//# sourceMappingURL=422.51521faf.chunk.js.map