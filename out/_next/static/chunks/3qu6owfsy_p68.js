(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,74648,t=>{"use strict";var i=t.i(43476);t.s(["default",0,function({cases:t,title:r="Результаты нашей работы",subtitle:e,showAllLink:o="/praktika",showAllText:a="Смотреть все дела",showDemoWarning:n=!1,resultLabel:l="Результат"}){let p=t.map(t=>({...t,category:t.category||(t.duration?`Срок: ${t.duration}`:"Практика"),problem:t.problem||t.description||"",action:t.action||(t.points?t.points.join(". "):""),result:t.result||"Задачи успешно выполнены по утвержденному регламенту"}));return(0,i.jsxs)("section",{className:"section bg-white",style:{padding:"clamp(48px, 6vw, 80px) 0"},children:[(0,i.jsxs)("div",{className:"container",children:[(0,i.jsxs)("div",{style:{marginBottom:"40px"},children:[(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"16px",marginBottom:"16px"},children:[(0,i.jsx)("div",{style:{width:"40px",height:"1px",backgroundColor:"var(--color-primary)"}}),(0,i.jsx)("span",{style:{textTransform:"uppercase",letterSpacing:"0.15em",fontSize:"12px",color:"var(--color-primary)"},children:"Практика"})]}),(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"20px"},children:[(0,i.jsxs)("div",{style:{maxWidth:"820px",flex:"1 1 auto"},children:[(0,i.jsx)("h2",{style:{margin:0,fontSize:"clamp(28px, 4vw, 42px)",fontFamily:"var(--font-serif)",color:"var(--color-deep-blue)",lineHeight:1.25},children:r}),e&&(0,i.jsx)("p",{style:{margin:"8px 0 0",color:"var(--color-text-secondary)",fontSize:"15px",lineHeight:1.5},children:e})]}),o&&(0,i.jsx)("a",{href:o,className:"btn btn-outline",style:{padding:"12px 24px",height:"fit-content",whiteSpace:"nowrap",flexShrink:0,alignSelf:"flex-start"},children:a})]})]}),(0,i.jsx)("div",{className:"cases-grid",children:p.map((t,r)=>(0,i.jsxs)("div",{className:"case-card group",style:{padding:"36px 30px 30px 30px",border:"1px solid var(--color-border)",borderRadius:"0",display:"flex",flexDirection:"column",background:"var(--color-white)",boxShadow:"0 4px 10px rgba(0,0,0,0.12)",position:"relative",overflow:"hidden",height:"100%"},children:[(0,i.jsx)("div",{style:{position:"absolute",top:0,left:0,width:"4px",height:"0%",background:"var(--color-gold)",transition:"height 0.4s ease"},className:"case-accent-line"}),(0,i.jsxs)("div",{style:{paddingBottom:"20px",marginBottom:"20px",paddingTop:"0"},children:[(0,i.jsx)("span",{style:{display:"block",fontSize:"11px",textTransform:"uppercase",letterSpacing:"0.1em",color:"#D4AF37",marginBottom:"12px",fontWeight:600,lineHeight:1.45},children:t.category}),(0,i.jsx)("h3",{style:{margin:0,color:"var(--color-deep-blue)",fontSize:"19px",fontFamily:"var(--font-serif)",lineHeight:1.4,wordBreak:"break-word",overflowWrap:"break-word"},children:t.title})]}),(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"18px",flexGrow:1},children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{style:{display:"inline-block",background:"rgba(23, 50, 77, 0.08)",color:"var(--color-deep-blue)",padding:"3px 10px",fontSize:"11px",fontWeight:700,letterSpacing:"0.06em",borderRadius:"3px",marginBottom:"8px"},children:"ПРОБЛЕМА"}),(0,i.jsx)("p",{style:{fontSize:"14px",margin:0,lineHeight:1.6,color:"var(--color-text-main)"},children:t.problem})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{style:{display:"inline-block",background:"rgba(193, 160, 102, 0.16)",color:"#8C6F34",padding:"3px 10px",fontSize:"11px",fontWeight:700,letterSpacing:"0.06em",borderRadius:"3px",marginBottom:"8px"},children:"ЧТО СДЕЛАЛИ"}),(0,i.jsx)("p",{style:{fontSize:"14px",margin:0,lineHeight:1.6,color:"var(--color-text-main)"},children:t.action})]})]}),(0,i.jsxs)("div",{style:{marginTop:"24px",background:"rgba(193, 160, 102, 0.05)",padding:"18px",borderRadius:"0",border:"1px solid rgba(193, 160, 102, 0.2)",borderLeft:"4px solid var(--color-gold)"},children:[(0,i.jsx)("h4",{style:{fontSize:"12px",textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--color-primary)",marginBottom:"6px",fontWeight:600},children:l}),(0,i.jsx)("p",{style:{fontSize:"14.5px",margin:0,fontWeight:500,color:"var(--color-deep-blue)",lineHeight:1.5},children:t.result})]})]},r))})]}),(0,i.jsx)("style",{dangerouslySetInnerHTML:{__html:`
        .cases-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 1024px) and (min-width: 768px) {
          .cases-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
        }
        @media (max-width: 767px) {
          .cases-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .case-card {
            padding: 28px 20px 24px 20px !important;
          }
        }
        .case-card h3 span {
          word-break: break-word !important;
          overflow-wrap: break-word !important;
        }
        .case-card {
          transition: all 0.4s ease;
        }
        .case-card:hover {
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
          border-color: transparent;
          transform: translateY(-4px);
        }
        .case-card:hover .case-accent-line {
          height: 100%;
        }
      `}})]})}])},35812,t=>{"use strict";var i=t.i(43476);function r({items:t,marginTop:e}){return t&&0!==t.length?(0,i.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"14px",marginTop:e||"20px",marginBottom:"24px",width:"100%",maxWidth:"640px"},children:t.map((t,r)=>(0,i.jsx)("div",{style:{paddingLeft:"16px",borderLeft:"3px solid var(--color-gold)",fontSize:"15px",color:"var(--color-deep-blue)",lineHeight:1.45,fontWeight:500,whiteSpace:"pre-line"},children:"string"==typeof t?t:t.text},r))}):null}t.s(["default",0,function({breadcrumbs:t,superTitle:e,badge:o,title:a,subtitle:n,primaryCtaText:l,primaryButtonText:p,primaryCtaSubtext:s,primaryCtaLink:d,primaryButtonHref:x,primaryCtaAnalytics:m,secondaryCtaText:c,secondaryButtonText:h,secondaryCtaLink:g,secondaryButtonHref:y,urgentHint:f,trustItems:b=[],trustPosition:v="above-cta",imageUrl:u,imageName:w,imageSubtitle:j,trustMarginTop:S,imageMarginTop:F,imageObjectPosition:k,rightContent:z,afterTrustContent:B}){let T=c||h,W=g||y,N=!!(u||z);return(0,i.jsxs)("section",{className:"military-hero-section",style:{position:"relative",minHeight:"85vh",display:"flex",alignItems:"center",paddingTop:"clamp(120px, 9vw, 160px)",paddingBottom:"80px",background:"linear-gradient(145deg, var(--color-cream) 0%, rgba(247, 244, 237, 0.4) 100%)",overflow:"hidden"},children:[(0,i.jsx)("div",{style:{position:"absolute",top:"-10%",right:"-5%",width:"600px",height:"600px",background:"radial-gradient(circle, rgba(234, 241, 246, 0.8) 0%, transparent 70%)",borderRadius:"50%",zIndex:0}}),(0,i.jsxs)("div",{className:"container",style:{position:"relative",zIndex:1,paddingTop:"0px"},children:[t&&(0,i.jsx)("div",{style:{fontSize:"13px",color:"var(--color-text-secondary)",marginBottom:"32px"},children:t}),(0,i.jsxs)("div",{className:N?"grid grid-2 land-hero-grid":"",style:{display:N?"grid":"flex",flexDirection:N?"row":"column",gap:"40px",alignItems:"flex-start"},children:[(0,i.jsxs)("div",{style:{flex:"1 1 0%",paddingTop:"0px"},children:[(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"16px",marginBottom:"12px",flexWrap:"wrap"},children:[(0,i.jsx)("div",{style:{width:"40px",height:"2px",backgroundColor:"#9B7E55",flexShrink:0}}),(0,i.jsx)("span",{className:"military-hero-supertitle",style:{textTransform:"uppercase",letterSpacing:"0.08em",fontSize:"clamp(11px, 2vw, 14px)",fontWeight:600,color:"var(--color-gold-text, #80633F)",overflowWrap:"anywhere"},children:e||o})]}),(0,i.jsx)("h1",{className:"military-hero-h1",style:{fontSize:"clamp(26px, 3.8vw, 50px)",color:"var(--color-deep-blue)",fontFamily:"var(--font-serif)",margin:"0 0 16px 0",lineHeight:1.15},children:a}),(0,i.jsx)("p",{className:"military-hero-subtitle",style:{fontSize:"16px",color:"var(--color-deep-blue)",opacity:.9,fontWeight:500,marginBottom:"16px",maxWidth:"750px",lineHeight:1.55},children:n}),"above-cta"===v&&b&&b.length>0&&(0,i.jsx)(r,{items:b,marginTop:S||"16px"}),B&&(0,i.jsx)("div",{style:{marginTop:"16px",marginBottom:"8px"},children:B}),(0,i.jsxs)("div",{className:"military-hero-cta",style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:"10px",marginTop:"20px",marginBottom:f?"16px":"24px"},children:[(0,i.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"16px"},children:[(0,i.jsx)("a",{href:d||x||"#form",className:"btn btn-primary military-hero-primary-btn","data-analytics":m||"military_hero_consultation_click",children:l||p||"Получить консультацию"}),T&&W&&(0,i.jsx)("a",{href:W,className:"btn btn-outline",style:{padding:"15px 36px",fontSize:"15px"},children:T})]}),s&&(0,i.jsx)("div",{style:{fontSize:"14px",color:"var(--color-text-secondary)",marginTop:"2px"},children:s})]}),f&&(0,i.jsxs)("div",{style:{background:"rgba(200, 169, 126, 0.1)",borderLeft:"4px solid var(--color-gold)",padding:"14px 20px",marginBottom:"20px",fontSize:"14px",color:"var(--color-deep-blue)",lineHeight:1.5},children:[(0,i.jsx)("strong",{style:{display:"block",marginBottom:"4px"},children:"Важно:"}),f]}),"below-cta"===v&&b&&b.length>0&&(0,i.jsx)(r,{items:b,marginTop:S||"16px"})]}),N&&(0,i.jsx)("div",{className:"military-hero-right",style:{width:"100%",maxWidth:"440px",margin:"0 auto",flexShrink:0,display:"flex",flexDirection:"column",paddingTop:F||0,marginTop:0},children:z||(0,i.jsxs)("div",{className:"hero-photo-hover",style:{width:"100%",borderRadius:"0",overflow:"hidden",position:"relative",boxShadow:"0 4px 14px rgba(16, 39, 59, 0.12)",zIndex:1,display:"block",background:"transparent"},children:[u&&(0,i.jsx)("img",{src:u,alt:w||a?.toString()||"Специалист",width:440,height:460,fetchPriority:"high",decoding:"async",style:{width:"100%",height:"460px",objectFit:"cover",objectPosition:k||"center 20%",display:"block",filter:"brightness(1.05)",aspectRatio:"440/460"},className:"hero-photo-img"}),(w||j)&&(0,i.jsxs)("div",{style:{padding:"16px 20px",background:"rgba(255, 255, 255, 0.75)",backdropFilter:"blur(10px)",borderTop:"3px solid var(--color-gold)",borderLeft:"1px solid rgba(255, 255, 255, 0.9)",borderRight:"1px solid rgba(255, 255, 255, 0.9)",borderBottom:"1px solid rgba(255, 255, 255, 0.9)",boxShadow:"0 4px 14px rgba(16, 39, 59, 0.08)"},children:[w&&(0,i.jsx)("div",{style:{fontSize:"16px",fontWeight:700,color:"var(--color-deep-blue)",fontFamily:"var(--font-serif)",marginBottom:"2px",lineHeight:1.3},children:"Дмитрий Сергеевич Конопкин"===w||"Конопкин Дмитрий Сергеевич"===w?(0,i.jsxs)(i.Fragment,{children:["Конопкин ",(0,i.jsx)("br",{}),"Дмитрий Сергеевич"]}):"Марина Валерьевна Смольянинова"===w||"Смольянинова Марина Валерьевна"===w?(0,i.jsxs)(i.Fragment,{children:["Смольянинова ",(0,i.jsx)("br",{}),"Марина Валерьевна"]}):"Владимир Викторович Начешников"===w||"Начешников Владимир Викторович"===w?(0,i.jsxs)(i.Fragment,{children:["Начешников ",(0,i.jsx)("br",{}),"Владимир Викторович"]}):w}),j&&(0,i.jsx)("div",{style:{fontSize:"13px",color:"var(--color-text-secondary)",fontWeight:500,lineHeight:1.35},children:"string"==typeof j&&j.includes("куратор")?(0,i.jsxs)(i.Fragment,{children:[j.split("куратор")[0].trim().replace(/,$/,""),",",(0,i.jsx)("br",{}),"куратор",j.split("куратор")[1]]}):j})]})]})})]}),(0,i.jsx)("style",{dangerouslySetInnerHTML:{__html:`
          .military-hero-primary-btn {
            padding: 15px 36px !important;
            font-size: 15px !important;
            color: #FFFFFF !important;
            background-color: #10273B !important;
            border: 1px solid #9B7E55 !important;
            box-shadow: 0 4px 14px rgba(16, 39, 59, 0.25) !important;
            transition: all 0.3s ease !important;
            border-radius: var(--radius-md) !important;
            text-decoration: none !important;
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            cursor: pointer !important;
          }
          .military-hero-primary-btn:hover {
            background-color: #17324D !important;
            border: 1px solid #FFFFFF !important;
            border-color: #FFFFFF !important;
            color: #FFFFFF !important;
            transform: translateY(-2px) !important;
            box-shadow: 0 8px 24px rgba(16, 39, 59, 0.35) !important;
          }

          @media (max-width: 1440px) {
            .military-hero-section {
              padding-top: 130px !important;
              padding-bottom: 50px !important;
              min-height: auto !important;
            }
            .military-hero-h1 {
              font-size: clamp(24px, 3.4vw, 44px) !important;
              margin-bottom: 12px !important;
            }
            .military-hero-subtitle {
              margin-bottom: 12px !important;
              font-size: 15px !important;
              line-height: 1.5 !important;
            }
            .military-hero-cta {
              margin-top: 12px !important;
              margin-bottom: 16px !important;
            }
          }
          @media (max-width: 1200px) {
            .land-hero-grid {
              grid-template-columns: minmax(0, 1fr) 360px !important;
              gap: 28px !important;
            }
            .military-hero-h1 {
              font-size: clamp(22px, 3.1vw, 38px) !important;
            }
          }
          @media (max-width: 1024px) {
            .land-hero-grid {
              grid-template-columns: minmax(0, 1fr) 320px !important;
              gap: 20px !important;
            }
            .military-hero-h1 {
              font-size: clamp(22px, 2.8vw, 32px) !important;
            }
          }
          @media (max-width: 900px) {
            .land-hero-grid {
              grid-template-columns: 1fr !important;
            }
          }
          @media (max-width: 768px) {
            .military-hero-section {
              padding-top: 100px !important;
              padding-bottom: 40px !important;
            }
            .military-hero-cta {
              width: 100% !important;
            }
            .military-hero-cta .btn {
              width: 100% !important;
              text-align: center !important;
            }
          }
          @media (max-width: 480px) {
            .military-hero-h1, .hero-title-span-mobile {
              white-space: normal !important;
              overflow-wrap: anywhere !important;
              word-break: normal !important;
            }
            .military-hero-section .container {
              width: 100% !important;
              max-width: 100% !important;
              min-width: 0 !important;
              padding-left: 16px !important;
              padding-right: 16px !important;
            }
            .military-hero-supertitle {
              white-space: normal !important;
            }
            .military-hero-subtitle {
              width: 100% !important;
              max-width: 100% !important;
              min-width: 0 !important;
              overflow-wrap: anywhere !important;
            }
          }
        `}})]})]})}],35812)}]);