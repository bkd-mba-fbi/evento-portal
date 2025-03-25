(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const re=globalThis,Te=re.ShadowRoot&&(re.ShadyCSS===void 0||re.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,xe=Symbol(),He=new WeakMap;let it=class{constructor(e,n,s){if(this._$cssResult$=!0,s!==xe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(Te&&e===void 0){const s=n!==void 0&&n.length===1;s&&(e=He.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&He.set(n,e))}return e}toString(){return this.cssText}};const kt=t=>new it(typeof t=="string"?t:t+"",void 0,xe),U=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((s,r,i)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[i+1],t[0]);return new it(n,t,xe)},St=(t,e)=>{if(Te)t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of e){const s=document.createElement("style"),r=re.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=n.cssText,t.appendChild(s)}},Be=Te?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const s of e.cssRules)n+=s.cssText;return kt(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Pt,defineProperty:Rt,getOwnPropertyDescriptor:It,getOwnPropertyNames:Et,getOwnPropertySymbols:Tt,getPrototypeOf:xt}=Object,P=globalThis,Fe=P.trustedTypes,Ct=Fe?Fe.emptyScript:"",pe=P.reactiveElementPolyfillSupport,V=(t,e)=>t,$e={toAttribute(t,e){switch(e){case Boolean:t=t?Ct:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},ot=(t,e)=>!Pt(t,e),je={attribute:!0,type:String,converter:$e,reflect:!1,hasChanged:ot};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),P.litPropertyMetadata??(P.litPropertyMetadata=new WeakMap);class M extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=je){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(e,n),!n.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(e,s,n);r!==void 0&&Rt(this.prototype,e,r)}}static getPropertyDescriptor(e,n,s){const{get:r,set:i}=It(this.prototype,e)??{get(){return this[n]},set(o){this[n]=o}};return{get(){return r==null?void 0:r.call(this)},set(o){const c=r==null?void 0:r.call(this);i.call(this,o),this.requestUpdate(e,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??je}static _$Ei(){if(this.hasOwnProperty(V("elementProperties")))return;const e=xt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(V("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(V("properties"))){const n=this.properties,s=[...Et(n),...Tt(n)];for(const r of s)this.createProperty(r,n[r])}const e=this[Symbol.metadata];if(e!==null){const n=litPropertyMetadata.get(e);if(n!==void 0)for(const[s,r]of n)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[n,s]of this.elementProperties){const r=this._$Eu(n,s);r!==void 0&&this._$Eh.set(r,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const r of s)n.unshift(Be(r))}else e!==void 0&&n.push(Be(e));return n}static _$Eu(e,n){const s=n.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(n=>n(this))}addController(e){var n;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)==null||n.call(e))}removeController(e){var n;(n=this._$EO)==null||n.delete(e)}_$E_(){const e=new Map,n=this.constructor.elementProperties;for(const s of n.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return St(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(n=>{var s;return(s=n.hostConnected)==null?void 0:s.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(n=>{var s;return(s=n.hostDisconnected)==null?void 0:s.call(n)})}attributeChangedCallback(e,n,s){this._$AK(e,s)}_$EC(e,n){var i;const s=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,s);if(r!==void 0&&s.reflect===!0){const o=(((i=s.converter)==null?void 0:i.toAttribute)!==void 0?s.converter:$e).toAttribute(n,s.type);this._$Em=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,n){var i;const s=this.constructor,r=s._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const o=s.getPropertyOptions(r),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)==null?void 0:i.fromAttribute)!==void 0?o.converter:$e;this._$Em=r,this[r]=c.fromAttribute(n,o.type),this._$Em=null}}requestUpdate(e,n,s){if(e!==void 0){if(s??(s=this.constructor.getPropertyOptions(e)),!(s.hasChanged??ot)(this[e],n))return;this.P(e,n,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,n,s){this._$AL.has(e)||this._$AL.set(e,n),s.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,o]of r)o.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],o)}let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),(s=this._$EO)==null||s.forEach(r=>{var i;return(i=r.hostUpdate)==null?void 0:i.call(r)}),this.update(n)):this._$EU()}catch(r){throw e=!1,this._$EU(),r}e&&this._$AE(n)}willUpdate(e){}_$AE(e){var n;(n=this._$EO)==null||n.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EC(n,this[n]))),this._$EU()}updated(e){}firstUpdated(e){}}M.elementStyles=[],M.shadowRootOptions={mode:"open"},M[V("elementProperties")]=new Map,M[V("finalized")]=new Map,pe==null||pe({ReactiveElement:M}),(P.reactiveElementVersions??(P.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=globalThis,ie=G.trustedTypes,We=ie?ie.createPolicy("lit-html",{createHTML:t=>t}):void 0,at="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,lt="?"+S,Lt=`<${lt}>`,z=document,q=()=>z.createComment(""),Y=t=>t===null||typeof t!="object"&&typeof t!="function",Ce=Array.isArray,Ot=t=>Ce(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",ge=`[ 	
\f\r]`,j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ve=/-->/g,Ge=/>/g,T=RegExp(`>|${ge}(?:([^\\s"'>=/]+)(${ge}*=${ge}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qe=/'/g,Ye=/"/g,ct=/^(?:script|style|textarea|title)$/i,zt=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),I=zt(1),E=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),Xe=new WeakMap,L=z.createTreeWalker(z,129);function ht(t,e){if(!Ce(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return We!==void 0?We.createHTML(e):e}const Ut=(t,e)=>{const n=t.length-1,s=[];let r,i=e===2?"<svg>":e===3?"<math>":"",o=j;for(let c=0;c<n;c++){const a=t[c];let d,g,h=-1,p=0;for(;p<a.length&&(o.lastIndex=p,g=o.exec(a),g!==null);)p=o.lastIndex,o===j?g[1]==="!--"?o=Ve:g[1]!==void 0?o=Ge:g[2]!==void 0?(ct.test(g[2])&&(r=RegExp("</"+g[2],"g")),o=T):g[3]!==void 0&&(o=T):o===T?g[0]===">"?(o=r??j,h=-1):g[1]===void 0?h=-2:(h=o.lastIndex-g[2].length,d=g[1],o=g[3]===void 0?T:g[3]==='"'?Ye:qe):o===Ye||o===qe?o=T:o===Ve||o===Ge?o=j:(o=T,r=void 0);const u=o===T&&t[c+1].startsWith("/>")?" ":"";i+=o===j?a+Lt:h>=0?(s.push(d),a.slice(0,h)+at+a.slice(h)+S+u):a+S+(h===-2?c:u)}return[ht(t,i+(t[n]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class X{constructor({strings:e,_$litType$:n},s){let r;this.parts=[];let i=0,o=0;const c=e.length-1,a=this.parts,[d,g]=Ut(e,n);if(this.el=X.createElement(d,s),L.currentNode=this.el.content,n===2||n===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(r=L.nextNode())!==null&&a.length<c;){if(r.nodeType===1){if(r.hasAttributes())for(const h of r.getAttributeNames())if(h.endsWith(at)){const p=g[o++],u=r.getAttribute(h).split(S),f=/([.?@])?(.*)/.exec(p);a.push({type:1,index:i,name:f[2],strings:u,ctor:f[1]==="."?Nt:f[1]==="?"?Dt:f[1]==="@"?Kt:he}),r.removeAttribute(h)}else h.startsWith(S)&&(a.push({type:6,index:i}),r.removeAttribute(h));if(ct.test(r.tagName)){const h=r.textContent.split(S),p=h.length-1;if(p>0){r.textContent=ie?ie.emptyScript:"";for(let u=0;u<p;u++)r.append(h[u],q()),L.nextNode(),a.push({type:2,index:++i});r.append(h[p],q())}}}else if(r.nodeType===8)if(r.data===lt)a.push({type:2,index:i});else{let h=-1;for(;(h=r.data.indexOf(S,h+1))!==-1;)a.push({type:7,index:i}),h+=S.length-1}i++}}static createElement(e,n){const s=z.createElement("template");return s.innerHTML=e,s}}function K(t,e,n=t,s){var o,c;if(e===E)return e;let r=s!==void 0?(o=n._$Co)==null?void 0:o[s]:n._$Cl;const i=Y(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==i&&((c=r==null?void 0:r._$AO)==null||c.call(r,!1),i===void 0?r=void 0:(r=new i(t),r._$AT(t,n,s)),s!==void 0?(n._$Co??(n._$Co=[]))[s]=r:n._$Cl=r),r!==void 0&&(e=K(t,r._$AS(t,e.values),r,s)),e}let Mt=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:n},parts:s}=this._$AD,r=((e==null?void 0:e.creationScope)??z).importNode(n,!0);L.currentNode=r;let i=L.nextNode(),o=0,c=0,a=s[0];for(;a!==void 0;){if(o===a.index){let d;a.type===2?d=new F(i,i.nextSibling,this,e):a.type===1?d=new a.ctor(i,a.name,a.strings,this,e):a.type===6&&(d=new Ht(i,this,e)),this._$AV.push(d),a=s[++c]}o!==(a==null?void 0:a.index)&&(i=L.nextNode(),o++)}return L.currentNode=z,r}p(e){let n=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,n),n+=s.strings.length-2):s._$AI(e[n])),n++}};class F{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,n,s,r){this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=s,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=K(this,e,n),Y(e)?e===b||e==null||e===""?(this._$AH!==b&&this._$AR(),this._$AH=b):e!==this._$AH&&e!==E&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ot(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==b&&Y(this._$AH)?this._$AA.nextSibling.data=e:this.T(z.createTextNode(e)),this._$AH=e}$(e){var i;const{values:n,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=X.createElement(ht(s.h,s.h[0]),this.options)),s);if(((i=this._$AH)==null?void 0:i._$AD)===r)this._$AH.p(n);else{const o=new Mt(r,this),c=o.u(this.options);o.p(n),this.T(c),this._$AH=o}}_$AC(e){let n=Xe.get(e.strings);return n===void 0&&Xe.set(e.strings,n=new X(e)),n}k(e){Ce(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let s,r=0;for(const i of e)r===n.length?n.push(s=new F(this.O(q()),this.O(q()),this,this.options)):s=n[r],s._$AI(i),r++;r<n.length&&(this._$AR(s&&s._$AB.nextSibling,r),n.length=r)}_$AR(e=this._$AA.nextSibling,n){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,n);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var n;this._$AM===void 0&&(this._$Cv=e,(n=this._$AP)==null||n.call(this,e))}}class he{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,s,r,i){this.type=1,this._$AH=b,this._$AN=void 0,this.element=e,this.name=n,this._$AM=r,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=b}_$AI(e,n=this,s,r){const i=this.strings;let o=!1;if(i===void 0)e=K(this,e,n,0),o=!Y(e)||e!==this._$AH&&e!==E,o&&(this._$AH=e);else{const c=e;let a,d;for(e=i[0],a=0;a<i.length-1;a++)d=K(this,c[s+a],n,a),d===E&&(d=this._$AH[a]),o||(o=!Y(d)||d!==this._$AH[a]),d===b?e=b:e!==b&&(e+=(d??"")+i[a+1]),this._$AH[a]=d}o&&!r&&this.j(e)}j(e){e===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Nt extends he{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===b?void 0:e}}class Dt extends he{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==b)}}class Kt extends he{constructor(e,n,s,r,i){super(e,n,s,r,i),this.type=5}_$AI(e,n=this){if((e=K(this,e,n,0)??b)===E)return;const s=this._$AH,r=e===b&&s!==b||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,i=e!==b&&(s===b||r);r&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,e):this._$AH.handleEvent(e)}}class Ht{constructor(e,n,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){K(this,e)}}const Bt={I:F},fe=G.litHtmlPolyfillSupport;fe==null||fe(X,F),(G.litHtmlVersions??(G.litHtmlVersions=[])).push("3.2.1");const Ft=(t,e,n)=>{const s=(n==null?void 0:n.renderBefore)??e;let r=s._$litPart$;if(r===void 0){const i=(n==null?void 0:n.renderBefore)??null;s._$litPart$=r=new F(e.insertBefore(q(),i),i,void 0,n??{})}return r._$AI(t),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let k=class extends M{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const e=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=e.firstChild),e}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ft(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return E}};var rt;k._$litElement$=!0,k.finalized=!0,(rt=globalThis.litElementHydrateSupport)==null||rt.call(globalThis,{LitElement:k});const be=globalThis.litElementPolyfillSupport;be==null||be({LitElement:k});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=t=>(e,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function As(t,e,n){return t?e(t):n==null?void 0:n(t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ae="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jt=t=>typeof t!="string"&&"strTag"in t,dt=(t,e,n)=>{let s=t[0];for(let r=1;r<t.length;r++)s+=e[n?n[r-1]:r-1],s+=t[r];return s};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ut=t=>jt(t)?dt(t.strings,t.values):t;let l=ut,Je=!1;function Wt(t){if(Je)throw new Error("lit-localize can only be configured once");l=t,Je=!0}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Vt{constructor(e){this.__litLocalizeEventHandler=n=>{n.detail.status==="ready"&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(Ae,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(Ae,this.__litLocalizeEventHandler)}}const Gt=t=>t.addController(new Vt(t)),qt=Gt;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ee=()=>(t,e)=>(t.addInitializer(qt),t);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class pt{constructor(){this.settled=!1,this.promise=new Promise((e,n)=>{this._resolve=e,this._reject=n})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */const w=[];for(let t=0;t<256;t++)w[t]=(t>>4&15).toString(16)+(t&15).toString(16);function Yt(t){let e=0,n=8997,s=0,r=33826,i=0,o=40164,c=0,a=52210;for(let d=0;d<t.length;d++)n^=t.charCodeAt(d),e=n*435,s=r*435,i=o*435,c=a*435,i+=n<<8,c+=r<<8,s+=e>>>16,n=e&65535,i+=s>>>16,r=s&65535,a=c+(i>>>16)&65535,o=i&65535;return w[a>>8]+w[a&255]+w[o>>8]+w[o&255]+w[r>>8]+w[r&255]+w[n>>8]+w[n&255]}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xt="",Jt="h",Qt="s";function Zt(t,e){return(e?Jt:Qt)+Yt(typeof t=="string"?t:t.join(Xt))}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qe=new WeakMap,Ze=new Map;function en(t,e,n){if(t){const s=(n==null?void 0:n.id)??tn(e),r=t[s];if(r){if(typeof r=="string")return r;if("strTag"in r)return dt(r.strings,e.values,r.values);{let i=Qe.get(r);return i===void 0&&(i=r.values,Qe.set(r,i)),{...r,values:i.map(o=>e.values[o])}}}}return ut(e)}function tn(t){const e=typeof t=="string"?t:t.strings;let n=Ze.get(e);return n===void 0&&(n=Zt(e,typeof t!="string"&&!("strTag"in t)),Ze.set(e,n)),n}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function me(t){window.dispatchEvent(new CustomEvent(Ae,{detail:t}))}let oe="",ye,gt,ae,we,ft,C=new pt;C.resolve();let se=0;const nn=t=>(Wt((e,n)=>en(ft,e,n)),oe=gt=t.sourceLocale,ae=new Set(t.targetLocales),ae.add(t.sourceLocale),we=t.loadLocale,{getLocale:sn,setLocale:rn}),sn=()=>oe,rn=t=>{if(t===(ye??oe))return C.promise;if(!ae||!we)throw new Error("Internal error");if(!ae.has(t))throw new Error("Invalid locale code");se++;const e=se;return ye=t,C.settled&&(C=new pt),me({status:"loading",loadingLocale:t}),(t===gt?Promise.resolve({templates:void 0}):we(t)).then(s=>{se===e&&(oe=t,ye=void 0,ft=s.templates,me({status:"ready",readyLocale:t}),C.resolve())},s=>{se===e&&(me({status:"error",errorLocale:t,errorMessage:s.toString()}),C.reject(s))}),C.promise};function bt(t){return typeof t=="function"?t():t}const ce=class ce extends Event{constructor(e,n,s){super(ce.eventName,{cancelable:!1}),this.key=e,this.value=n,this.state=s}};ce.eventName="lit-state-changed";let O=ce;const on=(t,e)=>e!==t&&(e===e||t===t),De=class De extends EventTarget{static initPropertyMap(){this.propertyMap||(this.propertyMap=new Map)}get propertyMap(){return this.constructor.propertyMap}get stateValue(){return Object.fromEntries([...this.propertyMap].map(([e])=>[e,this[e]]))}constructor(){super(),this.hookMap=new Map,this.constructor.finalize(),this.propertyMap&&[...this.propertyMap].forEach(([e,n])=>{if(n.initialValue!==void 0){const s=bt(n.initialValue);this[e]=s,n.value=s}})}static finalize(){if(this.finalized)return!1;this.finalized=!0;const e=Object.keys(this.properties||{});for(const n of e)this.createProperty(n,this.properties[n]);return!0}static createProperty(e,n){this.finalize();const s=typeof e=="symbol"?Symbol():`__${e}`,r=this.getPropertyDescriptor(String(e),s,n);Object.defineProperty(this.prototype,e,r)}static getPropertyDescriptor(e,n,s){const r=(s==null?void 0:s.hasChanged)||on;return{get(){return this[n]},set(i){const o=this[e];this[n]=i,r(i,o)===!0&&this.dispatchStateEvent(e,i,this)},configurable:!0,enumerable:!0}}reset(){this.hookMap.forEach(e=>e.reset()),[...this.propertyMap].filter(([e,n])=>!(n.skipReset===!0||n.resetValue===void 0)).forEach(([e,n])=>{this[e]=n.resetValue})}subscribe(e,n,s){n&&!Array.isArray(n)&&(n=[n]);const r=i=>{(!n||n.includes(i.key))&&e(i.key,i.value,this)};return this.addEventListener(O.eventName,r,s),()=>this.removeEventListener(O.eventName,r)}dispatchStateEvent(e,n,s){this.dispatchEvent(new O(e,n,s))}};De.finalized=!1;let _e=De;class Le{constructor(e,n,s){this.host=e,this.state=n,this.callback=s||(()=>this.host.requestUpdate()),this.host.addController(this)}hostConnected(){this.state.addEventListener(O.eventName,this.callback),this.callback()}hostDisconnected(){this.state.removeEventListener(O.eventName,this.callback)}}function v(t){return(e,n)=>{if(Object.getOwnPropertyDescriptor(e,n))throw new Error("@property must be called before all state decorators");const s=e.constructor;s.initPropertyMap();const r=e.hasOwnProperty(n);return s.propertyMap.set(n,{...t,initialValue:t==null?void 0:t.value,resetValue:t==null?void 0:t.value}),s.createProperty(n,t),r?Object.getOwnPropertyDescriptor(e,n):void 0}}function an(t,e){if(t!==null&&(e===Boolean||e===Number||e===Array||e===Object))try{t=JSON.parse(t)}catch{console.warn("cannot parse value",t)}return t}const ln=new URL(location.href);function cn(t){return(e,n)=>{if(!Object.getOwnPropertyDescriptor(e,n))throw new Error("@local-storage decorator need to be called after @property");const r=e.constructor,i=`${(t==null?void 0:t.parameter)||String(n)}`,o=r.propertyMap.get(n),c=o==null?void 0:o.type;if(o){const a=o.initialValue,d=ln.searchParams.get(i);d!==null&&(o.skipAsync=!0),o.initialValue=()=>an(d,c)??bt(a),r.propertyMap.set(n,{...o,...t});return}}}const m={apps:[{key:"schulverwaltung",scope:"Tutoring",root:"apps/webapp-schulverwaltung/index.html",heading:!1},{key:"anmeldedetailsEinlesen",scope:"NG",root:"apps/EmberApps/AnmeldedetailsEinlesen/index.html",heading:!0},{key:"schulleiterPersonen",scope:"NG",root:"apps/EmberApps/SchulleiterPersonen/index.html",heading:!0},{key:"fotoliste",scope:"Tutoring",root:"apps/EmberApps/Fotoliste/index.html",heading:!1},{key:"kursausschreibung",scope:"Public",root:"apps/Kursausschreibung/index.html",heading:!0},{key:"kursausschreibungIntern",scope:"Public",root:"apps/Kursausschreibung/indexIntern.html",heading:!0},{key:"stellvertretung",scope:"Tutoring",root:"apps/Stellvertretung/index.html",heading:!0},{key:"reservation",scope:"NG",root:"apps/Raumreservation/index.html",heading:!0},{key:"noteneingabe",scope:"Tutoring",root:"apps/Noteneingabe/index.html",heading:!1},{key:"footer",scope:"Public",root:"",heading:!0}],navigationHome:{key:"home",label:"Home",allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/dashboard"},navigationPhotoList:{key:"photoList",get label(){return l("Fotoliste")},allowedRolesOrPermissions:["TeacherRole"],deniedInstanceIds:null,appKey:"fotoliste",appPath:"#/"},navigationInputGrades:{key:"inputGrades",get label(){return l("Noteneingabe")},allowedRolesOrPermissions:["TeacherRole"],deniedInstanceIds:null,appKey:"noteneingabe",appPath:"#/"},navigationMyProfile:{key:"myProfile",get label(){return l("Mein Profil")},allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/my-profile"},navigationMySettings:{key:"mySettings",get label(){return l("Einstellungen")},allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/my-settings"},navigation:[{get label(){return l("Unterricht")},items:[{key:"presenceControl",get label(){return l("Präsenzkontrolle")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/presence-control"},{key:"currentEvents",get label(){return l("Aktuelle Fächer")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole","ClassTeacherRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/events/current"},{key:"tests",get label(){return l("Tests und Bewertung")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/events"},{key:"substitutionsAssign",get label(){return l("Stellvertretung erfassen")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole"],deniedInstanceIds:null,appKey:"stellvertretung",appPath:"#/substitutions/assign"},{key:"substitutionsExecute",get label(){return l("Stellvertretung ausüben")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole"],deniedInstanceIds:null,appKey:"stellvertretung",appPath:"#/substitutions/execute"}]},{get label(){return l("Absenzen")},items:[{key:"openAbsences",get label(){return l("Offene Absenzen entschuldigen")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole","ClassTeacherRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/open-absences"},{key:"editAbsences",get label(){return l("Absenzen bearbeiten")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole","ClassTeacherRole","AbsenceAdministratorRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/edit-absences"},{key:"evaluateAbsences",get label(){return l("Absenzen auswerten")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole","ClassTeacherRole","AbsenceAdministratorRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/evaluate-absences"}]},{get label(){return l("Aus-/Weiterbildung")},items:[{key:"myAbsences",get label(){return l("Absenzen")},allowedRolesOrPermissions:["StudentRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/my-absences"},{key:"myGrades",get label(){return l("Noten")},allowedRolesOrPermissions:["StudentRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/my-grades"}]},{get label(){return l("Angebote")},items:[{key:"coursesAndEvents",get label(){return l("Kurse und Veranstaltungen")},allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"kursausschreibung",appPath:"#/"},{key:"internalTraining",get label(){return l("Schulinterne Weiterbildung")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole","ClassTeacherRole","AbsenceAdministratorRole","SubstituteAdministratorRole","Reservations"],deniedInstanceIds:null,appKey:"kursausschreibungIntern",appPath:"#/"},{key:"reservations",get label(){return l("Räume und Geräte reservieren")},allowedRolesOrPermissions:["Reservations"],deniedInstanceIds:null,appKey:"reservation",appPath:"#/"}]},{get label(){return l("Administration")},items:[{key:"substitutionsAdmin",get label(){return l("Stellvertretungen administrieren")},allowedRolesOrPermissions:["SubstituteAdministratorRole"],deniedInstanceIds:null,appKey:"stellvertretung",appPath:"#/substitutions/admin"},{key:"personSearch",get label(){return l("Personen und Institutionen suchen")},allowedRolesOrPermissions:["PersonRight"],deniedInstanceIds:null,appKey:"schulleiterPersonen",appPath:"#/persons"},{key:"import",get label(){return l("Daten einlesen")},allowedRolesOrPermissions:["PersonRight","RegistrationRightAusbildungSemester","RegistrationRightAusbildungKurs","RegistrationRightAusbildungModulanlass","RegistrationRightAusbildungModul","RegistrationRightAusbildungStudiengang","RegistrationRightAusbildungStudienjahrgang","RegistrationRightAusbildungVeranstaltung","RegistrationRightWeiterbildungCAS","RegistrationRightWeiterbildungCASAnlass","RegistrationRightWeiterbildungDAS","RegistrationRightWeiterbildungDASJahrgang","RegistrationRightWeiterbildungInteressent","RegistrationRightWeiterbildungKurs","RegistrationRightWeiterbildungMAS","RegistrationRightWeiterbildungMASJahrgang","RegistrationRightWeiterbildungModulanlass","RegistrationRightWeiterbildungModulbefreiung","RegistrationRightWeiterbildungSemester","RegistrationRightWeiterbildungVeranstaltung","RegistrationRightWeiterbildungEvaluationsanlass","RegistrationRightWeiterbildungFakturierung","RegistrationRightWeiterbildungMailingliste","RegistrationRightWeiterbildungPlatzangebot","RegistrationRightWeiterbildungReservation"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/import"}]}],footer:[{key:"contact",get label(){return l("Kontakt")},allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"footer",appPath:"#/"},{key:"legal",get label(){return l("Rechtliche Hinweise")},allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"footer",appPath:"#/"},{key:"imprint",get label(){return l("Impressum")},allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"footer",appPath:"#/"}]};function hn(){var t;return((t=window.eventoPortal)==null?void 0:t.settings)??{apiServer:"",oAuthServer:"",oAuthPrefix:"",oAuthClientId:"",notificationRefreshTime:30}}function D(t){const{instance_id:e,scope:n,culture_info:s,nbf:r,exp:i,substitution_id:o,holder_roles:c}=pn(t);return{instanceId:e,scope:n,locale:s,issueTime:r,expirationTime:i,substitutionId:o?parseInt(o,10):void 0,substitutionRoles:c?c.split(";"):void 0}}const dn=10*1e3;function ws(t,e,n){if(!t)return!1;const s=D(t);return s.scope===e&&s.locale===n&&!un(s)}function un(t){if(!t)return!0;const{expirationTime:e}=t;return e*1e3<Date.now()}function _s(t){if(!t)return!0;const{expirationTime:e}=t;return e*1e3-dn<Date.now()}function ks(t){const{expirationTime:e}=t;return Math.max(e*1e3-Date.now(),0)}function pn(t){const n=t.split(".")[1].replace("-","+").replace("_","/"),s=decodeURIComponent(window.atob(n).split("").map(function(r){return"%"+("00"+r.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(s)}const mt="bkdInstance",ke="bkdCodeVerifier",J="bkdRedirectUrl",Oe="bkdAccessToken",ze="bkdRefreshToken",Q="CLX.LoginToken",gn="uiCulture",fn="CLX.TokenExpire";function Ss(){return localStorage.getItem(mt)}function Ps(t){localStorage.setItem(mt,t)}function bn(t){localStorage.setItem(gn,t)}function mn(t){return localStorage.getItem(`${ze}_${t}`)}function yn(t,e){e&&localStorage.setItem(`${ze}_${t}`,e)}function Rs(t){return localStorage.getItem(`${Oe}_${t}`)}function vn(t,e){localStorage.setItem(`${Oe}_${t}`,e)}function $n(){Sn(localStorage,t=>{t&&(t.startsWith(Oe)||t.startsWith(ze))&&localStorage.removeItem(t)}),sessionStorage.removeItem(Q)}function An(){const t=sessionStorage.getItem(Q);return t?t.replace(/^"+|"+$/g,""):null}function wn(){const t=localStorage.getItem(Q);return t?t.replace(/^"+|"+$/g,""):null}function _n(t){sessionStorage.setItem(Q,`"${t}"`),localStorage.setItem(Q,`"${t}"`);let{expirationTime:e}=D(t);e=e*1e3,localStorage.setItem(fn,e.toString())}function Is(){const t=sessionStorage.getItem(ke),e=sessionStorage.getItem(J)??void 0;return sessionStorage.removeItem(J),sessionStorage.removeItem(ke),t?{redirectUri:e,codeVerifier:t}:null}function Es(t,e){sessionStorage.setItem(ke,t),e?sessionStorage.setItem(J,e):sessionStorage.removeItem(J)}function kn(){return sessionStorage.getItem(J)}function Sn(t,e){new Array(t.length).fill(void 0).map((n,s)=>t.key(s)).forEach(n=>{n&&e(n)})}class Pn{constructor(){this.state={refreshToken:null,refreshTokenPayload:null,accessToken:null,accessTokenPayload:null},this.refreshTokenSubscribers=[],this.accessTokenSubscribers=[],this.initState(),this.afterRefreshTokenUpdate(this.refreshToken,!1),this.afterAccessTokenUpdate(this.accessToken,!1)}get refreshToken(){return this.state.refreshToken}set refreshToken(e){this.state.refreshToken=e,this.afterRefreshTokenUpdate(e)}get refreshTokenPayload(){return this.state.refreshTokenPayload}get accessToken(){return this.state.accessToken}set accessToken(e){this.state.accessToken=e,this.afterAccessTokenUpdate(e)}get accessTokenPayload(){return this.state.accessTokenPayload}get authenticated(){return!!this.accessToken}get scope(){var e;return((e=this.accessTokenPayload)==null?void 0:e.scope)??null}get locale(){var e;return((e=this.accessTokenPayload)==null?void 0:e.locale)??null}get instanceId(){var e;return((e=this.accessTokenPayload)==null?void 0:e.instanceId)??null}resetAllTokens(){this.state.refreshToken=null,this.state.refreshTokenPayload=null,this.state.accessToken=null,this.state.accessTokenPayload=null,$n()}onRefreshTokenUpdate(e){return this.refreshTokenSubscribers.push(e),()=>{const n=this.refreshTokenSubscribers.findIndex(s=>s===e);this.refreshTokenSubscribers.splice(n,1)}}onAccessTokenUpdate(e){return this.accessTokenSubscribers.push(e),()=>{const n=this.accessTokenSubscribers.findIndex(s=>s===e);this.accessTokenSubscribers.splice(n,1)}}initState(){const e=An(),n=e?mn(D(e).scope):null;this.state={refreshToken:n,refreshTokenPayload:null,accessToken:e,accessTokenPayload:null}}afterRefreshTokenUpdate(e,n=!0){const s=e?D(e):null;this.state.refreshTokenPayload=s,e&&s&&n&&yn(s.scope,e),this.notifyRefreshTokenSubscribers()}afterAccessTokenUpdate(e,n=!0){const s=e?D(e):null;this.state.accessTokenPayload=s,e&&s&&n&&(vn(s.scope,e),_n(e)),this.notifyAccessTokenSubscribers()}notifyRefreshTokenSubscribers(){this.refreshTokenSubscribers.forEach(e=>e(this.refreshTokenPayload))}notifyAccessTokenSubscribers(){this.accessTokenSubscribers.forEach(e=>e(this.accessTokenPayload))}}const N=new Pn,R=hn();if(typeof(R==null?void 0:R.apiServer)!="string")throw new Error("Invalid 'apiServer' setting");async function Rn(){var n,s;const t=`${R.apiServer}/UserSettings/?expand=AccessInfo`,e=await te(t);return{roles:((n=e==null?void 0:e.AccessInfo)==null?void 0:n.Roles)??[],permissions:((s=e==null?void 0:e.AccessInfo)==null?void 0:s.Permissions)??[]}}async function In(){const t=`${R.apiServer}/Configurations/SchoolAppNavigation`,{instanceName:e,guiLanguage:n}=await te(t);return{instanceName:e,allowedLocales:n}}function Ts(){const t=`${R.apiServer}/TeacherSubstitutions/current`;return te(t)}const yt="notificationData";async function xs(){var s;const t=`${R.apiServer}/UserSettings/Cst`,{Settings:e}=await te(t),n=(s=e.find(r=>r.Key===yt))==null?void 0:s.Value;return n?JSON.parse(n):[]}function Cs(t){const e=`${R.apiServer}/UserSettings/Cst`,n={Id:"Cst",Settings:[{Key:yt,Value:JSON.stringify(t)}]};return te(e,{method:"PATCH",body:JSON.stringify(n)},!0)}async function te(t,{method:e="GET",body:n=void 0}={},s){const{accessToken:r}=N;if(!r)throw new Error("No token available");const i=new Headers({Authorization:`Bearer ${r}`,"Content-Type":"application/json"}),o=await fetch(t,{method:e,headers:i,body:n});if(!s)return o.json()}const En="modulepreload",Tn=function(t){return"/"+t},et={},xn=function(e,n,s){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(n.map(a=>{if(a=Tn(a),a in et)return;et[a]=!0;const d=a.endsWith(".css"),g=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${g}`))return;const h=document.createElement("link");if(h.rel=d?"stylesheet":En,d||(h.as="script"),h.crossOrigin="",h.href=a,c&&h.setAttribute("nonce",c),document.head.appendChild(h),d)return new Promise((p,u)=>{h.addEventListener("load",p),h.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${a}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return r.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})},vt="de-CH",Cn=["fr-CH"],Ue=["de-CH","fr-CH"],{getLocale:Ln,setLocale:On}=nn({sourceLocale:vt,targetLocales:Cn,loadLocale:t=>xn(()=>import(`/locales/${t}.js`),[])});function zn(){const t=Mn()??Kn()??Hn();return t&&Nn(t)?t:Dn()??vt}async function Un(t){await On(t),document.documentElement.lang=t}function Mn(){return new URL(location.href).searchParams.get(H)}function Nn(t){return Ue.includes(t)}function Dn(){const t=navigator.language.slice(0,2);return Ue.find(e=>e.startsWith(t))??null}function Kn(){const t=kn();return t?new URL(t).searchParams.get(H):null}function Hn(){const t=wn();return t?D(t).locale:null}const Bn=[m.navigationHome,m.navigationMyProfile,m.navigationMySettings,m.navigationPhotoList,m.navigationInputGrades,...m.footer];function Me(t,e){const n=$t(t,({key:s})=>s===e);return n||{item:m.navigationHome,group:null}}function Fn(t,e){return $t(t,n=>n.appPath!=="#/"&&e.startsWith(n.appPath))}function $t(t,e){let n=Bn.find(s=>e(s));if(n)return{item:n,group:null};for(const s of t)if(n=s.items.find(r=>e(r)),n)return{item:n,group:s};return null}function de(t){const e=m.apps.find(n=>n.key===t.appKey);if(!e)throw new Error(`Invalid app: ${t.appKey}`);return e}function jn(t,e){const{item:n}=Me(t,e);return de(n).scope}function Wn(t,e,n){return t.reduce((s,r)=>{const i=r.items.filter(o=>Vn(o,e)&&Gn(o,n));return i.length>0?[...s,{...r,items:i}]:s},[])}function Vn(t,e){return t.deniedInstanceIds===null||t.deniedInstanceIds.includes(e)}function Gn(t,e){return t.allowedRolesOrPermissions===null||t.allowedRolesOrPermissions.some(n=>e.includes(n))}function qn(t){const e=new URL(location.href);Array.from(e.searchParams.keys()).forEach(s=>{t.includes(s)||e.searchParams.delete(s)}),history.replaceState({},"",e)}function tt(t,e,n=!1){const s=new URL(location.href);s.searchParams.set(t,e),n?history.replaceState({},"",s):history.pushState({},"",s)}function Ls(t){return t.slice(Math.max(t.indexOf("#"),0))}function Os(t,e=!1){const n=new URL(location.href);n.hash=t,e?history.replaceState({},"",n):history.pushState({},"",n)}function zs(){const e=new URL(location.href).searchParams.get(B);return e?jn(m.navigation,e):de(m.navigationHome).scope}function Yn(t){const e=typeof t=="string"?Me(_.navigation,t).item:t;return Xn(e).toString()}function Xn(t){const e=new URL(location.origin+location.pathname);return e.searchParams.set(H,_.locale),e.searchParams.set(B,t.key),e.hash=t.appPath,e}var Jn=Object.defineProperty,$=(t,e,n,s)=>{for(var r=void 0,i=t.length-1,o;i>=0;i--)(o=t[i])&&(r=o(e,n,r)||r);return r&&Jn(e,n,r),r};const H="locale",B="module",Qn=[H,B];class y extends _e{constructor(){super(...arguments),this.actualAppPath=null,this.setInitialized=()=>{},this.initialized=new Promise(e=>this.setInitialized=()=>e(null))}async init(){await this.loadInstanceInfo(),await this.handleStateChange("locale"),this.subscribe(this.handleStateChange.bind(this)),N.onAccessTokenUpdate(()=>this.updateNavigation()),await this.loadRolesAndPermissions(),this.setInitialized()}subscribeLocale(e){return e(this.locale),this.subscribe((n,s)=>e(s),"locale")}subscribeInstanceName(e){return this.subscribe((n,s)=>e(s),"instanceName")}subscribeNavigationItemKey(e){return e(this.navigationItemKey),this.subscribe((n,s)=>e(s),"navigationItemKey")}subscribeNavigationItem(e){return e(this.navigationItem),this.subscribe((n,s)=>e(s),"navigationItem")}subscribeScopeAndLocale(e,n=!1){return n||e(this.app.scope,this.locale),this.subscribe(()=>e(this.app.scope,this.locale),["app","locale"])}navigate(e){this.initialized.then(()=>{qn(Qn),this.locale=e.searchParams.get(H)||Ln(),this.navigationItemKey=e.searchParams.get(B)??m.navigationHome.key,e.hash&&e.hash!=="#"&&e.hash!=="#/"&&e.hash.startsWith(this.navigationItem.appPath)&&(this.appPath=e.hash)})}async handleStateChange(e){e==="locale"&&await this.updateLocale(),(e==="locale"||e==="navigationItemKey")&&bn(this.locale),(e==="rolesAndPermissions"||e==="locale")&&this.updateNavigation(),(e==="navigationItemKey"||e==="navigation")&&(this.updateNavigationItemAndGroup(this.navigationItemKey),this.updateApp(this.navigationItem))}async updateLocale(){this.allowedLocales.length>0&&!this.allowedLocales.includes(this.locale)&&(this.locale=this.allowedLocales[0]),tt(H,this.locale);try{await Un(this.locale)}catch(e){console.warn("Unable to fetch/update locale (this may happen when interrupted by a redirect):",e)}}updateNavigation(){var n;const{instanceId:e}=N;e&&(this.navigation=Wn(m.navigation,e,((n=N.accessTokenPayload)==null?void 0:n.substitutionRoles)||this.rolesAndPermissions))}updateNavigationItemAndGroup(e){if(this.navigation.length>0){const{item:n,group:s}=Me(this.navigation,e);if(this.navigationItem=n,this.navigationGroup=s,this.actualAppPath&&this.actualAppPath!=="#"&&this.actualAppPath!=="#/"&&this.actualAppPath.startsWith(n.appPath))this.appPath=this.actualAppPath;else{const r=Fn(this.navigation,this.appPath);this.navigationItem!==(r==null?void 0:r.item)&&(this.appPath=n.appPath)}this.actualAppPath=null,this.updateHashFromAppPath(),n.key===m.navigationHome.key&&n.key!==e&&(this.navigationItemKey=n.key)}tt(B,this.navigationItemKey)}updateHashFromAppPath(){const e=new URL(document.location.href);e.hash=this.appPath,history.replaceState({},"",e)}updateApp(e){this.app=de(e)}async loadRolesAndPermissions(){if(!N.authenticated)return;const{roles:e,permissions:n}=await Rn();this.rolesAndPermissions=[...e,...n]}async loadInstanceInfo(){if(N.authenticated)try{const{instanceName:e,allowedLocales:n}=await In();this.allowedLocales=n,this.instanceName=["Evento",e].filter(Boolean).join(" | ")}catch(e){console.warn("Unable to fetch/update instance name (this may happen when interrupted by a redirect):",e)}}}$([v({value:zn()})],y.prototype,"locale");$([v({value:[]})],y.prototype,"rolesAndPermissions");$([v({value:""})],y.prototype,"instanceName");$([v({value:[]})],y.prototype,"allowedLocales");$([v({value:[]})],y.prototype,"navigation");$([cn({parameter:B}),v({value:null})],y.prototype,"navigationItemKey");$([v({value:null})],y.prototype,"navigationGroup");$([v({value:m.navigationHome})],y.prototype,"navigationItem");$([v({value:de(m.navigationHome)})],y.prototype,"app");$([v({value:m.navigationHome.appPath})],y.prototype,"appPath");const _=new y,Zn=U`
  /* Brand Colors (https://kantonbern.snowflake.ch/styleguides/1/Kanton-Bern/#Sm1) */
  --bkd-brand-white: rgba(255, 255, 255, 0.42);
  --bkd-brand-red: rgba(234, 22, 31, 1);
  --bkd-brand-black: rgba(0, 0, 0, 1);
  --bkd-brand-light-sand: rgba(252, 248, 243, 1);
  --bkd-brand-sand: rgba(250, 241, 227, 1);
  --bkd-brand-dark-sand: rgba(247, 233, 210, 1);
  --bkd-brand-sand-hover: rgba(242, 224, 195, 1);
  --bkd-brand-cappuchino: rgba(235, 211, 174, 1);

  /* Functional Foreground Colors (https://kantonbern.snowflake.ch/styleguides/1/Kanton-Bern/#Sm2) */
  --bkd-func-fg-black: rgba(0, 0, 0, 1);
  --bkd-func-fg-grey: rgba(112, 112, 112, 1);
  --bkd-func-fg-light-grey: rgba(112, 112, 112, 0.68);
  --bkd-func-fg-white: rgba(255, 255, 255, 1);

  /* Functional Background Colors (https://kantonbern.snowflake.ch/styleguides/1/Kanton-Bern/#Sm2) */
  --bkd-func-bg-anthrazit-hover: rgba(64, 64, 64, 1);
  --bkd-func-bg-anthrazit: rgba(78, 78, 78, 0.95);
  --bkd-func-bg-dark-grey: rgba(112, 112, 112, 1);
  --bkd-func-bg-line-grey: rgba(112, 112, 112, 0.5);
  --bkd-func-bg-grey: rgba(222, 222, 222, 1);
  --bkd-func-bg-light-grey: rgba(242, 242, 242, 1);
  --bkd-func-bg-very-light-grey: rgba(248, 248, 248, 1);
  --bkd-func-bg-white: rgba(255, 255, 255, 1);
  --bkd-func-bg-red: rgba(208, 16, 24, 1);
  --bkd-func-bg-green: rgba(61, 134, 8, 1);

  /* Component-specific Colors */
  --bkd-language-switcher-active-border: rgba(234, 22, 31, 0.77);
  --bkd-footer-border: rgba(238, 238, 238, 1);
  --bkd-mobile-nav-shadow: rgba(0, 0, 0, 0.16);
  --bkd-table-border: rgba(182, 182, 182, 1);

  /* Dropdowns */
  --bkd-z-index-dropdown: 1;

  /* Fonts */
  --bkd-font-family: "Roboto", sans-serif;
  --bkd-font-size-base: 16px;
  --bkd-font-weight-base: 300;
  --bkd-line-height-base: 1.625;

  /* Spacings */
  --bkd-margin-horizontal-large: 40px;
  --bkd-margin-horizontal-medium: 30px;
  --bkd-margin-horizontal-small: 20px;
`,es=U`
  /* See https://kantonbern.snowflake.ch/styleguides/1/Kanton-Bern/#Sm3 */

  /* Thin */
  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 100;
    src: url("/fonts/roboto-v30-latin-ext_latin-100.woff") format("woff");
  }

  /* Light */
  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    src: url("/fonts/roboto-v30-latin-ext_latin-300.woff") format("woff");
  }

  /* Regular */
  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    src: url("/fonts/roboto-v30-latin-ext_latin-400.woff") format("woff");
  }

  /* Medium */
  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    src: url("/fonts/roboto-v30-latin-ext_latin-500.woff") format("woff");
  }

  /* Bold */
  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    src: url("/fonts/roboto-v30-latin-ext_latin-700.woff") format("woff");
  }
`,ne=U`
  :host {
    ${Zn}
    ${es}
  }

  /* Reset */
  * {
    box-sizing: border-box;

    font-family: var(--bkd-font-family);
    font-size: var(--bkd-font-size-base);
    font-weight: var(--bkd-font-weight-base);
    line-height: var(--bkd-line-height-base);

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
  img,
  svg {
    display: block;
  }
`,Ne=U`
  :host {
    display: block;
    max-width: 800px;
  }

  .content-section {
    margin-bottom: 2.5rem;
  }

  h2 {
    font-size: 1.875rem;
    font-weight: 300;
    line-height: 2.25rem;
    margin: 0 0 0.75rem -0.125rem;
    letter-spacing: 0.01rem;
    word-spacing: 0.025rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.625rem;
    margin-bottom: 0.9375rem;
    margin-top: -0.125rem;
  }

  a {
    text-decoration: underline;
    color: var(--bkd-brand-black);
  }

  a:hover,
  a:focus {
    text-decoration: underline;
    text-decoration-color: var(--bkd-brand-red);
    color: var(--bkd-brand-black);
  }

  /* Medium screen */

  @media screen and (max-width: 1200px) {
    h2 {
      font-size: 1.5rem;
      line-height: 1.8125rem;
      margin: -0.1875rem 0 0.5rem -0.0625rem;
    }
  }

  /* Small screen */

  @media screen and (max-width: 767px) {
    .content-section {
      margin-bottom: 1.875rem;
    }

    h2 {
      font-size: 1.3125rem;
      line-height: 1.5625rem;
      margin: -0.125rem 0 0.75rem 0;
    }

    p,
    a {
      font-size: 0.9375rem;
      line-height: 1.5rem;
    }
  }
`;function Us(t){var n;const e=document.createElement("style");e.innerText=t,(n=document.querySelector("body"))==null||n.appendChild(e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ms=(t,e,n)=>{for(const s of e)if(s[0]===t)return(0,s[1])();return n==null?void 0:n()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const At={ATTRIBUTE:1,CHILD:2},wt=t=>(...e)=>({_$litDirective$:t,values:e});class _t{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,s){this._$Ct=e,this._$AM=n,this._$Ci=s}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:ts}=Bt,nt=()=>document.createComment(""),W=(t,e,n)=>{var i;const s=t._$AA.parentNode,r=e===void 0?t._$AB:e._$AA;if(n===void 0){const o=s.insertBefore(nt(),r),c=s.insertBefore(nt(),r);n=new ts(o,c,t,t.options)}else{const o=n._$AB.nextSibling,c=n._$AM,a=c!==t;if(a){let d;(i=n._$AQ)==null||i.call(n,t),n._$AM=t,n._$AP!==void 0&&(d=t._$AU)!==c._$AU&&n._$AP(d)}if(o!==r||a){let d=n._$AA;for(;d!==o;){const g=d.nextSibling;s.insertBefore(d,r),d=g}}}return n},x=(t,e,n=t)=>(t._$AI(e,n),t),ns={},ss=(t,e=ns)=>t._$AH=e,rs=t=>t._$AH,ve=t=>{var s;(s=t._$AP)==null||s.call(t,!1,!0);let e=t._$AA;const n=t._$AB.nextSibling;for(;e!==n;){const r=e.nextSibling;e.remove(),e=r}};var is=Object.getOwnPropertyDescriptor,os=(t,e,n,s)=>{for(var r=s>1?void 0:s?is(e,n):e,i=t.length-1,o;i>=0;i--)(o=t[i])&&(r=o(r)||r);return r};let Se=class extends k{render(){return I`<p>
      ${l("Lernende, Lehrpersonen und Schulmitarbeitende wenden sich bei Fehlermeldungen in Evento Web oder Fragen zu dieser Fachapplikation an die zuständige Stelle in ihrer Schule. Diese wird von der Schule kommuniziert. Im Zweifelsfall kontaktieren Sie bitte das Schulsekretariat.")}
    </p>`}};Se.styles=[ne,Ne];Se=os([Z("bkd-contact"),ee()],Se);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*as(t,e){const n=typeof e=="function";if(t!==void 0){let s=-1;for(const r of t)s>-1&&(yield n?e(s):e),s++,yield r}}function le(t){return as(t==null?void 0:t.split(`
`),I`<br />`)}var ls=Object.getOwnPropertyDescriptor,cs=(t,e,n,s)=>{for(var r=s>1?void 0:s?ls(e,n):e,i=t.length-1,o;i>=0;i--)(o=t[i])&&(r=o(r)||r);return r};let Pe=class extends k{constructor(){super(),new Le(this,_)}render(){return I`
      <div class="content-section">
        <h2>${l("Inhaltsverantwortung")}</h2>
        <p>${l("Zuständige Schule, siehe Kontakt")}</p>
      </div>

      <div class="content-section">
        <h2>${l("Fachapplikation")}</h2>
        <p>
          ${le(l(`Bildungs- und Kulturdirektion des Kantons Bern
Mittelschul- und Berufsbildungsamt
Fachbereich Informatikanwendungen
Kasernenstrasse 27
3013 Bern`))}
        </p>
        <p><a href="mailto:fbi.mba@be.ch">${l("E-Mail")}</a></p>
      </div>

      <div class="content-section">
        <h2>${l("Betrieb und Technik")}</h2>
        <p>
          ${le(l(`Bedag Informatik AG
Engehaldenstrasse 12
3012 Bern`))}
        </p>
        <p>
          <a href="https://www.bedag.ch/" target="_blank">www.bedag.ch</a>
        </p>
      </div>
    `}};Pe.styles=[ne,Ne];Pe=cs([Z("bkd-imprint"),ee()],Pe);var hs=Object.getOwnPropertyDescriptor,ds=(t,e,n,s)=>{for(var r=s>1?void 0:s?hs(e,n):e,i=t.length-1,o;i>=0;i--)(o=t[i])&&(r=o(r)||r);return r};let Re=class extends k{render(){return I`
      <div class="content-section">
        <h2>${l("Haftungsausschluss")}</h2>
        <p>
          ${l("Die Inhalte dieser Fachapplikation sind ein Datenangebot der zuständigen Schule. Obwohl diese die Daten regelmässig auf Richtigkeit und Aktualität hin prüft, lehnen wir, soweit gesetzlich zulässig, jede Haftung für unerwünschte Folgen aus dem Gebrauch dieser Daten ab.")}
        </p>
        <p>
          ${l("Diese Fachapplikation enthält Links zu Angeboten von Dritten. Sie benutzen diese Links auf eigenes Risiko. Für die Inhalte dieser anderen Webseiten übernehmen wir keine Verantwortung. Von unserer Haftung ausgeschlossen ist namentlich die Garantie für die ständige Verfügbarkeit unserer Fachapplikation sowie Schäden (z.B. wegen Verbindungsunterbruch oder schädlicher Software), die durch die Benutzung dieser Fachapplikation entstehen könnten.")}
        </p>
      </div>

      <div class="content-section">
        <h2>${l("Immaterialgüterrechte")}</h2>
        <p>
          ${l("Sichtbare Elemente (Bilder/Icons) dieser Fachapplikation können Dritten gehören. Diese Elemente dürfen deshalb grundsätzlich nicht verwendet werden. Der Kanton Bern kann deren Verwendung ausserhalb der Webseite auf Anfrage erlauben, sofern er dazu selbst berechtigt ist. Für solche Anfragen wenden Sie sich bitte an die Stelle, die für die Fachapplikation verantwortlich ist. Die Kontaktangaben finden Sie im Impressum.")}
        </p>
      </div>

      <div class="content-section">
        <h2>${l("Datenschutzerklärung")}</h2>
        <p>
          ${l("Verantwortliche Stelle im Sinne der Datenschutzgesetze, unter anderem auch der EU-Datenschutzgrundverordnung (DSGVO), ist:")}
        </p>
        <p>
          ${le(l(`Mittelschul- und Berufsbildungsamt
Kasernenstrasse 27
3013 Bern`))}
        </p>
        <p><a href="mailto:fbi.mba@be.ch">${l("E-Mail")}</a></p>
        <p>
          <a href="${l("https://www.be.ch/mba")}" target="_blank"
            >${l("https://www.be.ch/mba").replace("https://","")}</a
          >
        </p>
      </div>

      <div class="content-section">
        <h2>${l("Datenbearbeitung")}</h2>
        <p>
          ${l("Der zum Betrieb dieser Fachapplikation eingesetzte Leistungserbringer des Kantons Bern bearbeitet teilweise die IP-Adresse oder technische Angaben der Endgeräte von Personen, die diese Webseite besuchen. Der Leistungserbringer untersteht einer Datenschutzgesetzgebung mit einem dem Berner Recht gleichwertigem Datenschutzniveau. Die IP-Adresse wird verschlüsselt übertragen und vor der weiteren Bearbeitung anonymisiert.")}
        </p>
        <p>
          ${l("Mit der Benutzung dieser Fachapplikation stimmen Sie dieser Datenbearbeitung soweit erforderlich zu. Sie erfolgt im Einzelnen wie folgt:")}
        </p>
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>${l("Leistungserbringer")}</th>
                <th>${l("Bearbeitete Daten")}</th>
                <th>${l("Grund der Bearbeitung")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th style="white-space: nowrap;">
                  ${le(l(`Bedag Informatik AG
Engehaldenstrasse 12
3012 Bern`))}
                </th>
                <td>
                  ${l("IP-Adresse, technische Angaben zum Betriebssystem und Webbrowser, Referrer-URL, Hostname, Uhrzeit")}
                </td>
                <td>
                  ${l("Logdaten des Webserves des Kantons Bern zum Erkennen und Beheben von technischen Störungen und Angriffen.")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="content-section">
        <h2>${l("Cookies")}</h2>
        <p>${l("Diese Webseite setzt keine Cookies ein.")}</p>
      </div>

      <div class="content-section">
        <h2>${l("Soziale Medien")}</h2>
        <p>
          ${l("Soweit diese Fachapplikation auf soziale Medien wie YouTube verweist, geschieht das nur durch Links, nicht etwa durch das Ausführen von Programmen (Plug-ins). Mit dem Aufrufen dieser Fachapplikation werden daher keine Personendaten an die sozialen Medien übertragen.")}
        </p>
      </div>

      <div class="content-section">
        <h2>${l("Kontakt bei Fragen")}</h2>
        <p>
          ${l("Wenn Sie Fragen zum Datenschutz im Zusammenhang mit dieser Fachapplikation haben, können Sie sich an die Stelle wenden, die für die Fachapplikation verantwortlich ist. Die Kontaktangaben finden Sie im Impressum.")}
        </p>
      </div>
    `}};Re.styles=[ne,Ne,U`
      .table-container {
        overflow-x: auto;
        margin-bottom: 0.9375rem;
      }

      table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
      }

      tbody,
      tfoot,
      thead {
        border: none;
        background-color: transparent;
      }

      tfoot td,
      tfoot th,
      thead td,
      thead th,
      tbody td,
      tbody th {
        padding: 0.75rem;
        text-align: left;
      }

      th,
      th {
        font-weight: 1rem;
        font-weight: 500;
      }

      tbody td {
        font-size: 0.875rem;
        line-height: 1.125rem;
        border-bottom: 1px solid var(--bkd-table-border);
      }

      thead,
      tbody tr:last-of-type th,
      tbody tr:last-of-type td {
        border-bottom: 1px solid var(--bkd-brand-black);
      }
    `];Re=ds([Z("bkd-legal"),ee()],Re);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const st=(t,e,n)=>{const s=new Map;for(let r=e;r<=n;r++)s.set(t[r],r);return s},us=wt(class extends _t{constructor(t){if(super(t),t.type!==At.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,n){let s;n===void 0?n=e:e!==void 0&&(s=e);const r=[],i=[];let o=0;for(const c of t)r[o]=s?s(c,o):o,i[o]=n(c,o),o++;return{values:i,keys:r}}render(t,e,n){return this.dt(t,e,n).values}update(t,[e,n,s]){const r=rs(t),{values:i,keys:o}=this.dt(e,n,s);if(!Array.isArray(r))return this.ut=o,i;const c=this.ut??(this.ut=[]),a=[];let d,g,h=0,p=r.length-1,u=0,f=i.length-1;for(;h<=p&&u<=f;)if(r[h]===null)h++;else if(r[p]===null)p--;else if(c[h]===o[u])a[u]=x(r[h],i[u]),h++,u++;else if(c[p]===o[f])a[f]=x(r[p],i[f]),p--,f--;else if(c[h]===o[f])a[f]=x(r[h],i[f]),W(t,a[f+1],r[h]),h++,f--;else if(c[p]===o[u])a[u]=x(r[p],i[u]),W(t,r[h],r[p]),p--,u++;else if(d===void 0&&(d=st(o,u,f),g=st(c,h,p)),d.has(c[h]))if(d.has(c[p])){const A=g.get(o[u]),ue=A!==void 0?r[A]:null;if(ue===null){const Ke=W(t,r[h]);x(Ke,i[u]),a[u]=Ke}else a[u]=x(ue,i[u]),W(t,r[h],ue),r[A]=null;u++}else ve(r[p]),p--;else ve(r[h]),h++;for(;u<=f;){const A=W(t,a[f+1]);x(A,i[u]),a[u++]=A}for(;h<=p;){const A=r[h++];A!==null&&ve(A)}return this.ut=o,ss(t,a),E}});var ps=Object.getOwnPropertyDescriptor,gs=(t,e,n,s)=>{for(var r=s>1?void 0:s?ps(e,n):e,i=t.length-1,o;i>=0;i--)(o=t[i])&&(r=o(r)||r);return r};let Ie=class extends k{constructor(){super(),new Le(this,_)}renderFooterLink(t){const e=Yn(t);return I`
      <a
        href=${e}
        @click=${n=>{n==null||n.preventDefault(),_.navigate(new URL(e))}}
        >${t.label}</a
      >
    `}render(){return I`
      <footer role="contentinfo">
        <div class="copyright">${l("© Bildungs- und Kulturdirektion")}</div>
        <div class="footer-nav">
          ${us(m.footer,t=>t.key,this.renderFooterLink.bind(this))}
        </div>
      </footer>
    `}};Ie.styles=[ne,U`
      /* Large screen */

      :host {
        --bkd-footer-padding-horizontal: var(--bkd-margin-horizontal-large);
        --bkd-footer-padding-vertical: 18px;

        padding: var(--bkd-footer-padding-vertical)
          var(--bkd-footer-padding-horizontal);
        border-top: 1px solid var(--bkd-footer-border);
        background-color: var(--bkd-brand-light-sand);
        color: var(--bkd-func-fg-black);
      }

      footer {
        display: flex;
        justify-content: space-between;
      }

      .copyright {
        font-size: 0.8125rem;
        font-weight: 300;
        letter-spacing: 0.02rem;
        word-spacing: 0.05rem;
      }

      .footer-nav {
        display: flex;
        gap: 2.5rem;
      }

      a {
        font-size: 0.875rem;
        font-weight: 400;
        letter-spacing: 0.01rem;
        word-spacing: 0.025rem;
        line-height: 1.5;
        color: var(--bkd-func-fg-black);
        text-decoration: none;
        display: inline-block;
      }

      a:after {
        display: block;
        content: "";
        border-bottom: 2px solid var(--bkd-func-fg-black);
        transform: scaleX(0);
        transition: transform 100ms ease-in-out;
      }

      a:hover::after,
      a:focus::after,
      a:active::after {
        transform: scaleX(1);
      }

      /* Medium screen */

      @media screen and (max-width: 1200px) {
        :host {
          --bkd-footer-padding-horizontal: var(--bkd-margin-horizontal-medium);
        }

        footer {
          flex-direction: column-reverse;
          gap: 1.25rem;
        }
      }

      /* Small screen */

      @media screen and (max-width: 767px) {
        :host {
          --bkd-footer-padding-horizontal: var(--bkd-margin-horizontal-small);
        }
      }
    `];Ie=gs([Z("bkd-footer"),ee()],Ie);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fs=wt(class extends _t{constructor(t){var e;if(super(t),t.type!==At.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var s,r;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in e)e[i]&&!((s=this.nt)!=null&&s.has(i))&&this.st.add(i);return this.render(e)}const n=t.element.classList;for(const i of this.st)i in e||(n.remove(i),this.st.delete(i));for(const i in e){const o=!!e[i];o===this.st.has(i)||(r=this.nt)!=null&&r.has(i)||(o?(n.add(i),this.st.add(i)):(n.remove(i),this.st.delete(i)))}return E}});var bs=Object.getOwnPropertyDescriptor,ms=(t,e,n,s)=>{for(var r=s>1?void 0:s?bs(e,n):e,i=t.length-1,o;i>=0;i--)(o=t[i])&&(r=o(r)||r);return r};let Ee=class extends k{constructor(){super(),new Le(this,_)}handleLocaleChange(t,e){t.preventDefault(),_.locale=e}render(){return I`<ul>
      ${Ue.map(t=>I`<li>
            <a
              href="#"
              class=${fs({active:t===_.locale})}
              aria-current=${t===_.locale}
              @click=${e=>this.handleLocaleChange(e,t)}
            >
              ${t.slice(0,2)}
            </a>
          </li>`)}
    </ul>`}};Ee.styles=[ne,U`
      ul {
        display: flex;
        align-items: baseline;
        margin: 0;
        padding: 0;
        list-style: none;
      }

      li {
        display: flex;
        align-items: baseline;
        margin-left: 0.75rem;
      }

      li + li:before {
        content: "|";
        margin-right: 0.75rem;
      }

      a {
        display: block;
        font-size: 0.875rem;
        font-weight: 400;
        letter-spacing: 0.025rem;
        text-decoration: none;
        text-transform: uppercase;
        color: var(--bkd-func-fg-black);
      }

      a:after {
        display: block;
        content: "";
        border-bottom: 2px solid var(--bkd-func-fg-black);
        transform: scaleX(0);
        transition: transform 100ms ease-in-out;
      }

      a.active {
        border-bottom: 2px solid var(--bkd-language-switcher-active-border);
      }

      a:hover::after,
      a:focus::after,
      a:active::after {
        transform: scaleX(1);
      }

      a.active:hover::after,
      a.active:focus::after,
      a.active:active::after {
        transform: scaleX(0);
      }
    `];Ee=ms([Z("bkd-language-switcher"),ee()],Ee);export{l as A,As as B,Z as C,ee as D,b as E,At as F,E as G,Me as H,fs as I,us as J,Cs as K,H as L,xs as M,Ts as N,zn as O,zs as P,Us as Q,es as R,Le as S,dn as T,Zn as U,Os as V,Ls as W,Fn as X,de as Y,Rs as a,mn as b,D as c,hn as d,Is as e,ot as f,ks as g,Ss as h,_s as i,un as j,Yn as k,m as l,ws as m,Es as n,wt as o,_ as p,_t as q,ss as r,Ps as s,N as t,$e as u,ne as v,U as w,k as x,I as y,Ms as z};
