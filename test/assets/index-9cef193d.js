var xn=Object.defineProperty;var In=(t,e,n)=>e in t?xn(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var O=(t,e,n)=>(In(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const we=window,ut=we.ShadowRoot&&(we.ShadyCSS===void 0||we.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,pt=Symbol(),Ct=new WeakMap;let Gt=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==pt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(ut&&e===void 0){const r=n!==void 0&&n.length===1;r&&(e=Ct.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Ct.set(n,e))}return e}toString(){return this.cssText}};const On=t=>new Gt(typeof t=="string"?t:t+"",void 0,pt),A=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((r,i,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new Gt(n,t,pt)},Tn=(t,e)=>{ut?t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):e.forEach(n=>{const r=document.createElement("style"),i=we.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,t.appendChild(r)})},Pt=ut?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const r of e.cssRules)n+=r.cssText;return On(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var He;const _e=window,xt=_e.trustedTypes,Rn=xt?xt.emptyScript:"",It=_e.reactiveElementPolyfillSupport,Ze={toAttribute(t,e){switch(e){case Boolean:t=t?Rn:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},Wt=(t,e)=>e!==t&&(e==e||t==t),Ke={attribute:!0,type:String,converter:Ze,reflect:!1,hasChanged:Wt};let J=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((n,r)=>{const i=this._$Ep(r,n);i!==void 0&&(this._$Ev.set(i,r),e.push(i))}),e}static createProperty(e,n=Ke){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,r,n);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,n,r){return{get(){return this[n]},set(i){const s=this[e];this[n]=i,this.requestUpdate(e,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Ke}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,r=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const i of r)this.createProperty(i,n[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)n.unshift(Pt(i))}else e!==void 0&&n.push(Pt(e));return n}static _$Ep(e,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(n=>n(this))}addController(e){var n,r;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Tn(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostConnected)===null||r===void 0?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostDisconnected)===null||r===void 0?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EO(e,n,r=Ke){var i;const s=this.constructor._$Ep(e,r);if(s!==void 0&&r.reflect===!0){const o=(((i=r.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?r.converter:Ze).toAttribute(n,r.type);this._$El=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(e,n){var r;const i=this.constructor,s=i._$Ev.get(e);if(s!==void 0&&this._$El!==s){const o=i.getPropertyOptions(s),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?o.converter:Ze;this._$El=s,this[s]=l.fromAttribute(n,o.type),this._$El=null}}requestUpdate(e,n,r){let i=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||Wt)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,s)=>this[s]=i),this._$Ei=void 0);let n=!1;const r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdate)===null||s===void 0?void 0:s.call(i)}),this.update(r)):this._$Ek()}catch(i){throw n=!1,this._$Ek(),i}n&&this._$AE(r)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach(r=>{var i;return(i=r.hostUpdated)===null||i===void 0?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((n,r)=>this._$EO(r,this[r],n)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};J.finalized=!0,J.elementProperties=new Map,J.elementStyles=[],J.shadowRootOptions={mode:"open"},It==null||It({ReactiveElement:J}),((He=_e.reactiveElementVersions)!==null&&He!==void 0?He:_e.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ve;const $e=window,te=$e.trustedTypes,Ot=te?te.createPolicy("lit-html",{createHTML:t=>t}):void 0,Je="$lit$",V=`lit$${(Math.random()+"").slice(9)}$`,Xt="?"+V,Ln=`<${Xt}>`,Q=document,he=()=>Q.createComment(""),ue=t=>t===null||typeof t!="object"&&typeof t!="function",Qt=Array.isArray,zn=t=>Qt(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",qe=`[ 	
\f\r]`,ce=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Tt=/-->/g,Rt=/>/g,F=RegExp(`>|${qe}(?:([^\\s"'>=/]+)(${qe}*=${qe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Lt=/'/g,zt=/"/g,Yt=/^(?:script|style|textarea|title)$/i,Un=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),y=Un(1),B=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),Ut=new WeakMap,W=Q.createTreeWalker(Q,129,null,!1),jn=(t,e)=>{const n=t.length-1,r=[];let i,s=e===2?"<svg>":"",o=ce;for(let a=0;a<n;a++){const c=t[a];let p,d,u=-1,m=0;for(;m<c.length&&(o.lastIndex=m,d=o.exec(c),d!==null);)m=o.lastIndex,o===ce?d[1]==="!--"?o=Tt:d[1]!==void 0?o=Rt:d[2]!==void 0?(Yt.test(d[2])&&(i=RegExp("</"+d[2],"g")),o=F):d[3]!==void 0&&(o=F):o===F?d[0]===">"?(o=i??ce,u=-1):d[1]===void 0?u=-2:(u=o.lastIndex-d[2].length,p=d[1],o=d[3]===void 0?F:d[3]==='"'?zt:Lt):o===zt||o===Lt?o=F:o===Tt||o===Rt?o=ce:(o=F,i=void 0);const g=o===F&&t[a+1].startsWith("/>")?" ":"";s+=o===ce?c+Ln:u>=0?(r.push(p),c.slice(0,u)+Je+c.slice(u)+V+g):c+V+(u===-2?(r.push(void 0),a):g)}const l=s+(t[n]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Ot!==void 0?Ot.createHTML(l):l,r]};class pe{constructor({strings:e,_$litType$:n},r){let i;this.parts=[];let s=0,o=0;const l=e.length-1,a=this.parts,[c,p]=jn(e,n);if(this.el=pe.createElement(c,r),W.currentNode=this.el.content,n===2){const d=this.el.content,u=d.firstChild;u.remove(),d.append(...u.childNodes)}for(;(i=W.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes()){const d=[];for(const u of i.getAttributeNames())if(u.endsWith(Je)||u.startsWith(V)){const m=p[o++];if(d.push(u),m!==void 0){const g=i.getAttribute(m.toLowerCase()+Je).split(V),h=/([.?@])?(.*)/.exec(m);a.push({type:1,index:s,name:h[2],strings:g,ctor:h[1]==="."?Nn:h[1]==="?"?Hn:h[1]==="@"?Kn:Te})}else a.push({type:6,index:s})}for(const u of d)i.removeAttribute(u)}if(Yt.test(i.tagName)){const d=i.textContent.split(V),u=d.length-1;if(u>0){i.textContent=te?te.emptyScript:"";for(let m=0;m<u;m++)i.append(d[m],he()),W.nextNode(),a.push({type:2,index:++s});i.append(d[u],he())}}}else if(i.nodeType===8)if(i.data===Xt)a.push({type:2,index:s});else{let d=-1;for(;(d=i.data.indexOf(V,d+1))!==-1;)a.push({type:7,index:s}),d+=V.length-1}s++}}static createElement(e,n){const r=Q.createElement("template");return r.innerHTML=e,r}}function ne(t,e,n=t,r){var i,s,o,l;if(e===B)return e;let a=r!==void 0?(i=n._$Co)===null||i===void 0?void 0:i[r]:n._$Cl;const c=ue(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==c&&((s=a==null?void 0:a._$AO)===null||s===void 0||s.call(a,!1),c===void 0?a=void 0:(a=new c(t),a._$AT(t,n,r)),r!==void 0?((o=(l=n)._$Co)!==null&&o!==void 0?o:l._$Co=[])[r]=a:n._$Cl=a),a!==void 0&&(e=ne(t,a._$AS(t,e.values),a,r)),e}class Mn{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var n;const{el:{content:r},parts:i}=this._$AD,s=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:Q).importNode(r,!0);W.currentNode=s;let o=W.nextNode(),l=0,a=0,c=i[0];for(;c!==void 0;){if(l===c.index){let p;c.type===2?p=new be(o,o.nextSibling,this,e):c.type===1?p=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(p=new Vn(o,this,e)),this._$AV.push(p),c=i[++a]}l!==(c==null?void 0:c.index)&&(o=W.nextNode(),l++)}return W.currentNode=Q,s}v(e){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}}class be{constructor(e,n,r,i){var s;this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=i,this._$Cp=(s=i==null?void 0:i.isConnected)===null||s===void 0||s}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=ne(this,e,n),ue(e)?e===_||e==null||e===""?(this._$AH!==_&&this._$AR(),this._$AH=_):e!==this._$AH&&e!==B&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):zn(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==_&&ue(this._$AH)?this._$AA.nextSibling.data=e:this.$(Q.createTextNode(e)),this._$AH=e}g(e){var n;const{values:r,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=pe.createElement(i.h,this.options)),i);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===s)this._$AH.v(r);else{const o=new Mn(s,this),l=o.u(this.options);o.v(r),this.$(l),this._$AH=o}}_$AC(e){let n=Ut.get(e.strings);return n===void 0&&Ut.set(e.strings,n=new pe(e)),n}T(e){Qt(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const s of e)i===n.length?n.push(r=new be(this.k(he()),this.k(he()),this,this.options)):r=n[i],r._$AI(s),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,n);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var n;this._$AM===void 0&&(this._$Cp=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}}class Te{constructor(e,n,r,i,s){this.type=1,this._$AH=_,this._$AN=void 0,this.element=e,this.name=n,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=_}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,r,i){const s=this.strings;let o=!1;if(s===void 0)e=ne(this,e,n,0),o=!ue(e)||e!==this._$AH&&e!==B,o&&(this._$AH=e);else{const l=e;let a,c;for(e=s[0],a=0;a<s.length-1;a++)c=ne(this,l[r+a],n,a),c===B&&(c=this._$AH[a]),o||(o=!ue(c)||c!==this._$AH[a]),c===_?e=_:e!==_&&(e+=(c??"")+s[a+1]),this._$AH[a]=c}o&&!i&&this.j(e)}j(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Nn extends Te{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_?void 0:e}}const Dn=te?te.emptyScript:"";class Hn extends Te{constructor(){super(...arguments),this.type=4}j(e){e&&e!==_?this.element.setAttribute(this.name,Dn):this.element.removeAttribute(this.name)}}class Kn extends Te{constructor(e,n,r,i,s){super(e,n,r,i,s),this.type=5}_$AI(e,n=this){var r;if((e=(r=ne(this,e,n,0))!==null&&r!==void 0?r:_)===B)return;const i=this._$AH,s=e===_&&i!==_||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==_&&(i===_||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,r;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}}class Vn{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){ne(this,e)}}const jt=$e.litHtmlPolyfillSupport;jt==null||jt(pe,be),((Ve=$e.litHtmlVersions)!==null&&Ve!==void 0?Ve:$e.litHtmlVersions=[]).push("2.7.4");const qn=(t,e,n)=>{var r,i;const s=(r=n==null?void 0:n.renderBefore)!==null&&r!==void 0?r:e;let o=s._$litPart$;if(o===void 0){const l=(i=n==null?void 0:n.renderBefore)!==null&&i!==void 0?i:null;s._$litPart$=o=new be(e.insertBefore(he(),l),l,void 0,n??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Be,Fe;let $=class extends J{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const r=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=r.firstChild),r}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=qn(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return B}};$.finalized=!0,$._$litElement$=!0,(Be=globalThis.litElementHydrateSupport)===null||Be===void 0||Be.call(globalThis,{LitElement:$});const Mt=globalThis.litElementPolyfillSupport;Mt==null||Mt({LitElement:$});((Fe=globalThis.litElementVersions)!==null&&Fe!==void 0?Fe:globalThis.litElementVersions=[]).push("3.3.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=t=>e=>typeof e=="function"?((n,r)=>(customElements.define(n,r),r))(t,e):((n,r)=>{const{kind:i,elements:s}=r;return{kind:i,elements:s,finisher(o){customElements.define(n,o)}}})(t,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bn=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}};function T(t){return(e,n)=>n!==void 0?((r,i,s)=>{i.constructor.createProperty(s,r)})(t,e,n):Bn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Re(t){return T({...t,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gt=({finisher:t,descriptor:e})=>(n,r)=>{var i;if(r===void 0){const s=(i=n.originalKey)!==null&&i!==void 0?i:n.key,o=e!=null?{kind:"method",placement:"prototype",key:s,descriptor:e(n.key)}:{...n,key:s};return t!=null&&(o.finisher=function(l){t(l,s)}),o}{const s=n.constructor;e!==void 0&&Object.defineProperty(n,r,e(r)),t==null||t(s,r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ft(t,e){return gt({descriptor:n=>{const r={get(){var i,s;return(s=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(t))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(e){const i=typeof n=="symbol"?Symbol():"__"+n;r.get=function(){var s,o;return this[i]===void 0&&(this[i]=(o=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(t))!==null&&o!==void 0?o:null),this[i]}}return r}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ge;((Ge=window.HTMLSlotElement)===null||Ge===void 0?void 0:Ge.prototype.assignedElements)!=null;function Zt(t){return typeof t=="function"?t():t}const St=class extends Event{constructor(n,r,i){super(St.eventName,{cancelable:!1});O(this,"key");O(this,"state");O(this,"value");this.key=n,this.value=r,this.state=i}};let q=St;O(q,"eventName","lit-state-changed");const Fn=(t,e)=>e!==t&&(e===e||t===t);class ke extends EventTarget{constructor(){super();O(this,"hookMap",new Map);this.constructor.finalize(),this.propertyMap&&[...this.propertyMap].forEach(([n,r])=>{if(r.initialValue!==void 0){const i=Zt(r.initialValue);this[n]=i,r.value=i}})}get propertyMap(){return this.constructor.propertyMap}get stateValue(){return Object.fromEntries([...this.propertyMap].map(([n])=>[n,this[n]]))}static finalize(){if(this.finalized)return!1;this.finalized=!0;const n=Object.keys(this.properties||{});for(const r of n)this.createProperty(r,this.properties[r]);return!0}static createProperty(n,r){this.finalize();const i=typeof n=="symbol"?Symbol():`__${n}`,s=this.getPropertyDescriptor(n,i,r);Object.defineProperty(this.prototype,n,s)}static getPropertyDescriptor(n,r,i){const s=(i==null?void 0:i.hasChanged)||Fn;return{get(){return this[r]},set(o){const l=this[n];this[r]=o,s(o,l)===!0&&this.dispatchStateEvent(n,o,this)},configurable:!0,enumerable:!0}}reset(){this.hookMap.forEach(n=>n.reset()),[...this.propertyMap].filter(([n,r])=>!(r.skipReset===!0||r.resetValue===void 0)).forEach(([n,r])=>{this[n]=r.resetValue})}subscribe(n,r,i){r&&!Array.isArray(r)&&(r=[r]);const s=o=>{(!r||r.includes(o.key))&&n(o.key,o.value,this)};return this.addEventListener(q.eventName,s,i),()=>this.removeEventListener(q.eventName,s)}dispatchStateEvent(n,r,i){this.dispatchEvent(new q(n,r,i))}}O(ke,"propertyMap"),O(ke,"properties"),O(ke,"finalized",!1);class D{constructor(e,n,r){O(this,"host");O(this,"state");O(this,"callback");this.host=e,this.state=n,this.host.addController(this),this.callback=r||(()=>this.host.requestUpdate())}hostConnected(){this.state.addEventListener(q.eventName,this.callback),this.callback()}hostDisconnected(){this.state.removeEventListener(q.eventName,this.callback)}}function H(t){return gt({finisher:(e,n)=>{if(Object.getOwnPropertyDescriptor(e.prototype,n))throw new Error("@property must be called before all state decorators");return e.propertyMap||(e.propertyMap=new Map),e.propertyMap.set(n,{...t,initialValue:t==null?void 0:t.value,resetValue:t==null?void 0:t.value}),e.createProperty(n,t)}})}function Gn(t,e){if(t!==null&&(e===Boolean||e===Number||e===Array||e===Object))try{t=JSON.parse(t)}catch{console.warn("cannot parse value",t)}return t}const Wn=new URL(window.location.href);function Xn(t){return gt({finisher:(e,n)=>{if(!Object.getOwnPropertyDescriptor(e.prototype,n))throw new Error("@local-storage decorator need to be called after @property");const i=`${(t==null?void 0:t.parameter)||String(n)}`,s=e.propertyMap.get(n),o=s==null?void 0:s.type;if(s){const l=s.initialValue,a=Wn.searchParams.get(i);a!==null&&(s.skipAsync=!0),s.initialValue=()=>Gn(a,o)??Zt(l),e.propertyMap.set(n,{...s,...t})}}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qn=t=>typeof t!="string"&&"strTag"in t,Jt=(t,e,n)=>{let r=t[0];for(let i=1;i<t.length;i++)r+=e[n?n[i-1]:i-1],r+=t[i];return r};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const en=t=>Qn(t)?Jt(t.strings,t.values):t;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const et="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Yn{constructor(e){this.__litLocalizeEventHandler=n=>{n.detail.status==="ready"&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(et,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(et,this.__litLocalizeEventHandler)}}const Zn=t=>t.addController(new Yn(t)),tn=Zn;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jn=()=>t=>typeof t=="function"?tr(t):er(t),P=Jn,er=({kind:t,elements:e})=>({kind:t,elements:e,finisher(n){n.addInitializer(tn)}}),tr=t=>(t.addInitializer(tn),t);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class nn{constructor(){this.settled=!1,this.promise=new Promise((e,n)=>{this._resolve=e,this._reject=n})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */const M=[];for(let t=0;t<256;t++)M[t]=(t>>4&15).toString(16)+(t&15).toString(16);function nr(t){let e=0,n=8997,r=0,i=33826,s=0,o=40164,l=0,a=52210;for(let c=0;c<t.length;c++)n^=t.charCodeAt(c),e=n*435,r=i*435,s=o*435,l=a*435,s+=n<<8,l+=i<<8,r+=e>>>16,n=e&65535,s+=r>>>16,i=r&65535,a=l+(s>>>16)&65535,o=s&65535;return M[a>>8]+M[a&255]+M[o>>8]+M[o&255]+M[i>>8]+M[i&255]+M[n>>8]+M[n&255]}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rr="",ir="h",sr="s";function or(t,e){return(e?ir:sr)+nr(typeof t=="string"?t:t.join(rr))}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt=new WeakMap,Dt=new Map;function ar(t,e,n){var r;if(t){const i=(r=n==null?void 0:n.id)!==null&&r!==void 0?r:lr(e),s=t[i];if(s){if(typeof s=="string")return s;if("strTag"in s)return Jt(s.strings,e.values,s.values);{let o=Nt.get(s);return o===void 0&&(o=s.values,Nt.set(s,o)),{...s,values:o.map(l=>e.values[l])}}}}return en(e)}function lr(t){const e=typeof t=="string"?t:t.strings;let n=Dt.get(e);return n===void 0&&(n=or(e,typeof t!="string"&&!("strTag"in t)),Dt.set(e,n)),n}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function We(t){window.dispatchEvent(new CustomEvent(et,{detail:t}))}let Ae="",de,rn,Ee,tt,sn,G=new nn;G.resolve();let ye=0;const cr=t=>(ur((e,n)=>ar(sn,e,n)),Ae=rn=t.sourceLocale,Ee=new Set(t.targetLocales),Ee.add(t.sourceLocale),tt=t.loadLocale,{getLocale:dr,setLocale:hr}),dr=()=>Ae,hr=t=>{if(t===(de??Ae))return G.promise;if(!Ee||!tt)throw new Error("Internal error");if(!Ee.has(t))throw new Error("Invalid locale code");ye++;const e=ye;return de=t,G.settled&&(G=new nn),We({status:"loading",loadingLocale:t}),(t===rn?Promise.resolve({templates:void 0}):tt(t)).then(r=>{ye===e&&(Ae=t,de=void 0,sn=r.templates,We({status:"ready",readyLocale:t}),G.resolve())},r=>{ye===e&&(We({status:"error",errorLocale:t,errorMessage:r.toString()}),G.reject(r))}),G.promise};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let b=en,Ht=!1;function ur(t){if(Ht)throw new Error("lit-localize can only be configured once");b=t,Ht=!0}const pr="modulepreload",gr=function(t){return"/"+t},Kt={},fr=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=gr(s),s in Kt)return;Kt[s]=!0;const o=s.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!r)for(let p=i.length-1;p>=0;p--){const d=i[p];if(d.href===s&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${l}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":pr,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((p,d)=>{c.addEventListener("load",p),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},on="de-CH",vr=["fr-CH"],vt=["de-CH","fr-CH"];function R(t){const{instance_id:e,scope:n,culture_info:r,nbf:i,exp:s,substitution_id:o}=yr(t);return{instanceId:e,scope:n,locale:r,issueTime:i,expirationTime:s,substitutionId:o?parseInt(o,10):void 0}}function Vt(t,e,n){if(!t)return!1;const r=R(t);return r.scope===e&&r.locale===n&&!mr(r)}function br(t){if(!t)return!0;const{expirationTime:e}=R(t),n=Math.floor(Date.now()/1e3);return e<n}function mr(t){if(!t)return!0;const{issueTime:e,expirationTime:n}=typeof t=="string"?R(t):t,r=n-e,i=Math.floor(Date.now()/1e3);return n<=i+r/2}function yr(t){const n=t.split(".")[1].replace("-","+").replace("_","/"),r=decodeURIComponent(window.atob(n).split("").map(function(i){return"%"+("00"+i.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(r)}const an="bkdInstance",nt="bkdCodeVerifier",ge="bkdRedirectUrl",bt="bkdAccessToken",mt="bkdRefreshToken",fe="CLX.LoginToken",wr="uiCulture",kr="CLX.TokenExpire";function ln(){return localStorage.getItem(an)}function _r(t){localStorage.setItem(an,t)}function $r(t){return localStorage.getItem(`${bt}_${t}`)}function cn(){return localStorage.getItem(mt)}function dn(t,e){const{refreshToken:n,accessToken:r}=e;localStorage.setItem(`${bt}_${t}`,r),n&&localStorage.setItem(mt,n)}function Ar(){new Array(localStorage.length).fill(void 0).forEach((t,e)=>{const n=localStorage.key(e);n&&(n.startsWith(bt)||n===mt)&&localStorage.removeItem(n)}),sessionStorage.removeItem(fe)}function Er(t){localStorage.setItem(wr,t)}function N(){const t=sessionStorage.getItem(fe);return t?t.replace(/^"+|"+$/g,""):null}function Sr(){const t=localStorage.getItem(fe);return t?t.replace(/^"+|"+$/g,""):null}function yt(t){sessionStorage.setItem(fe,`"${t}"`),localStorage.setItem(fe,`"${t}"`);let{expirationTime:e}=R(t);e=e*1e3,localStorage.setItem(kr,e.toString())}function Cr(){const t=sessionStorage.getItem(nt),e=sessionStorage.getItem(ge)??void 0;return sessionStorage.removeItem(ge),sessionStorage.removeItem(nt),t?{redirectUri:e,codeVerifier:t}:null}function Pr(t,e){sessionStorage.setItem(nt,t),e?sessionStorage.setItem(ge,e):sessionStorage.removeItem(ge)}function xr(){return sessionStorage.getItem(ge)}const{getLocale:Ir,setLocale:Or}=cr({sourceLocale:on,targetLocales:vr,loadLocale:t=>fr(()=>import(`/locales/${t}.js`),[])});function hn(){const t=Rr()??Ur()??jr();return t&&Lr(t)?t:zr()??on}async function Tr(t){await Or(t),document.documentElement.lang=t}function Rr(){return new URL(location.href).searchParams.get(Y)}function Lr(t){return vt.includes(t)}function zr(){const t=navigator.language.slice(0,2);return vt.find(e=>e.startsWith(t))??null}function Ur(){const t=xr();return t?new URL(t).searchParams.get(Y):null}function jr(){const t=Sr();return t?R(t).locale:null}const E={apps:[{key:"schulverwaltung",scope:"Tutoring",root:"apps/webapp-schulverwaltung/index.html",heading:!1},{key:"anmeldedetailsEinlesen",scope:"NG",root:"apps/EmberApps/AnmeldedetailsEinlesen/index.html",heading:!0},{key:"schulleiterPersonen",scope:"NG",root:"apps/EmberApps/SchulleiterPersonen/index.html",heading:!0},{key:"fotoliste",scope:"Tutoring",root:"apps/EmberApps/Fotoliste/index.html",heading:!1},{key:"kursausschreibung",scope:"Public",root:"apps/Kursausschreibung/index.html",heading:!0},{key:"kursausschreibungIntern",scope:"Public",root:"apps/Kursausschreibung/indexIntern.html",heading:!0},{key:"stellvertretung",scope:"Tutoring",root:"apps/Stellvertretung/index.html",heading:!0},{key:"reservation",scope:"NG",root:"apps/Raumreservation/index.html",heading:!0},{key:"noteneingabe",scope:"Tutoring",root:"apps/Noteneingabe/index.html",heading:!1}],navigationHome:{key:"home",label:"Home",allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/dashboard"},get navigationPhotoList(){return{key:"photoList",label:b("Fotoliste"),allowedRolesOrPermissions:["TeacherRole"],deniedInstanceIds:null,appKey:"fotoliste",appPath:"#/"}},get navigationInputGrades(){return{key:"inputGrades",label:b("Noteneingabe"),allowedRolesOrPermissions:["TeacherRole"],deniedInstanceIds:null,appKey:"noteneingabe",appPath:"#/"}},get navigationMyProfile(){return{key:"myProfile",label:b("Mein Profil"),allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/my-profile"}},get navigationMySettings(){return{key:"mySettings",label:b("Einstellungen"),allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/my-settings"}},get navigation(){return[{label:b("Unterricht"),items:[{key:"presenceControl",label:b("Präsenzkontrolle"),allowedRolesOrPermissions:["TeacherRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/presence-control"},{key:"currentEvents",label:b("Aktuelle Fächer"),allowedRolesOrPermissions:["TeacherRole","ClassTeacherRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/events/current"},{key:"tests",label:b("Tests und Bewertung"),allowedRolesOrPermissions:["TeacherRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/events"},{key:"substitutionsAssign",label:b("Stellvertretung erfassen"),allowedRolesOrPermissions:["TeacherRole"],deniedInstanceIds:null,appKey:"stellvertretung",appPath:"#/substitutions/assign"},{key:"substitutionsExecute",label:b("Stellvertretung ausüben"),allowedRolesOrPermissions:["TeacherRole"],deniedInstanceIds:null,appKey:"stellvertretung",appPath:"#/substitutions/execute"}]},{label:b("Absenzen"),items:[{key:"openAbsences",label:b("Offene Absenzen entschuldigen"),allowedRolesOrPermissions:["TeacherRole","ClassTeacherRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/open-absences"},{key:"editAbsences",label:b("Absenzen bearbeiten"),allowedRolesOrPermissions:["TeacherRole","ClassTeacherRole","AbsenceAdministratorRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/edit-absences"},{key:"evaluateAbsences",label:b("Absenzen auswerten"),allowedRolesOrPermissions:["TeacherRole","ClassTeacherRole","AbsenceAdministratorRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/evaluate-absences"}]},{label:b("Aus-/Weiterbildungen"),items:[{key:"myAbsences",label:b("Absenzen"),allowedRolesOrPermissions:["StudentRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/my-absences"},{key:"myGrades",label:b("Noten"),allowedRolesOrPermissions:["StudentRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/my-grades"}]},{label:b("Angebote"),items:[{key:"coursesAndEvents",label:b("Kurse und Veranstaltungen"),allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"kursausschreibung",appPath:"#/"},{key:"internalTraining",label:b("Schulinterne Weiterbildung"),allowedRolesOrPermissions:["TeacherRole","ClassTeacherRole","AbsenceAdministratorRole","SubstituteAdministratorRole"],deniedInstanceIds:null,appKey:"kursausschreibungIntern",appPath:"#/"},{key:"reservations",label:b("Räume und Geräte reservieren"),allowedRolesOrPermissions:["Reservations"],deniedInstanceIds:null,appKey:"reservation",appPath:"#/"}]},{label:b("Administration"),items:[{key:"substitutionsAdmin",label:b("Stellvertretungen administrieren"),allowedRolesOrPermissions:["SubstituteAdministratorRole"],deniedInstanceIds:null,appKey:"stellvertretung",appPath:"#/substitutions/admin"},{key:"personSearch",label:"Personen und Institutionen suchen",allowedRolesOrPermissions:["PersonRight"],deniedInstanceIds:null,appKey:"schulleiterPersonen",appPath:"#/persons"},{key:"eventRegistration",label:b("Anmeldedetails einlesen"),allowedRolesOrPermissions:["PersonRight","RegistrationRightWeiterbildungModulanlass","RegistrationRightWeiterbildungKurs"],deniedInstanceIds:null,appKey:"anmeldedetailsEinlesen",appPath:"#/input/"}]}]}},Mr=[E.navigationHome,E.navigationMyProfile,E.navigationMySettings,E.navigationPhotoList,E.navigationInputGrades];function wt(t,e){const n=un(t,({key:r})=>r===e);return n||{item:E.navigationHome,group:null}}function Nr(t,e){return un(t,n=>n.appPath!=="#/"&&e.startsWith(n.appPath))}function un(t,e){let n=Mr.find(r=>e(r));if(n)return{item:n,group:null};for(const r of t)if(n=r.items.find(i=>e(i)),n)return{item:n,group:r};return null}function Le(t){const e=E.apps.find(n=>n.key===t.appKey);if(!e)throw new Error(`Invalid app: ${t.appKey}`);return e}function Dr(t,e){const{item:n}=wt(t,e);return Le(n).scope}function Hr(t,e,n){return t.reduce((r,i)=>{const s=i.items.filter(o=>Kr(o,e)&&Vr(o,n));return s.length>0?[...r,{...i,items:s}]:r},[])}function Kr(t,e){return t.deniedInstanceIds===null||t.deniedInstanceIds.includes(e)}function Vr(t,e){return t.allowedRolesOrPermissions===null||t.allowedRolesOrPermissions.some(n=>e.includes(n))}function qr(t){const e=new URL(location.href);Array.from(e.searchParams.keys()).forEach(r=>{t.includes(r)||e.searchParams.delete(r)}),history.replaceState({},"",e)}function qt(t,e,n=!1){const r=new URL(location.href);r.searchParams.set(t,e),n?history.replaceState({},"",r):history.pushState({},"",r)}function Xe(t){return t.slice(Math.max(t.indexOf("#"),0))}function Qe(t,e=!1){const n=new URL(location.href);n.hash=t,e?history.replaceState({},"",n):history.pushState({},"",n)}function Br(){const e=new URL(location.href).searchParams.get(ie);return e?Dr(E.navigation,e):Le(E.navigationHome).scope}function re(t){const e=typeof t=="string"?wt(f.navigation,t).item:t;return Fr(e).toString()}function Fr(t){const e=new URL(location.origin);return e.searchParams.set(Y,f.locale),e.searchParams.set(ie,t.key),e.hash=t.appPath,e}const ee=window.eventoPortal.settings;if(typeof(ee==null?void 0:ee.apiServer)!="string")throw new Error("Invalid 'apiServer' setting");async function Gr(){var n,r;const t=`${ee.apiServer}/UserSettings/?expand=AccessInfo`,e=await kt(t);return{roles:((n=e==null?void 0:e.AccessInfo)==null?void 0:n.Roles)??[],permissions:((r=e==null?void 0:e.AccessInfo)==null?void 0:r.Permissions)??[]}}async function Wr(){const t=`${ee.apiServer}/Configurations/SchoolAppNavigation`,e=await kt(t);return(e==null?void 0:e.instanceName)||null}function Xr(){const t=`${ee.apiServer}/TeacherSubstitutions/current`;return kt(t)}async function kt(t,{method:e="GET"}={}){const n=N();if(!n)throw new Error("No token available");const r=new Headers({"CLX-Authorization":`token_type=urn:ietf:params:oauth:token-type:jwt-bearer, access_token=${n}`,"Content-Type":"application/json"});return await(await fetch(t,{method:e,headers:r})).json()}var Qr=Object.defineProperty,Yr=Object.getOwnPropertyDescriptor,K=(t,e,n,r)=>{for(var i=r>1?void 0:r?Yr(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&Qr(e,n,i),i};const Y="locale",ie="module",Zr=[Y,ie];class L extends ke{constructor(){super(...arguments),this.actualAppPath=null,this.setInitialized=()=>{},this.initialized=new Promise(e=>this.setInitialized=()=>e(null))}async init(){await this.handleStateChange("locale",this.locale),this.subscribe(this.handleStateChange.bind(this)),await this.loadRolesAndPermissions(),this.setInitialized()}subscribeLocale(e){return e(this.locale),this.subscribe((n,r)=>e(r),"locale")}subscribeInstanceName(e){return this.subscribe((n,r)=>e(r),"instanceName")}subscribeNavigationItemKey(e){return e(this.navigationItemKey),this.subscribe((n,r)=>e(r),"navigationItemKey")}subscribeNavigationItem(e){return e(this.navigationItem),this.subscribe((n,r)=>e(r),"navigationItem")}subscribeScopeAndLocale(e,n=!1){return n||e(this.app.scope,this.locale),this.subscribe(()=>e(this.app.scope,this.locale),["app","locale"])}navigate(e){this.initialized.then(()=>{qr(Zr),this.locale=e.searchParams.get(Y)||Ir(),this.navigationItemKey=e.searchParams.get(ie)??E.navigationHome.key,e.hash&&e.hash!=="#"&&e.hash!=="#/"&&(this.appPath=e.hash)})}async handleStateChange(e,n){e==="locale"&&(await this.updateLocale(n),await this.loadInstanceName()),(e==="locale"||e==="navigationItemKey")&&Er(this.locale),(e==="rolesAndPermissions"||e==="locale")&&this.updateNavigation(),(e==="navigationItemKey"||e==="navigation")&&(this.updateNavigationItemAndGroup(this.navigationItemKey),this.updateApp(this.navigationItem))}async updateLocale(e){qt(Y,e),await Tr(e)}updateNavigation(){const e=N();if(!e)return;const{instanceId:n}=R(e);this.navigation=Hr(E.navigation,n,this.rolesAndPermissions)}updateNavigationItemAndGroup(e){if(this.navigation.length>0){const{item:n,group:r}=wt(this.navigation,e);if(this.navigationItem=n,this.navigationGroup=r,this.actualAppPath&&this.actualAppPath!=="#"&&this.actualAppPath!=="#/"){this.appPath=this.actualAppPath;const i=new URL(document.location.href);i.hash=this.appPath,history.replaceState({},"",i)}else this.appPath=n.appPath;this.actualAppPath=null,n.key===E.navigationHome.key&&n.key!==e&&(this.navigationItemKey=n.key)}qt(ie,this.navigationItemKey)}updateApp(e){this.app=Le(e)}async loadRolesAndPermissions(){if(!N())return;const{roles:n,permissions:r}=await Gr();this.rolesAndPermissions=[...n,...r]}async loadInstanceName(){if(!N())return;const n=await Wr();this.instanceName=[b("Evento"),n].filter(Boolean).join(" | ")}}K([H({value:hn()})],L.prototype,"locale",2);K([H({value:[]})],L.prototype,"rolesAndPermissions",2);K([H({value:""})],L.prototype,"instanceName",2);K([H({value:[]})],L.prototype,"navigation",2);K([Xn({parameter:ie}),H({value:null})],L.prototype,"navigationItemKey",2);K([H({value:null})],L.prototype,"navigationGroup",2);K([H({value:E.navigationHome})],L.prototype,"navigationItem",2);K([H({value:Le(E.navigationHome)})],L.prototype,"app",2);K([H({value:E.navigationHome.appPath})],L.prototype,"appPath",2);const f=new L;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},_t=t=>(...e)=>({_$litDirective$:t,values:e});let $t=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jr={},ei=(t,e=Jr)=>t._$AH=e;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ti=_t(class extends $t{constructor(){super(...arguments),this.key=_}render(t,e){return this.key=t,e}update(t,[e,n]){return e!==this.key&&(ei(t),this.key=e),n}}),gn=A`
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
`,fn=A`
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
    ${gn}
    ${fn}
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
`;function ni(t){var n;const e=document.createElement("style");e.innerText=t,(n=document.querySelector("body"))==null||n.appendChild(e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ze(t,e,n){return t?e():n==null?void 0:n()}var ri=Object.defineProperty,ii=Object.getOwnPropertyDescriptor,vn=(t,e,n,r)=>{for(var i=r>1?void 0:r?ii(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&ri(e,n,i),i};let Se=class extends ${constructor(){super(),this.handleMessage=t=>{switch(t.data.type){case"bkdAppResize":{this.handleResize(t.data.height);break}}},new D(this,f)}connectedCallback(){super.connectedCallback(),window.addEventListener("message",this.handleMessage)}disconnectedCallback(){window.removeEventListener("message",this.handleMessage),super.disconnectedCallback()}handleResize(t){this.iframe&&(this.iframe.height=t)}render(){return y`
      <main>
        ${ze(f.app.heading,()=>y`<h1>${f.navigationItem.label}</h1>`)}
        ${ti(f.app.root,y`
            <iframe
              id="app"
              title=${f.app.key}
              src=${f.app.root+f.appPath}
            ></iframe>
          `)}
      </main>
    `}};Se.styles=[x,A`
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
    `];vn([ft("iframe")],Se.prototype,"iframe",2);Se=vn([C("bkd-content"),P()],Se);var si=Object.defineProperty,oi=Object.getOwnPropertyDescriptor,ai=(t,e,n,r)=>{for(var i=r>1?void 0:r?oi(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&si(e,n,i),i};let rt=class extends ${constructor(){super(),new D(this,f)}render(){return y`
      <footer>
        <div class="copyright">${b("© Bildungs- und Kulturdirektion")}</div>
        <div class="footer-nav">
          <a
            href=${`https://www.bkd.be.ch/${f.locale.slice(0,2)}/tools/rechtliches.html`}
            target="_blank"
            >${b("Rechtliche Hinweise")}</a
          >
          <a
            href=${`https://www.bkd.be.ch/${f.locale.slice(0,2)}/tools/impressum.html`}
            target="_blank"
            >${b("Impressum")}</a
          >
        </div>
      </footer>
    `}};rt.styles=[x,A`
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
          gap: 2.25rem;
        }
      }

      /* Small screen */

      @media screen and (max-width: 767px) {
        :host {
          --bkd-footer-padding-horizontal: var(--bkd-margin-horizontal-small);
        }
      }
    `];rt=ai([C("bkd-footer"),P()],rt);class Ue{constructor(e,n,r,i){this.host=e,this.toggleButtonId=n,this.menuId=r,this.itemQueries=i,this.open=!1,this.handleClick=s=>{this.targetMatchesId(s,[this.toggleButtonId,this.menuId])||this.close()},this.handleKeydown=s=>{switch(s.key){case"Escape":{this.close();break}case"ArrowDown":{const o=this.items[this.nextLinkIndex(1)];o==null||o.focus();break}case"ArrowUp":{const o=this.items[this.nextLinkIndex(-1)];o==null||o.focus();break}}},this.handleCloseOthers=s=>{const{source:o}=s.detail;o!==this&&this.close()},this.host.addController(this)}get items(){var n;const e=((n=this.itemQueries)==null?void 0:n.queryItems)&&this.itemQueries.queryItems();return Array.from(e??[])}get focusedItem(){var e;return(e=this.itemQueries)!=null&&e.queryFocused?this.itemQueries.queryFocused():null}hostDisconnected(){this.removeListeners()}toggle(){this.open=!this.open,this.host.requestUpdate(),this.open?(this.closeOthers(),this.addListeners()):this.removeListeners()}close(){this.open&&this.toggle()}addListeners(){document.addEventListener("click",this.handleClick,!0),document.addEventListener("keydown",this.handleKeydown,!0),document.addEventListener("bkddropdowntoggleclose",this.handleCloseOthers)}removeListeners(){document.removeEventListener("click",this.handleClick,!0),document.removeEventListener("keydown",this.handleKeydown,!0),document.removeEventListener("bkddropdowntoggleclose",this.handleCloseOthers)}activeLinkIndex(){const e=this.focusedItem?this.items.indexOf(this.focusedItem):-1;return e===-1?null:e}nextLinkIndex(e){const n=this.activeLinkIndex(),r=0,i=this.items.length-1;if(n===null)return e>0?r:i;const s=n+e;return s>i?r:s<r?i:s}closeOthers(){document.dispatchEvent(new CustomEvent("bkddropdowntoggleclose",{detail:{source:this}}))}targetMatchesId(e,n){return e.composedPath().some(r=>n.includes(r.id))}}var li=Object.defineProperty,ci=Object.getOwnPropertyDescriptor,di=(t,e,n,r)=>{for(var i=r>1?void 0:r?ci(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&li(e,n,i),i};let it=class extends ${constructor(){super(),this.mobileNav=new Ue(this,"mobile-nav-toggle","mobile-nav-menu"),new D(this,f)}handleLogoClick(t){t.preventDefault(),f.navigationItemKey="home"}handleNavItemClick(t){const{item:e}=t.detail;f.navigationItemKey=e.key,this.mobileNav.close()}handleSettingsItemClick(t){const{item:e,event:n}=t.detail;e.external||(n.preventDefault(),e.key==="logout"?this.dispatchEvent(new CustomEvent("bkdlogout",{composed:!0,bubbles:!0})):f.navigationItemKey=e.key),this.mobileNav.close()}render(){return y`
      <header>
        <bkd-service-nav
          .mobileNavOpen=${this.mobileNav.open}
          @bkdhamburgertoggle=${()=>this.mobileNav.toggle()}
          @bkdsettingsitemclick=${this.handleSettingsItemClick.bind(this)}
        ></bkd-service-nav>
        <a class="logo" href=${re("home")}
          ><img
            src="logo.svg"
            alt=${b("Evento Startseite")}
            @click=${this.handleLogoClick.bind(this)}
        /></a>
        <div class="logo-caption">${f.instanceName}</div>
        <bkd-nav
          @bkdnavitemclick=${this.handleNavItemClick.bind(this)}
        ></bkd-nav>
        ${ze(this.mobileNav.open,()=>y`<bkd-mobile-nav
              id="mobile-nav-menu"
              @bkdnavitemclick=${this.handleNavItemClick.bind(this)}
              @bkdsettingsitemclick=${this.handleSettingsItemClick.bind(this)}
            ></bkd-mobile-nav>`)}
      </header>
    `}};it.styles=[x,A`
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
    `];it=di([C("bkd-header"),P()],it);var hi=Object.defineProperty,ui=Object.getOwnPropertyDescriptor,bn=(t,e,n,r)=>{for(var i=r>1?void 0:r?ui(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&hi(e,n,i),i};let Ce=class extends ${constructor(){super(...arguments),this.open=!1}toggle(){this.dispatchEvent(new CustomEvent("bkdhamburgertoggle",{bubbles:!0,composed:!0}))}render(){const t=this.open?"/icons/close.svg":"/icons/hamburger.svg";return y`
      <button
        class="hamburger"
        aria-expanded=${this.open}
        aria-label=${b("Menü")}
        @click=${this.toggle.bind(this)}
      >
        <img src=${t} alt="" width="32" height="32" />
      </button>
    `}};Ce.styles=[x,A`
      :host {
        display: flex;
      }

      button {
        background: transparent;
        border: none;
        cursor: pointer;
      }
    `];bn([T()],Ce.prototype,"open",2);Ce=bn([C("bkd-hamburger"),P()],Ce);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=_t(class extends $t{constructor(t){var e;if(super(t),t.type!==pn.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,r;if(this.it===void 0){this.it=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!(!((n=this.nt)===null||n===void 0)&&n.has(s))&&this.it.add(s);return this.render(e)}const i=t.element.classList;this.it.forEach(s=>{s in e||(i.remove(s),this.it.delete(s))});for(const s in e){const o=!!e[s];o===this.it.has(s)||!((r=this.nt)===null||r===void 0)&&r.has(s)||(o?(i.add(s),this.it.add(s)):(i.remove(s),this.it.delete(s)))}return B}});var pi=Object.defineProperty,gi=Object.getOwnPropertyDescriptor,fi=(t,e,n,r)=>{for(var i=r>1?void 0:r?gi(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&pi(e,n,i),i};let st=class extends ${constructor(){super(),new D(this,f)}handleLocaleChange(t,e){t.preventDefault(),f.locale=e}render(){return y`<ul>
      ${vt.map(t=>y`<li>
            <a
              href="#"
              class=${Z({active:t===f.locale})}
              aria-current=${t===f.locale}
              @click=${e=>this.handleLocaleChange(e,t)}
            >
              ${t.slice(0,2)}
            </a>
          </li>`)}
    </ul>`}};st.styles=[x,A`
      :host {
        font-size: 0.875rem;
      }

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
    `];st=fi([C("bkd-language-switcher"),P()],st);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*X(t,e){if(t!==void 0){let n=0;for(const r of t)yield e(r,n++)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ot extends $t{constructor(e){if(super(e),this.et=_,e.type!==pn.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===_||e==null)return this.ft=void 0,this.et=e;if(e===B)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const n=[e];return n.raw=n,this.ft={_$litType$:this.constructor.resultType,strings:n,values:[]}}}ot.directiveName="unsafeHTML",ot.resultType=1;const at=_t(ot),vi=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="m22 15.975-1.775 1.775L12 9.525 3.775 17.75 2 15.975l10-10 10 10Z"/></svg>
`,bi=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M2 8.025 3.775 6.25 12 14.475l8.225-8.225L22 8.025l-10 10-10-10Z"/></svg>
`;function mn(t){return[{key:"myProfile",label:b("Mein Profil"),href:re("myProfile")},{key:"mySettings",label:b("Einstellungen"),href:re("mySettings")},{key:"videos",label:b("Video-Tutorials"),href:t==="de-CH"?"https://www.youtube.com/playlist?list=PLLDtLiOuctbx-_EQWgWqTO1MRbX845OEf":"https://www.youtube.com/playlist?list=PLLDtLiOuctbyEegnquAkaW4u8cm62lFAU",img:"/icons/external-link.svg",external:!0},{key:"logout",label:b("Logout"),href:"#",img:"/icons/logout.svg"}]}var mi=Object.defineProperty,yi=Object.getOwnPropertyDescriptor,yn=(t,e,n,r)=>{for(var i=r>1?void 0:r?yi(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&mi(e,n,i),i};let Pe=class extends ${constructor(){super(),this.openGroup=null,new D(this,f)}connectedCallback(){super.connectedCallback(),this.openGroupOfCurrentItem()}openGroupOfCurrentItem(){this.openGroup||(this.openGroup=f.navigationGroup)}handleGroupClick(t,e){var n;t.preventDefault(),this.openGroup=e.label!==((n=this.openGroup)==null?void 0:n.label)?e:null}handleNavItemClick(t,e){t.preventDefault(),this.dispatchEvent(new CustomEvent("bkdnavitemclick",{detail:{item:e},composed:!0,bubbles:!0}))}handleSettingsItemClick(t,e){this.dispatchEvent(new CustomEvent("bkdsettingsitemclick",{detail:{item:e,event:t},composed:!0,bubbles:!0}))}renderGroup(t){var n;const e=t.label===((n=this.openGroup)==null?void 0:n.label);return y`
      <li
        class=${Z({group:!0,open:e})}
        aria-expanded=${e}
      >
        <button
          class="group-header"
          @click=${r=>this.handleGroupClick(r,t)}
        >
          <label> ${t.label} </label>
          ${at(e?bi:vi)}
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
      <ul class="nav">
        ${X(f.navigation,this.renderGroup.bind(this))}
      </ul>
      <div class="service-nav">
        <ul>
          ${X(mn(f.locale),this.renderSettingsItem.bind(this))}
        </ul>
        <bkd-language-switcher></bkd-language-switcher>
      </div>
    `}};Pe.styles=[x,A`
      :host {
        position: absolute;
        width: 100vw;
        padding: 1.25rem;
        left: 0;
        top: calc(100% + 1px); /* Place right below header */
        max-height: calc(100vh - 100% - 1px);
        display: flex;
        gap: 5rem;
        flex-direction: column;
        background-color: var(--bkd-func-bg-white);
        box-shadow: 0 2px 6px -1px var(--bkd-mobile-nav-shadow);
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
    `];yn([Re()],Pe.prototype,"openGroup",2);Pe=yn([C("bkd-mobile-nav"),P()],Pe);var wi=Object.defineProperty,ki=Object.getOwnPropertyDescriptor,_i=(t,e,n,r)=>{for(var i=r>1?void 0:r?ki(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&wi(e,n,i),i};let lt=class extends ${constructor(){super(),new D(this,f)}renderGroupToggle(t,e){return y`
      <bkd-nav-group-toggle
        .group=${t}
        ?active=${e}
      ></bkd-nav-group-toggle>
    `}render(){return X(f.navigation,t=>{var e;return this.renderGroupToggle(t,t.label===((e=f.navigationGroup)==null?void 0:e.label))})}};lt.styles=[x,A`
      /* Large screen */

      :host {
        display: flex;
        justify-content: end;
        gap: 4.375rem;
      }

      /* Medium screen */

      @media screen and (max-width: 1500px) {
        :host {
          gap: 3rem;
        }
      }
    `];lt=_i([C("bkd-nav"),P()],lt);var $i=Object.defineProperty,Ai=Object.getOwnPropertyDescriptor,At=(t,e,n,r)=>{for(var i=r>1?void 0:r?Ai(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&$i(e,n,i),i};let ve=class extends ${constructor(){super(),this.open=!1,new D(this,f)}handleItemClick(t,e){t.preventDefault(),this.dispatchEvent(new CustomEvent("bkdnavitemclick",{detail:{item:e},composed:!0,bubbles:!0}))}renderItem(t){const e=t.key===f.navigationItemKey;return y`
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
    `}};ve.styles=[x,A`
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
    `];At([T()],ve.prototype,"group",2);At([T()],ve.prototype,"open",2);ve=At([C("bkd-nav-group-dropdown"),P()],ve);var Ei=Object.defineProperty,Si=Object.getOwnPropertyDescriptor,je=(t,e,n,r)=>{for(var i=r>1?void 0:r?Si(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&Ei(e,n,i),i};let se=class extends ${constructor(){super(...arguments),this.dropdown=new Ue(this,"group-toggle","group-menu",{queryItems:()=>{var t,e;return((e=(t=this.dropdownElement)==null?void 0:t.shadowRoot)==null?void 0:e.querySelectorAll("a[role='menuitem']"))??null},queryFocused:()=>{var t,e;return((e=(t=this.dropdownElement)==null?void 0:t.shadowRoot)==null?void 0:e.activeElement)??null}})}toggle(t){t.preventDefault(),this.dropdown.toggle()}handleItemClick(){this.dropdown.close()}render(){if(this.group)return y`
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
    `];je([ft("bkd-nav-group-dropdown")],se.prototype,"dropdownElement",2);je([T()],se.prototype,"group",2);je([T({type:Boolean})],se.prototype,"active",2);se=je([C("bkd-nav-group-toggle"),P()],se);var Ci=Object.defineProperty,Pi=Object.getOwnPropertyDescriptor,wn=(t,e,n,r)=>{for(var i=r>1?void 0:r?Pi(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&Ci(e,n,i),i};let xe=class extends ${handleClick(t){t.preventDefault(),console.log("clicked",this.item)}render(){if(this.item)return y`<a href="#" @click=${this.handleClick.bind(this)}
      >${this.item.label}</a
    >`}};xe.styles=[x,A``];wn([T()],xe.prototype,"item",2);xe=wn([C("bkd-nav-item-link"),P()],xe);var xi=Object.defineProperty,Ii=Object.getOwnPropertyDescriptor,kn=(t,e,n,r)=>{for(var i=r>1?void 0:r?Ii(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&xi(e,n,i),i};let Ie=class extends ${constructor(){super(...arguments),this.mobileNavOpen=!1}render(){return y`
      <bkd-substitutions-toggle></bkd-substitutions-toggle>
      <erz-notifications></erz-notifications>
      <bkd-user-settings></bkd-user-settings>
      <bkd-language-switcher></bkd-language-switcher>
      <bkd-hamburger
        id="mobile-nav-toggle"
        .open=${this.mobileNavOpen}
      ></bkd-hamburger>
    `}};Ie.styles=[x,A`
      /* Large screen */

      :host {
        display: flex;
        align-items: center;
        gap: 2.5rem;
        margin-left: 1rem;
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
    `];kn([T()],Ie.prototype,"mobileNavOpen",2);Ie=kn([C("bkd-service-nav"),P()],Ie);var Oi=Object.defineProperty,Ti=Object.getOwnPropertyDescriptor,Me=(t,e,n,r)=>{for(var i=r>1?void 0:r?Ti(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&Oi(e,n,i),i};let oe=class extends ${constructor(){super(...arguments),this.availableSubstitutions=[],this.activeSubstitution=null,this.open=!1}get displayedSubstitutions(){return this.availableSubstitutions.filter(t=>!this.activeSubstitution||t.Id===this.activeSubstitution.Id)}handleSubstitutionClick(t,e){t.preventDefault(),this.dispatchEvent(new CustomEvent("bkdsubstitutionstart",{detail:{substitution:e},composed:!0,bubbles:!0}))}handleStopClick(){this.dispatchEvent(new CustomEvent("bkdsubstitutionstop",{composed:!0,bubbles:!0}))}handleCloseClick(){this.dispatchEvent(new CustomEvent("bkdclose"))}renderSubstitution(t){var n;const e=t.Id===((n=this.activeSubstitution)==null?void 0:n.Id);return y`
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
            <img src="icons/close.svg" alt=${b("Schliessen")} />
          </button>
          <div class="dropdown-menu-heading">
            ${b("Stellvertretung ausüben")}
          </div>
        </li>
        ${X(this.displayedSubstitutions,this.renderSubstitution.bind(this))}
        ${ze(this.activeSubstitution,()=>y`<li class="dropdown-menu-stop">
            <button @click=${this.handleStopClick.bind(this)}>
              ${b("Stellvertretung aufheben")}
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
    `];Me([T()],oe.prototype,"availableSubstitutions",2);Me([T()],oe.prototype,"activeSubstitution",2);Me([T()],oe.prototype,"open",2);oe=Me([C("bkd-substitutions-dropdown"),P()],oe);const Ri=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M2 20v-2.8a3 3 0 0 1 .425-1.563A2.794 2.794 0 0 1 3.6 14.55c1-.5 2.038-.883 3.113-1.15 1.074-.267 2.17-.4 3.287-.4.417 0 .833.03 1.25.088.417.058.833.129 1.25.212v1.575c-.75.367-1.354.85-1.813 1.45-.458.6-.687 1.383-.687 2.35V20H2Zm10 0v-1.4c0-.4.104-.77.313-1.113a1.76 1.76 0 0 1 .887-.737c.6-.25 1.22-.438 1.863-.563a10.11 10.11 0 0 1 3.874 0 9.604 9.604 0 0 1 1.863.563c.383.15.68.396.887.738.209.341.313.712.313 1.112V20H12Zm5-5c-.7 0-1.292-.242-1.775-.725-.483-.483-.725-1.075-.725-1.775s.242-1.292.725-1.775C15.708 10.242 16.3 10 17 10s1.292.242 1.775.725c.483.483.725 1.075.725 1.775s-.242 1.292-.725 1.775C18.292 14.758 17.7 15 17 15Zm-7-3c-1.1 0-2.042-.392-2.825-1.175C6.392 10.042 6 9.1 6 8s.392-2.042 1.175-2.825C7.958 4.392 8.9 4 10 4s2.042.392 2.825 1.175C13.608 5.958 14 6.9 14 8s-.392 2.042-1.175 2.825C12.042 11.608 11.1 12 10 12Z"/></svg>
`,Li=`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="7.4" fill="none"><path fill="currentColor" d="m6 7.4-6-6L1.4 0 6 4.6 10.6 0 12 1.4Z"/></svg>
`,zi=`<svg xmlns="http://www.w3.org/2000/svg" width="11.414" height="11.414" fill="none"><path stroke="currentColor" stroke-width="2" d="m.707.707 10 10m-10 0 10-10"/></svg>
`;function Ui(t,e,n){const r=document.createElement("form");r.method=t,r.style.visibility="hidden",r.action=e,Object.keys(n).forEach(i=>{const s=document.createElement("input");s.type="hidden",s.name=i,s.value=n[i],r.appendChild(s)}),document.body.appendChild(r),r.submit()}var ji=Object.defineProperty,Mi=Object.getOwnPropertyDescriptor,Ne=(t,e,n,r)=>{for(var i=r>1?void 0:r?Mi(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&ji(e,n,i),i};let ae=class extends ${constructor(){super(...arguments),this.availableSubstitutions=[],this.activeSubstitution=null,this.dropdown=new Ue(this,"substitutions-toggle","substitutions-menu",{queryItems:()=>{var t,e;return((e=(t=this.dropdownElement)==null?void 0:t.shadowRoot)==null?void 0:e.querySelectorAll("a[role='menuitem']"))??null},queryFocused:()=>{var t,e;return((e=(t=this.dropdownElement)==null?void 0:t.shadowRoot)==null?void 0:e.activeElement)??null}})}connectedCallback(){super.connectedCallback(),this.fetch()}async fetch(){const t=await Xr();this.availableSubstitutions=t.filter(n=>this.isNotInFuture(n)).sort((n,r)=>n.Holder.localeCompare(r.Holder));const e=this.getActiveSubstitutionId();this.activeSubstitution=this.availableSubstitutions.find(n=>n.Id===e)??null}isNotInFuture(t){return!!t.DateFrom&&new Date(t.DateFrom)<=new Date}getActiveSubstitutionId(){const t=N();if(!t)return null;const{substitutionId:e}=R(t);return e??null}toggle(t){t.preventDefault(),this.activeSubstitution&&this.isLargeScreen()?this.stopSubstitution():this.dropdown.toggle()}isLargeScreen(){return window.innerWidth>1200}startSubstitution(t){if(this.activeSubstitution)return;const{oAuthServer:e,oAuthPrefix:n}=window.eventoPortal.settings;this.redirect(`${e}/${n}/Authorization/Substitutions/${t.Id}/start`)}stopSubstitution(){if(!this.activeSubstitution)return;const{oAuthServer:t,oAuthPrefix:e}=window.eventoPortal.settings;this.redirect(`${t}/${e}/Authorization/Substitutions/${this.activeSubstitution.Id}/stop`)}redirect(t){Ui("POST",t,{access_token:N()??"",redirect_uri:re("home")})}handleSubstitutionStart(t){this.dropdown.close(),this.startSubstitution(t.detail.substitution)}handleSubstitutionStop(){this.dropdown.close(),this.stopSubstitution()}getLabel(){var t;return((t=this.activeSubstitution)==null?void 0:t.Holder)||b("Stellvertretung ausüben")}render(){if(this.availableSubstitutions.length!==0)return y`
      <button
        id="substitutions-toggle"
        class=${Z({active:!!this.activeSubstitution,open:this.dropdown.open})}
        @click=${this.toggle.bind(this)}
        aria-label=${this.getLabel()}
        aria-expanded=${this.dropdown.open}
        aria-haspopup="menu"
      >
        <div class="icon">${at(Ri)}</div>
        <div class="label">${this.getLabel()}</div>
        <div class="icon-caret">
          ${at(this.activeSubstitution?zi:Li)}
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
    `];Ne([ft("bkd-substitutions-dropdown")],ae.prototype,"dropdownElement",2);Ne([Re()],ae.prototype,"availableSubstitutions",2);Ne([Re()],ae.prototype,"activeSubstitution",2);ae=Ne([C("bkd-substitutions-toggle"),P()],ae);var Ni=Object.defineProperty,Di=Object.getOwnPropertyDescriptor,Hi=(t,e,n,r)=>{for(var i=r>1?void 0:r?Di(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&Ni(e,n,i),i};let ct=class extends ${constructor(){super(),this.dropdown=new Ue(this,"settings-toggle","settings-menu",{queryItems:()=>{var t;return((t=this.shadowRoot)==null?void 0:t.querySelectorAll("a[role='menuitem']"))??null},queryFocused:()=>{var t;return((t=this.shadowRoot)==null?void 0:t.activeElement)??null}}),new D(this,f)}handleSettingsItemClick(t,e){this.dropdown.close(),this.dispatchEvent(new CustomEvent("bkdsettingsitemclick",{detail:{item:e,event:t},composed:!0,bubbles:!0}))}renderSettingsItem(t){return y`<li role="presentation">
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
        aria-label=${b("Menü Benutzereinstellungen")}
        aria-expanded=${this.dropdown.open}
        aria-haspopup="menu"
      >
        <img src="/icons/settings.svg" alt="" width="32" height="32" />
      </button>
      <ul id="settings-menu" role="menu" ?hidden=${!this.dropdown.open}>
        ${X(mn(f.locale),this.renderSettingsItem.bind(this))}
      </ul>
    `}};ct.styles=[x,A`
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
    `];ct=Hi([C("bkd-user-settings"),P()],ct);function Ki(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){if(this instanceof r){var i=[null];i.push.apply(i,arguments);var s=Function.bind.apply(e,i);return new s}return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var _n={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(self,()=>(()=>{var n={934:(o,l,a)=>{Object.defineProperty(l,"__esModule",{value:!0}),l.generateQueryString=l.tokenResponseToOAuth2Token=l.OAuth2Client=void 0;const c=a(443),p=a(618);function d(g,h){return new URL(g,h).toString()}function u(g){return g.then(h=>{var v;return{accessToken:h.access_token,expiresAt:h.expires_in?Date.now()+1e3*h.expires_in:null,refreshToken:(v=h.refresh_token)!==null&&v!==void 0?v:null}})}function m(g){return new URLSearchParams(Object.fromEntries(Object.entries(g).filter(([h,v])=>v!==void 0))).toString()}l.OAuth2Client=class{constructor(g){this.discoveryDone=!1,this.serverMetadata=null,g!=null&&g.fetch||(g.fetch=fetch),this.settings=g}async refreshToken(g){if(!g.refreshToken)throw new Error("This token didn't have a refreshToken. It's not possible to refresh this");const h={grant_type:"refresh_token",refresh_token:g.refreshToken};return this.settings.clientSecret||(h.client_id=this.settings.clientId),u(this.request("tokenEndpoint",h))}async clientCredentials(g){var h;const v=["client_id","client_secret","grant_type","scope"];if(g!=null&&g.extraParams&&Object.keys(g.extraParams).filter(w=>v.includes(w)).length>0)throw new Error(`The following extraParams are disallowed: '${v.join("', '")}'`);const k={grant_type:"client_credentials",scope:(h=g==null?void 0:g.scope)===null||h===void 0?void 0:h.join(" "),...g==null?void 0:g.extraParams};if(!this.settings.clientSecret)throw new Error("A clientSecret must be provided to use client_credentials");return u(this.request("tokenEndpoint",k))}async password(g){var h;const v={grant_type:"password",...g,scope:(h=g.scope)===null||h===void 0?void 0:h.join(" ")};return u(this.request("tokenEndpoint",v))}get authorizationCode(){return new p.OAuth2AuthorizationCodeClient(this)}async introspect(g){const h={token:g.accessToken,token_type_hint:"access_token"};return this.request("introspectionEndpoint",h)}async getEndpoint(g){if(this.settings[g]!==void 0)return d(this.settings[g],this.settings.server);if(g!=="discoveryEndpoint"&&(await this.discover(),this.settings[g]!==void 0))return d(this.settings[g],this.settings.server);if(!this.settings.server)throw new Error(`Could not determine the location of ${g}. Either specify ${g} in the settings, or the "server" endpoint to let the client discover it.`);switch(g){case"authorizationEndpoint":return d("/authorize",this.settings.server);case"tokenEndpoint":return d("/token",this.settings.server);case"discoveryEndpoint":return d("/.well-known/oauth-authorization-server",this.settings.server);case"introspectionEndpoint":return d("/introspect",this.settings.server)}}async discover(){var g;if(this.discoveryDone)return;let h;this.discoveryDone=!0;try{h=await this.getEndpoint("discoveryEndpoint")}catch{return void console.warn('[oauth2] OAuth2 discovery endpoint could not be determined. Either specify the "server" or "discoveryEndpoint')}const v=await this.settings.fetch(h,{headers:{Accept:"application/json"}});if(!v.ok)return;if(!(!((g=v.headers.get("Content-Type"))===null||g===void 0)&&g.startsWith("application/json")))return void console.warn("[oauth2] OAuth2 discovery endpoint was not a JSON response. Response is ignored");this.serverMetadata=await v.json();const k=[["authorization_endpoint","authorizationEndpoint"],["token_endpoint","tokenEndpoint"],["introspection_endpoint","introspectionEndpoint"]];if(this.serverMetadata!==null){for(const[w,I]of k)this.serverMetadata[w]&&(this.settings[I]=d(this.serverMetadata[w],h));this.serverMetadata.token_endpoint_auth_methods_supported&&!this.settings.authenticationMethod&&(this.settings.authenticationMethod=this.serverMetadata.token_endpoint_auth_methods_supported[0])}}async request(g,h){const v=await this.getEndpoint(g),k={"Content-Type":"application/x-www-form-urlencoded"};let w=this.settings.authenticationMethod;switch(w||(w=this.settings.clientSecret?"client_secret_basic":"client_secret_post"),w){case"client_secret_basic":k.Authorization="Basic "+btoa(this.settings.clientId+":"+this.settings.clientSecret);break;case"client_secret_post":h.client_id=this.settings.clientId,this.settings.clientSecret&&(h.client_secret=this.settings.clientSecret);break;default:throw new Error("Authentication method not yet supported:"+w+". Open a feature request if you want this!")}const I=await this.settings.fetch(v,{method:"POST",body:m(h),headers:k});if(I.ok)return await I.json();let z,le,De;throw I.headers.has("Content-Type")&&I.headers.get("Content-Type").startsWith("application/json")&&(z=await I.json()),z!=null&&z.error?(le="OAuth2 error "+z.error+".",z.error_description&&(le+=" "+z.error_description),De=z.error):(le="HTTP Error "+I.status+" "+I.statusText,I.status===401&&this.settings.clientSecret&&(le+=". It's likely that the clientId and/or clientSecret was incorrect"),De=null),new c.OAuth2Error(le,De,I.status)}},l.tokenResponseToOAuth2Token=u,l.generateQueryString=m},618:(o,l,a)=>{Object.defineProperty(l,"__esModule",{value:!0}),l.getCodeChallenge=l.generateCodeVerifier=l.OAuth2AuthorizationCodeClient=void 0;const c=a(934),p=a(443);async function d(h){const v=u();if(v!=null&&v.subtle)return["S256",g(await v.subtle.digest("SHA-256",m(h)))];{const k=a(212).createHash("sha256");return k.update(m(h)),["S256",k.digest("base64url")]}}function u(){if(typeof window<"u"&&window.crypto)return window.crypto;if(typeof self<"u"&&self.crypto)return self.crypto;const h=a(212);return h.webcrypto?h.webcrypto:null}function m(h){const v=new Uint8Array(h.length);for(let k=0;k<h.length;k++)v[k]=255&h.charCodeAt(k);return v}function g(h){return btoa(String.fromCharCode(...new Uint8Array(h))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}l.OAuth2AuthorizationCodeClient=class{constructor(h){this.client=h}async getAuthorizeUri(h){const[v,k]=await Promise.all([h.codeVerifier?d(h.codeVerifier):void 0,this.client.getEndpoint("authorizationEndpoint")]),w={client_id:this.client.settings.clientId,response_type:"code",redirect_uri:h.redirectUri,code_challenge_method:v==null?void 0:v[0],code_challenge:v==null?void 0:v[1]};return h.state&&(w.state=h.state),h.scope&&(w.scope=h.scope.join(" ")),k+"?"+(0,c.generateQueryString)(w)}async getTokenFromCodeRedirect(h,v){const{code:k}=await this.validateResponse(h,{state:v.state});return this.getToken({code:k,redirectUri:v.redirectUri,codeVerifier:v.codeVerifier})}async validateResponse(h,v){var k;const w=new URL(h).searchParams;if(w.has("error"))throw new p.OAuth2Error((k=w.get("error_description"))!==null&&k!==void 0?k:"OAuth2 error",w.get("error"),0);if(!w.has("code"))throw new Error(`The url did not contain a code parameter ${h}`);if(v.state&&v.state!==w.get("state"))throw new Error(`The "state" parameter in the url did not match the expected value of ${v.state}`);return{code:w.get("code"),scope:w.has("scope")?w.get("scope").split(" "):void 0}}async getToken(h){const v={grant_type:"authorization_code",code:h.code,redirect_uri:h.redirectUri,code_verifier:h.codeVerifier};return(0,c.tokenResponseToOAuth2Token)(this.client.request("tokenEndpoint",v))}},l.generateCodeVerifier=async function(){const h=u();if(h){const v=new Uint8Array(32);return h.getRandomValues(v),g(v)}{const v=a(212);return new Promise((k,w)=>{v.randomBytes(32,(I,z)=>{I&&w(I),k(z.toString("base64url"))})})}},l.getCodeChallenge=d},443:(o,l)=>{Object.defineProperty(l,"__esModule",{value:!0}),l.OAuth2Error=void 0;class a extends Error{constructor(p,d,u){super(p),this.oauth2Code=d,this.httpCode=u}}l.OAuth2Error=a},13:(o,l)=>{Object.defineProperty(l,"__esModule",{value:!0}),l.OAuth2Fetch=void 0,l.OAuth2Fetch=class{constructor(a){this.token=null,this.activeRefresh=null,this.refreshTimer=null,(a==null?void 0:a.scheduleRefresh)===void 0&&(a.scheduleRefresh=!0),this.options=a,a.getStoredToken&&(async()=>this.token=await a.getStoredToken())(),this.scheduleRefresh()}async fetch(a,c){const p=new Request(a,c);return this.mw()(p,d=>fetch(d))}mw(){return async(a,c)=>{const p=await this.getAccessToken();let d=a.clone();d.headers.set("Authorization","Bearer "+p);let u=await c(d);if(!u.ok&&u.status===401){const m=await this.refreshToken();d=a.clone(),d.headers.set("Authorization","Bearer "+m.accessToken),u=await c(d)}return u}}async getToken(){return this.token&&(this.token.expiresAt===null||this.token.expiresAt>Date.now())?this.token:this.refreshToken()}async getAccessToken(){return(await this.getToken()).accessToken}async refreshToken(){var a,c;if(this.activeRefresh)return this.activeRefresh;const p=this.token;this.activeRefresh=(async()=>{var d,u;let m=null;try{p!=null&&p.refreshToken&&(m=await this.options.client.refreshToken(p))}catch{console.warn("[oauth2] refresh token not accepted, we'll try reauthenticating")}if(m||(m=await this.options.getNewToken()),!m){const g=new Error("Unableto obtain OAuth2 tokens, a full reauth may be needed");throw(u=(d=this.options).onError)===null||u===void 0||u.call(d,g),g}return m})();try{const d=await this.activeRefresh;return this.token=d,(c=(a=this.options).storeToken)===null||c===void 0||c.call(a,d),this.scheduleRefresh(),d}catch(d){throw this.options.onError&&this.options.onError(d),d}finally{this.activeRefresh=null}}scheduleRefresh(){var a;if(!this.options.scheduleRefresh||(this.refreshTimer&&(clearTimeout(this.refreshTimer),this.refreshTimer=null),!(!((a=this.token)===null||a===void 0)&&a.expiresAt)||!this.token.refreshToken))return;const c=this.token.expiresAt-Date.now();c<12e4||(this.refreshTimer=setTimeout(async()=>{try{await this.refreshToken()}catch(p){console.error("[fetch-mw-oauth2] error while doing a background OAuth2 auto-refresh",p)}},c-6e4))}}},212:()=>{}},r={};function i(o){var l=r[o];if(l!==void 0)return l.exports;var a=r[o]={exports:{}};return n[o](a,a.exports,i),a.exports}var s={};return(()=>{var o=s;Object.defineProperty(o,"__esModule",{value:!0}),o.OAuth2Error=o.OAuth2Fetch=o.generateCodeVerifier=o.OAuth2AuthorizationCodeClient=o.OAuth2Client=void 0;var l=i(934);Object.defineProperty(o,"OAuth2Client",{enumerable:!0,get:function(){return l.OAuth2Client}});var a=i(618);Object.defineProperty(o,"OAuth2AuthorizationCodeClient",{enumerable:!0,get:function(){return a.OAuth2AuthorizationCodeClient}}),Object.defineProperty(o,"generateCodeVerifier",{enumerable:!0,get:function(){return a.generateCodeVerifier}});var c=i(13);Object.defineProperty(o,"OAuth2Fetch",{enumerable:!0,get:function(){return c.OAuth2Fetch}});var p=i(443);Object.defineProperty(o,"OAuth2Error",{enumerable:!0,get:function(){return p.OAuth2Error}})})(),s})())})(_n);var Et=_n.exports,U={},j={},me={};Object.defineProperty(me,"__esModule",{value:!0});me.OAuth2Error=void 0;class Vi extends Error{constructor(e,n,r){super(e),this.oauth2Code=n,this.httpCode=r}}me.OAuth2Error=Vi;var Bt;function $n(){if(Bt)return j;Bt=1,Object.defineProperty(j,"__esModule",{value:!0}),j.generateQueryString=j.tokenResponseToOAuth2Token=j.OAuth2Client=void 0;const t=me,e=An();class n{constructor(l){this.discoveryDone=!1,this.serverMetadata=null,l!=null&&l.fetch||(l.fetch=fetch),this.settings=l}async refreshToken(l){if(!l.refreshToken)throw new Error("This token didn't have a refreshToken. It's not possible to refresh this");const a={grant_type:"refresh_token",refresh_token:l.refreshToken};return this.settings.clientSecret||(a.client_id=this.settings.clientId),i(this.request("tokenEndpoint",a))}async clientCredentials(l){var a;const c=["client_id","client_secret","grant_type","scope"];if(l!=null&&l.extraParams&&Object.keys(l.extraParams).filter(d=>c.includes(d)).length>0)throw new Error(`The following extraParams are disallowed: '${c.join("', '")}'`);const p={grant_type:"client_credentials",scope:(a=l==null?void 0:l.scope)===null||a===void 0?void 0:a.join(" "),...l==null?void 0:l.extraParams};if(!this.settings.clientSecret)throw new Error("A clientSecret must be provided to use client_credentials");return i(this.request("tokenEndpoint",p))}async password(l){var a;const c={grant_type:"password",...l,scope:(a=l.scope)===null||a===void 0?void 0:a.join(" ")};return i(this.request("tokenEndpoint",c))}get authorizationCode(){return new e.OAuth2AuthorizationCodeClient(this)}async introspect(l){const a={token:l.accessToken,token_type_hint:"access_token"};return this.request("introspectionEndpoint",a)}async getEndpoint(l){if(this.settings[l]!==void 0)return r(this.settings[l],this.settings.server);if(l!=="discoveryEndpoint"&&(await this.discover(),this.settings[l]!==void 0))return r(this.settings[l],this.settings.server);if(!this.settings.server)throw new Error(`Could not determine the location of ${l}. Either specify ${l} in the settings, or the "server" endpoint to let the client discover it.`);switch(l){case"authorizationEndpoint":return r("/authorize",this.settings.server);case"tokenEndpoint":return r("/token",this.settings.server);case"discoveryEndpoint":return r("/.well-known/oauth-authorization-server",this.settings.server);case"introspectionEndpoint":return r("/introspect",this.settings.server)}}async discover(){var l;if(this.discoveryDone)return;this.discoveryDone=!0;let a;try{a=await this.getEndpoint("discoveryEndpoint")}catch{console.warn('[oauth2] OAuth2 discovery endpoint could not be determined. Either specify the "server" or "discoveryEndpoint');return}const c=await this.settings.fetch(a,{headers:{Accept:"application/json"}});if(!c.ok)return;if(!(!((l=c.headers.get("Content-Type"))===null||l===void 0)&&l.startsWith("application/json"))){console.warn("[oauth2] OAuth2 discovery endpoint was not a JSON response. Response is ignored");return}this.serverMetadata=await c.json();const p=[["authorization_endpoint","authorizationEndpoint"],["token_endpoint","tokenEndpoint"],["introspection_endpoint","introspectionEndpoint"]];if(this.serverMetadata!==null){for(const[d,u]of p)this.serverMetadata[d]&&(this.settings[u]=r(this.serverMetadata[d],a));this.serverMetadata.token_endpoint_auth_methods_supported&&!this.settings.authenticationMethod&&(this.settings.authenticationMethod=this.serverMetadata.token_endpoint_auth_methods_supported[0])}}async request(l,a){const c=await this.getEndpoint(l),p={"Content-Type":"application/x-www-form-urlencoded"};let d=this.settings.authenticationMethod;switch(d||(d=this.settings.clientSecret?"client_secret_basic":"client_secret_post"),d){case"client_secret_basic":p.Authorization="Basic "+btoa(this.settings.clientId+":"+this.settings.clientSecret);break;case"client_secret_post":a.client_id=this.settings.clientId,this.settings.clientSecret&&(a.client_secret=this.settings.clientSecret);break;default:throw new Error("Authentication method not yet supported:"+d+". Open a feature request if you want this!")}const u=await this.settings.fetch(c,{method:"POST",body:s(a),headers:p});if(u.ok)return await u.json();let m,g,h;throw u.headers.has("Content-Type")&&u.headers.get("Content-Type").startsWith("application/json")&&(m=await u.json()),m!=null&&m.error?(g="OAuth2 error "+m.error+".",m.error_description&&(g+=" "+m.error_description),h=m.error):(g="HTTP Error "+u.status+" "+u.statusText,u.status===401&&this.settings.clientSecret&&(g+=". It's likely that the clientId and/or clientSecret was incorrect"),h=null),new t.OAuth2Error(g,h,u.status)}}j.OAuth2Client=n;function r(o,l){return new URL(o,l).toString()}function i(o){return o.then(l=>{var a;return{accessToken:l.access_token,expiresAt:l.expires_in?Date.now()+l.expires_in*1e3:null,refreshToken:(a=l.refresh_token)!==null&&a!==void 0?a:null}})}j.tokenResponseToOAuth2Token=i;function s(o){return new URLSearchParams(Object.fromEntries(Object.entries(o).filter(([l,a])=>a!==void 0))).toString()}return j.generateQueryString=s,j}const qi={},Bi=Object.freeze(Object.defineProperty({__proto__:null,default:qi},Symbol.toStringTag,{value:"Module"})),Ye=Ki(Bi);var Ft;function An(){if(Ft)return U;Ft=1,Object.defineProperty(U,"__esModule",{value:!0}),U.getCodeChallenge=U.generateCodeVerifier=U.OAuth2AuthorizationCodeClient=void 0;const t=$n(),e=me;class n{constructor(c){this.client=c}async getAuthorizeUri(c){const[p,d]=await Promise.all([c.codeVerifier?i(c.codeVerifier):void 0,this.client.getEndpoint("authorizationEndpoint")]),u={client_id:this.client.settings.clientId,response_type:"code",redirect_uri:c.redirectUri,code_challenge_method:p==null?void 0:p[0],code_challenge:p==null?void 0:p[1]};return c.state&&(u.state=c.state),c.scope&&(u.scope=c.scope.join(" ")),d+"?"+(0,t.generateQueryString)(u)}async getTokenFromCodeRedirect(c,p){const{code:d}=await this.validateResponse(c,{state:p.state});return this.getToken({code:d,redirectUri:p.redirectUri,codeVerifier:p.codeVerifier})}async validateResponse(c,p){var d;const u=new URL(c).searchParams;if(u.has("error"))throw new e.OAuth2Error((d=u.get("error_description"))!==null&&d!==void 0?d:"OAuth2 error",u.get("error"),0);if(!u.has("code"))throw new Error(`The url did not contain a code parameter ${c}`);if(p.state&&p.state!==u.get("state"))throw new Error(`The "state" parameter in the url did not match the expected value of ${p.state}`);return{code:u.get("code"),scope:u.has("scope")?u.get("scope").split(" "):void 0}}async getToken(c){const p={grant_type:"authorization_code",code:c.code,redirect_uri:c.redirectUri,code_verifier:c.codeVerifier};return(0,t.tokenResponseToOAuth2Token)(this.client.request("tokenEndpoint",p))}}U.OAuth2AuthorizationCodeClient=n;async function r(){const a=s();if(a){const c=new Uint8Array(32);return a.getRandomValues(c),l(c)}else{const c=Ye;return new Promise((p,d)=>{c.randomBytes(32,(u,m)=>{u&&d(u),p(m.toString("base64url"))})})}}U.generateCodeVerifier=r;async function i(a){const c=s();if(c!=null&&c.subtle)return["S256",l(await c.subtle.digest("SHA-256",o(a)))];{const d=Ye.createHash("sha256");return d.update(o(a)),["S256",d.digest("base64url")]}}U.getCodeChallenge=i;function s(){if(typeof window<"u"&&window.crypto)return window.crypto;if(typeof self<"u"&&self.crypto)return self.crypto;const a=Ye;return a.webcrypto?a.webcrypto:null}function o(a){const c=new Uint8Array(a.length);for(let p=0;p<a.length;p++)c[p]=a.charCodeAt(p)&255;return c}function l(a){return btoa(String.fromCharCode(...new Uint8Array(a))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}return U}var En=An(),Fi=$n();const S=window.eventoPortal.settings;if(typeof(S==null?void 0:S.oAuthServer)!="string")throw new Error("Invalid 'oAuthServer' setting");if(typeof(S==null?void 0:S.oAuthPrefix)!="string")throw new Error("Invalid 'oAuthPrefix' setting");if(typeof(S==null?void 0:S.oAuthClientId)!="string")throw new Error("Invalid 'clientId' setting");function Gi(){return new Et.OAuth2Client({server:S.oAuthServer,clientId:S.oAuthClientId,tokenEndpoint:`${S.oAuthPrefix}/Authorization/Token`,authorizationEndpoint:Qi(),fetch:(...t)=>fetch(...t)})}async function Wi(t,e,n){const r=Cr(),i=await Zi(t,r);if(i){console.log("Successfully logged in"),Ji(i,r);return}const s=es();if(s){console.log("Successfully started or stopped substitution"),ts(s);return}await Sn(t,e,n)}async function Sn(t,e,n){if(console.log(`Activate token for scope "${e}" and locale "${n}"`),br(cn()))return console.log("Not authenticated or refresh token expired, redirect to login"),dt(t,e,n,Cn);const r=N(),i=$r(e);Vt(r,e,n)?console.log(`Current token for scope "${e}" and locale "${n}" already set`):Vt(i,e,n)?(console.log(`Token for scope "${e}" and locale "${n}" cached, set as current`),yt(i)):(console.log(`No token for scope "${e}" and locale "${n}" present or half expired, redirect for token fetch/refresh`),await dt(t,e,n,Yi))}async function Xi(t){const e=ln();if(!e)throw new Error("No instance available");const n=N();if(n)try{await ns(t,`${S.oAuthPrefix}/Authorization/${e}/Logout`,{access_token:n})}catch(r){if(!(r instanceof SyntaxError))throw r}finally{Ar();const{scope:r,locale:i}=R(n);await dt(t,r,i,Cn)}}function Qi(){const t=ln();return t?`${S.oAuthPrefix}/Authorization/${t}/Login`:`${S.oAuthPrefix}/Authorization/Login`}async function dt(t,e,n,r){const i=await Et.generateCodeVerifier(),s=new URL(document.location.href);s.searchParams.set(Y,n),Pr(i,s.toString());const o=await r(t,e,n,s.toString(),i);document.location.href=o.toString()}const Cn=async(t,e,n,r,i)=>{const s=new URL(await t.getEndpoint("authorizationEndpoint")),[o,l]=await En.getCodeChallenge(i);return s.searchParams.set("clientId",t.settings.clientId),s.searchParams.set("redirectUrl",r),s.searchParams.set("culture_info",n),s.searchParams.set("application_scope",e),s.searchParams.set("response_type","code"),s.searchParams.set("code_challenge_method",o),s.searchParams.set("code_challenge",l),s},Yi=async(t,e,n,r,i)=>{const s=new URL(`${S.oAuthPrefix}/Authorization/RefreshPublic`,t.settings.server),[o,l]=await En.getCodeChallenge(i),a=cn();return s.searchParams.set("redirectUrl",r),s.searchParams.set("culture_info",n),s.searchParams.set("application_scope",e),s.searchParams.set("refresh_token",a??""),s.searchParams.set("response_type","code"),s.searchParams.set("code_challenge_method",o),s.searchParams.set("code_challenge",l),s};async function Zi(t,e){return new URLSearchParams(document.location.search).get("code")&&(e!=null&&e.redirectUri)?await t.authorizationCode.getTokenFromCodeRedirect(document.location.href,{redirectUri:e.redirectUri,codeVerifier:e.codeVerifier}):null}function Ji(t,e){const{accessToken:n}=t,{scope:r,instanceId:i}=R(n);dn(r,t),yt(n),_r(i),e!=null&&e.redirectUri&&f.navigate(new URL(e.redirectUri))}function es(){const t=new URLSearchParams(document.location.search),e=t.get("access_token"),n=t.get("expires_in"),r=t.get("refresh_token");return e?{accessToken:e,expiresAt:n?Date.now()+parseInt(n,10)*1e3:null,refreshToken:r||null}:null}function ts(t){const{accessToken:e}=t,{scope:n}=R(e);dn(n,t),yt(e);const r=new URL(document.location.href);r.searchParams.delete("access_token"),r.searchParams.delete("expires_in"),r.searchParams.delete("refresh_token"),history.replaceState({},"",r)}async function ns(t,e,n){var c;const r=new URL(e,t.settings.server).toString(),i={"Content-Type":"application/x-www-form-urlencoded"},s=await fetch(r,{method:"POST",body:n&&Fi.generateQueryString(n),headers:i});if(s.ok)return await s.json();let o,l,a;throw(c=s.headers.get("Content-Type"))!=null&&c.startsWith("application/json")&&(o=await s.json()),o!=null&&o.error?(l="OAuth2 error "+o.error+".",o.error_description&&(l+=" "+o.error_description),a=o.error):(l="HTTP Error "+s.status+" "+s.statusText,a=null),new Et.OAuth2Error(l,a,s.status)}var rs=Object.defineProperty,is=Object.getOwnPropertyDescriptor,Pn=(t,e,n,r)=>{for(var i=r>1?void 0:r?is(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&rs(e,n,i),i};const ht=Gi(),ss=async function(){await Wi(ht,Br(),hn()),f.init()}();ni(A`
    ${fn}
    :root {
      ${gn}
    }
  `.toString());let Oe=class extends ${constructor(){super(),this.authReady=!1,this.subscriptions=[],this.handleMessage=({data:t})=>{switch(t.type){case"bkdAppPushState":{const e=t.args[2];this.updateUrlAndNavigationState(e,!1);break}case"bkdAppReplaceState":{const e=t.args[2];Qe(Xe(e),!0);break}case"bkdAppHashChange":{const{url:e}=t;Qe(Xe(e));break}}},ss.then(()=>this.authReady=!0),new D(this,f)}connectedCallback(){super.connectedCallback(),this.subscriptions.push(f.subscribeScopeAndLocale((e,n)=>Sn(ht,e,n),!0)),this.subscriptions.push(f.subscribeInstanceName(this.updateTitle.bind(this))),this.subscriptions.push(f.subscribeNavigationItem(this.updateTitle.bind(this))),window.addEventListener("message",this.handleMessage);const t=new URL(location.href);f.actualAppPath=t.hash,window.addEventListener("hashchange",this.handleHashChange)}disconnectedCallback(){super.disconnectedCallback(),this.subscriptions.forEach(t=>t()),window.removeEventListener("message",this.handleMessage),window.removeEventListener("hashchange",this.handleHashChange)}isAuthenticated(){return!!N()}updateTitle(){const{instanceName:t,navigationItem:e}=f,n=(e==null?void 0:e.label)&&(e==null?void 0:e.key)!==E.navigationHome.key;document.title=n?[e==null?void 0:e.label,t].join(" ― "):t}updateUrlAndNavigationState(t,e){var i;const n=Xe(t);Qe(n,e);const r=Nr(f.navigation,n);(i=r==null?void 0:r.item)!=null&&i.key&&r.item.key!==f.navigationItemKey&&(f.actualAppPath=n,f.navigationItemKey=r.item.key)}handleHashChange(t){const e=new URL(t.newURL);f.appPath=e.hash}handleLogout(){Xi(ht)}render(){return y`
      ${ze(this.authReady&&this.isAuthenticated(),()=>y`
          <bkd-header @bkdlogout=${this.handleLogout.bind(this)}></bkd-header>
          <bkd-content></bkd-content>
          <bkd-footer></bkd-footer>
        `)}
    `}};Oe.styles=[x,A`
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
    `];Pn([Re()],Oe.prototype,"authReady",2);Oe=Pn([C("bkd-portal"),P()],Oe);
