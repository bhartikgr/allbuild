"use strict";(self.webpackChunkkeiretsuproject=self.webpackChunkkeiretsuproject||[]).push([[769],{3579:(e,t,o)=>{o.d(t,{$K:()=>i,C:()=>u,FC:()=>l,SD:()=>a,V4:()=>s,c0:()=>d,i3:()=>f,jl:()=>c,mO:()=>n,rI:()=>x,vT:()=>p});var r=o(5464);const n=r.default.div`
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
`,i=r.default.div`
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
`,s=(r.default.div`
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
`),d=r.default.ul`
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
`},4710:(e,t,o)=>{o.d(t,{A:()=>p});var r=o(5043),n=(o(8421),o(5475)),i=o(3216),a=o(3579),l=o(2983),s=o(6213),d=o(579);const c=[{label:"Subscription Plan",href:"/subscription"},{label:"Modules",dynamicDropdownKey:"modules"},{label:"Investor Presentation Structure - Expert Advice Video",href:"/advicevideos"},{label:"Settings",dropdown:[{label:"Profile Settings",href:"/settings/profile"}]}];function p(e){let{isOpen:t}=e;const[o,p]=(0,r.useState)(!1),[u,x]=(0,r.useState)(""),f=(0,i.Zp)(),[h,g]=(0,r.useState)(null),[m,b]=(0,r.useState)([]);(0,r.useEffect)((()=>{const e=localStorage.getItem("UserLoginData"),t=JSON.parse(e);x(t),null===t&&(localStorage.removeItem("UserLoginData"),f("/login"))}),[]),(0,r.useEffect)((()=>{j();const e=localStorage.getItem("selectedDropdown");e&&g(Number(e))}),[]);const j=async()=>{let e={id:""};try{const t=await s.A.post("https://blueprintcatalyst.com/api/api/user/getModules",e,{headers:{Accept:"application/json","Content-Type":"application/json"}});b(t.data.results)}catch(t){console.error("Error fetching modules:",t)}};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.V4,{children:(0,d.jsx)("button",{type:"button",onClick:()=>p(!o),children:(0,d.jsx)(l.A,{strokeWidth:2})})}),(0,d.jsx)(a.vT,{isOpen:t,children:(0,d.jsx)(a.c0,{children:c.map(((e,t)=>(0,d.jsx)(a.jl,{children:e.dropdown||e.dynamicDropdownKey?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.C,{onClick:()=>(e=>{const t=h===e?null:e;g(t),localStorage.setItem("selectedDropdown",null!==t?t:"")})(t),children:(0,d.jsxs)("div",{className:"d-flex gap-2 align-items-start",children:[(0,d.jsx)(a.i3,{isOpen:h===t,children:"\u25be"}),e.label]})}),h===t&&(0,d.jsxs)(a.rI,{children:[e.dropdown&&e.dropdown.map(((e,t)=>(0,d.jsx)("li",{children:(0,d.jsx)(n.N_,{to:e.href,children:e.label})},t))),"modules"===e.dynamicDropdownKey&&m.map(((e,t)=>(0,d.jsx)("li",{children:"DATAROOM AND DUE DILIGENCE"===e.name?(0,d.jsx)(n.N_,{to:"/dataroom-Duediligence",children:e.name}):(0,d.jsx)(n.N_,{to:`/moduleone/${e.id}`,children:e.name})},t)))]})]}):(0,d.jsx)(n.N_,{to:e.href,children:e.label})},t)))})})]})}},5136:(e,t,o)=>{o.d(t,{A:()=>p});var r=o(5043),n=(o(8421),o(5475)),i=o(3579),a=o(3216),l=o(2983),s=o(5731),d=o(6213),c=o(579);function p(){const[e,t]=(0,r.useState)(""),o=(0,a.Zp)(),[p,u]=(0,r.useState)([]);(0,r.useEffect)((()=>{const e=localStorage.getItem("UserLoginData"),r=JSON.parse(e);t(r),null===r&&(localStorage.removeItem("UserLoginData"),o("/login"))}),[]),(0,r.useEffect)((()=>{x()}),[]);const x=async()=>{let e={id:""};try{const t=await d.A.post("https://blueprintcatalyst.com/api/api/user/getModules",e,{headers:{Accept:"application/json","Content-Type":"application/json"}});u(t.data.results)}catch(t){}},[f,h]=(0,r.useState)(!1);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(i.SD,{children:(0,c.jsx)("div",{className:"container-lg",children:(0,c.jsxs)("div",{className:"d-flex gap-4 position-relative",children:[(0,c.jsx)(n.N_,{href:"/",className:"logo",children:(0,c.jsx)("img",{src:"/assets/user/images/logo.png",alt:"logo"})}),(0,c.jsx)(i.V4,{children:(0,c.jsx)("button",{type:"button",onClick:()=>{h(!f)},children:(0,c.jsx)(l.A,{strokeWidth:2})})}),(0,c.jsxs)(i.FC,{children:[(0,c.jsx)(s.A,{strokeWidth:1.5}),(0,c.jsxs)("select",{name:"",id:"",className:"form-control",children:[(0,c.jsx)("option",{value:"",children:"Select Language"}),(0,c.jsx)("option",{value:"",children:"Mandarin"}),(0,c.jsx)("option",{value:"",children:"English"})]}),(0,c.jsx)(n.N_,{to:"/logout",className:"btn bg-dark py-2 hoverbge",children:"Logout"})]})]})})})})}},7983:(e,t,o)=>{o.r(t),o.d(t,{default:()=>S});var r=o(5043),n=o(5136),i=o(4710),a=(o(8421),o(3579)),l=o(5464);l.default.div`
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
`;const s=l.default.div`
  background-color: #fff;
  padding: 3rem 1rem;
  color: #000;
`,d=l.default.h2`
  color: #0086bf;
  font-weight: 700;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
`,c=l.default.th`
  background-color: #000 !important;
  color: #ffff !important;
  text-align: center;
  vertical-align: middle;
  font-size: 13px;
  text-transform: capitalize;

  &:first-child {
    text-align: start;
  }
`,p=l.default.td`
  vertical-align: middle;
  text-align: center;

  h6 {
    font-size: 13px;
    font-weight: 600;
    text-transform: capitalize;
    text-align: start;
    color: #000;
  }

  h5 {
    font-size: 13px;
    font-weight: 400;
    color: #0086bf;
    text-transform: capitalize;
  }

  p {
    font-size: 13px;
    color: #000;
    margin: 0;
    text-transform: capitalize;
  }
`,u=l.default.button`
  background-color: #0086bf;
  color: #fff;
  border: none;
  padding: 4px 10px;
  font-weight: 500;
  font-size: 14px;
  border-radius: 4px;
  text-transform: capitalize;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #000;
  }
`,x=l.default.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
`,f=l.default.div`
  background: #fff;
  width: 100%;
  max-width: 500px;
  top: 50%;
  transform: translateY(-50%);
  margin: auto;
  border-radius: 8px;
  padding: 2rem;
  position: relative;
`,h=l.default.h3`
  margin-bottom: 1rem;
  color: #0086bf;
  font-weight: bold;
  font-size: 16px;
`,g=l.default.button`
  position: absolute;
  top: -30px;
  right: -30px;
  border: none;
  font-size: 20px;
  font-weight: bold;
  color: #000;
  cursor: pointer;
  background: #fff;
  height: 40px;
  width: 40px;
  padding: 0 0 5px 0;
  line-height: 0;
  border-radius: 100px;
`,m=l.default.label`
  border: 2px dashed #0086bf;
  border-radius: 6px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  color: #000;
  margin-bottom: 1.5rem;
  position: relative;
  width: 100%;

  input[type="file"] {
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    cursor: pointer;
  }
`,b=l.default.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  font-size: 14px;
`,j=l.default.button`
  font-size: 14px;
  padding: 0.6rem 1.2rem;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  color: #fff;
  background-color: ${e=>{let{variant:t}=e;return"upload"===t?"#0086bf":"#999"}};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${e=>{let{variant:t}=e;return"upload"===t?"#a00000":"#777"}};
  }
`;var v=o(6178),k=o.n(v),y=o(7692),w=(o(3656),o(6213)),N=o(579);const z=e=>{let{onClose:t}=e;return(0,N.jsx)(x,{children:(0,N.jsxs)(f,{children:[(0,N.jsx)(g,{onClick:t,children:"\xd7"}),(0,N.jsx)(h,{children:"Upload documents (POF, PPT, JPG, PNG, EXCEL)"}),(0,N.jsxs)(m,{children:[(0,N.jsx)("h6",{children:(0,N.jsx)("b",{children:"Click to select files"})}),(0,N.jsx)("p",{children:"or drag it here."}),(0,N.jsx)("input",{type:"file",name:"documents",multiple:!0,onChange:async e=>{const o=e.target.files[0];if(!o)return;const r=new FormData;r.append("documents",o);try{const e=await fetch("https://blueprintcatalyst.com/api/api/user/uploadDocuments",{method:"POST",body:r});console.log(e);const{summary:o}=await e.json();console.log(o),t()}catch(n){alert("Failed to upload or process document")}}})]}),(0,N.jsxs)(b,{children:[(0,N.jsx)(j,{onClick:t,children:"Close"}),(0,N.jsx)(j,{variant:"upload",children:"Submit"})]})]})})};function S(){(0,y.ye)(k());const[e,t]=(0,r.useState)(!1),[o,l]=(0,r.useState)([]);return document.title="Due diligence Data Room",(0,r.useEffect)((()=>{(async()=>{let e={id:""};try{const t=await w.A.post("https://blueprintcatalyst.com/api/api/user/getcategories",e,{headers:{Accept:"application/json","Content-Type":"application/json"}});console.log(t.data.results),l(t.data.results)}catch(t){}})()}),[]),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(a.mO,{children:(0,N.jsxs)("div",{className:"fullpage d-block",children:[(0,N.jsx)(n.A,{}),(0,N.jsx)(a.$K,{className:"d-block py-5",children:(0,N.jsx)("div",{className:"container-lg",children:(0,N.jsxs)("div",{className:"row",children:[(0,N.jsx)("div",{className:"col-md-3",children:(0,N.jsx)(i.A,{})}),(0,N.jsx)("div",{className:"col-md-9",children:(0,N.jsxs)(s,{className:"d-flex flex-column gap-4",children:[(0,N.jsx)("div",{className:"d-block text-center titleroom",children:(0,N.jsx)(d,{children:"Due diligence data room"})}),(0,N.jsx)("div",{className:"table-responsive",children:o.map((e=>(0,N.jsxs)("table",{className:"table dataroomtab",children:[(0,N.jsx)("thead",{children:(0,N.jsxs)("tr",{children:[(0,N.jsx)(c,{children:e.name}),(0,N.jsx)(c,{children:"Upload Documents"}),(0,N.jsx)(c,{children:"Does NOT Exist (N/A)"}),(0,N.jsx)(c,{children:"Exists but NOT Available"}),(0,N.jsx)(c,{children:"Provided"})]})}),e.subcategories&&e.subcategories.length>0?(0,N.jsx)("tbody",{children:e.subcategories.map((e=>(0,N.jsxs)("tr",{children:[(0,N.jsx)(p,{children:(0,N.jsx)("h6",{children:e.name})}),(0,N.jsx)(p,{children:(0,N.jsx)(u,{type:"button",onClick:()=>t(!0),children:"Click to upload"})}),(0,N.jsx)(p,{children:(0,N.jsx)("h5",{children:"--"})}),(0,N.jsx)(p,{children:(0,N.jsx)("h5",{children:"--"})}),(0,N.jsx)(p,{children:(0,N.jsx)("p",{children:"No"})})]},e.id)))}):(0,N.jsx)("p",{children:"No subcategories"})]},e.id)))})]})})]})})})]})}),e&&(0,N.jsx)(z,{onClose:()=>t(!1)})]})}}}]);
//# sourceMappingURL=769.81a7566b.chunk.js.map