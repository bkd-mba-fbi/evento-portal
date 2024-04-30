(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xt=globalThis,Bn=xt.ShadowRoot&&(xt.ShadyCSS===void 0||xt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Kn=Symbol(),Lr=new WeakMap;let gi=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==Kn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(Bn&&e===void 0){const r=n!==void 0&&n.length===1;r&&(e=Lr.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Lr.set(n,e))}return e}toString(){return this.cssText}};const As=t=>new gi(typeof t=="string"?t:t+"",void 0,Kn),O=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((r,i,o)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new gi(n,t,Kn)},Es=(t,e)=>{if(Bn)t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of e){const r=document.createElement("style"),i=xt.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,t.appendChild(r)}},Nr=Bn?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const r of e.cssRules)n+=r.cssText;return As(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ts,defineProperty:Ss,getOwnPropertyDescriptor:$s,getOwnPropertyNames:Ps,getOwnPropertySymbols:Cs,getPrototypeOf:Rs}=Object,ue=globalThis,Dr=ue.trustedTypes,xs=Dr?Dr.emptyScript:"",fn=ue.reactiveElementPolyfillSupport,nt=(t,e)=>t,Lt={toAttribute(t,e){switch(e){case Boolean:t=t?xs:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},Wn=(t,e)=>!Ts(t,e),Mr={attribute:!0,type:String,converter:Lt,reflect:!1,hasChanged:Wn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ue.litPropertyMetadata??(ue.litPropertyMetadata=new WeakMap);class je extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=Mr){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(e,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(e,r,n);i!==void 0&&Ss(this.prototype,e,i)}}static getPropertyDescriptor(e,n,r){const{get:i,set:o}=$s(this.prototype,e)??{get(){return this[n]},set(s){this[n]=s}};return{get(){return i==null?void 0:i.call(this)},set(s){const c=i==null?void 0:i.call(this);o.call(this,s),this.requestUpdate(e,c,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Mr}static _$Ei(){if(this.hasOwnProperty(nt("elementProperties")))return;const e=Rs(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(nt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(nt("properties"))){const n=this.properties,r=[...Ps(n),...Cs(n)];for(const i of r)this.createProperty(i,n[i])}const e=this[Symbol.metadata];if(e!==null){const n=litPropertyMetadata.get(e);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)n.unshift(Nr(i))}else e!==void 0&&n.push(Nr(e));return n}static _$Eu(e,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$ES(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(n=>n(this))}addController(e){var n;(this._$E_??(this._$E_=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)==null||n.call(e))}removeController(e){var n;(n=this._$E_)==null||n.delete(e)}_$ES(){const e=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Es(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$E_)==null||e.forEach(n=>{var r;return(r=n.hostConnected)==null?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$E_)==null||e.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EO(e,n){var o;const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){const s=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:Lt).toAttribute(n,r.type);this._$Em=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,n){var o;const r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const s=r.getPropertyOptions(i),c=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)==null?void 0:o.fromAttribute)!==void 0?s.converter:Lt;this._$Em=i,this[i]=c.fromAttribute(n,s.type),this._$Em=null}}requestUpdate(e,n,r,i=!1,o){if(e!==void 0){if(r??(r=this.constructor.getPropertyOptions(e)),!(r.hasChanged??Wn)(i?o:this[e],n))return;this.C(e,n,r)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,n,r){this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,s]of i)s.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.C(o,this[o],s)}let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),(r=this._$E_)==null||r.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(n)):this._$ET()}catch(i){throw e=!1,this._$ET(),i}e&&this._$AE(n)}willUpdate(e){}_$AE(e){var n;(n=this._$E_)==null||n.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EO(n,this[n]))),this._$ET()}updated(e){}firstUpdated(e){}}je.elementStyles=[],je.shadowRootOptions={mode:"open"},je[nt("elementProperties")]=new Map,je[nt("finalized")]=new Map,fn==null||fn({ReactiveElement:je}),(ue.reactiveElementVersions??(ue.reactiveElementVersions=[])).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rt=globalThis,Nt=rt.trustedTypes,zr=Nt?Nt.createPolicy("lit-html",{createHTML:t=>t}):void 0,Gn="$lit$",oe=`lit$${(Math.random()+"").slice(9)}$`,Vn="?"+oe,Os=`<${Vn}>`,$e=document,ot=()=>$e.createComment(""),at=t=>t===null||typeof t!="object"&&typeof t!="function",mi=Array.isArray,bi=t=>mi(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",gn=`[ 	
\f\r]`,Xe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ur=/-->/g,jr=/>/g,ve=RegExp(`>|${gn}(?:([^\\s"'>=/]+)(${gn}*=${gn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Hr=/'/g,Fr=/"/g,vi=/^(?:script|style|textarea|title)$/i,Is=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),_=Is(1),ae=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),Br=new WeakMap,Ae=$e.createTreeWalker($e,129);function yi(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return zr!==void 0?zr.createHTML(e):e}const wi=(t,e)=>{const n=t.length-1,r=[];let i,o=e===2?"<svg>":"",s=Xe;for(let c=0;c<n;c++){const l=t[c];let d,g,u=-1,m=0;for(;m<l.length&&(s.lastIndex=m,g=s.exec(l),g!==null);)m=s.lastIndex,s===Xe?g[1]==="!--"?s=Ur:g[1]!==void 0?s=jr:g[2]!==void 0?(vi.test(g[2])&&(i=RegExp("</"+g[2],"g")),s=ve):g[3]!==void 0&&(s=ve):s===ve?g[0]===">"?(s=i??Xe,u=-1):g[1]===void 0?u=-2:(u=s.lastIndex-g[2].length,d=g[1],s=g[3]===void 0?ve:g[3]==='"'?Fr:Hr):s===Fr||s===Hr?s=ve:s===Ur||s===jr?s=Xe:(s=ve,i=void 0);const h=s===ve&&t[c+1].startsWith("/>")?" ":"";o+=s===Xe?l+Os:u>=0?(r.push(d),l.slice(0,u)+Gn+l.slice(u)+oe+h):l+oe+(u===-2?c:h)}return[yi(t,o+(t[n]||"<?>")+(e===2?"</svg>":"")),r]};class lt{constructor({strings:e,_$litType$:n},r){let i;this.parts=[];let o=0,s=0;const c=e.length-1,l=this.parts,[d,g]=wi(e,n);if(this.el=lt.createElement(d,r),Ae.currentNode=this.el.content,n===2){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=Ae.nextNode())!==null&&l.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(const u of i.getAttributeNames())if(u.endsWith(Gn)){const m=g[s++],h=i.getAttribute(u).split(oe),v=/([.?@])?(.*)/.exec(m);l.push({type:1,index:o,name:v[2],strings:h,ctor:v[1]==="."?_i:v[1]==="?"?Ai:v[1]==="@"?Ei:mt}),i.removeAttribute(u)}else u.startsWith(oe)&&(l.push({type:6,index:o}),i.removeAttribute(u));if(vi.test(i.tagName)){const u=i.textContent.split(oe),m=u.length-1;if(m>0){i.textContent=Nt?Nt.emptyScript:"";for(let h=0;h<m;h++)i.append(u[h],ot()),Ae.nextNode(),l.push({type:2,index:++o});i.append(u[m],ot())}}}else if(i.nodeType===8)if(i.data===Vn)l.push({type:2,index:o});else{let u=-1;for(;(u=i.data.indexOf(oe,u+1))!==-1;)l.push({type:7,index:o}),u+=oe.length-1}o++}}static createElement(e,n){const r=$e.createElement("template");return r.innerHTML=e,r}}function Pe(t,e,n=t,r){var s,c;if(e===ae)return e;let i=r!==void 0?(s=n._$Co)==null?void 0:s[r]:n._$Cl;const o=at(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((c=i==null?void 0:i._$AO)==null||c.call(i,!1),o===void 0?i=void 0:(i=new o(t),i._$AT(t,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=i:n._$Cl=i),i!==void 0&&(e=Pe(t,i._$AS(t,e.values),i,r)),e}class ki{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:n},parts:r}=this._$AD,i=((e==null?void 0:e.creationScope)??$e).importNode(n,!0);Ae.currentNode=i;let o=Ae.nextNode(),s=0,c=0,l=r[0];for(;l!==void 0;){if(s===l.index){let d;l.type===2?d=new Ke(o,o.nextSibling,this,e):l.type===1?d=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(d=new Ti(o,this,e)),this._$AV.push(d),l=r[++c]}s!==(l==null?void 0:l.index)&&(o=Ae.nextNode(),s++)}return Ae.currentNode=$e,i}p(e){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}}class Ke{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,n,r,i){this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=Pe(this,e,n),at(e)?e===x||e==null||e===""?(this._$AH!==x&&this._$AR(),this._$AH=x):e!==this._$AH&&e!==ae&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):bi(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==x&&at(this._$AH)?this._$AA.nextSibling.data=e:this.$($e.createTextNode(e)),this._$AH=e}g(e){var o;const{values:n,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=lt.createElement(yi(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(n);else{const s=new ki(i,this),c=s.u(this.options);s.p(n),this.$(c),this._$AH=s}}_$AC(e){let n=Br.get(e.strings);return n===void 0&&Br.set(e.strings,n=new lt(e)),n}T(e){mi(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const o of e)i===n.length?n.push(r=new Ke(this.k(ot()),this.k(ot()),this,this.options)):r=n[i],r._$AI(o),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var n;this._$AM===void 0&&(this._$Cv=e,(n=this._$AP)==null||n.call(this,e))}}class mt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,r,i,o){this.type=1,this._$AH=x,this._$AN=void 0,this.element=e,this.name=n,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=x}_$AI(e,n=this,r,i){const o=this.strings;let s=!1;if(o===void 0)e=Pe(this,e,n,0),s=!at(e)||e!==this._$AH&&e!==ae,s&&(this._$AH=e);else{const c=e;let l,d;for(e=o[0],l=0;l<o.length-1;l++)d=Pe(this,c[r+l],n,l),d===ae&&(d=this._$AH[l]),s||(s=!at(d)||d!==this._$AH[l]),d===x?e=x:e!==x&&(e+=(d??"")+o[l+1]),this._$AH[l]=d}s&&!i&&this.O(e)}O(e){e===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class _i extends mt{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===x?void 0:e}}class Ai extends mt{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==x)}}class Ei extends mt{constructor(e,n,r,i,o){super(e,n,r,i,o),this.type=5}_$AI(e,n=this){if((e=Pe(this,e,n,0)??x)===ae)return;const r=this._$AH,i=e===x&&r!==x||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==x&&(r===x||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,e):this._$AH.handleEvent(e)}}class Ti{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Pe(this,e)}}const Ls={j:Gn,P:oe,A:Vn,C:1,M:wi,L:ki,R:bi,V:Pe,D:Ke,I:mt,H:Ai,N:Ei,U:_i,B:Ti},mn=rt.litHtmlPolyfillSupport;mn==null||mn(lt,Ke),(rt.litHtmlVersions??(rt.litHtmlVersions=[])).push("3.1.0");const Ns=(t,e,n)=>{const r=(n==null?void 0:n.renderBefore)??e;let i=r._$litPart$;if(i===void 0){const o=(n==null?void 0:n.renderBefore)??null;r._$litPart$=i=new Ke(e.insertBefore(ot(),o),o,void 0,n??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let R=class extends je{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const e=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=e.firstChild),e}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ns(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return ae}};var fi;R._$litElement$=!0,R.finalized=!0,(fi=globalThis.litElementHydrateSupport)==null||fi.call(globalThis,{LitElement:R});const bn=globalThis.litElementPolyfillSupport;bn==null||bn({LitElement:R});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=t=>(e,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ds={attribute:!0,type:String,converter:Lt,reflect:!1,hasChanged:Wn},Ms=(t=Ds,e,n)=>{const{kind:r,metadata:i}=n;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(n.name,t),r==="accessor"){const{name:s}=n;return{set(c){const l=e.get.call(this);e.set.call(this,c),this.requestUpdate(s,l,t)},init(c){return c!==void 0&&this.C(s,void 0,t),c}}}if(r==="setter"){const{name:s}=n;return function(c){const l=this[s];e.call(this,c),this.requestUpdate(s,l,t)}}throw Error("Unsupported decorator location: "+r)};function q(t){return(e,n)=>typeof n=="object"?Ms(t,e,n):((r,i,o)=>{const s=i.hasOwnProperty(o);return i.constructor.createProperty(o,s?{...r,wrapped:!0}:r),s?Object.getOwnPropertyDescriptor(i,o):void 0})(t,e,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function We(t){return q({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kr=(t,e,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Q(t,e){return(n,r,i)=>{const o=s=>{var c;return((c=s.renderRoot)==null?void 0:c.querySelector(t))??null};if(e){const{get:s,set:c}=typeof r=="object"?n:i??(()=>{const l=Symbol();return{get(){return this[l]},set(d){this[l]=d}}})();return Kr(n,r,{get(){let l=s.call(this);return l===void 0&&(l=o(this),(l!==null||this.hasUpdated)&&c.call(this,l)),l}})}return Kr(n,r,{get(){return o(this)}})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zs=(t,e,n)=>{for(const r of e)if(r[0]===t)return(0,r[1])();return n==null?void 0:n()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Vt=t=>(...e)=>({_$litDirective$:t,values:e});let qt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{D:Us}=Ls,Wr=()=>document.createComment(""),Ze=(t,e,n)=>{var o;const r=t._$AA.parentNode,i=e===void 0?t._$AB:e._$AA;if(n===void 0){const s=r.insertBefore(Wr(),i),c=r.insertBefore(Wr(),i);n=new Us(s,c,t,t.options)}else{const s=n._$AB.nextSibling,c=n._$AM,l=c!==t;if(l){let d;(o=n._$AQ)==null||o.call(n,t),n._$AM=t,n._$AP!==void 0&&(d=t._$AU)!==c._$AU&&n._$AP(d)}if(s!==i||l){let d=n._$AA;for(;d!==s;){const g=d.nextSibling;r.insertBefore(d,i),d=g}}}return n},ye=(t,e,n=t)=>(t._$AI(e,n),t),js={},Si=(t,e=js)=>t._$AH=e,Hs=t=>t._$AH,vn=t=>{var r;(r=t._$AP)==null||r.call(t,!1,!0);let e=t._$AA;const n=t._$AB.nextSibling;for(;e!==n;){const i=e.nextSibling;e.remove(),e=i}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fs=Vt(class extends qt{constructor(){super(...arguments),this.key=x}render(t,e){return this.key=t,e}update(t,[e,n]){return e!==this.key&&(Si(t),this.key=e),n}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ee(t,e,n){return t?e(t):n==null?void 0:n(t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bs=t=>typeof t!="string"&&"strTag"in t,$i=(t,e,n)=>{let r=t[0];for(let i=1;i<t.length;i++)r+=e[n?n[i-1]:i-1],r+=t[i];return r};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pi=t=>Bs(t)?$i(t.strings,t.values):t;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cn="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ks{constructor(e){this.__litLocalizeEventHandler=n=>{n.detail.status==="ready"&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(Cn,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(Cn,this.__litLocalizeEventHandler)}}const Ws=t=>t.addController(new Ks(t)),Gs=Ws;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=()=>(t,e)=>(t.addInitializer(Gs),t);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ci{constructor(){this.settled=!1,this.promise=new Promise((e,n)=>{this._resolve=e,this._reject=n})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */const se=[];for(let t=0;t<256;t++)se[t]=(t>>4&15).toString(16)+(t&15).toString(16);function Vs(t){let e=0,n=8997,r=0,i=33826,o=0,s=40164,c=0,l=52210;for(let d=0;d<t.length;d++)n^=t.charCodeAt(d),e=n*435,r=i*435,o=s*435,c=l*435,o+=n<<8,c+=i<<8,r+=e>>>16,n=e&65535,o+=r>>>16,i=r&65535,l=c+(o>>>16)&65535,s=o&65535;return se[l>>8]+se[l&255]+se[s>>8]+se[s&255]+se[i>>8]+se[i&255]+se[n>>8]+se[n&255]}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qs="",Ys="h",Xs="s";function Zs(t,e){return(e?Ys:Xs)+Vs(typeof t=="string"?t:t.join(qs))}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gr=new WeakMap,Vr=new Map;function Qs(t,e,n){if(t){const r=(n==null?void 0:n.id)??Js(e),i=t[r];if(i){if(typeof i=="string")return i;if("strTag"in i)return $i(i.strings,e.values,i.values);{let o=Gr.get(i);return o===void 0&&(o=i.values,Gr.set(i,o)),{...i,values:o.map(s=>e.values[s])}}}}return Pi(e)}function Js(t){const e=typeof t=="string"?t:t.strings;let n=Vr.get(e);return n===void 0&&(n=Zs(e,typeof t!="string"&&!("strTag"in t)),Vr.set(e,n)),n}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function yn(t){window.dispatchEvent(new CustomEvent(Cn,{detail:t}))}let Dt="",wn,Ri,Mt,Rn,xi,ke=new Ci;ke.resolve();let $t=0;const eo=t=>(ro((e,n)=>Qs(xi,e,n)),Dt=Ri=t.sourceLocale,Mt=new Set(t.targetLocales),Mt.add(t.sourceLocale),Rn=t.loadLocale,{getLocale:to,setLocale:no}),to=()=>Dt,no=t=>{if(t===(wn??Dt))return ke.promise;if(!Mt||!Rn)throw new Error("Internal error");if(!Mt.has(t))throw new Error("Invalid locale code");$t++;const e=$t;return wn=t,ke.settled&&(ke=new Ci),yn({status:"loading",loadingLocale:t}),(t===Ri?Promise.resolve({templates:void 0}):Rn(t)).then(r=>{$t===e&&(Dt=t,wn=void 0,xi=r.templates,yn({status:"ready",readyLocale:t}),ke.resolve())},r=>{$t===e&&(yn({status:"error",errorLocale:t,errorMessage:r.toString()}),ke.reject(r))}),ke.promise};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let p=Pi,qr=!1;function ro(t){if(qr)throw new Error("lit-localize can only be configured once");p=t,qr=!0}function Oi(t){return typeof t=="function"?t():t}const Gt=class Gt extends Event{constructor(e,n,r){super(Gt.eventName,{cancelable:!1}),this.key=e,this.value=n,this.state=r}};Gt.eventName="lit-state-changed";let Te=Gt;const io=(t,e)=>e!==t&&(e===e||t===t),sr=class sr extends EventTarget{static initPropertyMap(){this.propertyMap||(this.propertyMap=new Map)}get propertyMap(){return this.constructor.propertyMap}get stateValue(){return Object.fromEntries([...this.propertyMap].map(([e])=>[e,this[e]]))}constructor(){super(),this.hookMap=new Map,this.constructor.finalize(),this.propertyMap&&[...this.propertyMap].forEach(([e,n])=>{if(n.initialValue!==void 0){const r=Oi(n.initialValue);this[e]=r,n.value=r}})}static finalize(){if(this.finalized)return!1;this.finalized=!0;const e=Object.keys(this.properties||{});for(const n of e)this.createProperty(n,this.properties[n]);return!0}static createProperty(e,n){this.finalize();const r=typeof e=="symbol"?Symbol():`__${e}`,i=this.getPropertyDescriptor(String(e),r,n);Object.defineProperty(this.prototype,e,i)}static getPropertyDescriptor(e,n,r){const i=(r==null?void 0:r.hasChanged)||io;return{get(){return this[n]},set(o){const s=this[e];this[n]=o,i(o,s)===!0&&this.dispatchStateEvent(e,o,this)},configurable:!0,enumerable:!0}}reset(){this.hookMap.forEach(e=>e.reset()),[...this.propertyMap].filter(([e,n])=>!(n.skipReset===!0||n.resetValue===void 0)).forEach(([e,n])=>{this[e]=n.resetValue})}subscribe(e,n,r){n&&!Array.isArray(n)&&(n=[n]);const i=o=>{(!n||n.includes(o.key))&&e(o.key,o.value,this)};return this.addEventListener(Te.eventName,i,r),()=>this.removeEventListener(Te.eventName,i)}dispatchStateEvent(e,n,r){this.dispatchEvent(new Te(e,n,r))}};sr.finalized=!1;let xn=sr;const Yr="DONOTUSE",or=class or{constructor(e){if(this.state=e,!this.constructor.hookName||this.constructor.hookName===Yr)throw new Error("hook subclass must have their own hookName");this.unsubscribe=this.subscribe(),e.hookMap.set(this.constructor.hookName,this)}subscribe(){return this.state.subscribe(this.fromState.bind(this),this.hookedProps.map(([e])=>e))}get hookedProps(){const e=Object.getPrototypeOf(this.state);return e.propertyMap||e.initPropertyMap(),[...e.propertyMap].filter(([,n])=>(n==null?void 0:n.hook)&&(n==null?void 0:n.hook[this.constructor.hookName]))}isHookedProp(e){var n,r;return(r=(n=this.getDefinition(e))==null?void 0:n.hook)==null?void 0:r[this.constructor.hookName]}getDefinition(e){return this.state.propertyMap.get(e)}toState(e){Object.entries(e).filter(([n])=>this.isHookedProp(n)).forEach(([n,r])=>this.state[n]=r)}fromState(e,n,r){throw"fromState must be implemented in subclasses"}reset(){throw"reset hook must be implemented in subclasses"}};or.hookName=Yr;let Xr=or;class ee{constructor(e,n,r){this.host=e,this.state=n,this.callback=r||(()=>this.host.requestUpdate()),this.host.addController(this)}hostConnected(){this.state.addEventListener(Te.eventName,this.callback),this.callback()}hostDisconnected(){this.state.removeEventListener(Te.eventName,this.callback)}}function le(t){return(e,n)=>{if(Object.getOwnPropertyDescriptor(e,n))throw new Error("@property must be called before all state decorators");const r=e.constructor;r.initPropertyMap();const i=e.hasOwnProperty(n);return r.propertyMap.set(n,{...t,initialValue:t==null?void 0:t.value,resetValue:t==null?void 0:t.value}),r.createProperty(n,t),i?Object.getOwnPropertyDescriptor(e,n):void 0}}function so(t,e){if(t!==null&&(e===Boolean||e===Number||e===Array||e===Object))try{t=JSON.parse(t)}catch{console.warn("cannot parse value",t)}return t}const oo=new URL(location.href);function ao(t){return(e,n)=>{if(!Object.getOwnPropertyDescriptor(e,n))throw new Error("@local-storage decorator need to be called after @property");const i=e.constructor,o=`${(t==null?void 0:t.parameter)||String(n)}`,s=i.propertyMap.get(n),c=s==null?void 0:s.type;if(s){const l=s.initialValue,d=oo.searchParams.get(o);d!==null&&(s.skipAsync=!0),s.initialValue=()=>so(d,c)??Oi(l),i.propertyMap.set(n,{...s,...t});return}}}const I={apps:[{key:"schulverwaltung",scope:"Tutoring",root:"apps/webapp-schulverwaltung/index.html",heading:!1},{key:"anmeldedetailsEinlesen",scope:"NG",root:"apps/EmberApps/AnmeldedetailsEinlesen/index.html",heading:!0},{key:"schulleiterPersonen",scope:"NG",root:"apps/EmberApps/SchulleiterPersonen/index.html",heading:!0},{key:"fotoliste",scope:"Tutoring",root:"apps/EmberApps/Fotoliste/index.html",heading:!1},{key:"kursausschreibung",scope:"Public",root:"apps/Kursausschreibung/index.html",heading:!0},{key:"kursausschreibungIntern",scope:"Public",root:"apps/Kursausschreibung/indexIntern.html",heading:!0},{key:"stellvertretung",scope:"Tutoring",root:"apps/Stellvertretung/index.html",heading:!0},{key:"reservation",scope:"NG",root:"apps/Raumreservation/index.html",heading:!0},{key:"noteneingabe",scope:"Tutoring",root:"apps/Noteneingabe/index.html",heading:!1},{key:"footer",scope:"Public",root:"",heading:!0}],navigationHome:{key:"home",label:"Home",allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/dashboard"},navigationPhotoList:{key:"photoList",get label(){return p("Fotoliste")},allowedRolesOrPermissions:["TeacherRole"],deniedInstanceIds:null,appKey:"fotoliste",appPath:"#/"},navigationInputGrades:{key:"inputGrades",get label(){return p("Noteneingabe")},allowedRolesOrPermissions:["TeacherRole"],deniedInstanceIds:null,appKey:"noteneingabe",appPath:"#/"},navigationMyProfile:{key:"myProfile",get label(){return p("Mein Profil")},allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/my-profile"},navigationMySettings:{key:"mySettings",get label(){return p("Einstellungen")},allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/my-settings"},navigation:[{get label(){return p("Unterricht")},items:[{key:"presenceControl",get label(){return p("Präsenzkontrolle")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/presence-control"},{key:"currentEvents",get label(){return p("Aktuelle Fächer")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole","ClassTeacherRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/events/current"},{key:"tests",get label(){return p("Tests und Bewertung")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/events"},{key:"substitutionsAssign",get label(){return p("Stellvertretung erfassen")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole"],deniedInstanceIds:null,appKey:"stellvertretung",appPath:"#/substitutions/assign"},{key:"substitutionsExecute",get label(){return p("Stellvertretung ausüben")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole"],deniedInstanceIds:null,appKey:"stellvertretung",appPath:"#/substitutions/execute"}]},{get label(){return p("Absenzen")},items:[{key:"openAbsences",get label(){return p("Offene Absenzen entschuldigen")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole","ClassTeacherRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/open-absences"},{key:"editAbsences",get label(){return p("Absenzen bearbeiten")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole","ClassTeacherRole","AbsenceAdministratorRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/edit-absences"},{key:"evaluateAbsences",get label(){return p("Absenzen auswerten")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole","ClassTeacherRole","AbsenceAdministratorRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/evaluate-absences"}]},{get label(){return p("Aus-/Weiterbildung")},items:[{key:"myAbsences",get label(){return p("Absenzen")},allowedRolesOrPermissions:["StudentRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/my-absences"},{key:"myGrades",get label(){return p("Noten")},allowedRolesOrPermissions:["StudentRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/my-grades"}]},{get label(){return p("Angebote")},items:[{key:"coursesAndEvents",get label(){return p("Kurse und Veranstaltungen")},allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"kursausschreibung",appPath:"#/"},{key:"internalTraining",get label(){return p("Schulinterne Weiterbildung")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole","ClassTeacherRole","AbsenceAdministratorRole","SubstituteAdministratorRole","Reservations"],deniedInstanceIds:null,appKey:"kursausschreibungIntern",appPath:"#/"},{key:"reservations",get label(){return p("Räume und Geräte reservieren")},allowedRolesOrPermissions:["Reservations"],deniedInstanceIds:null,appKey:"reservation",appPath:"#/"}]},{get label(){return p("Administration")},items:[{key:"substitutionsAdmin",get label(){return p("Stellvertretungen administrieren")},allowedRolesOrPermissions:["SubstituteAdministratorRole"],deniedInstanceIds:null,appKey:"stellvertretung",appPath:"#/substitutions/admin"},{key:"personSearch",get label(){return p("Personen und Institutionen suchen")},allowedRolesOrPermissions:["PersonRight"],deniedInstanceIds:null,appKey:"schulleiterPersonen",appPath:"#/persons"},{key:"eventRegistration",get label(){return p("Anmeldedetails einlesen")},allowedRolesOrPermissions:["PersonRight","RegistrationRightAusbildungSemester","RegistrationRightAusbildungKurs","RegistrationRightAusbildungModulanlass","RegistrationRightAusbildungModul","RegistrationRightAusbildungStudiengang","RegistrationRightAusbildungStudienjahrgang","RegistrationRightAusbildungVeranstaltung","RegistrationRightWeiterbildungCAS","RegistrationRightWeiterbildungCASAnlass","RegistrationRightWeiterbildungDAS","RegistrationRightWeiterbildungDASJahrgang","RegistrationRightWeiterbildungInteressent","RegistrationRightWeiterbildungKurs","RegistrationRightWeiterbildungMAS","RegistrationRightWeiterbildungMASJahrgang","RegistrationRightWeiterbildungModulanlass","RegistrationRightWeiterbildungModulbefreiung","RegistrationRightWeiterbildungSemester","RegistrationRightWeiterbildungVeranstaltung","RegistrationRightWeiterbildungEvaluationsanlass","RegistrationRightWeiterbildungFakturierung","RegistrationRightWeiterbildungMailingliste","RegistrationRightWeiterbildungPlatzangebot","RegistrationRightWeiterbildungReservation"],deniedInstanceIds:null,appKey:"anmeldedetailsEinlesen",appPath:"#/input"}]}],footer:[{key:"contact",get label(){return p("Kontakt")},allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"footer",appPath:"#/"},{key:"legal",get label(){return p("Rechtliche Hinweise")},allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"footer",appPath:"#/"},{key:"imprint",get label(){return p("Impressum")},allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"footer",appPath:"#/"}]};function Yt(){var t;return((t=window.eventoPortal)==null?void 0:t.settings)??{apiServer:"",oAuthServer:"",oAuthPrefix:"",oAuthClientId:"",notificationRefreshTime:30}}function ct(t){const{instance_id:e,scope:n,culture_info:r,nbf:i,exp:o,substitution_id:s,holder_roles:c}=ho(t);return{instanceId:e,scope:n,locale:r,issueTime:i,expirationTime:o,substitutionId:s?parseInt(s,10):void 0,substitutionRoles:c?c.split(";"):void 0}}function Zr(t,e,n){if(!t)return!1;const r=ct(t);return r.scope===e&&r.locale===n&&!co(r)}function lo(t){if(!t)return!0;const{expirationTime:e}=t,n=Math.floor(Date.now()/1e3);return e<n}function co(t){if(!t)return!0;const{issueTime:e,expirationTime:n}=t,r=n-e,i=Math.floor(Date.now()/1e3);return n<=i+r/2}function uo(t){const{expirationTime:e}=t;return Math.max(e*1e3-Date.now(),0)}function ho(t){const n=t.split(".")[1].replace("-","+").replace("_","/"),r=decodeURIComponent(window.atob(n).split("").map(function(i){return"%"+("00"+i.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(r)}const Ii="bkdInstance",On="bkdCodeVerifier",dt="bkdRedirectUrl",Yn="bkdAccessToken",Xn="bkdRefreshToken",ut="CLX.LoginToken",po="uiCulture",fo="CLX.TokenExpire";function Li(){return localStorage.getItem(Ii)}function go(t){localStorage.setItem(Ii,t)}function mo(t){return localStorage.getItem(`${Yn}_${t}`)}function bo(){return localStorage.getItem(Xn)}function vo(t){t&&localStorage.setItem(Xn,t)}function yo(t,e){localStorage.setItem(`${Yn}_${t}`,e)}function wo(){new Array(localStorage.length).fill(void 0).forEach((t,e)=>{const n=localStorage.key(e);n&&(n.startsWith(Yn)||n===Xn)&&localStorage.removeItem(n)}),sessionStorage.removeItem(ut)}function ko(t){localStorage.setItem(po,t)}function _o(){const t=sessionStorage.getItem(ut);return t?t.replace(/^"+|"+$/g,""):null}function Ao(){const t=localStorage.getItem(ut);return t?t.replace(/^"+|"+$/g,""):null}function Eo(t){sessionStorage.setItem(ut,`"${t}"`),localStorage.setItem(ut,`"${t}"`);let{expirationTime:e}=ct(t);e=e*1e3,localStorage.setItem(fo,e.toString())}function To(){const t=sessionStorage.getItem(On),e=sessionStorage.getItem(dt)??void 0;return sessionStorage.removeItem(dt),sessionStorage.removeItem(On),t?{redirectUri:e,codeVerifier:t}:null}function So(t,e){sessionStorage.setItem(On,t),e?sessionStorage.setItem(dt,e):sessionStorage.removeItem(dt)}function $o(){return sessionStorage.getItem(dt)}class Po{constructor(){this.state={refreshToken:bo(),refreshTokenPayload:null,accessToken:_o(),accessTokenPayload:null},this.refreshTokenSubscribers=[],this.accessTokenSubscribers=[],this.afterRefreshTokenUpdate(this.refreshToken,!1),this.afterAccessTokenUpdate(this.accessToken,!1)}get refreshToken(){return this.state.refreshToken}set refreshToken(e){this.state.refreshToken=e,this.afterRefreshTokenUpdate(e)}get refreshTokenPayload(){return this.state.refreshTokenPayload}get accessToken(){return this.state.accessToken}set accessToken(e){this.state.accessToken=e,this.afterAccessTokenUpdate(e)}get accessTokenPayload(){return this.state.accessTokenPayload}get authenticated(){return!!this.accessToken}get scope(){var e;return((e=this.accessTokenPayload)==null?void 0:e.scope)??null}get locale(){var e;return((e=this.accessTokenPayload)==null?void 0:e.locale)??null}get instanceId(){var e;return((e=this.accessTokenPayload)==null?void 0:e.instanceId)??null}isRefreshTokenExpired(){return lo(this.refreshTokenPayload)}resetAllTokens(){this.state.refreshToken=null,this.state.refreshTokenPayload=null,this.state.accessToken=null,this.state.accessTokenPayload=null,wo()}onRefreshTokenUpdate(e){return this.refreshTokenSubscribers.push(e),()=>{const n=this.refreshTokenSubscribers.findIndex(r=>r===e);this.refreshTokenSubscribers.splice(n,1)}}onAccessTokenUpdate(e){return this.accessTokenSubscribers.push(e),()=>{const n=this.accessTokenSubscribers.findIndex(r=>r===e);this.accessTokenSubscribers.splice(n,1)}}afterRefreshTokenUpdate(e,n=!0){this.state.refreshTokenPayload=e?ct(e):null,e&&n&&vo(e),this.notifyRefreshTokenSubscribers()}afterAccessTokenUpdate(e,n=!0){const r=e?ct(e):null;this.state.accessTokenPayload=r,e&&r&&n&&(yo(r.scope,e),Eo(e)),this.notifyAccessTokenSubscribers()}notifyRefreshTokenSubscribers(){this.refreshTokenSubscribers.forEach(e=>e(this.refreshTokenPayload))}notifyAccessTokenSubscribers(){this.accessTokenSubscribers.forEach(e=>e(this.accessTokenPayload))}}const P=new Po,he=Yt();if(typeof(he==null?void 0:he.apiServer)!="string")throw new Error("Invalid 'apiServer' setting");async function Co(){var n,r;const t=`${he.apiServer}/UserSettings/?expand=AccessInfo`,e=await bt(t);return{roles:((n=e==null?void 0:e.AccessInfo)==null?void 0:n.Roles)??[],permissions:((r=e==null?void 0:e.AccessInfo)==null?void 0:r.Permissions)??[]}}async function Ro(){const t=`${he.apiServer}/Configurations/SchoolAppNavigation`,e=await bt(t);return(e==null?void 0:e.instanceName)||null}function xo(){const t=`${he.apiServer}/TeacherSubstitutions/current`;return bt(t)}const Ni="notificationData";async function Oo(){var r;const t=`${he.apiServer}/UserSettings/Cst`,{Settings:e}=await bt(t),n=(r=e.find(i=>i.Key===Ni))==null?void 0:r.Value;return n?JSON.parse(n):[]}function Qr(t){const e=`${he.apiServer}/UserSettings/Cst`,n={Id:"Cst",Settings:[{Key:Ni,Value:JSON.stringify(t)}]};return bt(e,{method:"PATCH",body:JSON.stringify(n)},!0)}async function bt(t,{method:e="GET",body:n=void 0}={},r){const{accessToken:i}=P;if(!i)throw new Error("No token available");const o=new Headers({"CLX-Authorization":`token_type=urn:ietf:params:oauth:token-type:jwt-bearer, access_token=${i}`,"Content-Type":"application/json"}),s=await fetch(t,{method:e,headers:o,body:n});if(!r)return s.json()}const Io="modulepreload",Lo=function(t){return"/"+t},Jr={},No=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link");i=Promise.all(n.map(s=>{if(s=Lo(s),s in Jr)return;Jr[s]=!0;const c=s.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(!!r)for(let u=o.length-1;u>=0;u--){const m=o[u];if(m.href===s&&(!c||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${l}`))return;const g=document.createElement("link");if(g.rel=c?"stylesheet":Io,c||(g.as="script",g.crossOrigin=""),g.href=s,document.head.appendChild(g),c)return new Promise((u,m)=>{g.addEventListener("load",u),g.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${s}`)))})}))}return i.then(()=>e()).catch(o=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o})},Di="de-CH",Do=["fr-CH"],Zn=["de-CH","fr-CH"],{getLocale:Mo,setLocale:zo}=eo({sourceLocale:Di,targetLocales:Do,loadLocale:t=>No(()=>import(`/locales/${t}.js`),__vite__mapDeps([]))});function Mi(){const t=jo()??Bo()??Ko();return t&&Ho(t)?t:Fo()??Di}async function Uo(t){await zo(t),document.documentElement.lang=t}function jo(){return new URL(location.href).searchParams.get(Ce)}function Ho(t){return Zn.includes(t)}function Fo(){const t=navigator.language.slice(0,2);return Zn.find(e=>e.startsWith(t))??null}function Bo(){const t=$o();return t?new URL(t).searchParams.get(Ce):null}function Ko(){const t=Ao();return t?ct(t).locale:null}const Wo=[I.navigationHome,I.navigationMyProfile,I.navigationMySettings,I.navigationPhotoList,I.navigationInputGrades,...I.footer];function Xt(t,e){const n=zi(t,({key:r})=>r===e);return n||{item:I.navigationHome,group:null}}function Go(t,e){return zi(t,n=>n.appPath!=="#/"&&e.startsWith(n.appPath))}function zi(t,e){let n=Wo.find(r=>e(r));if(n)return{item:n,group:null};for(const r of t)if(n=r.items.find(i=>e(i)),n)return{item:n,group:r};return null}function Zt(t){const e=I.apps.find(n=>n.key===t.appKey);if(!e)throw new Error(`Invalid app: ${t.appKey}`);return e}function Vo(t,e){const{item:n}=Xt(t,e);return Zt(n).scope}function qo(t,e,n){return t.reduce((r,i)=>{const o=i.items.filter(s=>Yo(s,e)&&Xo(s,n));return o.length>0?[...r,{...i,items:o}]:r},[])}function Yo(t,e){return t.deniedInstanceIds===null||t.deniedInstanceIds.includes(e)}function Xo(t,e){return t.allowedRolesOrPermissions===null||t.allowedRolesOrPermissions.some(n=>e.includes(n))}function Zo(t){const e=new URL(location.href);Array.from(e.searchParams.keys()).forEach(r=>{t.includes(r)||e.searchParams.delete(r)}),history.replaceState({},"",e)}function ei(t,e,n=!1){const r=new URL(location.href);r.searchParams.set(t,e),n?history.replaceState({},"",r):history.pushState({},"",r)}function kn(t){return t.slice(Math.max(t.indexOf("#"),0))}function _n(t,e=!1){const n=new URL(location.href);n.hash=t,e?history.replaceState({},"",n):history.pushState({},"",n)}function Qo(){const e=new URL(location.href).searchParams.get(He);return e?Vo(I.navigation,e):Zt(I.navigationHome).scope}function pe(t){const e=typeof t=="string"?Xt(k.navigation,t).item:t;return Jo(e).toString()}function Jo(t){const e=new URL(location.origin);return e.searchParams.set(Ce,k.locale),e.searchParams.set(He,t.key),e.hash=t.appPath,e}var ea=Object.defineProperty,ta=Object.getOwnPropertyDescriptor,ce=(t,e,n,r)=>{for(var i=r>1?void 0:r?ta(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(r?s(e,n,i):s(i))||i);return r&&i&&ea(e,n,i),i};const Ce="locale",He="module",na=[Ce,He];class te extends xn{constructor(){super(...arguments),this.actualAppPath=null,this.setInitialized=()=>{},this.initialized=new Promise(e=>this.setInitialized=()=>e(null))}async init(){await this.handleStateChange("locale",this.locale),this.subscribe(this.handleStateChange.bind(this)),P.onAccessTokenUpdate(()=>this.updateNavigation()),await this.loadRolesAndPermissions(),this.setInitialized()}subscribeLocale(e){return e(this.locale),this.subscribe((n,r)=>e(r),"locale")}subscribeInstanceName(e){return this.subscribe((n,r)=>e(r),"instanceName")}subscribeNavigationItemKey(e){return e(this.navigationItemKey),this.subscribe((n,r)=>e(r),"navigationItemKey")}subscribeNavigationItem(e){return e(this.navigationItem),this.subscribe((n,r)=>e(r),"navigationItem")}subscribeScopeAndLocale(e,n=!1){return n||e(this.app.scope,this.locale),this.subscribe(()=>e(this.app.scope,this.locale),["app","locale"])}navigate(e){this.initialized.then(()=>{Zo(na),this.locale=e.searchParams.get(Ce)||Mo(),this.navigationItemKey=e.searchParams.get(He)??I.navigationHome.key,e.hash&&e.hash!=="#"&&e.hash!=="#/"&&e.hash.startsWith(this.navigationItem.appPath)&&(this.appPath=e.hash)})}async handleStateChange(e,n){e==="locale"&&(await this.updateLocale(n),await this.loadInstanceName()),(e==="locale"||e==="navigationItemKey")&&ko(this.locale),(e==="rolesAndPermissions"||e==="locale")&&this.updateNavigation(),(e==="navigationItemKey"||e==="navigation")&&(this.updateNavigationItemAndGroup(this.navigationItemKey),this.updateApp(this.navigationItem))}async updateLocale(e){ei(Ce,e);try{await Uo(e)}catch(n){console.warn("Unable to fetch/update locale (this may happen when interrupted by a redirect):",n)}}updateNavigation(){var n;const{instanceId:e}=P;e&&(this.navigation=qo(I.navigation,e,((n=P.accessTokenPayload)==null?void 0:n.substitutionRoles)||this.rolesAndPermissions))}updateNavigationItemAndGroup(e){if(this.navigation.length>0){const{item:n,group:r}=Xt(this.navigation,e);this.navigationItem=n,this.navigationGroup=r,this.actualAppPath&&this.actualAppPath!=="#"&&this.actualAppPath!=="#/"&&this.actualAppPath.startsWith(n.appPath)?this.appPath=this.actualAppPath:this.appPath=n.appPath,this.actualAppPath=null,this.updateHashFromAppPath(),n.key===I.navigationHome.key&&n.key!==e&&(this.navigationItemKey=n.key)}ei(He,this.navigationItemKey)}updateHashFromAppPath(){const e=new URL(document.location.href);e.hash=this.appPath,history.replaceState({},"",e)}updateApp(e){this.app=Zt(e)}async loadRolesAndPermissions(){if(!P.authenticated)return;const{roles:e,permissions:n}=await Co();this.rolesAndPermissions=[...e,...n]}async loadInstanceName(){if(P.authenticated)try{const e=await Ro();this.instanceName=[p("Evento"),e].filter(Boolean).join(" | ")}catch(e){console.warn("Unable to fetch/update instance name (this may happen when interrupted by a redirect):",e)}}}ce([le({value:Mi()})],te.prototype,"locale",2);ce([le({value:[]})],te.prototype,"rolesAndPermissions",2);ce([le({value:""})],te.prototype,"instanceName",2);ce([le({value:[]})],te.prototype,"navigation",2);ce([ao({parameter:He}),le({value:null})],te.prototype,"navigationItemKey",2);ce([le({value:null})],te.prototype,"navigationGroup",2);ce([le({value:I.navigationHome})],te.prototype,"navigationItem",2);ce([le({value:Zt(I.navigationHome)})],te.prototype,"app",2);ce([le({value:I.navigationHome.appPath})],te.prototype,"appPath",2);const k=new te,Ui=O`
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
`,ji=O`
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
`,M=O`
  :host {
    ${Ui}
    ${ji}
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
`,Qn=O`
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
`;function ra(t){var n;const e=document.createElement("style");e.innerText=t,(n=document.querySelector("body"))==null||n.appendChild(e)}var ia=Object.defineProperty,sa=Object.getOwnPropertyDescriptor,Hi=(t,e,n,r)=>{for(var i=r>1?void 0:r?sa(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(r?s(e,n,i):s(i))||i);return r&&i&&ia(e,n,i),i};let zt=class extends R{constructor(){super(),this.renderedOffline=!1,this.handleMessage=t=>{switch(t.data.type){case"bkdAppResize":{this.handleResize(t.data.height);break}}},this.handleOnline=()=>{this.renderedOffline&&window.location.reload()},new ee(this,k)}connectedCallback(){super.connectedCallback(),window.addEventListener("message",this.handleMessage),window.addEventListener("online",this.handleOnline)}disconnectedCallback(){window.removeEventListener("message",this.handleMessage),window.removeEventListener("online",this.handleOnline),super.disconnectedCallback()}handleResize(t){this.iframe&&(this.iframe.height=t)}renderAppIframe(){return _`${Fs(k.app.root,_`
        <iframe
          id="app"
          title=${k.app.key}
          src=${`/${k.app.root}${k.appPath}`}
        ></iframe>
      `)}`}renderFooterContent(){return _`
      ${zs(k.navigationItemKey,[["contact",()=>_`<bkd-contact></bkd-contact>`],["legal",()=>_`<bkd-legal></bkd-legal>`],["imprint",()=>_`<bkd-imprint></bkd-imprint>`]],()=>_``)}
    `}render(){return this.renderedOffline=!navigator.onLine,navigator.onLine?P.scope!==k.app.scope?_`<main role="main"></main>`:_`
      <main role="main">
        ${Ee(k.app.heading,()=>_`<h1>${k.navigationItem.label}</h1>`)}
        ${Ee(k.app.key==="footer",()=>this.renderFooterContent(),()=>this.renderAppIframe())}
      </main>
    `:_`<main role="main">
        <h1>${p("Offline")}</h1>
        <p>${p("Keine Verbindung vorhanden.")}</p>
      </main>`}};zt.styles=[M,O`
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
    `];Hi([Q("iframe")],zt.prototype,"iframe",2);zt=Hi([N("bkd-content"),D()],zt);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ti=(t,e,n)=>{const r=new Map;for(let i=e;i<=n;i++)r.set(t[i],i);return r},Fi=Vt(class extends qt{constructor(t){if(super(t),t.type!==qn.CHILD)throw Error("repeat() can only be used in text expressions")}ht(t,e,n){let r;n===void 0?n=e:e!==void 0&&(r=e);const i=[],o=[];let s=0;for(const c of t)i[s]=r?r(c,s):s,o[s]=n(c,s),s++;return{values:o,keys:i}}render(t,e,n){return this.ht(t,e,n).values}update(t,[e,n,r]){const i=Hs(t),{values:o,keys:s}=this.ht(e,n,r);if(!Array.isArray(i))return this.dt=s,o;const c=this.dt??(this.dt=[]),l=[];let d,g,u=0,m=i.length-1,h=0,v=o.length-1;for(;u<=m&&h<=v;)if(i[u]===null)u++;else if(i[m]===null)m--;else if(c[u]===s[h])l[h]=ye(i[u],o[h]),u++,h++;else if(c[m]===s[v])l[v]=ye(i[m],o[v]),m--,v--;else if(c[u]===s[v])l[v]=ye(i[u],o[v]),Ze(t,l[v+1],i[u]),u++,v--;else if(c[m]===s[h])l[h]=ye(i[m],o[h]),Ze(t,i[u],i[m]),m--,h++;else if(d===void 0&&(d=ti(s,h,v),g=ti(c,u,m)),d.has(c[u]))if(d.has(c[m])){const b=g.get(s[h]),A=b!==void 0?i[b]:null;if(A===null){const T=Ze(t,i[u]);ye(T,o[h]),l[h]=T}else l[h]=ye(A,o[h]),Ze(t,i[u],A),i[b]=null;h++}else vn(i[m]),m--;else vn(i[u]),u++;for(;h<=v;){const b=Ze(t,l[v+1]);ye(b,o[h]),l[h++]=b}for(;u<=m;){const b=i[u++];b!==null&&vn(b)}return this.dt=s,Si(t,l),ae}});var oa=Object.defineProperty,aa=Object.getOwnPropertyDescriptor,la=(t,e,n,r)=>{for(var i=r>1?void 0:r?aa(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(r?s(e,n,i):s(i))||i);return r&&i&&oa(e,n,i),i};let In=class extends R{constructor(){super(),new ee(this,k)}renderFooterLink(t){const e=pe(t);return _`
      <a
        href=${e}
        @click=${n=>{n==null||n.preventDefault(),k.navigate(new URL(e))}}
        >${t.label}</a
      >
    `}render(){return _`
      <footer role="contentinfo">
        <div class="copyright">${p("© Bildungs- und Kulturdirektion")}</div>
        <div class="footer-nav">
          ${Fi(I.footer,t=>t.key,this.renderFooterLink.bind(this))}
        </div>
      </footer>
    `}};In.styles=[M,O`
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
    `];In=la([N("bkd-footer"),D()],In);var ca=Object.defineProperty,da=Object.getOwnPropertyDescriptor,ua=(t,e,n,r)=>{for(var i=r>1?void 0:r?da(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(r?s(e,n,i):s(i))||i);return r&&i&&ca(e,n,i),i};let Ln=class extends R{render(){return _`<p>
      ${p("Lernende, Lehrpersonen und Schulmitarbeitende wenden sich bei Fehlermeldungen in Evento Web oder Fragen zu dieser Fachapplikation an die zuständige Stelle in ihrer Schule. Diese wird von der Schule kommuniziert. Im Zweifelsfall kontaktieren Sie bitte das Schulsekretariat.")}
    </p>`}};Ln.styles=[M,Qn];Ln=ua([N("bkd-contact"),D()],Ln);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*ha(t,e){const n=typeof e=="function";if(t!==void 0){let r=-1;for(const i of t)r>-1&&(yield n?e(r):e),r++,yield i}}function Ut(t){return ha(t==null?void 0:t.split(`
`),_`<br />`)}var pa=Object.defineProperty,fa=Object.getOwnPropertyDescriptor,ga=(t,e,n,r)=>{for(var i=r>1?void 0:r?fa(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(r?s(e,n,i):s(i))||i);return r&&i&&pa(e,n,i),i};let Nn=class extends R{constructor(){super(),new ee(this,k)}render(){return _`
      <div class="content-section">
        <h2>${p("Inhaltsverantwortung")}</h2>
        <p>${p("Zuständige Schule, siehe Kontakt")}</p>
      </div>

      <div class="content-section">
        <h2>${p("Fachapplikation")}</h2>
        <p>
          ${Ut(p(`Bildungs- und Kulturdirektion des Kantons Bern
Mittelschul- und Berufsbildungsamt
Fachbereich Informatikanwendungen
Kasernenstrasse 27
3013 Bern`))}
        </p>
        <p><a href="mailto:fbi.mba@be.ch">${p("E-Mail")}</a></p>
      </div>

      <div class="content-section">
        <h2>${p("Betrieb und Technik")}</h2>
        <p>
          ${Ut(p(`Bedag Informatik AG
Engehaldenstrasse 12
3012 Bern`))}
        </p>
        <p>
          <a href="https://www.bedag.ch/" target="_blank">www.bedag.ch</a>
        </p>
      </div>
    `}};Nn.styles=[M,Qn];Nn=ga([N("bkd-imprint"),D()],Nn);var ma=Object.defineProperty,ba=Object.getOwnPropertyDescriptor,va=(t,e,n,r)=>{for(var i=r>1?void 0:r?ba(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(r?s(e,n,i):s(i))||i);return r&&i&&ma(e,n,i),i};let Dn=class extends R{render(){return _`
      <div class="content-section">
        <h2>${p("Haftungsausschluss")}</h2>
        <p>
          ${p("Die Inhalte dieser Fachapplikation sind ein Datenangebot der zuständigen Schule. Obwohl diese die Daten regelmässig auf Richtigkeit und Aktualität hin prüft, lehnen wir, soweit gesetzlich zulässig, jede Haftung für unerwünschte Folgen aus dem Gebrauch dieser Daten ab.")}
        </p>
        <p>
          ${p("Diese Fachapplikation enthält Links zu Angeboten von Dritten. Sie benutzen diese Links auf eigenes Risiko. Für die Inhalte dieser anderen Webseiten übernehmen wir keine Verantwortung. Von unserer Haftung ausgeschlossen ist namentlich die Garantie für die ständige Verfügbarkeit unserer Fachapplikation sowie Schäden (z.B. wegen Verbindungsunterbruch oder schädlicher Software), die durch die Benutzung dieser Fachapplikation entstehen könnten.")}
        </p>
      </div>

      <div class="content-section">
        <h2>${p("Immaterialgüterrechte")}</h2>
        <p>
          ${p("Sichtbare Elemente (Bilder/Icons) dieser Fachapplikation können Dritten gehören. Diese Elemente dürfen deshalb grundsätzlich nicht verwendet werden. Der Kanton Bern kann deren Verwendung ausserhalb der Webseite auf Anfrage erlauben, sofern er dazu selbst berechtigt ist. Für solche Anfragen wenden Sie sich bitte an die Stelle, die für die Fachapplikation verantwortlich ist. Die Kontaktangaben finden Sie im Impressum.")}
        </p>
      </div>

      <div class="content-section">
        <h2>${p("Datenschutzerklärung")}</h2>
        <p>
          ${p("Verantwortliche Stelle im Sinne der Datenschutzgesetze, unter anderem auch der EU-Datenschutzgrundverordnung (DSGVO), ist:")}
        </p>
        <p>
          ${Ut(p(`Mittelschul- und Berufsbildungsamt
Kasernenstrasse 27
3013 Bern`))}
        </p>
        <p><a href="mailto:fbi.mba@be.ch">${p("E-Mail")}</a></p>
        <p>
          <a href="${p("https://www.be.ch/mba")}" target="_blank"
            >${p("https://www.be.ch/mba").replace("https://","")}</a
          >
        </p>
      </div>

      <div class="content-section">
        <h2>${p("Datenbearbeitung")}</h2>
        <p>
          ${p("Der zum Betrieb dieser Fachapplikation eingesetzte Leistungserbringer des Kantons Bern bearbeitet teilweise die IP-Adresse oder technische Angaben der Endgeräte von Personen, die diese Webseite besuchen. Der Leistungserbringer untersteht einer Datenschutzgesetzgebung mit einem dem Berner Recht gleichwertigem Datenschutzniveau. Die IP-Adresse wird verschlüsselt übertragen und vor der weiteren Bearbeitung anonymisiert.")}
        </p>
        <p>
          ${p("Mit der Benutzung dieser Fachapplikation stimmen Sie dieser Datenbearbeitung soweit erforderlich zu. Sie erfolgt im Einzelnen wie folgt:")}
        </p>
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>${p("Leistungserbringer")}</th>
                <th>${p("Bearbeitete Daten")}</th>
                <th>${p("Grund der Bearbeitung")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th style="white-space: nowrap;">
                  ${Ut(p(`Bedag Informatik AG
Engehaldenstrasse 12
3012 Bern`))}
                </th>
                <td>
                  ${p("IP-Adresse, technische Angaben zum Betriebssystem und Webbrowser, Referrer-URL, Hostname, Uhrzeit")}
                </td>
                <td>
                  ${p("Logdaten des Webserves des Kantons Bern zum Erkennen und Beheben von technischen Störungen und Angriffen.")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="content-section">
        <h2>${p("Cookies")}</h2>
        <p>${p("Diese Webseite setzt keine Cookies ein.")}</p>
      </div>

      <div class="content-section">
        <h2>${p("Soziale Medien")}</h2>
        <p>
          ${p("Soweit diese Fachapplikation auf soziale Medien wie YouTube verweist, geschieht das nur durch Links, nicht etwa durch das Ausführen von Programmen (Plug-ins). Mit dem Aufrufen dieser Fachapplikation werden daher keine Personendaten an die sozialen Medien übertragen.")}
        </p>
      </div>

      <div class="content-section">
        <h2>${p("Kontakt bei Fragen")}</h2>
        <p>
          ${p("Wenn Sie Fragen zum Datenschutz im Zusammenhang mit dieser Fachapplikation haben, können Sie sich an die Stelle wenden, die für die Fachapplikation verantwortlich ist. Die Kontaktangaben finden Sie im Impressum.")}
        </p>
      </div>
    `}};Dn.styles=[M,Qn,O`
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
    `];Dn=va([N("bkd-legal"),D()],Dn);function jt(t,e){if(t===e||t.contains(e))return!0;if("shadowRoot"in t&&t.shadowRoot)return jt(t.shadowRoot,e);for(const n of Array.from(t.children))if(jt(n,e))return!0;return!1}class vt{constructor(e,n){this.host=e,this.options=n,this.open=!1,this.closeOnBlur=r=>{this.menuElement&&"relatedTarget"in r&&(this.menuElement.contains(r.relatedTarget)||this.closeDeferred())},this.handleDocumentClick=r=>{const i=r.composedPath()[0];if(!i)return;const o=this.toggleElement&&!jt(this.toggleElement,i),s=this.menuElement&&!jt(this.menuElement,i);o&&s&&this.closeDeferred()},this.handleIframeClick=()=>{this.closeDeferred()},this.handleKeydown=r=>{switch(r.key){case"Tab":{this.options.tabInside||this.close();break}case"Escape":{this.close();break}case"ArrowDown":{const i=this.items[this.nextLinkIndex(1)];i==null||i.focus();break}case"ArrowUp":{const i=this.items[this.nextLinkIndex(-1)];i==null||i.focus();break}}},this.host.addController(this)}get toggleElement(){return this.options.queryToggleElement()}get menuElement(){return this.options.queryMenuElement()}get items(){var n;const e=((n=this.options)==null?void 0:n.queryItems)&&this.options.queryItems();return Array.from(e??[])}get focusedItem(){var e;return(e=this.options)!=null&&e.queryFocused?this.options.queryFocused():null}hostDisconnected(){this.removeListeners()}toggle(){this.open=!this.open,this.host.requestUpdate(),this.open?this.addListeners():setTimeout(()=>{this.removeListeners()})}close(){this.open&&this.toggle()}closeDeferred(){setTimeout(()=>this.close())}addListeners(){setTimeout(()=>{var e,n;this.options.tabInside&&((e=this.menuElement)==null||e.addEventListener("focusout",this.closeOnBlur,!0)),(n=this.iframeDocument)==null||n.addEventListener("click",this.handleIframeClick,!0)}),document.addEventListener("click",this.handleDocumentClick,!0),this.host.addEventListener("keydown",this.handleKeydown,!0)}removeListeners(){var e,n;this.options.tabInside&&((e=this.menuElement)==null||e.removeEventListener("focusout",this.closeOnBlur,!0)),document.removeEventListener("click",this.handleDocumentClick,!0),(n=this.iframeDocument)==null||n.removeEventListener("click",this.handleIframeClick,!0),this.host.removeEventListener("keydown",this.handleKeydown,!0)}get iframeDocument(){var i,o;const e=(i=document.querySelector("bkd-portal"))==null?void 0:i.shadowRoot,n=(o=e==null?void 0:e.querySelector("bkd-content"))==null?void 0:o.shadowRoot,r=n==null?void 0:n.querySelector("iframe");return(r==null?void 0:r.contentDocument)??null}activeLinkIndex(){const e=this.focusedItem?this.items.indexOf(this.focusedItem):-1;return e===-1?null:e}nextLinkIndex(e){const n=this.activeLinkIndex(),r=0,i=this.items.length-1;if(n===null)return e>0?r:i;const o=n+e;return o>i?r:o<r?i:o}}var ya=Object.defineProperty,wa=Object.getOwnPropertyDescriptor,Jn=(t,e,n,r)=>{for(var i=r>1?void 0:r?wa(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(r?s(e,n,i):s(i))||i);return r&&i&&ya(e,n,i),i};let ht=class extends R{constructor(){super(),this.mobileNav=new vt(this,{queryToggleElement:()=>{var t,e;return((e=(t=this.serviceNavElement)==null?void 0:t.shadowRoot)==null?void 0:e.querySelector("bkd-hamburger"))??null},queryMenuElement:()=>{var t;return((t=this.mobileNavElement)==null?void 0:t.shadowRoot)??null},tabInside:!0}),new ee(this,k)}handleLogoClick(t){t.preventDefault(),k.navigationItemKey=I.navigationHome.key,k.appPath=I.navigationHome.appPath}handleNavItemClick(t){const{item:e}=t.detail;k.navigationItemKey=e.key,this.mobileNav.close()}handleSettingsItemClick(t){const{item:e,event:n}=t.detail;e.external||(n.preventDefault(),e.key==="logout"?this.dispatchEvent(new CustomEvent("bkdlogout",{composed:!0,bubbles:!0})):k.navigationItemKey=e.key),this.mobileNav.close()}render(){return _`
      <header role="banner">
        <a
          class="logo"
          href=${pe("home")}
          @click=${this.handleLogoClick.bind(this)}
          ><img src="logo.svg" alt=${p("Evento Startseite")}
        /></a>
        <div class="logo-caption">${k.instanceName}</div>
        ${Ee(navigator.onLine,()=>_`<bkd-service-nav
              .mobileNavOpen=${this.mobileNav.open}
              @bkdhamburgertoggle=${()=>this.mobileNav.toggle()}
              @bkdsettingsitemclick=${this.handleSettingsItemClick.bind(this)}
            ></bkd-service-nav> `)}
        ${Ee(navigator.onLine,()=>_` <bkd-nav
              @bkdnavitemclick=${this.handleNavItemClick.bind(this)}
            ></bkd-nav>`)}
        ${Ee(this.mobileNav.open,()=>_`<bkd-mobile-nav
              @bkdnavitemclick=${this.handleNavItemClick.bind(this)}
              @bkdsettingsitemclick=${this.handleSettingsItemClick.bind(this)}
            ></bkd-mobile-nav>`)}
      </header>
    `}};ht.styles=[M,O`
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
    `];Jn([Q("bkd-service-nav")],ht.prototype,"serviceNavElement",2);Jn([Q("bkd-mobile-nav")],ht.prototype,"mobileNavElement",2);ht=Jn([N("bkd-header"),D()],ht);var ka=Object.defineProperty,_a=Object.getOwnPropertyDescriptor,Bi=(t,e,n,r)=>{for(var i=r>1?void 0:r?_a(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(r?s(e,n,i):s(i))||i);return r&&i&&ka(e,n,i),i};let Ht=class extends R{constructor(){super(...arguments),this.open=!1}toggle(){this.dispatchEvent(new CustomEvent("bkdhamburgertoggle",{bubbles:!0,composed:!0}))}render(){const t=this.open?"/icons/close.svg":"/icons/hamburger.svg";return _`
      <button
        class="hamburger"
        aria-expanded=${this.open}
        aria-label=${p("Menü")}
        @click=${this.toggle.bind(this)}
      >
        <img src=${t} alt="" width="32" height="32" />
      </button>
    `}};Ht.styles=[M,O`
      :host {
        display: flex;
      }

      button {
        background: transparent;
        border: none;
        cursor: pointer;
      }
    `];Bi([q()],Ht.prototype,"open",2);Ht=Bi([N("bkd-hamburger"),D()],Ht);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Re=Vt(class extends qt{constructor(t){var e;if(super(t),t.type!==qn.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var r,i;if(this.it===void 0){this.it=new Set,t.strings!==void 0&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!((r=this.st)!=null&&r.has(o))&&this.it.add(o);return this.render(e)}const n=t.element.classList;for(const o of this.it)o in e||(n.remove(o),this.it.delete(o));for(const o in e){const s=!!e[o];s===this.it.has(o)||(i=this.st)!=null&&i.has(o)||(s?(n.add(o),this.it.add(o)):(n.remove(o),this.it.delete(o)))}return ae}});var Aa=Object.defineProperty,Ea=Object.getOwnPropertyDescriptor,Ta=(t,e,n,r)=>{for(var i=r>1?void 0:r?Ea(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(r?s(e,n,i):s(i))||i);return r&&i&&Aa(e,n,i),i};let Mn=class extends R{constructor(){super(),new ee(this,k)}handleLocaleChange(t,e){t.preventDefault(),k.locale=e}render(){return _`<ul>
      ${Zn.map(t=>_`<li>
            <a
              href="#"
              class=${Re({active:t===k.locale})}
              aria-current=${t===k.locale}
              @click=${e=>this.handleLocaleChange(e,t)}
            >
              ${t.slice(0,2)}
            </a>
          </li>`)}
    </ul>`}};Mn.styles=[M,O`
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
    `];Mn=Ta([N("bkd-language-switcher"),D()],Mn);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Se(t,e){if(t!==void 0){let n=0;for(const r of t)yield e(r,n++)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class zn extends qt{constructor(e){if(super(e),this.et=x,e.type!==qn.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===x||e==null)return this.vt=void 0,this.et=e;if(e===ae)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;const n=[e];return n.raw=n,this.vt={_$litType$:this.constructor.resultType,strings:n,values:[]}}}zn.directiveName="unsafeHTML",zn.resultType=1;const de=Vt(zn),Sa=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="m22 15.975-1.775 1.775L12 9.525 3.775 17.75 2 15.975l10-10 10 10Z"/></svg>
`,$a=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M2 8.025 3.775 6.25 12 14.475l8.225-8.225L22 8.025l-10 10-10-10Z"/></svg>
`;function Ki(t){return[{key:"myProfile",label:p("Mein Profil"),href:pe("myProfile")},{key:"mySettings",label:p("Einstellungen"),href:pe("mySettings")},{key:"videos",label:p("Video-Tutorials"),href:t==="de-CH"?"https://www.youtube.com/playlist?list=PLLDtLiOuctbx-_EQWgWqTO1MRbX845OEf":"https://www.youtube.com/playlist?list=PLLDtLiOuctbyEegnquAkaW4u8cm62lFAU",img:"/icons/external-link.svg",external:!0},{key:"logout",label:p("Logout"),href:"#",img:"/icons/logout.svg"}]}var Pa=Object.defineProperty,Ca=Object.getOwnPropertyDescriptor,Wi=(t,e,n,r)=>{for(var i=r>1?void 0:r?Ca(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(r?s(e,n,i):s(i))||i);return r&&i&&Pa(e,n,i),i};let Ft=class extends R{constructor(){super(),this.openGroup=null,this.handleKeyup=t=>{t.key==="Tab"&&this.openGroupOfFocusedItem()},new ee(this,k)}connectedCallback(){super.connectedCallback(),this.openGroupOfCurrentItem(),this.addEventListener("keyup",this.handleKeyup)}disconnectedCallback(){this.removeEventListener("keyup",this.handleKeyup),super.disconnectedCallback()}openGroupOfCurrentItem(){this.openGroup||(this.openGroup=k.navigationGroup)}openGroupOfFocusedItem(){var e,n;const t=(e=this.shadowRoot)==null?void 0:e.activeElement;if(t instanceof HTMLElement){const r=t.dataset.itemKey;if(r){const{group:i}=Xt(I.navigation,r);i&&i.label!==((n=this.openGroup)==null?void 0:n.label)&&(this.openGroup=i)}}}handleGroupClick(t,e){var n;t.preventDefault(),this.openGroup=e.label!==((n=this.openGroup)==null?void 0:n.label)?e:null}handleNavItemClick(t,e){t.preventDefault(),this.dispatchEvent(new CustomEvent("bkdnavitemclick",{detail:{item:e},composed:!0,bubbles:!0}))}handleSettingsItemClick(t,e){this.dispatchEvent(new CustomEvent("bkdsettingsitemclick",{detail:{item:e,event:t},composed:!0,bubbles:!0}))}renderGroup(t){var n;const e=t.label===((n=this.openGroup)==null?void 0:n.label);return _`
      <li
        class=${Re({group:!0,open:e})}
        aria-expanded=${e}
      >
        <button
          class="group-header"
          tabindex="-1"
          @click=${r=>this.handleGroupClick(r,t)}
        >
          <label> ${t.label} </label>
          ${de(e?Sa:$a)}
        </button>
        <ul class="items">
          ${Se(t.items,this.renderNavItem.bind(this))}
        </ul>
      </li>
    `}renderNavItem(t){const e=t.key===k.navigationItemKey;return _`
      <li
        class=${Re({item:!0,active:e})}
      >
        <a
          href=${pe(t)}
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
      ${t.img?_`<img src=${t.img} alt="" width="24" height="24" />`:x}
    </li>`}render(){return _`
      <nav role="navigation" aria-label=${p("Mobile Navigation")}>
        <ul class="nav">
          ${Se(k.navigation,this.renderGroup.bind(this))}
        </ul>
        <div class="service-nav">
          <ul>
            ${Se(Ki(k.locale),this.renderSettingsItem.bind(this))}
          </ul>
          <bkd-language-switcher></bkd-language-switcher>
        </div>
      </nav>
    `}};Ft.styles=[M,O`
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
    `];Wi([We()],Ft.prototype,"openGroup",2);Ft=Wi([N("bkd-mobile-nav"),D()],Ft);var Ra=Object.defineProperty,xa=Object.getOwnPropertyDescriptor,Oa=(t,e,n,r)=>{for(var i=r>1?void 0:r?xa(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(r?s(e,n,i):s(i))||i);return r&&i&&Ra(e,n,i),i};let Un=class extends R{constructor(){super(),new ee(this,k)}renderGroupToggle(t,e){return _`
      <bkd-nav-group-toggle
        .group=${t}
        ?active=${e}
      ></bkd-nav-group-toggle>
    `}render(){return _`<nav role="navigation" aria-label=${p("Hauptnavigation")}>
      ${Se(k.navigation,t=>{var e;return this.renderGroupToggle(t,t.label===((e=k.navigationGroup)==null?void 0:e.label))})}
    </nav>`}};Un.styles=[M,O`
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
    `];Un=Oa([N("bkd-nav"),D()],Un);var Ia=Object.defineProperty,La=Object.getOwnPropertyDescriptor,er=(t,e,n,r)=>{for(var i=r>1?void 0:r?La(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(r?s(e,n,i):s(i))||i);return r&&i&&Ia(e,n,i),i};let pt=class extends R{constructor(){super(),this.open=!1,new ee(this,k)}handleItemClick(t,e){t.preventDefault(),this.dispatchEvent(new CustomEvent("bkdnavitemclick",{detail:{item:e},composed:!0,bubbles:!0}))}renderItem(t){const e=t.key===k.navigationItemKey;return _`
      <li role="presentation" class=${Re({active:e})}>
        <a
          role="menuitem"
          href=${pe(t)}
          @click=${n=>this.handleItemClick(n,t)}
          >${t.label}</a
        >
      </li>
    `}render(){if(!(!this.group||!this.open))return _`
      <ul role="menu">
        ${Se(this.group.items,this.renderItem.bind(this))}
      </ul>
    `}};pt.styles=[M,O`
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
    `];er([q()],pt.prototype,"group",2);er([q()],pt.prototype,"open",2);pt=er([N("bkd-nav-group-dropdown"),D()],pt);var Na=Object.defineProperty,Da=Object.getOwnPropertyDescriptor,yt=(t,e,n,r)=>{for(var i=r>1?void 0:r?Da(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(r?s(e,n,i):s(i))||i);return r&&i&&Na(e,n,i),i};let xe=class extends R{constructor(){super(...arguments),this.dropdown=new vt(this,{queryToggleElement:()=>this.toggleElement??null,queryMenuElement:()=>{var t,e;return((e=(t=this.menuElement)==null?void 0:t.shadowRoot)==null?void 0:e.querySelector('ul[role="menu"]'))??null},queryItems:()=>{var t,e;return((e=(t=this.menuElement)==null?void 0:t.shadowRoot)==null?void 0:e.querySelectorAll("a[role='menuitem']"))??null},queryFocused:()=>{var t,e;return((e=(t=this.menuElement)==null?void 0:t.shadowRoot)==null?void 0:e.activeElement)??null}})}toggle(t){t.preventDefault(),this.dropdown.toggle()}handleItemClick(){this.dropdown.close()}render(){if(this.group)return _`
      <a
        href="#"
        @click=${this.toggle.bind(this)}
        class=${Re({active:!!this.active})}
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
    `}};xe.styles=[M,O`
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
    `];yt([q()],xe.prototype,"group",2);yt([q({type:Boolean})],xe.prototype,"active",2);yt([Q("a")],xe.prototype,"toggleElement",2);yt([Q("bkd-nav-group-dropdown")],xe.prototype,"menuElement",2);xe=yt([N("bkd-nav-group-toggle"),D()],xe);var Ma=Object.defineProperty,za=Object.getOwnPropertyDescriptor,Gi=(t,e,n,r)=>{for(var i=r>1?void 0:r?za(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(r?s(e,n,i):s(i))||i);return r&&i&&Ma(e,n,i),i};let Bt=class extends R{handleClick(t){t.preventDefault()}render(){if(this.item)return _`<a href="#" @click=${this.handleClick.bind(this)}
      >${this.item.label}</a
    >`}};Bt.styles=[M,O``];Gi([q()],Bt.prototype,"item",2);Bt=Gi([N("bkd-nav-item-link"),D()],Bt);var Ua=Object.defineProperty,ja=Object.getOwnPropertyDescriptor,Vi=(t,e,n,r)=>{for(var i=r>1?void 0:r?ja(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(r?s(e,n,i):s(i))||i);return r&&i&&Ua(e,n,i),i};let Kt=class extends R{constructor(){super(...arguments),this.mobileNavOpen=!1}render(){return _`
      <nav role="navigation" aria-label=${p("Servicenavigation")}>
        <bkd-substitutions-toggle></bkd-substitutions-toggle>
        <bkd-notifications-toggle></bkd-notifications-toggle>
        <bkd-user-settings></bkd-user-settings>
        <bkd-language-switcher></bkd-language-switcher>
        <bkd-hamburger .open=${this.mobileNavOpen}></bkd-hamburger>
      </nav>
    `}};Kt.styles=[M,O`
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
    `];Vi([q()],Kt.prototype,"mobileNavOpen",2);Kt=Vi([N("bkd-service-nav"),D()],Kt);var Ha=Object.defineProperty,Fa=Object.getOwnPropertyDescriptor,Qt=(t,e,n,r)=>{for(var i=r>1?void 0:r?Fa(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(r?s(e,n,i):s(i))||i);return r&&i&&Ha(e,n,i),i};let Fe=class extends R{constructor(){super(...arguments),this.availableSubstitutions=[],this.activeSubstitution=null,this.open=!1}get displayedSubstitutions(){return this.availableSubstitutions.filter(t=>!this.activeSubstitution||t.Id===this.activeSubstitution.Id)}handleSubstitutionClick(t,e){t.preventDefault(),this.dispatchEvent(new CustomEvent("bkdsubstitutionstart",{detail:{substitution:e},composed:!0,bubbles:!0}))}handleStopClick(){this.dispatchEvent(new CustomEvent("bkdsubstitutionstop",{composed:!0,bubbles:!0}))}handleCloseClick(){this.dispatchEvent(new CustomEvent("bkdclose"))}renderSubstitution(t){var n;const e=t.Id===((n=this.activeSubstitution)==null?void 0:n.Id);return _`
      <li role="presentation" class=${Re({active:e})}>
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
            <img src="icons/close.svg" alt=${p("Schliessen")} />
          </button>
          <div class="dropdown-menu-heading">
            ${p("Stellvertretung ausüben")}
          </div>
        </li>
        ${Se(this.displayedSubstitutions,this.renderSubstitution.bind(this))}
        ${Ee(this.activeSubstitution,()=>_`<li role="presentation" class="dropdown-menu-stop">
              <button role="menuitem" @click=${this.handleStopClick.bind(this)}>
                ${p("Stellvertretung beenden")}
              </button>
            </li>`)}
      </ul>
    `}};Fe.styles=[M,O`
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
    `];Qt([q()],Fe.prototype,"availableSubstitutions",2);Qt([q()],Fe.prototype,"activeSubstitution",2);Qt([q()],Fe.prototype,"open",2);Fe=Qt([N("bkd-substitutions-dropdown"),D()],Fe);const Ba=`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="7.4" fill="none"><path fill="currentColor" d="m6 7.4-6-6L1.4 0 6 4.6 10.6 0 12 1.4Z"/></svg>
`,Ka=`<svg xmlns="http://www.w3.org/2000/svg" width="11.414" height="11.414" fill="none"><path stroke="currentColor" stroke-width="2" d="m.707.707 10 10m-10 0 10-10"/></svg>
`,Wa=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M2 20v-2.8a3 3 0 0 1 .425-1.563A2.794 2.794 0 0 1 3.6 14.55c1-.5 2.038-.883 3.113-1.15 1.074-.267 2.17-.4 3.287-.4.417 0 .833.03 1.25.088.417.058.833.129 1.25.212v1.575c-.75.367-1.354.85-1.813 1.45-.458.6-.687 1.383-.687 2.35V20H2Zm10 0v-1.4c0-.4.104-.77.313-1.113a1.76 1.76 0 0 1 .887-.737c.6-.25 1.22-.438 1.863-.563a10.11 10.11 0 0 1 3.874 0 9.604 9.604 0 0 1 1.863.563c.383.15.68.396.887.738.209.341.313.712.313 1.112V20H12Zm5-5c-.7 0-1.292-.242-1.775-.725-.483-.483-.725-1.075-.725-1.775s.242-1.292.725-1.775C15.708 10.242 16.3 10 17 10s1.292.242 1.775.725c.483.483.725 1.075.725 1.775s-.242 1.292-.725 1.775C18.292 14.758 17.7 15 17 15Zm-7-3c-1.1 0-2.042-.392-2.825-1.175C6.392 10.042 6 9.1 6 8s.392-2.042 1.175-2.825C7.958 4.392 8.9 4 10 4s2.042.392 2.825 1.175C13.608 5.958 14 6.9 14 8s-.392 2.042-1.175 2.825C12.042 11.608 11.1 12 10 12Z"/></svg>
`;function Ga(t,e,n){const r=document.createElement("form");r.method=t,r.style.visibility="hidden",r.action=e,Object.keys(n).forEach(i=>{const o=document.createElement("input");o.type="hidden",o.name=i,o.value=n[i],r.appendChild(o)}),document.body.appendChild(r),r.submit()}var Va=Object.defineProperty,qa=Object.getOwnPropertyDescriptor,wt=(t,e,n,r)=>{for(var i=r>1?void 0:r?qa(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(r?s(e,n,i):s(i))||i);return r&&i&&Va(e,n,i),i};let Oe=class extends R{constructor(){super(...arguments),this.availableSubstitutions=[],this.activeSubstitution=null,this.dropdown=new vt(this,{queryToggleElement:()=>this.toggleElement??null,queryMenuElement:()=>{var t;return((t=this.menuElement)==null?void 0:t.shadowRoot)??null},tabInside:!this.isLargeScreen(),queryItems:()=>{var t,e;return((e=(t=this.menuElement)==null?void 0:t.shadowRoot)==null?void 0:e.querySelectorAll("a[role='menuitem']"))??null},queryFocused:()=>{var t,e;return((e=(t=this.menuElement)==null?void 0:t.shadowRoot)==null?void 0:e.activeElement)??null}})}connectedCallback(){super.connectedCallback(),this.fetch()}async fetch(){const t=await xo();this.availableSubstitutions=t.filter(n=>this.isNotInFuture(n)).sort((n,r)=>n.Holder.localeCompare(r.Holder));const e=this.getActiveSubstitutionId();this.activeSubstitution=this.availableSubstitutions.find(n=>n.Id===e)??null}isNotInFuture(t){return!!t.DateFrom&&new Date(t.DateFrom)<=new Date}getActiveSubstitutionId(){var t;return((t=P.accessTokenPayload)==null?void 0:t.substitutionId)??null}toggle(t){t.preventDefault(),this.activeSubstitution&&this.isLargeScreen()?this.stopSubstitution():this.dropdown.toggle()}isLargeScreen(){return window.innerWidth>1200}startSubstitution(t){this.activeSubstitution||this.redirect(t,"start")}stopSubstitution(){this.activeSubstitution&&this.redirect(this.activeSubstitution,"stop")}redirect(t,e){const{oAuthServer:n,oAuthPrefix:r}=Yt(),i=`${n}/${r}/Authorization/Substitutions/${t.Id}/${e}`;Ga("POST",i,{access_token:P.accessToken??"",redirect_uri:pe("home")})}handleSubstitutionStart(t){this.dropdown.close(),this.startSubstitution(t.detail.substitution)}handleSubstitutionStop(){this.dropdown.close(),this.stopSubstitution()}getLabel(){var t;return((t=this.activeSubstitution)==null?void 0:t.Holder)||p("Stellvertretung ausüben")}render(){if(this.availableSubstitutions.length!==0)return _`
      <button
        class=${Re({active:!!this.activeSubstitution,open:this.dropdown.open})}
        @click=${this.toggle.bind(this)}
        aria-label=${this.getLabel()}
        aria-expanded=${this.dropdown.open}
        aria-haspopup="menu"
      >
        <div class="icon">${de(Wa)}</div>
        <div class="label">${this.getLabel()}</div>
        <div class="icon-caret">
          ${de(this.activeSubstitution?Ka:Ba)}
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
    `}};Oe.styles=[M,O`
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
    `];wt([Q("button")],Oe.prototype,"toggleElement",2);wt([Q("bkd-substitutions-dropdown")],Oe.prototype,"menuElement",2);wt([We()],Oe.prototype,"availableSubstitutions",2);wt([We()],Oe.prototype,"activeSubstitution",2);Oe=wt([N("bkd-substitutions-toggle"),D()],Oe);const Ya='<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path fill="currentColor" d="M16 2a2.25 2.25 0 0 0-2.25 2.25v1.043C9.87 6.293 7 9.807 7 14v7.5h18V14c0-4.193-2.87-7.707-6.75-8.707V4.25A2.25 2.25 0 0 0 16 2M4 24.5v3h9.404A3 3 0 1 0 19 29a3 3 0 0 0-.407-1.5H28v-3z"/></svg>';var Xa=Object.defineProperty,Za=Object.getOwnPropertyDescriptor,kt=(t,e,n,r)=>{for(var i=r>1?void 0:r?Za(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(r?s(e,n,i):s(i))||i);return r&&i&&Xa(e,n,i),i};const tt=Yt();typeof(tt==null?void 0:tt.notificationRefreshTime)!="number"&&(tt.notificationRefreshTime=30);var Ot=(t=>(t.PENDING="pending",t.ERROR="error",t.SUCCESS="success",t))(Ot||{});let Ie=class extends R{constructor(){super(...arguments),this.state="pending",this.dropdown=new vt(this,{queryToggleElement:()=>this.toggleElement??null,queryMenuElement:()=>{var t;return((t=this.dropdownElement)==null?void 0:t.shadowRoot)??null},queryItems:()=>{var t,e;return((e=(t=this.dropdownElement)==null?void 0:t.shadowRoot)==null?void 0:e.querySelectorAll("button"))??null},queryFocused:()=>{var t,e;return((e=(t=this.dropdownElement)==null?void 0:t.shadowRoot)==null?void 0:e.activeElement)??null}})}connectedCallback(){super.connectedCallback(),this.fetch(),this.interval=setInterval(()=>this.fetch(),tt.notificationRefreshTime*1e3)}disconnectedCallback(){clearInterval(this.interval),super.disconnectedCallback()}handleDeleteAllNotifications(){const t=[];Qr(t),this.notifications=t}handleDeleteNotification(t){if(!this.notifications)return;const e=this.notifications.filter(n=>n.id!==t.detail.id);Qr(e),this.notifications=e}async fetch(){try{this.notifications=await Oo(),this.state="success"}catch{this.state="error"}}render(){var t,e;return _` <button
        id="notifications-toggle"
        type="button"
        aria-label="${p("Benachrichtigungen")}"
        aria-expanded=${this.dropdown.open}
        @click="${()=>this.dropdown.toggle()}"
      >
        ${de(Ya)}
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
      </bkd-notifications-dropdown>`}};Ie.styles=[M,O`
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
    `];kt([Q("button")],Ie.prototype,"toggleElement",2);kt([Q("bkd-notifications-dropdown")],Ie.prototype,"dropdownElement",2);kt([We()],Ie.prototype,"notifications",2);kt([We()],Ie.prototype,"state",2);Ie=kt([N("bkd-notifications-toggle"),D()],Ie);const Qa='<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" preserveAspectRatio="xMidYMid" style="margin:auto;background:#fff 0 0;display:block;shape-rendering:auto" viewBox="0 0 100 100"><g transform="translate(82 50)"><circle r="6"><animateTransform attributeName="transform" begin="-0.8571428571428571s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.8571428571428571s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(51.429 -42.913 110.137)"><circle r="6" fill-opacity=".857"><animateTransform attributeName="transform" begin="-0.7142857142857143s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.7142857142857143s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(102.857 -10.937 57.696)"><circle r="6" fill-opacity=".714"><animateTransform attributeName="transform" begin="-0.5714285714285714s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.5714285714285714s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(154.286 3.294 34.358)"><circle r="6" fill-opacity=".571"><animateTransform attributeName="transform" begin="-0.42857142857142855s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.42857142857142855s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(-154.286 14.706 15.642)"><circle r="6" fill-opacity=".429"><animateTransform attributeName="transform" begin="-0.2857142857142857s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.2857142857142857s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(-102.857 28.937 -7.696)"><circle r="6" fill-opacity=".286"><animateTransform attributeName="transform" begin="-0.14285714285714285s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.14285714285714285s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(-51.429 60.913 -60.137)"><circle r="6" fill-opacity=".143"><animateTransform attributeName="transform" begin="0s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="0s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g></svg>',Ja='<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path fill="currentColor" d="m13 3-1.333 1.333H5V7h21.333V4.333h-6.666L18.333 3zM6.333 9.667V27c0 1.467 1.2 2.667 2.667 2.667h13.333C23.8 29.667 25 28.467 25 27V9.667z"/></svg>';/*! @license DOMPurify 3.0.8 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.8/LICENSE */const{entries:qi,setPrototypeOf:ni,isFrozen:el,getPrototypeOf:tl,getOwnPropertyDescriptor:tr}=Object;let{freeze:W,seal:Z,create:Yi}=Object,{apply:jn,construct:Hn}=typeof Reflect<"u"&&Reflect;W||(W=function(e){return e});Z||(Z=function(e){return e});jn||(jn=function(e,n,r){return e.apply(n,r)});Hn||(Hn=function(e,n){return new e(...n)});const Pt=X(Array.prototype.forEach),ri=X(Array.prototype.pop),Qe=X(Array.prototype.push),It=X(String.prototype.toLowerCase),An=X(String.prototype.toString),nl=X(String.prototype.match),Je=X(String.prototype.replace),rl=X(String.prototype.indexOf),il=X(String.prototype.trim),Y=X(RegExp.prototype.test),et=sl(TypeError);function X(t){return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return jn(t,e,r)}}function sl(t){return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return Hn(t,n)}}function E(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:It;ni&&ni(t,null);let r=e.length;for(;r--;){let i=e[r];if(typeof i=="string"){const o=n(i);o!==i&&(el(e)||(e[r]=o),i=o)}t[i]=!0}return t}function ol(t){for(let e=0;e<t.length;e++)tr(t,e)===void 0&&(t[e]=null);return t}function _e(t){const e=Yi(null);for(const[n,r]of qi(t))tr(t,n)!==void 0&&(Array.isArray(r)?e[n]=ol(r):r&&typeof r=="object"&&r.constructor===Object?e[n]=_e(r):e[n]=r);return e}function Ct(t,e){for(;t!==null;){const r=tr(t,e);if(r){if(r.get)return X(r.get);if(typeof r.value=="function")return X(r.value)}t=tl(t)}function n(r){return console.warn("fallback value for",r),null}return n}const ii=W(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),En=W(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Tn=W(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),al=W(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Sn=W(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),ll=W(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),si=W(["#text"]),oi=W(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),$n=W(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),ai=W(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Rt=W(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),cl=Z(/\{\{[\w\W]*|[\w\W]*\}\}/gm),dl=Z(/<%[\w\W]*|[\w\W]*%>/gm),ul=Z(/\${[\w\W]*}/gm),hl=Z(/^data-[\-\w.\u00B7-\uFFFF]/),pl=Z(/^aria-[\-\w]+$/),Xi=Z(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),fl=Z(/^(?:\w+script|data):/i),gl=Z(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Zi=Z(/^html$/i);var li=Object.freeze({__proto__:null,MUSTACHE_EXPR:cl,ERB_EXPR:dl,TMPLIT_EXPR:ul,DATA_ATTR:hl,ARIA_ATTR:pl,IS_ALLOWED_URI:Xi,IS_SCRIPT_OR_DATA:fl,ATTR_WHITESPACE:gl,DOCTYPE_NAME:Zi});const ml=function(){return typeof window>"u"?null:window},bl=function(e,n){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let r=null;const i="data-tt-policy-suffix";n&&n.hasAttribute(i)&&(r=n.getAttribute(i));const o="dompurify"+(r?"#"+r:"");try{return e.createPolicy(o,{createHTML(s){return s},createScriptURL(s){return s}})}catch{return console.warn("TrustedTypes policy "+o+" could not be created."),null}};function Qi(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ml();const e=w=>Qi(w);if(e.version="3.0.8",e.removed=[],!t||!t.document||t.document.nodeType!==9)return e.isSupported=!1,e;let{document:n}=t;const r=n,i=r.currentScript,{DocumentFragment:o,HTMLTemplateElement:s,Node:c,Element:l,NodeFilter:d,NamedNodeMap:g=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:u,DOMParser:m,trustedTypes:h}=t,v=l.prototype,b=Ct(v,"cloneNode"),A=Ct(v,"nextSibling"),T=Ct(v,"childNodes"),S=Ct(v,"parentNode");if(typeof s=="function"){const w=n.createElement("template");w.content&&w.content.ownerDocument&&(n=w.content.ownerDocument)}let $,K="";const{implementation:fe,createNodeIterator:as,createDocumentFragment:ls,getElementsByTagName:cs}=n,{importNode:ds}=r;let J={};e.isSupported=typeof qi=="function"&&typeof S=="function"&&fe&&fe.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:en,ERB_EXPR:tn,TMPLIT_EXPR:nn,DATA_ATTR:us,ARIA_ATTR:hs,IS_SCRIPT_OR_DATA:ps,ATTR_WHITESPACE:ar}=li;let{IS_ALLOWED_URI:lr}=li,z=null;const cr=E({},[...ii,...En,...Tn,...Sn,...si]);let U=null;const dr=E({},[...oi,...$n,...ai,...Rt]);let L=Object.seal(Yi(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Ge=null,rn=null,ur=!0,sn=!0,hr=!1,pr=!0,Le=!1,ge=!1,on=!1,an=!1,Ne=!1,At=!1,Et=!1,fr=!0,gr=!1;const fs="user-content-";let ln=!0,Ve=!1,De={},Me=null;const mr=E({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let br=null;const vr=E({},["audio","video","img","source","image","track"]);let cn=null;const yr=E({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Tt="http://www.w3.org/1998/Math/MathML",St="http://www.w3.org/2000/svg",ne="http://www.w3.org/1999/xhtml";let ze=ne,dn=!1,un=null;const gs=E({},[Tt,St,ne],An);let qe=null;const ms=["application/xhtml+xml","text/html"],bs="text/html";let j=null,Ue=null;const vs=n.createElement("form"),wr=function(a){return a instanceof RegExp||a instanceof Function},hn=function(){let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Ue&&Ue===a)){if((!a||typeof a!="object")&&(a={}),a=_e(a),qe=ms.indexOf(a.PARSER_MEDIA_TYPE)===-1?bs:a.PARSER_MEDIA_TYPE,j=qe==="application/xhtml+xml"?An:It,z="ALLOWED_TAGS"in a?E({},a.ALLOWED_TAGS,j):cr,U="ALLOWED_ATTR"in a?E({},a.ALLOWED_ATTR,j):dr,un="ALLOWED_NAMESPACES"in a?E({},a.ALLOWED_NAMESPACES,An):gs,cn="ADD_URI_SAFE_ATTR"in a?E(_e(yr),a.ADD_URI_SAFE_ATTR,j):yr,br="ADD_DATA_URI_TAGS"in a?E(_e(vr),a.ADD_DATA_URI_TAGS,j):vr,Me="FORBID_CONTENTS"in a?E({},a.FORBID_CONTENTS,j):mr,Ge="FORBID_TAGS"in a?E({},a.FORBID_TAGS,j):{},rn="FORBID_ATTR"in a?E({},a.FORBID_ATTR,j):{},De="USE_PROFILES"in a?a.USE_PROFILES:!1,ur=a.ALLOW_ARIA_ATTR!==!1,sn=a.ALLOW_DATA_ATTR!==!1,hr=a.ALLOW_UNKNOWN_PROTOCOLS||!1,pr=a.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Le=a.SAFE_FOR_TEMPLATES||!1,ge=a.WHOLE_DOCUMENT||!1,Ne=a.RETURN_DOM||!1,At=a.RETURN_DOM_FRAGMENT||!1,Et=a.RETURN_TRUSTED_TYPE||!1,an=a.FORCE_BODY||!1,fr=a.SANITIZE_DOM!==!1,gr=a.SANITIZE_NAMED_PROPS||!1,ln=a.KEEP_CONTENT!==!1,Ve=a.IN_PLACE||!1,lr=a.ALLOWED_URI_REGEXP||Xi,ze=a.NAMESPACE||ne,L=a.CUSTOM_ELEMENT_HANDLING||{},a.CUSTOM_ELEMENT_HANDLING&&wr(a.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(L.tagNameCheck=a.CUSTOM_ELEMENT_HANDLING.tagNameCheck),a.CUSTOM_ELEMENT_HANDLING&&wr(a.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(L.attributeNameCheck=a.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),a.CUSTOM_ELEMENT_HANDLING&&typeof a.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(L.allowCustomizedBuiltInElements=a.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Le&&(sn=!1),At&&(Ne=!0),De&&(z=E({},si),U=[],De.html===!0&&(E(z,ii),E(U,oi)),De.svg===!0&&(E(z,En),E(U,$n),E(U,Rt)),De.svgFilters===!0&&(E(z,Tn),E(U,$n),E(U,Rt)),De.mathMl===!0&&(E(z,Sn),E(U,ai),E(U,Rt))),a.ADD_TAGS&&(z===cr&&(z=_e(z)),E(z,a.ADD_TAGS,j)),a.ADD_ATTR&&(U===dr&&(U=_e(U)),E(U,a.ADD_ATTR,j)),a.ADD_URI_SAFE_ATTR&&E(cn,a.ADD_URI_SAFE_ATTR,j),a.FORBID_CONTENTS&&(Me===mr&&(Me=_e(Me)),E(Me,a.FORBID_CONTENTS,j)),ln&&(z["#text"]=!0),ge&&E(z,["html","head","body"]),z.table&&(E(z,["tbody"]),delete Ge.tbody),a.TRUSTED_TYPES_POLICY){if(typeof a.TRUSTED_TYPES_POLICY.createHTML!="function")throw et('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof a.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw et('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');$=a.TRUSTED_TYPES_POLICY,K=$.createHTML("")}else $===void 0&&($=bl(h,i)),$!==null&&typeof K=="string"&&(K=$.createHTML(""));W&&W(a),Ue=a}},kr=E({},["mi","mo","mn","ms","mtext"]),_r=E({},["foreignobject","desc","title","annotation-xml"]),ys=E({},["title","style","font","a","script"]),Ar=E({},[...En,...Tn,...al]),Er=E({},[...Sn,...ll]),ws=function(a){let f=S(a);(!f||!f.tagName)&&(f={namespaceURI:ze,tagName:"template"});const y=It(a.tagName),C=It(f.tagName);return un[a.namespaceURI]?a.namespaceURI===St?f.namespaceURI===ne?y==="svg":f.namespaceURI===Tt?y==="svg"&&(C==="annotation-xml"||kr[C]):!!Ar[y]:a.namespaceURI===Tt?f.namespaceURI===ne?y==="math":f.namespaceURI===St?y==="math"&&_r[C]:!!Er[y]:a.namespaceURI===ne?f.namespaceURI===St&&!_r[C]||f.namespaceURI===Tt&&!kr[C]?!1:!Er[y]&&(ys[y]||!Ar[y]):!!(qe==="application/xhtml+xml"&&un[a.namespaceURI]):!1},me=function(a){Qe(e.removed,{element:a});try{a.parentNode.removeChild(a)}catch{a.remove()}},pn=function(a,f){try{Qe(e.removed,{attribute:f.getAttributeNode(a),from:f})}catch{Qe(e.removed,{attribute:null,from:f})}if(f.removeAttribute(a),a==="is"&&!U[a])if(Ne||At)try{me(f)}catch{}else try{f.setAttribute(a,"")}catch{}},Tr=function(a){let f=null,y=null;if(an)a="<remove></remove>"+a;else{const F=nl(a,/^[\r\n\t ]+/);y=F&&F[0]}qe==="application/xhtml+xml"&&ze===ne&&(a='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+a+"</body></html>");const C=$?$.createHTML(a):a;if(ze===ne)try{f=new m().parseFromString(C,qe)}catch{}if(!f||!f.documentElement){f=fe.createDocument(ze,"template",null);try{f.documentElement.innerHTML=dn?K:C}catch{}}const H=f.body||f.documentElement;return a&&y&&H.insertBefore(n.createTextNode(y),H.childNodes[0]||null),ze===ne?cs.call(f,ge?"html":"body")[0]:ge?f.documentElement:H},Sr=function(a){return as.call(a.ownerDocument||a,a,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT,null)},ks=function(a){return a instanceof u&&(typeof a.nodeName!="string"||typeof a.textContent!="string"||typeof a.removeChild!="function"||!(a.attributes instanceof g)||typeof a.removeAttribute!="function"||typeof a.setAttribute!="function"||typeof a.namespaceURI!="string"||typeof a.insertBefore!="function"||typeof a.hasChildNodes!="function")},$r=function(a){return typeof c=="function"&&a instanceof c},re=function(a,f,y){J[a]&&Pt(J[a],C=>{C.call(e,f,y,Ue)})},Pr=function(a){let f=null;if(re("beforeSanitizeElements",a,null),ks(a))return me(a),!0;const y=j(a.nodeName);if(re("uponSanitizeElement",a,{tagName:y,allowedTags:z}),a.hasChildNodes()&&!$r(a.firstElementChild)&&Y(/<[/\w]/g,a.innerHTML)&&Y(/<[/\w]/g,a.textContent))return me(a),!0;if(!z[y]||Ge[y]){if(!Ge[y]&&Rr(y)&&(L.tagNameCheck instanceof RegExp&&Y(L.tagNameCheck,y)||L.tagNameCheck instanceof Function&&L.tagNameCheck(y)))return!1;if(ln&&!Me[y]){const C=S(a)||a.parentNode,H=T(a)||a.childNodes;if(H&&C){const F=H.length;for(let G=F-1;G>=0;--G)C.insertBefore(b(H[G],!0),A(a))}}return me(a),!0}return a instanceof l&&!ws(a)||(y==="noscript"||y==="noembed"||y==="noframes")&&Y(/<\/no(script|embed|frames)/i,a.innerHTML)?(me(a),!0):(Le&&a.nodeType===3&&(f=a.textContent,Pt([en,tn,nn],C=>{f=Je(f,C," ")}),a.textContent!==f&&(Qe(e.removed,{element:a.cloneNode()}),a.textContent=f)),re("afterSanitizeElements",a,null),!1)},Cr=function(a,f,y){if(fr&&(f==="id"||f==="name")&&(y in n||y in vs))return!1;if(!(sn&&!rn[f]&&Y(us,f))){if(!(ur&&Y(hs,f))){if(!U[f]||rn[f]){if(!(Rr(a)&&(L.tagNameCheck instanceof RegExp&&Y(L.tagNameCheck,a)||L.tagNameCheck instanceof Function&&L.tagNameCheck(a))&&(L.attributeNameCheck instanceof RegExp&&Y(L.attributeNameCheck,f)||L.attributeNameCheck instanceof Function&&L.attributeNameCheck(f))||f==="is"&&L.allowCustomizedBuiltInElements&&(L.tagNameCheck instanceof RegExp&&Y(L.tagNameCheck,y)||L.tagNameCheck instanceof Function&&L.tagNameCheck(y))))return!1}else if(!cn[f]){if(!Y(lr,Je(y,ar,""))){if(!((f==="src"||f==="xlink:href"||f==="href")&&a!=="script"&&rl(y,"data:")===0&&br[a])){if(!(hr&&!Y(ps,Je(y,ar,"")))){if(y)return!1}}}}}}return!0},Rr=function(a){return a.indexOf("-")>0},xr=function(a){re("beforeSanitizeAttributes",a,null);const{attributes:f}=a;if(!f)return;const y={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:U};let C=f.length;for(;C--;){const H=f[C],{name:F,namespaceURI:G,value:be}=H,Ye=j(F);let V=F==="value"?be:il(be);if(y.attrName=Ye,y.attrValue=V,y.keepAttr=!0,y.forceKeepAttr=void 0,re("uponSanitizeAttribute",a,y),V=y.attrValue,y.forceKeepAttr||(pn(F,a),!y.keepAttr))continue;if(!pr&&Y(/\/>/i,V)){pn(F,a);continue}Le&&Pt([en,tn,nn],Ir=>{V=Je(V,Ir," ")});const Or=j(a.nodeName);if(Cr(Or,Ye,V)){if(gr&&(Ye==="id"||Ye==="name")&&(pn(F,a),V=fs+V),$&&typeof h=="object"&&typeof h.getAttributeType=="function"&&!G)switch(h.getAttributeType(Or,Ye)){case"TrustedHTML":{V=$.createHTML(V);break}case"TrustedScriptURL":{V=$.createScriptURL(V);break}}try{G?a.setAttributeNS(G,F,V):a.setAttribute(F,V),ri(e.removed)}catch{}}}re("afterSanitizeAttributes",a,null)},_s=function w(a){let f=null;const y=Sr(a);for(re("beforeSanitizeShadowDOM",a,null);f=y.nextNode();)re("uponSanitizeShadowNode",f,null),!Pr(f)&&(f.content instanceof o&&w(f.content),xr(f));re("afterSanitizeShadowDOM",a,null)};return e.sanitize=function(w){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},f=null,y=null,C=null,H=null;if(dn=!w,dn&&(w="<!-->"),typeof w!="string"&&!$r(w))if(typeof w.toString=="function"){if(w=w.toString(),typeof w!="string")throw et("dirty is not a string, aborting")}else throw et("toString is not a function");if(!e.isSupported)return w;if(on||hn(a),e.removed=[],typeof w=="string"&&(Ve=!1),Ve){if(w.nodeName){const be=j(w.nodeName);if(!z[be]||Ge[be])throw et("root node is forbidden and cannot be sanitized in-place")}}else if(w instanceof c)f=Tr("<!---->"),y=f.ownerDocument.importNode(w,!0),y.nodeType===1&&y.nodeName==="BODY"||y.nodeName==="HTML"?f=y:f.appendChild(y);else{if(!Ne&&!Le&&!ge&&w.indexOf("<")===-1)return $&&Et?$.createHTML(w):w;if(f=Tr(w),!f)return Ne?null:Et?K:""}f&&an&&me(f.firstChild);const F=Sr(Ve?w:f);for(;C=F.nextNode();)Pr(C)||(C.content instanceof o&&_s(C.content),xr(C));if(Ve)return w;if(Ne){if(At)for(H=ls.call(f.ownerDocument);f.firstChild;)H.appendChild(f.firstChild);else H=f;return(U.shadowroot||U.shadowrootmode)&&(H=ds.call(r,H,!0)),H}let G=ge?f.outerHTML:f.innerHTML;return ge&&z["!doctype"]&&f.ownerDocument&&f.ownerDocument.doctype&&f.ownerDocument.doctype.name&&Y(Zi,f.ownerDocument.doctype.name)&&(G="<!DOCTYPE "+f.ownerDocument.doctype.name+`>
`+G),Le&&Pt([en,tn,nn],be=>{G=Je(G,be," ")}),$&&Et?$.createHTML(G):G},e.setConfig=function(){let w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};hn(w),on=!0},e.clearConfig=function(){Ue=null,on=!1},e.isValidAttribute=function(w,a,f){Ue||hn({});const y=j(w),C=j(a);return Cr(y,C,f)},e.addHook=function(w,a){typeof a=="function"&&(J[w]=J[w]||[],Qe(J[w],a))},e.removeHook=function(w){if(J[w])return ri(J[w])},e.removeHooks=function(w){J[w]&&(J[w]=[])},e.removeAllHooks=function(){J={}},e}var vl=Qi();const yl={ALLOWED_TAGS:["br","div","span","a","ul","ol","li","sup","sub","code","cite"],ALLOWED_ATTR:["style","href"]};function ci(t){return vl.sanitize(t,yl)}var wl=Object.defineProperty,kl=Object.getOwnPropertyDescriptor,Jt=(t,e,n,r)=>{for(var i=r>1?void 0:r?kl(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(r?s(e,n,i):s(i))||i);return r&&i&&wl(e,n,i),i};let Be=class extends R{constructor(){super(...arguments),this.open=!1,this.state=Ot.PENDING,this.notifications=[]}handleDeleteAllNotifications(){this.dispatchEvent(new CustomEvent("bkddeleteallnotifications",{bubbles:!0,composed:!0}))}handleDeleteNotification(t){this.dispatchEvent(new CustomEvent("bkddeletenotification",{bubbles:!0,composed:!0,detail:{id:t}}))}renderContent(){return this.state===Ot.ERROR?_`<div class="error">
        ${p("Fehler beim Laden der Benachrichtigungen")}
      </div>`:this.state===Ot.PENDING?_`<div class="pending">${de(Qa)}</div>`:this.notifications.length===0?_`<div class="notification">${p("Keine Benachrichtigungen")}</div>`:Fi(this.notifications,t=>t.id,t=>this.renderNotification(t))}renderNotification(t){const e=ci(t.subject),n=ci(t.body);return _`<div class="notification">
      <div class="text">
        <div class="subject">${de(e)}</div>
        <div class="body">${de(n)}</div>
      </div>
      <button
        type="button"
        aria-label="${p("Benachrichtigung löschen")}"
        @click=${()=>this.handleDeleteNotification(t.id)}
      >
        ${de(Ja)}
      </button>
    </div> `}render(){if(this.open)return _`<div id="notifications-dropdown">
      <div class="header">
        <h2>${p("Benachrichtigungen")}</h2>
        <button
          type="button"
          ?disabled=${!this.notifications||this.notifications.length===0}
          @click="${()=>this.handleDeleteAllNotifications()}"
        >
          ${p("Alle löschen")}
        </button>
      </div>
      <div class="content">${this.renderContent()}</div>
    </div>`}};Be.styles=[M,O`
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
    `];Jt([q()],Be.prototype,"open",2);Jt([q()],Be.prototype,"state",2);Jt([q()],Be.prototype,"notifications",2);Be=Jt([N("bkd-notifications-dropdown"),D()],Be);var _l=Object.defineProperty,Al=Object.getOwnPropertyDescriptor,nr=(t,e,n,r)=>{for(var i=r>1?void 0:r?Al(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(r?s(e,n,i):s(i))||i);return r&&i&&_l(e,n,i),i};let ft=class extends R{constructor(){super(),this.dropdown=new vt(this,{queryToggleElement:()=>this.toggleElement??null,queryMenuElement:()=>this.menuElement??null,queryItems:()=>{var t;return((t=this.shadowRoot)==null?void 0:t.querySelectorAll("a[role='menuitem']"))??null},queryFocused:()=>{var t;return((t=this.shadowRoot)==null?void 0:t.activeElement)??null}}),new ee(this,k)}handleSettingsItemClick(t,e){this.dropdown.close(),this.dispatchEvent(new CustomEvent("bkdsettingsitemclick",{detail:{item:e,event:t},composed:!0,bubbles:!0}))}renderSettingsItem(t){return _`<li role="presentation">
      <a
        role="menuitem"
        href=${t.href}
        target=${t.external?"_blank":"_self"}
        @click=${e=>this.handleSettingsItemClick(e,t)}
      >
        ${t.label}</a
      >
      ${t.img?_`<img src=${t.img} alt="" width="24" height="24" />`:x}
    </li>`}render(){return _`
      <button
        type="button"
        @click=${()=>this.dropdown.toggle()}
        aria-label=${p("Menü Benutzereinstellungen")}
        aria-expanded=${this.dropdown.open}
        aria-haspopup="menu"
      >
        <img src="/icons/settings.svg" alt="" width="32" height="32" />
      </button>
      <ul role="menu" ?hidden=${!this.dropdown.open}>
        ${Se(Ki(k.locale),this.renderSettingsItem.bind(this))}
      </ul>
    `}};ft.styles=[M,O`
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
    `];nr([Q("button")],ft.prototype,"toggleElement",2);nr([Q('ul[role="menu"]')],ft.prototype,"menuElement",2);ft=nr([N("bkd-user-settings"),D()],ft);function El(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var Ji={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(self,()=>(()=>{var n={934:(s,c,l)=>{Object.defineProperty(c,"__esModule",{value:!0}),c.generateQueryString=c.OAuth2Client=void 0;const d=l(443),g=l(618);function u(h,v){return new URL(h,v).toString()}function m(h){return new URLSearchParams(Object.fromEntries(Object.entries(h).filter(([v,b])=>b!==void 0))).toString()}c.OAuth2Client=class{constructor(h){this.discoveryDone=!1,this.serverMetadata=null,h!=null&&h.fetch||(h.fetch=fetch.bind(globalThis)),this.settings=h}async refreshToken(h){if(!h.refreshToken)throw new Error("This token didn't have a refreshToken. It's not possible to refresh this");const v={grant_type:"refresh_token",refresh_token:h.refreshToken};return this.settings.clientSecret||(v.client_id=this.settings.clientId),this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",v))}async clientCredentials(h){var v;const b=["client_id","client_secret","grant_type","scope"];if(h!=null&&h.extraParams&&Object.keys(h.extraParams).filter(T=>b.includes(T)).length>0)throw new Error(`The following extraParams are disallowed: '${b.join("', '")}'`);const A={grant_type:"client_credentials",scope:(v=h==null?void 0:h.scope)===null||v===void 0?void 0:v.join(" "),...h==null?void 0:h.extraParams};if(!this.settings.clientSecret)throw new Error("A clientSecret must be provided to use client_credentials");return this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",A))}async password(h){var v;const b={grant_type:"password",...h,scope:(v=h.scope)===null||v===void 0?void 0:v.join(" ")};return this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",b))}get authorizationCode(){return new g.OAuth2AuthorizationCodeClient(this)}async introspect(h){const v={token:h.accessToken,token_type_hint:"access_token"};return this.request("introspectionEndpoint",v)}async getEndpoint(h){if(this.settings[h]!==void 0)return u(this.settings[h],this.settings.server);if(h!=="discoveryEndpoint"&&(await this.discover(),this.settings[h]!==void 0))return u(this.settings[h],this.settings.server);if(!this.settings.server)throw new Error(`Could not determine the location of ${h}. Either specify ${h} in the settings, or the "server" endpoint to let the client discover it.`);switch(h){case"authorizationEndpoint":return u("/authorize",this.settings.server);case"tokenEndpoint":return u("/token",this.settings.server);case"discoveryEndpoint":return u("/.well-known/oauth-authorization-server",this.settings.server);case"introspectionEndpoint":return u("/introspect",this.settings.server)}}async discover(){var h;if(this.discoveryDone)return;let v;this.discoveryDone=!0;try{v=await this.getEndpoint("discoveryEndpoint")}catch{return void console.warn('[oauth2] OAuth2 discovery endpoint could not be determined. Either specify the "server" or "discoveryEndpoint')}const b=await this.settings.fetch(v,{headers:{Accept:"application/json"}});if(!b.ok)return;if(!(!((h=b.headers.get("Content-Type"))===null||h===void 0)&&h.startsWith("application/json")))return void console.warn("[oauth2] OAuth2 discovery endpoint was not a JSON response. Response is ignored");this.serverMetadata=await b.json();const A=[["authorization_endpoint","authorizationEndpoint"],["token_endpoint","tokenEndpoint"],["introspection_endpoint","introspectionEndpoint"]];if(this.serverMetadata!==null){for(const[T,S]of A)this.serverMetadata[T]&&(this.settings[S]=u(this.serverMetadata[T],v));this.serverMetadata.token_endpoint_auth_methods_supported&&!this.settings.authenticationMethod&&(this.settings.authenticationMethod=this.serverMetadata.token_endpoint_auth_methods_supported[0])}}async request(h,v){const b=await this.getEndpoint(h),A={"Content-Type":"application/x-www-form-urlencoded"};let T=this.settings.authenticationMethod;switch(T||(T=this.settings.clientSecret?"client_secret_basic":"client_secret_post"),T){case"client_secret_basic":A.Authorization="Basic "+btoa(this.settings.clientId+":"+this.settings.clientSecret);break;case"client_secret_post":v.client_id=this.settings.clientId,this.settings.clientSecret&&(v.client_secret=this.settings.clientSecret);break;default:throw new Error("Authentication method not yet supported:"+T+". Open a feature request if you want this!")}const S=await this.settings.fetch(b,{method:"POST",body:m(v),headers:A});if(S.ok)return await S.json();let $,K,fe;throw S.headers.has("Content-Type")&&S.headers.get("Content-Type").startsWith("application/json")&&($=await S.json()),$!=null&&$.error?(K="OAuth2 error "+$.error+".",$.error_description&&(K+=" "+$.error_description),fe=$.error):(K="HTTP Error "+S.status+" "+S.statusText,S.status===401&&this.settings.clientSecret&&(K+=". It's likely that the clientId and/or clientSecret was incorrect"),fe=null),new d.OAuth2Error(K,fe,S.status)}tokenResponseToOAuth2Token(h){return h.then(v=>{var b;return{accessToken:v.access_token,expiresAt:v.expires_in?Date.now()+1e3*v.expires_in:null,refreshToken:(b=v.refresh_token)!==null&&b!==void 0?b:null}})}},c.generateQueryString=m},618:(s,c,l)=>{Object.defineProperty(c,"__esModule",{value:!0}),c.getCodeChallenge=c.generateCodeVerifier=c.OAuth2AuthorizationCodeClient=void 0;const d=l(934),g=l(443);async function u(b){const A=m();if(A!=null&&A.subtle)return["S256",v(await A.subtle.digest("SHA-256",h(b)))];{const T=l(212).createHash("sha256");return T.update(h(b)),["S256",T.digest("base64url")]}}function m(){if(typeof window<"u"&&window.crypto)return window.crypto;if(typeof self<"u"&&self.crypto)return self.crypto;const b=l(212);return b.webcrypto?b.webcrypto:null}function h(b){const A=new Uint8Array(b.length);for(let T=0;T<b.length;T++)A[T]=255&b.charCodeAt(T);return A}function v(b){return btoa(String.fromCharCode(...new Uint8Array(b))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}c.OAuth2AuthorizationCodeClient=class{constructor(b){this.client=b}async getAuthorizeUri(b){const[A,T]=await Promise.all([b.codeVerifier?u(b.codeVerifier):void 0,this.client.getEndpoint("authorizationEndpoint")]);let S={client_id:this.client.settings.clientId,response_type:"code",redirect_uri:b.redirectUri,code_challenge_method:A==null?void 0:A[0],code_challenge:A==null?void 0:A[1]};b.state&&(S.state=b.state),b.scope&&(S.scope=b.scope.join(" "));const $=Object.keys(S);if(b!=null&&b.extraParams&&Object.keys(b.extraParams).filter(K=>$.includes(K)).length>0)throw new Error(`The following extraParams are disallowed: '${$.join("', '")}'`);return S={...S,...b==null?void 0:b.extraParams},T+"?"+(0,d.generateQueryString)(S)}async getTokenFromCodeRedirect(b,A){const{code:T}=await this.validateResponse(b,{state:A.state});return this.getToken({code:T,redirectUri:A.redirectUri,codeVerifier:A.codeVerifier})}async validateResponse(b,A){var T;const S=new URL(b).searchParams;if(S.has("error"))throw new g.OAuth2Error((T=S.get("error_description"))!==null&&T!==void 0?T:"OAuth2 error",S.get("error"),0);if(!S.has("code"))throw new Error(`The url did not contain a code parameter ${b}`);if(A.state&&A.state!==S.get("state"))throw new Error(`The "state" parameter in the url did not match the expected value of ${A.state}`);return{code:S.get("code"),scope:S.has("scope")?S.get("scope").split(" "):void 0}}async getToken(b){const A={grant_type:"authorization_code",code:b.code,redirect_uri:b.redirectUri,code_verifier:b.codeVerifier};return this.client.tokenResponseToOAuth2Token(this.client.request("tokenEndpoint",A))}},c.generateCodeVerifier=async function(){const b=m();if(b){const A=new Uint8Array(32);return b.getRandomValues(A),v(A)}{const A=l(212);return new Promise((T,S)=>{A.randomBytes(32,($,K)=>{$&&S($),T(K.toString("base64url"))})})}},c.getCodeChallenge=u},443:(s,c)=>{Object.defineProperty(c,"__esModule",{value:!0}),c.OAuth2Error=void 0;class l extends Error{constructor(g,u,m){super(g),this.oauth2Code=u,this.httpCode=m}}c.OAuth2Error=l},13:(s,c)=>{Object.defineProperty(c,"__esModule",{value:!0}),c.OAuth2Fetch=void 0,c.OAuth2Fetch=class{constructor(l){this.token=null,this.activeGetStoredToken=null,this.activeRefresh=null,this.refreshTimer=null,(l==null?void 0:l.scheduleRefresh)===void 0&&(l.scheduleRefresh=!0),this.options=l,l.getStoredToken&&(this.activeGetStoredToken=(async()=>{this.token=await l.getStoredToken(),this.activeGetStoredToken=null})()),this.scheduleRefresh()}async fetch(l,d){const g=new Request(l,d);return this.mw()(g,u=>fetch(u))}mw(){return async(l,d)=>{const g=await this.getAccessToken();let u=l.clone();u.headers.set("Authorization","Bearer "+g);let m=await d(u);if(!m.ok&&m.status===401){const h=await this.refreshToken();u=l.clone(),u.headers.set("Authorization","Bearer "+h.accessToken),m=await d(u)}return m}}async getToken(){return this.token&&(this.token.expiresAt===null||this.token.expiresAt>Date.now())?this.token:this.refreshToken()}async getAccessToken(){return await this.activeGetStoredToken,(await this.getToken()).accessToken}async refreshToken(){var l,d;if(this.activeRefresh)return this.activeRefresh;const g=this.token;this.activeRefresh=(async()=>{var u,m;let h=null;try{g!=null&&g.refreshToken&&(h=await this.options.client.refreshToken(g))}catch{console.warn("[oauth2] refresh token not accepted, we'll try reauthenticating")}if(h||(h=await this.options.getNewToken()),!h){const v=new Error("Unable to obtain OAuth2 tokens, a full reauth may be needed");throw(m=(u=this.options).onError)===null||m===void 0||m.call(u,v),v}return h})();try{const u=await this.activeRefresh;return this.token=u,(d=(l=this.options).storeToken)===null||d===void 0||d.call(l,u),this.scheduleRefresh(),u}catch(u){throw this.options.onError&&this.options.onError(u),u}finally{this.activeRefresh=null}}scheduleRefresh(){var l;if(!this.options.scheduleRefresh||(this.refreshTimer&&(clearTimeout(this.refreshTimer),this.refreshTimer=null),!(!((l=this.token)===null||l===void 0)&&l.expiresAt)||!this.token.refreshToken))return;const d=this.token.expiresAt-Date.now();d<12e4||(this.refreshTimer=setTimeout(async()=>{try{await this.refreshToken()}catch(g){console.error("[fetch-mw-oauth2] error while doing a background OAuth2 auto-refresh",g)}},d-6e4))}}},212:()=>{}},r={};function i(s){var c=r[s];if(c!==void 0)return c.exports;var l=r[s]={exports:{}};return n[s](l,l.exports,i),l.exports}var o={};return(()=>{var s=o;Object.defineProperty(s,"__esModule",{value:!0}),s.OAuth2Error=s.OAuth2Fetch=s.generateCodeVerifier=s.OAuth2AuthorizationCodeClient=s.OAuth2Client=void 0;var c=i(934);Object.defineProperty(s,"OAuth2Client",{enumerable:!0,get:function(){return c.OAuth2Client}});var l=i(618);Object.defineProperty(s,"OAuth2AuthorizationCodeClient",{enumerable:!0,get:function(){return l.OAuth2AuthorizationCodeClient}}),Object.defineProperty(s,"generateCodeVerifier",{enumerable:!0,get:function(){return l.generateCodeVerifier}});var d=i(13);Object.defineProperty(s,"OAuth2Fetch",{enumerable:!0,get:function(){return d.OAuth2Fetch}});var g=i(443);Object.defineProperty(s,"OAuth2Error",{enumerable:!0,get:function(){return g.OAuth2Error}})})(),o})())})(Ji);var rr=Ji.exports,we={},_t={};Object.defineProperty(_t,"__esModule",{value:!0});_t.OAuth2Error=void 0;class Tl extends Error{constructor(e,n,r){super(e),this.oauth2Code=n,this.httpCode=r}}_t.OAuth2Error=Tl;var ie={};const Sl={},$l=Object.freeze(Object.defineProperty({__proto__:null,default:Sl},Symbol.toStringTag,{value:"Module"})),Pn=El($l);var di;function es(){if(di)return ie;di=1,Object.defineProperty(ie,"__esModule",{value:!0}),ie.getCodeChallenge=ie.generateCodeVerifier=ie.OAuth2AuthorizationCodeClient=void 0;const t=ts(),e=_t;class n{constructor(d){this.client=d}async getAuthorizeUri(d){const[g,u]=await Promise.all([d.codeVerifier?i(d.codeVerifier):void 0,this.client.getEndpoint("authorizationEndpoint")]);let m={client_id:this.client.settings.clientId,response_type:"code",redirect_uri:d.redirectUri,code_challenge_method:g==null?void 0:g[0],code_challenge:g==null?void 0:g[1]};d.state&&(m.state=d.state),d.scope&&(m.scope=d.scope.join(" "));const h=Object.keys(m);if(d!=null&&d.extraParams&&Object.keys(d.extraParams).filter(v=>h.includes(v)).length>0)throw new Error(`The following extraParams are disallowed: '${h.join("', '")}'`);return m={...m,...d==null?void 0:d.extraParams},u+"?"+(0,t.generateQueryString)(m)}async getTokenFromCodeRedirect(d,g){const{code:u}=await this.validateResponse(d,{state:g.state});return this.getToken({code:u,redirectUri:g.redirectUri,codeVerifier:g.codeVerifier})}async validateResponse(d,g){var u;const m=new URL(d).searchParams;if(m.has("error"))throw new e.OAuth2Error((u=m.get("error_description"))!==null&&u!==void 0?u:"OAuth2 error",m.get("error"),0);if(!m.has("code"))throw new Error(`The url did not contain a code parameter ${d}`);if(g.state&&g.state!==m.get("state"))throw new Error(`The "state" parameter in the url did not match the expected value of ${g.state}`);return{code:m.get("code"),scope:m.has("scope")?m.get("scope").split(" "):void 0}}async getToken(d){const g={grant_type:"authorization_code",code:d.code,redirect_uri:d.redirectUri,code_verifier:d.codeVerifier};return this.client.tokenResponseToOAuth2Token(this.client.request("tokenEndpoint",g))}}ie.OAuth2AuthorizationCodeClient=n;async function r(){const l=o();if(l){const d=new Uint8Array(32);return l.getRandomValues(d),c(d)}else{const d=Pn;return new Promise((g,u)=>{d.randomBytes(32,(m,h)=>{m&&u(m),g(h.toString("base64url"))})})}}ie.generateCodeVerifier=r;async function i(l){const d=o();if(d!=null&&d.subtle)return["S256",c(await d.subtle.digest("SHA-256",s(l)))];{const u=Pn.createHash("sha256");return u.update(s(l)),["S256",u.digest("base64url")]}}ie.getCodeChallenge=i;function o(){if(typeof window<"u"&&window.crypto)return window.crypto;if(typeof self<"u"&&self.crypto)return self.crypto;const l=Pn;return l.webcrypto?l.webcrypto:null}function s(l){const d=new Uint8Array(l.length);for(let g=0;g<l.length;g++)d[g]=l.charCodeAt(g)&255;return d}function c(l){return btoa(String.fromCharCode(...new Uint8Array(l))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}return ie}var ui;function ts(){if(ui)return we;ui=1,Object.defineProperty(we,"__esModule",{value:!0}),we.generateQueryString=we.OAuth2Client=void 0;const t=_t,e=es();class n{constructor(s){this.discoveryDone=!1,this.serverMetadata=null,s!=null&&s.fetch||(s.fetch=fetch.bind(globalThis)),this.settings=s}async refreshToken(s){if(!s.refreshToken)throw new Error("This token didn't have a refreshToken. It's not possible to refresh this");const c={grant_type:"refresh_token",refresh_token:s.refreshToken};return this.settings.clientSecret||(c.client_id=this.settings.clientId),this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",c))}async clientCredentials(s){var c;const l=["client_id","client_secret","grant_type","scope"];if(s!=null&&s.extraParams&&Object.keys(s.extraParams).filter(g=>l.includes(g)).length>0)throw new Error(`The following extraParams are disallowed: '${l.join("', '")}'`);const d={grant_type:"client_credentials",scope:(c=s==null?void 0:s.scope)===null||c===void 0?void 0:c.join(" "),...s==null?void 0:s.extraParams};if(!this.settings.clientSecret)throw new Error("A clientSecret must be provided to use client_credentials");return this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",d))}async password(s){var c;const l={grant_type:"password",...s,scope:(c=s.scope)===null||c===void 0?void 0:c.join(" ")};return this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",l))}get authorizationCode(){return new e.OAuth2AuthorizationCodeClient(this)}async introspect(s){const c={token:s.accessToken,token_type_hint:"access_token"};return this.request("introspectionEndpoint",c)}async getEndpoint(s){if(this.settings[s]!==void 0)return r(this.settings[s],this.settings.server);if(s!=="discoveryEndpoint"&&(await this.discover(),this.settings[s]!==void 0))return r(this.settings[s],this.settings.server);if(!this.settings.server)throw new Error(`Could not determine the location of ${s}. Either specify ${s} in the settings, or the "server" endpoint to let the client discover it.`);switch(s){case"authorizationEndpoint":return r("/authorize",this.settings.server);case"tokenEndpoint":return r("/token",this.settings.server);case"discoveryEndpoint":return r("/.well-known/oauth-authorization-server",this.settings.server);case"introspectionEndpoint":return r("/introspect",this.settings.server)}}async discover(){var s;if(this.discoveryDone)return;this.discoveryDone=!0;let c;try{c=await this.getEndpoint("discoveryEndpoint")}catch{console.warn('[oauth2] OAuth2 discovery endpoint could not be determined. Either specify the "server" or "discoveryEndpoint');return}const l=await this.settings.fetch(c,{headers:{Accept:"application/json"}});if(!l.ok)return;if(!(!((s=l.headers.get("Content-Type"))===null||s===void 0)&&s.startsWith("application/json"))){console.warn("[oauth2] OAuth2 discovery endpoint was not a JSON response. Response is ignored");return}this.serverMetadata=await l.json();const d=[["authorization_endpoint","authorizationEndpoint"],["token_endpoint","tokenEndpoint"],["introspection_endpoint","introspectionEndpoint"]];if(this.serverMetadata!==null){for(const[g,u]of d)this.serverMetadata[g]&&(this.settings[u]=r(this.serverMetadata[g],c));this.serverMetadata.token_endpoint_auth_methods_supported&&!this.settings.authenticationMethod&&(this.settings.authenticationMethod=this.serverMetadata.token_endpoint_auth_methods_supported[0])}}async request(s,c){const l=await this.getEndpoint(s),d={"Content-Type":"application/x-www-form-urlencoded"};let g=this.settings.authenticationMethod;switch(g||(g=this.settings.clientSecret?"client_secret_basic":"client_secret_post"),g){case"client_secret_basic":d.Authorization="Basic "+btoa(this.settings.clientId+":"+this.settings.clientSecret);break;case"client_secret_post":c.client_id=this.settings.clientId,this.settings.clientSecret&&(c.client_secret=this.settings.clientSecret);break;default:throw new Error("Authentication method not yet supported:"+g+". Open a feature request if you want this!")}const u=await this.settings.fetch(l,{method:"POST",body:i(c),headers:d});if(u.ok)return await u.json();let m,h,v;throw u.headers.has("Content-Type")&&u.headers.get("Content-Type").startsWith("application/json")&&(m=await u.json()),m!=null&&m.error?(h="OAuth2 error "+m.error+".",m.error_description&&(h+=" "+m.error_description),v=m.error):(h="HTTP Error "+u.status+" "+u.statusText,u.status===401&&this.settings.clientSecret&&(h+=". It's likely that the clientId and/or clientSecret was incorrect"),v=null),new t.OAuth2Error(h,v,u.status)}tokenResponseToOAuth2Token(s){return s.then(c=>{var l;return{accessToken:c.access_token,expiresAt:c.expires_in?Date.now()+c.expires_in*1e3:null,refreshToken:(l=c.refresh_token)!==null&&l!==void 0?l:null}})}}we.OAuth2Client=n;function r(o,s){return new URL(o,s).toString()}function i(o){return new URLSearchParams(Object.fromEntries(Object.entries(o).filter(([s,c])=>c!==void 0))).toString()}return we.generateQueryString=i,we}var Pl=ts(),ns=es(),rs=(t=>(t.Refresh="refresh",t.Access="access",t))(rs||{});const it={refresh:void 0,access:void 0};function Cl(t){hi(t,P.refreshTokenPayload),P.onRefreshTokenUpdate(e=>hi(t,e)),pi(t,P.accessTokenPayload),P.onAccessTokenUpdate(e=>pi(t,e))}function Rl(){Object.values(rs).forEach(t=>{it[t]&&clearTimeout(it[t])})}function hi(t,e){is("refresh",e,()=>{const n=P.accessTokenPayload;if(!n)return;const{scope:r,locale:i}=n;gt(ir,{client:t,scope:r,locale:i})})}function pi(t,e){is("access",e,()=>{if(!e)return;const{scope:n,locale:r}=e;gt(ss,{client:t,scope:n,locale:r})})}function is(t,e,n){it[t]&&clearTimeout(it[t]);const r=e&&uo(e);r&&r>0&&(it[t]=setTimeout(n,r))}const B=Yt();if(typeof(B==null?void 0:B.oAuthServer)!="string")throw new Error("Invalid 'oAuthServer' setting");if(typeof(B==null?void 0:B.oAuthPrefix)!="string")throw new Error("Invalid 'oAuthPrefix' setting");if(typeof(B==null?void 0:B.oAuthClientId)!="string")throw new Error("Invalid 'clientId' setting");function xl(){return new rr.OAuth2Client({server:B.oAuthServer,clientId:B.oAuthClientId,tokenEndpoint:`${B.oAuthPrefix}/Authorization/Token`,get authorizationEndpoint(){return Ll()},fetch:(...t)=>fetch(...t)})}async function Ol(t,e,n){const r=To(),i=await Nl(t,r);if(i){Dl(i,r);return}const o=Ml();if(o){zl(o);return}await Fn(t,e,n)}async function Fn(t,e,n){if(P.isRefreshTokenExpired())return gt(ir,{client:t,scope:e,locale:n});const r=P.accessToken,i=mo(e);Zr(r,e,n)||(Zr(i,e,n)?P.accessToken=i:await gt(ss,{client:t,scope:e,locale:n}))}async function Il(t){const e=Li();if(!e)throw new Error("No instance available");const{accessToken:n,scope:r,locale:i}=P;if(!(!n||!r||!i))try{await Ul(t,`${B.oAuthPrefix}/Authorization/${e}/Logout`,{access_token:n})}catch(o){if(!(o instanceof SyntaxError))throw o}finally{P.resetAllTokens(),Rl(),await gt(ir,{client:t,scope:r,locale:i,redirectUri:new URL(pe(I.navigationHome))})}}function Ll(){const t=Li();return t?`${B.oAuthPrefix}/Authorization/${t}/Login`:`${B.oAuthPrefix}/Authorization/Login`}async function gt(t,{client:e,scope:n,locale:r,redirectUri:i=new URL(document.location.href)}){const o=await rr.generateCodeVerifier();i.searchParams.set(Ce,r),So(o,i.toString());const s=await t({client:e,scope:n,locale:r,redirectUri:i,codeVerifier:o});document.location.href=s.toString()}const ir=async({client:t,scope:e,locale:n,redirectUri:r,codeVerifier:i})=>{const o=new URL(await t.getEndpoint("authorizationEndpoint")),[s,c]=await ns.getCodeChallenge(i);return o.searchParams.set("clientId",t.settings.clientId),o.searchParams.set("redirectUrl",r.toString()),o.searchParams.set("culture_info",n),o.searchParams.set("application_scope",e),o.searchParams.set("response_type","code"),o.searchParams.set("code_challenge_method",s),o.searchParams.set("code_challenge",c),o},ss=async({client:t,scope:e,locale:n,redirectUri:r,codeVerifier:i})=>{const o=new URL(`${B.oAuthPrefix}/Authorization/RefreshPublic`,t.settings.server),[s,c]=await ns.getCodeChallenge(i);return o.searchParams.set("redirectUrl",r.toString()),o.searchParams.set("culture_info",n),o.searchParams.set("application_scope",e),o.searchParams.set("refresh_token",P.refreshToken??""),o.searchParams.set("response_type","code"),o.searchParams.set("code_challenge_method",s),o.searchParams.set("code_challenge",c),o};async function Nl(t,e){return new URLSearchParams(document.location.search).get("code")&&(e!=null&&e.redirectUri)?await t.authorizationCode.getTokenFromCodeRedirect(document.location.href,{redirectUri:e.redirectUri,codeVerifier:e.codeVerifier}):null}function Dl({refreshToken:t,accessToken:e},n){var i;P.refreshToken=t,P.accessToken=e;const r=(i=P.accessTokenPayload)==null?void 0:i.instanceId;r&&go(r),n!=null&&n.redirectUri&&k.navigate(new URL(n.redirectUri))}function Ml(){const t=new URLSearchParams(document.location.search),e=t.get("access_token"),n=t.get("expires_in"),r=t.get("refresh_token");return e?{accessToken:e,expiresAt:n?Date.now()+parseInt(n,10)*1e3:null,refreshToken:r||null}:null}function zl(t){const{refreshToken:e,accessToken:n}=t;P.refreshToken=e,P.accessToken=n;const r=new URL(document.location.href);r.searchParams.delete("access_token"),r.searchParams.delete("expires_in"),r.searchParams.delete("refresh_token"),window.parent===window?history.replaceState({},"",r):window.parent.location.assign(r)}async function Ul(t,e,n){var d;const r=new URL(e,t.settings.server).toString(),i={"Content-Type":"application/x-www-form-urlencoded"},o=await fetch(r,{method:"POST",body:n&&Pl.generateQueryString(n),headers:i});if(o.ok)return await o.json();let s,c,l;throw(d=o.headers.get("Content-Type"))!=null&&d.startsWith("application/json")&&(s=await o.json()),s!=null&&s.error?(c="OAuth2 error "+s.error+".",s.error_description&&(c+=" "+s.error_description),l=s.error):(c="HTTP Error "+o.status+" "+o.statusText,l=null),new rr.OAuth2Error(c,l,o.status)}var jl=Object.defineProperty,Hl=Object.getOwnPropertyDescriptor,os=(t,e,n,r)=>{for(var i=r>1?void 0:r?Hl(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(r?s(e,n,i):s(i))||i);return r&&i&&jl(e,n,i),i};const st=xl();Cl(st);const Fl=async function(){await Ol(st,Qo(),Mi()),k.init()}();ra(O`
    ${ji}
    :root {
      ${Ui}
    }
  `.toString());let Wt=class extends R{constructor(){super(),this.authReady=!1,this.subscriptions=[],this.handleMessage=({data:t})=>{switch(t.type){case"bkdAppPushState":{const e=t.args[2];this.updateUrlAndNavigationState(e,!1);break}case"bkdAppReplaceState":{const e=t.args[2];_n(kn(e),!0);break}case"bkdAppHashChange":{const{url:e}=t;_n(kn(e));break}}},Fl.then(()=>this.authReady=!0),new ee(this,k)}connectedCallback(){super.connectedCallback(),k.initialized.then(()=>setTimeout(()=>{P.scope!==k.app.scope&&Fn(st,k.app.scope,k.locale)})),this.subscriptions.push(k.subscribeScopeAndLocale((e,n)=>Fn(st,e,n),!0)),this.subscriptions.push(k.subscribeInstanceName(this.updateTitle.bind(this))),this.subscriptions.push(k.subscribeNavigationItem(this.updateTitle.bind(this))),window.addEventListener("message",this.handleMessage);const t=new URL(location.href);k.actualAppPath=t.hash,window.addEventListener("hashchange",this.handleHashChange)}disconnectedCallback(){super.disconnectedCallback(),this.subscriptions.forEach(t=>t()),window.removeEventListener("message",this.handleMessage),window.removeEventListener("hashchange",this.handleHashChange)}updateTitle(){const{instanceName:t,navigationItem:e}=k,n=(e==null?void 0:e.label)&&(e==null?void 0:e.key)!==I.navigationHome.key;document.title=n?[e==null?void 0:e.label,t].join(" ― "):t}updateUrlAndNavigationState(t,e){var i;const n=kn(t);_n(n,e);const r=Go(k.navigation,n);(i=r==null?void 0:r.item)!=null&&i.key&&r.item.key!==k.navigationItemKey?(k.actualAppPath=n,k.navigationItemKey=r.item.key):k.appPath=n}handleHashChange(t){const e=new URL(t.newURL);k.appPath=e.hash}handleLogout(){Il(st)}render(){return _`
      ${Ee(this.authReady&&P.authenticated,()=>_`
          <bkd-header @bkdlogout=${this.handleLogout.bind(this)}></bkd-header>
          <bkd-content></bkd-content>
          <bkd-footer></bkd-footer>
        `)}
    `}};Wt.styles=[M,O`
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
    `];os([We()],Wt.prototype,"authReady",2);Wt=os([N("bkd-portal"),D()],Wt);
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
