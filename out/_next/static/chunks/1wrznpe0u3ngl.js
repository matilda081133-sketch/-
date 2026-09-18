(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,74648,e=>{"use strict";var i=e.i(43476);e.s(["default",0,function({cases:e,title:t="Результаты нашей работы",subtitle:r,showAllLink:o="/praktika",showAllText:a="Смотреть все дела",showDemoWarning:l=!1,resultLabel:n="Результат"}){let s=e.map(e=>({...e,category:e.category||(e.duration?`Срок: ${e.duration}`:"Практика"),problem:e.problem||e.description||"",action:e.action||(e.points?e.points.join(". "):""),result:e.result||"Задачи успешно выполнены по утвержденному регламенту"}));return(0,i.jsxs)("section",{className:"section bg-white",style:{padding:"clamp(48px, 6vw, 80px) 0"},children:[(0,i.jsxs)("div",{className:"container",children:[(0,i.jsxs)("div",{style:{marginBottom:"40px"},children:[(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"16px",marginBottom:"16px"},children:[(0,i.jsx)("div",{style:{width:"40px",height:"1px",backgroundColor:"var(--color-primary)"}}),(0,i.jsx)("span",{style:{textTransform:"uppercase",letterSpacing:"0.15em",fontSize:"12px",color:"var(--color-primary)"},children:"Практика"})]}),(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"20px"},children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{style:{margin:0,fontSize:"clamp(28px, 4vw, 42px)",fontFamily:"var(--font-serif)",color:"var(--color-deep-blue)",lineHeight:1.25},children:t}),r&&(0,i.jsx)("p",{style:{margin:"8px 0 0",color:"var(--color-text-secondary)",fontSize:"15px",lineHeight:1.5},children:r})]}),o&&(0,i.jsx)("a",{href:o,className:"btn btn-outline",style:{padding:"12px 24px",height:"fit-content",whiteSpace:"nowrap"},children:a})]})]}),(0,i.jsx)("div",{className:"cases-grid",children:s.map((e,t)=>(0,i.jsxs)("div",{className:"case-card group",style:{padding:"36px 30px 30px 30px",border:"1px solid var(--color-border)",borderRadius:"0",display:"flex",flexDirection:"column",background:"var(--color-white)",boxShadow:"0 4px 10px rgba(0,0,0,0.12)",position:"relative",overflow:"hidden",height:"100%"},children:[(0,i.jsx)("div",{style:{position:"absolute",top:0,left:0,width:"4px",height:"0%",background:"var(--color-gold)",transition:"height 0.4s ease"},className:"case-accent-line"}),(0,i.jsxs)("div",{style:{paddingBottom:"20px",marginBottom:"20px",paddingTop:"0"},children:[(0,i.jsx)("span",{style:{display:"block",fontSize:"11px",textTransform:"uppercase",letterSpacing:"0.1em",color:"#D4AF37",marginBottom:"12px",fontWeight:600,lineHeight:1.45},children:e.category}),(0,i.jsx)("h3",{style:{margin:0,color:"var(--color-deep-blue)",fontSize:"19px",fontFamily:"var(--font-serif)",lineHeight:1.4,wordBreak:"break-word",overflowWrap:"break-word"},children:e.title})]}),(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"18px",flexGrow:1},children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{style:{display:"inline-block",background:"rgba(23, 50, 77, 0.08)",color:"var(--color-deep-blue)",padding:"3px 10px",fontSize:"11px",fontWeight:700,letterSpacing:"0.06em",borderRadius:"3px",marginBottom:"8px"},children:"ПРОБЛЕМА"}),(0,i.jsx)("p",{style:{fontSize:"14px",margin:0,lineHeight:1.6,color:"var(--color-text-main)"},children:e.problem})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{style:{display:"inline-block",background:"rgba(193, 160, 102, 0.16)",color:"#8C6F34",padding:"3px 10px",fontSize:"11px",fontWeight:700,letterSpacing:"0.06em",borderRadius:"3px",marginBottom:"8px"},children:"ЧТО СДЕЛАЛИ"}),(0,i.jsx)("p",{style:{fontSize:"14px",margin:0,lineHeight:1.6,color:"var(--color-text-main)"},children:e.action})]})]}),(0,i.jsxs)("div",{style:{marginTop:"24px",background:"rgba(193, 160, 102, 0.05)",padding:"18px",borderRadius:"0",border:"1px solid rgba(193, 160, 102, 0.2)",borderLeft:"4px solid var(--color-gold)"},children:[(0,i.jsx)("h4",{style:{fontSize:"12px",textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--color-primary)",marginBottom:"6px",fontWeight:600},children:n}),(0,i.jsx)("p",{style:{fontSize:"14.5px",margin:0,fontWeight:500,color:"var(--color-deep-blue)",lineHeight:1.5},children:e.result})]})]},t))})]}),(0,i.jsx)("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}])},17093,e=>{"use strict";var i=e.i(43476);e.s(["default",0,function({title:e="Специалист",name:t,position:r,description:o,photoPlaceholder:a="[Фото специалиста]",imageUrl:l,imagePosition:n,buttonText:s="Задать вопрос специалисту",buttonHref:c="#consultation",profileHref:d,profileText:p}){return(0,i.jsxs)("section",{className:"section bg-white",id:"specialist",children:[(0,i.jsxs)("div",{className:"container",children:[e&&(0,i.jsx)("h2",{className:"section-title text-center",style:{marginBottom:"40px"},children:"string"==typeof e&&e.includes("Куратор направления — Владимир Викторович Начешников")?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{style:{display:"inline-block"},children:"Куратор направления — Владимир"})," ",(0,i.jsx)("br",{}),(0,i.jsx)("span",{style:{display:"inline-block"},children:"Викторович Начешников"})]}):e}),(0,i.jsxs)("div",{className:"specialist-grid",style:{background:"var(--color-cream)",padding:"40px",borderRadius:"0",borderTop:"4px solid var(--color-primary)"},children:[(0,i.jsx)("div",{style:{width:"100%",maxWidth:"500px",margin:"0 auto",flexShrink:0},children:(0,i.jsx)("div",{style:{width:"100%",aspectRatio:"3/4",backgroundColor:"var(--color-white)",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--color-text-secondary)",fontSize:"14px",border:"1px solid var(--color-border)",position:"relative"},children:l?d?(0,i.jsx)("a",{href:d,style:{display:"block",width:"100%",height:"100%"},children:(0,i.jsx)("img",{src:l,alt:"string"==typeof t?t:"Владимир Викторович Начешников",width:500,height:667,loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:n||"center 15%",display:"block",aspectRatio:"3/4"}})}):(0,i.jsx)("img",{src:l,alt:"string"==typeof t?t:"Владимир Викторович Начешников",width:500,height:667,loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:n||"center 15%",display:"block",aspectRatio:"3/4"}}):(0,i.jsx)("span",{style:{padding:"20px",textAlign:"center",fontStyle:"italic"},children:a})})}),(0,i.jsxs)("div",{style:{flex:"1 1 0%"},children:[(0,i.jsx)("h3",{style:{fontSize:"32px",color:"var(--color-deep-blue)",marginBottom:"12px",fontFamily:"var(--font-serif)"},children:d?(0,i.jsx)("a",{href:d,style:{color:"inherit",textDecoration:"none"},children:"Владимир Викторович Начешников"===t||"Начешников Владимир Викторович"===t?(0,i.jsxs)(i.Fragment,{children:["Начешников ",(0,i.jsx)("br",{}),"Владимир Викторович"]}):t}):"Владимир Викторович Начешников"===t||"Начешников Владимир Викторович"===t?(0,i.jsxs)(i.Fragment,{children:["Начешников ",(0,i.jsx)("br",{}),"Владимир Викторович"]}):t}),(0,i.jsx)("div",{style:{color:"var(--color-primary)",fontWeight:600,fontSize:"16px",marginBottom:"32px",textTransform:"uppercase",letterSpacing:"0.05em",whiteSpace:"pre-line"},children:r}),(0,i.jsx)("div",{style:{marginBottom:d?"20px":"32px"},children:o.map((e,t)=>(0,i.jsx)("div",{style:{fontSize:"16px",color:"var(--color-deep-blue)",opacity:.9,fontWeight:500,lineHeight:1.6,marginBottom:t===o.length-1?0:"16px"},children:e},t))}),d&&(0,i.jsx)("div",{style:{marginBottom:"28px"},children:(0,i.jsx)("a",{href:d,style:{fontSize:"15px",color:"var(--color-primary)",fontWeight:600,textDecoration:"underline",textUnderlineOffset:"4px",display:"inline-flex",alignItems:"center",gap:"6px"},children:p||"Подробнее о специалисте →"})}),(0,i.jsx)("a",{href:c,className:"btn btn-primary",children:s})]})]})]}),(0,i.jsx)("style",{dangerouslySetInnerHTML:{__html:`
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