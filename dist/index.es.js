import e,{useState as t,useRef as n,useEffect as s}from"react";import{render as r}from"react-dom";const i={ids:[],add:function(e,t){this.ids.push({id:e,callback:t})},remove:function(e){if(e){const{callback:t}=this.ids.find(t=>t.id===e);t(),this.ids=this.ids.filter(t=>t.id!==e)}else this.ids.forEach(e=>e.callback()),this.ids=[]}},o=({message:t,onClose:n,type:s="info",width:r="300px",rtl:i,closeOnClick:o,onMouseEnter:a,onMouseLeave:c})=>e.createElement("div",{className:`item ${s} ${i?"rtl":"ltr"}`,style:{width:r},onClick:()=>o&&n(),onMouseEnter:a,onMouseLeave:c},e.createElement("span",null,t),e.createElement("button",{onClick:n},"✖")),a={};class c{constructor(e,t){let n=-1,s=0;this.remaining=t,this.pause=()=>{clearTimeout(n),this.remaining-=Date.now()-s},this.resume=()=>{s=Date.now(),clearTimeout(n),n=setTimeout(e,this.remaining)},this.resume()}}var l=r=>{const[,l]=t([]),[m,u]=t(!1),[d,p]=t(!1),h=n([]),{autoClose:y=3e3,delay:g=0,id:f}=r,{animation:E={}}=r,v=E.duration||300,b=y>0?y:0,$=e=>{h.current=((e,t)=>e.filter(e=>e.key!=t))(h.current,e),l(h.current),0===h.current.length&&r.cleared()};return s(()=>{const t=h.current.findIndex(e=>e.key==f),n=h.current[t];if(!n)return;const s=a[f].remaining,r=m&&!d?{}:{animationName:`${E.out}`,animationDelay:`${s-v}ms`,animationDuration:`${v}ms`},i=e.cloneElement(n,Object.assign({},n.props,{style:r}));h.current.splice(t,1,i),l([...h.current])},[m,d]),s(()=>{const t={id:f,onClose:()=>{setTimeout(()=>$(f),v),a[f].remaining=v,p(!0)},onMouseEnter:()=>n("pause"),onMouseLeave:()=>n("resume")},n=e=>{r.pauseOnHover&&a[f]&&a[f][e](),u("pause"===e)};let s=r.render?r.render(t):e.createElement(o,Object.assign({},r,t));v&&(s=e.createElement("div",{key:f,style:{animationName:`${E.in}, ${E.out}`,animationDelay:`0ms, ${b}ms`,animationDuration:`${v}ms, ${v}ms`}},s));const m=r.onlyLast?[]:h.current,{newestOnTop:d=!0}=r;h.current=d?[s,...m]:[...m,s],i.add(f,()=>$(f)),setTimeout(()=>l(h.current),g),a[f]=new c(()=>y&&$(f),g+b+v)},[r]),e.createElement(e.Fragment,null,h.current)};const m="simple-react-notifier";let u,d=0;const p=t=>{t=Object.assign({},u||{},t);const{position:n="top-right"}=t;let s=document.querySelector("."+m+"."+n);return s||((s=document.createElement("div")).classList.add(m,n),s.style.direction=t.rtl?"rtl":"ltr",document.body.appendChild(s)),r(e.createElement(l,Object.assign({},t,{id:d,cleared:()=>{try{document.body.removeChild(s)}catch(e){}}})),s),++d-1};p.info=e=>p({message:e,type:"info"}),p.success=e=>p({message:e,type:"success"}),p.error=e=>p({message:e,type:"error"}),p.warn=e=>p({message:e,type:"warn"}),p.configure=e=>{u=e},p.dismiss=e=>i.remove(e);export default p;
//# sourceMappingURL=index.es.js.map
