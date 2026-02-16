(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();const ne=globalThis,Pe=ne.ShadowRoot&&(ne.ShadyCSS===void 0||ne.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Re=Symbol(),De=new WeakMap;let nt=class{constructor(e,n,s){if(this._$cssResult$=!0,s!==Re)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(Pe&&e===void 0){const s=n!==void 0&&n.length===1;s&&(e=De.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&De.set(n,e))}return e}toString(){return this.cssText}};const wt=t=>new nt(typeof t=="string"?t:t+"",void 0,Re),O=(t,...e)=>{const n=t.length===1?t[0]:e.reduce(((s,r,i)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[i+1]),t[0]);return new nt(n,t,Re)},At=(t,e)=>{if(Pe)t.adoptedStyleSheets=e.map((n=>n instanceof CSSStyleSheet?n:n.styleSheet));else for(const n of e){const s=document.createElement("style"),r=ne.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=n.cssText,t.appendChild(s)}},Ke=Pe?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const s of e.cssRules)n+=s.cssText;return wt(n)})(t):t;const{is:_t,defineProperty:kt,getOwnPropertyDescriptor:St,getOwnPropertyNames:Pt,getOwnPropertySymbols:Rt,getPrototypeOf:It}=Object,le=globalThis,He=le.trustedTypes,Et=He?He.emptyScript:"",Tt=le.reactiveElementPolyfillSupport,W=(t,e)=>t,be={toAttribute(t,e){switch(e){case Boolean:t=t?Et:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},st=(t,e)=>!_t(t,e),Be={attribute:!0,type:String,converter:be,reflect:!1,useDefault:!1,hasChanged:st};Symbol.metadata??=Symbol("metadata"),le.litPropertyMetadata??=new WeakMap;let z=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=Be){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(e,n),!n.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(e,s,n);r!==void 0&&kt(this.prototype,e,r)}}static getPropertyDescriptor(e,n,s){const{get:r,set:i}=St(this.prototype,e)??{get(){return this[n]},set(o){this[n]=o}};return{get:r,set(o){const c=r?.call(this);i?.call(this,o),this.requestUpdate(e,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Be}static _$Ei(){if(this.hasOwnProperty(W("elementProperties")))return;const e=It(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(W("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(W("properties"))){const n=this.properties,s=[...Pt(n),...Rt(n)];for(const r of s)this.createProperty(r,n[r])}const e=this[Symbol.metadata];if(e!==null){const n=litPropertyMetadata.get(e);if(n!==void 0)for(const[s,r]of n)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[n,s]of this.elementProperties){const r=this._$Eu(n,s);r!==void 0&&this._$Eh.set(r,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const r of s)n.unshift(Ke(r))}else e!==void 0&&n.push(Ke(e));return n}static _$Eu(e,n){const s=n.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,n=this.constructor.elementProperties;for(const s of n.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return At(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,n,s){this._$AK(e,s)}_$ET(e,n){const s=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,s);if(r!==void 0&&s.reflect===!0){const i=(s.converter?.toAttribute!==void 0?s.converter:be).toAttribute(n,s.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,n){const s=this.constructor,r=s._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const i=s.getPropertyOptions(r),o=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:be;this._$Em=r,this[r]=o.fromAttribute(n,i.type)??this._$Ej?.get(r)??null,this._$Em=null}}requestUpdate(e,n,s){if(e!==void 0){const r=this.constructor,i=this[e];if(s??=r.getPropertyOptions(e),!((s.hasChanged??st)(i,n)||s.useDefault&&s.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,s))))return;this.C(e,n,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,n,{useDefault:s,reflect:r,wrapped:i},o){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??n??this[e]),i!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(n=void 0),this._$AL.set(e,n)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,i]of this._$Ep)this[r]=i;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[r,i]of s){const{wrapped:o}=i,c=this[r];o!==!0||this._$AL.has(r)||c===void 0||this.C(r,void 0,i,c)}}let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),this._$EO?.forEach((s=>s.hostUpdate?.())),this.update(n)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(n)}willUpdate(e){}_$AE(e){this._$EO?.forEach((n=>n.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((n=>this._$ET(n,this[n]))),this._$EM()}updated(e){}firstUpdated(e){}};z.elementStyles=[],z.shadowRootOptions={mode:"open"},z[W("elementProperties")]=new Map,z[W("finalized")]=new Map,Tt?.({ReactiveElement:z}),(le.reactiveElementVersions??=[]).push("2.1.0");const Ie=globalThis,se=Ie.trustedTypes,je=se?se.createPolicy("lit-html",{createHTML:t=>t}):void 0,rt="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,it="?"+S,xt=`<${it}>`,L=document,V=()=>L.createComment(""),G=t=>t===null||typeof t!="object"&&typeof t!="function",Ee=Array.isArray,Ct=t=>Ee(t)||typeof t?.[Symbol.iterator]=="function",de=`[ 	
\f\r]`,j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Fe=/-->/g,We=/>/g,I=RegExp(`>|${de}(?:([^\\s"'>=/]+)(${de}*=${de}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ve=/'/g,Ge=/"/g,ot=/^(?:script|style|textarea|title)$/i,Lt=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),P=Lt(1),R=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),qe=new WeakMap,x=L.createTreeWalker(L,129);function at(t,e){if(!Ee(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return je!==void 0?je.createHTML(e):e}const Ot=(t,e)=>{const n=t.length-1,s=[];let r,i=e===2?"<svg>":e===3?"<math>":"",o=j;for(let c=0;c<n;c++){const l=t[c];let u,g,h=-1,d=0;for(;d<l.length&&(o.lastIndex=d,g=o.exec(l),g!==null);)d=o.lastIndex,o===j?g[1]==="!--"?o=Fe:g[1]!==void 0?o=We:g[2]!==void 0?(ot.test(g[2])&&(r=RegExp("</"+g[2],"g")),o=I):g[3]!==void 0&&(o=I):o===I?g[0]===">"?(o=r??j,h=-1):g[1]===void 0?h=-2:(h=o.lastIndex-g[2].length,u=g[1],o=g[3]===void 0?I:g[3]==='"'?Ge:Ve):o===Ge||o===Ve?o=I:o===Fe||o===We?o=j:(o=I,r=void 0);const p=o===I&&t[c+1].startsWith("/>")?" ":"";i+=o===j?l+xt:h>=0?(s.push(u),l.slice(0,h)+rt+l.slice(h)+S+p):l+S+(h===-2?c:p)}return[at(t,i+(t[n]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class q{constructor({strings:e,_$litType$:n},s){let r;this.parts=[];let i=0,o=0;const c=e.length-1,l=this.parts,[u,g]=Ot(e,n);if(this.el=q.createElement(u,s),x.currentNode=this.el.content,n===2||n===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(r=x.nextNode())!==null&&l.length<c;){if(r.nodeType===1){if(r.hasAttributes())for(const h of r.getAttributeNames())if(h.endsWith(rt)){const d=g[o++],p=r.getAttribute(h).split(S),f=/([.?@])?(.*)/.exec(d);l.push({type:1,index:i,name:f[2],strings:p,ctor:f[1]==="."?Mt:f[1]==="?"?Ut:f[1]==="@"?Nt:ce}),r.removeAttribute(h)}else h.startsWith(S)&&(l.push({type:6,index:i}),r.removeAttribute(h));if(ot.test(r.tagName)){const h=r.textContent.split(S),d=h.length-1;if(d>0){r.textContent=se?se.emptyScript:"";for(let p=0;p<d;p++)r.append(h[p],V()),x.nextNode(),l.push({type:2,index:++i});r.append(h[d],V())}}}else if(r.nodeType===8)if(r.data===it)l.push({type:2,index:i});else{let h=-1;for(;(h=r.data.indexOf(S,h+1))!==-1;)l.push({type:7,index:i}),h+=S.length-1}i++}}static createElement(e,n){const s=L.createElement("template");return s.innerHTML=e,s}}function N(t,e,n=t,s){if(e===R)return e;let r=s!==void 0?n._$Co?.[s]:n._$Cl;const i=G(e)?void 0:e._$litDirective$;return r?.constructor!==i&&(r?._$AO?.(!1),i===void 0?r=void 0:(r=new i(t),r._$AT(t,n,s)),s!==void 0?(n._$Co??=[])[s]=r:n._$Cl=r),r!==void 0&&(e=N(t,r._$AS(t,e.values),r,s)),e}let zt=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:n},parts:s}=this._$AD,r=(e?.creationScope??L).importNode(n,!0);x.currentNode=r;let i=x.nextNode(),o=0,c=0,l=s[0];for(;l!==void 0;){if(o===l.index){let u;l.type===2?u=new H(i,i.nextSibling,this,e):l.type===1?u=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(u=new Dt(i,this,e)),this._$AV.push(u),l=s[++c]}o!==l?.index&&(i=x.nextNode(),o++)}return x.currentNode=L,r}p(e){let n=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,n),n+=s.strings.length-2):s._$AI(e[n])),n++}};class H{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,n,s,r){this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=s,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&e?.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=N(this,e,n),G(e)?e===b||e==null||e===""?(this._$AH!==b&&this._$AR(),this._$AH=b):e!==this._$AH&&e!==R&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ct(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==b&&G(this._$AH)?this._$AA.nextSibling.data=e:this.T(L.createTextNode(e)),this._$AH=e}$(e){const{values:n,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=q.createElement(at(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===r)this._$AH.p(n);else{const i=new zt(r,this),o=i.u(this.options);i.p(n),this.T(o),this._$AH=i}}_$AC(e){let n=qe.get(e.strings);return n===void 0&&qe.set(e.strings,n=new q(e)),n}k(e){Ee(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let s,r=0;for(const i of e)r===n.length?n.push(s=new H(this.O(V()),this.O(V()),this,this.options)):s=n[r],s._$AI(i),r++;r<n.length&&(this._$AR(s&&s._$AB.nextSibling,r),n.length=r)}_$AR(e=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class ce{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,s,r,i){this.type=1,this._$AH=b,this._$AN=void 0,this.element=e,this.name=n,this._$AM=r,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=b}_$AI(e,n=this,s,r){const i=this.strings;let o=!1;if(i===void 0)e=N(this,e,n,0),o=!G(e)||e!==this._$AH&&e!==R,o&&(this._$AH=e);else{const c=e;let l,u;for(e=i[0],l=0;l<i.length-1;l++)u=N(this,c[s+l],n,l),u===R&&(u=this._$AH[l]),o||=!G(u)||u!==this._$AH[l],u===b?e=b:e!==b&&(e+=(u??"")+i[l+1]),this._$AH[l]=u}o&&!r&&this.j(e)}j(e){e===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Mt extends ce{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===b?void 0:e}}class Ut extends ce{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==b)}}class Nt extends ce{constructor(e,n,s,r,i){super(e,n,s,r,i),this.type=5}_$AI(e,n=this){if((e=N(this,e,n,0)??b)===R)return;const s=this._$AH,r=e===b&&s!==b||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,i=e!==b&&(s===b||r);r&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Dt{constructor(e,n,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){N(this,e)}}const Kt={I:H},Ht=Ie.litHtmlPolyfillSupport;Ht?.(q,H),(Ie.litHtmlVersions??=[]).push("3.3.0");const Bt=(t,e,n)=>{const s=n?.renderBefore??e;let r=s._$litPart$;if(r===void 0){const i=n?.renderBefore??null;s._$litPart$=r=new H(e.insertBefore(V(),i),i,void 0,n??{})}return r._$AI(t),r};const Te=globalThis;let k=class extends z{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Bt(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return R}};k._$litElement$=!0,k.finalized=!0,Te.litElementHydrateSupport?.({LitElement:k});const jt=Te.litElementPolyfillSupport;jt?.({LitElement:k});(Te.litElementVersions??=[]).push("4.2.0");const J=t=>(e,n)=>{n!==void 0?n.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)};function As(t,e,n){return t?e(t):n?.(t)}const me="lit-localize-status";const Ft=t=>typeof t!="string"&&"strTag"in t,lt=(t,e,n)=>{let s=t[0];for(let r=1;r<t.length;r++)s+=e[n?n[r-1]:r-1],s+=t[r];return s};const ct=(t=>Ft(t)?lt(t.strings,t.values):t);let a=ct,Ye=!1;function Wt(t){if(Ye)throw new Error("lit-localize can only be configured once");a=t,Ye=!0}class Vt{constructor(e){this.__litLocalizeEventHandler=n=>{n.detail.status==="ready"&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(me,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(me,this.__litLocalizeEventHandler)}}const Gt=t=>t.addController(new Vt(t)),qt=Gt;const Q=()=>(t,e)=>(t.addInitializer(qt),t);class ht{constructor(){this.settled=!1,this.promise=new Promise((e,n)=>{this._resolve=e,this._reject=n})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}const A=[];for(let t=0;t<256;t++)A[t]=(t>>4&15).toString(16)+(t&15).toString(16);function Yt(t){let e=0,n=8997,s=0,r=33826,i=0,o=40164,c=0,l=52210;for(let u=0;u<t.length;u++)n^=t.charCodeAt(u),e=n*435,s=r*435,i=o*435,c=l*435,i+=n<<8,c+=r<<8,s+=e>>>16,n=e&65535,i+=s>>>16,r=s&65535,l=c+(i>>>16)&65535,o=i&65535;return A[l>>8]+A[l&255]+A[o>>8]+A[o&255]+A[r>>8]+A[r&255]+A[n>>8]+A[n&255]}const Xt="",Jt="h",Qt="s";function Zt(t,e){return(e?Jt:Qt)+Yt(typeof t=="string"?t:t.join(Xt))}const Xe=new WeakMap,Je=new Map;function en(t,e,n){if(t){const s=n?.id??tn(e),r=t[s];if(r){if(typeof r=="string")return r;if("strTag"in r)return lt(r.strings,e.values,r.values);{let i=Xe.get(r);return i===void 0&&(i=r.values,Xe.set(r,i)),{...r,values:i.map(o=>e.values[o])}}}}return ct(e)}function tn(t){const e=typeof t=="string"?t:t.strings;let n=Je.get(e);return n===void 0&&(n=Zt(e,typeof t!="string"&&!("strTag"in t)),Je.set(e,n)),n}function pe(t){window.dispatchEvent(new CustomEvent(me,{detail:t}))}let re="",ge,ut,ie,ve,dt,T=new ht;T.resolve();let te=0;const nn=t=>(Wt(((e,n)=>en(dt,e,n))),re=ut=t.sourceLocale,ie=new Set(t.targetLocales),ie.add(t.sourceLocale),ve=t.loadLocale,{getLocale:sn,setLocale:rn}),sn=()=>re,rn=t=>{if(t===(ge??re))return T.promise;if(!ie||!ve)throw new Error("Internal error");if(!ie.has(t))throw new Error("Invalid locale code");te++;const e=te;return ge=t,T.settled&&(T=new ht),pe({status:"loading",loadingLocale:t}),(t===ut?Promise.resolve({templates:void 0}):ve(t)).then(s=>{te===e&&(re=t,ge=void 0,dt=s.templates,pe({status:"ready",readyLocale:t}),T.resolve())},s=>{te===e&&(pe({status:"error",errorLocale:t,errorMessage:s.toString()}),T.reject(s))}),T.promise};function pt(t){return typeof t=="function"?t():t}const ae=class ae extends Event{constructor(e,n,s){super(ae.eventName,{cancelable:!1}),this.key=e,this.value=n,this.state=s}};ae.eventName="lit-state-changed";let C=ae;const on=(t,e)=>e!==t&&(e===e||t===t),Ue=class Ue extends EventTarget{static initPropertyMap(){this.propertyMap||(this.propertyMap=new Map)}get propertyMap(){return this.constructor.propertyMap}get stateValue(){return Object.fromEntries([...this.propertyMap].map(([e])=>[e,this[e]]))}constructor(){super(),this.hookMap=new Map,this.constructor.finalize(),this.propertyMap&&[...this.propertyMap].forEach(([e,n])=>{if(n.initialValue!==void 0){const s=pt(n.initialValue);this[e]=s,n.value=s}})}static finalize(){if(this.finalized)return!1;this.finalized=!0;const e=Object.keys(this.properties||{});for(const n of e)this.createProperty(n,this.properties[n]);return!0}static createProperty(e,n){this.finalize();const s=typeof e=="symbol"?Symbol():`__${e}`,r=this.getPropertyDescriptor(String(e),s,n);Object.defineProperty(this.prototype,e,r)}static getPropertyDescriptor(e,n,s){const r=s?.hasChanged||on;return{get(){return this[n]},set(i){const o=this[e];this[n]=i,r(i,o)===!0&&this.dispatchStateEvent(e,i,this)},configurable:!0,enumerable:!0}}reset(){this.hookMap.forEach(e=>e.reset()),[...this.propertyMap].filter(([e,n])=>!(n.skipReset===!0||n.resetValue===void 0)).forEach(([e,n])=>{this[e]=n.resetValue})}subscribe(e,n,s){n&&!Array.isArray(n)&&(n=[n]);const r=i=>{(!n||n.includes(i.key))&&e(i.key,i.value,this)};return this.addEventListener(C.eventName,r,s),()=>this.removeEventListener(C.eventName,r)}dispatchStateEvent(e,n,s){this.dispatchEvent(new C(e,n,s))}};Ue.finalized=!1;let ye=Ue;class xe{constructor(e,n,s){this.host=e,this.state=n,this.callback=s||(()=>this.host.requestUpdate()),this.host.addController(this)}hostConnected(){this.state.addEventListener(C.eventName,this.callback),this.callback()}hostDisconnected(){this.state.removeEventListener(C.eventName,this.callback)}}function y(t){return(e,n)=>{if(Object.getOwnPropertyDescriptor(e,n))throw new Error("@property must be called before all state decorators");const s=e.constructor;s.initPropertyMap();const r=e.hasOwnProperty(n);return s.propertyMap.set(n,{...t,initialValue:t?.value,resetValue:t?.value}),s.createProperty(n,t),r?Object.getOwnPropertyDescriptor(e,n):void 0}}function an(t,e){if(t!==null&&(e===Boolean||e===Number||e===Array||e===Object))try{t=JSON.parse(t)}catch{console.warn("cannot parse value",t)}return t}const ln=new URL(location.href);function cn(t){return(e,n)=>{if(!Object.getOwnPropertyDescriptor(e,n))throw new Error("@local-storage decorator need to be called after @property");const r=e.constructor,i=`${t?.parameter||String(n)}`,o=r.propertyMap.get(n),c=o?.type;if(o){const l=o.initialValue,u=ln.searchParams.get(i);u!==null&&(o.skipAsync=!0),o.initialValue=()=>an(u,c)??pt(l),r.propertyMap.set(n,{...o,...t});return}}}const m={apps:[{key:"schulverwaltung",scope:"Tutoring",root:"apps/webapp-schulverwaltung/index.html",heading:!1},{key:"schulverwaltungScopeNg",scope:"NG",root:"apps/webapp-schulverwaltung/index.html",heading:!1},{key:"schulleiterPersonen",scope:"NG",root:"apps/EmberApps/SchulleiterPersonen/index.html",heading:!0},{key:"fotoliste",scope:"Tutoring",root:"apps/EmberApps/Fotoliste/index.html",heading:!1},{key:"kursausschreibung",scope:"Public",root:"apps/Kursausschreibung/index.html",heading:!0},{key:"kursausschreibungIntern",scope:"Public",root:"apps/Kursausschreibung/indexIntern.html",heading:!0},{key:"stellvertretung",scope:"Tutoring",root:"apps/Stellvertretung/index.html",heading:!0},{key:"reservation",scope:"NG",root:"apps/Raumreservation/index.html",heading:!0},{key:"noteneingabe",scope:"Tutoring",root:"apps/Noteneingabe/index.html",heading:!1},{key:"footer",scope:"Public",root:"",heading:!0}],navigationHome:{key:"home",label:"Home",allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/dashboard"},navigationPhotoList:{key:"photoList",get label(){return a("Fotoliste")},allowedRolesOrPermissions:["TeacherRole"],deniedInstanceIds:null,appKey:"fotoliste",appPath:"#/"},navigationInputGrades:{key:"inputGrades",get label(){return a("Noteneingabe")},allowedRolesOrPermissions:["TeacherRole"],deniedInstanceIds:null,appKey:"noteneingabe",appPath:"#/"},navigationMyProfile:{key:"myProfile",get label(){return a("Mein Profil")},allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/my-profile"},navigationMySettings:{key:"mySettings",get label(){return a("Einstellungen")},allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/my-settings"},navigation:[{get label(){return a("Unterricht")},items:[{key:"presenceControl",get label(){return a("Präsenzkontrolle")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/presence-control"},{key:"currentEvents",get label(){return a("Aktuelle Fächer")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole","ClassTeacherRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/events/current"},{key:"tests",get label(){return a("Tests und Bewertung")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/events"},{key:"substitutionsAssign",get label(){return a("Stellvertretung erfassen")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole"],deniedInstanceIds:null,appKey:"stellvertretung",appPath:"#/substitutions/assign"},{key:"substitutionsExecute",get label(){return a("Stellvertretung ausüben")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole"],deniedInstanceIds:null,appKey:"stellvertretung",appPath:"#/substitutions/execute"}]},{get label(){return a("Absenzen")},items:[{key:"openAbsences",get label(){return a("Offene Absenzen entschuldigen")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole","ClassTeacherRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/open-absences"},{key:"editAbsences",get label(){return a("Absenzen bearbeiten")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole","ClassTeacherRole","AbsenceAdministratorRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/edit-absences"},{key:"evaluateAbsences",get label(){return a("Absenzen auswerten")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole","ClassTeacherRole","AbsenceAdministratorRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/evaluate-absences"}]},{get label(){return a("Aus-/Weiterbildung")},items:[{key:"myAbsences",get label(){return a("Absenzen")},allowedRolesOrPermissions:["StudentRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/my-absences"},{key:"myGrades",get label(){return a("Noten")},allowedRolesOrPermissions:["StudentRole"],deniedInstanceIds:null,appKey:"schulverwaltung",appPath:"#/my-grades"}]},{get label(){return a("Angebote")},items:[{key:"coursesAndEvents",get label(){return a("Kurse und Veranstaltungen")},allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"kursausschreibung",appPath:"#/"},{key:"internalTraining",get label(){return a("Schulinterne Weiterbildung")},allowedRolesOrPermissions:["TeacherRole","LessonTeacherRole","ClassTeacherRole","AbsenceAdministratorRole","SubstituteAdministratorRole","Reservations"],deniedInstanceIds:null,appKey:"kursausschreibungIntern",appPath:"#/"},{key:"reservations",get label(){return a("Räume und Geräte reservieren")},allowedRolesOrPermissions:["Reservations"],deniedInstanceIds:null,appKey:"reservation",appPath:"#/"}]},{get label(){return a("Administration")},items:[{key:"substitutionsAdmin",get label(){return a("Stellvertretungen administrieren")},allowedRolesOrPermissions:["SubstituteAdministratorRole"],deniedInstanceIds:null,appKey:"stellvertretung",appPath:"#/substitutions/admin"},{key:"personSearch",get label(){return a("Personen und Institutionen suchen")},allowedRolesOrPermissions:["PersonRight"],deniedInstanceIds:null,appKey:"schulleiterPersonen",appPath:"#/persons"},{key:"studyCourses",get label(){return a("Aufnahmeverfahren")},allowedRolesOrPermissions:["RegistrationRightWeiterbildungMAS","RegistrationRightAusbildungStudiengang"],deniedInstanceIds:null,appKey:"schulverwaltungScopeNg",appPath:"#/events/study-courses"},{key:"import",get label(){return a("Daten einlesen")},allowedRolesOrPermissions:["PersonRight","RegistrationRightAusbildungSemester","RegistrationRightAusbildungKurs","RegistrationRightAusbildungModulanlass","RegistrationRightAusbildungModul","RegistrationRightAusbildungStudiengang","RegistrationRightAusbildungStudienjahrgang","RegistrationRightAusbildungVeranstaltung","RegistrationRightWeiterbildungCAS","RegistrationRightWeiterbildungCASAnlass","RegistrationRightWeiterbildungDAS","RegistrationRightWeiterbildungDASJahrgang","RegistrationRightWeiterbildungInteressent","RegistrationRightWeiterbildungKurs","RegistrationRightWeiterbildungMAS","RegistrationRightWeiterbildungMASJahrgang","RegistrationRightWeiterbildungModulanlass","RegistrationRightWeiterbildungModulbefreiung","RegistrationRightWeiterbildungSemester","RegistrationRightWeiterbildungVeranstaltung","RegistrationRightWeiterbildungEvaluationsanlass","RegistrationRightWeiterbildungFakturierung","RegistrationRightWeiterbildungMailingliste","RegistrationRightWeiterbildungPlatzangebot","RegistrationRightWeiterbildungReservation"],deniedInstanceIds:null,appKey:"schulverwaltungScopeNg",appPath:"#/import"}]}],footer:[{key:"contact",get label(){return a("Kontakt")},allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"footer",appPath:"#/"},{key:"legal",get label(){return a("Rechtliche Hinweise")},allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"footer",appPath:"#/"},{key:"imprint",get label(){return a("Impressum")},allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:"footer",appPath:"#/"}]};function hn(){return window.eventoPortal?.settings??{apiServer:"",oAuthServer:"",oAuthPrefix:"",oAuthClientId:"",notificationRefreshTime:30}}function U(t){const{instance_id:e,scope:n,culture_info:s,nbf:r,exp:i,substitution_id:o,holder_roles:c}=pn(t);return{instanceId:e,scope:n,locale:s,issueTime:r,expirationTime:i,substitutionId:o?parseInt(o,10):void 0,substitutionRoles:c?c.split(";"):void 0}}const un=10*1e3;function _s(t,e,n){if(!t)return!1;const s=U(t);return s.scope===e&&s.locale===n&&!dn(s)}function dn(t){if(!t)return!0;const{expirationTime:e}=t;return e*1e3<Date.now()}function ks(t){if(!t)return!0;const{expirationTime:e}=t;return e*1e3-un<Date.now()}function Ss(t){const{expirationTime:e}=t;return Math.max(e*1e3-Date.now(),0)}function pn(t){const e=t.split(".");if(e.length!==3)throw new Error("Invalid JWT token format");const s=e[1].replace(/-/g,"+").replace(/_/g,"/"),r=atob(s),o=new TextDecoder("utf-8").decode(Uint8Array.from(r,c=>c.charCodeAt(0)));return JSON.parse(o)}const gt="bkdInstance",$e="bkdCodeVerifier",Y="bkdRedirectUrl",Ce="bkdAccessToken",Le="bkdRefreshToken",X="CLX.LoginToken",gn="uiCulture",fn="CLX.TokenExpire";function Ps(){return localStorage.getItem(gt)}function Rs(t){localStorage.setItem(gt,t)}function bn(t){localStorage.setItem(gn,t)}function mn(t){return localStorage.getItem(`${Le}_${t}`)}function vn(t,e){e&&localStorage.setItem(`${Le}_${t}`,e)}function Is(t){return localStorage.getItem(`${Ce}_${t}`)}function yn(t,e){localStorage.setItem(`${Ce}_${t}`,e)}function $n(){Sn(localStorage,t=>{t&&(t.startsWith(Ce)||t.startsWith(Le))&&localStorage.removeItem(t)}),sessionStorage.removeItem(X)}function wn(){const t=sessionStorage.getItem(X);return t?t.replace(/^"+|"+$/g,""):null}function An(){const t=localStorage.getItem(X);return t?t.replace(/^"+|"+$/g,""):null}function _n(t){sessionStorage.setItem(X,`"${t}"`),localStorage.setItem(X,`"${t}"`);let{expirationTime:e}=U(t);e=e*1e3,localStorage.setItem(fn,e.toString())}function Es(){const t=sessionStorage.getItem($e),e=sessionStorage.getItem(Y)??void 0;return sessionStorage.removeItem(Y),sessionStorage.removeItem($e),t?{redirectUri:e,codeVerifier:t}:null}function Ts(t,e){sessionStorage.setItem($e,t),e?sessionStorage.setItem(Y,e):sessionStorage.removeItem(Y)}function kn(){return sessionStorage.getItem(Y)}function Sn(t,e){new Array(t.length).fill(void 0).map((n,s)=>t.key(s)).forEach(n=>{n&&e(n)})}class Pn{constructor(){this.state={refreshToken:null,refreshTokenPayload:null,accessToken:null,accessTokenPayload:null},this.refreshTokenSubscribers=[],this.accessTokenSubscribers=[],this.initState(),this.afterRefreshTokenUpdate(this.refreshToken,!1),this.afterAccessTokenUpdate(this.accessToken,!1)}get refreshToken(){return this.state.refreshToken}set refreshToken(e){this.state.refreshToken=e,this.afterRefreshTokenUpdate(e)}get refreshTokenPayload(){return this.state.refreshTokenPayload}get accessToken(){return this.state.accessToken}set accessToken(e){this.state.accessToken=e,this.afterAccessTokenUpdate(e)}get accessTokenPayload(){return this.state.accessTokenPayload}get authenticated(){return!!this.accessToken}get scope(){return this.accessTokenPayload?.scope??null}get locale(){return this.accessTokenPayload?.locale??null}get instanceId(){return this.accessTokenPayload?.instanceId??null}resetAllTokens(){this.state.refreshToken=null,this.state.refreshTokenPayload=null,this.state.accessToken=null,this.state.accessTokenPayload=null,$n()}onRefreshTokenUpdate(e){return this.refreshTokenSubscribers.push(e),()=>{const n=this.refreshTokenSubscribers.findIndex(s=>s===e);this.refreshTokenSubscribers.splice(n,1)}}onAccessTokenUpdate(e){return this.accessTokenSubscribers.push(e),()=>{const n=this.accessTokenSubscribers.findIndex(s=>s===e);this.accessTokenSubscribers.splice(n,1)}}initState(){const e=wn(),n=e?mn(U(e).scope):null;this.state={refreshToken:n,refreshTokenPayload:null,accessToken:e,accessTokenPayload:null}}afterRefreshTokenUpdate(e,n=!0){const s=e?U(e):null;this.state.refreshTokenPayload=s,e&&s&&n&&vn(s.scope,e),this.notifyRefreshTokenSubscribers()}afterAccessTokenUpdate(e,n=!0){const s=e?U(e):null;this.state.accessTokenPayload=s,e&&s&&n&&(yn(s.scope,e),_n(e)),this.notifyAccessTokenSubscribers()}notifyRefreshTokenSubscribers(){this.refreshTokenSubscribers.forEach(e=>e(this.refreshTokenPayload))}notifyAccessTokenSubscribers(){this.accessTokenSubscribers.forEach(e=>e(this.accessTokenPayload))}}const M=new Pn,B=hn();if(typeof B?.apiServer!="string")throw new Error("Invalid 'apiServer' setting");async function Rn(){const t=`${B.apiServer}/UserSettings/?expand=AccessInfo`,e=await Z(t);return{roles:e?.AccessInfo?.Roles??[],permissions:e?.AccessInfo?.Permissions??[]}}async function In(){const t=`${B.apiServer}/Configurations/SchoolAppNavigation`,{instanceName:e,guiLanguage:n}=await Z(t);return{instanceName:e,allowedLocales:n}}function xs(){const t=`${B.apiServer}/TeacherSubstitutions/current`;return Z(t)}const ft="notificationData";async function Cs(){const t=`${B.apiServer}/UserSettings/Cst`,{Settings:e}=await Z(t),n=e.find(s=>s.Key===ft)?.Value;return n?JSON.parse(n):[]}function Ls(t){const e=`${B.apiServer}/UserSettings/Cst`,n={Id:"Cst",Settings:[{Key:ft,Value:JSON.stringify(t)}]};return Z(e,{method:"PATCH",body:JSON.stringify(n)},!0)}async function Z(t,{method:e="GET",body:n=void 0}={},s){const{accessToken:r}=M;if(!r)throw new Error("No token available");const i=new Headers({Authorization:`Bearer ${r}`,"Content-Type":"application/json"}),o=await fetch(t,{method:e,headers:i,body:n});if(!s)return o.json()}const En="modulepreload",Tn=function(t){return"/"+t},Qe={},xn=function(e,n,s){let r=Promise.resolve();if(n&&n.length>0){let l=function(u){return Promise.all(u.map(g=>Promise.resolve(g).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=o?.nonce||o?.getAttribute("nonce");r=l(n.map(u=>{if(u=Tn(u),u in Qe)return;Qe[u]=!0;const g=u.endsWith(".css"),h=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${h}`))return;const d=document.createElement("link");if(d.rel=g?"stylesheet":En,g||(d.as="script"),d.crossOrigin="",d.href=u,c&&d.setAttribute("nonce",c),document.head.appendChild(d),g)return new Promise((p,f)=>{d.addEventListener("load",p),d.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return r.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})},bt="de-CH",Cn=["fr-CH"],Oe=["de-CH","fr-CH"],{getLocale:Ln,setLocale:On}=nn({sourceLocale:bt,targetLocales:Cn,loadLocale:t=>xn(()=>import(`/locales/${t}.js`),[])});function zn(){const t=Un()??Kn()??Hn();return t&&Nn(t)?t:Dn()??bt}async function Mn(t){await On(t),document.documentElement.lang=t}function Un(){return new URL(location.href).searchParams.get(D)}function Nn(t){return Oe.includes(t)}function Dn(){const t=navigator.language.slice(0,2);return Oe.find(e=>e.startsWith(t))??null}function Kn(){const t=kn();return t?new URL(t).searchParams.get(D):null}function Hn(){const t=An();return t?U(t).locale:null}const Bn=[m.navigationHome,m.navigationMyProfile,m.navigationMySettings,m.navigationPhotoList,m.navigationInputGrades,...m.footer];function ze(t,e){const n=mt(t,({key:s})=>s===e);return n||{item:m.navigationHome,group:null}}function jn(t,e){return mt(t,n=>n.appPath!=="#/"&&e.startsWith(n.appPath))}function mt(t,e){let n=Bn.find(s=>e(s));if(n)return{item:n,group:null};for(const s of t)if(n=s.items.find(r=>e(r)),n)return{item:n,group:s};return null}function he(t){const e=m.apps.find(n=>n.key===t.appKey);if(!e)throw new Error(`Invalid app: ${t.appKey}`);return e}function Fn(t,e){const{item:n}=ze(t,e);return he(n).scope}function Wn(t,e,n){return t.reduce((s,r)=>{const i=r.items.filter(o=>Vn(o,e)&&Gn(o,n));return i.length>0?[...s,{...r,items:i}]:s},[])}function Vn(t,e){return t.deniedInstanceIds===null||t.deniedInstanceIds.includes(e)}function Gn(t,e){return t.allowedRolesOrPermissions===null||t.allowedRolesOrPermissions.some(n=>e.includes(n))}function qn(t){const e=new URL(location.href);Array.from(e.searchParams.keys()).forEach(s=>{t.includes(s)||e.searchParams.delete(s)}),history.replaceState({},"",e)}function Ze(t,e,n=!1){const s=new URL(location.href);s.searchParams.set(t,e),n?history.replaceState({},"",s):history.pushState({},"",s)}function Os(t){return t.slice(Math.max(t.indexOf("#"),0))}function zs(t,e=!1){const n=new URL(location.href);n.hash=t,e?history.replaceState({},"",n):history.pushState({},"",n)}function Ms(){const e=new URL(location.href).searchParams.get(K);return e?Fn(m.navigation,e):he(m.navigationHome).scope}function Yn(t){const e=typeof t=="string"?ze(_.navigation,t).item:t;return Xn(e).toString()}function Xn(t){const e=new URL(location.origin+location.pathname);return e.searchParams.set(D,_.locale),e.searchParams.set(K,t.key),e.hash=t.appPath,e}var Jn=Object.defineProperty,$=(t,e,n,s)=>{for(var r=void 0,i=t.length-1,o;i>=0;i--)(o=t[i])&&(r=o(e,n,r)||r);return r&&Jn(e,n,r),r};const D="locale",K="module",Qn=[D,K];class v extends ye{constructor(){super(...arguments),this.actualAppPath=null,this.setInitialized=()=>{},this.initialized=new Promise(e=>this.setInitialized=()=>e(null))}async init(){await this.loadInstanceInfo(),await this.handleStateChange("locale"),this.subscribe(this.handleStateChange.bind(this)),M.onAccessTokenUpdate(()=>this.updateNavigation()),await this.loadRolesAndPermissions(),this.setInitialized()}subscribeLocale(e){return e(this.locale),this.subscribe((n,s)=>e(s),"locale")}subscribeInstanceName(e){return this.subscribe((n,s)=>e(s),"instanceName")}subscribeNavigationItemKey(e){return e(this.navigationItemKey),this.subscribe((n,s)=>e(s),"navigationItemKey")}subscribeNavigationItem(e){return e(this.navigationItem),this.subscribe((n,s)=>e(s),"navigationItem")}subscribeScopeAndLocale(e,n=!1){return n||e(this.app.scope,this.locale),this.subscribe(()=>e(this.app.scope,this.locale),["app","locale"])}navigate(e){this.initialized.then(()=>{qn(Qn),this.locale=e.searchParams.get(D)||Ln(),this.navigationItemKey=e.searchParams.get(K)??m.navigationHome.key,e.hash&&e.hash!=="#"&&e.hash!=="#/"&&e.hash.startsWith(this.navigationItem.appPath)&&(this.appPath=e.hash)})}async handleStateChange(e){e==="locale"&&await this.updateLocale(),(e==="locale"||e==="navigationItemKey")&&bn(this.locale),(e==="rolesAndPermissions"||e==="locale")&&this.updateNavigation(),(e==="navigationItemKey"||e==="navigation")&&(this.updateNavigationItemAndGroup(this.navigationItemKey),this.updateApp(this.navigationItem))}async updateLocale(){this.allowedLocales.length>0&&!this.allowedLocales.includes(this.locale)&&(this.locale=this.allowedLocales[0]),Ze(D,this.locale);try{await Mn(this.locale)}catch(e){console.warn("Unable to fetch/update locale (this may happen when interrupted by a redirect):",e)}}updateNavigation(){const{instanceId:e}=M;e&&(this.navigation=Wn(m.navigation,e,M.accessTokenPayload?.substitutionRoles||this.rolesAndPermissions))}updateNavigationItemAndGroup(e){if(this.navigation.length>0){const{item:n,group:s}=ze(this.navigation,e);if(this.navigationItem=n,this.navigationGroup=s,this.actualAppPath&&this.actualAppPath!=="#"&&this.actualAppPath!=="#/"&&this.actualAppPath.startsWith(n.appPath))this.appPath=this.actualAppPath;else{const r=jn(this.navigation,this.appPath);this.navigationItem!==r?.item&&(this.appPath=n.appPath)}this.actualAppPath=null,this.updateHashFromAppPath(),n.key===m.navigationHome.key&&n.key!==e&&(this.navigationItemKey=n.key)}Ze(K,this.navigationItemKey)}updateHashFromAppPath(){const e=new URL(document.location.href);e.hash=this.appPath,history.replaceState({},"",e)}updateApp(e){this.app=he(e)}async loadRolesAndPermissions(){if(!M.authenticated)return;const{roles:e,permissions:n}=await Rn();this.rolesAndPermissions=[...e,...n]}async loadInstanceInfo(){if(M.authenticated)try{const{instanceName:e,allowedLocales:n}=await In();this.allowedLocales=n,this.instanceName=["Evento",e].filter(Boolean).join(" | ")}catch(e){console.warn("Unable to fetch/update instance name (this may happen when interrupted by a redirect):",e)}}}$([y({value:zn()})],v.prototype,"locale");$([y({value:[]})],v.prototype,"rolesAndPermissions");$([y({value:""})],v.prototype,"instanceName");$([y({value:[]})],v.prototype,"allowedLocales");$([y({value:[]})],v.prototype,"navigation");$([cn({parameter:K}),y({value:null})],v.prototype,"navigationItemKey");$([y({value:null})],v.prototype,"navigationGroup");$([y({value:m.navigationHome})],v.prototype,"navigationItem");$([y({value:he(m.navigationHome)})],v.prototype,"app");$([y({value:m.navigationHome.appPath})],v.prototype,"appPath");const _=new v,Zn=O`
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
`,es=O`
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
`,ee=O`
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
`,Me=O`
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
`;function Us(t){const e=document.createElement("style");e.innerText=t,document.querySelector("body")?.appendChild(e)}const Ns=(t,e,n)=>{for(const s of e)if(s[0]===t)return(0,s[1])();return n?.()};const vt={ATTRIBUTE:1,CHILD:2},yt=t=>(...e)=>({_$litDirective$:t,values:e});class $t{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,s){this._$Ct=e,this._$AM=n,this._$Ci=s}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}}const{I:ts}=Kt,et=()=>document.createComment(""),F=(t,e,n)=>{const s=t._$AA.parentNode,r=e===void 0?t._$AB:e._$AA;if(n===void 0){const i=s.insertBefore(et(),r),o=s.insertBefore(et(),r);n=new ts(i,o,t,t.options)}else{const i=n._$AB.nextSibling,o=n._$AM,c=o!==t;if(c){let l;n._$AQ?.(t),n._$AM=t,n._$AP!==void 0&&(l=t._$AU)!==o._$AU&&n._$AP(l)}if(i!==r||c){let l=n._$AA;for(;l!==i;){const u=l.nextSibling;s.insertBefore(l,r),l=u}}}return n},E=(t,e,n=t)=>(t._$AI(e,n),t),ns={},ss=(t,e=ns)=>t._$AH=e,rs=t=>t._$AH,fe=t=>{t._$AP?.(!1,!0);let e=t._$AA;const n=t._$AB.nextSibling;for(;e!==n;){const s=e.nextSibling;e.remove(),e=s}};var is=Object.getOwnPropertyDescriptor,os=(t,e,n,s)=>{for(var r=s>1?void 0:s?is(e,n):e,i=t.length-1,o;i>=0;i--)(o=t[i])&&(r=o(r)||r);return r};let we=class extends k{render(){return P`<p>
      ${a("Lernende, Lehrpersonen und Schulmitarbeitende wenden sich bei Fehlermeldungen in Evento Web oder Fragen zu dieser Fachapplikation an die zuständige Stelle in ihrer Schule. Diese wird von der Schule kommuniziert. Im Zweifelsfall kontaktieren Sie bitte das Schulsekretariat.")}
    </p>`}};we.styles=[ee,Me];we=os([J("bkd-contact"),Q()],we);function*as(t,e){const n=typeof e=="function";if(t!==void 0){let s=-1;for(const r of t)s>-1&&(yield n?e(s):e),s++,yield r}}function oe(t){return as(t?.split(`
`),P`<br />`)}var ls=Object.getOwnPropertyDescriptor,cs=(t,e,n,s)=>{for(var r=s>1?void 0:s?ls(e,n):e,i=t.length-1,o;i>=0;i--)(o=t[i])&&(r=o(r)||r);return r};let Ae=class extends k{constructor(){super(),new xe(this,_)}render(){return P`
      <div class="content-section">
        <h2>${a("Inhaltsverantwortung")}</h2>
        <p>${a("Zuständige Schule, siehe Kontakt")}</p>
      </div>

      <div class="content-section">
        <h2>${a("Fachapplikation")}</h2>
        <p>
          ${oe(a(`Bildungs- und Kulturdirektion des Kantons Bern
Mittelschul- und Berufsbildungsamt
Fachbereich Informatikanwendungen
Kasernenstrasse 27
3013 Bern`))}
        </p>
        <p><a href="mailto:fbi.mba@be.ch">${a("E-Mail")}</a></p>
      </div>

      <div class="content-section">
        <h2>${a("Betrieb und Technik")}</h2>
        <p>
          ${oe(a(`Bedag Informatik AG
Engehaldenstrasse 12
3012 Bern`))}
        </p>
        <p>
          <a href="https://www.bedag.ch/" target="_blank">www.bedag.ch</a>
        </p>
      </div>
    `}};Ae.styles=[ee,Me];Ae=cs([J("bkd-imprint"),Q()],Ae);var hs=Object.getOwnPropertyDescriptor,us=(t,e,n,s)=>{for(var r=s>1?void 0:s?hs(e,n):e,i=t.length-1,o;i>=0;i--)(o=t[i])&&(r=o(r)||r);return r};let _e=class extends k{render(){return P`
      <div class="content-section">
        <h2>${a("Haftungsausschluss")}</h2>
        <p>
          ${a("Die Inhalte dieser Fachapplikation sind ein Datenangebot der zuständigen Schule. Obwohl diese die Daten regelmässig auf Richtigkeit und Aktualität hin prüft, lehnen wir, soweit gesetzlich zulässig, jede Haftung für unerwünschte Folgen aus dem Gebrauch dieser Daten ab.")}
        </p>
        <p>
          ${a("Diese Fachapplikation enthält Links zu Angeboten von Dritten. Sie benutzen diese Links auf eigenes Risiko. Für die Inhalte dieser anderen Webseiten übernehmen wir keine Verantwortung. Von unserer Haftung ausgeschlossen ist namentlich die Garantie für die ständige Verfügbarkeit unserer Fachapplikation sowie Schäden (z.B. wegen Verbindungsunterbruch oder schädlicher Software), die durch die Benutzung dieser Fachapplikation entstehen könnten.")}
        </p>
      </div>

      <div class="content-section">
        <h2>${a("Immaterialgüterrechte")}</h2>
        <p>
          ${a("Sichtbare Elemente (Bilder/Icons) dieser Fachapplikation können Dritten gehören. Diese Elemente dürfen deshalb grundsätzlich nicht verwendet werden. Der Kanton Bern kann deren Verwendung ausserhalb der Webseite auf Anfrage erlauben, sofern er dazu selbst berechtigt ist. Für solche Anfragen wenden Sie sich bitte an die Stelle, die für die Fachapplikation verantwortlich ist. Die Kontaktangaben finden Sie im Impressum.")}
        </p>
      </div>

      <div class="content-section">
        <h2>${a("Datenschutzerklärung")}</h2>
        <p>
          ${a("Verantwortliche Stelle im Sinne der Datenschutzgesetze, unter anderem auch der EU-Datenschutzgrundverordnung (DSGVO), ist:")}
        </p>
        <p>
          ${oe(a(`Mittelschul- und Berufsbildungsamt
Kasernenstrasse 27
3013 Bern`))}
        </p>
        <p><a href="mailto:fbi.mba@be.ch">${a("E-Mail")}</a></p>
        <p>
          <a href="${a("https://www.be.ch/mba")}" target="_blank"
            >${a("https://www.be.ch/mba").replace("https://","")}</a
          >
        </p>
      </div>

      <div class="content-section">
        <h2>${a("Datenbearbeitung")}</h2>
        <p>
          ${a("Der zum Betrieb dieser Fachapplikation eingesetzte Leistungserbringer des Kantons Bern bearbeitet teilweise die IP-Adresse oder technische Angaben der Endgeräte von Personen, die diese Webseite besuchen. Der Leistungserbringer untersteht einer Datenschutzgesetzgebung mit einem dem Berner Recht gleichwertigem Datenschutzniveau. Die IP-Adresse wird verschlüsselt übertragen und vor der weiteren Bearbeitung anonymisiert.")}
        </p>
        <p>
          ${a("Mit der Benutzung dieser Fachapplikation stimmen Sie dieser Datenbearbeitung soweit erforderlich zu. Sie erfolgt im Einzelnen wie folgt:")}
        </p>
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>${a("Leistungserbringer")}</th>
                <th>${a("Bearbeitete Daten")}</th>
                <th>${a("Grund der Bearbeitung")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th style="white-space: nowrap;">
                  ${oe(a(`Bedag Informatik AG
Engehaldenstrasse 12
3012 Bern`))}
                </th>
                <td>
                  ${a("IP-Adresse, technische Angaben zum Betriebssystem und Webbrowser, Referrer-URL, Hostname, Uhrzeit")}
                </td>
                <td>
                  ${a("Logdaten des Webserves des Kantons Bern zum Erkennen und Beheben von technischen Störungen und Angriffen.")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="content-section">
        <h2>${a("Cookies")}</h2>
        <p>${a("Diese Webseite setzt keine Cookies ein.")}</p>
      </div>

      <div class="content-section">
        <h2>${a("Soziale Medien")}</h2>
        <p>
          ${a("Soweit diese Fachapplikation auf soziale Medien wie YouTube verweist, geschieht das nur durch Links, nicht etwa durch das Ausführen von Programmen (Plug-ins). Mit dem Aufrufen dieser Fachapplikation werden daher keine Personendaten an die sozialen Medien übertragen.")}
        </p>
      </div>

      <div class="content-section">
        <h2>${a("Kontakt bei Fragen")}</h2>
        <p>
          ${a("Wenn Sie Fragen zum Datenschutz im Zusammenhang mit dieser Fachapplikation haben, können Sie sich an die Stelle wenden, die für die Fachapplikation verantwortlich ist. Die Kontaktangaben finden Sie im Impressum.")}
        </p>
      </div>
    `}};_e.styles=[ee,Me,O`
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
    `];_e=us([J("bkd-legal"),Q()],_e);const tt=(t,e,n)=>{const s=new Map;for(let r=e;r<=n;r++)s.set(t[r],r);return s},ds=yt(class extends $t{constructor(t){if(super(t),t.type!==vt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,n){let s;n===void 0?n=e:e!==void 0&&(s=e);const r=[],i=[];let o=0;for(const c of t)r[o]=s?s(c,o):o,i[o]=n(c,o),o++;return{values:i,keys:r}}render(t,e,n){return this.dt(t,e,n).values}update(t,[e,n,s]){const r=rs(t),{values:i,keys:o}=this.dt(e,n,s);if(!Array.isArray(r))return this.ut=o,i;const c=this.ut??=[],l=[];let u,g,h=0,d=r.length-1,p=0,f=i.length-1;for(;h<=d&&p<=f;)if(r[h]===null)h++;else if(r[d]===null)d--;else if(c[h]===o[p])l[p]=E(r[h],i[p]),h++,p++;else if(c[d]===o[f])l[f]=E(r[d],i[f]),d--,f--;else if(c[h]===o[f])l[f]=E(r[h],i[f]),F(t,l[f+1],r[h]),h++,f--;else if(c[d]===o[p])l[p]=E(r[d],i[p]),F(t,r[h],r[d]),d--,p++;else if(u===void 0&&(u=tt(o,p,f),g=tt(c,h,d)),u.has(c[h]))if(u.has(c[d])){const w=g.get(o[p]),ue=w!==void 0?r[w]:null;if(ue===null){const Ne=F(t,r[h]);E(Ne,i[p]),l[p]=Ne}else l[p]=E(ue,i[p]),F(t,r[h],ue),r[w]=null;p++}else fe(r[d]),d--;else fe(r[h]),h++;for(;p<=f;){const w=F(t,l[f+1]);E(w,i[p]),l[p++]=w}for(;h<=d;){const w=r[h++];w!==null&&fe(w)}return this.ut=o,ss(t,l),R}});var ps=Object.getOwnPropertyDescriptor,gs=(t,e,n,s)=>{for(var r=s>1?void 0:s?ps(e,n):e,i=t.length-1,o;i>=0;i--)(o=t[i])&&(r=o(r)||r);return r};let ke=class extends k{constructor(){super(),new xe(this,_)}renderFooterLink(t){const e=Yn(t);return P`
      <a
        href=${e}
        @click=${n=>{n?.preventDefault(),_.navigate(new URL(e))}}
        >${t.label}</a
      >
    `}render(){return P`
      <footer role="contentinfo">
        <div class="copyright">${a("© Bildungs- und Kulturdirektion")}</div>
        <div class="footer-nav">
          ${ds(m.footer,t=>t.key,this.renderFooterLink.bind(this))}
        </div>
      </footer>
    `}};ke.styles=[ee,O`
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
    `];ke=gs([J("bkd-footer"),Q()],ke);const fs=yt(class extends $t{constructor(t){if(super(t),t.type!==vt.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((s=>s!==""))));for(const s in e)e[s]&&!this.nt?.has(s)&&this.st.add(s);return this.render(e)}const n=t.element.classList;for(const s of this.st)s in e||(n.remove(s),this.st.delete(s));for(const s in e){const r=!!e[s];r===this.st.has(s)||this.nt?.has(s)||(r?(n.add(s),this.st.add(s)):(n.remove(s),this.st.delete(s)))}return R}});var bs=Object.getOwnPropertyDescriptor,ms=(t,e,n,s)=>{for(var r=s>1?void 0:s?bs(e,n):e,i=t.length-1,o;i>=0;i--)(o=t[i])&&(r=o(r)||r);return r};let Se=class extends k{constructor(){super(),new xe(this,_)}handleLocaleChange(t,e){t.preventDefault(),_.locale=e}render(){return P`<ul>
      ${Oe.map(t=>P`<li>
            <a
              href="#"
              class=${fs({active:t===_.locale})}
              aria-current=${t===_.locale}
              @click=${e=>this.handleLocaleChange(e,t)}
            >
              ${t.slice(0,2)}
            </a>
          </li>`)}
    </ul>`}};Se.styles=[ee,O`
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
    `];Se=ms([J("bkd-language-switcher"),Q()],Se);export{a as A,As as B,J as C,Q as D,b as E,vt as F,R as G,ze as H,fs as I,ds as J,Ls as K,D as L,Cs as M,xs as N,zn as O,Ms as P,Us as Q,es as R,xe as S,un as T,Zn as U,zs as V,Os as W,jn as X,he as Y,xn as _,Is as a,mn as b,U as c,hn as d,Es as e,st as f,Ss as g,Ps as h,ks as i,dn as j,Yn as k,m as l,_s as m,Ts as n,yt as o,_ as p,$t as q,ss as r,Rs as s,M as t,be as u,ee as v,O as w,k as x,P as y,Ns as z};
