(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,84618,t=>{"use strict";var e=t.i(90748);t.s(["default",0,function({cases:t,title:r="Результаты нашей работы",showAllLink:i="/praktika",showAllText:o="Смотреть все дела",showDemoWarning:a=!1,resultLabel:n="Результат"}){return(0,e.jsxs)("section",{className:"section bg-white",children:[(0,e.jsxs)("div",{className:"container",children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:"50px",flexWrap:"wrap",gap:"20px",width:"100%"},children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"16px",marginBottom:"20px"},children:[(0,e.jsx)("div",{style:{width:"40px",height:"1px",backgroundColor:"var(--color-primary)"}}),(0,e.jsx)("span",{style:{textTransform:"uppercase",letterSpacing:"0.15em",fontSize:"12px",color:"var(--color-primary)"},children:"Практика"})]}),(0,e.jsx)("h2",{style:{margin:0,fontSize:"clamp(32px, 4vw, 42px)",fontFamily:"var(--font-serif)",color:"var(--color-deep-blue)"},children:r})]}),i&&(0,e.jsx)("a",{href:i,className:"btn btn-outline",style:{padding:"12px 24px",height:"fit-content"},children:o})]}),(0,e.jsx)("div",{className:"grid grid-3",style:{gap:"30px"},children:t.map((t,r)=>(0,e.jsxs)("div",{className:"case-card group",style:{padding:"40px 36px 36px 36px",border:"1px solid var(--color-border)",borderRadius:"0",display:"flex",flexDirection:"column",background:"var(--color-white)",boxShadow:"0 4px 10px rgba(0,0,0,0.12)",position:"relative",overflow:"hidden",height:"100%"},children:[(0,e.jsx)("div",{style:{position:"absolute",top:0,left:0,width:"4px",height:"0%",background:"var(--color-gold)",transition:"height 0.4s ease"},className:"case-accent-line"}),(0,e.jsxs)("div",{style:{paddingBottom:"20px",marginBottom:"24px",paddingTop:"0"},children:[(0,e.jsx)("span",{style:{display:"block",fontSize:"11px",textTransform:"uppercase",letterSpacing:"0.1em",color:"#D4AF37",marginBottom:"12px",fontWeight:600,lineHeight:1.45},children:t.category}),(0,e.jsx)("h3",{style:{margin:0,color:"var(--color-deep-blue)",fontSize:"20px",fontFamily:"var(--font-serif)",lineHeight:1.4,wordBreak:"break-word",overflowWrap:"break-word"},children:t.title})]}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px",flexGrow:1},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{display:"inline-block",background:"rgba(23, 50, 77, 0.08)",color:"var(--color-deep-blue)",padding:"3px 10px",fontSize:"11px",fontWeight:700,letterSpacing:"0.06em",borderRadius:"3px",marginBottom:"10px"},children:"ПРОБЛЕМА"}),(0,e.jsx)("p",{style:{fontSize:"14px",margin:0,lineHeight:1.6,color:"var(--color-text-main)"},children:t.problem})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{display:"inline-block",background:"rgba(193, 160, 102, 0.16)",color:"#8C6F34",padding:"3px 10px",fontSize:"11px",fontWeight:700,letterSpacing:"0.06em",borderRadius:"3px",marginBottom:"10px"},children:"ЧТО СДЕЛАЛИ"}),(0,e.jsx)("p",{style:{fontSize:"14px",margin:0,lineHeight:1.6,color:"var(--color-text-main)"},children:t.action})]})]}),(0,e.jsxs)("div",{style:{marginTop:"30px",background:"rgba(193, 160, 102, 0.05)",padding:"20px",borderRadius:"0",border:"1px solid rgba(193, 160, 102, 0.2)",borderLeft:"4px solid var(--color-gold)"},children:[(0,e.jsx)("h4",{style:{fontSize:"12px",textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--color-primary)",marginBottom:"8px",fontWeight:600},children:n}),(0,e.jsx)("p",{style:{fontSize:"15px",margin:0,fontWeight:500,color:"var(--color-deep-blue)",lineHeight:1.5},children:t.result})]})]},r))})]}),(0,e.jsx)("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}])},62733,t=>{"use strict";var e=t.i(90748);function r({items:t,marginTop:i}){return t&&0!==t.length?(0,e.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"14px",marginTop:i||"20px",marginBottom:"24px",width:"100%",maxWidth:"640px"},children:t.map((t,r)=>(0,e.jsx)("div",{style:{paddingLeft:"16px",borderLeft:"3px solid var(--color-gold)",fontSize:"15px",color:"var(--color-deep-blue)",lineHeight:1.45,fontWeight:500,whiteSpace:"pre-line"},children:t.text},r))}):null}t.s(["default",0,function({breadcrumbs:t,superTitle:i,title:o,subtitle:a,primaryCtaText:n,primaryCtaSubtext:l,primaryCtaLink:p="#form",primaryCtaAnalytics:s,secondaryCtaText:d,secondaryCtaLink:x,urgentHint:c,trustItems:m=[],trustPosition:g="above-cta",imageUrl:h,imageName:b,imageSubtitle:f,trustMarginTop:y,imageMarginTop:v,imageObjectPosition:u,rightContent:j}){let w=!!(h||j);return(0,e.jsxs)("section",{className:"military-hero-section",style:{position:"relative",minHeight:"85vh",display:"flex",alignItems:"center",paddingTop:"clamp(120px, 9vw, 160px)",paddingBottom:"80px",background:"linear-gradient(145deg, var(--color-cream) 0%, rgba(247, 244, 237, 0.4) 100%)",overflow:"hidden"},children:[(0,e.jsx)("div",{style:{position:"absolute",top:"-10%",right:"-5%",width:"600px",height:"600px",background:"radial-gradient(circle, rgba(234, 241, 246, 0.8) 0%, transparent 70%)",borderRadius:"50%",zIndex:0}}),(0,e.jsxs)("div",{className:"container",style:{position:"relative",zIndex:1,paddingTop:"0px"},children:[t&&(0,e.jsx)("div",{style:{fontSize:"13px",color:"var(--color-text-secondary)",marginBottom:"32px"},children:t}),(0,e.jsxs)("div",{className:w?"grid grid-2 land-hero-grid":"",style:{display:w?"grid":"flex",flexDirection:w?"row":"column",gap:"40px",alignItems:"flex-start"},children:[(0,e.jsxs)("div",{style:{flex:"1 1 0%",paddingTop:"0px"},children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"16px",marginBottom:"12px",flexWrap:"nowrap"},children:[(0,e.jsx)("div",{style:{width:"40px",height:"2px",backgroundColor:"#9B7E55",flexShrink:0}}),(0,e.jsx)("span",{style:{textTransform:"uppercase",letterSpacing:"0.08em",fontSize:"clamp(11px, 2vw, 14px)",fontWeight:600,color:"var(--color-gold-text, #80633F)",whiteSpace:"nowrap"},children:i})]}),(0,e.jsx)("h1",{className:"military-hero-h1",style:{fontSize:"clamp(26px, 3.8vw, 50px)",color:"var(--color-deep-blue)",fontFamily:"var(--font-serif)",margin:"0 0 16px 0",lineHeight:1.15},children:o}),(0,e.jsx)("p",{className:"military-hero-subtitle",style:{fontSize:"16px",color:"var(--color-deep-blue)",opacity:.9,fontWeight:500,marginBottom:"16px",maxWidth:"750px",lineHeight:1.55},children:a}),"above-cta"===g&&m&&m.length>0&&(0,e.jsx)(r,{items:m,marginTop:y||"16px"}),(0,e.jsxs)("div",{className:"military-hero-cta",style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:"10px",marginTop:"20px",marginBottom:c?"16px":"24px"},children:[(0,e.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"16px"},children:[(0,e.jsx)("a",{href:p,className:"btn btn-primary military-hero-primary-btn","data-analytics":s||"military_hero_consultation_click",children:n}),d&&x&&(0,e.jsx)("a",{href:x,className:"btn btn-outline",style:{padding:"15px 36px",fontSize:"15px"},children:d})]}),l&&(0,e.jsx)("div",{style:{fontSize:"14px",color:"var(--color-text-secondary)",marginTop:"2px"},children:l})]}),c&&(0,e.jsxs)("div",{style:{background:"rgba(200, 169, 126, 0.1)",borderLeft:"4px solid var(--color-gold)",padding:"14px 20px",marginBottom:"20px",fontSize:"14px",color:"var(--color-deep-blue)",lineHeight:1.5},children:[(0,e.jsx)("strong",{style:{display:"block",marginBottom:"4px"},children:"Важно:"}),c]}),"below-cta"===g&&m&&m.length>0&&(0,e.jsx)(r,{items:m,marginTop:y||"16px"})]}),(0,e.jsx)("div",{className:"military-hero-right",style:{width:"100%",maxWidth:"440px",margin:"0 auto",flexShrink:0,display:"flex",flexDirection:"column",paddingTop:v||0,marginTop:0},children:j||(0,e.jsxs)("div",{className:"hero-photo-hover",style:{width:"100%",borderRadius:"0",overflow:"hidden",position:"relative",boxShadow:"0 4px 14px rgba(16, 39, 59, 0.12)",zIndex:1,display:"block",background:"transparent"},children:[h?(0,e.jsx)("img",{src:h,alt:b||o?.toString()||"Специалист",width:440,height:460,fetchPriority:"high",decoding:"async",style:{width:"100%",height:"460px",objectFit:"cover",objectPosition:u||"center 20%",display:"block",filter:"brightness(1.05)",aspectRatio:"440/460"},className:"hero-photo-img"}):(0,e.jsx)("div",{style:{padding:"40px",textAlign:"center",fontStyle:"italic",color:"var(--color-text-secondary)"},children:"[Фото специалиста]"}),(b||f)&&(0,e.jsxs)("div",{style:{padding:"16px 20px",background:"rgba(255, 255, 255, 0.75)",backdropFilter:"blur(10px)",borderTop:"3px solid var(--color-gold)",borderLeft:"1px solid rgba(255, 255, 255, 0.9)",borderRight:"1px solid rgba(255, 255, 255, 0.9)",borderBottom:"1px solid rgba(255, 255, 255, 0.9)",boxShadow:"0 4px 14px rgba(16, 39, 59, 0.08)"},children:[b&&(0,e.jsx)("div",{style:{fontSize:"16px",fontWeight:700,color:"var(--color-deep-blue)",fontFamily:"var(--font-serif)",marginBottom:"2px",lineHeight:1.3},children:"Дмитрий Сергеевич Конопкин"===b||"Конопкин Дмитрий Сергеевич"===b?(0,e.jsxs)(e.Fragment,{children:["Конопкин ",(0,e.jsx)("br",{}),"Дмитрий Сергеевич"]}):"Марина Валерьевна Смольянинова"===b||"Смольянинова Марина Валерьевна"===b?(0,e.jsxs)(e.Fragment,{children:["Смольянинова ",(0,e.jsx)("br",{}),"Марина Валерьевна"]}):b}),f&&(0,e.jsx)("div",{style:{fontSize:"13px",color:"var(--color-text-secondary)",fontWeight:500,lineHeight:1.35},children:"string"==typeof f&&f.includes("куратор")?(0,e.jsxs)(e.Fragment,{children:[f.split("куратор")[0].trim().replace(/,$/,""),",",(0,e.jsx)("br",{}),"куратор",f.split("куратор")[1]]}):f})]})]})})]}),(0,e.jsx)("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})]})}],62733)}]);