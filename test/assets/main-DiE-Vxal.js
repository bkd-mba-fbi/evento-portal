const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/__vite-browser-external-BRyEmtFe.js","assets/rolldown-runtime-Bh1tDfsg.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-Bh1tDfsg.js";import{$ as t,A as n,B as r,C as i,D as a,E as o,F as s,G as c,H as l,I as u,J as d,K as ee,L as te,M as ne,N as re,O as ie,P as ae,Q as f,R as p,S as m,T as h,U as g,V as _,W as v,X as y,Y as b,Z as oe,_ as se,a as ce,b as le,c as ue,d as x,f as de,g as fe,h as pe,i as S,j as me,k as he,l as ge,m as C,n as _e,o as ve,p as w,q as T,r as ye,s as E,t as D,u as O,v as be,w as k,x as xe,z as Se}from"./LanguageSwitcher-Ba4qSt2f.js";var A=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);function j(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return A(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return A(n,r,{get(){return a(this)}})}}var Ce=class extends Error{constructor(e,t){super(e),this.oauth2Code=t}},we=class extends Ce{constructor(e,t,n,r){super(e,t),this.httpCode=n.status,this.response=n,this.parsedBody=r}},Te=class{constructor(e){this.client=e}async getAuthorizeUri(e){let[t,n]=await Promise.all([e.codeVerifier?Ee(e.codeVerifier):void 0,this.client.getEndpoint(`authorizationEndpoint`)]),r=new URLSearchParams({client_id:this.client.settings.clientId,response_type:`code`,redirect_uri:e.redirectUri});if(t&&(r.set(`code_challenge_method`,t[0]),r.set(`code_challenge`,t[1])),e.state&&r.set(`state`,e.state),e.scope&&r.set(`scope`,e.scope.join(` `)),e.resource)for(let t of[].concat(e.resource))r.append(`resource`,t);if(e.responseMode&&e.responseMode!==`query`&&r.append(`response_mode`,e.responseMode),e.extraParams)for(let[t,n]of Object.entries(e.extraParams)){if(r.has(t))throw Error(`Property in extraParams would overwrite standard property: ${t}`);r.set(t,n)}return n+`?`+r.toString()}async getTokenFromCodeRedirect(e,t){let{code:n}=this.validateResponse(e,{state:t.state});return this.getToken({code:n,redirectUri:t.redirectUri,codeVerifier:t.codeVerifier})}validateResponse(e,t){e=new URL(e);let n=e.searchParams;if(!n.has(`code`)&&!n.has(`error`)&&e.hash.length>0&&(n=new URLSearchParams(e.hash.slice(1))),n.has(`error`))throw new Ce(n.get(`error_description`)??`OAuth2 error`,n.get(`error`));if(!n.has(`code`))throw Error(`The url did not contain a code parameter ${e}`);if(t.state&&t.state!==n.get(`state`))throw Error(`The "state" parameter in the url did not match the expected value of ${t.state}`);return{code:n.get(`code`),scope:n.has(`scope`)?n.get(`scope`).split(` `):void 0}}async getToken(e){let t={grant_type:`authorization_code`,code:e.code,redirect_uri:e.redirectUri,code_verifier:e.codeVerifier,resource:e.resource};return this.client.tokenResponseToOAuth2Token(this.client.request(`tokenEndpoint`,t))}};async function M(){let e=await N(),t=new Uint8Array(32);return e.getRandomValues(t),Oe(t)}async function Ee(e){return[`S256`,Oe(await(await N()).subtle.digest(`SHA-256`,De(e)))]}async function N(){var e;if(typeof window<`u`&&window.crypto){if(!((e=window.crypto.subtle)!=null&&e.digest))throw Error(`The context/environment is not secure, and does not support the 'crypto.subtle' module. See: https://developer.mozilla.org/en-US/docs/Web/API/Crypto/subtle for details`);return window.crypto}return typeof self<`u`&&self.crypto?self.crypto:(await Promise.resolve().then(()=>Me)).webcrypto}function De(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)&255;return t}function Oe(e){return btoa(String.fromCharCode(...new Uint8Array(e))).replace(/\+/g,`-`).replace(/\//g,`_`).replace(/=+$/,``)}var ke=class{constructor(e){this.serverMetadata=null,e!=null&&e.fetch||(e.fetch=fetch.bind(globalThis)),this.settings=e}async refreshToken(e,t){if(!e.refreshToken)throw Error(`This token didn't have a refreshToken. It's not possible to refresh this`);let n={grant_type:`refresh_token`,refresh_token:e.refreshToken};this.settings.clientSecret||(n.client_id=this.settings.clientId),t!=null&&t.scope&&(n.scope=t.scope.join(` `)),t!=null&&t.resource&&(n.resource=t.resource);let r=await this.tokenResponseToOAuth2Token(this.request(`tokenEndpoint`,n));return!r.refreshToken&&e.refreshToken&&(r.refreshToken=e.refreshToken),r}async clientCredentials(e){let t=[`client_id`,`client_secret`,`grant_type`,`scope`];if(e!=null&&e.extraParams&&Object.keys(e.extraParams).filter(e=>t.includes(e)).length>0)throw Error(`The following extraParams are disallowed: '${t.join(`', '`)}'`);let n={grant_type:`client_credentials`,scope:(e?.scope)?.join(` `),resource:e?.resource,...e?.extraParams};if(!this.settings.clientSecret)throw Error(`A clientSecret must be provided to use client_credentials`);return this.tokenResponseToOAuth2Token(this.request(`tokenEndpoint`,n))}async password(e){let t={grant_type:`password`,...e,scope:e.scope?.join(` `)};return this.tokenResponseToOAuth2Token(this.request(`tokenEndpoint`,t))}get authorizationCode(){return new Te(this)}async introspect(e){let t={token:e.accessToken,token_type_hint:`access_token`};return this.request(`introspectionEndpoint`,t)}async revoke(e,t=`access_token`){let n=e.accessToken;t===`refresh_token`&&(n=e.refreshToken);let r={token:n,token_type_hint:t};return this.request(`revocationEndpoint`,r)}async getEndpoint(e){if(this.settings[e]!==void 0||e!==`discoveryEndpoint`&&(await this.discover(),this.settings[e]!==void 0))return P(this.settings[e],this.settings.server);if(!this.settings.server)throw Error(`Could not determine the location of ${e}. Either specify ${e} in the settings, or the "server" endpoint to let the client discover it.`);switch(e){case`authorizationEndpoint`:return P(`/authorize`,this.settings.server);case`tokenEndpoint`:return P(`/token`,this.settings.server);case`discoveryEndpoint`:return P(`/.well-known/oauth-authorization-server`,this.settings.server);case`introspectionEndpoint`:return P(`/introspect`,this.settings.server);case`revocationEndpoint`:return P(`/revoke`,this.settings.server)}}discover(){return this.discoveryPromise===void 0&&(this.discoveryPromise=this.doDiscover()),this.discoveryPromise}async doDiscover(){var e;let t;try{t=await this.getEndpoint(`discoveryEndpoint`)}catch{console.warn(`[oauth2] OAuth2 discovery endpoint could not be determined. Either specify the "server" or "discoveryEndpoint`);return}let n=await this.settings.fetch(t,{headers:{Accept:`application/json`}});if(!n.ok)return;if(!((e=n.headers.get(`Content-Type`))!=null&&e.startsWith(`application/json`))){console.warn(`[oauth2] OAuth2 discovery endpoint was not a JSON response. Response is ignored`);return}this.serverMetadata=await n.json();let r=[[`authorization_endpoint`,`authorizationEndpoint`],[`token_endpoint`,`tokenEndpoint`],[`introspection_endpoint`,`introspectionEndpoint`],[`revocation_endpoint`,`revocationEndpoint`]];if(this.serverMetadata!==null){for(let[e,n]of r)this.serverMetadata[e]&&(this.settings[n]=P(this.serverMetadata[e],t));if(this.serverMetadata.token_endpoint_auth_methods_supported&&!this.settings.authenticationMethod){for(let e of this.serverMetadata.token_endpoint_auth_methods_supported)if(e===`client_secret_basic`||e===`client_secret_post`){this.settings.authenticationMethod=e;break}}}}async request(e,t){let n=await this.getEndpoint(e),r={"Content-Type":`application/x-www-form-urlencoded`,Accept:`application/json`},i=this.settings.authenticationMethod;switch(this.settings.clientSecret||(i=`client_secret_post`),i||=`client_secret_basic_interop`,i){case`client_secret_basic`:r.Authorization=`Basic `+btoa(je(this.settings.clientId)+`:`+je(this.settings.clientSecret));break;case`client_secret_basic_interop`:r.Authorization=`Basic `+btoa(this.settings.clientId.replace(/:/g,`%3A`)+`:`+this.settings.clientSecret.replace(/:/g,`%3A`));break;case`client_secret_post`:t.client_id=this.settings.clientId,this.settings.clientSecret&&(t.client_secret=this.settings.clientSecret);break;default:throw Error(`Authentication method not yet supported:`+i+`. Open a feature request if you want this!`)}let a=await this.settings.fetch(n,{method:`POST`,body:Ae(t),headers:r}),o;if(a.status!==204&&a.headers.has(`Content-Type`)&&a.headers.get(`Content-Type`).match(/^application\/(.*\+)?json/)&&(o=await a.json()),a.ok)return o;let s,c;throw o!=null&&o.error?(s=`OAuth2 error `+o.error+`.`,o.error_description&&(s+=` `+o.error_description),c=o.error):(s=`HTTP Error `+a.status+` `+a.statusText,a.status===401&&this.settings.clientSecret&&(s+=`. It's likely that the clientId and/or clientSecret was incorrect`),c=null),new we(s,c,a,o)}async tokenResponseToOAuth2Token(e){let t=await e;if(!(t!=null&&t.access_token))throw console.warn(`Invalid OAuth2 Token Response: `,t),TypeError(`We received an invalid token response from an OAuth2 server.`);let{access_token:n,refresh_token:r,expires_in:i,id_token:a,scope:o,token_type:s,...c}=t,l={accessToken:n,expiresAt:i?Date.now()+i*1e3:null,refreshToken:r??null};return a&&(l.idToken=a),o&&(l.scope=o.split(` `)),Object.keys(c).length>0&&(l.extraParams=c),l}};function P(e,t){return new URL(e,t).toString()}function Ae(e){let t=new URLSearchParams;for(let[n,r]of Object.entries(e))if(Array.isArray(r))for(let e of r)t.append(n,e);else r!==void 0&&t.set(n,r.toString());return t.toString()}function je(e){return encodeURIComponent(e).replace(/%20/g,`+`).replace(/[-_.!~*'()]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)}var Me=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:`Module`}));async function Ne(e){return[`S256`,Ie(await(await Pe()).subtle.digest(`SHA-256`,Fe(e)))]}async function Pe(){if(typeof window<`u`&&window.crypto){if(!window.crypto.subtle?.digest)throw Error(`The context/environment is not secure, and does not support the 'crypto.subtle' module. See: https://developer.mozilla.org/en-US/docs/Web/API/Crypto/subtle for details`);return window.crypto}return typeof self<`u`&&self.crypto?self.crypto:(await i(()=>import(`./__vite-browser-external-BRyEmtFe.js`).then(t=>e(t.default,1)),__vite__mapDeps([0,1]))).webcrypto}function Fe(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)&255;return t}function Ie(e){return btoa(String.fromCharCode(...new Uint8Array(e))).replace(/\+/g,`-`).replace(/\//g,`_`).replace(/=+$/,``)}function Le(e){let t=new URLSearchParams;for(let[n,r]of Object.entries(e))if(Array.isArray(r))for(let e of r)t.append(n,e);else r!==void 0&&t.set(n,r.toString());return t.toString()}var F=function(e){return e.Refresh=`refresh`,e.Access=`access`,e}(F||{}),I={refresh:void 0,access:void 0};function Re({renewRefreshToken:e,renewAccessToken:t}){Be(`refresh`,a.refreshTokenPayload,e),a.onRefreshTokenUpdate(t=>Be(`refresh`,t,e)),Be(`access`,a.accessTokenPayload,t),a.onAccessTokenUpdate(e=>Be(`access`,e,t))}function ze(){Object.values(F).forEach(e=>{I[e]&&clearTimeout(I[e])})}function Be(e,t,n){if(I[e]&&clearTimeout(I[e]),!t)return;let r=s(t),i=r-ae;if(r<=0)return;let a=i>0?i:Math.max(r+1e3,0);I[e]=setTimeout(()=>Ve(e,t,n),a)}function Ve(e,t,n){let{scope:r,locale:i}=t;`${e}${r}${i}`,He(r,async()=>{let t=e===`access`?he(r):me(r),o=t?u(t):null;o&&(te(o)?await n(o.scope,o.locale):(`${e}${r}${i}`,e===`access`?a.accessToken=t:a.refreshToken=t))})}function He(e,t){navigator.locks.request(`bkdTokenRenewal_${e}`,async()=>{await t()})}var L=r();if(typeof L?.oAuthServer!=`string`)throw Error(`Invalid 'oAuthServer' setting`);if(typeof L?.oAuthPrefix!=`string`)throw Error(`Invalid 'oAuthPrefix' setting`);if(typeof L?.oAuthClientId!=`string`)throw Error(`Invalid 'clientId' setting`);function Ue(){return new ke({server:L.oAuthServer,clientId:L.oAuthClientId,tokenEndpoint:`${L.oAuthPrefix}/Authorization/Token`,get authorizationEndpoint(){return Ke()},fetch:(...e)=>fetch(...e)})}async function R(e,t,n){Re({renewRefreshToken:(t,n)=>Qe(e,t,n),renewAccessToken:(t,n)=>Qe(e,t,n)});let r=ie(),i=await Je(e,r);if(i){Ye(i,r);return}let a=Xe();if(a){Ze(a);return}await z(e,t,n)}async function z(e,t,n){if(`${t}${n}`,qe(t,n),p(a.refreshTokenPayload))return We(e,t,n);if(!a.accessToken)return`${t}${n}`,Qe(e,t,n)}async function We(e,t,n,r=new URL(document.location.href)){r.searchParams.set(de,n);let i=new URL(await e.getEndpoint(`authorizationEndpoint`)),a=await M();re(a,r.toString());let[o,s]=await Ne(a);i.searchParams.set(`clientId`,e.settings.clientId),i.searchParams.set(`redirectUrl`,r.toString()),i.searchParams.set(`culture_info`,n),i.searchParams.set(`application_scope`,t),i.searchParams.set(`response_type`,`code`),i.searchParams.set(`code_challenge_method`,o),i.searchParams.set(`code_challenge`,s),document.location.href=i.toString()}async function Ge(e){let t=n();if(!t)throw Error(`No instance available`);let{accessToken:r,scope:i,locale:o}=a;if(!(!r||!i||!o))try{await B(e,t,r)}catch(e){if(!(e instanceof SyntaxError))throw e}finally{a.resetAllTokens(),ze(),await We(e,i,o,new URL(pe(_.navigationHome)))}}function Ke(){let e=n();return e?`${L.oAuthPrefix}/Authorization/${e}/Login`:`${L.oAuthPrefix}/Authorization/Login`}function qe(e,t){if(Se(a.accessToken,e,t)){`${e}${t}`;return}let n=he(e);if(Se(n,e,t)){`${e}${t}`,a.accessToken=n,a.refreshToken=me(e);return}`${e}${t}`,a.accessToken=null,a.refreshToken=me(e)}async function Je(e,t){return new URLSearchParams(document.location.search).get(`code`)&&t?.redirectUri?await e.authorizationCode.getTokenFromCodeRedirect(document.location.href,{redirectUri:t.redirectUri,codeVerifier:t.codeVerifier}):null}function Ye({refreshToken:e,accessToken:t},n){a.refreshToken=e,a.accessToken=t;let r=a.accessTokenPayload?.instanceId;r&&ne(r),n?.redirectUri&&w.navigate(new URL(n.redirectUri))}function Xe(){let e=new URLSearchParams(document.location.search),t=e.get(`access_token`),n=e.get(`expires_in`),r=e.get(`refresh_token`);return t?{accessToken:t,expiresAt:n?Date.now()+parseInt(n,10)*1e3:null,refreshToken:r||null}:null}function Ze(e){let{refreshToken:t,accessToken:n}=e;a.refreshToken=t,a.accessToken=n;let r=new URL(document.location.href);r.searchParams.delete(`access_token`),r.searchParams.delete(`expires_in`),r.searchParams.delete(`refresh_token`),window.parent===window?history.replaceState({},``,r):window.parent.location.assign(r)}async function Qe(e,t,r){let i=n(),o=me(t);if(!i||!o)return`${t}`,We(e,t,r);`${t}${r}`;try{let{refreshToken:n,accessToken:s}=await $e(e,i,t,r,o);a.refreshToken=n,a.accessToken=s}catch{return We(e,t,r)}}async function $e(e,t,n,r,i){let{access_token:a,refresh_token:o,expires_in:s}=await et(e,`${L.oAuthPrefix}/Authorization/${t}/Token`,{refresh_token:i,grant_type:`refresh_token`,client_id:L.oAuthClientId,culture_info:r,scope:n});return{accessToken:a,refreshToken:o,expiresAt:s?Date.now()+s*1e3:null}}function B(e,t,n){return et(e,`${L.oAuthPrefix}/Authorization/${t}/Logout`,{access_token:n})}async function et(e,t,n){let r=new URL(t,e.settings.server).toString(),i=await fetch(r,{method:`POST`,body:n&&Le(n),headers:{"Content-Type":`application/x-www-form-urlencoded`}});if(i.ok)return await i.json();let a,o,s;throw i.headers.get(`Content-Type`)?.startsWith(`application/json`)&&(a=await i.json()),a?.error?(o=`OAuth2 error `+a.error+`.`,a.error_description&&(o+=` `+a.error_description),s=a.error):(o=`HTTP Error `+i.status+` `+i.statusText,s=null),new Ce(o,s)}var tt=S(class extends ce{constructor(){super(...arguments),this.key=y}render(e,t){return this.key=e,t}update(e,[t,n]){return t!==this.key&&(ye(e),this.key=t),n}}),nt=class extends b{static{this.styles=[x,t`
      /* Large screen */

      :host {
        --bkd-content-margin-top: 3rem;
        --bkd-content-margin-horizontal: var(--bkd-margin-horizontal-large);
        padding-top: var(--bkd-content-margin-top);
        /* Instead of defining the horizontal and bottom padding in the portal,
           we inject it into the iframe to avoid cropping of outlines, see
           injectIframePaddingStyles() */
      }

      h1 {
        font-size: 3.375rem;
        font-weight: 100;
        line-height: 2.25rem;
        letter-spacing: 0.01rem;
        word-spacing: 0.025rem;
        margin: 0 var(--bkd-content-margin-horizontal) calc(3.375rem / 2)
          var(--bkd-content-margin-horizontal);
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
    `]}constructor(){super(),this.renderedOffline=!1,this.handleMessage=e=>{if(e.origin===window.location.origin)switch(e.data.type){case`bkdAppResize`:this.handleResize(e.data.height);break}},this.handleOnline=()=>{this.renderedOffline&&window.location.reload()},new l(this,w)}connectedCallback(){super.connectedCallback(),window.addEventListener(`message`,this.handleMessage),window.addEventListener(`online`,this.handleOnline)}disconnectedCallback(){window.removeEventListener(`message`,this.handleMessage),window.removeEventListener(`online`,this.handleOnline),super.disconnectedCallback()}handleResize(e){this.iframe&&(this.iframe.height=e)}renderAppIframe(){return f`${tt(w.app.root,f`
        <iframe
          id="app"
          title=${w.app.key}
          src=${`/${w.app.root}${w.appPath}`}
          @load=${this.injectIframePaddingStyles}
        ></iframe>
      `)}`}injectIframePaddingStyles(e){let t=e.target.contentDocument;if(!t)return;let n=t.getElementById(`bkd-portal-injected-styles`);n||(n=t.createElement(`style`),n.id=`bkd-portal-injected-styles`,t.head.appendChild(n));let r=window.getComputedStyle(document.documentElement),i=r.getPropertyValue(`--bkd-margin-horizontal-large`).trim(),a=r.getPropertyValue(`--bkd-margin-horizontal-medium`).trim(),o=r.getPropertyValue(`--bkd-margin-horizontal-small`).trim();n.textContent=`
      body {
        padding-left: ${i};
        padding-right: ${i};
        padding-bottom: 0.25rem;

        @media screen and (max-width: 1200px) {
          padding-left: ${a};
          padding-right: ${a};
        }

        @media screen and (max-width: 767px) {
          padding-left: ${o};
          padding-right: ${o};
        }
      }
    `}renderFooterContent(){return f`
      ${E(w.navigationItemKey,[[`contact`,()=>f`<bkd-contact></bkd-contact>`],[`legal`,()=>f`<bkd-legal></bkd-legal>`],[`imprint`,()=>f`<bkd-imprint></bkd-imprint>`]],()=>f``)}
    `}render(){return this.renderedOffline=!navigator.onLine,navigator.onLine?a.scope===w.app.scope?f`
      <main role="main">
        ${c(w.app.heading,()=>f`<h1>${w.navigationItem.label}</h1>`)}
        ${c(w.app.key===`footer`,()=>this.renderFooterContent(),()=>this.renderAppIframe())}
      </main>
    `:f`<main role="main"></main>`:f`<main role="main">
        <h1>${v(`Offline`)}</h1>
        <p>${v(`Keine Verbindung vorhanden.`)}</p>
      </main>`}};C([j(`iframe`)],nt.prototype,`iframe`,void 0),nt=C([d(`bkd-content`),g()],nt);function rt(e,t){if(e===t||e.contains(t))return!0;if(`shadowRoot`in e&&e.shadowRoot)return rt(e.shadowRoot,t);for(let n of Array.from(e.children))if(rt(n,t))return!0;return!1}var it=class{get toggleElement(){return this.options.queryToggleElement()}get menuElement(){return this.options.queryMenuElement()}get items(){let e=this.options?.queryItems&&this.options.queryItems();return Array.from(e??[])}get focusedItem(){return this.options?.queryFocused?this.options.queryFocused():null}constructor(e,t){this.host=e,this.options=t,this.open=!1,this.closeOnBlur=e=>{this.menuElement&&`relatedTarget`in e&&(this.menuElement.contains(e.relatedTarget)||this.closeDeferred())},this.handleDocumentClick=e=>{let t=e.composedPath()[0];if(!t)return;let n=this.toggleElement&&!rt(this.toggleElement,t),r=this.menuElement&&!rt(this.menuElement,t);n&&r&&this.closeDeferred()},this.handleIframeClick=()=>{this.closeDeferred()},this.handleKeydown=e=>{switch(e.key){case`Tab`:this.options.tabInside||this.close();break;case`Escape`:this.close();break;case`ArrowDown`:this.items[this.nextLinkIndex(1)]?.focus();break;case`ArrowUp`:this.items[this.nextLinkIndex(-1)]?.focus();break}},this.host.addController(this)}hostDisconnected(){this.removeListeners()}toggle(){this.open=!this.open,this.host.requestUpdate(),this.open?this.addListeners():setTimeout(()=>{this.removeListeners()})}close(){this.open&&this.toggle()}closeDeferred(){setTimeout(()=>this.close())}addListeners(){setTimeout(()=>{this.options.tabInside&&this.menuElement?.addEventListener(`focusout`,this.closeOnBlur,!0),this.iframeDocument?.addEventListener(`click`,this.handleIframeClick,!0)}),document.addEventListener(`click`,this.handleDocumentClick,!0),this.host.addEventListener(`keydown`,this.handleKeydown,!0)}removeListeners(){this.options.tabInside&&this.menuElement?.removeEventListener(`focusout`,this.closeOnBlur,!0),document.removeEventListener(`click`,this.handleDocumentClick,!0),this.iframeDocument?.removeEventListener(`click`,this.handleIframeClick,!0),this.host.removeEventListener(`keydown`,this.handleKeydown,!0)}get iframeDocument(){return((document.querySelector(`bkd-portal`)?.shadowRoot)?.querySelector(`bkd-content`)?.shadowRoot)?.querySelector(`iframe`)?.contentDocument??null}activeLinkIndex(){let e=this.focusedItem?this.items.indexOf(this.focusedItem):-1;return e===-1?null:e}nextLinkIndex(e){let t=this.activeLinkIndex(),n=this.items.length-1;if(t===null)return e>0?0:n;let r=t+e;return r>n?0:r<0?n:r}},at=class extends ce{constructor(e){if(super(e),this.it=y,e.type!==ve.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===y||e==null)return this._t=void 0,this.it=e;if(e===oe)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};at.directiveName=`unsafeHTML`,at.resultType=1;var V=S(at),ot=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="m22 15.975-1.775 1.775L12 9.525 3.775 17.75 2 15.975l10-10 10 10Z"/></svg>
`,st=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M2 8.025 3.775 6.25 12 14.475l8.225-8.225L22 8.025l-10 10-10-10Z"/></svg>
`;function ct(e){return[{key:`myProfile`,label:v(`Mein Profil`),href:pe(`myProfile`)},{key:`mySettings`,label:v(`Einstellungen`),href:pe(`mySettings`)},{key:`videos`,label:v(`Video-Tutorials`),href:e===`de-CH`?`https://www.youtube.com/playlist?list=PLLDtLiOuctbx-_EQWgWqTO1MRbX845OEf`:`https://www.youtube.com/playlist?list=PLLDtLiOuctbyEegnquAkaW4u8cm62lFAU`,img:`/icons/external-link.svg`,external:!0},{key:`logout`,label:v(`Logout`),href:`#`,img:`/icons/logout.svg`}]}var H=class extends b{static{this.styles=[x,t`
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
    `]}constructor(){super(),this.openGroup=null,this.handleKeyup=e=>{e.key===`Tab`&&this.openGroupOfFocusedItem()},new l(this,w)}connectedCallback(){super.connectedCallback(),this.openGroupOfCurrentItem(),this.addEventListener(`keyup`,this.handleKeyup)}disconnectedCallback(){this.removeEventListener(`keyup`,this.handleKeyup),super.disconnectedCallback()}openGroupOfCurrentItem(){this.openGroup||=w.navigationGroup}openGroupOfFocusedItem(){let e=this.shadowRoot?.activeElement;if(e instanceof HTMLElement){let t=e.dataset.itemKey;if(t){let{group:e}=le(_.navigation,t);e&&e.label!==this.openGroup?.label&&(this.openGroup=e)}}}handleGroupClick(e,t){e.preventDefault(),this.openGroup=t.label===this.openGroup?.label?null:t}handleNavItemClick(e,t){e.preventDefault(),this.dispatchEvent(new CustomEvent(`bkdnavitemclick`,{detail:{item:t},composed:!0,bubbles:!0}))}handleSettingsItemClick(e,t){this.dispatchEvent(new CustomEvent(`bkdsettingsitemclick`,{detail:{item:t,event:e},composed:!0,bubbles:!0}))}renderGroup(e){let t=e.label===this.openGroup?.label;return f`
      <li
        class=${D({group:!0,open:t})}
        aria-expanded=${t}
      >
        <button
          class="group-header"
          tabindex="-1"
          @click=${t=>this.handleGroupClick(t,e)}
        >
          <label> ${e.label} </label>
          ${V(t?ot:st)}
        </button>
        <ul class="items">
          ${_e(e.items,e=>e.label,this.renderNavItem.bind(this))}
        </ul>
      </li>
    `}renderNavItem(e){return f`
      <li
        class=${D({item:!0,active:e.key===w.navigationItemKey})}
      >
        <a
          href=${pe(e)}
          data-item-key=${e.key}
          @click=${t=>this.handleNavItemClick(t,e)}
        >
          ${e.label}
        </a>
      </li>
    `}renderSettingsItem(e){return f`<li>
      <a
        href=${e.href}
        target=${e.external?`_blank`:`_self`}
        @click=${t=>this.handleSettingsItemClick(t,e)}
      >
        ${e.label}
      </a>
      ${e.img?f`<img src=${e.img} alt="" width="24" height="24" />`:y}
    </li>`}render(){return f`
      <nav role="navigation" aria-label=${v(`Mobile Navigation`)}>
        <ul class="nav">
          ${_e(w.navigation,e=>e.label,this.renderGroup.bind(this))}
        </ul>
        <div class="service-nav">
          <ul>
            ${_e(ct(w.locale),e=>e.key,this.renderSettingsItem.bind(this))}
          </ul>
          ${c(w.allowedLocales.length>1,()=>f`<bkd-language-switcher></bkd-language-switcher>`)}
        </div>
      </nav>
    `}};C([ee()],H.prototype,`openGroup`,void 0),H=C([d(`bkd-mobile-nav`),g()],H);var lt=class extends b{static{this.styles=[x,t`
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
    `]}constructor(){super(),this.open=!1,new l(this,w)}handleItemClick(e,t){e.preventDefault(),this.dispatchEvent(new CustomEvent(`bkdnavitemclick`,{detail:{item:t},composed:!0,bubbles:!0}))}renderItem(e){return f`
      <li role="presentation" class=${D({active:e.key===w.navigationItemKey})}>
        <a
          role="menuitem"
          href=${pe(e)}
          @click=${t=>this.handleItemClick(t,e)}
          >${e.label}</a
        >
      </li>
    `}render(){if(!(!this.group||!this.open))return f`
      <ul role="menu">
        ${_e(this.group.items,e=>e.key,this.renderItem.bind(this))}
      </ul>
    `}};C([T()],lt.prototype,`group`,void 0),C([T()],lt.prototype,`open`,void 0),lt=C([d(`bkd-nav-group-dropdown`),g()],lt);var U=class extends b{constructor(...e){super(...e),this.dropdown=new it(this,{queryToggleElement:()=>this.toggleElement??null,queryMenuElement:()=>this.menuElement?.shadowRoot?.querySelector(`ul[role="menu"]`)??null,queryItems:()=>this.menuElement?.shadowRoot?.querySelectorAll(`a[role='menuitem']`)??null,queryFocused:()=>this.menuElement?.shadowRoot?.activeElement??null})}static{this.styles=[x,t`
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
    `]}toggle(e){e.preventDefault(),this.dropdown.toggle()}handleItemClick(){this.dropdown.close()}render(){if(this.group)return f`
      <a
        href="#"
        @click=${this.toggle.bind(this)}
        class=${D({active:!!this.active})}
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
    `}};C([T()],U.prototype,`group`,void 0),C([T({type:Boolean})],U.prototype,`active`,void 0),C([j(`a`)],U.prototype,`toggleElement`,void 0),C([j(`bkd-nav-group-dropdown`)],U.prototype,`menuElement`,void 0),U=C([d(`bkd-nav-group-toggle`),g()],U);var ut=class extends b{static{this.styles=[x,t`
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
    `]}constructor(){super(),new l(this,w)}renderGroupToggle(e,t){return f`
      <bkd-nav-group-toggle
        .group=${e}
        ?active=${t}
      ></bkd-nav-group-toggle>
    `}render(){return f`<nav role="navigation" aria-label=${v(`Hauptnavigation`)}>
      ${_e(w.navigation,e=>e.label,e=>this.renderGroupToggle(e,e.label===w.navigationGroup?.label))}
    </nav>`}};ut=C([d(`bkd-nav`),g()],ut);var dt=class extends b{constructor(...e){super(...e),this.open=!1}static{this.styles=[x,t`
      :host {
        display: flex;
      }

      button {
        background: transparent;
        border: none;
        cursor: pointer;
      }
    `]}toggle(){this.dispatchEvent(new CustomEvent(`bkdhamburgertoggle`,{bubbles:!0,composed:!0}))}render(){let e=this.open?`/icons/close.svg`:`/icons/hamburger.svg`;return f`
      <button
        class="hamburger"
        aria-expanded=${this.open}
        aria-label=${v(`Menü`)}
        @click=${this.toggle.bind(this)}
      >
        <img src=${e} alt="" width="32" height="32" />
      </button>
    `}};C([T()],dt.prototype,`open`,void 0),dt=C([d(`bkd-hamburger`),g()],dt);var ft=`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path fill="currentColor" d="M16 2a2.25 2.25 0 0 0-2.25 2.25v1.043C9.87 6.293 7 9.807 7 14v7.5h18V14c0-4.193-2.87-7.707-6.75-8.707V4.25A2.25 2.25 0 0 0 16 2M4 24.5v3h9.404A3 3 0 1 0 19 29a3 3 0 0 0-.407-1.5H28v-3z"/></svg>`,pt=`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" preserveAspectRatio="xMidYMid" style="margin:auto;background:#fff 0 0;display:block;shape-rendering:auto" viewBox="0 0 100 100"><g transform="translate(82 50)"><circle r="6"><animateTransform attributeName="transform" begin="-0.8571428571428571s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.8571428571428571s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(51.429 -42.913 110.137)"><circle r="6" fill-opacity=".857"><animateTransform attributeName="transform" begin="-0.7142857142857143s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.7142857142857143s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(102.857 -10.937 57.696)"><circle r="6" fill-opacity=".714"><animateTransform attributeName="transform" begin="-0.5714285714285714s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.5714285714285714s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(154.286 3.294 34.358)"><circle r="6" fill-opacity=".571"><animateTransform attributeName="transform" begin="-0.42857142857142855s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.42857142857142855s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(-154.286 14.706 15.642)"><circle r="6" fill-opacity=".429"><animateTransform attributeName="transform" begin="-0.2857142857142857s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.2857142857142857s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(-102.857 28.937 -7.696)"><circle r="6" fill-opacity=".286"><animateTransform attributeName="transform" begin="-0.14285714285714285s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.14285714285714285s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(-51.429 60.913 -60.137)"><circle r="6" fill-opacity=".143"><animateTransform attributeName="transform" begin="0s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="0s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g></svg>`,mt=`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path fill="currentColor" d="m13 3-1.333 1.333H5V7h21.333V4.333h-6.666L18.333 3zM6.333 9.667V27c0 1.467 1.2 2.667 2.667 2.667h13.333C23.8 29.667 25 28.467 25 27V9.667z"/></svg>`;function ht(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function gt(e){if(Array.isArray(e))return e}function _t(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function vt(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function W(e,t){return gt(e)||_t(e,t)||yt(e,t)||vt()}function yt(e,t){if(e){if(typeof e==`string`)return ht(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ht(e,t):void 0}}var bt=Object.entries,xt=Object.setPrototypeOf,St=Object.isFrozen,Ct=Object.getPrototypeOf,wt=Object.getOwnPropertyDescriptor,G=Object.freeze,K=Object.seal,Tt=Object.create,Et=typeof Reflect<`u`&&Reflect,Dt=Et.apply,Ot=Et.construct;G||=function(e){return e},K||=function(e){return e},Dt||=function(e,t){var n=[...arguments].slice(2);return e.apply(t,n)},Ot||=function(e){return new e(...[...arguments].slice(1))};var kt=Y(Array.prototype.forEach),At=Y(Array.prototype.lastIndexOf),jt=Y(Array.prototype.pop),Mt=Y(Array.prototype.push),Nt=Y(Array.prototype.splice),Pt=Array.isArray,Ft=Y(String.prototype.toLowerCase),It=Y(String.prototype.toString),Lt=Y(String.prototype.match),Rt=Y(String.prototype.replace),zt=Y(String.prototype.indexOf),Bt=Y(String.prototype.trim),Vt=Y(Number.prototype.toString),Ht=Y(Boolean.prototype.toString),Ut=typeof BigInt>`u`?null:Y(BigInt.prototype.toString),Wt=typeof Symbol>`u`?null:Y(Symbol.prototype.toString),q=Y(Object.prototype.hasOwnProperty),Gt=Y(Object.prototype.toString),J=Y(RegExp.prototype.test),Kt=qt(TypeError);function Y(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);var n=[...arguments].slice(1);return Dt(e,t,n)}}function qt(e){return function(){return Ot(e,[...arguments])}}function X(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ft;if(xt&&xt(e,null),!Pt(t))return e;let r=t.length;for(;r--;){let i=t[r];if(typeof i==`string`){let e=n(i);e!==i&&(St(t)||(t[r]=e),i=e)}e[i]=!0}return e}function Jt(e){for(let t=0;t<e.length;t++)q(e,t)||(e[t]=null);return e}function Z(e){let t=Tt(null);for(let r of bt(e)){var n=W(r,2);let i=n[0],a=n[1];q(e,i)&&(Pt(a)?t[i]=Jt(a):a&&typeof a==`object`&&a.constructor===Object?t[i]=Z(a):t[i]=a)}return t}function Yt(e){switch(typeof e){case`string`:return e;case`number`:return Vt(e);case`boolean`:return Ht(e);case`bigint`:return Ut?Ut(e):`0`;case`symbol`:return Wt?Wt(e):`Symbol()`;case`undefined`:return Gt(e);case`function`:case`object`:{if(e===null)return Gt(e);let t=e,n=Q(t,`toString`);if(typeof n==`function`){let e=n(t);return typeof e==`string`?e:Gt(e)}return Gt(e)}default:return Gt(e)}}function Q(e,t){for(;e!==null;){let n=wt(e,t);if(n){if(n.get)return Y(n.get);if(typeof n.value==`function`)return Y(n.value)}e=Ct(e)}function n(){return null}return n}function Xt(e){try{return J(e,``),!0}catch{return!1}}var Zt=G(`a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr`.split(`.`)),Qt=G(`svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.enterkeyhint.exportparts.filter.font.g.glyph.glyphref.hkern.image.inputmode.line.lineargradient.marker.mask.metadata.mpath.part.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern`.split(`.`)),$t=G([`feBlend`,`feColorMatrix`,`feComponentTransfer`,`feComposite`,`feConvolveMatrix`,`feDiffuseLighting`,`feDisplacementMap`,`feDistantLight`,`feDropShadow`,`feFlood`,`feFuncA`,`feFuncB`,`feFuncG`,`feFuncR`,`feGaussianBlur`,`feImage`,`feMerge`,`feMergeNode`,`feMorphology`,`feOffset`,`fePointLight`,`feSpecularLighting`,`feSpotLight`,`feTile`,`feTurbulence`]),en=G([`animate`,`color-profile`,`cursor`,`discard`,`font-face`,`font-face-format`,`font-face-name`,`font-face-src`,`font-face-uri`,`foreignobject`,`hatch`,`hatchpath`,`mesh`,`meshgradient`,`meshpatch`,`meshrow`,`missing-glyph`,`script`,`set`,`solidcolor`,`unknown`,`use`]),tn=G(`math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts`.split(`.`)),nn=G([`maction`,`maligngroup`,`malignmark`,`mlongdiv`,`mscarries`,`mscarry`,`msgroup`,`mstack`,`msline`,`msrow`,`semantics`,`annotation`,`annotation-xml`,`mprescripts`,`none`]),rn=G([`#text`]),an=G(`accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.command.commandfor.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.exportparts.face.for.headers.height.hidden.high.href.hreflang.id.inert.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.part.pattern.placeholder.playsinline.popover.popovertarget.popovertargetaction.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.slot.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns`.split(`.`)),on=G(`accent-height.accumulate.additive.alignment-baseline.amplitude.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dur.edgemode.elevation.end.exponent.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.intercept.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.mask-type.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.slope.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.tablevalues.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-rendering.textlength.type.u1.u2.unicode.values.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan`.split(`.`)),sn=G(`accent.accentunder.align.bevelled.close.columnalign.columnlines.columnspacing.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lquote.lspace.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns`.split(`.`)),cn=G([`xlink:href`,`xml:id`,`xlink:title`,`xml:space`,`xmlns:xlink`]),ln=K(/{{[\w\W]*|^[\w\W]*}}/g),un=K(/<%[\w\W]*|^[\w\W]*%>/g),dn=K(/\${[\w\W]*/g),fn=K(/^data-[\-\w.\u00B7-\uFFFF]+$/),pn=K(/^aria-[\-\w]+$/),mn=K(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),hn=K(/^(?:\w+script|data):/i),gn=K(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),_n=K(/^html$/i),vn=K(/^[a-z][.\w]*(-[.\w]+)+$/i),yn=K(/<[/\w!]/g),bn=K(/<[/\w]/g),xn=K(/<\/no(script|embed|frames)/i),Sn=K(/\/>/i),$={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},Cn=function(){return typeof window>`u`?null:window},wn=function(e,t){if(typeof e!=`object`||typeof e.createPolicy!=`function`)return null;let n=null,r=`data-tt-policy-suffix`;t&&t.hasAttribute(r)&&(n=t.getAttribute(r));let i=`dompurify`+(n?`#`+n:``);try{return e.createPolicy(i,{createHTML(e){return e},createScriptURL(e){return e}})}catch{return console.warn(`TrustedTypes policy `+i+` could not be created.`),null}},Tn=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},En=function(e,t,n,r){return q(e,t)&&Pt(e[t])?X(r.base?Z(r.base):{},e[t],r.transform):n};function Dn(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Cn(),t=e=>Dn(e);if(t.version=`3.4.11`,t.removed=[],!e||!e.document||e.document.nodeType!==$.document||!e.Element)return t.isSupported=!1,t;let n=e.document,r=n,i=r.currentScript;e.DocumentFragment;let a=e.HTMLTemplateElement,o=e.Node,s=e.Element,c=e.NodeFilter;e.NamedNodeMap===void 0&&(e.NamedNodeMap||e.MozNamedAttrMap),e.HTMLFormElement;let l=e.DOMParser,u=e.trustedTypes,d=s.prototype,ee=Q(d,`cloneNode`),te=Q(d,`remove`),ne=Q(d,`nextSibling`),re=Q(d,`childNodes`),ie=Q(d,`parentNode`),ae=Q(d,`shadowRoot`),f=Q(d,`attributes`),p=o&&o.prototype?Q(o.prototype,`nodeType`):null,m=o&&o.prototype?Q(o.prototype,`nodeName`):null;if(typeof a==`function`){let e=n.createElement(`template`);e.content&&e.content.ownerDocument&&(n=e.content.ownerDocument)}let h,g=``,_,v=!1,y=0,b=function(){if(y>0)throw Kt(`A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.`)},oe=function(e){b(),y++;try{return h.createHTML(e)}finally{y--}},se=function(e){b(),y++;try{return h.createScriptURL(e)}finally{y--}},ce=function(){return v||=(_=wn(u,i),!0),_},le=n,ue=le.implementation,x=le.createNodeIterator,de=le.createDocumentFragment,fe=le.getElementsByTagName,pe=r.importNode,S=Tn();t.isSupported=typeof bt==`function`&&typeof ie==`function`&&ue&&ue.createHTMLDocument!==void 0;let me=ln,he=un,ge=dn,C=fn,_e=pn,ve=hn,w=gn,T=vn,ye=mn,E=null,D=X({},[...Zt,...Qt,...$t,...tn,...rn]),O=null,be=X({},[...an,...on,...sn,...cn]),k=Object.seal(Tt(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),xe=null,Se=null,A=Object.seal(Tt(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}})),j=!0,Ce=!0,we=!1,Te=!0,M=!1,Ee=!0,N=!1,De=!1,Oe=null,ke=null,P=!1,Ae=!1,je=!1,Me=!1,Ne=!0,Pe=!1,Fe=`user-content-`,Ie=!0,Le=!1,F={},I=null,Re=X({},`annotation-xml.audio.colgroup.desc.foreignobject.head.iframe.math.mi.mn.mo.ms.mtext.noembed.noframes.noscript.plaintext.script.selectedcontent.style.svg.template.thead.title.video.xmp`.split(`.`)),ze=null,Be=X({},[`audio`,`video`,`img`,`source`,`image`,`track`]),Ve=null,He=X({},[`alt`,`class`,`for`,`id`,`label`,`name`,`pattern`,`placeholder`,`role`,`summary`,`title`,`value`,`style`,`xmlns`]),L=`http://www.w3.org/1998/Math/MathML`,Ue=`http://www.w3.org/2000/svg`,R=`http://www.w3.org/1999/xhtml`,z=R,We=!1,Ge=null,Ke=X({},[L,Ue,R],It),qe=G([`mi`,`mo`,`mn`,`ms`,`mtext`]),Je=X({},qe),Ye=G([`annotation-xml`]),Xe=X({},Ye),Ze=X({},[`title`,`style`,`font`,`a`,`script`]),Qe=null,$e=[`application/xhtml+xml`,`text/html`],B=null,et=null,tt=n.createElement(`form`),nt=function(e){return e instanceof RegExp||e instanceof Function},rt=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(et&&et===e)return;(!e||typeof e!=`object`)&&(e={}),e=Z(e),Qe=$e.indexOf(e.PARSER_MEDIA_TYPE)===-1?`text/html`:e.PARSER_MEDIA_TYPE,B=Qe===`application/xhtml+xml`?It:Ft,E=En(e,`ALLOWED_TAGS`,D,{transform:B}),O=En(e,`ALLOWED_ATTR`,be,{transform:B}),Ge=En(e,`ALLOWED_NAMESPACES`,Ke,{transform:It}),Ve=En(e,`ADD_URI_SAFE_ATTR`,He,{transform:B,base:He}),ze=En(e,`ADD_DATA_URI_TAGS`,Be,{transform:B,base:Be}),I=En(e,`FORBID_CONTENTS`,Re,{transform:B}),xe=En(e,`FORBID_TAGS`,Z({}),{transform:B}),Se=En(e,`FORBID_ATTR`,Z({}),{transform:B}),F=q(e,`USE_PROFILES`)?e.USE_PROFILES&&typeof e.USE_PROFILES==`object`?Z(e.USE_PROFILES):e.USE_PROFILES:!1,j=e.ALLOW_ARIA_ATTR!==!1,Ce=e.ALLOW_DATA_ATTR!==!1,we=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Te=e.ALLOW_SELF_CLOSE_IN_ATTR!==!1,M=e.SAFE_FOR_TEMPLATES||!1,Ee=e.SAFE_FOR_XML!==!1,N=e.WHOLE_DOCUMENT||!1,Ae=e.RETURN_DOM||!1,je=e.RETURN_DOM_FRAGMENT||!1,Me=e.RETURN_TRUSTED_TYPE||!1,P=e.FORCE_BODY||!1,Ne=e.SANITIZE_DOM!==!1,Pe=e.SANITIZE_NAMED_PROPS||!1,Ie=e.KEEP_CONTENT!==!1,Le=e.IN_PLACE||!1,ye=Xt(e.ALLOWED_URI_REGEXP)?e.ALLOWED_URI_REGEXP:mn,z=typeof e.NAMESPACE==`string`?e.NAMESPACE:R,Je=q(e,`MATHML_TEXT_INTEGRATION_POINTS`)&&e.MATHML_TEXT_INTEGRATION_POINTS&&typeof e.MATHML_TEXT_INTEGRATION_POINTS==`object`?Z(e.MATHML_TEXT_INTEGRATION_POINTS):X({},qe),Xe=q(e,`HTML_INTEGRATION_POINTS`)&&e.HTML_INTEGRATION_POINTS&&typeof e.HTML_INTEGRATION_POINTS==`object`?Z(e.HTML_INTEGRATION_POINTS):X({},Ye);let t=q(e,`CUSTOM_ELEMENT_HANDLING`)&&e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING==`object`?Z(e.CUSTOM_ELEMENT_HANDLING):Tt(null);if(k=Tt(null),q(t,`tagNameCheck`)&&nt(t.tagNameCheck)&&(k.tagNameCheck=t.tagNameCheck),q(t,`attributeNameCheck`)&&nt(t.attributeNameCheck)&&(k.attributeNameCheck=t.attributeNameCheck),q(t,`allowCustomizedBuiltInElements`)&&typeof t.allowCustomizedBuiltInElements==`boolean`&&(k.allowCustomizedBuiltInElements=t.allowCustomizedBuiltInElements),K(k),M&&(Ce=!1),je&&(Ae=!0),F&&(E=X({},rn),O=Tt(null),F.html===!0&&(X(E,Zt),X(O,an)),F.svg===!0&&(X(E,Qt),X(O,on),X(O,cn)),F.svgFilters===!0&&(X(E,$t),X(O,on),X(O,cn)),F.mathMl===!0&&(X(E,tn),X(O,sn),X(O,cn))),A.tagCheck=null,A.attributeCheck=null,q(e,`ADD_TAGS`)&&(typeof e.ADD_TAGS==`function`?A.tagCheck=e.ADD_TAGS:Pt(e.ADD_TAGS)&&(E===D&&(E=Z(E)),X(E,e.ADD_TAGS,B))),q(e,`ADD_ATTR`)&&(typeof e.ADD_ATTR==`function`?A.attributeCheck=e.ADD_ATTR:Pt(e.ADD_ATTR)&&(O===be&&(O=Z(O)),X(O,e.ADD_ATTR,B))),q(e,`ADD_URI_SAFE_ATTR`)&&Pt(e.ADD_URI_SAFE_ATTR)&&X(Ve,e.ADD_URI_SAFE_ATTR,B),q(e,`FORBID_CONTENTS`)&&Pt(e.FORBID_CONTENTS)&&(I===Re&&(I=Z(I)),X(I,e.FORBID_CONTENTS,B)),q(e,`ADD_FORBID_CONTENTS`)&&Pt(e.ADD_FORBID_CONTENTS)&&(I===Re&&(I=Z(I)),X(I,e.ADD_FORBID_CONTENTS,B)),Ie&&(E[`#text`]=!0),N&&X(E,[`html`,`head`,`body`]),E.table&&(X(E,[`tbody`]),delete xe.tbody),e.TRUSTED_TYPES_POLICY){if(typeof e.TRUSTED_TYPES_POLICY.createHTML!=`function`)throw Kt(`TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.`);if(typeof e.TRUSTED_TYPES_POLICY.createScriptURL!=`function`)throw Kt(`TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.`);let t=h;h=e.TRUSTED_TYPES_POLICY;try{g=oe(``)}catch(e){throw h=t,e}}else e.TRUSTED_TYPES_POLICY===null?(h=void 0,g=``):(h===void 0&&(h=ce()),h&&typeof g==`string`&&(g=oe(``)));G&&G(e),et=e},it=X({},[...Qt,...$t,...en]),at=X({},[...tn,...nn]),V=function(e,t,n){return t.namespaceURI===R?e===`svg`:t.namespaceURI===L?e===`svg`&&(n===`annotation-xml`||Je[n]):!!it[e]},ot=function(e,t,n){return t.namespaceURI===R?e===`math`:t.namespaceURI===Ue?e===`math`&&Xe[n]:!!at[e]},st=function(e,t,n){return t.namespaceURI===Ue&&!Xe[n]||t.namespaceURI===L&&!Je[n]?!1:!at[e]&&(Ze[e]||!it[e])},ct=function(e){let t=ie(e);(!t||!t.tagName)&&(t={namespaceURI:z,tagName:`template`});let n=Ft(e.tagName),r=Ft(t.tagName);return Ge[e.namespaceURI]?e.namespaceURI===Ue?V(n,t,r):e.namespaceURI===L?ot(n,t,r):e.namespaceURI===R?st(n,t,r):!!(Qe===`application/xhtml+xml`&&Ge[e.namespaceURI]):!1},H=function(e){Mt(t.removed,{element:e});try{ie(e).removeChild(e)}catch{if(te(e),!ie(e))throw Kt(`a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place`)}},lt=function(e){let t=re(e);if(t){let e=[];kt(t,t=>{Mt(e,t)}),kt(e,e=>{try{te(e)}catch{}})}let n=f(e);if(n)for(let t=n.length-1;t>=0;--t){let r=n[t],i=r&&r.name;if(typeof i==`string`)try{e.removeAttribute(i)}catch{}}},U=function(e,n){try{Mt(t.removed,{attribute:n.getAttributeNode(e),from:n})}catch{Mt(t.removed,{attribute:null,from:n})}if(n.removeAttribute(e),e===`is`)if(Ae||je)try{H(n)}catch{}else try{n.setAttribute(e,``)}catch{}},ut=function(e){let t=f(e);if(t)for(let n=t.length-1;n>=0;--n){let r=t[n],i=r&&r.name;if(!(typeof i!=`string`||O[B(i)]))try{e.removeAttribute(i)}catch{}}},dt=function(e){let t=[e];for(;t.length>0;){let e=t.pop();(p?p(e):e.nodeType)===$.element&&ut(e);let n=re(e);if(n)for(let e=n.length-1;e>=0;--e)t.push(n[e])}},ft=function(e){let t=null,r=null;if(P)e=`<remove></remove>`+e;else{let t=Lt(e,/^[\r\n\t ]+/);r=t&&t[0]}Qe===`application/xhtml+xml`&&z===R&&(e=`<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>`+e+`</body></html>`);let i=h?oe(e):e;if(z===R)try{t=new l().parseFromString(i,Qe)}catch{}if(!t||!t.documentElement){t=ue.createDocument(z,`template`,null);try{t.documentElement.innerHTML=We?g:i}catch{}}let a=t.body||t.documentElement;return e&&r&&a.insertBefore(n.createTextNode(r),a.childNodes[0]||null),z===R?fe.call(t,N?`html`:`body`)[0]:N?t.documentElement:a},pt=function(e){return x.call(e.ownerDocument||e,e,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT|c.SHOW_PROCESSING_INSTRUCTION|c.SHOW_CDATA_SECTION,null)},mt=function(e){return e=Rt(e,me,` `),e=Rt(e,he,` `),e=Rt(e,ge,` `),e},ht=function(e){e.normalize();let t=x.call(e.ownerDocument||e,e,c.SHOW_TEXT|c.SHOW_COMMENT|c.SHOW_CDATA_SECTION|c.SHOW_PROCESSING_INSTRUCTION,null),n=t.nextNode();for(;n;)n.data=mt(n.data),n=t.nextNode();let r=e.querySelectorAll?.call(e,`template`);r&&kt(r,e=>{_t(e.content)&&ht(e.content)})},gt=function(e){let t=m?m(e):null;return typeof t!=`string`||B(t)!==`form`?!1:typeof e.nodeName!=`string`||typeof e.textContent!=`string`||typeof e.removeChild!=`function`||e.attributes!==f(e)||typeof e.removeAttribute!=`function`||typeof e.setAttribute!=`function`||typeof e.namespaceURI!=`string`||typeof e.insertBefore!=`function`||typeof e.hasChildNodes!=`function`||e.nodeType!==p(e)||e.childNodes!==re(e)},_t=function(e){if(!p||typeof e!=`object`||!e)return!1;try{return p(e)===$.documentFragment}catch{return!1}},vt=function(e){if(!p||typeof e!=`object`||!e)return!1;try{return typeof p(e)==`number`}catch{return!1}};function W(e,n,r){e.length!==0&&kt(e,e=>{e.call(t,n,r,et)})}let yt=function(e,t){return!!(Ee&&e.hasChildNodes()&&!vt(e.firstElementChild)&&J(yn,e.textContent)&&J(yn,e.innerHTML)||Ee&&e.namespaceURI===R&&t===`style`&&vt(e.firstElementChild)||e.nodeType===$.processingInstruction||Ee&&e.nodeType===$.comment&&J(bn,e.data))},xt=function(e,t){if(!xe[t]&&Et(t)&&(k.tagNameCheck instanceof RegExp&&J(k.tagNameCheck,t)||k.tagNameCheck instanceof Function&&k.tagNameCheck(t)))return!1;if(Ie&&!I[t]){let t=ie(e),n=re(e);if(n&&t){let r=n.length;for(let i=r-1;i>=0;--i){let r=Le?n[i]:ee(n[i],!0);t.insertBefore(r,ne(e))}}}return H(e),!0},St=function(e){if(W(S.beforeSanitizeElements,e,null),gt(e))return H(e),!0;let n=B(m?m(e):e.nodeName);if(W(S.uponSanitizeElement,e,{tagName:n,allowedTags:E}),yt(e,n))return H(e),!0;if(xe[n]||!(A.tagCheck instanceof Function&&A.tagCheck(n))&&!E[n])return xt(e,n);if((p?p(e):e.nodeType)===$.element&&!ct(e)||(n===`noscript`||n===`noembed`||n===`noframes`)&&J(xn,e.innerHTML))return H(e),!0;if(M&&e.nodeType===$.text){let n=mt(e.textContent);e.textContent!==n&&(Mt(t.removed,{element:e.cloneNode()}),e.textContent=n)}return W(S.afterSanitizeElements,e,null),!1},Ct=function(e,t,r){if(Se[t]||Ne&&(t===`id`||t===`name`)&&(r in n||r in tt))return!1;let i=O[t]||A.attributeCheck instanceof Function&&A.attributeCheck(t,e);if(!(Ce&&J(C,t))&&!(j&&J(_e,t))){if(!i){if(!(Et(e)&&(k.tagNameCheck instanceof RegExp&&J(k.tagNameCheck,e)||k.tagNameCheck instanceof Function&&k.tagNameCheck(e))&&(k.attributeNameCheck instanceof RegExp&&J(k.attributeNameCheck,t)||k.attributeNameCheck instanceof Function&&k.attributeNameCheck(t,e))||t===`is`&&k.allowCustomizedBuiltInElements&&(k.tagNameCheck instanceof RegExp&&J(k.tagNameCheck,r)||k.tagNameCheck instanceof Function&&k.tagNameCheck(r))))return!1}else if(!Ve[t]&&!J(ye,Rt(r,w,``))&&!((t===`src`||t===`xlink:href`||t===`href`)&&e!==`script`&&zt(r,`data:`)===0&&ze[e])&&!(we&&!J(ve,Rt(r,w,``)))&&r)return!1}return!0},wt=X({},[`annotation-xml`,`color-profile`,`font-face`,`font-face-format`,`font-face-name`,`font-face-src`,`font-face-uri`,`missing-glyph`]),Et=function(e){return!wt[Ft(e)]&&J(T,e)},Dt=function(e,t,n,r){if(h&&typeof u==`object`&&typeof u.getAttributeType==`function`&&!n)switch(u.getAttributeType(e,t)){case`TrustedHTML`:return oe(r);case`TrustedScriptURL`:return se(r)}return r},Ot=function(e,n,r,i){try{r?e.setAttributeNS(r,n,i):e.setAttribute(n,i),gt(e)?H(e):jt(t.removed)}catch{U(n,e)}},Vt=function(e){W(S.beforeSanitizeAttributes,e,null);let t=e.attributes;if(!t||gt(e))return;let n={attrName:``,attrValue:``,keepAttr:!0,allowedAttributes:O,forceKeepAttr:void 0},r=t.length,i=B(e.nodeName);for(;r--;){let a=t[r],o=a.name,s=a.namespaceURI,c=a.value,l=B(o),u=c,d=o===`value`?u:Bt(u);if(n.attrName=l,n.attrValue=d,n.keepAttr=!0,n.forceKeepAttr=void 0,W(S.uponSanitizeAttribute,e,n),d=n.attrValue,Pe&&(l===`id`||l===`name`)&&zt(d,Fe)!==0&&(U(o,e),d=Fe+d),Ee&&J(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,d)){U(o,e);continue}if(l===`attributename`&&Lt(d,`href`)){U(o,e);continue}if(!n.forceKeepAttr){if(!n.keepAttr){U(o,e);continue}if(!Te&&J(Sn,d)){U(o,e);continue}if(M&&(d=mt(d)),!Ct(i,l,d)){U(o,e);continue}d=Dt(i,l,s,d),d!==u&&Ot(e,o,s,d)}}W(S.afterSanitizeAttributes,e,null)},Ht=function(e){let t=null,n=pt(e);for(W(S.beforeSanitizeShadowDOM,e,null);t=n.nextNode();)if(W(S.uponSanitizeShadowNode,t,null),St(t),Vt(t),_t(t.content)&&Ht(t.content),(p?p(t):t.nodeType)===$.element){let e=ae(t);_t(e)&&(Ut(e),Ht(e))}W(S.afterSanitizeShadowDOM,e,null)},Ut=function(e){let t=[{node:e,shadow:null}];for(;t.length>0;){let e=t.pop();if(e.shadow){Ht(e.shadow);continue}let n=e.node,r=(p?p(n):n.nodeType)===$.element,i=re(n);if(i)for(let e=i.length-1;e>=0;--e)t.push({node:i[e],shadow:null});if(r){let e=m?m(n):null;if(typeof e==`string`&&B(e)===`template`){let e=n.content;_t(e)&&t.push({node:e,shadow:null})}}if(r){let e=ae(n);_t(e)&&t.push({node:null,shadow:e},{node:e,shadow:null})}}};return t.sanitize=function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=null,a=null,o=null,s=null;if(We=!e,We&&(e=`<!-->`),typeof e!=`string`&&!vt(e)&&(e=Yt(e),typeof e!=`string`))throw Kt(`dirty is not a string, aborting`);if(!t.isSupported)return e;De?(E=Oe,O=ke):rt(n),(S.uponSanitizeElement.length>0||S.uponSanitizeAttribute.length>0)&&(E=Z(E)),S.uponSanitizeAttribute.length>0&&(O=Z(O)),t.removed=[];let c=Le&&typeof e!=`string`&&vt(e);if(c){let t=m?m(e):e.nodeName;if(typeof t==`string`){let e=B(t);if(!E[e]||xe[e])throw Kt(`root node is forbidden and cannot be sanitized in-place`)}if(gt(e))throw Kt(`root node is clobbered and cannot be sanitized in-place`);try{Ut(e)}catch(t){throw lt(e),t}}else if(vt(e))i=ft(`<!---->`),a=i.ownerDocument.importNode(e,!0),a.nodeType===$.element&&a.nodeName===`BODY`||a.nodeName===`HTML`?i=a:i.appendChild(a),Ut(a);else{if(!Ae&&!M&&!N&&e.indexOf(`<`)===-1)return h&&Me?oe(e):e;if(i=ft(e),!i)return Ae?null:Me?g:``}i&&P&&H(i.firstChild);let l=pt(c?e:i);try{for(;o=l.nextNode();)St(o),Vt(o),_t(o.content)&&Ht(o.content)}catch(t){throw c&&lt(e),t}if(c)return kt(t.removed,e=>{e.element&&dt(e.element)}),M&&ht(e),e;if(Ae){if(M&&ht(i),je)for(s=de.call(i.ownerDocument);i.firstChild;)s.appendChild(i.firstChild);else s=i;return(O.shadowroot||O.shadowrootmode)&&(s=pe.call(r,s,!0)),s}let u=N?i.outerHTML:i.innerHTML;return N&&E[`!doctype`]&&i.ownerDocument&&i.ownerDocument.doctype&&i.ownerDocument.doctype.name&&J(_n,i.ownerDocument.doctype.name)&&(u=`<!DOCTYPE `+i.ownerDocument.doctype.name+`>
`+u),M&&(u=mt(u)),h&&Me?oe(u):u},t.setConfig=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};rt(e),De=!0,Oe=E,ke=O},t.clearConfig=function(){et=null,De=!1,Oe=null,ke=null,h=_,g=``},t.isValidAttribute=function(e,t,n){et||rt({});let r=B(e),i=B(t);return Ct(r,i,n)},t.addHook=function(e,t){typeof t==`function`&&q(S,e)&&Mt(S[e],t)},t.removeHook=function(e,t){if(q(S,e)){if(t!==void 0){let n=At(S[e],t);return n===-1?void 0:Nt(S[e],n,1)[0]}return jt(S[e])}},t.removeHooks=function(e){q(S,e)&&(S[e]=[])},t.removeAllHooks=function(){S=Tn()},t}var On=Dn(),kn={ALLOWED_TAGS:[`br`,`div`,`span`,`a`,`ul`,`ol`,`li`,`sup`,`sub`,`code`,`cite`],ALLOWED_ATTR:[`style`,`href`]};function An(e){return On.sanitize(e,kn)}var jn=class extends b{constructor(...e){super(...e),this.open=!1,this.state=Nn.PENDING,this.notifications=[]}static{this.styles=[x,t`
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
    `]}handleDeleteAllNotifications(){this.dispatchEvent(new CustomEvent(`bkddeleteallnotifications`,{bubbles:!0,composed:!0}))}handleDeleteNotification(e){this.dispatchEvent(new CustomEvent(`bkddeletenotification`,{bubbles:!0,composed:!0,detail:{id:e}}))}renderContent(){return this.state===Nn.ERROR?f`<div class="error">
        ${v(`Fehler beim Laden der Benachrichtigungen`)}
      </div>`:this.state===Nn.PENDING?f`<div class="pending">${V(pt)}</div>`:this.notifications.length===0?f`<div class="notification">${v(`Keine Benachrichtigungen`)}</div>`:_e(this.notifications,e=>e.id,e=>this.renderNotification(e))}renderNotification(e){let t=An(e.subject),n=An(e.body);return f`<div class="notification">
      <div class="text">
        <div class="subject">${V(t)}</div>
        <div class="body">${V(n)}</div>
      </div>
      <button
        type="button"
        aria-label="${v(`Benachrichtigung löschen`)}"
        @click=${()=>this.handleDeleteNotification(e.id)}
      >
        ${V(mt)}
      </button>
    </div> `}render(){if(this.open)return f`<div id="notifications-dropdown">
      <div class="header">
        <h2>${v(`Benachrichtigungen`)}</h2>
        <button
          type="button"
          ?disabled=${!this.notifications||this.notifications.length===0}
          @click="${()=>this.handleDeleteAllNotifications()}"
        >
          ${v(`Alle löschen`)}
        </button>
      </div>
      <div class="content">${this.renderContent()}</div>
    </div>`}};C([T()],jn.prototype,`open`,void 0),C([T()],jn.prototype,`state`,void 0),C([T()],jn.prototype,`notifications`,void 0),jn=C([d(`bkd-notifications-dropdown`),g()],jn);var Mn=r();typeof Mn?.notificationRefreshTime!=`number`&&(Mn.notificationRefreshTime=30);var Nn=function(e){return e.PENDING=`pending`,e.ERROR=`error`,e.SUCCESS=`success`,e}({}),Pn=class extends b{constructor(...e){super(...e),this.state=`pending`,this.dropdown=new it(this,{queryToggleElement:()=>this.toggleElement??null,queryMenuElement:()=>this.dropdownElement?.shadowRoot??null,queryItems:()=>this.dropdownElement?.shadowRoot?.querySelectorAll(`button`)??null,queryFocused:()=>this.dropdownElement?.shadowRoot?.activeElement??null})}static{this.styles=[x,t`
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
    `]}connectedCallback(){super.connectedCallback(),this.fetch(),this.interval=setInterval(()=>this.fetch(),Mn.notificationRefreshTime*1e3)}disconnectedCallback(){clearInterval(this.interval),super.disconnectedCallback()}handleDeleteAllNotifications(){let e=[];o(e),this.notifications=e}handleDeleteNotification(e){if(!this.notifications)return;let t=this.notifications.filter(t=>t.id!==e.detail.id);o(t),this.notifications=t}async fetch(){try{this.notifications=await h(),this.state=`success`}catch{this.state=`error`}}render(){return f` <button
        id="notifications-toggle"
        type="button"
        aria-label="${v(`Benachrichtigungen`)}"
        aria-expanded=${this.dropdown.open}
        @click="${()=>this.dropdown.toggle()}"
      >
        ${V(ft)}
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
      </bkd-notifications-dropdown>`}};C([j(`button`)],Pn.prototype,`toggleElement`,void 0),C([j(`bkd-notifications-dropdown`)],Pn.prototype,`dropdownElement`,void 0),C([ee()],Pn.prototype,`notifications`,void 0),C([ee()],Pn.prototype,`state`,void 0),Pn=C([d(`bkd-notifications-toggle`),g()],Pn);var Fn=`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="7.4" fill="none"><path fill="currentColor" d="m6 7.4-6-6L1.4 0 6 4.6 10.6 0 12 1.4Z"/></svg>
`,In=`<svg xmlns="http://www.w3.org/2000/svg" width="11.414" height="11.414" fill="none"><path stroke="currentColor" stroke-width="2" d="m.707.707 10 10m-10 0 10-10"/></svg>
`,Ln=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M2 20v-2.8a3 3 0 0 1 .425-1.563A2.794 2.794 0 0 1 3.6 14.55c1-.5 2.038-.883 3.113-1.15 1.074-.267 2.17-.4 3.287-.4.417 0 .833.03 1.25.088.417.058.833.129 1.25.212v1.575c-.75.367-1.354.85-1.813 1.45-.458.6-.687 1.383-.687 2.35V20H2Zm10 0v-1.4c0-.4.104-.77.313-1.113a1.76 1.76 0 0 1 .887-.737c.6-.25 1.22-.438 1.863-.563a10.11 10.11 0 0 1 3.874 0 9.604 9.604 0 0 1 1.863.563c.383.15.68.396.887.738.209.341.313.712.313 1.112V20H12Zm5-5c-.7 0-1.292-.242-1.775-.725-.483-.483-.725-1.075-.725-1.775s.242-1.292.725-1.775C15.708 10.242 16.3 10 17 10s1.292.242 1.775.725c.483.483.725 1.075.725 1.775s-.242 1.292-.725 1.775C18.292 14.758 17.7 15 17 15Zm-7-3c-1.1 0-2.042-.392-2.825-1.175C6.392 10.042 6 9.1 6 8s.392-2.042 1.175-2.825C7.958 4.392 8.9 4 10 4s2.042.392 2.825 1.175C13.608 5.958 14 6.9 14 8s-.392 2.042-1.175 2.825C12.042 11.608 11.1 12 10 12Z"/></svg>
`;function Rn(e,t,n){let r=document.createElement(`form`);r.method=e,r.style.visibility=`hidden`,r.action=t,Object.keys(n).forEach(e=>{let t=document.createElement(`input`);t.type=`hidden`,t.name=e,t.value=n[e],r.appendChild(t)}),document.body.appendChild(r),r.submit()}function*zn(e,t){if(e!==void 0){let n=0;for(let r of e)yield t(r,n++)}}var Bn=class extends b{constructor(...e){super(...e),this.availableSubstitutions=[],this.activeSubstitution=null,this.open=!1}static{this.styles=[x,t`
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
    `]}get displayedSubstitutions(){return this.availableSubstitutions.filter(e=>!this.activeSubstitution||e.Id===this.activeSubstitution.Id)}handleSubstitutionClick(e,t){e.preventDefault(),this.dispatchEvent(new CustomEvent(`bkdsubstitutionstart`,{detail:{substitution:t},composed:!0,bubbles:!0}))}handleStopClick(){this.dispatchEvent(new CustomEvent(`bkdsubstitutionstop`,{composed:!0,bubbles:!0}))}handleCloseClick(){this.dispatchEvent(new CustomEvent(`bkdclose`))}renderSubstitution(e){return f`
      <li role="presentation" class=${D({active:e.Id===this.activeSubstitution?.Id})}>
        <a
          role="menuitem"
          href="#"
          @click=${t=>this.handleSubstitutionClick(t,e)}
          >${e.Holder}</a
        >
      </li>
    `}render(){if(this.open)return f`
      <ul role="menu" id="substitutions-menu">
        <li role="presentation" class="dropdown-menu-header">
          <button
            role="menuitem"
            class="dropdown-menu-close"
            @click=${this.handleCloseClick.bind(this)}
          >
            <img src="icons/close.svg" alt=${v(`Schliessen`)} />
          </button>
          <div class="dropdown-menu-heading">
            ${v(`Stellvertretung ausüben`)}
          </div>
        </li>
        ${zn(this.displayedSubstitutions,this.renderSubstitution.bind(this))}
        ${c(this.activeSubstitution,()=>f`<li role="presentation" class="dropdown-menu-stop">
              <button role="menuitem" @click=${this.handleStopClick.bind(this)}>
                ${v(`Stellvertretung beenden`)}
              </button>
            </li>`)}
      </ul>
    `}};C([T()],Bn.prototype,`availableSubstitutions`,void 0),C([T()],Bn.prototype,`activeSubstitution`,void 0),C([T()],Bn.prototype,`open`,void 0),Bn=C([d(`bkd-substitutions-dropdown`),g()],Bn);var Vn=class extends b{static{this.styles=[x,t`
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
    `]}constructor(){super(),this.availableSubstitutions=[],this.activeSubstitution=null,this.dropdown=new it(this,{queryToggleElement:()=>this.toggleElement??null,queryMenuElement:()=>this.menuElement?.shadowRoot??null,tabInside:!this.isLargeScreen(),queryItems:()=>this.menuElement?.shadowRoot?.querySelectorAll(`a[role='menuitem']`)??null,queryFocused:()=>this.menuElement?.shadowRoot?.activeElement??null}),new l(this,w)}connectedCallback(){super.connectedCallback(),this.fetch()}async fetch(){let e=await k();this.availableSubstitutions=e.filter(e=>this.isNotInFuture(e)).sort((e,t)=>e.Holder.localeCompare(t.Holder));let t=this.getActiveSubstitutionId();this.activeSubstitution=this.availableSubstitutions.find(e=>e.Id===t)??null}isNotInFuture(e){return!!e.DateFrom&&new Date(e.DateFrom)<=new Date}getActiveSubstitutionId(){return a.accessTokenPayload?.substitutionId??null}toggle(e){e.preventDefault(),this.activeSubstitution&&this.isLargeScreen()?this.stopSubstitution():this.dropdown.toggle()}isLargeScreen(){return window.innerWidth>1200}startSubstitution(e){this.activeSubstitution||this.redirect(e,`start`)}stopSubstitution(){this.activeSubstitution&&this.redirect(this.activeSubstitution,`stop`)}redirect(e,t){let{oAuthServer:n,oAuthPrefix:i}=r();Rn(`POST`,`${n}/${i}/Authorization/Substitutions/${e.Id}/${t}`,{access_token:a.accessToken??``,redirect_uri:pe(`home`)})}handleSubstitutionStart(e){this.dropdown.close(),this.startSubstitution(e.detail.substitution)}handleSubstitutionStop(){this.dropdown.close(),this.stopSubstitution()}getLabel(){return this.activeSubstitution?.Holder||v(`Stellvertretung ausüben`)}isAllowed(){return w.app.scope===`Tutoring`}render(){if(!(!this.isAllowed()||this.availableSubstitutions.length===0))return f`
      <button
        class=${D({active:!!this.activeSubstitution,open:this.dropdown.open})}
        @click=${this.toggle.bind(this)}
        aria-label=${this.getLabel()}
        aria-expanded=${this.dropdown.open}
        aria-haspopup="menu"
      >
        <div class="icon">${V(Ln)}</div>
        <div class="label">${this.getLabel()}</div>
        <div class="icon-caret">
          ${V(this.activeSubstitution?In:Fn)}
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
    `}};C([j(`button`)],Vn.prototype,`toggleElement`,void 0),C([j(`bkd-substitutions-dropdown`)],Vn.prototype,`menuElement`,void 0),C([ee()],Vn.prototype,`availableSubstitutions`,void 0),C([ee()],Vn.prototype,`activeSubstitution`,void 0),Vn=C([d(`bkd-substitutions-toggle`),g()],Vn);var Hn=class extends b{static{this.styles=[x,t`
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
    `]}constructor(){super(),this.dropdown=new it(this,{queryToggleElement:()=>this.toggleElement??null,queryMenuElement:()=>this.menuElement??null,queryItems:()=>this.shadowRoot?.querySelectorAll(`a[role='menuitem']`)??null,queryFocused:()=>this.shadowRoot?.activeElement??null}),new l(this,w)}handleSettingsItemClick(e,t){this.dropdown.close(),this.dispatchEvent(new CustomEvent(`bkdsettingsitemclick`,{detail:{item:t,event:e},composed:!0,bubbles:!0}))}renderSettingsItem(e){return f`<li role="presentation">
      <a
        role="menuitem"
        href=${e.href}
        target=${e.external?`_blank`:`_self`}
        @click=${t=>this.handleSettingsItemClick(t,e)}
      >
        ${e.label}</a
      >
      ${e.img?f`<img src=${e.img} alt="" width="24" height="24" />`:y}
    </li>`}render(){return f`
      <button
        type="button"
        @click=${()=>this.dropdown.toggle()}
        aria-label=${v(`Menü Benutzereinstellungen`)}
        aria-expanded=${this.dropdown.open}
        aria-haspopup="menu"
      >
        <img src="/icons/settings.svg" alt="" width="32" height="32" />
      </button>
      <ul role="menu" ?hidden=${!this.dropdown.open}>
        ${zn(ct(w.locale),this.renderSettingsItem.bind(this))}
      </ul>
    `}};C([j(`button`)],Hn.prototype,`toggleElement`,void 0),C([j(`ul[role="menu"]`)],Hn.prototype,`menuElement`,void 0),Hn=C([d(`bkd-user-settings`),g()],Hn);var Un=class extends b{static{this.styles=[x,t`
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
    `]}constructor(){super(),this.mobileNavOpen=!1,new l(this,w)}render(){return f`
      <nav role="navigation" aria-label=${v(`Servicenavigation`)}>
        <bkd-substitutions-toggle></bkd-substitutions-toggle>
        <bkd-notifications-toggle></bkd-notifications-toggle>
        <bkd-user-settings></bkd-user-settings>
        ${c(w.allowedLocales.length>1,()=>f`<bkd-language-switcher></bkd-language-switcher>`)}
        <bkd-hamburger .open=${this.mobileNavOpen}></bkd-hamburger>
      </nav>
    `}};C([T()],Un.prototype,`mobileNavOpen`,void 0),Un=C([d(`bkd-service-nav`),g()],Un);var Wn=class extends b{static{this.styles=[x,t`
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
    `]}constructor(){super(),this.mobileNav=new it(this,{queryToggleElement:()=>this.serviceNavElement?.shadowRoot?.querySelector(`bkd-hamburger`)??null,queryMenuElement:()=>this.mobileNavElement?.shadowRoot??null,tabInside:!0}),new l(this,w)}handleLogoClick(e){e.preventDefault(),w.navigationItemKey=_.navigationHome.key,w.appPath=_.navigationHome.appPath}handleNavItemClick(e){let{item:t}=e.detail;w.navigationItemKey=t.key,this.mobileNav.close()}handleSettingsItemClick(e){let{item:t,event:n}=e.detail;t.external||(n.preventDefault(),t.key===`logout`?this.dispatchEvent(new CustomEvent(`bkdlogout`,{composed:!0,bubbles:!0})):w.navigationItemKey=t.key),this.mobileNav.close()}render(){return f`
      <header role="banner">
        <a
          class="logo"
          href=${pe(`home`)}
          @click=${this.handleLogoClick.bind(this)}
          ><img src="logo.svg" alt=${v(`Evento Startseite`)}
        /></a>
        <div class="logo-caption">${w.instanceName}</div>
        ${c(navigator.onLine,()=>f`<bkd-service-nav
              .mobileNavOpen=${this.mobileNav.open}
              @bkdhamburgertoggle=${()=>this.mobileNav.toggle()}
              @bkdsettingsitemclick=${this.handleSettingsItemClick.bind(this)}
            ></bkd-service-nav> `)}
        ${c(navigator.onLine,()=>f` <bkd-nav
              @bkdnavitemclick=${this.handleNavItemClick.bind(this)}
            ></bkd-nav>`)}
        ${c(this.mobileNav.open,()=>f`<bkd-mobile-nav
              @bkdnavitemclick=${this.handleNavItemClick.bind(this)}
              @bkdsettingsitemclick=${this.handleSettingsItemClick.bind(this)}
            ></bkd-mobile-nav>`)}
      </header>
    `}};C([j(`bkd-service-nav`)],Wn.prototype,`serviceNavElement`,void 0),C([j(`bkd-mobile-nav`)],Wn.prototype,`mobileNavElement`,void 0),Wn=C([d(`bkd-header`),g()],Wn);var Gn=Ue(),Kn=(async function(){await R(Gn,se(),m()),w.init()})();O(t`
    ${ge}
    :root {
      ${ue}
    }
  `.toString());var qn=class extends b{static{this.styles=[x,t`
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
    `]}constructor(){super(),this.authReady=!1,this.subscriptions=[],this.handleMessage=({data:e,origin:t})=>{if(t===window.location.origin)switch(e.type){case`bkdAppPushState`:{let t=e.args[2];this.updateUrlAndNavigationState(t,!1);break}case`bkdAppReplaceState`:{let t=e.args[2];be(fe(t),!0);break}case`bkdAppHashChange`:{let{url:t}=e;be(fe(t));break}}},Kn.then(()=>this.authReady=!0),new l(this,w)}connectedCallback(){super.connectedCallback(),w.initialized.then(()=>setTimeout(()=>{a.scope!==w.app.scope&&z(Gn,w.app.scope,w.locale)})),this.subscriptions.push(w.subscribeScopeAndLocale((e,t)=>z(Gn,e,t),!0)),this.subscriptions.push(w.subscribeInstanceName(this.updateTitle.bind(this))),this.subscriptions.push(w.subscribeNavigationItem(this.updateTitle.bind(this))),window.addEventListener(`message`,this.handleMessage),w.actualAppPath=new URL(location.href).hash,window.addEventListener(`hashchange`,this.handleHashChange)}disconnectedCallback(){super.disconnectedCallback(),this.subscriptions.forEach(e=>e()),window.removeEventListener(`message`,this.handleMessage),window.removeEventListener(`hashchange`,this.handleHashChange)}updateTitle(){let{instanceName:e,navigationItem:t}=w,n=t?.label&&t?.key!==_.navigationHome.key;document.title=n?[t?.label,e].join(` ― `):e}updateUrlAndNavigationState(e,t){let n=fe(e);be(n,t);let r=xe(w.navigation,n);r?.item?.key&&r.item.key!==w.navigationItemKey?(w.actualAppPath=n,w.navigationItemKey=r.item.key):w.appPath=n}handleHashChange(e){w.appPath=new URL(e.newURL).hash}handleLogout(){Ge(Gn)}render(){return f`
      ${c(this.authReady&&a.authenticated,()=>f`
          <bkd-header @bkdlogout=${this.handleLogout.bind(this)}></bkd-header>
          <bkd-content></bkd-content>
          <bkd-footer></bkd-footer>
        `)}
    `}};C([ee()],qn.prototype,`authReady`,void 0),qn=C([d(`bkd-portal`),g()],qn);