(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,35812,t=>{"use strict";var i=t.i(43476);function e({items:t,marginTop:r}){return t&&0!==t.length?(0,i.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"14px",marginTop:r||"20px",marginBottom:"24px",width:"100%",maxWidth:"640px"},children:t.map((t,e)=>(0,i.jsx)("div",{style:{paddingLeft:"16px",borderLeft:"3px solid var(--color-gold)",fontSize:"15px",color:"var(--color-deep-blue)",lineHeight:1.45,fontWeight:500,whiteSpace:"pre-line"},children:"string"==typeof t?t:t.text},e))}):null}t.s(["default",0,function({breadcrumbs:t,superTitle:r,badge:o,title:a,subtitle:n,primaryCtaText:l,primaryButtonText:p,primaryCtaSubtext:s,primaryCtaLink:d,primaryButtonHref:c,primaryCtaAnalytics:x,secondaryCtaText:m,secondaryButtonText:h,secondaryCtaLink:g,secondaryButtonHref:y,urgentHint:f,trustItems:b=[],trustPosition:v="above-cta",imageUrl:j,imageName:u,imageSubtitle:w,trustMarginTop:F,imageMarginTop:S,ctaMarginTop:z,imageObjectPosition:k,rightContent:B,afterTrustContent:T}){let N=m||h,W=g||y,I=!!(j||B);return(0,i.jsxs)("section",{className:"military-hero-section",style:{position:"relative",minHeight:"85vh",display:"flex",alignItems:"center",paddingTop:"clamp(120px, 9vw, 160px)",paddingBottom:"80px",background:"linear-gradient(145deg, var(--color-cream) 0%, rgba(247, 244, 237, 0.4) 100%)",overflow:"hidden"},children:[(0,i.jsx)("div",{style:{position:"absolute",top:"-10%",right:"-5%",width:"600px",height:"600px",background:"radial-gradient(circle, rgba(234, 241, 246, 0.8) 0%, transparent 70%)",borderRadius:"50%",zIndex:0}}),(0,i.jsxs)("div",{className:"container",style:{position:"relative",zIndex:1,paddingTop:"0px"},children:[t&&(0,i.jsx)("div",{style:{fontSize:"13px",color:"var(--color-text-secondary)",marginBottom:"32px"},children:t}),(0,i.jsxs)("div",{className:I?"grid grid-2 land-hero-grid":"",style:{display:I?"grid":"flex",flexDirection:I?"row":"column",gap:"40px",alignItems:"flex-start"},children:[(0,i.jsxs)("div",{style:{flex:"1 1 0%",paddingTop:"0px"},children:[(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"16px",marginBottom:"12px",flexWrap:"wrap"},children:[(0,i.jsx)("div",{style:{width:"40px",height:"2px",backgroundColor:"#9B7E55",flexShrink:0}}),(0,i.jsx)("span",{className:"military-hero-supertitle",style:{textTransform:"uppercase",letterSpacing:"0.08em",fontSize:"clamp(11px, 2vw, 14px)",fontWeight:600,color:"var(--color-gold-text, #80633F)",overflowWrap:"anywhere"},children:r||o})]}),(0,i.jsx)("h1",{className:"military-hero-h1",style:{fontSize:"clamp(26px, 3.8vw, 50px)",color:"var(--color-deep-blue)",fontFamily:"var(--font-serif)",margin:"0 0 16px 0",lineHeight:1.15},children:a}),(0,i.jsx)("p",{className:"military-hero-subtitle",style:{fontSize:"16px",color:"var(--color-deep-blue)",opacity:.9,fontWeight:500,marginBottom:"16px",maxWidth:"750px",lineHeight:1.55},children:n}),"above-cta"===v&&b&&b.length>0&&(0,i.jsx)(e,{items:b,marginTop:F||"16px"}),T&&(0,i.jsx)("div",{style:{marginTop:"16px",marginBottom:"8px"},children:T}),(0,i.jsxs)("div",{className:"military-hero-cta",style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:"14px",marginTop:z||(b&&b.length>0?"20px":"32px"),marginBottom:f?"16px":"24px"},children:[(0,i.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"16px"},children:[(0,i.jsx)("a",{href:d||c||"#form",className:"btn btn-primary military-hero-primary-btn","data-analytics":x||"military_hero_consultation_click",children:l||p||"Получить консультацию"}),N&&W&&(0,i.jsx)("a",{href:W,className:"btn btn-outline",style:{padding:"15px 36px",fontSize:"15px"},children:N})]}),s&&(0,i.jsx)("div",{style:{fontSize:"14px",color:"var(--color-text-secondary)",marginTop:"4px",lineHeight:1.5},children:s})]}),f&&(0,i.jsxs)("div",{style:{background:"rgba(200, 169, 126, 0.1)",borderLeft:"4px solid var(--color-gold)",padding:"14px 20px",marginBottom:"20px",fontSize:"14px",color:"var(--color-deep-blue)",lineHeight:1.5},children:[(0,i.jsx)("strong",{style:{display:"block",marginBottom:"4px"},children:"Важно:"}),f]}),"below-cta"===v&&b&&b.length>0&&(0,i.jsx)(e,{items:b,marginTop:F||"16px"})]}),I&&(0,i.jsx)("div",{className:"military-hero-right",style:{width:"100%",maxWidth:"440px",margin:"0 auto",flexShrink:0,display:"flex",flexDirection:"column",paddingTop:S||0,marginTop:0},children:B||(0,i.jsxs)("div",{className:"hero-photo-hover",style:{width:"100%",borderRadius:"0",overflow:"hidden",position:"relative",boxShadow:"0 4px 14px rgba(16, 39, 59, 0.12)",zIndex:1,display:"block",background:"transparent"},children:[j&&(0,i.jsx)("img",{src:j,alt:u||a?.toString()||"Специалист",width:440,height:460,fetchPriority:"high",decoding:"async",style:{width:"100%",height:"460px",objectFit:"cover",objectPosition:k||"center 20%",display:"block",filter:"brightness(1.05)",aspectRatio:"440/460"},className:"hero-photo-img"}),(u||w)&&(0,i.jsxs)("div",{style:{padding:"16px 20px",background:"rgba(255, 255, 255, 0.75)",backdropFilter:"blur(10px)",borderTop:"3px solid var(--color-gold)",borderLeft:"1px solid rgba(255, 255, 255, 0.9)",borderRight:"1px solid rgba(255, 255, 255, 0.9)",borderBottom:"1px solid rgba(255, 255, 255, 0.9)",boxShadow:"0 4px 14px rgba(16, 39, 59, 0.08)"},children:[u&&(0,i.jsx)("div",{style:{fontSize:"16px",fontWeight:700,color:"var(--color-deep-blue)",fontFamily:"var(--font-serif)",marginBottom:"2px",lineHeight:1.3},children:"Дмитрий Сергеевич Конопкин"===u||"Конопкин Дмитрий Сергеевич"===u?(0,i.jsxs)(i.Fragment,{children:["Конопкин ",(0,i.jsx)("br",{}),"Дмитрий Сергеевич"]}):"Марина Валерьевна Смольянинова"===u||"Смольянинова Марина Валерьевна"===u?(0,i.jsxs)(i.Fragment,{children:["Смольянинова ",(0,i.jsx)("br",{}),"Марина Валерьевна"]}):"Владимир Викторович Начешников"===u||"Начешников Владимир Викторович"===u?(0,i.jsxs)(i.Fragment,{children:["Начешников ",(0,i.jsx)("br",{}),"Владимир Викторович"]}):u}),w&&(0,i.jsx)("div",{style:{fontSize:"13px",color:"var(--color-text-secondary)",fontWeight:500,lineHeight:1.35},children:"string"==typeof w&&w.includes("•")?w:"string"==typeof w&&w.includes("куратор")?(0,i.jsxs)(i.Fragment,{children:[w.split("куратор")[0].trim().replace(/,$/,""),",",(0,i.jsx)("br",{}),"куратор",w.split("куратор")[1]]}):w})]})]})})]}),(0,i.jsx)("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})]})}],35812)},17093,t=>{"use strict";var i=t.i(43476);t.s(["default",0,function({title:t="Специалист",name:e,position:r,description:o,photoPlaceholder:a="[Фото специалиста]",imageUrl:n,imagePosition:l,buttonText:p="Задать вопрос специалисту",buttonHref:s="#consultation",profileHref:d,profileText:c}){return(0,i.jsxs)("section",{className:"section bg-white",id:"specialist",children:[(0,i.jsxs)("div",{className:"container",children:[t&&(0,i.jsx)("h2",{className:"section-title text-center",style:{marginBottom:"40px"},children:"string"==typeof t&&t.includes("Куратор направления — Владимир Викторович Начешников")?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{style:{display:"inline-block"},children:"Куратор направления — Владимир"})," ",(0,i.jsx)("br",{}),(0,i.jsx)("span",{style:{display:"inline-block"},children:"Викторович Начешников"})]}):t}),(0,i.jsxs)("div",{className:"specialist-grid",style:{background:"var(--color-cream)",padding:"40px",borderRadius:"0",borderTop:"4px solid var(--color-primary)"},children:[(0,i.jsx)("div",{style:{width:"100%",maxWidth:"500px",margin:"0 auto",flexShrink:0},children:(0,i.jsx)("div",{style:{width:"100%",aspectRatio:"3/4",backgroundColor:"var(--color-white)",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--color-text-secondary)",fontSize:"14px",border:"1px solid var(--color-border)",position:"relative"},children:n?d?(0,i.jsx)("a",{href:d,style:{display:"block",width:"100%",height:"100%"},children:(0,i.jsx)("img",{src:n,alt:"string"==typeof e?e:"Владимир Викторович Начешников",width:500,height:667,loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:l||"center 15%",display:"block",aspectRatio:"3/4"}})}):(0,i.jsx)("img",{src:n,alt:"string"==typeof e?e:"Владимир Викторович Начешников",width:500,height:667,loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:l||"center 15%",display:"block",aspectRatio:"3/4"}}):(0,i.jsx)("span",{style:{padding:"20px",textAlign:"center",fontStyle:"italic"},children:a})})}),(0,i.jsxs)("div",{style:{flex:"1 1 0%"},children:[(0,i.jsx)("h3",{style:{fontSize:"32px",color:"var(--color-deep-blue)",marginBottom:"12px",fontFamily:"var(--font-serif)"},children:d?(0,i.jsx)("a",{href:d,style:{color:"inherit",textDecoration:"none"},children:e}):e}),(0,i.jsx)("div",{style:{color:"var(--color-primary)",fontWeight:600,fontSize:"16px",marginBottom:"32px",textTransform:"uppercase",letterSpacing:"0.05em",whiteSpace:"pre-line"},children:r}),(0,i.jsx)("div",{style:{marginBottom:d?"20px":"32px"},children:o.map((t,e)=>(0,i.jsx)("div",{style:{fontSize:"16px",color:"var(--color-deep-blue)",opacity:.9,fontWeight:500,lineHeight:1.6,marginBottom:e===o.length-1?0:"16px"},children:t},e))}),d&&(0,i.jsx)("div",{style:{marginBottom:"28px"},children:(0,i.jsx)("a",{href:d,style:{fontSize:"15px",color:"var(--color-primary)",fontWeight:600,textDecoration:"underline",textUnderlineOffset:"4px",display:"inline-flex",alignItems:"center",gap:"6px"},children:c||"Подробнее о специалисте →"})}),(0,i.jsx)("a",{href:s,className:"btn btn-primary",children:p})]})]})]}),(0,i.jsx)("style",{dangerouslySetInnerHTML:{__html:`
        .specialist-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: center;
        }
        @media (min-width: 992px) {
          .specialist-grid {
            grid-template-columns: 400px 1fr;
            gap: 60px;
          }
        }
      `}})]})}])}]);