import{$ as e,A as t,B as n,C as r,D as i,E as a,F as o,G as s,H as c,I as l,J as u,K as d,L as ee,M as te,N as ne,O as re,P as ie,Q as ae,R as oe,S as f,T as p,U as m,V as h,W as g,X as _,Y as v,Z as se,_ as ce,a as le,b as ue,c as de,d as y,et as b,f as fe,g as pe,h as me,i as x,j as he,k as ge,l as _e,m as S,n as ve,o as ye,p as C,q as be,r as xe,s as w,t as T,u as E,v as Se,w as D,x as Ce,z as we}from"./LanguageSwitcher-CNAKNOGs.js";var O=Object.create,Te=Object.defineProperty,Ee=Object.getOwnPropertyDescriptor,De=Object.getOwnPropertyNames,Oe=Object.getPrototypeOf,k=Object.prototype.hasOwnProperty,ke=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),Ae=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(var i=De(t),a=0,o=i.length,s;a<o;a++)s=i[a],!k.call(e,s)&&s!==n&&Te(e,s,{get:(e=>t[e]).bind(null,s),enumerable:!(r=Ee(t,s))||r.enumerable});return e},je=(e,t,n)=>(n=e==null?{}:O(Oe(e)),Ae(t||!e||!e.__esModule?Te(n,`default`,{value:e,enumerable:!0}):n,e)),Me=class extends Error{constructor(e,t){super(e),this.oauth2Code=t}},Ne=class extends Me{constructor(e,t,n,r){super(e,t),this.httpCode=n.status,this.response=n,this.parsedBody=r}},Pe=class{constructor(e){this.client=e}async getAuthorizeUri(e){let[t,n]=await Promise.all([e.codeVerifier?Ie(e.codeVerifier):void 0,this.client.getEndpoint(`authorizationEndpoint`)]),r=new URLSearchParams({client_id:this.client.settings.clientId,response_type:`code`,redirect_uri:e.redirectUri});if(t&&(r.set(`code_challenge_method`,t[0]),r.set(`code_challenge`,t[1])),e.state&&r.set(`state`,e.state),e.scope&&r.set(`scope`,e.scope.join(` `)),e.resource)for(let t of[].concat(e.resource))r.append(`resource`,t);if(e.responseMode&&e.responseMode!==`query`&&r.append(`response_mode`,e.responseMode),e.extraParams)for(let[t,n]of Object.entries(e.extraParams)){if(r.has(t))throw Error(`Property in extraParams would overwrite standard property: ${t}`);r.set(t,n)}return n+`?`+r.toString()}async getTokenFromCodeRedirect(e,t){let{code:n}=this.validateResponse(e,{state:t.state});return this.getToken({code:n,redirectUri:t.redirectUri,codeVerifier:t.codeVerifier})}validateResponse(e,t){e=new URL(e);let n=e.searchParams;if(!n.has(`code`)&&!n.has(`error`)&&e.hash.length>0&&(n=new URLSearchParams(e.hash.slice(1))),n.has(`error`))throw new Me(n.get(`error_description`)??`OAuth2 error`,n.get(`error`));if(!n.has(`code`))throw Error(`The url did not contain a code parameter ${e}`);if(t.state&&t.state!==n.get(`state`))throw Error(`The "state" parameter in the url did not match the expected value of ${t.state}`);return{code:n.get(`code`),scope:n.has(`scope`)?n.get(`scope`).split(` `):void 0}}async getToken(e){let t={grant_type:`authorization_code`,code:e.code,redirect_uri:e.redirectUri,code_verifier:e.codeVerifier,resource:e.resource};return this.client.tokenResponseToOAuth2Token(this.client.request(`tokenEndpoint`,t))}};async function Fe(){let e=await Le(),t=new Uint8Array(32);return e.getRandomValues(t),ze(t)}async function Ie(e){return[`S256`,ze(await(await Le()).subtle.digest(`SHA-256`,Re(e)))]}async function Le(){var e;if(typeof window<`u`&&window.crypto){if(!((e=window.crypto.subtle)!=null&&e.digest))throw Error(`The context/environment is not secure, and does not support the 'crypto.subtle' module. See: https://developer.mozilla.org/en-US/docs/Web/API/Crypto/subtle for details`);return window.crypto}return typeof self<`u`&&self.crypto?self.crypto:(await Promise.resolve().then(()=>M)).webcrypto}function Re(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)&255;return t}function ze(e){return btoa(String.fromCharCode(...new Uint8Array(e))).replace(/\+/g,`-`).replace(/\//g,`_`).replace(/=+$/,``)}var Be=class{constructor(e){this.serverMetadata=null,e!=null&&e.fetch||(e.fetch=fetch.bind(globalThis)),this.settings=e}async refreshToken(e,t){if(!e.refreshToken)throw Error(`This token didn't have a refreshToken. It's not possible to refresh this`);let n={grant_type:`refresh_token`,refresh_token:e.refreshToken};this.settings.clientSecret||(n.client_id=this.settings.clientId),t!=null&&t.scope&&(n.scope=t.scope.join(` `)),t!=null&&t.resource&&(n.resource=t.resource);let r=await this.tokenResponseToOAuth2Token(this.request(`tokenEndpoint`,n));return!r.refreshToken&&e.refreshToken&&(r.refreshToken=e.refreshToken),r}async clientCredentials(e){let t=[`client_id`,`client_secret`,`grant_type`,`scope`];if(e!=null&&e.extraParams&&Object.keys(e.extraParams).filter(e=>t.includes(e)).length>0)throw Error(`The following extraParams are disallowed: '${t.join(`', '`)}'`);let n={grant_type:`client_credentials`,scope:(e?.scope)?.join(` `),resource:e?.resource,...e?.extraParams};if(!this.settings.clientSecret)throw Error(`A clientSecret must be provided to use client_credentials`);return this.tokenResponseToOAuth2Token(this.request(`tokenEndpoint`,n))}async password(e){let t={grant_type:`password`,...e,scope:e.scope?.join(` `)};return this.tokenResponseToOAuth2Token(this.request(`tokenEndpoint`,t))}get authorizationCode(){return new Pe(this)}async introspect(e){let t={token:e.accessToken,token_type_hint:`access_token`};return this.request(`introspectionEndpoint`,t)}async revoke(e,t=`access_token`){let n=e.accessToken;t===`refresh_token`&&(n=e.refreshToken);let r={token:n,token_type_hint:t};return this.request(`revocationEndpoint`,r)}async getEndpoint(e){if(this.settings[e]!==void 0||e!==`discoveryEndpoint`&&(await this.discover(),this.settings[e]!==void 0))return A(this.settings[e],this.settings.server);if(!this.settings.server)throw Error(`Could not determine the location of ${e}. Either specify ${e} in the settings, or the "server" endpoint to let the client discover it.`);switch(e){case`authorizationEndpoint`:return A(`/authorize`,this.settings.server);case`tokenEndpoint`:return A(`/token`,this.settings.server);case`discoveryEndpoint`:return A(`/.well-known/oauth-authorization-server`,this.settings.server);case`introspectionEndpoint`:return A(`/introspect`,this.settings.server);case`revocationEndpoint`:return A(`/revoke`,this.settings.server)}}discover(){return this.discoveryPromise===void 0&&(this.discoveryPromise=this.doDiscover()),this.discoveryPromise}async doDiscover(){var e;let t;try{t=await this.getEndpoint(`discoveryEndpoint`)}catch{console.warn(`[oauth2] OAuth2 discovery endpoint could not be determined. Either specify the "server" or "discoveryEndpoint`);return}let n=await this.settings.fetch(t,{headers:{Accept:`application/json`}});if(!n.ok)return;if(!((e=n.headers.get(`Content-Type`))!=null&&e.startsWith(`application/json`))){console.warn(`[oauth2] OAuth2 discovery endpoint was not a JSON response. Response is ignored`);return}this.serverMetadata=await n.json();let r=[[`authorization_endpoint`,`authorizationEndpoint`],[`token_endpoint`,`tokenEndpoint`],[`introspection_endpoint`,`introspectionEndpoint`],[`revocation_endpoint`,`revocationEndpoint`]];if(this.serverMetadata!==null){for(let[e,n]of r)this.serverMetadata[e]&&(this.settings[n]=A(this.serverMetadata[e],t));if(this.serverMetadata.token_endpoint_auth_methods_supported&&!this.settings.authenticationMethod){for(let e of this.serverMetadata.token_endpoint_auth_methods_supported)if(e===`client_secret_basic`||e===`client_secret_post`){this.settings.authenticationMethod=e;break}}}}async request(e,t){let n=await this.getEndpoint(e),r={"Content-Type":`application/x-www-form-urlencoded`,Accept:`application/json`},i=this.settings.authenticationMethod;switch(this.settings.clientSecret||(i=`client_secret_post`),i||=`client_secret_basic_interop`,i){case`client_secret_basic`:r.Authorization=`Basic `+btoa(j(this.settings.clientId)+`:`+j(this.settings.clientSecret));break;case`client_secret_basic_interop`:r.Authorization=`Basic `+btoa(this.settings.clientId.replace(/:/g,`%3A`)+`:`+this.settings.clientSecret.replace(/:/g,`%3A`));break;case`client_secret_post`:t.client_id=this.settings.clientId,this.settings.clientSecret&&(t.client_secret=this.settings.clientSecret);break;default:throw Error(`Authentication method not yet supported:`+i+`. Open a feature request if you want this!`)}let a=await this.settings.fetch(n,{method:`POST`,body:Ve(t),headers:r}),o;if(a.status!==204&&a.headers.has(`Content-Type`)&&a.headers.get(`Content-Type`).match(/^application\/(.*\+)?json/)&&(o=await a.json()),a.ok)return o;let s,c;throw o!=null&&o.error?(s=`OAuth2 error `+o.error+`.`,o.error_description&&(s+=` `+o.error_description),c=o.error):(s=`HTTP Error `+a.status+` `+a.statusText,a.status===401&&this.settings.clientSecret&&(s+=`. It's likely that the clientId and/or clientSecret was incorrect`),c=null),new Ne(s,c,a,o)}async tokenResponseToOAuth2Token(e){let t=await e;if(!(t!=null&&t.access_token))throw console.warn(`Invalid OAuth2 Token Response: `,t),TypeError(`We received an invalid token response from an OAuth2 server.`);let{access_token:n,refresh_token:r,expires_in:i,id_token:a,scope:o,token_type:s,...c}=t,l={accessToken:n,expiresAt:i?Date.now()+i*1e3:null,refreshToken:r??null};return a&&(l.idToken=a),o&&(l.scope=o.split(` `)),Object.keys(c).length>0&&(l.extraParams=c),l}};function A(e,t){return new URL(e,t).toString()}function Ve(e){let t=new URLSearchParams;for(let[n,r]of Object.entries(e))if(Array.isArray(r))for(let e of r)t.append(n,e);else r!==void 0&&t.set(n,r.toString());return t.toString()}function j(e){return encodeURIComponent(e).replace(/%20/g,`+`).replace(/[-_.!~*'()]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)}var M=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:`Module`}));async function He(e){return[`S256`,Ge(await(await Ue()).subtle.digest(`SHA-256`,We(e)))]}async function Ue(){if(typeof window<`u`&&window.crypto){if(!window.crypto.subtle?.digest)throw Error(`The context/environment is not secure, and does not support the 'crypto.subtle' module. See: https://developer.mozilla.org/en-US/docs/Web/API/Crypto/subtle for details`);return window.crypto}return typeof self<`u`&&self.crypto?self.crypto:(await r(()=>import(`./__vite-browser-external-mLzlA_6q.js`).then(e=>je(e.default,1)),[])).webcrypto}function We(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)&255;return t}function Ge(e){return btoa(String.fromCharCode(...new Uint8Array(e))).replace(/\+/g,`-`).replace(/\//g,`_`).replace(/=+$/,``)}function Ke(e){let t=new URLSearchParams;for(let[n,r]of Object.entries(e))if(Array.isArray(r))for(let e of r)t.append(n,e);else r!==void 0&&t.set(n,r.toString());return t.toString()}var qe=function(e){return e.Refresh=`refresh`,e.Access=`access`,e}(qe||{}),N={refresh:void 0,access:void 0};function P({renewRefreshToken:e,renewAccessToken:t}){Ye(`refresh`,i.refreshTokenPayload,e),i.onRefreshTokenUpdate(t=>Ye(`refresh`,t,e)),Ye(`access`,i.accessTokenPayload,t),i.onAccessTokenUpdate(e=>Ye(`access`,e,t))}function Je(){Object.values(qe).forEach(e=>{N[e]&&clearTimeout(N[e])})}function Ye(e,t,n){if(N[e]&&clearTimeout(N[e]),!t)return;let r=o(t),i=r-ie;if(r<=0)return;let a=i>0?i:Math.max(r+1e3,0);N[e]=setTimeout(()=>Xe(e,t,n),a)}function Xe(e,t,n){let{scope:r,locale:a}=t;`${e}${r}${a}`,Ze(r,async()=>{let t=e===`access`?ge(r):he(r),o=t?l(t):null;o&&(ee(o)?await n(o.scope,o.locale):(`${e}${r}${a}`,e===`access`?i.accessToken=t:i.refreshToken=t))})}function Ze(e,t){navigator.locks.request(`bkdTokenRenewal_${e}`,async()=>{await t()})}var F=n();if(typeof F?.oAuthServer!=`string`)throw Error(`Invalid 'oAuthServer' setting`);if(typeof F?.oAuthPrefix!=`string`)throw Error(`Invalid 'oAuthPrefix' setting`);if(typeof F?.oAuthClientId!=`string`)throw Error(`Invalid 'clientId' setting`);function Qe(){return new Be({server:F.oAuthServer,clientId:F.oAuthClientId,tokenEndpoint:`${F.oAuthPrefix}/Authorization/Token`,get authorizationEndpoint(){return rt()},fetch:(...e)=>fetch(...e)})}async function $e(e,t,n){P({renewRefreshToken:(t,n)=>ct(e,t,n),renewAccessToken:(t,n)=>ct(e,t,n)});let r=re(),i=await it(e,r);if(i){at(i,r);return}let a=ot();if(a){st(a);return}await et(e,t,n)}async function et(e,t,n){if(`${t}${n}`,I(t,n),oe(i.refreshTokenPayload))return tt(e,t,n);if(!i.accessToken)return`${t}${n}`,ct(e,t,n)}async function tt(e,t,n,r=new URL(document.location.href)){r.searchParams.set(fe,n);let i=new URL(await e.getEndpoint(`authorizationEndpoint`)),a=await Fe();ne(a,r.toString());let[o,s]=await He(a);i.searchParams.set(`clientId`,e.settings.clientId),i.searchParams.set(`redirectUrl`,r.toString()),i.searchParams.set(`culture_info`,n),i.searchParams.set(`application_scope`,t),i.searchParams.set(`response_type`,`code`),i.searchParams.set(`code_challenge_method`,o),i.searchParams.set(`code_challenge`,s),document.location.href=i.toString()}async function nt(e){let n=t();if(!n)throw Error(`No instance available`);let{accessToken:r,scope:a,locale:o}=i;if(!(!r||!a||!o))try{await ut(e,n,r)}catch(e){if(!(e instanceof SyntaxError))throw e}finally{i.resetAllTokens(),Je(),await tt(e,a,o,new URL(me(h.navigationHome)))}}function rt(){let e=t();return e?`${F.oAuthPrefix}/Authorization/${e}/Login`:`${F.oAuthPrefix}/Authorization/Login`}function I(e,t){if(we(i.accessToken,e,t)){`${e}${t}`;return}let n=ge(e);if(we(n,e,t)){`${e}${t}`,i.accessToken=n,i.refreshToken=he(e);return}`${e}${t}`,i.accessToken=null,i.refreshToken=he(e)}async function it(e,t){return new URLSearchParams(document.location.search).get(`code`)&&t?.redirectUri?await e.authorizationCode.getTokenFromCodeRedirect(document.location.href,{redirectUri:t.redirectUri,codeVerifier:t.codeVerifier}):null}function at({refreshToken:e,accessToken:t},n){i.refreshToken=e,i.accessToken=t;let r=i.accessTokenPayload?.instanceId;r&&te(r),n?.redirectUri&&C.navigate(new URL(n.redirectUri))}function ot(){let e=new URLSearchParams(document.location.search),t=e.get(`access_token`),n=e.get(`expires_in`),r=e.get(`refresh_token`);return t?{accessToken:t,expiresAt:n?Date.now()+parseInt(n,10)*1e3:null,refreshToken:r||null}:null}function st(e){let{refreshToken:t,accessToken:n}=e;i.refreshToken=t,i.accessToken=n;let r=new URL(document.location.href);r.searchParams.delete(`access_token`),r.searchParams.delete(`expires_in`),r.searchParams.delete(`refresh_token`),window.parent===window?history.replaceState({},``,r):window.parent.location.assign(r)}async function ct(e,n,r){let a=t(),o=he(n);if(!a||!o)return`${n}`,tt(e,n,r);`${n}${r}`;try{let{refreshToken:t,accessToken:s}=await lt(e,a,n,r,o);i.refreshToken=t,i.accessToken=s}catch{return tt(e,n,r)}}async function lt(e,t,n,r,i){let{access_token:a,refresh_token:o,expires_in:s}=await dt(e,`${F.oAuthPrefix}/Authorization/${t}/Token`,{refresh_token:i,grant_type:`refresh_token`,client_id:F.oAuthClientId,culture_info:r,scope:n});return{accessToken:a,refreshToken:o,expiresAt:s?Date.now()+s*1e3:null}}function ut(e,t,n){return dt(e,`${F.oAuthPrefix}/Authorization/${t}/Logout`,{access_token:n})}async function dt(e,t,n){let r=new URL(t,e.settings.server).toString(),i=await fetch(r,{method:`POST`,body:n&&Ke(n),headers:{"Content-Type":`application/x-www-form-urlencoded`}});if(i.ok)return await i.json();let a,o,s;throw i.headers.get(`Content-Type`)?.startsWith(`application/json`)&&(a=await i.json()),a?.error?(o=`OAuth2 error `+a.error+`.`,a.error_description&&(o+=` `+a.error_description),s=a.error):(o=`HTTP Error `+i.status+` `+i.statusText,s=null),new Me(o,s)}var ft=x(class extends le{constructor(){super(...arguments),this.key=se}render(e,t){return this.key=e,t}update(e,[t,n]){return t!==this.key&&(xe(e),this.key=t),n}}),pt=class extends _{static{this.styles=[y,b`
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
    `]}constructor(){super(),this.renderedOffline=!1,this.handleMessage=e=>{if(e.origin===window.location.origin)switch(e.data.type){case`bkdAppResize`:this.handleResize(e.data.height);break}},this.handleOnline=()=>{this.renderedOffline&&window.location.reload()},new c(this,C)}connectedCallback(){super.connectedCallback(),window.addEventListener(`message`,this.handleMessage),window.addEventListener(`online`,this.handleOnline)}disconnectedCallback(){window.removeEventListener(`message`,this.handleMessage),window.removeEventListener(`online`,this.handleOnline),super.disconnectedCallback()}handleResize(e){this.iframe&&(this.iframe.height=e)}renderAppIframe(){return e`${ft(C.app.root,e`
        <iframe
          id="app"
          title=${C.app.key}
          src=${`/${C.app.root}${C.appPath}`}
        ></iframe>
      `)}`}renderFooterContent(){return e`
      ${w(C.navigationItemKey,[[`contact`,()=>e`<bkd-contact></bkd-contact>`],[`legal`,()=>e`<bkd-legal></bkd-legal>`],[`imprint`,()=>e`<bkd-imprint></bkd-imprint>`]],()=>e``)}
    `}render(){return this.renderedOffline=!navigator.onLine,navigator.onLine?i.scope===C.app.scope?e`
      <main role="main">
        ${s(C.app.heading,()=>e`<h1>${C.navigationItem.label}</h1>`)}
        ${s(C.app.key===`footer`,()=>this.renderFooterContent(),()=>this.renderAppIframe())}
      </main>
    `:e`<main role="main"></main>`:e`<main role="main">
        <h1>${g(`Offline`)}</h1>
        <p>${g(`Keine Verbindung vorhanden.`)}</p>
      </main>`}};S([d(`iframe`)],pt.prototype,`iframe`,void 0),pt=S([v(`bkd-content`),m()],pt);function L(e,t){if(e===t||e.contains(t))return!0;if(`shadowRoot`in e&&e.shadowRoot)return L(e.shadowRoot,t);for(let n of Array.from(e.children))if(L(n,t))return!0;return!1}var mt=class{get toggleElement(){return this.options.queryToggleElement()}get menuElement(){return this.options.queryMenuElement()}get items(){let e=this.options?.queryItems&&this.options.queryItems();return Array.from(e??[])}get focusedItem(){return this.options?.queryFocused?this.options.queryFocused():null}constructor(e,t){this.host=e,this.options=t,this.open=!1,this.closeOnBlur=e=>{this.menuElement&&`relatedTarget`in e&&(this.menuElement.contains(e.relatedTarget)||this.closeDeferred())},this.handleDocumentClick=e=>{let t=e.composedPath()[0];if(!t)return;let n=this.toggleElement&&!L(this.toggleElement,t),r=this.menuElement&&!L(this.menuElement,t);n&&r&&this.closeDeferred()},this.handleIframeClick=()=>{this.closeDeferred()},this.handleKeydown=e=>{switch(e.key){case`Tab`:this.options.tabInside||this.close();break;case`Escape`:this.close();break;case`ArrowDown`:this.items[this.nextLinkIndex(1)]?.focus();break;case`ArrowUp`:this.items[this.nextLinkIndex(-1)]?.focus();break}},this.host.addController(this)}hostDisconnected(){this.removeListeners()}toggle(){this.open=!this.open,this.host.requestUpdate(),this.open?this.addListeners():setTimeout(()=>{this.removeListeners()})}close(){this.open&&this.toggle()}closeDeferred(){setTimeout(()=>this.close())}addListeners(){setTimeout(()=>{this.options.tabInside&&this.menuElement?.addEventListener(`focusout`,this.closeOnBlur,!0),this.iframeDocument?.addEventListener(`click`,this.handleIframeClick,!0)}),document.addEventListener(`click`,this.handleDocumentClick,!0),this.host.addEventListener(`keydown`,this.handleKeydown,!0)}removeListeners(){this.options.tabInside&&this.menuElement?.removeEventListener(`focusout`,this.closeOnBlur,!0),document.removeEventListener(`click`,this.handleDocumentClick,!0),this.iframeDocument?.removeEventListener(`click`,this.handleIframeClick,!0),this.host.removeEventListener(`keydown`,this.handleKeydown,!0)}get iframeDocument(){return((document.querySelector(`bkd-portal`)?.shadowRoot)?.querySelector(`bkd-content`)?.shadowRoot)?.querySelector(`iframe`)?.contentDocument??null}activeLinkIndex(){let e=this.focusedItem?this.items.indexOf(this.focusedItem):-1;return e===-1?null:e}nextLinkIndex(e){let t=this.activeLinkIndex(),n=this.items.length-1;if(t===null)return e>0?0:n;let r=t+e;return r>n?0:r<0?n:r}},R=class extends le{constructor(e){if(super(e),this.it=se,e.type!==ye.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===se||e==null)return this._t=void 0,this.it=e;if(e===ae)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};R.directiveName=`unsafeHTML`,R.resultType=1;var z=x(R),ht=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="m22 15.975-1.775 1.775L12 9.525 3.775 17.75 2 15.975l10-10 10 10Z"/></svg>
`,gt=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M2 8.025 3.775 6.25 12 14.475l8.225-8.225L22 8.025l-10 10-10-10Z"/></svg>
`;function _t(e){return[{key:`myProfile`,label:g(`Mein Profil`),href:me(`myProfile`)},{key:`mySettings`,label:g(`Einstellungen`),href:me(`mySettings`)},{key:`videos`,label:g(`Video-Tutorials`),href:e===`de-CH`?`https://www.youtube.com/playlist?list=PLLDtLiOuctbx-_EQWgWqTO1MRbX845OEf`:`https://www.youtube.com/playlist?list=PLLDtLiOuctbyEegnquAkaW4u8cm62lFAU`,img:`/icons/external-link.svg`,external:!0},{key:`logout`,label:g(`Logout`),href:`#`,img:`/icons/logout.svg`}]}var vt=class extends _{static{this.styles=[y,b`
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
    `]}constructor(){super(),this.openGroup=null,this.handleKeyup=e=>{e.key===`Tab`&&this.openGroupOfFocusedItem()},new c(this,C)}connectedCallback(){super.connectedCallback(),this.openGroupOfCurrentItem(),this.addEventListener(`keyup`,this.handleKeyup)}disconnectedCallback(){this.removeEventListener(`keyup`,this.handleKeyup),super.disconnectedCallback()}openGroupOfCurrentItem(){this.openGroup||=C.navigationGroup}openGroupOfFocusedItem(){let e=this.shadowRoot?.activeElement;if(e instanceof HTMLElement){let t=e.dataset.itemKey;if(t){let{group:e}=ue(h.navigation,t);e&&e.label!==this.openGroup?.label&&(this.openGroup=e)}}}handleGroupClick(e,t){e.preventDefault(),this.openGroup=t.label===this.openGroup?.label?null:t}handleNavItemClick(e,t){e.preventDefault(),this.dispatchEvent(new CustomEvent(`bkdnavitemclick`,{detail:{item:t},composed:!0,bubbles:!0}))}handleSettingsItemClick(e,t){this.dispatchEvent(new CustomEvent(`bkdsettingsitemclick`,{detail:{item:t,event:e},composed:!0,bubbles:!0}))}renderGroup(t){let n=t.label===this.openGroup?.label;return e`
      <li
        class=${T({group:!0,open:n})}
        aria-expanded=${n}
      >
        <button
          class="group-header"
          tabindex="-1"
          @click=${e=>this.handleGroupClick(e,t)}
        >
          <label> ${t.label} </label>
          ${z(n?ht:gt)}
        </button>
        <ul class="items">
          ${ve(t.items,e=>e.label,this.renderNavItem.bind(this))}
        </ul>
      </li>
    `}renderNavItem(t){return e`
      <li
        class=${T({item:!0,active:t.key===C.navigationItemKey})}
      >
        <a
          href=${me(t)}
          data-item-key=${t.key}
          @click=${e=>this.handleNavItemClick(e,t)}
        >
          ${t.label}
        </a>
      </li>
    `}renderSettingsItem(t){return e`<li>
      <a
        href=${t.href}
        target=${t.external?`_blank`:`_self`}
        @click=${e=>this.handleSettingsItemClick(e,t)}
      >
        ${t.label}
      </a>
      ${t.img?e`<img src=${t.img} alt="" width="24" height="24" />`:se}
    </li>`}render(){return e`
      <nav role="navigation" aria-label=${g(`Mobile Navigation`)}>
        <ul class="nav">
          ${ve(C.navigation,e=>e.label,this.renderGroup.bind(this))}
        </ul>
        <div class="service-nav">
          <ul>
            ${ve(_t(C.locale),e=>e.key,this.renderSettingsItem.bind(this))}
          </ul>
          ${s(C.allowedLocales.length>1,()=>e`<bkd-language-switcher></bkd-language-switcher>`)}
        </div>
      </nav>
    `}};S([be()],vt.prototype,`openGroup`,void 0),vt=S([v(`bkd-mobile-nav`),m()],vt);var yt=class extends _{static{this.styles=[y,b`
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
    `]}constructor(){super(),this.open=!1,new c(this,C)}handleItemClick(e,t){e.preventDefault(),this.dispatchEvent(new CustomEvent(`bkdnavitemclick`,{detail:{item:t},composed:!0,bubbles:!0}))}renderItem(t){return e`
      <li role="presentation" class=${T({active:t.key===C.navigationItemKey})}>
        <a
          role="menuitem"
          href=${me(t)}
          @click=${e=>this.handleItemClick(e,t)}
          >${t.label}</a
        >
      </li>
    `}render(){if(!(!this.group||!this.open))return e`
      <ul role="menu">
        ${ve(this.group.items,e=>e.key,this.renderItem.bind(this))}
      </ul>
    `}};S([u()],yt.prototype,`group`,void 0),S([u()],yt.prototype,`open`,void 0),yt=S([v(`bkd-nav-group-dropdown`),m()],yt);var B=class extends _{constructor(...e){super(...e),this.dropdown=new mt(this,{queryToggleElement:()=>this.toggleElement??null,queryMenuElement:()=>this.menuElement?.shadowRoot?.querySelector(`ul[role="menu"]`)??null,queryItems:()=>this.menuElement?.shadowRoot?.querySelectorAll(`a[role='menuitem']`)??null,queryFocused:()=>this.menuElement?.shadowRoot?.activeElement??null})}static{this.styles=[y,b`
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
    `]}toggle(e){e.preventDefault(),this.dropdown.toggle()}handleItemClick(){this.dropdown.close()}render(){if(this.group)return e`
      <a
        href="#"
        @click=${this.toggle.bind(this)}
        class=${T({active:!!this.active})}
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
    `}};S([u()],B.prototype,`group`,void 0),S([u({type:Boolean})],B.prototype,`active`,void 0),S([d(`a`)],B.prototype,`toggleElement`,void 0),S([d(`bkd-nav-group-dropdown`)],B.prototype,`menuElement`,void 0),B=S([v(`bkd-nav-group-toggle`),m()],B);var V=class extends _{static{this.styles=[y,b`
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
    `]}constructor(){super(),new c(this,C)}renderGroupToggle(t,n){return e`
      <bkd-nav-group-toggle
        .group=${t}
        ?active=${n}
      ></bkd-nav-group-toggle>
    `}render(){return e`<nav role="navigation" aria-label=${g(`Hauptnavigation`)}>
      ${ve(C.navigation,e=>e.label,e=>this.renderGroupToggle(e,e.label===C.navigationGroup?.label))}
    </nav>`}};V=S([v(`bkd-nav`),m()],V);var H=class extends _{constructor(...e){super(...e),this.open=!1}static{this.styles=[y,b`
      :host {
        display: flex;
      }

      button {
        background: transparent;
        border: none;
        cursor: pointer;
      }
    `]}toggle(){this.dispatchEvent(new CustomEvent(`bkdhamburgertoggle`,{bubbles:!0,composed:!0}))}render(){let t=this.open?`/icons/close.svg`:`/icons/hamburger.svg`;return e`
      <button
        class="hamburger"
        aria-expanded=${this.open}
        aria-label=${g(`Menü`)}
        @click=${this.toggle.bind(this)}
      >
        <img src=${t} alt="" width="32" height="32" />
      </button>
    `}};S([u()],H.prototype,`open`,void 0),H=S([v(`bkd-hamburger`),m()],H);var U=`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path fill="currentColor" d="M16 2a2.25 2.25 0 0 0-2.25 2.25v1.043C9.87 6.293 7 9.807 7 14v7.5h18V14c0-4.193-2.87-7.707-6.75-8.707V4.25A2.25 2.25 0 0 0 16 2M4 24.5v3h9.404A3 3 0 1 0 19 29a3 3 0 0 0-.407-1.5H28v-3z"/></svg>`,bt=`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" preserveAspectRatio="xMidYMid" style="margin:auto;background:#fff 0 0;display:block;shape-rendering:auto" viewBox="0 0 100 100"><g transform="translate(82 50)"><circle r="6"><animateTransform attributeName="transform" begin="-0.8571428571428571s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.8571428571428571s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(51.429 -42.913 110.137)"><circle r="6" fill-opacity=".857"><animateTransform attributeName="transform" begin="-0.7142857142857143s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.7142857142857143s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(102.857 -10.937 57.696)"><circle r="6" fill-opacity=".714"><animateTransform attributeName="transform" begin="-0.5714285714285714s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.5714285714285714s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(154.286 3.294 34.358)"><circle r="6" fill-opacity=".571"><animateTransform attributeName="transform" begin="-0.42857142857142855s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.42857142857142855s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(-154.286 14.706 15.642)"><circle r="6" fill-opacity=".429"><animateTransform attributeName="transform" begin="-0.2857142857142857s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.2857142857142857s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(-102.857 28.937 -7.696)"><circle r="6" fill-opacity=".286"><animateTransform attributeName="transform" begin="-0.14285714285714285s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.14285714285714285s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(-51.429 60.913 -60.137)"><circle r="6" fill-opacity=".143"><animateTransform attributeName="transform" begin="0s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="0s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g></svg>`,xt=`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path fill="currentColor" d="m13 3-1.333 1.333H5V7h21.333V4.333h-6.666L18.333 3zM6.333 9.667V27c0 1.467 1.2 2.667 2.667 2.667h13.333C23.8 29.667 25 28.467 25 27V9.667z"/></svg>`;function St(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Ct(e){if(Array.isArray(e))return e}function wt(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function Tt(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Et(e,t){return Ct(e)||wt(e,t)||Dt(e,t)||Tt()}function Dt(e,t){if(e){if(typeof e==`string`)return St(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?St(e,t):void 0}}var Ot=Object.entries,kt=Object.setPrototypeOf,At=Object.isFrozen,jt=Object.getPrototypeOf,Mt=Object.getOwnPropertyDescriptor,W=Object.freeze,G=Object.seal,Nt=Object.create,Pt=typeof Reflect<`u`&&Reflect,Ft=Pt.apply,It=Pt.construct;W||=function(e){return e},G||=function(e){return e},Ft||=function(e,t){var n=[...arguments].slice(2);return e.apply(t,n)},It||=function(e){return new e(...[...arguments].slice(1))};var Lt=J(Array.prototype.forEach),Rt=J(Array.prototype.lastIndexOf),zt=J(Array.prototype.pop),Bt=J(Array.prototype.push),Vt=J(Array.prototype.splice),Ht=Array.isArray,Ut=J(String.prototype.toLowerCase),Wt=J(String.prototype.toString),Gt=J(String.prototype.match),Kt=J(String.prototype.replace),qt=J(String.prototype.indexOf),Jt=J(String.prototype.trim),Yt=J(Number.prototype.toString),Xt=J(Boolean.prototype.toString),Zt=typeof BigInt>`u`?null:J(BigInt.prototype.toString),Qt=typeof Symbol>`u`?null:J(Symbol.prototype.toString),K=J(Object.prototype.hasOwnProperty),$t=J(Object.prototype.toString),q=J(RegExp.prototype.test),en=tn(TypeError);function J(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);var n=[...arguments].slice(1);return Ft(e,t,n)}}function tn(e){return function(){return It(e,[...arguments])}}function Y(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ut;if(kt&&kt(e,null),!Ht(t))return e;let r=t.length;for(;r--;){let i=t[r];if(typeof i==`string`){let e=n(i);e!==i&&(At(t)||(t[r]=e),i=e)}e[i]=!0}return e}function nn(e){for(let t=0;t<e.length;t++)K(e,t)||(e[t]=null);return e}function X(e){let t=Nt(null);for(let r of Ot(e)){var n=Et(r,2);let i=n[0],a=n[1];K(e,i)&&(Ht(a)?t[i]=nn(a):a&&typeof a==`object`&&a.constructor===Object?t[i]=X(a):t[i]=a)}return t}function rn(e){switch(typeof e){case`string`:return e;case`number`:return Yt(e);case`boolean`:return Xt(e);case`bigint`:return Zt?Zt(e):`0`;case`symbol`:return Qt?Qt(e):`Symbol()`;case`undefined`:return $t(e);case`function`:case`object`:{if(e===null)return $t(e);let t=e,n=Z(t,`toString`);if(typeof n==`function`){let e=n(t);return typeof e==`string`?e:$t(e)}return $t(e)}default:return $t(e)}}function Z(e,t){for(;e!==null;){let n=Mt(e,t);if(n){if(n.get)return J(n.get);if(typeof n.value==`function`)return J(n.value)}e=jt(e)}function n(){return null}return n}function an(e){try{return q(e,``),!0}catch{return!1}}var on=W(`a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr`.split(`.`)),sn=W(`svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.enterkeyhint.exportparts.filter.font.g.glyph.glyphref.hkern.image.inputmode.line.lineargradient.marker.mask.metadata.mpath.part.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern`.split(`.`)),cn=W([`feBlend`,`feColorMatrix`,`feComponentTransfer`,`feComposite`,`feConvolveMatrix`,`feDiffuseLighting`,`feDisplacementMap`,`feDistantLight`,`feDropShadow`,`feFlood`,`feFuncA`,`feFuncB`,`feFuncG`,`feFuncR`,`feGaussianBlur`,`feImage`,`feMerge`,`feMergeNode`,`feMorphology`,`feOffset`,`fePointLight`,`feSpecularLighting`,`feSpotLight`,`feTile`,`feTurbulence`]),ln=W([`animate`,`color-profile`,`cursor`,`discard`,`font-face`,`font-face-format`,`font-face-name`,`font-face-src`,`font-face-uri`,`foreignobject`,`hatch`,`hatchpath`,`mesh`,`meshgradient`,`meshpatch`,`meshrow`,`missing-glyph`,`script`,`set`,`solidcolor`,`unknown`,`use`]),un=W(`math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts`.split(`.`)),dn=W([`maction`,`maligngroup`,`malignmark`,`mlongdiv`,`mscarries`,`mscarry`,`msgroup`,`mstack`,`msline`,`msrow`,`semantics`,`annotation`,`annotation-xml`,`mprescripts`,`none`]),fn=W([`#text`]),pn=W(`accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.command.commandfor.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.exportparts.face.for.headers.height.hidden.high.href.hreflang.id.inert.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.part.pattern.placeholder.playsinline.popover.popovertarget.popovertargetaction.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.slot.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns`.split(`.`)),mn=W(`accent-height.accumulate.additive.alignment-baseline.amplitude.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dur.edgemode.elevation.end.exponent.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.intercept.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.mask-type.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.slope.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.tablevalues.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-rendering.textlength.type.u1.u2.unicode.values.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan`.split(`.`)),hn=W(`accent.accentunder.align.bevelled.close.columnalign.columnlines.columnspacing.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lquote.lspace.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns`.split(`.`)),gn=W([`xlink:href`,`xml:id`,`xlink:title`,`xml:space`,`xmlns:xlink`]),_n=G(/{{[\w\W]*|^[\w\W]*}}/g),vn=G(/<%[\w\W]*|^[\w\W]*%>/g),yn=G(/\${[\w\W]*/g),bn=G(/^data-[\-\w.\u00B7-\uFFFF]+$/),xn=G(/^aria-[\-\w]+$/),Sn=G(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Cn=G(/^(?:\w+script|data):/i),wn=G(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Tn=G(/^html$/i),En=G(/^[a-z][.\w]*(-[.\w]+)+$/i),Dn=G(/<[/\w!]/g),On=G(/<[/\w]/g),kn=G(/<\/no(script|embed|frames)/i),An=G(/\/>/i),Q={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},jn=function(){return typeof window>`u`?null:window},Mn=function(e,t){if(typeof e!=`object`||typeof e.createPolicy!=`function`)return null;let n=null,r=`data-tt-policy-suffix`;t&&t.hasAttribute(r)&&(n=t.getAttribute(r));let i=`dompurify`+(n?`#`+n:``);try{return e.createPolicy(i,{createHTML(e){return e},createScriptURL(e){return e}})}catch{return console.warn(`TrustedTypes policy `+i+` could not be created.`),null}},Nn=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},$=function(e,t,n,r){return K(e,t)&&Ht(e[t])?Y(r.base?X(r.base):{},e[t],r.transform):n};function Pn(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:jn(),t=e=>Pn(e);if(t.version=`3.4.11`,t.removed=[],!e||!e.document||e.document.nodeType!==Q.document||!e.Element)return t.isSupported=!1,t;let n=e.document,r=n,i=r.currentScript;e.DocumentFragment;let a=e.HTMLTemplateElement,o=e.Node,s=e.Element,c=e.NodeFilter;e.NamedNodeMap===void 0&&(e.NamedNodeMap||e.MozNamedAttrMap),e.HTMLFormElement;let l=e.DOMParser,u=e.trustedTypes,d=s.prototype,ee=Z(d,`cloneNode`),te=Z(d,`remove`),ne=Z(d,`nextSibling`),re=Z(d,`childNodes`),ie=Z(d,`parentNode`),ae=Z(d,`shadowRoot`),oe=Z(d,`attributes`),f=o&&o.prototype?Z(o.prototype,`nodeType`):null,p=o&&o.prototype?Z(o.prototype,`nodeName`):null;if(typeof a==`function`){let e=n.createElement(`template`);e.content&&e.content.ownerDocument&&(n=e.content.ownerDocument)}let m,h=``,g,_=!1,v=0,se=function(){if(v>0)throw en(`A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.`)},ce=function(e){se(),v++;try{return m.createHTML(e)}finally{v--}},le=function(e){se(),v++;try{return m.createScriptURL(e)}finally{v--}},ue=function(){return _||=(g=Mn(u,i),!0),g},de=n,y=de.implementation,b=de.createNodeIterator,fe=de.createDocumentFragment,pe=de.getElementsByTagName,me=r.importNode,x=Nn();t.isSupported=typeof Ot==`function`&&typeof ie==`function`&&y&&y.createHTMLDocument!==void 0;let he=_n,ge=vn,_e=yn,S=bn,ve=xn,ye=Cn,C=wn,be=En,xe=Sn,w=null,T=Y({},[...on,...sn,...cn,...un,...fn]),E=null,Se=Y({},[...pn,...mn,...hn,...gn]),D=Object.seal(Nt(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Ce=null,we=null,O=Object.seal(Nt(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}})),Te=!0,Ee=!0,De=!1,Oe=!0,k=!1,ke=!0,Ae=!1,je=!1,Me=null,Ne=null,Pe=!1,Fe=!1,Ie=!1,Le=!1,Re=!0,ze=!1,Be=`user-content-`,A=!0,Ve=!1,j={},M=null,He=Y({},`annotation-xml.audio.colgroup.desc.foreignobject.head.iframe.math.mi.mn.mo.ms.mtext.noembed.noframes.noscript.plaintext.script.selectedcontent.style.svg.template.thead.title.video.xmp`.split(`.`)),Ue=null,We=Y({},[`audio`,`video`,`img`,`source`,`image`,`track`]),Ge=null,Ke=Y({},[`alt`,`class`,`for`,`id`,`label`,`name`,`pattern`,`placeholder`,`role`,`summary`,`title`,`value`,`style`,`xmlns`]),qe=`http://www.w3.org/1998/Math/MathML`,N=`http://www.w3.org/2000/svg`,P=`http://www.w3.org/1999/xhtml`,Je=P,Ye=!1,Xe=null,Ze=Y({},[qe,N,P],Wt),F=W([`mi`,`mo`,`mn`,`ms`,`mtext`]),Qe=Y({},F),$e=W([`annotation-xml`]),et=Y({},$e),tt=Y({},[`title`,`style`,`font`,`a`,`script`]),nt=null,rt=[`application/xhtml+xml`,`text/html`],I=null,it=null,at=n.createElement(`form`),ot=function(e){return e instanceof RegExp||e instanceof Function},st=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(it&&it===e)return;(!e||typeof e!=`object`)&&(e={}),e=X(e),nt=rt.indexOf(e.PARSER_MEDIA_TYPE)===-1?`text/html`:e.PARSER_MEDIA_TYPE,I=nt===`application/xhtml+xml`?Wt:Ut,w=$(e,`ALLOWED_TAGS`,T,{transform:I}),E=$(e,`ALLOWED_ATTR`,Se,{transform:I}),Xe=$(e,`ALLOWED_NAMESPACES`,Ze,{transform:Wt}),Ge=$(e,`ADD_URI_SAFE_ATTR`,Ke,{transform:I,base:Ke}),Ue=$(e,`ADD_DATA_URI_TAGS`,We,{transform:I,base:We}),M=$(e,`FORBID_CONTENTS`,He,{transform:I}),Ce=$(e,`FORBID_TAGS`,X({}),{transform:I}),we=$(e,`FORBID_ATTR`,X({}),{transform:I}),j=K(e,`USE_PROFILES`)?e.USE_PROFILES&&typeof e.USE_PROFILES==`object`?X(e.USE_PROFILES):e.USE_PROFILES:!1,Te=e.ALLOW_ARIA_ATTR!==!1,Ee=e.ALLOW_DATA_ATTR!==!1,De=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Oe=e.ALLOW_SELF_CLOSE_IN_ATTR!==!1,k=e.SAFE_FOR_TEMPLATES||!1,ke=e.SAFE_FOR_XML!==!1,Ae=e.WHOLE_DOCUMENT||!1,Fe=e.RETURN_DOM||!1,Ie=e.RETURN_DOM_FRAGMENT||!1,Le=e.RETURN_TRUSTED_TYPE||!1,Pe=e.FORCE_BODY||!1,Re=e.SANITIZE_DOM!==!1,ze=e.SANITIZE_NAMED_PROPS||!1,A=e.KEEP_CONTENT!==!1,Ve=e.IN_PLACE||!1,xe=an(e.ALLOWED_URI_REGEXP)?e.ALLOWED_URI_REGEXP:Sn,Je=typeof e.NAMESPACE==`string`?e.NAMESPACE:P,Qe=K(e,`MATHML_TEXT_INTEGRATION_POINTS`)&&e.MATHML_TEXT_INTEGRATION_POINTS&&typeof e.MATHML_TEXT_INTEGRATION_POINTS==`object`?X(e.MATHML_TEXT_INTEGRATION_POINTS):Y({},F),et=K(e,`HTML_INTEGRATION_POINTS`)&&e.HTML_INTEGRATION_POINTS&&typeof e.HTML_INTEGRATION_POINTS==`object`?X(e.HTML_INTEGRATION_POINTS):Y({},$e);let t=K(e,`CUSTOM_ELEMENT_HANDLING`)&&e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING==`object`?X(e.CUSTOM_ELEMENT_HANDLING):Nt(null);if(D=Nt(null),K(t,`tagNameCheck`)&&ot(t.tagNameCheck)&&(D.tagNameCheck=t.tagNameCheck),K(t,`attributeNameCheck`)&&ot(t.attributeNameCheck)&&(D.attributeNameCheck=t.attributeNameCheck),K(t,`allowCustomizedBuiltInElements`)&&typeof t.allowCustomizedBuiltInElements==`boolean`&&(D.allowCustomizedBuiltInElements=t.allowCustomizedBuiltInElements),G(D),k&&(Ee=!1),Ie&&(Fe=!0),j&&(w=Y({},fn),E=Nt(null),j.html===!0&&(Y(w,on),Y(E,pn)),j.svg===!0&&(Y(w,sn),Y(E,mn),Y(E,gn)),j.svgFilters===!0&&(Y(w,cn),Y(E,mn),Y(E,gn)),j.mathMl===!0&&(Y(w,un),Y(E,hn),Y(E,gn))),O.tagCheck=null,O.attributeCheck=null,K(e,`ADD_TAGS`)&&(typeof e.ADD_TAGS==`function`?O.tagCheck=e.ADD_TAGS:Ht(e.ADD_TAGS)&&(w===T&&(w=X(w)),Y(w,e.ADD_TAGS,I))),K(e,`ADD_ATTR`)&&(typeof e.ADD_ATTR==`function`?O.attributeCheck=e.ADD_ATTR:Ht(e.ADD_ATTR)&&(E===Se&&(E=X(E)),Y(E,e.ADD_ATTR,I))),K(e,`ADD_URI_SAFE_ATTR`)&&Ht(e.ADD_URI_SAFE_ATTR)&&Y(Ge,e.ADD_URI_SAFE_ATTR,I),K(e,`FORBID_CONTENTS`)&&Ht(e.FORBID_CONTENTS)&&(M===He&&(M=X(M)),Y(M,e.FORBID_CONTENTS,I)),K(e,`ADD_FORBID_CONTENTS`)&&Ht(e.ADD_FORBID_CONTENTS)&&(M===He&&(M=X(M)),Y(M,e.ADD_FORBID_CONTENTS,I)),A&&(w[`#text`]=!0),Ae&&Y(w,[`html`,`head`,`body`]),w.table&&(Y(w,[`tbody`]),delete Ce.tbody),e.TRUSTED_TYPES_POLICY){if(typeof e.TRUSTED_TYPES_POLICY.createHTML!=`function`)throw en(`TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.`);if(typeof e.TRUSTED_TYPES_POLICY.createScriptURL!=`function`)throw en(`TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.`);let t=m;m=e.TRUSTED_TYPES_POLICY;try{h=ce(``)}catch(e){throw m=t,e}}else e.TRUSTED_TYPES_POLICY===null?(m=void 0,h=``):(m===void 0&&(m=ue()),m&&typeof h==`string`&&(h=ce(``)));W&&W(e),it=e},ct=Y({},[...sn,...cn,...ln]),lt=Y({},[...un,...dn]),ut=function(e,t,n){return t.namespaceURI===P?e===`svg`:t.namespaceURI===qe?e===`svg`&&(n===`annotation-xml`||Qe[n]):!!ct[e]},dt=function(e,t,n){return t.namespaceURI===P?e===`math`:t.namespaceURI===N?e===`math`&&et[n]:!!lt[e]},ft=function(e,t,n){return t.namespaceURI===N&&!et[n]||t.namespaceURI===qe&&!Qe[n]?!1:!lt[e]&&(tt[e]||!ct[e])},pt=function(e){let t=ie(e);(!t||!t.tagName)&&(t={namespaceURI:Je,tagName:`template`});let n=Ut(e.tagName),r=Ut(t.tagName);return Xe[e.namespaceURI]?e.namespaceURI===N?ut(n,t,r):e.namespaceURI===qe?dt(n,t,r):e.namespaceURI===P?ft(n,t,r):!!(nt===`application/xhtml+xml`&&Xe[e.namespaceURI]):!1},L=function(e){Bt(t.removed,{element:e});try{ie(e).removeChild(e)}catch{if(te(e),!ie(e))throw en(`a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place`)}},mt=function(e){let t=re(e);if(t){let e=[];Lt(t,t=>{Bt(e,t)}),Lt(e,e=>{try{te(e)}catch{}})}let n=oe(e);if(n)for(let t=n.length-1;t>=0;--t){let r=n[t],i=r&&r.name;if(typeof i==`string`)try{e.removeAttribute(i)}catch{}}},R=function(e,n){try{Bt(t.removed,{attribute:n.getAttributeNode(e),from:n})}catch{Bt(t.removed,{attribute:null,from:n})}if(n.removeAttribute(e),e===`is`)if(Fe||Ie)try{L(n)}catch{}else try{n.setAttribute(e,``)}catch{}},z=function(e){let t=oe(e);if(t)for(let n=t.length-1;n>=0;--n){let r=t[n],i=r&&r.name;if(!(typeof i!=`string`||E[I(i)]))try{e.removeAttribute(i)}catch{}}},ht=function(e){let t=[e];for(;t.length>0;){let e=t.pop();(f?f(e):e.nodeType)===Q.element&&z(e);let n=re(e);if(n)for(let e=n.length-1;e>=0;--e)t.push(n[e])}},gt=function(e){let t=null,r=null;if(Pe)e=`<remove></remove>`+e;else{let t=Gt(e,/^[\r\n\t ]+/);r=t&&t[0]}nt===`application/xhtml+xml`&&Je===P&&(e=`<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>`+e+`</body></html>`);let i=m?ce(e):e;if(Je===P)try{t=new l().parseFromString(i,nt)}catch{}if(!t||!t.documentElement){t=y.createDocument(Je,`template`,null);try{t.documentElement.innerHTML=Ye?h:i}catch{}}let a=t.body||t.documentElement;return e&&r&&a.insertBefore(n.createTextNode(r),a.childNodes[0]||null),Je===P?pe.call(t,Ae?`html`:`body`)[0]:Ae?t.documentElement:a},_t=function(e){return b.call(e.ownerDocument||e,e,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT|c.SHOW_PROCESSING_INSTRUCTION|c.SHOW_CDATA_SECTION,null)},vt=function(e){return e=Kt(e,he,` `),e=Kt(e,ge,` `),e=Kt(e,_e,` `),e},yt=function(e){e.normalize();let t=b.call(e.ownerDocument||e,e,c.SHOW_TEXT|c.SHOW_COMMENT|c.SHOW_CDATA_SECTION|c.SHOW_PROCESSING_INSTRUCTION,null),n=t.nextNode();for(;n;)n.data=vt(n.data),n=t.nextNode();let r=e.querySelectorAll?.call(e,`template`);r&&Lt(r,e=>{V(e.content)&&yt(e.content)})},B=function(e){let t=p?p(e):null;return typeof t!=`string`||I(t)!==`form`?!1:typeof e.nodeName!=`string`||typeof e.textContent!=`string`||typeof e.removeChild!=`function`||e.attributes!==oe(e)||typeof e.removeAttribute!=`function`||typeof e.setAttribute!=`function`||typeof e.namespaceURI!=`string`||typeof e.insertBefore!=`function`||typeof e.hasChildNodes!=`function`||e.nodeType!==f(e)||e.childNodes!==re(e)},V=function(e){if(!f||typeof e!=`object`||!e)return!1;try{return f(e)===Q.documentFragment}catch{return!1}},H=function(e){if(!f||typeof e!=`object`||!e)return!1;try{return typeof f(e)==`number`}catch{return!1}};function U(e,n,r){e.length!==0&&Lt(e,e=>{e.call(t,n,r,it)})}let bt=function(e,t){return!!(ke&&e.hasChildNodes()&&!H(e.firstElementChild)&&q(Dn,e.textContent)&&q(Dn,e.innerHTML)||ke&&e.namespaceURI===P&&t===`style`&&H(e.firstElementChild)||e.nodeType===Q.processingInstruction||ke&&e.nodeType===Q.comment&&q(On,e.data))},xt=function(e,t){if(!Ce[t]&&Tt(t)&&(D.tagNameCheck instanceof RegExp&&q(D.tagNameCheck,t)||D.tagNameCheck instanceof Function&&D.tagNameCheck(t)))return!1;if(A&&!M[t]){let t=ie(e),n=re(e);if(n&&t){let r=n.length;for(let i=r-1;i>=0;--i){let r=Ve?n[i]:ee(n[i],!0);t.insertBefore(r,ne(e))}}}return L(e),!0},St=function(e){if(U(x.beforeSanitizeElements,e,null),B(e))return L(e),!0;let n=I(p?p(e):e.nodeName);if(U(x.uponSanitizeElement,e,{tagName:n,allowedTags:w}),bt(e,n))return L(e),!0;if(Ce[n]||!(O.tagCheck instanceof Function&&O.tagCheck(n))&&!w[n])return xt(e,n);if((f?f(e):e.nodeType)===Q.element&&!pt(e)||(n===`noscript`||n===`noembed`||n===`noframes`)&&q(kn,e.innerHTML))return L(e),!0;if(k&&e.nodeType===Q.text){let n=vt(e.textContent);e.textContent!==n&&(Bt(t.removed,{element:e.cloneNode()}),e.textContent=n)}return U(x.afterSanitizeElements,e,null),!1},Ct=function(e,t,r){if(we[t]||Re&&(t===`id`||t===`name`)&&(r in n||r in at))return!1;let i=E[t]||O.attributeCheck instanceof Function&&O.attributeCheck(t,e);if(!(Ee&&q(S,t))&&!(Te&&q(ve,t))){if(!i){if(!(Tt(e)&&(D.tagNameCheck instanceof RegExp&&q(D.tagNameCheck,e)||D.tagNameCheck instanceof Function&&D.tagNameCheck(e))&&(D.attributeNameCheck instanceof RegExp&&q(D.attributeNameCheck,t)||D.attributeNameCheck instanceof Function&&D.attributeNameCheck(t,e))||t===`is`&&D.allowCustomizedBuiltInElements&&(D.tagNameCheck instanceof RegExp&&q(D.tagNameCheck,r)||D.tagNameCheck instanceof Function&&D.tagNameCheck(r))))return!1}else if(!Ge[t]&&!q(xe,Kt(r,C,``))&&!((t===`src`||t===`xlink:href`||t===`href`)&&e!==`script`&&qt(r,`data:`)===0&&Ue[e])&&!(De&&!q(ye,Kt(r,C,``)))&&r)return!1}return!0},wt=Y({},[`annotation-xml`,`color-profile`,`font-face`,`font-face-format`,`font-face-name`,`font-face-src`,`font-face-uri`,`missing-glyph`]),Tt=function(e){return!wt[Ut(e)]&&q(be,e)},Et=function(e,t,n,r){if(m&&typeof u==`object`&&typeof u.getAttributeType==`function`&&!n)switch(u.getAttributeType(e,t)){case`TrustedHTML`:return ce(r);case`TrustedScriptURL`:return le(r)}return r},Dt=function(e,n,r,i){try{r?e.setAttributeNS(r,n,i):e.setAttribute(n,i),B(e)?L(e):zt(t.removed)}catch{R(n,e)}},kt=function(e){U(x.beforeSanitizeAttributes,e,null);let t=e.attributes;if(!t||B(e))return;let n={attrName:``,attrValue:``,keepAttr:!0,allowedAttributes:E,forceKeepAttr:void 0},r=t.length,i=I(e.nodeName);for(;r--;){let a=t[r],o=a.name,s=a.namespaceURI,c=a.value,l=I(o),u=c,d=o===`value`?u:Jt(u);if(n.attrName=l,n.attrValue=d,n.keepAttr=!0,n.forceKeepAttr=void 0,U(x.uponSanitizeAttribute,e,n),d=n.attrValue,ze&&(l===`id`||l===`name`)&&qt(d,Be)!==0&&(R(o,e),d=Be+d),ke&&q(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,d)){R(o,e);continue}if(l===`attributename`&&Gt(d,`href`)){R(o,e);continue}if(!n.forceKeepAttr){if(!n.keepAttr){R(o,e);continue}if(!Oe&&q(An,d)){R(o,e);continue}if(k&&(d=vt(d)),!Ct(i,l,d)){R(o,e);continue}d=Et(i,l,s,d),d!==u&&Dt(e,o,s,d)}}U(x.afterSanitizeAttributes,e,null)},At=function(e){let t=null,n=_t(e);for(U(x.beforeSanitizeShadowDOM,e,null);t=n.nextNode();)if(U(x.uponSanitizeShadowNode,t,null),St(t),kt(t),V(t.content)&&At(t.content),(f?f(t):t.nodeType)===Q.element){let e=ae(t);V(e)&&(jt(e),At(e))}U(x.afterSanitizeShadowDOM,e,null)},jt=function(e){let t=[{node:e,shadow:null}];for(;t.length>0;){let e=t.pop();if(e.shadow){At(e.shadow);continue}let n=e.node,r=(f?f(n):n.nodeType)===Q.element,i=re(n);if(i)for(let e=i.length-1;e>=0;--e)t.push({node:i[e],shadow:null});if(r){let e=p?p(n):null;if(typeof e==`string`&&I(e)===`template`){let e=n.content;V(e)&&t.push({node:e,shadow:null})}}if(r){let e=ae(n);V(e)&&t.push({node:null,shadow:e},{node:e,shadow:null})}}};return t.sanitize=function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=null,a=null,o=null,s=null;if(Ye=!e,Ye&&(e=`<!-->`),typeof e!=`string`&&!H(e)&&(e=rn(e),typeof e!=`string`))throw en(`dirty is not a string, aborting`);if(!t.isSupported)return e;je?(w=Me,E=Ne):st(n),(x.uponSanitizeElement.length>0||x.uponSanitizeAttribute.length>0)&&(w=X(w)),x.uponSanitizeAttribute.length>0&&(E=X(E)),t.removed=[];let c=Ve&&typeof e!=`string`&&H(e);if(c){let t=p?p(e):e.nodeName;if(typeof t==`string`){let e=I(t);if(!w[e]||Ce[e])throw en(`root node is forbidden and cannot be sanitized in-place`)}if(B(e))throw en(`root node is clobbered and cannot be sanitized in-place`);try{jt(e)}catch(t){throw mt(e),t}}else if(H(e))i=gt(`<!---->`),a=i.ownerDocument.importNode(e,!0),a.nodeType===Q.element&&a.nodeName===`BODY`||a.nodeName===`HTML`?i=a:i.appendChild(a),jt(a);else{if(!Fe&&!k&&!Ae&&e.indexOf(`<`)===-1)return m&&Le?ce(e):e;if(i=gt(e),!i)return Fe?null:Le?h:``}i&&Pe&&L(i.firstChild);let l=_t(c?e:i);try{for(;o=l.nextNode();)St(o),kt(o),V(o.content)&&At(o.content)}catch(t){throw c&&mt(e),t}if(c)return Lt(t.removed,e=>{e.element&&ht(e.element)}),k&&yt(e),e;if(Fe){if(k&&yt(i),Ie)for(s=fe.call(i.ownerDocument);i.firstChild;)s.appendChild(i.firstChild);else s=i;return(E.shadowroot||E.shadowrootmode)&&(s=me.call(r,s,!0)),s}let u=Ae?i.outerHTML:i.innerHTML;return Ae&&w[`!doctype`]&&i.ownerDocument&&i.ownerDocument.doctype&&i.ownerDocument.doctype.name&&q(Tn,i.ownerDocument.doctype.name)&&(u=`<!DOCTYPE `+i.ownerDocument.doctype.name+`>
`+u),k&&(u=vt(u)),m&&Le?ce(u):u},t.setConfig=function(){st(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}),je=!0,Me=w,Ne=E},t.clearConfig=function(){it=null,je=!1,Me=null,Ne=null,m=g,h=``},t.isValidAttribute=function(e,t,n){return it||st({}),Ct(I(e),I(t),n)},t.addHook=function(e,t){typeof t==`function`&&K(x,e)&&Bt(x[e],t)},t.removeHook=function(e,t){if(K(x,e)){if(t!==void 0){let n=Rt(x[e],t);return n===-1?void 0:Vt(x[e],n,1)[0]}return zt(x[e])}},t.removeHooks=function(e){K(x,e)&&(x[e]=[])},t.removeAllHooks=function(){x=Nn()},t}var Fn=Pn(),In={ALLOWED_TAGS:[`br`,`div`,`span`,`a`,`ul`,`ol`,`li`,`sup`,`sub`,`code`,`cite`],ALLOWED_ATTR:[`style`,`href`]};function Ln(e){return Fn.sanitize(e,In)}var Rn=class extends _{constructor(...e){super(...e),this.open=!1,this.state=Bn.PENDING,this.notifications=[]}static{this.styles=[y,b`
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
    `]}handleDeleteAllNotifications(){this.dispatchEvent(new CustomEvent(`bkddeleteallnotifications`,{bubbles:!0,composed:!0}))}handleDeleteNotification(e){this.dispatchEvent(new CustomEvent(`bkddeletenotification`,{bubbles:!0,composed:!0,detail:{id:e}}))}renderContent(){return this.state===Bn.ERROR?e`<div class="error">
        ${g(`Fehler beim Laden der Benachrichtigungen`)}
      </div>`:this.state===Bn.PENDING?e`<div class="pending">${z(bt)}</div>`:this.notifications.length===0?e`<div class="notification">${g(`Keine Benachrichtigungen`)}</div>`:ve(this.notifications,e=>e.id,e=>this.renderNotification(e))}renderNotification(t){let n=Ln(t.subject),r=Ln(t.body);return e`<div class="notification">
      <div class="text">
        <div class="subject">${z(n)}</div>
        <div class="body">${z(r)}</div>
      </div>
      <button
        type="button"
        aria-label="${g(`Benachrichtigung löschen`)}"
        @click=${()=>this.handleDeleteNotification(t.id)}
      >
        ${z(xt)}
      </button>
    </div> `}render(){if(this.open)return e`<div id="notifications-dropdown">
      <div class="header">
        <h2>${g(`Benachrichtigungen`)}</h2>
        <button
          type="button"
          ?disabled=${!this.notifications||this.notifications.length===0}
          @click="${()=>this.handleDeleteAllNotifications()}"
        >
          ${g(`Alle löschen`)}
        </button>
      </div>
      <div class="content">${this.renderContent()}</div>
    </div>`}};S([u()],Rn.prototype,`open`,void 0),S([u()],Rn.prototype,`state`,void 0),S([u()],Rn.prototype,`notifications`,void 0),Rn=S([v(`bkd-notifications-dropdown`),m()],Rn);var zn=n();typeof zn?.notificationRefreshTime!=`number`&&(zn.notificationRefreshTime=30);var Bn=function(e){return e.PENDING=`pending`,e.ERROR=`error`,e.SUCCESS=`success`,e}({}),Vn=class extends _{constructor(...e){super(...e),this.state=`pending`,this.dropdown=new mt(this,{queryToggleElement:()=>this.toggleElement??null,queryMenuElement:()=>this.dropdownElement?.shadowRoot??null,queryItems:()=>this.dropdownElement?.shadowRoot?.querySelectorAll(`button`)??null,queryFocused:()=>this.dropdownElement?.shadowRoot?.activeElement??null})}static{this.styles=[y,b`
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
    `]}connectedCallback(){super.connectedCallback(),this.fetch(),this.interval=setInterval(()=>this.fetch(),zn.notificationRefreshTime*1e3)}disconnectedCallback(){clearInterval(this.interval),super.disconnectedCallback()}handleDeleteAllNotifications(){let e=[];a(e),this.notifications=e}handleDeleteNotification(e){if(!this.notifications)return;let t=this.notifications.filter(t=>t.id!==e.detail.id);a(t),this.notifications=t}async fetch(){try{this.notifications=await p(),this.state=`success`}catch{this.state=`error`}}render(){return e` <button
        id="notifications-toggle"
        type="button"
        aria-label="${g(`Benachrichtigungen`)}"
        aria-expanded=${this.dropdown.open}
        @click="${()=>this.dropdown.toggle()}"
      >
        ${z(U)}
        <span
          class="circle"
          ?hidden=${this.state!==`success`||this.notifications?.length===0}
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
      </bkd-notifications-dropdown>`}};S([d(`button`)],Vn.prototype,`toggleElement`,void 0),S([d(`bkd-notifications-dropdown`)],Vn.prototype,`dropdownElement`,void 0),S([be()],Vn.prototype,`notifications`,void 0),S([be()],Vn.prototype,`state`,void 0),Vn=S([v(`bkd-notifications-toggle`),m()],Vn);var Hn=`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="7.4" fill="none"><path fill="currentColor" d="m6 7.4-6-6L1.4 0 6 4.6 10.6 0 12 1.4Z"/></svg>
`,Un=`<svg xmlns="http://www.w3.org/2000/svg" width="11.414" height="11.414" fill="none"><path stroke="currentColor" stroke-width="2" d="m.707.707 10 10m-10 0 10-10"/></svg>
`,Wn=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M2 20v-2.8a3 3 0 0 1 .425-1.563A2.794 2.794 0 0 1 3.6 14.55c1-.5 2.038-.883 3.113-1.15 1.074-.267 2.17-.4 3.287-.4.417 0 .833.03 1.25.088.417.058.833.129 1.25.212v1.575c-.75.367-1.354.85-1.813 1.45-.458.6-.687 1.383-.687 2.35V20H2Zm10 0v-1.4c0-.4.104-.77.313-1.113a1.76 1.76 0 0 1 .887-.737c.6-.25 1.22-.438 1.863-.563a10.11 10.11 0 0 1 3.874 0 9.604 9.604 0 0 1 1.863.563c.383.15.68.396.887.738.209.341.313.712.313 1.112V20H12Zm5-5c-.7 0-1.292-.242-1.775-.725-.483-.483-.725-1.075-.725-1.775s.242-1.292.725-1.775C15.708 10.242 16.3 10 17 10s1.292.242 1.775.725c.483.483.725 1.075.725 1.775s-.242 1.292-.725 1.775C18.292 14.758 17.7 15 17 15Zm-7-3c-1.1 0-2.042-.392-2.825-1.175C6.392 10.042 6 9.1 6 8s.392-2.042 1.175-2.825C7.958 4.392 8.9 4 10 4s2.042.392 2.825 1.175C13.608 5.958 14 6.9 14 8s-.392 2.042-1.175 2.825C12.042 11.608 11.1 12 10 12Z"/></svg>
`;function Gn(e,t,n){let r=document.createElement(`form`);r.method=e,r.style.visibility=`hidden`,r.action=t,Object.keys(n).forEach(e=>{let t=document.createElement(`input`);t.type=`hidden`,t.name=e,t.value=n[e],r.appendChild(t)}),document.body.appendChild(r),r.submit()}function*Kn(e,t){if(e!==void 0){let n=0;for(let r of e)yield t(r,n++)}}var qn=class extends _{constructor(...e){super(...e),this.availableSubstitutions=[],this.activeSubstitution=null,this.open=!1}static{this.styles=[y,b`
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
    `]}get displayedSubstitutions(){return this.availableSubstitutions.filter(e=>!this.activeSubstitution||e.Id===this.activeSubstitution.Id)}handleSubstitutionClick(e,t){e.preventDefault(),this.dispatchEvent(new CustomEvent(`bkdsubstitutionstart`,{detail:{substitution:t},composed:!0,bubbles:!0}))}handleStopClick(){this.dispatchEvent(new CustomEvent(`bkdsubstitutionstop`,{composed:!0,bubbles:!0}))}handleCloseClick(){this.dispatchEvent(new CustomEvent(`bkdclose`))}renderSubstitution(t){return e`
      <li role="presentation" class=${T({active:t.Id===this.activeSubstitution?.Id})}>
        <a
          role="menuitem"
          href="#"
          @click=${e=>this.handleSubstitutionClick(e,t)}
          >${t.Holder}</a
        >
      </li>
    `}render(){if(this.open)return e`
      <ul role="menu" id="substitutions-menu">
        <li role="presentation" class="dropdown-menu-header">
          <button
            role="menuitem"
            class="dropdown-menu-close"
            @click=${this.handleCloseClick.bind(this)}
          >
            <img src="icons/close.svg" alt=${g(`Schliessen`)} />
          </button>
          <div class="dropdown-menu-heading">
            ${g(`Stellvertretung ausüben`)}
          </div>
        </li>
        ${Kn(this.displayedSubstitutions,this.renderSubstitution.bind(this))}
        ${s(this.activeSubstitution,()=>e`<li role="presentation" class="dropdown-menu-stop">
              <button role="menuitem" @click=${this.handleStopClick.bind(this)}>
                ${g(`Stellvertretung beenden`)}
              </button>
            </li>`)}
      </ul>
    `}};S([u()],qn.prototype,`availableSubstitutions`,void 0),S([u()],qn.prototype,`activeSubstitution`,void 0),S([u()],qn.prototype,`open`,void 0),qn=S([v(`bkd-substitutions-dropdown`),m()],qn);var Jn=class extends _{static{this.styles=[y,b`
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
    `]}constructor(){super(),this.availableSubstitutions=[],this.activeSubstitution=null,this.dropdown=new mt(this,{queryToggleElement:()=>this.toggleElement??null,queryMenuElement:()=>this.menuElement?.shadowRoot??null,tabInside:!this.isLargeScreen(),queryItems:()=>this.menuElement?.shadowRoot?.querySelectorAll(`a[role='menuitem']`)??null,queryFocused:()=>this.menuElement?.shadowRoot?.activeElement??null}),new c(this,C)}connectedCallback(){super.connectedCallback(),this.fetch()}async fetch(){let e=await D();this.availableSubstitutions=e.filter(e=>this.isNotInFuture(e)).sort((e,t)=>e.Holder.localeCompare(t.Holder));let t=this.getActiveSubstitutionId();this.activeSubstitution=this.availableSubstitutions.find(e=>e.Id===t)??null}isNotInFuture(e){return!!e.DateFrom&&new Date(e.DateFrom)<=new Date}getActiveSubstitutionId(){return i.accessTokenPayload?.substitutionId??null}toggle(e){e.preventDefault(),this.activeSubstitution&&this.isLargeScreen()?this.stopSubstitution():this.dropdown.toggle()}isLargeScreen(){return window.innerWidth>1200}startSubstitution(e){this.activeSubstitution||this.redirect(e,`start`)}stopSubstitution(){this.activeSubstitution&&this.redirect(this.activeSubstitution,`stop`)}redirect(e,t){let{oAuthServer:r,oAuthPrefix:a}=n();Gn(`POST`,`${r}/${a}/Authorization/Substitutions/${e.Id}/${t}`,{access_token:i.accessToken??``,redirect_uri:me(`home`)})}handleSubstitutionStart(e){this.dropdown.close(),this.startSubstitution(e.detail.substitution)}handleSubstitutionStop(){this.dropdown.close(),this.stopSubstitution()}getLabel(){return this.activeSubstitution?.Holder||g(`Stellvertretung ausüben`)}isAllowed(){return C.app.scope===`Tutoring`}render(){if(!(!this.isAllowed()||this.availableSubstitutions.length===0))return e`
      <button
        class=${T({active:!!this.activeSubstitution,open:this.dropdown.open})}
        @click=${this.toggle.bind(this)}
        aria-label=${this.getLabel()}
        aria-expanded=${this.dropdown.open}
        aria-haspopup="menu"
      >
        <div class="icon">${z(Wn)}</div>
        <div class="label">${this.getLabel()}</div>
        <div class="icon-caret">
          ${z(this.activeSubstitution?Un:Hn)}
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
    `}};S([d(`button`)],Jn.prototype,`toggleElement`,void 0),S([d(`bkd-substitutions-dropdown`)],Jn.prototype,`menuElement`,void 0),S([be()],Jn.prototype,`availableSubstitutions`,void 0),S([be()],Jn.prototype,`activeSubstitution`,void 0),Jn=S([v(`bkd-substitutions-toggle`),m()],Jn);var Yn=class extends _{static{this.styles=[y,b`
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
    `]}constructor(){super(),this.dropdown=new mt(this,{queryToggleElement:()=>this.toggleElement??null,queryMenuElement:()=>this.menuElement??null,queryItems:()=>this.shadowRoot?.querySelectorAll(`a[role='menuitem']`)??null,queryFocused:()=>this.shadowRoot?.activeElement??null}),new c(this,C)}handleSettingsItemClick(e,t){this.dropdown.close(),this.dispatchEvent(new CustomEvent(`bkdsettingsitemclick`,{detail:{item:t,event:e},composed:!0,bubbles:!0}))}renderSettingsItem(t){return e`<li role="presentation">
      <a
        role="menuitem"
        href=${t.href}
        target=${t.external?`_blank`:`_self`}
        @click=${e=>this.handleSettingsItemClick(e,t)}
      >
        ${t.label}</a
      >
      ${t.img?e`<img src=${t.img} alt="" width="24" height="24" />`:se}
    </li>`}render(){return e`
      <button
        type="button"
        @click=${()=>this.dropdown.toggle()}
        aria-label=${g(`Menü Benutzereinstellungen`)}
        aria-expanded=${this.dropdown.open}
        aria-haspopup="menu"
      >
        <img src="/icons/settings.svg" alt="" width="32" height="32" />
      </button>
      <ul role="menu" ?hidden=${!this.dropdown.open}>
        ${Kn(_t(C.locale),this.renderSettingsItem.bind(this))}
      </ul>
    `}};S([d(`button`)],Yn.prototype,`toggleElement`,void 0),S([d(`ul[role="menu"]`)],Yn.prototype,`menuElement`,void 0),Yn=S([v(`bkd-user-settings`),m()],Yn);var Xn=class extends _{static{this.styles=[y,b`
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
    `]}constructor(){super(),this.mobileNavOpen=!1,new c(this,C)}render(){return e`
      <nav role="navigation" aria-label=${g(`Servicenavigation`)}>
        <bkd-substitutions-toggle></bkd-substitutions-toggle>
        <bkd-notifications-toggle></bkd-notifications-toggle>
        <bkd-user-settings></bkd-user-settings>
        ${s(C.allowedLocales.length>1,()=>e`<bkd-language-switcher></bkd-language-switcher>`)}
        <bkd-hamburger .open=${this.mobileNavOpen}></bkd-hamburger>
      </nav>
    `}};S([u()],Xn.prototype,`mobileNavOpen`,void 0),Xn=S([v(`bkd-service-nav`),m()],Xn);var Zn=class extends _{static{this.styles=[y,b`
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
    `]}constructor(){super(),this.mobileNav=new mt(this,{queryToggleElement:()=>this.serviceNavElement?.shadowRoot?.querySelector(`bkd-hamburger`)??null,queryMenuElement:()=>this.mobileNavElement?.shadowRoot??null,tabInside:!0}),new c(this,C)}handleLogoClick(e){e.preventDefault(),C.navigationItemKey=h.navigationHome.key,C.appPath=h.navigationHome.appPath}handleNavItemClick(e){let{item:t}=e.detail;C.navigationItemKey=t.key,this.mobileNav.close()}handleSettingsItemClick(e){let{item:t,event:n}=e.detail;t.external||(n.preventDefault(),t.key===`logout`?this.dispatchEvent(new CustomEvent(`bkdlogout`,{composed:!0,bubbles:!0})):C.navigationItemKey=t.key),this.mobileNav.close()}render(){return e`
      <header role="banner">
        <a
          class="logo"
          href=${me(`home`)}
          @click=${this.handleLogoClick.bind(this)}
          ><img src="logo.svg" alt=${g(`Evento Startseite`)}
        /></a>
        <div class="logo-caption">${C.instanceName}</div>
        ${s(navigator.onLine,()=>e`<bkd-service-nav
              .mobileNavOpen=${this.mobileNav.open}
              @bkdhamburgertoggle=${()=>this.mobileNav.toggle()}
              @bkdsettingsitemclick=${this.handleSettingsItemClick.bind(this)}
            ></bkd-service-nav> `)}
        ${s(navigator.onLine,()=>e` <bkd-nav
              @bkdnavitemclick=${this.handleNavItemClick.bind(this)}
            ></bkd-nav>`)}
        ${s(this.mobileNav.open,()=>e`<bkd-mobile-nav
              @bkdnavitemclick=${this.handleNavItemClick.bind(this)}
              @bkdsettingsitemclick=${this.handleSettingsItemClick.bind(this)}
            ></bkd-mobile-nav>`)}
      </header>
    `}};S([d(`bkd-service-nav`)],Zn.prototype,`serviceNavElement`,void 0),S([d(`bkd-mobile-nav`)],Zn.prototype,`mobileNavElement`,void 0),Zn=S([v(`bkd-header`),m()],Zn);var Qn=Qe(),$n=(async function(){await $e(Qn,ce(),f()),C.init()})();E(b`
    ${_e}
    :root {
      ${de}
    }
  `.toString());var er=class extends _{static{this.styles=[y,b`
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
    `]}constructor(){super(),this.authReady=!1,this.subscriptions=[],this.handleMessage=({data:e,origin:t})=>{if(t===window.location.origin)switch(e.type){case`bkdAppPushState`:{let t=e.args[2];this.updateUrlAndNavigationState(t,!1);break}case`bkdAppReplaceState`:{let t=e.args[2];Se(pe(t),!0);break}case`bkdAppHashChange`:{let{url:t}=e;Se(pe(t));break}}},$n.then(()=>this.authReady=!0),new c(this,C)}connectedCallback(){super.connectedCallback(),C.initialized.then(()=>setTimeout(()=>{i.scope!==C.app.scope&&et(Qn,C.app.scope,C.locale)})),this.subscriptions.push(C.subscribeScopeAndLocale((e,t)=>et(Qn,e,t),!0)),this.subscriptions.push(C.subscribeInstanceName(this.updateTitle.bind(this))),this.subscriptions.push(C.subscribeNavigationItem(this.updateTitle.bind(this))),window.addEventListener(`message`,this.handleMessage),C.actualAppPath=new URL(location.href).hash,window.addEventListener(`hashchange`,this.handleHashChange)}disconnectedCallback(){super.disconnectedCallback(),this.subscriptions.forEach(e=>e()),window.removeEventListener(`message`,this.handleMessage),window.removeEventListener(`hashchange`,this.handleHashChange)}updateTitle(){let{instanceName:e,navigationItem:t}=C,n=t?.label&&t?.key!==h.navigationHome.key;document.title=n?[t?.label,e].join(` ― `):e}updateUrlAndNavigationState(e,t){let n=pe(e);Se(n,t);let r=Ce(C.navigation,n);r?.item?.key&&r.item.key!==C.navigationItemKey?(C.actualAppPath=n,C.navigationItemKey=r.item.key):C.appPath=n}handleHashChange(e){C.appPath=new URL(e.newURL).hash}handleLogout(){nt(Qn)}render(){return e`
      ${s(this.authReady&&i.authenticated,()=>e`
          <bkd-header @bkdlogout=${this.handleLogout.bind(this)}></bkd-header>
          <bkd-content></bkd-content>
          <bkd-footer></bkd-footer>
        `)}
    `}};S([be()],er.prototype,`authReady`,void 0),er=S([v(`bkd-portal`),m()],er);export{ke as t};