var wo=Object.defineProperty;var ko=(t,e,n)=>e in t?wo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var X=(t,e,n)=>(ko(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xt=window,Vn=xt.ShadowRoot&&(xt.ShadyCSS===void 0||xt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Kn=Symbol(),Pi=new WeakMap;let cr=class{constructor(e,n,i){if(this._$cssResult$=!0,i!==Kn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(Vn&&e===void 0){const i=n!==void 0&&n.length===1;i&&(e=Pi.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Pi.set(n,e))}return e}toString(){return this.cssText}};const _o=t=>new cr(typeof t=="string"?t:t+"",void 0,Kn),O=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((i,r,o)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[o+1],t[0]);return new cr(n,t,Kn)},Ao=(t,e)=>{Vn?t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):e.forEach(n=>{const i=document.createElement("style"),r=xt.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=n.cssText,t.appendChild(i)})},xi=Vn?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const i of e.cssRules)n+=i.cssText;return _o(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var bn;const Dt=window,Ii=Dt.trustedTypes,Eo=Ii?Ii.emptyScript:"",Oi=Dt.reactiveElementPolyfillSupport,Ln={toAttribute(t,e){switch(e){case Boolean:t=t?Eo:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},dr=(t,e)=>e!==t&&(e==e||t==t),vn={attribute:!0,type:String,converter:Ln,reflect:!1,hasChanged:dr},Nn="finalized";let ze=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((n,i)=>{const r=this._$Ep(i,n);r!==void 0&&(this._$Ev.set(r,i),e.push(r))}),e}static createProperty(e,n=vn){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,i,n);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,n,i){return{get(){return this[n]},set(r){const o=this[e];this[n]=r,this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||vn}static finalize(){if(this.hasOwnProperty(Nn))return!1;this[Nn]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,i=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const r of i)this.createProperty(r,n[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)n.unshift(xi(r))}else e!==void 0&&n.push(xi(e));return n}static _$Ep(e,n){const i=n.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(n=>n(this))}addController(e){var n,i;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Ao(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var i;return(i=n.hostConnected)===null||i===void 0?void 0:i.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var i;return(i=n.hostDisconnected)===null||i===void 0?void 0:i.call(n)})}attributeChangedCallback(e,n,i){this._$AK(e,i)}_$EO(e,n,i=vn){var r;const o=this.constructor._$Ep(e,i);if(o!==void 0&&i.reflect===!0){const s=(((r=i.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?i.converter:Ln).toAttribute(n,i.type);this._$El=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$El=null}}_$AK(e,n){var i;const r=this.constructor,o=r._$Ev.get(e);if(o!==void 0&&this._$El!==o){const s=r.getPropertyOptions(o),d=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?s.converter:Ln;this._$El=o,this[o]=d.fromAttribute(n,s.type),this._$El=null}}requestUpdate(e,n,i){let r=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||dr)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,o)=>this[o]=r),this._$Ei=void 0);let n=!1;const i=this._$AL;try{n=this.shouldUpdate(i),n?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var o;return(o=r.hostUpdate)===null||o===void 0?void 0:o.call(r)}),this.update(i)):this._$Ek()}catch(r){throw n=!1,this._$Ek(),r}n&&this._$AE(i)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach(i=>{var r;return(r=i.hostUpdated)===null||r===void 0?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((n,i)=>this._$EO(i,this[i],n)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};ze[Nn]=!0,ze.elementProperties=new Map,ze.elementStyles=[],ze.shadowRootOptions={mode:"open"},Oi==null||Oi({ReactiveElement:ze}),((bn=Dt.reactiveElementVersions)!==null&&bn!==void 0?bn:Dt.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var yn;const Mt=window,He=Mt.trustedTypes,Li=He?He.createPolicy("lit-html",{createHTML:t=>t}):void 0,Ut="$lit$",se=`lit$${(Math.random()+"").slice(9)}$`,qn="?"+se,To=`<${qn}>`,Te=document,ot=()=>Te.createComment(""),st=t=>t===null||typeof t!="object"&&typeof t!="function",ur=Array.isArray,hr=t=>ur(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",wn=`[ 	
\f\r]`,Qe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ni=/-->/g,Di=/>/g,ve=RegExp(`>|${wn}(?:([^\\s"'>=/]+)(${wn}*=${wn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Mi=/'/g,Ui=/"/g,pr=/^(?:script|style|textarea|title)$/i,So=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),E=So(1),ae=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),zi=new WeakMap,_e=Te.createTreeWalker(Te,129,null,!1);function fr(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Li!==void 0?Li.createHTML(e):e}const gr=(t,e)=>{const n=t.length-1,i=[];let r,o=e===2?"<svg>":"",s=Qe;for(let d=0;d<n;d++){const l=t[d];let c,h,p=-1,g=0;for(;g<l.length&&(s.lastIndex=g,h=s.exec(l),h!==null);)g=s.lastIndex,s===Qe?h[1]==="!--"?s=Ni:h[1]!==void 0?s=Di:h[2]!==void 0?(pr.test(h[2])&&(r=RegExp("</"+h[2],"g")),s=ve):h[3]!==void 0&&(s=ve):s===ve?h[0]===">"?(s=r??Qe,p=-1):h[1]===void 0?p=-2:(p=s.lastIndex-h[2].length,c=h[1],s=h[3]===void 0?ve:h[3]==='"'?Ui:Mi):s===Ui||s===Mi?s=ve:s===Ni||s===Di?s=Qe:(s=ve,r=void 0);const u=s===ve&&t[d+1].startsWith("/>")?" ":"";o+=s===Qe?l+To:p>=0?(i.push(c),l.slice(0,p)+Ut+l.slice(p)+se+u):l+se+(p===-2?(i.push(void 0),d):u)}return[fr(t,o+(t[n]||"<?>")+(e===2?"</svg>":"")),i]};class at{constructor({strings:e,_$litType$:n},i){let r;this.parts=[];let o=0,s=0;const d=e.length-1,l=this.parts,[c,h]=gr(e,n);if(this.el=at.createElement(c,i),_e.currentNode=this.el.content,n===2){const p=this.el.content,g=p.firstChild;g.remove(),p.append(...g.childNodes)}for(;(r=_e.nextNode())!==null&&l.length<d;){if(r.nodeType===1){if(r.hasAttributes()){const p=[];for(const g of r.getAttributeNames())if(g.endsWith(Ut)||g.startsWith(se)){const u=h[s++];if(p.push(g),u!==void 0){const b=r.getAttribute(u.toLowerCase()+Ut).split(se),m=/([.?@])?(.*)/.exec(u);l.push({type:1,index:o,name:m[2],strings:b,ctor:m[1]==="."?br:m[1]==="?"?vr:m[1]==="@"?yr:gt})}else l.push({type:6,index:o})}for(const g of p)r.removeAttribute(g)}if(pr.test(r.tagName)){const p=r.textContent.split(se),g=p.length-1;if(g>0){r.textContent=He?He.emptyScript:"";for(let u=0;u<g;u++)r.append(p[u],ot()),_e.nextNode(),l.push({type:2,index:++o});r.append(p[g],ot())}}}else if(r.nodeType===8)if(r.data===qn)l.push({type:2,index:o});else{let p=-1;for(;(p=r.data.indexOf(se,p+1))!==-1;)l.push({type:7,index:o}),p+=se.length-1}o++}}static createElement(e,n){const i=Te.createElement("template");return i.innerHTML=e,i}}function Se(t,e,n=t,i){var r,o,s,d;if(e===ae)return e;let l=i!==void 0?(r=n._$Co)===null||r===void 0?void 0:r[i]:n._$Cl;const c=st(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),c===void 0?l=void 0:(l=new c(t),l._$AT(t,n,i)),i!==void 0?((s=(d=n)._$Co)!==null&&s!==void 0?s:d._$Co=[])[i]=l:n._$Cl=l),l!==void 0&&(e=Se(t,l._$AS(t,e.values),l,i)),e}class mr{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var n;const{el:{content:i},parts:r}=this._$AD,o=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:Te).importNode(i,!0);_e.currentNode=o;let s=_e.nextNode(),d=0,l=0,c=r[0];for(;c!==void 0;){if(d===c.index){let h;c.type===2?h=new Ve(s,s.nextSibling,this,e):c.type===1?h=new c.ctor(s,c.name,c.strings,this,e):c.type===6&&(h=new wr(s,this,e)),this._$AV.push(h),c=r[++l]}d!==(c==null?void 0:c.index)&&(s=_e.nextNode(),d++)}return _e.currentNode=Te,o}v(e){let n=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,n),n+=i.strings.length-2):i._$AI(e[n])),n++}}class Ve{constructor(e,n,i,r){var o;this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=i,this.options=r,this._$Cp=(o=r==null?void 0:r.isConnected)===null||o===void 0||o}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=Se(this,e,n),st(e)?e===P||e==null||e===""?(this._$AH!==P&&this._$AR(),this._$AH=P):e!==this._$AH&&e!==ae&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):hr(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==P&&st(this._$AH)?this._$AA.nextSibling.data=e:this.$(Te.createTextNode(e)),this._$AH=e}g(e){var n;const{values:i,_$litType$:r}=e,o=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=at.createElement(fr(r.h,r.h[0]),this.options)),r);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===o)this._$AH.v(i);else{const s=new mr(o,this),d=s.u(this.options);s.v(i),this.$(d),this._$AH=s}}_$AC(e){let n=zi.get(e.strings);return n===void 0&&zi.set(e.strings,n=new at(e)),n}T(e){ur(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let i,r=0;for(const o of e)r===n.length?n.push(i=new Ve(this.k(ot()),this.k(ot()),this,this.options)):i=n[r],i._$AI(o),r++;r<n.length&&(this._$AR(i&&i._$AB.nextSibling,r),n.length=r)}_$AR(e=this._$AA.nextSibling,n){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,n);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var n;this._$AM===void 0&&(this._$Cp=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}}class gt{constructor(e,n,i,r,o){this.type=1,this._$AH=P,this._$AN=void 0,this.element=e,this.name=n,this._$AM=r,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=P}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,i,r){const o=this.strings;let s=!1;if(o===void 0)e=Se(this,e,n,0),s=!st(e)||e!==this._$AH&&e!==ae,s&&(this._$AH=e);else{const d=e;let l,c;for(e=o[0],l=0;l<o.length-1;l++)c=Se(this,d[i+l],n,l),c===ae&&(c=this._$AH[l]),s||(s=!st(c)||c!==this._$AH[l]),c===P?e=P:e!==P&&(e+=(c??"")+o[l+1]),this._$AH[l]=c}s&&!r&&this.j(e)}j(e){e===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class br extends gt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===P?void 0:e}}const $o=He?He.emptyScript:"";class vr extends gt{constructor(){super(...arguments),this.type=4}j(e){e&&e!==P?this.element.setAttribute(this.name,$o):this.element.removeAttribute(this.name)}}class yr extends gt{constructor(e,n,i,r,o){super(e,n,i,r,o),this.type=5}_$AI(e,n=this){var i;if((e=(i=Se(this,e,n,0))!==null&&i!==void 0?i:P)===ae)return;const r=this._$AH,o=e===P&&r!==P||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==P&&(r===P||o);o&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,i;typeof this._$AH=="function"?this._$AH.call((i=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class wr{constructor(e,n,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Se(this,e)}}const Co={O:Ut,P:se,A:qn,C:1,M:gr,L:mr,R:hr,D:Se,I:Ve,V:gt,H:vr,N:yr,U:br,F:wr},ji=Mt.litHtmlPolyfillSupport;ji==null||ji(at,Ve),((yn=Mt.litHtmlVersions)!==null&&yn!==void 0?yn:Mt.litHtmlVersions=[]).push("2.8.0");const Ro=(t,e,n)=>{var i,r;const o=(i=n==null?void 0:n.renderBefore)!==null&&i!==void 0?i:e;let s=o._$litPart$;if(s===void 0){const d=(r=n==null?void 0:n.renderBefore)!==null&&r!==void 0?r:null;o._$litPart$=s=new Ve(e.insertBefore(ot(),d),d,void 0,n??{})}return s._$AI(t),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var kn,_n;let I=class extends ze{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const i=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=i.firstChild),i}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ro(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return ae}};I.finalized=!0,I._$litElement$=!0,(kn=globalThis.litElementHydrateSupport)===null||kn===void 0||kn.call(globalThis,{LitElement:I});const Hi=globalThis.litElementPolyfillSupport;Hi==null||Hi({LitElement:I});((_n=globalThis.litElementVersions)!==null&&_n!==void 0?_n:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=t=>e=>typeof e=="function"?((n,i)=>(customElements.define(n,i),i))(t,e):((n,i)=>{const{kind:r,elements:o}=i;return{kind:r,elements:o,finisher(s){customElements.define(n,s)}}})(t,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Po=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}},xo=(t,e,n)=>{e.constructor.createProperty(n,t)};function q(t){return(e,n)=>n!==void 0?xo(t,e,n):Po(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ke(t){return q({...t,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yn=({finisher:t,descriptor:e})=>(n,i)=>{var r;if(i===void 0){const o=(r=n.originalKey)!==null&&r!==void 0?r:n.key,s=e!=null?{kind:"method",placement:"prototype",key:o,descriptor:e(n.key)}:{...n,key:o};return t!=null&&(s.finisher=function(d){t(d,o)}),s}{const o=n.constructor;e!==void 0&&Object.defineProperty(n,i,e(i)),t==null||t(o,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function J(t,e){return Yn({descriptor:n=>{const i={get(){var r,o;return(o=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(t))!==null&&o!==void 0?o:null},enumerable:!0,configurable:!0};if(e){const r=typeof n=="symbol"?Symbol():"__"+n;i.get=function(){var o,s;return this[r]===void 0&&(this[r]=(s=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(t))!==null&&s!==void 0?s:null),this[r]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var An;((An=window.HTMLSlotElement)===null||An===void 0?void 0:An.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Yt=t=>(...e)=>({_$litDirective$:t,values:e});let Xt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,i){this._$Ct=e,this._$AM=n,this._$Ci=i}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Io}=Co,Fi=()=>document.createComment(""),Ze=(t,e,n)=>{var i;const r=t._$AA.parentNode,o=e===void 0?t._$AB:e._$AA;if(n===void 0){const s=r.insertBefore(Fi(),o),d=r.insertBefore(Fi(),o);n=new Io(s,d,t,t.options)}else{const s=n._$AB.nextSibling,d=n._$AM,l=d!==t;if(l){let c;(i=n._$AQ)===null||i===void 0||i.call(n,t),n._$AM=t,n._$AP!==void 0&&(c=t._$AU)!==d._$AU&&n._$AP(c)}if(s!==o||l){let c=n._$AA;for(;c!==s;){const h=c.nextSibling;r.insertBefore(c,o),c=h}}}return n},ye=(t,e,n=t)=>(t._$AI(e,n),t),Oo={},kr=(t,e=Oo)=>t._$AH=e,Lo=t=>t._$AH,En=t=>{var e;(e=t._$AP)===null||e===void 0||e.call(t,!1,!0);let n=t._$AA;const i=t._$AB.nextSibling;for(;n!==i;){const r=n.nextSibling;n.remove(),n=r}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const No=Yt(class extends Xt{constructor(){super(...arguments),this.key=P}render(t,e){return this.key=t,e}update(t,[e,n]){return e!==this.key&&(kr(t),this.key=e),n}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function je(t,e,n){return t?e():n==null?void 0:n()}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Do=t=>typeof t!="string"&&"strTag"in t,_r=(t,e,n)=>{let i=t[0];for(let r=1;r<t.length;r++)i+=e[n?n[r-1]:r-1],i+=t[r];return i};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ar=t=>Do(t)?_r(t.strings,t.values):t;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dn="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Mo{constructor(e){this.__litLocalizeEventHandler=n=>{n.detail.status==="ready"&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(Dn,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(Dn,this.__litLocalizeEventHandler)}}const Uo=t=>t.addController(new Mo(t)),Er=Uo;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zo=()=>t=>typeof t=="function"?Ho(t):jo(t),z=zo,jo=({kind:t,elements:e})=>({kind:t,elements:e,finisher(n){n.addInitializer(Er)}}),Ho=t=>(t.addInitializer(Er),t);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Tr{constructor(){this.settled=!1,this.promise=new Promise((e,n)=>{this._resolve=e,this._reject=n})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */const oe=[];for(let t=0;t<256;t++)oe[t]=(t>>4&15).toString(16)+(t&15).toString(16);function Fo(t){let e=0,n=8997,i=0,r=33826,o=0,s=40164,d=0,l=52210;for(let c=0;c<t.length;c++)n^=t.charCodeAt(c),e=n*435,i=r*435,o=s*435,d=l*435,o+=n<<8,d+=r<<8,i+=e>>>16,n=e&65535,o+=i>>>16,r=i&65535,l=d+(o>>>16)&65535,s=o&65535;return oe[l>>8]+oe[l&255]+oe[s>>8]+oe[s&255]+oe[r>>8]+oe[r&255]+oe[n>>8]+oe[n&255]}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bo="",Wo="h",Go="s";function Vo(t,e){return(e?Wo:Go)+Fo(typeof t=="string"?t:t.join(Bo))}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bi=new WeakMap,Wi=new Map;function Ko(t,e,n){var i;if(t){const r=(i=n==null?void 0:n.id)!==null&&i!==void 0?i:qo(e),o=t[r];if(o){if(typeof o=="string")return o;if("strTag"in o)return _r(o.strings,e.values,o.values);{let s=Bi.get(o);return s===void 0&&(s=o.values,Bi.set(o,s)),{...o,values:s.map(d=>e.values[d])}}}}return Ar(e)}function qo(t){const e=typeof t=="string"?t:t.strings;let n=Wi.get(e);return n===void 0&&(n=Vo(e,typeof t!="string"&&!("strTag"in t)),Wi.set(e,n)),n}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Tn(t){window.dispatchEvent(new CustomEvent(Dn,{detail:t}))}let zt="",Je,Sr,jt,Mn,$r,ke=new Tr;ke.resolve();let $t=0;const Yo=t=>(Zo((e,n)=>Ko($r,e,n)),zt=Sr=t.sourceLocale,jt=new Set(t.targetLocales),jt.add(t.sourceLocale),Mn=t.loadLocale,{getLocale:Xo,setLocale:Qo}),Xo=()=>zt,Qo=t=>{if(t===(Je??zt))return ke.promise;if(!jt||!Mn)throw new Error("Internal error");if(!jt.has(t))throw new Error("Invalid locale code");$t++;const e=$t;return Je=t,ke.settled&&(ke=new Tr),Tn({status:"loading",loadingLocale:t}),(t===Sr?Promise.resolve({templates:void 0}):Mn(t)).then(i=>{$t===e&&(zt=t,Je=void 0,$r=i.templates,Tn({status:"ready",readyLocale:t}),ke.resolve())},i=>{$t===e&&(Tn({status:"error",errorLocale:t,errorMessage:i.toString()}),ke.reject(i))}),ke.promise};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let k=Ar,Gi=!1;function Zo(t){if(Gi)throw new Error("lit-localize can only be configured once");k=t,Gi=!0}function Cr(t){return typeof t=="function"?t():t}const qt=class qt extends Event{constructor(n,i,r){super(qt.eventName,{cancelable:!1});X(this,"key");X(this,"state");X(this,"value");this.key=n,this.value=i,this.state=r}};X(qt,"eventName","lit-state-changed");let Ae=qt;const Jo=(t,e)=>e!==t&&(e===e||t===t);class It extends EventTarget{constructor(){super();X(this,"hookMap",new Map);this.constructor.finalize(),this.propertyMap&&[...this.propertyMap].forEach(([n,i])=>{if(i.initialValue!==void 0){const r=Cr(i.initialValue);this[n]=r,i.value=r}})}get propertyMap(){return this.constructor.propertyMap}get stateValue(){return Object.fromEntries([...this.propertyMap].map(([n])=>[n,this[n]]))}static finalize(){if(this.finalized)return!1;this.finalized=!0;const n=Object.keys(this.properties||{});for(const i of n)this.createProperty(i,this.properties[i]);return!0}static createProperty(n,i){this.finalize();const r=typeof n=="symbol"?Symbol():`__${n}`,o=this.getPropertyDescriptor(n,r,i);Object.defineProperty(this.prototype,n,o)}static getPropertyDescriptor(n,i,r){const o=(r==null?void 0:r.hasChanged)||Jo;return{get(){return this[i]},set(s){const d=this[n];this[i]=s,o(s,d)===!0&&this.dispatchStateEvent(n,s,this)},configurable:!0,enumerable:!0}}reset(){this.hookMap.forEach(n=>n.reset()),[...this.propertyMap].filter(([n,i])=>!(i.skipReset===!0||i.resetValue===void 0)).forEach(([n,i])=>{this[n]=i.resetValue})}subscribe(n,i,r){i&&!Array.isArray(i)&&(i=[i]);const o=s=>{(!i||i.includes(s.key))&&n(s.key,s.value,this)};return this.addEventListener(Ae.eventName,o,r),()=>this.removeEventListener(Ae.eventName,o)}dispatchStateEvent(n,i,r){this.dispatchEvent(new Ae(n,i,r))}}X(It,"propertyMap"),X(It,"properties"),X(It,"finalized",!1);class le{constructor(e,n,i){X(this,"host");X(this,"state");X(this,"callback");this.host=e,this.state=n,this.host.addController(this),this.callback=i||(()=>this.host.requestUpdate())}hostConnected(){this.state.addEventListener(Ae.eventName,this.callback),this.callback()}hostDisconnected(){this.state.removeEventListener(Ae.eventName,this.callback)}}function ce(t){return Yn({finisher:(e,n)=>{if(Object.getOwnPropertyDescriptor(e.prototype,n))throw new Error("@property must be called before all state decorators");return e.propertyMap||(e.propertyMap=new Map),e.propertyMap.set(n,{...t,initialValue:t==null?void 0:t.value,resetValue:t==null?void 0:t.value}),e.createProperty(n,t)}})}function es(t,e){if(t!==null&&(e===Boolean||e===Number||e===Array||e===Object))try{t=JSON.parse(t)}catch{console.warn("cannot parse value",t)}return t}const ts=new URL(window.location.href);function ns(t){return Yn({finisher:(e,n)=>{if(!Object.getOwnPropertyDescriptor(e.prototype,n))throw new Error("@local-storage decorator need to be called after @property");const r=`${(t==null?void 0:t.parameter)||String(n)}`,o=e.propertyMap.get(n),s=o==null?void 0:o.type;if(o){const d=o.initialValue,l=ts.searchParams.get(r);l!==null&&(o.skipAsync=!0),o.initialValue=()=>es(l,s)??Cr(d),e.propertyMap.set(n,{...o,...t})}}})}const L={apps:[{key:"schulverwaltung",scope:"Tutoring",root:"apps/webapp-schulverwaltung/index.html",heading:!1},{key:"anmeldedetailsEinlesen",scope:"NG",root:"apps/EmberApps/AnmeldedetailsEinlesen/index.html",heading:!0},{key:"schulleiterPersonen",scope:"NG",root:"apps/EmberApps/SchulleiterPersonen/index.html",heading:!0},{key:"fotoliste",scope:"Tutoring",root:"apps/EmberApps/Fotoliste/index.html",heading:!1},{key:"kursausschreibung",scope:"Public",root:"apps/Kursausschreibung/index.html",heading:!0},{key:"kursausschreibungIntern",scope:"Public",root:"apps/Kursausschreibung/indexIntern.html",heading:!0},{key:"stellvertretung",scope:"Tutoring",root:"apps/Stellvertretung/index.html",heading:!0},{key:"reservation",scope:"NG",root:"apps/Raumreservation/index.html",heading:!0},{key:"noteneingabe",scope:"Tutoring",root:"apps/Noteneingabe/index.html",heading:!1}],navigationHome:{key:"home",label:"Home",allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/dashboard"},get navigationPhotoList(){return{key:"photoList",label:k("Fotoliste"),allowedRolesOrPermissions:["TeacherRole"],deniedInstanceIds:null,appKey:"fotoliste",appPath:"#/"}},get navigationInputGrades(){return{key:"inputGrades",label:k("Noteneingabe"),allowedRolesOrPermissions:["TeacherRole"],deniedInstanceIds:null,appKey:"noteneingabe",appPath:"#/"}},get navigationMyProfile(){return{key:"myProfile",label:k("Mein Profil"),allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/my-profile"}},get navigationMySettings(){return{key:"mySettings",label:k("Einstellungen"),allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/my-settings"}},get navigation(){return[{label:k("Unterricht"),items:[{key:"presenceControl",label:k("Präsenzkontrolle"),allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/presence-control"},{key:"currentEvents",label:k("Aktuelle Fächer"),allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole","ClassTeacherRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/events/current"},{key:"tests",label:k("Tests und Bewertung"),allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/events"},{key:"substitutionsAssign",label:k("Stellvertretung erfassen"),allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole"],deniedInstanceIds:null,appKey:"stellvertretung",appPath:"#/substitutions/assign"},{key:"substitutionsExecute",label:k("Stellvertretung ausüben"),allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole"],deniedInstanceIds:null,appKey:"stellvertretung",appPath:"#/substitutions/execute"}]},{label:k("Absenzen"),items:[{key:"openAbsences",label:k("Offene Absenzen entschuldigen"),allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole","ClassTeacherRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/open-absences"},{key:"editAbsences",label:k("Absenzen bearbeiten"),allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole","ClassTeacherRole","AbsenceAdministratorRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/edit-absences"},{key:"evaluateAbsences",label:k("Absenzen auswerten"),allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole","ClassTeacherRole","AbsenceAdministratorRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/evaluate-absences"}]},{label:k("Aus-/Weiterbildung"),items:[{key:"myAbsences",label:k("Absenzen"),allowedRolesOrPermissions:["StudentRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/my-absences"},{key:"myGrades",label:k("Noten"),allowedRolesOrPermissions:["StudentRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/my-grades"}]},{label:k("Angebote"),items:[{key:"coursesAndEvents",label:k("Kurse und Veranstaltungen"),allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"kursausschreibung",appPath:"#/"},{key:"internalTraining",label:k("Schulinterne Weiterbildung"),allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole","ClassTeacherRole","AbsenceAdministratorRole","SubstituteAdministratorRole","Reservations"],deniedInstanceIds:null,appKey:"kursausschreibungIntern",appPath:"#/"},{key:"reservations",label:k("Räume und Geräte reservieren"),allowedRolesOrPermissions:["Reservations"],deniedInstanceIds:null,appKey:"reservation",appPath:"#/"}]},{label:k("Administration"),items:[{key:"substitutionsAdmin",label:k("Stellvertretungen administrieren"),allowedRolesOrPermissions:["SubstituteAdministratorRole"],deniedInstanceIds:null,appKey:"stellvertretung",appPath:"#/substitutions/admin"},{key:"personSearch",label:k("Personen und Institutionen suchen"),allowedRolesOrPermissions:["PersonRight"],deniedInstanceIds:null,appKey:"schulleiterPersonen",appPath:"#/persons"},{key:"eventRegistration",label:k("Anmeldedetails einlesen"),allowedRolesOrPermissions:["PersonRight","RegistrationRightAusbildungSemester","RegistrationRightAusbildungKurs","RegistrationRightAusbildungModulanlass","RegistrationRightAusbildungModul","RegistrationRightAusbildungStudiengang","RegistrationRightAusbildungStudienjahrgang","RegistrationRightAusbildungVeranstaltung","RegistrationRightWeiterbildungCAS","RegistrationRightWeiterbildungCASAnlass","RegistrationRightWeiterbildungDAS","RegistrationRightWeiterbildungDASJahrgang","RegistrationRightWeiterbildungInteressent","RegistrationRightWeiterbildungKurs","RegistrationRightWeiterbildungMAS","RegistrationRightWeiterbildungMASJahrgang","RegistrationRightWeiterbildungModulanlass","RegistrationRightWeiterbildungModulbefreiung","RegistrationRightWeiterbildungSemester","RegistrationRightWeiterbildungVeranstaltung","RegistrationRightWeiterbildungEvaluationsanlass","RegistrationRightWeiterbildungFakturierung","RegistrationRightWeiterbildungMailingliste","RegistrationRightWeiterbildungPlatzangebot","RegistrationRightWeiterbildungReservation"],deniedInstanceIds:null,appKey:"anmeldedetailsEinlesen",appPath:"#/input"}]}]}};function Qt(){var t;return((t=window.eventoPortal)==null?void 0:t.settings)??{apiServer:"",oAuthServer:"",oAuthPrefix:"",oAuthClientId:"",notificationRefreshTime:30}}function lt(t){const{instance_id:e,scope:n,culture_info:i,nbf:r,exp:o,substitution_id:s,holder_roles:d}=ss(t);return{instanceId:e,scope:n,locale:i,issueTime:r,expirationTime:o,substitutionId:s?parseInt(s,10):void 0,substitutionRoles:d?d.split(";"):void 0}}function Vi(t,e,n){if(!t)return!1;const i=lt(t);return i.scope===e&&i.locale===n&&!rs(i)}function is(t){if(!t)return!0;const{expirationTime:e}=t,n=Math.floor(Date.now()/1e3);return e<n}function rs(t){if(!t)return!0;const{issueTime:e,expirationTime:n}=t,i=n-e,r=Math.floor(Date.now()/1e3);return n<=r+i/2}function os(t){const{expirationTime:e}=t;return Math.max(e*1e3-Date.now(),0)}function ss(t){const n=t.split(".")[1].replace("-","+").replace("_","/"),i=decodeURIComponent(window.atob(n).split("").map(function(r){return"%"+("00"+r.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(i)}const Rr="bkdInstance",Un="bkdCodeVerifier",ct="bkdRedirectUrl",Qn="bkdAccessToken",Zn="bkdRefreshToken",dt="CLX.LoginToken",as="uiCulture",ls="CLX.TokenExpire";function Pr(){return localStorage.getItem(Rr)}function cs(t){localStorage.setItem(Rr,t)}function ds(t){return localStorage.getItem(`${Qn}_${t}`)}function us(){return localStorage.getItem(Zn)}function hs(t){t&&localStorage.setItem(Zn,t)}function ps(t,e){localStorage.setItem(`${Qn}_${t}`,e)}function fs(){new Array(localStorage.length).fill(void 0).forEach((t,e)=>{const n=localStorage.key(e);n&&(n.startsWith(Qn)||n===Zn)&&localStorage.removeItem(n)}),sessionStorage.removeItem(dt)}function gs(t){localStorage.setItem(as,t)}function ms(){const t=sessionStorage.getItem(dt);return t?t.replace(/^"+|"+$/g,""):null}function bs(){const t=localStorage.getItem(dt);return t?t.replace(/^"+|"+$/g,""):null}function vs(t){sessionStorage.setItem(dt,`"${t}"`),localStorage.setItem(dt,`"${t}"`);let{expirationTime:e}=lt(t);e=e*1e3,localStorage.setItem(ls,e.toString())}function ys(){const t=sessionStorage.getItem(Un),e=sessionStorage.getItem(ct)??void 0;return sessionStorage.removeItem(ct),sessionStorage.removeItem(Un),t?{redirectUri:e,codeVerifier:t}:null}function ws(t,e){sessionStorage.setItem(Un,t),e?sessionStorage.setItem(ct,e):sessionStorage.removeItem(ct)}function ks(){return sessionStorage.getItem(ct)}class _s{constructor(){this.state={refreshToken:us(),refreshTokenPayload:null,accessToken:ms(),accessTokenPayload:null},this.refreshTokenSubscribers=[],this.accessTokenSubscribers=[],this.afterRefreshTokenUpdate(this.refreshToken,!1),this.afterAccessTokenUpdate(this.accessToken,!1)}get refreshToken(){return this.state.refreshToken}set refreshToken(e){this.state.refreshToken=e,this.afterRefreshTokenUpdate(e)}get refreshTokenPayload(){return this.state.refreshTokenPayload}get accessToken(){return this.state.accessToken}set accessToken(e){this.state.accessToken=e,this.afterAccessTokenUpdate(e)}get accessTokenPayload(){return this.state.accessTokenPayload}get authenticated(){return!!this.accessToken}get scope(){var e;return((e=this.accessTokenPayload)==null?void 0:e.scope)??null}get locale(){var e;return((e=this.accessTokenPayload)==null?void 0:e.locale)??null}get instanceId(){var e;return((e=this.accessTokenPayload)==null?void 0:e.instanceId)??null}isRefreshTokenExpired(){return is(this.refreshTokenPayload)}resetAllTokens(){this.state.refreshToken=null,this.state.refreshTokenPayload=null,this.state.accessToken=null,this.state.accessTokenPayload=null,fs()}onRefreshTokenUpdate(e){return this.refreshTokenSubscribers.push(e),()=>{const n=this.refreshTokenSubscribers.findIndex(i=>i===e);this.refreshTokenSubscribers.splice(n,1)}}onAccessTokenUpdate(e){return this.accessTokenSubscribers.push(e),()=>{const n=this.accessTokenSubscribers.findIndex(i=>i===e);this.accessTokenSubscribers.splice(n,1)}}afterRefreshTokenUpdate(e,n=!0){this.state.refreshTokenPayload=e?lt(e):null,e&&n&&hs(e),this.notifyRefreshTokenSubscribers()}afterAccessTokenUpdate(e,n=!0){const i=e?lt(e):null;this.state.accessTokenPayload=i,e&&i&&n&&(ps(i.scope,e),vs(e)),this.notifyAccessTokenSubscribers()}notifyRefreshTokenSubscribers(){this.refreshTokenSubscribers.forEach(e=>e(this.refreshTokenPayload))}notifyAccessTokenSubscribers(){this.accessTokenSubscribers.forEach(e=>e(this.accessTokenPayload))}}const C=new _s,he=Qt();if(typeof(he==null?void 0:he.apiServer)!="string")throw new Error("Invalid 'apiServer' setting");async function As(){var n,i;const t=`${he.apiServer}/UserSettings/?expand=AccessInfo`,e=await mt(t);return{roles:((n=e==null?void 0:e.AccessInfo)==null?void 0:n.Roles)??[],permissions:((i=e==null?void 0:e.AccessInfo)==null?void 0:i.Permissions)??[]}}async function Es(){const t=`${he.apiServer}/Configurations/SchoolAppNavigation`,e=await mt(t);return(e==null?void 0:e.instanceName)||null}function Ts(){const t=`${he.apiServer}/TeacherSubstitutions/current`;return mt(t)}const xr="notificationData";async function Ss(){var i;const t=`${he.apiServer}/UserSettings/Cst`,{Settings:e}=await mt(t),n=(i=e.find(r=>r.Key===xr))==null?void 0:i.Value;return n?JSON.parse(n):[]}function Ki(t){const e=`${he.apiServer}/UserSettings/Cst`,n={Id:"Cst",Settings:[{Key:xr,Value:JSON.stringify(t)}]};return mt(e,{method:"PATCH",body:JSON.stringify(n)},!0)}async function mt(t,{method:e="GET",body:n=void 0}={},i){const{accessToken:r}=C;if(!r)throw new Error("No token available");const o=new Headers({"CLX-Authorization":`token_type=urn:ietf:params:oauth:token-type:jwt-bearer, access_token=${r}`,"Content-Type":"application/json"}),s=await fetch(t,{method:e,headers:o,body:n});if(!i)return s.json()}const $s="modulepreload",Cs=function(t){return"/"+t},qi={},Rs=function(e,n,i){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=Cs(o),o in qi)return;qi[o]=!0;const s=o.endsWith(".css"),d=s?'[rel="stylesheet"]':"";if(!!i)for(let h=r.length-1;h>=0;h--){const p=r[h];if(p.href===o&&(!s||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${d}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":$s,s||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),s)return new Promise((h,p)=>{c.addEventListener("load",h),c.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e()).catch(o=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o})},Ir="de-CH",Ps=["fr-CH"],Jn=["de-CH","fr-CH"],{getLocale:xs,setLocale:Is}=Yo({sourceLocale:Ir,targetLocales:Ps,loadLocale:t=>Rs(()=>import(`/locales/${t}.js`),[])});function Or(){const t=Ls()??Ms()??Us();return t&&Ns(t)?t:Ds()??Ir}async function Os(t){await Is(t),document.documentElement.lang=t}function Ls(){return new URL(location.href).searchParams.get($e)}function Ns(t){return Jn.includes(t)}function Ds(){const t=navigator.language.slice(0,2);return Jn.find(e=>e.startsWith(t))??null}function Ms(){const t=ks();return t?new URL(t).searchParams.get($e):null}function Us(){const t=bs();return t?lt(t).locale:null}const zs=[L.navigationHome,L.navigationMyProfile,L.navigationMySettings,L.navigationPhotoList,L.navigationInputGrades];function Zt(t,e){const n=Lr(t,({key:i})=>i===e);return n||{item:L.navigationHome,group:null}}function js(t,e){return Lr(t,n=>n.appPath!=="#/"&&e.startsWith(n.appPath))}function Lr(t,e){let n=zs.find(i=>e(i));if(n)return{item:n,group:null};for(const i of t)if(n=i.items.find(r=>e(r)),n)return{item:n,group:i};return null}function Jt(t){const e=L.apps.find(n=>n.key===t.appKey);if(!e)throw new Error(`Invalid app: ${t.appKey}`);return e}function Hs(t,e){const{item:n}=Zt(t,e);return Jt(n).scope}function Fs(t,e,n){return t.reduce((i,r)=>{const o=r.items.filter(s=>Bs(s,e)&&Ws(s,n));return o.length>0?[...i,{...r,items:o}]:i},[])}function Bs(t,e){return t.deniedInstanceIds===null||t.deniedInstanceIds.includes(e)}function Ws(t,e){return t.allowedRolesOrPermissions===null||t.allowedRolesOrPermissions.some(n=>e.includes(n))}function Gs(t){const e=new URL(location.href);Array.from(e.searchParams.keys()).forEach(i=>{t.includes(i)||e.searchParams.delete(i)}),history.replaceState({},"",e)}function Yi(t,e,n=!1){const i=new URL(location.href);i.searchParams.set(t,e),n?history.replaceState({},"",i):history.pushState({},"",i)}function Sn(t){return t.slice(Math.max(t.indexOf("#"),0))}function $n(t,e=!1){const n=new URL(location.href);n.hash=t,e?history.replaceState({},"",n):history.pushState({},"",n)}function Vs(){const e=new URL(location.href).searchParams.get(Be);return e?Hs(L.navigation,e):Jt(L.navigationHome).scope}function Fe(t){const e=typeof t=="string"?Zt(w.navigation,t).item:t;return Ks(e).toString()}function Ks(t){const e=new URL(location.origin);return e.searchParams.set($e,w.locale),e.searchParams.set(Be,t.key),e.hash=t.appPath,e}var qs=Object.defineProperty,Ys=Object.getOwnPropertyDescriptor,de=(t,e,n,i)=>{for(var r=i>1?void 0:i?Ys(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(r=(i?s(e,n,r):s(r))||r);return i&&r&&qs(e,n,r),r};const $e="locale",Be="module",Xs=[$e,Be];class te extends It{constructor(){super(...arguments),this.actualAppPath=null,this.setInitialized=()=>{},this.initialized=new Promise(e=>this.setInitialized=()=>e(null))}async init(){await this.handleStateChange("locale",this.locale),this.subscribe(this.handleStateChange.bind(this)),C.onAccessTokenUpdate(()=>this.updateNavigation()),await this.loadRolesAndPermissions(),this.setInitialized()}subscribeLocale(e){return e(this.locale),this.subscribe((n,i)=>e(i),"locale")}subscribeInstanceName(e){return this.subscribe((n,i)=>e(i),"instanceName")}subscribeNavigationItemKey(e){return e(this.navigationItemKey),this.subscribe((n,i)=>e(i),"navigationItemKey")}subscribeNavigationItem(e){return e(this.navigationItem),this.subscribe((n,i)=>e(i),"navigationItem")}subscribeScopeAndLocale(e,n=!1){return n||e(this.app.scope,this.locale),this.subscribe(()=>e(this.app.scope,this.locale),["app","locale"])}navigate(e){this.initialized.then(()=>{Gs(Xs),this.locale=e.searchParams.get($e)||xs(),this.navigationItemKey=e.searchParams.get(Be)??L.navigationHome.key,e.hash&&e.hash!=="#"&&e.hash!=="#/"&&e.hash.startsWith(this.navigationItem.appPath)&&(this.appPath=e.hash)})}async handleStateChange(e,n){e==="locale"&&(await this.updateLocale(n),await this.loadInstanceName()),(e==="locale"||e==="navigationItemKey")&&gs(this.locale),(e==="rolesAndPermissions"||e==="locale")&&this.updateNavigation(),(e==="navigationItemKey"||e==="navigation")&&(this.updateNavigationItemAndGroup(this.navigationItemKey),this.updateApp(this.navigationItem))}async updateLocale(e){Yi($e,e),await Os(e)}updateNavigation(){var n;const{instanceId:e}=C;e&&(this.navigation=Fs(L.navigation,e,((n=C.accessTokenPayload)==null?void 0:n.substitutionRoles)||this.rolesAndPermissions))}updateNavigationItemAndGroup(e){if(this.navigation.length>0){const{item:n,group:i}=Zt(this.navigation,e);this.navigationItem=n,this.navigationGroup=i,this.actualAppPath&&this.actualAppPath!=="#"&&this.actualAppPath!=="#/"&&this.actualAppPath.startsWith(n.appPath)?this.appPath=this.actualAppPath:this.appPath=n.appPath,this.actualAppPath=null,this.updateHashFromAppPath(),n.key===L.navigationHome.key&&n.key!==e&&(this.navigationItemKey=n.key)}Yi(Be,this.navigationItemKey)}updateHashFromAppPath(){const e=new URL(document.location.href);e.hash=this.appPath,history.replaceState({},"",e)}updateApp(e){this.app=Jt(e)}async loadRolesAndPermissions(){if(!C.authenticated)return;const{roles:e,permissions:n}=await As();this.rolesAndPermissions=[...e,...n]}async loadInstanceName(){if(!C.authenticated)return;const e=await Es();this.instanceName=[k("Evento"),e].filter(Boolean).join(" | ")}}de([ce({value:Or()})],te.prototype,"locale",2);de([ce({value:[]})],te.prototype,"rolesAndPermissions",2);de([ce({value:""})],te.prototype,"instanceName",2);de([ce({value:[]})],te.prototype,"navigation",2);de([ns({parameter:Be}),ce({value:null})],te.prototype,"navigationItemKey",2);de([ce({value:null})],te.prototype,"navigationGroup",2);de([ce({value:L.navigationHome})],te.prototype,"navigationItem",2);de([ce({value:Jt(L.navigationHome)})],te.prototype,"app",2);de([ce({value:L.navigationHome.appPath})],te.prototype,"appPath",2);const w=new te,Nr=O`
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
`,Dr=O`
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
`,j=O`
  :host {
    ${Nr}
    ${Dr}
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
`;function Qs(t){var n;const e=document.createElement("style");e.innerText=t,(n=document.querySelector("body"))==null||n.appendChild(e)}var Zs=Object.defineProperty,Js=Object.getOwnPropertyDescriptor,Mr=(t,e,n,i)=>{for(var r=i>1?void 0:i?Js(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(r=(i?s(e,n,r):s(r))||r);return i&&r&&Zs(e,n,r),r};let Ht=class extends I{constructor(){super(),this.renderedOffline=!1,this.handleMessage=t=>{switch(t.data.type){case"bkdAppResize":{this.handleResize(t.data.height);break}}},this.handleOnline=()=>{this.renderedOffline&&window.location.reload()},new le(this,w)}connectedCallback(){super.connectedCallback(),window.addEventListener("message",this.handleMessage),window.addEventListener("online",this.handleOnline)}disconnectedCallback(){window.removeEventListener("message",this.handleMessage),window.removeEventListener("online",this.handleOnline),super.disconnectedCallback()}handleResize(t){this.iframe&&(this.iframe.height=t)}render(){return this.renderedOffline=!navigator.onLine,navigator.onLine?C.scope!==w.app.scope?E`<main></main>`:E`
      <main>
        ${je(w.app.heading,()=>E`<h1>${w.navigationItem.label}</h1>`)}
        ${No(w.app.root,E`
            <iframe
              id="app"
              title=${w.app.key}
              src=${`/${w.app.root}${w.appPath}`}
            ></iframe>
          `)}
      </main>
    `:E`<main>
        <h1>${k("Offline")}</h1>
        <p>${k("Keine Verbindung vorhanden.")}</p>
      </main>`}};Ht.styles=[j,O`
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
    `];Mr([J("iframe")],Ht.prototype,"iframe",2);Ht=Mr([U("bkd-content"),z()],Ht);var ea=Object.defineProperty,ta=Object.getOwnPropertyDescriptor,na=(t,e,n,i)=>{for(var r=i>1?void 0:i?ta(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(r=(i?s(e,n,r):s(r))||r);return i&&r&&ea(e,n,r),r};let zn=class extends I{constructor(){super(),new le(this,w)}render(){return E`
      <footer>
        <div class="copyright">${k("© Bildungs- und Kulturdirektion")}</div>
        <div class="footer-nav">
          <a
            href=${`https://www.bkd.be.ch/${w.locale.slice(0,2)}/tools/rechtliches.html`}
            target="_blank"
            >${k("Rechtliche Hinweise")}</a
          >
          <a
            href=${`https://www.bkd.be.ch/${w.locale.slice(0,2)}/tools/impressum.html`}
            target="_blank"
            >${k("Impressum")}</a
          >
        </div>
      </footer>
    `}};zn.styles=[j,O`
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
    `];zn=na([U("bkd-footer"),z()],zn);function Ft(t,e){if(t===e||t.contains(e))return!0;if("shadowRoot"in t&&t.shadowRoot)return Ft(t.shadowRoot,e);for(const n of Array.from(t.children))if(Ft(n,e))return!0;return!1}class bt{constructor(e,n){this.host=e,this.options=n,this.open=!1,this.closeOnBlur=i=>{this.menuElement&&"relatedTarget"in i&&(this.menuElement.contains(i.relatedTarget)||this.closeDeferred())},this.handleDocumentClick=i=>{const r=i.composedPath()[0];if(!r)return;const o=this.toggleElement&&!Ft(this.toggleElement,r),s=this.menuElement&&!Ft(this.menuElement,r);o&&s&&this.closeDeferred()},this.handleIframeClick=()=>{this.closeDeferred()},this.handleKeydown=i=>{switch(i.key){case"Tab":{this.options.tabInside||this.close();break}case"Escape":{this.close();break}case"ArrowDown":{const r=this.items[this.nextLinkIndex(1)];r==null||r.focus();break}case"ArrowUp":{const r=this.items[this.nextLinkIndex(-1)];r==null||r.focus();break}}},this.host.addController(this)}get toggleElement(){return this.options.queryToggleElement()}get menuElement(){return this.options.queryMenuElement()}get items(){var n;const e=((n=this.options)==null?void 0:n.queryItems)&&this.options.queryItems();return Array.from(e??[])}get focusedItem(){var e;return(e=this.options)!=null&&e.queryFocused?this.options.queryFocused():null}hostDisconnected(){this.removeListeners()}toggle(){this.open=!this.open,this.host.requestUpdate(),this.open?this.addListeners():setTimeout(()=>{this.removeListeners()})}close(){this.open&&this.toggle()}closeDeferred(){setTimeout(()=>this.close())}addListeners(){setTimeout(()=>{var e,n;this.options.tabInside&&((e=this.menuElement)==null||e.addEventListener("focusout",this.closeOnBlur,!0)),(n=this.iframeDocument)==null||n.addEventListener("click",this.handleIframeClick,!0)}),document.addEventListener("click",this.handleDocumentClick,!0),this.host.addEventListener("keydown",this.handleKeydown,!0)}removeListeners(){var e,n;this.options.tabInside&&((e=this.menuElement)==null||e.removeEventListener("focusout",this.closeOnBlur,!0)),document.removeEventListener("click",this.handleDocumentClick,!0),(n=this.iframeDocument)==null||n.removeEventListener("click",this.handleIframeClick,!0),this.host.removeEventListener("keydown",this.handleKeydown,!0)}get iframeDocument(){var r,o;const e=(r=document.querySelector("bkd-portal"))==null?void 0:r.shadowRoot,n=(o=e==null?void 0:e.querySelector("bkd-content"))==null?void 0:o.shadowRoot,i=n==null?void 0:n.querySelector("iframe");return(i==null?void 0:i.contentDocument)??null}activeLinkIndex(){const e=this.focusedItem?this.items.indexOf(this.focusedItem):-1;return e===-1?null:e}nextLinkIndex(e){const n=this.activeLinkIndex(),i=0,r=this.items.length-1;if(n===null)return e>0?i:r;const o=n+e;return o>r?i:o<i?r:o}}var ia=Object.defineProperty,ra=Object.getOwnPropertyDescriptor,ei=(t,e,n,i)=>{for(var r=i>1?void 0:i?ra(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(r=(i?s(e,n,r):s(r))||r);return i&&r&&ia(e,n,r),r};let ut=class extends I{constructor(){super(),this.mobileNav=new bt(this,{queryToggleElement:()=>{var t,e;return((e=(t=this.serviceNavElement)==null?void 0:t.shadowRoot)==null?void 0:e.querySelector("bkd-hamburger"))??null},queryMenuElement:()=>{var t;return((t=this.mobileNavElement)==null?void 0:t.shadowRoot)??null},tabInside:!0}),new le(this,w)}handleLogoClick(t){t.preventDefault(),w.navigationItemKey=L.navigationHome.key,w.appPath=L.navigationHome.appPath}handleNavItemClick(t){const{item:e}=t.detail;w.navigationItemKey=e.key,this.mobileNav.close()}handleSettingsItemClick(t){const{item:e,event:n}=t.detail;e.external||(n.preventDefault(),e.key==="logout"?this.dispatchEvent(new CustomEvent("bkdlogout",{composed:!0,bubbles:!0})):w.navigationItemKey=e.key),this.mobileNav.close()}render(){return E`
      <header>
        ${je(navigator.onLine,()=>E`<bkd-service-nav
              .mobileNavOpen=${this.mobileNav.open}
              @bkdhamburgertoggle=${()=>this.mobileNav.toggle()}
              @bkdsettingsitemclick=${this.handleSettingsItemClick.bind(this)}
            ></bkd-service-nav> `)}
        <a class="logo" tabindex="1" href=${Fe("home")}
          ><img
            src="logo.svg"
            alt=${k("Evento Startseite")}
            @click=${this.handleLogoClick.bind(this)}
        /></a>
        <div class="logo-caption">${w.instanceName}</div>
        ${je(navigator.onLine,()=>E` <bkd-nav
              @bkdnavitemclick=${this.handleNavItemClick.bind(this)}
            ></bkd-nav>`)}
        ${je(this.mobileNav.open,()=>E`<bkd-mobile-nav
              @bkdnavitemclick=${this.handleNavItemClick.bind(this)}
              @bkdsettingsitemclick=${this.handleSettingsItemClick.bind(this)}
            ></bkd-mobile-nav>`)}
      </header>
    `}};ut.styles=[j,O`
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
    `];ei([J("bkd-service-nav")],ut.prototype,"serviceNavElement",2);ei([J("bkd-mobile-nav")],ut.prototype,"mobileNavElement",2);ut=ei([U("bkd-header"),z()],ut);var oa=Object.defineProperty,sa=Object.getOwnPropertyDescriptor,Ur=(t,e,n,i)=>{for(var r=i>1?void 0:i?sa(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(r=(i?s(e,n,r):s(r))||r);return i&&r&&oa(e,n,r),r};let Bt=class extends I{constructor(){super(...arguments),this.open=!1}toggle(){this.dispatchEvent(new CustomEvent("bkdhamburgertoggle",{bubbles:!0,composed:!0}))}render(){const t=this.open?"/icons/close.svg":"/icons/hamburger.svg";return E`
      <button
        class="hamburger"
        .ariaExpanded=${this.open}
        aria-label=${k("Menü")}
        @click=${this.toggle.bind(this)}
      >
        <img src=${t} alt="" width="32" height="32" />
      </button>
    `}};Bt.styles=[j,O`
      :host {
        display: flex;
      }

      button {
        background: transparent;
        border: none;
        cursor: pointer;
      }
    `];Ur([q()],Bt.prototype,"open",2);Bt=Ur([U("bkd-hamburger"),z()],Bt);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ce=Yt(class extends Xt{constructor(t){var e;if(super(t),t.type!==Xn.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,i;if(this.it===void 0){this.it=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!(!((n=this.nt)===null||n===void 0)&&n.has(o))&&this.it.add(o);return this.render(e)}const r=t.element.classList;this.it.forEach(o=>{o in e||(r.remove(o),this.it.delete(o))});for(const o in e){const s=!!e[o];s===this.it.has(o)||!((i=this.nt)===null||i===void 0)&&i.has(o)||(s?(r.add(o),this.it.add(o)):(r.remove(o),this.it.delete(o)))}return ae}});var aa=Object.defineProperty,la=Object.getOwnPropertyDescriptor,ca=(t,e,n,i)=>{for(var r=i>1?void 0:i?la(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(r=(i?s(e,n,r):s(r))||r);return i&&r&&aa(e,n,r),r};let jn=class extends I{constructor(){super(),new le(this,w)}handleLocaleChange(t,e){t.preventDefault(),w.locale=e}render(){return E`<ul>
      ${Jn.map(t=>E`<li>
            <a
              href="#"
              class=${Ce({active:t===w.locale})}
              aria-current=${t===w.locale}
              @click=${e=>this.handleLocaleChange(e,t)}
            >
              ${t.slice(0,2)}
            </a>
          </li>`)}
    </ul>`}};jn.styles=[j,O`
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
    `];jn=ca([U("bkd-language-switcher"),z()],jn);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Ee(t,e){if(t!==void 0){let n=0;for(const i of t)yield e(i,n++)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Hn extends Xt{constructor(e){if(super(e),this.et=P,e.type!==Xn.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===P||e==null)return this.ft=void 0,this.et=e;if(e===ae)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const n=[e];return n.raw=n,this.ft={_$litType$:this.constructor.resultType,strings:n,values:[]}}}Hn.directiveName="unsafeHTML",Hn.resultType=1;const ue=Yt(Hn),da=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="m22 15.975-1.775 1.775L12 9.525 3.775 17.75 2 15.975l10-10 10 10Z"/></svg>
`,ua=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M2 8.025 3.775 6.25 12 14.475l8.225-8.225L22 8.025l-10 10-10-10Z"/></svg>
`;function zr(t){return[{key:"myProfile",label:k("Mein Profil"),href:Fe("myProfile")},{key:"mySettings",label:k("Einstellungen"),href:Fe("mySettings")},{key:"videos",label:k("Video-Tutorials"),href:t==="de-CH"?"https://www.youtube.com/playlist?list=PLLDtLiOuctbx-_EQWgWqTO1MRbX845OEf":"https://www.youtube.com/playlist?list=PLLDtLiOuctbyEegnquAkaW4u8cm62lFAU",img:"/icons/external-link.svg",external:!0},{key:"logout",label:k("Logout"),href:"#",img:"/icons/logout.svg"}]}var ha=Object.defineProperty,pa=Object.getOwnPropertyDescriptor,jr=(t,e,n,i)=>{for(var r=i>1?void 0:i?pa(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(r=(i?s(e,n,r):s(r))||r);return i&&r&&ha(e,n,r),r};let Wt=class extends I{constructor(){super(),this.openGroup=null,this.handleKeyup=t=>{t.key==="Tab"&&this.openGroupOfFocusedItem()},new le(this,w)}connectedCallback(){super.connectedCallback(),this.openGroupOfCurrentItem(),this.addEventListener("keyup",this.handleKeyup)}disconnectedCallback(){this.removeEventListener("keyup",this.handleKeyup),super.disconnectedCallback()}openGroupOfCurrentItem(){this.openGroup||(this.openGroup=w.navigationGroup)}openGroupOfFocusedItem(){var e,n;const t=(e=this.shadowRoot)==null?void 0:e.activeElement;if(t instanceof HTMLElement){const i=t.dataset.itemKey;if(i){const{group:r}=Zt(L.navigation,i);r&&r.label!==((n=this.openGroup)==null?void 0:n.label)&&(this.openGroup=r)}}}handleGroupClick(t,e){var n;t.preventDefault(),this.openGroup=e.label!==((n=this.openGroup)==null?void 0:n.label)?e:null}handleNavItemClick(t,e){t.preventDefault(),this.dispatchEvent(new CustomEvent("bkdnavitemclick",{detail:{item:e},composed:!0,bubbles:!0}))}handleSettingsItemClick(t,e){this.dispatchEvent(new CustomEvent("bkdsettingsitemclick",{detail:{item:e,event:t},composed:!0,bubbles:!0}))}renderGroup(t){var n;const e=t.label===((n=this.openGroup)==null?void 0:n.label);return E`
      <li
        class=${Ce({group:!0,open:e})}
        .ariaExpanded=${e}
      >
        <button
          class="group-header"
          tabindex="-1"
          @click=${i=>this.handleGroupClick(i,t)}
        >
          <label> ${t.label} </label>
          ${ue(e?da:ua)}
        </button>
        <ul class="items">
          ${Ee(t.items,this.renderNavItem.bind(this))}
        </ul>
      </li>
    `}renderNavItem(t){const e=t.key===w.navigationItemKey;return E`
      <li
        class=${Ce({item:!0,active:e})}
      >
        <a
          href=${Fe(t)}
          data-item-key=${t.key}
          @click=${n=>this.handleNavItemClick(n,t)}
        >
          ${t.label}
        </a>
      </li>
    `}renderSettingsItem(t){return E`<li>
      <a
        href=${t.href}
        target=${t.external?"_blank":"_self"}
        @click=${e=>this.handleSettingsItemClick(e,t)}
      >
        ${t.label}
      </a>
      ${t.img?E`<img src=${t.img} alt="" width="24" height="24" />`:P}
    </li>`}render(){return E`
      <nav aria-label=${k("Mobile Navigation")}>
        <ul class="nav">
          ${Ee(w.navigation,this.renderGroup.bind(this))}
        </ul>
        <div class="service-nav">
          <ul>
            ${Ee(zr(w.locale),this.renderSettingsItem.bind(this))}
          </ul>
          <bkd-language-switcher></bkd-language-switcher>
        </div>
      </nav>
    `}};Wt.styles=[j,O`
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
    `];jr([Ke()],Wt.prototype,"openGroup",2);Wt=jr([U("bkd-mobile-nav"),z()],Wt);var fa=Object.defineProperty,ga=Object.getOwnPropertyDescriptor,ma=(t,e,n,i)=>{for(var r=i>1?void 0:i?ga(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(r=(i?s(e,n,r):s(r))||r);return i&&r&&fa(e,n,r),r};let Fn=class extends I{constructor(){super(),new le(this,w)}renderGroupToggle(t,e){return E`
      <bkd-nav-group-toggle
        .group=${t}
        ?active=${e}
      ></bkd-nav-group-toggle>
    `}render(){return E`<nav aria-label=${k("Hauptnavigation")}>
      ${Ee(w.navigation,t=>{var e;return this.renderGroupToggle(t,t.label===((e=w.navigationGroup)==null?void 0:e.label))})}
    </nav>`}};Fn.styles=[j,O`
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
    `];Fn=ma([U("bkd-nav"),z()],Fn);var ba=Object.defineProperty,va=Object.getOwnPropertyDescriptor,ti=(t,e,n,i)=>{for(var r=i>1?void 0:i?va(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(r=(i?s(e,n,r):s(r))||r);return i&&r&&ba(e,n,r),r};let ht=class extends I{constructor(){super(),this.open=!1,new le(this,w)}handleItemClick(t,e){t.preventDefault(),this.dispatchEvent(new CustomEvent("bkdnavitemclick",{detail:{item:e},composed:!0,bubbles:!0}))}renderItem(t){const e=t.key===w.navigationItemKey;return E`
      <li role="presentation" class=${Ce({active:e})}>
        <a
          role="menuitem"
          href=${Fe(t)}
          @click=${n=>this.handleItemClick(n,t)}
          >${t.label}</a
        >
      </li>
    `}render(){if(!(!this.group||!this.open))return E`
      <ul role="menu">
        ${Ee(this.group.items,this.renderItem.bind(this))}
      </ul>
    `}};ht.styles=[j,O`
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
    `];ti([q()],ht.prototype,"group",2);ti([q()],ht.prototype,"open",2);ht=ti([U("bkd-nav-group-dropdown"),z()],ht);var ya=Object.defineProperty,wa=Object.getOwnPropertyDescriptor,vt=(t,e,n,i)=>{for(var r=i>1?void 0:i?wa(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(r=(i?s(e,n,r):s(r))||r);return i&&r&&ya(e,n,r),r};let Re=class extends I{constructor(){super(...arguments),this.dropdown=new bt(this,{queryToggleElement:()=>this.toggleElement??null,queryMenuElement:()=>{var t,e;return((e=(t=this.menuElement)==null?void 0:t.shadowRoot)==null?void 0:e.querySelector('ul[role="menu"]'))??null},queryItems:()=>{var t,e;return((e=(t=this.menuElement)==null?void 0:t.shadowRoot)==null?void 0:e.querySelectorAll("a[role='menuitem']"))??null},queryFocused:()=>{var t,e;return((e=(t=this.menuElement)==null?void 0:t.shadowRoot)==null?void 0:e.activeElement)??null}})}toggle(t){t.preventDefault(),this.dropdown.toggle()}handleItemClick(){this.dropdown.close()}render(){if(this.group)return E`
      <a
        href="#"
        @click=${this.toggle.bind(this)}
        class=${Ce({active:!!this.active})}
        .ariaExpanded=${this.dropdown.open}
        aria-haspopup="menu"
      >
        ${this.group.label}
      </a>
      <bkd-nav-group-dropdown
        .group=${this.group}
        .open=${this.dropdown.open}
        @bkdnavitemclick=${this.handleItemClick.bind(this)}
      ></bkd-nav-group-dropdown>
    `}};Re.styles=[j,O`
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
    `];vt([q()],Re.prototype,"group",2);vt([q({type:Boolean})],Re.prototype,"active",2);vt([J("a")],Re.prototype,"toggleElement",2);vt([J("bkd-nav-group-dropdown")],Re.prototype,"menuElement",2);Re=vt([U("bkd-nav-group-toggle"),z()],Re);var ka=Object.defineProperty,_a=Object.getOwnPropertyDescriptor,Hr=(t,e,n,i)=>{for(var r=i>1?void 0:i?_a(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(r=(i?s(e,n,r):s(r))||r);return i&&r&&ka(e,n,r),r};let Gt=class extends I{handleClick(t){t.preventDefault()}render(){if(this.item)return E`<a href="#" @click=${this.handleClick.bind(this)}
      >${this.item.label}</a
    >`}};Gt.styles=[j,O``];Hr([q()],Gt.prototype,"item",2);Gt=Hr([U("bkd-nav-item-link"),z()],Gt);var Aa=Object.defineProperty,Ea=Object.getOwnPropertyDescriptor,Fr=(t,e,n,i)=>{for(var r=i>1?void 0:i?Ea(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(r=(i?s(e,n,r):s(r))||r);return i&&r&&Aa(e,n,r),r};let Vt=class extends I{constructor(){super(...arguments),this.mobileNavOpen=!1}render(){return E`
      <nav aria-label=${k("Servicenavigation")}>
        <bkd-substitutions-toggle></bkd-substitutions-toggle>
        <bkd-notifications-toggle></bkd-notifications-toggle>
        <bkd-user-settings></bkd-user-settings>
        <bkd-language-switcher></bkd-language-switcher>
        <bkd-hamburger .open=${this.mobileNavOpen}></bkd-hamburger>
      </nav>
    `}};Vt.styles=[j,O`
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
    `];Fr([q()],Vt.prototype,"mobileNavOpen",2);Vt=Fr([U("bkd-service-nav"),z()],Vt);var Ta=Object.defineProperty,Sa=Object.getOwnPropertyDescriptor,en=(t,e,n,i)=>{for(var r=i>1?void 0:i?Sa(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(r=(i?s(e,n,r):s(r))||r);return i&&r&&Ta(e,n,r),r};let We=class extends I{constructor(){super(...arguments),this.availableSubstitutions=[],this.activeSubstitution=null,this.open=!1}get displayedSubstitutions(){return this.availableSubstitutions.filter(t=>!this.activeSubstitution||t.Id===this.activeSubstitution.Id)}handleSubstitutionClick(t,e){t.preventDefault(),this.dispatchEvent(new CustomEvent("bkdsubstitutionstart",{detail:{substitution:e},composed:!0,bubbles:!0}))}handleStopClick(){this.dispatchEvent(new CustomEvent("bkdsubstitutionstop",{composed:!0,bubbles:!0}))}handleCloseClick(){this.dispatchEvent(new CustomEvent("bkdclose"))}renderSubstitution(t){var n;const e=t.Id===((n=this.activeSubstitution)==null?void 0:n.Id);return E`
      <li role="presentation" class=${Ce({active:e})}>
        <a
          role="menuitem"
          href="#"
          @click=${i=>this.handleSubstitutionClick(i,t)}
          >${t.Holder}</a
        >
      </li>
    `}render(){if(this.open)return E`
      <ul role="menu" id="substitutions-menu">
        <li class="dropdown-menu-header">
          <button
            class="dropdown-menu-close"
            @click=${this.handleCloseClick.bind(this)}
          >
            <img src="icons/close.svg" alt=${k("Schliessen")} />
          </button>
          <div class="dropdown-menu-heading">
            ${k("Stellvertretung ausüben")}
          </div>
        </li>
        ${Ee(this.displayedSubstitutions,this.renderSubstitution.bind(this))}
        ${je(this.activeSubstitution,()=>E`<li class="dropdown-menu-stop">
              <button @click=${this.handleStopClick.bind(this)}>
                ${k("Stellvertretung beenden")}
              </button>
            </li>`)}
      </ul>
    `}};We.styles=[j,O`
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
    `];en([q()],We.prototype,"availableSubstitutions",2);en([q()],We.prototype,"activeSubstitution",2);en([q()],We.prototype,"open",2);We=en([U("bkd-substitutions-dropdown"),z()],We);const $a=`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="7.4" fill="none"><path fill="currentColor" d="m6 7.4-6-6L1.4 0 6 4.6 10.6 0 12 1.4Z"/></svg>
`,Ca=`<svg xmlns="http://www.w3.org/2000/svg" width="11.414" height="11.414" fill="none"><path stroke="currentColor" stroke-width="2" d="m.707.707 10 10m-10 0 10-10"/></svg>
`,Ra=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M2 20v-2.8a3 3 0 0 1 .425-1.563A2.794 2.794 0 0 1 3.6 14.55c1-.5 2.038-.883 3.113-1.15 1.074-.267 2.17-.4 3.287-.4.417 0 .833.03 1.25.088.417.058.833.129 1.25.212v1.575c-.75.367-1.354.85-1.813 1.45-.458.6-.687 1.383-.687 2.35V20H2Zm10 0v-1.4c0-.4.104-.77.313-1.113a1.76 1.76 0 0 1 .887-.737c.6-.25 1.22-.438 1.863-.563a10.11 10.11 0 0 1 3.874 0 9.604 9.604 0 0 1 1.863.563c.383.15.68.396.887.738.209.341.313.712.313 1.112V20H12Zm5-5c-.7 0-1.292-.242-1.775-.725-.483-.483-.725-1.075-.725-1.775s.242-1.292.725-1.775C15.708 10.242 16.3 10 17 10s1.292.242 1.775.725c.483.483.725 1.075.725 1.775s-.242 1.292-.725 1.775C18.292 14.758 17.7 15 17 15Zm-7-3c-1.1 0-2.042-.392-2.825-1.175C6.392 10.042 6 9.1 6 8s.392-2.042 1.175-2.825C7.958 4.392 8.9 4 10 4s2.042.392 2.825 1.175C13.608 5.958 14 6.9 14 8s-.392 2.042-1.175 2.825C12.042 11.608 11.1 12 10 12Z"/></svg>
`;function Pa(t,e,n){const i=document.createElement("form");i.method=t,i.style.visibility="hidden",i.action=e,Object.keys(n).forEach(r=>{const o=document.createElement("input");o.type="hidden",o.name=r,o.value=n[r],i.appendChild(o)}),document.body.appendChild(i),i.submit()}var xa=Object.defineProperty,Ia=Object.getOwnPropertyDescriptor,yt=(t,e,n,i)=>{for(var r=i>1?void 0:i?Ia(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(r=(i?s(e,n,r):s(r))||r);return i&&r&&xa(e,n,r),r};let Pe=class extends I{constructor(){super(...arguments),this.availableSubstitutions=[],this.activeSubstitution=null,this.dropdown=new bt(this,{queryToggleElement:()=>this.toggleElement??null,queryMenuElement:()=>{var t;return((t=this.menuElement)==null?void 0:t.shadowRoot)??null},tabInside:!this.isLargeScreen(),queryItems:()=>{var t,e;return((e=(t=this.menuElement)==null?void 0:t.shadowRoot)==null?void 0:e.querySelectorAll("a[role='menuitem']"))??null},queryFocused:()=>{var t,e;return((e=(t=this.menuElement)==null?void 0:t.shadowRoot)==null?void 0:e.activeElement)??null}})}connectedCallback(){super.connectedCallback(),this.fetch()}async fetch(){const t=await Ts();this.availableSubstitutions=t.filter(n=>this.isNotInFuture(n)).sort((n,i)=>n.Holder.localeCompare(i.Holder));const e=this.getActiveSubstitutionId();this.activeSubstitution=this.availableSubstitutions.find(n=>n.Id===e)??null}isNotInFuture(t){return!!t.DateFrom&&new Date(t.DateFrom)<=new Date}getActiveSubstitutionId(){var t;return((t=C.accessTokenPayload)==null?void 0:t.substitutionId)??null}toggle(t){t.preventDefault(),this.activeSubstitution&&this.isLargeScreen()?this.stopSubstitution():this.dropdown.toggle()}isLargeScreen(){return window.innerWidth>1200}startSubstitution(t){this.activeSubstitution||this.redirect(t,"start")}stopSubstitution(){this.activeSubstitution&&this.redirect(this.activeSubstitution,"stop")}redirect(t,e){const{oAuthServer:n,oAuthPrefix:i}=Qt(),r=`${n}/${i}/Authorization/Substitutions/${t.Id}/${e}`;Pa("POST",r,{access_token:C.accessToken??"",redirect_uri:Fe("home")})}handleSubstitutionStart(t){this.dropdown.close(),this.startSubstitution(t.detail.substitution)}handleSubstitutionStop(){this.dropdown.close(),this.stopSubstitution()}getLabel(){var t;return((t=this.activeSubstitution)==null?void 0:t.Holder)||k("Stellvertretung ausüben")}render(){if(this.availableSubstitutions.length!==0)return E`
      <button
        class=${Ce({active:!!this.activeSubstitution,open:this.dropdown.open})}
        @click=${this.toggle.bind(this)}
        aria-label=${this.getLabel()}
        .ariaExpanded=${this.dropdown.open}
        aria-haspopup="menu"
      >
        <div class="icon">${ue(Ra)}</div>
        <div class="label">${this.getLabel()}</div>
        <div class="icon-caret">
          ${ue(this.activeSubstitution?Ca:$a)}
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
    `}};Pe.styles=[j,O`
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
    `];yt([J("button")],Pe.prototype,"toggleElement",2);yt([J("bkd-substitutions-dropdown")],Pe.prototype,"menuElement",2);yt([Ke()],Pe.prototype,"availableSubstitutions",2);yt([Ke()],Pe.prototype,"activeSubstitution",2);Pe=yt([U("bkd-substitutions-toggle"),z()],Pe);const Oa='<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path fill="currentColor" d="M16 2a2.25 2.25 0 0 0-2.25 2.25v1.043C9.87 6.293 7 9.807 7 14v7.5h18V14c0-4.193-2.87-7.707-6.75-8.707V4.25A2.25 2.25 0 0 0 16 2M4 24.5v3h9.404A3 3 0 1 0 19 29a3 3 0 0 0-.407-1.5H28v-3z"/></svg>';var La=Object.defineProperty,Na=Object.getOwnPropertyDescriptor,wt=(t,e,n,i)=>{for(var r=i>1?void 0:i?Na(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(r=(i?s(e,n,r):s(r))||r);return i&&r&&La(e,n,r),r};const Ot=Qt();if(typeof(Ot==null?void 0:Ot.notificationRefreshTime)!="number")throw new Error("Invalid 'notificationRefreshTime' setting");var Lt=(t=>(t.PENDING="pending",t.ERROR="error",t.SUCCESS="success",t))(Lt||{});let xe=class extends I{constructor(){super(...arguments),this.state="pending",this.dropdown=new bt(this,{queryToggleElement:()=>this.toggleElement??null,queryMenuElement:()=>{var t;return((t=this.dropdownElement)==null?void 0:t.shadowRoot)??null},queryItems:()=>{var t,e;return((e=(t=this.dropdownElement)==null?void 0:t.shadowRoot)==null?void 0:e.querySelectorAll("button"))??null},queryFocused:()=>{var t,e;return((e=(t=this.dropdownElement)==null?void 0:t.shadowRoot)==null?void 0:e.activeElement)??null}})}connectedCallback(){super.connectedCallback(),this.fetch(),this.interval=setInterval(()=>this.fetch(),Ot.notificationRefreshTime*1e3)}disconnectedCallback(){clearInterval(this.interval),super.disconnectedCallback()}handleDeleteAllNotifications(){const t=[];Ki(t),this.notifications=t}handleDeleteNotification(t){if(!this.notifications)return;const e=this.notifications.filter(n=>n.id!==t.detail.id);Ki(e),this.notifications=e}async fetch(){try{this.notifications=await Ss(),this.state="success"}catch{this.state="error"}}render(){var t,e;return E` <button
        id="notifications-toggle"
        type="button"
        aria-label="${k("Benachrichtigungen")}"
        @click="${()=>this.dropdown.toggle()}"
      >
        ${ue(Oa)}
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
      </bkd-notifications-dropdown>`}};xe.styles=[j,O`
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
    `];wt([J("button")],xe.prototype,"toggleElement",2);wt([J("bkd-notifications-dropdown")],xe.prototype,"dropdownElement",2);wt([Ke()],xe.prototype,"notifications",2);wt([Ke()],xe.prototype,"state",2);xe=wt([U("bkd-notifications-toggle"),z()],xe);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xi=(t,e,n)=>{const i=new Map;for(let r=e;r<=n;r++)i.set(t[r],r);return i},Da=Yt(class extends Xt{constructor(t){if(super(t),t.type!==Xn.CHILD)throw Error("repeat() can only be used in text expressions")}ct(t,e,n){let i;n===void 0?n=e:e!==void 0&&(i=e);const r=[],o=[];let s=0;for(const d of t)r[s]=i?i(d,s):s,o[s]=n(d,s),s++;return{values:o,keys:r}}render(t,e,n){return this.ct(t,e,n).values}update(t,[e,n,i]){var r;const o=Lo(t),{values:s,keys:d}=this.ct(e,n,i);if(!Array.isArray(o))return this.ut=d,s;const l=(r=this.ut)!==null&&r!==void 0?r:this.ut=[],c=[];let h,p,g=0,u=o.length-1,b=0,m=s.length-1;for(;g<=u&&b<=m;)if(o[g]===null)g++;else if(o[u]===null)u--;else if(l[g]===d[b])c[b]=ye(o[g],s[b]),g++,b++;else if(l[u]===d[m])c[m]=ye(o[u],s[m]),u--,m--;else if(l[g]===d[m])c[m]=ye(o[g],s[m]),Ze(t,c[m+1],o[g]),g++,m--;else if(l[u]===d[b])c[b]=ye(o[u],s[b]),Ze(t,o[g],o[u]),u--,b++;else if(h===void 0&&(h=Xi(d,b,m),p=Xi(l,g,u)),h.has(l[g]))if(h.has(l[u])){const _=p.get(d[b]),S=_!==void 0?o[_]:null;if(S===null){const T=Ze(t,o[g]);ye(T,s[b]),c[b]=T}else c[b]=ye(S,s[b]),Ze(t,o[g],S),o[_]=null;b++}else En(o[u]),u--;else En(o[g]),g++;for(;b<=m;){const _=Ze(t,c[m+1]);ye(_,s[b]),c[b++]=_}for(;g<=u;){const _=o[g++];_!==null&&En(_)}return this.ut=d,kr(t,c),ae}}),Ma='<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" preserveAspectRatio="xMidYMid" style="margin:auto;background:#fff 0 0;display:block;shape-rendering:auto" viewBox="0 0 100 100"><g transform="translate(82 50)"><circle r="6"><animateTransform attributeName="transform" begin="-0.8571428571428571s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.8571428571428571s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(51.429 -42.913 110.137)"><circle r="6" fill-opacity=".857"><animateTransform attributeName="transform" begin="-0.7142857142857143s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.7142857142857143s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(102.857 -10.937 57.696)"><circle r="6" fill-opacity=".714"><animateTransform attributeName="transform" begin="-0.5714285714285714s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.5714285714285714s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(154.286 3.294 34.358)"><circle r="6" fill-opacity=".571"><animateTransform attributeName="transform" begin="-0.42857142857142855s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.42857142857142855s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(-154.286 14.706 15.642)"><circle r="6" fill-opacity=".429"><animateTransform attributeName="transform" begin="-0.2857142857142857s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.2857142857142857s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(-102.857 28.937 -7.696)"><circle r="6" fill-opacity=".286"><animateTransform attributeName="transform" begin="-0.14285714285714285s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.14285714285714285s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(-51.429 60.913 -60.137)"><circle r="6" fill-opacity=".143"><animateTransform attributeName="transform" begin="0s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="0s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g></svg>',Ua='<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path fill="currentColor" d="m13 3-1.333 1.333H5V7h21.333V4.333h-6.666L18.333 3zM6.333 9.667V27c0 1.467 1.2 2.667 2.667 2.667h13.333C23.8 29.667 25 28.467 25 27V9.667z"/></svg>';/*! @license DOMPurify 3.0.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.6/LICENSE */const{entries:Br,setPrototypeOf:Qi,isFrozen:za,getPrototypeOf:ja,getOwnPropertyDescriptor:Wr}=Object;let{freeze:G,seal:Z,create:Gr}=Object,{apply:Bn,construct:Wn}=typeof Reflect<"u"&&Reflect;G||(G=function(e){return e});Z||(Z=function(e){return e});Bn||(Bn=function(e,n,i){return e.apply(n,i)});Wn||(Wn=function(e,n){return new e(...n)});const Ct=Q(Array.prototype.forEach),Zi=Q(Array.prototype.pop),et=Q(Array.prototype.push),Nt=Q(String.prototype.toLowerCase),Cn=Q(String.prototype.toString),Ha=Q(String.prototype.match),tt=Q(String.prototype.replace),Fa=Q(String.prototype.indexOf),Ba=Q(String.prototype.trim),Y=Q(RegExp.prototype.test),nt=Wa(TypeError);function Q(t){return function(e){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];return Bn(t,e,i)}}function Wa(t){return function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return Wn(t,n)}}function A(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Nt;Qi&&Qi(t,null);let i=e.length;for(;i--;){let r=e[i];if(typeof r=="string"){const o=n(r);o!==r&&(za(e)||(e[i]=o),r=o)}t[r]=!0}return t}function Ue(t){const e=Gr(null);for(const[n,i]of Br(t))Wr(t,n)!==void 0&&(e[n]=i);return e}function Rt(t,e){for(;t!==null;){const i=Wr(t,e);if(i){if(i.get)return Q(i.get);if(typeof i.value=="function")return Q(i.value)}t=ja(t)}function n(i){return console.warn("fallback value for",i),null}return n}const Ji=G(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Rn=G(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Pn=G(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Ga=G(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),xn=G(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Va=G(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),er=G(["#text"]),tr=G(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),In=G(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),nr=G(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Pt=G(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Ka=Z(/\{\{[\w\W]*|[\w\W]*\}\}/gm),qa=Z(/<%[\w\W]*|[\w\W]*%>/gm),Ya=Z(/\${[\w\W]*}/gm),Xa=Z(/^data-[\-\w.\u00B7-\uFFFF]/),Qa=Z(/^aria-[\-\w]+$/),Vr=Z(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Za=Z(/^(?:\w+script|data):/i),Ja=Z(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Kr=Z(/^html$/i);var ir=Object.freeze({__proto__:null,MUSTACHE_EXPR:Ka,ERB_EXPR:qa,TMPLIT_EXPR:Ya,DATA_ATTR:Xa,ARIA_ATTR:Qa,IS_ALLOWED_URI:Vr,IS_SCRIPT_OR_DATA:Za,ATTR_WHITESPACE:Ja,DOCTYPE_NAME:Kr});const el=function(){return typeof window>"u"?null:window},tl=function(e,n){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let i=null;const r="data-tt-policy-suffix";n&&n.hasAttribute(r)&&(i=n.getAttribute(r));const o="dompurify"+(i?"#"+i:"");try{return e.createPolicy(o,{createHTML(s){return s},createScriptURL(s){return s}})}catch{return console.warn("TrustedTypes policy "+o+" could not be created."),null}};function qr(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:el();const e=y=>qr(y);if(e.version="3.0.6",e.removed=[],!t||!t.document||t.document.nodeType!==9)return e.isSupported=!1,e;let{document:n}=t;const i=n,r=i.currentScript,{DocumentFragment:o,HTMLTemplateElement:s,Node:d,Element:l,NodeFilter:c,NamedNodeMap:h=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:p,DOMParser:g,trustedTypes:u}=t,b=l.prototype,m=Rt(b,"cloneNode"),_=Rt(b,"nextSibling"),S=Rt(b,"childNodes"),T=Rt(b,"parentNode");if(typeof s=="function"){const y=n.createElement("template");y.content&&y.content.ownerDocument&&(n=y.content.ownerDocument)}let $,W="";const{implementation:pe,createNodeIterator:io,createDocumentFragment:ro,getElementsByTagName:oo}=n,{importNode:so}=i;let ee={};e.isSupported=typeof Br=="function"&&typeof T=="function"&&pe&&pe.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:nn,ERB_EXPR:rn,TMPLIT_EXPR:on,DATA_ATTR:ao,ARIA_ATTR:lo,IS_SCRIPT_OR_DATA:co,ATTR_WHITESPACE:oi}=ir;let{IS_ALLOWED_URI:si}=ir,N=null;const ai=A({},[...Ji,...Rn,...Pn,...xn,...er]);let D=null;const li=A({},[...tr,...In,...nr,...Pt]);let x=Object.seal(Gr(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),qe=null,sn=null,ci=!0,an=!0,di=!1,ui=!0,Ie=!1,fe=!1,ln=!1,cn=!1,Oe=!1,_t=!1,At=!1,hi=!0,pi=!1;const uo="user-content-";let dn=!0,Ye=!1,Le={},Ne=null;const fi=A({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let gi=null;const mi=A({},["audio","video","img","source","image","track"]);let un=null;const bi=A({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Et="http://www.w3.org/1998/Math/MathML",Tt="http://www.w3.org/2000/svg",ne="http://www.w3.org/1999/xhtml";let De=ne,hn=!1,pn=null;const ho=A({},[Et,Tt,ne],Cn);let ge=null;const po=["application/xhtml+xml","text/html"],fo="text/html";let M=null,Me=null;const go=n.createElement("form"),vi=function(a){return a instanceof RegExp||a instanceof Function},fn=function(){let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Me&&Me===a)){if((!a||typeof a!="object")&&(a={}),a=Ue(a),ge=po.indexOf(a.PARSER_MEDIA_TYPE)===-1?ge=fo:ge=a.PARSER_MEDIA_TYPE,M=ge==="application/xhtml+xml"?Cn:Nt,N="ALLOWED_TAGS"in a?A({},a.ALLOWED_TAGS,M):ai,D="ALLOWED_ATTR"in a?A({},a.ALLOWED_ATTR,M):li,pn="ALLOWED_NAMESPACES"in a?A({},a.ALLOWED_NAMESPACES,Cn):ho,un="ADD_URI_SAFE_ATTR"in a?A(Ue(bi),a.ADD_URI_SAFE_ATTR,M):bi,gi="ADD_DATA_URI_TAGS"in a?A(Ue(mi),a.ADD_DATA_URI_TAGS,M):mi,Ne="FORBID_CONTENTS"in a?A({},a.FORBID_CONTENTS,M):fi,qe="FORBID_TAGS"in a?A({},a.FORBID_TAGS,M):{},sn="FORBID_ATTR"in a?A({},a.FORBID_ATTR,M):{},Le="USE_PROFILES"in a?a.USE_PROFILES:!1,ci=a.ALLOW_ARIA_ATTR!==!1,an=a.ALLOW_DATA_ATTR!==!1,di=a.ALLOW_UNKNOWN_PROTOCOLS||!1,ui=a.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Ie=a.SAFE_FOR_TEMPLATES||!1,fe=a.WHOLE_DOCUMENT||!1,Oe=a.RETURN_DOM||!1,_t=a.RETURN_DOM_FRAGMENT||!1,At=a.RETURN_TRUSTED_TYPE||!1,cn=a.FORCE_BODY||!1,hi=a.SANITIZE_DOM!==!1,pi=a.SANITIZE_NAMED_PROPS||!1,dn=a.KEEP_CONTENT!==!1,Ye=a.IN_PLACE||!1,si=a.ALLOWED_URI_REGEXP||Vr,De=a.NAMESPACE||ne,x=a.CUSTOM_ELEMENT_HANDLING||{},a.CUSTOM_ELEMENT_HANDLING&&vi(a.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(x.tagNameCheck=a.CUSTOM_ELEMENT_HANDLING.tagNameCheck),a.CUSTOM_ELEMENT_HANDLING&&vi(a.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(x.attributeNameCheck=a.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),a.CUSTOM_ELEMENT_HANDLING&&typeof a.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(x.allowCustomizedBuiltInElements=a.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Ie&&(an=!1),_t&&(Oe=!0),Le&&(N=A({},[...er]),D=[],Le.html===!0&&(A(N,Ji),A(D,tr)),Le.svg===!0&&(A(N,Rn),A(D,In),A(D,Pt)),Le.svgFilters===!0&&(A(N,Pn),A(D,In),A(D,Pt)),Le.mathMl===!0&&(A(N,xn),A(D,nr),A(D,Pt))),a.ADD_TAGS&&(N===ai&&(N=Ue(N)),A(N,a.ADD_TAGS,M)),a.ADD_ATTR&&(D===li&&(D=Ue(D)),A(D,a.ADD_ATTR,M)),a.ADD_URI_SAFE_ATTR&&A(un,a.ADD_URI_SAFE_ATTR,M),a.FORBID_CONTENTS&&(Ne===fi&&(Ne=Ue(Ne)),A(Ne,a.FORBID_CONTENTS,M)),dn&&(N["#text"]=!0),fe&&A(N,["html","head","body"]),N.table&&(A(N,["tbody"]),delete qe.tbody),a.TRUSTED_TYPES_POLICY){if(typeof a.TRUSTED_TYPES_POLICY.createHTML!="function")throw nt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof a.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw nt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');$=a.TRUSTED_TYPES_POLICY,W=$.createHTML("")}else $===void 0&&($=tl(u,r)),$!==null&&typeof W=="string"&&(W=$.createHTML(""));G&&G(a),Me=a}},yi=A({},["mi","mo","mn","ms","mtext"]),wi=A({},["foreignobject","desc","title","annotation-xml"]),mo=A({},["title","style","font","a","script"]),St=A({},Rn);A(St,Pn),A(St,Ga);const gn=A({},xn);A(gn,Va);const bo=function(a){let f=T(a);(!f||!f.tagName)&&(f={namespaceURI:De,tagName:"template"});const v=Nt(a.tagName),R=Nt(f.tagName);return pn[a.namespaceURI]?a.namespaceURI===Tt?f.namespaceURI===ne?v==="svg":f.namespaceURI===Et?v==="svg"&&(R==="annotation-xml"||yi[R]):!!St[v]:a.namespaceURI===Et?f.namespaceURI===ne?v==="math":f.namespaceURI===Tt?v==="math"&&wi[R]:!!gn[v]:a.namespaceURI===ne?f.namespaceURI===Tt&&!wi[R]||f.namespaceURI===Et&&!yi[R]?!1:!gn[v]&&(mo[v]||!St[v]):!!(ge==="application/xhtml+xml"&&pn[a.namespaceURI]):!1},me=function(a){et(e.removed,{element:a});try{a.parentNode.removeChild(a)}catch{a.remove()}},mn=function(a,f){try{et(e.removed,{attribute:f.getAttributeNode(a),from:f})}catch{et(e.removed,{attribute:null,from:f})}if(f.removeAttribute(a),a==="is"&&!D[a])if(Oe||_t)try{me(f)}catch{}else try{f.setAttribute(a,"")}catch{}},ki=function(a){let f=null,v=null;if(cn)a="<remove></remove>"+a;else{const F=Ha(a,/^[\r\n\t ]+/);v=F&&F[0]}ge==="application/xhtml+xml"&&De===ne&&(a='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+a+"</body></html>");const R=$?$.createHTML(a):a;if(De===ne)try{f=new g().parseFromString(R,ge)}catch{}if(!f||!f.documentElement){f=pe.createDocument(De,"template",null);try{f.documentElement.innerHTML=hn?W:R}catch{}}const H=f.body||f.documentElement;return a&&v&&H.insertBefore(n.createTextNode(v),H.childNodes[0]||null),De===ne?oo.call(f,fe?"html":"body")[0]:fe?f.documentElement:H},_i=function(a){return io.call(a.ownerDocument||a,a,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT,null)},vo=function(a){return a instanceof p&&(typeof a.nodeName!="string"||typeof a.textContent!="string"||typeof a.removeChild!="function"||!(a.attributes instanceof h)||typeof a.removeAttribute!="function"||typeof a.setAttribute!="function"||typeof a.namespaceURI!="string"||typeof a.insertBefore!="function"||typeof a.hasChildNodes!="function")},Ai=function(a){return typeof d=="function"&&a instanceof d},ie=function(a,f,v){ee[a]&&Ct(ee[a],R=>{R.call(e,f,v,Me)})},Ei=function(a){let f=null;if(ie("beforeSanitizeElements",a,null),vo(a))return me(a),!0;const v=M(a.nodeName);if(ie("uponSanitizeElement",a,{tagName:v,allowedTags:N}),a.hasChildNodes()&&!Ai(a.firstElementChild)&&Y(/<[/\w]/g,a.innerHTML)&&Y(/<[/\w]/g,a.textContent))return me(a),!0;if(!N[v]||qe[v]){if(!qe[v]&&Si(v)&&(x.tagNameCheck instanceof RegExp&&Y(x.tagNameCheck,v)||x.tagNameCheck instanceof Function&&x.tagNameCheck(v)))return!1;if(dn&&!Ne[v]){const R=T(a)||a.parentNode,H=S(a)||a.childNodes;if(H&&R){const F=H.length;for(let V=F-1;V>=0;--V)R.insertBefore(m(H[V],!0),_(a))}}return me(a),!0}return a instanceof l&&!bo(a)||(v==="noscript"||v==="noembed"||v==="noframes")&&Y(/<\/no(script|embed|frames)/i,a.innerHTML)?(me(a),!0):(Ie&&a.nodeType===3&&(f=a.textContent,Ct([nn,rn,on],R=>{f=tt(f,R," ")}),a.textContent!==f&&(et(e.removed,{element:a.cloneNode()}),a.textContent=f)),ie("afterSanitizeElements",a,null),!1)},Ti=function(a,f,v){if(hi&&(f==="id"||f==="name")&&(v in n||v in go))return!1;if(!(an&&!sn[f]&&Y(ao,f))){if(!(ci&&Y(lo,f))){if(!D[f]||sn[f]){if(!(Si(a)&&(x.tagNameCheck instanceof RegExp&&Y(x.tagNameCheck,a)||x.tagNameCheck instanceof Function&&x.tagNameCheck(a))&&(x.attributeNameCheck instanceof RegExp&&Y(x.attributeNameCheck,f)||x.attributeNameCheck instanceof Function&&x.attributeNameCheck(f))||f==="is"&&x.allowCustomizedBuiltInElements&&(x.tagNameCheck instanceof RegExp&&Y(x.tagNameCheck,v)||x.tagNameCheck instanceof Function&&x.tagNameCheck(v))))return!1}else if(!un[f]){if(!Y(si,tt(v,oi,""))){if(!((f==="src"||f==="xlink:href"||f==="href")&&a!=="script"&&Fa(v,"data:")===0&&gi[a])){if(!(di&&!Y(co,tt(v,oi,"")))){if(v)return!1}}}}}}return!0},Si=function(a){return a.indexOf("-")>0},$i=function(a){ie("beforeSanitizeAttributes",a,null);const{attributes:f}=a;if(!f)return;const v={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:D};let R=f.length;for(;R--;){const H=f[R],{name:F,namespaceURI:V,value:be}=H,Xe=M(F);let K=F==="value"?be:Ba(be);if(v.attrName=Xe,v.attrValue=K,v.keepAttr=!0,v.forceKeepAttr=void 0,ie("uponSanitizeAttribute",a,v),K=v.attrValue,v.forceKeepAttr||(mn(F,a),!v.keepAttr))continue;if(!ui&&Y(/\/>/i,K)){mn(F,a);continue}Ie&&Ct([nn,rn,on],Ri=>{K=tt(K,Ri," ")});const Ci=M(a.nodeName);if(Ti(Ci,Xe,K)){if(pi&&(Xe==="id"||Xe==="name")&&(mn(F,a),K=uo+K),$&&typeof u=="object"&&typeof u.getAttributeType=="function"&&!V)switch(u.getAttributeType(Ci,Xe)){case"TrustedHTML":{K=$.createHTML(K);break}case"TrustedScriptURL":{K=$.createScriptURL(K);break}}try{V?a.setAttributeNS(V,F,K):a.setAttribute(F,K),Zi(e.removed)}catch{}}}ie("afterSanitizeAttributes",a,null)},yo=function y(a){let f=null;const v=_i(a);for(ie("beforeSanitizeShadowDOM",a,null);f=v.nextNode();)ie("uponSanitizeShadowNode",f,null),!Ei(f)&&(f.content instanceof o&&y(f.content),$i(f));ie("afterSanitizeShadowDOM",a,null)};return e.sanitize=function(y){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},f=null,v=null,R=null,H=null;if(hn=!y,hn&&(y="<!-->"),typeof y!="string"&&!Ai(y))if(typeof y.toString=="function"){if(y=y.toString(),typeof y!="string")throw nt("dirty is not a string, aborting")}else throw nt("toString is not a function");if(!e.isSupported)return y;if(ln||fn(a),e.removed=[],typeof y=="string"&&(Ye=!1),Ye){if(y.nodeName){const be=M(y.nodeName);if(!N[be]||qe[be])throw nt("root node is forbidden and cannot be sanitized in-place")}}else if(y instanceof d)f=ki("<!---->"),v=f.ownerDocument.importNode(y,!0),v.nodeType===1&&v.nodeName==="BODY"||v.nodeName==="HTML"?f=v:f.appendChild(v);else{if(!Oe&&!Ie&&!fe&&y.indexOf("<")===-1)return $&&At?$.createHTML(y):y;if(f=ki(y),!f)return Oe?null:At?W:""}f&&cn&&me(f.firstChild);const F=_i(Ye?y:f);for(;R=F.nextNode();)Ei(R)||(R.content instanceof o&&yo(R.content),$i(R));if(Ye)return y;if(Oe){if(_t)for(H=ro.call(f.ownerDocument);f.firstChild;)H.appendChild(f.firstChild);else H=f;return(D.shadowroot||D.shadowrootmode)&&(H=so.call(i,H,!0)),H}let V=fe?f.outerHTML:f.innerHTML;return fe&&N["!doctype"]&&f.ownerDocument&&f.ownerDocument.doctype&&f.ownerDocument.doctype.name&&Y(Kr,f.ownerDocument.doctype.name)&&(V="<!DOCTYPE "+f.ownerDocument.doctype.name+`>
`+V),Ie&&Ct([nn,rn,on],be=>{V=tt(V,be," ")}),$&&At?$.createHTML(V):V},e.setConfig=function(){let y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};fn(y),ln=!0},e.clearConfig=function(){Me=null,ln=!1},e.isValidAttribute=function(y,a,f){Me||fn({});const v=M(y),R=M(a);return Ti(v,R,f)},e.addHook=function(y,a){typeof a=="function"&&(ee[y]=ee[y]||[],et(ee[y],a))},e.removeHook=function(y){if(ee[y])return Zi(ee[y])},e.removeHooks=function(y){ee[y]&&(ee[y]=[])},e.removeAllHooks=function(){ee={}},e}var nl=qr();const il={ALLOWED_TAGS:["br","div","span","a","ul","ol","li","sup","sub","code","cite"],ALLOWED_ATTR:["style","href"]};function rr(t){return nl.sanitize(t,il)}var rl=Object.defineProperty,ol=Object.getOwnPropertyDescriptor,tn=(t,e,n,i)=>{for(var r=i>1?void 0:i?ol(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(r=(i?s(e,n,r):s(r))||r);return i&&r&&rl(e,n,r),r};let Ge=class extends I{constructor(){super(...arguments),this.open=!1,this.state=Lt.PENDING,this.notifications=[]}handleDeleteAllNotifications(){this.dispatchEvent(new CustomEvent("bkddeleteallnotifications",{bubbles:!0,composed:!0}))}handleDeleteNotification(t){this.dispatchEvent(new CustomEvent("bkddeletenotification",{bubbles:!0,composed:!0,detail:{id:t}}))}renderContent(){return this.state===Lt.ERROR?E`<div class="error">
        ${k("Fehler beim Laden der Benachrichtigungen")}
      </div>`:this.state===Lt.PENDING?E`<div class="pending">${ue(Ma)}</div>`:this.notifications.length===0?E`<div class="notification">${k("Keine Benachrichtigungen")}</div>`:Da(this.notifications,t=>t.id,t=>this.renderNotification(t))}renderNotification(t){const e=rr(t.subject),n=rr(t.body);return E`<div class="notification">
      <div class="text">
        <div class="subject">${ue(e)}</div>
        <div class="body">${ue(n)}</div>
      </div>
      <button
        type="button"
        aria-label="${k("Benachrichtigung löschen")}"
        @click=${()=>this.handleDeleteNotification(t.id)}
      >
        ${ue(Ua)}
      </button>
    </div> `}render(){if(this.open)return E`<div id="notifications-dropdown">
      <div class="header">
        <h2>${k("Benachrichtigungen")}</h2>
        <button
          type="button"
          ?disabled=${!this.notifications||this.notifications.length===0}
          @click="${()=>this.handleDeleteAllNotifications()}"
        >
          ${k("Alle löschen")}
        </button>
      </div>
      <div class="content">${this.renderContent()}</div>
    </div>`}};Ge.styles=[j,O`
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

      .header {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid var(--bkd-func-bg-grey);
        align-items: center;
        padding: 1rem;

        h2 {
          font-size: 1.5rem;
          font-weight: 300;
          line-height: 1.16;
        }

        button {
          font-weight: 400;
          background-color: var(--bkd-func-bg-anthrazit);
          color: var(--bkd-func-bg-white);
          border-radius: 40px;
          border: none;
          padding: 0.5rem 1.5rem;
          cursor: pointer;
        }

        button:hover,
        button:focus {
          background-color: var(--bkd-func-bg-anthrazit-hover);
        }

        button:disabled {
          cursor: default;
          background-color: var(--bkd-func-bg-grey);
        }
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

        button {
          align-self: end;
          cursor: pointer;
          border: none;
          background: transparent;
          padding: 0;
          display: flex;
        }
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
    `];tn([q()],Ge.prototype,"open",2);tn([q()],Ge.prototype,"state",2);tn([q()],Ge.prototype,"notifications",2);Ge=tn([U("bkd-notifications-dropdown"),z()],Ge);var sl=Object.defineProperty,al=Object.getOwnPropertyDescriptor,ni=(t,e,n,i)=>{for(var r=i>1?void 0:i?al(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(r=(i?s(e,n,r):s(r))||r);return i&&r&&sl(e,n,r),r};let pt=class extends I{constructor(){super(),this.dropdown=new bt(this,{queryToggleElement:()=>this.toggleElement??null,queryMenuElement:()=>this.menuElement??null,queryItems:()=>{var t;return((t=this.shadowRoot)==null?void 0:t.querySelectorAll("a[role='menuitem']"))??null},queryFocused:()=>{var t;return((t=this.shadowRoot)==null?void 0:t.activeElement)??null}}),new le(this,w)}handleSettingsItemClick(t,e){this.dropdown.close(),this.dispatchEvent(new CustomEvent("bkdsettingsitemclick",{detail:{item:e,event:t},composed:!0,bubbles:!0}))}renderSettingsItem(t){return E`<li role="presentation">
      <a
        role="menuitem"
        href=${t.href}
        target=${t.external?"_blank":"_self"}
        @click=${e=>this.handleSettingsItemClick(e,t)}
      >
        ${t.label}</a
      >
      ${t.img?E`<img src=${t.img} alt="" width="24" height="24" />`:P}
    </li>`}render(){return E`
      <button
        type="button"
        @click=${()=>this.dropdown.toggle()}
        aria-label=${k("Menü Benutzereinstellungen")}
        .ariaExpanded=${this.dropdown.open}
        aria-haspopup="menu"
      >
        <img src="/icons/settings.svg" alt="" width="32" height="32" />
      </button>
      <ul role="menu" ?hidden=${!this.dropdown.open}>
        ${Ee(zr(w.locale),this.renderSettingsItem.bind(this))}
      </ul>
    `}};pt.styles=[j,O`
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
    `];ni([J("button")],pt.prototype,"toggleElement",2);ni([J('ul[role="menu"]')],pt.prototype,"menuElement",2);pt=ni([U("bkd-user-settings"),z()],pt);function ll(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var r=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(n,i,r.get?r:{enumerable:!0,get:function(){return t[i]}})}),n}var Yr={exports:{}};(function(t,e){(function(n,i){t.exports=i()})(self,()=>(()=>{var n={934:(s,d,l)=>{Object.defineProperty(d,"__esModule",{value:!0}),d.generateQueryString=d.OAuth2Client=void 0;const c=l(443),h=l(618);function p(u,b){return new URL(u,b).toString()}function g(u){return new URLSearchParams(Object.fromEntries(Object.entries(u).filter(([b,m])=>m!==void 0))).toString()}d.OAuth2Client=class{constructor(u){this.discoveryDone=!1,this.serverMetadata=null,u!=null&&u.fetch||(u.fetch=fetch.bind(globalThis)),this.settings=u}async refreshToken(u){if(!u.refreshToken)throw new Error("This token didn't have a refreshToken. It's not possible to refresh this");const b={grant_type:"refresh_token",refresh_token:u.refreshToken};return this.settings.clientSecret||(b.client_id=this.settings.clientId),this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",b))}async clientCredentials(u){var b;const m=["client_id","client_secret","grant_type","scope"];if(u!=null&&u.extraParams&&Object.keys(u.extraParams).filter(S=>m.includes(S)).length>0)throw new Error(`The following extraParams are disallowed: '${m.join("', '")}'`);const _={grant_type:"client_credentials",scope:(b=u==null?void 0:u.scope)===null||b===void 0?void 0:b.join(" "),...u==null?void 0:u.extraParams};if(!this.settings.clientSecret)throw new Error("A clientSecret must be provided to use client_credentials");return this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",_))}async password(u){var b;const m={grant_type:"password",...u,scope:(b=u.scope)===null||b===void 0?void 0:b.join(" ")};return this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",m))}get authorizationCode(){return new h.OAuth2AuthorizationCodeClient(this)}async introspect(u){const b={token:u.accessToken,token_type_hint:"access_token"};return this.request("introspectionEndpoint",b)}async getEndpoint(u){if(this.settings[u]!==void 0)return p(this.settings[u],this.settings.server);if(u!=="discoveryEndpoint"&&(await this.discover(),this.settings[u]!==void 0))return p(this.settings[u],this.settings.server);if(!this.settings.server)throw new Error(`Could not determine the location of ${u}. Either specify ${u} in the settings, or the "server" endpoint to let the client discover it.`);switch(u){case"authorizationEndpoint":return p("/authorize",this.settings.server);case"tokenEndpoint":return p("/token",this.settings.server);case"discoveryEndpoint":return p("/.well-known/oauth-authorization-server",this.settings.server);case"introspectionEndpoint":return p("/introspect",this.settings.server)}}async discover(){var u;if(this.discoveryDone)return;let b;this.discoveryDone=!0;try{b=await this.getEndpoint("discoveryEndpoint")}catch{return void console.warn('[oauth2] OAuth2 discovery endpoint could not be determined. Either specify the "server" or "discoveryEndpoint')}const m=await this.settings.fetch(b,{headers:{Accept:"application/json"}});if(!m.ok)return;if(!(!((u=m.headers.get("Content-Type"))===null||u===void 0)&&u.startsWith("application/json")))return void console.warn("[oauth2] OAuth2 discovery endpoint was not a JSON response. Response is ignored");this.serverMetadata=await m.json();const _=[["authorization_endpoint","authorizationEndpoint"],["token_endpoint","tokenEndpoint"],["introspection_endpoint","introspectionEndpoint"]];if(this.serverMetadata!==null){for(const[S,T]of _)this.serverMetadata[S]&&(this.settings[T]=p(this.serverMetadata[S],b));this.serverMetadata.token_endpoint_auth_methods_supported&&!this.settings.authenticationMethod&&(this.settings.authenticationMethod=this.serverMetadata.token_endpoint_auth_methods_supported[0])}}async request(u,b){const m=await this.getEndpoint(u),_={"Content-Type":"application/x-www-form-urlencoded"};let S=this.settings.authenticationMethod;switch(S||(S=this.settings.clientSecret?"client_secret_basic":"client_secret_post"),S){case"client_secret_basic":_.Authorization="Basic "+btoa(this.settings.clientId+":"+this.settings.clientSecret);break;case"client_secret_post":b.client_id=this.settings.clientId,this.settings.clientSecret&&(b.client_secret=this.settings.clientSecret);break;default:throw new Error("Authentication method not yet supported:"+S+". Open a feature request if you want this!")}const T=await this.settings.fetch(m,{method:"POST",body:g(b),headers:_});if(T.ok)return await T.json();let $,W,pe;throw T.headers.has("Content-Type")&&T.headers.get("Content-Type").startsWith("application/json")&&($=await T.json()),$!=null&&$.error?(W="OAuth2 error "+$.error+".",$.error_description&&(W+=" "+$.error_description),pe=$.error):(W="HTTP Error "+T.status+" "+T.statusText,T.status===401&&this.settings.clientSecret&&(W+=". It's likely that the clientId and/or clientSecret was incorrect"),pe=null),new c.OAuth2Error(W,pe,T.status)}tokenResponseToOAuth2Token(u){return u.then(b=>{var m;return{accessToken:b.access_token,expiresAt:b.expires_in?Date.now()+1e3*b.expires_in:null,refreshToken:(m=b.refresh_token)!==null&&m!==void 0?m:null}})}},d.generateQueryString=g},618:(s,d,l)=>{Object.defineProperty(d,"__esModule",{value:!0}),d.getCodeChallenge=d.generateCodeVerifier=d.OAuth2AuthorizationCodeClient=void 0;const c=l(934),h=l(443);async function p(m){const _=g();if(_!=null&&_.subtle)return["S256",b(await _.subtle.digest("SHA-256",u(m)))];{const S=l(212).createHash("sha256");return S.update(u(m)),["S256",S.digest("base64url")]}}function g(){if(typeof window<"u"&&window.crypto)return window.crypto;if(typeof self<"u"&&self.crypto)return self.crypto;const m=l(212);return m.webcrypto?m.webcrypto:null}function u(m){const _=new Uint8Array(m.length);for(let S=0;S<m.length;S++)_[S]=255&m.charCodeAt(S);return _}function b(m){return btoa(String.fromCharCode(...new Uint8Array(m))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}d.OAuth2AuthorizationCodeClient=class{constructor(m){this.client=m}async getAuthorizeUri(m){const[_,S]=await Promise.all([m.codeVerifier?p(m.codeVerifier):void 0,this.client.getEndpoint("authorizationEndpoint")]);let T={client_id:this.client.settings.clientId,response_type:"code",redirect_uri:m.redirectUri,code_challenge_method:_==null?void 0:_[0],code_challenge:_==null?void 0:_[1]};m.state&&(T.state=m.state),m.scope&&(T.scope=m.scope.join(" "));const $=Object.keys(T);if(m!=null&&m.extraParams&&Object.keys(m.extraParams).filter(W=>$.includes(W)).length>0)throw new Error(`The following extraParams are disallowed: '${$.join("', '")}'`);return T={...T,...m==null?void 0:m.extraParams},S+"?"+(0,c.generateQueryString)(T)}async getTokenFromCodeRedirect(m,_){const{code:S}=await this.validateResponse(m,{state:_.state});return this.getToken({code:S,redirectUri:_.redirectUri,codeVerifier:_.codeVerifier})}async validateResponse(m,_){var S;const T=new URL(m).searchParams;if(T.has("error"))throw new h.OAuth2Error((S=T.get("error_description"))!==null&&S!==void 0?S:"OAuth2 error",T.get("error"),0);if(!T.has("code"))throw new Error(`The url did not contain a code parameter ${m}`);if(_.state&&_.state!==T.get("state"))throw new Error(`The "state" parameter in the url did not match the expected value of ${_.state}`);return{code:T.get("code"),scope:T.has("scope")?T.get("scope").split(" "):void 0}}async getToken(m){const _={grant_type:"authorization_code",code:m.code,redirect_uri:m.redirectUri,code_verifier:m.codeVerifier};return this.client.tokenResponseToOAuth2Token(this.client.request("tokenEndpoint",_))}},d.generateCodeVerifier=async function(){const m=g();if(m){const _=new Uint8Array(32);return m.getRandomValues(_),b(_)}{const _=l(212);return new Promise((S,T)=>{_.randomBytes(32,($,W)=>{$&&T($),S(W.toString("base64url"))})})}},d.getCodeChallenge=p},443:(s,d)=>{Object.defineProperty(d,"__esModule",{value:!0}),d.OAuth2Error=void 0;class l extends Error{constructor(h,p,g){super(h),this.oauth2Code=p,this.httpCode=g}}d.OAuth2Error=l},13:(s,d)=>{Object.defineProperty(d,"__esModule",{value:!0}),d.OAuth2Fetch=void 0,d.OAuth2Fetch=class{constructor(l){this.token=null,this.activeGetStoredToken=null,this.activeRefresh=null,this.refreshTimer=null,(l==null?void 0:l.scheduleRefresh)===void 0&&(l.scheduleRefresh=!0),this.options=l,l.getStoredToken&&(this.activeGetStoredToken=(async()=>{this.token=await l.getStoredToken(),this.activeGetStoredToken=null})()),this.scheduleRefresh()}async fetch(l,c){const h=new Request(l,c);return this.mw()(h,p=>fetch(p))}mw(){return async(l,c)=>{const h=await this.getAccessToken();let p=l.clone();p.headers.set("Authorization","Bearer "+h);let g=await c(p);if(!g.ok&&g.status===401){const u=await this.refreshToken();p=l.clone(),p.headers.set("Authorization","Bearer "+u.accessToken),g=await c(p)}return g}}async getToken(){return this.token&&(this.token.expiresAt===null||this.token.expiresAt>Date.now())?this.token:this.refreshToken()}async getAccessToken(){return await this.activeGetStoredToken,(await this.getToken()).accessToken}async refreshToken(){var l,c;if(this.activeRefresh)return this.activeRefresh;const h=this.token;this.activeRefresh=(async()=>{var p,g;let u=null;try{h!=null&&h.refreshToken&&(u=await this.options.client.refreshToken(h))}catch{console.warn("[oauth2] refresh token not accepted, we'll try reauthenticating")}if(u||(u=await this.options.getNewToken()),!u){const b=new Error("Unable to obtain OAuth2 tokens, a full reauth may be needed");throw(g=(p=this.options).onError)===null||g===void 0||g.call(p,b),b}return u})();try{const p=await this.activeRefresh;return this.token=p,(c=(l=this.options).storeToken)===null||c===void 0||c.call(l,p),this.scheduleRefresh(),p}catch(p){throw this.options.onError&&this.options.onError(p),p}finally{this.activeRefresh=null}}scheduleRefresh(){var l;if(!this.options.scheduleRefresh||(this.refreshTimer&&(clearTimeout(this.refreshTimer),this.refreshTimer=null),!(!((l=this.token)===null||l===void 0)&&l.expiresAt)||!this.token.refreshToken))return;const c=this.token.expiresAt-Date.now();c<12e4||(this.refreshTimer=setTimeout(async()=>{try{await this.refreshToken()}catch(h){console.error("[fetch-mw-oauth2] error while doing a background OAuth2 auto-refresh",h)}},c-6e4))}}},212:()=>{}},i={};function r(s){var d=i[s];if(d!==void 0)return d.exports;var l=i[s]={exports:{}};return n[s](l,l.exports,r),l.exports}var o={};return(()=>{var s=o;Object.defineProperty(s,"__esModule",{value:!0}),s.OAuth2Error=s.OAuth2Fetch=s.generateCodeVerifier=s.OAuth2AuthorizationCodeClient=s.OAuth2Client=void 0;var d=r(934);Object.defineProperty(s,"OAuth2Client",{enumerable:!0,get:function(){return d.OAuth2Client}});var l=r(618);Object.defineProperty(s,"OAuth2AuthorizationCodeClient",{enumerable:!0,get:function(){return l.OAuth2AuthorizationCodeClient}}),Object.defineProperty(s,"generateCodeVerifier",{enumerable:!0,get:function(){return l.generateCodeVerifier}});var c=r(13);Object.defineProperty(s,"OAuth2Fetch",{enumerable:!0,get:function(){return c.OAuth2Fetch}});var h=r(443);Object.defineProperty(s,"OAuth2Error",{enumerable:!0,get:function(){return h.OAuth2Error}})})(),o})())})(Yr);var ii=Yr.exports,we={},kt={};Object.defineProperty(kt,"__esModule",{value:!0});kt.OAuth2Error=void 0;class cl extends Error{constructor(e,n,i){super(e),this.oauth2Code=n,this.httpCode=i}}kt.OAuth2Error=cl;var re={};const dl={},ul=Object.freeze(Object.defineProperty({__proto__:null,default:dl},Symbol.toStringTag,{value:"Module"})),On=ll(ul);var or;function Xr(){if(or)return re;or=1,Object.defineProperty(re,"__esModule",{value:!0}),re.getCodeChallenge=re.generateCodeVerifier=re.OAuth2AuthorizationCodeClient=void 0;const t=Qr(),e=kt;class n{constructor(c){this.client=c}async getAuthorizeUri(c){const[h,p]=await Promise.all([c.codeVerifier?r(c.codeVerifier):void 0,this.client.getEndpoint("authorizationEndpoint")]);let g={client_id:this.client.settings.clientId,response_type:"code",redirect_uri:c.redirectUri,code_challenge_method:h==null?void 0:h[0],code_challenge:h==null?void 0:h[1]};c.state&&(g.state=c.state),c.scope&&(g.scope=c.scope.join(" "));const u=Object.keys(g);if(c!=null&&c.extraParams&&Object.keys(c.extraParams).filter(b=>u.includes(b)).length>0)throw new Error(`The following extraParams are disallowed: '${u.join("', '")}'`);return g={...g,...c==null?void 0:c.extraParams},p+"?"+(0,t.generateQueryString)(g)}async getTokenFromCodeRedirect(c,h){const{code:p}=await this.validateResponse(c,{state:h.state});return this.getToken({code:p,redirectUri:h.redirectUri,codeVerifier:h.codeVerifier})}async validateResponse(c,h){var p;const g=new URL(c).searchParams;if(g.has("error"))throw new e.OAuth2Error((p=g.get("error_description"))!==null&&p!==void 0?p:"OAuth2 error",g.get("error"),0);if(!g.has("code"))throw new Error(`The url did not contain a code parameter ${c}`);if(h.state&&h.state!==g.get("state"))throw new Error(`The "state" parameter in the url did not match the expected value of ${h.state}`);return{code:g.get("code"),scope:g.has("scope")?g.get("scope").split(" "):void 0}}async getToken(c){const h={grant_type:"authorization_code",code:c.code,redirect_uri:c.redirectUri,code_verifier:c.codeVerifier};return this.client.tokenResponseToOAuth2Token(this.client.request("tokenEndpoint",h))}}re.OAuth2AuthorizationCodeClient=n;async function i(){const l=o();if(l){const c=new Uint8Array(32);return l.getRandomValues(c),d(c)}else{const c=On;return new Promise((h,p)=>{c.randomBytes(32,(g,u)=>{g&&p(g),h(u.toString("base64url"))})})}}re.generateCodeVerifier=i;async function r(l){const c=o();if(c!=null&&c.subtle)return["S256",d(await c.subtle.digest("SHA-256",s(l)))];{const p=On.createHash("sha256");return p.update(s(l)),["S256",p.digest("base64url")]}}re.getCodeChallenge=r;function o(){if(typeof window<"u"&&window.crypto)return window.crypto;if(typeof self<"u"&&self.crypto)return self.crypto;const l=On;return l.webcrypto?l.webcrypto:null}function s(l){const c=new Uint8Array(l.length);for(let h=0;h<l.length;h++)c[h]=l.charCodeAt(h)&255;return c}function d(l){return btoa(String.fromCharCode(...new Uint8Array(l))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}return re}var sr;function Qr(){if(sr)return we;sr=1,Object.defineProperty(we,"__esModule",{value:!0}),we.generateQueryString=we.OAuth2Client=void 0;const t=kt,e=Xr();class n{constructor(s){this.discoveryDone=!1,this.serverMetadata=null,s!=null&&s.fetch||(s.fetch=fetch.bind(globalThis)),this.settings=s}async refreshToken(s){if(!s.refreshToken)throw new Error("This token didn't have a refreshToken. It's not possible to refresh this");const d={grant_type:"refresh_token",refresh_token:s.refreshToken};return this.settings.clientSecret||(d.client_id=this.settings.clientId),this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",d))}async clientCredentials(s){var d;const l=["client_id","client_secret","grant_type","scope"];if(s!=null&&s.extraParams&&Object.keys(s.extraParams).filter(h=>l.includes(h)).length>0)throw new Error(`The following extraParams are disallowed: '${l.join("', '")}'`);const c={grant_type:"client_credentials",scope:(d=s==null?void 0:s.scope)===null||d===void 0?void 0:d.join(" "),...s==null?void 0:s.extraParams};if(!this.settings.clientSecret)throw new Error("A clientSecret must be provided to use client_credentials");return this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",c))}async password(s){var d;const l={grant_type:"password",...s,scope:(d=s.scope)===null||d===void 0?void 0:d.join(" ")};return this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",l))}get authorizationCode(){return new e.OAuth2AuthorizationCodeClient(this)}async introspect(s){const d={token:s.accessToken,token_type_hint:"access_token"};return this.request("introspectionEndpoint",d)}async getEndpoint(s){if(this.settings[s]!==void 0)return i(this.settings[s],this.settings.server);if(s!=="discoveryEndpoint"&&(await this.discover(),this.settings[s]!==void 0))return i(this.settings[s],this.settings.server);if(!this.settings.server)throw new Error(`Could not determine the location of ${s}. Either specify ${s} in the settings, or the "server" endpoint to let the client discover it.`);switch(s){case"authorizationEndpoint":return i("/authorize",this.settings.server);case"tokenEndpoint":return i("/token",this.settings.server);case"discoveryEndpoint":return i("/.well-known/oauth-authorization-server",this.settings.server);case"introspectionEndpoint":return i("/introspect",this.settings.server)}}async discover(){var s;if(this.discoveryDone)return;this.discoveryDone=!0;let d;try{d=await this.getEndpoint("discoveryEndpoint")}catch{console.warn('[oauth2] OAuth2 discovery endpoint could not be determined. Either specify the "server" or "discoveryEndpoint');return}const l=await this.settings.fetch(d,{headers:{Accept:"application/json"}});if(!l.ok)return;if(!(!((s=l.headers.get("Content-Type"))===null||s===void 0)&&s.startsWith("application/json"))){console.warn("[oauth2] OAuth2 discovery endpoint was not a JSON response. Response is ignored");return}this.serverMetadata=await l.json();const c=[["authorization_endpoint","authorizationEndpoint"],["token_endpoint","tokenEndpoint"],["introspection_endpoint","introspectionEndpoint"]];if(this.serverMetadata!==null){for(const[h,p]of c)this.serverMetadata[h]&&(this.settings[p]=i(this.serverMetadata[h],d));this.serverMetadata.token_endpoint_auth_methods_supported&&!this.settings.authenticationMethod&&(this.settings.authenticationMethod=this.serverMetadata.token_endpoint_auth_methods_supported[0])}}async request(s,d){const l=await this.getEndpoint(s),c={"Content-Type":"application/x-www-form-urlencoded"};let h=this.settings.authenticationMethod;switch(h||(h=this.settings.clientSecret?"client_secret_basic":"client_secret_post"),h){case"client_secret_basic":c.Authorization="Basic "+btoa(this.settings.clientId+":"+this.settings.clientSecret);break;case"client_secret_post":d.client_id=this.settings.clientId,this.settings.clientSecret&&(d.client_secret=this.settings.clientSecret);break;default:throw new Error("Authentication method not yet supported:"+h+". Open a feature request if you want this!")}const p=await this.settings.fetch(l,{method:"POST",body:r(d),headers:c});if(p.ok)return await p.json();let g,u,b;throw p.headers.has("Content-Type")&&p.headers.get("Content-Type").startsWith("application/json")&&(g=await p.json()),g!=null&&g.error?(u="OAuth2 error "+g.error+".",g.error_description&&(u+=" "+g.error_description),b=g.error):(u="HTTP Error "+p.status+" "+p.statusText,p.status===401&&this.settings.clientSecret&&(u+=". It's likely that the clientId and/or clientSecret was incorrect"),b=null),new t.OAuth2Error(u,b,p.status)}tokenResponseToOAuth2Token(s){return s.then(d=>{var l;return{accessToken:d.access_token,expiresAt:d.expires_in?Date.now()+d.expires_in*1e3:null,refreshToken:(l=d.refresh_token)!==null&&l!==void 0?l:null}})}}we.OAuth2Client=n;function i(o,s){return new URL(o,s).toString()}function r(o){return new URLSearchParams(Object.fromEntries(Object.entries(o).filter(([s,d])=>d!==void 0))).toString()}return we.generateQueryString=r,we}var hl=Qr(),Zr=Xr(),Jr=(t=>(t.Refresh="refresh",t.Access="access",t))(Jr||{});const it={refresh:void 0,access:void 0};function pl(t){ar(t,C.refreshTokenPayload),C.onRefreshTokenUpdate(e=>ar(t,e)),lr(t,C.accessTokenPayload),C.onAccessTokenUpdate(e=>lr(t,e))}function fl(){Object.values(Jr).forEach(t=>{it[t]&&clearTimeout(it[t])})}function ar(t,e){eo("refresh",e,()=>{const n=C.accessTokenPayload;if(!n)return;const{scope:i,locale:r}=n;ft(t,i,r,ri)})}function lr(t,e){eo("access",e,()=>{if(!e)return;const{scope:n,locale:i}=e;ft(t,n,i,to)})}function eo(t,e,n){it[t]&&clearTimeout(it[t]);const i=e&&os(e);i&&i>0&&(it[t]=setTimeout(n,i))}const B=Qt();if(typeof(B==null?void 0:B.oAuthServer)!="string")throw new Error("Invalid 'oAuthServer' setting");if(typeof(B==null?void 0:B.oAuthPrefix)!="string")throw new Error("Invalid 'oAuthPrefix' setting");if(typeof(B==null?void 0:B.oAuthClientId)!="string")throw new Error("Invalid 'clientId' setting");function gl(){return new ii.OAuth2Client({server:B.oAuthServer,clientId:B.oAuthClientId,tokenEndpoint:`${B.oAuthPrefix}/Authorization/Token`,get authorizationEndpoint(){return vl()},fetch:(...t)=>fetch(...t)})}async function ml(t,e,n){const i=ys(),r=await yl(t,i);if(r){wl(r,i);return}const o=kl();if(o){_l(o);return}await Gn(t,e,n)}async function Gn(t,e,n){if(C.isRefreshTokenExpired())return ft(t,e,n,ri);const i=C.accessToken,r=ds(e);Vi(i,e,n)||(Vi(r,e,n)?C.accessToken=r:await ft(t,e,n,to))}async function bl(t){const e=Pr();if(!e)throw new Error("No instance available");const{accessToken:n,scope:i,locale:r}=C;if(!(!n||!i||!r))try{await Al(t,`${B.oAuthPrefix}/Authorization/${e}/Logout`,{access_token:n})}catch(o){if(!(o instanceof SyntaxError))throw o}finally{C.resetAllTokens(),fl(),await ft(t,i,r,ri)}}function vl(){const t=Pr();return t?`${B.oAuthPrefix}/Authorization/${t}/Login`:`${B.oAuthPrefix}/Authorization/Login`}async function ft(t,e,n,i){const r=await ii.generateCodeVerifier(),o=new URL(document.location.href);o.searchParams.set($e,n),ws(r,o.toString());const s=await i(t,e,n,o.toString(),r);document.location.href=s.toString()}const ri=async(t,e,n,i,r)=>{const o=new URL(await t.getEndpoint("authorizationEndpoint")),[s,d]=await Zr.getCodeChallenge(r);return o.searchParams.set("clientId",t.settings.clientId),o.searchParams.set("redirectUrl",i),o.searchParams.set("culture_info",n),o.searchParams.set("application_scope",e),o.searchParams.set("response_type","code"),o.searchParams.set("code_challenge_method",s),o.searchParams.set("code_challenge",d),o},to=async(t,e,n,i,r)=>{const o=new URL(`${B.oAuthPrefix}/Authorization/RefreshPublic`,t.settings.server),[s,d]=await Zr.getCodeChallenge(r);return o.searchParams.set("redirectUrl",i),o.searchParams.set("culture_info",n),o.searchParams.set("application_scope",e),o.searchParams.set("refresh_token",C.refreshToken??""),o.searchParams.set("response_type","code"),o.searchParams.set("code_challenge_method",s),o.searchParams.set("code_challenge",d),o};async function yl(t,e){return new URLSearchParams(document.location.search).get("code")&&(e!=null&&e.redirectUri)?await t.authorizationCode.getTokenFromCodeRedirect(document.location.href,{redirectUri:e.redirectUri,codeVerifier:e.codeVerifier}):null}function wl({refreshToken:t,accessToken:e},n){var r;C.refreshToken=t,C.accessToken=e;const i=(r=C.accessTokenPayload)==null?void 0:r.instanceId;i&&cs(i),n!=null&&n.redirectUri&&w.navigate(new URL(n.redirectUri))}function kl(){const t=new URLSearchParams(document.location.search),e=t.get("access_token"),n=t.get("expires_in"),i=t.get("refresh_token");return e?{accessToken:e,expiresAt:n?Date.now()+parseInt(n,10)*1e3:null,refreshToken:i||null}:null}function _l(t){const{refreshToken:e,accessToken:n}=t;C.refreshToken=e,C.accessToken=n;const i=new URL(document.location.href);i.searchParams.delete("access_token"),i.searchParams.delete("expires_in"),i.searchParams.delete("refresh_token"),window.parent===window?history.replaceState({},"",i):window.parent.location.assign(i)}async function Al(t,e,n){var c;const i=new URL(e,t.settings.server).toString(),r={"Content-Type":"application/x-www-form-urlencoded"},o=await fetch(i,{method:"POST",body:n&&hl.generateQueryString(n),headers:r});if(o.ok)return await o.json();let s,d,l;throw(c=o.headers.get("Content-Type"))!=null&&c.startsWith("application/json")&&(s=await o.json()),s!=null&&s.error?(d="OAuth2 error "+s.error+".",s.error_description&&(d+=" "+s.error_description),l=s.error):(d="HTTP Error "+o.status+" "+o.statusText,l=null),new ii.OAuth2Error(d,l,o.status)}var El=Object.defineProperty,Tl=Object.getOwnPropertyDescriptor,no=(t,e,n,i)=>{for(var r=i>1?void 0:i?Tl(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(r=(i?s(e,n,r):s(r))||r);return i&&r&&El(e,n,r),r};const rt=gl();pl(rt);const Sl=async function(){await ml(rt,Vs(),Or()),w.init()}();Qs(O`
    ${Dr}
    :root {
      ${Nr}
    }
  `.toString());let Kt=class extends I{constructor(){super(),this.authReady=!1,this.subscriptions=[],this.handleMessage=({data:t})=>{switch(t.type){case"bkdAppPushState":{const e=t.args[2];this.updateUrlAndNavigationState(e,!1);break}case"bkdAppReplaceState":{const e=t.args[2];$n(Sn(e),!0);break}case"bkdAppHashChange":{const{url:e}=t;$n(Sn(e));break}}},Sl.then(()=>this.authReady=!0),new le(this,w)}connectedCallback(){super.connectedCallback(),w.initialized.then(()=>{C.scope!==w.app.scope&&Gn(rt,w.app.scope,w.locale)}),this.subscriptions.push(w.subscribeScopeAndLocale((e,n)=>Gn(rt,e,n),!0)),this.subscriptions.push(w.subscribeInstanceName(this.updateTitle.bind(this))),this.subscriptions.push(w.subscribeNavigationItem(this.updateTitle.bind(this))),window.addEventListener("message",this.handleMessage);const t=new URL(location.href);w.actualAppPath=t.hash,window.addEventListener("hashchange",this.handleHashChange)}disconnectedCallback(){super.disconnectedCallback(),this.subscriptions.forEach(t=>t()),window.removeEventListener("message",this.handleMessage),window.removeEventListener("hashchange",this.handleHashChange)}updateTitle(){const{instanceName:t,navigationItem:e}=w,n=(e==null?void 0:e.label)&&(e==null?void 0:e.key)!==L.navigationHome.key;document.title=n?[e==null?void 0:e.label,t].join(" ― "):t}updateUrlAndNavigationState(t,e){var r;const n=Sn(t);$n(n,e);const i=js(w.navigation,n);(r=i==null?void 0:i.item)!=null&&r.key&&i.item.key!==w.navigationItemKey?(w.actualAppPath=n,w.navigationItemKey=i.item.key):w.appPath=n}handleHashChange(t){const e=new URL(t.newURL);w.appPath=e.hash}handleLogout(){bl(rt)}render(){return E`
      ${je(this.authReady&&C.authenticated,()=>E`
          <bkd-header @bkdlogout=${this.handleLogout.bind(this)}></bkd-header>
          <bkd-content></bkd-content>
          <bkd-footer></bkd-footer>
        `)}
    `}};Kt.styles=[j,O`
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
    `];no([Ke()],Kt.prototype,"authReady",2);Kt=no([U("bkd-portal"),z()],Kt);
