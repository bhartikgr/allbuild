"use strict";(self.webpackChunkkeiretsuproject=self.webpackChunkkeiretsuproject||[]).push([[9454],{2837:(e,a,s)=>{s.d(a,{$K:()=>o,CB:()=>d,Cd:()=>v,FC:()=>r,Jq:()=>h,R3:()=>b,SD:()=>l,Zw:()=>m,dN:()=>g,hJ:()=>j,mO:()=>n,mg:()=>c,nj:()=>f,pd:()=>y,uM:()=>x,vE:()=>t,z6:()=>p});var i=s(5464);const n=i.default.div`
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
`,v=i.default.div`
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
`,f=i.default.button`
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
`,b=i.default.button`
  padding: 0.6rem 1.2rem;
  background-color: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`},3590:(e,a,s)=>{s.d(a,{A:()=>n});s(5043);var i=s(579);const n=function(e){let{message:a,onClose:s}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"alert alert-danger alert-dismissible fade show mt-3",role:"alert",children:[(0,i.jsx)("strong",{children:"Error!"})," ",a,(0,i.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close",onClick:s})]})})}},5318:(e,a,s)=>{s.r(a),s.d(a,{default:()=>w});var i=s(5043),n=s(3216),t=s(6213),l=(s(3590),s(8421),s(5015),s(6632)),r=(s(5016),s(4910)),o=s(2585),c=s(2837),d=s(4459),p=s(5327),m=s(8814),h=s(6873),x=s(5692),u=s(5264),g=s(5731),j=s(7118),v=s(780),f=s(3639),y=s(8006),b=s(5469),_=s(5242),N=s(579);function w(){const e=(0,n.Zp)(),[a,s]=(0,i.useState)(!1),[w,k]=(0,i.useState)(new Date),[S,C]=(0,i.useState)(!1),[q,A]=(0,i.useState)(!1),[z,F]=(0,i.useState)([]),[E,M]=(0,i.useState)(null),[T,I]=(0,i.useState)(null),[P,J]=(0,i.useState)(!0),[L,D]=(0,i.useState)(!1),[R,W]=(0,i.useState)(!1),[Z,G]=(0,i.useState)(!1),[H,O]=(0,i.useState)(!1),[V,B]=(0,i.useState)(!1),[U,Y]=(0,i.useState)(!1),[$,K]=(0,i.useState)(!1),[Q,X]=(0,i.useState)(""),[ee,ae]=(0,i.useState)([]),[se,ie]=(0,i.useState)(""),[ne,te]=(0,i.useState)(""),le=(0,i.useRef)(null),[re,oe]=(0,i.useState)(0),[ce,de]=(0,i.useState)(0),[pe,me]=(0,i.useState)(0),[he,xe]=(0,i.useState)(0),[ue,ge]=(0,i.useState)(0),[je,ve]=(0,i.useState)(0),[fe,ye]=(0,i.useState)(0),[be,_e]=(0,i.useState)(0),[Ne,we]=(0,i.useState)(!1),[ke,Se]=(0,i.useState)(""),[Ce,qe]=(0,i.useState)("");document.title="Register Page",(0,i.useEffect)((()=>{const e=localStorage.getItem("UserLoginData"),a=JSON.parse(e);qe(a),null!==a&&(window.location.href="/dataroom-Duediligence")}),[Ce]);const[Ae,ze]=(0,i.useState)(1),[Fe,Ee]=(0,i.useState)({first_name:"",last_name:"",role:"",email:"",confirm_email:"",linked_in:"",phone:""});(0,i.useEffect)((()=>{Me()}),[]);const Me=async()=>{try{const e=await t.A.post(Ge+"getallcountry",Fe,{headers:{Accept:"application/json","Content-Type":"application/json"}});F(e.data.results)}catch(e){}},[Te,Ie]=(0,i.useState)({emailMatch:""}),[Pe,Je]=(0,i.useState)({city_step2:"",company_street_address:"",company_industory:"",company_name:"",year_registration:"",company_website:"",employee_number:"",company_linkedin:"",company_mail_address:"",company_state:"",company_postal_code:"",company_country:""}),[Le,De]=(0,i.useState)({}),[Re,We]=(0,i.useState)({}),Ze=e=>{const{name:a,value:s}=e.target;Ee((e=>({...e,[a]:s}))),Je((e=>({...e,[a]:s}))),De((e=>({...e,[a]:s}))),"email"!==a&&"confirm_email"!==a||("email"===a&&s!==Fe.confirm_email||"confirm_email"===a&&s!==Fe.email?Ie((e=>({...e,emailMatch:"Emails do not match."}))):Ie((e=>({...e,emailMatch:""}))))};var Ge="https://blueprintcatalyst.com/api/user/";const He=z.map((e=>({value:e.code,label:e.name}))),Oe=e=>!!new RegExp("^(https?:\\/\\/)?((([a-zA-Z0-9\\-])+\\.)+[a-zA-Z]{2,})(\\:[0-9]{1,5})?(\\/.*)?$","i").test(e),[Ve,Be]=(0,i.useState)(!0),[Ue,Ye]=(0,i.useState)([]);return(0,N.jsxs)(c.mO,{children:[(0,N.jsxs)("div",{className:"fullpage d-block",children:[(0,N.jsx)(c.SD,{children:(0,N.jsx)("div",{className:"container-lg",children:(0,N.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,N.jsx)("a",{href:"/",className:"logo",children:(0,N.jsx)("img",{src:"/assets/user/images/logo.png",alt:"logo"})}),(0,N.jsx)("div",{className:"d-flex align-items-center gap-3",children:(0,N.jsx)("a",{href:"/login",className:"logo text-white",children:"Login"})})]})})}),(0,N.jsx)(c.$K,{className:"d-block py-5",children:(0,N.jsx)("div",{className:"container-lg",children:(0,N.jsx)("div",{className:"row justify-content-center",children:(0,N.jsxs)("div",{className:"col-lg-9 col-md-10",children:[ke&&(0,N.jsx)("p",{className:Ne?" mt-3 error_pop":"success_pop mt-3",children:ke}),P&&(0,N.jsx)("form",{action:"javascript:void(0)",method:"post",onSubmit:async e=>{if(e.preventDefault(),Fe.email===Fe.confirm_email){if(Fe.first_name&&Fe.last_name&&Fe.email&&Fe.confirm_email&&Fe.phone)try{"2"===(await t.A.post(Ge+"checkCompanyEmail",Fe,{headers:{Accept:"application/json","Content-Type":"application/json"}})).data.status?(we(!0),Se("Email is already exists"),setTimeout((()=>{J(!0),D(!1),W(!1),G(!1),we(!1),Se("")}),2500)):(J(!1),D(!0))}catch(a){}}else Ie((e=>({...e,emailMatch:"Emails do not match."})))},children:(0,N.jsx)(c.mg,{id:"step1",children:(0,N.jsxs)("div",{className:"d-flex flex-column gap-5",children:[(0,N.jsx)(c.CB,{children:"personal contact info"}),(0,N.jsxs)("div",{className:"row gy-3",children:[(0,N.jsx)("div",{className:"col-md-6",children:(0,N.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,N.jsxs)("label",{htmlFor:"",children:["First Name ",(0,N.jsx)(c.dN,{className:"labelsize",children:"*"})]}),(0,N.jsxs)(c.Jq,{children:[(0,N.jsx)(d.A,{}),(0,N.jsx)("input",{value:Fe.first_name,onChange:Ze,type:"text",name:"first_name",required:!0,placeholder:""})]})]})}),(0,N.jsx)("div",{className:"col-md-6",children:(0,N.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,N.jsxs)("label",{htmlFor:"",children:["Last Name ",(0,N.jsx)(c.dN,{className:"labelsize",children:"*"})]}),(0,N.jsxs)(c.Jq,{children:[(0,N.jsx)(d.A,{}),(0,N.jsx)("input",{value:Fe.last_name,onChange:Ze,type:"text",name:"last_name",required:!0,placeholder:""})]})]})}),(0,N.jsx)("div",{className:"col-md-6",children:(0,N.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,N.jsxs)("label",{htmlFor:"",children:["Email ",(0,N.jsx)(c.dN,{className:"labelsize",children:"*"})]}),(0,N.jsxs)(c.Jq,{children:[(0,N.jsx)(p.A,{}),(0,N.jsx)("input",{value:Fe.email,onChange:Ze,type:"email",required:!0,name:"email",placeholder:""})]})]})}),(0,N.jsx)("div",{className:"col-md-6",children:(0,N.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,N.jsxs)("label",{htmlFor:"",children:["Confirm Email ",(0,N.jsx)(c.dN,{className:"labelsize",children:"*"})]}),(0,N.jsxs)(c.Jq,{children:[(0,N.jsx)(p.A,{}),(0,N.jsx)("input",{value:Fe.confirm_email,onChange:Ze,type:"email",required:!0,name:"confirm_email",placeholder:""}),Te.emailMatch&&(0,N.jsx)("div",{className:"text-danger text-start fw-semibold",children:Te.emailMatch})]})]})}),(0,N.jsx)("div",{className:"col-md-6",children:(0,N.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,N.jsx)("label",{htmlFor:"",children:"LinkedIn Profile"}),(0,N.jsxs)(c.Jq,{children:[(0,N.jsx)(m.A,{}),(0,N.jsx)("input",{value:Fe.linked_in,onChange:Ze,type:"text",name:"linked_in",placeholder:""})]})]})}),(0,N.jsx)("div",{className:"col-md-6",children:(0,N.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,N.jsxs)("label",{htmlFor:"",children:["Phone Number ",(0,N.jsx)(c.dN,{className:"labelsize",children:"*"})]}),(0,N.jsx)(c.Jq,{children:(0,N.jsx)(l.Ay,{required:!0,name:"phone",defaultCountry:"CA",value:Fe.phone,onChange:e=>{Ee((a=>({...a,phone:e})))},placeholder:"Enter phone number"})})]})}),(0,N.jsx)("div",{className:"col-md-12",children:(0,N.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,N.jsx)("label",{htmlFor:"",children:"Role / Position at the company"}),(0,N.jsxs)(c.Jq,{children:[(0,N.jsx)(h.A,{}),(0,N.jsx)("input",{value:Fe.role,onChange:Ze,type:"text",name:"role",placeholder:""})]})]})}),(0,N.jsx)("div",{className:"col-12",children:(0,N.jsx)("div",{className:"d-flex justify-content-end mt-4",children:(0,N.jsx)("div",{className:"flex-shrink-0",children:(0,N.jsxs)("button",{type:"submit",className:"sbtn nextbtn","data-step":"1",children:["next ",(0,N.jsx)(x.A,{})]})})})})]})]})})}),L&&(0,N.jsx)("form",{action:"javascript:void(0)",method:"post",onSubmit:e=>{e.preventDefault();const{name:a,value:s}=e.target;if(""!==Pe.company_website){if(!Oe(Pe.company_website))return le.current.scrollIntoView({behavior:"smooth",block:"center"}),void C(!0);C(!1)}Pe.company_name&&Pe.employee_number&&Pe.company_mail_address&&Pe.company_website&&(D(!1),W(!0))},children:(0,N.jsx)(c.mg,{id:"step2",children:(0,N.jsxs)("div",{className:"d-flex flex-column gap-5",children:[(0,N.jsx)(c.CB,{children:"Company Contact Info"}),(0,N.jsxs)("div",{className:"row gy-3",children:[(0,N.jsx)("div",{className:"col-md-12",children:(0,N.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,N.jsxs)("label",{htmlFor:"",children:["Name of Company"," ",(0,N.jsx)(c.dN,{className:"labelsize",children:"*"})]}),(0,N.jsxs)(c.Jq,{children:[(0,N.jsx)(u.A,{}),(0,N.jsx)("input",{defaultValue:Pe.company_name,onChange:Ze,type:"text",placeholder:"",name:"company_name",required:!0})]})]})}),(0,N.jsx)("div",{className:"col-md-12",children:(0,N.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,N.jsxs)("label",{htmlFor:"",children:["Industry ",(0,N.jsx)(c.dN,{className:"labelsize",children:"*"})]}),(0,N.jsxs)("select",{onChange:Ze,className:"",name:"company_industory",required:!0,children:[(0,N.jsx)("option",{value:"",children:"--Industry--"}),(0,N.jsx)("option",{value:"Aerospace & Defense",children:"Aerospace & Defense"}),(0,N.jsx)("option",{value:"Agriculture & Farming",children:"Agriculture & Farming"}),(0,N.jsx)("option",{value:"Artificial Intelligence & Machine Learning",children:"Artificial Intelligence & Machine Learning"}),(0,N.jsx)("option",{value:"Automotive",children:"Automotive"}),(0,N.jsx)("option",{value:"Banking & Financial Services",children:"Banking & Financial Services"}),(0,N.jsx)("option",{value:"Biotechnology",children:"Biotechnology"}),(0,N.jsx)("option",{value:"Chemical Industry",children:"Chemical Industry"}),(0,N.jsx)("option",{value:"Construction & Engineering",children:"Construction & Engineering"}),(0,N.jsx)("option",{value:"Consumer Goods",children:"Consumer Goods"}),(0,N.jsx)("option",{value:"Cybersecurity",children:"Cybersecurity"}),(0,N.jsx)("option",{value:"Data Storage & Management",children:"Data Storage & Management"}),(0,N.jsx)("option",{value:"Education & Training",children:"Education & Training"}),(0,N.jsx)("option",{value:"Electric Vehicles & Sustainable Transportation",children:"Electric Vehicles & Sustainable Transportation"}),(0,N.jsx)("option",{value:"Energy & Utilities",children:"Energy & Utilities"}),(0,N.jsx)("option",{value:"Entertainment & Media",children:"Entertainment & Media"}),(0,N.jsx)("option",{value:"Environmental Services & Sustainability",children:"Environmental Services & Sustainability"}),(0,N.jsx)("option",{value:"Fashion & Apparel",children:"Fashion & Apparel"}),(0,N.jsx)("option",{value:"Fintech & Digital Payments",children:"Fintech & Digital Payments"}),(0,N.jsx)("option",{value:"Food & Beverage",children:"Food & Beverage"}),(0,N.jsx)("option",{value:"Gaming & Esports",children:"Gaming & Esports"}),(0,N.jsx)("option",{value:"Healthcare & Pharmaceuticals",children:"Healthcare & Pharmaceuticals"}),(0,N.jsx)("option",{value:"Heavy Industry",children:"Heavy Industry"}),(0,N.jsx)("option",{value:"Hospitality & Tourism",children:"Hospitality & Tourism"}),(0,N.jsx)("option",{value:"Information Technology (IT)",children:"Information Technology (IT)"}),(0,N.jsx)("option",{value:"Insurance",children:"Insurance"}),(0,N.jsx)("option",{value:"Jewelry & Luxury Goods",children:"Jewelry & Luxury Goods"}),(0,N.jsx)("option",{value:"Legal Services",children:"Legal Services"}),(0,N.jsx)("option",{value:"Logistics & Supply Chain",children:"Logistics & Supply Chain"}),(0,N.jsx)("option",{value:"Manufacturing",children:"Manufacturing"}),(0,N.jsx)("option",{value:"Mining & Metals",children:"Mining & Metals"}),(0,N.jsx)("option",{value:"Nanotechnology",children:"Nanotechnology"}),(0,N.jsx)("option",{value:"Pet Care & Supplies",children:"Pet Care & Supplies"}),(0,N.jsx)("option",{value:"Public Administration & Government Services",children:"Public Administration & Government Services"}),(0,N.jsx)("option",{value:"Quantum Computing",children:"Quantum Computing"}),(0,N.jsx)("option",{value:"Real Estate & Property Management",children:"Real Estate & Property Management"}),(0,N.jsx)("option",{value:"Retail & E-commerce",children:"Retail & E-commerce"}),(0,N.jsx)("option",{value:"Robotics",children:"Robotics"}),(0,N.jsx)("option",{value:"Security & Surveillance",children:"Security & Surveillance"}),(0,N.jsx)("option",{value:"Social Media & Digital Marketing",children:"Social Media & Digital Marketing"}),(0,N.jsx)("option",{value:"Space Exploration & Satellite Technology",children:"Space Exploration & Satellite Technology"}),(0,N.jsx)("option",{value:"Sports & Fitness",children:"Sports & Fitness"}),(0,N.jsx)("option",{value:"Supply Chain & Procurement",children:"Supply Chain & Procurement"}),(0,N.jsx)("option",{value:"Telecommunications",children:"Telecommunications"}),(0,N.jsx)("option",{value:"Traditional Crafts & Artisanal Goods",children:"Traditional Crafts & Artisanal Goods"}),(0,N.jsx)("option",{value:"Transportation & Logistics",children:"Transportation & Logistics"}),(0,N.jsx)("option",{value:"Venture Capital & Private Equity",children:"Venture Capital & Private Equity"}),(0,N.jsx)("option",{value:"Video Game Industry",children:"Video Game Industry"}),(0,N.jsx)("option",{value:"Waste Management",children:"Waste Management"})]})]})}),(0,N.jsx)("div",{className:"col-md-6",children:(0,N.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,N.jsxs)("label",{htmlFor:"",children:["Company Website / URL"," ",(0,N.jsx)(c.dN,{className:"labelsize",children:"*"})]}),(0,N.jsxs)(c.Jq,{children:[(0,N.jsx)(g.A,{strokeWidth:1.5}),(0,N.jsx)("input",{ref:le,required:!0,defaultValue:Pe.company_website,onChange:Ze,type:"text",name:"company_website",placeholder:""}),S&&(0,N.jsx)("div",{className:"text-danger text-start fw-semibold",children:"Please enter valid website url (eg:www.domain.com)"})]})]})}),(0,N.jsx)("div",{className:"col-md-6",children:(0,N.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,N.jsx)("label",{htmlFor:"",children:"Company LinkedIn Profile"}),(0,N.jsxs)(c.Jq,{children:[(0,N.jsx)(m.A,{}),(0,N.jsx)("input",{defaultValue:Pe.company_linkedin,onChange:Ze,type:"text",name:"company_linkedin",placeholder:""})]})]})}),(0,N.jsx)("div",{className:"col-md-6",children:(0,N.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,N.jsxs)("label",{htmlFor:"",children:["Number of Employees"," ",(0,N.jsx)(c.dN,{className:"labelsize",children:"*"})]}),(0,N.jsxs)(c.Jq,{children:[(0,N.jsx)(j.A,{}),(0,N.jsx)("input",{value:Pe.employee_number,onChange:e=>{const a=e.target.value;/^\d*$/.test(a)&&Je((e=>({...e,employee_number:a})))},type:"text",name:"employee_number",required:!0,placeholder:""})]})]})}),(0,N.jsx)("div",{className:"col-md-6",children:(0,N.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,N.jsx)("label",{htmlFor:"",children:"Year of Registration"}),(0,N.jsxs)(c.Jq,{children:[(0,N.jsx)(v.A,{}),(0,N.jsx)("input",{value:Pe.year_registration,onChange:e=>{const a=e.target.value;/^\d*$/.test(a)&&Je((e=>({...e,year_registration:a})))},type:"text",inputMode:"numeric",pattern:"\\d*",name:"year_registration",required:!0,placeholder:""})]})]})}),(0,N.jsx)("hr",{}),(0,N.jsx)("div",{className:"col-md-12",children:(0,N.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,N.jsxs)("label",{htmlFor:"",children:["Company Mailing Address"," ",(0,N.jsx)(c.dN,{className:"labelsize",children:"*"})]}),(0,N.jsxs)(c.Jq,{children:[(0,N.jsx)(u.A,{}),(0,N.jsx)("input",{defaultValue:Pe.company_mail_address,onChange:Ze,name:"company_mail_address",required:!0,id:"",placeholder:"",type:"text"})]})]})}),(0,N.jsx)("div",{className:"col-md-12",children:(0,N.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,N.jsxs)("label",{htmlFor:"",children:["Street ",(0,N.jsx)(c.dN,{className:"labelsize",children:"*"})]}),(0,N.jsxs)(c.Jq,{children:[(0,N.jsx)(u.A,{}),(0,N.jsx)("input",{defaultValue:Pe.company_street_address,onChange:Ze,name:"company_street_address",required:!0,id:"",placeholder:"",type:"text"})]})]})}),(0,N.jsx)("div",{className:"col-md-6",children:(0,N.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,N.jsxs)("label",{htmlFor:"",children:["Country ",(0,N.jsx)(c.dN,{className:"labelsize",children:"*"})]}),(0,N.jsxs)(c.Jq,{children:[(0,N.jsx)(g.A,{strokeWidth:1.5}),(0,N.jsxs)("select",{required:!0,name:"company_country",onChange:e=>{const a=e.target.value,s=e.target.options[e.target.selectedIndex].text;"Aruba"===s?(console.log(s),Be(!1)):Be(!0),te(a),I(s),Je((a=>({...a,company_country:e.target.value})));const i=r.Ay.getStatesOfCountry(a);ae(i)},value:Pe.company_country,placeholder:"Select or type a country",className:"form-select",children:[(0,N.jsx)("option",{value:"",children:"Select or type a country"}),He.map((e=>(0,N.jsx)("option",{value:e.value,children:e.label})))]})]})]})}),(0,N.jsx)("div",{className:"col-md-6",children:(0,N.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,N.jsxs)("label",{htmlFor:"",children:["State / Province / Territory / District"," ",Ve&&(0,N.jsx)(c.dN,{className:"labelsize",children:"*"})]}),(0,N.jsxs)(c.Jq,{children:[(0,N.jsx)(u.A,{}),(0,N.jsxs)("select",{required:!!Ve,name:"company_state",value:se,onChange:e=>{ie(e.target.value);const a=e.target.value;Je((e=>({...e,company_state:a})));const s=o.A.getCitiesOfState(Pe.company_country,a);console.log(s),0===s.length?Be(!1):Be(!0),Ye(s)},children:[(0,N.jsx)("option",{value:"",children:"-- Select State --"}),ee.map((e=>(0,N.jsx)("option",{value:e.isoCode,children:e.name},e.isoCode)))]})]})]})}),(0,N.jsx)("div",{className:"col-md-6",children:(0,N.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,N.jsxs)("label",{htmlFor:"",children:["City"," ",Ve&&(0,N.jsx)(c.dN,{className:"labelsize",children:"*"})]}),(0,N.jsxs)(c.Jq,{children:[(0,N.jsx)(f.A,{}),(0,N.jsxs)("select",{required:!!Ve,name:"city_step2",onChange:async e=>{const a=e.target.value,s=(Pe.company_state,Pe.company_country,Pe.company_country);o.A.getCitiesOfState(s,a);Je((e=>({...e,city_step2:a})))},value:Pe.city_step2,placeholder:"Select or type a city",className:"form-select",children:[(0,N.jsx)("option",{value:"",children:"Select or type a city"}),Ue.map((e=>(0,N.jsx)("option",{value:e.name,children:e.name},e.name)))]})]})]})}),(0,N.jsx)("div",{className:"col-md-6",children:(0,N.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,N.jsxs)("label",{htmlFor:"",children:["Postal code/Zip"," ",Ve&&(0,N.jsx)(c.dN,{className:"labelsize",children:"*"})]}),(0,N.jsxs)(c.Jq,{children:[(0,N.jsx)(y.A,{}),(0,N.jsx)("input",{defaultValue:Pe.company_postal_code,onChange:Ze,type:"text",required:!!Ve,name:"company_postal_code",placeholder:""})]})]})}),(0,N.jsx)("div",{className:"col-12",children:(0,N.jsxs)("div",{className:"d-flex justify-content-between mt-4",children:[(0,N.jsx)("div",{className:"flex-shrink-0",children:(0,N.jsxs)("button",{type:"button",className:"sbtn backbtn","data-step":"2",onClick:()=>{J(!0),D(!1)},children:[(0,N.jsx)(b.A,{})," back"]})}),(0,N.jsx)("div",{className:"flex-shrink-0",children:(0,N.jsxs)("button",{type:"submit",className:"sbtn nextbtn","data-step":"2",children:["next ",(0,N.jsx)(x.A,{})]})})]})})]})]})})}),R&&(0,N.jsx)("form",{action:"javascript:void(0)",method:"post",onSubmit:async a=>{a.preventDefault();let i={first_name:Fe.first_name,last_name:Fe.last_name,email:Fe.email,role:Fe.role,linked_in:Fe.linked_in,phone:Fe.phone,city_step2:Pe.city_step2,company_street_address:Pe.company_street_address,company_name:Pe.company_name,year_registration:Pe.year_registration,company_website:Pe.company_website,employee_number:Pe.employee_number,company_linkedin:Pe.company_linkedin,company_mail_address:Pe.company_mail_address,company_state:se,company_postal_code:Pe.company_postal_code,company_country:T,stage_step3:Le.stage_step3,gross_revenue:Le.gross_revenue,headline:Le.headline,headlineStep4:Re.headlineStep4,descriptionStep4:Re.descriptionStep4,problemStep4:Re.problemStep4,solutionStep4:Re.solutionStep4,company_industory:Pe.company_industory};console.log(i),s(!0);try{const a=(await t.A.post(Ge+"userRegister",i,{headers:{Accept:"application/json","Content-Type":"application/json"}})).data;if(s(!1),"2"===a.status)J(!0),G(!1),Ie((e=>({...e,emailMatch:a.message}))),we(!0),Se(a.message),setTimeout((()=>{we(!1),Se(""),Ie((e=>({...e,emailMatch:""})))}),2500);else{Ie((e=>({...e,emailMatch:""})));let s={id:a.id,email:a.email,first_name:a.first_name,last_name:a.last_name,access_token:a.access_token};localStorage.setItem("UserLoginData",JSON.stringify(s)),Se("Registration successful. Your login password has been sent to your email"),setTimeout((()=>{e("/dataroom-Duediligence")}),2500)}}catch(n){n.response&&n.response.data&&n.response.data.message}},children:(0,N.jsx)(c.mg,{id:"step3",children:(0,N.jsxs)("div",{className:"d-flex flex-column gap-5",children:[(0,N.jsx)(c.CB,{children:"company status"}),(0,N.jsxs)("div",{className:"row gy-3",children:[(0,N.jsx)("div",{className:"col-12",children:(0,N.jsx)("label",{htmlFor:"",children:"Sector (pull-down menu CHECK OUR DEALUM PLATFORM)"})}),(0,N.jsx)("div",{className:"col-12",children:(0,N.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,N.jsxs)("label",{htmlFor:"",children:["What is your company's current stage?"," ",(0,N.jsx)(c.dN,{className:"labelsize",children:"*"})]}),(0,N.jsxs)(c.z6,{id:"companyStage",children:[(0,N.jsxs)(c.Zw,{children:[(0,N.jsx)("input",{type:"radio",name:"stage_step3",checked:"company_current_seed"===Le.stage_step3,required:!0,value:"company_current_seed",id:"concept",onChange:Ze}),(0,N.jsxs)("label",{htmlFor:"concept",children:[(0,N.jsx)("b",{children:"Concept Stage:"})," Defining the business idea and identifying a problem to solve"]})]}),(0,N.jsxs)(c.Zw,{children:[(0,N.jsx)("input",{type:"radio",checked:"company_current_PreSeed"===Le.stage_step3,name:"stage_step3",value:"company_current_PreSeed",id:"planning5",onChange:Ze,required:!0}),(0,N.jsxs)("label",{htmlFor:"planning5",children:[(0,N.jsx)("b",{children:"Pre-Seed Stage:"})," Validating the idea, conducting market research, and assembling a core team."]})]}),(0,N.jsxs)(c.Zw,{children:[(0,N.jsx)("input",{checked:"company_current_seedstage"===Le.stage_step3,type:"radio",name:"stage_step3",value:"company_current_seedstage",id:"execution4",onChange:Ze,required:!0}),(0,N.jsxs)("label",{htmlFor:"execution4",children:[(0,N.jsx)("b",{children:"Seed Stage:"})," Securing initial funding, refining its business model, and beginning early commercialization."]})]}),(0,N.jsxs)(c.Zw,{children:[(0,N.jsx)("input",{checked:"company_current_earlystage"===Le.stage_step3,type:"radio",name:"stage_step3",value:"company_current_earlystage",id:"execution3",onChange:Ze,required:!0}),(0,N.jsxs)("label",{htmlFor:"execution3",children:[(0,N.jsx)("b",{children:"Early Stage:"})," Focusing on product development, market validation, and acquiring initial customers."]})]}),(0,N.jsxs)(c.Zw,{children:[(0,N.jsx)("input",{checked:"company_current_growthstage"===Le.stage_step3,type:"radio",name:"stage_step3",value:"company_current_growthstage",id:"execution2",onChange:Ze,required:!0}),(0,N.jsxs)("label",{htmlFor:"execution2",children:[(0,N.jsx)("b",{children:"Growth Stage:"})," Scaling operations, optimizing processes, and expanding the customer base."]})]}),(0,N.jsxs)(c.Zw,{children:[(0,N.jsx)("input",{checked:"company_current_expansionthstage"===Le.stage_step3,type:"radio",name:"stage_step3",value:"company_current_expansionthstage",id:"execution1",onChange:Ze,required:!0}),(0,N.jsxs)("label",{htmlFor:"execution1",children:[(0,N.jsx)("b",{children:"Expansion Stage:"})," Entering new markets, diversifying offerings, and increasing revenue streams."]})]}),(0,N.jsxs)(c.Zw,{children:[(0,N.jsx)("input",{checked:"company_current_exitthstage"===Le.stage_step3,type:"radio",name:"stage_step3",value:"company_current_exitthstage",id:"exit",onChange:Ze,required:!0}),(0,N.jsxs)("label",{htmlFor:"exit",children:[(0,N.jsx)("b",{children:"Exit Stage: "})," Preparing for acquisition, IPO, or other forms of exit strategy."]})]})]})]})}),(0,N.jsx)("div",{className:"col-12",children:(0,N.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,N.jsxs)("label",{htmlFor:"",children:["How would you define the company's status, if generating revenue?\u201d"," ",(0,N.jsx)(c.dN,{className:"labelsize",children:"*"})]}),(0,N.jsxs)(c.z6,{id:"companygross",children:[(0,N.jsxs)(c.Zw,{children:[(0,N.jsx)("input",{checked:"gross_revenue_market_notinmarket"===Le.gross_revenue,type:"radio",name:"gross_revenue",value:"gross_revenue_market_notinmarket",id:"market-validationid",onChange:Ze,required:!0}),(0,N.jsx)("label",{htmlFor:"market-validationid",children:"Not in-market (Not generating revenues)"})]}),(0,N.jsxs)(c.Zw,{children:[(0,N.jsx)("input",{checked:"gross_revenue_market"===Le.gross_revenue,type:"radio",name:"gross_revenue",value:"gross_revenue_market",id:"market-validation",onChange:Ze,required:!0}),(0,N.jsx)("label",{htmlFor:"market-validation",children:"Market validation (at least one paying customer)"})]}),(0,N.jsxs)(c.Zw,{children:[(0,N.jsx)("input",{checked:"gross_revenue_Inmarket"===Le.gross_revenue,type:"radio",name:"gross_revenue",value:"gross_revenue_Inmarket",id:"in-market",onChange:Ze,required:!0}),(0,N.jsx)("label",{htmlFor:"in-market",children:"In-market (more than one paying customer)"})]}),(0,N.jsxs)(c.Zw,{children:[(0,N.jsx)("input",{checked:"gross_revenue_small"===Le.gross_revenue,type:"radio",name:"gross_revenue",value:"gross_revenue_small",id:"small-scale",onChange:Ze,required:!0}),(0,N.jsx)("label",{htmlFor:"small-scale",children:"Small Scale (regional, national paying customers)"})]}),(0,N.jsxs)(c.Zw,{children:[(0,N.jsx)("input",{type:"radio",checked:"gross_revenue_large"===Le.gross_revenue,name:"gross_revenue",value:"gross_revenue_large",id:"large-scale",onChange:Ze,required:!0}),(0,N.jsx)("label",{htmlFor:"large-scale",children:"Large Scale (includes international customers)"})]})]})]})}),(0,N.jsx)("div",{className:"col-12",children:(0,N.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,N.jsxs)("label",{htmlFor:"",children:["One-sentence headliner about the company"," ",(0,N.jsx)(c.dN,{className:"labelsize",children:"*"})]}),(0,N.jsxs)(c.Jq,{children:[(0,N.jsx)(u.A,{}),(0,N.jsx)("textarea",{id:"headline",required:!0,name:"headline",onChange:e=>{const a=e.target.value,{name:s,value:i}=e.target;De((e=>({...e,[s]:i}))),oe(a.length)},maxLength:"240",placeholder:"Max 240 characters...",children:Le.headline||""})]}),(0,N.jsxs)("div",{className:"char-count",children:[re,"/240"]})]})}),(0,N.jsx)("div",{className:"col-12",children:(0,N.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,N.jsxs)("label",{htmlFor:"",children:["About your company in one sentence"," ",(0,N.jsx)(c.dN,{className:"labelsize",children:"*"}),(0,N.jsxs)("span",{className:"tooltip-icon",tabIndex:0,"aria-describedby":"tooltip1",children:[(0,N.jsx)("img",{className:"blackdark",width:"20",height:"20",src:"/assets/user/images/question.png",alt:"Tip Image"}),(0,N.jsxs)("div",{className:"tooltip-text",children:[(0,N.jsxs)("ul",{children:[(0,N.jsxs)("li",{children:[(0,N.jsx)("em",{children:"FinTech Startup:"}),' "We simplify international payments for small businesses with an instant, low-cost digital solution."']}),(0,N.jsxs)("li",{children:[(0,N.jsx)("em",{children:"HealthTech:"}),' "Our AI-powered diagnostics make early disease detection accessible and affordable for underserved communities."']}),(0,N.jsxs)("li",{children:[(0,N.jsx)("em",{children:"SaaS Solution:"}),' "We help businesses automate repetitive tasks, boosting productivity and reducing operational costs."']}),(0,N.jsxs)("li",{children:[(0,N.jsx)("em",{children:"Consumer Goods:"}),' "We create stylish, eco-friendly clothing from recycled materials, redefining sustainable fashion."']})]}),(0,N.jsx)("strong",{children:"Pro Tips"}),(0,N.jsxs)("ul",{children:[(0,N.jsx)("li",{children:"\u2714 Keep it concise\u2014Aim for 1-2 sentences."}),(0,N.jsx)("li",{children:"\u2714 Highlight your unique value\u2014What makes your company different?"}),(0,N.jsx)("li",{children:"\u2714 Use clear, compelling language\u2014Avoid jargon; keep it simple."}),(0,N.jsx)("li",{children:"\u2714 Focus on impact\u2014How does your product/service solve a key problem?"})]})]})]})]}),(0,N.jsxs)(c.Jq,{children:[(0,N.jsx)(u.A,{}),(0,N.jsx)("textarea",{required:!0,id:"description",name:"descriptionStep4",maxLength:"800",onChange:e=>{const a=e.target.value,{name:s,value:i}=e.target;We((e=>({...e,[s]:i}))),ve(a.length)},value:Re.descriptionStep4||"",placeholder:"Max 800 characters..."})]}),(0,N.jsxs)("div",{className:"char-count",children:[je,"/800"]})]})}),(0,N.jsx)("div",{className:"col-12",children:(0,N.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,N.jsxs)("label",{htmlFor:"",children:["What problem are you solving?"," ",(0,N.jsx)(c.dN,{className:"labelsize",children:"*"}),(0,N.jsxs)("span",{className:"tooltip-icon",tabIndex:0,"aria-describedby":"tooltip1",children:[(0,N.jsx)("img",{className:"blackdark",width:"20",height:"20",src:"/assets/user/images/question.png",alt:"Tip Image"}),(0,N.jsx)("div",{className:"tooltip-text",id:"tooltip1",role:"tooltip",children:(0,N.jsxs)("ul",{children:[(0,N.jsxs)("li",{children:[(0,N.jsx)("em",{children:"FinTech Startup:"}),' "Small businesses struggle with slow, expensive international transactions. We provide an instant, low-cost payment solution that simplifies global trade."']}),(0,N.jsxs)("li",{children:[(0,N.jsx)("em",{children:"HealthTech:"}),' "Millions lack access to early disease detection. We develop affordable AI-powered diagnostics to improve health outcomes."']}),(0,N.jsxs)("li",{children:[(0,N.jsx)("em",{children:"SaaS Solution:"}),' "Teams waste hours on manual data entry. Our automation tool eliminates repetitive tasks, saving companies time and money."']}),(0,N.jsxs)("li",{children:[(0,N.jsx)("em",{children:"Consumer Goods:"}),' "The fashion industry produces massive waste. We create stylish apparel from recycled materials to promote sustainability."']})]})})]})]}),(0,N.jsxs)(c.Jq,{children:[(0,N.jsx)(_.A,{}),(0,N.jsx)("textarea",{required:!0,id:"problem",name:"problemStep4",maxLength:"400",onChange:e=>{const a=e.target.value,{name:s,value:i}=e.target;We((e=>({...e,[s]:i}))),ye(a.length)},value:Re.problemStep4||"",placeholder:"Max 400 characters..."})]}),(0,N.jsxs)("div",{className:"char-count",children:[fe,"/400"]})]})}),(0,N.jsx)("div",{className:"col-12",children:(0,N.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,N.jsxs)("label",{htmlFor:"",children:["What is Your Solution to the Problem?"," ",(0,N.jsx)(c.dN,{className:"labelsize",children:"*"}),(0,N.jsxs)("span",{className:"tooltip-icon",tabIndex:0,"aria-describedby":"tooltip1",children:[(0,N.jsx)("img",{className:"blackdark",width:"20",height:"20",src:"/assets/user/images/question.png",alt:"Tip Image"}),(0,N.jsxs)("div",{className:"tooltip-text",id:"tooltip1",role:"tooltip",children:[(0,N.jsx)("strong",{children:"Some examples of descriptions:"}),(0,N.jsxs)("ul",{children:[(0,N.jsxs)("li",{children:[(0,N.jsx)("em",{children:"FinTech Startup:"}),' "We provide a seamless, low-cost digital payment system that enables small businesses to send and receive international transactions instantly."']}),(0,N.jsxs)("li",{children:[(0,N.jsx)("em",{children:"HealthTech:"}),' "Our AI-powered diagnostics identify diseases at an early stage, making healthcare more accessible and reducing treatment costs."']}),(0,N.jsxs)("li",{children:[(0,N.jsx)("em",{children:"SaaS Solution:"}),' "We automate data entry and workflow processes, eliminating repetitive tasks so businesses can focus on growth."']}),(0,N.jsxs)("li",{children:[(0,N.jsx)("em",{children:"Consumer Goods:"}),' "We create high-quality, stylish apparel from recycled materials, reducing fashion waste and promoting sustainability."']})]}),(0,N.jsx)("strong",{children:"Pro Tips"}),(0,N.jsxs)("ul",{children:[(0,N.jsx)("li",{children:"\u2714 Be direct\u2014Explain exactly how your solution addresses the problem."}),(0,N.jsx)("li",{children:"\u2714 Show innovation\u2014Highlight what makes your approach unique."}),(0,N.jsx)("li",{children:"\u2714 Make it investor-friendly\u2014Demonstrate scalability and growth potential."}),(0,N.jsx)("li",{children:"\u2714 Keep it concise\u20141-2 sentences for a clear, impactful answer."})]})]})]})]}),(0,N.jsxs)(c.Jq,{children:[(0,N.jsx)(_.A,{}),(0,N.jsx)("textarea",{required:!0,id:"solution",name:"solutionStep4",maxLength:"400",onChange:e=>{const a=e.target.value,{name:s,value:i}=e.target;We((e=>({...e,[s]:i}))),_e(a.length)},value:Re.solutionStep4||"",placeholder:"Max 400 characters..."})]}),(0,N.jsxs)("div",{className:"char-count",children:[be,"/400"]})]})}),(0,N.jsx)("div",{className:"col-12",children:(0,N.jsxs)("div",{className:"d-flex justify-content-between mt-4",children:[(0,N.jsx)("div",{className:"flex-shrink-0",children:(0,N.jsxs)("button",{type:"button",className:"sbtn backbtn","data-step":"3",onClick:()=>{W(!1),D(!0)},children:[(0,N.jsx)(b.A,{})," back"]})}),(0,N.jsxs)("div",{className:"flex-shrink-0",children:[(0,N.jsxs)("button",{disabled:a,type:"submit",className:"sbtn nextbtn","data-step":"3",children:["next ",(0,N.jsx)(x.A,{})]}),a&&(0,N.jsx)("div",{className:"spinner-border text-white spinneronetimepay m-0",role:"status",children:(0,N.jsx)("span",{className:"visually-hidden"})})]})]})})]})]})})})]})})})})]}),(0,N.jsx)(c.hJ,{show:q,children:(0,N.jsxs)(c.Cd,{children:[(0,N.jsx)(c.nj,{onClick:()=>A(!1),children:"\xd7"}),(0,N.jsx)("form",{children:(0,N.jsxs)("div",{className:"d-flex flex-column gap-3",children:[(0,N.jsx)("div",{className:"d-block",children:(0,N.jsx)(c.pd,{type:"text",name:"name",placeholder:"Your Name",value:Fe.name,onChange:Ze,required:!0})}),(0,N.jsx)("div",{className:"d-block",children:(0,N.jsx)(c.pd,{type:"email",name:"email",placeholder:"Your Email",value:Fe.email,onChange:Ze,required:!0})}),(0,N.jsx)("div",{className:"d-flex justify-content-end",children:(0,N.jsx)(c.R3,{type:"submit",children:"Submit"})})]})})]})})]})}}}]);
//# sourceMappingURL=9454.e27565db.chunk.js.map