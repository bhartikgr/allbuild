"use strict";(self.webpackChunkkeiretsuproject=self.webpackChunkkeiretsuproject||[]).push([[454],{2837:(e,a,l)=>{l.d(a,{$K:()=>o,CB:()=>c,Cd:()=>f,FC:()=>r,Jq:()=>m,R3:()=>y,SD:()=>i,Zw:()=>x,dN:()=>g,hJ:()=>j,mO:()=>s,mg:()=>d,nj:()=>b,pd:()=>v,uM:()=>h,vE:()=>t,z6:()=>p});var n=l(5464);const s=n.default.div`
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
`,t=n.default.span`
  svg {
    width: 16px;
    height: 16px;
    stroke: #9c9c9c;
    stroke-width: 1.2;
    margin-right: 6px;
    vertical-align: middle;
  }
`,i=(n.default.div`
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
`),r=n.default.div`
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
`,o=n.default.div`
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
`,x=n.default.div`
  label {
    font-weight: 400;
    cursor: pointer;
    margin-left: 10px;
  }
`,m=(n.default.div`
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
`),u=(n.default.div`
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
`),g=((0,n.default)(u)`
  left: -60px;

  @media only screen and (max-width: 991.98px) {
    left: -30px;
  }
`,(0,n.default)(u)`
  right: -60px;

  @media only screen and (max-width: 991.98px) {
    right: -30px;
  }
`,n.default.sup`
  color: var(--primary-color);
`),j=n.default.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: ${e=>{let{show:a}=e;return a?"flex":"none"}};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,f=n.default.div`
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
`,b=n.default.button`
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
`,v=n.default.input`
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 16px;
`,y=n.default.button`
  padding: 0.6rem 1.2rem;
  background-color: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`},3590:(e,a,l)=>{l.d(a,{A:()=>s});l(5043);var n=l(579);const s=function(e){let{message:a,onClose:l}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"alert alert-danger alert-dismissible fade show mt-3",role:"alert",children:[(0,n.jsx)("strong",{children:"Error!"})," ",a,(0,n.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close",onClick:l})]})})}},5318:(e,a,l)=>{l.r(a),l.d(a,{default:()=>k});var n=l(5043),s=l(3216),t=l(6213),i=l(3590),r=(l(8421),l(5015),l(6632)),o=(l(5016),l(8713)),d=l(2837),c=l(5731),p=l(4459),x=l(5327),m=l(8814),h=l(5692),u=l(5264),g=l(780),j=l(6873),f=l(7118),b=l(2574),v=l(3639),y=l(8006),_=l(5469),N=l(5242),w=l(579);function k(){const e=(0,s.Zp)(),[a,l]=(0,n.useState)(new Date),[k,S]=(0,n.useState)(!1),[C,q]=(0,n.useState)(!1),[A,F]=(0,n.useState)([]),[z,J]=(0,n.useState)(null),[M,L]=(0,n.useState)(null),[E,P]=(0,n.useState)(!0),[D,I]=(0,n.useState)(!1),[R,W]=(0,n.useState)(!1),[B,O]=(0,n.useState)(!1),[Z,V]=(0,n.useState)(!1),[T,$]=(0,n.useState)(!1),[U,Y]=(0,n.useState)(!1),[K,H]=(0,n.useState)(!1),[G,Q]=(0,n.useState)(""),[X,ee]=(0,n.useState)([]),[ae,le]=(0,n.useState)(""),[ne,se]=(0,n.useState)(""),te=(0,n.useRef)(null),[ie,re]=(0,n.useState)(0),[oe,de]=(0,n.useState)(0),[ce,pe]=(0,n.useState)(0),[xe,me]=(0,n.useState)(0),[he,ue]=(0,n.useState)(0),[ge,je]=(0,n.useState)(0),[fe,be]=(0,n.useState)(0),[ve,ye]=(0,n.useState)(0),[_e,Ne]=(0,n.useState)(""),[we,ke]=(0,n.useState)("");(0,n.useEffect)((()=>{const e=localStorage.getItem("UserLoginData"),a=JSON.parse(e);ke(a),null!==a&&(window.location.href="/home")}),[we]);const[Se,Ce]=(0,n.useState)(1),[qe,Ae]=(0,n.useState)({first_name:"",last_name:"",role:"",email:"",confirm_email:"",linked_in:"",phone:""});(0,n.useEffect)((()=>{Fe()}),[]);const Fe=async()=>{try{const e=await t.A.post(We+"getallcountry",qe,{headers:{Accept:"application/json","Content-Type":"application/json"}});F(e.data.results)}catch(e){}},[ze,Je]=(0,n.useState)({emailMatch:""}),[Me,Le]=(0,n.useState)({city_step2:"",company_name:"",year_registration:"",company_website:"",employee_number:"",company_linkedin:"",company_wechat:"",company_mail_address:"",company_state:"",company_city:"",company_postal_code:"",company_country:""}),[Ee,Pe]=(0,n.useState)({}),[De,Ie]=(0,n.useState)({}),Re=e=>{const{name:a,value:l}=e.target;Ae((e=>({...e,[a]:l}))),Le((e=>({...e,[a]:l}))),Pe((e=>({...e,[a]:l}))),"email"!==a&&"confirm_email"!==a||("email"===a&&l!==qe.confirm_email||"confirm_email"===a&&l!==qe.email?Je((e=>({...e,emailMatch:"Emails do not match."}))):Je((e=>({...e,emailMatch:""}))))};var We="https://blueprintcatalyst.com/api/user/";const Be=A.map((e=>({value:e.code,label:e.name}))),Oe=e=>!!new RegExp("^(https?:\\/\\/)?((([a-zA-Z0-9\\-])+\\.)+[a-zA-Z]{2,})(\\:[0-9]{1,5})?(\\/.*)?$","i").test(e);return(0,w.jsxs)(d.mO,{children:[(0,w.jsxs)("div",{className:"fullpage d-block",children:[(0,w.jsx)(d.SD,{children:(0,w.jsx)("div",{className:"container-lg",children:(0,w.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,w.jsx)("a",{href:"#",className:"logo",children:(0,w.jsx)("img",{src:"/assets/user/images/logo.png",alt:"logo"})}),(0,w.jsxs)("div",{className:"d-flex align-items-center gap-3",children:[(0,w.jsxs)(d.FC,{children:[(0,w.jsx)(c.A,{strokeWidth:1.5}),(0,w.jsxs)("select",{name:"",id:"",className:"form-control",children:[(0,w.jsx)("option",{value:"",children:"Select Language"}),(0,w.jsx)("option",{value:"",children:"Mandarin"}),(0,w.jsx)("option",{value:"",children:"English"})]})]}),(0,w.jsx)("a",{href:"/login",className:"logo text-white",children:"Login"})]})]})})}),(0,w.jsx)(d.$K,{className:"d-block py-5",children:(0,w.jsx)("div",{className:"container-lg",children:(0,w.jsx)("div",{className:"row justify-content-center",children:(0,w.jsxs)("div",{className:"col-lg-9 col-md-10",children:[_e&&(0,w.jsx)(i.A,{message:_e,onClose:()=>Ne("")}),E&&(0,w.jsx)("form",{action:"javascript:void(0)",method:"post",onSubmit:async e=>{if(e.preventDefault(),qe.email===qe.confirm_email){if(qe.first_name&&qe.last_name&&qe.email&&qe.confirm_email&&qe.phone)try{"2"===(await t.A.post(We+"checkCompanyEmail",qe,{headers:{Accept:"application/json","Content-Type":"application/json"}})).data.status?(Ne("Email is already exists"),setTimeout((()=>{Ne("")}),2500)):(P(!1),I(!0))}catch(a){}}else Je((e=>({...e,emailMatch:"Emails do not match."})))},children:(0,w.jsx)(d.mg,{id:"step1",children:(0,w.jsxs)("div",{className:"d-flex flex-column gap-5",children:[(0,w.jsx)(d.CB,{children:"personal contact info"}),(0,w.jsxs)("div",{className:"row gy-3",children:[(0,w.jsx)("div",{className:"col-md-6",children:(0,w.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,w.jsxs)("label",{htmlFor:"",children:["First Name ",(0,w.jsx)(d.dN,{children:"*"})]}),(0,w.jsxs)(d.Jq,{children:[(0,w.jsx)(p.A,{}),(0,w.jsx)("input",{value:qe.first_name,onChange:Re,type:"text",name:"first_name",required:!0,placeholder:""})]})]})}),(0,w.jsx)("div",{className:"col-md-6",children:(0,w.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,w.jsxs)("label",{htmlFor:"",children:["Last Name ",(0,w.jsx)(d.dN,{children:"*"})]}),(0,w.jsxs)(d.Jq,{children:[(0,w.jsx)(p.A,{}),(0,w.jsx)("input",{value:qe.last_name,onChange:Re,type:"text",name:"last_name",required:!0,placeholder:""})]})]})}),(0,w.jsx)("div",{className:"col-md-6",children:(0,w.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,w.jsxs)("label",{htmlFor:"",children:["Email ",(0,w.jsx)(d.dN,{children:"*"})]}),(0,w.jsxs)(d.Jq,{children:[(0,w.jsx)(x.A,{}),(0,w.jsx)("input",{value:qe.email,onChange:Re,type:"email",required:!0,name:"email",placeholder:""})]})]})}),(0,w.jsx)("div",{className:"col-md-6",children:(0,w.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,w.jsxs)("label",{htmlFor:"",children:["Confirm Email ",(0,w.jsx)(d.dN,{children:"*"})]}),(0,w.jsxs)(d.Jq,{children:[(0,w.jsx)(x.A,{}),(0,w.jsx)("input",{value:qe.confirm_email,onChange:Re,type:"email",required:!0,name:"confirm_email",placeholder:""}),ze.emailMatch&&(0,w.jsx)("div",{className:"text-danger text-start fw-semibold",children:ze.emailMatch})]})]})}),(0,w.jsx)("div",{className:"col-md-6",children:(0,w.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,w.jsx)("label",{htmlFor:"",children:"LinkedIn Profile"}),(0,w.jsxs)(d.Jq,{children:[(0,w.jsx)(m.A,{}),(0,w.jsx)("input",{value:qe.linked_in,onChange:Re,type:"text",name:"linked_in",placeholder:""})]})]})}),(0,w.jsx)("div",{className:"col-md-6",children:(0,w.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,w.jsxs)("label",{htmlFor:"",children:["Phone Number ",(0,w.jsx)(d.dN,{children:"*"})]}),(0,w.jsx)(d.Jq,{children:(0,w.jsx)(r.Ay,{required:!0,name:"phone",defaultCountry:"CA",value:qe.phone,onChange:e=>{Ae((a=>({...a,phone:e})))},placeholder:"Enter phone number"})})]})}),(0,w.jsx)("div",{className:"col-12",children:(0,w.jsx)("div",{className:"d-flex justify-content-end mt-4",children:(0,w.jsx)("div",{className:"flex-shrink-0",children:(0,w.jsxs)("button",{type:"submit",className:"sbtn nextbtn","data-step":"1",children:["next ",(0,w.jsx)(h.A,{})]})})})})]})]})})}),D&&(0,w.jsx)("form",{action:"javascript:void(0)",method:"post",onSubmit:e=>{e.preventDefault();const{name:a,value:l}=e.target;if(""!==Me.company_website){if(!Oe(Me.company_website))return te.current.scrollIntoView({behavior:"smooth",block:"center"}),void S(!0);S(!1)}console.log(Me.company_website),Me.city_step2&&Me.company_name&&Me.employee_number&&Me.company_mail_address&&Me.company_website&&ae&&Me.company_city&&Me.company_postal_code&&(I(!1),W(!0))},children:(0,w.jsx)(d.mg,{id:"step2",children:(0,w.jsxs)("div",{className:"d-flex flex-column gap-5",children:[(0,w.jsx)(d.CB,{children:"company contact info"}),(0,w.jsxs)("div",{className:"row gy-3",children:[(0,w.jsx)("div",{className:"col-12",children:(0,w.jsx)("label",{htmlFor:"",children:"What city/country is your company located?"})}),(0,w.jsx)("div",{className:"col-md-6",children:(0,w.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,w.jsxs)("label",{htmlFor:"",children:["Name of Company ",(0,w.jsx)(d.dN,{children:"*"})]}),(0,w.jsxs)(d.Jq,{children:[(0,w.jsx)(u.A,{}),(0,w.jsx)("input",{defaultValue:Me.company_name,onChange:Re,type:"text",placeholder:"",name:"company_name",required:!0})]})]})}),(0,w.jsx)("div",{className:"col-md-6",children:(0,w.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,w.jsx)("label",{htmlFor:"",children:"Year of Registration"}),(0,w.jsxs)(d.Jq,{children:[(0,w.jsx)(g.A,{}),(0,w.jsx)("input",{value:Me.year_registration,onChange:e=>{const a=e.target.value;/^\d*$/.test(a)&&Le((e=>({...e,year_registration:a})))},type:"text",inputMode:"numeric",pattern:"\\d*",name:"year_registration",required:!0,placeholder:""})]})]})}),(0,w.jsx)("div",{className:"col-md-6",children:(0,w.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,w.jsx)("label",{htmlFor:"",children:"Role / Position at the company"}),(0,w.jsxs)(d.Jq,{children:[(0,w.jsx)(j.A,{}),(0,w.jsx)("input",{value:qe.role,onChange:Re,type:"text",name:"role",placeholder:""})]})]})}),(0,w.jsx)("div",{className:"col-md-6",children:(0,w.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,w.jsxs)("label",{htmlFor:"",children:["Company Website / URL ",(0,w.jsx)(d.dN,{children:"*"})]}),(0,w.jsxs)(d.Jq,{children:[(0,w.jsx)(c.A,{strokeWidth:1.5}),(0,w.jsx)("input",{ref:te,required:!0,defaultValue:Me.company_website,onChange:Re,type:"text",name:"company_website",placeholder:""}),k&&(0,w.jsx)("div",{className:"text-danger text-start fw-semibold",children:"Please enter valid website url (eg:www.domain.com)"})]})]})}),(0,w.jsx)("div",{className:"col-md-6",children:(0,w.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,w.jsxs)("label",{htmlFor:"",children:["Number of Employees ",(0,w.jsx)(d.dN,{children:"*"})]}),(0,w.jsxs)(d.Jq,{children:[(0,w.jsx)(f.A,{}),(0,w.jsx)("input",{value:Me.employee_number,onChange:e=>{const a=e.target.value;/^\d*$/.test(a)&&Le((e=>({...e,employee_number:a})))},type:"text",name:"employee_number",required:!0,placeholder:""})]})]})}),(0,w.jsx)("div",{className:"col-md-6",children:(0,w.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,w.jsx)("label",{htmlFor:"",children:"LinkedIn Profile"}),(0,w.jsxs)(d.Jq,{children:[(0,w.jsx)(m.A,{}),(0,w.jsx)("input",{defaultValue:Me.company_linkedin,onChange:Re,type:"text",name:"company_linkedin",placeholder:""})]})]})}),(0,w.jsx)("div",{className:"col-md-6",children:(0,w.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,w.jsx)("label",{htmlFor:"",children:"WeChat (\u5fae\u4fe1)"}),(0,w.jsxs)(d.Jq,{children:[(0,w.jsx)(b.A,{}),(0,w.jsx)("input",{defaultValue:Me.company_wechat,onChange:Re,type:"text",name:"company_wechat",placeholder:""})]})]})}),(0,w.jsx)("div",{className:"col-md-6",children:(0,w.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,w.jsxs)("label",{htmlFor:"",children:["Company Mailing Address ",(0,w.jsx)(d.dN,{children:"*"})]}),(0,w.jsxs)(d.Jq,{children:[(0,w.jsx)(u.A,{}),(0,w.jsx)("input",{defaultValue:Me.company_mail_address,onChange:Re,name:"company_mail_address",required:!0,id:"",placeholder:"type here...",type:"email"})]})]})}),(0,w.jsx)("div",{className:"col-md-12",children:(0,w.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,w.jsxs)("label",{htmlFor:"",children:["City ",(0,w.jsx)(d.dN,{children:"*"})]}),(0,w.jsxs)(d.Jq,{children:[(0,w.jsx)(v.A,{}),(0,w.jsx)("input",{defaultValue:Me.city_step2,onChange:Re,type:"text",name:"city_step2",required:!0,placeholder:""})]})]})}),(0,w.jsx)("div",{className:"col-12",children:(0,w.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,w.jsxs)("label",{htmlFor:"",children:["Company Country ",(0,w.jsx)(d.dN,{children:"*"})]}),(0,w.jsxs)(d.Jq,{children:[(0,w.jsx)(c.A,{strokeWidth:1.5}),(0,w.jsxs)("select",{required:!0,name:"company_country",onChange:e=>{const a=e.target.value,l=e.target.options[e.target.selectedIndex].text;se(a),L(l),Le((a=>({...a,company_country:e.target.value})));const n=o.Ay.getStatesOfCountry(a);console.log(n),ee(n)},value:Me.company_country,placeholder:"Select or type a country",className:"form-select",children:[(0,w.jsx)("option",{value:"",children:"Select or type a country"}),Be.map((e=>(0,w.jsx)("option",{value:e.value,children:e.label})))]})]})]})}),(0,w.jsx)("div",{className:"col-12",children:(0,w.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,w.jsxs)("label",{htmlFor:"",children:["Company State / Province / Territory / District"," ",(0,w.jsx)(d.dN,{children:"*"})]}),(0,w.jsxs)(d.Jq,{children:[(0,w.jsx)(u.A,{}),(0,w.jsxs)("select",{required:!0,name:"company_state",value:ae,onChange:e=>{le(e.target.value),console.log("Selected state ISO code:",e.target.value)},children:[(0,w.jsx)("option",{value:"",children:"-- Select State --"}),X.map((e=>(0,w.jsx)("option",{value:e.isoCode,children:e.name},e.isoCode)))]})]})]})}),(0,w.jsx)("div",{className:"col-md-6",children:(0,w.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,w.jsxs)("label",{htmlFor:"",children:["Company City ",(0,w.jsx)(d.dN,{children:"*"})]}),(0,w.jsxs)(d.Jq,{children:[(0,w.jsx)(v.A,{}),(0,w.jsx)("input",{defaultValue:Me.company_city,onChange:Re,type:"text",required:!0,name:"company_city",placeholder:""})]})]})}),(0,w.jsx)("div",{className:"col-md-6",children:(0,w.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,w.jsxs)("label",{htmlFor:"",children:["Company postal code/zip ",(0,w.jsx)(d.dN,{children:"*"})]}),(0,w.jsxs)(d.Jq,{children:[(0,w.jsx)(y.A,{}),(0,w.jsx)("input",{defaultValue:Me.company_postal_code,onChange:Re,type:"text",required:!0,name:"company_postal_code",placeholder:""})]})]})}),(0,w.jsx)("div",{className:"col-12",children:(0,w.jsxs)("div",{className:"d-flex justify-content-between mt-4",children:[(0,w.jsx)("div",{className:"flex-shrink-0",children:(0,w.jsxs)("button",{type:"button",className:"sbtn backbtn","data-step":"2",onClick:()=>{P(!0),I(!1)},children:[(0,w.jsx)(_.A,{})," back"]})}),(0,w.jsx)("div",{className:"flex-shrink-0",children:(0,w.jsxs)("button",{type:"submit",className:"sbtn nextbtn","data-step":"2",children:["next ",(0,w.jsx)(h.A,{})]})})]})})]})]})})}),R&&(0,w.jsx)("form",{action:"javascript:void(0)",method:"post",onSubmit:e=>{e.preventDefault(),O(!0),W(!1)},children:(0,w.jsx)(d.mg,{id:"step3",children:(0,w.jsxs)("div",{className:"d-flex flex-column gap-5",children:[(0,w.jsx)(d.CB,{children:"company status"}),(0,w.jsxs)("div",{className:"row gy-3",children:[(0,w.jsx)("div",{className:"col-12",children:(0,w.jsx)("label",{htmlFor:"",children:"Sector (pull-down menu CHECK OUR DEALUM PLATFORM)"})}),(0,w.jsx)("div",{className:"col-12",children:(0,w.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,w.jsxs)("label",{htmlFor:"",children:["What is your company's current stage?"," ",(0,w.jsx)(d.dN,{children:"*"})]}),(0,w.jsxs)(d.z6,{id:"companyStage",children:[(0,w.jsxs)(d.Zw,{children:[(0,w.jsx)("input",{type:"radio",name:"stage_step3",checked:"company_current_seed"===Ee.stage_step3,required:!0,value:"company_current_seed",id:"concept",onChange:Re}),(0,w.jsx)("label",{htmlFor:"concept",children:"Concept / Seed stage (idea)"})]}),(0,w.jsxs)(d.Zw,{children:[(0,w.jsx)("input",{type:"radio",checked:"company_current_planning"===Ee.stage_step3,name:"stage_step3",value:"company_current_planning",id:"planning",onChange:Re,required:!0}),(0,w.jsx)("label",{htmlFor:"planning",children:"Planning (business modelling)"})]}),(0,w.jsxs)(d.Zw,{children:[(0,w.jsx)("input",{checked:"company_current_execution"===Ee.stage_step3,type:"radio",name:"stage_step3",value:"company_current_execution",id:"execution",onChange:Re,required:!0}),(0,w.jsx)("label",{htmlFor:"execution",children:"Execution (MVP development)"})]})]})]})}),(0,w.jsx)("div",{className:"col-12",children:(0,w.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,w.jsxs)("label",{htmlFor:"",children:["If In-Revenue, what was your last year\u2019s GROSS revenue? ",(0,w.jsx)(d.dN,{children:"*"})]}),(0,w.jsxs)(d.z6,{id:"companygross",children:[(0,w.jsxs)(d.Zw,{children:[(0,w.jsx)("input",{checked:"gross_revenue_market"===Ee.gross_revenue,type:"radio",name:"gross_revenue",value:"gross_revenue_market",id:"market-validation",onChange:Re,required:!0}),(0,w.jsx)("label",{htmlFor:"market-validation",children:"Market validation (at least one paying customer)"})]}),(0,w.jsxs)(d.Zw,{children:[(0,w.jsx)("input",{checked:"gross_revenue_Inmarket"===Ee.gross_revenue,type:"radio",name:"gross_revenue",value:"gross_revenue_Inmarket",id:"in-market",onChange:Re,required:!0}),(0,w.jsx)("label",{htmlFor:"in-market",children:"In-market (more than one paying customer)"})]}),(0,w.jsxs)(d.Zw,{children:[(0,w.jsx)("input",{checked:"gross_revenue_small"===Ee.gross_revenue,type:"radio",name:"gross_revenue",value:"gross_revenue_small",id:"small-scale",onChange:Re,required:!0}),(0,w.jsx)("label",{htmlFor:"small-scale",children:"Small Scale (regional, national paying customers)"})]}),(0,w.jsxs)(d.Zw,{children:[(0,w.jsx)("input",{type:"radio",checked:"gross_revenue_large"===Ee.gross_revenue,name:"gross_revenue",value:"gross_revenue_large",id:"large-scale",onChange:Re,required:!0}),(0,w.jsx)("label",{htmlFor:"large-scale",children:"Large Scale (includes international customers)"})]})]})]})}),(0,w.jsx)("div",{className:"col-12",children:(0,w.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,w.jsxs)("label",{htmlFor:"",children:["One-sentence headliner about the company"," ",(0,w.jsx)(d.dN,{children:"*"})]}),(0,w.jsxs)(d.Jq,{children:[(0,w.jsx)(u.A,{}),(0,w.jsx)("textarea",{id:"headline",required:!0,name:"headline",onChange:e=>{const a=e.target.value,{name:l,value:n}=e.target;Pe((e=>({...e,[l]:n}))),re(a.length)},maxLength:"240",placeholder:"Max 240 characters...",children:Ee.headline||""})]}),(0,w.jsxs)("div",{className:"char-count",children:[ie,"/240"]})]})}),(0,w.jsx)("div",{className:"col-12",children:(0,w.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,w.jsxs)("label",{htmlFor:"",children:["Brief description of your company ",(0,w.jsx)(d.dN,{children:"*"})]}),(0,w.jsxs)(d.Jq,{children:[(0,w.jsx)(u.A,{}),(0,w.jsx)("textarea",{required:!0,onChange:e=>{const a=e.target.value,{name:l,value:n}=e.target;Pe((e=>({...e,[l]:n}))),de(a.length)},id:"description",name:"descriptionBrief",maxLength:"800",placeholder:"Max 800 characters...",children:Ee.descriptionBrief||""})]}),(0,w.jsxs)("div",{className:"char-count",children:[oe,"/800"]})]})}),(0,w.jsx)("div",{className:"col-12",children:(0,w.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,w.jsxs)("label",{htmlFor:"",children:["What problem are you solving? ",(0,w.jsx)(d.dN,{children:"*"})]}),(0,w.jsxs)(d.Jq,{children:[(0,w.jsx)(u.A,{}),(0,w.jsx)("textarea",{required:!0,id:"problem",onChange:e=>{const a=e.target.value,{name:l,value:n}=e.target;Pe((e=>({...e,[l]:n}))),pe(a.length)},name:"descriptionProblem",maxLength:"400",placeholder:"Max 400 characters...",children:Ee.descriptionProblem||""})]}),(0,w.jsxs)("div",{className:"char-count",children:[ce,"/400"]})]})}),(0,w.jsx)("div",{className:"col-12",children:(0,w.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,w.jsxs)("label",{htmlFor:"",children:["What is your solution/value offer? ",(0,w.jsx)(d.dN,{children:"*"})]}),(0,w.jsxs)(d.Jq,{children:[(0,w.jsx)(u.A,{}),(0,w.jsx)("textarea",{required:!0,id:"solution",name:"descriptionSolution",onChange:e=>{const a=e.target.value,{name:l,value:n}=e.target;Pe((e=>({...e,[l]:n}))),me(a.length)},maxLength:"400",placeholder:"Max 400 characters...",children:Ee.descriptionSolution||""})]}),(0,w.jsxs)("div",{className:"char-count",children:[xe,"/400"]})]})}),(0,w.jsx)("div",{className:"col-12",children:(0,w.jsxs)("div",{className:"d-flex justify-content-between mt-4",children:[(0,w.jsx)("div",{className:"flex-shrink-0",children:(0,w.jsxs)("button",{type:"button",className:"sbtn backbtn","data-step":"3",onClick:()=>{W(!1),I(!0)},children:[(0,w.jsx)(_.A,{})," back"]})}),(0,w.jsx)("div",{className:"flex-shrink-0",children:(0,w.jsxs)("button",{type:"submit",className:"sbtn nextbtn","data-step":"3",children:["next ",(0,w.jsx)(h.A,{})]})})]})})]})]})})}),B&&(0,w.jsx)("form",{action:"javascript:void(0)",method:"post",onSubmit:async a=>{a.preventDefault();let l={first_name:qe.first_name,last_name:qe.last_name,email:qe.email,role:qe.role,linked_in:qe.linked_in,phone:qe.phone,city_step2:Me.city_step2,company_name:Me.company_name,year_registration:Me.year_registration,company_website:Me.company_website,employee_number:Me.employee_number,company_linkedin:Me.company_linkedin,company_wechat:Me.company_wechat,company_mail_address:Me.company_mail_address,company_state:ae,company_city:Me.company_city,company_postal_code:Me.company_postal_code,company_country:M,stage_step3:Ee.stage_step3,gross_revenue:Ee.gross_revenue,headline:Ee.headline,descriptionBrief:Ee.descriptionBrief,descriptionProblem:Ee.descriptionProblem,descriptionSolution:Ee.descriptionSolution,headlineStep4:De.headlineStep4,descriptionStep4:De.descriptionStep4,problemStep4:De.problemStep4,solutionStep4:De.solutionStep4};console.log(l);try{const a=(await t.A.post(We+"userRegister",l,{headers:{Accept:"application/json","Content-Type":"application/json"}})).data;if(console.log(a),"2"===a.status)P(!0),O(!1),Je((e=>({...e,emailMatch:a.message}))),Ne(a.message),setTimeout((()=>{Ne(""),Je((e=>({...e,emailMatch:""})))}),2500);else{Je((e=>({...e,emailMatch:""})));let l={id:a.id,email:a.email,first_name:a.first_name,last_name:a.last_name,access_token:a.access_token};localStorage.setItem("UserLoginData",JSON.stringify(l)),e("/home")}}catch(n){n.response&&n.response.data&&n.response.data.message}},children:(0,w.jsx)(d.mg,{id:"step4",children:(0,w.jsxs)("div",{className:"d-flex flex-column gap-5",children:[(0,w.jsxs)(d.CB,{children:["What Problem Does Your ",(0,w.jsx)("br",{}),"Company Solve?"]}),(0,w.jsxs)("div",{className:"row gy-3",children:[(0,w.jsx)("div",{className:"col-12",children:(0,w.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,w.jsxs)("label",{htmlFor:"",children:["One-sentence headliner about the company"," ",(0,w.jsx)(d.dN,{children:"*"})]}),(0,w.jsxs)(d.Jq,{children:[(0,w.jsx)(u.A,{}),(0,w.jsx)("textarea",{id:"headline",name:"headlineStep4",required:!0,value:De.headlineStep4||"",maxLength:"240",onChange:e=>{const a=e.target.value,{name:l,value:n}=e.target;Ie((e=>({...e,[l]:n}))),ue(a.length)},placeholder:"Max 240 characters..."})]}),(0,w.jsxs)("div",{className:"char-count",children:[he,"/400"]})]})}),(0,w.jsx)("div",{className:"col-12",children:(0,w.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,w.jsxs)("label",{htmlFor:"",children:["Brief description of your company ",(0,w.jsx)(d.dN,{children:"*"})]}),(0,w.jsxs)(d.Jq,{children:[(0,w.jsx)(u.A,{}),(0,w.jsx)("textarea",{required:!0,id:"description",name:"descriptionStep4",maxLength:"800",onChange:e=>{const a=e.target.value,{name:l,value:n}=e.target;Ie((e=>({...e,[l]:n}))),je(a.length)},value:De.descriptionStep4||"",placeholder:"Max 800 characters..."})]}),(0,w.jsxs)("div",{className:"char-count",children:[ge,"/800"]})]})}),(0,w.jsx)("div",{className:"col-12",children:(0,w.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,w.jsxs)("label",{htmlFor:"",children:["What problem are you solving? ",(0,w.jsx)(d.dN,{children:"*"})]}),(0,w.jsxs)(d.Jq,{children:[(0,w.jsx)(N.A,{}),(0,w.jsx)("textarea",{required:!0,id:"problem",name:"problemStep4",maxLength:"400",onChange:e=>{const a=e.target.value,{name:l,value:n}=e.target;Ie((e=>({...e,[l]:n}))),be(a.length)},value:De.problemStep4||"",placeholder:"Max 400 characters..."})]}),(0,w.jsxs)("div",{className:"char-count",children:[fe,"/400"]})]})}),(0,w.jsx)("div",{className:"col-12",children:(0,w.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,w.jsxs)("label",{htmlFor:"",children:["What is your solution/value offer? ",(0,w.jsx)(d.dN,{children:"*"})]}),(0,w.jsxs)(d.Jq,{children:[(0,w.jsx)(N.A,{}),(0,w.jsx)("textarea",{required:!0,id:"solution",name:"solutionStep4",maxLength:"400",onChange:e=>{const a=e.target.value,{name:l,value:n}=e.target;Ie((e=>({...e,[l]:n}))),ye(a.length)},value:De.solutionStep4||"",placeholder:"Max 400 characters..."})]}),(0,w.jsxs)("div",{className:"char-count",children:[ve,"/400"]})]})}),(0,w.jsx)("div",{className:"col-12",children:(0,w.jsxs)("div",{className:"d-flex justify-content-between mt-4",children:[(0,w.jsx)("div",{className:"flex-shrink-0",children:(0,w.jsxs)("button",{type:"button",className:"sbtn backbtn","data-step":"4",onClick:()=>{W(!0),O(!1)},children:[(0,w.jsx)(_.A,{})," back"]})}),(0,w.jsx)("div",{className:"flex-shrink-0",children:(0,w.jsxs)("button",{type:"submit",className:"sbtn nextbtn","data-step":"4",children:["next ",(0,w.jsx)(h.A,{})]})})]})})]})]})})})]})})})})]}),(0,w.jsx)(d.hJ,{show:C,children:(0,w.jsxs)(d.Cd,{children:[(0,w.jsx)(d.nj,{onClick:()=>q(!1),children:"\xd7"}),(0,w.jsx)("form",{children:(0,w.jsxs)("div",{className:"d-flex flex-column gap-3",children:[(0,w.jsx)("div",{className:"d-block",children:(0,w.jsx)(d.pd,{type:"text",name:"name",placeholder:"Your Name",value:qe.name,onChange:Re,required:!0})}),(0,w.jsx)("div",{className:"d-block",children:(0,w.jsx)(d.pd,{type:"email",name:"email",placeholder:"Your Email",value:qe.email,onChange:Re,required:!0})}),(0,w.jsx)("div",{className:"d-flex justify-content-end",children:(0,w.jsx)(d.R3,{type:"submit",children:"Submit"})})]})})]})})]})}}}]);
//# sourceMappingURL=454.9f2a030d.chunk.js.map