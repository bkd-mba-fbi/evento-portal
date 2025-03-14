(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ie=globalThis,Te=ie.ShadowRoot&&(ie.ShadyCSS===void 0||ie.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,xe=Symbol(),je=new WeakMap;let at=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==xe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Te&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=je.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&je.set(t,e))}return e}toString(){return this.cssText}};const xt=n=>new at(typeof n=="string"?n:n+"",void 0,xe),M=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((s,r,i)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+n[i+1],n[0]);return new at(t,n,xe)},Lt=(n,e)=>{if(Te)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),r=ie.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=t.cssText,n.appendChild(s)}},Fe=Te?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return xt(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ct,defineProperty:Ot,getOwnPropertyDescriptor:zt,getOwnPropertyNames:Ut,getOwnPropertySymbols:Mt,getPrototypeOf:Nt}=Object,P=globalThis,We=P.trustedTypes,Dt=We?We.emptyScript:"",pe=P.reactiveElementPolyfillSupport,V=(n,e)=>n,$e={toAttribute(n,e){switch(e){case Boolean:n=n?Dt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},lt=(n,e)=>!Ct(n,e),Ve={attribute:!0,type:String,converter:$e,reflect:!1,hasChanged:lt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),P.litPropertyMetadata??(P.litPropertyMetadata=new WeakMap);class N extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ve){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(e,s,t);r!==void 0&&Ot(this.prototype,e,r)}}static getPropertyDescriptor(e,t,s){const{get:r,set:i}=zt(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return r==null?void 0:r.call(this)},set(o){const c=r==null?void 0:r.call(this);i.call(this,o),this.requestUpdate(e,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ve}static _$Ei(){if(this.hasOwnProperty(V("elementProperties")))return;const e=Nt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(V("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(V("properties"))){const t=this.properties,s=[...Ut(t),...Mt(t)];for(const r of s)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,r]of t)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const r=this._$Eu(t,s);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const r of s)t.unshift(Fe(r))}else e!==void 0&&t.push(Fe(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Lt(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EC(e,t){var i;const s=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,s);if(r!==void 0&&s.reflect===!0){const o=(((i=s.converter)==null?void 0:i.toAttribute)!==void 0?s.converter:$e).toAttribute(t,s.type);this._$Em=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,t){var i;const s=this.constructor,r=s._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const o=s.getPropertyOptions(r),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)==null?void 0:i.fromAttribute)!==void 0?o.converter:$e;this._$Em=r,this[r]=c.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,s){if(e!==void 0){if(s??(s=this.constructor.getPropertyOptions(e)),!(s.hasChanged??lt)(this[e],t))return;this.P(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,s){this._$AL.has(e)||this._$AL.set(e,t),s.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,o]of r)o.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach(r=>{var i;return(i=r.hostUpdate)==null?void 0:i.call(r)}),this.update(t)):this._$EU()}catch(r){throw e=!1,this._$EU(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}N.elementStyles=[],N.shadowRootOptions={mode:"open"},N[V("elementProperties")]=new Map,N[V("finalized")]=new Map,pe==null||pe({ReactiveElement:N}),(P.reactiveElementVersions??(P.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=globalThis,oe=G.trustedTypes,Ge=oe?oe.createPolicy("lit-html",{createHTML:n=>n}):void 0,Le="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,Ce="?"+_,Kt=`<${Ce}>`,z=document,Y=()=>z.createComment(""),q=n=>n===null||typeof n!="object"&&typeof n!="function",Oe=Array.isArray,ct=n=>Oe(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",ge=`[ 	
\f\r]`,F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ye=/-->/g,qe=/>/g,T=RegExp(`>|${ge}(?:([^\\s"'>=/]+)(${ge}*=${ge}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Xe=/'/g,Je=/"/g,ht=/^(?:script|style|textarea|title)$/i,Ht=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),E=Ht(1),I=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),Qe=new WeakMap,C=z.createTreeWalker(z,129);function dt(n,e){if(!Oe(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ge!==void 0?Ge.createHTML(e):e}const ut=(n,e)=>{const t=n.length-1,s=[];let r,i=e===2?"<svg>":e===3?"<math>":"",o=F;for(let c=0;c<t;c++){const a=n[c];let d,g,h=-1,p=0;for(;p<a.length&&(o.lastIndex=p,g=o.exec(a),g!==null);)p=o.lastIndex,o===F?g[1]==="!--"?o=Ye:g[1]!==void 0?o=qe:g[2]!==void 0?(ht.test(g[2])&&(r=RegExp("</"+g[2],"g")),o=T):g[3]!==void 0&&(o=T):o===T?g[0]===">"?(o=r??F,h=-1):g[1]===void 0?h=-2:(h=o.lastIndex-g[2].length,d=g[1],o=g[3]===void 0?T:g[3]==='"'?Je:Xe):o===Je||o===Xe?o=T:o===Ye||o===qe?o=F:(o=T,r=void 0);const u=o===T&&n[c+1].startsWith("/>")?" ":"";i+=o===F?a+Kt:h>=0?(s.push(d),a.slice(0,h)+Le+a.slice(h)+_+u):a+_+(h===-2?c:u)}return[dt(n,i+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class X{constructor({strings:e,_$litType$:t},s){let r;this.parts=[];let i=0,o=0;const c=e.length-1,a=this.parts,[d,g]=ut(e,t);if(this.el=X.createElement(d,s),C.currentNode=this.el.content,t===2||t===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(r=C.nextNode())!==null&&a.length<c;){if(r.nodeType===1){if(r.hasAttributes())for(const h of r.getAttributeNames())if(h.endsWith(Le)){const p=g[o++],u=r.getAttribute(h).split(_),f=/([.?@])?(.*)/.exec(p);a.push({type:1,index:i,name:f[2],strings:u,ctor:f[1]==="."?gt:f[1]==="?"?ft:f[1]==="@"?bt:Z}),r.removeAttribute(h)}else h.startsWith(_)&&(a.push({type:6,index:i}),r.removeAttribute(h));if(ht.test(r.tagName)){const h=r.textContent.split(_),p=h.length-1;if(p>0){r.textContent=oe?oe.emptyScript:"";for(let u=0;u<p;u++)r.append(h[u],Y()),C.nextNode(),a.push({type:2,index:++i});r.append(h[p],Y())}}}else if(r.nodeType===8)if(r.data===Ce)a.push({type:2,index:i});else{let h=-1;for(;(h=r.data.indexOf(_,h+1))!==-1;)a.push({type:7,index:i}),h+=_.length-1}i++}}static createElement(e,t){const s=z.createElement("template");return s.innerHTML=e,s}}function U(n,e,t=n,s){var o,c;if(e===I)return e;let r=s!==void 0?(o=t._$Co)==null?void 0:o[s]:t._$Cl;const i=q(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==i&&((c=r==null?void 0:r._$AO)==null||c.call(r,!1),i===void 0?r=void 0:(r=new i(n),r._$AT(n,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=r:t._$Cl=r),r!==void 0&&(e=U(n,r._$AS(n,e.values),r,s)),e}let pt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,r=((e==null?void 0:e.creationScope)??z).importNode(t,!0);C.currentNode=r;let i=C.nextNode(),o=0,c=0,a=s[0];for(;a!==void 0;){if(o===a.index){let d;a.type===2?d=new j(i,i.nextSibling,this,e):a.type===1?d=new a.ctor(i,a.name,a.strings,this,e):a.type===6&&(d=new mt(i,this,e)),this._$AV.push(d),a=s[++c]}o!==(a==null?void 0:a.index)&&(i=C.nextNode(),o++)}return C.currentNode=z,r}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}};class j{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,r){this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=U(this,e,t),q(e)?e===b||e==null||e===""?(this._$AH!==b&&this._$AR(),this._$AH=b):e!==this._$AH&&e!==I&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ct(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==b&&q(this._$AH)?this._$AA.nextSibling.data=e:this.T(z.createTextNode(e)),this._$AH=e}$(e){var i;const{values:t,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=X.createElement(dt(s.h,s.h[0]),this.options)),s);if(((i=this._$AH)==null?void 0:i._$AD)===r)this._$AH.p(t);else{const o=new pt(r,this),c=o.u(this.options);o.p(t),this.T(c),this._$AH=o}}_$AC(e){let t=Qe.get(e.strings);return t===void 0&&Qe.set(e.strings,t=new X(e)),t}k(e){Oe(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,r=0;for(const i of e)r===t.length?t.push(s=new j(this.O(Y()),this.O(Y()),this,this.options)):s=t[r],s._$AI(i),r++;r<t.length&&(this._$AR(s&&s._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,r,i){this.type=1,this._$AH=b,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=b}_$AI(e,t=this,s,r){const i=this.strings;let o=!1;if(i===void 0)e=U(this,e,t,0),o=!q(e)||e!==this._$AH&&e!==I,o&&(this._$AH=e);else{const c=e;let a,d;for(e=i[0],a=0;a<i.length-1;a++)d=U(this,c[s+a],t,a),d===I&&(d=this._$AH[a]),o||(o=!q(d)||d!==this._$AH[a]),d===b?e=b:e!==b&&(e+=(d??"")+i[a+1]),this._$AH[a]=d}o&&!r&&this.j(e)}j(e){e===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class gt extends Z{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===b?void 0:e}}class ft extends Z{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==b)}}class bt extends Z{constructor(e,t,s,r,i){super(e,t,s,r,i),this.type=5}_$AI(e,t=this){if((e=U(this,e,t,0)??b)===I)return;const s=this._$AH,r=e===b&&s!==b||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,i=e!==b&&(s===b||r);r&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class mt{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){U(this,e)}}const Bt={M:Le,P:_,A:Ce,C:1,L:ut,R:pt,D:ct,V:U,I:j,H:Z,N:ft,U:bt,B:gt,F:mt},fe=G.litHtmlPolyfillSupport;fe==null||fe(X,j),(G.litHtmlVersions??(G.litHtmlVersions=[])).push("3.2.1");const jt=(n,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let r=s._$litPart$;if(r===void 0){const i=(t==null?void 0:t.renderBefore)??null;s._$litPart$=r=new j(e.insertBefore(Y(),i),i,void 0,t??{})}return r._$AI(n),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let S=class extends N{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=jt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return I}};var ot;S._$litElement$=!0,S.finalized=!0,(ot=globalThis.litElementHydrateSupport)==null||ot.call(globalThis,{LitElement:S});const be=globalThis.litElementPolyfillSupport;be==null||be({LitElement:S});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ee=n=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(n,e)}):customElements.define(n,e)};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ps(n,e,t){return n?e(n):t==null?void 0:t(n)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ae="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ft=n=>typeof n!="string"&&"strTag"in n,vt=(n,e,t)=>{let s=n[0];for(let r=1;r<n.length;r++)s+=e[t?t[r-1]:r-1],s+=n[r];return s};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yt=n=>Ft(n)?vt(n.strings,n.values):n;let l=yt,Ze=!1;function Wt(n){if(Ze)throw new Error("lit-localize can only be configured once");l=n,Ze=!0}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Vt{constructor(e){this.__litLocalizeEventHandler=t=>{t.detail.status==="ready"&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(Ae,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(Ae,this.__litLocalizeEventHandler)}}const Gt=n=>n.addController(new Vt(n)),Yt=Gt;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const te=()=>(n,e)=>(n.addInitializer(Yt),n);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class $t{constructor(){this.settled=!1,this.promise=new Promise((e,t)=>{this._resolve=e,this._reject=t})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */const w=[];for(let n=0;n<256;n++)w[n]=(n>>4&15).toString(16)+(n&15).toString(16);function qt(n){let e=0,t=8997,s=0,r=33826,i=0,o=40164,c=0,a=52210;for(let d=0;d<n.length;d++)t^=n.charCodeAt(d),e=t*435,s=r*435,i=o*435,c=a*435,i+=t<<8,c+=r<<8,s+=e>>>16,t=e&65535,i+=s>>>16,r=s&65535,a=c+(i>>>16)&65535,o=i&65535;return w[a>>8]+w[a&255]+w[o>>8]+w[o&255]+w[r>>8]+w[r&255]+w[t>>8]+w[t&255]}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xt="",Jt="h",Qt="s";function Zt(n,e){return(e?Jt:Qt)+qt(typeof n=="string"?n:n.join(Xt))}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const et=new WeakMap,tt=new Map;function en(n,e,t){if(n){const s=(t==null?void 0:t.id)??tn(e),r=n[s];if(r){if(typeof r=="string")return r;if("strTag"in r)return vt(r.strings,e.values,r.values);{let i=et.get(r);return i===void 0&&(i=r.values,et.set(r,i)),{...r,values:i.map(o=>e.values[o])}}}}return yt(e)}function tn(n){const e=typeof n=="string"?n:n.strings;let t=tt.get(e);return t===void 0&&(t=Zt(e,typeof n!="string"&&!("strTag"in n)),tt.set(e,t)),t}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function me(n){window.dispatchEvent(new CustomEvent(Ae,{detail:n}))}let ae="",ve,At,le,we,wt,L=new $t;L.resolve();let re=0;const nn=n=>(Wt((e,t)=>en(wt,e,t)),ae=At=n.sourceLocale,le=new Set(n.targetLocales),le.add(n.sourceLocale),we=n.loadLocale,{getLocale:sn,setLocale:rn}),sn=()=>ae,rn=n=>{if(n===(ve??ae))return L.promise;if(!le||!we)throw new Error("Internal error");if(!le.has(n))throw new Error("Invalid locale code");re++;const e=re;return ve=n,L.settled&&(L=new $t),me({status:"loading",loadingLocale:n}),(n===At?Promise.resolve({templates:void 0}):we(n)).then(s=>{re===e&&(ae=n,ve=void 0,wt=s.templates,me({status:"ready",readyLocale:n}),L.resolve())},s=>{re===e&&(me({status:"error",errorLocale:n,errorMessage:s.toString()}),L.reject(s))}),L.promise};function _t(n){return typeof n=="function"?n():n}const he=class he extends Event{constructor(e,t,s){super(he.eventName,{cancelable:!1}),this.key=e,this.value=t,this.state=s}};he.eventName="lit-state-changed";let O=he;const on=(n,e)=>e!==n&&(e===e||n===n),He=class He extends EventTarget{static initPropertyMap(){this.propertyMap||(this.propertyMap=new Map)}get propertyMap(){return this.constructor.propertyMap}get stateValue(){return Object.fromEntries([...this.propertyMap].map(([e])=>[e,this[e]]))}constructor(){super(),this.hookMap=new Map,this.constructor.finalize(),this.propertyMap&&[...this.propertyMap].forEach(([e,t])=>{if(t.initialValue!==void 0){const s=_t(t.initialValue);this[e]=s,t.value=s}})}static finalize(){if(this.finalized)return!1;this.finalized=!0;const e=Object.keys(this.properties||{});for(const t of e)this.createProperty(t,this.properties[t]);return!0}static createProperty(e,t){this.finalize();const s=typeof e=="symbol"?Symbol():`__${e}`,r=this.getPropertyDescriptor(String(e),s,t);Object.defineProperty(this.prototype,e,r)}static getPropertyDescriptor(e,t,s){const r=(s==null?void 0:s.hasChanged)||on;return{get(){return this[t]},set(i){const o=this[e];this[t]=i,r(i,o)===!0&&this.dispatchStateEvent(e,i,this)},configurable:!0,enumerable:!0}}reset(){this.hookMap.forEach(e=>e.reset()),[...this.propertyMap].filter(([e,t])=>!(t.skipReset===!0||t.resetValue===void 0)).forEach(([e,t])=>{this[e]=t.resetValue})}subscribe(e,t,s){t&&!Array.isArray(t)&&(t=[t]);const r=i=>{(!t||t.includes(i.key))&&e(i.key,i.value,this)};return this.addEventListener(O.eventName,r,s),()=>this.removeEventListener(O.eventName,r)}dispatchStateEvent(e,t,s){this.dispatchEvent(new O(e,t,s))}};He.finalized=!1;let _e=He;class ze{constructor(e,t,s){this.host=e,this.state=t,this.callback=s||(()=>this.host.requestUpdate()),this.host.addController(this)}hostConnected(){this.state.addEventListener(O.eventName,this.callback),this.callback()}hostDisconnected(){this.state.removeEventListener(O.eventName,this.callback)}}function y(n){return(e,t)=>{if(Object.getOwnPropertyDescriptor(e,t))throw new Error("@property must be called before all state decorators");const s=e.constructor;s.initPropertyMap();const r=e.hasOwnProperty(t);return s.propertyMap.set(t,{...n,initialValue:n==null?void 0:n.value,resetValue:n==null?void 0:n.value}),s.createProperty(t,n),r?Object.getOwnPropertyDescriptor(e,t):void 0}}function an(n,e){if(n!==null&&(e===Boolean||e===Number||e===Array||e===Object))try{n=JSON.parse(n)}catch{console.warn("cannot parse value",n)}return n}const ln=new URL(location.href);function cn(n){return(e,t)=>{if(!Object.getOwnPropertyDescriptor(e,t))throw new Error("@local-storage decorator need to be called after @property");const r=e.constructor,i=`${(n==null?void 0:n.parameter)||String(t)}`,o=r.propertyMap.get(t),c=o==null?void 0:o.type;if(o){const a=o.initialValue,d=ln.searchParams.get(i);d!==null&&(o.skipAsync=!0),o.initialValue=()=>an(d,c)??_t(a),r.propertyMap.set(t,{...o,...n});return}}}const m={apps:[{key:"schulverwaltung",scope:"Tutoring",root:"apps/webapp-schulverwaltung/index.html",heading:!1},{key:"anmeldedetailsEinlesen",scope:"NG",root:"apps/EmberApps/AnmeldedetailsEinlesen/index.html",heading:!0},{key:"schulleiterPersonen",scope:"NG",root:"apps/EmberApps/SchulleiterPersonen/index.html",heading:!0},{key:"fotoliste",scope:"Tutoring",root:"apps/EmberApps/Fotoliste/index.html",heading:!1},{key:"kursausschreibung",scope:"Public",root:"apps/Kursausschreibung/index.html",heading:!0},{key:"kursausschreibungIntern",scope:"Public",root:"apps/Kursausschreibung/indexIntern.html",heading:!0},{key:"stellvertretung",scope:"Tutoring",root:"apps/Stellvertretung/index.html",heading:!0},{key:"reservation",scope:"NG",root:"apps/Raumreservation/index.html",heading:!0},{key:"noteneingabe",scope:"Tutoring",root:"apps/Noteneingabe/index.html",heading:!1},{key:"footer",scope:"Public",root:"",heading:!0}],navigationHome:{key:"home",label:"Home",allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/dashboard"},navigationPhotoList:{key:"photoList",get label(){return l("Fotoliste")},allowedRolesOrPermissions:["TeacherRole"],deniedInstanceIds:null,appKey:"fotoliste",appPath:"#/"},navigationInputGrades:{key:"inputGrades",get label(){return l("Noteneingabe")},allowedRolesOrPermissions:["TeacherRole"],deniedInstanceIds:null,appKey:"noteneingabe",appPath:"#/"},navigationMyProfile:{key:"myProfile",get label(){return l("Mein Profil")},allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/my-profile"},navigationMySettings:{key:"mySettings",get label(){return l("Einstellungen")},allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/my-settings"},navigation:[{get label(){return l("Unterricht")},items:[{key:"presenceControl",get label(){return l("Präsenzkontrolle")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/presence-control"},{key:"currentEvents",get label(){return l("Aktuelle Fächer")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole","ClassTeacherRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/events/current"},{key:"tests",get label(){return l("Tests und Bewertung")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/events"},{key:"substitutionsAssign",get label(){return l("Stellvertretung erfassen")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole"],deniedInstanceIds:null,appKey:"stellvertretung",appPath:"#/substitutions/assign"},{key:"substitutionsExecute",get label(){return l("Stellvertretung ausüben")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole"],deniedInstanceIds:null,appKey:"stellvertretung",appPath:"#/substitutions/execute"}]},{get label(){return l("Absenzen")},items:[{key:"openAbsences",get label(){return l("Offene Absenzen entschuldigen")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole","ClassTeacherRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/open-absences"},{key:"editAbsences",get label(){return l("Absenzen bearbeiten")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole","ClassTeacherRole","AbsenceAdministratorRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/edit-absences"},{key:"evaluateAbsences",get label(){return l("Absenzen auswerten")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole","ClassTeacherRole","AbsenceAdministratorRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/evaluate-absences"}]},{get label(){return l("Aus-/Weiterbildung")},items:[{key:"myAbsences",get label(){return l("Absenzen")},allowedRolesOrPermissions:["StudentRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/my-absences"},{key:"myGrades",get label(){return l("Noten")},allowedRolesOrPermissions:["StudentRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/my-grades"}]},{get label(){return l("Angebote")},items:[{key:"coursesAndEvents",get label(){return l("Kurse und Veranstaltungen")},allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"kursausschreibung",appPath:"#/"},{key:"internalTraining",get label(){return l("Schulinterne Weiterbildung")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole","ClassTeacherRole","AbsenceAdministratorRole","SubstituteAdministratorRole","Reservations"],deniedInstanceIds:null,appKey:"kursausschreibungIntern",appPath:"#/"},{key:"reservations",get label(){return l("Räume und Geräte reservieren")},allowedRolesOrPermissions:["Reservations"],deniedInstanceIds:null,appKey:"reservation",appPath:"#/"}]},{get label(){return l("Administration")},items:[{key:"substitutionsAdmin",get label(){return l("Stellvertretungen administrieren")},allowedRolesOrPermissions:["SubstituteAdministratorRole"],deniedInstanceIds:null,appKey:"stellvertretung",appPath:"#/substitutions/admin"},{key:"personSearch",get label(){return l("Personen und Institutionen suchen")},allowedRolesOrPermissions:["PersonRight"],deniedInstanceIds:null,appKey:"schulleiterPersonen",appPath:"#/persons"},{key:"import",get label(){return l("Daten einlesen")},allowedRolesOrPermissions:["PersonRight","RegistrationRightAusbildungSemester","RegistrationRightAusbildungKurs","RegistrationRightAusbildungModulanlass","RegistrationRightAusbildungModul","RegistrationRightAusbildungStudiengang","RegistrationRightAusbildungStudienjahrgang","RegistrationRightAusbildungVeranstaltung","RegistrationRightWeiterbildungCAS","RegistrationRightWeiterbildungCASAnlass","RegistrationRightWeiterbildungDAS","RegistrationRightWeiterbildungDASJahrgang","RegistrationRightWeiterbildungInteressent","RegistrationRightWeiterbildungKurs","RegistrationRightWeiterbildungMAS","RegistrationRightWeiterbildungMASJahrgang","RegistrationRightWeiterbildungModulanlass","RegistrationRightWeiterbildungModulbefreiung","RegistrationRightWeiterbildungSemester","RegistrationRightWeiterbildungVeranstaltung","RegistrationRightWeiterbildungEvaluationsanlass","RegistrationRightWeiterbildungFakturierung","RegistrationRightWeiterbildungMailingliste","RegistrationRightWeiterbildungPlatzangebot","RegistrationRightWeiterbildungReservation"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/import"}]}],footer:[{key:"contact",get label(){return l("Kontakt")},allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"footer",appPath:"#/"},{key:"legal",get label(){return l("Rechtliche Hinweise")},allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"footer",appPath:"#/"},{key:"imprint",get label(){return l("Impressum")},allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"footer",appPath:"#/"}]};function hn(){var n;return((n=window.eventoPortal)==null?void 0:n.settings)??{apiServer:"",oAuthServer:"",oAuthPrefix:"",oAuthClientId:"",notificationRefreshTime:30}}function K(n){const{instance_id:e,scope:t,culture_info:s,nbf:r,exp:i,substitution_id:o,holder_roles:c}=pn(n);return{instanceId:e,scope:t,locale:s,issueTime:r,expirationTime:i,substitutionId:o?parseInt(o,10):void 0,substitutionRoles:c?c.split(";"):void 0}}const dn=10*1e3;function Rs(n,e,t){if(!n)return!1;const s=K(n);return s.scope===e&&s.locale===t&&!un(s)}function un(n){if(!n)return!0;const{expirationTime:e}=n;return e*1e3<Date.now()}function Es(n){if(!n)return!0;const{expirationTime:e}=n;return e*1e3-dn<Date.now()}function Is(n){const{expirationTime:e}=n;return Math.max(e*1e3-Date.now(),0)}function pn(n){const t=n.split(".")[1].replace("-","+").replace("_","/"),s=decodeURIComponent(window.atob(t).split("").map(function(r){return"%"+("00"+r.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(s)}const kt="bkdInstance",ke="bkdCodeVerifier",J="bkdRedirectUrl",Ue="bkdAccessToken",Me="bkdRefreshToken",Q="CLX.LoginToken",gn="uiCulture",fn="CLX.TokenExpire";function Ts(){return localStorage.getItem(kt)}function xs(n){localStorage.setItem(kt,n)}function bn(n){localStorage.setItem(gn,n)}function mn(n){return localStorage.getItem(`${Me}_${n}`)}function vn(n,e){e&&localStorage.setItem(`${Me}_${n}`,e)}function Ls(n){return localStorage.getItem(`${Ue}_${n}`)}function yn(n,e){localStorage.setItem(`${Ue}_${n}`,e)}function $n(){Sn(localStorage,n=>{n&&(n.startsWith(Ue)||n.startsWith(Me))&&localStorage.removeItem(n)}),sessionStorage.removeItem(Q)}function An(){const n=sessionStorage.getItem(Q);return n?n.replace(/^"+|"+$/g,""):null}function wn(){const n=localStorage.getItem(Q);return n?n.replace(/^"+|"+$/g,""):null}function _n(n){sessionStorage.setItem(Q,`"${n}"`),localStorage.setItem(Q,`"${n}"`);let{expirationTime:e}=K(n);e=e*1e3,localStorage.setItem(fn,e.toString())}function Cs(){const n=sessionStorage.getItem(ke),e=sessionStorage.getItem(J)??void 0;return sessionStorage.removeItem(J),sessionStorage.removeItem(ke),n?{redirectUri:e,codeVerifier:n}:null}function Os(n,e){sessionStorage.setItem(ke,n),e?sessionStorage.setItem(J,e):sessionStorage.removeItem(J)}function kn(){return sessionStorage.getItem(J)}function Sn(n,e){new Array(n.length).fill(void 0).map((t,s)=>n.key(s)).forEach(t=>{t&&e(t)})}class Pn{constructor(){this.state={refreshToken:null,refreshTokenPayload:null,accessToken:null,accessTokenPayload:null},this.refreshTokenSubscribers=[],this.accessTokenSubscribers=[],this.initState(),this.afterRefreshTokenUpdate(this.refreshToken,!1),this.afterAccessTokenUpdate(this.accessToken,!1)}get refreshToken(){return this.state.refreshToken}set refreshToken(e){this.state.refreshToken=e,this.afterRefreshTokenUpdate(e)}get refreshTokenPayload(){return this.state.refreshTokenPayload}get accessToken(){return this.state.accessToken}set accessToken(e){this.state.accessToken=e,this.afterAccessTokenUpdate(e)}get accessTokenPayload(){return this.state.accessTokenPayload}get authenticated(){return!!this.accessToken}get scope(){var e;return((e=this.accessTokenPayload)==null?void 0:e.scope)??null}get locale(){var e;return((e=this.accessTokenPayload)==null?void 0:e.locale)??null}get instanceId(){var e;return((e=this.accessTokenPayload)==null?void 0:e.instanceId)??null}resetAllTokens(){this.state.refreshToken=null,this.state.refreshTokenPayload=null,this.state.accessToken=null,this.state.accessTokenPayload=null,$n()}onRefreshTokenUpdate(e){return this.refreshTokenSubscribers.push(e),()=>{const t=this.refreshTokenSubscribers.findIndex(s=>s===e);this.refreshTokenSubscribers.splice(t,1)}}onAccessTokenUpdate(e){return this.accessTokenSubscribers.push(e),()=>{const t=this.accessTokenSubscribers.findIndex(s=>s===e);this.accessTokenSubscribers.splice(t,1)}}initState(){const e=An(),t=e?mn(K(e).scope):null;this.state={refreshToken:t,refreshTokenPayload:null,accessToken:e,accessTokenPayload:null}}afterRefreshTokenUpdate(e,t=!0){const s=e?K(e):null;this.state.refreshTokenPayload=s,e&&s&&t&&vn(s.scope,e),this.notifyRefreshTokenSubscribers()}afterAccessTokenUpdate(e,t=!0){const s=e?K(e):null;this.state.accessTokenPayload=s,e&&s&&t&&(yn(s.scope,e),_n(e)),this.notifyAccessTokenSubscribers()}notifyRefreshTokenSubscribers(){this.refreshTokenSubscribers.forEach(e=>e(this.refreshTokenPayload))}notifyAccessTokenSubscribers(){this.accessTokenSubscribers.forEach(e=>e(this.accessTokenPayload))}}const D=new Pn,R=hn();if(typeof(R==null?void 0:R.apiServer)!="string")throw new Error("Invalid 'apiServer' setting");async function Rn(){var t,s;const n=`${R.apiServer}/UserSettings/?expand=AccessInfo`,e=await ne(n);return{roles:((t=e==null?void 0:e.AccessInfo)==null?void 0:t.Roles)??[],permissions:((s=e==null?void 0:e.AccessInfo)==null?void 0:s.Permissions)??[]}}async function En(){const n=`${R.apiServer}/Configurations/SchoolAppNavigation`,{instanceName:e,guiLanguage:t}=await ne(n);return{instanceName:e,allowedLocales:t}}function zs(){const n=`${R.apiServer}/TeacherSubstitutions/current`;return ne(n)}const St="notificationData";async function Us(){var s;const n=`${R.apiServer}/UserSettings/Cst`,{Settings:e}=await ne(n),t=(s=e.find(r=>r.Key===St))==null?void 0:s.Value;return t?JSON.parse(t):[]}function Ms(n){const e=`${R.apiServer}/UserSettings/Cst`,t={Id:"Cst",Settings:[{Key:St,Value:JSON.stringify(n)}]};return ne(e,{method:"PATCH",body:JSON.stringify(t)},!0)}async function ne(n,{method:e="GET",body:t=void 0}={},s){const{accessToken:r}=D;if(!r)throw new Error("No token available");const i=new Headers({Authorization:`Bearer ${r}`,"Content-Type":"application/json"}),o=await fetch(n,{method:e,headers:i,body:t});if(!s)return o.json()}const In="modulepreload",Tn=function(n){return"/"+n},nt={},xn=function(e,t,s){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(t.map(a=>{if(a=Tn(a),a in nt)return;nt[a]=!0;const d=a.endsWith(".css"),g=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${g}`))return;const h=document.createElement("link");if(h.rel=d?"stylesheet":In,d||(h.as="script"),h.crossOrigin="",h.href=a,c&&h.setAttribute("nonce",c),document.head.appendChild(h),d)return new Promise((p,u)=>{h.addEventListener("load",p),h.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${a}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return r.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})},Pt="de-CH",Ln=["fr-CH"],Ne=["de-CH","fr-CH"],{getLocale:Cn,setLocale:On}=nn({sourceLocale:Pt,targetLocales:Ln,loadLocale:n=>xn(()=>import(`/locales/${n}.js`),[])});function zn(){const n=Mn()??Kn()??Hn();return n&&Nn(n)?n:Dn()??Pt}async function Un(n){await On(n),document.documentElement.lang=n}function Mn(){return new URL(location.href).searchParams.get(H)}function Nn(n){return Ne.includes(n)}function Dn(){const n=navigator.language.slice(0,2);return Ne.find(e=>e.startsWith(n))??null}function Kn(){const n=kn();return n?new URL(n).searchParams.get(H):null}function Hn(){const n=wn();return n?K(n).locale:null}const Bn=[m.navigationHome,m.navigationMyProfile,m.navigationMySettings,m.navigationPhotoList,m.navigationInputGrades,...m.footer];function De(n,e){const t=Rt(n,({key:s})=>s===e);return t||{item:m.navigationHome,group:null}}function jn(n,e){return Rt(n,t=>t.appPath!=="#/"&&e.startsWith(t.appPath))}function Rt(n,e){let t=Bn.find(s=>e(s));if(t)return{item:t,group:null};for(const s of n)if(t=s.items.find(r=>e(r)),t)return{item:t,group:s};return null}function de(n){const e=m.apps.find(t=>t.key===n.appKey);if(!e)throw new Error(`Invalid app: ${n.appKey}`);return e}function Fn(n,e){const{item:t}=De(n,e);return de(t).scope}function Wn(n,e,t){return n.reduce((s,r)=>{const i=r.items.filter(o=>Vn(o,e)&&Gn(o,t));return i.length>0?[...s,{...r,items:i}]:s},[])}function Vn(n,e){return n.deniedInstanceIds===null||n.deniedInstanceIds.includes(e)}function Gn(n,e){return n.allowedRolesOrPermissions===null||n.allowedRolesOrPermissions.some(t=>e.includes(t))}function Yn(n){const e=new URL(location.href);Array.from(e.searchParams.keys()).forEach(s=>{n.includes(s)||e.searchParams.delete(s)}),history.replaceState({},"",e)}function st(n,e,t=!1){const s=new URL(location.href);s.searchParams.set(n,e),t?history.replaceState({},"",s):history.pushState({},"",s)}function Ns(n){return n.slice(Math.max(n.indexOf("#"),0))}function Ds(n,e=!1){const t=new URL(location.href);t.hash=n,e?history.replaceState({},"",t):history.pushState({},"",t)}function Ks(){const e=new URL(location.href).searchParams.get(B);return e?Fn(m.navigation,e):de(m.navigationHome).scope}function qn(n){const e=typeof n=="string"?De(k.navigation,n).item:n;return Xn(e).toString()}function Xn(n){const e=new URL(location.origin+location.pathname);return e.searchParams.set(H,k.locale),e.searchParams.set(B,n.key),e.hash=n.appPath,e}var Jn=Object.defineProperty,$=(n,e,t,s)=>{for(var r=void 0,i=n.length-1,o;i>=0;i--)(o=n[i])&&(r=o(e,t,r)||r);return r&&Jn(e,t,r),r};const H="locale",B="module",Qn=[H,B];class v extends _e{constructor(){super(...arguments),this.actualAppPath=null,this.setInitialized=()=>{},this.initialized=new Promise(e=>this.setInitialized=()=>e(null))}async init(){await this.loadInstanceInfo(),await this.handleStateChange("locale"),this.subscribe(this.handleStateChange.bind(this)),D.onAccessTokenUpdate(()=>this.updateNavigation()),await this.loadRolesAndPermissions(),this.setInitialized()}subscribeLocale(e){return e(this.locale),this.subscribe((t,s)=>e(s),"locale")}subscribeInstanceName(e){return this.subscribe((t,s)=>e(s),"instanceName")}subscribeNavigationItemKey(e){return e(this.navigationItemKey),this.subscribe((t,s)=>e(s),"navigationItemKey")}subscribeNavigationItem(e){return e(this.navigationItem),this.subscribe((t,s)=>e(s),"navigationItem")}subscribeScopeAndLocale(e,t=!1){return t||e(this.app.scope,this.locale),this.subscribe(()=>e(this.app.scope,this.locale),["app","locale"])}navigate(e){this.initialized.then(()=>{Yn(Qn),this.locale=e.searchParams.get(H)||Cn(),this.navigationItemKey=e.searchParams.get(B)??m.navigationHome.key,e.hash&&e.hash!=="#"&&e.hash!=="#/"&&e.hash.startsWith(this.navigationItem.appPath)&&(this.appPath=e.hash)})}async handleStateChange(e){e==="locale"&&await this.updateLocale(),(e==="locale"||e==="navigationItemKey")&&bn(this.locale),(e==="rolesAndPermissions"||e==="locale")&&this.updateNavigation(),(e==="navigationItemKey"||e==="navigation")&&(this.updateNavigationItemAndGroup(this.navigationItemKey),this.updateApp(this.navigationItem))}async updateLocale(){this.allowedLocales.length>0&&!this.allowedLocales.includes(this.locale)&&(this.locale=this.allowedLocales[0]),st(H,this.locale);try{await Un(this.locale)}catch(e){console.warn("Unable to fetch/update locale (this may happen when interrupted by a redirect):",e)}}updateNavigation(){var t;const{instanceId:e}=D;e&&(this.navigation=Wn(m.navigation,e,((t=D.accessTokenPayload)==null?void 0:t.substitutionRoles)||this.rolesAndPermissions))}updateNavigationItemAndGroup(e){if(this.navigation.length>0){const{item:t,group:s}=De(this.navigation,e);if(this.navigationItem=t,this.navigationGroup=s,this.actualAppPath&&this.actualAppPath!=="#"&&this.actualAppPath!=="#/"&&this.actualAppPath.startsWith(t.appPath))this.appPath=this.actualAppPath;else{const r=jn(this.navigation,this.appPath);this.navigationItem!==(r==null?void 0:r.item)&&(this.appPath=t.appPath)}this.actualAppPath=null,this.updateHashFromAppPath(),t.key===m.navigationHome.key&&t.key!==e&&(this.navigationItemKey=t.key)}st(B,this.navigationItemKey)}updateHashFromAppPath(){const e=new URL(document.location.href);e.hash=this.appPath,history.replaceState({},"",e)}updateApp(e){this.app=de(e)}async loadRolesAndPermissions(){if(!D.authenticated)return;const{roles:e,permissions:t}=await Rn();this.rolesAndPermissions=[...e,...t]}async loadInstanceInfo(){if(D.authenticated)try{const{instanceName:e,allowedLocales:t}=await En();this.allowedLocales=t,this.instanceName=["Evento",e].filter(Boolean).join(" | ")}catch(e){console.warn("Unable to fetch/update instance name (this may happen when interrupted by a redirect):",e)}}}$([y({value:zn()})],v.prototype,"locale");$([y({value:[]})],v.prototype,"rolesAndPermissions");$([y({value:""})],v.prototype,"instanceName");$([y({value:[]})],v.prototype,"allowedLocales");$([y({value:[]})],v.prototype,"navigation");$([cn({parameter:B}),y({value:null})],v.prototype,"navigationItemKey");$([y({value:null})],v.prototype,"navigationGroup");$([y({value:m.navigationHome})],v.prototype,"navigationItem");$([y({value:de(m.navigationHome)})],v.prototype,"app");$([y({value:m.navigationHome.appPath})],v.prototype,"appPath");const k=new v,Zn=M`
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
`,es=M`
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
`,se=M`
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
`,Ke=M`
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
`;function Hs(n){var t;const e=document.createElement("style");e.innerText=n,(t=document.querySelector("body"))==null||t.appendChild(e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bs=(n,e,t)=>{for(const s of e)if(s[0]===n)return(0,s[1])();return t==null?void 0:t()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Et={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},It=n=>(...e)=>({_$litDirective$:n,values:e});class Tt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:ts}=Bt,rt=()=>document.createComment(""),W=(n,e,t)=>{var i;const s=n._$AA.parentNode,r=e===void 0?n._$AB:e._$AA;if(t===void 0){const o=s.insertBefore(rt(),r),c=s.insertBefore(rt(),r);t=new ts(o,c,n,n.options)}else{const o=t._$AB.nextSibling,c=t._$AM,a=c!==n;if(a){let d;(i=t._$AQ)==null||i.call(t,n),t._$AM=n,t._$AP!==void 0&&(d=n._$AU)!==c._$AU&&t._$AP(d)}if(o!==r||a){let d=t._$AA;for(;d!==o;){const g=d.nextSibling;s.insertBefore(d,r),d=g}}}return t},x=(n,e,t=n)=>(n._$AI(e,t),n),ns={},ss=(n,e=ns)=>n._$AH=e,rs=n=>n._$AH,ye=n=>{var s;(s=n._$AP)==null||s.call(n,!1,!0);let e=n._$AA;const t=n._$AB.nextSibling;for(;e!==t;){const r=e.nextSibling;e.remove(),e=r}};var is=Object.defineProperty,os=Object.getOwnPropertyDescriptor,as=(n,e,t,s)=>{for(var r=s>1?void 0:s?os(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(r=(s?o(e,t,r):o(r))||r);return s&&r&&is(e,t,r),r};let Se=class extends S{render(){return E`<p>
      ${l("Lernende, Lehrpersonen und Schulmitarbeitende wenden sich bei Fehlermeldungen in Evento Web oder Fragen zu dieser Fachapplikation an die zuständige Stelle in ihrer Schule. Diese wird von der Schule kommuniziert. Im Zweifelsfall kontaktieren Sie bitte das Schulsekretariat.")}
    </p>`}};Se.styles=[se,Ke];Se=as([ee("bkd-contact"),te()],Se);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*ls(n,e){const t=typeof e=="function";if(n!==void 0){let s=-1;for(const r of n)s>-1&&(yield t?e(s):e),s++,yield r}}function ce(n){return ls(n==null?void 0:n.split(`
`),E`<br />`)}var cs=Object.defineProperty,hs=Object.getOwnPropertyDescriptor,ds=(n,e,t,s)=>{for(var r=s>1?void 0:s?hs(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(r=(s?o(e,t,r):o(r))||r);return s&&r&&cs(e,t,r),r};let Pe=class extends S{constructor(){super(),new ze(this,k)}render(){return E`
      <div class="content-section">
        <h2>${l("Inhaltsverantwortung")}</h2>
        <p>${l("Zuständige Schule, siehe Kontakt")}</p>
      </div>

      <div class="content-section">
        <h2>${l("Fachapplikation")}</h2>
        <p>
          ${ce(l(`Bildungs- und Kulturdirektion des Kantons Bern
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
          ${ce(l(`Bedag Informatik AG
Engehaldenstrasse 12
3012 Bern`))}
        </p>
        <p>
          <a href="https://www.bedag.ch/" target="_blank">www.bedag.ch</a>
        </p>
      </div>
    `}};Pe.styles=[se,Ke];Pe=ds([ee("bkd-imprint"),te()],Pe);var us=Object.defineProperty,ps=Object.getOwnPropertyDescriptor,gs=(n,e,t,s)=>{for(var r=s>1?void 0:s?ps(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(r=(s?o(e,t,r):o(r))||r);return s&&r&&us(e,t,r),r};let Re=class extends S{render(){return E`
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
          ${ce(l(`Mittelschul- und Berufsbildungsamt
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
                  ${ce(l(`Bedag Informatik AG
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
    `}};Re.styles=[se,Ke,M`
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
    `];Re=gs([ee("bkd-legal"),te()],Re);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const it=(n,e,t)=>{const s=new Map;for(let r=e;r<=t;r++)s.set(n[r],r);return s},fs=It(class extends Tt{constructor(n){if(super(n),n.type!==Et.CHILD)throw Error("repeat() can only be used in text expressions")}dt(n,e,t){let s;t===void 0?t=e:e!==void 0&&(s=e);const r=[],i=[];let o=0;for(const c of n)r[o]=s?s(c,o):o,i[o]=t(c,o),o++;return{values:i,keys:r}}render(n,e,t){return this.dt(n,e,t).values}update(n,[e,t,s]){const r=rs(n),{values:i,keys:o}=this.dt(e,t,s);if(!Array.isArray(r))return this.ut=o,i;const c=this.ut??(this.ut=[]),a=[];let d,g,h=0,p=r.length-1,u=0,f=i.length-1;for(;h<=p&&u<=f;)if(r[h]===null)h++;else if(r[p]===null)p--;else if(c[h]===o[u])a[u]=x(r[h],i[u]),h++,u++;else if(c[p]===o[f])a[f]=x(r[p],i[f]),p--,f--;else if(c[h]===o[f])a[f]=x(r[h],i[f]),W(n,a[f+1],r[h]),h++,f--;else if(c[p]===o[u])a[u]=x(r[p],i[u]),W(n,r[h],r[p]),p--,u++;else if(d===void 0&&(d=it(o,u,f),g=it(c,h,p)),d.has(c[h]))if(d.has(c[p])){const A=g.get(o[u]),ue=A!==void 0?r[A]:null;if(ue===null){const Be=W(n,r[h]);x(Be,i[u]),a[u]=Be}else a[u]=x(ue,i[u]),W(n,r[h],ue),r[A]=null;u++}else ye(r[p]),p--;else ye(r[h]),h++;for(;u<=f;){const A=W(n,a[f+1]);x(A,i[u]),a[u++]=A}for(;h<=p;){const A=r[h++];A!==null&&ye(A)}return this.ut=o,ss(n,a),I}});var bs=Object.defineProperty,ms=Object.getOwnPropertyDescriptor,vs=(n,e,t,s)=>{for(var r=s>1?void 0:s?ms(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(r=(s?o(e,t,r):o(r))||r);return s&&r&&bs(e,t,r),r};let Ee=class extends S{constructor(){super(),new ze(this,k)}renderFooterLink(n){const e=qn(n);return E`
      <a
        href=${e}
        @click=${t=>{t==null||t.preventDefault(),k.navigate(new URL(e))}}
        >${n.label}</a
      >
    `}render(){return E`
      <footer role="contentinfo">
        <div class="copyright">${l("© Bildungs- und Kulturdirektion")}</div>
        <div class="footer-nav">
          ${fs(m.footer,n=>n.key,this.renderFooterLink.bind(this))}
        </div>
      </footer>
    `}};Ee.styles=[se,M`
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
    `];Ee=vs([ee("bkd-footer"),te()],Ee);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ys=It(class extends Tt{constructor(n){var e;if(super(n),n.type!==Et.ATTRIBUTE||n.name!=="class"||((e=n.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(n){return" "+Object.keys(n).filter(e=>n[e]).join(" ")+" "}update(n,[e]){var s,r;if(this.st===void 0){this.st=new Set,n.strings!==void 0&&(this.nt=new Set(n.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in e)e[i]&&!((s=this.nt)!=null&&s.has(i))&&this.st.add(i);return this.render(e)}const t=n.element.classList;for(const i of this.st)i in e||(t.remove(i),this.st.delete(i));for(const i in e){const o=!!e[i];o===this.st.has(i)||(r=this.nt)!=null&&r.has(i)||(o?(t.add(i),this.st.add(i)):(t.remove(i),this.st.delete(i)))}return I}});var $s=Object.defineProperty,As=Object.getOwnPropertyDescriptor,ws=(n,e,t,s)=>{for(var r=s>1?void 0:s?As(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(r=(s?o(e,t,r):o(r))||r);return s&&r&&$s(e,t,r),r};let Ie=class extends S{constructor(){super(),new ze(this,k)}handleLocaleChange(n,e){n.preventDefault(),k.locale=e}render(){return E`<ul>
      ${Ne.map(n=>E`<li>
            <a
              href="#"
              class=${ys({active:n===k.locale})}
              aria-current=${n===k.locale}
              @click=${e=>this.handleLocaleChange(e,n)}
            >
              ${n.slice(0,2)}
            </a>
          </li>`)}
    </ul>`}};Ie.styles=[se,M`
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
    `];Ie=ws([ee("bkd-language-switcher"),te()],Ie);export{l as A,Ps as B,ee as C,te as D,b as E,Et as F,I as G,De as H,ys as I,fs as J,Ms as K,H as L,Us as M,zs as N,zn as O,Ks as P,Hs as Q,es as R,ze as S,dn as T,Zn as U,Ds as V,Ns as W,jn as X,de as Y,Ls as a,mn as b,K as c,hn as d,Cs as e,lt as f,Is as g,un as h,Es as i,Ts as j,Rs as k,xs as l,qn as m,m as n,It as o,k as p,Tt as q,ss as r,Os as s,D as t,$e as u,se as v,M as w,S as x,E as y,Bs as z};
