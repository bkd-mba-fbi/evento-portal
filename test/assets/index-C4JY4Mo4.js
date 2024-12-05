(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt=globalThis,Jn=Nt.ShadowRoot&&(Nt.ShadyCSS===void 0||Nt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qn=Symbol(),Fr=new WeakMap;let vi=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==Qn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(Jn&&e===void 0){const r=n!==void 0&&n.length===1;r&&(e=Fr.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Fr.set(n,e))}return e}toString(){return this.cssText}};const Ro=t=>new vi(typeof t=="string"?t:t+"",void 0,Qn),C=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((r,i,o)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new vi(n,t,Qn)},Co=(t,e)=>{if(Jn)t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of e){const r=document.createElement("style"),i=Nt.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,t.appendChild(r)}},Br=Jn?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const r of e.cssRules)n+=r.cssText;return Ro(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:xo,defineProperty:Oo,getOwnPropertyDescriptor:Io,getOwnPropertyNames:Lo,getOwnPropertySymbols:Do,getPrototypeOf:No}=Object,me=globalThis,Kr=me.trustedTypes,Mo=Kr?Kr.emptyScript:"",An=me.reactiveElementPolyfillSupport,at=(t,e)=>t,Ht={toAttribute(t,e){switch(e){case Boolean:t=t?Mo:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},er=(t,e)=>!xo(t,e),Wr={attribute:!0,type:String,converter:Ht,reflect:!1,hasChanged:er};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),me.litPropertyMetadata??(me.litPropertyMetadata=new WeakMap);class Fe extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=Wr){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(e,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(e,r,n);i!==void 0&&Oo(this.prototype,e,i)}}static getPropertyDescriptor(e,n,r){const{get:i,set:o}=Io(this.prototype,e)??{get(){return this[n]},set(s){this[n]=s}};return{get(){return i==null?void 0:i.call(this)},set(s){const l=i==null?void 0:i.call(this);o.call(this,s),this.requestUpdate(e,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Wr}static _$Ei(){if(this.hasOwnProperty(at("elementProperties")))return;const e=No(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(at("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(at("properties"))){const n=this.properties,r=[...Lo(n),...Do(n)];for(const i of r)this.createProperty(i,n[i])}const e=this[Symbol.metadata];if(e!==null){const n=litPropertyMetadata.get(e);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)n.unshift(Br(i))}else e!==void 0&&n.push(Br(e));return n}static _$Eu(e,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(n=>n(this))}addController(e){var n;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)==null||n.call(e))}removeController(e){var n;(n=this._$EO)==null||n.delete(e)}_$E_(){const e=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Co(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(n=>{var r;return(r=n.hostConnected)==null?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EC(e,n){var o;const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){const s=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:Ht).toAttribute(n,r.type);this._$Em=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,n){var o;const r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const s=r.getPropertyOptions(i),l=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)==null?void 0:o.fromAttribute)!==void 0?s.converter:Ht;this._$Em=i,this[i]=l.fromAttribute(n,s.type),this._$Em=null}}requestUpdate(e,n,r){if(e!==void 0){if(r??(r=this.constructor.getPropertyOptions(e)),!(r.hasChanged??er)(this[e],n))return;this.P(e,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,n,r){this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,s]of i)s.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],s)}let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),(r=this._$EO)==null||r.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(n)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(n)}willUpdate(e){}_$AE(e){var n;(n=this._$EO)==null||n.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EC(n,this[n]))),this._$EU()}updated(e){}firstUpdated(e){}}Fe.elementStyles=[],Fe.shadowRootOptions={mode:"open"},Fe[at("elementProperties")]=new Map,Fe[at("finalized")]=new Map,An==null||An({ReactiveElement:Fe}),(me.reactiveElementVersions??(me.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lt=globalThis,jt=lt.trustedTypes,Gr=jt?jt.createPolicy("lit-html",{createHTML:t=>t}):void 0,tr="$lit$",ue=`lit$${Math.random().toFixed(9).slice(2)}$`,nr="?"+ue,zo=`<${nr}>`,Pe=document,dt=()=>Pe.createComment(""),ut=t=>t===null||typeof t!="object"&&typeof t!="function",rr=Array.isArray,yi=t=>rr(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Tn=`[ 	
\f\r]`,Qe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Vr=/-->/g,qr=/>/g,we=RegExp(`>|${Tn}(?:([^\\s"'>=/]+)(${Tn}*=${Tn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Yr=/'/g,Xr=/"/g,wi=/^(?:script|style|textarea|title)$/i,Uo=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),w=Uo(1),pe=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),Zr=new WeakMap,Te=Pe.createTreeWalker(Pe,129);function ki(t,e){if(!rr(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Gr!==void 0?Gr.createHTML(e):e}const _i=(t,e)=>{const n=t.length-1,r=[];let i,o=e===2?"<svg>":e===3?"<math>":"",s=Qe;for(let l=0;l<n;l++){const c=t[l];let g,k,h=-1,_=0;for(;_<c.length&&(s.lastIndex=_,k=s.exec(c),k!==null);)_=s.lastIndex,s===Qe?k[1]==="!--"?s=Vr:k[1]!==void 0?s=qr:k[2]!==void 0?(wi.test(k[2])&&(i=RegExp("</"+k[2],"g")),s=we):k[3]!==void 0&&(s=we):s===we?k[0]===">"?(s=i??Qe,h=-1):k[1]===void 0?h=-2:(h=s.lastIndex-k[2].length,g=k[1],s=k[3]===void 0?we:k[3]==='"'?Xr:Yr):s===Xr||s===Yr?s=we:s===Vr||s===qr?s=Qe:(s=we,i=void 0);const u=s===we&&t[l+1].startsWith("/>")?" ":"";o+=s===Qe?c+zo:h>=0?(r.push(g),c.slice(0,h)+tr+c.slice(h)+ue+u):c+ue+(h===-2?l:u)}return[ki(t,o+(t[n]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]};class ht{constructor({strings:e,_$litType$:n},r){let i;this.parts=[];let o=0,s=0;const l=e.length-1,c=this.parts,[g,k]=_i(e,n);if(this.el=ht.createElement(g,r),Te.currentNode=this.el.content,n===2||n===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=Te.nextNode())!==null&&c.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(tr)){const _=k[s++],u=i.getAttribute(h).split(ue),d=/([.?@])?(.*)/.exec(_);c.push({type:1,index:o,name:d[2],strings:u,ctor:d[1]==="."?Ti:d[1]==="?"?Ei:d[1]==="@"?Si:yt}),i.removeAttribute(h)}else h.startsWith(ue)&&(c.push({type:6,index:o}),i.removeAttribute(h));if(wi.test(i.tagName)){const h=i.textContent.split(ue),_=h.length-1;if(_>0){i.textContent=jt?jt.emptyScript:"";for(let u=0;u<_;u++)i.append(h[u],dt()),Te.nextNode(),c.push({type:2,index:++o});i.append(h[_],dt())}}}else if(i.nodeType===8)if(i.data===nr)c.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(ue,h+1))!==-1;)c.push({type:7,index:o}),h+=ue.length-1}o++}}static createElement(e,n){const r=Pe.createElement("template");return r.innerHTML=e,r}}function Re(t,e,n=t,r){var s,l;if(e===pe)return e;let i=r!==void 0?(s=n._$Co)==null?void 0:s[r]:n._$Cl;const o=ut(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),o===void 0?i=void 0:(i=new o(t),i._$AT(t,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=i:n._$Cl=i),i!==void 0&&(e=Re(t,i._$AS(t,e.values),i,r)),e}let Ai=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:n},parts:r}=this._$AD,i=((e==null?void 0:e.creationScope)??Pe).importNode(n,!0);Te.currentNode=i;let o=Te.nextNode(),s=0,l=0,c=r[0];for(;c!==void 0;){if(s===c.index){let g;c.type===2?g=new Ge(o,o.nextSibling,this,e):c.type===1?g=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(g=new $i(o,this,e)),this._$AV.push(g),c=r[++l]}s!==(c==null?void 0:c.index)&&(o=Te.nextNode(),s++)}return Te.currentNode=Pe,i}p(e){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}};class Ge{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,n,r,i){this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=Re(this,e,n),ut(e)?e===R||e==null||e===""?(this._$AH!==R&&this._$AR(),this._$AH=R):e!==this._$AH&&e!==pe&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):yi(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==R&&ut(this._$AH)?this._$AA.nextSibling.data=e:this.T(Pe.createTextNode(e)),this._$AH=e}$(e){var o;const{values:n,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=ht.createElement(ki(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(n);else{const s=new Ai(i,this),l=s.u(this.options);s.p(n),this.T(l),this._$AH=s}}_$AC(e){let n=Zr.get(e.strings);return n===void 0&&Zr.set(e.strings,n=new ht(e)),n}k(e){rr(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const o of e)i===n.length?n.push(r=new Ge(this.O(dt()),this.O(dt()),this,this.options)):r=n[i],r._$AI(o),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var n;this._$AM===void 0&&(this._$Cv=e,(n=this._$AP)==null||n.call(this,e))}}class yt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,r,i,o){this.type=1,this._$AH=R,this._$AN=void 0,this.element=e,this.name=n,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=R}_$AI(e,n=this,r,i){const o=this.strings;let s=!1;if(o===void 0)e=Re(this,e,n,0),s=!ut(e)||e!==this._$AH&&e!==pe,s&&(this._$AH=e);else{const l=e;let c,g;for(e=o[0],c=0;c<o.length-1;c++)g=Re(this,l[r+c],n,c),g===pe&&(g=this._$AH[c]),s||(s=!ut(g)||g!==this._$AH[c]),g===R?e=R:e!==R&&(e+=(g??"")+o[c+1]),this._$AH[c]=g}s&&!i&&this.j(e)}j(e){e===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ti extends yt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===R?void 0:e}}class Ei extends yt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==R)}}class Si extends yt{constructor(e,n,r,i,o){super(e,n,r,i,o),this.type=5}_$AI(e,n=this){if((e=Re(this,e,n,0)??R)===pe)return;const r=this._$AH,i=e===R&&r!==R||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==R&&(r===R||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,e):this._$AH.handleEvent(e)}}class $i{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Re(this,e)}}const Ho={M:tr,P:ue,A:nr,C:1,L:_i,R:Ai,D:yi,V:Re,I:Ge,H:yt,N:Ei,U:Si,B:Ti,F:$i},En=lt.litHtmlPolyfillSupport;En==null||En(ht,Ge),(lt.litHtmlVersions??(lt.litHtmlVersions=[])).push("3.2.1");const jo=(t,e,n)=>{const r=(n==null?void 0:n.renderBefore)??e;let i=r._$litPart$;if(i===void 0){const o=(n==null?void 0:n.renderBefore)??null;r._$litPart$=i=new Ge(e.insertBefore(dt(),o),o,void 0,n??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let P=class extends Fe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const e=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=e.firstChild),e}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=jo(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return pe}};var bi;P._$litElement$=!0,P.finalized=!0,(bi=globalThis.litElementHydrateSupport)==null||bi.call(globalThis,{LitElement:P});const Sn=globalThis.litElementPolyfillSupport;Sn==null||Sn({LitElement:P});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=t=>(e,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fo={attribute:!0,type:String,converter:Ht,reflect:!1,hasChanged:er},Bo=(t=Fo,e,n)=>{const{kind:r,metadata:i}=n;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(n.name,t),r==="accessor"){const{name:s}=n;return{set(l){const c=e.get.call(this);e.set.call(this,l),this.requestUpdate(s,c,t)},init(l){return l!==void 0&&this.P(s,void 0,t),l}}}if(r==="setter"){const{name:s}=n;return function(l){const c=this[s];e.call(this,l),this.requestUpdate(s,c,t)}}throw Error("Unsupported decorator location: "+r)};function Y(t){return(e,n)=>typeof n=="object"?Bo(t,e,n):((r,i,o)=>{const s=i.hasOwnProperty(o);return i.constructor.createProperty(o,s?{...r,wrapped:!0}:r),s?Object.getOwnPropertyDescriptor(i,o):void 0})(t,e,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ve(t){return Y({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ko=(t,e,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ee(t,e){return(n,r,i)=>{const o=s=>{var l;return((l=s.renderRoot)==null?void 0:l.querySelector(t))??null};return Ko(n,r,{get(){return o(this)}})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wo=(t,e,n)=>{for(const r of e)if(r[0]===t)return(0,r[1])();return n==null?void 0:n()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ir={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},en=t=>(...e)=>({_$litDirective$:t,values:e});let tn=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Go}=Ho,Jr=()=>document.createComment(""),et=(t,e,n)=>{var o;const r=t._$AA.parentNode,i=e===void 0?t._$AB:e._$AA;if(n===void 0){const s=r.insertBefore(Jr(),i),l=r.insertBefore(Jr(),i);n=new Go(s,l,t,t.options)}else{const s=n._$AB.nextSibling,l=n._$AM,c=l!==t;if(c){let g;(o=n._$AQ)==null||o.call(n,t),n._$AM=t,n._$AP!==void 0&&(g=t._$AU)!==l._$AU&&n._$AP(g)}if(s!==i||c){let g=n._$AA;for(;g!==s;){const k=g.nextSibling;r.insertBefore(g,i),g=k}}}return n},ke=(t,e,n=t)=>(t._$AI(e,n),t),Vo={},Pi=(t,e=Vo)=>t._$AH=e,qo=t=>t._$AH,$n=t=>{var r;(r=t._$AP)==null||r.call(t,!1,!0);let e=t._$AA;const n=t._$AB.nextSibling;for(;e!==n;){const i=e.nextSibling;e.remove(),e=i}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yo=en(class extends tn{constructor(){super(...arguments),this.key=R}render(t,e){return this.key=t,e}update(t,[e,n]){return e!==this.key&&(Pi(t),this.key=e),n}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function he(t,e,n){return t?e(t):n==null?void 0:n(t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mn="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xo=t=>typeof t!="string"&&"strTag"in t,Ri=(t,e,n)=>{let r=t[0];for(let i=1;i<t.length;i++)r+=e[n?n[i-1]:i-1],r+=t[i];return r};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ci=t=>Xo(t)?Ri(t.strings,t.values):t;let f=Ci,Qr=!1;function Zo(t){if(Qr)throw new Error("lit-localize can only be configured once");f=t,Qr=!0}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Jo{constructor(e){this.__litLocalizeEventHandler=n=>{n.detail.status==="ready"&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(Mn,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(Mn,this.__litLocalizeEventHandler)}}const Qo=t=>t.addController(new Jo(t)),es=Qo;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=()=>(t,e)=>(t.addInitializer(es),t);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class xi{constructor(){this.settled=!1,this.promise=new Promise((e,n)=>{this._resolve=e,this._reject=n})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */const de=[];for(let t=0;t<256;t++)de[t]=(t>>4&15).toString(16)+(t&15).toString(16);function ts(t){let e=0,n=8997,r=0,i=33826,o=0,s=40164,l=0,c=52210;for(let g=0;g<t.length;g++)n^=t.charCodeAt(g),e=n*435,r=i*435,o=s*435,l=c*435,o+=n<<8,l+=i<<8,r+=e>>>16,n=e&65535,o+=r>>>16,i=r&65535,c=l+(o>>>16)&65535,s=o&65535;return de[c>>8]+de[c&255]+de[s>>8]+de[s&255]+de[i>>8]+de[i&255]+de[n>>8]+de[n&255]}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ns="",rs="h",is="s";function os(t,e){return(e?rs:is)+ts(typeof t=="string"?t:t.join(ns))}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ei=new WeakMap,ti=new Map;function ss(t,e,n){if(t){const r=(n==null?void 0:n.id)??as(e),i=t[r];if(i){if(typeof i=="string")return i;if("strTag"in i)return Ri(i.strings,e.values,i.values);{let o=ei.get(i);return o===void 0&&(o=i.values,ei.set(i,o)),{...i,values:o.map(s=>e.values[s])}}}}return Ci(e)}function as(t){const e=typeof t=="string"?t:t.strings;let n=ti.get(e);return n===void 0&&(n=os(e,typeof t!="string"&&!("strTag"in t)),ti.set(e,n)),n}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Pn(t){window.dispatchEvent(new CustomEvent(Mn,{detail:t}))}let Ft="",Rn,Oi,Bt,zn,Ii,_e=new xi;_e.resolve();let Ot=0;const ls=t=>(Zo((e,n)=>ss(Ii,e,n)),Ft=Oi=t.sourceLocale,Bt=new Set(t.targetLocales),Bt.add(t.sourceLocale),zn=t.loadLocale,{getLocale:cs,setLocale:ds}),cs=()=>Ft,ds=t=>{if(t===(Rn??Ft))return _e.promise;if(!Bt||!zn)throw new Error("Internal error");if(!Bt.has(t))throw new Error("Invalid locale code");Ot++;const e=Ot;return Rn=t,_e.settled&&(_e=new xi),Pn({status:"loading",loadingLocale:t}),(t===Oi?Promise.resolve({templates:void 0}):zn(t)).then(r=>{Ot===e&&(Ft=t,Rn=void 0,Ii=r.templates,Pn({status:"ready",readyLocale:t}),_e.resolve())},r=>{Ot===e&&(Pn({status:"error",errorLocale:t,errorMessage:r.toString()}),_e.reject(r))}),_e.promise};function Li(t){return typeof t=="function"?t():t}const Qt=class Qt extends Event{constructor(e,n,r){super(Qt.eventName,{cancelable:!1}),this.key=e,this.value=n,this.state=r}};Qt.eventName="lit-state-changed";let Ee=Qt;const us=(t,e)=>e!==t&&(e===e||t===t),gr=class gr extends EventTarget{static initPropertyMap(){this.propertyMap||(this.propertyMap=new Map)}get propertyMap(){return this.constructor.propertyMap}get stateValue(){return Object.fromEntries([...this.propertyMap].map(([e])=>[e,this[e]]))}constructor(){super(),this.hookMap=new Map,this.constructor.finalize(),this.propertyMap&&[...this.propertyMap].forEach(([e,n])=>{if(n.initialValue!==void 0){const r=Li(n.initialValue);this[e]=r,n.value=r}})}static finalize(){if(this.finalized)return!1;this.finalized=!0;const e=Object.keys(this.properties||{});for(const n of e)this.createProperty(n,this.properties[n]);return!0}static createProperty(e,n){this.finalize();const r=typeof e=="symbol"?Symbol():`__${e}`,i=this.getPropertyDescriptor(String(e),r,n);Object.defineProperty(this.prototype,e,i)}static getPropertyDescriptor(e,n,r){const i=(r==null?void 0:r.hasChanged)||us;return{get(){return this[n]},set(o){const s=this[e];this[n]=o,i(o,s)===!0&&this.dispatchStateEvent(e,o,this)},configurable:!0,enumerable:!0}}reset(){this.hookMap.forEach(e=>e.reset()),[...this.propertyMap].filter(([e,n])=>!(n.skipReset===!0||n.resetValue===void 0)).forEach(([e,n])=>{this[e]=n.resetValue})}subscribe(e,n,r){n&&!Array.isArray(n)&&(n=[n]);const i=o=>{(!n||n.includes(o.key))&&e(o.key,o.value,this)};return this.addEventListener(Ee.eventName,i,r),()=>this.removeEventListener(Ee.eventName,i)}dispatchStateEvent(e,n,r){this.dispatchEvent(new Ee(e,n,r))}};gr.finalized=!1;let Un=gr;class J{constructor(e,n,r){this.host=e,this.state=n,this.callback=r||(()=>this.host.requestUpdate()),this.host.addController(this)}hostConnected(){this.state.addEventListener(Ee.eventName,this.callback),this.callback()}hostDisconnected(){this.state.removeEventListener(Ee.eventName,this.callback)}}function oe(t){return(e,n)=>{if(Object.getOwnPropertyDescriptor(e,n))throw new Error("@property must be called before all state decorators");const r=e.constructor;r.initPropertyMap();const i=e.hasOwnProperty(n);return r.propertyMap.set(n,{...t,initialValue:t==null?void 0:t.value,resetValue:t==null?void 0:t.value}),r.createProperty(n,t),i?Object.getOwnPropertyDescriptor(e,n):void 0}}function hs(t,e){if(t!==null&&(e===Boolean||e===Number||e===Array||e===Object))try{t=JSON.parse(t)}catch{console.warn("cannot parse value",t)}return t}const ps=new URL(location.href);function fs(t){return(e,n)=>{if(!Object.getOwnPropertyDescriptor(e,n))throw new Error("@local-storage decorator need to be called after @property");const i=e.constructor,o=`${(t==null?void 0:t.parameter)||String(n)}`,s=i.propertyMap.get(n),l=s==null?void 0:s.type;if(s){const c=s.initialValue,g=ps.searchParams.get(o);g!==null&&(s.skipAsync=!0),s.initialValue=()=>hs(g,l)??Li(c),i.propertyMap.set(n,{...s,...t});return}}}const O={apps:[{key:"schulverwaltung",scope:"Tutoring",root:"apps/webapp-schulverwaltung/index.html",heading:!1},{key:"anmeldedetailsEinlesen",scope:"NG",root:"apps/EmberApps/AnmeldedetailsEinlesen/index.html",heading:!0},{key:"schulleiterPersonen",scope:"NG",root:"apps/EmberApps/SchulleiterPersonen/index.html",heading:!0},{key:"fotoliste",scope:"Tutoring",root:"apps/EmberApps/Fotoliste/index.html",heading:!1},{key:"kursausschreibung",scope:"Public",root:"apps/Kursausschreibung/index.html",heading:!0},{key:"kursausschreibungIntern",scope:"Public",root:"apps/Kursausschreibung/indexIntern.html",heading:!0},{key:"stellvertretung",scope:"Tutoring",root:"apps/Stellvertretung/index.html",heading:!0},{key:"reservation",scope:"NG",root:"apps/Raumreservation/index.html",heading:!0},{key:"noteneingabe",scope:"Tutoring",root:"apps/Noteneingabe/index.html",heading:!1},{key:"footer",scope:"Public",root:"",heading:!0}],navigationHome:{key:"home",label:"Home",allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/dashboard"},navigationPhotoList:{key:"photoList",get label(){return f("Fotoliste")},allowedRolesOrPermissions:["TeacherRole"],deniedInstanceIds:null,appKey:"fotoliste",appPath:"#/"},navigationInputGrades:{key:"inputGrades",get label(){return f("Noteneingabe")},allowedRolesOrPermissions:["TeacherRole"],deniedInstanceIds:null,appKey:"noteneingabe",appPath:"#/"},navigationMyProfile:{key:"myProfile",get label(){return f("Mein Profil")},allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/my-profile"},navigationMySettings:{key:"mySettings",get label(){return f("Einstellungen")},allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/my-settings"},navigation:[{get label(){return f("Unterricht")},items:[{key:"presenceControl",get label(){return f("Präsenzkontrolle")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/presence-control"},{key:"currentEvents",get label(){return f("Aktuelle Fächer")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole","ClassTeacherRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/events/current"},{key:"tests",get label(){return f("Tests und Bewertung")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/events"},{key:"substitutionsAssign",get label(){return f("Stellvertretung erfassen")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole"],deniedInstanceIds:null,appKey:"stellvertretung",appPath:"#/substitutions/assign"},{key:"substitutionsExecute",get label(){return f("Stellvertretung ausüben")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole"],deniedInstanceIds:null,appKey:"stellvertretung",appPath:"#/substitutions/execute"}]},{get label(){return f("Absenzen")},items:[{key:"openAbsences",get label(){return f("Offene Absenzen entschuldigen")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole","ClassTeacherRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/open-absences"},{key:"editAbsences",get label(){return f("Absenzen bearbeiten")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole","ClassTeacherRole","AbsenceAdministratorRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/edit-absences"},{key:"evaluateAbsences",get label(){return f("Absenzen auswerten")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole","ClassTeacherRole","AbsenceAdministratorRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/evaluate-absences"}]},{get label(){return f("Aus-/Weiterbildung")},items:[{key:"myAbsences",get label(){return f("Absenzen")},allowedRolesOrPermissions:["StudentRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/my-absences"},{key:"myGrades",get label(){return f("Noten")},allowedRolesOrPermissions:["StudentRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/my-grades"}]},{get label(){return f("Angebote")},items:[{key:"coursesAndEvents",get label(){return f("Kurse und Veranstaltungen")},allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"kursausschreibung",appPath:"#/"},{key:"internalTraining",get label(){return f("Schulinterne Weiterbildung")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole","ClassTeacherRole","AbsenceAdministratorRole","SubstituteAdministratorRole","Reservations"],deniedInstanceIds:null,appKey:"kursausschreibungIntern",appPath:"#/"},{key:"reservations",get label(){return f("Räume und Geräte reservieren")},allowedRolesOrPermissions:["Reservations"],deniedInstanceIds:null,appKey:"reservation",appPath:"#/"}]},{get label(){return f("Administration")},items:[{key:"substitutionsAdmin",get label(){return f("Stellvertretungen administrieren")},allowedRolesOrPermissions:["SubstituteAdministratorRole"],deniedInstanceIds:null,appKey:"stellvertretung",appPath:"#/substitutions/admin"},{key:"personSearch",get label(){return f("Personen und Institutionen suchen")},allowedRolesOrPermissions:["PersonRight"],deniedInstanceIds:null,appKey:"schulleiterPersonen",appPath:"#/persons"},{key:"eventRegistration",get label(){return f("Anmeldedetails einlesen")},allowedRolesOrPermissions:["PersonRight","RegistrationRightAusbildungSemester","RegistrationRightAusbildungKurs","RegistrationRightAusbildungModulanlass","RegistrationRightAusbildungModul","RegistrationRightAusbildungStudiengang","RegistrationRightAusbildungStudienjahrgang","RegistrationRightAusbildungVeranstaltung","RegistrationRightWeiterbildungCAS","RegistrationRightWeiterbildungCASAnlass","RegistrationRightWeiterbildungDAS","RegistrationRightWeiterbildungDASJahrgang","RegistrationRightWeiterbildungInteressent","RegistrationRightWeiterbildungKurs","RegistrationRightWeiterbildungMAS","RegistrationRightWeiterbildungMASJahrgang","RegistrationRightWeiterbildungModulanlass","RegistrationRightWeiterbildungModulbefreiung","RegistrationRightWeiterbildungSemester","RegistrationRightWeiterbildungVeranstaltung","RegistrationRightWeiterbildungEvaluationsanlass","RegistrationRightWeiterbildungFakturierung","RegistrationRightWeiterbildungMailingliste","RegistrationRightWeiterbildungPlatzangebot","RegistrationRightWeiterbildungReservation"],deniedInstanceIds:null,appKey:"anmeldedetailsEinlesen",appPath:"#/input"}]}],footer:[{key:"contact",get label(){return f("Kontakt")},allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"footer",appPath:"#/"},{key:"legal",get label(){return f("Rechtliche Hinweise")},allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"footer",appPath:"#/"},{key:"imprint",get label(){return f("Impressum")},allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"footer",appPath:"#/"}]};function nn(){var t;return((t=window.eventoPortal)==null?void 0:t.settings)??{apiServer:"",oAuthServer:"",oAuthPrefix:"",oAuthClientId:"",notificationRefreshTime:30}}function Se(t){const{instance_id:e,scope:n,culture_info:r,nbf:i,exp:o,substitution_id:s,holder_roles:l}=bs(t);return{instanceId:e,scope:n,locale:r,issueTime:i,expirationTime:o,substitutionId:s?parseInt(s,10):void 0,substitutionRoles:l?l.split(";"):void 0}}const Di=10*1e3;function ni(t,e,n){if(!t)return!1;const r=Se(t);return r.scope===e&&r.locale===n&&!Ni(r)}function Ni(t){if(!t)return!0;const{expirationTime:e}=t;return e*1e3<Date.now()}function gs(t){if(!t)return!0;const{expirationTime:e}=t;return e*1e3-Di<Date.now()}function ms(t){const{expirationTime:e}=t;return Math.max(e*1e3-Date.now(),0)}function bs(t){const n=t.split(".")[1].replace("-","+").replace("_","/"),r=decodeURIComponent(window.atob(n).split("").map(function(i){return"%"+("00"+i.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(r)}const Mi="bkdInstance",Hn="bkdCodeVerifier",pt="bkdRedirectUrl",or="bkdAccessToken",sr="bkdRefreshToken",ft="CLX.LoginToken",vs="uiCulture",ys="CLX.TokenExpire";function ar(){return localStorage.getItem(Mi)}function ws(t){localStorage.setItem(Mi,t)}function ks(t){localStorage.setItem(vs,t)}function gt(t){return localStorage.getItem(`${sr}_${t}`)}function _s(t,e){e&&localStorage.setItem(`${sr}_${t}`,e)}function zi(t){return localStorage.getItem(`${or}_${t}`)}function As(t,e){localStorage.setItem(`${or}_${t}`,e)}function Ts(){xs(localStorage,t=>{t&&(t.startsWith(or)||t.startsWith(sr))&&localStorage.removeItem(t)}),sessionStorage.removeItem(ft)}function Es(){const t=sessionStorage.getItem(ft);return t?t.replace(/^"+|"+$/g,""):null}function Ss(){const t=localStorage.getItem(ft);return t?t.replace(/^"+|"+$/g,""):null}function $s(t){sessionStorage.setItem(ft,`"${t}"`),localStorage.setItem(ft,`"${t}"`);let{expirationTime:e}=Se(t);e=e*1e3,localStorage.setItem(ys,e.toString())}function Ps(){const t=sessionStorage.getItem(Hn),e=sessionStorage.getItem(pt)??void 0;return sessionStorage.removeItem(pt),sessionStorage.removeItem(Hn),t?{redirectUri:e,codeVerifier:t}:null}function Rs(t,e){sessionStorage.setItem(Hn,t),e?sessionStorage.setItem(pt,e):sessionStorage.removeItem(pt)}function Cs(){return sessionStorage.getItem(pt)}function xs(t,e){new Array(t.length).fill(void 0).map((n,r)=>t.key(r)).forEach(n=>{n&&e(n)})}class Os{constructor(){this.state={refreshToken:null,refreshTokenPayload:null,accessToken:null,accessTokenPayload:null},this.refreshTokenSubscribers=[],this.accessTokenSubscribers=[],this.initState(),this.afterRefreshTokenUpdate(this.refreshToken,!1),this.afterAccessTokenUpdate(this.accessToken,!1)}get refreshToken(){return this.state.refreshToken}set refreshToken(e){this.state.refreshToken=e,this.afterRefreshTokenUpdate(e)}get refreshTokenPayload(){return this.state.refreshTokenPayload}get accessToken(){return this.state.accessToken}set accessToken(e){this.state.accessToken=e,this.afterAccessTokenUpdate(e)}get accessTokenPayload(){return this.state.accessTokenPayload}get authenticated(){return!!this.accessToken}get scope(){var e;return((e=this.accessTokenPayload)==null?void 0:e.scope)??null}get locale(){var e;return((e=this.accessTokenPayload)==null?void 0:e.locale)??null}get instanceId(){var e;return((e=this.accessTokenPayload)==null?void 0:e.instanceId)??null}resetAllTokens(){this.state.refreshToken=null,this.state.refreshTokenPayload=null,this.state.accessToken=null,this.state.accessTokenPayload=null,Ts()}onRefreshTokenUpdate(e){return this.refreshTokenSubscribers.push(e),()=>{const n=this.refreshTokenSubscribers.findIndex(r=>r===e);this.refreshTokenSubscribers.splice(n,1)}}onAccessTokenUpdate(e){return this.accessTokenSubscribers.push(e),()=>{const n=this.accessTokenSubscribers.findIndex(r=>r===e);this.accessTokenSubscribers.splice(n,1)}}initState(){const e=Es(),n=e?gt(Se(e).scope):null;this.state={refreshToken:n,refreshTokenPayload:null,accessToken:e,accessTokenPayload:null}}afterRefreshTokenUpdate(e,n=!0){const r=e?Se(e):null;this.state.refreshTokenPayload=r,e&&r&&n&&_s(r.scope,e),this.notifyRefreshTokenSubscribers()}afterAccessTokenUpdate(e,n=!0){const r=e?Se(e):null;this.state.accessTokenPayload=r,e&&r&&n&&(As(r.scope,e),$s(e)),this.notifyAccessTokenSubscribers()}notifyRefreshTokenSubscribers(){this.refreshTokenSubscribers.forEach(e=>e(this.refreshTokenPayload))}notifyAccessTokenSubscribers(){this.accessTokenSubscribers.forEach(e=>e(this.accessTokenPayload))}}const S=new Os,be=nn();if(typeof(be==null?void 0:be.apiServer)!="string")throw new Error("Invalid 'apiServer' setting");async function Is(){var n,r;const t=`${be.apiServer}/UserSettings/?expand=AccessInfo`,e=await wt(t);return{roles:((n=e==null?void 0:e.AccessInfo)==null?void 0:n.Roles)??[],permissions:((r=e==null?void 0:e.AccessInfo)==null?void 0:r.Permissions)??[]}}async function Ls(){const t=`${be.apiServer}/Configurations/SchoolAppNavigation`,{instanceName:e,guiLanguage:n}=await wt(t);return{instanceName:e,allowedLocales:n}}function Ds(){const t=`${be.apiServer}/TeacherSubstitutions/current`;return wt(t)}const Ui="notificationData";async function Ns(){var r;const t=`${be.apiServer}/UserSettings/Cst`,{Settings:e}=await wt(t),n=(r=e.find(i=>i.Key===Ui))==null?void 0:r.Value;return n?JSON.parse(n):[]}function ri(t){const e=`${be.apiServer}/UserSettings/Cst`,n={Id:"Cst",Settings:[{Key:Ui,Value:JSON.stringify(t)}]};return wt(e,{method:"PATCH",body:JSON.stringify(n)},!0)}async function wt(t,{method:e="GET",body:n=void 0}={},r){const{accessToken:i}=S;if(!i)throw new Error("No token available");const o=new Headers({Authorization:`Bearer ${i}`,"Content-Type":"application/json"}),s=await fetch(t,{method:e,headers:o,body:n});if(!r)return s.json()}const Ms="modulepreload",zs=function(t){return"/"+t},ii={},Us=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=zs(c),c in ii)return;ii[c]=!0;const g=c.endsWith(".css"),k=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${k}`))return;const h=document.createElement("link");if(h.rel=g?"stylesheet":Ms,g||(h.as="script"),h.crossOrigin="",h.href=c,l&&h.setAttribute("nonce",l),document.head.appendChild(h),g)return new Promise((_,u)=>{h.addEventListener("load",_),h.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(s){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s}return i.then(s=>{for(const l of s||[])l.status==="rejected"&&o(l.reason);return e().catch(o)})},Hi="de-CH",Hs=["fr-CH"],lr=["de-CH","fr-CH"],{getLocale:js,setLocale:Fs}=ls({sourceLocale:Hi,targetLocales:Hs,loadLocale:t=>Us(()=>import(`/locales/${t}.js`),[])});function ji(){const t=Ks()??Vs()??qs();return t&&Ws(t)?t:Gs()??Hi}async function Bs(t){await Fs(t),document.documentElement.lang=t}function Ks(){return new URL(location.href).searchParams.get(Ce)}function Ws(t){return lr.includes(t)}function Gs(){const t=navigator.language.slice(0,2);return lr.find(e=>e.startsWith(t))??null}function Vs(){const t=Cs();return t?new URL(t).searchParams.get(Ce):null}function qs(){const t=Ss();return t?Se(t).locale:null}const Ys=[O.navigationHome,O.navigationMyProfile,O.navigationMySettings,O.navigationPhotoList,O.navigationInputGrades,...O.footer];function rn(t,e){const n=Fi(t,({key:r})=>r===e);return n||{item:O.navigationHome,group:null}}function Xs(t,e){return Fi(t,n=>n.appPath!=="#/"&&e.startsWith(n.appPath))}function Fi(t,e){let n=Ys.find(r=>e(r));if(n)return{item:n,group:null};for(const r of t)if(n=r.items.find(i=>e(i)),n)return{item:n,group:r};return null}function on(t){const e=O.apps.find(n=>n.key===t.appKey);if(!e)throw new Error(`Invalid app: ${t.appKey}`);return e}function Zs(t,e){const{item:n}=rn(t,e);return on(n).scope}function Js(t,e,n){return t.reduce((r,i)=>{const o=i.items.filter(s=>Qs(s,e)&&ea(s,n));return o.length>0?[...r,{...i,items:o}]:r},[])}function Qs(t,e){return t.deniedInstanceIds===null||t.deniedInstanceIds.includes(e)}function ea(t,e){return t.allowedRolesOrPermissions===null||t.allowedRolesOrPermissions.some(n=>e.includes(n))}function ta(t){const e=new URL(location.href);Array.from(e.searchParams.keys()).forEach(r=>{t.includes(r)||e.searchParams.delete(r)}),history.replaceState({},"",e)}function oi(t,e,n=!1){const r=new URL(location.href);r.searchParams.set(t,e),n?history.replaceState({},"",r):history.pushState({},"",r)}function Cn(t){return t.slice(Math.max(t.indexOf("#"),0))}function xn(t,e=!1){const n=new URL(location.href);n.hash=t,e?history.replaceState({},"",n):history.pushState({},"",n)}function na(){const e=new URL(location.href).searchParams.get(Be);return e?Zs(O.navigation,e):on(O.navigationHome).scope}function ve(t){const e=typeof t=="string"?rn(v.navigation,t).item:t;return ra(e).toString()}function ra(t){const e=new URL(location.origin);return e.searchParams.set(Ce,v.locale),e.searchParams.set(Be,t.key),e.hash=t.appPath,e}var ia=Object.defineProperty,se=(t,e,n,r)=>{for(var i=void 0,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=s(e,n,i)||i);return i&&ia(e,n,i),i};const Ce="locale",Be="module",oa=[Ce,Be];class te extends Un{constructor(){super(...arguments),this.actualAppPath=null,this.setInitialized=()=>{},this.initialized=new Promise(e=>this.setInitialized=()=>e(null))}async init(){await this.loadInstanceInfo(),await this.handleStateChange("locale"),this.subscribe(this.handleStateChange.bind(this)),S.onAccessTokenUpdate(()=>this.updateNavigation()),await this.loadRolesAndPermissions(),this.setInitialized()}subscribeLocale(e){return e(this.locale),this.subscribe((n,r)=>e(r),"locale")}subscribeInstanceName(e){return this.subscribe((n,r)=>e(r),"instanceName")}subscribeNavigationItemKey(e){return e(this.navigationItemKey),this.subscribe((n,r)=>e(r),"navigationItemKey")}subscribeNavigationItem(e){return e(this.navigationItem),this.subscribe((n,r)=>e(r),"navigationItem")}subscribeScopeAndLocale(e,n=!1){return n||e(this.app.scope,this.locale),this.subscribe(()=>e(this.app.scope,this.locale),["app","locale"])}navigate(e){this.initialized.then(()=>{ta(oa),this.locale=e.searchParams.get(Ce)||js(),this.navigationItemKey=e.searchParams.get(Be)??O.navigationHome.key,e.hash&&e.hash!=="#"&&e.hash!=="#/"&&e.hash.startsWith(this.navigationItem.appPath)&&(this.appPath=e.hash)})}async handleStateChange(e){e==="locale"&&await this.updateLocale(),(e==="locale"||e==="navigationItemKey")&&ks(this.locale),(e==="rolesAndPermissions"||e==="locale")&&this.updateNavigation(),(e==="navigationItemKey"||e==="navigation")&&(this.updateNavigationItemAndGroup(this.navigationItemKey),this.updateApp(this.navigationItem))}async updateLocale(){this.allowedLocales.length>0&&!this.allowedLocales.includes(this.locale)&&(this.locale=this.allowedLocales[0]),oi(Ce,this.locale);try{await Bs(this.locale)}catch(e){console.warn("Unable to fetch/update locale (this may happen when interrupted by a redirect):",e)}}updateNavigation(){var n;const{instanceId:e}=S;e&&(this.navigation=Js(O.navigation,e,((n=S.accessTokenPayload)==null?void 0:n.substitutionRoles)||this.rolesAndPermissions))}updateNavigationItemAndGroup(e){if(this.navigation.length>0){const{item:n,group:r}=rn(this.navigation,e);this.navigationItem=n,this.navigationGroup=r,this.actualAppPath&&this.actualAppPath!=="#"&&this.actualAppPath!=="#/"&&this.actualAppPath.startsWith(n.appPath)?this.appPath=this.actualAppPath:this.appPath=n.appPath,this.actualAppPath=null,this.updateHashFromAppPath(),n.key===O.navigationHome.key&&n.key!==e&&(this.navigationItemKey=n.key)}oi(Be,this.navigationItemKey)}updateHashFromAppPath(){const e=new URL(document.location.href);e.hash=this.appPath,history.replaceState({},"",e)}updateApp(e){this.app=on(e)}async loadRolesAndPermissions(){if(!S.authenticated)return;const{roles:e,permissions:n}=await Is();this.rolesAndPermissions=[...e,...n]}async loadInstanceInfo(){if(S.authenticated)try{const{instanceName:e,allowedLocales:n}=await Ls();this.allowedLocales=n,this.instanceName=["Evento",e].filter(Boolean).join(" | ")}catch(e){console.warn("Unable to fetch/update instance name (this may happen when interrupted by a redirect):",e)}}}se([oe({value:ji()})],te.prototype,"locale");se([oe({value:[]})],te.prototype,"rolesAndPermissions");se([oe({value:""})],te.prototype,"instanceName");se([oe({value:[]})],te.prototype,"allowedLocales");se([oe({value:[]})],te.prototype,"navigation");se([fs({parameter:Be}),oe({value:null})],te.prototype,"navigationItemKey");se([oe({value:null})],te.prototype,"navigationGroup");se([oe({value:O.navigationHome})],te.prototype,"navigationItem");se([oe({value:on(O.navigationHome)})],te.prototype,"app");se([oe({value:O.navigationHome.appPath})],te.prototype,"appPath");const v=new te,Bi=C`
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
`,Ki=C`
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
`,M=C`
  :host {
    ${Bi}
    ${Ki}
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
`,cr=C`
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
`;function sa(t){var n;const e=document.createElement("style");e.innerText=t,(n=document.querySelector("body"))==null||n.appendChild(e)}var aa=Object.defineProperty,la=Object.getOwnPropertyDescriptor,Wi=(t,e,n,r)=>{for(var i=r>1?void 0:r?la(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(r?s(e,n,i):s(i))||i);return r&&i&&aa(e,n,i),i};let Kt=class extends P{constructor(){super(),this.renderedOffline=!1,this.handleMessage=t=>{switch(t.data.type){case"bkdAppResize":{this.handleResize(t.data.height);break}}},this.handleOnline=()=>{this.renderedOffline&&window.location.reload()},new J(this,v)}connectedCallback(){super.connectedCallback(),window.addEventListener("message",this.handleMessage),window.addEventListener("online",this.handleOnline)}disconnectedCallback(){window.removeEventListener("message",this.handleMessage),window.removeEventListener("online",this.handleOnline),super.disconnectedCallback()}handleResize(t){this.iframe&&(this.iframe.height=t)}renderAppIframe(){return w`${Yo(v.app.root,w`
        <iframe
          id="app"
          title=${v.app.key}
          src=${`/${v.app.root}${v.appPath}`}
        ></iframe>
      `)}`}renderFooterContent(){return w`
      ${Wo(v.navigationItemKey,[["contact",()=>w`<bkd-contact></bkd-contact>`],["legal",()=>w`<bkd-legal></bkd-legal>`],["imprint",()=>w`<bkd-imprint></bkd-imprint>`]],()=>w``)}
    `}render(){return this.renderedOffline=!navigator.onLine,navigator.onLine?S.scope!==v.app.scope?w`<main role="main"></main>`:w`
      <main role="main">
        ${he(v.app.heading,()=>w`<h1>${v.navigationItem.label}</h1>`)}
        ${he(v.app.key==="footer",()=>this.renderFooterContent(),()=>this.renderAppIframe())}
      </main>
    `:w`<main role="main">
        <h1>${f("Offline")}</h1>
        <p>${f("Keine Verbindung vorhanden.")}</p>
      </main>`}};Kt.styles=[M,C`
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
    `];Wi([ee("iframe")],Kt.prototype,"iframe",2);Kt=Wi([D("bkd-content"),N()],Kt);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const si=(t,e,n)=>{const r=new Map;for(let i=e;i<=n;i++)r.set(t[i],i);return r},$e=en(class extends tn{constructor(t){if(super(t),t.type!==ir.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,n){let r;n===void 0?n=e:e!==void 0&&(r=e);const i=[],o=[];let s=0;for(const l of t)i[s]=r?r(l,s):s,o[s]=n(l,s),s++;return{values:o,keys:i}}render(t,e,n){return this.dt(t,e,n).values}update(t,[e,n,r]){const i=qo(t),{values:o,keys:s}=this.dt(e,n,r);if(!Array.isArray(i))return this.ut=s,o;const l=this.ut??(this.ut=[]),c=[];let g,k,h=0,_=i.length-1,u=0,d=o.length-1;for(;h<=_&&u<=d;)if(i[h]===null)h++;else if(i[_]===null)_--;else if(l[h]===s[u])c[u]=ke(i[h],o[u]),h++,u++;else if(l[_]===s[d])c[d]=ke(i[_],o[d]),_--,d--;else if(l[h]===s[d])c[d]=ke(i[h],o[d]),et(t,c[d+1],i[h]),h++,d--;else if(l[_]===s[u])c[u]=ke(i[_],o[u]),et(t,i[h],i[_]),_--,u++;else if(g===void 0&&(g=si(s,u,d),k=si(l,h,_)),g.has(l[h]))if(g.has(l[_])){const m=k.get(s[u]),T=m!==void 0?i[m]:null;if(T===null){const A=et(t,i[h]);ke(A,o[u]),c[u]=A}else c[u]=ke(T,o[u]),et(t,i[h],T),i[m]=null;u++}else $n(i[_]),_--;else $n(i[h]),h++;for(;u<=d;){const m=et(t,c[d+1]);ke(m,o[u]),c[u++]=m}for(;h<=_;){const m=i[h++];m!==null&&$n(m)}return this.ut=s,Pi(t,c),pe}});var ca=Object.defineProperty,da=Object.getOwnPropertyDescriptor,ua=(t,e,n,r)=>{for(var i=r>1?void 0:r?da(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(r?s(e,n,i):s(i))||i);return r&&i&&ca(e,n,i),i};let jn=class extends P{constructor(){super(),new J(this,v)}renderFooterLink(t){const e=ve(t);return w`
      <a
        href=${e}
        @click=${n=>{n==null||n.preventDefault(),v.navigate(new URL(e))}}
        >${t.label}</a
      >
    `}render(){return w`
      <footer role="contentinfo">
        <div class="copyright">${f("© Bildungs- und Kulturdirektion")}</div>
        <div class="footer-nav">
          ${$e(O.footer,t=>t.key,this.renderFooterLink.bind(this))}
        </div>
      </footer>
    `}};jn.styles=[M,C`
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
    `];jn=ua([D("bkd-footer"),N()],jn);var ha=Object.defineProperty,pa=Object.getOwnPropertyDescriptor,fa=(t,e,n,r)=>{for(var i=r>1?void 0:r?pa(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(r?s(e,n,i):s(i))||i);return r&&i&&ha(e,n,i),i};let Fn=class extends P{render(){return w`<p>
      ${f("Lernende, Lehrpersonen und Schulmitarbeitende wenden sich bei Fehlermeldungen in Evento Web oder Fragen zu dieser Fachapplikation an die zuständige Stelle in ihrer Schule. Diese wird von der Schule kommuniziert. Im Zweifelsfall kontaktieren Sie bitte das Schulsekretariat.")}
    </p>`}};Fn.styles=[M,cr];Fn=fa([D("bkd-contact"),N()],Fn);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*ga(t,e){const n=typeof e=="function";if(t!==void 0){let r=-1;for(const i of t)r>-1&&(yield n?e(r):e),r++,yield i}}function Wt(t){return ga(t==null?void 0:t.split(`
`),w`<br />`)}var ma=Object.defineProperty,ba=Object.getOwnPropertyDescriptor,va=(t,e,n,r)=>{for(var i=r>1?void 0:r?ba(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(r?s(e,n,i):s(i))||i);return r&&i&&ma(e,n,i),i};let Bn=class extends P{constructor(){super(),new J(this,v)}render(){return w`
      <div class="content-section">
        <h2>${f("Inhaltsverantwortung")}</h2>
        <p>${f("Zuständige Schule, siehe Kontakt")}</p>
      </div>

      <div class="content-section">
        <h2>${f("Fachapplikation")}</h2>
        <p>
          ${Wt(f(`Bildungs- und Kulturdirektion des Kantons Bern
Mittelschul- und Berufsbildungsamt
Fachbereich Informatikanwendungen
Kasernenstrasse 27
3013 Bern`))}
        </p>
        <p><a href="mailto:fbi.mba@be.ch">${f("E-Mail")}</a></p>
      </div>

      <div class="content-section">
        <h2>${f("Betrieb und Technik")}</h2>
        <p>
          ${Wt(f(`Bedag Informatik AG
Engehaldenstrasse 12
3012 Bern`))}
        </p>
        <p>
          <a href="https://www.bedag.ch/" target="_blank">www.bedag.ch</a>
        </p>
      </div>
    `}};Bn.styles=[M,cr];Bn=va([D("bkd-imprint"),N()],Bn);var ya=Object.defineProperty,wa=Object.getOwnPropertyDescriptor,ka=(t,e,n,r)=>{for(var i=r>1?void 0:r?wa(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(r?s(e,n,i):s(i))||i);return r&&i&&ya(e,n,i),i};let Kn=class extends P{render(){return w`
      <div class="content-section">
        <h2>${f("Haftungsausschluss")}</h2>
        <p>
          ${f("Die Inhalte dieser Fachapplikation sind ein Datenangebot der zuständigen Schule. Obwohl diese die Daten regelmässig auf Richtigkeit und Aktualität hin prüft, lehnen wir, soweit gesetzlich zulässig, jede Haftung für unerwünschte Folgen aus dem Gebrauch dieser Daten ab.")}
        </p>
        <p>
          ${f("Diese Fachapplikation enthält Links zu Angeboten von Dritten. Sie benutzen diese Links auf eigenes Risiko. Für die Inhalte dieser anderen Webseiten übernehmen wir keine Verantwortung. Von unserer Haftung ausgeschlossen ist namentlich die Garantie für die ständige Verfügbarkeit unserer Fachapplikation sowie Schäden (z.B. wegen Verbindungsunterbruch oder schädlicher Software), die durch die Benutzung dieser Fachapplikation entstehen könnten.")}
        </p>
      </div>

      <div class="content-section">
        <h2>${f("Immaterialgüterrechte")}</h2>
        <p>
          ${f("Sichtbare Elemente (Bilder/Icons) dieser Fachapplikation können Dritten gehören. Diese Elemente dürfen deshalb grundsätzlich nicht verwendet werden. Der Kanton Bern kann deren Verwendung ausserhalb der Webseite auf Anfrage erlauben, sofern er dazu selbst berechtigt ist. Für solche Anfragen wenden Sie sich bitte an die Stelle, die für die Fachapplikation verantwortlich ist. Die Kontaktangaben finden Sie im Impressum.")}
        </p>
      </div>

      <div class="content-section">
        <h2>${f("Datenschutzerklärung")}</h2>
        <p>
          ${f("Verantwortliche Stelle im Sinne der Datenschutzgesetze, unter anderem auch der EU-Datenschutzgrundverordnung (DSGVO), ist:")}
        </p>
        <p>
          ${Wt(f(`Mittelschul- und Berufsbildungsamt
Kasernenstrasse 27
3013 Bern`))}
        </p>
        <p><a href="mailto:fbi.mba@be.ch">${f("E-Mail")}</a></p>
        <p>
          <a href="${f("https://www.be.ch/mba")}" target="_blank"
            >${f("https://www.be.ch/mba").replace("https://","")}</a
          >
        </p>
      </div>

      <div class="content-section">
        <h2>${f("Datenbearbeitung")}</h2>
        <p>
          ${f("Der zum Betrieb dieser Fachapplikation eingesetzte Leistungserbringer des Kantons Bern bearbeitet teilweise die IP-Adresse oder technische Angaben der Endgeräte von Personen, die diese Webseite besuchen. Der Leistungserbringer untersteht einer Datenschutzgesetzgebung mit einem dem Berner Recht gleichwertigem Datenschutzniveau. Die IP-Adresse wird verschlüsselt übertragen und vor der weiteren Bearbeitung anonymisiert.")}
        </p>
        <p>
          ${f("Mit der Benutzung dieser Fachapplikation stimmen Sie dieser Datenbearbeitung soweit erforderlich zu. Sie erfolgt im Einzelnen wie folgt:")}
        </p>
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>${f("Leistungserbringer")}</th>
                <th>${f("Bearbeitete Daten")}</th>
                <th>${f("Grund der Bearbeitung")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th style="white-space: nowrap;">
                  ${Wt(f(`Bedag Informatik AG
Engehaldenstrasse 12
3012 Bern`))}
                </th>
                <td>
                  ${f("IP-Adresse, technische Angaben zum Betriebssystem und Webbrowser, Referrer-URL, Hostname, Uhrzeit")}
                </td>
                <td>
                  ${f("Logdaten des Webserves des Kantons Bern zum Erkennen und Beheben von technischen Störungen und Angriffen.")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="content-section">
        <h2>${f("Cookies")}</h2>
        <p>${f("Diese Webseite setzt keine Cookies ein.")}</p>
      </div>

      <div class="content-section">
        <h2>${f("Soziale Medien")}</h2>
        <p>
          ${f("Soweit diese Fachapplikation auf soziale Medien wie YouTube verweist, geschieht das nur durch Links, nicht etwa durch das Ausführen von Programmen (Plug-ins). Mit dem Aufrufen dieser Fachapplikation werden daher keine Personendaten an die sozialen Medien übertragen.")}
        </p>
      </div>

      <div class="content-section">
        <h2>${f("Kontakt bei Fragen")}</h2>
        <p>
          ${f("Wenn Sie Fragen zum Datenschutz im Zusammenhang mit dieser Fachapplikation haben, können Sie sich an die Stelle wenden, die für die Fachapplikation verantwortlich ist. Die Kontaktangaben finden Sie im Impressum.")}
        </p>
      </div>
    `}};Kn.styles=[M,cr,C`
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
    `];Kn=ka([D("bkd-legal"),N()],Kn);function Gt(t,e){if(t===e||t.contains(e))return!0;if("shadowRoot"in t&&t.shadowRoot)return Gt(t.shadowRoot,e);for(const n of Array.from(t.children))if(Gt(n,e))return!0;return!1}class kt{constructor(e,n){this.host=e,this.options=n,this.open=!1,this.closeOnBlur=r=>{this.menuElement&&"relatedTarget"in r&&(this.menuElement.contains(r.relatedTarget)||this.closeDeferred())},this.handleDocumentClick=r=>{const i=r.composedPath()[0];if(!i)return;const o=this.toggleElement&&!Gt(this.toggleElement,i),s=this.menuElement&&!Gt(this.menuElement,i);o&&s&&this.closeDeferred()},this.handleIframeClick=()=>{this.closeDeferred()},this.handleKeydown=r=>{switch(r.key){case"Tab":{this.options.tabInside||this.close();break}case"Escape":{this.close();break}case"ArrowDown":{const i=this.items[this.nextLinkIndex(1)];i==null||i.focus();break}case"ArrowUp":{const i=this.items[this.nextLinkIndex(-1)];i==null||i.focus();break}}},this.host.addController(this)}get toggleElement(){return this.options.queryToggleElement()}get menuElement(){return this.options.queryMenuElement()}get items(){var n;const e=((n=this.options)==null?void 0:n.queryItems)&&this.options.queryItems();return Array.from(e??[])}get focusedItem(){var e;return(e=this.options)!=null&&e.queryFocused?this.options.queryFocused():null}hostDisconnected(){this.removeListeners()}toggle(){this.open=!this.open,this.host.requestUpdate(),this.open?this.addListeners():setTimeout(()=>{this.removeListeners()})}close(){this.open&&this.toggle()}closeDeferred(){setTimeout(()=>this.close())}addListeners(){setTimeout(()=>{var e,n;this.options.tabInside&&((e=this.menuElement)==null||e.addEventListener("focusout",this.closeOnBlur,!0)),(n=this.iframeDocument)==null||n.addEventListener("click",this.handleIframeClick,!0)}),document.addEventListener("click",this.handleDocumentClick,!0),this.host.addEventListener("keydown",this.handleKeydown,!0)}removeListeners(){var e,n;this.options.tabInside&&((e=this.menuElement)==null||e.removeEventListener("focusout",this.closeOnBlur,!0)),document.removeEventListener("click",this.handleDocumentClick,!0),(n=this.iframeDocument)==null||n.removeEventListener("click",this.handleIframeClick,!0),this.host.removeEventListener("keydown",this.handleKeydown,!0)}get iframeDocument(){var i,o;const e=(i=document.querySelector("bkd-portal"))==null?void 0:i.shadowRoot,n=(o=e==null?void 0:e.querySelector("bkd-content"))==null?void 0:o.shadowRoot,r=n==null?void 0:n.querySelector("iframe");return(r==null?void 0:r.contentDocument)??null}activeLinkIndex(){const e=this.focusedItem?this.items.indexOf(this.focusedItem):-1;return e===-1?null:e}nextLinkIndex(e){const n=this.activeLinkIndex(),r=0,i=this.items.length-1;if(n===null)return e>0?r:i;const o=n+e;return o>i?r:o<r?i:o}}var _a=Object.defineProperty,Aa=Object.getOwnPropertyDescriptor,dr=(t,e,n,r)=>{for(var i=r>1?void 0:r?Aa(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(r?s(e,n,i):s(i))||i);return r&&i&&_a(e,n,i),i};let mt=class extends P{constructor(){super(),this.mobileNav=new kt(this,{queryToggleElement:()=>{var t,e;return((e=(t=this.serviceNavElement)==null?void 0:t.shadowRoot)==null?void 0:e.querySelector("bkd-hamburger"))??null},queryMenuElement:()=>{var t;return((t=this.mobileNavElement)==null?void 0:t.shadowRoot)??null},tabInside:!0}),new J(this,v)}handleLogoClick(t){t.preventDefault(),v.navigationItemKey=O.navigationHome.key,v.appPath=O.navigationHome.appPath}handleNavItemClick(t){const{item:e}=t.detail;v.navigationItemKey=e.key,this.mobileNav.close()}handleSettingsItemClick(t){const{item:e,event:n}=t.detail;e.external||(n.preventDefault(),e.key==="logout"?this.dispatchEvent(new CustomEvent("bkdlogout",{composed:!0,bubbles:!0})):v.navigationItemKey=e.key),this.mobileNav.close()}render(){return w`
      <header role="banner">
        <a
          class="logo"
          href=${ve("home")}
          @click=${this.handleLogoClick.bind(this)}
          ><img src="logo.svg" alt=${f("Evento Startseite")}
        /></a>
        <div class="logo-caption">${v.instanceName}</div>
        ${he(navigator.onLine,()=>w`<bkd-service-nav
              .mobileNavOpen=${this.mobileNav.open}
              @bkdhamburgertoggle=${()=>this.mobileNav.toggle()}
              @bkdsettingsitemclick=${this.handleSettingsItemClick.bind(this)}
            ></bkd-service-nav> `)}
        ${he(navigator.onLine,()=>w` <bkd-nav
              @bkdnavitemclick=${this.handleNavItemClick.bind(this)}
            ></bkd-nav>`)}
        ${he(this.mobileNav.open,()=>w`<bkd-mobile-nav
              @bkdnavitemclick=${this.handleNavItemClick.bind(this)}
              @bkdsettingsitemclick=${this.handleSettingsItemClick.bind(this)}
            ></bkd-mobile-nav>`)}
      </header>
    `}};mt.styles=[M,C`
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
    `];dr([ee("bkd-service-nav")],mt.prototype,"serviceNavElement",2);dr([ee("bkd-mobile-nav")],mt.prototype,"mobileNavElement",2);mt=dr([D("bkd-header"),N()],mt);var Ta=Object.defineProperty,Ea=Object.getOwnPropertyDescriptor,Gi=(t,e,n,r)=>{for(var i=r>1?void 0:r?Ea(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(r?s(e,n,i):s(i))||i);return r&&i&&Ta(e,n,i),i};let Vt=class extends P{constructor(){super(...arguments),this.open=!1}toggle(){this.dispatchEvent(new CustomEvent("bkdhamburgertoggle",{bubbles:!0,composed:!0}))}render(){const t=this.open?"/icons/close.svg":"/icons/hamburger.svg";return w`
      <button
        class="hamburger"
        aria-expanded=${this.open}
        aria-label=${f("Menü")}
        @click=${this.toggle.bind(this)}
      >
        <img src=${t} alt="" width="32" height="32" />
      </button>
    `}};Vt.styles=[M,C`
      :host {
        display: flex;
      }

      button {
        background: transparent;
        border: none;
        cursor: pointer;
      }
    `];Gi([Y()],Vt.prototype,"open",2);Vt=Gi([D("bkd-hamburger"),N()],Vt);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xe=en(class extends tn{constructor(t){var e;if(super(t),t.type!==ir.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var r,i;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!((r=this.nt)!=null&&r.has(o))&&this.st.add(o);return this.render(e)}const n=t.element.classList;for(const o of this.st)o in e||(n.remove(o),this.st.delete(o));for(const o in e){const s=!!e[o];s===this.st.has(o)||(i=this.nt)!=null&&i.has(o)||(s?(n.add(o),this.st.add(o)):(n.remove(o),this.st.delete(o)))}return pe}});var Sa=Object.defineProperty,$a=Object.getOwnPropertyDescriptor,Pa=(t,e,n,r)=>{for(var i=r>1?void 0:r?$a(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(r?s(e,n,i):s(i))||i);return r&&i&&Sa(e,n,i),i};let Wn=class extends P{constructor(){super(),new J(this,v)}handleLocaleChange(t,e){t.preventDefault(),v.locale=e}render(){return w`<ul>
      ${lr.map(t=>w`<li>
            <a
              href="#"
              class=${xe({active:t===v.locale})}
              aria-current=${t===v.locale}
              @click=${e=>this.handleLocaleChange(e,t)}
            >
              ${t.slice(0,2)}
            </a>
          </li>`)}
    </ul>`}};Wn.styles=[M,C`
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
    `];Wn=Pa([D("bkd-language-switcher"),N()],Wn);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Gn extends tn{constructor(e){if(super(e),this.it=R,e.type!==ir.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===R||e==null)return this._t=void 0,this.it=e;if(e===pe)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const n=[e];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}Gn.directiveName="unsafeHTML",Gn.resultType=1;const ge=en(Gn),Ra=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="m22 15.975-1.775 1.775L12 9.525 3.775 17.75 2 15.975l10-10 10 10Z"/></svg>
`,Ca=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M2 8.025 3.775 6.25 12 14.475l8.225-8.225L22 8.025l-10 10-10-10Z"/></svg>
`;function Vi(t){return[{key:"myProfile",label:f("Mein Profil"),href:ve("myProfile")},{key:"mySettings",label:f("Einstellungen"),href:ve("mySettings")},{key:"videos",label:f("Video-Tutorials"),href:t==="de-CH"?"https://www.youtube.com/playlist?list=PLLDtLiOuctbx-_EQWgWqTO1MRbX845OEf":"https://www.youtube.com/playlist?list=PLLDtLiOuctbyEegnquAkaW4u8cm62lFAU",img:"/icons/external-link.svg",external:!0},{key:"logout",label:f("Logout"),href:"#",img:"/icons/logout.svg"}]}var xa=Object.defineProperty,Oa=Object.getOwnPropertyDescriptor,qi=(t,e,n,r)=>{for(var i=r>1?void 0:r?Oa(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(r?s(e,n,i):s(i))||i);return r&&i&&xa(e,n,i),i};let qt=class extends P{constructor(){super(),this.openGroup=null,this.handleKeyup=t=>{t.key==="Tab"&&this.openGroupOfFocusedItem()},new J(this,v)}connectedCallback(){super.connectedCallback(),this.openGroupOfCurrentItem(),this.addEventListener("keyup",this.handleKeyup)}disconnectedCallback(){this.removeEventListener("keyup",this.handleKeyup),super.disconnectedCallback()}openGroupOfCurrentItem(){this.openGroup||(this.openGroup=v.navigationGroup)}openGroupOfFocusedItem(){var e,n;const t=(e=this.shadowRoot)==null?void 0:e.activeElement;if(t instanceof HTMLElement){const r=t.dataset.itemKey;if(r){const{group:i}=rn(O.navigation,r);i&&i.label!==((n=this.openGroup)==null?void 0:n.label)&&(this.openGroup=i)}}}handleGroupClick(t,e){var n;t.preventDefault(),this.openGroup=e.label!==((n=this.openGroup)==null?void 0:n.label)?e:null}handleNavItemClick(t,e){t.preventDefault(),this.dispatchEvent(new CustomEvent("bkdnavitemclick",{detail:{item:e},composed:!0,bubbles:!0}))}handleSettingsItemClick(t,e){this.dispatchEvent(new CustomEvent("bkdsettingsitemclick",{detail:{item:e,event:t},composed:!0,bubbles:!0}))}renderGroup(t){var n;const e=t.label===((n=this.openGroup)==null?void 0:n.label);return w`
      <li
        class=${xe({group:!0,open:e})}
        aria-expanded=${e}
      >
        <button
          class="group-header"
          tabindex="-1"
          @click=${r=>this.handleGroupClick(r,t)}
        >
          <label> ${t.label} </label>
          ${ge(e?Ra:Ca)}
        </button>
        <ul class="items">
          ${$e(t.items,r=>r.label,this.renderNavItem.bind(this))}
        </ul>
      </li>
    `}renderNavItem(t){const e=t.key===v.navigationItemKey;return w`
      <li
        class=${xe({item:!0,active:e})}
      >
        <a
          href=${ve(t)}
          data-item-key=${t.key}
          @click=${n=>this.handleNavItemClick(n,t)}
        >
          ${t.label}
        </a>
      </li>
    `}renderSettingsItem(t){return w`<li>
      <a
        href=${t.href}
        target=${t.external?"_blank":"_self"}
        @click=${e=>this.handleSettingsItemClick(e,t)}
      >
        ${t.label}
      </a>
      ${t.img?w`<img src=${t.img} alt="" width="24" height="24" />`:R}
    </li>`}render(){return w`
      <nav role="navigation" aria-label=${f("Mobile Navigation")}>
        <ul class="nav">
          ${$e(v.navigation,t=>t.label,this.renderGroup.bind(this))}
        </ul>
        <div class="service-nav">
          <ul>
            ${$e(Vi(v.locale),t=>t.key,this.renderSettingsItem.bind(this))}
          </ul>
          ${he(v.allowedLocales.length>1,()=>w`<bkd-language-switcher></bkd-language-switcher>`)}
        </div>
      </nav>
    `}};qt.styles=[M,C`
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
    `];qi([Ve()],qt.prototype,"openGroup",2);qt=qi([D("bkd-mobile-nav"),N()],qt);var Ia=Object.defineProperty,La=Object.getOwnPropertyDescriptor,Da=(t,e,n,r)=>{for(var i=r>1?void 0:r?La(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(r?s(e,n,i):s(i))||i);return r&&i&&Ia(e,n,i),i};let Vn=class extends P{constructor(){super(),new J(this,v)}renderGroupToggle(t,e){return w`
      <bkd-nav-group-toggle
        .group=${t}
        ?active=${e}
      ></bkd-nav-group-toggle>
    `}render(){return w`<nav role="navigation" aria-label=${f("Hauptnavigation")}>
      ${$e(v.navigation,t=>t.label,t=>{var e;return this.renderGroupToggle(t,t.label===((e=v.navigationGroup)==null?void 0:e.label))})}
    </nav>`}};Vn.styles=[M,C`
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
    `];Vn=Da([D("bkd-nav"),N()],Vn);var Na=Object.defineProperty,Ma=Object.getOwnPropertyDescriptor,ur=(t,e,n,r)=>{for(var i=r>1?void 0:r?Ma(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(r?s(e,n,i):s(i))||i);return r&&i&&Na(e,n,i),i};let bt=class extends P{constructor(){super(),this.open=!1,new J(this,v)}handleItemClick(t,e){t.preventDefault(),this.dispatchEvent(new CustomEvent("bkdnavitemclick",{detail:{item:e},composed:!0,bubbles:!0}))}renderItem(t){const e=t.key===v.navigationItemKey;return w`
      <li role="presentation" class=${xe({active:e})}>
        <a
          role="menuitem"
          href=${ve(t)}
          @click=${n=>this.handleItemClick(n,t)}
          >${t.label}</a
        >
      </li>
    `}render(){if(!(!this.group||!this.open))return w`
      <ul role="menu">
        ${$e(this.group.items,t=>t.key,this.renderItem.bind(this))}
      </ul>
    `}};bt.styles=[M,C`
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
    `];ur([Y()],bt.prototype,"group",2);ur([Y()],bt.prototype,"open",2);bt=ur([D("bkd-nav-group-dropdown"),N()],bt);var za=Object.defineProperty,Ua=Object.getOwnPropertyDescriptor,_t=(t,e,n,r)=>{for(var i=r>1?void 0:r?Ua(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(r?s(e,n,i):s(i))||i);return r&&i&&za(e,n,i),i};let Oe=class extends P{constructor(){super(...arguments),this.dropdown=new kt(this,{queryToggleElement:()=>this.toggleElement??null,queryMenuElement:()=>{var t,e;return((e=(t=this.menuElement)==null?void 0:t.shadowRoot)==null?void 0:e.querySelector('ul[role="menu"]'))??null},queryItems:()=>{var t,e;return((e=(t=this.menuElement)==null?void 0:t.shadowRoot)==null?void 0:e.querySelectorAll("a[role='menuitem']"))??null},queryFocused:()=>{var t,e;return((e=(t=this.menuElement)==null?void 0:t.shadowRoot)==null?void 0:e.activeElement)??null}})}toggle(t){t.preventDefault(),this.dropdown.toggle()}handleItemClick(){this.dropdown.close()}render(){if(this.group)return w`
      <a
        href="#"
        @click=${this.toggle.bind(this)}
        class=${xe({active:!!this.active})}
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
    `}};Oe.styles=[M,C`
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
    `];_t([Y()],Oe.prototype,"group",2);_t([Y({type:Boolean})],Oe.prototype,"active",2);_t([ee("a")],Oe.prototype,"toggleElement",2);_t([ee("bkd-nav-group-dropdown")],Oe.prototype,"menuElement",2);Oe=_t([D("bkd-nav-group-toggle"),N()],Oe);var Ha=Object.defineProperty,ja=Object.getOwnPropertyDescriptor,Yi=(t,e,n,r)=>{for(var i=r>1?void 0:r?ja(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(r?s(e,n,i):s(i))||i);return r&&i&&Ha(e,n,i),i};let Yt=class extends P{handleClick(t){t.preventDefault()}render(){if(this.item)return w`<a href="#" @click=${this.handleClick.bind(this)}
      >${this.item.label}</a
    >`}};Yt.styles=[M,C``];Yi([Y()],Yt.prototype,"item",2);Yt=Yi([D("bkd-nav-item-link"),N()],Yt);var Fa=Object.defineProperty,Ba=Object.getOwnPropertyDescriptor,Xi=(t,e,n,r)=>{for(var i=r>1?void 0:r?Ba(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(r?s(e,n,i):s(i))||i);return r&&i&&Fa(e,n,i),i};let Xt=class extends P{constructor(){super(),this.mobileNavOpen=!1,new J(this,v)}render(){return w`
      <nav role="navigation" aria-label=${f("Servicenavigation")}>
        <bkd-substitutions-toggle></bkd-substitutions-toggle>
        <bkd-notifications-toggle></bkd-notifications-toggle>
        <bkd-user-settings></bkd-user-settings>
        ${he(v.allowedLocales.length>1,()=>w`<bkd-language-switcher></bkd-language-switcher>`)}
        <bkd-hamburger .open=${this.mobileNavOpen}></bkd-hamburger>
      </nav>
    `}};Xt.styles=[M,C`
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
    `];Xi([Y()],Xt.prototype,"mobileNavOpen",2);Xt=Xi([D("bkd-service-nav"),N()],Xt);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Zi(t,e){if(t!==void 0){let n=0;for(const r of t)yield e(r,n++)}}var Ka=Object.defineProperty,Wa=Object.getOwnPropertyDescriptor,sn=(t,e,n,r)=>{for(var i=r>1?void 0:r?Wa(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(r?s(e,n,i):s(i))||i);return r&&i&&Ka(e,n,i),i};let Ke=class extends P{constructor(){super(...arguments),this.availableSubstitutions=[],this.activeSubstitution=null,this.open=!1}get displayedSubstitutions(){return this.availableSubstitutions.filter(t=>!this.activeSubstitution||t.Id===this.activeSubstitution.Id)}handleSubstitutionClick(t,e){t.preventDefault(),this.dispatchEvent(new CustomEvent("bkdsubstitutionstart",{detail:{substitution:e},composed:!0,bubbles:!0}))}handleStopClick(){this.dispatchEvent(new CustomEvent("bkdsubstitutionstop",{composed:!0,bubbles:!0}))}handleCloseClick(){this.dispatchEvent(new CustomEvent("bkdclose"))}renderSubstitution(t){var n;const e=t.Id===((n=this.activeSubstitution)==null?void 0:n.Id);return w`
      <li role="presentation" class=${xe({active:e})}>
        <a
          role="menuitem"
          href="#"
          @click=${r=>this.handleSubstitutionClick(r,t)}
          >${t.Holder}</a
        >
      </li>
    `}render(){if(this.open)return w`
      <ul role="menu" id="substitutions-menu">
        <li role="presentation" class="dropdown-menu-header">
          <button
            role="menuitem"
            class="dropdown-menu-close"
            @click=${this.handleCloseClick.bind(this)}
          >
            <img src="icons/close.svg" alt=${f("Schliessen")} />
          </button>
          <div class="dropdown-menu-heading">
            ${f("Stellvertretung ausüben")}
          </div>
        </li>
        ${Zi(this.displayedSubstitutions,this.renderSubstitution.bind(this))}
        ${he(this.activeSubstitution,()=>w`<li role="presentation" class="dropdown-menu-stop">
              <button role="menuitem" @click=${this.handleStopClick.bind(this)}>
                ${f("Stellvertretung beenden")}
              </button>
            </li>`)}
      </ul>
    `}};Ke.styles=[M,C`
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
    `];sn([Y()],Ke.prototype,"availableSubstitutions",2);sn([Y()],Ke.prototype,"activeSubstitution",2);sn([Y()],Ke.prototype,"open",2);Ke=sn([D("bkd-substitutions-dropdown"),N()],Ke);const Ga=`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="7.4" fill="none"><path fill="currentColor" d="m6 7.4-6-6L1.4 0 6 4.6 10.6 0 12 1.4Z"/></svg>
`,Va=`<svg xmlns="http://www.w3.org/2000/svg" width="11.414" height="11.414" fill="none"><path stroke="currentColor" stroke-width="2" d="m.707.707 10 10m-10 0 10-10"/></svg>
`,qa=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M2 20v-2.8a3 3 0 0 1 .425-1.563A2.794 2.794 0 0 1 3.6 14.55c1-.5 2.038-.883 3.113-1.15 1.074-.267 2.17-.4 3.287-.4.417 0 .833.03 1.25.088.417.058.833.129 1.25.212v1.575c-.75.367-1.354.85-1.813 1.45-.458.6-.687 1.383-.687 2.35V20H2Zm10 0v-1.4c0-.4.104-.77.313-1.113a1.76 1.76 0 0 1 .887-.737c.6-.25 1.22-.438 1.863-.563a10.11 10.11 0 0 1 3.874 0 9.604 9.604 0 0 1 1.863.563c.383.15.68.396.887.738.209.341.313.712.313 1.112V20H12Zm5-5c-.7 0-1.292-.242-1.775-.725-.483-.483-.725-1.075-.725-1.775s.242-1.292.725-1.775C15.708 10.242 16.3 10 17 10s1.292.242 1.775.725c.483.483.725 1.075.725 1.775s-.242 1.292-.725 1.775C18.292 14.758 17.7 15 17 15Zm-7-3c-1.1 0-2.042-.392-2.825-1.175C6.392 10.042 6 9.1 6 8s.392-2.042 1.175-2.825C7.958 4.392 8.9 4 10 4s2.042.392 2.825 1.175C13.608 5.958 14 6.9 14 8s-.392 2.042-1.175 2.825C12.042 11.608 11.1 12 10 12Z"/></svg>
`;function Ya(t,e,n){const r=document.createElement("form");r.method=t,r.style.visibility="hidden",r.action=e,Object.keys(n).forEach(i=>{const o=document.createElement("input");o.type="hidden",o.name=i,o.value=n[i],r.appendChild(o)}),document.body.appendChild(r),r.submit()}var Xa=Object.defineProperty,Za=Object.getOwnPropertyDescriptor,At=(t,e,n,r)=>{for(var i=r>1?void 0:r?Za(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(r?s(e,n,i):s(i))||i);return r&&i&&Xa(e,n,i),i};let Ie=class extends P{constructor(){super(),this.availableSubstitutions=[],this.activeSubstitution=null,this.dropdown=new kt(this,{queryToggleElement:()=>this.toggleElement??null,queryMenuElement:()=>{var t;return((t=this.menuElement)==null?void 0:t.shadowRoot)??null},tabInside:!this.isLargeScreen(),queryItems:()=>{var t,e;return((e=(t=this.menuElement)==null?void 0:t.shadowRoot)==null?void 0:e.querySelectorAll("a[role='menuitem']"))??null},queryFocused:()=>{var t,e;return((e=(t=this.menuElement)==null?void 0:t.shadowRoot)==null?void 0:e.activeElement)??null}}),new J(this,v)}connectedCallback(){super.connectedCallback(),this.fetch()}async fetch(){const t=await Ds();this.availableSubstitutions=t.filter(n=>this.isNotInFuture(n)).sort((n,r)=>n.Holder.localeCompare(r.Holder));const e=this.getActiveSubstitutionId();this.activeSubstitution=this.availableSubstitutions.find(n=>n.Id===e)??null}isNotInFuture(t){return!!t.DateFrom&&new Date(t.DateFrom)<=new Date}getActiveSubstitutionId(){var t;return((t=S.accessTokenPayload)==null?void 0:t.substitutionId)??null}toggle(t){t.preventDefault(),this.activeSubstitution&&this.isLargeScreen()?this.stopSubstitution():this.dropdown.toggle()}isLargeScreen(){return window.innerWidth>1200}startSubstitution(t){this.activeSubstitution||this.redirect(t,"start")}stopSubstitution(){this.activeSubstitution&&this.redirect(this.activeSubstitution,"stop")}redirect(t,e){const{oAuthServer:n,oAuthPrefix:r}=nn(),i=`${n}/${r}/Authorization/Substitutions/${t.Id}/${e}`;Ya("POST",i,{access_token:S.accessToken??"",redirect_uri:ve("home")})}handleSubstitutionStart(t){this.dropdown.close(),this.startSubstitution(t.detail.substitution)}handleSubstitutionStop(){this.dropdown.close(),this.stopSubstitution()}getLabel(){var t;return((t=this.activeSubstitution)==null?void 0:t.Holder)||f("Stellvertretung ausüben")}isAllowed(){return v.app.scope==="Tutoring"}render(){if(!(!this.isAllowed()||this.availableSubstitutions.length===0))return w`
      <button
        class=${xe({active:!!this.activeSubstitution,open:this.dropdown.open})}
        @click=${this.toggle.bind(this)}
        aria-label=${this.getLabel()}
        aria-expanded=${this.dropdown.open}
        aria-haspopup="menu"
      >
        <div class="icon">${ge(qa)}</div>
        <div class="label">${this.getLabel()}</div>
        <div class="icon-caret">
          ${ge(this.activeSubstitution?Va:Ga)}
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
    `}};Ie.styles=[M,C`
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
    `];At([ee("button")],Ie.prototype,"toggleElement",2);At([ee("bkd-substitutions-dropdown")],Ie.prototype,"menuElement",2);At([Ve()],Ie.prototype,"availableSubstitutions",2);At([Ve()],Ie.prototype,"activeSubstitution",2);Ie=At([D("bkd-substitutions-toggle"),N()],Ie);const Ja='<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path fill="currentColor" d="M16 2a2.25 2.25 0 0 0-2.25 2.25v1.043C9.87 6.293 7 9.807 7 14v7.5h18V14c0-4.193-2.87-7.707-6.75-8.707V4.25A2.25 2.25 0 0 0 16 2M4 24.5v3h9.404A3 3 0 1 0 19 29a3 3 0 0 0-.407-1.5H28v-3z"/></svg>';function Qa(...t){}var el=Object.defineProperty,tl=Object.getOwnPropertyDescriptor,Tt=(t,e,n,r)=>{for(var i=r>1?void 0:r?tl(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(r?s(e,n,i):s(i))||i);return r&&i&&el(e,n,i),i};const st=nn();typeof(st==null?void 0:st.notificationRefreshTime)!="number"&&(st.notificationRefreshTime=30);var Mt=(t=>(t.PENDING="pending",t.ERROR="error",t.SUCCESS="success",t))(Mt||{});let Le=class extends P{constructor(){super(...arguments),this.state="pending",this.dropdown=new kt(this,{queryToggleElement:()=>this.toggleElement??null,queryMenuElement:()=>{var t;return((t=this.dropdownElement)==null?void 0:t.shadowRoot)??null},queryItems:()=>{var t,e;return((e=(t=this.dropdownElement)==null?void 0:t.shadowRoot)==null?void 0:e.querySelectorAll("button"))??null},queryFocused:()=>{var t,e;return((e=(t=this.dropdownElement)==null?void 0:t.shadowRoot)==null?void 0:e.activeElement)??null}})}connectedCallback(){super.connectedCallback(),this.fetch(),this.interval=setInterval(()=>this.fetch(),st.notificationRefreshTime*1e3)}disconnectedCallback(){clearInterval(this.interval),super.disconnectedCallback()}handleDeleteAllNotifications(){const t=[];ri(t),this.notifications=t}handleDeleteNotification(t){if(!this.notifications)return;const e=this.notifications.filter(n=>n.id!==t.detail.id);ri(e),this.notifications=e}async fetch(){try{this.notifications=await Ns(),this.state="success"}catch{this.state="error"}}render(){var t,e;return w` <button
        id="notifications-toggle"
        type="button"
        aria-label="${f("Benachrichtigungen")}"
        aria-expanded=${this.dropdown.open}
        @click="${()=>this.dropdown.toggle()}"
      >
        ${ge(Ja)}
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
      </bkd-notifications-dropdown>`}};Le.styles=[M,C`
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
    `];Tt([ee("button")],Le.prototype,"toggleElement",2);Tt([ee("bkd-notifications-dropdown")],Le.prototype,"dropdownElement",2);Tt([Ve()],Le.prototype,"notifications",2);Tt([Ve()],Le.prototype,"state",2);Le=Tt([D("bkd-notifications-toggle"),N()],Le);const nl='<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" preserveAspectRatio="xMidYMid" style="margin:auto;background:#fff 0 0;display:block;shape-rendering:auto" viewBox="0 0 100 100"><g transform="translate(82 50)"><circle r="6"><animateTransform attributeName="transform" begin="-0.8571428571428571s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.8571428571428571s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(51.429 -42.913 110.137)"><circle r="6" fill-opacity=".857"><animateTransform attributeName="transform" begin="-0.7142857142857143s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.7142857142857143s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(102.857 -10.937 57.696)"><circle r="6" fill-opacity=".714"><animateTransform attributeName="transform" begin="-0.5714285714285714s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.5714285714285714s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(154.286 3.294 34.358)"><circle r="6" fill-opacity=".571"><animateTransform attributeName="transform" begin="-0.42857142857142855s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.42857142857142855s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(-154.286 14.706 15.642)"><circle r="6" fill-opacity=".429"><animateTransform attributeName="transform" begin="-0.2857142857142857s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.2857142857142857s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(-102.857 28.937 -7.696)"><circle r="6" fill-opacity=".286"><animateTransform attributeName="transform" begin="-0.14285714285714285s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.14285714285714285s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(-51.429 60.913 -60.137)"><circle r="6" fill-opacity=".143"><animateTransform attributeName="transform" begin="0s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="0s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g></svg>',rl='<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path fill="currentColor" d="m13 3-1.333 1.333H5V7h21.333V4.333h-6.666L18.333 3zM6.333 9.667V27c0 1.467 1.2 2.667 2.667 2.667h13.333C23.8 29.667 25 28.467 25 27V9.667z"/></svg>';/*! @license DOMPurify 3.2.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.1/LICENSE */const{entries:Ji,setPrototypeOf:ai,isFrozen:il,getPrototypeOf:ol,getOwnPropertyDescriptor:sl}=Object;let{freeze:V,seal:Z,create:Qi}=Object,{apply:qn,construct:Yn}=typeof Reflect<"u"&&Reflect;V||(V=function(e){return e});Z||(Z=function(e){return e});qn||(qn=function(e,n,r){return e.apply(n,r)});Yn||(Yn=function(e,n){return new e(...n)});const It=X(Array.prototype.forEach),li=X(Array.prototype.pop),tt=X(Array.prototype.push),zt=X(String.prototype.toLowerCase),On=X(String.prototype.toString),ci=X(String.prototype.match),nt=X(String.prototype.replace),al=X(String.prototype.indexOf),ll=X(String.prototype.trim),Q=X(Object.prototype.hasOwnProperty),G=X(RegExp.prototype.test),rt=cl(TypeError);function X(t){return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return qn(t,e,r)}}function cl(t){return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return Yn(t,n)}}function E(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:zt;ai&&ai(t,null);let r=e.length;for(;r--;){let i=e[r];if(typeof i=="string"){const o=n(i);o!==i&&(il(e)||(e[r]=o),i=o)}t[i]=!0}return t}function dl(t){for(let e=0;e<t.length;e++)Q(t,e)||(t[e]=null);return t}function Ae(t){const e=Qi(null);for(const[n,r]of Ji(t))Q(t,n)&&(Array.isArray(r)?e[n]=dl(r):r&&typeof r=="object"&&r.constructor===Object?e[n]=Ae(r):e[n]=r);return e}function it(t,e){for(;t!==null;){const r=sl(t,e);if(r){if(r.get)return X(r.get);if(typeof r.value=="function")return X(r.value)}t=ol(t)}function n(){return null}return n}const di=V(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),In=V(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Ln=V(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),ul=V(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Dn=V(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),hl=V(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),ui=V(["#text"]),hi=V(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Nn=V(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),pi=V(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Lt=V(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),pl=Z(/\{\{[\w\W]*|[\w\W]*\}\}/gm),fl=Z(/<%[\w\W]*|[\w\W]*%>/gm),gl=Z(/\${[\w\W]*}/gm),ml=Z(/^data-[\-\w.\u00B7-\uFFFF]/),bl=Z(/^aria-[\-\w]+$/),eo=Z(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),vl=Z(/^(?:\w+script|data):/i),yl=Z(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),to=Z(/^html$/i),wl=Z(/^[a-z][.\w]*(-[.\w]+)+$/i);var fi=Object.freeze({__proto__:null,ARIA_ATTR:bl,ATTR_WHITESPACE:yl,CUSTOM_ELEMENT:wl,DATA_ATTR:ml,DOCTYPE_NAME:to,ERB_EXPR:fl,IS_ALLOWED_URI:eo,IS_SCRIPT_OR_DATA:vl,MUSTACHE_EXPR:pl,TMPLIT_EXPR:gl});const ot={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},kl=function(){return typeof window>"u"?null:window},_l=function(e,n){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let r=null;const i="data-tt-policy-suffix";n&&n.hasAttribute(i)&&(r=n.getAttribute(i));const o="dompurify"+(r?"#"+r:"");try{return e.createPolicy(o,{createHTML(s){return s},createScriptURL(s){return s}})}catch{return console.warn("TrustedTypes policy "+o+" could not be created."),null}};function no(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:kl();const e=y=>no(y);if(e.version="3.2.1",e.removed=[],!t||!t.document||t.document.nodeType!==ot.document)return e.isSupported=!1,e;let{document:n}=t;const r=n,i=r.currentScript,{DocumentFragment:o,HTMLTemplateElement:s,Node:l,Element:c,NodeFilter:g,NamedNodeMap:k=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:h,DOMParser:_,trustedTypes:u}=t,d=c.prototype,m=it(d,"cloneNode"),T=it(d,"remove"),A=it(d,"nextSibling"),x=it(d,"childNodes"),z=it(d,"parentNode");if(typeof s=="function"){const y=n.createElement("template");y.content&&y.content.ownerDocument&&(n=y.content.ownerDocument)}let I,ae="";const{implementation:cn,createNodeIterator:po,createDocumentFragment:fo,getElementsByTagName:go}=n,{importNode:mo}=r;let ne={};e.isSupported=typeof Ji=="function"&&typeof z=="function"&&cn&&cn.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:dn,ERB_EXPR:un,TMPLIT_EXPR:hn,DATA_ATTR:bo,ARIA_ATTR:vo,IS_SCRIPT_OR_DATA:yo,ATTR_WHITESPACE:mr,CUSTOM_ELEMENT:wo}=fi;let{IS_ALLOWED_URI:br}=fi,U=null;const vr=E({},[...di,...In,...Ln,...Dn,...ui]);let H=null;const yr=E({},[...hi,...Nn,...pi,...Lt]);let L=Object.seal(Qi(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Ye=null,pn=null,wr=!0,fn=!0,kr=!1,_r=!0,Ne=!1,gn=!0,ye=!1,mn=!1,bn=!1,Me=!1,Et=!1,St=!1,Ar=!0,Tr=!1;const ko="user-content-";let vn=!0,Xe=!1,ze={},Ue=null;const Er=E({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Sr=null;const $r=E({},["audio","video","img","source","image","track"]);let yn=null;const Pr=E({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),$t="http://www.w3.org/1998/Math/MathML",Pt="http://www.w3.org/2000/svg",le="http://www.w3.org/1999/xhtml";let He=le,wn=!1,kn=null;const _o=E({},[$t,Pt,le],On);let Rt=E({},["mi","mo","mn","ms","mtext"]),Ct=E({},["annotation-xml"]);const Ao=E({},["title","style","font","a","script"]);let Ze=null;const To=["application/xhtml+xml","text/html"],Eo="text/html";let j=null,je=null;const So=n.createElement("form"),Rr=function(a){return a instanceof RegExp||a instanceof Function},_n=function(){let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(je&&je===a)){if((!a||typeof a!="object")&&(a={}),a=Ae(a),Ze=To.indexOf(a.PARSER_MEDIA_TYPE)===-1?Eo:a.PARSER_MEDIA_TYPE,j=Ze==="application/xhtml+xml"?On:zt,U=Q(a,"ALLOWED_TAGS")?E({},a.ALLOWED_TAGS,j):vr,H=Q(a,"ALLOWED_ATTR")?E({},a.ALLOWED_ATTR,j):yr,kn=Q(a,"ALLOWED_NAMESPACES")?E({},a.ALLOWED_NAMESPACES,On):_o,yn=Q(a,"ADD_URI_SAFE_ATTR")?E(Ae(Pr),a.ADD_URI_SAFE_ATTR,j):Pr,Sr=Q(a,"ADD_DATA_URI_TAGS")?E(Ae($r),a.ADD_DATA_URI_TAGS,j):$r,Ue=Q(a,"FORBID_CONTENTS")?E({},a.FORBID_CONTENTS,j):Er,Ye=Q(a,"FORBID_TAGS")?E({},a.FORBID_TAGS,j):{},pn=Q(a,"FORBID_ATTR")?E({},a.FORBID_ATTR,j):{},ze=Q(a,"USE_PROFILES")?a.USE_PROFILES:!1,wr=a.ALLOW_ARIA_ATTR!==!1,fn=a.ALLOW_DATA_ATTR!==!1,kr=a.ALLOW_UNKNOWN_PROTOCOLS||!1,_r=a.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Ne=a.SAFE_FOR_TEMPLATES||!1,gn=a.SAFE_FOR_XML!==!1,ye=a.WHOLE_DOCUMENT||!1,Me=a.RETURN_DOM||!1,Et=a.RETURN_DOM_FRAGMENT||!1,St=a.RETURN_TRUSTED_TYPE||!1,bn=a.FORCE_BODY||!1,Ar=a.SANITIZE_DOM!==!1,Tr=a.SANITIZE_NAMED_PROPS||!1,vn=a.KEEP_CONTENT!==!1,Xe=a.IN_PLACE||!1,br=a.ALLOWED_URI_REGEXP||eo,He=a.NAMESPACE||le,Rt=a.MATHML_TEXT_INTEGRATION_POINTS||Rt,Ct=a.HTML_INTEGRATION_POINTS||Ct,L=a.CUSTOM_ELEMENT_HANDLING||{},a.CUSTOM_ELEMENT_HANDLING&&Rr(a.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(L.tagNameCheck=a.CUSTOM_ELEMENT_HANDLING.tagNameCheck),a.CUSTOM_ELEMENT_HANDLING&&Rr(a.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(L.attributeNameCheck=a.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),a.CUSTOM_ELEMENT_HANDLING&&typeof a.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(L.allowCustomizedBuiltInElements=a.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Ne&&(fn=!1),Et&&(Me=!0),ze&&(U=E({},ui),H=[],ze.html===!0&&(E(U,di),E(H,hi)),ze.svg===!0&&(E(U,In),E(H,Nn),E(H,Lt)),ze.svgFilters===!0&&(E(U,Ln),E(H,Nn),E(H,Lt)),ze.mathMl===!0&&(E(U,Dn),E(H,pi),E(H,Lt))),a.ADD_TAGS&&(U===vr&&(U=Ae(U)),E(U,a.ADD_TAGS,j)),a.ADD_ATTR&&(H===yr&&(H=Ae(H)),E(H,a.ADD_ATTR,j)),a.ADD_URI_SAFE_ATTR&&E(yn,a.ADD_URI_SAFE_ATTR,j),a.FORBID_CONTENTS&&(Ue===Er&&(Ue=Ae(Ue)),E(Ue,a.FORBID_CONTENTS,j)),vn&&(U["#text"]=!0),ye&&E(U,["html","head","body"]),U.table&&(E(U,["tbody"]),delete Ye.tbody),a.TRUSTED_TYPES_POLICY){if(typeof a.TRUSTED_TYPES_POLICY.createHTML!="function")throw rt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof a.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw rt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');I=a.TRUSTED_TYPES_POLICY,ae=I.createHTML("")}else I===void 0&&(I=_l(u,i)),I!==null&&typeof ae=="string"&&(ae=I.createHTML(""));V&&V(a),je=a}},Cr=E({},[...In,...Ln,...ul]),xr=E({},[...Dn,...hl]),$o=function(a){let p=z(a);(!p||!p.tagName)&&(p={namespaceURI:He,tagName:"template"});const b=zt(a.tagName),$=zt(p.tagName);return kn[a.namespaceURI]?a.namespaceURI===Pt?p.namespaceURI===le?b==="svg":p.namespaceURI===$t?b==="svg"&&($==="annotation-xml"||Rt[$]):!!Cr[b]:a.namespaceURI===$t?p.namespaceURI===le?b==="math":p.namespaceURI===Pt?b==="math"&&Ct[$]:!!xr[b]:a.namespaceURI===le?p.namespaceURI===Pt&&!Ct[$]||p.namespaceURI===$t&&!Rt[$]?!1:!xr[b]&&(Ao[b]||!Cr[b]):!!(Ze==="application/xhtml+xml"&&kn[a.namespaceURI]):!1},re=function(a){tt(e.removed,{element:a});try{z(a).removeChild(a)}catch{T(a)}},xt=function(a,p){try{tt(e.removed,{attribute:p.getAttributeNode(a),from:p})}catch{tt(e.removed,{attribute:null,from:p})}if(p.removeAttribute(a),a==="is"&&!H[a])if(Me||Et)try{re(p)}catch{}else try{p.setAttribute(a,"")}catch{}},Or=function(a){let p=null,b=null;if(bn)a="<remove></remove>"+a;else{const F=ci(a,/^[\r\n\t ]+/);b=F&&F[0]}Ze==="application/xhtml+xml"&&He===le&&(a='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+a+"</body></html>");const $=I?I.createHTML(a):a;if(He===le)try{p=new _().parseFromString($,Ze)}catch{}if(!p||!p.documentElement){p=cn.createDocument(He,"template",null);try{p.documentElement.innerHTML=wn?ae:$}catch{}}const K=p.body||p.documentElement;return a&&b&&K.insertBefore(n.createTextNode(b),K.childNodes[0]||null),He===le?go.call(p,ye?"html":"body")[0]:ye?p.documentElement:K},Ir=function(a){return po.call(a.ownerDocument||a,a,g.SHOW_ELEMENT|g.SHOW_COMMENT|g.SHOW_TEXT|g.SHOW_PROCESSING_INSTRUCTION|g.SHOW_CDATA_SECTION,null)},Lr=function(a){return a instanceof h&&(typeof a.nodeName!="string"||typeof a.textContent!="string"||typeof a.removeChild!="function"||!(a.attributes instanceof k)||typeof a.removeAttribute!="function"||typeof a.setAttribute!="function"||typeof a.namespaceURI!="string"||typeof a.insertBefore!="function"||typeof a.hasChildNodes!="function")},Dr=function(a){return typeof l=="function"&&a instanceof l};function ce(y,a,p){ne[y]&&It(ne[y],b=>{b.call(e,a,p,je)})}const Nr=function(a){let p=null;if(ce("beforeSanitizeElements",a,null),Lr(a))return re(a),!0;const b=j(a.nodeName);if(ce("uponSanitizeElement",a,{tagName:b,allowedTags:U}),a.hasChildNodes()&&!Dr(a.firstElementChild)&&G(/<[/\w]/g,a.innerHTML)&&G(/<[/\w]/g,a.textContent)||a.nodeType===ot.progressingInstruction||gn&&a.nodeType===ot.comment&&G(/<[/\w]/g,a.data))return re(a),!0;if(!U[b]||Ye[b]){if(!Ye[b]&&zr(b)&&(L.tagNameCheck instanceof RegExp&&G(L.tagNameCheck,b)||L.tagNameCheck instanceof Function&&L.tagNameCheck(b)))return!1;if(vn&&!Ue[b]){const $=z(a)||a.parentNode,K=x(a)||a.childNodes;if(K&&$){const F=K.length;for(let q=F-1;q>=0;--q){const ie=m(K[q],!0);ie.__removalCount=(a.__removalCount||0)+1,$.insertBefore(ie,A(a))}}}return re(a),!0}return a instanceof c&&!$o(a)||(b==="noscript"||b==="noembed"||b==="noframes")&&G(/<\/no(script|embed|frames)/i,a.innerHTML)?(re(a),!0):(Ne&&a.nodeType===ot.text&&(p=a.textContent,It([dn,un,hn],$=>{p=nt(p,$," ")}),a.textContent!==p&&(tt(e.removed,{element:a.cloneNode()}),a.textContent=p)),ce("afterSanitizeElements",a,null),!1)},Mr=function(a,p,b){if(Ar&&(p==="id"||p==="name")&&(b in n||b in So))return!1;if(!(fn&&!pn[p]&&G(bo,p))){if(!(wr&&G(vo,p))){if(!H[p]||pn[p]){if(!(zr(a)&&(L.tagNameCheck instanceof RegExp&&G(L.tagNameCheck,a)||L.tagNameCheck instanceof Function&&L.tagNameCheck(a))&&(L.attributeNameCheck instanceof RegExp&&G(L.attributeNameCheck,p)||L.attributeNameCheck instanceof Function&&L.attributeNameCheck(p))||p==="is"&&L.allowCustomizedBuiltInElements&&(L.tagNameCheck instanceof RegExp&&G(L.tagNameCheck,b)||L.tagNameCheck instanceof Function&&L.tagNameCheck(b))))return!1}else if(!yn[p]){if(!G(br,nt(b,mr,""))){if(!((p==="src"||p==="xlink:href"||p==="href")&&a!=="script"&&al(b,"data:")===0&&Sr[a])){if(!(kr&&!G(yo,nt(b,mr,"")))){if(b)return!1}}}}}}return!0},zr=function(a){return a!=="annotation-xml"&&ci(a,wo)},Ur=function(a){ce("beforeSanitizeAttributes",a,null);const{attributes:p}=a;if(!p)return;const b={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:H,forceKeepAttr:void 0};let $=p.length;for(;$--;){const K=p[$],{name:F,namespaceURI:q,value:ie}=K,Je=j(F);let W=F==="value"?ie:ll(ie);if(b.attrName=Je,b.attrValue=W,b.keepAttr=!0,b.forceKeepAttr=void 0,ce("uponSanitizeAttribute",a,b),W=b.attrValue,Tr&&(Je==="id"||Je==="name")&&(xt(F,a),W=ko+W),gn&&G(/((--!?|])>)|<\/(style|title)/i,W)){xt(F,a);continue}if(b.forceKeepAttr||(xt(F,a),!b.keepAttr))continue;if(!_r&&G(/\/>/i,W)){xt(F,a);continue}Ne&&It([dn,un,hn],jr=>{W=nt(W,jr," ")});const Hr=j(a.nodeName);if(Mr(Hr,Je,W)){if(I&&typeof u=="object"&&typeof u.getAttributeType=="function"&&!q)switch(u.getAttributeType(Hr,Je)){case"TrustedHTML":{W=I.createHTML(W);break}case"TrustedScriptURL":{W=I.createScriptURL(W);break}}try{q?a.setAttributeNS(q,F,W):a.setAttribute(F,W),Lr(a)?re(a):li(e.removed)}catch{}}}ce("afterSanitizeAttributes",a,null)},Po=function y(a){let p=null;const b=Ir(a);for(ce("beforeSanitizeShadowDOM",a,null);p=b.nextNode();)ce("uponSanitizeShadowNode",p,null),!Nr(p)&&(p.content instanceof o&&y(p.content),Ur(p));ce("afterSanitizeShadowDOM",a,null)};return e.sanitize=function(y){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},p=null,b=null,$=null,K=null;if(wn=!y,wn&&(y="<!-->"),typeof y!="string"&&!Dr(y))if(typeof y.toString=="function"){if(y=y.toString(),typeof y!="string")throw rt("dirty is not a string, aborting")}else throw rt("toString is not a function");if(!e.isSupported)return y;if(mn||_n(a),e.removed=[],typeof y=="string"&&(Xe=!1),Xe){if(y.nodeName){const ie=j(y.nodeName);if(!U[ie]||Ye[ie])throw rt("root node is forbidden and cannot be sanitized in-place")}}else if(y instanceof l)p=Or("<!---->"),b=p.ownerDocument.importNode(y,!0),b.nodeType===ot.element&&b.nodeName==="BODY"||b.nodeName==="HTML"?p=b:p.appendChild(b);else{if(!Me&&!Ne&&!ye&&y.indexOf("<")===-1)return I&&St?I.createHTML(y):y;if(p=Or(y),!p)return Me?null:St?ae:""}p&&bn&&re(p.firstChild);const F=Ir(Xe?y:p);for(;$=F.nextNode();)Nr($)||($.content instanceof o&&Po($.content),Ur($));if(Xe)return y;if(Me){if(Et)for(K=fo.call(p.ownerDocument);p.firstChild;)K.appendChild(p.firstChild);else K=p;return(H.shadowroot||H.shadowrootmode)&&(K=mo.call(r,K,!0)),K}let q=ye?p.outerHTML:p.innerHTML;return ye&&U["!doctype"]&&p.ownerDocument&&p.ownerDocument.doctype&&p.ownerDocument.doctype.name&&G(to,p.ownerDocument.doctype.name)&&(q="<!DOCTYPE "+p.ownerDocument.doctype.name+`>
`+q),Ne&&It([dn,un,hn],ie=>{q=nt(q,ie," ")}),I&&St?I.createHTML(q):q},e.setConfig=function(){let y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};_n(y),mn=!0},e.clearConfig=function(){je=null,mn=!1},e.isValidAttribute=function(y,a,p){je||_n({});const b=j(y),$=j(a);return Mr(b,$,p)},e.addHook=function(y,a){typeof a=="function"&&(ne[y]=ne[y]||[],tt(ne[y],a))},e.removeHook=function(y){if(ne[y])return li(ne[y])},e.removeHooks=function(y){ne[y]&&(ne[y]=[])},e.removeAllHooks=function(){ne={}},e}var Al=no();const Tl={ALLOWED_TAGS:["br","div","span","a","ul","ol","li","sup","sub","code","cite"],ALLOWED_ATTR:["style","href"]};function gi(t){return Al.sanitize(t,Tl)}var El=Object.defineProperty,Sl=Object.getOwnPropertyDescriptor,an=(t,e,n,r)=>{for(var i=r>1?void 0:r?Sl(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(r?s(e,n,i):s(i))||i);return r&&i&&El(e,n,i),i};let We=class extends P{constructor(){super(...arguments),this.open=!1,this.state=Mt.PENDING,this.notifications=[]}handleDeleteAllNotifications(){this.dispatchEvent(new CustomEvent("bkddeleteallnotifications",{bubbles:!0,composed:!0}))}handleDeleteNotification(t){this.dispatchEvent(new CustomEvent("bkddeletenotification",{bubbles:!0,composed:!0,detail:{id:t}}))}renderContent(){return this.state===Mt.ERROR?w`<div class="error">
        ${f("Fehler beim Laden der Benachrichtigungen")}
      </div>`:this.state===Mt.PENDING?w`<div class="pending">${ge(nl)}</div>`:this.notifications.length===0?w`<div class="notification">${f("Keine Benachrichtigungen")}</div>`:$e(this.notifications,t=>t.id,t=>this.renderNotification(t))}renderNotification(t){const e=gi(t.subject),n=gi(t.body);return w`<div class="notification">
      <div class="text">
        <div class="subject">${ge(e)}</div>
        <div class="body">${ge(n)}</div>
      </div>
      <button
        type="button"
        aria-label="${f("Benachrichtigung löschen")}"
        @click=${()=>this.handleDeleteNotification(t.id)}
      >
        ${ge(rl)}
      </button>
    </div> `}render(){if(this.open)return w`<div id="notifications-dropdown">
      <div class="header">
        <h2>${f("Benachrichtigungen")}</h2>
        <button
          type="button"
          ?disabled=${!this.notifications||this.notifications.length===0}
          @click="${()=>this.handleDeleteAllNotifications()}"
        >
          ${f("Alle löschen")}
        </button>
      </div>
      <div class="content">${this.renderContent()}</div>
    </div>`}};We.styles=[M,C`
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
    `];an([Y()],We.prototype,"open",2);an([Y()],We.prototype,"state",2);an([Y()],We.prototype,"notifications",2);We=an([D("bkd-notifications-dropdown"),N()],We);var $l=Object.defineProperty,Pl=Object.getOwnPropertyDescriptor,hr=(t,e,n,r)=>{for(var i=r>1?void 0:r?Pl(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(r?s(e,n,i):s(i))||i);return r&&i&&$l(e,n,i),i};let vt=class extends P{constructor(){super(),this.dropdown=new kt(this,{queryToggleElement:()=>this.toggleElement??null,queryMenuElement:()=>this.menuElement??null,queryItems:()=>{var t;return((t=this.shadowRoot)==null?void 0:t.querySelectorAll("a[role='menuitem']"))??null},queryFocused:()=>{var t;return((t=this.shadowRoot)==null?void 0:t.activeElement)??null}}),new J(this,v)}handleSettingsItemClick(t,e){this.dropdown.close(),this.dispatchEvent(new CustomEvent("bkdsettingsitemclick",{detail:{item:e,event:t},composed:!0,bubbles:!0}))}renderSettingsItem(t){return w`<li role="presentation">
      <a
        role="menuitem"
        href=${t.href}
        target=${t.external?"_blank":"_self"}
        @click=${e=>this.handleSettingsItemClick(e,t)}
      >
        ${t.label}</a
      >
      ${t.img?w`<img src=${t.img} alt="" width="24" height="24" />`:R}
    </li>`}render(){return w`
      <button
        type="button"
        @click=${()=>this.dropdown.toggle()}
        aria-label=${f("Menü Benutzereinstellungen")}
        aria-expanded=${this.dropdown.open}
        aria-haspopup="menu"
      >
        <img src="/icons/settings.svg" alt="" width="32" height="32" />
      </button>
      <ul role="menu" ?hidden=${!this.dropdown.open}>
        ${Zi(Vi(v.locale),this.renderSettingsItem.bind(this))}
      </ul>
    `}};vt.styles=[M,C`
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
    `];hr([ee("button")],vt.prototype,"toggleElement",2);hr([ee('ul[role="menu"]')],vt.prototype,"menuElement",2);vt=hr([D("bkd-user-settings"),N()],vt);function Rl(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var ro={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(self,()=>(()=>{var n={985:(s,l,c)=>{Object.defineProperty(l,"__esModule",{value:!0}),l.OAuth2Client=void 0,l.generateQueryString=_;const g=c(854),k=c(129);function h(u,d){return new URL(u,d).toString()}function _(u){const d=new URLSearchParams;for(const[m,T]of Object.entries(u))if(Array.isArray(T))for(const A of T)d.append(m,A);else T!==void 0&&d.set(m,T.toString());return d.toString()}l.OAuth2Client=class{constructor(u){this.discoveryDone=!1,this.serverMetadata=null,u!=null&&u.fetch||(u.fetch=fetch.bind(globalThis)),this.settings=u}async refreshToken(u,d){if(!u.refreshToken)throw new Error("This token didn't have a refreshToken. It's not possible to refresh this");const m={grant_type:"refresh_token",refresh_token:u.refreshToken};this.settings.clientSecret||(m.client_id=this.settings.clientId),d!=null&&d.scope&&(m.scope=d.scope.join(" ")),d!=null&&d.resource&&(m.resource=d.resource);const T=await this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",m));return!T.refreshToken&&u.refreshToken&&(T.refreshToken=u.refreshToken),T}async clientCredentials(u){var d;const m=["client_id","client_secret","grant_type","scope"];if(u!=null&&u.extraParams&&Object.keys(u.extraParams).filter(A=>m.includes(A)).length>0)throw new Error(`The following extraParams are disallowed: '${m.join("', '")}'`);const T={grant_type:"client_credentials",scope:(d=u==null?void 0:u.scope)===null||d===void 0?void 0:d.join(" "),resource:u==null?void 0:u.resource,...u==null?void 0:u.extraParams};if(!this.settings.clientSecret)throw new Error("A clientSecret must be provided to use client_credentials");return this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",T))}async password(u){var d;const m={grant_type:"password",...u,scope:(d=u.scope)===null||d===void 0?void 0:d.join(" ")};return this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",m))}get authorizationCode(){return new k.OAuth2AuthorizationCodeClient(this)}async introspect(u){const d={token:u.accessToken,token_type_hint:"access_token"};return this.request("introspectionEndpoint",d)}async revoke(u,d="access_token"){let m=u.accessToken;d==="refresh_token"&&(m=u.refreshToken);const T={token:m,token_type_hint:d};return this.request("revocationEndpoint",T)}async getEndpoint(u){if(this.settings[u]!==void 0)return h(this.settings[u],this.settings.server);if(u!=="discoveryEndpoint"&&(await this.discover(),this.settings[u]!==void 0))return h(this.settings[u],this.settings.server);if(!this.settings.server)throw new Error(`Could not determine the location of ${u}. Either specify ${u} in the settings, or the "server" endpoint to let the client discover it.`);switch(u){case"authorizationEndpoint":return h("/authorize",this.settings.server);case"tokenEndpoint":return h("/token",this.settings.server);case"discoveryEndpoint":return h("/.well-known/oauth-authorization-server",this.settings.server);case"introspectionEndpoint":return h("/introspect",this.settings.server);case"revocationEndpoint":return h("/revoke",this.settings.server)}}async discover(){var u;if(this.discoveryDone)return;let d;this.discoveryDone=!0;try{d=await this.getEndpoint("discoveryEndpoint")}catch{return void console.warn('[oauth2] OAuth2 discovery endpoint could not be determined. Either specify the "server" or "discoveryEndpoint')}const m=await this.settings.fetch(d,{headers:{Accept:"application/json"}});if(!m.ok)return;if(!(!((u=m.headers.get("Content-Type"))===null||u===void 0)&&u.startsWith("application/json")))return void console.warn("[oauth2] OAuth2 discovery endpoint was not a JSON response. Response is ignored");this.serverMetadata=await m.json();const T=[["authorization_endpoint","authorizationEndpoint"],["token_endpoint","tokenEndpoint"],["introspection_endpoint","introspectionEndpoint"],["revocation_endpoint","revocationEndpoint"]];if(this.serverMetadata!==null){for(const[A,x]of T)this.serverMetadata[A]&&(this.settings[x]=h(this.serverMetadata[A],d));this.serverMetadata.token_endpoint_auth_methods_supported&&!this.settings.authenticationMethod&&(this.settings.authenticationMethod=this.serverMetadata.token_endpoint_auth_methods_supported[0])}}async request(u,d){const m=await this.getEndpoint(u),T={"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json"};let A=this.settings.authenticationMethod;switch(this.settings.clientSecret||(A="client_secret_post"),A||(A="client_secret_basic"),A){case"client_secret_basic":T.Authorization="Basic "+btoa(this.settings.clientId+":"+this.settings.clientSecret);break;case"client_secret_post":d.client_id=this.settings.clientId,this.settings.clientSecret&&(d.client_secret=this.settings.clientSecret);break;default:throw new Error("Authentication method not yet supported:"+A+". Open a feature request if you want this!")}const x=await this.settings.fetch(m,{method:"POST",body:_(d),headers:T});let z,I,ae;if(x.status!==204&&x.headers.has("Content-Type")&&x.headers.get("Content-Type").match(/^application\/(.*\+)?json/)&&(z=await x.json()),x.ok)return z;throw z!=null&&z.error?(I="OAuth2 error "+z.error+".",z.error_description&&(I+=" "+z.error_description),ae=z.error):(I="HTTP Error "+x.status+" "+x.statusText,x.status===401&&this.settings.clientSecret&&(I+=". It's likely that the clientId and/or clientSecret was incorrect"),ae=null),new g.OAuth2HttpError(I,ae,x,z)}async tokenResponseToOAuth2Token(u){var d;const m=await u;if(!(m!=null&&m.access_token))throw console.warn("Invalid OAuth2 Token Response: ",m),new TypeError("We received an invalid token response from an OAuth2 server.");return{accessToken:m.access_token,expiresAt:m.expires_in?Date.now()+1e3*m.expires_in:null,refreshToken:(d=m.refresh_token)!==null&&d!==void 0?d:null}}}},129:(s,l,c)=>{Object.defineProperty(l,"__esModule",{value:!0}),l.OAuth2AuthorizationCodeClient=void 0,l.generateCodeVerifier=async function(){const d=h();if(d){const m=new Uint8Array(32);return d.getRandomValues(m),u(m)}{const m=c(483);return new Promise((T,A)=>{m.randomBytes(32,(x,z)=>{x&&A(x),T(z.toString("base64url"))})})}},l.getCodeChallenge=k;const g=c(854);async function k(d){const m=h();if(m!=null&&m.subtle)return["S256",u(await m.subtle.digest("SHA-256",_(d)))];{const T=c(483).createHash("sha256");return T.update(_(d)),["S256",T.digest("base64url")]}}function h(){if(typeof window<"u"&&window.crypto)return window.crypto;if(typeof self<"u"&&self.crypto)return self.crypto;const d=c(483);return d.webcrypto?d.webcrypto:null}function _(d){const m=new Uint8Array(d.length);for(let T=0;T<d.length;T++)m[T]=255&d.charCodeAt(T);return m}function u(d){return btoa(String.fromCharCode(...new Uint8Array(d))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}l.OAuth2AuthorizationCodeClient=class{constructor(d){this.client=d}async getAuthorizeUri(d){const[m,T]=await Promise.all([d.codeVerifier?k(d.codeVerifier):void 0,this.client.getEndpoint("authorizationEndpoint")]),A=new URLSearchParams({client_id:this.client.settings.clientId,response_type:"code",redirect_uri:d.redirectUri});if(m&&(A.set("code_challenge_method",m[0]),A.set("code_challenge",m[1])),d.state&&A.set("state",d.state),d.scope&&A.set("scope",d.scope.join(" ")),d.resource)for(const x of[].concat(d.resource))A.append("resource",x);if(d.responseMode&&d.responseMode!=="query"&&A.append("response_mode",d.responseMode),d.extraParams)for(const[x,z]of Object.entries(d.extraParams)){if(A.has(x))throw new Error(`Property in extraParams would overwrite standard property: ${x}`);A.set(x,z)}return T+"?"+A.toString()}async getTokenFromCodeRedirect(d,m){const{code:T}=this.validateResponse(d,{state:m.state});return this.getToken({code:T,redirectUri:m.redirectUri,codeVerifier:m.codeVerifier})}validateResponse(d,m){var T;let A=(d=new URL(d)).searchParams;if(!A.has("code")&&!A.has("error")&&d.hash.length>0&&(A=new URLSearchParams(d.hash.slice(1))),A.has("error"))throw new g.OAuth2Error((T=A.get("error_description"))!==null&&T!==void 0?T:"OAuth2 error",A.get("error"));if(!A.has("code"))throw new Error(`The url did not contain a code parameter ${d}`);if(m.state&&m.state!==A.get("state"))throw new Error(`The "state" parameter in the url did not match the expected value of ${m.state}`);return{code:A.get("code"),scope:A.has("scope")?A.get("scope").split(" "):void 0}}async getToken(d){const m={grant_type:"authorization_code",code:d.code,redirect_uri:d.redirectUri,code_verifier:d.codeVerifier,resource:d.resource};return this.client.tokenResponseToOAuth2Token(this.client.request("tokenEndpoint",m))}}},854:(s,l)=>{Object.defineProperty(l,"__esModule",{value:!0}),l.OAuth2HttpError=l.OAuth2Error=void 0;class c extends Error{constructor(k,h){super(k),this.oauth2Code=h}}l.OAuth2Error=c,l.OAuth2HttpError=class extends c{constructor(g,k,h,_){super(g,k),this.httpCode=h.status,this.response=h,this.parsedBody=_}}},238:(s,l)=>{Object.defineProperty(l,"__esModule",{value:!0}),l.OAuth2Fetch=void 0,l.OAuth2Fetch=class{constructor(c){this.token=null,this.activeGetStoredToken=null,this.activeRefresh=null,this.refreshTimer=null,(c==null?void 0:c.scheduleRefresh)===void 0&&(c.scheduleRefresh=!0),this.options=c,c.getStoredToken&&(this.activeGetStoredToken=(async()=>{this.token=await c.getStoredToken(),this.activeGetStoredToken=null})()),this.scheduleRefresh()}async fetch(c,g){const k=new Request(c,g);return this.mw()(k,h=>fetch(h))}mw(){return async(c,g)=>{const k=await this.getAccessToken();let h=c.clone();h.headers.set("Authorization","Bearer "+k);let _=await g(h);if(!_.ok&&_.status===401){const u=await this.refreshToken();h=c.clone(),h.headers.set("Authorization","Bearer "+u.accessToken),_=await g(h)}return _}}async getToken(){return this.token&&(this.token.expiresAt===null||this.token.expiresAt>Date.now())?this.token:this.refreshToken()}async getAccessToken(){return await this.activeGetStoredToken,(await this.getToken()).accessToken}async refreshToken(){var c,g;if(this.activeRefresh)return this.activeRefresh;const k=this.token;this.activeRefresh=(async()=>{var h,_;let u=null;try{k!=null&&k.refreshToken&&(u=await this.options.client.refreshToken(k))}catch{console.warn("[oauth2] refresh token not accepted, we'll try reauthenticating")}if(u||(u=await this.options.getNewToken()),!u){const d=new Error("Unable to obtain OAuth2 tokens, a full reauth may be needed");throw(_=(h=this.options).onError)===null||_===void 0||_.call(h,d),d}return u})();try{const h=await this.activeRefresh;return this.token=h,(g=(c=this.options).storeToken)===null||g===void 0||g.call(c,h),this.scheduleRefresh(),h}catch(h){throw this.options.onError&&this.options.onError(h),h}finally{this.activeRefresh=null}}scheduleRefresh(){var c;if(!this.options.scheduleRefresh||(this.refreshTimer&&(clearTimeout(this.refreshTimer),this.refreshTimer=null),!(!((c=this.token)===null||c===void 0)&&c.expiresAt)||!this.token.refreshToken))return;const g=this.token.expiresAt-Date.now();g<12e4||(this.refreshTimer=setTimeout(async()=>{try{await this.refreshToken()}catch(k){console.error("[fetch-mw-oauth2] error while doing a background OAuth2 auto-refresh",k)}},g-6e4))}}},483:()=>{}},r={};function i(s){var l=r[s];if(l!==void 0)return l.exports;var c=r[s]={exports:{}};return n[s](c,c.exports,i),c.exports}var o={};return(()=>{var s=o;Object.defineProperty(s,"__esModule",{value:!0}),s.OAuth2HttpError=s.OAuth2Error=s.OAuth2Fetch=s.generateCodeVerifier=s.OAuth2AuthorizationCodeClient=s.OAuth2Client=void 0;var l=i(985);Object.defineProperty(s,"OAuth2Client",{enumerable:!0,get:function(){return l.OAuth2Client}});var c=i(129);Object.defineProperty(s,"OAuth2AuthorizationCodeClient",{enumerable:!0,get:function(){return c.OAuth2AuthorizationCodeClient}}),Object.defineProperty(s,"generateCodeVerifier",{enumerable:!0,get:function(){return c.generateCodeVerifier}});var g=i(238);Object.defineProperty(s,"OAuth2Fetch",{enumerable:!0,get:function(){return g.OAuth2Fetch}});var k=i(854);Object.defineProperty(s,"OAuth2Error",{enumerable:!0,get:function(){return k.OAuth2Error}}),Object.defineProperty(s,"OAuth2HttpError",{enumerable:!0,get:function(){return k.OAuth2HttpError}})})(),o})())})(ro);var pr=ro.exports,ln={},De={};Object.defineProperty(De,"__esModule",{value:!0});De.OAuth2HttpError=De.OAuth2Error=void 0;class io extends Error{constructor(e,n){super(e),this.oauth2Code=n}}De.OAuth2Error=io;class Cl extends io{constructor(e,n,r,i){super(e,n),this.httpCode=r.status,this.response=r,this.parsedBody=i}}De.OAuth2HttpError=Cl;var qe={};const xl={},Ol=Object.freeze(Object.defineProperty({__proto__:null,default:xl},Symbol.toStringTag,{value:"Module"})),fr=Rl(Ol);Object.defineProperty(qe,"__esModule",{value:!0});qe.OAuth2AuthorizationCodeClient=void 0;qe.generateCodeVerifier=Nl;var Il=qe.getCodeChallenge=oo;const Ll=De;class Dl{constructor(e){this.client=e}async getAuthorizeUri(e){const[n,r]=await Promise.all([e.codeVerifier?oo(e.codeVerifier):void 0,this.client.getEndpoint("authorizationEndpoint")]),i=new URLSearchParams({client_id:this.client.settings.clientId,response_type:"code",redirect_uri:e.redirectUri});if(n&&(i.set("code_challenge_method",n[0]),i.set("code_challenge",n[1])),e.state&&i.set("state",e.state),e.scope&&i.set("scope",e.scope.join(" ")),e.resource)for(const o of[].concat(e.resource))i.append("resource",o);if(e.responseMode&&e.responseMode!=="query"&&i.append("response_mode",e.responseMode),e.extraParams)for(const[o,s]of Object.entries(e.extraParams)){if(i.has(o))throw new Error(`Property in extraParams would overwrite standard property: ${o}`);i.set(o,s)}return r+"?"+i.toString()}async getTokenFromCodeRedirect(e,n){const{code:r}=this.validateResponse(e,{state:n.state});return this.getToken({code:r,redirectUri:n.redirectUri,codeVerifier:n.codeVerifier})}validateResponse(e,n){var r;e=new URL(e);let i=e.searchParams;if(!i.has("code")&&!i.has("error")&&e.hash.length>0&&(i=new URLSearchParams(e.hash.slice(1))),i.has("error"))throw new Ll.OAuth2Error((r=i.get("error_description"))!==null&&r!==void 0?r:"OAuth2 error",i.get("error"));if(!i.has("code"))throw new Error(`The url did not contain a code parameter ${e}`);if(n.state&&n.state!==i.get("state"))throw new Error(`The "state" parameter in the url did not match the expected value of ${n.state}`);return{code:i.get("code"),scope:i.has("scope")?i.get("scope").split(" "):void 0}}async getToken(e){const n={grant_type:"authorization_code",code:e.code,redirect_uri:e.redirectUri,code_verifier:e.codeVerifier,resource:e.resource};return this.client.tokenResponseToOAuth2Token(this.client.request("tokenEndpoint",n))}}qe.OAuth2AuthorizationCodeClient=Dl;async function Nl(){const t=so();if(t){const e=new Uint8Array(32);return t.getRandomValues(e),ao(e)}else{const e=fr;return new Promise((n,r)=>{e.randomBytes(32,(i,o)=>{i&&r(i),n(o.toString("base64url"))})})}}async function oo(t){const e=so();if(e!=null&&e.subtle)return["S256",ao(await e.subtle.digest("SHA-256",mi(t)))];{const r=fr.createHash("sha256");return r.update(mi(t)),["S256",r.digest("base64url")]}}function so(){if(typeof window<"u"&&window.crypto)return window.crypto;if(typeof self<"u"&&self.crypto)return self.crypto;const t=fr;return t.webcrypto?t.webcrypto:null}function mi(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n)&255;return e}function ao(t){return btoa(String.fromCharCode(...new Uint8Array(t))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}Object.defineProperty(ln,"__esModule",{value:!0});ln.OAuth2Client=void 0;var Ml=ln.generateQueryString=lo;const zl=De,Ul=qe;class Hl{constructor(e){this.discoveryDone=!1,this.serverMetadata=null,e!=null&&e.fetch||(e.fetch=fetch.bind(globalThis)),this.settings=e}async refreshToken(e,n){if(!e.refreshToken)throw new Error("This token didn't have a refreshToken. It's not possible to refresh this");const r={grant_type:"refresh_token",refresh_token:e.refreshToken};this.settings.clientSecret||(r.client_id=this.settings.clientId),n!=null&&n.scope&&(r.scope=n.scope.join(" ")),n!=null&&n.resource&&(r.resource=n.resource);const i=await this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",r));return!i.refreshToken&&e.refreshToken&&(i.refreshToken=e.refreshToken),i}async clientCredentials(e){var n;const r=["client_id","client_secret","grant_type","scope"];if(e!=null&&e.extraParams&&Object.keys(e.extraParams).filter(o=>r.includes(o)).length>0)throw new Error(`The following extraParams are disallowed: '${r.join("', '")}'`);const i={grant_type:"client_credentials",scope:(n=e==null?void 0:e.scope)===null||n===void 0?void 0:n.join(" "),resource:e==null?void 0:e.resource,...e==null?void 0:e.extraParams};if(!this.settings.clientSecret)throw new Error("A clientSecret must be provided to use client_credentials");return this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",i))}async password(e){var n;const r={grant_type:"password",...e,scope:(n=e.scope)===null||n===void 0?void 0:n.join(" ")};return this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",r))}get authorizationCode(){return new Ul.OAuth2AuthorizationCodeClient(this)}async introspect(e){const n={token:e.accessToken,token_type_hint:"access_token"};return this.request("introspectionEndpoint",n)}async revoke(e,n="access_token"){let r=e.accessToken;n==="refresh_token"&&(r=e.refreshToken);const i={token:r,token_type_hint:n};return this.request("revocationEndpoint",i)}async getEndpoint(e){if(this.settings[e]!==void 0)return fe(this.settings[e],this.settings.server);if(e!=="discoveryEndpoint"&&(await this.discover(),this.settings[e]!==void 0))return fe(this.settings[e],this.settings.server);if(!this.settings.server)throw new Error(`Could not determine the location of ${e}. Either specify ${e} in the settings, or the "server" endpoint to let the client discover it.`);switch(e){case"authorizationEndpoint":return fe("/authorize",this.settings.server);case"tokenEndpoint":return fe("/token",this.settings.server);case"discoveryEndpoint":return fe("/.well-known/oauth-authorization-server",this.settings.server);case"introspectionEndpoint":return fe("/introspect",this.settings.server);case"revocationEndpoint":return fe("/revoke",this.settings.server)}}async discover(){var e;if(this.discoveryDone)return;this.discoveryDone=!0;let n;try{n=await this.getEndpoint("discoveryEndpoint")}catch{console.warn('[oauth2] OAuth2 discovery endpoint could not be determined. Either specify the "server" or "discoveryEndpoint');return}const r=await this.settings.fetch(n,{headers:{Accept:"application/json"}});if(!r.ok)return;if(!(!((e=r.headers.get("Content-Type"))===null||e===void 0)&&e.startsWith("application/json"))){console.warn("[oauth2] OAuth2 discovery endpoint was not a JSON response. Response is ignored");return}this.serverMetadata=await r.json();const i=[["authorization_endpoint","authorizationEndpoint"],["token_endpoint","tokenEndpoint"],["introspection_endpoint","introspectionEndpoint"],["revocation_endpoint","revocationEndpoint"]];if(this.serverMetadata!==null){for(const[o,s]of i)this.serverMetadata[o]&&(this.settings[s]=fe(this.serverMetadata[o],n));this.serverMetadata.token_endpoint_auth_methods_supported&&!this.settings.authenticationMethod&&(this.settings.authenticationMethod=this.serverMetadata.token_endpoint_auth_methods_supported[0])}}async request(e,n){const r=await this.getEndpoint(e),i={"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json"};let o=this.settings.authenticationMethod;switch(this.settings.clientSecret||(o="client_secret_post"),o||(o="client_secret_basic"),o){case"client_secret_basic":i.Authorization="Basic "+btoa(this.settings.clientId+":"+this.settings.clientSecret);break;case"client_secret_post":n.client_id=this.settings.clientId,this.settings.clientSecret&&(n.client_secret=this.settings.clientSecret);break;default:throw new Error("Authentication method not yet supported:"+o+". Open a feature request if you want this!")}const s=await this.settings.fetch(r,{method:"POST",body:lo(n),headers:i});let l;if(s.status!==204&&s.headers.has("Content-Type")&&s.headers.get("Content-Type").match(/^application\/(.*\+)?json/)&&(l=await s.json()),s.ok)return l;let c,g;throw l!=null&&l.error?(c="OAuth2 error "+l.error+".",l.error_description&&(c+=" "+l.error_description),g=l.error):(c="HTTP Error "+s.status+" "+s.statusText,s.status===401&&this.settings.clientSecret&&(c+=". It's likely that the clientId and/or clientSecret was incorrect"),g=null),new zl.OAuth2HttpError(c,g,s,l)}async tokenResponseToOAuth2Token(e){var n;const r=await e;if(!(r!=null&&r.access_token))throw console.warn("Invalid OAuth2 Token Response: ",r),new TypeError("We received an invalid token response from an OAuth2 server.");return{accessToken:r.access_token,expiresAt:r.expires_in?Date.now()+r.expires_in*1e3:null,refreshToken:(n=r.refresh_token)!==null&&n!==void 0?n:null}}}ln.OAuth2Client=Hl;function fe(t,e){return new URL(t,e).toString()}function lo(t){const e=new URLSearchParams;for(const[n,r]of Object.entries(t))if(Array.isArray(r))for(const i of r)e.append(n,i);else r!==void 0&&e.set(n,r.toString());return e.toString()}var co=(t=>(t.Refresh="refresh",t.Access="access",t))(co||{});const ct={refresh:void 0,access:void 0};function jl({renewRefreshToken:t,renewAccessToken:e}){Dt("refresh",S.refreshTokenPayload,t),S.onRefreshTokenUpdate(n=>Dt("refresh",n,t)),Dt("access",S.accessTokenPayload,e),S.onAccessTokenUpdate(n=>Dt("access",n,e))}function Fl(){Object.values(co).forEach(t=>{ct[t]&&clearTimeout(ct[t])})}function Dt(t,e,n){if(ct[t]&&clearTimeout(ct[t]),!e)return;const r=ms(e),i=r-Di;if(r<=0)return;const o=i>0?i:Math.max(r+1e3,0);ct[t]=setTimeout(()=>Bl(t,e,n),o)}function Bl(t,e,n){const{scope:r,locale:i}=e;Kl(r,async()=>{const o=t==="access"?zi(r):gt(r),s=o?Se(o):null;s&&(gs(s)?await n(s.scope,s.locale):t==="access"?S.accessToken=o:S.refreshToken=o)})}function Kl(t,e){navigator.locks.request(`bkdTokenRenewal_${t}`,async()=>{await e()})}const B=nn();if(typeof(B==null?void 0:B.oAuthServer)!="string")throw new Error("Invalid 'oAuthServer' setting");if(typeof(B==null?void 0:B.oAuthPrefix)!="string")throw new Error("Invalid 'oAuthPrefix' setting");if(typeof(B==null?void 0:B.oAuthClientId)!="string")throw new Error("Invalid 'clientId' setting");function Wl(){return new pr.OAuth2Client({server:B.oAuthServer,clientId:B.oAuthClientId,tokenEndpoint:`${B.oAuthPrefix}/Authorization/Token`,get authorizationEndpoint(){return ql()},fetch:(...t)=>fetch(...t)})}async function Gl(t,e,n){jl({renewRefreshToken:(s,l)=>Zn(t,s,l),renewAccessToken:(s,l)=>Zn(t,s,l)});const r=Ps(),i=await Xl(t,r);if(i){Zl(i,r);return}const o=Jl();if(o){Ql(o);return}await Xn(t,e,n)}async function Xn(t,e,n){if(Yl(e,n),Ni(S.refreshTokenPayload))return Zt(t,e,n);if(!S.accessToken)return Zn(t,e,n)}async function Zt(t,e,n,r=new URL(document.location.href)){r.searchParams.set(Ce,n);const i=new URL(await t.getEndpoint("authorizationEndpoint")),o=await pr.generateCodeVerifier();Rs(o,r.toString());const[s,l]=await Il(o);i.searchParams.set("clientId",t.settings.clientId),i.searchParams.set("redirectUrl",r.toString()),i.searchParams.set("culture_info",n),i.searchParams.set("application_scope",e),i.searchParams.set("response_type","code"),i.searchParams.set("code_challenge_method",s),i.searchParams.set("code_challenge",l),document.location.href=i.toString()}async function Vl(t){const e=ar();if(!e)throw new Error("No instance available");const{accessToken:n,scope:r,locale:i}=S;if(!(!n||!r||!i))try{await tc(t,e,n)}catch(o){if(!(o instanceof SyntaxError))throw o}finally{S.resetAllTokens(),Fl(),await Zt(t,r,i,new URL(ve(O.navigationHome)))}}function ql(){const t=ar();return t?`${B.oAuthPrefix}/Authorization/${t}/Login`:`${B.oAuthPrefix}/Authorization/Login`}function Yl(t,e){if(ni(S.accessToken,t,e))return;const n=zi(t);if(ni(n,t,e)){S.accessToken=n,S.refreshToken=gt(t);return}S.accessToken=null,S.refreshToken=gt(t)}async function Xl(t,e){return new URLSearchParams(document.location.search).get("code")&&(e!=null&&e.redirectUri)?await t.authorizationCode.getTokenFromCodeRedirect(document.location.href,{redirectUri:e.redirectUri,codeVerifier:e.codeVerifier}):null}function Zl({refreshToken:t,accessToken:e},n){var i;S.refreshToken=t,S.accessToken=e;const r=(i=S.accessTokenPayload)==null?void 0:i.instanceId;r&&ws(r),n!=null&&n.redirectUri&&v.navigate(new URL(n.redirectUri))}function Jl(){const t=new URLSearchParams(document.location.search),e=t.get("access_token"),n=t.get("expires_in"),r=t.get("refresh_token");return e?{accessToken:e,expiresAt:n?Date.now()+parseInt(n,10)*1e3:null,refreshToken:r||null}:null}function Ql(t){const{refreshToken:e,accessToken:n}=t;S.refreshToken=e,S.accessToken=n;const r=new URL(document.location.href);r.searchParams.delete("access_token"),r.searchParams.delete("expires_in"),r.searchParams.delete("refresh_token"),window.parent===window?history.replaceState({},"",r):window.parent.location.assign(r)}async function Zn(t,e,n){const r=ar(),i=gt(e);if(!r||!i)return Zt(t,e,n);try{const{refreshToken:o,accessToken:s}=await ec(t,r,e,n,i);Qa("Received renewed tokens"),S.refreshToken=o,S.accessToken=s}catch{return Zt(t,e,n)}}async function ec(t,e,n,r,i){const{access_token:o,refresh_token:s,expires_in:l}=await uo(t,`${B.oAuthPrefix}/Authorization/${e}/Token`,{refresh_token:i,grant_type:"refresh_token",client_id:B.oAuthClientId,culture_info:r,scope:n});return{accessToken:o,refreshToken:s,expiresAt:l?Date.now()+l*1e3:null}}function tc(t,e,n){return uo(t,`${B.oAuthPrefix}/Authorization/${e}/Logout`,{access_token:n})}async function uo(t,e,n){var g;const r=new URL(e,t.settings.server).toString(),i={"Content-Type":"application/x-www-form-urlencoded"},o=await fetch(r,{method:"POST",body:n&&Ml(n),headers:i});if(o.ok)return await o.json();let s,l,c;throw(g=o.headers.get("Content-Type"))!=null&&g.startsWith("application/json")&&(s=await o.json()),s!=null&&s.error?(l="OAuth2 error "+s.error+".",s.error_description&&(l+=" "+s.error_description),c=s.error):(l="HTTP Error "+o.status+" "+o.statusText,c=null),new pr.OAuth2Error(l,c)}var nc=Object.defineProperty,rc=Object.getOwnPropertyDescriptor,ho=(t,e,n,r)=>{for(var i=r>1?void 0:r?rc(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(r?s(e,n,i):s(i))||i);return r&&i&&nc(e,n,i),i};const Ut=Wl(),ic=async function(){await Gl(Ut,na(),ji()),v.init()}();sa(C`
    ${Ki}
    :root {
      ${Bi}
    }
  `.toString());let Jt=class extends P{constructor(){super(),this.authReady=!1,this.subscriptions=[],this.handleMessage=({data:t})=>{switch(t.type){case"bkdAppPushState":{const e=t.args[2];this.updateUrlAndNavigationState(e,!1);break}case"bkdAppReplaceState":{const e=t.args[2];xn(Cn(e),!0);break}case"bkdAppHashChange":{const{url:e}=t;xn(Cn(e));break}}},ic.then(()=>this.authReady=!0),new J(this,v)}connectedCallback(){super.connectedCallback(),v.initialized.then(()=>setTimeout(()=>{S.scope!==v.app.scope&&Xn(Ut,v.app.scope,v.locale)})),this.subscriptions.push(v.subscribeScopeAndLocale((e,n)=>Xn(Ut,e,n),!0)),this.subscriptions.push(v.subscribeInstanceName(this.updateTitle.bind(this))),this.subscriptions.push(v.subscribeNavigationItem(this.updateTitle.bind(this))),window.addEventListener("message",this.handleMessage);const t=new URL(location.href);v.actualAppPath=t.hash,window.addEventListener("hashchange",this.handleHashChange)}disconnectedCallback(){super.disconnectedCallback(),this.subscriptions.forEach(t=>t()),window.removeEventListener("message",this.handleMessage),window.removeEventListener("hashchange",this.handleHashChange)}updateTitle(){const{instanceName:t,navigationItem:e}=v,n=(e==null?void 0:e.label)&&(e==null?void 0:e.key)!==O.navigationHome.key;document.title=n?[e==null?void 0:e.label,t].join(" ― "):t}updateUrlAndNavigationState(t,e){var i;const n=Cn(t);xn(n,e);const r=Xs(v.navigation,n);(i=r==null?void 0:r.item)!=null&&i.key&&r.item.key!==v.navigationItemKey?(v.actualAppPath=n,v.navigationItemKey=r.item.key):v.appPath=n}handleHashChange(t){const e=new URL(t.newURL);v.appPath=e.hash}handleLogout(){Vl(Ut)}render(){return w`
      ${he(this.authReady&&S.authenticated,()=>w`
          <bkd-header @bkdlogout=${this.handleLogout.bind(this)}></bkd-header>
          <bkd-content></bkd-content>
          <bkd-footer></bkd-footer>
        `)}
    `}};Jt.styles=[M,C`
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
    `];ho([Ve()],Jt.prototype,"authReady",2);Jt=ho([D("bkd-portal"),N()],Jt);
