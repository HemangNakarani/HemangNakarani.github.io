import{j as e}from"./jsx-runtime.7faW4zRM.js";import{r as x}from"./index.DhYZZe0J.js";let i=[],g=(e,r)=>{let t=[],l={get:()=>(l.lc||l.listen((()=>{}))(),l.value),l:0,lc:0,listen:(e,r)=>(l.lc=t.push(e,r||l.l)/2,()=>{let r=t.indexOf(e);~r&&(t.splice(r,2),--l.lc||l.off())}),notify(e,r){let n=!i.length;for(let n=0;n<t.length;n+=2)i.push(t[n],t[n+1],l.value,e,r);if(n){for(let e=0;e<i.length;e+=5){let r;for(let t=e+1;!r&&(t+=5)<i.length;)i[t]<i[e+1]&&(r=i.push(i[e],i[e+1],i[e+2],i[e+3],i[e+4]));r||i[e](i[e+2],i[e+3],i[e+4])}i.length=0}},off(){},set(e){let r=l.value;r!==e&&(l.value=e,l.notify(r))},subscribe(e,r){let t=l.listen(e,r);return e(l.value),t},value:e};return l};function m(e,r,t){let i=new Set([...r,void 0]);return e.listen(((e,r,l)=>{i.has(l)&&t(e,r,l)}))}const u=g(!1);function f(){history.back()}function h(e,r={}){let t=x.useCallback((t=>r.keys?m(e,r.keys,t):e.listen(t)),[r.keys,e]),i=e.get.bind(e);return x.useSyncExternalStore(t,i,i)}function j(r){const t=h(u);return e.jsxs(e.Fragment,{children:[e.jsx("header",{className:"mt-6 z-50",children:e.jsx("div",{children:e.jsxs("div",{className:"flex sm:gap-8 gap-4",children:[e.jsx("button",{onClick:f,className:"px-3 flex items-center w-12 py-2 bg-primary bg-opacity-10 text-primary rounded-xl text-xl",children:e.jsxs("svg",{className:"fill-primary h-6",fill:"#000000",version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 72 72",enableBackground:"new 0 0 72 72",xmlSpace:"preserve",children:[e.jsx("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),e.jsx("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("g",{id:"SVGRepo_iconCarrier",children:e.jsx("g",{children:e.jsx("path",{d:"M48.252,69.253c-2.271,0-4.405-0.884-6.011-2.489L17.736,42.258c-1.646-1.645-2.546-3.921-2.479-6.255 c-0.068-2.337,0.833-4.614,2.479-6.261L42.242,5.236c1.605-1.605,3.739-2.489,6.01-2.489c2.271,0,4.405,0.884,6.01,2.489 c3.314,3.314,3.314,8.707,0,12.021L35.519,36l18.743,18.742c3.314,3.314,3.314,8.707,0,12.021 C52.656,68.369,50.522,69.253,48.252,69.253z M48.252,6.747c-1.202,0-2.332,0.468-3.182,1.317L21.038,32.57 c-0.891,0.893-0.833,2.084-0.833,3.355c0,0.051,0,0.101,0,0.151c0,1.271-0.058,2.461,0.833,3.353l24.269,24.506 c0.85,0.85,1.862,1.317,3.063,1.317c1.203,0,2.273-0.468,3.123-1.317c1.755-1.755,1.725-4.61-0.03-6.365L31.292,37.414 c-0.781-0.781-0.788-2.047-0.007-2.828L51.438,14.43c1.754-1.755,1.753-4.61-0.001-6.365C50.587,7.215,49.454,6.747,48.252,6.747z"})})})]})}),e.jsx("h1",{className:"px-3 w-full py-2 bg-primary bg-opacity-10 text-primary rounded-xl text-xl font-extrabold text-center",children:r.title}),e.jsx("button",{onClick:()=>u.set(!t),id:"menuButton",className:"flex items-center gap-4 bg-primary bg-opacity-10 px-4 rounded-xl",children:e.jsxs("svg",{className:"stroke-primary h-6",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),e.jsx("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("g",{id:"SVGRepo_iconCarrier",children:e.jsx("path",{d:"M4 6H20M4 12H14M4 18H9",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]})})]})})}),t?e.jsx("div",{id:"menuItem",className:"absolute z-50 w-full sm:w-96 right-0 top-16 rounded-xl h-auto bg-black bg-opacity-100",children:e.jsxs("div",{className:"flex flex-col justify-center items-center gap-4 px-4 m-4 py-4",children:[e.jsx("a",{className:"w-full py-2 bg-primary text-center rounded-xl bg-opacity-10 hover:bg-opacity-5 text-primary font-bold",href:"/",children:"Home"}),e.jsx("a",{className:"w-full py-2 bg-primary text-center rounded-xl bg-opacity-10 hover:bg-opacity-5 text-primary font-bold",href:"/#about",children:"About"}),e.jsx("a",{className:"w-full py-2 bg-primary text-center rounded-xl bg-opacity-10 hover:bg-opacity-5 text-primary font-bold",href:"/#experience",children:"Experience"}),e.jsx("a",{className:"w-full py-2 bg-primary text-center rounded-xl bg-opacity-10 hover:bg-opacity-5 text-primary font-bold",href:"https://drive.google.com/file/d/1oPF9Hdi_puldKgTQgRs4hQKxpcyQ6YbQ/view?usp=sharing",target:"_blank",children:"Download CV"})]})}):null]})}export{j as default};