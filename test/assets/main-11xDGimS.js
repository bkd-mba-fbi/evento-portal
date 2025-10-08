import{f as mi,u as gi,_ as bi,t as m,g as vi,T as wi,a as xn,b as Ze,c as yi,i as ki,d as $t,e as _i,h as Mt,s as Ti,p as u,j as Ei,k as J,l as xe,m as fn,L as Ai,n as Si,o as Cn,q as On,E as Ce,r as xi,v as P,w as R,x as D,S as Y,y as h,z as Ci,A as b,B as X,C as N,D as $,F as Oi,G as Ii,H as Ri,I as ue,J as de,K as mn,M as Li,N as Pi,O as Di,P as Ni,Q as $i,R as Mi,U as Ui,V as _t,W as Tt,X as zi}from"./LanguageSwitcher-cX5ARu_q.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fi={attribute:!0,type:String,converter:gi,reflect:!1,hasChanged:mi},Hi=(t=Fi,e,n)=>{const{kind:i,metadata:o}=n;let s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),i==="setter"&&((t=Object.create(t)).wrapped=!0),s.set(n.name,t),i==="accessor"){const{name:a}=n;return{set(f){const T=e.get.call(this);e.set.call(this,f),this.requestUpdate(a,T,t)},init(f){return f!==void 0&&this.C(a,void 0,t,f),f}}}if(i==="setter"){const{name:a}=n;return function(f){const T=this[a];e.call(this,f),this.requestUpdate(a,T,t)}}throw Error("Unsupported decorator location: "+i)};function M(t){return(e,n)=>typeof n=="object"?Hi(t,e,n):((i,o,s)=>{const a=o.hasOwnProperty(s);return o.constructor.createProperty(s,i),a?Object.getOwnPropertyDescriptor(o,s):void 0})(t,e,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function fe(t){return M({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ji=(t,e,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function H(t,e){return(n,i,o)=>{const s=a=>a.renderRoot?.querySelector(t)??null;return ji(n,i,{get(){return s(this)}})}}class Ut extends Error{constructor(e,n){super(e),this.oauth2Code=n}}class Gi extends Ut{constructor(e,n,i,o){super(e,n),this.httpCode=i.status,this.response=i,this.parsedBody=o}}class qi{constructor(e){this.client=e}async getAuthorizeUri(e){const[n,i]=await Promise.all([e.codeVerifier?Wi(e.codeVerifier):void 0,this.client.getEndpoint("authorizationEndpoint")]),o=new URLSearchParams({client_id:this.client.settings.clientId,response_type:"code",redirect_uri:e.redirectUri});if(n&&(o.set("code_challenge_method",n[0]),o.set("code_challenge",n[1])),e.state&&o.set("state",e.state),e.scope&&o.set("scope",e.scope.join(" ")),e.resource)for(const s of[].concat(e.resource))o.append("resource",s);if(e.responseMode&&e.responseMode!=="query"&&o.append("response_mode",e.responseMode),e.extraParams)for(const[s,a]of Object.entries(e.extraParams)){if(o.has(s))throw new Error(`Property in extraParams would overwrite standard property: ${s}`);o.set(s,a)}return i+"?"+o.toString()}async getTokenFromCodeRedirect(e,n){const{code:i}=this.validateResponse(e,{state:n.state});return this.getToken({code:i,redirectUri:n.redirectUri,codeVerifier:n.codeVerifier})}validateResponse(e,n){e=new URL(e);let i=e.searchParams;if(!i.has("code")&&!i.has("error")&&e.hash.length>0&&(i=new URLSearchParams(e.hash.slice(1))),i.has("error"))throw new Ut(i.get("error_description")??"OAuth2 error",i.get("error"));if(!i.has("code"))throw new Error(`The url did not contain a code parameter ${e}`);if(n.state&&n.state!==i.get("state"))throw new Error(`The "state" parameter in the url did not match the expected value of ${n.state}`);return{code:i.get("code"),scope:i.has("scope")?i.get("scope").split(" "):void 0}}async getToken(e){const n={grant_type:"authorization_code",code:e.code,redirect_uri:e.redirectUri,code_verifier:e.codeVerifier,resource:e.resource};return this.client.tokenResponseToOAuth2Token(this.client.request("tokenEndpoint",n))}}async function Bi(){const t=await In(),e=new Uint8Array(32);return t.getRandomValues(e),Rn(e)}async function Wi(t){const e=await In();return["S256",Rn(await e.subtle.digest("SHA-256",Vi(t)))]}async function In(){var t;if(typeof window<"u"&&window.crypto){if(!((t=window.crypto.subtle)!=null&&t.digest))throw new Error("The context/environment is not secure, and does not support the 'crypto.subtle' module. See: https://developer.mozilla.org/en-US/docs/Web/API/Crypto/subtle for details");return window.crypto}return typeof self<"u"&&self.crypto?self.crypto:(await Promise.resolve().then(()=>Ki)).webcrypto}function Vi(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n)&255;return e}function Rn(t){return btoa(String.fromCharCode(...new Uint8Array(t))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}class Xi{constructor(e){this.discoveryDone=!1,this.serverMetadata=null,e!=null&&e.fetch||(e.fetch=fetch.bind(globalThis)),this.settings=e}async refreshToken(e,n){if(!e.refreshToken)throw new Error("This token didn't have a refreshToken. It's not possible to refresh this");const i={grant_type:"refresh_token",refresh_token:e.refreshToken};this.settings.clientSecret||(i.client_id=this.settings.clientId),n!=null&&n.scope&&(i.scope=n.scope.join(" ")),n!=null&&n.resource&&(i.resource=n.resource);const o=await this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",i));return!o.refreshToken&&e.refreshToken&&(o.refreshToken=e.refreshToken),o}async clientCredentials(e){var n;const i=["client_id","client_secret","grant_type","scope"];if(e!=null&&e.extraParams&&Object.keys(e.extraParams).filter(s=>i.includes(s)).length>0)throw new Error(`The following extraParams are disallowed: '${i.join("', '")}'`);const o={grant_type:"client_credentials",scope:(n=e?.scope)==null?void 0:n.join(" "),resource:e?.resource,...e?.extraParams};if(!this.settings.clientSecret)throw new Error("A clientSecret must be provided to use client_credentials");return this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",o))}async password(e){var n;const i={grant_type:"password",...e,scope:(n=e.scope)==null?void 0:n.join(" ")};return this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",i))}get authorizationCode(){return new qi(this)}async introspect(e){const n={token:e.accessToken,token_type_hint:"access_token"};return this.request("introspectionEndpoint",n)}async revoke(e,n="access_token"){let i=e.accessToken;n==="refresh_token"&&(i=e.refreshToken);const o={token:i,token_type_hint:n};return this.request("revocationEndpoint",o)}async getEndpoint(e){if(this.settings[e]!==void 0)return K(this.settings[e],this.settings.server);if(e!=="discoveryEndpoint"&&(await this.discover(),this.settings[e]!==void 0))return K(this.settings[e],this.settings.server);if(!this.settings.server)throw new Error(`Could not determine the location of ${e}. Either specify ${e} in the settings, or the "server" endpoint to let the client discover it.`);switch(e){case"authorizationEndpoint":return K("/authorize",this.settings.server);case"tokenEndpoint":return K("/token",this.settings.server);case"discoveryEndpoint":return K("/.well-known/oauth-authorization-server",this.settings.server);case"introspectionEndpoint":return K("/introspect",this.settings.server);case"revocationEndpoint":return K("/revoke",this.settings.server)}}async discover(){var e;if(this.discoveryDone)return;this.discoveryDone=!0;let n;try{n=await this.getEndpoint("discoveryEndpoint")}catch{console.warn('[oauth2] OAuth2 discovery endpoint could not be determined. Either specify the "server" or "discoveryEndpoint');return}const i=await this.settings.fetch(n,{headers:{Accept:"application/json"}});if(!i.ok)return;if(!((e=i.headers.get("Content-Type"))!=null&&e.startsWith("application/json"))){console.warn("[oauth2] OAuth2 discovery endpoint was not a JSON response. Response is ignored");return}this.serverMetadata=await i.json();const o=[["authorization_endpoint","authorizationEndpoint"],["token_endpoint","tokenEndpoint"],["introspection_endpoint","introspectionEndpoint"],["revocation_endpoint","revocationEndpoint"]];if(this.serverMetadata!==null){for(const[s,a]of o)this.serverMetadata[s]&&(this.settings[a]=K(this.serverMetadata[s],n));if(this.serverMetadata.token_endpoint_auth_methods_supported&&!this.settings.authenticationMethod){for(const s of this.serverMetadata.token_endpoint_auth_methods_supported)if(s==="client_secret_basic"||s==="client_secret_post"){this.settings.authenticationMethod=s;break}}}}async request(e,n){const i=await this.getEndpoint(e),o={"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json"};let s=this.settings.authenticationMethod;switch(this.settings.clientSecret||(s="client_secret_post"),s||(s="client_secret_basic_interop"),s){case"client_secret_basic":o.Authorization="Basic "+btoa(gn(this.settings.clientId)+":"+gn(this.settings.clientSecret));break;case"client_secret_basic_interop":o.Authorization="Basic "+btoa(this.settings.clientId.replace(/:/g,"%3A")+":"+this.settings.clientSecret.replace(/:/g,"%3A"));break;case"client_secret_post":n.client_id=this.settings.clientId,this.settings.clientSecret&&(n.client_secret=this.settings.clientSecret);break;default:throw new Error("Authentication method not yet supported:"+s+". Open a feature request if you want this!")}const a=await this.settings.fetch(i,{method:"POST",body:Yi(n),headers:o});let f;if(a.status!==204&&a.headers.has("Content-Type")&&a.headers.get("Content-Type").match(/^application\/(.*\+)?json/)&&(f=await a.json()),a.ok)return f;let T,G;throw f!=null&&f.error?(T="OAuth2 error "+f.error+".",f.error_description&&(T+=" "+f.error_description),G=f.error):(T="HTTP Error "+a.status+" "+a.statusText,a.status===401&&this.settings.clientSecret&&(T+=". It's likely that the clientId and/or clientSecret was incorrect"),G=null),new Gi(T,G,a,f)}async tokenResponseToOAuth2Token(e){const n=await e;if(!(n!=null&&n.access_token))throw console.warn("Invalid OAuth2 Token Response: ",n),new TypeError("We received an invalid token response from an OAuth2 server.");const i={accessToken:n.access_token,expiresAt:n.expires_in?Date.now()+n.expires_in*1e3:null,refreshToken:n.refresh_token??null};return n.id_token&&(i.idToken=n.id_token),i}}function K(t,e){return new URL(t,e).toString()}function Yi(t){const e=new URLSearchParams;for(const[n,i]of Object.entries(t))if(Array.isArray(i))for(const o of i)e.append(n,o);else i!==void 0&&e.set(n,i.toString());return e.toString()}function gn(t){return encodeURIComponent(t).replace(/%20/g,"+").replace(/[-_.!~*'()]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)}const Ki=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));async function Zi(t){const e=await Qi();return["S256",eo(await e.subtle.digest("SHA-256",Ji(t)))]}async function Qi(){var t;if(typeof window<"u"&&window.crypto){if(!(!((t=window.crypto.subtle)===null||t===void 0)&&t.digest))throw new Error("The context/environment is not secure, and does not support the 'crypto.subtle' module. See: https://developer.mozilla.org/en-US/docs/Web/API/Crypto/subtle for details");return window.crypto}return typeof self<"u"&&self.crypto?self.crypto:(await bi(()=>import("./__vite-browser-external-BIHI7g3E.js"),[])).webcrypto}function Ji(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n)&255;return e}function eo(t){return btoa(String.fromCharCode(...new Uint8Array(t))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function to(t){const e=new URLSearchParams;for(const[n,i]of Object.entries(t))if(Array.isArray(i))for(const o of i)e.append(n,o);else i!==void 0&&e.set(n,i.toString());return e.toString()}function no(...t){}var Ln=(t=>(t.Refresh="refresh",t.Access="access",t))(Ln||{});const Se={refresh:void 0,access:void 0};function io({renewRefreshToken:t,renewAccessToken:e}){Be("refresh",m.refreshTokenPayload,t),m.onRefreshTokenUpdate(n=>Be("refresh",n,t)),Be("access",m.accessTokenPayload,e),m.onAccessTokenUpdate(n=>Be("access",n,e))}function oo(){Object.values(Ln).forEach(t=>{Se[t]&&clearTimeout(Se[t])})}function Be(t,e,n){if(Se[t]&&clearTimeout(Se[t]),!e)return;const i=vi(e),o=i-wi;if(i<=0)return;const s=o>0?o:Math.max(i+1e3,0);Se[t]=setTimeout(()=>ro(t,e,n),s)}function ro(t,e,n){const{scope:i,locale:o}=e;so(i,async()=>{const s=t==="access"?xn(i):Ze(i),a=s?yi(s):null;a&&(ki(a)?await n(a.scope,a.locale):t==="access"?m.accessToken=s:m.refreshToken=s)})}function so(t,e){navigator.locks.request(`bkdTokenRenewal_${t}`,async()=>{await e()})}const F=$t();if(typeof F?.oAuthServer!="string")throw new Error("Invalid 'oAuthServer' setting");if(typeof F?.oAuthPrefix!="string")throw new Error("Invalid 'oAuthPrefix' setting");if(typeof F?.oAuthClientId!="string")throw new Error("Invalid 'clientId' setting");function ao(){return new Xi({server:F.oAuthServer,clientId:F.oAuthClientId,tokenEndpoint:`${F.oAuthPrefix}/Authorization/Token`,get authorizationEndpoint(){return uo()},fetch:(...t)=>fetch(...t)})}async function lo(t,e,n){io({renewRefreshToken:(a,f)=>It(t,a,f),renewAccessToken:(a,f)=>It(t,a,f)});const i=_i(),o=await po(t,i);if(o){fo(o,i);return}const s=mo();if(s){go(s);return}await Ot(t,e,n)}async function Ot(t,e,n){if(ho(e,n),Ei(m.refreshTokenPayload))return Qe(t,e,n);if(!m.accessToken)return It(t,e,n)}async function Qe(t,e,n,i=new URL(document.location.href)){i.searchParams.set(Ai,n);const o=new URL(await t.getEndpoint("authorizationEndpoint")),s=await Bi();Si(s,i.toString());const[a,f]=await Zi(s);o.searchParams.set("clientId",t.settings.clientId),o.searchParams.set("redirectUrl",i.toString()),o.searchParams.set("culture_info",n),o.searchParams.set("application_scope",e),o.searchParams.set("response_type","code"),o.searchParams.set("code_challenge_method",a),o.searchParams.set("code_challenge",f),document.location.href=o.toString()}async function co(t){const e=Mt();if(!e)throw new Error("No instance available");const{accessToken:n,scope:i,locale:o}=m;if(!(!n||!i||!o))try{await vo(t,e,n)}catch(s){if(!(s instanceof SyntaxError))throw s}finally{m.resetAllTokens(),oo(),await Qe(t,i,o,new URL(J(xe.navigationHome)))}}function uo(){const t=Mt();return t?`${F.oAuthPrefix}/Authorization/${t}/Login`:`${F.oAuthPrefix}/Authorization/Login`}function ho(t,e){if(fn(m.accessToken,t,e))return;const n=xn(t);if(fn(n,t,e)){m.accessToken=n,m.refreshToken=Ze(t);return}m.accessToken=null,m.refreshToken=Ze(t)}async function po(t,e){return new URLSearchParams(document.location.search).get("code")&&e?.redirectUri?await t.authorizationCode.getTokenFromCodeRedirect(document.location.href,{redirectUri:e.redirectUri,codeVerifier:e.codeVerifier}):null}function fo({refreshToken:t,accessToken:e},n){m.refreshToken=t,m.accessToken=e;const i=m.accessTokenPayload?.instanceId;i&&Ti(i),n?.redirectUri&&u.navigate(new URL(n.redirectUri))}function mo(){const t=new URLSearchParams(document.location.search),e=t.get("access_token"),n=t.get("expires_in"),i=t.get("refresh_token");return e?{accessToken:e,expiresAt:n?Date.now()+parseInt(n,10)*1e3:null,refreshToken:i||null}:null}function go(t){const{refreshToken:e,accessToken:n}=t;m.refreshToken=e,m.accessToken=n;const i=new URL(document.location.href);i.searchParams.delete("access_token"),i.searchParams.delete("expires_in"),i.searchParams.delete("refresh_token"),window.parent===window?history.replaceState({},"",i):window.parent.location.assign(i)}async function It(t,e,n){const i=Mt(),o=Ze(e);if(!i||!o)return Qe(t,e,n);try{const{refreshToken:s,accessToken:a}=await bo(t,i,e,n,o);no("Received renewed tokens"),m.refreshToken=s,m.accessToken=a}catch{return Qe(t,e,n)}}async function bo(t,e,n,i,o){const{access_token:s,refresh_token:a,expires_in:f}=await Pn(t,`${F.oAuthPrefix}/Authorization/${e}/Token`,{refresh_token:o,grant_type:"refresh_token",client_id:F.oAuthClientId,culture_info:i,scope:n});return{accessToken:s,refreshToken:a,expiresAt:f?Date.now()+f*1e3:null}}function vo(t,e,n){return Pn(t,`${F.oAuthPrefix}/Authorization/${e}/Logout`,{access_token:n})}async function Pn(t,e,n){const i=new URL(e,t.settings.server).toString(),o={"Content-Type":"application/x-www-form-urlencoded"},s=await fetch(i,{method:"POST",body:n&&to(n),headers:o});if(s.ok)return await s.json();let a,f,T;throw s.headers.get("Content-Type")?.startsWith("application/json")&&(a=await s.json()),a?.error?(f="OAuth2 error "+a.error+".",a.error_description&&(f+=" "+a.error_description),T=a.error):(f="HTTP Error "+s.status+" "+s.statusText,T=null),new Ut(f,T)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wo=Cn(class extends On{constructor(){super(...arguments),this.key=Ce}render(t,e){return this.key=t,e}update(t,[e,n]){return e!==this.key&&(xi(t),this.key=e),n}});var yo=Object.defineProperty,ko=Object.getOwnPropertyDescriptor,Dn=(t,e,n,i)=>{for(var o=i>1?void 0:i?ko(e,n):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(o=(i?a(e,n,o):a(o))||o);return i&&o&&yo(e,n,o),o};let Je=class extends D{constructor(){super(),this.renderedOffline=!1,this.handleMessage=t=>{if(t.origin===window.location.origin)switch(t.data.type){case"bkdAppResize":{this.handleResize(t.data.height);break}}},this.handleOnline=()=>{this.renderedOffline&&window.location.reload()},new Y(this,u)}connectedCallback(){super.connectedCallback(),window.addEventListener("message",this.handleMessage),window.addEventListener("online",this.handleOnline)}disconnectedCallback(){window.removeEventListener("message",this.handleMessage),window.removeEventListener("online",this.handleOnline),super.disconnectedCallback()}handleResize(t){this.iframe&&(this.iframe.height=t)}renderAppIframe(){return h`${wo(u.app.root,h`
        <iframe
          id="app"
          title=${u.app.key}
          src=${`/${u.app.root}${u.appPath}`}
        ></iframe>
      `)}`}renderFooterContent(){return h`
      ${Ci(u.navigationItemKey,[["contact",()=>h`<bkd-contact></bkd-contact>`],["legal",()=>h`<bkd-legal></bkd-legal>`],["imprint",()=>h`<bkd-imprint></bkd-imprint>`]],()=>h``)}
    `}render(){return this.renderedOffline=!navigator.onLine,navigator.onLine?m.scope!==u.app.scope?h`<main role="main"></main>`:h`
      <main role="main">
        ${X(u.app.heading,()=>h`<h1>${u.navigationItem.label}</h1>`)}
        ${X(u.app.key==="footer",()=>this.renderFooterContent(),()=>this.renderAppIframe())}
      </main>
    `:h`<main role="main">
        <h1>${b("Offline")}</h1>
        <p>${b("Keine Verbindung vorhanden.")}</p>
      </main>`}};Je.styles=[P,R`
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
    `];Dn([H("iframe")],Je.prototype,"iframe",2);Je=Dn([N("bkd-content"),$()],Je);function et(t,e){if(t===e||t.contains(e))return!0;if("shadowRoot"in t&&t.shadowRoot)return et(t.shadowRoot,e);for(const n of Array.from(t.children))if(et(n,e))return!0;return!1}class Le{constructor(e,n){this.host=e,this.options=n,this.open=!1,this.closeOnBlur=i=>{this.menuElement&&"relatedTarget"in i&&(this.menuElement.contains(i.relatedTarget)||this.closeDeferred())},this.handleDocumentClick=i=>{const o=i.composedPath()[0];if(!o)return;const s=this.toggleElement&&!et(this.toggleElement,o),a=this.menuElement&&!et(this.menuElement,o);s&&a&&this.closeDeferred()},this.handleIframeClick=()=>{this.closeDeferred()},this.handleKeydown=i=>{switch(i.key){case"Tab":{this.options.tabInside||this.close();break}case"Escape":{this.close();break}case"ArrowDown":{this.items[this.nextLinkIndex(1)]?.focus();break}case"ArrowUp":{this.items[this.nextLinkIndex(-1)]?.focus();break}}},this.host.addController(this)}get toggleElement(){return this.options.queryToggleElement()}get menuElement(){return this.options.queryMenuElement()}get items(){const e=this.options?.queryItems&&this.options.queryItems();return Array.from(e??[])}get focusedItem(){return this.options?.queryFocused?this.options.queryFocused():null}hostDisconnected(){this.removeListeners()}toggle(){this.open=!this.open,this.host.requestUpdate(),this.open?this.addListeners():setTimeout(()=>{this.removeListeners()})}close(){this.open&&this.toggle()}closeDeferred(){setTimeout(()=>this.close())}addListeners(){setTimeout(()=>{this.options.tabInside&&this.menuElement?.addEventListener("focusout",this.closeOnBlur,!0),this.iframeDocument?.addEventListener("click",this.handleIframeClick,!0)}),document.addEventListener("click",this.handleDocumentClick,!0),this.host.addEventListener("keydown",this.handleKeydown,!0)}removeListeners(){this.options.tabInside&&this.menuElement?.removeEventListener("focusout",this.closeOnBlur,!0),document.removeEventListener("click",this.handleDocumentClick,!0),this.iframeDocument?.removeEventListener("click",this.handleIframeClick,!0),this.host.removeEventListener("keydown",this.handleKeydown,!0)}get iframeDocument(){return document.querySelector("bkd-portal")?.shadowRoot?.querySelector("bkd-content")?.shadowRoot?.querySelector("iframe")?.contentDocument??null}activeLinkIndex(){const e=this.focusedItem?this.items.indexOf(this.focusedItem):-1;return e===-1?null:e}nextLinkIndex(e){const n=this.activeLinkIndex(),i=0,o=this.items.length-1;if(n===null)return e>0?i:o;const s=n+e;return s>o?i:s<i?o:s}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Rt extends On{constructor(e){if(super(e),this.it=Ce,e.type!==Oi.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===Ce||e==null)return this._t=void 0,this.it=e;if(e===Ii)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const n=[e];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}Rt.directiveName="unsafeHTML",Rt.resultType=1;const Z=Cn(Rt),_o=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="m22 15.975-1.775 1.775L12 9.525 3.775 17.75 2 15.975l10-10 10 10Z"/></svg>
`,To=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M2 8.025 3.775 6.25 12 14.475l8.225-8.225L22 8.025l-10 10-10-10Z"/></svg>
`;function Nn(t){return[{key:"myProfile",label:b("Mein Profil"),href:J("myProfile")},{key:"mySettings",label:b("Einstellungen"),href:J("mySettings")},{key:"videos",label:b("Video-Tutorials"),href:t==="de-CH"?"https://www.youtube.com/playlist?list=PLLDtLiOuctbx-_EQWgWqTO1MRbX845OEf":"https://www.youtube.com/playlist?list=PLLDtLiOuctbyEegnquAkaW4u8cm62lFAU",img:"/icons/external-link.svg",external:!0},{key:"logout",label:b("Logout"),href:"#",img:"/icons/logout.svg"}]}var Eo=Object.defineProperty,Ao=Object.getOwnPropertyDescriptor,$n=(t,e,n,i)=>{for(var o=i>1?void 0:i?Ao(e,n):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(o=(i?a(e,n,o):a(o))||o);return i&&o&&Eo(e,n,o),o};let tt=class extends D{constructor(){super(),this.openGroup=null,this.handleKeyup=t=>{t.key==="Tab"&&this.openGroupOfFocusedItem()},new Y(this,u)}connectedCallback(){super.connectedCallback(),this.openGroupOfCurrentItem(),this.addEventListener("keyup",this.handleKeyup)}disconnectedCallback(){this.removeEventListener("keyup",this.handleKeyup),super.disconnectedCallback()}openGroupOfCurrentItem(){this.openGroup||(this.openGroup=u.navigationGroup)}openGroupOfFocusedItem(){const t=this.shadowRoot?.activeElement;if(t instanceof HTMLElement){const e=t.dataset.itemKey;if(e){const{group:n}=Ri(xe.navigation,e);n&&n.label!==this.openGroup?.label&&(this.openGroup=n)}}}handleGroupClick(t,e){t.preventDefault(),this.openGroup=e.label!==this.openGroup?.label?e:null}handleNavItemClick(t,e){t.preventDefault(),this.dispatchEvent(new CustomEvent("bkdnavitemclick",{detail:{item:e},composed:!0,bubbles:!0}))}handleSettingsItemClick(t,e){this.dispatchEvent(new CustomEvent("bkdsettingsitemclick",{detail:{item:e,event:t},composed:!0,bubbles:!0}))}renderGroup(t){const e=t.label===this.openGroup?.label;return h`
      <li
        class=${ue({group:!0,open:e})}
        aria-expanded=${e}
      >
        <button
          class="group-header"
          tabindex="-1"
          @click=${n=>this.handleGroupClick(n,t)}
        >
          <label> ${t.label} </label>
          ${Z(e?_o:To)}
        </button>
        <ul class="items">
          ${de(t.items,n=>n.label,this.renderNavItem.bind(this))}
        </ul>
      </li>
    `}renderNavItem(t){const e=t.key===u.navigationItemKey;return h`
      <li
        class=${ue({item:!0,active:e})}
      >
        <a
          href=${J(t)}
          data-item-key=${t.key}
          @click=${n=>this.handleNavItemClick(n,t)}
        >
          ${t.label}
        </a>
      </li>
    `}renderSettingsItem(t){return h`<li>
      <a
        href=${t.href}
        target=${t.external?"_blank":"_self"}
        @click=${e=>this.handleSettingsItemClick(e,t)}
      >
        ${t.label}
      </a>
      ${t.img?h`<img src=${t.img} alt="" width="24" height="24" />`:Ce}
    </li>`}render(){return h`
      <nav role="navigation" aria-label=${b("Mobile Navigation")}>
        <ul class="nav">
          ${de(u.navigation,t=>t.label,this.renderGroup.bind(this))}
        </ul>
        <div class="service-nav">
          <ul>
            ${de(Nn(u.locale),t=>t.key,this.renderSettingsItem.bind(this))}
          </ul>
          ${X(u.allowedLocales.length>1,()=>h`<bkd-language-switcher></bkd-language-switcher>`)}
        </div>
      </nav>
    `}};tt.styles=[P,R`
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
    `];$n([fe()],tt.prototype,"openGroup",2);tt=$n([N("bkd-mobile-nav"),$()],tt);var So=Object.defineProperty,xo=Object.getOwnPropertyDescriptor,zt=(t,e,n,i)=>{for(var o=i>1?void 0:i?xo(e,n):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(o=(i?a(e,n,o):a(o))||o);return i&&o&&So(e,n,o),o};let Oe=class extends D{constructor(){super(),this.open=!1,new Y(this,u)}handleItemClick(t,e){t.preventDefault(),this.dispatchEvent(new CustomEvent("bkdnavitemclick",{detail:{item:e},composed:!0,bubbles:!0}))}renderItem(t){const e=t.key===u.navigationItemKey;return h`
      <li role="presentation" class=${ue({active:e})}>
        <a
          role="menuitem"
          href=${J(t)}
          @click=${n=>this.handleItemClick(n,t)}
          >${t.label}</a
        >
      </li>
    `}render(){if(!(!this.group||!this.open))return h`
      <ul role="menu">
        ${de(this.group.items,t=>t.key,this.renderItem.bind(this))}
      </ul>
    `}};Oe.styles=[P,R`
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
    `];zt([M()],Oe.prototype,"group",2);zt([M()],Oe.prototype,"open",2);Oe=zt([N("bkd-nav-group-dropdown"),$()],Oe);var Co=Object.defineProperty,Oo=Object.getOwnPropertyDescriptor,Pe=(t,e,n,i)=>{for(var o=i>1?void 0:i?Oo(e,n):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(o=(i?a(e,n,o):a(o))||o);return i&&o&&Co(e,n,o),o};let ee=class extends D{constructor(){super(...arguments),this.dropdown=new Le(this,{queryToggleElement:()=>this.toggleElement??null,queryMenuElement:()=>this.menuElement?.shadowRoot?.querySelector('ul[role="menu"]')??null,queryItems:()=>this.menuElement?.shadowRoot?.querySelectorAll("a[role='menuitem']")??null,queryFocused:()=>this.menuElement?.shadowRoot?.activeElement??null})}toggle(t){t.preventDefault(),this.dropdown.toggle()}handleItemClick(){this.dropdown.close()}render(){if(this.group)return h`
      <a
        href="#"
        @click=${this.toggle.bind(this)}
        class=${ue({active:!!this.active})}
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
    `}};ee.styles=[P,R`
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
    `];Pe([M()],ee.prototype,"group",2);Pe([M({type:Boolean})],ee.prototype,"active",2);Pe([H("a")],ee.prototype,"toggleElement",2);Pe([H("bkd-nav-group-dropdown")],ee.prototype,"menuElement",2);ee=Pe([N("bkd-nav-group-toggle"),$()],ee);var Io=Object.getOwnPropertyDescriptor,Ro=(t,e,n,i)=>{for(var o=i>1?void 0:i?Io(e,n):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(o=a(o)||o);return o};let Lt=class extends D{constructor(){super(),new Y(this,u)}renderGroupToggle(t,e){return h`
      <bkd-nav-group-toggle
        .group=${t}
        ?active=${e}
      ></bkd-nav-group-toggle>
    `}render(){return h`<nav role="navigation" aria-label=${b("Hauptnavigation")}>
      ${de(u.navigation,t=>t.label,t=>this.renderGroupToggle(t,t.label===u.navigationGroup?.label))}
    </nav>`}};Lt.styles=[P,R`
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
    `];Lt=Ro([N("bkd-nav"),$()],Lt);var Lo=Object.defineProperty,Po=Object.getOwnPropertyDescriptor,Mn=(t,e,n,i)=>{for(var o=i>1?void 0:i?Po(e,n):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(o=(i?a(e,n,o):a(o))||o);return i&&o&&Lo(e,n,o),o};let nt=class extends D{constructor(){super(...arguments),this.open=!1}toggle(){this.dispatchEvent(new CustomEvent("bkdhamburgertoggle",{bubbles:!0,composed:!0}))}render(){const t=this.open?"/icons/close.svg":"/icons/hamburger.svg";return h`
      <button
        class="hamburger"
        aria-expanded=${this.open}
        aria-label=${b("Menü")}
        @click=${this.toggle.bind(this)}
      >
        <img src=${t} alt="" width="32" height="32" />
      </button>
    `}};nt.styles=[P,R`
      :host {
        display: flex;
      }

      button {
        background: transparent;
        border: none;
        cursor: pointer;
      }
    `];Mn([M()],nt.prototype,"open",2);nt=Mn([N("bkd-hamburger"),$()],nt);const Do='<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path fill="currentColor" d="M16 2a2.25 2.25 0 0 0-2.25 2.25v1.043C9.87 6.293 7 9.807 7 14v7.5h18V14c0-4.193-2.87-7.707-6.75-8.707V4.25A2.25 2.25 0 0 0 16 2M4 24.5v3h9.404A3 3 0 1 0 19 29a3 3 0 0 0-.407-1.5H28v-3z"/></svg>',No='<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" preserveAspectRatio="xMidYMid" style="margin:auto;background:#fff 0 0;display:block;shape-rendering:auto" viewBox="0 0 100 100"><g transform="translate(82 50)"><circle r="6"><animateTransform attributeName="transform" begin="-0.8571428571428571s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.8571428571428571s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(51.429 -42.913 110.137)"><circle r="6" fill-opacity=".857"><animateTransform attributeName="transform" begin="-0.7142857142857143s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.7142857142857143s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(102.857 -10.937 57.696)"><circle r="6" fill-opacity=".714"><animateTransform attributeName="transform" begin="-0.5714285714285714s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.5714285714285714s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(154.286 3.294 34.358)"><circle r="6" fill-opacity=".571"><animateTransform attributeName="transform" begin="-0.42857142857142855s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.42857142857142855s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(-154.286 14.706 15.642)"><circle r="6" fill-opacity=".429"><animateTransform attributeName="transform" begin="-0.2857142857142857s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.2857142857142857s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(-102.857 28.937 -7.696)"><circle r="6" fill-opacity=".286"><animateTransform attributeName="transform" begin="-0.14285714285714285s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.14285714285714285s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(-51.429 60.913 -60.137)"><circle r="6" fill-opacity=".143"><animateTransform attributeName="transform" begin="0s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="0s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g></svg>',$o='<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path fill="currentColor" d="m13 3-1.333 1.333H5V7h21.333V4.333h-6.666L18.333 3zM6.333 9.667V27c0 1.467 1.2 2.667 2.667 2.667h13.333C23.8 29.667 25 28.467 25 27V9.667z"/></svg>';/*! @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE */const{entries:Un,setPrototypeOf:bn,isFrozen:Mo,getPrototypeOf:Uo,getOwnPropertyDescriptor:zo}=Object;let{freeze:O,seal:U,create:zn}=Object,{apply:Pt,construct:Dt}=typeof Reflect<"u"&&Reflect;O||(O=function(e){return e});U||(U=function(e){return e});Pt||(Pt=function(e,n,i){return e.apply(n,i)});Dt||(Dt=function(e,n){return new e(...n)});const We=I(Array.prototype.forEach),Fo=I(Array.prototype.lastIndexOf),vn=I(Array.prototype.pop),ke=I(Array.prototype.push),Ho=I(Array.prototype.splice),Xe=I(String.prototype.toLowerCase),Et=I(String.prototype.toString),wn=I(String.prototype.match),_e=I(String.prototype.replace),jo=I(String.prototype.indexOf),Go=I(String.prototype.trim),z=I(Object.prototype.hasOwnProperty),C=I(RegExp.prototype.test),Te=qo(TypeError);function I(t){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var n=arguments.length,i=new Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];return Pt(t,e,i)}}function qo(t){return function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return Dt(t,n)}}function p(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Xe;bn&&bn(t,null);let i=e.length;for(;i--;){let o=e[i];if(typeof o=="string"){const s=n(o);s!==o&&(Mo(e)||(e[i]=s),o=s)}t[o]=!0}return t}function Bo(t){for(let e=0;e<t.length;e++)z(t,e)||(t[e]=null);return t}function V(t){const e=zn(null);for(const[n,i]of Un(t))z(t,n)&&(Array.isArray(i)?e[n]=Bo(i):i&&typeof i=="object"&&i.constructor===Object?e[n]=V(i):e[n]=i);return e}function Ee(t,e){for(;t!==null;){const i=zo(t,e);if(i){if(i.get)return I(i.get);if(typeof i.value=="function")return I(i.value)}t=Uo(t)}function n(){return null}return n}const yn=O(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),At=O(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),St=O(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Wo=O(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),xt=O(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Vo=O(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),kn=O(["#text"]),_n=O(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Ct=O(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Tn=O(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Ve=O(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Xo=U(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Yo=U(/<%[\w\W]*|[\w\W]*%>/gm),Ko=U(/\$\{[\w\W]*/gm),Zo=U(/^data-[\-\w.\u00B7-\uFFFF]+$/),Qo=U(/^aria-[\-\w]+$/),Fn=U(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Jo=U(/^(?:\w+script|data):/i),er=U(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Hn=U(/^html$/i),tr=U(/^[a-z][.\w]*(-[.\w]+)+$/i);var En=Object.freeze({__proto__:null,ARIA_ATTR:Qo,ATTR_WHITESPACE:er,CUSTOM_ELEMENT:tr,DATA_ATTR:Zo,DOCTYPE_NAME:Hn,ERB_EXPR:Yo,IS_ALLOWED_URI:Fn,IS_SCRIPT_OR_DATA:Jo,MUSTACHE_EXPR:Xo,TMPLIT_EXPR:Ko});const Ae={element:1,text:3,progressingInstruction:7,comment:8,document:9},nr=function(){return typeof window>"u"?null:window},ir=function(e,n){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let i=null;const o="data-tt-policy-suffix";n&&n.hasAttribute(o)&&(i=n.getAttribute(o));const s="dompurify"+(i?"#"+i:"");try{return e.createPolicy(s,{createHTML(a){return a},createScriptURL(a){return a}})}catch{return console.warn("TrustedTypes policy "+s+" could not be created."),null}},An=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function jn(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:nr();const e=d=>jn(d);if(e.version="3.2.6",e.removed=[],!t||!t.document||t.document.nodeType!==Ae.document||!t.Element)return e.isSupported=!1,e;let{document:n}=t;const i=n,o=i.currentScript,{DocumentFragment:s,HTMLTemplateElement:a,Node:f,Element:T,NodeFilter:G,NamedNodeMap:Wn=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:Vn,DOMParser:Xn,trustedTypes:$e}=t,me=T.prototype,Yn=Ee(me,"cloneNode"),Kn=Ee(me,"remove"),Zn=Ee(me,"nextSibling"),Qn=Ee(me,"childNodes"),Me=Ee(me,"parentNode");if(typeof a=="function"){const d=n.createElement("template");d.content&&d.content.ownerDocument&&(n=d.content.ownerDocument)}let S,ge="";const{implementation:at,createNodeIterator:Jn,createDocumentFragment:ei,getElementsByTagName:ti}=n,{importNode:ni}=i;let x=An();e.isSupported=typeof Un=="function"&&typeof Me=="function"&&at&&at.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:lt,ERB_EXPR:ct,TMPLIT_EXPR:dt,DATA_ATTR:ii,ARIA_ATTR:oi,IS_SCRIPT_OR_DATA:ri,ATTR_WHITESPACE:jt,CUSTOM_ELEMENT:si}=En;let{IS_ALLOWED_URI:Gt}=En,y=null;const qt=p({},[...yn,...At,...St,...xt,...kn]);let _=null;const Bt=p({},[..._n,...Ct,...Tn,...Ve]);let v=Object.seal(zn(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),be=null,ut=null,Wt=!0,ht=!0,Vt=!1,Xt=!0,ie=!1,Ue=!0,Q=!1,pt=!1,ft=!1,oe=!1,ze=!1,Fe=!1,Yt=!0,Kt=!1;const ai="user-content-";let mt=!0,ve=!1,re={},se=null;const Zt=p({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Qt=null;const Jt=p({},["audio","video","img","source","image","track"]);let gt=null;const en=p({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),He="http://www.w3.org/1998/Math/MathML",je="http://www.w3.org/2000/svg",q="http://www.w3.org/1999/xhtml";let ae=q,bt=!1,vt=null;const li=p({},[He,je,q],Et);let Ge=p({},["mi","mo","mn","ms","mtext"]),qe=p({},["annotation-xml"]);const ci=p({},["title","style","font","a","script"]);let we=null;const di=["application/xhtml+xml","text/html"],ui="text/html";let k=null,le=null;const hi=n.createElement("form"),tn=function(r){return r instanceof RegExp||r instanceof Function},wt=function(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(le&&le===r)){if((!r||typeof r!="object")&&(r={}),r=V(r),we=di.indexOf(r.PARSER_MEDIA_TYPE)===-1?ui:r.PARSER_MEDIA_TYPE,k=we==="application/xhtml+xml"?Et:Xe,y=z(r,"ALLOWED_TAGS")?p({},r.ALLOWED_TAGS,k):qt,_=z(r,"ALLOWED_ATTR")?p({},r.ALLOWED_ATTR,k):Bt,vt=z(r,"ALLOWED_NAMESPACES")?p({},r.ALLOWED_NAMESPACES,Et):li,gt=z(r,"ADD_URI_SAFE_ATTR")?p(V(en),r.ADD_URI_SAFE_ATTR,k):en,Qt=z(r,"ADD_DATA_URI_TAGS")?p(V(Jt),r.ADD_DATA_URI_TAGS,k):Jt,se=z(r,"FORBID_CONTENTS")?p({},r.FORBID_CONTENTS,k):Zt,be=z(r,"FORBID_TAGS")?p({},r.FORBID_TAGS,k):V({}),ut=z(r,"FORBID_ATTR")?p({},r.FORBID_ATTR,k):V({}),re=z(r,"USE_PROFILES")?r.USE_PROFILES:!1,Wt=r.ALLOW_ARIA_ATTR!==!1,ht=r.ALLOW_DATA_ATTR!==!1,Vt=r.ALLOW_UNKNOWN_PROTOCOLS||!1,Xt=r.ALLOW_SELF_CLOSE_IN_ATTR!==!1,ie=r.SAFE_FOR_TEMPLATES||!1,Ue=r.SAFE_FOR_XML!==!1,Q=r.WHOLE_DOCUMENT||!1,oe=r.RETURN_DOM||!1,ze=r.RETURN_DOM_FRAGMENT||!1,Fe=r.RETURN_TRUSTED_TYPE||!1,ft=r.FORCE_BODY||!1,Yt=r.SANITIZE_DOM!==!1,Kt=r.SANITIZE_NAMED_PROPS||!1,mt=r.KEEP_CONTENT!==!1,ve=r.IN_PLACE||!1,Gt=r.ALLOWED_URI_REGEXP||Fn,ae=r.NAMESPACE||q,Ge=r.MATHML_TEXT_INTEGRATION_POINTS||Ge,qe=r.HTML_INTEGRATION_POINTS||qe,v=r.CUSTOM_ELEMENT_HANDLING||{},r.CUSTOM_ELEMENT_HANDLING&&tn(r.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(v.tagNameCheck=r.CUSTOM_ELEMENT_HANDLING.tagNameCheck),r.CUSTOM_ELEMENT_HANDLING&&tn(r.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(v.attributeNameCheck=r.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),r.CUSTOM_ELEMENT_HANDLING&&typeof r.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(v.allowCustomizedBuiltInElements=r.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),ie&&(ht=!1),ze&&(oe=!0),re&&(y=p({},kn),_=[],re.html===!0&&(p(y,yn),p(_,_n)),re.svg===!0&&(p(y,At),p(_,Ct),p(_,Ve)),re.svgFilters===!0&&(p(y,St),p(_,Ct),p(_,Ve)),re.mathMl===!0&&(p(y,xt),p(_,Tn),p(_,Ve))),r.ADD_TAGS&&(y===qt&&(y=V(y)),p(y,r.ADD_TAGS,k)),r.ADD_ATTR&&(_===Bt&&(_=V(_)),p(_,r.ADD_ATTR,k)),r.ADD_URI_SAFE_ATTR&&p(gt,r.ADD_URI_SAFE_ATTR,k),r.FORBID_CONTENTS&&(se===Zt&&(se=V(se)),p(se,r.FORBID_CONTENTS,k)),mt&&(y["#text"]=!0),Q&&p(y,["html","head","body"]),y.table&&(p(y,["tbody"]),delete be.tbody),r.TRUSTED_TYPES_POLICY){if(typeof r.TRUSTED_TYPES_POLICY.createHTML!="function")throw Te('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof r.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Te('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');S=r.TRUSTED_TYPES_POLICY,ge=S.createHTML("")}else S===void 0&&(S=ir($e,o)),S!==null&&typeof ge=="string"&&(ge=S.createHTML(""));O&&O(r),le=r}},nn=p({},[...At,...St,...Wo]),on=p({},[...xt,...Vo]),pi=function(r){let l=Me(r);(!l||!l.tagName)&&(l={namespaceURI:ae,tagName:"template"});const c=Xe(r.tagName),g=Xe(l.tagName);return vt[r.namespaceURI]?r.namespaceURI===je?l.namespaceURI===q?c==="svg":l.namespaceURI===He?c==="svg"&&(g==="annotation-xml"||Ge[g]):!!nn[c]:r.namespaceURI===He?l.namespaceURI===q?c==="math":l.namespaceURI===je?c==="math"&&qe[g]:!!on[c]:r.namespaceURI===q?l.namespaceURI===je&&!qe[g]||l.namespaceURI===He&&!Ge[g]?!1:!on[c]&&(ci[c]||!nn[c]):!!(we==="application/xhtml+xml"&&vt[r.namespaceURI]):!1},j=function(r){ke(e.removed,{element:r});try{Me(r).removeChild(r)}catch{Kn(r)}},ce=function(r,l){try{ke(e.removed,{attribute:l.getAttributeNode(r),from:l})}catch{ke(e.removed,{attribute:null,from:l})}if(l.removeAttribute(r),r==="is")if(oe||ze)try{j(l)}catch{}else try{l.setAttribute(r,"")}catch{}},rn=function(r){let l=null,c=null;if(ft)r="<remove></remove>"+r;else{const w=wn(r,/^[\r\n\t ]+/);c=w&&w[0]}we==="application/xhtml+xml"&&ae===q&&(r='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+r+"</body></html>");const g=S?S.createHTML(r):r;if(ae===q)try{l=new Xn().parseFromString(g,we)}catch{}if(!l||!l.documentElement){l=at.createDocument(ae,"template",null);try{l.documentElement.innerHTML=bt?ge:g}catch{}}const E=l.body||l.documentElement;return r&&c&&E.insertBefore(n.createTextNode(c),E.childNodes[0]||null),ae===q?ti.call(l,Q?"html":"body")[0]:Q?l.documentElement:E},sn=function(r){return Jn.call(r.ownerDocument||r,r,G.SHOW_ELEMENT|G.SHOW_COMMENT|G.SHOW_TEXT|G.SHOW_PROCESSING_INSTRUCTION|G.SHOW_CDATA_SECTION,null)},yt=function(r){return r instanceof Vn&&(typeof r.nodeName!="string"||typeof r.textContent!="string"||typeof r.removeChild!="function"||!(r.attributes instanceof Wn)||typeof r.removeAttribute!="function"||typeof r.setAttribute!="function"||typeof r.namespaceURI!="string"||typeof r.insertBefore!="function"||typeof r.hasChildNodes!="function")},an=function(r){return typeof f=="function"&&r instanceof f};function B(d,r,l){We(d,c=>{c.call(e,r,l,le)})}const ln=function(r){let l=null;if(B(x.beforeSanitizeElements,r,null),yt(r))return j(r),!0;const c=k(r.nodeName);if(B(x.uponSanitizeElement,r,{tagName:c,allowedTags:y}),Ue&&r.hasChildNodes()&&!an(r.firstElementChild)&&C(/<[/\w!]/g,r.innerHTML)&&C(/<[/\w!]/g,r.textContent)||r.nodeType===Ae.progressingInstruction||Ue&&r.nodeType===Ae.comment&&C(/<[/\w]/g,r.data))return j(r),!0;if(!y[c]||be[c]){if(!be[c]&&dn(c)&&(v.tagNameCheck instanceof RegExp&&C(v.tagNameCheck,c)||v.tagNameCheck instanceof Function&&v.tagNameCheck(c)))return!1;if(mt&&!se[c]){const g=Me(r)||r.parentNode,E=Qn(r)||r.childNodes;if(E&&g){const w=E.length;for(let L=w-1;L>=0;--L){const W=Yn(E[L],!0);W.__removalCount=(r.__removalCount||0)+1,g.insertBefore(W,Zn(r))}}}return j(r),!0}return r instanceof T&&!pi(r)||(c==="noscript"||c==="noembed"||c==="noframes")&&C(/<\/no(script|embed|frames)/i,r.innerHTML)?(j(r),!0):(ie&&r.nodeType===Ae.text&&(l=r.textContent,We([lt,ct,dt],g=>{l=_e(l,g," ")}),r.textContent!==l&&(ke(e.removed,{element:r.cloneNode()}),r.textContent=l)),B(x.afterSanitizeElements,r,null),!1)},cn=function(r,l,c){if(Yt&&(l==="id"||l==="name")&&(c in n||c in hi))return!1;if(!(ht&&!ut[l]&&C(ii,l))){if(!(Wt&&C(oi,l))){if(!_[l]||ut[l]){if(!(dn(r)&&(v.tagNameCheck instanceof RegExp&&C(v.tagNameCheck,r)||v.tagNameCheck instanceof Function&&v.tagNameCheck(r))&&(v.attributeNameCheck instanceof RegExp&&C(v.attributeNameCheck,l)||v.attributeNameCheck instanceof Function&&v.attributeNameCheck(l))||l==="is"&&v.allowCustomizedBuiltInElements&&(v.tagNameCheck instanceof RegExp&&C(v.tagNameCheck,c)||v.tagNameCheck instanceof Function&&v.tagNameCheck(c))))return!1}else if(!gt[l]){if(!C(Gt,_e(c,jt,""))){if(!((l==="src"||l==="xlink:href"||l==="href")&&r!=="script"&&jo(c,"data:")===0&&Qt[r])){if(!(Vt&&!C(ri,_e(c,jt,"")))){if(c)return!1}}}}}}return!0},dn=function(r){return r!=="annotation-xml"&&wn(r,si)},un=function(r){B(x.beforeSanitizeAttributes,r,null);const{attributes:l}=r;if(!l||yt(r))return;const c={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:_,forceKeepAttr:void 0};let g=l.length;for(;g--;){const E=l[g],{name:w,namespaceURI:L,value:W}=E,ye=k(w),kt=W;let A=w==="value"?kt:Go(kt);if(c.attrName=ye,c.attrValue=A,c.keepAttr=!0,c.forceKeepAttr=void 0,B(x.uponSanitizeAttribute,r,c),A=c.attrValue,Kt&&(ye==="id"||ye==="name")&&(ce(w,r),A=ai+A),Ue&&C(/((--!?|])>)|<\/(style|title)/i,A)){ce(w,r);continue}if(c.forceKeepAttr)continue;if(!c.keepAttr){ce(w,r);continue}if(!Xt&&C(/\/>/i,A)){ce(w,r);continue}ie&&We([lt,ct,dt],pn=>{A=_e(A,pn," ")});const hn=k(r.nodeName);if(!cn(hn,ye,A)){ce(w,r);continue}if(S&&typeof $e=="object"&&typeof $e.getAttributeType=="function"&&!L)switch($e.getAttributeType(hn,ye)){case"TrustedHTML":{A=S.createHTML(A);break}case"TrustedScriptURL":{A=S.createScriptURL(A);break}}if(A!==kt)try{L?r.setAttributeNS(L,w,A):r.setAttribute(w,A),yt(r)?j(r):vn(e.removed)}catch{ce(w,r)}}B(x.afterSanitizeAttributes,r,null)},fi=function d(r){let l=null;const c=sn(r);for(B(x.beforeSanitizeShadowDOM,r,null);l=c.nextNode();)B(x.uponSanitizeShadowNode,l,null),ln(l),un(l),l.content instanceof s&&d(l.content);B(x.afterSanitizeShadowDOM,r,null)};return e.sanitize=function(d){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=null,c=null,g=null,E=null;if(bt=!d,bt&&(d="<!-->"),typeof d!="string"&&!an(d))if(typeof d.toString=="function"){if(d=d.toString(),typeof d!="string")throw Te("dirty is not a string, aborting")}else throw Te("toString is not a function");if(!e.isSupported)return d;if(pt||wt(r),e.removed=[],typeof d=="string"&&(ve=!1),ve){if(d.nodeName){const W=k(d.nodeName);if(!y[W]||be[W])throw Te("root node is forbidden and cannot be sanitized in-place")}}else if(d instanceof f)l=rn("<!---->"),c=l.ownerDocument.importNode(d,!0),c.nodeType===Ae.element&&c.nodeName==="BODY"||c.nodeName==="HTML"?l=c:l.appendChild(c);else{if(!oe&&!ie&&!Q&&d.indexOf("<")===-1)return S&&Fe?S.createHTML(d):d;if(l=rn(d),!l)return oe?null:Fe?ge:""}l&&ft&&j(l.firstChild);const w=sn(ve?d:l);for(;g=w.nextNode();)ln(g),un(g),g.content instanceof s&&fi(g.content);if(ve)return d;if(oe){if(ze)for(E=ei.call(l.ownerDocument);l.firstChild;)E.appendChild(l.firstChild);else E=l;return(_.shadowroot||_.shadowrootmode)&&(E=ni.call(i,E,!0)),E}let L=Q?l.outerHTML:l.innerHTML;return Q&&y["!doctype"]&&l.ownerDocument&&l.ownerDocument.doctype&&l.ownerDocument.doctype.name&&C(Hn,l.ownerDocument.doctype.name)&&(L="<!DOCTYPE "+l.ownerDocument.doctype.name+`>
`+L),ie&&We([lt,ct,dt],W=>{L=_e(L,W," ")}),S&&Fe?S.createHTML(L):L},e.setConfig=function(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};wt(d),pt=!0},e.clearConfig=function(){le=null,pt=!1},e.isValidAttribute=function(d,r,l){le||wt({});const c=k(d),g=k(r);return cn(c,g,l)},e.addHook=function(d,r){typeof r=="function"&&ke(x[d],r)},e.removeHook=function(d,r){if(r!==void 0){const l=Fo(x[d],r);return l===-1?void 0:Ho(x[d],l,1)[0]}return vn(x[d])},e.removeHooks=function(d){x[d]=[]},e.removeAllHooks=function(){x=An()},e}var or=jn();const rr={ALLOWED_TAGS:["br","div","span","a","ul","ol","li","sup","sub","code","cite"],ALLOWED_ATTR:["style","href"]};function Sn(t){return or.sanitize(t,rr)}var sr=Object.defineProperty,ar=Object.getOwnPropertyDescriptor,rt=(t,e,n,i)=>{for(var o=i>1?void 0:i?ar(e,n):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(o=(i?a(e,n,o):a(o))||o);return i&&o&&sr(e,n,o),o};let he=class extends D{constructor(){super(...arguments),this.open=!1,this.state=Ye.PENDING,this.notifications=[]}handleDeleteAllNotifications(){this.dispatchEvent(new CustomEvent("bkddeleteallnotifications",{bubbles:!0,composed:!0}))}handleDeleteNotification(t){this.dispatchEvent(new CustomEvent("bkddeletenotification",{bubbles:!0,composed:!0,detail:{id:t}}))}renderContent(){return this.state===Ye.ERROR?h`<div class="error">
        ${b("Fehler beim Laden der Benachrichtigungen")}
      </div>`:this.state===Ye.PENDING?h`<div class="pending">${Z(No)}</div>`:this.notifications.length===0?h`<div class="notification">${b("Keine Benachrichtigungen")}</div>`:de(this.notifications,t=>t.id,t=>this.renderNotification(t))}renderNotification(t){const e=Sn(t.subject),n=Sn(t.body);return h`<div class="notification">
      <div class="text">
        <div class="subject">${Z(e)}</div>
        <div class="body">${Z(n)}</div>
      </div>
      <button
        type="button"
        aria-label="${b("Benachrichtigung löschen")}"
        @click=${()=>this.handleDeleteNotification(t.id)}
      >
        ${Z($o)}
      </button>
    </div> `}render(){if(this.open)return h`<div id="notifications-dropdown">
      <div class="header">
        <h2>${b("Benachrichtigungen")}</h2>
        <button
          type="button"
          ?disabled=${!this.notifications||this.notifications.length===0}
          @click="${()=>this.handleDeleteAllNotifications()}"
        >
          ${b("Alle löschen")}
        </button>
      </div>
      <div class="content">${this.renderContent()}</div>
    </div>`}};he.styles=[P,R`
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
    `];rt([M()],he.prototype,"open",2);rt([M()],he.prototype,"state",2);rt([M()],he.prototype,"notifications",2);he=rt([N("bkd-notifications-dropdown"),$()],he);var lr=Object.defineProperty,cr=Object.getOwnPropertyDescriptor,De=(t,e,n,i)=>{for(var o=i>1?void 0:i?cr(e,n):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(o=(i?a(e,n,o):a(o))||o);return i&&o&&lr(e,n,o),o};const Nt=$t();typeof Nt?.notificationRefreshTime!="number"&&(Nt.notificationRefreshTime=30);var Ye=(t=>(t.PENDING="pending",t.ERROR="error",t.SUCCESS="success",t))(Ye||{});let te=class extends D{constructor(){super(...arguments),this.state="pending",this.dropdown=new Le(this,{queryToggleElement:()=>this.toggleElement??null,queryMenuElement:()=>this.dropdownElement?.shadowRoot??null,queryItems:()=>this.dropdownElement?.shadowRoot?.querySelectorAll("button")??null,queryFocused:()=>this.dropdownElement?.shadowRoot?.activeElement??null})}connectedCallback(){super.connectedCallback(),this.fetch(),this.interval=setInterval(()=>this.fetch(),Nt.notificationRefreshTime*1e3)}disconnectedCallback(){clearInterval(this.interval),super.disconnectedCallback()}handleDeleteAllNotifications(){const t=[];mn(t),this.notifications=t}handleDeleteNotification(t){if(!this.notifications)return;const e=this.notifications.filter(n=>n.id!==t.detail.id);mn(e),this.notifications=e}async fetch(){try{this.notifications=await Li(),this.state="success"}catch{this.state="error"}}render(){return h` <button
        id="notifications-toggle"
        type="button"
        aria-label="${b("Benachrichtigungen")}"
        aria-expanded=${this.dropdown.open}
        @click="${()=>this.dropdown.toggle()}"
      >
        ${Z(Do)}
        <span
          class="circle"
          ?hidden=${this.state!=="success"||this.notifications?.length===0}
        >
          ${this.notifications?.length}
        </span>
      </button>
      <bkd-notifications-dropdown
        .open=${this.dropdown.open}
        .state=${this.state}
        .notifications=${this.notifications}
        @bkddeleteallnotifications=${this.handleDeleteAllNotifications.bind(this)}
        @bkddeletenotification=${this.handleDeleteNotification.bind(this)}
      >
      </bkd-notifications-dropdown>`}};te.styles=[P,R`
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
    `];De([H("button")],te.prototype,"toggleElement",2);De([H("bkd-notifications-dropdown")],te.prototype,"dropdownElement",2);De([fe()],te.prototype,"notifications",2);De([fe()],te.prototype,"state",2);te=De([N("bkd-notifications-toggle"),$()],te);const dr=`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="7.4" fill="none"><path fill="currentColor" d="m6 7.4-6-6L1.4 0 6 4.6 10.6 0 12 1.4Z"/></svg>
`,ur=`<svg xmlns="http://www.w3.org/2000/svg" width="11.414" height="11.414" fill="none"><path stroke="currentColor" stroke-width="2" d="m.707.707 10 10m-10 0 10-10"/></svg>
`,hr=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M2 20v-2.8a3 3 0 0 1 .425-1.563A2.794 2.794 0 0 1 3.6 14.55c1-.5 2.038-.883 3.113-1.15 1.074-.267 2.17-.4 3.287-.4.417 0 .833.03 1.25.088.417.058.833.129 1.25.212v1.575c-.75.367-1.354.85-1.813 1.45-.458.6-.687 1.383-.687 2.35V20H2Zm10 0v-1.4c0-.4.104-.77.313-1.113a1.76 1.76 0 0 1 .887-.737c.6-.25 1.22-.438 1.863-.563a10.11 10.11 0 0 1 3.874 0 9.604 9.604 0 0 1 1.863.563c.383.15.68.396.887.738.209.341.313.712.313 1.112V20H12Zm5-5c-.7 0-1.292-.242-1.775-.725-.483-.483-.725-1.075-.725-1.775s.242-1.292.725-1.775C15.708 10.242 16.3 10 17 10s1.292.242 1.775.725c.483.483.725 1.075.725 1.775s-.242 1.292-.725 1.775C18.292 14.758 17.7 15 17 15Zm-7-3c-1.1 0-2.042-.392-2.825-1.175C6.392 10.042 6 9.1 6 8s.392-2.042 1.175-2.825C7.958 4.392 8.9 4 10 4s2.042.392 2.825 1.175C13.608 5.958 14 6.9 14 8s-.392 2.042-1.175 2.825C12.042 11.608 11.1 12 10 12Z"/></svg>
`;function pr(t,e,n){const i=document.createElement("form");i.method=t,i.style.visibility="hidden",i.action=e,Object.keys(n).forEach(o=>{const s=document.createElement("input");s.type="hidden",s.name=o,s.value=n[o],i.appendChild(s)}),document.body.appendChild(i),i.submit()}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Gn(t,e){if(t!==void 0){let n=0;for(const i of t)yield e(i,n++)}}var fr=Object.defineProperty,mr=Object.getOwnPropertyDescriptor,st=(t,e,n,i)=>{for(var o=i>1?void 0:i?mr(e,n):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(o=(i?a(e,n,o):a(o))||o);return i&&o&&fr(e,n,o),o};let pe=class extends D{constructor(){super(...arguments),this.availableSubstitutions=[],this.activeSubstitution=null,this.open=!1}get displayedSubstitutions(){return this.availableSubstitutions.filter(t=>!this.activeSubstitution||t.Id===this.activeSubstitution.Id)}handleSubstitutionClick(t,e){t.preventDefault(),this.dispatchEvent(new CustomEvent("bkdsubstitutionstart",{detail:{substitution:e},composed:!0,bubbles:!0}))}handleStopClick(){this.dispatchEvent(new CustomEvent("bkdsubstitutionstop",{composed:!0,bubbles:!0}))}handleCloseClick(){this.dispatchEvent(new CustomEvent("bkdclose"))}renderSubstitution(t){const e=t.Id===this.activeSubstitution?.Id;return h`
      <li role="presentation" class=${ue({active:e})}>
        <a
          role="menuitem"
          href="#"
          @click=${n=>this.handleSubstitutionClick(n,t)}
          >${t.Holder}</a
        >
      </li>
    `}render(){if(this.open)return h`
      <ul role="menu" id="substitutions-menu">
        <li role="presentation" class="dropdown-menu-header">
          <button
            role="menuitem"
            class="dropdown-menu-close"
            @click=${this.handleCloseClick.bind(this)}
          >
            <img src="icons/close.svg" alt=${b("Schliessen")} />
          </button>
          <div class="dropdown-menu-heading">
            ${b("Stellvertretung ausüben")}
          </div>
        </li>
        ${Gn(this.displayedSubstitutions,this.renderSubstitution.bind(this))}
        ${X(this.activeSubstitution,()=>h`<li role="presentation" class="dropdown-menu-stop">
              <button role="menuitem" @click=${this.handleStopClick.bind(this)}>
                ${b("Stellvertretung beenden")}
              </button>
            </li>`)}
      </ul>
    `}};pe.styles=[P,R`
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
    `];st([M()],pe.prototype,"availableSubstitutions",2);st([M()],pe.prototype,"activeSubstitution",2);st([M()],pe.prototype,"open",2);pe=st([N("bkd-substitutions-dropdown"),$()],pe);var gr=Object.defineProperty,br=Object.getOwnPropertyDescriptor,Ne=(t,e,n,i)=>{for(var o=i>1?void 0:i?br(e,n):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(o=(i?a(e,n,o):a(o))||o);return i&&o&&gr(e,n,o),o};let ne=class extends D{constructor(){super(),this.availableSubstitutions=[],this.activeSubstitution=null,this.dropdown=new Le(this,{queryToggleElement:()=>this.toggleElement??null,queryMenuElement:()=>this.menuElement?.shadowRoot??null,tabInside:!this.isLargeScreen(),queryItems:()=>this.menuElement?.shadowRoot?.querySelectorAll("a[role='menuitem']")??null,queryFocused:()=>this.menuElement?.shadowRoot?.activeElement??null}),new Y(this,u)}connectedCallback(){super.connectedCallback(),this.fetch()}async fetch(){const t=await Pi();this.availableSubstitutions=t.filter(n=>this.isNotInFuture(n)).sort((n,i)=>n.Holder.localeCompare(i.Holder));const e=this.getActiveSubstitutionId();this.activeSubstitution=this.availableSubstitutions.find(n=>n.Id===e)??null}isNotInFuture(t){return!!t.DateFrom&&new Date(t.DateFrom)<=new Date}getActiveSubstitutionId(){return m.accessTokenPayload?.substitutionId??null}toggle(t){t.preventDefault(),this.activeSubstitution&&this.isLargeScreen()?this.stopSubstitution():this.dropdown.toggle()}isLargeScreen(){return window.innerWidth>1200}startSubstitution(t){this.activeSubstitution||this.redirect(t,"start")}stopSubstitution(){this.activeSubstitution&&this.redirect(this.activeSubstitution,"stop")}redirect(t,e){const{oAuthServer:n,oAuthPrefix:i}=$t(),o=`${n}/${i}/Authorization/Substitutions/${t.Id}/${e}`;pr("POST",o,{access_token:m.accessToken??"",redirect_uri:J("home")})}handleSubstitutionStart(t){this.dropdown.close(),this.startSubstitution(t.detail.substitution)}handleSubstitutionStop(){this.dropdown.close(),this.stopSubstitution()}getLabel(){return this.activeSubstitution?.Holder||b("Stellvertretung ausüben")}isAllowed(){return u.app.scope==="Tutoring"}render(){if(!(!this.isAllowed()||this.availableSubstitutions.length===0))return h`
      <button
        class=${ue({active:!!this.activeSubstitution,open:this.dropdown.open})}
        @click=${this.toggle.bind(this)}
        aria-label=${this.getLabel()}
        aria-expanded=${this.dropdown.open}
        aria-haspopup="menu"
      >
        <div class="icon">${Z(hr)}</div>
        <div class="label">${this.getLabel()}</div>
        <div class="icon-caret">
          ${Z(this.activeSubstitution?ur:dr)}
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
    `}};ne.styles=[P,R`
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
    `];Ne([H("button")],ne.prototype,"toggleElement",2);Ne([H("bkd-substitutions-dropdown")],ne.prototype,"menuElement",2);Ne([fe()],ne.prototype,"availableSubstitutions",2);Ne([fe()],ne.prototype,"activeSubstitution",2);ne=Ne([N("bkd-substitutions-toggle"),$()],ne);var vr=Object.defineProperty,wr=Object.getOwnPropertyDescriptor,Ft=(t,e,n,i)=>{for(var o=i>1?void 0:i?wr(e,n):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(o=(i?a(e,n,o):a(o))||o);return i&&o&&vr(e,n,o),o};let Ie=class extends D{constructor(){super(),this.dropdown=new Le(this,{queryToggleElement:()=>this.toggleElement??null,queryMenuElement:()=>this.menuElement??null,queryItems:()=>this.shadowRoot?.querySelectorAll("a[role='menuitem']")??null,queryFocused:()=>this.shadowRoot?.activeElement??null}),new Y(this,u)}handleSettingsItemClick(t,e){this.dropdown.close(),this.dispatchEvent(new CustomEvent("bkdsettingsitemclick",{detail:{item:e,event:t},composed:!0,bubbles:!0}))}renderSettingsItem(t){return h`<li role="presentation">
      <a
        role="menuitem"
        href=${t.href}
        target=${t.external?"_blank":"_self"}
        @click=${e=>this.handleSettingsItemClick(e,t)}
      >
        ${t.label}</a
      >
      ${t.img?h`<img src=${t.img} alt="" width="24" height="24" />`:Ce}
    </li>`}render(){return h`
      <button
        type="button"
        @click=${()=>this.dropdown.toggle()}
        aria-label=${b("Menü Benutzereinstellungen")}
        aria-expanded=${this.dropdown.open}
        aria-haspopup="menu"
      >
        <img src="/icons/settings.svg" alt="" width="32" height="32" />
      </button>
      <ul role="menu" ?hidden=${!this.dropdown.open}>
        ${Gn(Nn(u.locale),this.renderSettingsItem.bind(this))}
      </ul>
    `}};Ie.styles=[P,R`
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
    `];Ft([H("button")],Ie.prototype,"toggleElement",2);Ft([H('ul[role="menu"]')],Ie.prototype,"menuElement",2);Ie=Ft([N("bkd-user-settings"),$()],Ie);var yr=Object.defineProperty,kr=Object.getOwnPropertyDescriptor,qn=(t,e,n,i)=>{for(var o=i>1?void 0:i?kr(e,n):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(o=(i?a(e,n,o):a(o))||o);return i&&o&&yr(e,n,o),o};let it=class extends D{constructor(){super(),this.mobileNavOpen=!1,new Y(this,u)}render(){return h`
      <nav role="navigation" aria-label=${b("Servicenavigation")}>
        <bkd-substitutions-toggle></bkd-substitutions-toggle>
        <bkd-notifications-toggle></bkd-notifications-toggle>
        <bkd-user-settings></bkd-user-settings>
        ${X(u.allowedLocales.length>1,()=>h`<bkd-language-switcher></bkd-language-switcher>`)}
        <bkd-hamburger .open=${this.mobileNavOpen}></bkd-hamburger>
      </nav>
    `}};it.styles=[P,R`
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
    `];qn([M()],it.prototype,"mobileNavOpen",2);it=qn([N("bkd-service-nav"),$()],it);var _r=Object.defineProperty,Tr=Object.getOwnPropertyDescriptor,Ht=(t,e,n,i)=>{for(var o=i>1?void 0:i?Tr(e,n):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(o=(i?a(e,n,o):a(o))||o);return i&&o&&_r(e,n,o),o};let Re=class extends D{constructor(){super(),this.mobileNav=new Le(this,{queryToggleElement:()=>this.serviceNavElement?.shadowRoot?.querySelector("bkd-hamburger")??null,queryMenuElement:()=>this.mobileNavElement?.shadowRoot??null,tabInside:!0}),new Y(this,u)}handleLogoClick(t){t.preventDefault(),u.navigationItemKey=xe.navigationHome.key,u.appPath=xe.navigationHome.appPath}handleNavItemClick(t){const{item:e}=t.detail;u.navigationItemKey=e.key,this.mobileNav.close()}handleSettingsItemClick(t){const{item:e,event:n}=t.detail;e.external||(n.preventDefault(),e.key==="logout"?this.dispatchEvent(new CustomEvent("bkdlogout",{composed:!0,bubbles:!0})):u.navigationItemKey=e.key),this.mobileNav.close()}render(){return h`
      <header role="banner">
        <a
          class="logo"
          href=${J("home")}
          @click=${this.handleLogoClick.bind(this)}
          ><img src="logo.svg" alt=${b("Evento Startseite")}
        /></a>
        <div class="logo-caption">${u.instanceName}</div>
        ${X(navigator.onLine,()=>h`<bkd-service-nav
              .mobileNavOpen=${this.mobileNav.open}
              @bkdhamburgertoggle=${()=>this.mobileNav.toggle()}
              @bkdsettingsitemclick=${this.handleSettingsItemClick.bind(this)}
            ></bkd-service-nav> `)}
        ${X(navigator.onLine,()=>h` <bkd-nav
              @bkdnavitemclick=${this.handleNavItemClick.bind(this)}
            ></bkd-nav>`)}
        ${X(this.mobileNav.open,()=>h`<bkd-mobile-nav
              @bkdnavitemclick=${this.handleNavItemClick.bind(this)}
              @bkdsettingsitemclick=${this.handleSettingsItemClick.bind(this)}
            ></bkd-mobile-nav>`)}
      </header>
    `}};Re.styles=[P,R`
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
    `];Ht([H("bkd-service-nav")],Re.prototype,"serviceNavElement",2);Ht([H("bkd-mobile-nav")],Re.prototype,"mobileNavElement",2);Re=Ht([N("bkd-header"),$()],Re);var Er=Object.defineProperty,Ar=Object.getOwnPropertyDescriptor,Bn=(t,e,n,i)=>{for(var o=i>1?void 0:i?Ar(e,n):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(o=(i?a(e,n,o):a(o))||o);return i&&o&&Er(e,n,o),o};const Ke=ao(),Sr=async function(){await lo(Ke,Ni(),Di()),u.init()}();$i(R`
    ${Mi}
    :root {
      ${Ui}
    }
  `.toString());let ot=class extends D{constructor(){super(),this.authReady=!1,this.subscriptions=[],this.handleMessage=({data:t,origin:e})=>{if(e===window.location.origin)switch(t.type){case"bkdAppPushState":{const n=t.args[2];this.updateUrlAndNavigationState(n,!1);break}case"bkdAppReplaceState":{const n=t.args[2];_t(Tt(n),!0);break}case"bkdAppHashChange":{const{url:n}=t;_t(Tt(n));break}}},Sr.then(()=>this.authReady=!0),new Y(this,u)}connectedCallback(){super.connectedCallback(),u.initialized.then(()=>setTimeout(()=>{m.scope!==u.app.scope&&Ot(Ke,u.app.scope,u.locale)})),this.subscriptions.push(u.subscribeScopeAndLocale((e,n)=>Ot(Ke,e,n),!0)),this.subscriptions.push(u.subscribeInstanceName(this.updateTitle.bind(this))),this.subscriptions.push(u.subscribeNavigationItem(this.updateTitle.bind(this))),window.addEventListener("message",this.handleMessage);const t=new URL(location.href);u.actualAppPath=t.hash,window.addEventListener("hashchange",this.handleHashChange)}disconnectedCallback(){super.disconnectedCallback(),this.subscriptions.forEach(t=>t()),window.removeEventListener("message",this.handleMessage),window.removeEventListener("hashchange",this.handleHashChange)}updateTitle(){const{instanceName:t,navigationItem:e}=u,n=e?.label&&e?.key!==xe.navigationHome.key;document.title=n?[e?.label,t].join(" ― "):t}updateUrlAndNavigationState(t,e){const n=Tt(t);_t(n,e);const i=zi(u.navigation,n);i?.item?.key&&i.item.key!==u.navigationItemKey?(u.actualAppPath=n,u.navigationItemKey=i.item.key):u.appPath=n}handleHashChange(t){const e=new URL(t.newURL);u.appPath=e.hash}handleLogout(){co(Ke)}render(){return h`
      ${X(this.authReady&&m.authenticated,()=>h`
          <bkd-header @bkdlogout=${this.handleLogout.bind(this)}></bkd-header>
          <bkd-content></bkd-content>
          <bkd-footer></bkd-footer>
        `)}
    `}};ot.styles=[P,R`
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
    `];Bn([fe()],ot.prototype,"authReady",2);ot=Bn([N("bkd-portal"),$()],ot);
