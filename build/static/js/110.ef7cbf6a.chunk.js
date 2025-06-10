"use strict";(self.webpackChunkkeiretsuproject=self.webpackChunkkeiretsuproject||[]).push([[110],{2837:(e,t,o)=>{o.d(t,{$K:()=>l,CB:()=>p,Cd:()=>m,FC:()=>d,Jq:()=>u,R3:()=>w,SD:()=>n,Zw:()=>x,dN:()=>g,hJ:()=>b,mO:()=>i,mg:()=>s,nj:()=>v,pd:()=>y,uM:()=>f,vE:()=>a,z6:()=>c});var r=o(5464);const i=r.default.div`
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
`,a=r.default.span`
  svg {
    width: 16px;
    height: 16px;
    stroke: #9c9c9c;
    stroke-width: 1.2;
    margin-right: 6px;
    vertical-align: middle;
  }
`,n=(r.default.div`
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
  border-bottom: 10px solid var(--secondary-color);
  .logo {
    display: inline-block;
    width: 140px;
    img {
      width: 100%;
    }
  }
`),d=r.default.div`
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
`,l=r.default.div`
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
`,p=r.default.div`
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
`,c=r.default.div`
  display: flex;
  flex-direction: column;
  gap: 10px 0;
`,x=r.default.div`
  label {
    font-weight: 400;
    cursor: pointer;
    margin-left: 10px;
  }
`,u=(r.default.div`
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
`),b=r.default.div`
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
`,m=r.default.div`
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
`},6022:(e,t,o)=>{o.d(t,{$n:()=>h,JU:()=>c,MH:()=>b,V7:()=>g,e2:()=>f,fI:()=>u,gE:()=>p,hJ:()=>a,lV:()=>s,mO:()=>i,nj:()=>d,pd:()=>x,rL:()=>l,zD:()=>n});var r=o(5464);const i=r.default.div`
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
`,a=r.default.div`
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
`,n=r.default.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  position: relative;
`,d=r.default.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #fff;
  color: #000;
  border: none;
  font-size: 20px;
  cursor: pointer;
`,l=r.default.h2`
  font-size: 18px;
  font-weight: 700;
  color: var(--primary-color);
  text-align: center;
  margin-bottom: 10px;
`,s=r.default.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,p=r.default.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,c=r.default.label`
  font-weight: 500;
  font-size: 14px;
`,x=r.default.input`
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
`,u=r.default.div`
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
`,b=r.default.img`
  width: 100%; // Makes the image responsive
  height: auto; // Keeps the aspect ratio intact
`},8150:(e,t,o)=>{o.r(t),o.d(t,{default:()=>u});var r=o(5043),i=(o(5015),o(5136)),a=(o(8421),o(6022)),n=o(2837),d=o(6178),l=o.n(d),s=o(7692),p=(o(3656),o(1173),o(4710)),c=o(6213),x=o(579);function u(){(0,s.ye)(l());const[e,t]=(0,r.useState)([]),[o,d]=(0,r.useState)("monthly"),[u,f]=(0,r.useState)(!1),[h,g]=(0,r.useState)(""),b="https://blueprintcatalyst.com/api/user/",m=localStorage.getItem("UserLoginData"),v=JSON.parse(m);(0,r.useEffect)((()=>{y()}),[]);const y=async()=>{let e={user_id:""};try{var o=(await c.A.post(b+"getallSubscriptionPlan",e,{headers:{Accept:"application/json","Content-Type":"application/json"}})).data.results;console.log(o),t(o)}catch(r){r.response||(r.request?console.error("Request data:",r.request):console.error("Error message:",r.message))}},w=e.filter((e=>"monthly"===e.period)),k=e.filter((e=>"yearly"===e.period));return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(n.mO,{children:(0,x.jsxs)("div",{className:"fullpage d-block",children:[(0,x.jsx)(i.A,{}),(0,x.jsx)(n.$K,{className:"d-block py-5",children:(0,x.jsx)("div",{className:"container-lg",children:(0,x.jsxs)("div",{className:"row justify-content-center",children:[(0,x.jsx)("div",{className:"col-md-3",children:(0,x.jsx)(p.A,{})}),(0,x.jsxs)("div",{className:"col-md-9",children:[(0,x.jsxs)("div",{className:"d-flex justify-content-end mb-4 gap-2",role:"group","aria-label":"Billing period toggle",children:[(0,x.jsx)("button",{type:"button",className:"btn btn-outline-dark "+("monthly"===o?"active":""),onClick:()=>d("monthly"),children:"Monthly"}),(0,x.jsx)("button",{type:"button",className:"btn btn-outline-dark "+("yearly"===o?"active":""),onClick:()=>d("yearly"),children:"Yearly"})]}),(0,x.jsx)("div",{className:"row g-4 justify-content-center",children:("monthly"===o?w:k).map((e=>(0,x.jsx)("div",{className:"col-md-4",children:(0,x.jsxs)("div",{className:"card h-100 shadow",children:[(0,x.jsx)("div",{className:"card-header text-center subscriptionplan text-white",children:(0,x.jsx)("h4",{className:"mb-0",children:e.name})}),(0,x.jsxs)("div",{className:"card-body text-center",children:[(0,x.jsxs)("h1",{className:"card-title fw-bold",children:["$",e.price,(0,x.jsxs)("small",{className:"text-muted fs-6",children:["/","monthly"===o?"mo":"year"]})]}),(0,x.jsx)("ul",{className:"list-unstyled mt-3 mb-4",children:(0,x.jsxs)("li",{children:["\u2714 ",e.module," ",1===parseInt(e.module)?"module":"modules"]})}),(0,x.jsxs)("button",{className:"btn subscriptionplan text-white w-100",type:"button",onClick:()=>{return t=e.id,g(t),void f(!0);var t},children:["Choose ",e.name]})]})]})},e.id)))})]})]})})})]})}),u&&(0,x.jsx)(a.hJ,{children:(0,x.jsxs)(a.zD,{children:[(0,x.jsx)(a.nj,{onClick:()=>f(!1),children:"\xd7"}),(0,x.jsx)(a.rL,{children:"Payment"}),(0,x.jsx)(a.V7,{children:(0,x.jsx)(a.MH,{src:"/assets/user/images/cardimage.jpg",alt:"cards"})}),(0,x.jsxs)(a.lV,{onSubmit:async e=>{e.preventDefault(),console.log(e.target);var t=e.target;let o={name:t.name.value,email:t.email.value,cardnumber:t.cardnumber.value,expiry:t.expiry.value,cvv:t.cvv.value,user_id:v.id,plan_id:h};try{(await c.A.post(b+"usersubscription",o,{headers:{Accept:"application/json","Content-Type":"application/json"}})).data.results}catch(r){r.response||(r.request?console.error("Request data:",r.request):console.error("Error message:",r.message))}f(!1)},children:[(0,x.jsxs)(a.gE,{children:[(0,x.jsx)(a.JU,{children:"Name"}),(0,x.jsx)(a.pd,{type:"text",name:"name",required:!0,placeholder:"name"})]}),(0,x.jsxs)(a.gE,{children:[(0,x.jsx)(a.JU,{children:"Email"}),(0,x.jsx)(a.pd,{type:"email",name:"email",required:!0,placeholder:"email"})]}),(0,x.jsxs)(a.gE,{children:[(0,x.jsx)(a.JU,{children:"Card Number"}),(0,x.jsx)(a.pd,{type:"text",name:"cardnumber",required:!0,placeholder:"card number",inputMode:"numeric",maxLength:19,onInput:e=>{let t=e.target.value.replace(/\D/g,"");t=t.substring(0,16),t=t.replace(/(.{4})/g,"$1 ").trim(),e.target.value=t}})]}),(0,x.jsxs)(a.fI,{children:[(0,x.jsxs)(a.gE,{children:[(0,x.jsx)(a.JU,{children:"Expiry Date"}),(0,x.jsx)(a.pd,{type:"text",name:"expiry",required:!0,placeholder:"MM/YYYY",inputMode:"numeric",maxLength:7,pattern:"(0[1-9]|1[0-2])\\/\\d{4}",onInput:e=>{let t=e.target.value.replace(/\D/g,"");t.length>6&&(t=t.slice(0,6)),t.length>=3&&(t=t.slice(0,2)+"/"+t.slice(2)),e.target.value=t}})]}),(0,x.jsxs)(a.gE,{children:[(0,x.jsx)(a.JU,{children:"CVV"}),(0,x.jsx)(a.pd,{type:"text",name:"cvv",required:!0,placeholder:"123"})]})]}),(0,x.jsxs)(a.e2,{children:[(0,x.jsx)(a.$n,{type:"button",className:"cancel",onClick:()=>f(!1),children:"Cancel"}),(0,x.jsx)(a.$n,{type:"submit",className:"submit",children:"Pay Now"})]})]})]})})]})}}}]);
//# sourceMappingURL=110.ef7cbf6a.chunk.js.map