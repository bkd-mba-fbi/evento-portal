import{a as s,b as o,jc as u,kc as l}from"./chunk-XTHSYQMN.js";function a(e){return String(e||"").split("&").reduce((n,r)=>{let[t,i]=r.split("=");return o(s({},n),{[t]:i})},{})}function p(e){return Object.keys(e).reduce((n,r)=>{let t=e[r];return[...n,t==null?r:`${r}=${t}`]},[]).join("&")}function g(e){let i=new l().parse(e)?.root.children[u]?.segments;return i?i[0].path:null}export{a,p as b,g as c};