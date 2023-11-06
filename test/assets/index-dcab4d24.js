var In=Object.defineProperty;var Tn=(t,e,n)=>e in t?In(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var I=(t,e,n)=>(Tn(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ye=window,gt=ye.ShadowRoot&&(ye.ShadyCSS===void 0||ye.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ft=Symbol(),Ct=new WeakMap;let Gt=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==ft)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(gt&&e===void 0){const r=n!==void 0&&n.length===1;r&&(e=Ct.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Ct.set(n,e))}return e}toString(){return this.cssText}};const On=t=>new Gt(typeof t=="string"?t:t+"",void 0,ft),A=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((r,i,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new Gt(n,t,ft)},Ln=(t,e)=>{gt?t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):e.forEach(n=>{const r=document.createElement("style"),i=ye.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,t.appendChild(r)})},xt=gt?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const r of e.cssRules)n+=r.cssText;return On(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ke;const _e=window,Rt=_e.trustedTypes,zn=Rt?Rt.emptyScript:"",It=_e.reactiveElementPolyfillSupport,Je={toAttribute(t,e){switch(e){case Boolean:t=t?zn:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},Xt=(t,e)=>e!==t&&(e==e||t==t),Ve={attribute:!0,type:String,converter:Je,reflect:!1,hasChanged:Xt},et="finalized";let J=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((n,r)=>{const i=this._$Ep(r,n);i!==void 0&&(this._$Ev.set(i,r),e.push(i))}),e}static createProperty(e,n=Ve){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,r,n);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,n,r){return{get(){return this[n]},set(i){const s=this[e];this[n]=i,this.requestUpdate(e,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Ve}static finalize(){if(this.hasOwnProperty(et))return!1;this[et]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,r=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const i of r)this.createProperty(i,n[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)n.unshift(xt(i))}else e!==void 0&&n.push(xt(e));return n}static _$Ep(e,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(n=>n(this))}addController(e){var n,r;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Ln(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostConnected)===null||r===void 0?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostDisconnected)===null||r===void 0?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EO(e,n,r=Ve){var i;const s=this.constructor._$Ep(e,r);if(s!==void 0&&r.reflect===!0){const o=(((i=r.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?r.converter:Je).toAttribute(n,r.type);this._$El=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(e,n){var r;const i=this.constructor,s=i._$Ev.get(e);if(s!==void 0&&this._$El!==s){const o=i.getPropertyOptions(s),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?o.converter:Je;this._$El=s,this[s]=c.fromAttribute(n,o.type),this._$El=null}}requestUpdate(e,n,r){let i=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||Xt)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,s)=>this[s]=i),this._$Ei=void 0);let n=!1;const r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdate)===null||s===void 0?void 0:s.call(i)}),this.update(r)):this._$Ek()}catch(i){throw n=!1,this._$Ek(),i}n&&this._$AE(r)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach(r=>{var i;return(i=r.hostUpdated)===null||i===void 0?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((n,r)=>this._$EO(r,this[r],n)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};J[et]=!0,J.elementProperties=new Map,J.elementStyles=[],J.shadowRootOptions={mode:"open"},It==null||It({ReactiveElement:J}),((Ke=_e.reactiveElementVersions)!==null&&Ke!==void 0?Ke:_e.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var qe;const $e=window,te=$e.trustedTypes,Tt=te?te.createPolicy("lit-html",{createHTML:t=>t}):void 0,tt="$lit$",K=`lit$${(Math.random()+"").slice(9)}$`,Qt="?"+K,jn=`<${Qt}>`,Q=document,de=()=>Q.createComment(""),he=t=>t===null||typeof t!="object"&&typeof t!="function",Yt=Array.isArray,Mn=t=>Yt(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Be=`[ 	
\f\r]`,le=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ot=/-->/g,Lt=/>/g,q=RegExp(`>|${Be}(?:([^\\s"'>=/]+)(${Be}*=${Be}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),zt=/'/g,jt=/"/g,Zt=/^(?:script|style|textarea|title)$/i,Un=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),y=Un(1),V=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),Mt=new WeakMap,W=Q.createTreeWalker(Q,129,null,!1);function Jt(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Tt!==void 0?Tt.createHTML(e):e}const Nn=(t,e)=>{const n=t.length-1,r=[];let i,s=e===2?"<svg>":"",o=le;for(let c=0;c<n;c++){const a=t[c];let l,h,d=-1,p=0;for(;p<a.length&&(o.lastIndex=p,h=o.exec(a),h!==null);)p=o.lastIndex,o===le?h[1]==="!--"?o=Ot:h[1]!==void 0?o=Lt:h[2]!==void 0?(Zt.test(h[2])&&(i=RegExp("</"+h[2],"g")),o=q):h[3]!==void 0&&(o=q):o===q?h[0]===">"?(o=i??le,d=-1):h[1]===void 0?d=-2:(d=o.lastIndex-h[2].length,l=h[1],o=h[3]===void 0?q:h[3]==='"'?jt:zt):o===jt||o===zt?o=q:o===Ot||o===Lt?o=le:(o=q,i=void 0);const u=o===q&&t[c+1].startsWith("/>")?" ":"";s+=o===le?a+jn:d>=0?(r.push(l),a.slice(0,d)+tt+a.slice(d)+K+u):a+K+(d===-2?(r.push(void 0),c):u)}return[Jt(t,s+(t[n]||"<?>")+(e===2?"</svg>":"")),r]};class ue{constructor({strings:e,_$litType$:n},r){let i;this.parts=[];let s=0,o=0;const c=e.length-1,a=this.parts,[l,h]=Nn(e,n);if(this.el=ue.createElement(l,r),W.currentNode=this.el.content,n===2){const d=this.el.content,p=d.firstChild;p.remove(),d.append(...p.childNodes)}for(;(i=W.nextNode())!==null&&a.length<c;){if(i.nodeType===1){if(i.hasAttributes()){const d=[];for(const p of i.getAttributeNames())if(p.endsWith(tt)||p.startsWith(K)){const u=h[o++];if(d.push(p),u!==void 0){const b=i.getAttribute(u.toLowerCase()+tt).split(K),g=/([.?@])?(.*)/.exec(u);a.push({type:1,index:s,name:g[2],strings:b,ctor:g[1]==="."?Hn:g[1]==="?"?Vn:g[1]==="@"?qn:Oe})}else a.push({type:6,index:s})}for(const p of d)i.removeAttribute(p)}if(Zt.test(i.tagName)){const d=i.textContent.split(K),p=d.length-1;if(p>0){i.textContent=te?te.emptyScript:"";for(let u=0;u<p;u++)i.append(d[u],de()),W.nextNode(),a.push({type:2,index:++s});i.append(d[p],de())}}}else if(i.nodeType===8)if(i.data===Qt)a.push({type:2,index:s});else{let d=-1;for(;(d=i.data.indexOf(K,d+1))!==-1;)a.push({type:7,index:s}),d+=K.length-1}s++}}static createElement(e,n){const r=Q.createElement("template");return r.innerHTML=e,r}}function ne(t,e,n=t,r){var i,s,o,c;if(e===V)return e;let a=r!==void 0?(i=n._$Co)===null||i===void 0?void 0:i[r]:n._$Cl;const l=he(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((s=a==null?void 0:a._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(t),a._$AT(t,n,r)),r!==void 0?((o=(c=n)._$Co)!==null&&o!==void 0?o:c._$Co=[])[r]=a:n._$Cl=a),a!==void 0&&(e=ne(t,a._$AS(t,e.values),a,r)),e}class Dn{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var n;const{el:{content:r},parts:i}=this._$AD,s=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:Q).importNode(r,!0);W.currentNode=s;let o=W.nextNode(),c=0,a=0,l=i[0];for(;l!==void 0;){if(c===l.index){let h;l.type===2?h=new ve(o,o.nextSibling,this,e):l.type===1?h=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(h=new Bn(o,this,e)),this._$AV.push(h),l=i[++a]}c!==(l==null?void 0:l.index)&&(o=W.nextNode(),c++)}return W.currentNode=Q,s}v(e){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}}class ve{constructor(e,n,r,i){var s;this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=i,this._$Cp=(s=i==null?void 0:i.isConnected)===null||s===void 0||s}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=ne(this,e,n),he(e)?e===_||e==null||e===""?(this._$AH!==_&&this._$AR(),this._$AH=_):e!==this._$AH&&e!==V&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Mn(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==_&&he(this._$AH)?this._$AA.nextSibling.data=e:this.$(Q.createTextNode(e)),this._$AH=e}g(e){var n;const{values:r,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=ue.createElement(Jt(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===s)this._$AH.v(r);else{const o=new Dn(s,this),c=o.u(this.options);o.v(r),this.$(c),this._$AH=o}}_$AC(e){let n=Mt.get(e.strings);return n===void 0&&Mt.set(e.strings,n=new ue(e)),n}T(e){Yt(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const s of e)i===n.length?n.push(r=new ve(this.k(de()),this.k(de()),this,this.options)):r=n[i],r._$AI(s),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,n);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var n;this._$AM===void 0&&(this._$Cp=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}}class Oe{constructor(e,n,r,i,s){this.type=1,this._$AH=_,this._$AN=void 0,this.element=e,this.name=n,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=_}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,r,i){const s=this.strings;let o=!1;if(s===void 0)e=ne(this,e,n,0),o=!he(e)||e!==this._$AH&&e!==V,o&&(this._$AH=e);else{const c=e;let a,l;for(e=s[0],a=0;a<s.length-1;a++)l=ne(this,c[r+a],n,a),l===V&&(l=this._$AH[a]),o||(o=!he(l)||l!==this._$AH[a]),l===_?e=_:e!==_&&(e+=(l??"")+s[a+1]),this._$AH[a]=l}o&&!i&&this.j(e)}j(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Hn extends Oe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_?void 0:e}}const Kn=te?te.emptyScript:"";class Vn extends Oe{constructor(){super(...arguments),this.type=4}j(e){e&&e!==_?this.element.setAttribute(this.name,Kn):this.element.removeAttribute(this.name)}}class qn extends Oe{constructor(e,n,r,i,s){super(e,n,r,i,s),this.type=5}_$AI(e,n=this){var r;if((e=(r=ne(this,e,n,0))!==null&&r!==void 0?r:_)===V)return;const i=this._$AH,s=e===_&&i!==_||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==_&&(i===_||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,r;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}}class Bn{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){ne(this,e)}}const Ut=$e.litHtmlPolyfillSupport;Ut==null||Ut(ue,ve),((qe=$e.litHtmlVersions)!==null&&qe!==void 0?qe:$e.litHtmlVersions=[]).push("2.8.0");const Fn=(t,e,n)=>{var r,i;const s=(r=n==null?void 0:n.renderBefore)!==null&&r!==void 0?r:e;let o=s._$litPart$;if(o===void 0){const c=(i=n==null?void 0:n.renderBefore)!==null&&i!==void 0?i:null;s._$litPart$=o=new ve(e.insertBefore(de(),c),c,void 0,n??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Fe,We;let $=class extends J{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const r=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=r.firstChild),r}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Fn(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return V}};$.finalized=!0,$._$litElement$=!0,(Fe=globalThis.litElementHydrateSupport)===null||Fe===void 0||Fe.call(globalThis,{LitElement:$});const Nt=globalThis.litElementPolyfillSupport;Nt==null||Nt({LitElement:$});((We=globalThis.litElementVersions)!==null&&We!==void 0?We:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=t=>e=>typeof e=="function"?((n,r)=>(customElements.define(n,r),r))(t,e):((n,r)=>{const{kind:i,elements:s}=r;return{kind:i,elements:s,finisher(o){customElements.define(n,o)}}})(t,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wn=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}},Gn=(t,e,n)=>{e.constructor.createProperty(n,t)};function O(t){return(e,n)=>n!==void 0?Gn(t,e,n):Wn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Le(t){return O({...t,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vt=({finisher:t,descriptor:e})=>(n,r)=>{var i;if(r===void 0){const s=(i=n.originalKey)!==null&&i!==void 0?i:n.key,o=e!=null?{kind:"method",placement:"prototype",key:s,descriptor:e(n.key)}:{...n,key:s};return t!=null&&(o.finisher=function(c){t(c,s)}),o}{const s=n.constructor;e!==void 0&&Object.defineProperty(n,r,e(r)),t==null||t(s,r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function bt(t,e){return vt({descriptor:n=>{const r={get(){var i,s;return(s=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(t))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(e){const i=typeof n=="symbol"?Symbol():"__"+n;r.get=function(){var s,o;return this[i]===void 0&&(this[i]=(o=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(t))!==null&&o!==void 0?o:null),this[i]}}return r}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ge;((Ge=window.HTMLSlotElement)===null||Ge===void 0?void 0:Ge.prototype.assignedElements)!=null;function en(t){return typeof t=="function"?t():t}const Te=class Te extends Event{constructor(n,r,i){super(Te.eventName,{cancelable:!1});I(this,"key");I(this,"state");I(this,"value");this.key=n,this.value=r,this.state=i}};I(Te,"eventName","lit-state-changed");let G=Te;const Xn=(t,e)=>e!==t&&(e===e||t===t);class we extends EventTarget{constructor(){super();I(this,"hookMap",new Map);this.constructor.finalize(),this.propertyMap&&[...this.propertyMap].forEach(([n,r])=>{if(r.initialValue!==void 0){const i=en(r.initialValue);this[n]=i,r.value=i}})}get propertyMap(){return this.constructor.propertyMap}get stateValue(){return Object.fromEntries([...this.propertyMap].map(([n])=>[n,this[n]]))}static finalize(){if(this.finalized)return!1;this.finalized=!0;const n=Object.keys(this.properties||{});for(const r of n)this.createProperty(r,this.properties[r]);return!0}static createProperty(n,r){this.finalize();const i=typeof n=="symbol"?Symbol():`__${n}`,s=this.getPropertyDescriptor(n,i,r);Object.defineProperty(this.prototype,n,s)}static getPropertyDescriptor(n,r,i){const s=(i==null?void 0:i.hasChanged)||Xn;return{get(){return this[r]},set(o){const c=this[n];this[r]=o,s(o,c)===!0&&this.dispatchStateEvent(n,o,this)},configurable:!0,enumerable:!0}}reset(){this.hookMap.forEach(n=>n.reset()),[...this.propertyMap].filter(([n,r])=>!(r.skipReset===!0||r.resetValue===void 0)).forEach(([n,r])=>{this[n]=r.resetValue})}subscribe(n,r,i){r&&!Array.isArray(r)&&(r=[r]);const s=o=>{(!r||r.includes(o.key))&&n(o.key,o.value,this)};return this.addEventListener(G.eventName,s,i),()=>this.removeEventListener(G.eventName,s)}dispatchStateEvent(n,r,i){this.dispatchEvent(new G(n,r,i))}}I(we,"propertyMap"),I(we,"properties"),I(we,"finalized",!1);class N{constructor(e,n,r){I(this,"host");I(this,"state");I(this,"callback");this.host=e,this.state=n,this.host.addController(this),this.callback=r||(()=>this.host.requestUpdate())}hostConnected(){this.state.addEventListener(G.eventName,this.callback),this.callback()}hostDisconnected(){this.state.removeEventListener(G.eventName,this.callback)}}function D(t){return vt({finisher:(e,n)=>{if(Object.getOwnPropertyDescriptor(e.prototype,n))throw new Error("@property must be called before all state decorators");return e.propertyMap||(e.propertyMap=new Map),e.propertyMap.set(n,{...t,initialValue:t==null?void 0:t.value,resetValue:t==null?void 0:t.value}),e.createProperty(n,t)}})}function Qn(t,e){if(t!==null&&(e===Boolean||e===Number||e===Array||e===Object))try{t=JSON.parse(t)}catch{console.warn("cannot parse value",t)}return t}const Yn=new URL(window.location.href);function Zn(t){return vt({finisher:(e,n)=>{if(!Object.getOwnPropertyDescriptor(e.prototype,n))throw new Error("@local-storage decorator need to be called after @property");const i=`${(t==null?void 0:t.parameter)||String(n)}`,s=e.propertyMap.get(n),o=s==null?void 0:s.type;if(s){const c=s.initialValue,a=Yn.searchParams.get(i);a!==null&&(s.skipAsync=!0),s.initialValue=()=>Qn(a,o)??en(c),e.propertyMap.set(n,{...s,...t})}}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jn=t=>typeof t!="string"&&"strTag"in t,tn=(t,e,n)=>{let r=t[0];for(let i=1;i<t.length;i++)r+=e[n?n[i-1]:i-1],r+=t[i];return r};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nn=t=>Jn(t)?tn(t.strings,t.values):t;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nt="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class er{constructor(e){this.__litLocalizeEventHandler=n=>{n.detail.status==="ready"&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(nt,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(nt,this.__litLocalizeEventHandler)}}const tr=t=>t.addController(new er(t)),rn=tr;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nr=()=>t=>typeof t=="function"?ir(t):rr(t),C=nr,rr=({kind:t,elements:e})=>({kind:t,elements:e,finisher(n){n.addInitializer(rn)}}),ir=t=>(t.addInitializer(rn),t);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class sn{constructor(){this.settled=!1,this.promise=new Promise((e,n)=>{this._resolve=e,this._reject=n})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */const U=[];for(let t=0;t<256;t++)U[t]=(t>>4&15).toString(16)+(t&15).toString(16);function sr(t){let e=0,n=8997,r=0,i=33826,s=0,o=40164,c=0,a=52210;for(let l=0;l<t.length;l++)n^=t.charCodeAt(l),e=n*435,r=i*435,s=o*435,c=a*435,s+=n<<8,c+=i<<8,r+=e>>>16,n=e&65535,s+=r>>>16,i=r&65535,a=c+(s>>>16)&65535,o=s&65535;return U[a>>8]+U[a&255]+U[o>>8]+U[o&255]+U[i>>8]+U[i&255]+U[n>>8]+U[n&255]}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const or="",ar="h",lr="s";function cr(t,e){return(e?ar:lr)+sr(typeof t=="string"?t:t.join(or))}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dt=new WeakMap,Ht=new Map;function dr(t,e,n){var r;if(t){const i=(r=n==null?void 0:n.id)!==null&&r!==void 0?r:hr(e),s=t[i];if(s){if(typeof s=="string")return s;if("strTag"in s)return tn(s.strings,e.values,s.values);{let o=Dt.get(s);return o===void 0&&(o=s.values,Dt.set(s,o)),{...s,values:o.map(c=>e.values[c])}}}}return nn(e)}function hr(t){const e=typeof t=="string"?t:t.strings;let n=Ht.get(e);return n===void 0&&(n=cr(e,typeof t!="string"&&!("strTag"in t)),Ht.set(e,n)),n}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Xe(t){window.dispatchEvent(new CustomEvent(nt,{detail:t}))}let Ae="",ce,on,Ee,rt,an,F=new sn;F.resolve();let me=0;const ur=t=>(fr((e,n)=>dr(an,e,n)),Ae=on=t.sourceLocale,Ee=new Set(t.targetLocales),Ee.add(t.sourceLocale),rt=t.loadLocale,{getLocale:pr,setLocale:gr}),pr=()=>Ae,gr=t=>{if(t===(ce??Ae))return F.promise;if(!Ee||!rt)throw new Error("Internal error");if(!Ee.has(t))throw new Error("Invalid locale code");me++;const e=me;return ce=t,F.settled&&(F=new sn),Xe({status:"loading",loadingLocale:t}),(t===on?Promise.resolve({templates:void 0}):rt(t)).then(r=>{me===e&&(Ae=t,ce=void 0,an=r.templates,Xe({status:"ready",readyLocale:t}),F.resolve())},r=>{me===e&&(Xe({status:"error",errorLocale:t,errorMessage:r.toString()}),F.reject(r))}),F.promise};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let v=nn,Kt=!1;function fr(t){if(Kt)throw new Error("lit-localize can only be configured once");v=t,Kt=!0}const vr="modulepreload",br=function(t){return"/"+t},Vt={},mr=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=br(s),s in Vt)return;Vt[s]=!0;const o=s.endsWith(".css"),c=o?'[rel="stylesheet"]':"";if(!!r)for(let h=i.length-1;h>=0;h--){const d=i[h];if(d.href===s&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${c}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":vr,o||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),o)return new Promise((h,d)=>{l.addEventListener("load",h),l.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})},ln="de-CH",yr=["fr-CH"],mt=["de-CH","fr-CH"];function L(t){const{instance_id:e,scope:n,culture_info:r,nbf:i,exp:s,substitution_id:o}=_r(t);return{instanceId:e,scope:n,locale:r,issueTime:i,expirationTime:s,substitutionId:o?parseInt(o,10):void 0}}function qt(t,e,n){if(!t)return!1;const r=L(t);return r.scope===e&&r.locale===n&&!kr(r)}function wr(t){if(!t)return!0;const{expirationTime:e}=L(t),n=Math.floor(Date.now()/1e3);return e<n}function kr(t){if(!t)return!0;const{issueTime:e,expirationTime:n}=typeof t=="string"?L(t):t,r=n-e,i=Math.floor(Date.now()/1e3);return n<=i+r/2}function cn(t,e){return(t&&L(t).scope)===e}function _r(t){const n=t.split(".")[1].replace("-","+").replace("_","/"),r=decodeURIComponent(window.atob(n).split("").map(function(i){return"%"+("00"+i.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(r)}const dn="bkdInstance",it="bkdCodeVerifier",pe="bkdRedirectUrl",yt="bkdAccessToken",wt="bkdRefreshToken",ge="CLX.LoginToken",$r="uiCulture",Ar="CLX.TokenExpire";function hn(){return localStorage.getItem(dn)}function Er(t){localStorage.setItem(dn,t)}function Sr(t){return localStorage.getItem(`${yt}_${t}`)}function un(){return localStorage.getItem(wt)}function pn(t,e){const{refreshToken:n,accessToken:r}=e;localStorage.setItem(`${yt}_${t}`,r),n&&localStorage.setItem(wt,n)}function Pr(){new Array(localStorage.length).fill(void 0).forEach((t,e)=>{const n=localStorage.key(e);n&&(n.startsWith(yt)||n===wt)&&localStorage.removeItem(n)}),sessionStorage.removeItem(ge)}function Cr(t){localStorage.setItem($r,t)}function T(){const t=sessionStorage.getItem(ge);return t?t.replace(/^"+|"+$/g,""):null}function xr(){const t=localStorage.getItem(ge);return t?t.replace(/^"+|"+$/g,""):null}function kt(t){sessionStorage.setItem(ge,`"${t}"`),localStorage.setItem(ge,`"${t}"`);let{expirationTime:e}=L(t);e=e*1e3,localStorage.setItem(Ar,e.toString())}function Rr(){const t=sessionStorage.getItem(it),e=sessionStorage.getItem(pe)??void 0;return sessionStorage.removeItem(pe),sessionStorage.removeItem(it),t?{redirectUri:e,codeVerifier:t}:null}function Ir(t,e){sessionStorage.setItem(it,t),e?sessionStorage.setItem(pe,e):sessionStorage.removeItem(pe)}function Tr(){return sessionStorage.getItem(pe)}const{getLocale:Or,setLocale:Lr}=ur({sourceLocale:ln,targetLocales:yr,loadLocale:t=>mr(()=>import(`/locales/${t}.js`),[])});function gn(){const t=jr()??Nr()??Dr();return t&&Mr(t)?t:Ur()??ln}async function zr(t){await Lr(t),document.documentElement.lang=t}function jr(){return new URL(location.href).searchParams.get(Y)}function Mr(t){return mt.includes(t)}function Ur(){const t=navigator.language.slice(0,2);return mt.find(e=>e.startsWith(t))??null}function Nr(){const t=Tr();return t?new URL(t).searchParams.get(Y):null}function Dr(){const t=xr();return t?L(t).locale:null}const E={apps:[{key:"schulverwaltung",scope:"Tutoring",root:"apps/webapp-schulverwaltung/index.html",heading:!1},{key:"anmeldedetailsEinlesen",scope:"NG",root:"apps/EmberApps/AnmeldedetailsEinlesen/index.html",heading:!0},{key:"schulleiterPersonen",scope:"NG",root:"apps/EmberApps/SchulleiterPersonen/index.html",heading:!0},{key:"fotoliste",scope:"Tutoring",root:"apps/EmberApps/Fotoliste/index.html",heading:!1},{key:"kursausschreibung",scope:"Public",root:"apps/Kursausschreibung/index.html",heading:!0},{key:"kursausschreibungIntern",scope:"Public",root:"apps/Kursausschreibung/indexIntern.html",heading:!0},{key:"stellvertretung",scope:"Tutoring",root:"apps/Stellvertretung/index.html",heading:!0},{key:"reservation",scope:"NG",root:"apps/Raumreservation/index.html",heading:!0},{key:"noteneingabe",scope:"Tutoring",root:"apps/Noteneingabe/index.html",heading:!1}],navigationHome:{key:"home",label:"Home",allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/dashboard"},get navigationPhotoList(){return{key:"photoList",label:v("Fotoliste"),allowedRolesOrPermissions:["TeacherRole"],deniedInstanceIds:null,appKey:"fotoliste",appPath:"#/"}},get navigationInputGrades(){return{key:"inputGrades",label:v("Noteneingabe"),allowedRolesOrPermissions:["TeacherRole"],deniedInstanceIds:null,appKey:"noteneingabe",appPath:"#/"}},get navigationMyProfile(){return{key:"myProfile",label:v("Mein Profil"),allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/my-profile"}},get navigationMySettings(){return{key:"mySettings",label:v("Einstellungen"),allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/my-settings"}},get navigation(){return[{label:v("Unterricht"),items:[{key:"presenceControl",label:v("Präsenzkontrolle"),allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole","AbsenceAdministratorRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/presence-control"},{key:"currentEvents",label:v("Aktuelle Fächer"),allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole","ClassTeacherRole","AbsenceAdministratorRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/events/current"},{key:"tests",label:v("Tests und Bewertung"),allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole","AbsenceAdministratorRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/events"},{key:"substitutionsAssign",label:v("Stellvertretung erfassen"),allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole"],deniedInstanceIds:null,appKey:"stellvertretung",appPath:"#/substitutions/assign"},{key:"substitutionsExecute",label:v("Stellvertretung ausüben"),allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole"],deniedInstanceIds:null,appKey:"stellvertretung",appPath:"#/substitutions/execute"}]},{label:v("Absenzen"),items:[{key:"openAbsences",label:v("Offene Absenzen entschuldigen"),allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole","ClassTeacherRole","AbsenceAdministratorRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/open-absences"},{key:"editAbsences",label:v("Absenzen bearbeiten"),allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole","ClassTeacherRole","AbsenceAdministratorRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/edit-absences"},{key:"evaluateAbsences",label:v("Absenzen auswerten"),allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole","ClassTeacherRole","AbsenceAdministratorRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/evaluate-absences"}]},{label:v("Aus-/Weiterbildung"),items:[{key:"myAbsences",label:v("Absenzen"),allowedRolesOrPermissions:["StudentRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/my-absences"},{key:"myGrades",label:v("Noten"),allowedRolesOrPermissions:["StudentRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/my-grades"}]},{label:v("Angebote"),items:[{key:"coursesAndEvents",label:v("Kurse und Veranstaltungen"),allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"kursausschreibung",appPath:"#/"},{key:"internalTraining",label:v("Schulinterne Weiterbildung"),allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole","ClassTeacherRole","AbsenceAdministratorRole","SubstituteAdministratorRole","Reservations"],deniedInstanceIds:null,appKey:"kursausschreibungIntern",appPath:"#/"},{key:"reservations",label:v("Räume und Geräte reservieren"),allowedRolesOrPermissions:["Reservations"],deniedInstanceIds:null,appKey:"reservation",appPath:"#/"}]},{label:v("Administration"),items:[{key:"substitutionsAdmin",label:v("Stellvertretungen administrieren"),allowedRolesOrPermissions:["SubstituteAdministratorRole"],deniedInstanceIds:null,appKey:"stellvertretung",appPath:"#/substitutions/admin"},{key:"personSearch",label:v("Personen und Institutionen suchen"),allowedRolesOrPermissions:["PersonRight"],deniedInstanceIds:null,appKey:"schulleiterPersonen",appPath:"#/persons"},{key:"eventRegistration",label:v("Anmeldedetails einlesen"),allowedRolesOrPermissions:["PersonRight","RegistrationRightAusbildungSemester","RegistrationRightAusbildungKurs","RegistrationRightAusbildungModulanlass","RegistrationRightAusbildungModul","RegistrationRightAusbildungStudiengang","RegistrationRightAusbildungStudienjahrgang","RegistrationRightAusbildungVeranstaltung","RegistrationRightWeiterbildungCAS","RegistrationRightWeiterbildungCASAnlass","RegistrationRightWeiterbildungDAS","RegistrationRightWeiterbildungDASJahrgang","RegistrationRightWeiterbildungInteressent","RegistrationRightWeiterbildungKurs","RegistrationRightWeiterbildungMAS","RegistrationRightWeiterbildungMASJahrgang","RegistrationRightWeiterbildungModulanlass","RegistrationRightWeiterbildungModulbefreiung","RegistrationRightWeiterbildungSemester","RegistrationRightWeiterbildungVeranstaltung","RegistrationRightWeiterbildungEvaluationsanlass","RegistrationRightWeiterbildungFakturierung","RegistrationRightWeiterbildungMailingliste","RegistrationRightWeiterbildungPlatzangebot","RegistrationRightWeiterbildungReservation"],deniedInstanceIds:null,appKey:"anmeldedetailsEinlesen",appPath:"#/input"}]}]}},Hr=[E.navigationHome,E.navigationMyProfile,E.navigationMySettings,E.navigationPhotoList,E.navigationInputGrades];function _t(t,e){const n=fn(t,({key:r})=>r===e);return n||{item:E.navigationHome,group:null}}function Kr(t,e){return fn(t,n=>n.appPath!=="#/"&&e.startsWith(n.appPath))}function fn(t,e){let n=Hr.find(r=>e(r));if(n)return{item:n,group:null};for(const r of t)if(n=r.items.find(i=>e(i)),n)return{item:n,group:r};return null}function ze(t){const e=E.apps.find(n=>n.key===t.appKey);if(!e)throw new Error(`Invalid app: ${t.appKey}`);return e}function Vr(t,e){const{item:n}=_t(t,e);return ze(n).scope}function qr(t,e,n){return t.reduce((r,i)=>{const s=i.items.filter(o=>Br(o,e)&&Fr(o,n));return s.length>0?[...r,{...i,items:s}]:r},[])}function Br(t,e){return t.deniedInstanceIds===null||t.deniedInstanceIds.includes(e)}function Fr(t,e){return t.allowedRolesOrPermissions===null||t.allowedRolesOrPermissions.some(n=>e.includes(n))}function Wr(t){const e=new URL(location.href);Array.from(e.searchParams.keys()).forEach(r=>{t.includes(r)||e.searchParams.delete(r)}),history.replaceState({},"",e)}function Bt(t,e,n=!1){const r=new URL(location.href);r.searchParams.set(t,e),n?history.replaceState({},"",r):history.pushState({},"",r)}function Qe(t){return t.slice(Math.max(t.indexOf("#"),0))}function Ye(t,e=!1){const n=new URL(location.href);n.hash=t,e?history.replaceState({},"",n):history.pushState({},"",n)}function Gr(){const e=new URL(location.href).searchParams.get(ie);return e?Vr(E.navigation,e):ze(E.navigationHome).scope}function re(t){const e=typeof t=="string"?_t(f.navigation,t).item:t;return Xr(e).toString()}function Xr(t){const e=new URL(location.origin);return e.searchParams.set(Y,f.locale),e.searchParams.set(ie,t.key),e.hash=t.appPath,e}const ee=window.eventoPortal.settings;if(typeof(ee==null?void 0:ee.apiServer)!="string")throw new Error("Invalid 'apiServer' setting");async function Qr(){var n,r;const t=`${ee.apiServer}/UserSettings/?expand=AccessInfo`,e=await $t(t);return{roles:((n=e==null?void 0:e.AccessInfo)==null?void 0:n.Roles)??[],permissions:((r=e==null?void 0:e.AccessInfo)==null?void 0:r.Permissions)??[]}}async function Yr(){const t=`${ee.apiServer}/Configurations/SchoolAppNavigation`,e=await $t(t);return(e==null?void 0:e.instanceName)||null}function Zr(){const t=`${ee.apiServer}/TeacherSubstitutions/current`;return $t(t)}async function $t(t,{method:e="GET"}={}){const n=T();if(!n)throw new Error("No token available");const r=new Headers({"CLX-Authorization":`token_type=urn:ietf:params:oauth:token-type:jwt-bearer, access_token=${n}`,"Content-Type":"application/json"});return await(await fetch(t,{method:e,headers:r})).json()}var Jr=Object.defineProperty,ei=Object.getOwnPropertyDescriptor,H=(t,e,n,r)=>{for(var i=r>1?void 0:r?ei(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&Jr(e,n,i),i};const Y="locale",ie="module",ti=[Y,ie];class z extends we{constructor(){super(...arguments),this.actualAppPath=null,this.setInitialized=()=>{},this.initialized=new Promise(e=>this.setInitialized=()=>e(null))}async init(){await this.handleStateChange("locale",this.locale),this.subscribe(this.handleStateChange.bind(this)),await this.loadRolesAndPermissions(),this.setInitialized()}subscribeLocale(e){return e(this.locale),this.subscribe((n,r)=>e(r),"locale")}subscribeInstanceName(e){return this.subscribe((n,r)=>e(r),"instanceName")}subscribeNavigationItemKey(e){return e(this.navigationItemKey),this.subscribe((n,r)=>e(r),"navigationItemKey")}subscribeNavigationItem(e){return e(this.navigationItem),this.subscribe((n,r)=>e(r),"navigationItem")}subscribeScopeAndLocale(e,n=!1){return n||e(this.app.scope,this.locale),this.subscribe(()=>e(this.app.scope,this.locale),["app","locale"])}navigate(e){this.initialized.then(()=>{Wr(ti),this.locale=e.searchParams.get(Y)||Or(),this.navigationItemKey=e.searchParams.get(ie)??E.navigationHome.key,e.hash&&e.hash!=="#"&&e.hash!=="#/"&&e.hash.startsWith(this.navigationItem.appPath)&&(this.appPath=e.hash)})}async handleStateChange(e,n){e==="locale"&&(await this.updateLocale(n),await this.loadInstanceName()),(e==="locale"||e==="navigationItemKey")&&Cr(this.locale),(e==="rolesAndPermissions"||e==="locale")&&this.updateNavigation(),(e==="navigationItemKey"||e==="navigation")&&(this.updateNavigationItemAndGroup(this.navigationItemKey),this.updateApp(this.navigationItem))}async updateLocale(e){Bt(Y,e),await zr(e)}updateNavigation(){const e=T();if(!e)return;const{instanceId:n}=L(e);this.navigation=qr(E.navigation,n,this.rolesAndPermissions)}updateNavigationItemAndGroup(e){if(this.navigation.length>0){const{item:n,group:r}=_t(this.navigation,e);this.navigationItem=n,this.navigationGroup=r,this.actualAppPath&&this.actualAppPath!=="#"&&this.actualAppPath!=="#/"&&this.actualAppPath.startsWith(n.appPath)?this.appPath=this.actualAppPath:this.appPath=n.appPath,this.actualAppPath=null,this.updateHashFromAppPath(),n.key===E.navigationHome.key&&n.key!==e&&(this.navigationItemKey=n.key)}Bt(ie,this.navigationItemKey)}updateHashFromAppPath(){const e=new URL(document.location.href);e.hash=this.appPath,history.replaceState({},"",e)}updateApp(e){this.app=ze(e)}async loadRolesAndPermissions(){if(!T())return;const{roles:n,permissions:r}=await Qr();this.rolesAndPermissions=[...n,...r]}async loadInstanceName(){if(!T())return;const n=await Yr();this.instanceName=[v("Evento"),n].filter(Boolean).join(" | ")}}H([D({value:gn()})],z.prototype,"locale",2);H([D({value:[]})],z.prototype,"rolesAndPermissions",2);H([D({value:""})],z.prototype,"instanceName",2);H([D({value:[]})],z.prototype,"navigation",2);H([Zn({parameter:ie}),D({value:null})],z.prototype,"navigationItemKey",2);H([D({value:null})],z.prototype,"navigationGroup",2);H([D({value:E.navigationHome})],z.prototype,"navigationItem",2);H([D({value:ze(E.navigationHome)})],z.prototype,"app",2);H([D({value:E.navigationHome.appPath})],z.prototype,"appPath",2);const f=new z;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},At=t=>(...e)=>({_$litDirective$:t,values:e});let Et=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ni={},ri=(t,e=ni)=>t._$AH=e;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ii=At(class extends Et{constructor(){super(...arguments),this.key=_}render(t,e){return this.key=t,e}update(t,[e,n]){return e!==this.key&&(ri(t),this.key=e),n}}),bn=A`
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
`,mn=A`
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
`,x=A`
  :host {
    ${bn}
    ${mn}
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
`;function si(t){var n;const e=document.createElement("style");e.innerText=t,(n=document.querySelector("body"))==null||n.appendChild(e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function je(t,e,n){return t?e():n==null?void 0:n()}var oi=Object.defineProperty,ai=Object.getOwnPropertyDescriptor,yn=(t,e,n,r)=>{for(var i=r>1?void 0:r?ai(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&oi(e,n,i),i};let Se=class extends ${constructor(){super(),this.handleMessage=t=>{switch(t.data.type){case"bkdAppResize":{this.handleResize(t.data.height);break}}},new N(this,f)}connectedCallback(){super.connectedCallback(),window.addEventListener("message",this.handleMessage)}disconnectedCallback(){window.removeEventListener("message",this.handleMessage),super.disconnectedCallback()}handleResize(t){this.iframe&&(this.iframe.height=t)}render(){return cn(T(),f.app.scope)?y`
      <main>
        ${je(f.app.heading,()=>y`<h1>${f.navigationItem.label}</h1>`)}
        ${ii(f.app.root,y`
            <iframe
              id="app"
              title=${f.app.key}
              src=${f.app.root+f.appPath}
            ></iframe>
          `)}
      </main>
    `:y`<main></main>`}};Se.styles=[x,A`
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
    `];yn([bt("iframe")],Se.prototype,"iframe",2);Se=yn([P("bkd-content"),C()],Se);var li=Object.defineProperty,ci=Object.getOwnPropertyDescriptor,di=(t,e,n,r)=>{for(var i=r>1?void 0:r?ci(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&li(e,n,i),i};let st=class extends ${constructor(){super(),new N(this,f)}render(){return y`
      <footer>
        <div class="copyright">${v("© Bildungs- und Kulturdirektion")}</div>
        <div class="footer-nav">
          <a
            href=${`https://www.bkd.be.ch/${f.locale.slice(0,2)}/tools/rechtliches.html`}
            target="_blank"
            >${v("Rechtliche Hinweise")}</a
          >
          <a
            href=${`https://www.bkd.be.ch/${f.locale.slice(0,2)}/tools/impressum.html`}
            target="_blank"
            >${v("Impressum")}</a
          >
        </div>
      </footer>
    `}};st.styles=[x,A`
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
    `];st=di([P("bkd-footer"),C()],st);class Me{constructor(e,n,r,i){this.host=e,this.toggleButtonId=n,this.menuId=r,this.itemQueries=i,this.open=!1,this.handleClick=s=>{this.targetMatchesId(s,[this.toggleButtonId,this.menuId])||this.close()},this.handleKeydown=s=>{switch(s.key){case"Escape":{this.close();break}case"ArrowDown":{const o=this.items[this.nextLinkIndex(1)];o==null||o.focus();break}case"ArrowUp":{const o=this.items[this.nextLinkIndex(-1)];o==null||o.focus();break}}},this.handleCloseOthers=s=>{const{source:o}=s.detail;o!==this&&this.close()},this.host.addController(this)}get items(){var n;const e=((n=this.itemQueries)==null?void 0:n.queryItems)&&this.itemQueries.queryItems();return Array.from(e??[])}get focusedItem(){var e;return(e=this.itemQueries)!=null&&e.queryFocused?this.itemQueries.queryFocused():null}hostDisconnected(){this.removeListeners()}toggle(){this.open=!this.open,this.host.requestUpdate(),this.open?(this.closeOthers(),this.addListeners()):this.removeListeners()}close(){this.open&&this.toggle()}addListeners(){document.addEventListener("click",this.handleClick,!0),document.addEventListener("keydown",this.handleKeydown,!0),document.addEventListener("bkddropdowntoggleclose",this.handleCloseOthers)}removeListeners(){document.removeEventListener("click",this.handleClick,!0),document.removeEventListener("keydown",this.handleKeydown,!0),document.removeEventListener("bkddropdowntoggleclose",this.handleCloseOthers)}activeLinkIndex(){const e=this.focusedItem?this.items.indexOf(this.focusedItem):-1;return e===-1?null:e}nextLinkIndex(e){const n=this.activeLinkIndex(),r=0,i=this.items.length-1;if(n===null)return e>0?r:i;const s=n+e;return s>i?r:s<r?i:s}closeOthers(){document.dispatchEvent(new CustomEvent("bkddropdowntoggleclose",{detail:{source:this}}))}targetMatchesId(e,n){return e.composedPath().some(r=>n.includes(r.id))}}var hi=Object.defineProperty,ui=Object.getOwnPropertyDescriptor,pi=(t,e,n,r)=>{for(var i=r>1?void 0:r?ui(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&hi(e,n,i),i};let ot=class extends ${constructor(){super(),this.mobileNav=new Me(this,"mobile-nav-toggle","mobile-nav-menu"),new N(this,f)}handleLogoClick(t){t.preventDefault(),f.navigationItemKey=E.navigationHome.key,f.appPath=E.navigationHome.appPath}handleNavItemClick(t){const{item:e}=t.detail;f.navigationItemKey=e.key,this.mobileNav.close()}handleSettingsItemClick(t){const{item:e,event:n}=t.detail;e.external||(n.preventDefault(),e.key==="logout"?this.dispatchEvent(new CustomEvent("bkdlogout",{composed:!0,bubbles:!0})):f.navigationItemKey=e.key),this.mobileNav.close()}render(){return y`
      <header>
        <bkd-service-nav
          .mobileNavOpen=${this.mobileNav.open}
          @bkdhamburgertoggle=${()=>this.mobileNav.toggle()}
          @bkdsettingsitemclick=${this.handleSettingsItemClick.bind(this)}
        ></bkd-service-nav>
        <a class="logo" href=${re("home")}
          ><img
            src="logo.svg"
            alt=${v("Evento Startseite")}
            @click=${this.handleLogoClick.bind(this)}
        /></a>
        <div class="logo-caption">${f.instanceName}</div>
        <bkd-nav
          @bkdnavitemclick=${this.handleNavItemClick.bind(this)}
        ></bkd-nav>
        ${je(this.mobileNav.open,()=>y`<bkd-mobile-nav
              id="mobile-nav-menu"
              @bkdnavitemclick=${this.handleNavItemClick.bind(this)}
              @bkdsettingsitemclick=${this.handleSettingsItemClick.bind(this)}
            ></bkd-mobile-nav>`)}
      </header>
    `}};ot.styles=[x,A`
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
    `];ot=pi([P("bkd-header"),C()],ot);var gi=Object.defineProperty,fi=Object.getOwnPropertyDescriptor,wn=(t,e,n,r)=>{for(var i=r>1?void 0:r?fi(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&gi(e,n,i),i};let Pe=class extends ${constructor(){super(...arguments),this.open=!1}toggle(){this.dispatchEvent(new CustomEvent("bkdhamburgertoggle",{bubbles:!0,composed:!0}))}render(){const t=this.open?"/icons/close.svg":"/icons/hamburger.svg";return y`
      <button
        class="hamburger"
        aria-expanded=${this.open}
        aria-label=${v("Menü")}
        @click=${this.toggle.bind(this)}
      >
        <img src=${t} alt="" width="32" height="32" />
      </button>
    `}};Pe.styles=[x,A`
      :host {
        display: flex;
      }

      button {
        background: transparent;
        border: none;
        cursor: pointer;
      }
    `];wn([O()],Pe.prototype,"open",2);Pe=wn([P("bkd-hamburger"),C()],Pe);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=At(class extends Et{constructor(t){var e;if(super(t),t.type!==vn.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,r;if(this.it===void 0){this.it=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!(!((n=this.nt)===null||n===void 0)&&n.has(s))&&this.it.add(s);return this.render(e)}const i=t.element.classList;this.it.forEach(s=>{s in e||(i.remove(s),this.it.delete(s))});for(const s in e){const o=!!e[s];o===this.it.has(s)||!((r=this.nt)===null||r===void 0)&&r.has(s)||(o?(i.add(s),this.it.add(s)):(i.remove(s),this.it.delete(s)))}return V}});var vi=Object.defineProperty,bi=Object.getOwnPropertyDescriptor,mi=(t,e,n,r)=>{for(var i=r>1?void 0:r?bi(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&vi(e,n,i),i};let at=class extends ${constructor(){super(),new N(this,f)}handleLocaleChange(t,e){t.preventDefault(),f.locale=e}render(){return y`<ul>
      ${mt.map(t=>y`<li>
            <a
              href="#"
              class=${Z({active:t===f.locale})}
              aria-current=${t===f.locale}
              @click=${e=>this.handleLocaleChange(e,t)}
            >
              ${t.slice(0,2)}
            </a>
          </li>`)}
    </ul>`}};at.styles=[x,A`
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
    `];at=mi([P("bkd-language-switcher"),C()],at);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*X(t,e){if(t!==void 0){let n=0;for(const r of t)yield e(r,n++)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class lt extends Et{constructor(e){if(super(e),this.et=_,e.type!==vn.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===_||e==null)return this.ft=void 0,this.et=e;if(e===V)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const n=[e];return n.raw=n,this.ft={_$litType$:this.constructor.resultType,strings:n,values:[]}}}lt.directiveName="unsafeHTML",lt.resultType=1;const ct=At(lt),yi=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="m22 15.975-1.775 1.775L12 9.525 3.775 17.75 2 15.975l10-10 10 10Z"/></svg>
`,wi=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M2 8.025 3.775 6.25 12 14.475l8.225-8.225L22 8.025l-10 10-10-10Z"/></svg>
`;function kn(t){return[{key:"myProfile",label:v("Mein Profil"),href:re("myProfile")},{key:"mySettings",label:v("Einstellungen"),href:re("mySettings")},{key:"videos",label:v("Video-Tutorials"),href:t==="de-CH"?"https://www.youtube.com/playlist?list=PLLDtLiOuctbx-_EQWgWqTO1MRbX845OEf":"https://www.youtube.com/playlist?list=PLLDtLiOuctbyEegnquAkaW4u8cm62lFAU",img:"/icons/external-link.svg",external:!0},{key:"logout",label:v("Logout"),href:"#",img:"/icons/logout.svg"}]}var ki=Object.defineProperty,_i=Object.getOwnPropertyDescriptor,_n=(t,e,n,r)=>{for(var i=r>1?void 0:r?_i(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&ki(e,n,i),i};let Ce=class extends ${constructor(){super(),this.openGroup=null,new N(this,f)}connectedCallback(){super.connectedCallback(),this.openGroupOfCurrentItem()}openGroupOfCurrentItem(){this.openGroup||(this.openGroup=f.navigationGroup)}handleGroupClick(t,e){var n;t.preventDefault(),this.openGroup=e.label!==((n=this.openGroup)==null?void 0:n.label)?e:null}handleNavItemClick(t,e){t.preventDefault(),this.dispatchEvent(new CustomEvent("bkdnavitemclick",{detail:{item:e},composed:!0,bubbles:!0}))}handleSettingsItemClick(t,e){this.dispatchEvent(new CustomEvent("bkdsettingsitemclick",{detail:{item:e,event:t},composed:!0,bubbles:!0}))}renderGroup(t){var n;const e=t.label===((n=this.openGroup)==null?void 0:n.label);return y`
      <li
        class=${Z({group:!0,open:e})}
        aria-expanded=${e}
      >
        <button
          class="group-header"
          @click=${r=>this.handleGroupClick(r,t)}
        >
          <label> ${t.label} </label>
          ${ct(e?yi:wi)}
        </button>
        <ul class="items">
          ${X(t.items,this.renderNavItem.bind(this))}
        </ul>
      </li>
    `}renderNavItem(t){const e=t.key===f.navigationItemKey;return y`
      <li
        class=${Z({item:!0,active:e})}
      >
        <a
          href=${re(t)}
          @click=${n=>this.handleNavItemClick(n,t)}
        >
          ${t.label}
        </a>
      </li>
    `}renderSettingsItem(t){return y`<li>
      <a
        href=${t.href}
        target=${t.external?"_blank":"_self"}
        @click=${e=>this.handleSettingsItemClick(e,t)}
      >
        ${t.label}
      </a>
      ${t.img?y`<img src=${t.img} alt="" width="24" height="24" />`:_}
    </li>`}render(){return y`
      <nav aria-label=${v("Mobile Navigation")}>
        <ul class="nav">
          ${X(f.navigation,this.renderGroup.bind(this))}
        </ul>
        <div class="service-nav">
          <ul>
            ${X(kn(f.locale),this.renderSettingsItem.bind(this))}
          </ul>
          <bkd-language-switcher></bkd-language-switcher>
        </div>
      </nav>
    `}};Ce.styles=[x,A`
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
    `];_n([Le()],Ce.prototype,"openGroup",2);Ce=_n([P("bkd-mobile-nav"),C()],Ce);var $i=Object.defineProperty,Ai=Object.getOwnPropertyDescriptor,Ei=(t,e,n,r)=>{for(var i=r>1?void 0:r?Ai(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&$i(e,n,i),i};let dt=class extends ${constructor(){super(),new N(this,f)}renderGroupToggle(t,e){return y`
      <bkd-nav-group-toggle
        .group=${t}
        ?active=${e}
      ></bkd-nav-group-toggle>
    `}render(){return y`<nav aria-label=${v("Hauptnavigation")}>
      ${X(f.navigation,t=>{var e;return this.renderGroupToggle(t,t.label===((e=f.navigationGroup)==null?void 0:e.label))})}
    </nav>`}};dt.styles=[x,A`
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
    `];dt=Ei([P("bkd-nav"),C()],dt);var Si=Object.defineProperty,Pi=Object.getOwnPropertyDescriptor,St=(t,e,n,r)=>{for(var i=r>1?void 0:r?Pi(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&Si(e,n,i),i};let fe=class extends ${constructor(){super(),this.open=!1,new N(this,f)}handleItemClick(t,e){t.preventDefault(),this.dispatchEvent(new CustomEvent("bkdnavitemclick",{detail:{item:e},composed:!0,bubbles:!0}))}renderItem(t){const e=t.key===f.navigationItemKey;return y`
      <li role="presentation" class=${Z({active:e})}>
        <a
          role="menuitem"
          href=${re(t)}
          @click=${n=>this.handleItemClick(n,t)}
          >${t.label}</a
        >
      </li>
    `}render(){if(!(!this.group||!this.open))return y`
      <ul role="menu" id="group-menu">
        ${X(this.group.items,this.renderItem.bind(this))}
      </ul>
    `}};fe.styles=[x,A`
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
    `];St([O()],fe.prototype,"group",2);St([O()],fe.prototype,"open",2);fe=St([P("bkd-nav-group-dropdown"),C()],fe);var Ci=Object.defineProperty,xi=Object.getOwnPropertyDescriptor,Ue=(t,e,n,r)=>{for(var i=r>1?void 0:r?xi(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&Ci(e,n,i),i};let se=class extends ${constructor(){super(...arguments),this.dropdown=new Me(this,"group-toggle","group-menu",{queryItems:()=>{var t,e;return((e=(t=this.dropdownElement)==null?void 0:t.shadowRoot)==null?void 0:e.querySelectorAll("a[role='menuitem']"))??null},queryFocused:()=>{var t,e;return((e=(t=this.dropdownElement)==null?void 0:t.shadowRoot)==null?void 0:e.activeElement)??null}})}toggle(t){t.preventDefault(),this.dropdown.toggle()}handleItemClick(){this.dropdown.close()}render(){if(this.group)return y`
      <a
        id="group-toggle"
        href="#"
        @click=${this.toggle.bind(this)}
        class=${Z({active:!!this.active})}
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
    `}};se.styles=[x,A`
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
    `];Ue([bt("bkd-nav-group-dropdown")],se.prototype,"dropdownElement",2);Ue([O()],se.prototype,"group",2);Ue([O({type:Boolean})],se.prototype,"active",2);se=Ue([P("bkd-nav-group-toggle"),C()],se);var Ri=Object.defineProperty,Ii=Object.getOwnPropertyDescriptor,$n=(t,e,n,r)=>{for(var i=r>1?void 0:r?Ii(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&Ri(e,n,i),i};let xe=class extends ${handleClick(t){t.preventDefault()}render(){if(this.item)return y`<a href="#" @click=${this.handleClick.bind(this)}
      >${this.item.label}</a
    >`}};xe.styles=[x,A``];$n([O()],xe.prototype,"item",2);xe=$n([P("bkd-nav-item-link"),C()],xe);var Ti=Object.defineProperty,Oi=Object.getOwnPropertyDescriptor,An=(t,e,n,r)=>{for(var i=r>1?void 0:r?Oi(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&Ti(e,n,i),i};let Re=class extends ${constructor(){super(...arguments),this.mobileNavOpen=!1}render(){return y`
      <nav aria-label=${v("Servicenavigation")}>
        <bkd-substitutions-toggle></bkd-substitutions-toggle>
        <erz-notifications></erz-notifications>
        <bkd-user-settings></bkd-user-settings>
        <bkd-language-switcher></bkd-language-switcher>
        <bkd-hamburger
          id="mobile-nav-toggle"
          .open=${this.mobileNavOpen}
        ></bkd-hamburger>
      </nav>
    `}};Re.styles=[x,A`
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
    `];An([O()],Re.prototype,"mobileNavOpen",2);Re=An([P("bkd-service-nav"),C()],Re);var Li=Object.defineProperty,zi=Object.getOwnPropertyDescriptor,Ne=(t,e,n,r)=>{for(var i=r>1?void 0:r?zi(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&Li(e,n,i),i};let oe=class extends ${constructor(){super(...arguments),this.availableSubstitutions=[],this.activeSubstitution=null,this.open=!1}get displayedSubstitutions(){return this.availableSubstitutions.filter(t=>!this.activeSubstitution||t.Id===this.activeSubstitution.Id)}handleSubstitutionClick(t,e){t.preventDefault(),this.dispatchEvent(new CustomEvent("bkdsubstitutionstart",{detail:{substitution:e},composed:!0,bubbles:!0}))}handleStopClick(){this.dispatchEvent(new CustomEvent("bkdsubstitutionstop",{composed:!0,bubbles:!0}))}handleCloseClick(){this.dispatchEvent(new CustomEvent("bkdclose"))}renderSubstitution(t){var n;const e=t.Id===((n=this.activeSubstitution)==null?void 0:n.Id);return y`
      <li role="presentation" class=${Z({active:e})}>
        <a
          role="menuitem"
          href="#"
          @click=${r=>this.handleSubstitutionClick(r,t)}
          >${t.Holder}</a
        >
      </li>
    `}render(){if(this.open)return y`
      <ul role="menu" id="substitutions-menu">
        <li class="dropdown-menu-header">
          <button
            class="dropdown-menu-close"
            @click=${this.handleCloseClick.bind(this)}
          >
            <img src="icons/close.svg" alt=${v("Schliessen")} />
          </button>
          <div class="dropdown-menu-heading">
            ${v("Stellvertretung ausüben")}
          </div>
        </li>
        ${X(this.displayedSubstitutions,this.renderSubstitution.bind(this))}
        ${je(this.activeSubstitution,()=>y`<li class="dropdown-menu-stop">
              <button @click=${this.handleStopClick.bind(this)}>
                ${v("Stellvertretung beenden")}
              </button>
            </li>`)}
      </ul>
    `}};oe.styles=[x,A`
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
    `];Ne([O()],oe.prototype,"availableSubstitutions",2);Ne([O()],oe.prototype,"activeSubstitution",2);Ne([O()],oe.prototype,"open",2);oe=Ne([P("bkd-substitutions-dropdown"),C()],oe);const ji=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M2 20v-2.8a3 3 0 0 1 .425-1.563A2.794 2.794 0 0 1 3.6 14.55c1-.5 2.038-.883 3.113-1.15 1.074-.267 2.17-.4 3.287-.4.417 0 .833.03 1.25.088.417.058.833.129 1.25.212v1.575c-.75.367-1.354.85-1.813 1.45-.458.6-.687 1.383-.687 2.35V20H2Zm10 0v-1.4c0-.4.104-.77.313-1.113a1.76 1.76 0 0 1 .887-.737c.6-.25 1.22-.438 1.863-.563a10.11 10.11 0 0 1 3.874 0 9.604 9.604 0 0 1 1.863.563c.383.15.68.396.887.738.209.341.313.712.313 1.112V20H12Zm5-5c-.7 0-1.292-.242-1.775-.725-.483-.483-.725-1.075-.725-1.775s.242-1.292.725-1.775C15.708 10.242 16.3 10 17 10s1.292.242 1.775.725c.483.483.725 1.075.725 1.775s-.242 1.292-.725 1.775C18.292 14.758 17.7 15 17 15Zm-7-3c-1.1 0-2.042-.392-2.825-1.175C6.392 10.042 6 9.1 6 8s.392-2.042 1.175-2.825C7.958 4.392 8.9 4 10 4s2.042.392 2.825 1.175C13.608 5.958 14 6.9 14 8s-.392 2.042-1.175 2.825C12.042 11.608 11.1 12 10 12Z"/></svg>
`,Mi=`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="7.4" fill="none"><path fill="currentColor" d="m6 7.4-6-6L1.4 0 6 4.6 10.6 0 12 1.4Z"/></svg>
`,Ui=`<svg xmlns="http://www.w3.org/2000/svg" width="11.414" height="11.414" fill="none"><path stroke="currentColor" stroke-width="2" d="m.707.707 10 10m-10 0 10-10"/></svg>
`;function Ni(t,e,n){const r=document.createElement("form");r.method=t,r.style.visibility="hidden",r.action=e,Object.keys(n).forEach(i=>{const s=document.createElement("input");s.type="hidden",s.name=i,s.value=n[i],r.appendChild(s)}),document.body.appendChild(r),r.submit()}var Di=Object.defineProperty,Hi=Object.getOwnPropertyDescriptor,De=(t,e,n,r)=>{for(var i=r>1?void 0:r?Hi(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&Di(e,n,i),i};let ae=class extends ${constructor(){super(...arguments),this.availableSubstitutions=[],this.activeSubstitution=null,this.dropdown=new Me(this,"substitutions-toggle","substitutions-menu",{queryItems:()=>{var t,e;return((e=(t=this.dropdownElement)==null?void 0:t.shadowRoot)==null?void 0:e.querySelectorAll("a[role='menuitem']"))??null},queryFocused:()=>{var t,e;return((e=(t=this.dropdownElement)==null?void 0:t.shadowRoot)==null?void 0:e.activeElement)??null}})}connectedCallback(){super.connectedCallback(),this.fetch()}async fetch(){const t=await Zr();this.availableSubstitutions=t.filter(n=>this.isNotInFuture(n)).sort((n,r)=>n.Holder.localeCompare(r.Holder));const e=this.getActiveSubstitutionId();this.activeSubstitution=this.availableSubstitutions.find(n=>n.Id===e)??null}isNotInFuture(t){return!!t.DateFrom&&new Date(t.DateFrom)<=new Date}getActiveSubstitutionId(){const t=T();if(!t)return null;const{substitutionId:e}=L(t);return e??null}toggle(t){t.preventDefault(),this.activeSubstitution&&this.isLargeScreen()?this.stopSubstitution():this.dropdown.toggle()}isLargeScreen(){return window.innerWidth>1200}startSubstitution(t){if(this.activeSubstitution)return;const{oAuthServer:e,oAuthPrefix:n}=window.eventoPortal.settings;this.redirect(`${e}/${n}/Authorization/Substitutions/${t.Id}/start`)}stopSubstitution(){if(!this.activeSubstitution)return;const{oAuthServer:t,oAuthPrefix:e}=window.eventoPortal.settings;this.redirect(`${t}/${e}/Authorization/Substitutions/${this.activeSubstitution.Id}/stop`)}redirect(t){Ni("POST",t,{access_token:T()??"",redirect_uri:re("home")})}handleSubstitutionStart(t){this.dropdown.close(),this.startSubstitution(t.detail.substitution)}handleSubstitutionStop(){this.dropdown.close(),this.stopSubstitution()}getLabel(){var t;return((t=this.activeSubstitution)==null?void 0:t.Holder)||v("Stellvertretung ausüben")}render(){if(this.availableSubstitutions.length!==0)return y`
      <button
        id="substitutions-toggle"
        class=${Z({active:!!this.activeSubstitution,open:this.dropdown.open})}
        @click=${this.toggle.bind(this)}
        aria-label=${this.getLabel()}
        aria-expanded=${this.dropdown.open}
        aria-haspopup="menu"
      >
        <div class="icon">${ct(ji)}</div>
        <div class="label">${this.getLabel()}</div>
        <div class="icon-caret">
          ${ct(this.activeSubstitution?Ui:Mi)}
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
    `}};ae.styles=[x,A`
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
    `];De([bt("bkd-substitutions-dropdown")],ae.prototype,"dropdownElement",2);De([Le()],ae.prototype,"availableSubstitutions",2);De([Le()],ae.prototype,"activeSubstitution",2);ae=De([P("bkd-substitutions-toggle"),C()],ae);var Ki=Object.defineProperty,Vi=Object.getOwnPropertyDescriptor,qi=(t,e,n,r)=>{for(var i=r>1?void 0:r?Vi(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&Ki(e,n,i),i};let ht=class extends ${constructor(){super(),this.dropdown=new Me(this,"settings-toggle","settings-menu",{queryItems:()=>{var t;return((t=this.shadowRoot)==null?void 0:t.querySelectorAll("a[role='menuitem']"))??null},queryFocused:()=>{var t;return((t=this.shadowRoot)==null?void 0:t.activeElement)??null}}),new N(this,f)}handleSettingsItemClick(t,e){this.dropdown.close(),this.dispatchEvent(new CustomEvent("bkdsettingsitemclick",{detail:{item:e,event:t},composed:!0,bubbles:!0}))}renderSettingsItem(t){return y`<li role="presentation">
      <a
        role="menuitem"
        href=${t.href}
        target=${t.external?"_blank":"_self"}
        @click=${e=>this.handleSettingsItemClick(e,t)}
      >
        ${t.label}</a
      >
      ${t.img?y`<img src=${t.img} alt="" width="24" height="24" />`:_}
    </li>`}render(){return y`
      <button
        type="button"
        id="settings-toggle"
        @click=${()=>this.dropdown.toggle()}
        aria-label=${v("Menü Benutzereinstellungen")}
        aria-expanded=${this.dropdown.open}
        aria-haspopup="menu"
      >
        <img src="/icons/settings.svg" alt="" width="32" height="32" />
      </button>
      <ul id="settings-menu" role="menu" ?hidden=${!this.dropdown.open}>
        ${X(kn(f.locale),this.renderSettingsItem.bind(this))}
      </ul>
    `}};ht.styles=[x,A`
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
    `];ht=qi([P("bkd-user-settings"),C()],ht);function Bi(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var En={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(self,()=>(()=>{var n={934:(o,c,a)=>{Object.defineProperty(c,"__esModule",{value:!0}),c.generateQueryString=c.OAuth2Client=void 0;const l=a(443),h=a(618);function d(u,b){return new URL(u,b).toString()}function p(u){return new URLSearchParams(Object.fromEntries(Object.entries(u).filter(([b,g])=>g!==void 0))).toString()}c.OAuth2Client=class{constructor(u){this.discoveryDone=!1,this.serverMetadata=null,u!=null&&u.fetch||(u.fetch=fetch.bind(globalThis)),this.settings=u}async refreshToken(u){if(!u.refreshToken)throw new Error("This token didn't have a refreshToken. It's not possible to refresh this");const b={grant_type:"refresh_token",refresh_token:u.refreshToken};return this.settings.clientSecret||(b.client_id=this.settings.clientId),this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",b))}async clientCredentials(u){var b;const g=["client_id","client_secret","grant_type","scope"];if(u!=null&&u.extraParams&&Object.keys(u.extraParams).filter(k=>g.includes(k)).length>0)throw new Error(`The following extraParams are disallowed: '${g.join("', '")}'`);const m={grant_type:"client_credentials",scope:(b=u==null?void 0:u.scope)===null||b===void 0?void 0:b.join(" "),...u==null?void 0:u.extraParams};if(!this.settings.clientSecret)throw new Error("A clientSecret must be provided to use client_credentials");return this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",m))}async password(u){var b;const g={grant_type:"password",...u,scope:(b=u.scope)===null||b===void 0?void 0:b.join(" ")};return this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",g))}get authorizationCode(){return new h.OAuth2AuthorizationCodeClient(this)}async introspect(u){const b={token:u.accessToken,token_type_hint:"access_token"};return this.request("introspectionEndpoint",b)}async getEndpoint(u){if(this.settings[u]!==void 0)return d(this.settings[u],this.settings.server);if(u!=="discoveryEndpoint"&&(await this.discover(),this.settings[u]!==void 0))return d(this.settings[u],this.settings.server);if(!this.settings.server)throw new Error(`Could not determine the location of ${u}. Either specify ${u} in the settings, or the "server" endpoint to let the client discover it.`);switch(u){case"authorizationEndpoint":return d("/authorize",this.settings.server);case"tokenEndpoint":return d("/token",this.settings.server);case"discoveryEndpoint":return d("/.well-known/oauth-authorization-server",this.settings.server);case"introspectionEndpoint":return d("/introspect",this.settings.server)}}async discover(){var u;if(this.discoveryDone)return;let b;this.discoveryDone=!0;try{b=await this.getEndpoint("discoveryEndpoint")}catch{return void console.warn('[oauth2] OAuth2 discovery endpoint could not be determined. Either specify the "server" or "discoveryEndpoint')}const g=await this.settings.fetch(b,{headers:{Accept:"application/json"}});if(!g.ok)return;if(!(!((u=g.headers.get("Content-Type"))===null||u===void 0)&&u.startsWith("application/json")))return void console.warn("[oauth2] OAuth2 discovery endpoint was not a JSON response. Response is ignored");this.serverMetadata=await g.json();const m=[["authorization_endpoint","authorizationEndpoint"],["token_endpoint","tokenEndpoint"],["introspection_endpoint","introspectionEndpoint"]];if(this.serverMetadata!==null){for(const[k,w]of m)this.serverMetadata[k]&&(this.settings[w]=d(this.serverMetadata[k],b));this.serverMetadata.token_endpoint_auth_methods_supported&&!this.settings.authenticationMethod&&(this.settings.authenticationMethod=this.serverMetadata.token_endpoint_auth_methods_supported[0])}}async request(u,b){const g=await this.getEndpoint(u),m={"Content-Type":"application/x-www-form-urlencoded"};let k=this.settings.authenticationMethod;switch(k||(k=this.settings.clientSecret?"client_secret_basic":"client_secret_post"),k){case"client_secret_basic":m.Authorization="Basic "+btoa(this.settings.clientId+":"+this.settings.clientSecret);break;case"client_secret_post":b.client_id=this.settings.clientId,this.settings.clientSecret&&(b.client_secret=this.settings.clientSecret);break;default:throw new Error("Authentication method not yet supported:"+k+". Open a feature request if you want this!")}const w=await this.settings.fetch(g,{method:"POST",body:p(b),headers:m});if(w.ok)return await w.json();let R,j,He;throw w.headers.has("Content-Type")&&w.headers.get("Content-Type").startsWith("application/json")&&(R=await w.json()),R!=null&&R.error?(j="OAuth2 error "+R.error+".",R.error_description&&(j+=" "+R.error_description),He=R.error):(j="HTTP Error "+w.status+" "+w.statusText,w.status===401&&this.settings.clientSecret&&(j+=". It's likely that the clientId and/or clientSecret was incorrect"),He=null),new l.OAuth2Error(j,He,w.status)}tokenResponseToOAuth2Token(u){return u.then(b=>{var g;return{accessToken:b.access_token,expiresAt:b.expires_in?Date.now()+1e3*b.expires_in:null,refreshToken:(g=b.refresh_token)!==null&&g!==void 0?g:null}})}},c.generateQueryString=p},618:(o,c,a)=>{Object.defineProperty(c,"__esModule",{value:!0}),c.getCodeChallenge=c.generateCodeVerifier=c.OAuth2AuthorizationCodeClient=void 0;const l=a(934),h=a(443);async function d(g){const m=p();if(m!=null&&m.subtle)return["S256",b(await m.subtle.digest("SHA-256",u(g)))];{const k=a(212).createHash("sha256");return k.update(u(g)),["S256",k.digest("base64url")]}}function p(){if(typeof window<"u"&&window.crypto)return window.crypto;if(typeof self<"u"&&self.crypto)return self.crypto;const g=a(212);return g.webcrypto?g.webcrypto:null}function u(g){const m=new Uint8Array(g.length);for(let k=0;k<g.length;k++)m[k]=255&g.charCodeAt(k);return m}function b(g){return btoa(String.fromCharCode(...new Uint8Array(g))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}c.OAuth2AuthorizationCodeClient=class{constructor(g){this.client=g}async getAuthorizeUri(g){const[m,k]=await Promise.all([g.codeVerifier?d(g.codeVerifier):void 0,this.client.getEndpoint("authorizationEndpoint")]);let w={client_id:this.client.settings.clientId,response_type:"code",redirect_uri:g.redirectUri,code_challenge_method:m==null?void 0:m[0],code_challenge:m==null?void 0:m[1]};g.state&&(w.state=g.state),g.scope&&(w.scope=g.scope.join(" "));const R=Object.keys(w);if(g!=null&&g.extraParams&&Object.keys(g.extraParams).filter(j=>R.includes(j)).length>0)throw new Error(`The following extraParams are disallowed: '${R.join("', '")}'`);return w={...w,...g==null?void 0:g.extraParams},k+"?"+(0,l.generateQueryString)(w)}async getTokenFromCodeRedirect(g,m){const{code:k}=await this.validateResponse(g,{state:m.state});return this.getToken({code:k,redirectUri:m.redirectUri,codeVerifier:m.codeVerifier})}async validateResponse(g,m){var k;const w=new URL(g).searchParams;if(w.has("error"))throw new h.OAuth2Error((k=w.get("error_description"))!==null&&k!==void 0?k:"OAuth2 error",w.get("error"),0);if(!w.has("code"))throw new Error(`The url did not contain a code parameter ${g}`);if(m.state&&m.state!==w.get("state"))throw new Error(`The "state" parameter in the url did not match the expected value of ${m.state}`);return{code:w.get("code"),scope:w.has("scope")?w.get("scope").split(" "):void 0}}async getToken(g){const m={grant_type:"authorization_code",code:g.code,redirect_uri:g.redirectUri,code_verifier:g.codeVerifier};return this.client.tokenResponseToOAuth2Token(this.client.request("tokenEndpoint",m))}},c.generateCodeVerifier=async function(){const g=p();if(g){const m=new Uint8Array(32);return g.getRandomValues(m),b(m)}{const m=a(212);return new Promise((k,w)=>{m.randomBytes(32,(R,j)=>{R&&w(R),k(j.toString("base64url"))})})}},c.getCodeChallenge=d},443:(o,c)=>{Object.defineProperty(c,"__esModule",{value:!0}),c.OAuth2Error=void 0;class a extends Error{constructor(h,d,p){super(h),this.oauth2Code=d,this.httpCode=p}}c.OAuth2Error=a},13:(o,c)=>{Object.defineProperty(c,"__esModule",{value:!0}),c.OAuth2Fetch=void 0,c.OAuth2Fetch=class{constructor(a){this.token=null,this.activeGetStoredToken=null,this.activeRefresh=null,this.refreshTimer=null,(a==null?void 0:a.scheduleRefresh)===void 0&&(a.scheduleRefresh=!0),this.options=a,a.getStoredToken&&(this.activeGetStoredToken=(async()=>{this.token=await a.getStoredToken(),this.activeGetStoredToken=null})()),this.scheduleRefresh()}async fetch(a,l){const h=new Request(a,l);return this.mw()(h,d=>fetch(d))}mw(){return async(a,l)=>{const h=await this.getAccessToken();let d=a.clone();d.headers.set("Authorization","Bearer "+h);let p=await l(d);if(!p.ok&&p.status===401){const u=await this.refreshToken();d=a.clone(),d.headers.set("Authorization","Bearer "+u.accessToken),p=await l(d)}return p}}async getToken(){return this.token&&(this.token.expiresAt===null||this.token.expiresAt>Date.now())?this.token:this.refreshToken()}async getAccessToken(){return await this.activeGetStoredToken,(await this.getToken()).accessToken}async refreshToken(){var a,l;if(this.activeRefresh)return this.activeRefresh;const h=this.token;this.activeRefresh=(async()=>{var d,p;let u=null;try{h!=null&&h.refreshToken&&(u=await this.options.client.refreshToken(h))}catch{console.warn("[oauth2] refresh token not accepted, we'll try reauthenticating")}if(u||(u=await this.options.getNewToken()),!u){const b=new Error("Unable to obtain OAuth2 tokens, a full reauth may be needed");throw(p=(d=this.options).onError)===null||p===void 0||p.call(d,b),b}return u})();try{const d=await this.activeRefresh;return this.token=d,(l=(a=this.options).storeToken)===null||l===void 0||l.call(a,d),this.scheduleRefresh(),d}catch(d){throw this.options.onError&&this.options.onError(d),d}finally{this.activeRefresh=null}}scheduleRefresh(){var a;if(!this.options.scheduleRefresh||(this.refreshTimer&&(clearTimeout(this.refreshTimer),this.refreshTimer=null),!(!((a=this.token)===null||a===void 0)&&a.expiresAt)||!this.token.refreshToken))return;const l=this.token.expiresAt-Date.now();l<12e4||(this.refreshTimer=setTimeout(async()=>{try{await this.refreshToken()}catch(h){console.error("[fetch-mw-oauth2] error while doing a background OAuth2 auto-refresh",h)}},l-6e4))}}},212:()=>{}},r={};function i(o){var c=r[o];if(c!==void 0)return c.exports;var a=r[o]={exports:{}};return n[o](a,a.exports,i),a.exports}var s={};return(()=>{var o=s;Object.defineProperty(o,"__esModule",{value:!0}),o.OAuth2Error=o.OAuth2Fetch=o.generateCodeVerifier=o.OAuth2AuthorizationCodeClient=o.OAuth2Client=void 0;var c=i(934);Object.defineProperty(o,"OAuth2Client",{enumerable:!0,get:function(){return c.OAuth2Client}});var a=i(618);Object.defineProperty(o,"OAuth2AuthorizationCodeClient",{enumerable:!0,get:function(){return a.OAuth2AuthorizationCodeClient}}),Object.defineProperty(o,"generateCodeVerifier",{enumerable:!0,get:function(){return a.generateCodeVerifier}});var l=i(13);Object.defineProperty(o,"OAuth2Fetch",{enumerable:!0,get:function(){return l.OAuth2Fetch}});var h=i(443);Object.defineProperty(o,"OAuth2Error",{enumerable:!0,get:function(){return h.OAuth2Error}})})(),s})())})(En);var Pt=En.exports,M={},B={},be={};Object.defineProperty(be,"__esModule",{value:!0});be.OAuth2Error=void 0;class Fi extends Error{constructor(e,n,r){super(e),this.oauth2Code=n,this.httpCode=r}}be.OAuth2Error=Fi;var Ft;function Sn(){if(Ft)return B;Ft=1,Object.defineProperty(B,"__esModule",{value:!0}),B.generateQueryString=B.OAuth2Client=void 0;const t=be,e=Pn();class n{constructor(o){this.discoveryDone=!1,this.serverMetadata=null,o!=null&&o.fetch||(o.fetch=fetch.bind(globalThis)),this.settings=o}async refreshToken(o){if(!o.refreshToken)throw new Error("This token didn't have a refreshToken. It's not possible to refresh this");const c={grant_type:"refresh_token",refresh_token:o.refreshToken};return this.settings.clientSecret||(c.client_id=this.settings.clientId),this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",c))}async clientCredentials(o){var c;const a=["client_id","client_secret","grant_type","scope"];if(o!=null&&o.extraParams&&Object.keys(o.extraParams).filter(h=>a.includes(h)).length>0)throw new Error(`The following extraParams are disallowed: '${a.join("', '")}'`);const l={grant_type:"client_credentials",scope:(c=o==null?void 0:o.scope)===null||c===void 0?void 0:c.join(" "),...o==null?void 0:o.extraParams};if(!this.settings.clientSecret)throw new Error("A clientSecret must be provided to use client_credentials");return this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",l))}async password(o){var c;const a={grant_type:"password",...o,scope:(c=o.scope)===null||c===void 0?void 0:c.join(" ")};return this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",a))}get authorizationCode(){return new e.OAuth2AuthorizationCodeClient(this)}async introspect(o){const c={token:o.accessToken,token_type_hint:"access_token"};return this.request("introspectionEndpoint",c)}async getEndpoint(o){if(this.settings[o]!==void 0)return r(this.settings[o],this.settings.server);if(o!=="discoveryEndpoint"&&(await this.discover(),this.settings[o]!==void 0))return r(this.settings[o],this.settings.server);if(!this.settings.server)throw new Error(`Could not determine the location of ${o}. Either specify ${o} in the settings, or the "server" endpoint to let the client discover it.`);switch(o){case"authorizationEndpoint":return r("/authorize",this.settings.server);case"tokenEndpoint":return r("/token",this.settings.server);case"discoveryEndpoint":return r("/.well-known/oauth-authorization-server",this.settings.server);case"introspectionEndpoint":return r("/introspect",this.settings.server)}}async discover(){var o;if(this.discoveryDone)return;this.discoveryDone=!0;let c;try{c=await this.getEndpoint("discoveryEndpoint")}catch{console.warn('[oauth2] OAuth2 discovery endpoint could not be determined. Either specify the "server" or "discoveryEndpoint');return}const a=await this.settings.fetch(c,{headers:{Accept:"application/json"}});if(!a.ok)return;if(!(!((o=a.headers.get("Content-Type"))===null||o===void 0)&&o.startsWith("application/json"))){console.warn("[oauth2] OAuth2 discovery endpoint was not a JSON response. Response is ignored");return}this.serverMetadata=await a.json();const l=[["authorization_endpoint","authorizationEndpoint"],["token_endpoint","tokenEndpoint"],["introspection_endpoint","introspectionEndpoint"]];if(this.serverMetadata!==null){for(const[h,d]of l)this.serverMetadata[h]&&(this.settings[d]=r(this.serverMetadata[h],c));this.serverMetadata.token_endpoint_auth_methods_supported&&!this.settings.authenticationMethod&&(this.settings.authenticationMethod=this.serverMetadata.token_endpoint_auth_methods_supported[0])}}async request(o,c){const a=await this.getEndpoint(o),l={"Content-Type":"application/x-www-form-urlencoded"};let h=this.settings.authenticationMethod;switch(h||(h=this.settings.clientSecret?"client_secret_basic":"client_secret_post"),h){case"client_secret_basic":l.Authorization="Basic "+btoa(this.settings.clientId+":"+this.settings.clientSecret);break;case"client_secret_post":c.client_id=this.settings.clientId,this.settings.clientSecret&&(c.client_secret=this.settings.clientSecret);break;default:throw new Error("Authentication method not yet supported:"+h+". Open a feature request if you want this!")}const d=await this.settings.fetch(a,{method:"POST",body:i(c),headers:l});if(d.ok)return await d.json();let p,u,b;throw d.headers.has("Content-Type")&&d.headers.get("Content-Type").startsWith("application/json")&&(p=await d.json()),p!=null&&p.error?(u="OAuth2 error "+p.error+".",p.error_description&&(u+=" "+p.error_description),b=p.error):(u="HTTP Error "+d.status+" "+d.statusText,d.status===401&&this.settings.clientSecret&&(u+=". It's likely that the clientId and/or clientSecret was incorrect"),b=null),new t.OAuth2Error(u,b,d.status)}tokenResponseToOAuth2Token(o){return o.then(c=>{var a;return{accessToken:c.access_token,expiresAt:c.expires_in?Date.now()+c.expires_in*1e3:null,refreshToken:(a=c.refresh_token)!==null&&a!==void 0?a:null}})}}B.OAuth2Client=n;function r(s,o){return new URL(s,o).toString()}function i(s){return new URLSearchParams(Object.fromEntries(Object.entries(s).filter(([o,c])=>c!==void 0))).toString()}return B.generateQueryString=i,B}const Wi={},Gi=Object.freeze(Object.defineProperty({__proto__:null,default:Wi},Symbol.toStringTag,{value:"Module"})),Ze=Bi(Gi);var Wt;function Pn(){if(Wt)return M;Wt=1,Object.defineProperty(M,"__esModule",{value:!0}),M.getCodeChallenge=M.generateCodeVerifier=M.OAuth2AuthorizationCodeClient=void 0;const t=Sn(),e=be;class n{constructor(l){this.client=l}async getAuthorizeUri(l){const[h,d]=await Promise.all([l.codeVerifier?i(l.codeVerifier):void 0,this.client.getEndpoint("authorizationEndpoint")]);let p={client_id:this.client.settings.clientId,response_type:"code",redirect_uri:l.redirectUri,code_challenge_method:h==null?void 0:h[0],code_challenge:h==null?void 0:h[1]};l.state&&(p.state=l.state),l.scope&&(p.scope=l.scope.join(" "));const u=Object.keys(p);if(l!=null&&l.extraParams&&Object.keys(l.extraParams).filter(b=>u.includes(b)).length>0)throw new Error(`The following extraParams are disallowed: '${u.join("', '")}'`);return p={...p,...l==null?void 0:l.extraParams},d+"?"+(0,t.generateQueryString)(p)}async getTokenFromCodeRedirect(l,h){const{code:d}=await this.validateResponse(l,{state:h.state});return this.getToken({code:d,redirectUri:h.redirectUri,codeVerifier:h.codeVerifier})}async validateResponse(l,h){var d;const p=new URL(l).searchParams;if(p.has("error"))throw new e.OAuth2Error((d=p.get("error_description"))!==null&&d!==void 0?d:"OAuth2 error",p.get("error"),0);if(!p.has("code"))throw new Error(`The url did not contain a code parameter ${l}`);if(h.state&&h.state!==p.get("state"))throw new Error(`The "state" parameter in the url did not match the expected value of ${h.state}`);return{code:p.get("code"),scope:p.has("scope")?p.get("scope").split(" "):void 0}}async getToken(l){const h={grant_type:"authorization_code",code:l.code,redirect_uri:l.redirectUri,code_verifier:l.codeVerifier};return this.client.tokenResponseToOAuth2Token(this.client.request("tokenEndpoint",h))}}M.OAuth2AuthorizationCodeClient=n;async function r(){const a=s();if(a){const l=new Uint8Array(32);return a.getRandomValues(l),c(l)}else{const l=Ze;return new Promise((h,d)=>{l.randomBytes(32,(p,u)=>{p&&d(p),h(u.toString("base64url"))})})}}M.generateCodeVerifier=r;async function i(a){const l=s();if(l!=null&&l.subtle)return["S256",c(await l.subtle.digest("SHA-256",o(a)))];{const d=Ze.createHash("sha256");return d.update(o(a)),["S256",d.digest("base64url")]}}M.getCodeChallenge=i;function s(){if(typeof window<"u"&&window.crypto)return window.crypto;if(typeof self<"u"&&self.crypto)return self.crypto;const a=Ze;return a.webcrypto?a.webcrypto:null}function o(a){const l=new Uint8Array(a.length);for(let h=0;h<a.length;h++)l[h]=a.charCodeAt(h)&255;return l}function c(a){return btoa(String.fromCharCode(...new Uint8Array(a))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}return M}var Cn=Pn(),Xi=Sn();const S=window.eventoPortal.settings;if(typeof(S==null?void 0:S.oAuthServer)!="string")throw new Error("Invalid 'oAuthServer' setting");if(typeof(S==null?void 0:S.oAuthPrefix)!="string")throw new Error("Invalid 'oAuthPrefix' setting");if(typeof(S==null?void 0:S.oAuthClientId)!="string")throw new Error("Invalid 'clientId' setting");function Qi(){return new Pt.OAuth2Client({server:S.oAuthServer,clientId:S.oAuthClientId,tokenEndpoint:`${S.oAuthPrefix}/Authorization/Token`,get authorizationEndpoint(){return Ji()},fetch:(...t)=>fetch(...t)})}async function Yi(t,e,n){const r=Rr(),i=await ts(t,r);if(i){console.log("Successfully logged in"),ns(i,r);return}const s=rs();if(s){console.log("Successfully started or stopped substitution"),is(s);return}await ut(t,e,n)}async function ut(t,e,n){if(console.log(`Activate token for scope "${e}" and locale "${n}"`),wr(un()))return console.log("Not authenticated or refresh token expired, redirect to login"),pt(t,e,n,xn);const r=T(),i=Sr(e);qt(r,e,n)?console.log(`Current token for scope "${e}" and locale "${n}" already set`):qt(i,e,n)?(console.log(`Token for scope "${e}" and locale "${n}" cached, set as current`),kt(i)):(console.log(`No token for scope "${e}" and locale "${n}" present or half expired, redirect for token fetch/refresh`),await pt(t,e,n,es))}async function Zi(t){const e=hn();if(!e)throw new Error("No instance available");const n=T();if(n)try{await ss(t,`${S.oAuthPrefix}/Authorization/${e}/Logout`,{access_token:n})}catch(r){if(!(r instanceof SyntaxError))throw r}finally{Pr();const{scope:r,locale:i}=L(n);await pt(t,r,i,xn)}}function Ji(){const t=hn();return t?`${S.oAuthPrefix}/Authorization/${t}/Login`:`${S.oAuthPrefix}/Authorization/Login`}async function pt(t,e,n,r){const i=await Pt.generateCodeVerifier(),s=new URL(document.location.href);s.searchParams.set(Y,n),Ir(i,s.toString());const o=await r(t,e,n,s.toString(),i);document.location.href=o.toString()}const xn=async(t,e,n,r,i)=>{const s=new URL(await t.getEndpoint("authorizationEndpoint")),[o,c]=await Cn.getCodeChallenge(i);return s.searchParams.set("clientId",t.settings.clientId),s.searchParams.set("redirectUrl",r),s.searchParams.set("culture_info",n),s.searchParams.set("application_scope",e),s.searchParams.set("response_type","code"),s.searchParams.set("code_challenge_method",o),s.searchParams.set("code_challenge",c),s},es=async(t,e,n,r,i)=>{const s=new URL(`${S.oAuthPrefix}/Authorization/RefreshPublic`,t.settings.server),[o,c]=await Cn.getCodeChallenge(i),a=un();return s.searchParams.set("redirectUrl",r),s.searchParams.set("culture_info",n),s.searchParams.set("application_scope",e),s.searchParams.set("refresh_token",a??""),s.searchParams.set("response_type","code"),s.searchParams.set("code_challenge_method",o),s.searchParams.set("code_challenge",c),s};async function ts(t,e){return new URLSearchParams(document.location.search).get("code")&&(e!=null&&e.redirectUri)?await t.authorizationCode.getTokenFromCodeRedirect(document.location.href,{redirectUri:e.redirectUri,codeVerifier:e.codeVerifier}):null}function ns(t,e){const{accessToken:n}=t,{scope:r,instanceId:i}=L(n);pn(r,t),kt(n),Er(i),e!=null&&e.redirectUri&&f.navigate(new URL(e.redirectUri))}function rs(){const t=new URLSearchParams(document.location.search),e=t.get("access_token"),n=t.get("expires_in"),r=t.get("refresh_token");return e?{accessToken:e,expiresAt:n?Date.now()+parseInt(n,10)*1e3:null,refreshToken:r||null}:null}function is(t){const{accessToken:e}=t,{scope:n}=L(e);pn(n,t),kt(e);const r=new URL(document.location.href);r.searchParams.delete("access_token"),r.searchParams.delete("expires_in"),r.searchParams.delete("refresh_token"),window.parent===window?history.replaceState({},"",r):window.parent.location.assign(r)}async function ss(t,e,n){var l;const r=new URL(e,t.settings.server).toString(),i={"Content-Type":"application/x-www-form-urlencoded"},s=await fetch(r,{method:"POST",body:n&&Xi.generateQueryString(n),headers:i});if(s.ok)return await s.json();let o,c,a;throw(l=s.headers.get("Content-Type"))!=null&&l.startsWith("application/json")&&(o=await s.json()),o!=null&&o.error?(c="OAuth2 error "+o.error+".",o.error_description&&(c+=" "+o.error_description),a=o.error):(c="HTTP Error "+s.status+" "+s.statusText,a=null),new Pt.OAuth2Error(c,a,s.status)}var os=Object.defineProperty,as=Object.getOwnPropertyDescriptor,Rn=(t,e,n,r)=>{for(var i=r>1?void 0:r?as(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&os(e,n,i),i};const ke=Qi(),ls=async function(){await Yi(ke,Gr(),gn()),f.init()}();si(A`
    ${mn}
    :root {
      ${bn}
    }
  `.toString());let Ie=class extends ${constructor(){super(),this.authReady=!1,this.subscriptions=[],this.handleMessage=({data:t})=>{switch(t.type){case"bkdAppPushState":{const e=t.args[2];this.updateUrlAndNavigationState(e,!1);break}case"bkdAppReplaceState":{const e=t.args[2];Ye(Qe(e),!0);break}case"bkdAppHashChange":{const{url:e}=t;Ye(Qe(e));break}}},ls.then(()=>this.authReady=!0),new N(this,f)}connectedCallback(){super.connectedCallback(),f.initialized.then(()=>{cn(T(),f.app.scope)||ut(ke,f.app.scope,f.locale)}),this.subscriptions.push(f.subscribeScopeAndLocale((e,n)=>ut(ke,e,n),!0)),this.subscriptions.push(f.subscribeInstanceName(this.updateTitle.bind(this))),this.subscriptions.push(f.subscribeNavigationItem(this.updateTitle.bind(this))),window.addEventListener("message",this.handleMessage);const t=new URL(location.href);f.actualAppPath=t.hash,window.addEventListener("hashchange",this.handleHashChange)}disconnectedCallback(){super.disconnectedCallback(),this.subscriptions.forEach(t=>t()),window.removeEventListener("message",this.handleMessage),window.removeEventListener("hashchange",this.handleHashChange)}isAuthenticated(){return!!T()}updateTitle(){const{instanceName:t,navigationItem:e}=f,n=(e==null?void 0:e.label)&&(e==null?void 0:e.key)!==E.navigationHome.key;document.title=n?[e==null?void 0:e.label,t].join(" ― "):t}updateUrlAndNavigationState(t,e){var i;const n=Qe(t);Ye(n,e);const r=Kr(f.navigation,n);(i=r==null?void 0:r.item)!=null&&i.key&&r.item.key!==f.navigationItemKey?(f.actualAppPath=n,f.navigationItemKey=r.item.key):f.appPath=n}handleHashChange(t){const e=new URL(t.newURL);f.appPath=e.hash}handleLogout(){Zi(ke)}render(){return y`
      ${je(this.authReady&&this.isAuthenticated(),()=>y`
          <bkd-header @bkdlogout=${this.handleLogout.bind(this)}></bkd-header>
          <bkd-content></bkd-content>
          <bkd-footer></bkd-footer>
        `)}
    `}};Ie.styles=[x,A`
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
    `];Rn([Le()],Ie.prototype,"authReady",2);Ie=Rn([P("bkd-portal"),C()],Ie);
