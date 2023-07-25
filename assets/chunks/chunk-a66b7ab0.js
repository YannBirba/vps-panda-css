import{R as z,j as B,r as W}from"./chunk-76f7fb99.js";const v=z.createContext(void 0);function Sr({pageContext:r,children:t}){return B.jsx(v.Provider,{value:r,children:t})}function X(){return W.useContext(v)}function h(r){return typeof r=="object"&&r!=null&&!Array.isArray(r)}function y(r){return Object.fromEntries(Object.entries(r??{}).filter(([t,e])=>e!==void 0))}var D=r=>r==="base";function Y(r){return r.slice().filter(t=>!D(t))}var I=/!(important)?$/;function F(r){return typeof r=="string"?I.test(r):!1}function H(r){return typeof r=="string"?r.replace(I,"").trim():r}function S(r){return typeof r=="string"?r.replaceAll(" ","_"):r}function C(r){return String.fromCharCode(r+(r>25?39:97))}function N(r){let t="",e;for(e=Math.abs(r);e>52;e=e/52|0)t=C(e%52)+t;return C(e%52)+t}function $(r,t){let e=t.length;for(;e;)r=r*33^t.charCodeAt(--e);return r}function V(r){return N($(5381,r)>>>0)}function w(...r){const t={};for(const e of r)for(const[o,i]of Object.entries(e))h(i)?t[o]=w(t[o]||{},i):t[o]=i;return t}var G=r=>r!=null;function k(r,t,e={}){const{stop:o,getKey:i}=e;function a(n,d=[]){if(h(n)||Array.isArray(n)){const l={};for(const[s,c]of Object.entries(n)){const g=(i==null?void 0:i(s))??s,u=[...d,g];if(o!=null&&o(n,u))return t(n,d);const b=a(c,u);G(b)&&(l[g]=b)}return l}return t(n,d)}return a(r)}function _r(r,t){return h(r)?k(r,e=>t(e)):t(r)}function K(r,t){return r.reduce((e,o,i)=>{const a=t[i];return o!=null&&(e[a]=o),e},{})}function q(r,t){const{hasShorthand:e,resolveShorthand:o}=t.utility;return k(r,i=>i,{getKey:i=>e?o(i):i})}function J(r,t){const{utility:e,conditions:o}=t,{hasShorthand:i,resolveShorthand:a}=e;return k(r,n=>Array.isArray(n)?K(n,o.breakpoints.keys):n,{stop:n=>Array.isArray(n),getKey:n=>i?a(n):n})}var U={shift:r=>r,finalize:r=>r,breakpoints:{keys:[]}},Z=r=>typeof r=="string"?r.replaceAll(/[\n\s]+/g," "):r;function E(r){const{utility:t,hash:e,conditions:o=U}=r,i=n=>[t.prefix,n].filter(Boolean).join("-"),a=(n,d)=>{let l;if(e){const s=[...o.finalize(n),d];l=i(V(s.join(":")))}else l=[...o.finalize(n),i(d)].join(":");return l};return(n={})=>{const d=J(n,r),l=new Set;return k(d,(s,c)=>{const g=F(s);if(s==null)return;const[u,...b]=o.shift(c),m=Y(b),f=t.transform(u,H(Z(s)));let p=a(m,f.className);g&&(p=`${p}!`),l.add(p)}),Array.from(l).join(" ")}}function Q(...r){return r.filter(t=>h(t)&&Object.keys(y(t)).length>0)}function rr(r){function t(i){const a=Q(...i);return a.length===1?a:a.map(n=>q(n,r))}function e(...i){return w(...t(i))}function o(...i){return Object.assign({},...t(i))}return{mergeCss:e,assignCss:o}}var tr=r=>{const t=new Map;return(...o)=>{const i=JSON.stringify(o);if(t.has(i))return t.get(i);const a=r(...o);return t.set(i,a),a}},er=/([A-Z])/g,nr=/^ms-/,or=tr(r=>r.startsWith("--")?r:r.replace(er,"-$1").replace(nr,"-ms-").toLowerCase()),O=["htmlSize","htmlTranslate","htmlWidth","htmlHeight"];function ir(r){return O.includes(r)?r.replace("html","").toLowerCase():r}function ar(r){return Object.fromEntries(Object.entries(r).map(([t,e])=>[ir(t),e]))}ar.keys=O;function P(r,...t){const e=Object.getOwnPropertyDescriptors(r),o=Object.keys(e),i=n=>{const d={};for(let l=0;l<n.length;l++){const s=n[l];e[s]&&(Object.defineProperty(d,s,e[s]),delete e[s])}return d},a=n=>i(Array.isArray(n)?n:o.filter(n));return t.map(a).concat(i(o))}const T=new Set(["_hover","_focus","_focusWithin","_focusVisible","_disabled","_active","_visited","_target","_readOnly","_readWrite","_empty","_checked","_enabled","_expanded","_highlighted","_before","_after","_firstLetter","_firstLine","_marker","_selection","_file","_backdrop","_first","_last","_only","_even","_odd","_firstOfType","_lastOfType","_onlyOfType","_peerFocus","_peerHover","_peerActive","_peerFocusWithin","_peerFocusVisible","_peerDisabled","_peerChecked","_peerInvalid","_peerExpanded","_peerPlaceholderShown","_groupFocus","_groupHover","_groupActive","_groupFocusWithin","_groupFocusVisible","_groupDisabled","_groupChecked","_groupExpanded","_groupInvalid","_indeterminate","_required","_valid","_invalid","_autofill","_inRange","_outOfRange","_placeholder","_placeholderShown","_pressed","_selected","_default","_optional","_open","_fullscreen","_loading","_currentPage","_currentStep","_motionReduce","_motionSafe","_print","_landscape","_portrait","_dark","_light","_osDark","_osLight","_highContrast","_lessContrast","_moreContrast","_ltr","_rtl","_scrollbar","_scrollbarThumb","_scrollbarTrack","_horizontal","_vertical","sm","smOnly","smDown","md","mdOnly","mdDown","lg","lgOnly","lgDown","xl","xlOnly","xlDown","2xl","2xlOnly","smToMd","smToLg","smToXl","smTo2xl","mdToLg","mdToXl","mdTo2xl","lgToXl","lgTo2xl","xlTo2xl","base"]);function R(r){return T.has(r)||/^@|&|&$/.test(r)}const sr=/^_/,dr=/&|@/;function lr(r){return r.map(t=>T.has(t)?t.replace(sr,""):dr.test(t)?`[${S(t.trim())}]`:t)}function cr(r){return r.sort((t,e)=>{const o=R(t),i=R(e);return o&&!i?1:!o&&i?-1:0})}const gr={aspectRatio:"aspect",boxDecorationBreak:"decoration",zIndex:"z",boxSizing:"box",objectPosition:"object",objectFit:"object",overscrollBehavior:"overscroll",overscrollBehaviorX:"overscroll-x",overscrollBehaviorY:"overscroll-y",position:"pos",top:"top",left:"left",insetInline:"inset-x",insetBlock:"inset-y",inset:"inset",insetBlockEnd:"inset-b",insetBlockStart:"inset-t",insetInlineEnd:"end",insetInlineStart:"start",right:"right",bottom:"bottom",insetX:"inset-x",insetY:"inset-y",float:"float",visibility:"vis",display:"d",hideFrom:"hide",hideBelow:"show",flexBasis:"basis",flex:"flex",flexDirection:"flex",flexGrow:"grow",flexShrink:"shrink",gridTemplateColumns:"grid-cols",gridTemplateRows:"grid-rows",gridColumn:"col-span",gridRow:"row-span",gridColumnStart:"col-start",gridColumnEnd:"col-end",gridAutoFlow:"grid-flow",gridAutoColumns:"auto-cols",gridAutoRows:"auto-rows",gap:"gap",gridGap:"gap",gridRowGap:"gap-x",gridColumnGap:"gap-y",rowGap:"gap-x",columnGap:"gap-y",justifyContent:"justify",alignContent:"content",alignItems:"items",alignSelf:"self",padding:"p",paddingLeft:"pl",paddingRight:"pr",paddingTop:"pt",paddingBottom:"pb",paddingBlock:"py",paddingBlockEnd:"pb",paddingBlockStart:"pt",paddingInline:"px",paddingInlineEnd:"pe",paddingInlineStart:"ps",marginLeft:"ml",marginRight:"mr",marginTop:"mt",marginBottom:"mb",margin:"m",marginBlock:"my",marginBlockEnd:"mb",marginBlockStart:"mt",marginInline:"mx",marginInlineEnd:"me",marginInlineStart:"ms",outlineWidth:"ring",outlineColor:"ring",outline:"ring",outlineOffset:"ring",divideX:"divide-x",divideY:"divide-y",divideColor:"divide",divideStyle:"divide",width:"w",inlineSize:"w",minWidth:"min-w",minInlineSize:"min-w",maxWidth:"max-w",maxInlineSize:"max-w",height:"h",blockSize:"h",minHeight:"min-h",minBlockSize:"min-h",maxHeight:"max-h",maxBlockSize:"max-b",color:"text",fontFamily:"font",fontSize:"fs",fontWeight:"font",fontSmoothing:"smoothing",fontVariantNumeric:"numeric",letterSpacing:"tracking",lineHeight:"leading",textAlign:"text",textDecoration:"text-decor",textDecorationColor:"text-decor",textEmphasisColor:"text-emphasis",textDecorationStyle:"decoration",textDecorationThickness:"decoration",textUnderlineOffset:"underline-offset",textTransform:"text",textIndent:"indent",textShadow:"text-shadow",textOverflow:"text",verticalAlign:"align",wordBreak:"break",textWrap:"text",truncate:"truncate",lineClamp:"clamp",listStyleType:"list",listStylePosition:"list",listStyleImage:"list-img",backgroundPosition:"bg",backgroundPositionX:"bg-x",backgroundPositionY:"bg-y",backgroundAttachment:"bg",backgroundClip:"bg-clip",background:"bg",backgroundColor:"bg",backgroundOrigin:"bg-origin",backgroundImage:"bg-img",backgroundRepeat:"bg-repeat",backgroundBlendMode:"bg-blend",backgroundSize:"bg",backgroundGradient:"bg-gradient",textGradient:"text-gradient",gradientFrom:"from",gradientTo:"to",gradientVia:"via",borderRadius:"rounded",borderTopLeftRadius:"rounded-tl",borderTopRightRadius:"rounded-tr",borderBottomRightRadius:"rounded-br",borderBottomLeftRadius:"rounded-bl",borderTopRadius:"rounded-t",borderRightRadius:"rounded-r",borderBottomRadius:"rounded-b",borderLeftRadius:"rounded-l",borderStartStartRadius:"rounded-ss",borderStartEndRadius:"rounded-se",borderStartRadius:"rounded-s",borderEndStartRadius:"rounded-es",borderEndEndRadius:"rounded-ee",borderEndRadius:"rounded-e",border:"border",borderColor:"border",borderInline:"border-x",borderInlineWidth:"border-x",borderInlineColor:"border-x",borderBlock:"border-y",borderBlockWidth:"border-y",borderBlockColor:"border-y",borderLeft:"border-l",borderLeftColor:"border-l",borderInlineStart:"border-s",borderInlineStartColor:"border-s",borderRight:"border-r",borderRightColor:"border-r",borderInlineEnd:"border-e",borderInlineEndColor:"border-e",borderTop:"border-t",borderTopColor:"border-t",borderBottom:"border-b",borderBottomColor:"border-b",borderBlockEnd:"border-be",borderBlockEndColor:"border-be",borderBlockStart:"border-bs",borderBlockStartColor:"border-bs",boxShadow:"shadow",boxShadowColor:"shadow",mixBlendMode:"mix-blend",filter:"filter",brightness:"brightness",contrast:"contrast",grayscale:"grayscale",hueRotate:"hue-rotate",invert:"invert",saturate:"saturate",sepia:"sepia",dropShadow:"drop-shadow",blur:"blur",backdropFilter:"backdrop",backdropBlur:"backdrop-blur",backdropBrightness:"backdrop-brightness",backdropContrast:"backdrop-contrast",backdropGrayscale:"backdrop-grayscale",backdropHueRotate:"backdrop-hue-rotate",backdropInvert:"backdrop-invert",backdropOpacity:"backdrop-opacity",backdropSaturate:"backdrop-saturate",backdropSepia:"backdrop-sepia",borderCollapse:"border",borderSpacing:"border-spacing",borderSpacingX:"border-spacing-x",borderSpacingY:"border-spacing-y",tableLayout:"table",transitionTimingFunction:"ease",transitionDelay:"delay",transitionDuration:"duration",transitionProperty:"transition-prop",transition:"transition",animation:"animation",animationDelay:"animation-delay",transformOrigin:"origin",scale:"scale",scaleX:"scale-x",scaleY:"scale-y",translate:"translate",translateX:"translate-x",translateY:"translate-y",accentColor:"accent",caretColor:"caret",scrollBehavior:"scroll",scrollbar:"scrollbar",scrollMargin:"scroll-m",scrollMarginX:"scroll-mx",scrollMarginY:"scroll-my",scrollMarginLeft:"scroll-ml",scrollMarginRight:"scroll-mr",scrollMarginTop:"scroll-mt",scrollMarginBottom:"scroll-mb",scrollMarginBlock:"scroll-my",scrollMarginBlockEnd:"scroll-mb",scrollMarginBlockStart:"scroll-mt",scrollMarginInline:"scroll-mx",scrollMarginInlineEnd:"scroll-me",scrollMarginInlineStart:"scroll-ms",scrollPadding:"scroll-p",scrollPaddingBlock:"scroll-pb",scrollPaddingBlockStart:"scroll-pt",scrollPaddingBlockEnd:"scroll-pb",scrollPaddingInline:"scroll-px",scrollPaddingInlineEnd:"scroll-pe",scrollPaddingInlineStart:"scroll-ps",scrollPaddingX:"scroll-px",scrollPaddingY:"scroll-py",scrollPaddingLeft:"scroll-pl",scrollPaddingRight:"scroll-pr",scrollPaddingTop:"scroll-pt",scrollPaddingBottom:"scroll-pb",scrollSnapAlign:"snap",scrollSnapStop:"snap",scrollSnapType:"snap",scrollSnapStrictness:"strictness",scrollSnapMargin:"snap-m",scrollSnapMarginTop:"snap-mt",scrollSnapMarginBottom:"snap-mb",scrollSnapMarginLeft:"snap-ml",scrollSnapMarginRight:"snap-mr",touchAction:"touch",userSelect:"select",fill:"fill",stroke:"stroke",srOnly:"sr",debug:"debug",appearance:"appearance",backfaceVisibility:"backface",clipPath:"clip-path",hyphens:"hyphens",mask:"mask",maskImage:"mask-image",maskSize:"mask-size",textSizeAdjust:"text-size-adjust",textStyle:"textStyle"},ur={pos:"position",insetEnd:"insetInlineEnd",end:"insetInlineEnd",insetStart:"insetInlineStart",start:"insetInlineStart",flexDir:"flexDirection",p:"padding",pl:"paddingLeft",pr:"paddingRight",pt:"paddingTop",pb:"paddingBottom",py:"paddingBlock",paddingY:"paddingBlock",paddingX:"paddingInline",px:"paddingInline",pe:"paddingInlineEnd",paddingEnd:"paddingInlineEnd",ps:"paddingInlineStart",paddingStart:"paddingInlineStart",ml:"marginLeft",mr:"marginRight",mt:"marginTop",mb:"marginBottom",m:"margin",my:"marginBlock",marginY:"marginBlock",mx:"marginInline",marginX:"marginInline",me:"marginInlineEnd",marginEnd:"marginInlineEnd",ms:"marginInlineStart",marginStart:"marginInlineStart",ringWidth:"outlineWidth",ringColor:"outlineColor",ring:"outline",ringOffset:"outlineOffset",w:"width",minW:"minWidth",maxW:"maxWidth",h:"height",minH:"minHeight",maxH:"maxHeight",bgPosition:"backgroundPosition",bgPositionX:"backgroundPositionX",bgPositionY:"backgroundPositionY",bgAttachment:"backgroundAttachment",bgClip:"backgroundClip",bg:"background",bgColor:"backgroundColor",bgOrigin:"backgroundOrigin",bgImage:"backgroundImage",bgRepeat:"backgroundRepeat",bgBlendMode:"backgroundBlendMode",bgSize:"backgroundSize",bgGradient:"backgroundGradient",rounded:"borderRadius",roundedTopLeft:"borderTopLeftRadius",roundedTopRight:"borderTopRightRadius",roundedBottomRight:"borderBottomRightRadius",roundedBottomLeft:"borderBottomLeftRadius",roundedTop:"borderTopRadius",roundedRight:"borderRightRadius",roundedBottom:"borderBottomRadius",roundedLeft:"borderLeftRadius",roundedStartStart:"borderStartStartRadius",roundedStartEnd:"borderStartEndRadius",roundedStart:"borderStartRadius",roundedEndStart:"borderEndStartRadius",roundedEndEnd:"borderEndEndRadius",roundedEnd:"borderEndRadius",borderX:"borderInline",borderXWidth:"borderInlineWidth",borderXColor:"borderInlineColor",borderY:"borderBlock",borderYWidth:"borderBlockWidth",borderYColor:"borderBlockColor",borderStart:"borderInlineStart",borderStartColor:"borderInlineStartColor",borderEnd:"borderInlineEnd",borderEndColor:"borderInlineEndColor",shadow:"boxShadow",shadowColor:"boxShadowColor",x:"translateX",y:"translateY"},br=["base","sm","md","lg","xl","2xl"],pr=!0,j=r=>ur[r]||r;function mr(r,t){const e=j(r);return{className:`${gr[e]||or(e)}_${S(t)}`}}const A={hash:!1,conditions:{shift:cr,finalize:lr,breakpoints:{keys:br}},utility:{prefix:void 0,transform:mr,hasShorthand:pr,resolveShorthand:j}},_=E(A);_.raw=r=>r;const{mergeCss:x,assignCss:Cr}=rr(A);function M(){let r="",t=0,e;for(;t<arguments.length;)(e=arguments[t++])&&typeof e=="string"&&(r&&(r+=" "),r+=e);return r}function Rr(r){const{base:t={},variants:e={},defaultVariants:o={},compoundVariants:i=[]}=r;function a(c){var m;const g={...o,...y(c)};let u={...t};for(const[f,p]of Object.entries(g))(m=e[f])!=null&&m[p]&&(u=x(u,e[f][p]));const b=L(i,g);return x(u,b)}function n(c){return _(a(c))}const d=Object.keys(e);function l(c){return P(c,d)}const s=Object.fromEntries(Object.entries(e).map(([c,g])=>[c,Object.keys(g)]));return Object.assign(n,{__cva__:!0,variantMap:s,variantKeys:d,resolve:a,config:r,splitVariantProps:l})}function L(r,t){let e={};return r.forEach(o=>{Object.entries(o).every(([a,n])=>a==="css"?!0:(Array.isArray(n)?n:[n]).some(l=>t[a]===l))&&(e=x(e,o.css))}),e}function fr(r,t,e,o){if(t.length>0&&typeof e[o]=="object")throw new Error(`[recipe:${r}:${o}] Conditions are not supported when using compound variants.`)}const hr=(r,t,e)=>o=>{const a=E({hash:!1,utility:{prefix:void 0,transform:(l,s)=>(fr(r,e,o,l),s==="__ignore__"?{className:r}:(s=S(s),{className:`${r}--${l}_${s}`}))}}),n={[r]:"__ignore__",...t,...y(o)},d=L(e,n);return M(a(n),_(d))},kr=hr("link",{variant:"navLink"},[]),xr=Object.assign(kr,{__recipe__:!0,raw:r=>r,variantKeys:["variant"],variantMap:{variant:["navLink","unstyled"]},splitVariantProps(r){return P(r,["variant"])}});function Br({href:r,className:t,children:e,variant:o,...i}){const a=X();let n="/vps-panda-css",d=r;return r&&n&&r.startsWith("/")&&(n.endsWith("/")&&(n=n.slice(0,-1)),d=`${n}${r}`),B.jsx("a",{href:d,"data-active":a.urlPathname===r?!0:void 0,className:M(t,xr({variant:o})),...i,children:e})}export{Br as L,Sr as P,_ as a,Rr as b,M as c,Cr as d,_r as m,ar as n,P as s};
