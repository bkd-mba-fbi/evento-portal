import{$ as w,A as g,Ca as y,Cd as L,D as x,Dd as I,N as p,O as o,Sa as O,T as b,Ta as C,ba as v,cc as E,jb as P,k as d,l as h,m as s,p as u,s as m,tb as k,u as f,v as c,va as a,xa as M}from"./chunk-XTHSYQMN.js";var l=class{constructor(){this.$implicit=null,this.bkdLet=null}},U=(()=>{let t=class t{set bkdLet(i){this.context.$implicit=this.context.bkdLet=i}constructor(i,r){this.vcr=i,this.templateRef=r,this.context=new l}ngOnInit(){this.vcr.createEmbeddedView(this.templateRef,this.context)}};t.\u0275fac=function(r){return new(r||t)(a(y),a(M))},t.\u0275dir=v({type:t,selectors:[["","bkdLet",""]],inputs:{bkdLet:"bkdLet"},standalone:!0});let e=t;return e})();var D=(()=>{let t=class t{constructor(){}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=w({type:t,selectors:[["bkd-spinner"]],standalone:!0,features:[k],decls:4,vars:0,consts:[[1,"spinner-container"],["role","status",1,"spinner-border"],[1,"visually-hidden"]],template:function(r,F){r&1&&(O(0,"div",0)(1,"div",1)(2,"span",2),P(3,"Loading..."),C()()())},styles:[".spinner-container[_ngcontent-%COMP%]{text-align:center}[_nghost-%COMP%]:not(.inline)   .spinner-container[_ngcontent-%COMP%]{top:-131px;min-height:200px}.spinner-border[_ngcontent-%COMP%]{width:4rem;height:4rem}[_nghost-%COMP%]:not(.inline)   .spinner-border[_ngcontent-%COMP%]{margin-top:100px}.small[_nghost-%COMP%]   .spinner-border[_ngcontent-%COMP%]{width:2rem;height:2rem;--bs-spinner-vertical-align: -.2em;--bs-spinner-border-width: .15em}"]});let e=t;return e})();var $=class{constructor(t,n,i,r){this.http=t,this.settings=n,this.codec=i,this.resourcePath=r}get(t,n){return this.http.get(`${this.baseUrl}/${t}`,n).pipe(o(L(this.codec)))}getList(t){return this.http.get(`${this.baseUrl}/`,t).pipe(o(I(this.codec)))}get baseUrl(){return`${this.settings.apiUrl}/${this.resourcePath}`}};function z(e){return g(t=>t instanceof E&&t.status===404?d(e||null):h(()=>t))}function B(e){return t=>u(()=>(e(),t))}function G(e){return t=>t.pipe(s(n=>n??e),x(e))}function J(e,t){return e.pipe(o(n=>t.pipe(p(n),s(()=>n))))}function K(e,t=window.document){return c(...["click","keydown"].map(n=>m(t,n))).pipe(p(null),o(()=>f(e)),s(()=>{}))}function N(e,t){return c(e,t.pipe(b(e),s(([n,i])=>i)))}export{U as a,$ as b,D as c,z as d,B as e,G as f,J as g,K as h,N as i};