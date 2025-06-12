/*! For license information please see 422.3adfa5aa.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkkeiretsuproject=self.webpackChunkkeiretsuproject||[]).push([[422],{2837:(e,t,o)=>{o.d(t,{$K:()=>l,CB:()=>c,Cd:()=>b,FC:()=>s,Jq:()=>x,R3:()=>j,SD:()=>r,Zw:()=>u,dN:()=>g,hJ:()=>f,mO:()=>n,mg:()=>d,nj:()=>v,pd:()=>y,uM:()=>h,vE:()=>a,z6:()=>p});var i=o(5464);const n=i.default.div`
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
  border-bottom: 10px solid var(--secondary-color);
  .logo {
    display: inline-block;
    width: 140px;
    img {
      width: 100%;
    }
  }
`),s=i.default.div`
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
`,l=i.default.div`
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
`),h=(i.default.div`
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
`),m=(i.default.div`
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
`),g=((0,i.default)(m)`
  left: -60px;

  @media only screen and (max-width: 991.98px) {
    left: -30px;
  }
`,(0,i.default)(m)`
  right: -60px;

  @media only screen and (max-width: 991.98px) {
    right: -30px;
  }
`,i.default.sup`
  color: var(--primary-color);
`),f=i.default.div`
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
`,y=i.default.input`
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 16px;
`,j=i.default.button`
  padding: 0.6rem 1.2rem;
  background-color: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`},4939:(e,t,o)=>{o.d(t,{A:()=>a});var i=o(5043),n=o(579);const a=function(e){let{message:t,onClose:o}=e;const[a,r]=(0,i.useState)("show");return(0,i.useEffect)((()=>{const e=setTimeout((()=>{r("")}),3500),t=setTimeout((()=>{o()}),3e3);return()=>{clearTimeout(e),clearTimeout(t)}}),[o]),(0,n.jsxs)("div",{className:`alert alert-danger alert-dismissible fade ${a}`,role:"alert",style:{position:"fixed",top:"20px",right:"20px",zIndex:9999,minWidth:"300px",maxWidth:"90%"},children:[(0,n.jsx)("strong",{children:"Error!"})," ",t,(0,n.jsx)("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:o})]})}},5264:(e,t,o)=>{o.d(t,{A:()=>i});const i=(0,o(7784).A)("building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]])},8622:(e,t,o)=>{o.d(t,{A:()=>a});var i=o(5043),n=o(579);const a=function(e){let{message:t,onClose:o}=e;const[a,r]=(0,i.useState)("show");return(0,i.useEffect)((()=>{const e=setTimeout((()=>{r("")}),2500),t=setTimeout((()=>{o()}),3e3);return()=>{clearTimeout(e),clearTimeout(t)}}),[o]),(0,n.jsxs)("div",{className:`alert alert-success alert-dismissible fade ${a}`,role:"alert",style:{position:"fixed",top:"20px",right:"20px",zIndex:9999,minWidth:"300px",maxWidth:"90%"},children:[(0,n.jsx)("strong",{children:"Success!"})," ",t,(0,n.jsx)("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:o})]})}},9333:(e,t,o)=>{o.d(t,{A:()=>i});const i=(0,o(7784).A)("video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]])},9534:(e,t,o)=>{o.r(t),o.d(t,{default:()=>w});var i=o(5043),n=o(4404),a=(o(5015),o(5136)),r=o(4939),s=o(8622),l=(o(8421),o(2837)),d=o(6022),c=o(579);const p=e=>{let{moduledata:t,show:o,onClose:i,onSubmit:n}=e;return o?(0,c.jsx)(d.hJ,{children:(0,c.jsxs)(d.zD,{children:[(0,c.jsx)(d.nj,{onClick:i,children:"\xd7"}),(0,c.jsx)(d.rL,{children:"Payment"}),(0,c.jsx)(d.V7,{children:(0,c.jsx)(d.MH,{src:"/assets/user/images/cardimage.jpg",alt:"cards"})}),(0,c.jsxs)(d.lV,{onSubmit:n,children:[(0,c.jsxs)(d.gE,{children:[(0,c.jsx)(d.JU,{children:"Name"}),(0,c.jsx)(d.pd,{type:"text",name:"name",required:!0,placeholder:"name"})]}),(0,c.jsxs)(d.gE,{children:[(0,c.jsx)(d.JU,{children:"Email"}),(0,c.jsx)(d.pd,{type:"email",name:"email",required:!0,placeholder:"email"})]}),(0,c.jsxs)(d.gE,{children:[(0,c.jsx)(d.JU,{children:"Card Number"}),(0,c.jsx)(d.pd,{type:"text",name:"cardnumber",required:!0,placeholder:"card number",inputMode:"numeric",maxLength:19,onInput:e=>{let t=e.target.value.replace(/\D/g,"");t=t.substring(0,16),t=t.replace(/(.{4})/g,"$1 ").trim(),e.target.value=t}})]}),(0,c.jsxs)(d.fI,{children:[(0,c.jsxs)(d.gE,{children:[(0,c.jsx)(d.JU,{children:"Expiry Date"}),(0,c.jsx)(d.pd,{type:"text",name:"expiry",required:!0,placeholder:"MM/YYYY",inputMode:"numeric",maxLength:7,pattern:"(0[1-9]|1[0-2])\\/\\d{4}",onInput:e=>{let t=e.target.value.replace(/\D/g,"");t.length>6&&(t=t.slice(0,6)),t.length>=3&&(t=t.slice(0,2)+"/"+t.slice(2)),e.target.value=t}})]}),(0,c.jsxs)(d.gE,{children:[(0,c.jsx)(d.JU,{children:"CVV"}),(0,c.jsx)(d.pd,{type:"text",name:"cvv",required:!0,placeholder:"123"})]})]}),(0,c.jsxs)(d.e2,{children:[(0,c.jsx)(d.$n,{type:"button",className:"cancel",onClick:i,children:"Cancel"}),(0,c.jsxs)(d.$n,{type:"submit",className:"submit",children:["Pay Now $",t.price]})]})]})]})}):null};var u=o(3216),x=o(6178),h=o.n(x);const m=(0,o(7784).A)("clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);var g=o(9333),f=o(5264),b=o(337),v=(o(3656),o(1173)),y=o(4710),j=o(6213);function w(){const e=(0,u.Zp)(),[t,o]=(0,i.useState)(!1),[d,x]=(0,i.useState)(!1),[w,k]=(0,i.useState)({name:"",email:""}),S=(0,b.ye)(h()),[z,C]=(0,i.useState)([]),[N,T]=(0,i.useState)(""),[E,A]=(0,i.useState)(""),[D,I]=(0,i.useState)(""),[M,q]=(0,i.useState)(""),[F,Z]=(0,i.useState)(null),[J,V]=(0,i.useState)(""),[O,Y]=(0,i.useState)(!0),[$,_]=(0,i.useState)(""),[H,U]=(0,i.useState)(""),[L,P]=(0,i.useState)(""),[R,W]=(0,i.useState)(""),{id:K}=(0,u.g)(),B=localStorage.getItem("UserLoginData"),G=JSON.parse(B),[Q,X]=(0,i.useState)(""),ee="https://blueprintcatalyst.com/api/user/",te=e=>{k({...w,[e.target.name]:e.target.value})};(0,i.useEffect)((()=>{if(Intl.supportedValuesOf){const e=Intl.supportedValuesOf("timeZone");ne(e)}}),[]),(0,i.useEffect)((()=>{"undefined"!==K&&oe()}),[K]);const oe=async()=>{let e={id:K};try{(await j.A.post(ee+"checkmodulesubscription",e,{headers:{Accept:"application/json","Content-Type":"application/json"}})).data.results.length>0&&W("1")}catch(t){}};(0,i.useEffect)((()=>{(async()=>{let t={id:K};try{const o=await j.A.post(ee+"selectModule",t,{headers:{Accept:"application/json","Content-Type":"application/json"}});o.data.results.length>0?(oe(),U(o.data.results[0])):e("/dashboard")}catch(o){}})()}),[K]),(0,i.useEffect)((()=>{document.title="Module Page"}),[]);(0,i.useEffect)((()=>{(async()=>{try{const e=await fetch("https://api.ipify.org?format=json"),t=await e.json();T(t.ip)}catch(e){console.error("Failed to fetch IP",e)}})()}),[]);const[ie,ne]=(0,i.useState)([]),[ae,re]=(0,i.useState)(Intl.DateTimeFormat().resolvedOptions().timeZone);(0,i.useEffect)((()=>{if(Intl.supportedValuesOf){const e=Intl.supportedValuesOf("timeZone");ne(e)}}),[]),(0,i.useEffect)((()=>{const e=()=>{const e=new Intl.DateTimeFormat("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0,timeZone:ae}).format(new Date);_(e)};e();const t=setInterval(e,6e4);return()=>clearInterval(t)}),[ae]);const se=new Date;se.setHours(0,0,0,0);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(l.mO,{children:[(0,c.jsxs)("div",{className:"fullpage d-block",children:[(0,c.jsx)(a.A,{}),(0,c.jsx)(l.$K,{className:"d-block py-5",children:(0,c.jsx)("div",{className:"container-lg",children:(0,c.jsxs)("div",{className:"row justify-content-center",children:[(0,c.jsx)("div",{className:"col-md-3",children:(0,c.jsx)(y.A,{})}),(0,c.jsx)("div",{className:"col-md-9",children:(0,c.jsx)("form",{action:"",children:(0,c.jsx)(l.mg,{id:"step5",children:(0,c.jsxs)("div",{className:"d-flex flex-column gap-5",children:[D&&(0,c.jsx)(r.A,{message:D,onClose:()=>I("")}),M&&(0,c.jsx)(s.A,{message:M,onClose:()=>q("")}),(0,c.jsx)(l.CB,{children:H.name}),(0,c.jsxs)("div",{className:"row gy-3",children:[(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsxs)(l.uM,{children:[(0,c.jsxs)("div",{className:"d-flex flex-column gap-3",children:[(0,c.jsx)("div",{className:"klogo",children:(0,c.jsx)("div",{className:"inlogo fulw",children:(0,c.jsx)("img",{src:"/logos/logoblack.png",alt:"logo"})})}),(0,c.jsx)("h3",{children:"Keiretsu Forum Conoda"}),(0,c.jsx)("h4",{children:"Deal Screening - 30 minutes"})]}),(0,c.jsxs)("h6",{children:[(0,c.jsx)(l.vE,{children:(0,c.jsx)(m,{})}),"30 min"]}),(0,c.jsxs)("h6",{children:[(0,c.jsx)(l.vE,{children:(0,c.jsx)(g.A,{})}),"Web conferencing details provided upon confirmation."]}),(0,c.jsx)("p",{children:"Keiretsu Forum has grown to be the worlds largest and most active early stage investor network (as ranked by Pitchbook!) with over 3.000 accredited investor members throughout chapters in countrjes on 4 continents"}),(0,c.jsx)("p",{children:"The first step to participation es a 30 menute Deat Screening Session (via on online Zoom meeting). This is a no-obligation / no-cost opportunity for out Deol Screening Committee"})]})}),(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,c.jsx)("label",{htmlFor:"",children:"Select a date and time"}),(0,c.jsxs)(l.Jq,{children:[(0,c.jsx)(b.Vv,{localizer:S,events:z,startAccessor:"start",endAccessor:"end",selectable:!0,onSelectSlot:e=>{let{start:t,end:o}=e;if(""===R)x(!0);else{const e=new Date;e.setHours(0,0,0,0);const i=new Date(t);if(i.setHours(0,0,0,0),i<e)return void I("You cannot select a past date.");if(z.some((e=>new Date(e.start).setHours(0,0,0,0)===i.getTime()))){const e=z.filter((e=>new Date(e.start).setHours(0,0,0,0)!==i.getTime()));return C(e),I(""),void Y(0===e.length)}if(z.length>=3)return void I("You can only select up to 3 meetings.");const n={start:t,end:o},a=[...z,n];C(a),I(""),Y(!1)}},onSelectEvent:e=>console.log("Clicked event",e),views:["month"],style:{height:300},popup:!0,dayPropGetter:e=>{const t=new Date(e);return t.setHours(0,0,0,0),t<se?{style:{backgroundColor:"#e0e0e0",pointerEvents:"none",opacity:.6,cursor:"none"}}:{}}}),(0,c.jsx)("strong",{children:"Time Zone"}),(0,c.jsx)("div",{children:(0,c.jsx)("select",{value:ae,onChange:e=>re(e.target.value),children:ie.map((e=>(0,c.jsxs)("option",{value:e,children:[e," (",new Intl.DateTimeFormat("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0,timeZone:e}).format(new Date),")"]},e)))})})]}),(0,c.jsx)("button",{style:{opacity:O?.5:1,pointerEvents:O?"none":"auto"},className:"registerzoom",onClick:()=>o(!0),type:"button",children:"Register For Zoom"})]})}),(0,c.jsx)("div",{className:"col-12",children:(0,c.jsxs)(l.Jq,{children:[(0,c.jsx)(f.A,{}),(0,c.jsx)("textarea",{id:"",rows:"5",onInput:e=>{X(e.target.value)},name:"description",placeholder:"The marketing description will go here. It will outline the 'Be The Investor' module."})]})})]})]})})})})]})})})]}),(0,c.jsx)(l.hJ,{show:t,children:(0,c.jsxs)(l.Cd,{children:[(0,c.jsx)(l.nj,{onClick:()=>o(!1),children:"\xd7"}),(0,c.jsx)("form",{onSubmit:async e=>{e.preventDefault();let t={name:e.target.name.value,email:e.target.email.value,timeset:J,module_id:K,ip_address:N,selectedZone:ae,selectedSlots:z,description:Q};P(!0);try{const e=await j.A.post(ee+"registerforZoom",t,{headers:{Accept:"application/json","Content-Type":"application/json"}});P(!1);var i=e.data;if("2"===i.status)return q(""),void I(i.message);if("1"===i.status)return I(""),q(i.message),o(!1),void setTimeout((()=>{window.location.reload()}),3e3)}catch(n){}console.log("Form submitted",t)},children:(0,c.jsxs)("div",{className:"d-flex flex-column gap-3",children:[(0,c.jsx)("h3",{className:"text-center",children:"Register"}),(0,c.jsx)("div",{className:"d-block",children:(0,c.jsx)(l.pd,{type:"text",name:"name",placeholder:"Your Name *",value:w.name,onChange:te,required:!0})}),(0,c.jsx)("div",{className:"d-block",children:(0,c.jsx)(l.pd,{type:"email",name:"email",placeholder:"Your Email *",value:w.email,onChange:te,required:!0})}),(0,c.jsx)("div",{className:"d-block",children:(0,c.jsx)(n.Ay,{name:"time",selected:F,onChange:e=>{const t=(0,v.L_)(e,ae),o=(0,v.GP)(e,"hh:mm a");V(o),Z(t)},showTimeSelect:!0,showTimeSelectOnly:!0,timeIntervals:15,dateFormat:"h:mm aa",placeholderText:"Select Time *"})}),(0,c.jsxs)("div",{className:"d-flex align-items-center justify-content-end gap-2",children:[L&&(0,c.jsx)("div",{className:"spinner-border text-dark",role:"status",style:{width:"1.5rem",height:"1.5rem"},children:(0,c.jsx)("span",{className:"visually-hidden",children:"Loading..."})}),(0,c.jsx)(l.R3,{type:"submit",style:{width:"100%",opacity:L?.5:1,pointerEvents:L?"none":"auto"},children:"Submit For Zoom"})]})]})})]})})]}),(0,c.jsx)(p,{moduledata:H,show:d,onClose:()=>x(!1),onSubmit:async e=>{e.preventDefault(),console.log(e.target);var t=e.target;let i={name:t.name.value,email:t.email.value,cardnumber:t.cardnumber.value,expiry:t.expiry.value,cvv:t.cvv.value,user_id:G.id,plan_id:K};try{(await j.A.post(ee+"usersubscription",i,{headers:{Accept:"application/json","Content-Type":"application/json"}})).data.results}catch(n){n.response||(n.request?console.error("Request data:",n.request):console.error("Error message:",n.message))}o(!1)}})]})}}}]);
//# sourceMappingURL=422.3adfa5aa.chunk.js.map