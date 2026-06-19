(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=globalThis,t=e.ShadowRoot&&(e.ShadyCSS===void 0||e.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap,i=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,n=this.t;if(t&&e===void 0){let t=n!==void 0&&n.length===1;t&&(e=r.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(n,e))}return e}toString(){return this.cssText}},a=e=>new i(typeof e==`string`?e:e+``,void 0,n),o=(e,...t)=>new i(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,n),s=(n,r)=>{if(t)n.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let t of r){let r=document.createElement(`style`),i=e.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=t.cssText,n.appendChild(r)}},c=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return a(t)})(e):e,{is:l,defineProperty:u,getOwnPropertyDescriptor:d,getOwnPropertyNames:f,getOwnPropertySymbols:p,getPrototypeOf:m}=Object,ee=globalThis,te=ee.trustedTypes,ne=te?te.emptyScript:``,re=ee.reactiveElementPolyfillSupport,h=(e,t)=>e,ie={toAttribute(e,t){switch(t){case Boolean:e=e?ne:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ae=(e,t)=>!l(e,t),oe={attribute:!0,type:String,converter:ie,reflect:!1,useDefault:!1,hasChanged:ae};Symbol.metadata??=Symbol(`metadata`),ee.litPropertyMetadata??=new WeakMap;var g=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=oe){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&u(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??oe}static _$Ei(){if(this.hasOwnProperty(h(`elementProperties`)))return;let e=m(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(h(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(h(`properties`))){let e=this.properties,t=[...f(e),...p(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(c(e))}else e!==void 0&&t.push(c(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return s(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?ie:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?ie:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??ae)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};g.elementStyles=[],g.shadowRootOptions={mode:`open`},g[h(`elementProperties`)]=new Map,g[h(`finalized`)]=new Map,re?.({ReactiveElement:g}),(ee.reactiveElementVersions??=[]).push(`2.1.2`);var se=globalThis,ce=e=>e,le=se.trustedTypes,ue=le?le.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,de=`$lit$`,_=`lit$${Math.random().toFixed(9).slice(2)}$`,fe=`?`+_,pe=`<${fe}>`,v=document,y=()=>v.createComment(``),b=e=>e===null||typeof e!=`object`&&typeof e!=`function`,me=Array.isArray,he=e=>me(e)||typeof e?.[Symbol.iterator]==`function`,ge=`[ 	
\f\r]`,x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_e=/-->/g,ve=/>/g,S=RegExp(`>|${ge}(?:([^\\s"'>=/]+)(${ge}*=${ge}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),ye=/'/g,be=/"/g,xe=/^(?:script|style|textarea|title)$/i,C=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),w=Symbol.for(`lit-noChange`),T=Symbol.for(`lit-nothing`),Se=new WeakMap,E=v.createTreeWalker(v,129);function Ce(e,t){if(!me(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return ue===void 0?t:ue.createHTML(t)}var we=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=x;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===x?c[1]===`!--`?o=_e:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=S):(xe.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=S):o=ve:o===S?c[0]===`>`?(o=i??x,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?S:c[3]===`"`?be:ye):o===be||o===ye?o=S:o===_e||o===ve?o=x:(o=S,i=void 0);let d=o===S&&e[t+1].startsWith(`/>`)?` `:``;a+=o===x?n+pe:l>=0?(r.push(s),n.slice(0,l)+de+n.slice(l)+_+d):n+_+(l===-2?t:d)}return[Ce(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},Te=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=we(t,n);if(this.el=e.createElement(l,r),E.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=E.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(de)){let t=u[o++],n=i.getAttribute(e).split(_),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Oe:r[1]===`?`?ke:r[1]===`@`?Ae:O}),i.removeAttribute(e)}else e.startsWith(_)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(xe.test(i.tagName)){let e=i.textContent.split(_),t=e.length-1;if(t>0){i.textContent=le?le.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],y()),E.nextNode(),c.push({type:2,index:++a});i.append(e[t],y())}}}else if(i.nodeType===8)if(i.data===fe)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(_,e+1))!==-1;)c.push({type:7,index:a}),e+=_.length-1}a++}}static createElement(e,t){let n=v.createElement(`template`);return n.innerHTML=e,n}};function D(e,t,n=e,r){if(t===w)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=b(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=D(e,i._$AS(e,t.values),i,r)),t}var Ee=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??v).importNode(t,!0);E.currentNode=r;let i=E.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new De(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new je(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=E.nextNode(),a++)}return E.currentNode=v,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},De=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=D(this,e,t),b(e)?e===T||e==null||e===``?(this._$AH!==T&&this._$AR(),this._$AH=T):e!==this._$AH&&e!==w&&this._(e):e._$litType$===void 0?e.nodeType===void 0?he(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==T&&b(this._$AH)?this._$AA.nextSibling.data=e:this.T(v.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Te.createElement(Ce(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Ee(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Se.get(e.strings);return t===void 0&&Se.set(e.strings,t=new Te(e)),t}k(t){me(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(y()),this.O(y()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=ce(e).nextSibling;ce(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},O=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=T,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=T}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=D(this,e,t,0),a=!b(e)||e!==this._$AH&&e!==w,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=D(this,r[n+o],t,o),s===w&&(s=this._$AH[o]),a||=!b(s)||s!==this._$AH[o],s===T?e=T:e!==T&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Oe=class extends O{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===T?void 0:e}},ke=class extends O{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==T)}},Ae=class extends O{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=D(this,e,t,0)??T)===w)return;let n=this._$AH,r=e===T&&n!==T||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==T&&(n===T||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},je=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){D(this,e)}},Me={M:de,P:_,A:fe,C:1,L:we,R:Ee,D:he,V:D,I:De,H:O,N:ke,U:Ae,B:Oe,F:je},Ne=se.litHtmlPolyfillSupport;Ne?.(Te,De),(se.litHtmlVersions??=[]).push(`3.3.2`);var Pe=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new De(t.insertBefore(y(),e),e,void 0,n??{})}return i._$AI(e),i},Fe=globalThis,k=class extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Pe(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return w}};k._$litElement$=!0,k.finalized=!0,Fe.litElementHydrateSupport?.({LitElement:k});var Ie=Fe.litElementPolyfillSupport;Ie?.({LitElement:k}),(Fe.litElementVersions??=[]).push(`4.2.2`);var A=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},Le={attribute:!0,type:String,converter:ie,reflect:!1,hasChanged:ae},Re=(e=Le,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function ze(e){return(t,n)=>typeof n==`object`?Re(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function Be(e){return ze({...e,state:!0,attribute:!1})}var Ve=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);function He(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return Ve(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return Ve(n,r,{get(){return a(this)}})}}function Ue(e,t,n){return e?t(e):n?.(e)}var We=`lit-localize-status`,Ge=e=>typeof e!=`string`&&`strTag`in e,Ke=(e,t,n)=>{let r=e[0];for(let i=1;i<e.length;i++)r+=t[n?n[i-1]:i-1],r+=e[i];return r},qe=(e=>Ge(e)?Ke(e.strings,e.values):e),j=qe,Je=!1;function Ye(e){if(Je)throw Error(`lit-localize can only be configured once`);j=e,Je=!0}var Xe=class{constructor(e){this.__litLocalizeEventHandler=e=>{e.detail.status===`ready`&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(We,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(We,this.__litLocalizeEventHandler)}},Ze=e=>e.addController(new Xe(e)),M=()=>(e,t)=>(e.addInitializer(Ze),e),Qe=class{constructor(){this.settled=!1,this.promise=new Promise((e,t)=>{this._resolve=e,this._reject=t})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}},N=[];for(let e=0;e<256;e++)N[e]=(e>>4&15).toString(16)+(e&15).toString(16);function $e(e){let t=0,n=8997,r=0,i=33826,a=0,o=40164,s=0,c=52210;for(let l=0;l<e.length;l++)n^=e.charCodeAt(l),t=n*435,r=i*435,a=o*435,s=c*435,a+=n<<8,s+=i<<8,r+=t>>>16,n=t&65535,a+=r>>>16,i=r&65535,c=s+(a>>>16)&65535,o=a&65535;return N[c>>8]+N[c&255]+N[o>>8]+N[o&255]+N[i>>8]+N[i&255]+N[n>>8]+N[n&255]}var et=`h`,tt=`s`;function nt(e,t){return(t?et:tt)+$e(typeof e==`string`?e:e.join(``))}var rt=new WeakMap,it=new Map;function at(e,t,n){if(e){let r=e[n?.id??ot(t)];if(r){if(typeof r==`string`)return r;if(`strTag`in r)return Ke(r.strings,t.values,r.values);{let e=rt.get(r);return e===void 0&&(e=r.values,rt.set(r,e)),{...r,values:e.map(e=>t.values[e])}}}}return qe(t)}function ot(e){let t=typeof e==`string`?e:e.strings,n=it.get(t);return n===void 0&&(n=nt(t,typeof e!=`string`&&!(`strTag`in e)),it.set(t,n)),n}function st(e){window.dispatchEvent(new CustomEvent(We,{detail:e}))}var ct=``,lt,ut,dt,ft,pt,P=new Qe;P.resolve();var mt=0,ht=e=>(Ye(((e,t)=>at(pt,e,t))),ct=ut=e.sourceLocale,dt=new Set(e.targetLocales),dt.add(e.sourceLocale),ft=e.loadLocale,{getLocale:gt,setLocale:_t}),gt=()=>ct,_t=e=>{if(e===(lt??ct))return P.promise;if(!dt||!ft)throw Error(`Internal error`);if(!dt.has(e))throw Error(`Invalid locale code`);mt++;let t=mt;return lt=e,P.settled&&(P=new Qe),st({status:`loading`,loadingLocale:e}),(e===ut?Promise.resolve({templates:void 0}):ft(e)).then(n=>{mt===t&&(ct=e,lt=void 0,pt=n.templates,st({status:`ready`,readyLocale:e}),P.resolve())},n=>{mt===t&&(st({status:`error`,errorLocale:e,errorMessage:n.toString()}),P.reject(n))}),P.promise};function vt(e){return typeof e==`function`?e():e}var F=class e extends Event{static{this.eventName=`lit-state-changed`}constructor(t,n,r){super(e.eventName,{cancelable:!1}),this.key=t,this.value=n,this.state=r}},yt=(e,t)=>t!==e&&(t===t||e===e),bt=class extends EventTarget{static{this.finalized=!1}static initPropertyMap(){this.propertyMap||=new Map}get propertyMap(){return this.constructor.propertyMap}get stateValue(){return Object.fromEntries([...this.propertyMap].map(([e])=>[e,this[e]]))}constructor(){super(),this.hookMap=new Map,this.constructor.finalize(),this.propertyMap&&[...this.propertyMap].forEach(([e,t])=>{if(t.initialValue!==void 0){let n=vt(t.initialValue);this[e]=n,t.value=n}})}static finalize(){if(this.finalized)return!1;this.finalized=!0;let e=Object.keys(this.properties||{});for(let t of e)this.createProperty(t,this.properties[t]);return!0}static createProperty(e,t){this.finalize();let n=typeof e==`symbol`?Symbol():`__${e}`,r=this.getPropertyDescriptor(String(e),n,t);Object.defineProperty(this.prototype,e,r)}static getPropertyDescriptor(e,t,n){let r=n?.hasChanged||yt;return{get(){return this[t]},set(n){let i=this[e];this[t]=n,r(n,i)===!0&&this.dispatchStateEvent(e,n,this)},configurable:!0,enumerable:!0}}reset(){this.hookMap.forEach(e=>e.reset()),[...this.propertyMap].filter(([e,t])=>!(t.skipReset===!0||t.resetValue===void 0)).forEach(([e,t])=>{this[e]=t.resetValue})}subscribe(e,t,n){t&&!Array.isArray(t)&&(t=[t]);let r=n=>{(!t||t.includes(n.key))&&e(n.key,n.value,this)};return this.addEventListener(F.eventName,r,n),()=>this.removeEventListener(F.eventName,r)}dispatchStateEvent(e,t,n){this.dispatchEvent(new F(e,t,n))}},xt=`DONOTUSE`;(class{static{this.hookName=xt}constructor(e){if(this.state=e,!this.constructor.hookName||this.constructor.hookName===xt)throw Error(`hook subclass must have their own hookName`);this.unsubscribe=this.subscribe(),e.hookMap.set(this.constructor.hookName,this)}subscribe(){return this.state.subscribe(this.fromState.bind(this),this.hookedProps.map(([e])=>e))}get hookedProps(){let e=Object.getPrototypeOf(this.state);return e.propertyMap||e.initPropertyMap(),[...e.propertyMap].filter(([,e])=>e?.hook&&e?.hook[this.constructor.hookName])}isHookedProp(e){return this.getDefinition(e)?.hook?.[this.constructor.hookName]}getDefinition(e){return this.state.propertyMap.get(e)}toState(e){Object.entries(e).filter(([e])=>this.isHookedProp(e)).forEach(([e,t])=>this.state[e]=t)}fromState(e,t,n){throw`fromState must be implemented in subclasses`}reset(){throw`reset hook must be implemented in subclasses`}});var St=class{constructor(e,t,n){this.host=e,this.state=t,this.callback=n||(()=>this.host.requestUpdate()),this.host.addController(this)}hostConnected(){this.state.addEventListener(F.eventName,this.callback),this.callback()}hostDisconnected(){this.state.removeEventListener(F.eventName,this.callback)}};function I(e){return(t,n)=>{if(Object.getOwnPropertyDescriptor(t,n))throw Error(`@property must be called before all state decorators`);let r=t.constructor;r.initPropertyMap();let i=t.hasOwnProperty(n);return r.propertyMap.set(n,{...e,initialValue:e?.value,resetValue:e?.value}),r.createProperty(n,e),i?Object.getOwnPropertyDescriptor(t,n):void 0}}function Ct(e,t){if(e!==null&&(t===Boolean||t===Number||t===Array||t===Object))try{e=JSON.parse(e)}catch{console.warn(`cannot parse value`,e)}return e}var wt=new URL(location.href);function Tt(e){return(t,n)=>{if(!Object.getOwnPropertyDescriptor(t,n))throw Error(`@local-storage decorator need to be called after @property`);let r=t.constructor,i=`${e?.parameter||String(n)}`,a=r.propertyMap.get(n),o=a?.type;if(a){let t=a.initialValue,s=wt.searchParams.get(i);s!==null&&(a.skipAsync=!0),a.initialValue=()=>Ct(s,o)??vt(t),r.propertyMap.set(n,{...a,...e});return}}}var L={apps:[{key:`schulverwaltung`,scope:`Tutoring`,root:`apps/webapp-schulverwaltung/index.html`,heading:!1},{key:`schulverwaltungScopeNg`,scope:`NG`,root:`apps/webapp-schulverwaltung/index.html`,heading:!1},{key:`schulleiterPersonen`,scope:`NG`,root:`apps/EmberApps/SchulleiterPersonen/index.html`,heading:!0},{key:`fotoliste`,scope:`Tutoring`,root:`apps/EmberApps/Fotoliste/index.html`,heading:!1},{key:`kursausschreibung`,scope:`Public`,root:`apps/Kursausschreibung/index.html`,heading:!0},{key:`kursausschreibungIntern`,scope:`Public`,root:`apps/Kursausschreibung/indexIntern.html`,heading:!0},{key:`stellvertretung`,scope:`Tutoring`,root:`apps/Stellvertretung/index.html`,heading:!0},{key:`reservation`,scope:`NG`,root:`apps/Raumreservation/index.html`,heading:!0},{key:`noteneingabe`,scope:`Tutoring`,root:`apps/Noteneingabe/index.html`,heading:!1},{key:`footer`,scope:`Public`,root:``,heading:!0}],navigationHome:{key:`home`,label:`Home`,allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:`schulverwaltung`,appPath:`#/dashboard`},navigationPhotoList:{key:`photoList`,get label(){return j(`Fotoliste`)},allowedRolesOrPermissions:[`TeacherRole`],deniedInstanceIds:null,appKey:`fotoliste`,appPath:`#/`},navigationInputGrades:{key:`inputGrades`,get label(){return j(`Noteneingabe`)},allowedRolesOrPermissions:[`TeacherRole`],deniedInstanceIds:null,appKey:`noteneingabe`,appPath:`#/`},navigationMyProfile:{key:`myProfile`,get label(){return j(`Mein Profil`)},allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:`schulverwaltung`,appPath:`#/my-profile`},navigationMySettings:{key:`mySettings`,get label(){return j(`Einstellungen`)},allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:`schulverwaltung`,appPath:`#/my-settings`},navigation:[{get label(){return j(`Unterricht`)},items:[{key:`presenceControl`,get label(){return j(`Präsenzkontrolle`)},allowedRolesOrPermissions:[`TeacherRole`,`LessonTeacherRole`],deniedInstanceIds:null,appKey:`schulverwaltung`,appPath:`#/presence-control`},{key:`currentEvents`,get label(){return j(`Aktuelle Fächer`)},allowedRolesOrPermissions:[`TeacherRole`,`LessonTeacherRole`,`ClassTeacherRole`],deniedInstanceIds:null,appKey:`schulverwaltung`,appPath:`#/events/current`},{key:`tests`,get label(){return j(`Tests und Bewertung`)},allowedRolesOrPermissions:[`TeacherRole`,`LessonTeacherRole`],deniedInstanceIds:null,appKey:`schulverwaltung`,appPath:`#/events`},{key:`substitutionsAssign`,get label(){return j(`Stellvertretung erfassen`)},allowedRolesOrPermissions:[`TeacherRole`,`LessonTeacherRole`],deniedInstanceIds:null,appKey:`stellvertretung`,appPath:`#/substitutions/assign`},{key:`substitutionsExecute`,get label(){return j(`Stellvertretung ausüben`)},allowedRolesOrPermissions:[`TeacherRole`,`LessonTeacherRole`],deniedInstanceIds:null,appKey:`stellvertretung`,appPath:`#/substitutions/execute`}]},{get label(){return j(`Absenzen`)},items:[{key:`openAbsences`,get label(){return j(`Offene Absenzen entschuldigen`)},allowedRolesOrPermissions:[`TeacherRole`,`LessonTeacherRole`,`ClassTeacherRole`],deniedInstanceIds:null,appKey:`schulverwaltung`,appPath:`#/open-absences`},{key:`editAbsences`,get label(){return j(`Absenzen bearbeiten`)},allowedRolesOrPermissions:[`TeacherRole`,`LessonTeacherRole`,`ClassTeacherRole`,`AbsenceAdministratorRole`],deniedInstanceIds:null,appKey:`schulverwaltung`,appPath:`#/edit-absences`},{key:`evaluateAbsences`,get label(){return j(`Absenzen auswerten`)},allowedRolesOrPermissions:[`TeacherRole`,`LessonTeacherRole`,`ClassTeacherRole`,`AbsenceAdministratorRole`],deniedInstanceIds:null,appKey:`schulverwaltung`,appPath:`#/evaluate-absences`}]},{get label(){return j(`Aus-/Weiterbildung`)},items:[{key:`myAbsences`,get label(){return j(`Absenzen`)},allowedRolesOrPermissions:[`StudentRole`],deniedInstanceIds:null,appKey:`schulverwaltung`,appPath:`#/my-absences`},{key:`myGrades`,get label(){return j(`Noten`)},allowedRolesOrPermissions:[`StudentRole`],deniedInstanceIds:null,appKey:`schulverwaltung`,appPath:`#/my-grades`},{key:`myDossier`,get label(){return j(`Dossier`)},allowedRolesOrPermissions:[`StudentRole`],deniedInstanceIds:null,appKey:`schulverwaltung`,appPath:`#/my-dossier`}]},{get label(){return j(`Angebote`)},items:[{key:`coursesAndEvents`,get label(){return j(`Kurse und Veranstaltungen`)},allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:`kursausschreibung`,appPath:`#/`},{key:`internalTraining`,get label(){return j(`Schulinterne Weiterbildung`)},allowedRolesOrPermissions:[`TeacherRole`,`LessonTeacherRole`,`ClassTeacherRole`,`AbsenceAdministratorRole`,`SubstituteAdministratorRole`,`Reservations`],deniedInstanceIds:null,appKey:`kursausschreibungIntern`,appPath:`#/`},{key:`reservations`,get label(){return j(`Räume und Geräte reservieren`)},allowedRolesOrPermissions:[`Reservations`],deniedInstanceIds:null,appKey:`reservation`,appPath:`#/`}]},{get label(){return j(`Administration`)},items:[{key:`substitutionsAdmin`,get label(){return j(`Stellvertretungen administrieren`)},allowedRolesOrPermissions:[`SubstituteAdministratorRole`],deniedInstanceIds:null,appKey:`stellvertretung`,appPath:`#/substitutions/admin`},{key:`personSearch`,get label(){return j(`Personen und Institutionen suchen`)},allowedRolesOrPermissions:[`PersonRight`],deniedInstanceIds:null,appKey:`schulleiterPersonen`,appPath:`#/persons`},{key:`studyCourses`,get label(){return j(`Aufnahmeverfahren`)},allowedRolesOrPermissions:[`RegistrationRightWeiterbildungMAS`,`RegistrationRightAusbildungStudiengang`],deniedInstanceIds:null,appKey:`schulverwaltungScopeNg`,appPath:`#/events/study-courses`},{key:`import`,get label(){return j(`Daten einlesen`)},allowedRolesOrPermissions:[`PersonRight`,`RegistrationRightAusbildungSemester`,`RegistrationRightAusbildungKurs`,`RegistrationRightAusbildungModulanlass`,`RegistrationRightAusbildungModul`,`RegistrationRightAusbildungStudiengang`,`RegistrationRightAusbildungStudienjahrgang`,`RegistrationRightAusbildungVeranstaltung`,`RegistrationRightWeiterbildungCAS`,`RegistrationRightWeiterbildungCASAnlass`,`RegistrationRightWeiterbildungDAS`,`RegistrationRightWeiterbildungDASJahrgang`,`RegistrationRightWeiterbildungInteressent`,`RegistrationRightWeiterbildungKurs`,`RegistrationRightWeiterbildungMAS`,`RegistrationRightWeiterbildungMASJahrgang`,`RegistrationRightWeiterbildungModulanlass`,`RegistrationRightWeiterbildungModulbefreiung`,`RegistrationRightWeiterbildungSemester`,`RegistrationRightWeiterbildungVeranstaltung`,`RegistrationRightWeiterbildungEvaluationsanlass`,`RegistrationRightWeiterbildungFakturierung`,`RegistrationRightWeiterbildungMailingliste`,`RegistrationRightWeiterbildungPlatzangebot`,`RegistrationRightWeiterbildungReservation`],deniedInstanceIds:null,appKey:`schulverwaltungScopeNg`,appPath:`#/import`}]}],footer:[{key:`contact`,get label(){return j(`Kontakt`)},allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:`footer`,appPath:`#/`},{key:`legal`,get label(){return j(`Rechtliche Hinweise`)},allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:`footer`,appPath:`#/`},{key:`imprint`,get label(){return j(`Impressum`)},allowedRolesOrPermissions:null,deniedInstanceIds:null,appKey:`footer`,appPath:`#/`}]};function Et(){return window.eventoPortal?.settings??{apiServer:``,oAuthServer:``,oAuthPrefix:``,oAuthClientId:``,notificationRefreshTime:30}}function R(e){let{instance_id:t,scope:n,culture_info:r,nbf:i,exp:a,substitution_id:o,holder_roles:s}=Mt(e);return{instanceId:t,scope:n,locale:r,issueTime:i,expirationTime:a,substitutionId:o?parseInt(o,10):void 0,substitutionRoles:s?s.split(`;`):void 0}}var Dt=10*1e3;function Ot(e,t,n){if(!e)return!1;let r=R(e);return r.scope===t&&r.locale===n&&!kt(r)}function kt(e){if(!e)return!0;let{expirationTime:t}=e;return t*1e3<Date.now()}function At(e){if(!e)return!0;let{expirationTime:t}=e;return t*1e3-Dt<Date.now()}function jt(e){let{expirationTime:t}=e;return Math.max(t*1e3-Date.now(),0)}function Mt(e){let t=e.split(`.`);if(t.length!==3)throw Error(`Invalid JWT token format`);let n=t[1].replace(/-/g,`+`).replace(/_/g,`/`),r=atob(n),i=new TextDecoder(`utf-8`).decode(Uint8Array.from(r,e=>e.charCodeAt(0)));return JSON.parse(i)}var Nt=`bkdInstance`,Pt=`bkdCodeVerifier`,z=`bkdRedirectUrl`,Ft=`bkdAccessToken`,It=`bkdRefreshToken`,B=`CLX.LoginToken`,Lt=`uiCulture`,Rt=`CLX.TokenExpire`;function zt(){return localStorage.getItem(Nt)}function Bt(e){localStorage.setItem(Nt,e)}function Vt(e){localStorage.setItem(Lt,e)}function Ht(e){return localStorage.getItem(`${It}_${e}`)}function Ut(e,t){t&&localStorage.setItem(`${It}_${e}`,t)}function Wt(e){return localStorage.getItem(`${Ft}_${e}`)}function Gt(e,t){localStorage.setItem(`${Ft}_${e}`,t)}function Kt(){$t(localStorage,e=>{e&&(e.startsWith(Ft)||e.startsWith(It))&&localStorage.removeItem(e)}),sessionStorage.removeItem(B)}function qt(){let e=sessionStorage.getItem(B);return e?e.replace(/^"+|"+$/g,``):null}function Jt(){let e=localStorage.getItem(B);return e?e.replace(/^"+|"+$/g,``):null}function Yt(e){sessionStorage.setItem(B,`"${e}"`),localStorage.setItem(B,`"${e}"`);let{expirationTime:t}=R(e);t*=1e3,localStorage.setItem(Rt,t.toString())}function Xt(){let e=sessionStorage.getItem(Pt),t=sessionStorage.getItem(z)??void 0;return sessionStorage.removeItem(z),sessionStorage.removeItem(Pt),e?{redirectUri:t,codeVerifier:e}:null}function Zt(e,t){sessionStorage.setItem(Pt,e),t?sessionStorage.setItem(z,t):sessionStorage.removeItem(z)}function Qt(){return sessionStorage.getItem(z)}function $t(e,t){Array(e.length).fill(void 0).map((t,n)=>e.key(n)).forEach(e=>{e&&t(e)})}var V=new class{constructor(){this.state={refreshToken:null,refreshTokenPayload:null,accessToken:null,accessTokenPayload:null},this.refreshTokenSubscribers=[],this.accessTokenSubscribers=[],this.initState(),this.afterRefreshTokenUpdate(this.refreshToken,!1),this.afterAccessTokenUpdate(this.accessToken,!1)}get refreshToken(){return this.state.refreshToken}set refreshToken(e){this.state.refreshToken=e,this.afterRefreshTokenUpdate(e)}get refreshTokenPayload(){return this.state.refreshTokenPayload}get accessToken(){return this.state.accessToken}set accessToken(e){this.state.accessToken=e,this.afterAccessTokenUpdate(e)}get accessTokenPayload(){return this.state.accessTokenPayload}get authenticated(){return!!this.accessToken}get scope(){return this.accessTokenPayload?.scope??null}get locale(){return this.accessTokenPayload?.locale??null}get instanceId(){return this.accessTokenPayload?.instanceId??null}resetAllTokens(){this.state.refreshToken=null,this.state.refreshTokenPayload=null,this.state.accessToken=null,this.state.accessTokenPayload=null,Kt()}onRefreshTokenUpdate(e){return this.refreshTokenSubscribers.push(e),()=>{let t=this.refreshTokenSubscribers.findIndex(t=>t===e);this.refreshTokenSubscribers.splice(t,1)}}onAccessTokenUpdate(e){return this.accessTokenSubscribers.push(e),()=>{let t=this.accessTokenSubscribers.findIndex(t=>t===e);this.accessTokenSubscribers.splice(t,1)}}initState(){let e=qt(),t=e?Ht(R(e).scope):null;this.state={refreshToken:t,refreshTokenPayload:null,accessToken:e,accessTokenPayload:null}}afterRefreshTokenUpdate(e,t=!0){let n=e?R(e):null;this.state.refreshTokenPayload=n,e&&n&&t&&Ut(n.scope,e),this.notifyRefreshTokenSubscribers()}afterAccessTokenUpdate(e,t=!0){let n=e?R(e):null;this.state.accessTokenPayload=n,e&&n&&t&&(Gt(n.scope,e),Yt(e)),this.notifyAccessTokenSubscribers()}notifyRefreshTokenSubscribers(){this.refreshTokenSubscribers.forEach(e=>e(this.refreshTokenPayload))}notifyAccessTokenSubscribers(){this.accessTokenSubscribers.forEach(e=>e(this.accessTokenPayload))}},H=Et();if(typeof H?.apiServer!=`string`)throw Error(`Invalid 'apiServer' setting`);async function en(){let e=await U(`${H.apiServer}/UserSettings/?expand=AccessInfo`);return{roles:e?.AccessInfo?.Roles??[],permissions:e?.AccessInfo?.Permissions??[]}}async function tn(){let{instanceName:e,guiLanguage:t}=await U(`${H.apiServer}/Configurations/SchoolAppNavigation`);return{instanceName:e,allowedLocales:t}}function nn(){return U(`${H.apiServer}/TeacherSubstitutions/current`)}var rn=`notificationData`;async function an(){let{Settings:e}=await U(`${H.apiServer}/UserSettings/Cst`),t=e.find(e=>e.Key===rn)?.Value;return t?JSON.parse(t):[]}function on(e){let t=`${H.apiServer}/UserSettings/Cst`,n={Id:`Cst`,Settings:[{Key:rn,Value:JSON.stringify(e)}]};return U(t,{method:`PATCH`,body:JSON.stringify(n)},!0)}async function U(e,{method:t=`GET`,body:n=void 0}={},r){let{accessToken:i}=V;if(!i)throw Error(`No token available`);let a=new Headers({Authorization:`Bearer ${i}`,"Content-Type":`application/json`}),o=await fetch(e,{method:t,headers:a,body:n});if(!r)return o.json()}var sn=`de-CH`,cn=[`fr-CH`],ln=[`de-CH`,`fr-CH`],un=`modulepreload`,dn=function(e){return`/`+e},fn={},pn=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=dn(t,n),t in fn)return;fn[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:un,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},{getLocale:mn,setLocale:hn}=ht({sourceLocale:sn,targetLocales:cn,loadLocale:e=>pn(()=>import(`/locales/${e}.js`),[])});function gn(){let e=vn()??xn()??Sn();return e&&yn(e)?e:bn()??sn}async function _n(e){await hn(e),document.documentElement.lang=e}function vn(){return new URL(location.href).searchParams.get(K)}function yn(e){return ln.includes(e)}function bn(){let e=navigator.language.slice(0,2);return ln.find(t=>t.startsWith(e))??null}function xn(){let e=Qt();return e?new URL(e).searchParams.get(K):null}function Sn(){let e=Jt();return e?R(e).locale:null}var Cn=[L.navigationHome,L.navigationMyProfile,L.navigationMySettings,L.navigationPhotoList,L.navigationInputGrades,...L.footer];function wn(e,t){return En(e).find(({item:e})=>e.key===t)||{item:L.navigationHome,group:null}}function Tn(e,t){return Dn(En(e)).find(({item:e})=>e.appPath!==`#/`&&t.startsWith(e.appPath))??null}function En(e){return[...Cn.map(e=>({item:e,group:null})),...e.flatMap(e=>e.items.map(t=>({item:t,group:e})))]}function Dn(e){return[...e].sort((e,t)=>{let n=e.item.appPath,r=t.item.appPath;return n.length===r.length?n.localeCompare(r):r.length-n.length})}function W(e){let t=L.apps.find(t=>t.key===e.appKey);if(!t)throw Error(`Invalid app: ${e.appKey}`);return t}function On(e,t){let{item:n}=wn(e,t);return W(n).scope}function kn(e,t,n){return e.reduce((e,r)=>{let i=r.items.filter(e=>An(e,t)&&jn(e,n));return i.length>0?[...e,{...r,items:i}]:e},[])}function An(e,t){return e.deniedInstanceIds===null||e.deniedInstanceIds.includes(t)}function jn(e,t){return e.allowedRolesOrPermissions===null||e.allowedRolesOrPermissions.some(e=>t.includes(e))}function Mn(e){let t=new URL(location.href);Array.from(t.searchParams.keys()).forEach(n=>{e.includes(n)||t.searchParams.delete(n)}),history.replaceState({},``,t)}function Nn(e,t,n=!1){let r=new URL(location.href);r.searchParams.set(e,t),n?history.replaceState({},``,r):history.pushState({},``,r)}function Pn(e){return e.slice(Math.max(e.indexOf(`#`),0))}function Fn(e,t=!1){let n=new URL(location.href);n.hash=e,t?history.replaceState({},``,n):history.pushState({},``,n)}function In(){let e=new URL(location.href).searchParams.get(q);return e?On(L.navigation,e):W(L.navigationHome).scope}function Ln(e){return Rn(typeof e==`string`?wn(Y.navigation,e).item:e).toString()}function Rn(e){let t=new URL(location.origin+location.pathname);return t.searchParams.set(K,Y.locale),t.searchParams.set(q,e.key),t.hash=e.appPath,t}function G(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var K=`locale`,q=`module`,zn=[K,q],J=class extends bt{constructor(...e){super(...e),this.actualAppPath=null,this.setInitialized=()=>void 0,this.initialized=new Promise(e=>this.setInitialized=()=>e(null))}async init(){await this.loadInstanceInfo(),await this.handleStateChange(`locale`),this.subscribe(this.handleStateChange.bind(this)),V.onAccessTokenUpdate(()=>this.updateNavigation()),await this.loadRolesAndPermissions(),this.setInitialized()}subscribeLocale(e){return e(this.locale),this.subscribe((t,n)=>e(n),`locale`)}subscribeInstanceName(e){return this.subscribe((t,n)=>e(n),`instanceName`)}subscribeNavigationItemKey(e){return e(this.navigationItemKey),this.subscribe((t,n)=>e(n),`navigationItemKey`)}subscribeNavigationItem(e){return e(this.navigationItem),this.subscribe((t,n)=>e(n),`navigationItem`)}subscribeScopeAndLocale(e,t=!1){return t||e(this.app.scope,this.locale),this.subscribe(()=>e(this.app.scope,this.locale),[`app`,`locale`])}navigate(e){this.initialized.then(()=>{Mn(zn),this.locale=e.searchParams.get(`locale`)||mn(),this.navigationItemKey=e.searchParams.get(`module`)??L.navigationHome.key,e.hash&&e.hash!==`#`&&e.hash!==`#/`&&e.hash.startsWith(this.navigationItem.appPath)&&(this.appPath=e.hash)})}async handleStateChange(e){e===`locale`&&await this.updateLocale(),(e===`locale`||e===`navigationItemKey`)&&Vt(this.locale),(e===`rolesAndPermissions`||e===`locale`)&&this.updateNavigation(),(e===`navigationItemKey`||e===`navigation`)&&(this.updateNavigationItemAndGroup(this.navigationItemKey),this.updateApp(this.navigationItem))}async updateLocale(){this.allowedLocales.length>0&&!this.allowedLocales.includes(this.locale)&&(this.locale=this.allowedLocales[0]),Nn(K,this.locale);try{await _n(this.locale)}catch(e){console.warn(`Unable to fetch/update locale (this may happen when interrupted by a redirect):`,e)}}updateNavigation(){let{instanceId:e}=V;e&&(this.navigation=kn(L.navigation,e,V.accessTokenPayload?.substitutionRoles||this.rolesAndPermissions))}updateNavigationItemAndGroup(e){if(this.navigation.length>0){let{item:t,group:n}=wn(this.navigation,e);if(this.navigationItem=t,this.navigationGroup=n,this.actualAppPath&&this.actualAppPath!==`#`&&this.actualAppPath!==`#/`&&this.actualAppPath.startsWith(t.appPath))this.appPath=this.actualAppPath;else{let e=Tn(this.navigation,this.appPath);this.navigationItem!==e?.item&&(this.appPath=t.appPath)}this.actualAppPath=null,this.updateHashFromAppPath(),t.key===L.navigationHome.key&&t.key!==e&&(this.navigationItemKey=t.key)}Nn(q,this.navigationItemKey)}updateHashFromAppPath(){let e=new URL(document.location.href);e.hash=this.appPath,history.replaceState({},``,e)}updateApp(e){this.app=W(e)}async loadRolesAndPermissions(){if(!V.authenticated)return;let{roles:e,permissions:t}=await en();this.rolesAndPermissions=[...e,...t]}async loadInstanceInfo(){if(V.authenticated)try{let{instanceName:e,allowedLocales:t}=await tn();this.allowedLocales=t,this.instanceName=[`Evento`,e].filter(Boolean).join(` | `)}catch(e){console.warn(`Unable to fetch/update instance name (this may happen when interrupted by a redirect):`,e)}}};G([I({value:gn()})],J.prototype,`locale`,void 0),G([I({value:[]})],J.prototype,`rolesAndPermissions`,void 0),G([I({value:``})],J.prototype,`instanceName`,void 0),G([I({value:[]})],J.prototype,`allowedLocales`,void 0),G([I({value:[]})],J.prototype,`navigation`,void 0),G([Tt({parameter:q}),I({value:null})],J.prototype,`navigationItemKey`,void 0),G([I({value:null})],J.prototype,`navigationGroup`,void 0),G([I({value:L.navigationHome})],J.prototype,`navigationItem`,void 0),G([I({value:W(L.navigationHome)})],J.prototype,`app`,void 0),G([I({value:L.navigationHome.appPath})],J.prototype,`appPath`,void 0);var Y=new J,Bn=o`
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
`,Vn=o`
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
`,X=o`
  :host {
    ${Bn}
    ${Vn}
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
`,Hn=o`
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
`;function Un(e){let t=document.createElement(`style`);t.innerText=e,document.querySelector(`body`)?.appendChild(t)}var Wn=(e,t,n)=>{for(let n of t)if(n[0]===e)return(0,n[1])();return n?.()},Gn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Kn=e=>(...t)=>({_$litDirective$:e,values:t}),qn=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},{I:Jn}=Me,Yn=e=>e,Xn=()=>document.createComment(``),Z=(e,t,n)=>{let r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0)n=new Jn(r.insertBefore(Xn(),i),r.insertBefore(Xn(),i),e,e.options);else{let t=n._$AB.nextSibling,a=n._$AM,o=a!==e;if(o){let t;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(t=e._$AU)!==a._$AU&&n._$AP(t)}if(t!==i||o){let e=n._$AA;for(;e!==t;){let t=Yn(e).nextSibling;Yn(r).insertBefore(e,i),e=t}}}return n},Q=(e,t,n=e)=>(e._$AI(t,n),e),Zn={},Qn=(e,t=Zn)=>e._$AH=t,$n=e=>e._$AH,er=e=>{e._$AR(),e._$AA.remove()},tr=class extends k{static{this.styles=[X,Hn]}render(){return C`<p>
      ${j(`Lernende, Lehrpersonen und Schulmitarbeitende wenden sich bei Fehlermeldungen in Evento Web oder Fragen zu dieser Fachapplikation an die zuständige Stelle in ihrer Schule. Diese wird von der Schule kommuniziert. Im Zweifelsfall kontaktieren Sie bitte das Schulsekretariat.`)}
    </p>`}};tr=G([A(`bkd-contact`),M()],tr);function*nr(e,t){let n=typeof t==`function`;if(e!==void 0){let r=-1;for(let i of e)r>-1&&(yield n?t(r):t),r++,yield i}}function $(e){return nr(e?.split(`
`),C`<br />`)}var rr=class extends k{static{this.styles=[X,Hn]}constructor(){super(),new St(this,Y)}render(){return C`
      <div class="content-section">
        <h2>${j(`Inhaltsverantwortung`)}</h2>
        <p>${j(`Zuständige Schule, siehe Kontakt`)}</p>
      </div>

      <div class="content-section">
        <h2>${j(`Fachapplikation`)}</h2>
        <p>
          ${$(j(`Bildungs- und Kulturdirektion des Kantons Bern
Mittelschul- und Berufsbildungsamt
Fachbereich Informatikanwendungen
Kasernenstrasse 27
3013 Bern`))}
        </p>
        <p><a href="mailto:fbi.mba@be.ch">${j(`E-Mail`)}</a></p>
      </div>

      <div class="content-section">
        <h2>${j(`Betrieb und Technik`)}</h2>
        <p>
          ${$(j(`Bedag Informatik AG
Engehaldenstrasse 12
3012 Bern`))}
        </p>
        <p>
          <a href="https://www.bedag.ch/" target="_blank">www.bedag.ch</a>
        </p>
      </div>
    `}};rr=G([A(`bkd-imprint`),M()],rr);var ir=class extends k{static{this.styles=[X,Hn,o`
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
    `]}render(){return C`
      <div class="content-section">
        <h2>${j(`Haftungsausschluss`)}</h2>
        <p>
          ${j(`Die Inhalte dieser Fachapplikation sind ein Datenangebot der zuständigen Schule. Obwohl diese die Daten regelmässig auf Richtigkeit und Aktualität hin prüft, lehnen wir, soweit gesetzlich zulässig, jede Haftung für unerwünschte Folgen aus dem Gebrauch dieser Daten ab.`)}
        </p>
        <p>
          ${j(`Diese Fachapplikation enthält Links zu Angeboten von Dritten. Sie benutzen diese Links auf eigenes Risiko. Für die Inhalte dieser anderen Webseiten übernehmen wir keine Verantwortung. Von unserer Haftung ausgeschlossen ist namentlich die Garantie für die ständige Verfügbarkeit unserer Fachapplikation sowie Schäden (z.B. wegen Verbindungsunterbruch oder schädlicher Software), die durch die Benutzung dieser Fachapplikation entstehen könnten.`)}
        </p>
      </div>

      <div class="content-section">
        <h2>${j(`Immaterialgüterrechte`)}</h2>
        <p>
          ${j(`Sichtbare Elemente (Bilder/Icons) dieser Fachapplikation können Dritten gehören. Diese Elemente dürfen deshalb grundsätzlich nicht verwendet werden. Der Kanton Bern kann deren Verwendung ausserhalb der Webseite auf Anfrage erlauben, sofern er dazu selbst berechtigt ist. Für solche Anfragen wenden Sie sich bitte an die Stelle, die für die Fachapplikation verantwortlich ist. Die Kontaktangaben finden Sie im Impressum.`)}
        </p>
      </div>

      <div class="content-section">
        <h2>${j(`Datenschutzerklärung`)}</h2>
        <p>
          ${j(`Verantwortliche Stelle im Sinne der Datenschutzgesetze, unter anderem auch der EU-Datenschutzgrundverordnung (DSGVO), ist:`)}
        </p>
        <p>
          ${$(j(`Mittelschul- und Berufsbildungsamt
Kasernenstrasse 27
3013 Bern`))}
        </p>
        <p><a href="mailto:fbi.mba@be.ch">${j(`E-Mail`)}</a></p>
        <p>
          <a href="${j(`https://www.be.ch/mba`)}" target="_blank"
            >${j(`https://www.be.ch/mba`).replace(`https://`,``)}</a
          >
        </p>
      </div>

      <div class="content-section">
        <h2>${j(`Datenbearbeitung`)}</h2>
        <p>
          ${j(`Der zum Betrieb dieser Fachapplikation eingesetzte Leistungserbringer des Kantons Bern bearbeitet teilweise die IP-Adresse oder technische Angaben der Endgeräte von Personen, die diese Webseite besuchen. Der Leistungserbringer untersteht einer Datenschutzgesetzgebung mit einem dem Berner Recht gleichwertigem Datenschutzniveau. Die IP-Adresse wird verschlüsselt übertragen und vor der weiteren Bearbeitung anonymisiert.`)}
        </p>
        <p>
          ${j(`Mit der Benutzung dieser Fachapplikation stimmen Sie dieser Datenbearbeitung soweit erforderlich zu. Sie erfolgt im Einzelnen wie folgt:`)}
        </p>
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>${j(`Leistungserbringer`)}</th>
                <th>${j(`Bearbeitete Daten`)}</th>
                <th>${j(`Grund der Bearbeitung`)}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th style="white-space: nowrap;">
                  ${$(j(`Bedag Informatik AG
Engehaldenstrasse 12
3012 Bern`))}
                </th>
                <td>
                  ${j(`IP-Adresse, technische Angaben zum Betriebssystem und Webbrowser, Referrer-URL, Hostname, Uhrzeit`)}
                </td>
                <td>
                  ${j(`Logdaten des Webserves des Kantons Bern zum Erkennen und Beheben von technischen Störungen und Angriffen.`)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="content-section">
        <h2>${j(`Cookies`)}</h2>
        <p>${j(`Diese Webseite setzt keine Cookies ein.`)}</p>
      </div>

      <div class="content-section">
        <h2>${j(`Soziale Medien`)}</h2>
        <p>
          ${j(`Soweit diese Fachapplikation auf soziale Medien wie YouTube verweist, geschieht das nur durch Links, nicht etwa durch das Ausführen von Programmen (Plug-ins). Mit dem Aufrufen dieser Fachapplikation werden daher keine Personendaten an die sozialen Medien übertragen.`)}
        </p>
      </div>

      <div class="content-section">
        <h2>${j(`Kontakt bei Fragen`)}</h2>
        <p>
          ${j(`Wenn Sie Fragen zum Datenschutz im Zusammenhang mit dieser Fachapplikation haben, können Sie sich an die Stelle wenden, die für die Fachapplikation verantwortlich ist. Die Kontaktangaben finden Sie im Impressum.`)}
        </p>
      </div>
    `}};ir=G([A(`bkd-legal`),M()],ir);var ar=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},or=Kn(class extends qn{constructor(e){if(super(e),e.type!==Gn.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){let i=$n(e),{values:a,keys:o}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=o,a;let s=this.ut??=[],c=[],l,u,d=0,f=i.length-1,p=0,m=a.length-1;for(;d<=f&&p<=m;)if(i[d]===null)d++;else if(i[f]===null)f--;else if(s[d]===o[p])c[p]=Q(i[d],a[p]),d++,p++;else if(s[f]===o[m])c[m]=Q(i[f],a[m]),f--,m--;else if(s[d]===o[m])c[m]=Q(i[d],a[m]),Z(e,c[m+1],i[d]),d++,m--;else if(s[f]===o[p])c[p]=Q(i[f],a[p]),Z(e,i[d],i[f]),f--,p++;else if(l===void 0&&(l=ar(o,p,m),u=ar(s,d,f)),l.has(s[d]))if(l.has(s[f])){let t=u.get(o[p]),n=t===void 0?null:i[t];if(n===null){let t=Z(e,i[d]);Q(t,a[p]),c[p]=t}else c[p]=Q(n,a[p]),Z(e,i[d],n),i[t]=null;p++}else er(i[f]),f--;else er(i[d]),d++;for(;p<=m;){let t=Z(e,c[m+1]);Q(t,a[p]),c[p++]=t}for(;d<=f;){let e=i[d++];e!==null&&er(e)}return this.ut=o,Qn(e,c),w}}),sr=class extends k{static{this.styles=[X,o`
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
    `]}constructor(){super(),new St(this,Y)}renderFooterLink(e){let t=Ln(e);return C`
      <a
        href=${t}
        @click=${e=>{e?.preventDefault(),Y.navigate(new URL(t))}}
        >${e.label}</a
      >
    `}render(){return C`
      <footer role="contentinfo">
        <div class="copyright">${j(`© Bildungs- und Kulturdirektion`)}</div>
        <div class="footer-nav">
          ${or(L.footer,e=>e.key,this.renderFooterLink.bind(this))}
        </div>
      </footer>
    `}};sr=G([A(`bkd-footer`),M()],sr);var cr=Kn(class extends qn{constructor(e){if(super(e),e.type!==Gn.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return w}}),lr=class extends k{static{this.styles=[X,o`
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
    `]}constructor(){super(),new St(this,Y)}handleLocaleChange(e,t){e.preventDefault(),Y.locale=t}render(){return C`<ul>
      ${ln.map(e=>C`<li>
            <a
              href="#"
              class=${cr({active:e===Y.locale})}
              aria-current=${e===Y.locale}
              @click=${t=>this.handleLocaleChange(t,e)}
            >
              ${e.slice(0,2)}
            </a>
          </li>`)}
    </ul>`}};lr=G([A(`bkd-language-switcher`),M()],lr);export{C as $,zt as A,Et as B,pn as C,V as D,on as E,jt as F,Ue as G,St as H,R as I,ze as J,He as K,At as L,Bt as M,Zt as N,Xt as O,Dt as P,w as Q,kt as R,gn as S,an as T,M as U,L as V,j as W,k as X,A as Y,T as Z,In as _,qn as a,wn as b,Bn as c,X as d,o as et,K as f,Pn as g,Ln as h,Kn as i,Ht as j,Wt as k,Vn as l,G as m,or as n,Gn as o,Y as p,Be as q,Qn as r,Wn as s,cr as t,Un as u,Fn as v,nn as w,Tn as x,W as y,Ot as z};