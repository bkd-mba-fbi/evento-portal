import{$ as e,A as t,B as n,C as r,D as i,E as a,F as o,G as s,H as c,I as l,J as u,K as d,L as ee,M as te,N as f,O as ne,P as re,Q as ie,R as ae,S as oe,T as p,U as m,V as h,W as g,X as _,Y as v,Z as y,_ as b,a as se,b as ce,c as le,d as x,et as S,f as ue,g as de,h as C,i as fe,j as w,k as pe,l as T,m as E,n as D,o as me,p as O,q as k,r as he,s as ge,t as A,u as _e,v as j,w as ve,x as M,z as ye}from"./LanguageSwitcher-DoWpremj.js";var be=Object.create,N=Object.defineProperty,xe=Object.getOwnPropertyDescriptor,Se=Object.getOwnPropertyNames,Ce=Object.getPrototypeOf,we=Object.prototype.hasOwnProperty,Te=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),Ee=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(var i=Se(t),a=0,o=i.length,s;a<o;a++)s=i[a],!we.call(e,s)&&s!==n&&N(e,s,{get:(e=>t[e]).bind(null,s),enumerable:!(r=xe(t,s))||r.enumerable});return e},P=(e,t,n)=>(n=e==null?{}:be(Ce(e)),Ee(t||!e||!e.__esModule?N(n,`default`,{value:e,enumerable:!0}):n,e)),F=class extends Error{constructor(e,t){super(e),this.oauth2Code=t}},De=class extends F{constructor(e,t,n,r){super(e,t),this.httpCode=n.status,this.response=n,this.parsedBody=r}},Oe=class{constructor(e){this.client=e}async getAuthorizeUri(e){let[t,n]=await Promise.all([e.codeVerifier?Ae(e.codeVerifier):void 0,this.client.getEndpoint(`authorizationEndpoint`)]),r=new URLSearchParams({client_id:this.client.settings.clientId,response_type:`code`,redirect_uri:e.redirectUri});if(t&&(r.set(`code_challenge_method`,t[0]),r.set(`code_challenge`,t[1])),e.state&&r.set(`state`,e.state),e.scope&&r.set(`scope`,e.scope.join(` `)),e.resource)for(let t of[].concat(e.resource))r.append(`resource`,t);if(e.responseMode&&e.responseMode!==`query`&&r.append(`response_mode`,e.responseMode),e.extraParams)for(let[t,n]of Object.entries(e.extraParams)){if(r.has(t))throw Error(`Property in extraParams would overwrite standard property: ${t}`);r.set(t,n)}return n+`?`+r.toString()}async getTokenFromCodeRedirect(e,t){let{code:n}=this.validateResponse(e,{state:t.state});return this.getToken({code:n,redirectUri:t.redirectUri,codeVerifier:t.codeVerifier})}validateResponse(e,t){e=new URL(e);let n=e.searchParams;if(!n.has(`code`)&&!n.has(`error`)&&e.hash.length>0&&(n=new URLSearchParams(e.hash.slice(1))),n.has(`error`))throw new F(n.get(`error_description`)??`OAuth2 error`,n.get(`error`));if(!n.has(`code`))throw Error(`The url did not contain a code parameter ${e}`);if(t.state&&t.state!==n.get(`state`))throw Error(`The "state" parameter in the url did not match the expected value of ${t.state}`);return{code:n.get(`code`),scope:n.has(`scope`)?n.get(`scope`).split(` `):void 0}}async getToken(e){let t={grant_type:`authorization_code`,code:e.code,redirect_uri:e.redirectUri,code_verifier:e.codeVerifier,resource:e.resource};return this.client.tokenResponseToOAuth2Token(this.client.request(`tokenEndpoint`,t))}};async function ke(){let e=await je(),t=new Uint8Array(32);return e.getRandomValues(t),I(t)}async function Ae(e){return[`S256`,I(await(await je()).subtle.digest(`SHA-256`,Me(e)))]}async function je(){var e;if(typeof window<`u`&&window.crypto){if(!((e=window.crypto.subtle)!=null&&e.digest))throw Error(`The context/environment is not secure, and does not support the 'crypto.subtle' module. See: https://developer.mozilla.org/en-US/docs/Web/API/Crypto/subtle for details`);return window.crypto}return typeof self<`u`&&self.crypto?self.crypto:(await Promise.resolve().then(()=>Fe)).webcrypto}function Me(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)&255;return t}function I(e){return btoa(String.fromCharCode(...new Uint8Array(e))).replace(/\+/g,`-`).replace(/\//g,`_`).replace(/=+$/,``)}var L=class{constructor(e){this.serverMetadata=null,e!=null&&e.fetch||(e.fetch=fetch.bind(globalThis)),this.settings=e}async refreshToken(e,t){if(!e.refreshToken)throw Error(`This token didn't have a refreshToken. It's not possible to refresh this`);let n={grant_type:`refresh_token`,refresh_token:e.refreshToken};this.settings.clientSecret||(n.client_id=this.settings.clientId),t!=null&&t.scope&&(n.scope=t.scope.join(` `)),t!=null&&t.resource&&(n.resource=t.resource);let r=await this.tokenResponseToOAuth2Token(this.request(`tokenEndpoint`,n));return!r.refreshToken&&e.refreshToken&&(r.refreshToken=e.refreshToken),r}async clientCredentials(e){let t=[`client_id`,`client_secret`,`grant_type`,`scope`];if(e!=null&&e.extraParams&&Object.keys(e.extraParams).filter(e=>t.includes(e)).length>0)throw Error(`The following extraParams are disallowed: '${t.join(`', '`)}'`);let n={grant_type:`client_credentials`,scope:(e?.scope)?.join(` `),resource:e?.resource,...e?.extraParams};if(!this.settings.clientSecret)throw Error(`A clientSecret must be provided to use client_credentials`);return this.tokenResponseToOAuth2Token(this.request(`tokenEndpoint`,n))}async password(e){let t={grant_type:`password`,...e,scope:e.scope?.join(` `)};return this.tokenResponseToOAuth2Token(this.request(`tokenEndpoint`,t))}get authorizationCode(){return new Oe(this)}async introspect(e){let t={token:e.accessToken,token_type_hint:`access_token`};return this.request(`introspectionEndpoint`,t)}async revoke(e,t=`access_token`){let n=e.accessToken;t===`refresh_token`&&(n=e.refreshToken);let r={token:n,token_type_hint:t};return this.request(`revocationEndpoint`,r)}async getEndpoint(e){if(this.settings[e]!==void 0||e!==`discoveryEndpoint`&&(await this.discover(),this.settings[e]!==void 0))return R(this.settings[e],this.settings.server);if(!this.settings.server)throw Error(`Could not determine the location of ${e}. Either specify ${e} in the settings, or the "server" endpoint to let the client discover it.`);switch(e){case`authorizationEndpoint`:return R(`/authorize`,this.settings.server);case`tokenEndpoint`:return R(`/token`,this.settings.server);case`discoveryEndpoint`:return R(`/.well-known/oauth-authorization-server`,this.settings.server);case`introspectionEndpoint`:return R(`/introspect`,this.settings.server);case`revocationEndpoint`:return R(`/revoke`,this.settings.server)}}discover(){return this.discoveryPromise===void 0&&(this.discoveryPromise=this.doDiscover()),this.discoveryPromise}async doDiscover(){var e;let t;try{t=await this.getEndpoint(`discoveryEndpoint`)}catch{console.warn(`[oauth2] OAuth2 discovery endpoint could not be determined. Either specify the "server" or "discoveryEndpoint`);return}let n=await this.settings.fetch(t,{headers:{Accept:`application/json`}});if(!n.ok)return;if(!((e=n.headers.get(`Content-Type`))!=null&&e.startsWith(`application/json`))){console.warn(`[oauth2] OAuth2 discovery endpoint was not a JSON response. Response is ignored`);return}this.serverMetadata=await n.json();let r=[[`authorization_endpoint`,`authorizationEndpoint`],[`token_endpoint`,`tokenEndpoint`],[`introspection_endpoint`,`introspectionEndpoint`],[`revocation_endpoint`,`revocationEndpoint`]];if(this.serverMetadata!==null){for(let[e,n]of r)this.serverMetadata[e]&&(this.settings[n]=R(this.serverMetadata[e],t));if(this.serverMetadata.token_endpoint_auth_methods_supported&&!this.settings.authenticationMethod){for(let e of this.serverMetadata.token_endpoint_auth_methods_supported)if(e===`client_secret_basic`||e===`client_secret_post`){this.settings.authenticationMethod=e;break}}}}async request(e,t){let n=await this.getEndpoint(e),r={"Content-Type":`application/x-www-form-urlencoded`,Accept:`application/json`},i=this.settings.authenticationMethod;switch(this.settings.clientSecret||(i=`client_secret_post`),i||=`client_secret_basic_interop`,i){case`client_secret_basic`:r.Authorization=`Basic `+btoa(Pe(this.settings.clientId)+`:`+Pe(this.settings.clientSecret));break;case`client_secret_basic_interop`:r.Authorization=`Basic `+btoa(this.settings.clientId.replace(/:/g,`%3A`)+`:`+this.settings.clientSecret.replace(/:/g,`%3A`));break;case`client_secret_post`:t.client_id=this.settings.clientId,this.settings.clientSecret&&(t.client_secret=this.settings.clientSecret);break;default:throw Error(`Authentication method not yet supported:`+i+`. Open a feature request if you want this!`)}let a=await this.settings.fetch(n,{method:`POST`,body:Ne(t),headers:r}),o;if(a.status!==204&&a.headers.has(`Content-Type`)&&a.headers.get(`Content-Type`).match(/^application\/(.*\+)?json/)&&(o=await a.json()),a.ok)return o;let s,c;throw o!=null&&o.error?(s=`OAuth2 error `+o.error+`.`,o.error_description&&(s+=` `+o.error_description),c=o.error):(s=`HTTP Error `+a.status+` `+a.statusText,a.status===401&&this.settings.clientSecret&&(s+=`. It's likely that the clientId and/or clientSecret was incorrect`),c=null),new De(s,c,a,o)}async tokenResponseToOAuth2Token(e){let t=await e;if(!(t!=null&&t.access_token))throw console.warn(`Invalid OAuth2 Token Response: `,t),TypeError(`We received an invalid token response from an OAuth2 server.`);let{access_token:n,refresh_token:r,expires_in:i,id_token:a,scope:o,token_type:s,...c}=t,l={accessToken:n,expiresAt:i?Date.now()+i*1e3:null,refreshToken:r??null};return a&&(l.idToken=a),o&&(l.scope=o.split(` `)),Object.keys(c).length>0&&(l.extraParams=c),l}};function R(e,t){return new URL(e,t).toString()}function Ne(e){let t=new URLSearchParams;for(let[n,r]of Object.entries(e))if(Array.isArray(r))for(let e of r)t.append(n,e);else r!==void 0&&t.set(n,r.toString());return t.toString()}function Pe(e){return encodeURIComponent(e).replace(/%20/g,`+`).replace(/[-_.!~*'()]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)}var Fe=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:`Module`}));async function Ie(e){return[`S256`,ze(await(await Le()).subtle.digest(`SHA-256`,Re(e)))]}async function Le(){if(typeof window<`u`&&window.crypto){if(!window.crypto.subtle?.digest)throw Error(`The context/environment is not secure, and does not support the 'crypto.subtle' module. See: https://developer.mozilla.org/en-US/docs/Web/API/Crypto/subtle for details`);return window.crypto}return typeof self<`u`&&self.crypto?self.crypto:(await r(()=>import(`./__vite-browser-external-Cpyv46LG.js`).then(e=>P(e.default,1)),[])).webcrypto}function Re(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)&255;return t}function ze(e){return btoa(String.fromCharCode(...new Uint8Array(e))).replace(/\+/g,`-`).replace(/\//g,`_`).replace(/=+$/,``)}function Be(e){let t=new URLSearchParams;for(let[n,r]of Object.entries(e))if(Array.isArray(r))for(let e of r)t.append(n,e);else r!==void 0&&t.set(n,r.toString());return t.toString()}var z=function(e){return e.Refresh=`refresh`,e.Access=`access`,e}(z||{}),B={refresh:void 0,access:void 0};function Ve({renewRefreshToken:e,renewAccessToken:t}){V(`refresh`,i.refreshTokenPayload,e),i.onRefreshTokenUpdate(t=>V(`refresh`,t,e)),V(`access`,i.accessTokenPayload,t),i.onAccessTokenUpdate(e=>V(`access`,e,t))}function He(){Object.values(z).forEach(e=>{B[e]&&clearTimeout(B[e])})}function V(e,t,n){if(B[e]&&clearTimeout(B[e]),!t)return;let r=o(t),i=r-re;if(r<=0)return;let a=i>0?i:Math.max(r+1e3,0);B[e]=setTimeout(()=>Ue(e,t,n),a)}function Ue(e,t,n){let{scope:r,locale:a}=t;`${e}${r}${a}`,We(r,async()=>{let t=e===`access`?pe(r):w(r),o=t?l(t):null;o&&(ee(o)?await n(o.scope,o.locale):(`${e}${r}${a}`,e===`access`?i.accessToken=t:i.refreshToken=t))})}function We(e,t){navigator.locks.request(`bkdTokenRenewal_${e}`,async()=>{await t()})}var H=n();if(typeof H?.oAuthServer!=`string`)throw Error(`Invalid 'oAuthServer' setting`);if(typeof H?.oAuthPrefix!=`string`)throw Error(`Invalid 'oAuthPrefix' setting`);if(typeof H?.oAuthClientId!=`string`)throw Error(`Invalid 'clientId' setting`);function U(){return new L({server:H.oAuthServer,clientId:H.oAuthClientId,tokenEndpoint:`${H.oAuthPrefix}/Authorization/Token`,get authorizationEndpoint(){return Je()},fetch:(...e)=>fetch(...e)})}async function W(e,t,n){Ve({renewRefreshToken:(t,n)=>$e(e,t,n),renewAccessToken:(t,n)=>$e(e,t,n)});let r=ne(),i=await Ye(e,r);if(i){Xe(i,r);return}let a=Ze();if(a){Qe(a);return}await Ge(e,t,n)}async function Ge(e,t,n){if(`${t}${n}`,G(t,n),ae(i.refreshTokenPayload))return Ke(e,t,n);if(!i.accessToken)return`${t}${n}`,$e(e,t,n)}async function Ke(e,t,n,r=new URL(document.location.href)){r.searchParams.set(ue,n);let i=new URL(await e.getEndpoint(`authorizationEndpoint`)),a=await ke();f(a,r.toString());let[o,s]=await Ie(a);i.searchParams.set(`clientId`,e.settings.clientId),i.searchParams.set(`redirectUrl`,r.toString()),i.searchParams.set(`culture_info`,n),i.searchParams.set(`application_scope`,t),i.searchParams.set(`response_type`,`code`),i.searchParams.set(`code_challenge_method`,o),i.searchParams.set(`code_challenge`,s),document.location.href=i.toString()}async function qe(e){let n=t();if(!n)throw Error(`No instance available`);let{accessToken:r,scope:a,locale:o}=i;if(!(!r||!a||!o))try{await tt(e,n,r)}catch(e){if(!(e instanceof SyntaxError))throw e}finally{i.resetAllTokens(),He(),await Ke(e,a,o,new URL(C(h.navigationHome)))}}function Je(){let e=t();return e?`${H.oAuthPrefix}/Authorization/${e}/Login`:`${H.oAuthPrefix}/Authorization/Login`}function G(e,t){if(ye(i.accessToken,e,t)){`${e}${t}`;return}let n=pe(e);if(ye(n,e,t)){`${e}${t}`,i.accessToken=n,i.refreshToken=w(e);return}`${e}${t}`,i.accessToken=null,i.refreshToken=w(e)}async function Ye(e,t){return new URLSearchParams(document.location.search).get(`code`)&&t?.redirectUri?await e.authorizationCode.getTokenFromCodeRedirect(document.location.href,{redirectUri:t.redirectUri,codeVerifier:t.codeVerifier}):null}function Xe({refreshToken:e,accessToken:t},n){i.refreshToken=e,i.accessToken=t;let r=i.accessTokenPayload?.instanceId;r&&te(r),n?.redirectUri&&O.navigate(new URL(n.redirectUri))}function Ze(){let e=new URLSearchParams(document.location.search),t=e.get(`access_token`),n=e.get(`expires_in`),r=e.get(`refresh_token`);return t?{accessToken:t,expiresAt:n?Date.now()+parseInt(n,10)*1e3:null,refreshToken:r||null}:null}function Qe(e){let{refreshToken:t,accessToken:n}=e;i.refreshToken=t,i.accessToken=n;let r=new URL(document.location.href);r.searchParams.delete(`access_token`),r.searchParams.delete(`expires_in`),r.searchParams.delete(`refresh_token`),window.parent===window?history.replaceState({},``,r):window.parent.location.assign(r)}async function $e(e,n,r){let a=t(),o=w(n);if(!a||!o)return`${n}`,Ke(e,n,r);`${n}${r}`;try{let{refreshToken:t,accessToken:s}=await et(e,a,n,r,o);i.refreshToken=t,i.accessToken=s}catch{return Ke(e,n,r)}}async function et(e,t,n,r,i){let{access_token:a,refresh_token:o,expires_in:s}=await nt(e,`${H.oAuthPrefix}/Authorization/${t}/Token`,{refresh_token:i,grant_type:`refresh_token`,client_id:H.oAuthClientId,culture_info:r,scope:n});return{accessToken:a,refreshToken:o,expiresAt:s?Date.now()+s*1e3:null}}function tt(e,t,n){return nt(e,`${H.oAuthPrefix}/Authorization/${t}/Logout`,{access_token:n})}async function nt(e,t,n){let r=new URL(t,e.settings.server).toString(),i=await fetch(r,{method:`POST`,body:n&&Be(n),headers:{"Content-Type":`application/x-www-form-urlencoded`}});if(i.ok)return await i.json();let a,o,s;throw i.headers.get(`Content-Type`)?.startsWith(`application/json`)&&(a=await i.json()),a?.error?(o=`OAuth2 error `+a.error+`.`,a.error_description&&(o+=` `+a.error_description),s=a.error):(o=`HTTP Error `+i.status+` `+i.statusText,s=null),new F(o,s)}var rt=fe(class extends se{constructor(){super(...arguments),this.key=y}render(e,t){return this.key=e,t}update(e,[t,n]){return t!==this.key&&(he(e),this.key=t),n}}),it=class extends _{static{this.styles=[x,S`
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
    `]}constructor(){super(),this.renderedOffline=!1,this.handleMessage=e=>{if(e.origin===window.location.origin)switch(e.data.type){case`bkdAppResize`:this.handleResize(e.data.height);break}},this.handleOnline=()=>{this.renderedOffline&&window.location.reload()},new c(this,O)}connectedCallback(){super.connectedCallback(),window.addEventListener(`message`,this.handleMessage),window.addEventListener(`online`,this.handleOnline)}disconnectedCallback(){window.removeEventListener(`message`,this.handleMessage),window.removeEventListener(`online`,this.handleOnline),super.disconnectedCallback()}handleResize(e){this.iframe&&(this.iframe.height=e)}renderAppIframe(){return e`${rt(O.app.root,e`
        <iframe
          id="app"
          title=${O.app.key}
          src=${`/${O.app.root}${O.appPath}`}
        ></iframe>
      `)}`}renderFooterContent(){return e`
      ${ge(O.navigationItemKey,[[`contact`,()=>e`<bkd-contact></bkd-contact>`],[`legal`,()=>e`<bkd-legal></bkd-legal>`],[`imprint`,()=>e`<bkd-imprint></bkd-imprint>`]],()=>e``)}
    `}render(){return this.renderedOffline=!navigator.onLine,navigator.onLine?i.scope===O.app.scope?e`
      <main role="main">
        ${s(O.app.heading,()=>e`<h1>${O.navigationItem.label}</h1>`)}
        ${s(O.app.key===`footer`,()=>this.renderFooterContent(),()=>this.renderAppIframe())}
      </main>
    `:e`<main role="main"></main>`:e`<main role="main">
        <h1>${g(`Offline`)}</h1>
        <p>${g(`Keine Verbindung vorhanden.`)}</p>
      </main>`}};E([d(`iframe`)],it.prototype,`iframe`,void 0),it=E([v(`bkd-content`),m()],it);function at(e,t){if(e===t||e.contains(t))return!0;if(`shadowRoot`in e&&e.shadowRoot)return at(e.shadowRoot,t);for(let n of Array.from(e.children))if(at(n,t))return!0;return!1}var ot=class{get toggleElement(){return this.options.queryToggleElement()}get menuElement(){return this.options.queryMenuElement()}get items(){let e=this.options?.queryItems&&this.options.queryItems();return Array.from(e??[])}get focusedItem(){return this.options?.queryFocused?this.options.queryFocused():null}constructor(e,t){this.host=e,this.options=t,this.open=!1,this.closeOnBlur=e=>{this.menuElement&&`relatedTarget`in e&&(this.menuElement.contains(e.relatedTarget)||this.closeDeferred())},this.handleDocumentClick=e=>{let t=e.composedPath()[0];if(!t)return;let n=this.toggleElement&&!at(this.toggleElement,t),r=this.menuElement&&!at(this.menuElement,t);n&&r&&this.closeDeferred()},this.handleIframeClick=()=>{this.closeDeferred()},this.handleKeydown=e=>{switch(e.key){case`Tab`:this.options.tabInside||this.close();break;case`Escape`:this.close();break;case`ArrowDown`:this.items[this.nextLinkIndex(1)]?.focus();break;case`ArrowUp`:this.items[this.nextLinkIndex(-1)]?.focus();break}},this.host.addController(this)}hostDisconnected(){this.removeListeners()}toggle(){this.open=!this.open,this.host.requestUpdate(),this.open?this.addListeners():setTimeout(()=>{this.removeListeners()})}close(){this.open&&this.toggle()}closeDeferred(){setTimeout(()=>this.close())}addListeners(){setTimeout(()=>{this.options.tabInside&&this.menuElement?.addEventListener(`focusout`,this.closeOnBlur,!0),this.iframeDocument?.addEventListener(`click`,this.handleIframeClick,!0)}),document.addEventListener(`click`,this.handleDocumentClick,!0),this.host.addEventListener(`keydown`,this.handleKeydown,!0)}removeListeners(){this.options.tabInside&&this.menuElement?.removeEventListener(`focusout`,this.closeOnBlur,!0),document.removeEventListener(`click`,this.handleDocumentClick,!0),this.iframeDocument?.removeEventListener(`click`,this.handleIframeClick,!0),this.host.removeEventListener(`keydown`,this.handleKeydown,!0)}get iframeDocument(){return((document.querySelector(`bkd-portal`)?.shadowRoot)?.querySelector(`bkd-content`)?.shadowRoot)?.querySelector(`iframe`)?.contentDocument??null}activeLinkIndex(){let e=this.focusedItem?this.items.indexOf(this.focusedItem):-1;return e===-1?null:e}nextLinkIndex(e){let t=this.activeLinkIndex(),n=this.items.length-1;if(t===null)return e>0?0:n;let r=t+e;return r>n?0:r<0?n:r}},st=class extends se{constructor(e){if(super(e),this.it=y,e.type!==me.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===y||e==null)return this._t=void 0,this.it=e;if(e===ie)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};st.directiveName=`unsafeHTML`,st.resultType=1;var K=fe(st),ct=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="m22 15.975-1.775 1.775L12 9.525 3.775 17.75 2 15.975l10-10 10 10Z"/></svg>
`,lt=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M2 8.025 3.775 6.25 12 14.475l8.225-8.225L22 8.025l-10 10-10-10Z"/></svg>
`;function ut(e){return[{key:`myProfile`,label:g(`Mein Profil`),href:C(`myProfile`)},{key:`mySettings`,label:g(`Einstellungen`),href:C(`mySettings`)},{key:`videos`,label:g(`Video-Tutorials`),href:e===`de-CH`?`https://www.youtube.com/playlist?list=PLLDtLiOuctbx-_EQWgWqTO1MRbX845OEf`:`https://www.youtube.com/playlist?list=PLLDtLiOuctbyEegnquAkaW4u8cm62lFAU`,img:`/icons/external-link.svg`,external:!0},{key:`logout`,label:g(`Logout`),href:`#`,img:`/icons/logout.svg`}]}var dt=class extends _{static{this.styles=[x,S`
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
    `]}constructor(){super(),this.openGroup=null,this.handleKeyup=e=>{e.key===`Tab`&&this.openGroupOfFocusedItem()},new c(this,O)}connectedCallback(){super.connectedCallback(),this.openGroupOfCurrentItem(),this.addEventListener(`keyup`,this.handleKeyup)}disconnectedCallback(){this.removeEventListener(`keyup`,this.handleKeyup),super.disconnectedCallback()}openGroupOfCurrentItem(){this.openGroup||=O.navigationGroup}openGroupOfFocusedItem(){let e=this.shadowRoot?.activeElement;if(e instanceof HTMLElement){let t=e.dataset.itemKey;if(t){let{group:e}=ce(h.navigation,t);e&&e.label!==this.openGroup?.label&&(this.openGroup=e)}}}handleGroupClick(e,t){e.preventDefault(),this.openGroup=t.label===this.openGroup?.label?null:t}handleNavItemClick(e,t){e.preventDefault(),this.dispatchEvent(new CustomEvent(`bkdnavitemclick`,{detail:{item:t},composed:!0,bubbles:!0}))}handleSettingsItemClick(e,t){this.dispatchEvent(new CustomEvent(`bkdsettingsitemclick`,{detail:{item:t,event:e},composed:!0,bubbles:!0}))}renderGroup(t){let n=t.label===this.openGroup?.label;return e`
      <li
        class=${A({group:!0,open:n})}
        aria-expanded=${n}
      >
        <button
          class="group-header"
          tabindex="-1"
          @click=${e=>this.handleGroupClick(e,t)}
        >
          <label> ${t.label} </label>
          ${K(n?ct:lt)}
        </button>
        <ul class="items">
          ${D(t.items,e=>e.label,this.renderNavItem.bind(this))}
        </ul>
      </li>
    `}renderNavItem(t){return e`
      <li
        class=${A({item:!0,active:t.key===O.navigationItemKey})}
      >
        <a
          href=${C(t)}
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
      ${t.img?e`<img src=${t.img} alt="" width="24" height="24" />`:y}
    </li>`}render(){return e`
      <nav role="navigation" aria-label=${g(`Mobile Navigation`)}>
        <ul class="nav">
          ${D(O.navigation,e=>e.label,this.renderGroup.bind(this))}
        </ul>
        <div class="service-nav">
          <ul>
            ${D(ut(O.locale),e=>e.key,this.renderSettingsItem.bind(this))}
          </ul>
          ${s(O.allowedLocales.length>1,()=>e`<bkd-language-switcher></bkd-language-switcher>`)}
        </div>
      </nav>
    `}};E([k()],dt.prototype,`openGroup`,void 0),dt=E([v(`bkd-mobile-nav`),m()],dt);var ft=class extends _{static{this.styles=[x,S`
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
    `]}constructor(){super(),this.open=!1,new c(this,O)}handleItemClick(e,t){e.preventDefault(),this.dispatchEvent(new CustomEvent(`bkdnavitemclick`,{detail:{item:t},composed:!0,bubbles:!0}))}renderItem(t){return e`
      <li role="presentation" class=${A({active:t.key===O.navigationItemKey})}>
        <a
          role="menuitem"
          href=${C(t)}
          @click=${e=>this.handleItemClick(e,t)}
          >${t.label}</a
        >
      </li>
    `}render(){if(!(!this.group||!this.open))return e`
      <ul role="menu">
        ${D(this.group.items,e=>e.key,this.renderItem.bind(this))}
      </ul>
    `}};E([u()],ft.prototype,`group`,void 0),E([u()],ft.prototype,`open`,void 0),ft=E([v(`bkd-nav-group-dropdown`),m()],ft);var pt=class extends _{constructor(...e){super(...e),this.dropdown=new ot(this,{queryToggleElement:()=>this.toggleElement??null,queryMenuElement:()=>this.menuElement?.shadowRoot?.querySelector(`ul[role="menu"]`)??null,queryItems:()=>this.menuElement?.shadowRoot?.querySelectorAll(`a[role='menuitem']`)??null,queryFocused:()=>this.menuElement?.shadowRoot?.activeElement??null})}static{this.styles=[x,S`
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
        class=${A({active:!!this.active})}
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
    `}};E([u()],pt.prototype,`group`,void 0),E([u({type:Boolean})],pt.prototype,`active`,void 0),E([d(`a`)],pt.prototype,`toggleElement`,void 0),E([d(`bkd-nav-group-dropdown`)],pt.prototype,`menuElement`,void 0),pt=E([v(`bkd-nav-group-toggle`),m()],pt);var mt=class extends _{static{this.styles=[x,S`
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
    `]}constructor(){super(),new c(this,O)}renderGroupToggle(t,n){return e`
      <bkd-nav-group-toggle
        .group=${t}
        ?active=${n}
      ></bkd-nav-group-toggle>
    `}render(){return e`<nav role="navigation" aria-label=${g(`Hauptnavigation`)}>
      ${D(O.navigation,e=>e.label,e=>this.renderGroupToggle(e,e.label===O.navigationGroup?.label))}
    </nav>`}};mt=E([v(`bkd-nav`),m()],mt);var ht=class extends _{constructor(...e){super(...e),this.open=!1}static{this.styles=[x,S`
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
    `}};E([u()],ht.prototype,`open`,void 0),ht=E([v(`bkd-hamburger`),m()],ht);var gt=`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path fill="currentColor" d="M16 2a2.25 2.25 0 0 0-2.25 2.25v1.043C9.87 6.293 7 9.807 7 14v7.5h18V14c0-4.193-2.87-7.707-6.75-8.707V4.25A2.25 2.25 0 0 0 16 2M4 24.5v3h9.404A3 3 0 1 0 19 29a3 3 0 0 0-.407-1.5H28v-3z"/></svg>`,_t=`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" preserveAspectRatio="xMidYMid" style="margin:auto;background:#fff 0 0;display:block;shape-rendering:auto" viewBox="0 0 100 100"><g transform="translate(82 50)"><circle r="6"><animateTransform attributeName="transform" begin="-0.8571428571428571s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.8571428571428571s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(51.429 -42.913 110.137)"><circle r="6" fill-opacity=".857"><animateTransform attributeName="transform" begin="-0.7142857142857143s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.7142857142857143s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(102.857 -10.937 57.696)"><circle r="6" fill-opacity=".714"><animateTransform attributeName="transform" begin="-0.5714285714285714s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.5714285714285714s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(154.286 3.294 34.358)"><circle r="6" fill-opacity=".571"><animateTransform attributeName="transform" begin="-0.42857142857142855s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.42857142857142855s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(-154.286 14.706 15.642)"><circle r="6" fill-opacity=".429"><animateTransform attributeName="transform" begin="-0.2857142857142857s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.2857142857142857s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(-102.857 28.937 -7.696)"><circle r="6" fill-opacity=".286"><animateTransform attributeName="transform" begin="-0.14285714285714285s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.14285714285714285s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(-51.429 60.913 -60.137)"><circle r="6" fill-opacity=".143"><animateTransform attributeName="transform" begin="0s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="0s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g></svg>`,vt=`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path fill="currentColor" d="m13 3-1.333 1.333H5V7h21.333V4.333h-6.666L18.333 3zM6.333 9.667V27c0 1.467 1.2 2.667 2.667 2.667h13.333C23.8 29.667 25 28.467 25 27V9.667z"/></svg>`,{entries:yt,setPrototypeOf:bt,isFrozen:xt,getPrototypeOf:St,getOwnPropertyDescriptor:Ct}=Object,{freeze:q,seal:J,create:wt}=Object,{apply:Tt,construct:Et}=typeof Reflect<`u`&&Reflect;q||=function(e){return e},J||=function(e){return e},Tt||=function(e,t){var n=[...arguments].slice(2);return e.apply(t,n)},Et||=function(e){return new e(...[...arguments].slice(1))};var Dt=Z(Array.prototype.forEach),Ot=Z(Array.prototype.lastIndexOf),kt=Z(Array.prototype.pop),At=Z(Array.prototype.push),jt=Z(Array.prototype.splice),Mt=Z(String.prototype.toLowerCase),Nt=Z(String.prototype.toString),Pt=Z(String.prototype.match),Ft=Z(String.prototype.replace),It=Z(String.prototype.indexOf),Lt=Z(String.prototype.trim),Y=Z(Object.prototype.hasOwnProperty),X=Z(RegExp.prototype.test),Rt=zt(TypeError);function Z(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);var n=[...arguments].slice(1);return Tt(e,t,n)}}function zt(e){return function(){return Et(e,[...arguments])}}function Q(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Mt;bt&&bt(e,null);let r=t.length;for(;r--;){let i=t[r];if(typeof i==`string`){let e=n(i);e!==i&&(xt(t)||(t[r]=e),i=e)}e[i]=!0}return e}function Bt(e){for(let t=0;t<e.length;t++)Y(e,t)||(e[t]=null);return e}function $(e){let t=wt(null);for(let[n,r]of yt(e))Y(e,n)&&(Array.isArray(r)?t[n]=Bt(r):r&&typeof r==`object`&&r.constructor===Object?t[n]=$(r):t[n]=r);return t}function Vt(e,t){for(;e!==null;){let n=Ct(e,t);if(n){if(n.get)return Z(n.get);if(typeof n.value==`function`)return Z(n.value)}e=St(e)}function n(){return null}return n}var Ht=q(`a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr`.split(`.`)),Ut=q(`svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.enterkeyhint.exportparts.filter.font.g.glyph.glyphref.hkern.image.inputmode.line.lineargradient.marker.mask.metadata.mpath.part.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern`.split(`.`)),Wt=q([`feBlend`,`feColorMatrix`,`feComponentTransfer`,`feComposite`,`feConvolveMatrix`,`feDiffuseLighting`,`feDisplacementMap`,`feDistantLight`,`feDropShadow`,`feFlood`,`feFuncA`,`feFuncB`,`feFuncG`,`feFuncR`,`feGaussianBlur`,`feImage`,`feMerge`,`feMergeNode`,`feMorphology`,`feOffset`,`fePointLight`,`feSpecularLighting`,`feSpotLight`,`feTile`,`feTurbulence`]),Gt=q([`animate`,`color-profile`,`cursor`,`discard`,`font-face`,`font-face-format`,`font-face-name`,`font-face-src`,`font-face-uri`,`foreignobject`,`hatch`,`hatchpath`,`mesh`,`meshgradient`,`meshpatch`,`meshrow`,`missing-glyph`,`script`,`set`,`solidcolor`,`unknown`,`use`]),Kt=q(`math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts`.split(`.`)),qt=q([`maction`,`maligngroup`,`malignmark`,`mlongdiv`,`mscarries`,`mscarry`,`msgroup`,`mstack`,`msline`,`msrow`,`semantics`,`annotation`,`annotation-xml`,`mprescripts`,`none`]),Jt=q([`#text`]),Yt=q(`accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.exportparts.face.for.headers.height.hidden.high.href.hreflang.id.inert.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.part.pattern.placeholder.playsinline.popover.popovertarget.popovertargetaction.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.slot.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns.slot`.split(`.`)),Xt=q(`accent-height.accumulate.additive.alignment-baseline.amplitude.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dur.edgemode.elevation.end.exponent.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.intercept.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.mask-type.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.slope.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.tablevalues.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-rendering.textlength.type.u1.u2.unicode.values.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan`.split(`.`)),Zt=q(`accent.accentunder.align.bevelled.close.columnalign.columnlines.columnspacing.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lquote.lspace.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns`.split(`.`)),Qt=q([`xlink:href`,`xml:id`,`xlink:title`,`xml:space`,`xmlns:xlink`]),$t=J(/\{\{[\w\W]*|[\w\W]*\}\}/gm),en=J(/<%[\w\W]*|[\w\W]*%>/gm),tn=J(/\$\{[\w\W]*/gm),nn=J(/^data-[\-\w.\u00B7-\uFFFF]+$/),rn=J(/^aria-[\-\w]+$/),an=J(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),on=J(/^(?:\w+script|data):/i),sn=J(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),cn=J(/^html$/i),ln=J(/^[a-z][.\w]*(-[.\w]+)+$/i),un=Object.freeze({__proto__:null,ARIA_ATTR:rn,ATTR_WHITESPACE:sn,CUSTOM_ELEMENT:ln,DATA_ATTR:nn,DOCTYPE_NAME:cn,ERB_EXPR:en,IS_ALLOWED_URI:an,IS_SCRIPT_OR_DATA:on,MUSTACHE_EXPR:$t,TMPLIT_EXPR:tn}),dn={element:1,text:3,progressingInstruction:7,comment:8,document:9},fn=function(){return typeof window>`u`?null:window},pn=function(e,t){if(typeof e!=`object`||typeof e.createPolicy!=`function`)return null;let n=null,r=`data-tt-policy-suffix`;t&&t.hasAttribute(r)&&(n=t.getAttribute(r));let i=`dompurify`+(n?`#`+n:``);try{return e.createPolicy(i,{createHTML(e){return e},createScriptURL(e){return e}})}catch{return console.warn(`TrustedTypes policy `+i+` could not be created.`),null}},mn=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function hn(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:fn(),t=e=>hn(e);if(t.version=`3.4.0`,t.removed=[],!e||!e.document||e.document.nodeType!==dn.document||!e.Element)return t.isSupported=!1,t;let{document:n}=e,r=n,i=r.currentScript,{DocumentFragment:a,HTMLTemplateElement:o,Node:s,Element:c,NodeFilter:l,NamedNodeMap:u=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:d,DOMParser:ee,trustedTypes:te}=e,f=c.prototype,ne=Vt(f,`cloneNode`),re=Vt(f,`remove`),ie=Vt(f,`nextSibling`),ae=Vt(f,`childNodes`),oe=Vt(f,`parentNode`);if(typeof o==`function`){let e=n.createElement(`template`);e.content&&e.content.ownerDocument&&(n=e.content.ownerDocument)}let p,m=``,{implementation:h,createNodeIterator:g,createDocumentFragment:_,getElementsByTagName:v}=n,{importNode:y}=r,b=mn();t.isSupported=typeof yt==`function`&&typeof oe==`function`&&h&&h.createHTMLDocument!==void 0;let{MUSTACHE_EXPR:se,ERB_EXPR:ce,TMPLIT_EXPR:le,DATA_ATTR:x,ARIA_ATTR:S,IS_SCRIPT_OR_DATA:ue,ATTR_WHITESPACE:de,CUSTOM_ELEMENT:C}=un,{IS_ALLOWED_URI:fe}=un,w=null,pe=Q({},[...Ht,...Ut,...Wt,...Kt,...Jt]),T=null,E=Q({},[...Yt,...Xt,...Zt,...Qt]),D=Object.seal(wt(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),me=null,O=null,k=Object.seal(wt(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}})),he=!0,ge=!0,A=!1,_e=!0,j=!1,ve=!0,M=!1,ye=!1,be=!1,N=!1,xe=!1,Se=!1,Ce=!0,we=!1,Te=!0,Ee=!1,P={},F=null,De=Q({},[`annotation-xml`,`audio`,`colgroup`,`desc`,`foreignobject`,`head`,`iframe`,`math`,`mi`,`mn`,`mo`,`ms`,`mtext`,`noembed`,`noframes`,`noscript`,`plaintext`,`script`,`style`,`svg`,`template`,`thead`,`title`,`video`,`xmp`]),Oe=null,ke=Q({},[`audio`,`video`,`img`,`source`,`image`,`track`]),Ae=null,je=Q({},[`alt`,`class`,`for`,`id`,`label`,`name`,`pattern`,`placeholder`,`role`,`summary`,`title`,`value`,`style`,`xmlns`]),Me=`http://www.w3.org/1998/Math/MathML`,I=`http://www.w3.org/2000/svg`,L=`http://www.w3.org/1999/xhtml`,R=L,Ne=!1,Pe=null,Fe=Q({},[Me,I,L],Nt),Ie=Q({},[`mi`,`mo`,`mn`,`ms`,`mtext`]),Le=Q({},[`annotation-xml`]),Re=Q({},[`title`,`style`,`font`,`a`,`script`]),ze=null,Be=[`application/xhtml+xml`,`text/html`],z=null,B=null,Ve=n.createElement(`form`),He=function(e){return e instanceof RegExp||e instanceof Function},V=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(B&&B===e)){if((!e||typeof e!=`object`)&&(e={}),e=$(e),ze=Be.indexOf(e.PARSER_MEDIA_TYPE)===-1?`text/html`:e.PARSER_MEDIA_TYPE,z=ze===`application/xhtml+xml`?Nt:Mt,w=Y(e,`ALLOWED_TAGS`)?Q({},e.ALLOWED_TAGS,z):pe,T=Y(e,`ALLOWED_ATTR`)?Q({},e.ALLOWED_ATTR,z):E,Pe=Y(e,`ALLOWED_NAMESPACES`)?Q({},e.ALLOWED_NAMESPACES,Nt):Fe,Ae=Y(e,`ADD_URI_SAFE_ATTR`)?Q($(je),e.ADD_URI_SAFE_ATTR,z):je,Oe=Y(e,`ADD_DATA_URI_TAGS`)?Q($(ke),e.ADD_DATA_URI_TAGS,z):ke,F=Y(e,`FORBID_CONTENTS`)?Q({},e.FORBID_CONTENTS,z):De,me=Y(e,`FORBID_TAGS`)?Q({},e.FORBID_TAGS,z):$({}),O=Y(e,`FORBID_ATTR`)?Q({},e.FORBID_ATTR,z):$({}),P=Y(e,`USE_PROFILES`)?e.USE_PROFILES:!1,he=e.ALLOW_ARIA_ATTR!==!1,ge=e.ALLOW_DATA_ATTR!==!1,A=e.ALLOW_UNKNOWN_PROTOCOLS||!1,_e=e.ALLOW_SELF_CLOSE_IN_ATTR!==!1,j=e.SAFE_FOR_TEMPLATES||!1,ve=e.SAFE_FOR_XML!==!1,M=e.WHOLE_DOCUMENT||!1,N=e.RETURN_DOM||!1,xe=e.RETURN_DOM_FRAGMENT||!1,Se=e.RETURN_TRUSTED_TYPE||!1,be=e.FORCE_BODY||!1,Ce=e.SANITIZE_DOM!==!1,we=e.SANITIZE_NAMED_PROPS||!1,Te=e.KEEP_CONTENT!==!1,Ee=e.IN_PLACE||!1,fe=e.ALLOWED_URI_REGEXP||an,R=e.NAMESPACE||L,Ie=e.MATHML_TEXT_INTEGRATION_POINTS||Ie,Le=e.HTML_INTEGRATION_POINTS||Le,D=e.CUSTOM_ELEMENT_HANDLING||wt(null),e.CUSTOM_ELEMENT_HANDLING&&He(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(D.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&He(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(D.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements==`boolean`&&(D.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),j&&(ge=!1),xe&&(N=!0),P&&(w=Q({},Jt),T=wt(null),P.html===!0&&(Q(w,Ht),Q(T,Yt)),P.svg===!0&&(Q(w,Ut),Q(T,Xt),Q(T,Qt)),P.svgFilters===!0&&(Q(w,Wt),Q(T,Xt),Q(T,Qt)),P.mathMl===!0&&(Q(w,Kt),Q(T,Zt),Q(T,Qt))),k.tagCheck=null,k.attributeCheck=null,e.ADD_TAGS&&(typeof e.ADD_TAGS==`function`?k.tagCheck=e.ADD_TAGS:(w===pe&&(w=$(w)),Q(w,e.ADD_TAGS,z))),e.ADD_ATTR&&(typeof e.ADD_ATTR==`function`?k.attributeCheck=e.ADD_ATTR:(T===E&&(T=$(T)),Q(T,e.ADD_ATTR,z))),e.ADD_URI_SAFE_ATTR&&Q(Ae,e.ADD_URI_SAFE_ATTR,z),e.FORBID_CONTENTS&&(F===De&&(F=$(F)),Q(F,e.FORBID_CONTENTS,z)),e.ADD_FORBID_CONTENTS&&(F===De&&(F=$(F)),Q(F,e.ADD_FORBID_CONTENTS,z)),Te&&(w[`#text`]=!0),M&&Q(w,[`html`,`head`,`body`]),w.table&&(Q(w,[`tbody`]),delete me.tbody),e.TRUSTED_TYPES_POLICY){if(typeof e.TRUSTED_TYPES_POLICY.createHTML!=`function`)throw Rt(`TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.`);if(typeof e.TRUSTED_TYPES_POLICY.createScriptURL!=`function`)throw Rt(`TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.`);p=e.TRUSTED_TYPES_POLICY,m=p.createHTML(``)}else p===void 0&&(p=pn(te,i)),p!==null&&typeof m==`string`&&(m=p.createHTML(``));q&&q(e),B=e}},Ue=Q({},[...Ut,...Wt,...Gt]),We=Q({},[...Kt,...qt]),H=function(e){let t=oe(e);(!t||!t.tagName)&&(t={namespaceURI:R,tagName:`template`});let n=Mt(e.tagName),r=Mt(t.tagName);return Pe[e.namespaceURI]?e.namespaceURI===I?t.namespaceURI===L?n===`svg`:t.namespaceURI===Me?n===`svg`&&(r===`annotation-xml`||Ie[r]):!!Ue[n]:e.namespaceURI===Me?t.namespaceURI===L?n===`math`:t.namespaceURI===I?n===`math`&&Le[r]:!!We[n]:e.namespaceURI===L?t.namespaceURI===I&&!Le[r]||t.namespaceURI===Me&&!Ie[r]?!1:!We[n]&&(Re[n]||!Ue[n]):!!(ze===`application/xhtml+xml`&&Pe[e.namespaceURI]):!1},U=function(e){At(t.removed,{element:e});try{oe(e).removeChild(e)}catch{re(e)}},W=function(e,n){try{At(t.removed,{attribute:n.getAttributeNode(e),from:n})}catch{At(t.removed,{attribute:null,from:n})}if(n.removeAttribute(e),e===`is`)if(N||xe)try{U(n)}catch{}else try{n.setAttribute(e,``)}catch{}},Ge=function(e){let t=null,r=null;if(be)e=`<remove></remove>`+e;else{let t=Pt(e,/^[\r\n\t ]+/);r=t&&t[0]}ze===`application/xhtml+xml`&&R===L&&(e=`<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>`+e+`</body></html>`);let i=p?p.createHTML(e):e;if(R===L)try{t=new ee().parseFromString(i,ze)}catch{}if(!t||!t.documentElement){t=h.createDocument(R,`template`,null);try{t.documentElement.innerHTML=Ne?m:i}catch{}}let a=t.body||t.documentElement;return e&&r&&a.insertBefore(n.createTextNode(r),a.childNodes[0]||null),R===L?v.call(t,M?`html`:`body`)[0]:M?t.documentElement:a},Ke=function(e){return g.call(e.ownerDocument||e,e,l.SHOW_ELEMENT|l.SHOW_COMMENT|l.SHOW_TEXT|l.SHOW_PROCESSING_INSTRUCTION|l.SHOW_CDATA_SECTION,null)},qe=function(e){return e instanceof d&&(typeof e.nodeName!=`string`||typeof e.textContent!=`string`||typeof e.removeChild!=`function`||!(e.attributes instanceof u)||typeof e.removeAttribute!=`function`||typeof e.setAttribute!=`function`||typeof e.namespaceURI!=`string`||typeof e.insertBefore!=`function`||typeof e.hasChildNodes!=`function`)},Je=function(e){return typeof s==`function`&&e instanceof s};function G(e,n,r){Dt(e,e=>{e.call(t,n,r,B)})}let Ye=function(e){let n=null;if(G(b.beforeSanitizeElements,e,null),qe(e))return U(e),!0;let r=z(e.nodeName);if(G(b.uponSanitizeElement,e,{tagName:r,allowedTags:w}),ve&&e.hasChildNodes()&&!Je(e.firstElementChild)&&X(/<[/\w!]/g,e.innerHTML)&&X(/<[/\w!]/g,e.textContent)||ve&&e.namespaceURI===L&&r===`style`&&Je(e.firstElementChild)||e.nodeType===dn.progressingInstruction||ve&&e.nodeType===dn.comment&&X(/<[/\w]/g,e.data))return U(e),!0;if(me[r]||!(k.tagCheck instanceof Function&&k.tagCheck(r))&&!w[r]){if(!me[r]&&Ze(r)&&(D.tagNameCheck instanceof RegExp&&X(D.tagNameCheck,r)||D.tagNameCheck instanceof Function&&D.tagNameCheck(r)))return!1;if(Te&&!F[r]){let t=oe(e)||e.parentNode,n=ae(e)||e.childNodes;if(n&&t){let r=n.length;for(let i=r-1;i>=0;--i){let r=ne(n[i],!0);r.__removalCount=(e.__removalCount||0)+1,t.insertBefore(r,ie(e))}}}return U(e),!0}return e instanceof c&&!H(e)||(r===`noscript`||r===`noembed`||r===`noframes`)&&X(/<\/no(script|embed|frames)/i,e.innerHTML)?(U(e),!0):(j&&e.nodeType===dn.text&&(n=e.textContent,Dt([se,ce,le],e=>{n=Ft(n,e,` `)}),e.textContent!==n&&(At(t.removed,{element:e.cloneNode()}),e.textContent=n)),G(b.afterSanitizeElements,e,null),!1)},Xe=function(e,t,r){if(O[t]||Ce&&(t===`id`||t===`name`)&&(r in n||r in Ve))return!1;if(!(ge&&!O[t]&&X(x,t))&&!(he&&X(S,t))&&!(k.attributeCheck instanceof Function&&k.attributeCheck(t,e))){if(!T[t]||O[t]){if(!(Ze(e)&&(D.tagNameCheck instanceof RegExp&&X(D.tagNameCheck,e)||D.tagNameCheck instanceof Function&&D.tagNameCheck(e))&&(D.attributeNameCheck instanceof RegExp&&X(D.attributeNameCheck,t)||D.attributeNameCheck instanceof Function&&D.attributeNameCheck(t,e))||t===`is`&&D.allowCustomizedBuiltInElements&&(D.tagNameCheck instanceof RegExp&&X(D.tagNameCheck,r)||D.tagNameCheck instanceof Function&&D.tagNameCheck(r))))return!1}else if(!Ae[t]&&!X(fe,Ft(r,de,``))&&!((t===`src`||t===`xlink:href`||t===`href`)&&e!==`script`&&It(r,`data:`)===0&&Oe[e])&&!(A&&!X(ue,Ft(r,de,``)))&&r)return!1}return!0},Ze=function(e){return e!==`annotation-xml`&&Pt(e,C)},Qe=function(e){G(b.beforeSanitizeAttributes,e,null);let{attributes:n}=e;if(!n||qe(e))return;let r={attrName:``,attrValue:``,keepAttr:!0,allowedAttributes:T,forceKeepAttr:void 0},i=n.length;for(;i--;){let{name:a,namespaceURI:o,value:s}=n[i],c=z(a),l=s,u=a===`value`?l:Lt(l);if(r.attrName=c,r.attrValue=u,r.keepAttr=!0,r.forceKeepAttr=void 0,G(b.uponSanitizeAttribute,e,r),u=r.attrValue,we&&(c===`id`||c===`name`)&&(W(a,e),u=`user-content-`+u),ve&&X(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,u)){W(a,e);continue}if(c===`attributename`&&Pt(u,`href`)){W(a,e);continue}if(r.forceKeepAttr)continue;if(!r.keepAttr){W(a,e);continue}if(!_e&&X(/\/>/i,u)){W(a,e);continue}j&&Dt([se,ce,le],e=>{u=Ft(u,e,` `)});let d=z(e.nodeName);if(!Xe(d,c,u)){W(a,e);continue}if(p&&typeof te==`object`&&typeof te.getAttributeType==`function`&&!o)switch(te.getAttributeType(d,c)){case`TrustedHTML`:u=p.createHTML(u);break;case`TrustedScriptURL`:u=p.createScriptURL(u);break}if(u!==l)try{o?e.setAttributeNS(o,a,u):e.setAttribute(a,u),qe(e)?U(e):kt(t.removed)}catch{W(a,e)}}G(b.afterSanitizeAttributes,e,null)},$e=function(e){let t=null,n=Ke(e);for(G(b.beforeSanitizeShadowDOM,e,null);t=n.nextNode();)G(b.uponSanitizeShadowNode,t,null),Ye(t),Qe(t),t.content instanceof a&&$e(t.content);G(b.afterSanitizeShadowDOM,e,null)};return t.sanitize=function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=null,o=null,c=null,l=null;if(Ne=!e,Ne&&(e=`<!-->`),typeof e!=`string`&&!Je(e))if(typeof e.toString==`function`){if(e=e.toString(),typeof e!=`string`)throw Rt(`dirty is not a string, aborting`)}else throw Rt(`toString is not a function`);if(!t.isSupported)return e;if(ye||V(n),t.removed=[],typeof e==`string`&&(Ee=!1),Ee){if(e.nodeName){let t=z(e.nodeName);if(!w[t]||me[t])throw Rt(`root node is forbidden and cannot be sanitized in-place`)}}else if(e instanceof s)i=Ge(`<!---->`),o=i.ownerDocument.importNode(e,!0),o.nodeType===dn.element&&o.nodeName===`BODY`||o.nodeName===`HTML`?i=o:i.appendChild(o);else{if(!N&&!j&&!M&&e.indexOf(`<`)===-1)return p&&Se?p.createHTML(e):e;if(i=Ge(e),!i)return N?null:Se?m:``}i&&be&&U(i.firstChild);let u=Ke(Ee?e:i);for(;c=u.nextNode();)Ye(c),Qe(c),c.content instanceof a&&$e(c.content);if(Ee)return e;if(N){if(j){i.normalize();let e=i.innerHTML;Dt([se,ce,le],t=>{e=Ft(e,t,` `)}),i.innerHTML=e}if(xe)for(l=_.call(i.ownerDocument);i.firstChild;)l.appendChild(i.firstChild);else l=i;return(T.shadowroot||T.shadowrootmode)&&(l=y.call(r,l,!0)),l}let d=M?i.outerHTML:i.innerHTML;return M&&w[`!doctype`]&&i.ownerDocument&&i.ownerDocument.doctype&&i.ownerDocument.doctype.name&&X(cn,i.ownerDocument.doctype.name)&&(d=`<!DOCTYPE `+i.ownerDocument.doctype.name+`>
`+d),j&&Dt([se,ce,le],e=>{d=Ft(d,e,` `)}),p&&Se?p.createHTML(d):d},t.setConfig=function(){V(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}),ye=!0},t.clearConfig=function(){B=null,ye=!1},t.isValidAttribute=function(e,t,n){return B||V({}),Xe(z(e),z(t),n)},t.addHook=function(e,t){typeof t==`function`&&At(b[e],t)},t.removeHook=function(e,t){if(t!==void 0){let n=Ot(b[e],t);return n===-1?void 0:jt(b[e],n,1)[0]}return kt(b[e])},t.removeHooks=function(e){b[e]=[]},t.removeAllHooks=function(){b=mn()},t}var gn=hn(),_n={ALLOWED_TAGS:[`br`,`div`,`span`,`a`,`ul`,`ol`,`li`,`sup`,`sub`,`code`,`cite`],ALLOWED_ATTR:[`style`,`href`]};function vn(e){return gn.sanitize(e,_n)}var yn=class extends _{constructor(...e){super(...e),this.open=!1,this.state=xn.PENDING,this.notifications=[]}static{this.styles=[x,S`
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
    `]}handleDeleteAllNotifications(){this.dispatchEvent(new CustomEvent(`bkddeleteallnotifications`,{bubbles:!0,composed:!0}))}handleDeleteNotification(e){this.dispatchEvent(new CustomEvent(`bkddeletenotification`,{bubbles:!0,composed:!0,detail:{id:e}}))}renderContent(){return this.state===xn.ERROR?e`<div class="error">
        ${g(`Fehler beim Laden der Benachrichtigungen`)}
      </div>`:this.state===xn.PENDING?e`<div class="pending">${K(_t)}</div>`:this.notifications.length===0?e`<div class="notification">${g(`Keine Benachrichtigungen`)}</div>`:D(this.notifications,e=>e.id,e=>this.renderNotification(e))}renderNotification(t){let n=vn(t.subject),r=vn(t.body);return e`<div class="notification">
      <div class="text">
        <div class="subject">${K(n)}</div>
        <div class="body">${K(r)}</div>
      </div>
      <button
        type="button"
        aria-label="${g(`Benachrichtigung löschen`)}"
        @click=${()=>this.handleDeleteNotification(t.id)}
      >
        ${K(vt)}
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
    </div>`}};E([u()],yn.prototype,`open`,void 0),E([u()],yn.prototype,`state`,void 0),E([u()],yn.prototype,`notifications`,void 0),yn=E([v(`bkd-notifications-dropdown`),m()],yn);var bn=n();typeof bn?.notificationRefreshTime!=`number`&&(bn.notificationRefreshTime=30);var xn=function(e){return e.PENDING=`pending`,e.ERROR=`error`,e.SUCCESS=`success`,e}({}),Sn=class extends _{constructor(...e){super(...e),this.state=`pending`,this.dropdown=new ot(this,{queryToggleElement:()=>this.toggleElement??null,queryMenuElement:()=>this.dropdownElement?.shadowRoot??null,queryItems:()=>this.dropdownElement?.shadowRoot?.querySelectorAll(`button`)??null,queryFocused:()=>this.dropdownElement?.shadowRoot?.activeElement??null})}static{this.styles=[x,S`
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
    `]}connectedCallback(){super.connectedCallback(),this.fetch(),this.interval=setInterval(()=>this.fetch(),bn.notificationRefreshTime*1e3)}disconnectedCallback(){clearInterval(this.interval),super.disconnectedCallback()}handleDeleteAllNotifications(){let e=[];a(e),this.notifications=e}handleDeleteNotification(e){if(!this.notifications)return;let t=this.notifications.filter(t=>t.id!==e.detail.id);a(t),this.notifications=t}async fetch(){try{this.notifications=await p(),this.state=`success`}catch{this.state=`error`}}render(){return e` <button
        id="notifications-toggle"
        type="button"
        aria-label="${g(`Benachrichtigungen`)}"
        aria-expanded=${this.dropdown.open}
        @click="${()=>this.dropdown.toggle()}"
      >
        ${K(gt)}
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
      </bkd-notifications-dropdown>`}};E([d(`button`)],Sn.prototype,`toggleElement`,void 0),E([d(`bkd-notifications-dropdown`)],Sn.prototype,`dropdownElement`,void 0),E([k()],Sn.prototype,`notifications`,void 0),E([k()],Sn.prototype,`state`,void 0),Sn=E([v(`bkd-notifications-toggle`),m()],Sn);var Cn=`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="7.4" fill="none"><path fill="currentColor" d="m6 7.4-6-6L1.4 0 6 4.6 10.6 0 12 1.4Z"/></svg>
`,wn=`<svg xmlns="http://www.w3.org/2000/svg" width="11.414" height="11.414" fill="none"><path stroke="currentColor" stroke-width="2" d="m.707.707 10 10m-10 0 10-10"/></svg>
`,Tn=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M2 20v-2.8a3 3 0 0 1 .425-1.563A2.794 2.794 0 0 1 3.6 14.55c1-.5 2.038-.883 3.113-1.15 1.074-.267 2.17-.4 3.287-.4.417 0 .833.03 1.25.088.417.058.833.129 1.25.212v1.575c-.75.367-1.354.85-1.813 1.45-.458.6-.687 1.383-.687 2.35V20H2Zm10 0v-1.4c0-.4.104-.77.313-1.113a1.76 1.76 0 0 1 .887-.737c.6-.25 1.22-.438 1.863-.563a10.11 10.11 0 0 1 3.874 0 9.604 9.604 0 0 1 1.863.563c.383.15.68.396.887.738.209.341.313.712.313 1.112V20H12Zm5-5c-.7 0-1.292-.242-1.775-.725-.483-.483-.725-1.075-.725-1.775s.242-1.292.725-1.775C15.708 10.242 16.3 10 17 10s1.292.242 1.775.725c.483.483.725 1.075.725 1.775s-.242 1.292-.725 1.775C18.292 14.758 17.7 15 17 15Zm-7-3c-1.1 0-2.042-.392-2.825-1.175C6.392 10.042 6 9.1 6 8s.392-2.042 1.175-2.825C7.958 4.392 8.9 4 10 4s2.042.392 2.825 1.175C13.608 5.958 14 6.9 14 8s-.392 2.042-1.175 2.825C12.042 11.608 11.1 12 10 12Z"/></svg>
`;function En(e,t,n){let r=document.createElement(`form`);r.method=e,r.style.visibility=`hidden`,r.action=t,Object.keys(n).forEach(e=>{let t=document.createElement(`input`);t.type=`hidden`,t.name=e,t.value=n[e],r.appendChild(t)}),document.body.appendChild(r),r.submit()}function*Dn(e,t){if(e!==void 0){let n=0;for(let r of e)yield t(r,n++)}}var On=class extends _{constructor(...e){super(...e),this.availableSubstitutions=[],this.activeSubstitution=null,this.open=!1}static{this.styles=[x,S`
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
      <li role="presentation" class=${A({active:t.Id===this.activeSubstitution?.Id})}>
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
        ${Dn(this.displayedSubstitutions,this.renderSubstitution.bind(this))}
        ${s(this.activeSubstitution,()=>e`<li role="presentation" class="dropdown-menu-stop">
              <button role="menuitem" @click=${this.handleStopClick.bind(this)}>
                ${g(`Stellvertretung beenden`)}
              </button>
            </li>`)}
      </ul>
    `}};E([u()],On.prototype,`availableSubstitutions`,void 0),E([u()],On.prototype,`activeSubstitution`,void 0),E([u()],On.prototype,`open`,void 0),On=E([v(`bkd-substitutions-dropdown`),m()],On);var kn=class extends _{static{this.styles=[x,S`
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
    `]}constructor(){super(),this.availableSubstitutions=[],this.activeSubstitution=null,this.dropdown=new ot(this,{queryToggleElement:()=>this.toggleElement??null,queryMenuElement:()=>this.menuElement?.shadowRoot??null,tabInside:!this.isLargeScreen(),queryItems:()=>this.menuElement?.shadowRoot?.querySelectorAll(`a[role='menuitem']`)??null,queryFocused:()=>this.menuElement?.shadowRoot?.activeElement??null}),new c(this,O)}connectedCallback(){super.connectedCallback(),this.fetch()}async fetch(){let e=await ve();this.availableSubstitutions=e.filter(e=>this.isNotInFuture(e)).sort((e,t)=>e.Holder.localeCompare(t.Holder));let t=this.getActiveSubstitutionId();this.activeSubstitution=this.availableSubstitutions.find(e=>e.Id===t)??null}isNotInFuture(e){return!!e.DateFrom&&new Date(e.DateFrom)<=new Date}getActiveSubstitutionId(){return i.accessTokenPayload?.substitutionId??null}toggle(e){e.preventDefault(),this.activeSubstitution&&this.isLargeScreen()?this.stopSubstitution():this.dropdown.toggle()}isLargeScreen(){return window.innerWidth>1200}startSubstitution(e){this.activeSubstitution||this.redirect(e,`start`)}stopSubstitution(){this.activeSubstitution&&this.redirect(this.activeSubstitution,`stop`)}redirect(e,t){let{oAuthServer:r,oAuthPrefix:a}=n();En(`POST`,`${r}/${a}/Authorization/Substitutions/${e.Id}/${t}`,{access_token:i.accessToken??``,redirect_uri:C(`home`)})}handleSubstitutionStart(e){this.dropdown.close(),this.startSubstitution(e.detail.substitution)}handleSubstitutionStop(){this.dropdown.close(),this.stopSubstitution()}getLabel(){return this.activeSubstitution?.Holder||g(`Stellvertretung ausüben`)}isAllowed(){return O.app.scope===`Tutoring`}render(){if(!(!this.isAllowed()||this.availableSubstitutions.length===0))return e`
      <button
        class=${A({active:!!this.activeSubstitution,open:this.dropdown.open})}
        @click=${this.toggle.bind(this)}
        aria-label=${this.getLabel()}
        aria-expanded=${this.dropdown.open}
        aria-haspopup="menu"
      >
        <div class="icon">${K(Tn)}</div>
        <div class="label">${this.getLabel()}</div>
        <div class="icon-caret">
          ${K(this.activeSubstitution?wn:Cn)}
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
    `}};E([d(`button`)],kn.prototype,`toggleElement`,void 0),E([d(`bkd-substitutions-dropdown`)],kn.prototype,`menuElement`,void 0),E([k()],kn.prototype,`availableSubstitutions`,void 0),E([k()],kn.prototype,`activeSubstitution`,void 0),kn=E([v(`bkd-substitutions-toggle`),m()],kn);var An=class extends _{static{this.styles=[x,S`
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
    `]}constructor(){super(),this.dropdown=new ot(this,{queryToggleElement:()=>this.toggleElement??null,queryMenuElement:()=>this.menuElement??null,queryItems:()=>this.shadowRoot?.querySelectorAll(`a[role='menuitem']`)??null,queryFocused:()=>this.shadowRoot?.activeElement??null}),new c(this,O)}handleSettingsItemClick(e,t){this.dropdown.close(),this.dispatchEvent(new CustomEvent(`bkdsettingsitemclick`,{detail:{item:t,event:e},composed:!0,bubbles:!0}))}renderSettingsItem(t){return e`<li role="presentation">
      <a
        role="menuitem"
        href=${t.href}
        target=${t.external?`_blank`:`_self`}
        @click=${e=>this.handleSettingsItemClick(e,t)}
      >
        ${t.label}</a
      >
      ${t.img?e`<img src=${t.img} alt="" width="24" height="24" />`:y}
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
        ${Dn(ut(O.locale),this.renderSettingsItem.bind(this))}
      </ul>
    `}};E([d(`button`)],An.prototype,`toggleElement`,void 0),E([d(`ul[role="menu"]`)],An.prototype,`menuElement`,void 0),An=E([v(`bkd-user-settings`),m()],An);var jn=class extends _{static{this.styles=[x,S`
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
    `]}constructor(){super(),this.mobileNavOpen=!1,new c(this,O)}render(){return e`
      <nav role="navigation" aria-label=${g(`Servicenavigation`)}>
        <bkd-substitutions-toggle></bkd-substitutions-toggle>
        <bkd-notifications-toggle></bkd-notifications-toggle>
        <bkd-user-settings></bkd-user-settings>
        ${s(O.allowedLocales.length>1,()=>e`<bkd-language-switcher></bkd-language-switcher>`)}
        <bkd-hamburger .open=${this.mobileNavOpen}></bkd-hamburger>
      </nav>
    `}};E([u()],jn.prototype,`mobileNavOpen`,void 0),jn=E([v(`bkd-service-nav`),m()],jn);var Mn=class extends _{static{this.styles=[x,S`
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
    `]}constructor(){super(),this.mobileNav=new ot(this,{queryToggleElement:()=>this.serviceNavElement?.shadowRoot?.querySelector(`bkd-hamburger`)??null,queryMenuElement:()=>this.mobileNavElement?.shadowRoot??null,tabInside:!0}),new c(this,O)}handleLogoClick(e){e.preventDefault(),O.navigationItemKey=h.navigationHome.key,O.appPath=h.navigationHome.appPath}handleNavItemClick(e){let{item:t}=e.detail;O.navigationItemKey=t.key,this.mobileNav.close()}handleSettingsItemClick(e){let{item:t,event:n}=e.detail;t.external||(n.preventDefault(),t.key===`logout`?this.dispatchEvent(new CustomEvent(`bkdlogout`,{composed:!0,bubbles:!0})):O.navigationItemKey=t.key),this.mobileNav.close()}render(){return e`
      <header role="banner">
        <a
          class="logo"
          href=${C(`home`)}
          @click=${this.handleLogoClick.bind(this)}
          ><img src="logo.svg" alt=${g(`Evento Startseite`)}
        /></a>
        <div class="logo-caption">${O.instanceName}</div>
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
    `}};E([d(`bkd-service-nav`)],Mn.prototype,`serviceNavElement`,void 0),E([d(`bkd-mobile-nav`)],Mn.prototype,`mobileNavElement`,void 0),Mn=E([v(`bkd-header`),m()],Mn);var Nn=U(),Pn=(async function(){await W(Nn,b(),oe()),O.init()})();_e(S`
    ${T}
    :root {
      ${le}
    }
  `.toString());var Fn=class extends _{static{this.styles=[x,S`
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
    `]}constructor(){super(),this.authReady=!1,this.subscriptions=[],this.handleMessage=({data:e,origin:t})=>{if(t===window.location.origin)switch(e.type){case`bkdAppPushState`:{let t=e.args[2];this.updateUrlAndNavigationState(t,!1);break}case`bkdAppReplaceState`:{let t=e.args[2];j(de(t),!0);break}case`bkdAppHashChange`:{let{url:t}=e;j(de(t));break}}},Pn.then(()=>this.authReady=!0),new c(this,O)}connectedCallback(){super.connectedCallback(),O.initialized.then(()=>setTimeout(()=>{i.scope!==O.app.scope&&Ge(Nn,O.app.scope,O.locale)})),this.subscriptions.push(O.subscribeScopeAndLocale((e,t)=>Ge(Nn,e,t),!0)),this.subscriptions.push(O.subscribeInstanceName(this.updateTitle.bind(this))),this.subscriptions.push(O.subscribeNavigationItem(this.updateTitle.bind(this))),window.addEventListener(`message`,this.handleMessage),O.actualAppPath=new URL(location.href).hash,window.addEventListener(`hashchange`,this.handleHashChange)}disconnectedCallback(){super.disconnectedCallback(),this.subscriptions.forEach(e=>e()),window.removeEventListener(`message`,this.handleMessage),window.removeEventListener(`hashchange`,this.handleHashChange)}updateTitle(){let{instanceName:e,navigationItem:t}=O,n=t?.label&&t?.key!==h.navigationHome.key;document.title=n?[t?.label,e].join(` ― `):e}updateUrlAndNavigationState(e,t){let n=de(e);j(n,t);let r=M(O.navigation,n);r?.item?.key&&r.item.key!==O.navigationItemKey?(O.actualAppPath=n,O.navigationItemKey=r.item.key):O.appPath=n}handleHashChange(e){O.appPath=new URL(e.newURL).hash}handleLogout(){qe(Nn)}render(){return e`
      ${s(this.authReady&&i.authenticated,()=>e`
          <bkd-header @bkdlogout=${this.handleLogout.bind(this)}></bkd-header>
          <bkd-content></bkd-content>
          <bkd-footer></bkd-footer>
        `)}
    `}};E([k()],Fn.prototype,`authReady`,void 0),Fn=E([v(`bkd-portal`),m()],Fn);export{Te as t};