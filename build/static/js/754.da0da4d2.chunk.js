"use strict";(self.webpackChunkkeiretsuproject=self.webpackChunkkeiretsuproject||[]).push([[754],{6510:(e,i,s)=>{s.r(i),s.d(i,{default:()=>I});var a=s(5043),o=s(2661),l=s(9463),r=s(8326),t=s(5266),n=s(5475),c=s(9292),d=s(2983),x=s(579);function m(){const[e,i]=(0,a.useState)(!1),[s,o]=(0,a.useState)(!1),l=localStorage.getItem("UserLoginData"),r=JSON.parse(l);return(0,a.useEffect)((()=>{const e=()=>{window.scrollY>0?o(!0):o(!1)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[]),(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("header",{className:"headerhome "+(s?"sticky-header":""),style:{position:s?"fixed":"relative"},children:(0,x.jsx)("div",{className:"container-lg",children:(0,x.jsx)("nav",{className:"navbar navbar-expand-lg",children:(0,x.jsxs)("div",{className:"container-fluid",children:[(0,x.jsx)(n.N_,{className:"navbar-brand",to:"/",children:(0,x.jsx)("img",{src:"/logos/logo.png",alt:"logo"})}),(0,x.jsx)("button",{className:"navbar-toggler",type:"button",onClick:()=>i(!e),"aria-controls":"navbarNav","aria-expanded":e,"aria-label":"Toggle navigation",children:(0,x.jsx)(d.A,{})}),(0,x.jsxs)("div",{className:"navbar-collapse "+(e?"show":"collapse"),id:"navbarNav",children:[(0,x.jsxs)("ul",{className:"navbar-nav ms-auto",children:[(0,x.jsx)("li",{className:"nav-item",children:(0,x.jsx)(n.N_,{className:"nav-link","aria-current":"page",to:"/",children:"Who we are"})}),(0,x.jsx)("li",{className:"nav-item",children:(0,x.jsx)(n.N_,{className:"nav-link",to:"/",children:"Expertise"})}),(0,x.jsx)("li",{className:"nav-item",children:(0,x.jsx)(n.N_,{className:"nav-link",to:"/services",children:"Menu"})}),(0,x.jsxs)("li",{className:"nav-item",children:[null===r&&(0,x.jsx)(n.N_,{className:"nav-link",to:"/login",children:"Login"}),null!==r&&(0,x.jsx)(n.N_,{className:"nav-link",to:"/logout",children:"Logout"})]})]}),(0,x.jsx)("div",{className:"topsearchbox ms-lg-5 mt-4 mt-lg-0",children:(0,x.jsxs)("form",{action:"",children:[(0,x.jsx)("input",{type:"text",placeholder:"Search"}),(0,x.jsx)("button",{type:"submit",children:(0,x.jsx)(c.A,{})})]})})]})]})})})})})}var h=s(2330),p=s(8814),g=s(5464);const u=g.default.div`
  background-color: #445473;
  padding: 60px 0 0px 0;
  .footer-logo {
    width: 200px;
    img {
      width: 100%;
    }
  }
  .footer-text {
    p {
      color: #fff;
      font-size: 16px;
    }
  }
  .ftcol {
    h4 {
      color: #fff;
      font-size: 18px;
      font-weight: 700;
      text-transform: uppercase;
    }
    .ftlinks {
      a {
        color: #fff;
        font-size: 14px;
        text-transform: capitalize;
        &:hover {
          color: var(--secondary-color);
        }
      }
    }
  }
  .lastredlink {
    a {
      &:last-child {
        color: #fff;
        background: #cb1d1d;
        padding: 4px;
        width: fit-content;
        &:hover {
          background: var(--secondary-color);
          color: #fff;
        }
      }
    }
  }
  .bottom-links {
    a {
      position: relative;
      color: #fff;
      font-size: 14px;
      text-transform: capitalize;

      &:not(:last-child) {
        &:after {
          content: "";
          position: absolute;
          right: -10px;
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 17px;
          background: #fff;
        }
      }
      &:hover {
        color: var(--secondary-color);
      }
    }
  }
  @media (max-width: 576px) {
    .bottom-links {
      a {
        &:after {
          display: none;
        }
      }
    }
  }
  .siconft {
    a {
      color: #fff;
      font-size: 14px;
      text-transform: capitalize;

      &:hover {
        color: var(--secondary-color);
      }
    }
  }
  .footer-bottom {
    background: #334261;
    padding: 10px 0;
    p {
      color: #fff;
      font-size: 12px;
      text-transform: capitalize;
    }
  }
`;var f=s(3156);function j(){return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(u,{className:"home-footer",children:[(0,x.jsx)("div",{className:"container-lg",children:(0,x.jsxs)("div",{className:"row gy-4",children:[(0,x.jsx)("div",{className:"col-md-3",children:(0,x.jsxs)("div",{className:"d-flex flex-column gap-3",children:[(0,x.jsx)("div",{className:"footer-logo",children:(0,x.jsx)("img",{src:"/logos/logo.png",alt:"image"})}),(0,x.jsx)("div",{className:"footer-text",children:(0,x.jsx)("p",{children:"We are a firm speecializing in assisting entrepreneurs with scalability strategies, fundraising, or company sales."})})]})}),(0,x.jsx)("div",{className:"col-md-3",children:(0,x.jsxs)("div",{className:"d-flex flex-column gap-3 ftcol",children:[(0,x.jsx)("h4",{children:"SERVICES"}),(0,x.jsxs)("div",{className:"d-flex flex-column gap-2 ftlinks",children:[(0,x.jsx)("a",{href:"/",children:"Fundraising"}),(0,x.jsx)("a",{href:"/",children:"Company sales"}),(0,x.jsx)("a",{href:"/",children:"Scalability processes"}),(0,x.jsx)("a",{href:"/",children:"Value your company"})]})]})}),(0,x.jsx)("div",{className:"col-md-3",children:(0,x.jsxs)("div",{className:"d-flex flex-column gap-3 ftcol",children:[(0,x.jsx)("h4",{children:"COMPANY"}),(0,x.jsxs)("div",{className:"d-flex flex-column gap-2 ftlinks lastredlink",children:[(0,x.jsx)("a",{href:"/",children:"Our team"}),(0,x.jsx)("a",{href:"/",children:"Company data"}),(0,x.jsx)("a",{href:"/",children:"Contact us"}),(0,x.jsx)("a",{href:"/",children:"info@blueprintcatalyst.com"})]})]})}),(0,x.jsx)("div",{className:"col-md-3",children:(0,x.jsxs)("div",{className:"d-flex flex-column gap-3 ftcol",children:[(0,x.jsx)("h4",{children:"Follow us"}),(0,x.jsxs)("div",{className:"d-flex gap-3 align-items-center siconft",children:[(0,x.jsx)("a",{href:"/",children:(0,x.jsx)(f.TCj,{className:"social-icon",size:20})}),(0,x.jsx)("a",{href:"/",children:(0,x.jsx)(h.A,{className:"social-icon",size:20})}),(0,x.jsx)("a",{href:"/",children:(0,x.jsx)(p.A,{className:"social-icon",size:20})})]})]})}),(0,x.jsx)("div",{className:"col-12 mt-5",children:(0,x.jsx)("div",{className:"d-flex justify-content-md-center",children:(0,x.jsxs)("div",{className:"d-flex flex-column flex-sm-row align-items-md-center gap-3 gap-md-4  bottom-links",children:[(0,x.jsx)("a",{href:"/",children:"Company policy"}),(0,x.jsx)("a",{href:"/",children:"Terms of use"}),(0,x.jsx)("a",{href:"/",children:"Accessibility"})]})})})]})}),(0,x.jsx)("div",{className:"footer-bottom text-center mt-5",children:(0,x.jsx)("div",{className:"container-lg",children:(0,x.jsx)("p",{children:"\xa9 2025 Blueprint Catalyst. All rights reserved."})})})]})})}const v=g.default.div`
  background: rgba(0, 0, 0, 0.3);
  overflow: hidden;
  position: relative;
  // background: url("/assets/user/images/water.gif");
  // background-size: cover;
  // background-position: center;
  // background-repeat: no-repeat;
  padding-bottom: 40px;
  .videobox {
    position: absolute;
    inset: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    video {
      aspect-ratio: 16 / 9;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  @media (max-width: 767px) {
    .video {
      aspect-ratio: 9 / 16;
    }
  }
  .container-lg {
    position: relative;
    z-index: 2;
  }
  .bannertext {
    padding-top: 10vw;

    h1 {
      font-size: 58px;
      color: #fff;
      font-weight: 600;
      text-transform: uppercase;
    }

    .qubox {
      aspect-ratio: 1 / 1;
      position: relative;
      width: 90px;

      img {
        width: 100%;
      }

      @media (max-width: 768px) {
        width: 30px;
      }
    }

    .topqu {
      float: left;
      margin-top: -30px;
    }

    .bottomqu {
      float: right;
      margin-top: -30px;

      @media (max-width: 768px) {
        margin-top: 0px;
      }
    }

    h6 {
      margin-top: 5vw;
      color: #fff;
      font-size: 22px;
      font-weight: 300;
      text-transform: capitalize;
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 32px;
      }
    }
  }

  .news-title {
    margin-top: 6vw;
    font-size: 20px;
    color: #fff;
    text-transform: uppercase;
  }

  .newsview {
    .news-img {
      border: 1px solid #fff;
      border-radius: 6px;
      overflow: hidden;

      img {
        width: 100%;
      }
    }

    .news-text {
      p {
        font-size: 16px;
        color: #fff;
        font-weight: 300;

        line-height: 20px;
      }
    }
  }
`,b=g.default.div`
  padding: 80px 0;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.72) 50%,
    rgba(51, 87, 149, 0.44) 100%
  );

  .bigimg {
    position: relative;

    .yearexp {
      position: absolute;
      top: 0;
      left: 0;
      background: var(--primary-color);
      padding: 15px;
      color: #fff;
      text-align: center;
      border-radius: 6px;
      overflow: hidden;

      h4 {
        font-size: 60px;
        font-weight: bold;
      }

      h5 {
        font-size: 16px;
        font-weight: 400;
      }
    }

    img {
      width: 100%;
      overflow: hidden;
      border-radius: 6px;
    }

    .about-img {
      padding: 30px;
    }
  }

  .about-text {
    h2 {
      font-size: 20px;
      color: var(--primary-color);
      font-weight: 700;
    }

    h3 {
      font-size: 28px;
      color: #000;
      font-weight: 700;
    }

    p {
      font-size: 16px;
      color: rgb(108, 108, 108);
      font-weight: 300;
    }
  }

  .extext {
    h5 {
      font-size: 30px;
      color: var(--primary-color);
      font-weight: 700;
      font-style: italic;
    }

    h6 {
      font-size: 20px;
      color: #3c3c3c;
      font-weight: 400;
      text-transform: capitalize;
    }
  }
`,N=g.default.div`
  padding: 80px 0;
  background: #fefefe;

  .service-title {
    font-size: 30px;
    color: var(--primary-color);
    font-weight: 700;
    text-transform: uppercase;
  }

  .service-card {
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(197, 197, 197, 0.4);
    padding: 20px;
    position: relative;
    border-radius: 6px;
    overflow: hidden;

    h3 {
      font-size: 3vw;
      font-weight: 600;

      -webkit-text-fill-color: white;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: var(--primary-color);
    }

    @media (max-width: 768px) {
      h3 {
        font-size: 30px;
      }
    }
    h4 {
      font-size: 20px;
      color: var(--primary-color);
      font-weight: 600;
    }

    p {
      font-size: 16px;
      color: rgb(108, 108, 108);
      font-weight: 400;
    }

    .readlink {
      font-size: 14px;
      color: var(--secondary-color);
      font-weight: 600;
      text-decoration: none;
      text-transform: uppercase;
      &:hover {
        color: black;
        text-decoration: underline;
      }
    }

    & > * {
      z-index: 2;
      position: relative;
    }

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background: var(--primary-color);
      z-index: 1;
      transition: all 0.5s ease;
    }

    &:hover::before {
      width: 100%;
    }

    &:hover > * {
      color: #fff;
    }
  }
`,w=g.default.div`
  padding: 80px 0;
  background: rgba(51, 87, 149, 0.15);

  .teamtitle {
    h2 {
      font-size: 30px;
      color: var(--primary-color);
      font-weight: 700;
      text-transform: uppercase;
    }

    h3 {
      font-size: 20px;
      color: #000;
      font-weight: 400;
    }
  }

  .clientbox {
    background: #fff;
    text-align: center;
    border-radius: 6px;
    overflow: hidden;
    h4 {
      font-size: 16px;
      color: var(--primary-color);
      font-weight: 700;
      margin-top: 5px;
      line-height: 20px;
    }

    h5 {
      font-size: 14px;
      color: #000;
      font-weight: 400;

      margin-bottom: 14px;
    }
  }

  .teamperson {
    position: relative;

    .teamimg {
      width: 100%;
      aspect-ratio: 1;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        -webkit-transition: all 1s ease;
        -moz-transition: all 1s ease;
        -o-transition: all 1s ease;
        -ms-transition: all 1s ease;
        transition: all 1s ease;
      }
    }
    &:hover {
      .teamimg {
        img {
          transform: scale(1.1);
          -webkit-transition: all 1s ease;
          -moz-transition: all 1s ease;
          -o-transition: all 1s ease;
          -ms-transition: all 1s ease;
          transition: all 1s ease;
        }
      }
    }

    .sicons {
      position: absolute;
      bottom: 110px;
      right: 10px;
      background: var(--primary-color);
      padding: 10px;
      color: #fff;
      width: 50px;
      height: 50px;
      cursor: pointer;
      transition: all 0.5s ease;
      display: grid;
      place-items: center;
      border-radius: 6px;
      svg {
        fill: #fff;
      }
      .innerhover {
        border-radius: 6px 6px 0 0;
        background: var(--primary-color);
        width: 50px;
        text-align: center;
        opacity: 0;
        display: flex;
        flex-direction: column;
        gap: 6px;
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 8px 6px;
        transition: all 0.5s ease;

        svg {
          fill: #fff;
          stroke: var(--primary-color);
        }
      }

      &:hover .innerhover {
        opacity: 1;
        bottom: 40px;
      }
    }
  }
  .slick-arrow {
    &:before {
      display: none;
    }
    background: var(--primary-color);
    border: 1px solid var(--primary-color);
    width: 40px;
    height: 40px;
    display: grid !important;
    place-items: center !important;
    cursor: pointer;
    border-radius: 6px;
    svg {
      stroke: #fff;
    }
  }
`,y=g.default.div`
  background: url("/assets/user/images/about-video-bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  .overlaybox {
    aspect-ratio: 24/9;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(51, 87, 149, 1) 100%
    );
    padding: 80px 0;
    .videotext {
      h2 {
        font-size: 30px;
        color: #fff;
        text-transform: uppercase;
        font-weight: 500;
      }
      @media (max-width: 768px) {
        h2 {
          font-size: 20px;
        }
      }
      .playbtn {
        font-size: 16px;
        color: #fff;
        background: none;
        border: none;

        font-weight: 600;
        svg {
          fill: #fff;
          background: var(--primary);
          border-radius: 50%;
          padding: 10px;
          width: 60px;
          height: 60px;
          padding: 15px;
        }

        .iconbox {
          width: 54px;
          img {
            width: 100%;
          }
        }
      }
      .videotags {
        border-top: 1px solid #fff;
        padding-top: 20px;
        svg {
          color: #fff;
        }
        p {
          font-size: 16px;
          color: #fff;
        }
      }
    }
  }
`,k=g.default.div`
  padding: 80px 0;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.72) 50%,
    rgba(51, 87, 149, 0.44) 100%
  );
  .protfoliotitle {
    h2 {
      font-size: 30px;
      color: var(--primary-color);
      font-weight: 700;
      text-transform: uppercase;
    }
    h3 {
      font-size: 20px;
      color: #000;
      font-weight: 400;
    }
  }
  .slick-arrow {
    &:before {
      display: none;
    }
    background: var(--primary-color);
    border: 1px solid var(--primary-color);
    width: 40px;
    height: 40px;
    border-radius: 6px;
    display: grid !important;
    place-items: center !important;
    cursor: pointer;
    svg {
      stroke: #fff;
    }
  }
  .photobox {
    border-radius: 6px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .photoimg {
      width: 100%;
      overflow: hidden;
      aspect-ratio: 1;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .phototext {
      -webkit-transition: all 0.5s ease;
      -moz-transition: all 0.5s ease;
      -o-transition: all 0.5s ease;
      -ms-transition: all 0.5s ease;
      transition: all 0.5s ease;
      position: absolute;
      bottom: 0;
      margin-bottom: 0px;
      left: 0;
      width: 100%;
      background: rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(10px);
      padding: 15px;
      display: flex;
      flex-direction: column;
      gap: 2px;
      h4 {
        font-size: 18px;
        color: var(--primary-color);
        font-weight: 700;
      }
      h5 {
        font-size: 16px;
        color: #000;
        font-weight: 400;
      }
      .readbtn {
        a {
          font-size: 14px;
          color: var(--secondary-color);
          font-weight: 600;
          text-transform: uppercase;

          &:hover {
            color: var(--primary-color);
          }
        }
      }
    }
  }
`,z=g.default.div`
  padding: 80px 0;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.72) 50%,
    rgba(51, 87, 149, 0.44) 100%
  );
  .faqtitle {
    h2 {
      font-size: 30px;
      color: var(--primary-color);
      font-weight: 700;
      text-transform: uppercase;
    }
    h3 {
      font-size: 20px;
      color: #000;
      font-weight: 400;
    }
  }
  .accordion {
    border-radius: 6px;
    border: none;
    .accordion-item {
      border-radius: 6px !important;
      margin-bottom: 10px;
      border: none;
      box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.1);
      .accordion-button.collapsed {
        background: #fff;
        color: $black;
      }
      .accordion-button {
        border-radius: 6px;
        background: rgb(235, 235, 235);
        color: $white;
        font-size: 16px;
        padding: 24px;
        font-weight: 700;
        text-transform: capitalize;

        // &:after {
        //   filter: invert(100%);
        // }
        &:focus {
          border: none;
          box-shadow: none;
        }
      }
    }
    .accordion-body {
      display: flex;
      flex-direction: column;
      gap: 10px;
      border-radius: 6px;
      p {
        font-size: 16px;
        font-weight: 400;
        color: $black;
      }
    }
  }
`,q=g.default.div`
  padding: 80px 0;
  background: #fff;
  .teamtitle {
    h2 {
      font-size: 30px;
      color: var(--primary-color);
      font-weight: 700;
      text-transform: uppercase;
    }
    h3 {
      font-size: 20px;
      color: #000;
      font-weight: 400;
    }
  }
  .clientbox {
    p {
      font-size: 18px;
      color: #000;
      font-weight: 400;
      font-style: italic;
    }
    .clientinfo {
      .clientimg {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      h5 {
        color: var(--primary-color);
        font-size: 16px;
        font-weight: 600;
      }
      h6 {
        color: #000;
        font-size: 14px;
        font-weight: 400;
      }
    }
  }
  .quotesicon {
    position: absolute;
    bottom: 0;
    right: 0;
    color: var(--primary-color);
    opacity: 0.5;
  }
`,C=g.default.div`
  padding: 80px 0;
  background: rgba(51, 87, 149, 0.15);
  .teamtitle {
    h2 {
      font-size: 30px;
      color: var(--primary-color);
      font-weight: 700;
      text-transform: uppercase;
    }
    h3 {
      font-size: 20px;
      color: #000;
      font-weight: 400;
    }
  }
  .contactinfo {
    font-size: 25px;
    color: black;
    font-weight: 600;
    margin-top: 20px;
  }
  .contacttext {
    h4 {
      font-size: 16px;
      color: var(--primary-color);
      font-weight: 700;
      text-transform: uppercase;
    }
    h5 {
      font-size: 18px;
      color: #000;
      a {
        font-size: 18px;
        color: #000;

        text-decoration: none;
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }
  .contactbox {
    background: #fff;
    padding: 25px;
    border-radius: 6px;
    h4 {
      font-size: 20px;
      color: var(--primary-color);
      font-weight: 700;
      text-transform: uppercase;
    }

    form {
      input[type="text"],
      input[type="email"] {
        border: none;
        padding: 10px;
        width: 100%;
        border-radius: 6px;
        font-size: 16px;

        background: rgb(51, 87, 149, 0.2);
      }
      textarea {
        border: none;
        border-radius: 6px;
        padding: 10px;
        width: 100%;
        font-size: 16px;

        background: rgb(51, 87, 149, 0.2);
      }
      .submitbtn {
        background: var(--primary-color);
        color: #fff;
        font-weight: 600;
        font-size: 16px;
        padding: 10px;
        border-radius: 6px;
        border: none;
        width: 100%;
        text-transform: uppercase;

        &:hover {
          background: var(--secondary-color);
        }
      }
    }
  }
`,S=g.default.div`
  padding: 60px 0;
  background: #fff;
  .brandtitle {
    h2 {
      font-size: 30px;
      color: var(--primary-color);
      font-weight: 700;
      text-transform: uppercase;
    }
    h3 {
      font-size: 20px;
      color: #000;
      font-weight: 400;
    }
  }
  .logoimg {
    width: 100%;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
`;var A=s(2382),T=(s(4430),s(9078),s(614));const E=e=>{let{isOpen:i,onClose:s,videoId:o}=e;return(0,a.useEffect)((()=>(document.body.style.overflow=i?"hidden":"unset",()=>{document.body.style.overflow="unset"})),[i]),i?(0,x.jsx)("div",{className:"video-popup-overlay",onClick:s,children:(0,x.jsxs)("div",{className:"video-popup-content",onClick:e=>e.stopPropagation(),children:[(0,x.jsx)("button",{className:"close-button",onClick:s,children:(0,x.jsx)(T.A,{size:24})}),(0,x.jsx)("div",{className:"video-container",children:(0,x.jsx)("iframe",{width:"100% ",height:"auto",src:"/assets/user/video/BluePrint Catalyst Overview.mp4?autoplay=1",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]})}):null},O=g.default.div`
  .video-popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .video-popup-content {
    position: relative;
    width: 90%;
    max-width: 1024px;
    aspect-ratio: 16/9;
    background: #000;
  }

  .video-container {
    width: 100%;
    height: 100%;
    iframe {
      aspect-ratio: 16/9;
      height: auto;
      width: 100%;
    }
  }

  .close-button {
    position: absolute;
    top: -40px;
    right: 0;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 8px;
    z-index: 1001;

    &:hover {
      opacity: 0.8;
    }
  }
`,L=[{id:"One",title:"Ut cupidatat quis aliqua consequat anim laboris tempor.",content:["Excepteur laborum sit ipsum elit aute ullamco labore veniam...","Aliquip tempor incididunt ex proident eiusmod qui minim...","Culpa pariatur irure id mollit excepteur ad voluptate..."]},{id:"Two",title:"Aliqua nostrud cillum exercitation officia labore...",content:["Ad aliquip nostrud laborum culpa voluptate eu dolor...","Quis eu consequat laborum irure laboris magna sunt culpa...","Ex laboris ullamco duis eiusmod sit..."]},{id:"Three",title:"Non duis enim eiusmod consectetur laborum mollit id.",content:["Eu officia incididunt pariatur nostrud consectetur eiusmod...","Cupidatat consectetur velit ea eu pariatur...","Dolore eiusmod ad aliqua anim mollit exercitation..."]},{id:"Three1",title:"Labore dolor consequat sunt amet est adipisicing ullamco...",content:["Excepteur tempor sit amet nisi laboris nisi veniam...","In aliqua ex magna do mollit elit elit laborum..."]},{id:"Three2",title:"Labore anim nostrud irure excepteur consequat eiusmod...",content:["Lorem ipsum dolor sit amet, consectetur adipiscing elit...","Sed do eiusmod tempor incididunt ut labore..."]},{id:"Three3",title:"Ea sunt occaecat aliqua magna ut labore elit nulla Lorem.",content:["Officia dolore fugiat cillum reprehenderit fugiat nulla...","Consequat exercitation culpa nisi laboris..."]}],F=e=>{let{className:i,style:s,onClick:a}=e;return(0,x.jsx)("div",{className:i,style:{...s,zIndex:1},onClick:a,children:(0,x.jsx)(l.A,{size:28,color:"#000"})})},P=e=>{let{className:i,style:s,onClick:a}=e;return(0,x.jsx)("div",{className:i,style:{...s,zIndex:1},onClick:a,children:(0,x.jsx)(r.A,{size:28,color:"#000"})})};function I(){document.title="BLUEPRINT CATALYST.LTD";var e={dots:!0,infinite:!0,speed:500,slidesToShow:4,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,nextArrow:(0,x.jsx)(P,{}),prevArrow:(0,x.jsx)(F,{}),responsive:[{breakpoint:1024,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1}}]},i={dots:!0,infinite:!0,speed:500,slidesToShow:3,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,nextArrow:(0,x.jsx)(P,{}),prevArrow:(0,x.jsx)(F,{}),responsive:[{breakpoint:1024,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1}}]};const[s,l]=(0,a.useState)(null),[r,c]=(0,a.useState)(!1);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(m,{}),(0,x.jsxs)(v,{className:"home-banner",children:[(0,x.jsx)("div",{className:"videobox",children:(0,x.jsxs)("video",{autoPlay:!0,muted:!0,loop:!0,playsinline:!0,poster:"/assets/user/images/home.jpg",children:[(0,x.jsx)("source",{src:"/assets/user/images/home.mp4",type:"video/mp4"}),(0,x.jsx)("source",{src:"/assets/user/images/home.mov",type:"video/mov"}),"Your browser does not support the video tag."]})}),(0,x.jsx)("div",{className:"container-lg",children:(0,x.jsx)("div",{className:"row justify-content-center",children:(0,x.jsx)("div",{className:"col-12 col-md-10",children:(0,x.jsxs)("div",{className:"bannertext text-center",children:[(0,x.jsx)("span",{className:"qubox topqu",children:(0,x.jsx)("img",{src:"/assets/user/images/qu1.png",alt:"image"})}),(0,x.jsx)("h1",{children:"An investment in knowledge pays the best interest."}),(0,x.jsx)("span",{className:"qubox bottomqu",children:(0,x.jsx)("img",{src:"/assets/user/images/qu2.png",alt:"image"})}),(0,x.jsx)("div",{className:"d-flex justify-content-end",children:(0,x.jsx)("h6",{children:"- Benjamin Franklin"})})]})})})}),(0,x.jsx)("div",{className:"container-lg",children:(0,x.jsxs)("div",{className:"row gy-3",children:[(0,x.jsx)("div",{className:"col-12",children:(0,x.jsx)("h2",{className:"news-title",children:"Latest News"})}),(0,x.jsx)("div",{className:"col-md-4",children:(0,x.jsxs)("a",{href:"/",className:"newsview d-flex flex-column gap-2",children:[(0,x.jsx)("div",{className:"news-img d-block",children:(0,x.jsx)("img",{src:"/assets/user/images/news1.jpg",alt:"image"})}),(0,x.jsx)("div",{className:"news-text text-center",children:(0,x.jsx)("p",{children:"Consectetur irure non esse quis non aliquip nulla labore dolor pariatur amet pariatur ex laborum."})})]})}),(0,x.jsx)("div",{className:"col-md-4",children:(0,x.jsxs)("a",{href:"/",className:"newsview d-flex flex-column gap-2",children:[(0,x.jsx)("div",{className:"news-img d-block",children:(0,x.jsx)("img",{src:"/assets/user/images/news2.jpg",alt:"image"})}),(0,x.jsx)("div",{className:"news-text text-center",children:(0,x.jsx)("p",{children:"Consectetur irure non esse quis non aliquip nulla labore dolor pariatur amet pariatur ex laborum."})})]})}),(0,x.jsx)("div",{className:"col-md-4",children:(0,x.jsxs)("a",{href:"/",className:"newsview d-flex flex-column gap-2",children:[(0,x.jsx)("div",{className:"news-img d-block",children:(0,x.jsx)("img",{src:"/assets/user/images/news3.jpg",alt:"image"})}),(0,x.jsx)("div",{className:"news-text text-center",children:(0,x.jsx)("p",{children:"Consectetur irure non esse quis non aliquip nulla labore dolor pariatur amet pariatur ex laborum."})})]})})]})})]}),(0,x.jsx)(b,{className:"d-block",children:(0,x.jsx)("div",{className:"container-lg",children:(0,x.jsxs)("div",{className:"row gy-4 gx-md-5",children:[(0,x.jsx)("div",{className:"col-md-6",children:(0,x.jsxs)("div",{className:"bigimg d-block position-relative",children:[(0,x.jsxs)("div",{className:"yearexp",children:[(0,x.jsx)("h4",{children:"45"}),(0,x.jsx)("h5",{children:"Years of Experience"})]}),(0,x.jsx)("div",{className:"about-img",children:(0,x.jsx)("img",{src:"/assets/user/images/about.webp",alt:"image"})})]})}),(0,x.jsx)("div",{className:"col-md-6",children:(0,x.jsxs)("div",{className:"about-text d-flex flex-column gap-3",children:[(0,x.jsx)("h2",{children:"About Us"}),(0,x.jsx)("h3",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}),(0,x.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Do exercitation irure laborum eiusmod ullamco. Anim tempor reprehenderit magna deserunt. Proident nisi laboris nulla voluptate ex nisi voluptate qui qui culpa. Sit nisi eiusmod incididunt sint quis est quis ipsum exercitation laboris nisi officia aliqua. Velit eiusmod pariatur tempor aliquip. Culpa minim aute sint pariatur."}),(0,x.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Do exercitation irure laborum eiusmod ullamco. Anim tempor reprehenderit magna deserunt. Proident nisi laboris nulla voluptate ex nisi voluptate qui qui culpa. Sit nisi eiusmod incididunt sint quis est quis ipsum exercitation laboris nisi officia aliqua. Velit eiusmod pariatur tempor aliquip. Culpa minim aute sint pariatur."}),(0,x.jsxs)("div",{className:"row gy-4 gx-md-5",children:[(0,x.jsx)("div",{className:"col-md-6",children:(0,x.jsxs)("div",{className:"d-flex flex-column gap-2 extext",children:[(0,x.jsxs)("h5",{children:[(0,x.jsx)("sup",{children:"est."})," 2012"]}),(0,x.jsx)("h6",{children:"A decade of expertise"})]})}),(0,x.jsx)("div",{className:"col-md-6",children:(0,x.jsxs)("div",{className:"d-flex flex-column gap-2 extext",children:[(0,x.jsx)("h5",{children:"94.5%"}),(0,x.jsx)("h6",{children:"Satisfied customers"})]})})]})]})})]})})}),(0,x.jsx)(N,{className:"d-block",children:(0,x.jsxs)("div",{className:"container-lg",children:[(0,x.jsx)("div",{className:"text-center mb-5",children:(0,x.jsx)("h2",{className:"service-title",children:"Our Services"})}),(0,x.jsxs)("div",{className:"row g-4",children:[(0,x.jsx)("div",{className:"col-md-3",children:(0,x.jsxs)("div",{className:"service-card p-4 h-100 d-flex flex-column gap-3 position-relative",children:[(0,x.jsx)("h3",{children:"01"}),(0,x.jsx)("h4",{children:"Fundraising"}),(0,x.jsx)("p",{children:"Business consulting consultants provid Competitive Business Landscape"}),(0,x.jsxs)("a",{href:"#",className:"readlink",children:["Read More ",(0,x.jsx)(t.A,{})]})]})}),(0,x.jsx)("div",{className:"col-md-3",children:(0,x.jsxs)("div",{className:"service-card p-4 h-100 d-flex flex-column gap-3 relative",children:[(0,x.jsx)("h3",{children:"02"}),(0,x.jsx)("h4",{children:"Company sales"}),(0,x.jsx)("p",{children:"Growth by combining companies, enhancing market share, expanding capabilities"}),(0,x.jsxs)("a",{href:"#",className:"readlink",children:["Read More ",(0,x.jsx)(t.A,{})]})]})}),(0,x.jsx)("div",{className:"col-md-3",children:(0,x.jsxs)("div",{className:"service-card p-4 h-100 d-flex flex-column gap-3 relative",children:[(0,x.jsx)("h3",{children:"03"}),(0,x.jsx)("h4",{children:"Scalability processes"}),(0,x.jsx)("p",{children:"We tailor solutions to your financial goals and risk tolerance, ensuring a portfolio"}),(0,x.jsxs)("a",{href:"#",className:"readlink",children:["Read More ",(0,x.jsx)(t.A,{})]})]})}),(0,x.jsx)("div",{className:"col-md-3",children:(0,x.jsxs)("div",{className:"service-card p-4 h-100 d-flex flex-column gap-3 relative",children:[(0,x.jsx)("h3",{children:"04"}),(0,x.jsx)("h4",{children:"Value your company"}),(0,x.jsx)("p",{children:"We analyze your financial situation, project future needs, and create a plan ensure"}),(0,x.jsxs)("a",{href:"#",className:"readlink",children:["Read More ",(0,x.jsx)(t.A,{})]})]})})]})]})}),(0,x.jsx)(w,{className:"d-block",children:(0,x.jsx)("div",{className:"container-lg",children:(0,x.jsxs)("div",{className:"row gy-4",children:[(0,x.jsx)("div",{className:"col-12 mb-5",children:(0,x.jsxs)("div",{className:"teamtitle d-flex flex-column gap-2 text-center",children:[(0,x.jsx)("h2",{children:"Our Team Experts"}),(0,x.jsx)("h3",{children:"Meet the Our Experts Behind Your Financial Growth"})]})}),(0,x.jsx)("div",{className:"col-12",children:(0,x.jsxs)(A.A,{...e,children:[(0,x.jsx)("div",{className:"px-2",children:(0,x.jsxs)("div",{className:"clientbox d-flex flex-column gap-2",children:[(0,x.jsx)("div",{className:"teamperson position-relative",children:(0,x.jsx)("div",{className:"teamimg d-block",children:(0,x.jsx)("img",{src:"/assets/user/images/team1.jpg",alt:"image"})})}),(0,x.jsx)("h4",{children:"Victoria Lauren"}),(0,x.jsx)("h5",{children:"Chief Financial Officer"})]})}),(0,x.jsx)("div",{className:"px-2",children:(0,x.jsxs)("div",{className:"clientbox d-flex flex-column gap-2",children:[(0,x.jsx)("div",{className:"teamperson position-relative",children:(0,x.jsx)("div",{className:"teamimg d-block",children:(0,x.jsx)("img",{src:"/assets/user/images/team2.jpg",alt:"image"})})}),(0,x.jsx)("h4",{children:"Victoria Lauren"}),(0,x.jsx)("h5",{children:"Chief Financial Officer"})]})}),(0,x.jsx)("div",{className:"px-2",children:(0,x.jsxs)("div",{className:"clientbox d-flex flex-column gap-2",children:[(0,x.jsx)("div",{className:"teamperson position-relative",children:(0,x.jsx)("div",{className:"teamimg d-block",children:(0,x.jsx)("img",{src:"/assets/user/images/team1.jpg",alt:"image"})})}),(0,x.jsx)("h4",{children:"Victoria Lauren"}),(0,x.jsx)("h5",{children:"Chief Financial Officer"})]})}),(0,x.jsx)("div",{className:"px-2",children:(0,x.jsxs)("div",{className:"clientbox d-flex flex-column gap-2",children:[(0,x.jsx)("div",{className:"teamperson position-relative",children:(0,x.jsx)("div",{className:"teamimg d-block",children:(0,x.jsx)("img",{src:"/assets/user/images/team2.jpg",alt:"image"})})}),(0,x.jsx)("h4",{children:"Victoria Lauren"}),(0,x.jsx)("h5",{children:"Chief Financial Officer"})]})}),(0,x.jsx)("div",{className:"px-2",children:(0,x.jsxs)("div",{className:"clientbox d-flex flex-column gap-2",children:[(0,x.jsx)("div",{className:"teamperson position-relative",children:(0,x.jsx)("div",{className:"teamimg d-block",children:(0,x.jsx)("img",{src:"/assets/user/images/team1.jpg",alt:"image"})})}),(0,x.jsx)("h4",{children:"Victoria Lauren"}),(0,x.jsx)("h5",{children:"Chief Financial Officer"})]})}),(0,x.jsx)("div",{className:"px-2",children:(0,x.jsxs)("div",{className:"clientbox d-flex flex-column gap-2",children:[(0,x.jsx)("div",{className:"teamperson position-relative",children:(0,x.jsx)("div",{className:"teamimg d-block",children:(0,x.jsx)("img",{src:"/assets/user/images/team2.jpg",alt:"image"})})}),(0,x.jsx)("h4",{children:"Victoria Lauren"}),(0,x.jsx)("h5",{children:"Chief Financial Officer"})]})})]})})]})})}),(0,x.jsx)(y,{className:"d-block",children:(0,x.jsx)("div",{className:"overlaybox d-flex flex-column",children:(0,x.jsx)("div",{className:"container-lg mt-auto",children:(0,x.jsx)("div",{className:"videotext",children:(0,x.jsx)("div",{className:"d-flex flex-column gap-4",children:(0,x.jsxs)("div",{className:"d-flex flex-column flex-md-row gap-3 align-items-md-center",children:[(0,x.jsx)("div",{className:"flex-grow-1",children:(0,x.jsxs)("h2",{children:["Driving Early-Stage Growth",(0,x.jsx)("br",{}),(0,x.jsx)("b",{children:"...Through Smart Capital"})]})}),(0,x.jsxs)("div",{className:"d-flex justify-content-between flex-shrink-0 gap-5",children:[(0,x.jsxs)("button",{type:"button",title:"Video",className:"d-flex gap-2 align-items-center playbtn",onClick:()=>c(!0),children:[(0,x.jsx)("div",{className:"iconbox",children:(0,x.jsx)("img",{src:"/assets/user/images/youtube.png",alt:"image"})}),(0,x.jsx)("span",{children:"Watch Video"})]}),(0,x.jsx)(n.N_,{to:"javascript:void(0)",title:"PDF File",className:"d-flex gap-2 align-items-center playbtn text-black",onClick:()=>{const e=encodeURI("/Introductory Presentation - BluePrint Catalyst - 2025.pdf");window.open(e,"_blank")},children:(0,x.jsx)("div",{className:"iconbox",children:(0,x.jsx)("img",{src:"/assets/user/images/pdf.png",alt:"image"})})})]})]})})})})})}),(0,x.jsx)(k,{className:"d-block",children:(0,x.jsx)("div",{className:"container-lg",children:(0,x.jsxs)("div",{className:"row gy-4",children:[(0,x.jsx)("div",{className:"col-12 mb-5",children:(0,x.jsxs)("div",{className:"protfoliotitle d-flex flex-column gap-2 text-center",children:[(0,x.jsx)("h2",{children:"Our Projects"}),(0,x.jsx)("h3",{children:"Innovative Solutions for a Dynamic Market"})]})}),(0,x.jsx)("div",{className:"col-12",children:(0,x.jsxs)(A.A,{...i,children:[(0,x.jsx)("div",{className:"px-2",children:(0,x.jsxs)("div",{className:"photobox position-relative",children:[(0,x.jsx)("a",{href:"#",className:"photoimg",children:(0,x.jsx)("img",{src:"/assets/user/images/photo1.jpg",alt:"image"})}),(0,x.jsxs)("div",{className:"phototext",children:[(0,x.jsx)("h4",{children:"Project Name"}),(0,x.jsx)("h5",{children:"Category"}),(0,x.jsx)("div",{className:"readbtn",children:(0,x.jsxs)("a",{href:"#",children:["Read More ",(0,x.jsx)(t.A,{})]})})]})]})}),(0,x.jsx)("div",{className:"px-2",children:(0,x.jsxs)("div",{className:"photobox position-relative",children:[(0,x.jsx)("a",{href:"#",className:"photoimg",children:(0,x.jsx)("img",{src:"/assets/user/images/photo1.jpg",alt:"image"})}),(0,x.jsxs)("div",{className:"phototext",children:[(0,x.jsx)("h4",{children:"Project Name"}),(0,x.jsx)("h5",{children:"Category"}),(0,x.jsx)("div",{className:"readbtn",children:(0,x.jsxs)("a",{href:"#",children:["Read More ",(0,x.jsx)(t.A,{})]})})]})]})}),(0,x.jsx)("div",{className:"px-2",children:(0,x.jsxs)("div",{className:"photobox position-relative",children:[(0,x.jsx)("a",{href:"#",className:"photoimg",children:(0,x.jsx)("img",{src:"/assets/user/images/photo2.jpg",alt:"image"})}),(0,x.jsxs)("div",{className:"phototext",children:[(0,x.jsx)("h4",{children:"Project Name"}),(0,x.jsx)("h5",{children:"Category"}),(0,x.jsx)("div",{className:"readbtn",children:(0,x.jsxs)("a",{href:"#",children:["Read More ",(0,x.jsx)(t.A,{})]})})]})]})}),(0,x.jsx)("div",{className:"px-2",children:(0,x.jsxs)("div",{className:"photobox position-relative",children:[(0,x.jsx)("a",{href:"#",className:"photoimg",children:(0,x.jsx)("img",{src:"/assets/user/images/photo3.jpg",alt:"image"})}),(0,x.jsxs)("div",{className:"phototext",children:[(0,x.jsx)("h4",{children:"Project Name"}),(0,x.jsx)("h5",{children:"Category"}),(0,x.jsx)("div",{className:"readbtn",children:(0,x.jsxs)("a",{href:"#",children:["Read More ",(0,x.jsx)(t.A,{})]})})]})]})}),(0,x.jsx)("div",{className:"px-2",children:(0,x.jsxs)("div",{className:"photobox position-relative",children:[(0,x.jsx)("a",{href:"#",className:"photoimg",children:(0,x.jsx)("img",{src:"/assets/user/images/photo1.jpg",alt:"image"})}),(0,x.jsxs)("div",{className:"phototext",children:[(0,x.jsx)("h4",{children:"Project Name"}),(0,x.jsx)("h5",{children:"Category"}),(0,x.jsx)("div",{className:"readbtn",children:(0,x.jsxs)("a",{href:"#",children:["Read More ",(0,x.jsx)(t.A,{})]})})]})]})})]})})]})})}),(0,x.jsx)(z,{className:"d-block",children:(0,x.jsx)("div",{className:"container-lg",children:(0,x.jsxs)("div",{className:"row gy-4",children:[(0,x.jsx)("div",{className:"col-12 mb-5",children:(0,x.jsxs)("div",{className:"faqtitle d-flex flex-column gap-2 text-center",children:[(0,x.jsx)("h2",{children:"Frequently Asked Questions"}),(0,x.jsx)("h3",{children:"Get answers to common questions"})]})}),(0,x.jsx)("div",{className:"col-12",children:(0,x.jsx)("div",{className:"accordion",id:"accordionExample",children:L.map((e=>(0,x.jsxs)("div",{className:"accordion-item rounded-0",children:[(0,x.jsx)("h2",{className:"accordion-header",id:`heading${e.id}`,children:(0,x.jsx)("button",{className:"accordion-button "+(s===e.id?"":"collapsed"),type:"button",onClick:()=>{return i=e.id,void l((e=>e===i?null:i));var i},children:e.title})}),(0,x.jsx)("div",{id:`collapse${e.id}`,className:"accordion-collapse collapse "+(s===e.id?"show":""),children:(0,x.jsx)("div",{className:"accordion-body",children:e.content.map(((e,i)=>(0,x.jsx)("p",{children:e},i)))})})]},e.id)))})})]})})}),(0,x.jsx)(q,{className:"d-block",children:(0,x.jsx)("div",{className:"container-lg",children:(0,x.jsxs)("div",{className:"row gy-4",children:[(0,x.jsx)("div",{className:"col-12 mb-5",children:(0,x.jsxs)("div",{className:"teamtitle d-flex flex-column gap-2 text-center",children:[(0,x.jsx)("h2",{children:"Testimonials"}),(0,x.jsx)("h3",{children:"User Feedback"})]})}),(0,x.jsxs)("div",{className:"col-md-8 offset-md-2 position-relative",children:[(0,x.jsxs)(A.A,{dots:!0,infinite:!0,speed:200,slidesToShow:1,slidesToScroll:1,arrows:!1,autoplay:!0,autoplaySpeed:5e3,children:[(0,x.jsx)("div",{className:"d-block clientbox",children:(0,x.jsxs)("div",{className:"d-flex flex-column gap-3",children:[(0,x.jsx)("p",{children:"Ad aliqua anim quis non pariatur enim quis non enim exercitation fugiat. Duis nisi fugiat laboris dolore et consequat dolor adipisicing ipsum eu. In sunt ullamco consequat culpa dolor id nostrud adipisicing et qui exercitation."}),(0,x.jsxs)("div",{className:"d-flex gap-2 align-items-center clientinfo",children:[(0,x.jsx)("div",{className:"flex-shrink-0",children:(0,x.jsx)("div",{className:"clientimg",children:(0,x.jsx)("img",{src:"/assets/user/images/person.jpg",alt:"image"})})}),(0,x.jsxs)("div",{className:"flex-grow-1",children:[(0,x.jsx)("h5",{children:"John Doe"}),(0,x.jsx)("h6",{children:"CEO, Company Name"})]})]})]})}),(0,x.jsx)("div",{className:"d-block clientbox ",children:(0,x.jsxs)("div",{className:"d-flex flex-column gap-3",children:[(0,x.jsx)("p",{children:"Ad aliqua anim quis non pariatur enim quis non enim exercitation fugiat. Duis nisi fugiat laboris dolore et consequat dolor adipisicing ipsum eu. In sunt ullamco consequat culpa dolor id nostrud adipisicing et qui exercitation."}),(0,x.jsxs)("div",{className:"d-flex gap-2 align-items-center clientinfo",children:[(0,x.jsx)("div",{className:"flex-shrink-0",children:(0,x.jsx)("div",{className:"clientimg",children:(0,x.jsx)("img",{src:"/assets/user/images/person.jpg",alt:"image"})})}),(0,x.jsxs)("div",{className:"flex-grow-1",children:[(0,x.jsx)("h5",{children:"John Doe"}),(0,x.jsx)("h6",{children:"CEO, Company Name"})]})]})]})})]}),(0,x.jsx)(o.EpZ,{size:100,className:"quotesicon"})]})]})})}),(0,x.jsx)(C,{className:"d-block",children:(0,x.jsx)("div",{className:"container-lg",children:(0,x.jsxs)("div",{className:"row gy-4",children:[(0,x.jsx)("div",{className:"col-12 mb-5",children:(0,x.jsxs)("div",{className:"teamtitle d-flex flex-column gap-2 text-center",children:[(0,x.jsx)("h2",{children:"Contact Us"}),(0,x.jsx)("h3",{children:"Get in touch with us"})]})}),(0,x.jsx)("div",{className:"col-md-6",children:(0,x.jsxs)("div",{className:"d-flex flex-column gap-4",children:[(0,x.jsx)("h3",{className:"contactinfo",children:"Contact Information"}),(0,x.jsxs)("div",{className:"d-flex flex-column gap-2 contacttext",children:[(0,x.jsx)("h4",{children:"call us now"}),(0,x.jsx)("h5",{children:(0,x.jsx)("a",{href:"tel:+1234567890",children:"+123 456 7890"})})]}),(0,x.jsxs)("div",{className:"d-flex flex-column gap-2 contacttext",children:[(0,x.jsx)("h4",{children:"Email Us"}),(0,x.jsx)("h5",{children:(0,x.jsx)("a",{href:"mailto:info@blueprintcatalyst.com",children:"blueprintcatalyst.com"})})]}),(0,x.jsxs)("div",{className:"d-flex flex-column gap-2 contacttext",children:[(0,x.jsx)("h4",{children:"visit us"}),(0,x.jsx)("h5",{children:"S.G High Way, Ahmedabad - 454545"})]})]})}),(0,x.jsx)("div",{className:"col-md-6",children:(0,x.jsxs)("div",{className:"d-flex flex-column gap-4 contactbox",children:[(0,x.jsx)("h4",{children:"Please fill out the form"}),(0,x.jsx)("form",{action:"",children:(0,x.jsxs)("div",{className:"row gy-4",children:[(0,x.jsx)("div",{className:"col-md-6",children:(0,x.jsx)("input",{type:"text",placeholder:"First Name"})}),(0,x.jsx)("div",{className:"col-md-6",children:(0,x.jsx)("input",{type:"text",placeholder:"Last Name"})}),(0,x.jsx)("div",{className:"col-md-6",children:(0,x.jsx)("input",{type:"text",placeholder:"Phone Number"})}),(0,x.jsx)("div",{className:"col-md-6",children:(0,x.jsx)("input",{type:"email",placeholder:"Email"})}),(0,x.jsx)("div",{className:"col-12",children:(0,x.jsx)("textarea",{name:"",id:"",cols:"30",rows:"5",placeholder:"Write a message"})}),(0,x.jsx)("div",{className:"col-12",children:(0,x.jsx)("button",{type:"submit",className:"submitbtn",children:"Send Message"})})]})})]})})]})})}),(0,x.jsx)(S,{className:"d-block",children:(0,x.jsx)("div",{className:"container-lg",children:(0,x.jsxs)("div",{className:"row gy-5",children:[(0,x.jsx)("div",{className:"col-12",children:(0,x.jsxs)("div",{className:"brandtitle d-flex flex-column gap-2 text-center",children:[(0,x.jsx)("h2",{children:"Our Sponsors & Partners"}),(0,x.jsx)("h3",{children:"Trusted by the World's Most Innovative Companies"})]})}),(0,x.jsx)("div",{className:"col-12",children:(0,x.jsxs)(A.A,{dots:!0,infinite:!0,slidesToShow:6,slidesToScroll:1,arrows:!1,autoplay:!0,dots:!1,speed:2e3,autoplaySpeed:0,cssEase:"ease-in-out",pauseOnHover:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:3,speed:1500}},{breakpoint:768,settings:{slidesToShow:2,speed:1200}},{breakpoint:576,settings:{slidesToShow:2,speed:1e3}}],children:[(0,x.jsx)("div",{className:"px-2",children:(0,x.jsx)("div",{className:"logoimg",children:(0,x.jsx)("img",{src:"/logos/logoblue.png",alt:"image"})})}),(0,x.jsx)("div",{className:"px-2",children:(0,x.jsx)("div",{className:"logoimg",children:(0,x.jsx)("img",{src:"/logos/logoblue.png",alt:"image"})})}),(0,x.jsx)("div",{className:"px-2",children:(0,x.jsx)("div",{className:"logoimg",children:(0,x.jsx)("img",{src:"/logos/logoblue.png",alt:"image"})})}),(0,x.jsx)("div",{className:"px-2",children:(0,x.jsx)("div",{className:"logoimg",children:(0,x.jsx)("img",{src:"/logos/logoblue.png",alt:"image"})})}),(0,x.jsx)("div",{className:"px-2",children:(0,x.jsx)("div",{className:"logoimg",children:(0,x.jsx)("img",{src:"/logos/logoblue.png",alt:"image"})})}),(0,x.jsx)("div",{className:"px-2",children:(0,x.jsx)("div",{className:"logoimg",children:(0,x.jsx)("img",{src:"/logos/logoblue.png",alt:"image"})})}),(0,x.jsx)("div",{className:"px-2",children:(0,x.jsx)("div",{className:"logoimg",children:(0,x.jsx)("img",{src:"/logos/logoblue.png",alt:"image"})})}),(0,x.jsx)("div",{className:"px-2",children:(0,x.jsx)("div",{className:"logoimg",children:(0,x.jsx)("img",{src:"/logos/logoblue.png",alt:"image"})})}),(0,x.jsx)("div",{className:"px-2",children:(0,x.jsx)("div",{className:"logoimg",children:(0,x.jsx)("img",{src:"/logos/logoblue.png",alt:"image"})})})]})})]})})}),(0,x.jsx)(O,{children:(0,x.jsx)(E,{isOpen:r,onClose:()=>c(!1),videoId:"YOUR_YOUTUBE_VIDEO_ID"})}),(0,x.jsx)(j,{})]})}}}]);
//# sourceMappingURL=754.da0da4d2.chunk.js.map