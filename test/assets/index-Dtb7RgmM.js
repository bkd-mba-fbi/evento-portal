(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mt=globalThis,er=Mt.ShadowRoot&&(Mt.ShadyCSS===void 0||Mt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tr=Symbol(),Fr=new WeakMap;let _i=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==tr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(er&&e===void 0){const r=n!==void 0&&n.length===1;r&&(e=Fr.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Fr.set(n,e))}return e}toString(){return this.cssText}};const Co=t=>new _i(typeof t=="string"?t:t+"",void 0,tr),C=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((r,i,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new _i(n,t,tr)},xo=(t,e)=>{if(er)t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of e){const r=document.createElement("style"),i=Mt.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,t.appendChild(r)}},Br=er?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const r of e.cssRules)n+=r.cssText;return Co(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Oo,defineProperty:Io,getOwnPropertyDescriptor:Lo,getOwnPropertyNames:Do,getOwnPropertySymbols:Mo,getPrototypeOf:No}=Object,ge=globalThis,Kr=ge.trustedTypes,zo=Kr?Kr.emptyScript:"",An=ge.reactiveElementPolyfillSupport,at=(t,e)=>t,Ht={toAttribute(t,e){switch(e){case Boolean:t=t?zo:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},nr=(t,e)=>!Oo(t,e),Wr={attribute:!0,type:String,converter:Ht,reflect:!1,hasChanged:nr};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ge.litPropertyMetadata??(ge.litPropertyMetadata=new WeakMap);class Be extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=Wr){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(e,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(e,r,n);i!==void 0&&Io(this.prototype,e,i)}}static getPropertyDescriptor(e,n,r){const{get:i,set:s}=Lo(this.prototype,e)??{get(){return this[n]},set(o){this[n]=o}};return{get(){return i==null?void 0:i.call(this)},set(o){const c=i==null?void 0:i.call(this);s.call(this,o),this.requestUpdate(e,c,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Wr}static _$Ei(){if(this.hasOwnProperty(at("elementProperties")))return;const e=No(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(at("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(at("properties"))){const n=this.properties,r=[...Do(n),...Mo(n)];for(const i of r)this.createProperty(i,n[i])}const e=this[Symbol.metadata];if(e!==null){const n=litPropertyMetadata.get(e);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)n.unshift(Br(i))}else e!==void 0&&n.push(Br(e));return n}static _$Eu(e,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(n=>n(this))}addController(e){var n;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)==null||n.call(e))}removeController(e){var n;(n=this._$EO)==null||n.delete(e)}_$E_(){const e=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return xo(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(n=>{var r;return(r=n.hostConnected)==null?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EC(e,n){var s;const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){const o=(((s=r.converter)==null?void 0:s.toAttribute)!==void 0?r.converter:Ht).toAttribute(n,r.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,n){var s;const r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const o=r.getPropertyOptions(i),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)==null?void 0:s.fromAttribute)!==void 0?o.converter:Ht;this._$Em=i,this[i]=c.fromAttribute(n,o.type),this._$Em=null}}requestUpdate(e,n,r){if(e!==void 0){if(r??(r=this.constructor.getPropertyOptions(e)),!(r.hasChanged??nr)(this[e],n))return;this.P(e,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,n,r){this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,o]of i)o.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],o)}let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),(r=this._$EO)==null||r.forEach(i=>{var s;return(s=i.hostUpdate)==null?void 0:s.call(i)}),this.update(n)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(n)}willUpdate(e){}_$AE(e){var n;(n=this._$EO)==null||n.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EC(n,this[n]))),this._$EU()}updated(e){}firstUpdated(e){}}Be.elementStyles=[],Be.shadowRootOptions={mode:"open"},Be[at("elementProperties")]=new Map,Be[at("finalized")]=new Map,An==null||An({ReactiveElement:Be}),(ge.reactiveElementVersions??(ge.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lt=globalThis,jt=lt.trustedTypes,Gr=jt?jt.createPolicy("lit-html",{createHTML:t=>t}):void 0,rr="$lit$",ue=`lit$${Math.random().toFixed(9).slice(2)}$`,ir="?"+ue,Uo=`<${ir}>`,Re=document,dt=()=>Re.createComment(""),ut=t=>t===null||typeof t!="object"&&typeof t!="function",or=Array.isArray,Ai=t=>or(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",En=`[ 	
\f\r]`,Qe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,qr=/-->/g,Vr=/>/g,ye=RegExp(`>|${En}(?:([^\\s"'>=/]+)(${En}*=${En}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Yr=/'/g,Xr=/"/g,Ei=/^(?:script|style|textarea|title)$/i,Ho=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),_=Ho(1),pe=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),Zr=new WeakMap,Te=Re.createTreeWalker(Re,129);function Ti(t,e){if(!or(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Gr!==void 0?Gr.createHTML(e):e}const Si=(t,e)=>{const n=t.length-1,r=[];let i,s=e===2?"<svg>":e===3?"<math>":"",o=Qe;for(let c=0;c<n;c++){const a=t[c];let h,m,d=-1,v=0;for(;v<a.length&&(o.lastIndex=v,m=o.exec(a),m!==null);)v=o.lastIndex,o===Qe?m[1]==="!--"?o=qr:m[1]!==void 0?o=Vr:m[2]!==void 0?(Ei.test(m[2])&&(i=RegExp("</"+m[2],"g")),o=ye):m[3]!==void 0&&(o=ye):o===ye?m[0]===">"?(o=i??Qe,d=-1):m[1]===void 0?d=-2:(d=o.lastIndex-m[2].length,h=m[1],o=m[3]===void 0?ye:m[3]==='"'?Xr:Yr):o===Xr||o===Yr?o=ye:o===qr||o===Vr?o=Qe:(o=ye,i=void 0);const p=o===ye&&t[c+1].startsWith("/>")?" ":"";s+=o===Qe?a+Uo:d>=0?(r.push(h),a.slice(0,d)+rr+a.slice(d)+ue+p):a+ue+(d===-2?c:p)}return[Ti(t,s+(t[n]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]};class ht{constructor({strings:e,_$litType$:n},r){let i;this.parts=[];let s=0,o=0;const c=e.length-1,a=this.parts,[h,m]=Si(e,n);if(this.el=ht.createElement(h,r),Te.currentNode=this.el.content,n===2||n===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=Te.nextNode())!==null&&a.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(const d of i.getAttributeNames())if(d.endsWith(rr)){const v=m[o++],p=i.getAttribute(d).split(ue),u=/([.?@])?(.*)/.exec(v);a.push({type:1,index:s,name:u[2],strings:p,ctor:u[1]==="."?Pi:u[1]==="?"?Ri:u[1]==="@"?Ci:yt}),i.removeAttribute(d)}else d.startsWith(ue)&&(a.push({type:6,index:s}),i.removeAttribute(d));if(Ei.test(i.tagName)){const d=i.textContent.split(ue),v=d.length-1;if(v>0){i.textContent=jt?jt.emptyScript:"";for(let p=0;p<v;p++)i.append(d[p],dt()),Te.nextNode(),a.push({type:2,index:++s});i.append(d[v],dt())}}}else if(i.nodeType===8)if(i.data===ir)a.push({type:2,index:s});else{let d=-1;for(;(d=i.data.indexOf(ue,d+1))!==-1;)a.push({type:7,index:s}),d+=ue.length-1}s++}}static createElement(e,n){const r=Re.createElement("template");return r.innerHTML=e,r}}function Ce(t,e,n=t,r){var o,c;if(e===pe)return e;let i=r!==void 0?(o=n._$Co)==null?void 0:o[r]:n._$Cl;const s=ut(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==s&&((c=i==null?void 0:i._$AO)==null||c.call(i,!1),s===void 0?i=void 0:(i=new s(t),i._$AT(t,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=i:n._$Cl=i),i!==void 0&&(e=Ce(t,i._$AS(t,e.values),i,r)),e}let $i=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:n},parts:r}=this._$AD,i=((e==null?void 0:e.creationScope)??Re).importNode(n,!0);Te.currentNode=i;let s=Te.nextNode(),o=0,c=0,a=r[0];for(;a!==void 0;){if(o===a.index){let h;a.type===2?h=new qe(s,s.nextSibling,this,e):a.type===1?h=new a.ctor(s,a.name,a.strings,this,e):a.type===6&&(h=new xi(s,this,e)),this._$AV.push(h),a=r[++c]}o!==(a==null?void 0:a.index)&&(s=Te.nextNode(),o++)}return Te.currentNode=Re,i}p(e){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}};class qe{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,n,r,i){this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=Ce(this,e,n),ut(e)?e===R||e==null||e===""?(this._$AH!==R&&this._$AR(),this._$AH=R):e!==this._$AH&&e!==pe&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ai(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==R&&ut(this._$AH)?this._$AA.nextSibling.data=e:this.T(Re.createTextNode(e)),this._$AH=e}$(e){var s;const{values:n,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=ht.createElement(Ti(r.h,r.h[0]),this.options)),r);if(((s=this._$AH)==null?void 0:s._$AD)===i)this._$AH.p(n);else{const o=new $i(i,this),c=o.u(this.options);o.p(n),this.T(c),this._$AH=o}}_$AC(e){let n=Zr.get(e.strings);return n===void 0&&Zr.set(e.strings,n=new ht(e)),n}k(e){or(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const s of e)i===n.length?n.push(r=new qe(this.O(dt()),this.O(dt()),this,this.options)):r=n[i],r._$AI(s),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var n;this._$AM===void 0&&(this._$Cv=e,(n=this._$AP)==null||n.call(this,e))}}class yt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,r,i,s){this.type=1,this._$AH=R,this._$AN=void 0,this.element=e,this.name=n,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=R}_$AI(e,n=this,r,i){const s=this.strings;let o=!1;if(s===void 0)e=Ce(this,e,n,0),o=!ut(e)||e!==this._$AH&&e!==pe,o&&(this._$AH=e);else{const c=e;let a,h;for(e=s[0],a=0;a<s.length-1;a++)h=Ce(this,c[r+a],n,a),h===pe&&(h=this._$AH[a]),o||(o=!ut(h)||h!==this._$AH[a]),h===R?e=R:e!==R&&(e+=(h??"")+s[a+1]),this._$AH[a]=h}o&&!i&&this.j(e)}j(e){e===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Pi extends yt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===R?void 0:e}}class Ri extends yt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==R)}}class Ci extends yt{constructor(e,n,r,i,s){super(e,n,r,i,s),this.type=5}_$AI(e,n=this){if((e=Ce(this,e,n,0)??R)===pe)return;const r=this._$AH,i=e===R&&r!==R||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==R&&(r===R||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,e):this._$AH.handleEvent(e)}}class xi{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Ce(this,e)}}const jo={M:rr,P:ue,A:ir,C:1,L:Si,R:$i,D:Ai,V:Ce,I:qe,H:yt,N:Ri,U:Ci,B:Pi,F:xi},Tn=lt.litHtmlPolyfillSupport;Tn==null||Tn(ht,qe),(lt.litHtmlVersions??(lt.litHtmlVersions=[])).push("3.2.1");const Fo=(t,e,n)=>{const r=(n==null?void 0:n.renderBefore)??e;let i=r._$litPart$;if(i===void 0){const s=(n==null?void 0:n.renderBefore)??null;r._$litPart$=i=new qe(e.insertBefore(dt(),s),s,void 0,n??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let P=class extends Be{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const e=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=e.firstChild),e}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Fo(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return pe}};var ki;P._$litElement$=!0,P.finalized=!0,(ki=globalThis.litElementHydrateSupport)==null||ki.call(globalThis,{LitElement:P});const Sn=globalThis.litElementPolyfillSupport;Sn==null||Sn({LitElement:P});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=t=>(e,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bo={attribute:!0,type:String,converter:Ht,reflect:!1,hasChanged:nr},Ko=(t=Bo,e,n)=>{const{kind:r,metadata:i}=n;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(n.name,t),r==="accessor"){const{name:o}=n;return{set(c){const a=e.get.call(this);e.set.call(this,c),this.requestUpdate(o,a,t)},init(c){return c!==void 0&&this.P(o,void 0,t),c}}}if(r==="setter"){const{name:o}=n;return function(c){const a=this[o];e.call(this,c),this.requestUpdate(o,a,t)}}throw Error("Unsupported decorator location: "+r)};function Y(t){return(e,n)=>typeof n=="object"?Ko(t,e,n):((r,i,s)=>{const o=i.hasOwnProperty(s);return i.constructor.createProperty(s,o?{...r,wrapped:!0}:r),o?Object.getOwnPropertyDescriptor(i,s):void 0})(t,e,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ve(t){return Y({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wo=(t,e,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function te(t,e){return(n,r,i)=>{const s=o=>{var c;return((c=o.renderRoot)==null?void 0:c.querySelector(t))??null};return Wo(n,r,{get(){return s(this)}})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Go=(t,e,n)=>{for(const r of e)if(r[0]===t)return(0,r[1])();return n==null?void 0:n()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const sr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},en=t=>(...e)=>({_$litDirective$:t,values:e});let tn=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:qo}=jo,Jr=()=>document.createComment(""),et=(t,e,n)=>{var s;const r=t._$AA.parentNode,i=e===void 0?t._$AB:e._$AA;if(n===void 0){const o=r.insertBefore(Jr(),i),c=r.insertBefore(Jr(),i);n=new qo(o,c,t,t.options)}else{const o=n._$AB.nextSibling,c=n._$AM,a=c!==t;if(a){let h;(s=n._$AQ)==null||s.call(n,t),n._$AM=t,n._$AP!==void 0&&(h=t._$AU)!==c._$AU&&n._$AP(h)}if(o!==i||a){let h=n._$AA;for(;h!==o;){const m=h.nextSibling;r.insertBefore(h,i),h=m}}}return n},we=(t,e,n=t)=>(t._$AI(e,n),t),Vo={},Oi=(t,e=Vo)=>t._$AH=e,Yo=t=>t._$AH,$n=t=>{var r;(r=t._$AP)==null||r.call(t,!1,!0);let e=t._$AA;const n=t._$AB.nextSibling;for(;e!==n;){const i=e.nextSibling;e.remove(),e=i}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xo=en(class extends tn{constructor(){super(...arguments),this.key=R}render(t,e){return this.key=t,e}update(t,[e,n]){return e!==this.key&&(Oi(t),this.key=e),n}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function he(t,e,n){return t?e(t):n==null?void 0:n(t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Un="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zo=t=>typeof t!="string"&&"strTag"in t,Ii=(t,e,n)=>{let r=t[0];for(let i=1;i<t.length;i++)r+=e[n?n[i-1]:i-1],r+=t[i];return r};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Li=t=>Zo(t)?Ii(t.strings,t.values):t;let g=Li,Qr=!1;function Jo(t){if(Qr)throw new Error("lit-localize can only be configured once");g=t,Qr=!0}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Qo{constructor(e){this.__litLocalizeEventHandler=n=>{n.detail.status==="ready"&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(Un,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(Un,this.__litLocalizeEventHandler)}}const es=t=>t.addController(new Qo(t)),ts=es;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=()=>(t,e)=>(t.addInitializer(ts),t);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Di{constructor(){this.settled=!1,this.promise=new Promise((e,n)=>{this._resolve=e,this._reject=n})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */const de=[];for(let t=0;t<256;t++)de[t]=(t>>4&15).toString(16)+(t&15).toString(16);function ns(t){let e=0,n=8997,r=0,i=33826,s=0,o=40164,c=0,a=52210;for(let h=0;h<t.length;h++)n^=t.charCodeAt(h),e=n*435,r=i*435,s=o*435,c=a*435,s+=n<<8,c+=i<<8,r+=e>>>16,n=e&65535,s+=r>>>16,i=r&65535,a=c+(s>>>16)&65535,o=s&65535;return de[a>>8]+de[a&255]+de[o>>8]+de[o&255]+de[i>>8]+de[i&255]+de[n>>8]+de[n&255]}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rs="",is="h",os="s";function ss(t,e){return(e?is:os)+ns(typeof t=="string"?t:t.join(rs))}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ei=new WeakMap,ti=new Map;function as(t,e,n){if(t){const r=(n==null?void 0:n.id)??ls(e),i=t[r];if(i){if(typeof i=="string")return i;if("strTag"in i)return Ii(i.strings,e.values,i.values);{let s=ei.get(i);return s===void 0&&(s=i.values,ei.set(i,s)),{...i,values:s.map(o=>e.values[o])}}}}return Li(e)}function ls(t){const e=typeof t=="string"?t:t.strings;let n=ti.get(e);return n===void 0&&(n=ss(e,typeof t!="string"&&!("strTag"in t)),ti.set(e,n)),n}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Pn(t){window.dispatchEvent(new CustomEvent(Un,{detail:t}))}let Ft="",Rn,Mi,Bt,Hn,Ni,Ae=new Di;Ae.resolve();let Ot=0;const cs=t=>(Jo((e,n)=>as(Ni,e,n)),Ft=Mi=t.sourceLocale,Bt=new Set(t.targetLocales),Bt.add(t.sourceLocale),Hn=t.loadLocale,{getLocale:ds,setLocale:us}),ds=()=>Ft,us=t=>{if(t===(Rn??Ft))return Ae.promise;if(!Bt||!Hn)throw new Error("Internal error");if(!Bt.has(t))throw new Error("Invalid locale code");Ot++;const e=Ot;return Rn=t,Ae.settled&&(Ae=new Di),Pn({status:"loading",loadingLocale:t}),(t===Mi?Promise.resolve({templates:void 0}):Hn(t)).then(r=>{Ot===e&&(Ft=t,Rn=void 0,Ni=r.templates,Pn({status:"ready",readyLocale:t}),Ae.resolve())},r=>{Ot===e&&(Pn({status:"error",errorLocale:t,errorMessage:r.toString()}),Ae.reject(r))}),Ae.promise};function zi(t){return typeof t=="function"?t():t}const Qt=class Qt extends Event{constructor(e,n,r){super(Qt.eventName,{cancelable:!1}),this.key=e,this.value=n,this.state=r}};Qt.eventName="lit-state-changed";let Se=Qt;const hs=(t,e)=>e!==t&&(e===e||t===t),mr=class mr extends EventTarget{static initPropertyMap(){this.propertyMap||(this.propertyMap=new Map)}get propertyMap(){return this.constructor.propertyMap}get stateValue(){return Object.fromEntries([...this.propertyMap].map(([e])=>[e,this[e]]))}constructor(){super(),this.hookMap=new Map,this.constructor.finalize(),this.propertyMap&&[...this.propertyMap].forEach(([e,n])=>{if(n.initialValue!==void 0){const r=zi(n.initialValue);this[e]=r,n.value=r}})}static finalize(){if(this.finalized)return!1;this.finalized=!0;const e=Object.keys(this.properties||{});for(const n of e)this.createProperty(n,this.properties[n]);return!0}static createProperty(e,n){this.finalize();const r=typeof e=="symbol"?Symbol():`__${e}`,i=this.getPropertyDescriptor(String(e),r,n);Object.defineProperty(this.prototype,e,i)}static getPropertyDescriptor(e,n,r){const i=(r==null?void 0:r.hasChanged)||hs;return{get(){return this[n]},set(s){const o=this[e];this[n]=s,i(s,o)===!0&&this.dispatchStateEvent(e,s,this)},configurable:!0,enumerable:!0}}reset(){this.hookMap.forEach(e=>e.reset()),[...this.propertyMap].filter(([e,n])=>!(n.skipReset===!0||n.resetValue===void 0)).forEach(([e,n])=>{this[e]=n.resetValue})}subscribe(e,n,r){n&&!Array.isArray(n)&&(n=[n]);const i=s=>{(!n||n.includes(s.key))&&e(s.key,s.value,this)};return this.addEventListener(Se.eventName,i,r),()=>this.removeEventListener(Se.eventName,i)}dispatchStateEvent(e,n,r){this.dispatchEvent(new Se(e,n,r))}};mr.finalized=!1;let jn=mr;class Q{constructor(e,n,r){this.host=e,this.state=n,this.callback=r||(()=>this.host.requestUpdate()),this.host.addController(this)}hostConnected(){this.state.addEventListener(Se.eventName,this.callback),this.callback()}hostDisconnected(){this.state.removeEventListener(Se.eventName,this.callback)}}function oe(t){return(e,n)=>{if(Object.getOwnPropertyDescriptor(e,n))throw new Error("@property must be called before all state decorators");const r=e.constructor;r.initPropertyMap();const i=e.hasOwnProperty(n);return r.propertyMap.set(n,{...t,initialValue:t==null?void 0:t.value,resetValue:t==null?void 0:t.value}),r.createProperty(n,t),i?Object.getOwnPropertyDescriptor(e,n):void 0}}function ps(t,e){if(t!==null&&(e===Boolean||e===Number||e===Array||e===Object))try{t=JSON.parse(t)}catch{console.warn("cannot parse value",t)}return t}const fs=new URL(location.href);function gs(t){return(e,n)=>{if(!Object.getOwnPropertyDescriptor(e,n))throw new Error("@local-storage decorator need to be called after @property");const i=e.constructor,s=`${(t==null?void 0:t.parameter)||String(n)}`,o=i.propertyMap.get(n),c=o==null?void 0:o.type;if(o){const a=o.initialValue,h=fs.searchParams.get(s);h!==null&&(o.skipAsync=!0),o.initialValue=()=>ps(h,c)??zi(a),i.propertyMap.set(n,{...o,...t});return}}}const O={apps:[{key:"schulverwaltung",scope:"Tutoring",root:"apps/webapp-schulverwaltung/index.html",heading:!1},{key:"anmeldedetailsEinlesen",scope:"NG",root:"apps/EmberApps/AnmeldedetailsEinlesen/index.html",heading:!0},{key:"schulleiterPersonen",scope:"NG",root:"apps/EmberApps/SchulleiterPersonen/index.html",heading:!0},{key:"fotoliste",scope:"Tutoring",root:"apps/EmberApps/Fotoliste/index.html",heading:!1},{key:"kursausschreibung",scope:"Public",root:"apps/Kursausschreibung/index.html",heading:!0},{key:"kursausschreibungIntern",scope:"Public",root:"apps/Kursausschreibung/indexIntern.html",heading:!0},{key:"stellvertretung",scope:"Tutoring",root:"apps/Stellvertretung/index.html",heading:!0},{key:"reservation",scope:"NG",root:"apps/Raumreservation/index.html",heading:!0},{key:"noteneingabe",scope:"Tutoring",root:"apps/Noteneingabe/index.html",heading:!1},{key:"footer",scope:"Public",root:"",heading:!0}],navigationHome:{key:"home",label:"Home",allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/dashboard"},navigationPhotoList:{key:"photoList",get label(){return g("Fotoliste")},allowedRolesOrPermissions:["TeacherRole"],deniedInstanceIds:null,appKey:"fotoliste",appPath:"#/"},navigationInputGrades:{key:"inputGrades",get label(){return g("Noteneingabe")},allowedRolesOrPermissions:["TeacherRole"],deniedInstanceIds:null,appKey:"noteneingabe",appPath:"#/"},navigationMyProfile:{key:"myProfile",get label(){return g("Mein Profil")},allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/my-profile"},navigationMySettings:{key:"mySettings",get label(){return g("Einstellungen")},allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/my-settings"},navigation:[{get label(){return g("Unterricht")},items:[{key:"presenceControl",get label(){return g("Präsenzkontrolle")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/presence-control"},{key:"currentEvents",get label(){return g("Aktuelle Fächer")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole","ClassTeacherRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/events/current"},{key:"tests",get label(){return g("Tests und Bewertung")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/events"},{key:"substitutionsAssign",get label(){return g("Stellvertretung erfassen")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole"],deniedInstanceIds:null,appKey:"stellvertretung",appPath:"#/substitutions/assign"},{key:"substitutionsExecute",get label(){return g("Stellvertretung ausüben")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole"],deniedInstanceIds:null,appKey:"stellvertretung",appPath:"#/substitutions/execute"}]},{get label(){return g("Absenzen")},items:[{key:"openAbsences",get label(){return g("Offene Absenzen entschuldigen")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole","ClassTeacherRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/open-absences"},{key:"editAbsences",get label(){return g("Absenzen bearbeiten")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole","ClassTeacherRole","AbsenceAdministratorRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/edit-absences"},{key:"evaluateAbsences",get label(){return g("Absenzen auswerten")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole","ClassTeacherRole","AbsenceAdministratorRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/evaluate-absences"}]},{get label(){return g("Aus-/Weiterbildung")},items:[{key:"myAbsences",get label(){return g("Absenzen")},allowedRolesOrPermissions:["StudentRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/my-absences"},{key:"myGrades",get label(){return g("Noten")},allowedRolesOrPermissions:["StudentRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/my-grades"}]},{get label(){return g("Angebote")},items:[{key:"coursesAndEvents",get label(){return g("Kurse und Veranstaltungen")},allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"kursausschreibung",appPath:"#/"},{key:"internalTraining",get label(){return g("Schulinterne Weiterbildung")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole","ClassTeacherRole","AbsenceAdministratorRole","SubstituteAdministratorRole","Reservations"],deniedInstanceIds:null,appKey:"kursausschreibungIntern",appPath:"#/"},{key:"reservations",get label(){return g("Räume und Geräte reservieren")},allowedRolesOrPermissions:["Reservations"],deniedInstanceIds:null,appKey:"reservation",appPath:"#/"}]},{get label(){return g("Administration")},items:[{key:"substitutionsAdmin",get label(){return g("Stellvertretungen administrieren")},allowedRolesOrPermissions:["SubstituteAdministratorRole"],deniedInstanceIds:null,appKey:"stellvertretung",appPath:"#/substitutions/admin"},{key:"personSearch",get label(){return g("Personen und Institutionen suchen")},allowedRolesOrPermissions:["PersonRight"],deniedInstanceIds:null,appKey:"schulleiterPersonen",appPath:"#/persons"},{key:"eventRegistration",get label(){return g("Anmeldedetails einlesen")},allowedRolesOrPermissions:["PersonRight","RegistrationRightAusbildungSemester","RegistrationRightAusbildungKurs","RegistrationRightAusbildungModulanlass","RegistrationRightAusbildungModul","RegistrationRightAusbildungStudiengang","RegistrationRightAusbildungStudienjahrgang","RegistrationRightAusbildungVeranstaltung","RegistrationRightWeiterbildungCAS","RegistrationRightWeiterbildungCASAnlass","RegistrationRightWeiterbildungDAS","RegistrationRightWeiterbildungDASJahrgang","RegistrationRightWeiterbildungInteressent","RegistrationRightWeiterbildungKurs","RegistrationRightWeiterbildungMAS","RegistrationRightWeiterbildungMASJahrgang","RegistrationRightWeiterbildungModulanlass","RegistrationRightWeiterbildungModulbefreiung","RegistrationRightWeiterbildungSemester","RegistrationRightWeiterbildungVeranstaltung","RegistrationRightWeiterbildungEvaluationsanlass","RegistrationRightWeiterbildungFakturierung","RegistrationRightWeiterbildungMailingliste","RegistrationRightWeiterbildungPlatzangebot","RegistrationRightWeiterbildungReservation"],deniedInstanceIds:null,appKey:"anmeldedetailsEinlesen",appPath:"#/input"}]}],footer:[{key:"contact",get label(){return g("Kontakt")},allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"footer",appPath:"#/"},{key:"legal",get label(){return g("Rechtliche Hinweise")},allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"footer",appPath:"#/"},{key:"imprint",get label(){return g("Impressum")},allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"footer",appPath:"#/"}]};function nn(){var t;return((t=window.eventoPortal)==null?void 0:t.settings)??{apiServer:"",oAuthServer:"",oAuthPrefix:"",oAuthClientId:"",notificationRefreshTime:30}}function $e(t){const{instance_id:e,scope:n,culture_info:r,nbf:i,exp:s,substitution_id:o,holder_roles:c}=vs(t);return{instanceId:e,scope:n,locale:r,issueTime:i,expirationTime:s,substitutionId:o?parseInt(o,10):void 0,substitutionRoles:c?c.split(";"):void 0}}const Ui=10*1e3;function ni(t,e,n){if(!t)return!1;const r=$e(t);return r.scope===e&&r.locale===n&&!Hi(r)}function Hi(t){if(!t)return!0;const{expirationTime:e}=t;return e*1e3<Date.now()}function ms(t){if(!t)return!0;const{expirationTime:e}=t;return e*1e3-Ui<Date.now()}function bs(t){const{expirationTime:e}=t;return Math.max(e*1e3-Date.now(),0)}function vs(t){const n=t.split(".")[1].replace("-","+").replace("_","/"),r=decodeURIComponent(window.atob(n).split("").map(function(i){return"%"+("00"+i.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(r)}const ji="bkdInstance",Fn="bkdCodeVerifier",pt="bkdRedirectUrl",ar="bkdAccessToken",lr="bkdRefreshToken",ft="CLX.LoginToken",ys="uiCulture",ws="CLX.TokenExpire";function cr(){return localStorage.getItem(ji)}function ks(t){localStorage.setItem(ji,t)}function _s(t){localStorage.setItem(ys,t)}function gt(t){return localStorage.getItem(`${lr}_${t}`)}function As(t,e){e&&localStorage.setItem(`${lr}_${t}`,e)}function Fi(t){return localStorage.getItem(`${ar}_${t}`)}function Es(t,e){localStorage.setItem(`${ar}_${t}`,e)}function Ts(){Os(localStorage,t=>{t&&(t.startsWith(ar)||t.startsWith(lr))&&localStorage.removeItem(t)}),sessionStorage.removeItem(ft)}function Ss(){const t=sessionStorage.getItem(ft);return t?t.replace(/^"+|"+$/g,""):null}function $s(){const t=localStorage.getItem(ft);return t?t.replace(/^"+|"+$/g,""):null}function Ps(t){sessionStorage.setItem(ft,`"${t}"`),localStorage.setItem(ft,`"${t}"`);let{expirationTime:e}=$e(t);e=e*1e3,localStorage.setItem(ws,e.toString())}function Rs(){const t=sessionStorage.getItem(Fn),e=sessionStorage.getItem(pt)??void 0;return sessionStorage.removeItem(pt),sessionStorage.removeItem(Fn),t?{redirectUri:e,codeVerifier:t}:null}function Cs(t,e){sessionStorage.setItem(Fn,t),e?sessionStorage.setItem(pt,e):sessionStorage.removeItem(pt)}function xs(){return sessionStorage.getItem(pt)}function Os(t,e){new Array(t.length).fill(void 0).map((n,r)=>t.key(r)).forEach(n=>{n&&e(n)})}class Is{constructor(){this.state={refreshToken:null,refreshTokenPayload:null,accessToken:null,accessTokenPayload:null},this.refreshTokenSubscribers=[],this.accessTokenSubscribers=[],this.initState(),this.afterRefreshTokenUpdate(this.refreshToken,!1),this.afterAccessTokenUpdate(this.accessToken,!1)}get refreshToken(){return this.state.refreshToken}set refreshToken(e){this.state.refreshToken=e,this.afterRefreshTokenUpdate(e)}get refreshTokenPayload(){return this.state.refreshTokenPayload}get accessToken(){return this.state.accessToken}set accessToken(e){this.state.accessToken=e,this.afterAccessTokenUpdate(e)}get accessTokenPayload(){return this.state.accessTokenPayload}get authenticated(){return!!this.accessToken}get scope(){var e;return((e=this.accessTokenPayload)==null?void 0:e.scope)??null}get locale(){var e;return((e=this.accessTokenPayload)==null?void 0:e.locale)??null}get instanceId(){var e;return((e=this.accessTokenPayload)==null?void 0:e.instanceId)??null}resetAllTokens(){this.state.refreshToken=null,this.state.refreshTokenPayload=null,this.state.accessToken=null,this.state.accessTokenPayload=null,Ts()}onRefreshTokenUpdate(e){return this.refreshTokenSubscribers.push(e),()=>{const n=this.refreshTokenSubscribers.findIndex(r=>r===e);this.refreshTokenSubscribers.splice(n,1)}}onAccessTokenUpdate(e){return this.accessTokenSubscribers.push(e),()=>{const n=this.accessTokenSubscribers.findIndex(r=>r===e);this.accessTokenSubscribers.splice(n,1)}}initState(){const e=Ss(),n=e?gt($e(e).scope):null;this.state={refreshToken:n,refreshTokenPayload:null,accessToken:e,accessTokenPayload:null}}afterRefreshTokenUpdate(e,n=!0){const r=e?$e(e):null;this.state.refreshTokenPayload=r,e&&r&&n&&As(r.scope,e),this.notifyRefreshTokenSubscribers()}afterAccessTokenUpdate(e,n=!0){const r=e?$e(e):null;this.state.accessTokenPayload=r,e&&r&&n&&(Es(r.scope,e),Ps(e)),this.notifyAccessTokenSubscribers()}notifyRefreshTokenSubscribers(){this.refreshTokenSubscribers.forEach(e=>e(this.refreshTokenPayload))}notifyAccessTokenSubscribers(){this.accessTokenSubscribers.forEach(e=>e(this.accessTokenPayload))}}const S=new Is,me=nn();if(typeof(me==null?void 0:me.apiServer)!="string")throw new Error("Invalid 'apiServer' setting");async function Ls(){var n,r;const t=`${me.apiServer}/UserSettings/?expand=AccessInfo`,e=await wt(t);return{roles:((n=e==null?void 0:e.AccessInfo)==null?void 0:n.Roles)??[],permissions:((r=e==null?void 0:e.AccessInfo)==null?void 0:r.Permissions)??[]}}async function Ds(){const t=`${me.apiServer}/Configurations/SchoolAppNavigation`,{instanceName:e,guiLanguage:n}=await wt(t);return{instanceName:e,allowedLocales:n}}function Ms(){const t=`${me.apiServer}/TeacherSubstitutions/current`;return wt(t)}const Bi="notificationData";async function Ns(){var r;const t=`${me.apiServer}/UserSettings/Cst`,{Settings:e}=await wt(t),n=(r=e.find(i=>i.Key===Bi))==null?void 0:r.Value;return n?JSON.parse(n):[]}function ri(t){const e=`${me.apiServer}/UserSettings/Cst`,n={Id:"Cst",Settings:[{Key:Bi,Value:JSON.stringify(t)}]};return wt(e,{method:"PATCH",body:JSON.stringify(n)},!0)}async function wt(t,{method:e="GET",body:n=void 0}={},r){const{accessToken:i}=S;if(!i)throw new Error("No token available");const s=new Headers({Authorization:`Bearer ${i}`,"Content-Type":"application/json"}),o=await fetch(t,{method:e,headers:s,body:n});if(!r)return o.json()}const zs="modulepreload",Us=function(t){return"/"+t},ii={},Hs=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(a=>{if(a=Us(a),a in ii)return;ii[a]=!0;const h=a.endsWith(".css"),m=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${m}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":zs,h||(d.as="script"),d.crossOrigin="",d.href=a,c&&d.setAttribute("nonce",c),document.head.appendChild(d),h)return new Promise((v,p)=>{d.addEventListener("load",v),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${a}`)))})}))}function s(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return i.then(o=>{for(const c of o||[])c.status==="rejected"&&s(c.reason);return e().catch(s)})},Ki="de-CH",js=["fr-CH"],dr=["de-CH","fr-CH"],{getLocale:Fs,setLocale:Bs}=cs({sourceLocale:Ki,targetLocales:js,loadLocale:t=>Hs(()=>import(`/locales/${t}.js`),[])});function Wi(){const t=Ws()??Vs()??Ys();return t&&Gs(t)?t:qs()??Ki}async function Ks(t){await Bs(t),document.documentElement.lang=t}function Ws(){return new URL(location.href).searchParams.get(xe)}function Gs(t){return dr.includes(t)}function qs(){const t=navigator.language.slice(0,2);return dr.find(e=>e.startsWith(t))??null}function Vs(){const t=xs();return t?new URL(t).searchParams.get(xe):null}function Ys(){const t=$s();return t?$e(t).locale:null}const Xs=[O.navigationHome,O.navigationMyProfile,O.navigationMySettings,O.navigationPhotoList,O.navigationInputGrades,...O.footer];function rn(t,e){const n=qi(t,({key:r})=>r===e);return n||{item:O.navigationHome,group:null}}function Gi(t,e){return qi(t,n=>n.appPath!=="#/"&&e.startsWith(n.appPath))}function qi(t,e){let n=Xs.find(r=>e(r));if(n)return{item:n,group:null};for(const r of t)if(n=r.items.find(i=>e(i)),n)return{item:n,group:r};return null}function on(t){const e=O.apps.find(n=>n.key===t.appKey);if(!e)throw new Error(`Invalid app: ${t.appKey}`);return e}function Zs(t,e){const{item:n}=rn(t,e);return on(n).scope}function Js(t,e,n){return t.reduce((r,i)=>{const s=i.items.filter(o=>Qs(o,e)&&ea(o,n));return s.length>0?[...r,{...i,items:s}]:r},[])}function Qs(t,e){return t.deniedInstanceIds===null||t.deniedInstanceIds.includes(e)}function ea(t,e){return t.allowedRolesOrPermissions===null||t.allowedRolesOrPermissions.some(n=>e.includes(n))}function ta(t){const e=new URL(location.href);Array.from(e.searchParams.keys()).forEach(r=>{t.includes(r)||e.searchParams.delete(r)}),history.replaceState({},"",e)}function oi(t,e,n=!1){const r=new URL(location.href);r.searchParams.set(t,e),n?history.replaceState({},"",r):history.pushState({},"",r)}function Cn(t){return t.slice(Math.max(t.indexOf("#"),0))}function xn(t,e=!1){const n=new URL(location.href);n.hash=t,e?history.replaceState({},"",n):history.pushState({},"",n)}function na(){const e=new URL(location.href).searchParams.get(Ke);return e?Zs(O.navigation,e):on(O.navigationHome).scope}function be(t){const e=typeof t=="string"?rn(w.navigation,t).item:t;return ra(e).toString()}function ra(t){const e=new URL(location.origin);return e.searchParams.set(xe,w.locale),e.searchParams.set(Ke,t.key),e.hash=t.appPath,e}var ia=Object.defineProperty,se=(t,e,n,r)=>{for(var i=void 0,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=o(e,n,i)||i);return i&&ia(e,n,i),i};const xe="locale",Ke="module",oa=[xe,Ke];class ne extends jn{constructor(){super(...arguments),this.actualAppPath=null,this.setInitialized=()=>{},this.initialized=new Promise(e=>this.setInitialized=()=>e(null))}async init(){await this.loadInstanceInfo(),await this.handleStateChange("locale"),this.subscribe(this.handleStateChange.bind(this)),S.onAccessTokenUpdate(()=>this.updateNavigation()),await this.loadRolesAndPermissions(),this.setInitialized()}subscribeLocale(e){return e(this.locale),this.subscribe((n,r)=>e(r),"locale")}subscribeInstanceName(e){return this.subscribe((n,r)=>e(r),"instanceName")}subscribeNavigationItemKey(e){return e(this.navigationItemKey),this.subscribe((n,r)=>e(r),"navigationItemKey")}subscribeNavigationItem(e){return e(this.navigationItem),this.subscribe((n,r)=>e(r),"navigationItem")}subscribeScopeAndLocale(e,n=!1){return n||e(this.app.scope,this.locale),this.subscribe(()=>e(this.app.scope,this.locale),["app","locale"])}navigate(e){this.initialized.then(()=>{ta(oa),this.locale=e.searchParams.get(xe)||Fs(),this.navigationItemKey=e.searchParams.get(Ke)??O.navigationHome.key,e.hash&&e.hash!=="#"&&e.hash!=="#/"&&e.hash.startsWith(this.navigationItem.appPath)&&(this.appPath=e.hash)})}async handleStateChange(e){e==="locale"&&await this.updateLocale(),(e==="locale"||e==="navigationItemKey")&&_s(this.locale),(e==="rolesAndPermissions"||e==="locale")&&this.updateNavigation(),(e==="navigationItemKey"||e==="navigation")&&(this.updateNavigationItemAndGroup(this.navigationItemKey),this.updateApp(this.navigationItem))}async updateLocale(){this.allowedLocales.length>0&&!this.allowedLocales.includes(this.locale)&&(this.locale=this.allowedLocales[0]),oi(xe,this.locale);try{await Ks(this.locale)}catch(e){console.warn("Unable to fetch/update locale (this may happen when interrupted by a redirect):",e)}}updateNavigation(){var n;const{instanceId:e}=S;e&&(this.navigation=Js(O.navigation,e,((n=S.accessTokenPayload)==null?void 0:n.substitutionRoles)||this.rolesAndPermissions))}updateNavigationItemAndGroup(e){if(this.navigation.length>0){const{item:n,group:r}=rn(this.navigation,e);if(this.navigationItem=n,this.navigationGroup=r,this.actualAppPath&&this.actualAppPath!=="#"&&this.actualAppPath!=="#/"&&this.actualAppPath.startsWith(n.appPath))this.appPath=this.actualAppPath;else{const i=Gi(this.navigation,this.appPath);this.navigationItem!==(i==null?void 0:i.item)&&(this.appPath=n.appPath)}this.actualAppPath=null,this.updateHashFromAppPath(),n.key===O.navigationHome.key&&n.key!==e&&(this.navigationItemKey=n.key)}oi(Ke,this.navigationItemKey)}updateHashFromAppPath(){const e=new URL(document.location.href);e.hash=this.appPath,history.replaceState({},"",e)}updateApp(e){this.app=on(e)}async loadRolesAndPermissions(){if(!S.authenticated)return;const{roles:e,permissions:n}=await Ls();this.rolesAndPermissions=[...e,...n]}async loadInstanceInfo(){if(S.authenticated)try{const{instanceName:e,allowedLocales:n}=await Ds();this.allowedLocales=n,this.instanceName=["Evento",e].filter(Boolean).join(" | ")}catch(e){console.warn("Unable to fetch/update instance name (this may happen when interrupted by a redirect):",e)}}}se([oe({value:Wi()})],ne.prototype,"locale");se([oe({value:[]})],ne.prototype,"rolesAndPermissions");se([oe({value:""})],ne.prototype,"instanceName");se([oe({value:[]})],ne.prototype,"allowedLocales");se([oe({value:[]})],ne.prototype,"navigation");se([gs({parameter:Ke}),oe({value:null})],ne.prototype,"navigationItemKey");se([oe({value:null})],ne.prototype,"navigationGroup");se([oe({value:O.navigationHome})],ne.prototype,"navigationItem");se([oe({value:on(O.navigationHome)})],ne.prototype,"app");se([oe({value:O.navigationHome.appPath})],ne.prototype,"appPath");const w=new ne,Vi=C`
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
`,Yi=C`
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
`,N=C`
  :host {
    ${Vi}
    ${Yi}
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
`,ur=C`
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
`;function sa(t){var n;const e=document.createElement("style");e.innerText=t,(n=document.querySelector("body"))==null||n.appendChild(e)}var aa=Object.defineProperty,la=Object.getOwnPropertyDescriptor,Xi=(t,e,n,r)=>{for(var i=r>1?void 0:r?la(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&aa(e,n,i),i};let Kt=class extends P{constructor(){super(),this.renderedOffline=!1,this.handleMessage=t=>{switch(t.data.type){case"bkdAppResize":{this.handleResize(t.data.height);break}}},this.handleOnline=()=>{this.renderedOffline&&window.location.reload()},new Q(this,w)}connectedCallback(){super.connectedCallback(),window.addEventListener("message",this.handleMessage),window.addEventListener("online",this.handleOnline)}disconnectedCallback(){window.removeEventListener("message",this.handleMessage),window.removeEventListener("online",this.handleOnline),super.disconnectedCallback()}handleResize(t){this.iframe&&(this.iframe.height=t)}renderAppIframe(){return _`${Xo(w.app.root,_`
        <iframe
          id="app"
          title=${w.app.key}
          src=${`/${w.app.root}${w.appPath}`}
        ></iframe>
      `)}`}renderFooterContent(){return _`
      ${Go(w.navigationItemKey,[["contact",()=>_`<bkd-contact></bkd-contact>`],["legal",()=>_`<bkd-legal></bkd-legal>`],["imprint",()=>_`<bkd-imprint></bkd-imprint>`]],()=>_``)}
    `}render(){return this.renderedOffline=!navigator.onLine,navigator.onLine?S.scope!==w.app.scope?_`<main role="main"></main>`:_`
      <main role="main">
        ${he(w.app.heading,()=>_`<h1>${w.navigationItem.label}</h1>`)}
        ${he(w.app.key==="footer",()=>this.renderFooterContent(),()=>this.renderAppIframe())}
      </main>
    `:_`<main role="main">
        <h1>${g("Offline")}</h1>
        <p>${g("Keine Verbindung vorhanden.")}</p>
      </main>`}};Kt.styles=[N,C`
      /* Large screen */

      :host {
        --bkd-content-margin-top: 3rem;
        --bkd-content-margin-horizontal: var(--bkd-margin-horizontal-large);
        padding: var(--bkd-content-margin-top)
          var(--bkd-content-margin-horizontal) 0
          var(--bkd-content-margin-horizontal);
      }

      h1 {
        font-size: 3.375rem;
        font-weight: 100;
        line-height: 2.25rem;
        letter-spacing: 0.01rem;
        word-spacing: 0.025rem;
        margin: 0 0 calc(3.375rem / 2) 0;
      }

      iframe {
        border: none;
        width: 100%;
      }

      /* Medium screen */

      @media screen and (max-width: 1200px) {
        :host {
          --bkd-content-margin-top: 2rem;
          --bkd-content-margin-horizontal: var(--bkd-margin-horizontal-medium);
        }

        h1 {
          font-size: 2.25rem;
        }
      }

      /* Small screen */

      @media screen and (max-width: 767px) {
        :host {
          --bkd-content-margin-top: 1rem;
          --bkd-content-margin-horizontal: var(--bkd-margin-horizontal-small);
        }
      }
    `];Xi([te("iframe")],Kt.prototype,"iframe",2);Kt=Xi([D("bkd-content"),M()],Kt);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const si=(t,e,n)=>{const r=new Map;for(let i=e;i<=n;i++)r.set(t[i],i);return r},Pe=en(class extends tn{constructor(t){if(super(t),t.type!==sr.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,n){let r;n===void 0?n=e:e!==void 0&&(r=e);const i=[],s=[];let o=0;for(const c of t)i[o]=r?r(c,o):o,s[o]=n(c,o),o++;return{values:s,keys:i}}render(t,e,n){return this.dt(t,e,n).values}update(t,[e,n,r]){const i=Yo(t),{values:s,keys:o}=this.dt(e,n,r);if(!Array.isArray(i))return this.ut=o,s;const c=this.ut??(this.ut=[]),a=[];let h,m,d=0,v=i.length-1,p=0,u=s.length-1;for(;d<=v&&p<=u;)if(i[d]===null)d++;else if(i[v]===null)v--;else if(c[d]===o[p])a[p]=we(i[d],s[p]),d++,p++;else if(c[v]===o[u])a[u]=we(i[v],s[u]),v--,u--;else if(c[d]===o[u])a[u]=we(i[d],s[u]),et(t,a[u+1],i[d]),d++,u--;else if(c[v]===o[p])a[p]=we(i[v],s[p]),et(t,i[d],i[v]),v--,p++;else if(h===void 0&&(h=si(o,p,u),m=si(c,d,v)),h.has(c[d]))if(h.has(c[v])){const b=m.get(o[p]),E=b!==void 0?i[b]:null;if(E===null){const A=et(t,i[d]);we(A,s[p]),a[p]=A}else a[p]=we(E,s[p]),et(t,i[d],E),i[b]=null;p++}else $n(i[v]),v--;else $n(i[d]),d++;for(;p<=u;){const b=et(t,a[u+1]);we(b,s[p]),a[p++]=b}for(;d<=v;){const b=i[d++];b!==null&&$n(b)}return this.ut=o,Oi(t,a),pe}});var ca=Object.defineProperty,da=Object.getOwnPropertyDescriptor,ua=(t,e,n,r)=>{for(var i=r>1?void 0:r?da(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&ca(e,n,i),i};let Bn=class extends P{constructor(){super(),new Q(this,w)}renderFooterLink(t){const e=be(t);return _`
      <a
        href=${e}
        @click=${n=>{n==null||n.preventDefault(),w.navigate(new URL(e))}}
        >${t.label}</a
      >
    `}render(){return _`
      <footer role="contentinfo">
        <div class="copyright">${g("© Bildungs- und Kulturdirektion")}</div>
        <div class="footer-nav">
          ${Pe(O.footer,t=>t.key,this.renderFooterLink.bind(this))}
        </div>
      </footer>
    `}};Bn.styles=[N,C`
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
    `];Bn=ua([D("bkd-footer"),M()],Bn);var ha=Object.defineProperty,pa=Object.getOwnPropertyDescriptor,fa=(t,e,n,r)=>{for(var i=r>1?void 0:r?pa(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&ha(e,n,i),i};let Kn=class extends P{render(){return _`<p>
      ${g("Lernende, Lehrpersonen und Schulmitarbeitende wenden sich bei Fehlermeldungen in Evento Web oder Fragen zu dieser Fachapplikation an die zuständige Stelle in ihrer Schule. Diese wird von der Schule kommuniziert. Im Zweifelsfall kontaktieren Sie bitte das Schulsekretariat.")}
    </p>`}};Kn.styles=[N,ur];Kn=fa([D("bkd-contact"),M()],Kn);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*ga(t,e){const n=typeof e=="function";if(t!==void 0){let r=-1;for(const i of t)r>-1&&(yield n?e(r):e),r++,yield i}}function Wt(t){return ga(t==null?void 0:t.split(`
`),_`<br />`)}var ma=Object.defineProperty,ba=Object.getOwnPropertyDescriptor,va=(t,e,n,r)=>{for(var i=r>1?void 0:r?ba(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&ma(e,n,i),i};let Wn=class extends P{constructor(){super(),new Q(this,w)}render(){return _`
      <div class="content-section">
        <h2>${g("Inhaltsverantwortung")}</h2>
        <p>${g("Zuständige Schule, siehe Kontakt")}</p>
      </div>

      <div class="content-section">
        <h2>${g("Fachapplikation")}</h2>
        <p>
          ${Wt(g(`Bildungs- und Kulturdirektion des Kantons Bern
Mittelschul- und Berufsbildungsamt
Fachbereich Informatikanwendungen
Kasernenstrasse 27
3013 Bern`))}
        </p>
        <p><a href="mailto:fbi.mba@be.ch">${g("E-Mail")}</a></p>
      </div>

      <div class="content-section">
        <h2>${g("Betrieb und Technik")}</h2>
        <p>
          ${Wt(g(`Bedag Informatik AG
Engehaldenstrasse 12
3012 Bern`))}
        </p>
        <p>
          <a href="https://www.bedag.ch/" target="_blank">www.bedag.ch</a>
        </p>
      </div>
    `}};Wn.styles=[N,ur];Wn=va([D("bkd-imprint"),M()],Wn);var ya=Object.defineProperty,wa=Object.getOwnPropertyDescriptor,ka=(t,e,n,r)=>{for(var i=r>1?void 0:r?wa(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&ya(e,n,i),i};let Gn=class extends P{render(){return _`
      <div class="content-section">
        <h2>${g("Haftungsausschluss")}</h2>
        <p>
          ${g("Die Inhalte dieser Fachapplikation sind ein Datenangebot der zuständigen Schule. Obwohl diese die Daten regelmässig auf Richtigkeit und Aktualität hin prüft, lehnen wir, soweit gesetzlich zulässig, jede Haftung für unerwünschte Folgen aus dem Gebrauch dieser Daten ab.")}
        </p>
        <p>
          ${g("Diese Fachapplikation enthält Links zu Angeboten von Dritten. Sie benutzen diese Links auf eigenes Risiko. Für die Inhalte dieser anderen Webseiten übernehmen wir keine Verantwortung. Von unserer Haftung ausgeschlossen ist namentlich die Garantie für die ständige Verfügbarkeit unserer Fachapplikation sowie Schäden (z.B. wegen Verbindungsunterbruch oder schädlicher Software), die durch die Benutzung dieser Fachapplikation entstehen könnten.")}
        </p>
      </div>

      <div class="content-section">
        <h2>${g("Immaterialgüterrechte")}</h2>
        <p>
          ${g("Sichtbare Elemente (Bilder/Icons) dieser Fachapplikation können Dritten gehören. Diese Elemente dürfen deshalb grundsätzlich nicht verwendet werden. Der Kanton Bern kann deren Verwendung ausserhalb der Webseite auf Anfrage erlauben, sofern er dazu selbst berechtigt ist. Für solche Anfragen wenden Sie sich bitte an die Stelle, die für die Fachapplikation verantwortlich ist. Die Kontaktangaben finden Sie im Impressum.")}
        </p>
      </div>

      <div class="content-section">
        <h2>${g("Datenschutzerklärung")}</h2>
        <p>
          ${g("Verantwortliche Stelle im Sinne der Datenschutzgesetze, unter anderem auch der EU-Datenschutzgrundverordnung (DSGVO), ist:")}
        </p>
        <p>
          ${Wt(g(`Mittelschul- und Berufsbildungsamt
Kasernenstrasse 27
3013 Bern`))}
        </p>
        <p><a href="mailto:fbi.mba@be.ch">${g("E-Mail")}</a></p>
        <p>
          <a href="${g("https://www.be.ch/mba")}" target="_blank"
            >${g("https://www.be.ch/mba").replace("https://","")}</a
          >
        </p>
      </div>

      <div class="content-section">
        <h2>${g("Datenbearbeitung")}</h2>
        <p>
          ${g("Der zum Betrieb dieser Fachapplikation eingesetzte Leistungserbringer des Kantons Bern bearbeitet teilweise die IP-Adresse oder technische Angaben der Endgeräte von Personen, die diese Webseite besuchen. Der Leistungserbringer untersteht einer Datenschutzgesetzgebung mit einem dem Berner Recht gleichwertigem Datenschutzniveau. Die IP-Adresse wird verschlüsselt übertragen und vor der weiteren Bearbeitung anonymisiert.")}
        </p>
        <p>
          ${g("Mit der Benutzung dieser Fachapplikation stimmen Sie dieser Datenbearbeitung soweit erforderlich zu. Sie erfolgt im Einzelnen wie folgt:")}
        </p>
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>${g("Leistungserbringer")}</th>
                <th>${g("Bearbeitete Daten")}</th>
                <th>${g("Grund der Bearbeitung")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th style="white-space: nowrap;">
                  ${Wt(g(`Bedag Informatik AG
Engehaldenstrasse 12
3012 Bern`))}
                </th>
                <td>
                  ${g("IP-Adresse, technische Angaben zum Betriebssystem und Webbrowser, Referrer-URL, Hostname, Uhrzeit")}
                </td>
                <td>
                  ${g("Logdaten des Webserves des Kantons Bern zum Erkennen und Beheben von technischen Störungen und Angriffen.")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="content-section">
        <h2>${g("Cookies")}</h2>
        <p>${g("Diese Webseite setzt keine Cookies ein.")}</p>
      </div>

      <div class="content-section">
        <h2>${g("Soziale Medien")}</h2>
        <p>
          ${g("Soweit diese Fachapplikation auf soziale Medien wie YouTube verweist, geschieht das nur durch Links, nicht etwa durch das Ausführen von Programmen (Plug-ins). Mit dem Aufrufen dieser Fachapplikation werden daher keine Personendaten an die sozialen Medien übertragen.")}
        </p>
      </div>

      <div class="content-section">
        <h2>${g("Kontakt bei Fragen")}</h2>
        <p>
          ${g("Wenn Sie Fragen zum Datenschutz im Zusammenhang mit dieser Fachapplikation haben, können Sie sich an die Stelle wenden, die für die Fachapplikation verantwortlich ist. Die Kontaktangaben finden Sie im Impressum.")}
        </p>
      </div>
    `}};Gn.styles=[N,ur,C`
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
    `];Gn=ka([D("bkd-legal"),M()],Gn);function Gt(t,e){if(t===e||t.contains(e))return!0;if("shadowRoot"in t&&t.shadowRoot)return Gt(t.shadowRoot,e);for(const n of Array.from(t.children))if(Gt(n,e))return!0;return!1}class kt{constructor(e,n){this.host=e,this.options=n,this.open=!1,this.closeOnBlur=r=>{this.menuElement&&"relatedTarget"in r&&(this.menuElement.contains(r.relatedTarget)||this.closeDeferred())},this.handleDocumentClick=r=>{const i=r.composedPath()[0];if(!i)return;const s=this.toggleElement&&!Gt(this.toggleElement,i),o=this.menuElement&&!Gt(this.menuElement,i);s&&o&&this.closeDeferred()},this.handleIframeClick=()=>{this.closeDeferred()},this.handleKeydown=r=>{switch(r.key){case"Tab":{this.options.tabInside||this.close();break}case"Escape":{this.close();break}case"ArrowDown":{const i=this.items[this.nextLinkIndex(1)];i==null||i.focus();break}case"ArrowUp":{const i=this.items[this.nextLinkIndex(-1)];i==null||i.focus();break}}},this.host.addController(this)}get toggleElement(){return this.options.queryToggleElement()}get menuElement(){return this.options.queryMenuElement()}get items(){var n;const e=((n=this.options)==null?void 0:n.queryItems)&&this.options.queryItems();return Array.from(e??[])}get focusedItem(){var e;return(e=this.options)!=null&&e.queryFocused?this.options.queryFocused():null}hostDisconnected(){this.removeListeners()}toggle(){this.open=!this.open,this.host.requestUpdate(),this.open?this.addListeners():setTimeout(()=>{this.removeListeners()})}close(){this.open&&this.toggle()}closeDeferred(){setTimeout(()=>this.close())}addListeners(){setTimeout(()=>{var e,n;this.options.tabInside&&((e=this.menuElement)==null||e.addEventListener("focusout",this.closeOnBlur,!0)),(n=this.iframeDocument)==null||n.addEventListener("click",this.handleIframeClick,!0)}),document.addEventListener("click",this.handleDocumentClick,!0),this.host.addEventListener("keydown",this.handleKeydown,!0)}removeListeners(){var e,n;this.options.tabInside&&((e=this.menuElement)==null||e.removeEventListener("focusout",this.closeOnBlur,!0)),document.removeEventListener("click",this.handleDocumentClick,!0),(n=this.iframeDocument)==null||n.removeEventListener("click",this.handleIframeClick,!0),this.host.removeEventListener("keydown",this.handleKeydown,!0)}get iframeDocument(){var i,s;const e=(i=document.querySelector("bkd-portal"))==null?void 0:i.shadowRoot,n=(s=e==null?void 0:e.querySelector("bkd-content"))==null?void 0:s.shadowRoot,r=n==null?void 0:n.querySelector("iframe");return(r==null?void 0:r.contentDocument)??null}activeLinkIndex(){const e=this.focusedItem?this.items.indexOf(this.focusedItem):-1;return e===-1?null:e}nextLinkIndex(e){const n=this.activeLinkIndex(),r=0,i=this.items.length-1;if(n===null)return e>0?r:i;const s=n+e;return s>i?r:s<r?i:s}}var _a=Object.defineProperty,Aa=Object.getOwnPropertyDescriptor,hr=(t,e,n,r)=>{for(var i=r>1?void 0:r?Aa(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&_a(e,n,i),i};let mt=class extends P{constructor(){super(),this.mobileNav=new kt(this,{queryToggleElement:()=>{var t,e;return((e=(t=this.serviceNavElement)==null?void 0:t.shadowRoot)==null?void 0:e.querySelector("bkd-hamburger"))??null},queryMenuElement:()=>{var t;return((t=this.mobileNavElement)==null?void 0:t.shadowRoot)??null},tabInside:!0}),new Q(this,w)}handleLogoClick(t){t.preventDefault(),w.navigationItemKey=O.navigationHome.key,w.appPath=O.navigationHome.appPath}handleNavItemClick(t){const{item:e}=t.detail;w.navigationItemKey=e.key,this.mobileNav.close()}handleSettingsItemClick(t){const{item:e,event:n}=t.detail;e.external||(n.preventDefault(),e.key==="logout"?this.dispatchEvent(new CustomEvent("bkdlogout",{composed:!0,bubbles:!0})):w.navigationItemKey=e.key),this.mobileNav.close()}render(){return _`
      <header role="banner">
        <a
          class="logo"
          href=${be("home")}
          @click=${this.handleLogoClick.bind(this)}
          ><img src="logo.svg" alt=${g("Evento Startseite")}
        /></a>
        <div class="logo-caption">${w.instanceName}</div>
        ${he(navigator.onLine,()=>_`<bkd-service-nav
              .mobileNavOpen=${this.mobileNav.open}
              @bkdhamburgertoggle=${()=>this.mobileNav.toggle()}
              @bkdsettingsitemclick=${this.handleSettingsItemClick.bind(this)}
            ></bkd-service-nav> `)}
        ${he(navigator.onLine,()=>_` <bkd-nav
              @bkdnavitemclick=${this.handleNavItemClick.bind(this)}
            ></bkd-nav>`)}
        ${he(this.mobileNav.open,()=>_`<bkd-mobile-nav
              @bkdnavitemclick=${this.handleNavItemClick.bind(this)}
              @bkdsettingsitemclick=${this.handleSettingsItemClick.bind(this)}
            ></bkd-mobile-nav>`)}
      </header>
    `}};mt.styles=[N,C`
      /* Large screen */

      :host {
        --bkd-header-margin-top: 12px;
        --bkd-header-margin-bottom: calc(2 * var(--bkd-header-margin-top));
        --bkd-header-margin-horizontal: var(--bkd-margin-horizontal-large);

        position: relative;
        padding: var(--bkd-header-margin-top)
          var(--bkd-header-margin-horizontal) var(--bkd-header-margin-bottom)
          var(--bkd-header-margin-horizontal);
        border-bottom: 1px solid var(--bkd-func-bg-grey);
      }

      header {
        display: grid;
        grid-template-columns: max-content auto;
        grid-template-areas:
          "service-nav service-nav"
          "logo ."
          "logo-caption nav";
      }

      bkd-service-nav {
        grid-area: service-nav;
        justify-self: end;
      }

      .logo {
        grid-area: logo;
      }

      .logo > img {
        width: 150px;
      }

      .logo-caption {
        grid-area: logo-caption;
        align-self: baseline;
        max-width: 21rem;
      }

      bkd-nav {
        grid-area: nav;
        align-self: baseline;
        justify-self: end;
      }

      /* Hide mobile nav on large screens */
      @media screen and (min-width: 1201px) {
        bkd-mobile-nav {
          display: none;
        }
      }

      /* Medium screen */

      @media screen and (max-width: 1200px) {
        :host {
          --bkd-header-margin-horizontal: var(--bkd-margin-horizontal-medium);
        }

        header {
          grid-template-areas:
            "logo service-nav"
            "logo-caption logo-caption";
        }

        bkd-service-nav {
          align-self: center;
        }

        .logo > img {
          width: 110px;
        }

        .logo-caption {
          margin-top: 12px;
          font-size: 0.75rem;
          font-weight: 400;
          line-height: 0.75rem;
          max-width: 13.125rem;
        }

        bkd-nav {
          display: none;
        }
      }

      /* Small screen */

      @media screen and (max-width: 767px) {
        :host {
          --bkd-header-margin-horizontal: var(--bkd-margin-horizontal-small);
        }

        bkd-service-nav {
          align-self: start;
          margin-top: 2px; /* Align with logo text */
        }
      }
    `];hr([te("bkd-service-nav")],mt.prototype,"serviceNavElement",2);hr([te("bkd-mobile-nav")],mt.prototype,"mobileNavElement",2);mt=hr([D("bkd-header"),M()],mt);var Ea=Object.defineProperty,Ta=Object.getOwnPropertyDescriptor,Zi=(t,e,n,r)=>{for(var i=r>1?void 0:r?Ta(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&Ea(e,n,i),i};let qt=class extends P{constructor(){super(...arguments),this.open=!1}toggle(){this.dispatchEvent(new CustomEvent("bkdhamburgertoggle",{bubbles:!0,composed:!0}))}render(){const t=this.open?"/icons/close.svg":"/icons/hamburger.svg";return _`
      <button
        class="hamburger"
        aria-expanded=${this.open}
        aria-label=${g("Menü")}
        @click=${this.toggle.bind(this)}
      >
        <img src=${t} alt="" width="32" height="32" />
      </button>
    `}};qt.styles=[N,C`
      :host {
        display: flex;
      }

      button {
        background: transparent;
        border: none;
        cursor: pointer;
      }
    `];Zi([Y()],qt.prototype,"open",2);qt=Zi([D("bkd-hamburger"),M()],qt);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oe=en(class extends tn{constructor(t){var e;if(super(t),t.type!==sr.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var r,i;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!((r=this.nt)!=null&&r.has(s))&&this.st.add(s);return this.render(e)}const n=t.element.classList;for(const s of this.st)s in e||(n.remove(s),this.st.delete(s));for(const s in e){const o=!!e[s];o===this.st.has(s)||(i=this.nt)!=null&&i.has(s)||(o?(n.add(s),this.st.add(s)):(n.remove(s),this.st.delete(s)))}return pe}});var Sa=Object.defineProperty,$a=Object.getOwnPropertyDescriptor,Pa=(t,e,n,r)=>{for(var i=r>1?void 0:r?$a(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&Sa(e,n,i),i};let qn=class extends P{constructor(){super(),new Q(this,w)}handleLocaleChange(t,e){t.preventDefault(),w.locale=e}render(){return _`<ul>
      ${dr.map(t=>_`<li>
            <a
              href="#"
              class=${Oe({active:t===w.locale})}
              aria-current=${t===w.locale}
              @click=${e=>this.handleLocaleChange(e,t)}
            >
              ${t.slice(0,2)}
            </a>
          </li>`)}
    </ul>`}};qn.styles=[N,C`
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
    `];qn=Pa([D("bkd-language-switcher"),M()],qn);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Vn extends tn{constructor(e){if(super(e),this.it=R,e.type!==sr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===R||e==null)return this._t=void 0,this.it=e;if(e===pe)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const n=[e];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}Vn.directiveName="unsafeHTML",Vn.resultType=1;const fe=en(Vn),Ra=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="m22 15.975-1.775 1.775L12 9.525 3.775 17.75 2 15.975l10-10 10 10Z"/></svg>
`,Ca=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M2 8.025 3.775 6.25 12 14.475l8.225-8.225L22 8.025l-10 10-10-10Z"/></svg>
`;function Ji(t){return[{key:"myProfile",label:g("Mein Profil"),href:be("myProfile")},{key:"mySettings",label:g("Einstellungen"),href:be("mySettings")},{key:"videos",label:g("Video-Tutorials"),href:t==="de-CH"?"https://www.youtube.com/playlist?list=PLLDtLiOuctbx-_EQWgWqTO1MRbX845OEf":"https://www.youtube.com/playlist?list=PLLDtLiOuctbyEegnquAkaW4u8cm62lFAU",img:"/icons/external-link.svg",external:!0},{key:"logout",label:g("Logout"),href:"#",img:"/icons/logout.svg"}]}var xa=Object.defineProperty,Oa=Object.getOwnPropertyDescriptor,Qi=(t,e,n,r)=>{for(var i=r>1?void 0:r?Oa(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&xa(e,n,i),i};let Vt=class extends P{constructor(){super(),this.openGroup=null,this.handleKeyup=t=>{t.key==="Tab"&&this.openGroupOfFocusedItem()},new Q(this,w)}connectedCallback(){super.connectedCallback(),this.openGroupOfCurrentItem(),this.addEventListener("keyup",this.handleKeyup)}disconnectedCallback(){this.removeEventListener("keyup",this.handleKeyup),super.disconnectedCallback()}openGroupOfCurrentItem(){this.openGroup||(this.openGroup=w.navigationGroup)}openGroupOfFocusedItem(){var e,n;const t=(e=this.shadowRoot)==null?void 0:e.activeElement;if(t instanceof HTMLElement){const r=t.dataset.itemKey;if(r){const{group:i}=rn(O.navigation,r);i&&i.label!==((n=this.openGroup)==null?void 0:n.label)&&(this.openGroup=i)}}}handleGroupClick(t,e){var n;t.preventDefault(),this.openGroup=e.label!==((n=this.openGroup)==null?void 0:n.label)?e:null}handleNavItemClick(t,e){t.preventDefault(),this.dispatchEvent(new CustomEvent("bkdnavitemclick",{detail:{item:e},composed:!0,bubbles:!0}))}handleSettingsItemClick(t,e){this.dispatchEvent(new CustomEvent("bkdsettingsitemclick",{detail:{item:e,event:t},composed:!0,bubbles:!0}))}renderGroup(t){var n;const e=t.label===((n=this.openGroup)==null?void 0:n.label);return _`
      <li
        class=${Oe({group:!0,open:e})}
        aria-expanded=${e}
      >
        <button
          class="group-header"
          tabindex="-1"
          @click=${r=>this.handleGroupClick(r,t)}
        >
          <label> ${t.label} </label>
          ${fe(e?Ra:Ca)}
        </button>
        <ul class="items">
          ${Pe(t.items,r=>r.label,this.renderNavItem.bind(this))}
        </ul>
      </li>
    `}renderNavItem(t){const e=t.key===w.navigationItemKey;return _`
      <li
        class=${Oe({item:!0,active:e})}
      >
        <a
          href=${be(t)}
          data-item-key=${t.key}
          @click=${n=>this.handleNavItemClick(n,t)}
        >
          ${t.label}
        </a>
      </li>
    `}renderSettingsItem(t){return _`<li>
      <a
        href=${t.href}
        target=${t.external?"_blank":"_self"}
        @click=${e=>this.handleSettingsItemClick(e,t)}
      >
        ${t.label}
      </a>
      ${t.img?_`<img src=${t.img} alt="" width="24" height="24" />`:R}
    </li>`}render(){return _`
      <nav role="navigation" aria-label=${g("Mobile Navigation")}>
        <ul class="nav">
          ${Pe(w.navigation,t=>t.label,this.renderGroup.bind(this))}
        </ul>
        <div class="service-nav">
          <ul>
            ${Pe(Ji(w.locale),t=>t.key,this.renderSettingsItem.bind(this))}
          </ul>
          ${he(w.allowedLocales.length>1,()=>_`<bkd-language-switcher></bkd-language-switcher>`)}
        </div>
      </nav>
    `}};Vt.styles=[N,C`
      :host {
        position: absolute;
        width: 100vw;
        padding: 1.25rem;
        left: 0;
        top: calc(100% + 1px); /* Place right below header */
        height: calc(100vh - 100% - 1px);
        background-color: var(--bkd-func-bg-white);
      }

      nav {
        height: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
      }

      a {
        color: var(--bkd-brand-black);
        text-decoration: none;
      }

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      li.group {
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }

      .group-header {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 0.5rem 1rem;
        cursor: pointer;
        border: none;
        background: transparent;
      }

      .group-header label {
        font-weight: 600;
        cursor: pointer;
      }

      ul.items {
        height: 0;
      }

      .open ul.items {
        height: auto;
      }

      li.item {
        display: flex; /* Animated bottom border should only be as wide as the link */
        border-left: 4px solid transparent;
        padding: 0.5rem 1.25rem;
      }

      li.item a {
        font-weight: 400;
      }

      li.item a:after {
        display: block;
        content: "";
        border-bottom: 2px solid var(--bkd-brand-black);
        transform: scaleX(0);
        transition: transform 100ms ease-in-out;
      }

      li.item a:hover::after,
      li.item a:focus::after,
      li.item a:active::after {
        transform: scaleX(1);
      }

      li.item.active {
        border-color: var(--bkd-brand-red);
        background-color: var(--bkd-brand-sand);
      }

      li.item.active a {
        font-weight: 600;
        color: var(--bkd-brand-red);
      }

      li.item.active a:after {
        border-color: transparent;
      }

      .service-nav {
        background: var(--bkd-brand-sand);
        padding: 1.5rem 2rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }

      .service-nav li {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        height: 36px;
        line-height: 1.5;
      }

      .service-nav a {
        font-size: 0.875rem;
        font-weight: 400;
        color: var(--bkd-func-fg-black);
        letter-spacing: 0.01rem;
        word-spacing: 0.025rem;
        text-decoration: none;
        display: inline-block;
        margin-top: 2px;
      }

      .service-nav a:after {
        display: block;
        content: "";
        height: 2px;
        background-color: var(--bkd-brand-black);
        transform: scaleX(0);
        transition: all 150ms ease-in-out;
      }

      .service-nav a:hover::after,
      .service-nav a:focus::after {
        transform: scaleX(1);
      }

      bkd-language-switcher {
        margin-left: -0.75rem;
      }
    `];Qi([Ve()],Vt.prototype,"openGroup",2);Vt=Qi([D("bkd-mobile-nav"),M()],Vt);var Ia=Object.defineProperty,La=Object.getOwnPropertyDescriptor,Da=(t,e,n,r)=>{for(var i=r>1?void 0:r?La(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&Ia(e,n,i),i};let Yn=class extends P{constructor(){super(),new Q(this,w)}renderGroupToggle(t,e){return _`
      <bkd-nav-group-toggle
        .group=${t}
        ?active=${e}
      ></bkd-nav-group-toggle>
    `}render(){return _`<nav role="navigation" aria-label=${g("Hauptnavigation")}>
      ${Pe(w.navigation,t=>t.label,t=>{var e;return this.renderGroupToggle(t,t.label===((e=w.navigationGroup)==null?void 0:e.label))})}
    </nav>`}};Yn.styles=[N,C`
      /* Large screen */

      nav {
        display: flex;
        justify-content: end;
        gap: 4.375rem;
      }

      /* Medium screen */

      @media screen and (max-width: 1500px) {
        nav {
          gap: 3rem;
        }
      }
    `];Yn=Da([D("bkd-nav"),M()],Yn);var Ma=Object.defineProperty,Na=Object.getOwnPropertyDescriptor,pr=(t,e,n,r)=>{for(var i=r>1?void 0:r?Na(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&Ma(e,n,i),i};let bt=class extends P{constructor(){super(),this.open=!1,new Q(this,w)}handleItemClick(t,e){t.preventDefault(),this.dispatchEvent(new CustomEvent("bkdnavitemclick",{detail:{item:e},composed:!0,bubbles:!0}))}renderItem(t){const e=t.key===w.navigationItemKey;return _`
      <li role="presentation" class=${Oe({active:e})}>
        <a
          role="menuitem"
          href=${be(t)}
          @click=${n=>this.handleItemClick(n,t)}
          >${t.label}</a
        >
      </li>
    `}render(){if(!(!this.group||!this.open))return _`
      <ul role="menu">
        ${Pe(this.group.items,t=>t.key,this.renderItem.bind(this))}
      </ul>
    `}};bt.styles=[N,C`
      :host {
        position: relative;
      }

      ul {
        position: absolute;
        right: 0;
        border: 1px solid var(--bkd-func-bg-grey);
        padding: 1rem 0;
        margin: 0.5rem 0;
        list-style-type: none;
        background: var(--bkd-func-bg-white);
        z-index: var(--bkd-z-index-dropdown);
        min-width: max-content;
      }

      li {
        padding: 0 1.5rem;
        height: 100%;
        line-height: 2.5;
      }

      li.active {
        background: var(--bkd-brand-sand);
        border-left: 6px solid var(--bkd-brand-red);
        padding: 0 calc(1.5rem - 6px);
      }

      li.active a {
        font-weight: 600;
        color: var(--bkd-brand-red);
      }

      li.active a:after {
        background-color: transparent;
      }

      a {
        font-size: 1.125rem;
        font-weight: 300;
        color: var(--bkd-brand-black);
        letter-spacing: 0.01rem;
        word-spacing: 0.025rem;
        text-decoration: none;
        display: inline-block;
      }

      a:after {
        display: block;
        content: "";
        height: 2px;
        background-color: var(--bkd-brand-black);
        transform: scaleX(0);
        transition: all 150ms ease-in-out;
      }

      a.active::after {
        background-color: var(--bkd-brand-red);
      }

      a:hover::after,
      a:focus::after,
      a:active::after,
      a.active::after {
        transform: scaleX(1);
      }
    `];pr([Y()],bt.prototype,"group",2);pr([Y()],bt.prototype,"open",2);bt=pr([D("bkd-nav-group-dropdown"),M()],bt);var za=Object.defineProperty,Ua=Object.getOwnPropertyDescriptor,_t=(t,e,n,r)=>{for(var i=r>1?void 0:r?Ua(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&za(e,n,i),i};let Ie=class extends P{constructor(){super(...arguments),this.dropdown=new kt(this,{queryToggleElement:()=>this.toggleElement??null,queryMenuElement:()=>{var t,e;return((e=(t=this.menuElement)==null?void 0:t.shadowRoot)==null?void 0:e.querySelector('ul[role="menu"]'))??null},queryItems:()=>{var t,e;return((e=(t=this.menuElement)==null?void 0:t.shadowRoot)==null?void 0:e.querySelectorAll("a[role='menuitem']"))??null},queryFocused:()=>{var t,e;return((e=(t=this.menuElement)==null?void 0:t.shadowRoot)==null?void 0:e.activeElement)??null}})}toggle(t){t.preventDefault(),this.dropdown.toggle()}handleItemClick(){this.dropdown.close()}render(){if(this.group)return _`
      <a
        href="#"
        @click=${this.toggle.bind(this)}
        class=${Oe({active:!!this.active})}
        aria-expanded=${this.dropdown.open}
        aria-haspopup="menu"
      >
        ${this.group.label}
      </a>
      <bkd-nav-group-dropdown
        .group=${this.group}
        .open=${this.dropdown.open}
        @bkdnavitemclick=${this.handleItemClick.bind(this)}
      ></bkd-nav-group-dropdown>
    `}};Ie.styles=[N,C`
      a {
        font-size: 1.5rem;
        font-weight: 300;
        color: var(--bkd-brand-black);
        letter-spacing: 0.01rem;
        word-spacing: 0.025rem;
        text-decoration: none;
        display: inline-block;
      }

      a:after {
        display: block;
        content: "";
        height: 2px;
        background-color: var(--bkd-brand-black);
        transform: scaleX(0);
        transition: all 150ms ease-in-out;
      }

      a.active:after {
        background-color: var(--bkd-brand-red);
      }

      a:hover::after,
      a:focus::after,
      a:active::after,
      a.active:after {
        transform: scaleX(1);
      }
    `];_t([Y()],Ie.prototype,"group",2);_t([Y({type:Boolean})],Ie.prototype,"active",2);_t([te("a")],Ie.prototype,"toggleElement",2);_t([te("bkd-nav-group-dropdown")],Ie.prototype,"menuElement",2);Ie=_t([D("bkd-nav-group-toggle"),M()],Ie);var Ha=Object.defineProperty,ja=Object.getOwnPropertyDescriptor,eo=(t,e,n,r)=>{for(var i=r>1?void 0:r?ja(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&Ha(e,n,i),i};let Yt=class extends P{handleClick(t){t.preventDefault()}render(){if(this.item)return _`<a href="#" @click=${this.handleClick.bind(this)}
      >${this.item.label}</a
    >`}};Yt.styles=[N,C``];eo([Y()],Yt.prototype,"item",2);Yt=eo([D("bkd-nav-item-link"),M()],Yt);var Fa=Object.defineProperty,Ba=Object.getOwnPropertyDescriptor,to=(t,e,n,r)=>{for(var i=r>1?void 0:r?Ba(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&Fa(e,n,i),i};let Xt=class extends P{constructor(){super(),this.mobileNavOpen=!1,new Q(this,w)}render(){return _`
      <nav role="navigation" aria-label=${g("Servicenavigation")}>
        <bkd-substitutions-toggle></bkd-substitutions-toggle>
        <bkd-notifications-toggle></bkd-notifications-toggle>
        <bkd-user-settings></bkd-user-settings>
        ${he(w.allowedLocales.length>1,()=>_`<bkd-language-switcher></bkd-language-switcher>`)}
        <bkd-hamburger .open=${this.mobileNavOpen}></bkd-hamburger>
      </nav>
    `}};Xt.styles=[N,C`
      /* Large screen */

      :host {
        margin-left: 1rem;
      }

      nav {
        display: flex;
        align-items: center;
        gap: 2.5rem;
      }

      bkd-hamburger {
        display: none;
      }

      /* Medium screen */

      @media screen and (max-width: 1200px) {
        bkd-user-settings {
          display: none;
        }

        bkd-language-switcher {
          display: none;
        }

        bkd-hamburger {
          display: inherit;
        }
      }

      /* Small screen */

      @media screen and (max-width: 767px) {
        :host {
          gap: 1.5rem;
        }
      }
    `];to([Y()],Xt.prototype,"mobileNavOpen",2);Xt=to([D("bkd-service-nav"),M()],Xt);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*no(t,e){if(t!==void 0){let n=0;for(const r of t)yield e(r,n++)}}var Ka=Object.defineProperty,Wa=Object.getOwnPropertyDescriptor,sn=(t,e,n,r)=>{for(var i=r>1?void 0:r?Wa(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&Ka(e,n,i),i};let We=class extends P{constructor(){super(...arguments),this.availableSubstitutions=[],this.activeSubstitution=null,this.open=!1}get displayedSubstitutions(){return this.availableSubstitutions.filter(t=>!this.activeSubstitution||t.Id===this.activeSubstitution.Id)}handleSubstitutionClick(t,e){t.preventDefault(),this.dispatchEvent(new CustomEvent("bkdsubstitutionstart",{detail:{substitution:e},composed:!0,bubbles:!0}))}handleStopClick(){this.dispatchEvent(new CustomEvent("bkdsubstitutionstop",{composed:!0,bubbles:!0}))}handleCloseClick(){this.dispatchEvent(new CustomEvent("bkdclose"))}renderSubstitution(t){var n;const e=t.Id===((n=this.activeSubstitution)==null?void 0:n.Id);return _`
      <li role="presentation" class=${Oe({active:e})}>
        <a
          role="menuitem"
          href="#"
          @click=${r=>this.handleSubstitutionClick(r,t)}
          >${t.Holder}</a
        >
      </li>
    `}render(){if(this.open)return _`
      <ul role="menu" id="substitutions-menu">
        <li role="presentation" class="dropdown-menu-header">
          <button
            role="menuitem"
            class="dropdown-menu-close"
            @click=${this.handleCloseClick.bind(this)}
          >
            <img src="icons/close.svg" alt=${g("Schliessen")} />
          </button>
          <div class="dropdown-menu-heading">
            ${g("Stellvertretung ausüben")}
          </div>
        </li>
        ${no(this.displayedSubstitutions,this.renderSubstitution.bind(this))}
        ${he(this.activeSubstitution,()=>_`<li role="presentation" class="dropdown-menu-stop">
              <button role="menuitem" @click=${this.handleStopClick.bind(this)}>
                ${g("Stellvertretung beenden")}
              </button>
            </li>`)}
      </ul>
    `}};We.styles=[N,C`
      :host {
        display: block;
        position: relative;
      }

      ul {
        position: absolute;
        right: 0;
        border: 1px solid var(--bkd-func-bg-grey);
        padding: 1rem 0;
        margin: 0.5rem 0;
        list-style-type: none;
        background: var(--bkd-func-bg-white);
        z-index: var(--bkd-z-index-dropdown);
        max-height: 90vh;
        overflow: auto;
      }

      li {
        padding: 0 1.5rem;
        line-height: 2.5;
      }

      li.active {
        background: var(--bkd-brand-sand);
        border-left: 6px solid var(--bkd-brand-red);
        padding: 0 calc(1.5rem - 6px);
      }

      li.active a {
        font-weight: 600;
        color: var(--bkd-brand-red);
      }

      li.active a:after {
        background-color: transparent;
      }

      a {
        font-size: 0.875rem;
        font-weight: 400;
        color: var(--bkd-brand-black);
        letter-spacing: 0.01rem;
        word-spacing: 0.025rem;
        text-decoration: none;
        display: inline-block;
      }

      a:after {
        display: block;
        content: "";
        height: 2px;
        background-color: var(--bkd-brand-black);
        transform: scaleX(0);
        transition: all 150ms ease-in-out;
      }

      a.active::after {
        background-color: var(--bkd-brand-red);
      }

      a:hover::after,
      a:focus::after,
      a:active::after,
      a.active::after {
        transform: scaleX(1);
      }

      button {
        cursor: pointer;
      }

      .dropdown-menu-header,
      .dropdown-menu-stop {
        display: none;
      }

      /* For medium & small screens */
      @media screen and (max-width: 1200px) {
        :host {
          position: static;
        }

        ul {
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          margin: 0;
          padding: var(--bkd-margin-horizontal-small);
          border: none;
          max-height: 100vh;
        }

        li:not(.dropdown-menu-header):not(.dropdown-menu-stop) {
          height: 2.8rem;
          display: flex;
          align-items: center;
        }

        a {
          font-size: 1.125rem;
          font-weight: 300;
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .dropdown-menu-header {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 0 0 0.75rem 0;
          margin-bottom: 2.5rem;
          border-bottom: 1px solid var(--bkd-func-bg-line-grey);
        }

        .dropdown-menu-heading {
          font-size: calc(28 / 16 * 1rem);
        }

        .dropdown-menu-close {
          display: flex;
          margin-left: auto;
          padding: 0;
          background: none;
          border: none;
          aspect-ratio: 1/1;
        }

        .dropdown-menu-stop {
          display: flex;
          justify-content: center;
          margin-top: 2rem;
        }

        .dropdown-menu-stop button {
          display: block;
          width: 100%;
          max-width: 25rem;
          padding: 0.25rem 0.5rem;
          border: none;
          border-radius: calc(2 * 0.25rem + 1.125rem);
          font-size: 1.125rem;
          font-weight: 500;
          background-color: var(--bkd-func-bg-anthrazit);
          color: var(--bkd-func-fg-white);
        }
      }
    `];sn([Y()],We.prototype,"availableSubstitutions",2);sn([Y()],We.prototype,"activeSubstitution",2);sn([Y()],We.prototype,"open",2);We=sn([D("bkd-substitutions-dropdown"),M()],We);const Ga=`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="7.4" fill="none"><path fill="currentColor" d="m6 7.4-6-6L1.4 0 6 4.6 10.6 0 12 1.4Z"/></svg>
`,qa=`<svg xmlns="http://www.w3.org/2000/svg" width="11.414" height="11.414" fill="none"><path stroke="currentColor" stroke-width="2" d="m.707.707 10 10m-10 0 10-10"/></svg>
`,Va=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M2 20v-2.8a3 3 0 0 1 .425-1.563A2.794 2.794 0 0 1 3.6 14.55c1-.5 2.038-.883 3.113-1.15 1.074-.267 2.17-.4 3.287-.4.417 0 .833.03 1.25.088.417.058.833.129 1.25.212v1.575c-.75.367-1.354.85-1.813 1.45-.458.6-.687 1.383-.687 2.35V20H2Zm10 0v-1.4c0-.4.104-.77.313-1.113a1.76 1.76 0 0 1 .887-.737c.6-.25 1.22-.438 1.863-.563a10.11 10.11 0 0 1 3.874 0 9.604 9.604 0 0 1 1.863.563c.383.15.68.396.887.738.209.341.313.712.313 1.112V20H12Zm5-5c-.7 0-1.292-.242-1.775-.725-.483-.483-.725-1.075-.725-1.775s.242-1.292.725-1.775C15.708 10.242 16.3 10 17 10s1.292.242 1.775.725c.483.483.725 1.075.725 1.775s-.242 1.292-.725 1.775C18.292 14.758 17.7 15 17 15Zm-7-3c-1.1 0-2.042-.392-2.825-1.175C6.392 10.042 6 9.1 6 8s.392-2.042 1.175-2.825C7.958 4.392 8.9 4 10 4s2.042.392 2.825 1.175C13.608 5.958 14 6.9 14 8s-.392 2.042-1.175 2.825C12.042 11.608 11.1 12 10 12Z"/></svg>
`;function Ya(t,e,n){const r=document.createElement("form");r.method=t,r.style.visibility="hidden",r.action=e,Object.keys(n).forEach(i=>{const s=document.createElement("input");s.type="hidden",s.name=i,s.value=n[i],r.appendChild(s)}),document.body.appendChild(r),r.submit()}var Xa=Object.defineProperty,Za=Object.getOwnPropertyDescriptor,At=(t,e,n,r)=>{for(var i=r>1?void 0:r?Za(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&Xa(e,n,i),i};let Le=class extends P{constructor(){super(),this.availableSubstitutions=[],this.activeSubstitution=null,this.dropdown=new kt(this,{queryToggleElement:()=>this.toggleElement??null,queryMenuElement:()=>{var t;return((t=this.menuElement)==null?void 0:t.shadowRoot)??null},tabInside:!this.isLargeScreen(),queryItems:()=>{var t,e;return((e=(t=this.menuElement)==null?void 0:t.shadowRoot)==null?void 0:e.querySelectorAll("a[role='menuitem']"))??null},queryFocused:()=>{var t,e;return((e=(t=this.menuElement)==null?void 0:t.shadowRoot)==null?void 0:e.activeElement)??null}}),new Q(this,w)}connectedCallback(){super.connectedCallback(),this.fetch()}async fetch(){const t=await Ms();this.availableSubstitutions=t.filter(n=>this.isNotInFuture(n)).sort((n,r)=>n.Holder.localeCompare(r.Holder));const e=this.getActiveSubstitutionId();this.activeSubstitution=this.availableSubstitutions.find(n=>n.Id===e)??null}isNotInFuture(t){return!!t.DateFrom&&new Date(t.DateFrom)<=new Date}getActiveSubstitutionId(){var t;return((t=S.accessTokenPayload)==null?void 0:t.substitutionId)??null}toggle(t){t.preventDefault(),this.activeSubstitution&&this.isLargeScreen()?this.stopSubstitution():this.dropdown.toggle()}isLargeScreen(){return window.innerWidth>1200}startSubstitution(t){this.activeSubstitution||this.redirect(t,"start")}stopSubstitution(){this.activeSubstitution&&this.redirect(this.activeSubstitution,"stop")}redirect(t,e){const{oAuthServer:n,oAuthPrefix:r}=nn(),i=`${n}/${r}/Authorization/Substitutions/${t.Id}/${e}`;Ya("POST",i,{access_token:S.accessToken??"",redirect_uri:be("home")})}handleSubstitutionStart(t){this.dropdown.close(),this.startSubstitution(t.detail.substitution)}handleSubstitutionStop(){this.dropdown.close(),this.stopSubstitution()}getLabel(){var t;return((t=this.activeSubstitution)==null?void 0:t.Holder)||g("Stellvertretung ausüben")}isAllowed(){return w.app.scope==="Tutoring"}render(){if(!(!this.isAllowed()||this.availableSubstitutions.length===0))return _`
      <button
        class=${Oe({active:!!this.activeSubstitution,open:this.dropdown.open})}
        @click=${this.toggle.bind(this)}
        aria-label=${this.getLabel()}
        aria-expanded=${this.dropdown.open}
        aria-haspopup="menu"
      >
        <div class="icon">${fe(Va)}</div>
        <div class="label">${this.getLabel()}</div>
        <div class="icon-caret">
          ${fe(this.activeSubstitution?qa:Ga)}
        </div>
      </button>
      <bkd-substitutions-dropdown
        .availableSubstitutions=${this.availableSubstitutions}
        .activeSubstitution=${this.activeSubstitution}
        .open=${this.dropdown.open}
        @bkdsubstitutionstart=${this.handleSubstitutionStart.bind(this)}
        @bkdsubstitutionstop=${this.handleSubstitutionStop.bind(this)}
        @bkdclose=${()=>this.dropdown.close()}
      ></bkd-substitutions-dropdown>
    `}};Le.styles=[N,C`
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        padding: 0 1rem;
        height: calc(
          32 / 16 * 1rem
        ); /* Fixed height to match notifications toggle */
        border: none;
        border-radius: calc(32 / 16 * 1rem);
        line-height: 1;
        background-color: var(--bkd-brand-dark-sand);
        color: var(--bkd-func-fg-black);
        cursor: pointer;
      }

      /* When substitution is active */
      button.active {
        background-color: var(--bkd-brand-red);
        color: var(--bkd-func-fg-white);
      }

      .label {
        font-size: calc(14 / 16 * 1rem);
        font-weight: 400;
        max-width: 40ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .icon {
        display: none;
      }
      .icon-caret {
        transform: rotate(0deg);
        transition: transform 100ms;
      }
      button.open .icon-caret {
        transform: rotate(180deg);
      }

      /* For medium & small screens */
      @media screen and (max-width: 1200px) {
        button {
          padding: 0;
          aspect-ratio: 1/1;
          border-radius: 50%;
        }
        button:not(.active) {
          background-color: transparent;
        }
        .icon {
          display: block;
        }
        .label,
        .icon-caret {
          display: none;
        }
      }
    `];At([te("button")],Le.prototype,"toggleElement",2);At([te("bkd-substitutions-dropdown")],Le.prototype,"menuElement",2);At([Ve()],Le.prototype,"availableSubstitutions",2);At([Ve()],Le.prototype,"activeSubstitution",2);Le=At([D("bkd-substitutions-toggle"),M()],Le);const Ja='<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path fill="currentColor" d="M16 2a2.25 2.25 0 0 0-2.25 2.25v1.043C9.87 6.293 7 9.807 7 14v7.5h18V14c0-4.193-2.87-7.707-6.75-8.707V4.25A2.25 2.25 0 0 0 16 2M4 24.5v3h9.404A3 3 0 1 0 19 29a3 3 0 0 0-.407-1.5H28v-3z"/></svg>';function Qa(...t){}var el=Object.defineProperty,tl=Object.getOwnPropertyDescriptor,Et=(t,e,n,r)=>{for(var i=r>1?void 0:r?tl(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&el(e,n,i),i};const st=nn();typeof(st==null?void 0:st.notificationRefreshTime)!="number"&&(st.notificationRefreshTime=30);var Nt=(t=>(t.PENDING="pending",t.ERROR="error",t.SUCCESS="success",t))(Nt||{});let De=class extends P{constructor(){super(...arguments),this.state="pending",this.dropdown=new kt(this,{queryToggleElement:()=>this.toggleElement??null,queryMenuElement:()=>{var t;return((t=this.dropdownElement)==null?void 0:t.shadowRoot)??null},queryItems:()=>{var t,e;return((e=(t=this.dropdownElement)==null?void 0:t.shadowRoot)==null?void 0:e.querySelectorAll("button"))??null},queryFocused:()=>{var t,e;return((e=(t=this.dropdownElement)==null?void 0:t.shadowRoot)==null?void 0:e.activeElement)??null}})}connectedCallback(){super.connectedCallback(),this.fetch(),this.interval=setInterval(()=>this.fetch(),st.notificationRefreshTime*1e3)}disconnectedCallback(){clearInterval(this.interval),super.disconnectedCallback()}handleDeleteAllNotifications(){const t=[];ri(t),this.notifications=t}handleDeleteNotification(t){if(!this.notifications)return;const e=this.notifications.filter(n=>n.id!==t.detail.id);ri(e),this.notifications=e}async fetch(){try{this.notifications=await Ns(),this.state="success"}catch{this.state="error"}}render(){var t,e;return _` <button
        id="notifications-toggle"
        type="button"
        aria-label="${g("Benachrichtigungen")}"
        aria-expanded=${this.dropdown.open}
        @click="${()=>this.dropdown.toggle()}"
      >
        ${fe(Ja)}
        <span
          class="circle"
          ?hidden=${this.state!=="success"||((t=this.notifications)==null?void 0:t.length)===0}
        >
          ${(e=this.notifications)==null?void 0:e.length}
        </span>
      </button>
      <bkd-notifications-dropdown
        .open=${this.dropdown.open}
        .state=${this.state}
        .notifications=${this.notifications}
        @bkddeleteallnotifications=${this.handleDeleteAllNotifications.bind(this)}
        @bkddeletenotification=${this.handleDeleteNotification.bind(this)}
      >
      </bkd-notifications-dropdown>`}};De.styles=[N,C`
      button {
        cursor: pointer;
        border: none;
        background: transparent;
        padding: 0;
        display: flex;
      }

      .circle {
        color: var(--bkd-func-bg-white);
        background-color: var(--bkd-brand-red);
        box-shadow: 0 0 0 2px var(--bkd-func-bg-white);
        border-radius: 50%;
        font-weight: 700;
        font-size: 0.85rem;
        line-height: 1.5;
        text-align: center;
        width: 1.25rem;
        height: 1.25rem;
        margin-left: -10px;
        margin-top: 2px;
      }
    `];Et([te("button")],De.prototype,"toggleElement",2);Et([te("bkd-notifications-dropdown")],De.prototype,"dropdownElement",2);Et([Ve()],De.prototype,"notifications",2);Et([Ve()],De.prototype,"state",2);De=Et([D("bkd-notifications-toggle"),M()],De);const nl='<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" preserveAspectRatio="xMidYMid" style="margin:auto;background:#fff 0 0;display:block;shape-rendering:auto" viewBox="0 0 100 100"><g transform="translate(82 50)"><circle r="6"><animateTransform attributeName="transform" begin="-0.8571428571428571s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.8571428571428571s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(51.429 -42.913 110.137)"><circle r="6" fill-opacity=".857"><animateTransform attributeName="transform" begin="-0.7142857142857143s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.7142857142857143s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(102.857 -10.937 57.696)"><circle r="6" fill-opacity=".714"><animateTransform attributeName="transform" begin="-0.5714285714285714s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.5714285714285714s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(154.286 3.294 34.358)"><circle r="6" fill-opacity=".571"><animateTransform attributeName="transform" begin="-0.42857142857142855s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.42857142857142855s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(-154.286 14.706 15.642)"><circle r="6" fill-opacity=".429"><animateTransform attributeName="transform" begin="-0.2857142857142857s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.2857142857142857s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(-102.857 28.937 -7.696)"><circle r="6" fill-opacity=".286"><animateTransform attributeName="transform" begin="-0.14285714285714285s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.14285714285714285s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(-51.429 60.913 -60.137)"><circle r="6" fill-opacity=".143"><animateTransform attributeName="transform" begin="0s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="0s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g></svg>',rl='<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path fill="currentColor" d="m13 3-1.333 1.333H5V7h21.333V4.333h-6.666L18.333 3zM6.333 9.667V27c0 1.467 1.2 2.667 2.667 2.667h13.333C23.8 29.667 25 28.467 25 27V9.667z"/></svg>';/*! @license DOMPurify 3.2.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.3/LICENSE */const{entries:ro,setPrototypeOf:ai,isFrozen:il,getPrototypeOf:ol,getOwnPropertyDescriptor:sl}=Object;let{freeze:q,seal:J,create:io}=Object,{apply:Xn,construct:Zn}=typeof Reflect<"u"&&Reflect;q||(q=function(e){return e});J||(J=function(e){return e});Xn||(Xn=function(e,n,r){return e.apply(n,r)});Zn||(Zn=function(e,n){return new e(...n)});const It=Z(Array.prototype.forEach),li=Z(Array.prototype.pop),tt=Z(Array.prototype.push),zt=Z(String.prototype.toLowerCase),On=Z(String.prototype.toString),ci=Z(String.prototype.match),nt=Z(String.prototype.replace),al=Z(String.prototype.indexOf),ll=Z(String.prototype.trim),ee=Z(Object.prototype.hasOwnProperty),G=Z(RegExp.prototype.test),rt=cl(TypeError);function Z(t){return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return Xn(t,e,r)}}function cl(t){return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return Zn(t,n)}}function T(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:zt;ai&&ai(t,null);let r=e.length;for(;r--;){let i=e[r];if(typeof i=="string"){const s=n(i);s!==i&&(il(e)||(e[r]=s),i=s)}t[i]=!0}return t}function dl(t){for(let e=0;e<t.length;e++)ee(t,e)||(t[e]=null);return t}function Ee(t){const e=io(null);for(const[n,r]of ro(t))ee(t,n)&&(Array.isArray(r)?e[n]=dl(r):r&&typeof r=="object"&&r.constructor===Object?e[n]=Ee(r):e[n]=r);return e}function it(t,e){for(;t!==null;){const r=sl(t,e);if(r){if(r.get)return Z(r.get);if(typeof r.value=="function")return Z(r.value)}t=ol(t)}function n(){return null}return n}const di=q(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),In=q(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Ln=q(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),ul=q(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Dn=q(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),hl=q(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),ui=q(["#text"]),hi=q(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Mn=q(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),pi=q(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Lt=q(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),pl=J(/\{\{[\w\W]*|[\w\W]*\}\}/gm),fl=J(/<%[\w\W]*|[\w\W]*%>/gm),gl=J(/\$\{[\w\W]*}/gm),ml=J(/^data-[\-\w.\u00B7-\uFFFF]+$/),bl=J(/^aria-[\-\w]+$/),oo=J(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),vl=J(/^(?:\w+script|data):/i),yl=J(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),so=J(/^html$/i),wl=J(/^[a-z][.\w]*(-[.\w]+)+$/i);var fi=Object.freeze({__proto__:null,ARIA_ATTR:bl,ATTR_WHITESPACE:yl,CUSTOM_ELEMENT:wl,DATA_ATTR:ml,DOCTYPE_NAME:so,ERB_EXPR:fl,IS_ALLOWED_URI:oo,IS_SCRIPT_OR_DATA:vl,MUSTACHE_EXPR:pl,TMPLIT_EXPR:gl});const ot={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},kl=function(){return typeof window>"u"?null:window},_l=function(e,n){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let r=null;const i="data-tt-policy-suffix";n&&n.hasAttribute(i)&&(r=n.getAttribute(i));const s="dompurify"+(r?"#"+r:"");try{return e.createPolicy(s,{createHTML(o){return o},createScriptURL(o){return o}})}catch{return console.warn("TrustedTypes policy "+s+" could not be created."),null}},gi=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function ao(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:kl();const e=k=>ao(k);if(e.version="3.2.3",e.removed=[],!t||!t.document||t.document.nodeType!==ot.document)return e.isSupported=!1,e;let{document:n}=t;const r=n,i=r.currentScript,{DocumentFragment:s,HTMLTemplateElement:o,Node:c,Element:a,NodeFilter:h,NamedNodeMap:m=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:d,DOMParser:v,trustedTypes:p}=t,u=a.prototype,b=it(u,"cloneNode"),E=it(u,"remove"),A=it(u,"nextSibling"),x=it(u,"childNodes"),z=it(u,"parentNode");if(typeof o=="function"){const k=n.createElement("template");k.content&&k.content.ownerDocument&&(n=k.content.ownerDocument)}let I,ae="";const{implementation:ln,createNodeIterator:fo,createDocumentFragment:go,getElementsByTagName:mo}=n,{importNode:bo}=r;let X=gi();e.isSupported=typeof ro=="function"&&typeof z=="function"&&ln&&ln.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:cn,ERB_EXPR:dn,TMPLIT_EXPR:un,DATA_ATTR:vo,ARIA_ATTR:yo,IS_SCRIPT_OR_DATA:wo,ATTR_WHITESPACE:br,CUSTOM_ELEMENT:ko}=fi;let{IS_ALLOWED_URI:vr}=fi,U=null;const yr=T({},[...di,...In,...Ln,...Dn,...ui]);let j=null;const wr=T({},[...hi,...Mn,...pi,...Lt]);let L=Object.seal(io(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Ye=null,hn=null,kr=!0,pn=!0,_r=!1,Ar=!0,Me=!1,fn=!0,ve=!1,gn=!1,mn=!1,Ne=!1,Tt=!1,St=!1,Er=!0,Tr=!1;const _o="user-content-";let bn=!0,Xe=!1,ze={},Ue=null;const Sr=T({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let $r=null;const Pr=T({},["audio","video","img","source","image","track"]);let vn=null;const Rr=T({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),$t="http://www.w3.org/1998/Math/MathML",Pt="http://www.w3.org/2000/svg",le="http://www.w3.org/1999/xhtml";let He=le,yn=!1,wn=null;const Ao=T({},[$t,Pt,le],On);let Rt=T({},["mi","mo","mn","ms","mtext"]),Ct=T({},["annotation-xml"]);const Eo=T({},["title","style","font","a","script"]);let Ze=null;const To=["application/xhtml+xml","text/html"],So="text/html";let H=null,je=null;const $o=n.createElement("form"),Cr=function(l){return l instanceof RegExp||l instanceof Function},kn=function(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(je&&je===l)){if((!l||typeof l!="object")&&(l={}),l=Ee(l),Ze=To.indexOf(l.PARSER_MEDIA_TYPE)===-1?So:l.PARSER_MEDIA_TYPE,H=Ze==="application/xhtml+xml"?On:zt,U=ee(l,"ALLOWED_TAGS")?T({},l.ALLOWED_TAGS,H):yr,j=ee(l,"ALLOWED_ATTR")?T({},l.ALLOWED_ATTR,H):wr,wn=ee(l,"ALLOWED_NAMESPACES")?T({},l.ALLOWED_NAMESPACES,On):Ao,vn=ee(l,"ADD_URI_SAFE_ATTR")?T(Ee(Rr),l.ADD_URI_SAFE_ATTR,H):Rr,$r=ee(l,"ADD_DATA_URI_TAGS")?T(Ee(Pr),l.ADD_DATA_URI_TAGS,H):Pr,Ue=ee(l,"FORBID_CONTENTS")?T({},l.FORBID_CONTENTS,H):Sr,Ye=ee(l,"FORBID_TAGS")?T({},l.FORBID_TAGS,H):{},hn=ee(l,"FORBID_ATTR")?T({},l.FORBID_ATTR,H):{},ze=ee(l,"USE_PROFILES")?l.USE_PROFILES:!1,kr=l.ALLOW_ARIA_ATTR!==!1,pn=l.ALLOW_DATA_ATTR!==!1,_r=l.ALLOW_UNKNOWN_PROTOCOLS||!1,Ar=l.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Me=l.SAFE_FOR_TEMPLATES||!1,fn=l.SAFE_FOR_XML!==!1,ve=l.WHOLE_DOCUMENT||!1,Ne=l.RETURN_DOM||!1,Tt=l.RETURN_DOM_FRAGMENT||!1,St=l.RETURN_TRUSTED_TYPE||!1,mn=l.FORCE_BODY||!1,Er=l.SANITIZE_DOM!==!1,Tr=l.SANITIZE_NAMED_PROPS||!1,bn=l.KEEP_CONTENT!==!1,Xe=l.IN_PLACE||!1,vr=l.ALLOWED_URI_REGEXP||oo,He=l.NAMESPACE||le,Rt=l.MATHML_TEXT_INTEGRATION_POINTS||Rt,Ct=l.HTML_INTEGRATION_POINTS||Ct,L=l.CUSTOM_ELEMENT_HANDLING||{},l.CUSTOM_ELEMENT_HANDLING&&Cr(l.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(L.tagNameCheck=l.CUSTOM_ELEMENT_HANDLING.tagNameCheck),l.CUSTOM_ELEMENT_HANDLING&&Cr(l.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(L.attributeNameCheck=l.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),l.CUSTOM_ELEMENT_HANDLING&&typeof l.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(L.allowCustomizedBuiltInElements=l.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Me&&(pn=!1),Tt&&(Ne=!0),ze&&(U=T({},ui),j=[],ze.html===!0&&(T(U,di),T(j,hi)),ze.svg===!0&&(T(U,In),T(j,Mn),T(j,Lt)),ze.svgFilters===!0&&(T(U,Ln),T(j,Mn),T(j,Lt)),ze.mathMl===!0&&(T(U,Dn),T(j,pi),T(j,Lt))),l.ADD_TAGS&&(U===yr&&(U=Ee(U)),T(U,l.ADD_TAGS,H)),l.ADD_ATTR&&(j===wr&&(j=Ee(j)),T(j,l.ADD_ATTR,H)),l.ADD_URI_SAFE_ATTR&&T(vn,l.ADD_URI_SAFE_ATTR,H),l.FORBID_CONTENTS&&(Ue===Sr&&(Ue=Ee(Ue)),T(Ue,l.FORBID_CONTENTS,H)),bn&&(U["#text"]=!0),ve&&T(U,["html","head","body"]),U.table&&(T(U,["tbody"]),delete Ye.tbody),l.TRUSTED_TYPES_POLICY){if(typeof l.TRUSTED_TYPES_POLICY.createHTML!="function")throw rt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof l.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw rt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');I=l.TRUSTED_TYPES_POLICY,ae=I.createHTML("")}else I===void 0&&(I=_l(p,i)),I!==null&&typeof ae=="string"&&(ae=I.createHTML(""));q&&q(l),je=l}},xr=T({},[...In,...Ln,...ul]),Or=T({},[...Dn,...hl]),Po=function(l){let f=z(l);(!f||!f.tagName)&&(f={namespaceURI:He,tagName:"template"});const y=zt(l.tagName),$=zt(f.tagName);return wn[l.namespaceURI]?l.namespaceURI===Pt?f.namespaceURI===le?y==="svg":f.namespaceURI===$t?y==="svg"&&($==="annotation-xml"||Rt[$]):!!xr[y]:l.namespaceURI===$t?f.namespaceURI===le?y==="math":f.namespaceURI===Pt?y==="math"&&Ct[$]:!!Or[y]:l.namespaceURI===le?f.namespaceURI===Pt&&!Ct[$]||f.namespaceURI===$t&&!Rt[$]?!1:!Or[y]&&(Eo[y]||!xr[y]):!!(Ze==="application/xhtml+xml"&&wn[l.namespaceURI]):!1},re=function(l){tt(e.removed,{element:l});try{z(l).removeChild(l)}catch{E(l)}},xt=function(l,f){try{tt(e.removed,{attribute:f.getAttributeNode(l),from:f})}catch{tt(e.removed,{attribute:null,from:f})}if(f.removeAttribute(l),l==="is")if(Ne||Tt)try{re(f)}catch{}else try{f.setAttribute(l,"")}catch{}},Ir=function(l){let f=null,y=null;if(mn)l="<remove></remove>"+l;else{const F=ci(l,/^[\r\n\t ]+/);y=F&&F[0]}Ze==="application/xhtml+xml"&&He===le&&(l='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+l+"</body></html>");const $=I?I.createHTML(l):l;if(He===le)try{f=new v().parseFromString($,Ze)}catch{}if(!f||!f.documentElement){f=ln.createDocument(He,"template",null);try{f.documentElement.innerHTML=yn?ae:$}catch{}}const K=f.body||f.documentElement;return l&&y&&K.insertBefore(n.createTextNode(y),K.childNodes[0]||null),He===le?mo.call(f,ve?"html":"body")[0]:ve?f.documentElement:K},Lr=function(l){return fo.call(l.ownerDocument||l,l,h.SHOW_ELEMENT|h.SHOW_COMMENT|h.SHOW_TEXT|h.SHOW_PROCESSING_INSTRUCTION|h.SHOW_CDATA_SECTION,null)},_n=function(l){return l instanceof d&&(typeof l.nodeName!="string"||typeof l.textContent!="string"||typeof l.removeChild!="function"||!(l.attributes instanceof m)||typeof l.removeAttribute!="function"||typeof l.setAttribute!="function"||typeof l.namespaceURI!="string"||typeof l.insertBefore!="function"||typeof l.hasChildNodes!="function")},Dr=function(l){return typeof c=="function"&&l instanceof c};function ce(k,l,f){It(k,y=>{y.call(e,l,f,je)})}const Mr=function(l){let f=null;if(ce(X.beforeSanitizeElements,l,null),_n(l))return re(l),!0;const y=H(l.nodeName);if(ce(X.uponSanitizeElement,l,{tagName:y,allowedTags:U}),l.hasChildNodes()&&!Dr(l.firstElementChild)&&G(/<[/\w]/g,l.innerHTML)&&G(/<[/\w]/g,l.textContent)||l.nodeType===ot.progressingInstruction||fn&&l.nodeType===ot.comment&&G(/<[/\w]/g,l.data))return re(l),!0;if(!U[y]||Ye[y]){if(!Ye[y]&&zr(y)&&(L.tagNameCheck instanceof RegExp&&G(L.tagNameCheck,y)||L.tagNameCheck instanceof Function&&L.tagNameCheck(y)))return!1;if(bn&&!Ue[y]){const $=z(l)||l.parentNode,K=x(l)||l.childNodes;if(K&&$){const F=K.length;for(let V=F-1;V>=0;--V){const ie=b(K[V],!0);ie.__removalCount=(l.__removalCount||0)+1,$.insertBefore(ie,A(l))}}}return re(l),!0}return l instanceof a&&!Po(l)||(y==="noscript"||y==="noembed"||y==="noframes")&&G(/<\/no(script|embed|frames)/i,l.innerHTML)?(re(l),!0):(Me&&l.nodeType===ot.text&&(f=l.textContent,It([cn,dn,un],$=>{f=nt(f,$," ")}),l.textContent!==f&&(tt(e.removed,{element:l.cloneNode()}),l.textContent=f)),ce(X.afterSanitizeElements,l,null),!1)},Nr=function(l,f,y){if(Er&&(f==="id"||f==="name")&&(y in n||y in $o))return!1;if(!(pn&&!hn[f]&&G(vo,f))){if(!(kr&&G(yo,f))){if(!j[f]||hn[f]){if(!(zr(l)&&(L.tagNameCheck instanceof RegExp&&G(L.tagNameCheck,l)||L.tagNameCheck instanceof Function&&L.tagNameCheck(l))&&(L.attributeNameCheck instanceof RegExp&&G(L.attributeNameCheck,f)||L.attributeNameCheck instanceof Function&&L.attributeNameCheck(f))||f==="is"&&L.allowCustomizedBuiltInElements&&(L.tagNameCheck instanceof RegExp&&G(L.tagNameCheck,y)||L.tagNameCheck instanceof Function&&L.tagNameCheck(y))))return!1}else if(!vn[f]){if(!G(vr,nt(y,br,""))){if(!((f==="src"||f==="xlink:href"||f==="href")&&l!=="script"&&al(y,"data:")===0&&$r[l])){if(!(_r&&!G(wo,nt(y,br,"")))){if(y)return!1}}}}}}return!0},zr=function(l){return l!=="annotation-xml"&&ci(l,ko)},Ur=function(l){ce(X.beforeSanitizeAttributes,l,null);const{attributes:f}=l;if(!f||_n(l))return;const y={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:j,forceKeepAttr:void 0};let $=f.length;for(;$--;){const K=f[$],{name:F,namespaceURI:V,value:ie}=K,Je=H(F);let W=F==="value"?ie:ll(ie);if(y.attrName=Je,y.attrValue=W,y.keepAttr=!0,y.forceKeepAttr=void 0,ce(X.uponSanitizeAttribute,l,y),W=y.attrValue,Tr&&(Je==="id"||Je==="name")&&(xt(F,l),W=_o+W),fn&&G(/((--!?|])>)|<\/(style|title)/i,W)){xt(F,l);continue}if(y.forceKeepAttr||(xt(F,l),!y.keepAttr))continue;if(!Ar&&G(/\/>/i,W)){xt(F,l);continue}Me&&It([cn,dn,un],jr=>{W=nt(W,jr," ")});const Hr=H(l.nodeName);if(Nr(Hr,Je,W)){if(I&&typeof p=="object"&&typeof p.getAttributeType=="function"&&!V)switch(p.getAttributeType(Hr,Je)){case"TrustedHTML":{W=I.createHTML(W);break}case"TrustedScriptURL":{W=I.createScriptURL(W);break}}try{V?l.setAttributeNS(V,F,W):l.setAttribute(F,W),_n(l)?re(l):li(e.removed)}catch{}}}ce(X.afterSanitizeAttributes,l,null)},Ro=function k(l){let f=null;const y=Lr(l);for(ce(X.beforeSanitizeShadowDOM,l,null);f=y.nextNode();)ce(X.uponSanitizeShadowNode,f,null),Mr(f),Ur(f),f.content instanceof s&&k(f.content);ce(X.afterSanitizeShadowDOM,l,null)};return e.sanitize=function(k){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},f=null,y=null,$=null,K=null;if(yn=!k,yn&&(k="<!-->"),typeof k!="string"&&!Dr(k))if(typeof k.toString=="function"){if(k=k.toString(),typeof k!="string")throw rt("dirty is not a string, aborting")}else throw rt("toString is not a function");if(!e.isSupported)return k;if(gn||kn(l),e.removed=[],typeof k=="string"&&(Xe=!1),Xe){if(k.nodeName){const ie=H(k.nodeName);if(!U[ie]||Ye[ie])throw rt("root node is forbidden and cannot be sanitized in-place")}}else if(k instanceof c)f=Ir("<!---->"),y=f.ownerDocument.importNode(k,!0),y.nodeType===ot.element&&y.nodeName==="BODY"||y.nodeName==="HTML"?f=y:f.appendChild(y);else{if(!Ne&&!Me&&!ve&&k.indexOf("<")===-1)return I&&St?I.createHTML(k):k;if(f=Ir(k),!f)return Ne?null:St?ae:""}f&&mn&&re(f.firstChild);const F=Lr(Xe?k:f);for(;$=F.nextNode();)Mr($),Ur($),$.content instanceof s&&Ro($.content);if(Xe)return k;if(Ne){if(Tt)for(K=go.call(f.ownerDocument);f.firstChild;)K.appendChild(f.firstChild);else K=f;return(j.shadowroot||j.shadowrootmode)&&(K=bo.call(r,K,!0)),K}let V=ve?f.outerHTML:f.innerHTML;return ve&&U["!doctype"]&&f.ownerDocument&&f.ownerDocument.doctype&&f.ownerDocument.doctype.name&&G(so,f.ownerDocument.doctype.name)&&(V="<!DOCTYPE "+f.ownerDocument.doctype.name+`>
`+V),Me&&It([cn,dn,un],ie=>{V=nt(V,ie," ")}),I&&St?I.createHTML(V):V},e.setConfig=function(){let k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};kn(k),gn=!0},e.clearConfig=function(){je=null,gn=!1},e.isValidAttribute=function(k,l,f){je||kn({});const y=H(k),$=H(l);return Nr(y,$,f)},e.addHook=function(k,l){typeof l=="function"&&tt(X[k],l)},e.removeHook=function(k){return li(X[k])},e.removeHooks=function(k){X[k]=[]},e.removeAllHooks=function(){X=gi()},e}var Al=ao();const El={ALLOWED_TAGS:["br","div","span","a","ul","ol","li","sup","sub","code","cite"],ALLOWED_ATTR:["style","href"]};function mi(t){return Al.sanitize(t,El)}var Tl=Object.defineProperty,Sl=Object.getOwnPropertyDescriptor,an=(t,e,n,r)=>{for(var i=r>1?void 0:r?Sl(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&Tl(e,n,i),i};let Ge=class extends P{constructor(){super(...arguments),this.open=!1,this.state=Nt.PENDING,this.notifications=[]}handleDeleteAllNotifications(){this.dispatchEvent(new CustomEvent("bkddeleteallnotifications",{bubbles:!0,composed:!0}))}handleDeleteNotification(t){this.dispatchEvent(new CustomEvent("bkddeletenotification",{bubbles:!0,composed:!0,detail:{id:t}}))}renderContent(){return this.state===Nt.ERROR?_`<div class="error">
        ${g("Fehler beim Laden der Benachrichtigungen")}
      </div>`:this.state===Nt.PENDING?_`<div class="pending">${fe(nl)}</div>`:this.notifications.length===0?_`<div class="notification">${g("Keine Benachrichtigungen")}</div>`:Pe(this.notifications,t=>t.id,t=>this.renderNotification(t))}renderNotification(t){const e=mi(t.subject),n=mi(t.body);return _`<div class="notification">
      <div class="text">
        <div class="subject">${fe(e)}</div>
        <div class="body">${fe(n)}</div>
      </div>
      <button
        type="button"
        aria-label="${g("Benachrichtigung löschen")}"
        @click=${()=>this.handleDeleteNotification(t.id)}
      >
        ${fe(rl)}
      </button>
    </div> `}render(){if(this.open)return _`<div id="notifications-dropdown">
      <div class="header">
        <h2>${g("Benachrichtigungen")}</h2>
        <button
          type="button"
          ?disabled=${!this.notifications||this.notifications.length===0}
          @click="${()=>this.handleDeleteAllNotifications()}"
        >
          ${g("Alle löschen")}
        </button>
      </div>
      <div class="content">${this.renderContent()}</div>
    </div>`}};Ge.styles=[N,C`
      :host {
        display: block;
        position: relative;
      }

      #notifications-dropdown {
        position: absolute;
        right: 0;
        border: 1px solid var(--bkd-func-bg-grey);
        margin-top: 0.5rem;
        list-style-type: none;
        background: var(--bkd-func-bg-white);
        z-index: var(--bkd-z-index-dropdown);
        min-width: 33vw;
        max-height: 90vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }

      h2 {
        font-size: 1.5rem;
        font-weight: 300;
        line-height: 1.16;
      }

      .header {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid var(--bkd-func-bg-grey);
        align-items: center;
        padding: 1rem;
      }

      .header button {
        font-weight: 400;
        background-color: var(--bkd-func-bg-anthrazit);
        color: var(--bkd-func-bg-white);
        border-radius: 40px;
        border: none;
        padding: 0.5rem 1.5rem;
        cursor: pointer;
      }

      .header button:hover,
      .header button:focus {
        background-color: var(--bkd-func-bg-anthrazit-hover);
      }

      .header button:disabled {
        cursor: default;
        background-color: var(--bkd-func-bg-grey);
      }

      .content {
        overflow-y: auto;
      }

      .pending,
      .error {
        padding: 1rem;
      }

      .error {
        color: var(--bkd-func-bg-red);
      }

      .notification {
        border-bottom: 1px solid var(--bkd-func-bg-grey);
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .notification button {
        align-self: end;
        cursor: pointer;
        border: none;
        background: transparent;
        padding: 0;
        display: flex;
      }

      .text {
        display: flex;
        justify-content: space-between;
      }

      .subject {
        padding-right: 1rem;
      }

      .body {
        text-align: right;
      }

      /* For medium & small screens */
      @media screen and (max-width: 1200px) {
        :host {
          position: absolute;
          top: calc(100% - 0.5rem); /* Place right below header */
          left: 0;
          width: 100vw;
        }

        #notifications-dropdown {
          min-width: auto;
          width: 100vw;
          right: 0;
        }
      }
    `];an([Y()],Ge.prototype,"open",2);an([Y()],Ge.prototype,"state",2);an([Y()],Ge.prototype,"notifications",2);Ge=an([D("bkd-notifications-dropdown"),M()],Ge);var $l=Object.defineProperty,Pl=Object.getOwnPropertyDescriptor,fr=(t,e,n,r)=>{for(var i=r>1?void 0:r?Pl(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&$l(e,n,i),i};let vt=class extends P{constructor(){super(),this.dropdown=new kt(this,{queryToggleElement:()=>this.toggleElement??null,queryMenuElement:()=>this.menuElement??null,queryItems:()=>{var t;return((t=this.shadowRoot)==null?void 0:t.querySelectorAll("a[role='menuitem']"))??null},queryFocused:()=>{var t;return((t=this.shadowRoot)==null?void 0:t.activeElement)??null}}),new Q(this,w)}handleSettingsItemClick(t,e){this.dropdown.close(),this.dispatchEvent(new CustomEvent("bkdsettingsitemclick",{detail:{item:e,event:t},composed:!0,bubbles:!0}))}renderSettingsItem(t){return _`<li role="presentation">
      <a
        role="menuitem"
        href=${t.href}
        target=${t.external?"_blank":"_self"}
        @click=${e=>this.handleSettingsItemClick(e,t)}
      >
        ${t.label}</a
      >
      ${t.img?_`<img src=${t.img} alt="" width="24" height="24" />`:R}
    </li>`}render(){return _`
      <button
        type="button"
        @click=${()=>this.dropdown.toggle()}
        aria-label=${g("Menü Benutzereinstellungen")}
        aria-expanded=${this.dropdown.open}
        aria-haspopup="menu"
      >
        <img src="/icons/settings.svg" alt="" width="32" height="32" />
      </button>
      <ul role="menu" ?hidden=${!this.dropdown.open}>
        ${no(Ji(w.locale),this.renderSettingsItem.bind(this))}
      </ul>
    `}};vt.styles=[N,C`
      :host {
        display: flex;
        position: relative;
      }

      button {
        background: transparent;
        border: none;
        cursor: pointer;
      }

      ul {
        position: absolute;
        right: 0;
        border: 1px solid var(--bkd-func-bg-grey);
        padding: 1rem 0;
        list-style-type: none;
        margin-top: calc(32px + 0.5rem);
        background: var(--bkd-func-bg-white);
        z-index: var(--bkd-z-index-dropdown);
        min-width: max-content;
      }

      li {
        padding: 0 1.5rem;
        display: flex;
        gap: 0.5rem;
        align-items: center;
        height: 36px;
      }

      li.selected {
        color: var(--bkd-brand-red);
        background: var(--bkd-brand-sand);
        border-left: 6px solid var(--bkd-brand-red);
        font-weight: 700;
        padding: 0 calc(1.5rem - 6px);
      }

      a {
        font-size: 0.875rem;
        font-weight: 400;
        color: var(--bkd-func-fg-black);
        letter-spacing: 0.01rem;
        word-spacing: 0.025rem;
        text-decoration: none;
        display: inline-block;
        margin-top: 2px;
      }

      a:after {
        display: block;
        content: "";
        height: 2px;
        background-color: var(--bkd-brand-black);
        transform: scaleX(0);
        transition: all 150ms ease-in-out;
      }

      a:hover::after,
      a:focus::after {
        transform: scaleX(1);
      }
    `];fr([te("button")],vt.prototype,"toggleElement",2);fr([te('ul[role="menu"]')],vt.prototype,"menuElement",2);vt=fr([D("bkd-user-settings"),M()],vt);function Rl(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var Nn={exports:{}},bi;function Cl(){return bi||(bi=1,function(t,e){(function(n,r){t.exports=r()})(self,()=>(()=>{var n={985:(o,c,a)=>{Object.defineProperty(c,"__esModule",{value:!0}),c.OAuth2Client=void 0,c.generateQueryString=v;const h=a(854),m=a(129);function d(p,u){return new URL(p,u).toString()}function v(p){const u=new URLSearchParams;for(const[b,E]of Object.entries(p))if(Array.isArray(E))for(const A of E)u.append(b,A);else E!==void 0&&u.set(b,E.toString());return u.toString()}c.OAuth2Client=class{constructor(p){this.discoveryDone=!1,this.serverMetadata=null,p!=null&&p.fetch||(p.fetch=fetch.bind(globalThis)),this.settings=p}async refreshToken(p,u){if(!p.refreshToken)throw new Error("This token didn't have a refreshToken. It's not possible to refresh this");const b={grant_type:"refresh_token",refresh_token:p.refreshToken};this.settings.clientSecret||(b.client_id=this.settings.clientId),u!=null&&u.scope&&(b.scope=u.scope.join(" ")),u!=null&&u.resource&&(b.resource=u.resource);const E=await this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",b));return!E.refreshToken&&p.refreshToken&&(E.refreshToken=p.refreshToken),E}async clientCredentials(p){var u;const b=["client_id","client_secret","grant_type","scope"];if(p!=null&&p.extraParams&&Object.keys(p.extraParams).filter(A=>b.includes(A)).length>0)throw new Error(`The following extraParams are disallowed: '${b.join("', '")}'`);const E={grant_type:"client_credentials",scope:(u=p==null?void 0:p.scope)===null||u===void 0?void 0:u.join(" "),resource:p==null?void 0:p.resource,...p==null?void 0:p.extraParams};if(!this.settings.clientSecret)throw new Error("A clientSecret must be provided to use client_credentials");return this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",E))}async password(p){var u;const b={grant_type:"password",...p,scope:(u=p.scope)===null||u===void 0?void 0:u.join(" ")};return this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",b))}get authorizationCode(){return new m.OAuth2AuthorizationCodeClient(this)}async introspect(p){const u={token:p.accessToken,token_type_hint:"access_token"};return this.request("introspectionEndpoint",u)}async revoke(p,u="access_token"){let b=p.accessToken;u==="refresh_token"&&(b=p.refreshToken);const E={token:b,token_type_hint:u};return this.request("revocationEndpoint",E)}async getEndpoint(p){if(this.settings[p]!==void 0)return d(this.settings[p],this.settings.server);if(p!=="discoveryEndpoint"&&(await this.discover(),this.settings[p]!==void 0))return d(this.settings[p],this.settings.server);if(!this.settings.server)throw new Error(`Could not determine the location of ${p}. Either specify ${p} in the settings, or the "server" endpoint to let the client discover it.`);switch(p){case"authorizationEndpoint":return d("/authorize",this.settings.server);case"tokenEndpoint":return d("/token",this.settings.server);case"discoveryEndpoint":return d("/.well-known/oauth-authorization-server",this.settings.server);case"introspectionEndpoint":return d("/introspect",this.settings.server);case"revocationEndpoint":return d("/revoke",this.settings.server)}}async discover(){var p;if(this.discoveryDone)return;let u;this.discoveryDone=!0;try{u=await this.getEndpoint("discoveryEndpoint")}catch{return void console.warn('[oauth2] OAuth2 discovery endpoint could not be determined. Either specify the "server" or "discoveryEndpoint')}const b=await this.settings.fetch(u,{headers:{Accept:"application/json"}});if(!b.ok)return;if(!(!((p=b.headers.get("Content-Type"))===null||p===void 0)&&p.startsWith("application/json")))return void console.warn("[oauth2] OAuth2 discovery endpoint was not a JSON response. Response is ignored");this.serverMetadata=await b.json();const E=[["authorization_endpoint","authorizationEndpoint"],["token_endpoint","tokenEndpoint"],["introspection_endpoint","introspectionEndpoint"],["revocation_endpoint","revocationEndpoint"]];if(this.serverMetadata!==null){for(const[A,x]of E)this.serverMetadata[A]&&(this.settings[x]=d(this.serverMetadata[A],u));this.serverMetadata.token_endpoint_auth_methods_supported&&!this.settings.authenticationMethod&&(this.settings.authenticationMethod=this.serverMetadata.token_endpoint_auth_methods_supported[0])}}async request(p,u){const b=await this.getEndpoint(p),E={"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json"};let A=this.settings.authenticationMethod;switch(this.settings.clientSecret||(A="client_secret_post"),A||(A="client_secret_basic"),A){case"client_secret_basic":E.Authorization="Basic "+btoa(this.settings.clientId+":"+this.settings.clientSecret);break;case"client_secret_post":u.client_id=this.settings.clientId,this.settings.clientSecret&&(u.client_secret=this.settings.clientSecret);break;default:throw new Error("Authentication method not yet supported:"+A+". Open a feature request if you want this!")}const x=await this.settings.fetch(b,{method:"POST",body:v(u),headers:E});let z,I,ae;if(x.status!==204&&x.headers.has("Content-Type")&&x.headers.get("Content-Type").match(/^application\/(.*\+)?json/)&&(z=await x.json()),x.ok)return z;throw z!=null&&z.error?(I="OAuth2 error "+z.error+".",z.error_description&&(I+=" "+z.error_description),ae=z.error):(I="HTTP Error "+x.status+" "+x.statusText,x.status===401&&this.settings.clientSecret&&(I+=". It's likely that the clientId and/or clientSecret was incorrect"),ae=null),new h.OAuth2HttpError(I,ae,x,z)}async tokenResponseToOAuth2Token(p){var u;const b=await p;if(!(b!=null&&b.access_token))throw console.warn("Invalid OAuth2 Token Response: ",b),new TypeError("We received an invalid token response from an OAuth2 server.");return{accessToken:b.access_token,expiresAt:b.expires_in?Date.now()+1e3*b.expires_in:null,refreshToken:(u=b.refresh_token)!==null&&u!==void 0?u:null}}}},129:(o,c,a)=>{Object.defineProperty(c,"__esModule",{value:!0}),c.OAuth2AuthorizationCodeClient=void 0,c.generateCodeVerifier=async function(){const u=d();if(u){const b=new Uint8Array(32);return u.getRandomValues(b),p(b)}{const b=a(483);return new Promise((E,A)=>{b.randomBytes(32,(x,z)=>{x&&A(x),E(z.toString("base64url"))})})}},c.getCodeChallenge=m;const h=a(854);async function m(u){const b=d();if(b!=null&&b.subtle)return["S256",p(await b.subtle.digest("SHA-256",v(u)))];{const E=a(483).createHash("sha256");return E.update(v(u)),["S256",E.digest("base64url")]}}function d(){if(typeof window<"u"&&window.crypto)return window.crypto;if(typeof self<"u"&&self.crypto)return self.crypto;const u=a(483);return u.webcrypto?u.webcrypto:null}function v(u){const b=new Uint8Array(u.length);for(let E=0;E<u.length;E++)b[E]=255&u.charCodeAt(E);return b}function p(u){return btoa(String.fromCharCode(...new Uint8Array(u))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}c.OAuth2AuthorizationCodeClient=class{constructor(u){this.client=u}async getAuthorizeUri(u){const[b,E]=await Promise.all([u.codeVerifier?m(u.codeVerifier):void 0,this.client.getEndpoint("authorizationEndpoint")]),A=new URLSearchParams({client_id:this.client.settings.clientId,response_type:"code",redirect_uri:u.redirectUri});if(b&&(A.set("code_challenge_method",b[0]),A.set("code_challenge",b[1])),u.state&&A.set("state",u.state),u.scope&&A.set("scope",u.scope.join(" ")),u.resource)for(const x of[].concat(u.resource))A.append("resource",x);if(u.responseMode&&u.responseMode!=="query"&&A.append("response_mode",u.responseMode),u.extraParams)for(const[x,z]of Object.entries(u.extraParams)){if(A.has(x))throw new Error(`Property in extraParams would overwrite standard property: ${x}`);A.set(x,z)}return E+"?"+A.toString()}async getTokenFromCodeRedirect(u,b){const{code:E}=this.validateResponse(u,{state:b.state});return this.getToken({code:E,redirectUri:b.redirectUri,codeVerifier:b.codeVerifier})}validateResponse(u,b){var E;let A=(u=new URL(u)).searchParams;if(!A.has("code")&&!A.has("error")&&u.hash.length>0&&(A=new URLSearchParams(u.hash.slice(1))),A.has("error"))throw new h.OAuth2Error((E=A.get("error_description"))!==null&&E!==void 0?E:"OAuth2 error",A.get("error"));if(!A.has("code"))throw new Error(`The url did not contain a code parameter ${u}`);if(b.state&&b.state!==A.get("state"))throw new Error(`The "state" parameter in the url did not match the expected value of ${b.state}`);return{code:A.get("code"),scope:A.has("scope")?A.get("scope").split(" "):void 0}}async getToken(u){const b={grant_type:"authorization_code",code:u.code,redirect_uri:u.redirectUri,code_verifier:u.codeVerifier,resource:u.resource};return this.client.tokenResponseToOAuth2Token(this.client.request("tokenEndpoint",b))}}},854:(o,c)=>{Object.defineProperty(c,"__esModule",{value:!0}),c.OAuth2HttpError=c.OAuth2Error=void 0;class a extends Error{constructor(m,d){super(m),this.oauth2Code=d}}c.OAuth2Error=a,c.OAuth2HttpError=class extends a{constructor(h,m,d,v){super(h,m),this.httpCode=d.status,this.response=d,this.parsedBody=v}}},238:(o,c)=>{Object.defineProperty(c,"__esModule",{value:!0}),c.OAuth2Fetch=void 0,c.OAuth2Fetch=class{constructor(a){this.token=null,this.activeGetStoredToken=null,this.activeRefresh=null,this.refreshTimer=null,(a==null?void 0:a.scheduleRefresh)===void 0&&(a.scheduleRefresh=!0),this.options=a,a.getStoredToken&&(this.activeGetStoredToken=(async()=>{this.token=await a.getStoredToken(),this.activeGetStoredToken=null})()),this.scheduleRefresh()}async fetch(a,h){const m=new Request(a,h);return this.mw()(m,d=>fetch(d))}mw(){return async(a,h)=>{const m=await this.getAccessToken();let d=a.clone();d.headers.set("Authorization","Bearer "+m);let v=await h(d);if(!v.ok&&v.status===401){const p=await this.refreshToken();d=a.clone(),d.headers.set("Authorization","Bearer "+p.accessToken),v=await h(d)}return v}}async getToken(){return this.token&&(this.token.expiresAt===null||this.token.expiresAt>Date.now())?this.token:this.refreshToken()}async getAccessToken(){return await this.activeGetStoredToken,(await this.getToken()).accessToken}async refreshToken(){var a,h;if(this.activeRefresh)return this.activeRefresh;const m=this.token;this.activeRefresh=(async()=>{var d,v;let p=null;try{m!=null&&m.refreshToken&&(p=await this.options.client.refreshToken(m))}catch{console.warn("[oauth2] refresh token not accepted, we'll try reauthenticating")}if(p||(p=await this.options.getNewToken()),!p){const u=new Error("Unable to obtain OAuth2 tokens, a full reauth may be needed");throw(v=(d=this.options).onError)===null||v===void 0||v.call(d,u),u}return p})();try{const d=await this.activeRefresh;return this.token=d,(h=(a=this.options).storeToken)===null||h===void 0||h.call(a,d),this.scheduleRefresh(),d}catch(d){throw this.options.onError&&this.options.onError(d),d}finally{this.activeRefresh=null}}scheduleRefresh(){var a;if(!this.options.scheduleRefresh||(this.refreshTimer&&(clearTimeout(this.refreshTimer),this.refreshTimer=null),!(!((a=this.token)===null||a===void 0)&&a.expiresAt)||!this.token.refreshToken))return;const h=this.token.expiresAt-Date.now();h<12e4||(this.refreshTimer=setTimeout(async()=>{try{await this.refreshToken()}catch(m){console.error("[fetch-mw-oauth2] error while doing a background OAuth2 auto-refresh",m)}},h-6e4))}}},483:()=>{}},r={};function i(o){var c=r[o];if(c!==void 0)return c.exports;var a=r[o]={exports:{}};return n[o](a,a.exports,i),a.exports}var s={};return(()=>{var o=s;Object.defineProperty(o,"__esModule",{value:!0}),o.OAuth2HttpError=o.OAuth2Error=o.OAuth2Fetch=o.generateCodeVerifier=o.OAuth2AuthorizationCodeClient=o.OAuth2Client=void 0;var c=i(985);Object.defineProperty(o,"OAuth2Client",{enumerable:!0,get:function(){return c.OAuth2Client}});var a=i(129);Object.defineProperty(o,"OAuth2AuthorizationCodeClient",{enumerable:!0,get:function(){return a.OAuth2AuthorizationCodeClient}}),Object.defineProperty(o,"generateCodeVerifier",{enumerable:!0,get:function(){return a.generateCodeVerifier}});var h=i(238);Object.defineProperty(o,"OAuth2Fetch",{enumerable:!0,get:function(){return h.OAuth2Fetch}});var m=i(854);Object.defineProperty(o,"OAuth2Error",{enumerable:!0,get:function(){return m.OAuth2Error}}),Object.defineProperty(o,"OAuth2HttpError",{enumerable:!0,get:function(){return m.OAuth2HttpError}})})(),s})())}(Nn)),Nn.exports}var gr=Cl(),Fe={},ke={},vi;function lo(){if(vi)return ke;vi=1,Object.defineProperty(ke,"__esModule",{value:!0}),ke.OAuth2HttpError=ke.OAuth2Error=void 0;class t extends Error{constructor(r,i){super(r),this.oauth2Code=i}}ke.OAuth2Error=t;class e extends t{constructor(r,i,s,o){super(r,i),this.httpCode=s.status,this.response=s,this.parsedBody=o}}return ke.OAuth2HttpError=e,ke}var _e={};const xl={},Ol=Object.freeze(Object.defineProperty({__proto__:null,default:xl},Symbol.toStringTag,{value:"Module"})),zn=Rl(Ol);var yi;function co(){if(yi)return _e;yi=1,Object.defineProperty(_e,"__esModule",{value:!0}),_e.OAuth2AuthorizationCodeClient=void 0,_e.generateCodeVerifier=n,_e.getCodeChallenge=r;const t=lo();class e{constructor(a){this.client=a}async getAuthorizeUri(a){const[h,m]=await Promise.all([a.codeVerifier?r(a.codeVerifier):void 0,this.client.getEndpoint("authorizationEndpoint")]),d=new URLSearchParams({client_id:this.client.settings.clientId,response_type:"code",redirect_uri:a.redirectUri});if(h&&(d.set("code_challenge_method",h[0]),d.set("code_challenge",h[1])),a.state&&d.set("state",a.state),a.scope&&d.set("scope",a.scope.join(" ")),a.resource)for(const v of[].concat(a.resource))d.append("resource",v);if(a.responseMode&&a.responseMode!=="query"&&d.append("response_mode",a.responseMode),a.extraParams)for(const[v,p]of Object.entries(a.extraParams)){if(d.has(v))throw new Error(`Property in extraParams would overwrite standard property: ${v}`);d.set(v,p)}return m+"?"+d.toString()}async getTokenFromCodeRedirect(a,h){const{code:m}=this.validateResponse(a,{state:h.state});return this.getToken({code:m,redirectUri:h.redirectUri,codeVerifier:h.codeVerifier})}validateResponse(a,h){var m;a=new URL(a);let d=a.searchParams;if(!d.has("code")&&!d.has("error")&&a.hash.length>0&&(d=new URLSearchParams(a.hash.slice(1))),d.has("error"))throw new t.OAuth2Error((m=d.get("error_description"))!==null&&m!==void 0?m:"OAuth2 error",d.get("error"));if(!d.has("code"))throw new Error(`The url did not contain a code parameter ${a}`);if(h.state&&h.state!==d.get("state"))throw new Error(`The "state" parameter in the url did not match the expected value of ${h.state}`);return{code:d.get("code"),scope:d.has("scope")?d.get("scope").split(" "):void 0}}async getToken(a){const h={grant_type:"authorization_code",code:a.code,redirect_uri:a.redirectUri,code_verifier:a.codeVerifier,resource:a.resource};return this.client.tokenResponseToOAuth2Token(this.client.request("tokenEndpoint",h))}}_e.OAuth2AuthorizationCodeClient=e;async function n(){const c=i();if(c){const a=new Uint8Array(32);return c.getRandomValues(a),o(a)}else{const a=zn;return new Promise((h,m)=>{a.randomBytes(32,(d,v)=>{d&&m(d),h(v.toString("base64url"))})})}}async function r(c){const a=i();if(a!=null&&a.subtle)return["S256",o(await a.subtle.digest("SHA-256",s(c)))];{const m=zn.createHash("sha256");return m.update(s(c)),["S256",m.digest("base64url")]}}function i(){if(typeof window<"u"&&window.crypto)return window.crypto;if(typeof self<"u"&&self.crypto)return self.crypto;const c=zn;return c.webcrypto?c.webcrypto:null}function s(c){const a=new Uint8Array(c.length);for(let h=0;h<c.length;h++)a[h]=c.charCodeAt(h)&255;return a}function o(c){return btoa(String.fromCharCode(...new Uint8Array(c))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}return _e}var wi;function Il(){if(wi)return Fe;wi=1,Object.defineProperty(Fe,"__esModule",{value:!0}),Fe.OAuth2Client=void 0,Fe.generateQueryString=i;const t=lo(),e=co();class n{constructor(o){this.discoveryDone=!1,this.serverMetadata=null,o!=null&&o.fetch||(o.fetch=fetch.bind(globalThis)),this.settings=o}async refreshToken(o,c){if(!o.refreshToken)throw new Error("This token didn't have a refreshToken. It's not possible to refresh this");const a={grant_type:"refresh_token",refresh_token:o.refreshToken};this.settings.clientSecret||(a.client_id=this.settings.clientId),c!=null&&c.scope&&(a.scope=c.scope.join(" ")),c!=null&&c.resource&&(a.resource=c.resource);const h=await this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",a));return!h.refreshToken&&o.refreshToken&&(h.refreshToken=o.refreshToken),h}async clientCredentials(o){var c;const a=["client_id","client_secret","grant_type","scope"];if(o!=null&&o.extraParams&&Object.keys(o.extraParams).filter(m=>a.includes(m)).length>0)throw new Error(`The following extraParams are disallowed: '${a.join("', '")}'`);const h={grant_type:"client_credentials",scope:(c=o==null?void 0:o.scope)===null||c===void 0?void 0:c.join(" "),resource:o==null?void 0:o.resource,...o==null?void 0:o.extraParams};if(!this.settings.clientSecret)throw new Error("A clientSecret must be provided to use client_credentials");return this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",h))}async password(o){var c;const a={grant_type:"password",...o,scope:(c=o.scope)===null||c===void 0?void 0:c.join(" ")};return this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",a))}get authorizationCode(){return new e.OAuth2AuthorizationCodeClient(this)}async introspect(o){const c={token:o.accessToken,token_type_hint:"access_token"};return this.request("introspectionEndpoint",c)}async revoke(o,c="access_token"){let a=o.accessToken;c==="refresh_token"&&(a=o.refreshToken);const h={token:a,token_type_hint:c};return this.request("revocationEndpoint",h)}async getEndpoint(o){if(this.settings[o]!==void 0)return r(this.settings[o],this.settings.server);if(o!=="discoveryEndpoint"&&(await this.discover(),this.settings[o]!==void 0))return r(this.settings[o],this.settings.server);if(!this.settings.server)throw new Error(`Could not determine the location of ${o}. Either specify ${o} in the settings, or the "server" endpoint to let the client discover it.`);switch(o){case"authorizationEndpoint":return r("/authorize",this.settings.server);case"tokenEndpoint":return r("/token",this.settings.server);case"discoveryEndpoint":return r("/.well-known/oauth-authorization-server",this.settings.server);case"introspectionEndpoint":return r("/introspect",this.settings.server);case"revocationEndpoint":return r("/revoke",this.settings.server)}}async discover(){var o;if(this.discoveryDone)return;this.discoveryDone=!0;let c;try{c=await this.getEndpoint("discoveryEndpoint")}catch{console.warn('[oauth2] OAuth2 discovery endpoint could not be determined. Either specify the "server" or "discoveryEndpoint');return}const a=await this.settings.fetch(c,{headers:{Accept:"application/json"}});if(!a.ok)return;if(!(!((o=a.headers.get("Content-Type"))===null||o===void 0)&&o.startsWith("application/json"))){console.warn("[oauth2] OAuth2 discovery endpoint was not a JSON response. Response is ignored");return}this.serverMetadata=await a.json();const h=[["authorization_endpoint","authorizationEndpoint"],["token_endpoint","tokenEndpoint"],["introspection_endpoint","introspectionEndpoint"],["revocation_endpoint","revocationEndpoint"]];if(this.serverMetadata!==null){for(const[m,d]of h)this.serverMetadata[m]&&(this.settings[d]=r(this.serverMetadata[m],c));this.serverMetadata.token_endpoint_auth_methods_supported&&!this.settings.authenticationMethod&&(this.settings.authenticationMethod=this.serverMetadata.token_endpoint_auth_methods_supported[0])}}async request(o,c){const a=await this.getEndpoint(o),h={"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json"};let m=this.settings.authenticationMethod;switch(this.settings.clientSecret||(m="client_secret_post"),m||(m="client_secret_basic"),m){case"client_secret_basic":h.Authorization="Basic "+btoa(this.settings.clientId+":"+this.settings.clientSecret);break;case"client_secret_post":c.client_id=this.settings.clientId,this.settings.clientSecret&&(c.client_secret=this.settings.clientSecret);break;default:throw new Error("Authentication method not yet supported:"+m+". Open a feature request if you want this!")}const d=await this.settings.fetch(a,{method:"POST",body:i(c),headers:h});let v;if(d.status!==204&&d.headers.has("Content-Type")&&d.headers.get("Content-Type").match(/^application\/(.*\+)?json/)&&(v=await d.json()),d.ok)return v;let p,u;throw v!=null&&v.error?(p="OAuth2 error "+v.error+".",v.error_description&&(p+=" "+v.error_description),u=v.error):(p="HTTP Error "+d.status+" "+d.statusText,d.status===401&&this.settings.clientSecret&&(p+=". It's likely that the clientId and/or clientSecret was incorrect"),u=null),new t.OAuth2HttpError(p,u,d,v)}async tokenResponseToOAuth2Token(o){var c;const a=await o;if(!(a!=null&&a.access_token))throw console.warn("Invalid OAuth2 Token Response: ",a),new TypeError("We received an invalid token response from an OAuth2 server.");return{accessToken:a.access_token,expiresAt:a.expires_in?Date.now()+a.expires_in*1e3:null,refreshToken:(c=a.refresh_token)!==null&&c!==void 0?c:null}}}Fe.OAuth2Client=n;function r(s,o){return new URL(s,o).toString()}function i(s){const o=new URLSearchParams;for(const[c,a]of Object.entries(s))if(Array.isArray(a))for(const h of a)o.append(c,h);else a!==void 0&&o.set(c,a.toString());return o.toString()}return Fe}var Ll=Il(),Dl=co(),uo=(t=>(t.Refresh="refresh",t.Access="access",t))(uo||{});const ct={refresh:void 0,access:void 0};function Ml({renewRefreshToken:t,renewAccessToken:e}){Dt("refresh",S.refreshTokenPayload,t),S.onRefreshTokenUpdate(n=>Dt("refresh",n,t)),Dt("access",S.accessTokenPayload,e),S.onAccessTokenUpdate(n=>Dt("access",n,e))}function Nl(){Object.values(uo).forEach(t=>{ct[t]&&clearTimeout(ct[t])})}function Dt(t,e,n){if(ct[t]&&clearTimeout(ct[t]),!e)return;const r=bs(e),i=r-Ui;if(r<=0)return;const s=i>0?i:Math.max(r+1e3,0);ct[t]=setTimeout(()=>zl(t,e,n),s)}function zl(t,e,n){const{scope:r,locale:i}=e;Ul(r,async()=>{const s=t==="access"?Fi(r):gt(r),o=s?$e(s):null;o&&(ms(o)?await n(o.scope,o.locale):t==="access"?S.accessToken=s:S.refreshToken=s)})}function Ul(t,e){navigator.locks.request(`bkdTokenRenewal_${t}`,async()=>{await e()})}const B=nn();if(typeof(B==null?void 0:B.oAuthServer)!="string")throw new Error("Invalid 'oAuthServer' setting");if(typeof(B==null?void 0:B.oAuthPrefix)!="string")throw new Error("Invalid 'oAuthPrefix' setting");if(typeof(B==null?void 0:B.oAuthClientId)!="string")throw new Error("Invalid 'clientId' setting");function Hl(){return new gr.OAuth2Client({server:B.oAuthServer,clientId:B.oAuthClientId,tokenEndpoint:`${B.oAuthPrefix}/Authorization/Token`,get authorizationEndpoint(){return Bl()},fetch:(...t)=>fetch(...t)})}async function jl(t,e,n){Ml({renewRefreshToken:(o,c)=>Qn(t,o,c),renewAccessToken:(o,c)=>Qn(t,o,c)});const r=Rs(),i=await Wl(t,r);if(i){Gl(i,r);return}const s=ql();if(s){Vl(s);return}await Jn(t,e,n)}async function Jn(t,e,n){if(Kl(e,n),Hi(S.refreshTokenPayload))return Zt(t,e,n);if(!S.accessToken)return Qn(t,e,n)}async function Zt(t,e,n,r=new URL(document.location.href)){r.searchParams.set(xe,n);const i=new URL(await t.getEndpoint("authorizationEndpoint")),s=await gr.generateCodeVerifier();Cs(s,r.toString());const[o,c]=await Dl.getCodeChallenge(s);i.searchParams.set("clientId",t.settings.clientId),i.searchParams.set("redirectUrl",r.toString()),i.searchParams.set("culture_info",n),i.searchParams.set("application_scope",e),i.searchParams.set("response_type","code"),i.searchParams.set("code_challenge_method",o),i.searchParams.set("code_challenge",c),document.location.href=i.toString()}async function Fl(t){const e=cr();if(!e)throw new Error("No instance available");const{accessToken:n,scope:r,locale:i}=S;if(!(!n||!r||!i))try{await Xl(t,e,n)}catch(s){if(!(s instanceof SyntaxError))throw s}finally{S.resetAllTokens(),Nl(),await Zt(t,r,i,new URL(be(O.navigationHome)))}}function Bl(){const t=cr();return t?`${B.oAuthPrefix}/Authorization/${t}/Login`:`${B.oAuthPrefix}/Authorization/Login`}function Kl(t,e){if(ni(S.accessToken,t,e))return;const n=Fi(t);if(ni(n,t,e)){S.accessToken=n,S.refreshToken=gt(t);return}S.accessToken=null,S.refreshToken=gt(t)}async function Wl(t,e){return new URLSearchParams(document.location.search).get("code")&&(e!=null&&e.redirectUri)?await t.authorizationCode.getTokenFromCodeRedirect(document.location.href,{redirectUri:e.redirectUri,codeVerifier:e.codeVerifier}):null}function Gl({refreshToken:t,accessToken:e},n){var i;S.refreshToken=t,S.accessToken=e;const r=(i=S.accessTokenPayload)==null?void 0:i.instanceId;r&&ks(r),n!=null&&n.redirectUri&&w.navigate(new URL(n.redirectUri))}function ql(){const t=new URLSearchParams(document.location.search),e=t.get("access_token"),n=t.get("expires_in"),r=t.get("refresh_token");return e?{accessToken:e,expiresAt:n?Date.now()+parseInt(n,10)*1e3:null,refreshToken:r||null}:null}function Vl(t){const{refreshToken:e,accessToken:n}=t;S.refreshToken=e,S.accessToken=n;const r=new URL(document.location.href);r.searchParams.delete("access_token"),r.searchParams.delete("expires_in"),r.searchParams.delete("refresh_token"),window.parent===window?history.replaceState({},"",r):window.parent.location.assign(r)}async function Qn(t,e,n){const r=cr(),i=gt(e);if(!r||!i)return Zt(t,e,n);try{const{refreshToken:s,accessToken:o}=await Yl(t,r,e,n,i);Qa("Received renewed tokens"),S.refreshToken=s,S.accessToken=o}catch{return Zt(t,e,n)}}async function Yl(t,e,n,r,i){const{access_token:s,refresh_token:o,expires_in:c}=await ho(t,`${B.oAuthPrefix}/Authorization/${e}/Token`,{refresh_token:i,grant_type:"refresh_token",client_id:B.oAuthClientId,culture_info:r,scope:n});return{accessToken:s,refreshToken:o,expiresAt:c?Date.now()+c*1e3:null}}function Xl(t,e,n){return ho(t,`${B.oAuthPrefix}/Authorization/${e}/Logout`,{access_token:n})}async function ho(t,e,n){var h;const r=new URL(e,t.settings.server).toString(),i={"Content-Type":"application/x-www-form-urlencoded"},s=await fetch(r,{method:"POST",body:n&&Ll.generateQueryString(n),headers:i});if(s.ok)return await s.json();let o,c,a;throw(h=s.headers.get("Content-Type"))!=null&&h.startsWith("application/json")&&(o=await s.json()),o!=null&&o.error?(c="OAuth2 error "+o.error+".",o.error_description&&(c+=" "+o.error_description),a=o.error):(c="HTTP Error "+s.status+" "+s.statusText,a=null),new gr.OAuth2Error(c,a)}var Zl=Object.defineProperty,Jl=Object.getOwnPropertyDescriptor,po=(t,e,n,r)=>{for(var i=r>1?void 0:r?Jl(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&Zl(e,n,i),i};const Ut=Hl(),Ql=async function(){await jl(Ut,na(),Wi()),w.init()}();sa(C`
    ${Yi}
    :root {
      ${Vi}
    }
  `.toString());let Jt=class extends P{constructor(){super(),this.authReady=!1,this.subscriptions=[],this.handleMessage=({data:t})=>{switch(t.type){case"bkdAppPushState":{const e=t.args[2];this.updateUrlAndNavigationState(e,!1);break}case"bkdAppReplaceState":{const e=t.args[2];xn(Cn(e),!0);break}case"bkdAppHashChange":{const{url:e}=t;xn(Cn(e));break}}},Ql.then(()=>this.authReady=!0),new Q(this,w)}connectedCallback(){super.connectedCallback(),w.initialized.then(()=>setTimeout(()=>{S.scope!==w.app.scope&&Jn(Ut,w.app.scope,w.locale)})),this.subscriptions.push(w.subscribeScopeAndLocale((e,n)=>Jn(Ut,e,n),!0)),this.subscriptions.push(w.subscribeInstanceName(this.updateTitle.bind(this))),this.subscriptions.push(w.subscribeNavigationItem(this.updateTitle.bind(this))),window.addEventListener("message",this.handleMessage);const t=new URL(location.href);w.actualAppPath=t.hash,window.addEventListener("hashchange",this.handleHashChange)}disconnectedCallback(){super.disconnectedCallback(),this.subscriptions.forEach(t=>t()),window.removeEventListener("message",this.handleMessage),window.removeEventListener("hashchange",this.handleHashChange)}updateTitle(){const{instanceName:t,navigationItem:e}=w,n=(e==null?void 0:e.label)&&(e==null?void 0:e.key)!==O.navigationHome.key;document.title=n?[e==null?void 0:e.label,t].join(" ― "):t}updateUrlAndNavigationState(t,e){var i;const n=Cn(t);xn(n,e);const r=Gi(w.navigation,n);(i=r==null?void 0:r.item)!=null&&i.key&&r.item.key!==w.navigationItemKey?(w.actualAppPath=n,w.navigationItemKey=r.item.key):w.appPath=n}handleHashChange(t){const e=new URL(t.newURL);w.appPath=e.hash}handleLogout(){Fl(Ut)}render(){return _`
      ${he(this.authReady&&S.authenticated,()=>_`
          <bkd-header @bkdlogout=${this.handleLogout.bind(this)}></bkd-header>
          <bkd-content></bkd-content>
          <bkd-footer></bkd-footer>
        `)}
    `}};Jt.styles=[N,C`
      :host {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        width: 100%;
        max-width: 1920px;
        margin: 0 auto;
      }

      bkd-content {
        flex: auto;
      }
    `];po([Ve()],Jt.prototype,"authReady",2);Jt=po([D("bkd-portal"),M()],Jt);
