"use strict";(self.webpackChunkkeiretsuproject=self.webpackChunkkeiretsuproject||[]).push([[454],{2837:(e,a,s)=>{s.d(a,{$K:()=>o,CB:()=>d,Cd:()=>f,FC:()=>r,Jq:()=>h,R3:()=>y,SD:()=>l,Zw:()=>m,dN:()=>g,hJ:()=>j,mO:()=>n,mg:()=>c,nj:()=>v,pd:()=>b,uM:()=>x,vE:()=>t,z6:()=>p});var i=s(5464);const n=i.default.div`
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
`,t=i.default.span`
  svg {
    width: 16px;
    height: 16px;
    stroke: #9c9c9c;
    stroke-width: 1.2;
    margin-right: 6px;
    vertical-align: middle;
  }
`,l=(i.default.div`
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
`),r=i.default.div`
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
`,o=i.default.div`
  display: block;
  padding: 3rem 0; /* py-5 is 3rem top & bottom */
  background-color: #f3f5f7;
  min-height: 100vh;
`,c=i.default.div`
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
`,d=i.default.div`
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
`,m=i.default.div`
  label {
    font-weight: 400;
    cursor: pointer;
    margin-left: 10px;
  }
`,h=(i.default.div`
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
`),x=(i.default.div`
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
`),u=(i.default.div`
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
`),g=((0,i.default)(u)`
  left: -60px;

  @media only screen and (max-width: 991.98px) {
    left: -30px;
  }
`,(0,i.default)(u)`
  right: -60px;

  @media only screen and (max-width: 991.98px) {
    right: -30px;
  }
`,i.default.sup`
  color: var(--primary-color);
`),j=i.default.div`
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
`,f=i.default.div`
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
`,b=i.default.input`
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
`},3590:(e,a,s)=>{s.d(a,{A:()=>n});s(5043);var i=s(579);const n=function(e){let{message:a,onClose:s}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"alert alert-danger alert-dismissible fade show mt-3",role:"alert",children:[(0,i.jsx)("strong",{children:"Error!"})," ",a,(0,i.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close",onClick:s})]})})}},5318:(e,a,s)=>{s.r(a),s.d(a,{default:()=>w});var i=s(5043),n=s(3216),t=s(6213),l=s(3590),r=(s(8421),s(5015),s(6632)),o=(s(5016),s(4910)),c=s(2585),d=s(2837),p=s(4459),m=s(5327),h=s(8814),x=s(6873),u=s(5692),g=s(5264),j=s(5731),f=s(7118),v=s(780),b=s(3639),y=s(8006),_=s(5469),N=s(5242),k=s(579);function w(){const e=(0,n.Zp)(),[a,s]=(0,i.useState)(new Date),[w,S]=(0,i.useState)(!1),[C,q]=(0,i.useState)(!1),[A,z]=(0,i.useState)([]),[F,E]=(0,i.useState)(null),[M,T]=(0,i.useState)(null),[I,P]=(0,i.useState)(!0),[J,L]=(0,i.useState)(!1),[D,W]=(0,i.useState)(!1),[Z,G]=(0,i.useState)(!1),[R,H]=(0,i.useState)(!1),[O,V]=(0,i.useState)(!1),[B,U]=(0,i.useState)(!1),[$,K]=(0,i.useState)(!1),[Y,Q]=(0,i.useState)(""),[X,ee]=(0,i.useState)([]),[ae,se]=(0,i.useState)(""),[ie,ne]=(0,i.useState)(""),te=(0,i.useRef)(null),[le,re]=(0,i.useState)(0),[oe,ce]=(0,i.useState)(0),[de,pe]=(0,i.useState)(0),[me,he]=(0,i.useState)(0),[xe,ue]=(0,i.useState)(0),[ge,je]=(0,i.useState)(0),[fe,ve]=(0,i.useState)(0),[be,ye]=(0,i.useState)(0),[_e,Ne]=(0,i.useState)(""),[ke,we]=(0,i.useState)("");(0,i.useEffect)((()=>{const e=localStorage.getItem("UserLoginData"),a=JSON.parse(e);we(a),null!==a&&(window.location.href="/home")}),[ke]);const[Se,Ce]=(0,i.useState)(1),[qe,Ae]=(0,i.useState)({first_name:"",last_name:"",role:"",email:"",confirm_email:"",linked_in:"",phone:""});(0,i.useEffect)((()=>{ze()}),[]);const ze=async()=>{try{const e=await t.A.post(We+"getallcountry",qe,{headers:{Accept:"application/json","Content-Type":"application/json"}});z(e.data.results)}catch(e){}},[Fe,Ee]=(0,i.useState)({emailMatch:""}),[Me,Te]=(0,i.useState)({city_step2:"",company_street_address:"",company_name:"",year_registration:"",company_website:"",employee_number:"",company_linkedin:"",company_mail_address:"",company_state:"",company_postal_code:"",company_country:""}),[Ie,Pe]=(0,i.useState)({}),[Je,Le]=(0,i.useState)({}),De=e=>{const{name:a,value:s}=e.target;Ae((e=>({...e,[a]:s}))),Te((e=>({...e,[a]:s}))),Pe((e=>({...e,[a]:s}))),"email"!==a&&"confirm_email"!==a||("email"===a&&s!==qe.confirm_email||"confirm_email"===a&&s!==qe.email?Ee((e=>({...e,emailMatch:"Emails do not match."}))):Ee((e=>({...e,emailMatch:""}))))};var We="https://blueprintcatalyst.com/api/user/";const Ze=A.map((e=>({value:e.code,label:e.name}))),Ge=e=>!!new RegExp("^(https?:\\/\\/)?((([a-zA-Z0-9\\-])+\\.)+[a-zA-Z]{2,})(\\:[0-9]{1,5})?(\\/.*)?$","i").test(e),[Re,He]=(0,i.useState)(!0),[Oe,Ve]=(0,i.useState)([]);return(0,k.jsxs)(d.mO,{children:[(0,k.jsxs)("div",{className:"fullpage d-block",children:[(0,k.jsx)(d.SD,{children:(0,k.jsx)("div",{className:"container-lg",children:(0,k.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,k.jsx)("a",{href:"/",className:"logo",children:(0,k.jsx)("img",{src:"/assets/user/images/logo.png",alt:"logo"})}),(0,k.jsx)("div",{className:"d-flex align-items-center gap-3",children:(0,k.jsx)("a",{href:"/login",className:"logo text-white",children:"Login"})})]})})}),(0,k.jsx)(d.$K,{className:"d-block py-5",children:(0,k.jsx)("div",{className:"container-lg",children:(0,k.jsx)("div",{className:"row justify-content-center",children:(0,k.jsxs)("div",{className:"col-lg-9 col-md-10",children:[_e&&(0,k.jsx)(l.A,{message:_e,onClose:()=>Ne("")}),I&&(0,k.jsx)("form",{action:"javascript:void(0)",method:"post",onSubmit:async e=>{if(e.preventDefault(),qe.email===qe.confirm_email){if(qe.first_name&&qe.last_name&&qe.email&&qe.confirm_email&&qe.phone)try{"2"===(await t.A.post(We+"checkCompanyEmail",qe,{headers:{Accept:"application/json","Content-Type":"application/json"}})).data.status?(Ne("Email is already exists"),setTimeout((()=>{Ne("")}),2500)):(P(!1),L(!0))}catch(a){}}else Ee((e=>({...e,emailMatch:"Emails do not match."})))},children:(0,k.jsx)(d.mg,{id:"step1",children:(0,k.jsxs)("div",{className:"d-flex flex-column gap-5",children:[(0,k.jsx)(d.CB,{children:"personal contact info"}),(0,k.jsxs)("div",{className:"row gy-3",children:[(0,k.jsx)("div",{className:"col-md-6",children:(0,k.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,k.jsxs)("label",{htmlFor:"",children:["First Name ",(0,k.jsx)(d.dN,{className:"labelsize",children:"*"})]}),(0,k.jsxs)(d.Jq,{children:[(0,k.jsx)(p.A,{}),(0,k.jsx)("input",{value:qe.first_name,onChange:De,type:"text",name:"first_name",required:!0,placeholder:""})]})]})}),(0,k.jsx)("div",{className:"col-md-6",children:(0,k.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,k.jsxs)("label",{htmlFor:"",children:["Last Name ",(0,k.jsx)(d.dN,{className:"labelsize",children:"*"})]}),(0,k.jsxs)(d.Jq,{children:[(0,k.jsx)(p.A,{}),(0,k.jsx)("input",{value:qe.last_name,onChange:De,type:"text",name:"last_name",required:!0,placeholder:""})]})]})}),(0,k.jsx)("div",{className:"col-md-6",children:(0,k.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,k.jsxs)("label",{htmlFor:"",children:["Email ",(0,k.jsx)(d.dN,{className:"labelsize",children:"*"})]}),(0,k.jsxs)(d.Jq,{children:[(0,k.jsx)(m.A,{}),(0,k.jsx)("input",{value:qe.email,onChange:De,type:"email",required:!0,name:"email",placeholder:""})]})]})}),(0,k.jsx)("div",{className:"col-md-6",children:(0,k.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,k.jsxs)("label",{htmlFor:"",children:["Confirm Email ",(0,k.jsx)(d.dN,{className:"labelsize",children:"*"})]}),(0,k.jsxs)(d.Jq,{children:[(0,k.jsx)(m.A,{}),(0,k.jsx)("input",{value:qe.confirm_email,onChange:De,type:"email",required:!0,name:"confirm_email",placeholder:""}),Fe.emailMatch&&(0,k.jsx)("div",{className:"text-danger text-start fw-semibold",children:Fe.emailMatch})]})]})}),(0,k.jsx)("div",{className:"col-md-6",children:(0,k.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,k.jsx)("label",{htmlFor:"",children:"LinkedIn Profile"}),(0,k.jsxs)(d.Jq,{children:[(0,k.jsx)(h.A,{}),(0,k.jsx)("input",{value:qe.linked_in,onChange:De,type:"text",name:"linked_in",placeholder:""})]})]})}),(0,k.jsx)("div",{className:"col-md-6",children:(0,k.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,k.jsxs)("label",{htmlFor:"",children:["Phone Number ",(0,k.jsx)(d.dN,{className:"labelsize",children:"*"})]}),(0,k.jsx)(d.Jq,{children:(0,k.jsx)(r.Ay,{required:!0,name:"phone",defaultCountry:"CA",value:qe.phone,onChange:e=>{Ae((a=>({...a,phone:e})))},placeholder:"Enter phone number"})})]})}),(0,k.jsx)("div",{className:"col-md-12",children:(0,k.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,k.jsx)("label",{htmlFor:"",children:"Role / Position at the company"}),(0,k.jsxs)(d.Jq,{children:[(0,k.jsx)(x.A,{}),(0,k.jsx)("input",{value:qe.role,onChange:De,type:"text",name:"role",placeholder:""})]})]})}),(0,k.jsx)("div",{className:"col-12",children:(0,k.jsx)("div",{className:"d-flex justify-content-end mt-4",children:(0,k.jsx)("div",{className:"flex-shrink-0",children:(0,k.jsxs)("button",{type:"submit",className:"sbtn nextbtn","data-step":"1",children:["next ",(0,k.jsx)(u.A,{})]})})})})]})]})})}),J&&(0,k.jsx)("form",{action:"javascript:void(0)",method:"post",onSubmit:e=>{e.preventDefault();const{name:a,value:s}=e.target;if(""!==Me.company_website){if(!Ge(Me.company_website))return te.current.scrollIntoView({behavior:"smooth",block:"center"}),void S(!0);S(!1)}console.log(Me),Me.city_step2&&Me.company_name&&Me.employee_number&&Me.company_mail_address&&Me.company_website&&(L(!1),W(!0))},children:(0,k.jsx)(d.mg,{id:"step2",children:(0,k.jsxs)("div",{className:"d-flex flex-column gap-5",children:[(0,k.jsx)(d.CB,{children:"Company Contact Info"}),(0,k.jsxs)("div",{className:"row gy-3",children:[(0,k.jsx)("div",{className:"col-md-12",children:(0,k.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,k.jsxs)("label",{htmlFor:"",children:["Name of Company"," ",(0,k.jsx)(d.dN,{className:"labelsize",children:"*"})]}),(0,k.jsxs)(d.Jq,{children:[(0,k.jsx)(g.A,{}),(0,k.jsx)("input",{defaultValue:Me.company_name,onChange:De,type:"text",placeholder:"",name:"company_name",required:!0})]})]})}),(0,k.jsx)("div",{className:"col-md-12",children:(0,k.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,k.jsxs)("label",{htmlFor:"",children:["Industry ",(0,k.jsx)(d.dN,{className:"labelsize",children:"*"})]}),(0,k.jsxs)("select",{className:"",children:[(0,k.jsx)("option",{vlaue:"",children:"--Industry--"}),(0,k.jsx)("option",{vlaue:"Aerospace & Defense",children:"Aerospace & Defense"}),(0,k.jsx)("option",{vlaue:"Agriculture & Farming",children:"Agriculture & Farming"}),(0,k.jsx)("option",{vlaue:"Artificial Intelligence & Machine Learning",children:"Artificial Intelligence & Machine Learning"}),(0,k.jsx)("option",{vlaue:"Automotive",children:"Automotive"}),(0,k.jsx)("option",{vlaue:"Banking & Financial Services",children:"Banking & Financial Services"}),(0,k.jsx)("option",{vlaue:"Biotechnology",children:"Biotechnology"}),(0,k.jsx)("option",{vlaue:"Chemical Industry",children:"Chemical Industry"}),(0,k.jsx)("option",{vlaue:"Construction & Engineering",children:"Construction & Engineering"}),(0,k.jsx)("option",{vlaue:"Consumer Goods",children:"Consumer Goods"}),(0,k.jsx)("option",{vlaue:"Cybersecurity",children:"Cybersecurity"}),(0,k.jsx)("option",{vlaue:"Data Storage & Management",children:"Data Storage & Management"}),(0,k.jsx)("option",{vlaue:"Education & Training",children:"Education & Training"}),(0,k.jsx)("option",{vlaue:"Electric Vehicles & Sustainable Transportation",children:"Electric Vehicles & Sustainable Transportation"}),(0,k.jsx)("option",{vlaue:"Energy & Utilities",children:"Energy & Utilities"}),(0,k.jsx)("option",{vlaue:"Entertainment & Media",children:"Entertainment & Media"}),(0,k.jsx)("option",{vlaue:"Environmental Services & Sustainability",children:"Environmental Services & Sustainability"}),(0,k.jsx)("option",{vlaue:"Fashion & Apparel",children:"Fashion & Apparel"}),(0,k.jsx)("option",{vlaue:"Fintech & Digital Payments",children:"Fintech & Digital Payments"}),(0,k.jsx)("option",{vlaue:"Food & Beverage",children:"Food & Beverage"}),(0,k.jsx)("option",{vlaue:"Gaming & Esports",children:"Gaming & Esports"}),(0,k.jsx)("option",{vlaue:"Healthcare & Pharmaceuticals",children:"Healthcare & Pharmaceuticals"}),(0,k.jsx)("option",{vlaue:"Heavy Industry",children:"Heavy Industry"}),(0,k.jsx)("option",{vlaue:"Hospitality & Tourism",children:"Hospitality & Tourism"}),(0,k.jsx)("option",{vlaue:"Information Technology (IT)",children:"Information Technology (IT)"}),(0,k.jsx)("option",{vlaue:"Insurance",children:"Insurance"}),(0,k.jsx)("option",{vlaue:"Jewelry & Luxury Goods",children:"Jewelry & Luxury Goods"}),(0,k.jsx)("option",{vlaue:"Legal Services",children:"Legal Services"}),(0,k.jsx)("option",{vlaue:"Logistics & Supply Chain",children:"Logistics & Supply Chain"}),(0,k.jsx)("option",{vlaue:"Manufacturing",children:"Manufacturing"}),(0,k.jsx)("option",{vlaue:"Mining & Metals",children:"Mining & Metals"}),(0,k.jsx)("option",{vlaue:"Nanotechnology",children:"Nanotechnology"}),(0,k.jsx)("option",{vlaue:"Pet Care & Supplies",children:"Pet Care & Supplies"}),(0,k.jsx)("option",{vlaue:"Public Administration & Government Services",children:"Public Administration & Government Services"}),(0,k.jsx)("option",{vlaue:"Quantum Computing",children:"Quantum Computing"}),(0,k.jsx)("option",{vlaue:"Real Estate & Property Management",children:"Real Estate & Property Management"}),(0,k.jsx)("option",{vlaue:"Retail & E-commerce",children:"Retail & E-commerce"}),(0,k.jsx)("option",{vlaue:"Robotics",children:"Robotics"}),(0,k.jsx)("option",{vlaue:"Security & Surveillance",children:"Security & Surveillance"}),(0,k.jsx)("option",{vlaue:"Social Media & Digital Marketing",children:"Social Media & Digital Marketing"}),(0,k.jsx)("option",{vlaue:"Space Exploration & Satellite Technology",children:"Space Exploration & Satellite Technology"}),(0,k.jsx)("option",{vlaue:"Sports & Fitness",children:"Sports & Fitness"}),(0,k.jsx)("option",{vlaue:"Supply Chain & Procurement",children:"Supply Chain & Procurement"}),(0,k.jsx)("option",{vlaue:"Telecommunications",children:"Telecommunications"}),(0,k.jsx)("option",{vlaue:"Traditional Crafts & Artisanal Goods",children:"Traditional Crafts & Artisanal Goods"}),(0,k.jsx)("option",{vlaue:"Transportation & Logistics",children:"Transportation & Logistics"}),(0,k.jsx)("option",{vlaue:"Venture Capital & Private Equity",children:"Venture Capital & Private Equity"}),(0,k.jsx)("option",{vlaue:"Video Game Industry",children:"Video Game Industry"}),(0,k.jsx)("option",{vlaue:"Waste Management",children:"Waste Management"})]})]})}),(0,k.jsx)("div",{className:"col-md-6",children:(0,k.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,k.jsxs)("label",{htmlFor:"",children:["Company Website / URL"," ",(0,k.jsx)(d.dN,{className:"labelsize",children:"*"})]}),(0,k.jsxs)(d.Jq,{children:[(0,k.jsx)(j.A,{strokeWidth:1.5}),(0,k.jsx)("input",{ref:te,required:!0,defaultValue:Me.company_website,onChange:De,type:"text",name:"company_website",placeholder:""}),w&&(0,k.jsx)("div",{className:"text-danger text-start fw-semibold",children:"Please enter valid website url (eg:www.domain.com)"})]})]})}),(0,k.jsx)("div",{className:"col-md-6",children:(0,k.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,k.jsx)("label",{htmlFor:"",children:"Company LinkedIn Profile"}),(0,k.jsxs)(d.Jq,{children:[(0,k.jsx)(h.A,{}),(0,k.jsx)("input",{defaultValue:Me.company_linkedin,onChange:De,type:"text",name:"company_linkedin",placeholder:""})]})]})}),(0,k.jsx)("div",{className:"col-md-6",children:(0,k.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,k.jsxs)("label",{htmlFor:"",children:["Number of Employees"," ",(0,k.jsx)(d.dN,{className:"labelsize",children:"*"})]}),(0,k.jsxs)(d.Jq,{children:[(0,k.jsx)(f.A,{}),(0,k.jsx)("input",{value:Me.employee_number,onChange:e=>{const a=e.target.value;/^\d*$/.test(a)&&Te((e=>({...e,employee_number:a})))},type:"text",name:"employee_number",required:!0,placeholder:""})]})]})}),(0,k.jsx)("div",{className:"col-md-6",children:(0,k.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,k.jsx)("label",{htmlFor:"",children:"Year of Registration"}),(0,k.jsxs)(d.Jq,{children:[(0,k.jsx)(v.A,{}),(0,k.jsx)("input",{value:Me.year_registration,onChange:e=>{const a=e.target.value;/^\d*$/.test(a)&&Te((e=>({...e,year_registration:a})))},type:"text",inputMode:"numeric",pattern:"\\d*",name:"year_registration",required:!0,placeholder:""})]})]})}),(0,k.jsx)("hr",{}),(0,k.jsx)("div",{className:"col-md-12",children:(0,k.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,k.jsxs)("label",{htmlFor:"",children:["Company Mailing Address"," ",(0,k.jsx)(d.dN,{className:"labelsize",children:"*"})]}),(0,k.jsxs)(d.Jq,{children:[(0,k.jsx)(g.A,{}),(0,k.jsx)("input",{defaultValue:Me.company_mail_address,onChange:De,name:"company_mail_address",required:!0,id:"",placeholder:"",type:"text"})]})]})}),(0,k.jsx)("div",{className:"col-md-12",children:(0,k.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,k.jsxs)("label",{htmlFor:"",children:["Street ",(0,k.jsx)(d.dN,{className:"labelsize",children:"*"})]}),(0,k.jsxs)(d.Jq,{children:[(0,k.jsx)(g.A,{}),(0,k.jsx)("input",{defaultValue:Me.company_street_address,onChange:De,name:"company_street_address",required:!0,id:"",placeholder:"",type:"text"})]})]})}),(0,k.jsx)("div",{className:"col-md-6",children:(0,k.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,k.jsxs)("label",{htmlFor:"",children:["Country ",(0,k.jsx)(d.dN,{className:"labelsize",children:"*"})]}),(0,k.jsxs)(d.Jq,{children:[(0,k.jsx)(j.A,{strokeWidth:1.5}),(0,k.jsxs)("select",{required:!0,name:"company_country",onChange:e=>{const a=e.target.value,s=e.target.options[e.target.selectedIndex].text;"Aruba"===s&&He(!1),ne(a),T(s),Te((a=>({...a,company_country:e.target.value})));const i=o.Ay.getStatesOfCountry(a);console.log(i),ee(i)},value:Me.company_country,placeholder:"Select or type a country",className:"form-select",children:[(0,k.jsx)("option",{value:"",children:"Select or type a country"}),Ze.map((e=>(0,k.jsx)("option",{value:e.value,children:e.label})))]})]})]})}),(0,k.jsx)("div",{className:"col-md-6",children:(0,k.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,k.jsxs)("label",{htmlFor:"",children:["City ",(0,k.jsx)(d.dN,{className:"labelsize",children:"*"})]}),(0,k.jsxs)(d.Jq,{children:[(0,k.jsx)(b.A,{}),(0,k.jsxs)("select",{required:!0,name:"city_step2",onChange:async e=>{const a=e.target.value,s=(Me.company_state,Me.company_country,Me.company_country);c.A.getCitiesOfState(s,a);Te((e=>({...e,city_step2:a})))},value:Me.city_step2,placeholder:"Select or type a city",className:"form-select",children:[(0,k.jsx)("option",{value:"",children:"Select or type a city"}),Oe.map((e=>(0,k.jsx)("option",{value:e.name,children:e.name},e.name)))]})]})]})}),(0,k.jsx)("div",{className:"col-md-6",children:(0,k.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,k.jsxs)("label",{htmlFor:"",children:["State / Province / Territory / District"," ",Re&&(0,k.jsx)(d.dN,{className:"labelsize",children:"*"})]}),(0,k.jsxs)(d.Jq,{children:[(0,k.jsx)(g.A,{}),(0,k.jsxs)("select",{required:!!Re,name:"company_state",value:ae,onChange:e=>{se(e.target.value);const a=e.target.value;Te((e=>({...e,company_state:a})));const s=c.A.getCitiesOfState(Me.company_country,a);console.log(s),Ve(s)},children:[(0,k.jsx)("option",{value:"",children:"-- Select State --"}),X.map((e=>(0,k.jsx)("option",{value:e.isoCode,children:e.name},e.isoCode)))]})]})]})}),(0,k.jsx)("div",{className:"col-md-6",children:(0,k.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,k.jsxs)("label",{htmlFor:"",children:["Postal code/Zip"," ",Re&&(0,k.jsx)(d.dN,{className:"labelsize",children:"*"})]}),(0,k.jsxs)(d.Jq,{children:[(0,k.jsx)(y.A,{}),(0,k.jsx)("input",{defaultValue:Me.company_postal_code,onChange:De,type:"text",required:!!Re,name:"company_postal_code",placeholder:""})]})]})}),(0,k.jsx)("div",{className:"col-12",children:(0,k.jsxs)("div",{className:"d-flex justify-content-between mt-4",children:[(0,k.jsx)("div",{className:"flex-shrink-0",children:(0,k.jsxs)("button",{type:"button",className:"sbtn backbtn","data-step":"2",onClick:()=>{P(!0),L(!1)},children:[(0,k.jsx)(_.A,{})," back"]})}),(0,k.jsx)("div",{className:"flex-shrink-0",children:(0,k.jsxs)("button",{type:"submit",className:"sbtn nextbtn","data-step":"2",children:["next ",(0,k.jsx)(u.A,{})]})})]})})]})]})})}),D&&(0,k.jsx)("form",{action:"javascript:void(0)",method:"post",onSubmit:async a=>{a.preventDefault();let s={first_name:qe.first_name,last_name:qe.last_name,email:qe.email,role:qe.role,linked_in:qe.linked_in,phone:qe.phone,city_step2:Me.city_step2,company_street_address:Me.company_street_address,company_name:Me.company_name,year_registration:Me.year_registration,company_website:Me.company_website,employee_number:Me.employee_number,company_linkedin:Me.company_linkedin,company_mail_address:Me.company_mail_address,company_state:ae,company_postal_code:Me.company_postal_code,company_country:M,stage_step3:Ie.stage_step3,gross_revenue:Ie.gross_revenue,headline:Ie.headline,headlineStep4:Je.headlineStep4,descriptionStep4:Je.descriptionStep4,problemStep4:Je.problemStep4,solutionStep4:Je.solutionStep4};console.log(s);try{const a=(await t.A.post(We+"userRegister",s,{headers:{Accept:"application/json","Content-Type":"application/json"}})).data;if(console.log(a),"2"===a.status)P(!0),G(!1),Ee((e=>({...e,emailMatch:a.message}))),Ne(a.message),setTimeout((()=>{Ne(""),Ee((e=>({...e,emailMatch:""})))}),2500);else{Ee((e=>({...e,emailMatch:""})));let s={id:a.id,email:a.email,first_name:a.first_name,last_name:a.last_name,access_token:a.access_token};localStorage.setItem("UserLoginData",JSON.stringify(s)),e("/dataroom-Duediligence")}}catch(i){i.response&&i.response.data&&i.response.data.message}},children:(0,k.jsx)(d.mg,{id:"step3",children:(0,k.jsxs)("div",{className:"d-flex flex-column gap-5",children:[(0,k.jsx)(d.CB,{children:"company status"}),(0,k.jsxs)("div",{className:"row gy-3",children:[(0,k.jsx)("div",{className:"col-12",children:(0,k.jsx)("label",{htmlFor:"",children:"Sector (pull-down menu CHECK OUR DEALUM PLATFORM)"})}),(0,k.jsx)("div",{className:"col-12",children:(0,k.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,k.jsxs)("label",{htmlFor:"",children:["What is your company's current stage?"," ",(0,k.jsx)(d.dN,{className:"labelsize",children:"*"})]}),(0,k.jsxs)(d.z6,{id:"companyStage",children:[(0,k.jsxs)(d.Zw,{children:[(0,k.jsx)("input",{type:"radio",name:"stage_step3",checked:"company_current_seed"===Ie.stage_step3,required:!0,value:"company_current_seed",id:"concept",onChange:De}),(0,k.jsxs)("label",{htmlFor:"concept",children:[(0,k.jsx)("b",{children:"Concept Stage:"})," Defining the business idea and identifying a problem to solve"]})]}),(0,k.jsxs)(d.Zw,{children:[(0,k.jsx)("input",{type:"radio",checked:"company_current_PreSeed"===Ie.stage_step3,name:"stage_step3",value:"company_current_PreSeed",id:"planning5",onChange:De,required:!0}),(0,k.jsxs)("label",{htmlFor:"planning5",children:[(0,k.jsx)("b",{children:"Pre-Seed Stage:"})," Validating the idea, conducting market research, and assembling a core team."]})]}),(0,k.jsxs)(d.Zw,{children:[(0,k.jsx)("input",{checked:"company_current_seedstage"===Ie.stage_step3,type:"radio",name:"stage_step3",value:"company_current_seedstage",id:"execution4",onChange:De,required:!0}),(0,k.jsxs)("label",{htmlFor:"execution4",children:[(0,k.jsx)("b",{children:"Seed Stage:"})," Securing initial funding, refining its business model, and beginning early commercialization."]})]}),(0,k.jsxs)(d.Zw,{children:[(0,k.jsx)("input",{checked:"company_current_earlystage"===Ie.stage_step3,type:"radio",name:"stage_step3",value:"company_current_earlystage",id:"execution3",onChange:De,required:!0}),(0,k.jsxs)("label",{htmlFor:"execution3",children:[(0,k.jsx)("b",{children:"Early Stage:"})," Focusing on product development, market validation, and acquiring initial customers."]})]}),(0,k.jsxs)(d.Zw,{children:[(0,k.jsx)("input",{checked:"company_current_growthstage"===Ie.stage_step3,type:"radio",name:"stage_step3",value:"company_current_growthstage",id:"execution2",onChange:De,required:!0}),(0,k.jsxs)("label",{htmlFor:"execution2",children:[(0,k.jsx)("b",{children:"Growth Stage:"})," Scaling operations, optimizing processes, and expanding the customer base."]})]}),(0,k.jsxs)(d.Zw,{children:[(0,k.jsx)("input",{checked:"company_current_expansionthstage"===Ie.stage_step3,type:"radio",name:"stage_step3",value:"company_current_expansionthstage",id:"execution1",onChange:De,required:!0}),(0,k.jsxs)("label",{htmlFor:"execution1",children:[(0,k.jsx)("b",{children:"Expansion Stage:"})," Entering new markets, diversifying offerings, and increasing revenue streams."]})]}),(0,k.jsxs)(d.Zw,{children:[(0,k.jsx)("input",{checked:"company_current_exitthstage"===Ie.stage_step3,type:"radio",name:"stage_step3",value:"company_current_exitthstage",id:"exit",onChange:De,required:!0}),(0,k.jsxs)("label",{htmlFor:"exit",children:[(0,k.jsx)("b",{children:"Exit Stage: "})," Preparing for acquisition, IPO, or other forms of exit strategy."]})]})]})]})}),(0,k.jsx)("div",{className:"col-12",children:(0,k.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,k.jsxs)("label",{htmlFor:"",children:["How would you define the company's status, if generating revenue?\u201d"," ",(0,k.jsx)(d.dN,{className:"labelsize",children:"*"})]}),(0,k.jsxs)(d.z6,{id:"companygross",children:[(0,k.jsxs)(d.Zw,{children:[(0,k.jsx)("input",{checked:"gross_revenue_market_notinmarket"===Ie.gross_revenue,type:"radio",name:"gross_revenue",value:"gross_revenue_market_notinmarket",id:"market-validationid",onChange:De,required:!0}),(0,k.jsx)("label",{htmlFor:"market-validationid",children:"Not in-market (Not generating revenues)"})]}),(0,k.jsxs)(d.Zw,{children:[(0,k.jsx)("input",{checked:"gross_revenue_market"===Ie.gross_revenue,type:"radio",name:"gross_revenue",value:"gross_revenue_market",id:"market-validation",onChange:De,required:!0}),(0,k.jsx)("label",{htmlFor:"market-validation",children:"Market validation (at least one paying customer)"})]}),(0,k.jsxs)(d.Zw,{children:[(0,k.jsx)("input",{checked:"gross_revenue_Inmarket"===Ie.gross_revenue,type:"radio",name:"gross_revenue",value:"gross_revenue_Inmarket",id:"in-market",onChange:De,required:!0}),(0,k.jsx)("label",{htmlFor:"in-market",children:"In-market (more than one paying customer)"})]}),(0,k.jsxs)(d.Zw,{children:[(0,k.jsx)("input",{checked:"gross_revenue_small"===Ie.gross_revenue,type:"radio",name:"gross_revenue",value:"gross_revenue_small",id:"small-scale",onChange:De,required:!0}),(0,k.jsx)("label",{htmlFor:"small-scale",children:"Small Scale (regional, national paying customers)"})]}),(0,k.jsxs)(d.Zw,{children:[(0,k.jsx)("input",{type:"radio",checked:"gross_revenue_large"===Ie.gross_revenue,name:"gross_revenue",value:"gross_revenue_large",id:"large-scale",onChange:De,required:!0}),(0,k.jsx)("label",{htmlFor:"large-scale",children:"Large Scale (includes international customers)"})]})]})]})}),(0,k.jsx)("div",{className:"col-12",children:(0,k.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,k.jsxs)("label",{htmlFor:"",children:["One-sentence headliner about the company"," ",(0,k.jsx)(d.dN,{className:"labelsize",children:"*"})]}),(0,k.jsxs)(d.Jq,{children:[(0,k.jsx)(g.A,{}),(0,k.jsx)("textarea",{id:"headline",required:!0,name:"headline",onChange:e=>{const a=e.target.value,{name:s,value:i}=e.target;Pe((e=>({...e,[s]:i}))),re(a.length)},maxLength:"240",placeholder:"Max 240 characters...",children:Ie.headline||""})]}),(0,k.jsxs)("div",{className:"char-count",children:[le,"/240"]})]})}),(0,k.jsx)("div",{className:"col-12",children:(0,k.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,k.jsxs)("label",{htmlFor:"",children:["About your company in one sentence"," ",(0,k.jsx)(d.dN,{className:"labelsize",children:"*"}),(0,k.jsxs)("span",{className:"tooltip-icon",tabIndex:0,"aria-describedby":"tooltip1",children:[(0,k.jsx)("img",{className:"blackdark",width:"20",height:"20",src:"/assets/user/images/question.png",alt:"Tip Image"}),(0,k.jsxs)("div",{className:"tooltip-text",children:[(0,k.jsxs)("ul",{children:[(0,k.jsxs)("li",{children:[(0,k.jsx)("em",{children:"FinTech Startup:"}),' "We simplify international payments for small businesses with an instant, low-cost digital solution."']}),(0,k.jsxs)("li",{children:[(0,k.jsx)("em",{children:"HealthTech:"}),' "Our AI-powered diagnostics make early disease detection accessible and affordable for underserved communities."']}),(0,k.jsxs)("li",{children:[(0,k.jsx)("em",{children:"SaaS Solution:"}),' "We help businesses automate repetitive tasks, boosting productivity and reducing operational costs."']}),(0,k.jsxs)("li",{children:[(0,k.jsx)("em",{children:"Consumer Goods:"}),' "We create stylish, eco-friendly clothing from recycled materials, redefining sustainable fashion."']})]}),(0,k.jsx)("strong",{children:"Pro Tips"}),(0,k.jsxs)("ul",{children:[(0,k.jsx)("li",{children:"\u2714 Keep it concise\u2014Aim for 1-2 sentences."}),(0,k.jsx)("li",{children:"\u2714 Highlight your unique value\u2014What makes your company different?"}),(0,k.jsx)("li",{children:"\u2714 Use clear, compelling language\u2014Avoid jargon; keep it simple."}),(0,k.jsx)("li",{children:"\u2714 Focus on impact\u2014How does your product/service solve a key problem?"})]})]})]})]}),(0,k.jsxs)(d.Jq,{children:[(0,k.jsx)(g.A,{}),(0,k.jsx)("textarea",{required:!0,id:"description",name:"descriptionStep4",maxLength:"800",onChange:e=>{const a=e.target.value,{name:s,value:i}=e.target;Le((e=>({...e,[s]:i}))),je(a.length)},value:Je.descriptionStep4||"",placeholder:"Max 800 characters..."})]}),(0,k.jsxs)("div",{className:"char-count",children:[ge,"/800"]})]})}),(0,k.jsx)("div",{className:"col-12",children:(0,k.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,k.jsxs)("label",{htmlFor:"",children:["What problem are you solving?"," ",(0,k.jsx)(d.dN,{className:"labelsize",children:"*"}),(0,k.jsxs)("span",{className:"tooltip-icon",tabIndex:0,"aria-describedby":"tooltip1",children:[(0,k.jsx)("img",{className:"blackdark",width:"20",height:"20",src:"/assets/user/images/question.png",alt:"Tip Image"}),(0,k.jsx)("div",{className:"tooltip-text",id:"tooltip1",role:"tooltip",children:(0,k.jsxs)("ul",{children:[(0,k.jsxs)("li",{children:[(0,k.jsx)("em",{children:"FinTech Startup:"}),' "Small businesses struggle with slow, expensive international transactions. We provide an instant, low-cost payment solution that simplifies global trade."']}),(0,k.jsxs)("li",{children:[(0,k.jsx)("em",{children:"HealthTech:"}),' "Millions lack access to early disease detection. We develop affordable AI-powered diagnostics to improve health outcomes."']}),(0,k.jsxs)("li",{children:[(0,k.jsx)("em",{children:"SaaS Solution:"}),' "Teams waste hours on manual data entry. Our automation tool eliminates repetitive tasks, saving companies time and money."']}),(0,k.jsxs)("li",{children:[(0,k.jsx)("em",{children:"Consumer Goods:"}),' "The fashion industry produces massive waste. We create stylish apparel from recycled materials to promote sustainability."']})]})})]})]}),(0,k.jsxs)(d.Jq,{children:[(0,k.jsx)(N.A,{}),(0,k.jsx)("textarea",{required:!0,id:"problem",name:"problemStep4",maxLength:"400",onChange:e=>{const a=e.target.value,{name:s,value:i}=e.target;Le((e=>({...e,[s]:i}))),ve(a.length)},value:Je.problemStep4||"",placeholder:"Max 400 characters..."})]}),(0,k.jsxs)("div",{className:"char-count",children:[fe,"/400"]})]})}),(0,k.jsx)("div",{className:"col-12",children:(0,k.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,k.jsxs)("label",{htmlFor:"",children:["What is Your Solution to the Problem?"," ",(0,k.jsx)(d.dN,{className:"labelsize",children:"*"}),(0,k.jsxs)("span",{className:"tooltip-icon",tabIndex:0,"aria-describedby":"tooltip1",children:[(0,k.jsx)("img",{className:"blackdark",width:"20",height:"20",src:"/assets/user/images/question.png",alt:"Tip Image"}),(0,k.jsxs)("div",{className:"tooltip-text",id:"tooltip1",role:"tooltip",children:[(0,k.jsx)("strong",{children:"Some examples of descriptions:"}),(0,k.jsxs)("ul",{children:[(0,k.jsxs)("li",{children:[(0,k.jsx)("em",{children:"FinTech Startup:"}),' "We provide a seamless, low-cost digital payment system that enables small businesses to send and receive international transactions instantly."']}),(0,k.jsxs)("li",{children:[(0,k.jsx)("em",{children:"HealthTech:"}),' "Our AI-powered diagnostics identify diseases at an early stage, making healthcare more accessible and reducing treatment costs."']}),(0,k.jsxs)("li",{children:[(0,k.jsx)("em",{children:"SaaS Solution:"}),' "We automate data entry and workflow processes, eliminating repetitive tasks so businesses can focus on growth."']}),(0,k.jsxs)("li",{children:[(0,k.jsx)("em",{children:"Consumer Goods:"}),' "We create high-quality, stylish apparel from recycled materials, reducing fashion waste and promoting sustainability."']})]}),(0,k.jsx)("strong",{children:"Pro Tips"}),(0,k.jsxs)("ul",{children:[(0,k.jsx)("li",{children:"\u2714 Be direct\u2014Explain exactly how your solution addresses the problem."}),(0,k.jsx)("li",{children:"\u2714 Show innovation\u2014Highlight what makes your approach unique."}),(0,k.jsx)("li",{children:"\u2714 Make it investor-friendly\u2014Demonstrate scalability and growth potential."}),(0,k.jsx)("li",{children:"\u2714 Keep it concise\u20141-2 sentences for a clear, impactful answer."})]})]})]})]}),(0,k.jsxs)(d.Jq,{children:[(0,k.jsx)(N.A,{}),(0,k.jsx)("textarea",{required:!0,id:"solution",name:"solutionStep4",maxLength:"400",onChange:e=>{const a=e.target.value,{name:s,value:i}=e.target;Le((e=>({...e,[s]:i}))),ye(a.length)},value:Je.solutionStep4||"",placeholder:"Max 400 characters..."})]}),(0,k.jsxs)("div",{className:"char-count",children:[be,"/400"]})]})}),(0,k.jsx)("div",{className:"col-12",children:(0,k.jsxs)("div",{className:"d-flex justify-content-between mt-4",children:[(0,k.jsx)("div",{className:"flex-shrink-0",children:(0,k.jsxs)("button",{type:"button",className:"sbtn backbtn","data-step":"3",onClick:()=>{W(!1),L(!0)},children:[(0,k.jsx)(_.A,{})," back"]})}),(0,k.jsx)("div",{className:"flex-shrink-0",children:(0,k.jsxs)("button",{type:"submit",className:"sbtn nextbtn","data-step":"3",children:["next ",(0,k.jsx)(u.A,{})]})})]})})]})]})})})]})})})})]}),(0,k.jsx)(d.hJ,{show:C,children:(0,k.jsxs)(d.Cd,{children:[(0,k.jsx)(d.nj,{onClick:()=>q(!1),children:"\xd7"}),(0,k.jsx)("form",{children:(0,k.jsxs)("div",{className:"d-flex flex-column gap-3",children:[(0,k.jsx)("div",{className:"d-block",children:(0,k.jsx)(d.pd,{type:"text",name:"name",placeholder:"Your Name",value:qe.name,onChange:De,required:!0})}),(0,k.jsx)("div",{className:"d-block",children:(0,k.jsx)(d.pd,{type:"email",name:"email",placeholder:"Your Email",value:qe.email,onChange:De,required:!0})}),(0,k.jsx)("div",{className:"d-flex justify-content-end",children:(0,k.jsx)(d.R3,{type:"submit",children:"Submit"})})]})})]})})]})}}}]);
//# sourceMappingURL=454.762bc4c8.chunk.js.map