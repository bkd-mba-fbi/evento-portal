import{f as gi,u as bi,_ as vi,t as m,g as wi,T as yi,a as In,b as Je,c as ki,i as Ti,d as Ht,e as _i,h as jt,s as Ei,p as u,j as Ai,k as te,l as Oe,m as vn,L as Si,n as xi,o as Rn,q as Ln,E as Ie,r as Ci,v as P,w as R,x as D,S as K,y as h,z as Oi,A as b,B as Y,C as N,D as $,F as Ii,G as Ri,H as Li,I as fe,J as pe,K as wn,M as Pi,N as Di,O as Ni,P as $i,Q as Mi,R as Ui,U as zi,V as At,W as St,X as Fi}from"./LanguageSwitcher-Csf5yWOV.js";const Hi={attribute:!0,type:String,converter:bi,reflect:!1,hasChanged:gi},ji=(t=Hi,e,n)=>{const{kind:i,metadata:o}=n;let s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),i==="setter"&&((t=Object.create(t)).wrapped=!0),s.set(n.name,t),i==="accessor"){const{name:a}=n;return{set(p){const T=e.get.call(this);e.set.call(this,p),this.requestUpdate(a,T,t)},init(p){return p!==void 0&&this.C(a,void 0,t,p),p}}}if(i==="setter"){const{name:a}=n;return function(p){const T=this[a];e.call(this,p),this.requestUpdate(a,T,t)}}throw Error("Unsupported decorator location: "+i)};function M(t){return(e,n)=>typeof n=="object"?ji(t,e,n):((i,o,s)=>{const a=o.hasOwnProperty(s);return o.constructor.createProperty(s,i),a?Object.getOwnPropertyDescriptor(o,s):void 0})(t,e,n)}function be(t){return M({...t,state:!0,attribute:!1})}const Gi=(t,e,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,n),n);function j(t,e){return(n,i,o)=>{const s=a=>a.renderRoot?.querySelector(t)??null;return Gi(n,i,{get(){return s(this)}})}}class Gt extends Error{constructor(e,n){super(e),this.oauth2Code=n}}class qi extends Gt{constructor(e,n,i,o){super(e,n),this.httpCode=i.status,this.response=i,this.parsedBody=o}}class Bi{constructor(e){this.client=e}async getAuthorizeUri(e){const[n,i]=await Promise.all([e.codeVerifier?Vi(e.codeVerifier):void 0,this.client.getEndpoint("authorizationEndpoint")]),o=new URLSearchParams({client_id:this.client.settings.clientId,response_type:"code",redirect_uri:e.redirectUri});if(n&&(o.set("code_challenge_method",n[0]),o.set("code_challenge",n[1])),e.state&&o.set("state",e.state),e.scope&&o.set("scope",e.scope.join(" ")),e.resource)for(const s of[].concat(e.resource))o.append("resource",s);if(e.responseMode&&e.responseMode!=="query"&&o.append("response_mode",e.responseMode),e.extraParams)for(const[s,a]of Object.entries(e.extraParams)){if(o.has(s))throw new Error(`Property in extraParams would overwrite standard property: ${s}`);o.set(s,a)}return i+"?"+o.toString()}async getTokenFromCodeRedirect(e,n){const{code:i}=this.validateResponse(e,{state:n.state});return this.getToken({code:i,redirectUri:n.redirectUri,codeVerifier:n.codeVerifier})}validateResponse(e,n){e=new URL(e);let i=e.searchParams;if(!i.has("code")&&!i.has("error")&&e.hash.length>0&&(i=new URLSearchParams(e.hash.slice(1))),i.has("error"))throw new Gt(i.get("error_description")??"OAuth2 error",i.get("error"));if(!i.has("code"))throw new Error(`The url did not contain a code parameter ${e}`);if(n.state&&n.state!==i.get("state"))throw new Error(`The "state" parameter in the url did not match the expected value of ${n.state}`);return{code:i.get("code"),scope:i.has("scope")?i.get("scope").split(" "):void 0}}async getToken(e){const n={grant_type:"authorization_code",code:e.code,redirect_uri:e.redirectUri,code_verifier:e.codeVerifier,resource:e.resource};return this.client.tokenResponseToOAuth2Token(this.client.request("tokenEndpoint",n))}}async function Wi(){const t=await Pn(),e=new Uint8Array(32);return t.getRandomValues(e),Dn(e)}async function Vi(t){const e=await Pn();return["S256",Dn(await e.subtle.digest("SHA-256",Xi(t)))]}async function Pn(){var t;if(typeof window<"u"&&window.crypto){if(!((t=window.crypto.subtle)!=null&&t.digest))throw new Error("The context/environment is not secure, and does not support the 'crypto.subtle' module. See: https://developer.mozilla.org/en-US/docs/Web/API/Crypto/subtle for details");return window.crypto}return typeof self<"u"&&self.crypto?self.crypto:(await Promise.resolve().then(()=>Zi)).webcrypto}function Xi(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n)&255;return e}function Dn(t){return btoa(String.fromCharCode(...new Uint8Array(t))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}class Yi{constructor(e){this.serverMetadata=null,e!=null&&e.fetch||(e.fetch=fetch.bind(globalThis)),this.settings=e}async refreshToken(e,n){if(!e.refreshToken)throw new Error("This token didn't have a refreshToken. It's not possible to refresh this");const i={grant_type:"refresh_token",refresh_token:e.refreshToken};this.settings.clientSecret||(i.client_id=this.settings.clientId),n!=null&&n.scope&&(i.scope=n.scope.join(" ")),n!=null&&n.resource&&(i.resource=n.resource);const o=await this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",i));return!o.refreshToken&&e.refreshToken&&(o.refreshToken=e.refreshToken),o}async clientCredentials(e){var n;const i=["client_id","client_secret","grant_type","scope"];if(e!=null&&e.extraParams&&Object.keys(e.extraParams).filter(s=>i.includes(s)).length>0)throw new Error(`The following extraParams are disallowed: '${i.join("', '")}'`);const o={grant_type:"client_credentials",scope:(n=e?.scope)==null?void 0:n.join(" "),resource:e?.resource,...e?.extraParams};if(!this.settings.clientSecret)throw new Error("A clientSecret must be provided to use client_credentials");return this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",o))}async password(e){var n;const i={grant_type:"password",...e,scope:(n=e.scope)==null?void 0:n.join(" ")};return this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",i))}get authorizationCode(){return new Bi(this)}async introspect(e){const n={token:e.accessToken,token_type_hint:"access_token"};return this.request("introspectionEndpoint",n)}async revoke(e,n="access_token"){let i=e.accessToken;n==="refresh_token"&&(i=e.refreshToken);const o={token:i,token_type_hint:n};return this.request("revocationEndpoint",o)}async getEndpoint(e){if(this.settings[e]!==void 0)return Z(this.settings[e],this.settings.server);if(e!=="discoveryEndpoint"&&(await this.discover(),this.settings[e]!==void 0))return Z(this.settings[e],this.settings.server);if(!this.settings.server)throw new Error(`Could not determine the location of ${e}. Either specify ${e} in the settings, or the "server" endpoint to let the client discover it.`);switch(e){case"authorizationEndpoint":return Z("/authorize",this.settings.server);case"tokenEndpoint":return Z("/token",this.settings.server);case"discoveryEndpoint":return Z("/.well-known/oauth-authorization-server",this.settings.server);case"introspectionEndpoint":return Z("/introspect",this.settings.server);case"revocationEndpoint":return Z("/revoke",this.settings.server)}}discover(){return this.discoveryPromise===void 0&&(this.discoveryPromise=this.doDiscover()),this.discoveryPromise}async doDiscover(){var e;let n;try{n=await this.getEndpoint("discoveryEndpoint")}catch{console.warn('[oauth2] OAuth2 discovery endpoint could not be determined. Either specify the "server" or "discoveryEndpoint');return}const i=await this.settings.fetch(n,{headers:{Accept:"application/json"}});if(!i.ok)return;if(!((e=i.headers.get("Content-Type"))!=null&&e.startsWith("application/json"))){console.warn("[oauth2] OAuth2 discovery endpoint was not a JSON response. Response is ignored");return}this.serverMetadata=await i.json();const o=[["authorization_endpoint","authorizationEndpoint"],["token_endpoint","tokenEndpoint"],["introspection_endpoint","introspectionEndpoint"],["revocation_endpoint","revocationEndpoint"]];if(this.serverMetadata!==null){for(const[s,a]of o)this.serverMetadata[s]&&(this.settings[a]=Z(this.serverMetadata[s],n));if(this.serverMetadata.token_endpoint_auth_methods_supported&&!this.settings.authenticationMethod){for(const s of this.serverMetadata.token_endpoint_auth_methods_supported)if(s==="client_secret_basic"||s==="client_secret_post"){this.settings.authenticationMethod=s;break}}}}async request(e,n){const i=await this.getEndpoint(e),o={"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json"};let s=this.settings.authenticationMethod;switch(this.settings.clientSecret||(s="client_secret_post"),s||(s="client_secret_basic_interop"),s){case"client_secret_basic":o.Authorization="Basic "+btoa(yn(this.settings.clientId)+":"+yn(this.settings.clientSecret));break;case"client_secret_basic_interop":o.Authorization="Basic "+btoa(this.settings.clientId.replace(/:/g,"%3A")+":"+this.settings.clientSecret.replace(/:/g,"%3A"));break;case"client_secret_post":n.client_id=this.settings.clientId,this.settings.clientSecret&&(n.client_secret=this.settings.clientSecret);break;default:throw new Error("Authentication method not yet supported:"+s+". Open a feature request if you want this!")}const a=await this.settings.fetch(i,{method:"POST",body:Ki(n),headers:o});let p;if(a.status!==204&&a.headers.has("Content-Type")&&a.headers.get("Content-Type").match(/^application\/(.*\+)?json/)&&(p=await a.json()),a.ok)return p;let T,U;throw p!=null&&p.error?(T="OAuth2 error "+p.error+".",p.error_description&&(T+=" "+p.error_description),U=p.error):(T="HTTP Error "+a.status+" "+a.statusText,a.status===401&&this.settings.clientSecret&&(T+=". It's likely that the clientId and/or clientSecret was incorrect"),U=null),new qi(T,U,a,p)}async tokenResponseToOAuth2Token(e){const n=await e;if(!(n!=null&&n.access_token))throw console.warn("Invalid OAuth2 Token Response: ",n),new TypeError("We received an invalid token response from an OAuth2 server.");const{access_token:i,refresh_token:o,expires_in:s,id_token:a,scope:p,token_type:T,...U}=n,re={accessToken:i,expiresAt:s?Date.now()+s*1e3:null,refreshToken:o??null};return a&&(re.idToken=a),p&&(re.scope=p.split(" ")),Object.keys(U).length>0&&(re.extraParams=U),re}}function Z(t,e){return new URL(t,e).toString()}function Ki(t){const e=new URLSearchParams;for(const[n,i]of Object.entries(t))if(Array.isArray(i))for(const o of i)e.append(n,o);else i!==void 0&&e.set(n,i.toString());return e.toString()}function yn(t){return encodeURIComponent(t).replace(/%20/g,"+").replace(/[-_.!~*'()]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)}const Zi=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));async function Qi(t){const e=await Ji();return["S256",to(await e.subtle.digest("SHA-256",eo(t)))]}async function Ji(){var t;if(typeof window<"u"&&window.crypto){if(!(!((t=window.crypto.subtle)===null||t===void 0)&&t.digest))throw new Error("The context/environment is not secure, and does not support the 'crypto.subtle' module. See: https://developer.mozilla.org/en-US/docs/Web/API/Crypto/subtle for details");return window.crypto}return typeof self<"u"&&self.crypto?self.crypto:(await vi(()=>import("./__vite-browser-external-BIHI7g3E.js"),[])).webcrypto}function eo(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n)&255;return e}function to(t){return btoa(String.fromCharCode(...new Uint8Array(t))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function no(t){const e=new URLSearchParams;for(const[n,i]of Object.entries(t))if(Array.isArray(i))for(const o of i)e.append(n,o);else i!==void 0&&e.set(n,i.toString());return e.toString()}function io(...t){}var Nn=(t=>(t.Refresh="refresh",t.Access="access",t))(Nn||{});const Ce={refresh:void 0,access:void 0};function oo({renewRefreshToken:t,renewAccessToken:e}){Ve("refresh",m.refreshTokenPayload,t),m.onRefreshTokenUpdate(n=>Ve("refresh",n,t)),Ve("access",m.accessTokenPayload,e),m.onAccessTokenUpdate(n=>Ve("access",n,e))}function ro(){Object.values(Nn).forEach(t=>{Ce[t]&&clearTimeout(Ce[t])})}function Ve(t,e,n){if(Ce[t]&&clearTimeout(Ce[t]),!e)return;const i=wi(e),o=i-yi;if(i<=0)return;const s=o>0?o:Math.max(i+1e3,0);Ce[t]=setTimeout(()=>so(t,e,n),s)}function so(t,e,n){const{scope:i,locale:o}=e;ao(i,async()=>{const s=t==="access"?In(i):Je(i),a=s?ki(s):null;a&&(Ti(a)?await n(a.scope,a.locale):t==="access"?m.accessToken=s:m.refreshToken=s)})}function ao(t,e){navigator.locks.request(`bkdTokenRenewal_${t}`,async()=>{await e()})}const H=Ht();if(typeof H?.oAuthServer!="string")throw new Error("Invalid 'oAuthServer' setting");if(typeof H?.oAuthPrefix!="string")throw new Error("Invalid 'oAuthPrefix' setting");if(typeof H?.oAuthClientId!="string")throw new Error("Invalid 'clientId' setting");function lo(){return new Yi({server:H.oAuthServer,clientId:H.oAuthClientId,tokenEndpoint:`${H.oAuthPrefix}/Authorization/Token`,get authorizationEndpoint(){return ho()},fetch:(...t)=>fetch(...t)})}async function co(t,e,n){oo({renewRefreshToken:(a,p)=>Dt(t,a,p),renewAccessToken:(a,p)=>Dt(t,a,p)});const i=_i(),o=await fo(t,i);if(o){mo(o,i);return}const s=go();if(s){bo(s);return}await Pt(t,e,n)}async function Pt(t,e,n){if(po(e,n),Ai(m.refreshTokenPayload))return et(t,e,n);if(!m.accessToken)return Dt(t,e,n)}async function et(t,e,n,i=new URL(document.location.href)){i.searchParams.set(Si,n);const o=new URL(await t.getEndpoint("authorizationEndpoint")),s=await Wi();xi(s,i.toString());const[a,p]=await Qi(s);o.searchParams.set("clientId",t.settings.clientId),o.searchParams.set("redirectUrl",i.toString()),o.searchParams.set("culture_info",n),o.searchParams.set("application_scope",e),o.searchParams.set("response_type","code"),o.searchParams.set("code_challenge_method",a),o.searchParams.set("code_challenge",p),document.location.href=o.toString()}async function uo(t){const e=jt();if(!e)throw new Error("No instance available");const{accessToken:n,scope:i,locale:o}=m;if(!(!n||!i||!o))try{await wo(t,e,n)}catch(s){if(!(s instanceof SyntaxError))throw s}finally{m.resetAllTokens(),ro(),await et(t,i,o,new URL(te(Oe.navigationHome)))}}function ho(){const t=jt();return t?`${H.oAuthPrefix}/Authorization/${t}/Login`:`${H.oAuthPrefix}/Authorization/Login`}function po(t,e){if(vn(m.accessToken,t,e))return;const n=In(t);if(vn(n,t,e)){m.accessToken=n,m.refreshToken=Je(t);return}m.accessToken=null,m.refreshToken=Je(t)}async function fo(t,e){return new URLSearchParams(document.location.search).get("code")&&e?.redirectUri?await t.authorizationCode.getTokenFromCodeRedirect(document.location.href,{redirectUri:e.redirectUri,codeVerifier:e.codeVerifier}):null}function mo({refreshToken:t,accessToken:e},n){m.refreshToken=t,m.accessToken=e;const i=m.accessTokenPayload?.instanceId;i&&Ei(i),n?.redirectUri&&u.navigate(new URL(n.redirectUri))}function go(){const t=new URLSearchParams(document.location.search),e=t.get("access_token"),n=t.get("expires_in"),i=t.get("refresh_token");return e?{accessToken:e,expiresAt:n?Date.now()+parseInt(n,10)*1e3:null,refreshToken:i||null}:null}function bo(t){const{refreshToken:e,accessToken:n}=t;m.refreshToken=e,m.accessToken=n;const i=new URL(document.location.href);i.searchParams.delete("access_token"),i.searchParams.delete("expires_in"),i.searchParams.delete("refresh_token"),window.parent===window?history.replaceState({},"",i):window.parent.location.assign(i)}async function Dt(t,e,n){const i=jt(),o=Je(e);if(!i||!o)return et(t,e,n);try{const{refreshToken:s,accessToken:a}=await vo(t,i,e,n,o);io("Received renewed tokens"),m.refreshToken=s,m.accessToken=a}catch{return et(t,e,n)}}async function vo(t,e,n,i,o){const{access_token:s,refresh_token:a,expires_in:p}=await $n(t,`${H.oAuthPrefix}/Authorization/${e}/Token`,{refresh_token:o,grant_type:"refresh_token",client_id:H.oAuthClientId,culture_info:i,scope:n});return{accessToken:s,refreshToken:a,expiresAt:p?Date.now()+p*1e3:null}}function wo(t,e,n){return $n(t,`${H.oAuthPrefix}/Authorization/${e}/Logout`,{access_token:n})}async function $n(t,e,n){const i=new URL(e,t.settings.server).toString(),o={"Content-Type":"application/x-www-form-urlencoded"},s=await fetch(i,{method:"POST",body:n&&no(n),headers:o});if(s.ok)return await s.json();let a,p,T;throw s.headers.get("Content-Type")?.startsWith("application/json")&&(a=await s.json()),a?.error?(p="OAuth2 error "+a.error+".",a.error_description&&(p+=" "+a.error_description),T=a.error):(p="HTTP Error "+s.status+" "+s.statusText,T=null),new Gt(p,T)}const yo=Rn(class extends Ln{constructor(){super(...arguments),this.key=Ie}render(t,e){return this.key=t,e}update(t,[e,n]){return e!==this.key&&(Ci(t),this.key=e),n}});var ko=Object.defineProperty,To=Object.getOwnPropertyDescriptor,Mn=(t,e,n,i)=>{for(var o=i>1?void 0:i?To(e,n):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(o=(i?a(e,n,o):a(o))||o);return i&&o&&ko(e,n,o),o};let tt=class extends D{constructor(){super(),this.renderedOffline=!1,this.handleMessage=t=>{t.origin===window.location.origin&&t.data.type==="bkdAppResize"&&this.handleResize(t.data.height)},this.handleOnline=()=>{this.renderedOffline&&window.location.reload()},new K(this,u)}connectedCallback(){super.connectedCallback(),window.addEventListener("message",this.handleMessage),window.addEventListener("online",this.handleOnline)}disconnectedCallback(){window.removeEventListener("message",this.handleMessage),window.removeEventListener("online",this.handleOnline),super.disconnectedCallback()}handleResize(t){this.iframe&&(this.iframe.height=t)}renderAppIframe(){return h`${yo(u.app.root,h`
        <iframe
          id="app"
          title=${u.app.key}
          src=${`/${u.app.root}${u.appPath}`}
        ></iframe>
      `)}`}renderFooterContent(){return h`
      ${Oi(u.navigationItemKey,[["contact",()=>h`<bkd-contact></bkd-contact>`],["legal",()=>h`<bkd-legal></bkd-legal>`],["imprint",()=>h`<bkd-imprint></bkd-imprint>`]],()=>h``)}
    `}render(){return this.renderedOffline=!navigator.onLine,navigator.onLine?m.scope!==u.app.scope?h`<main role="main"></main>`:h`
      <main role="main">
        ${Y(u.app.heading,()=>h`<h1>${u.navigationItem.label}</h1>`)}
        ${Y(u.app.key==="footer",()=>this.renderFooterContent(),()=>this.renderAppIframe())}
      </main>
    `:h`<main role="main">
        <h1>${b("Offline")}</h1>
        <p>${b("Keine Verbindung vorhanden.")}</p>
      </main>`}};tt.styles=[P,R`
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
    `];Mn([j("iframe")],tt.prototype,"iframe",2);tt=Mn([N("bkd-content"),$()],tt);function nt(t,e){if(t===e||t.contains(e))return!0;if("shadowRoot"in t&&t.shadowRoot)return nt(t.shadowRoot,e);for(const n of Array.from(t.children))if(nt(n,e))return!0;return!1}class De{constructor(e,n){this.host=e,this.options=n,this.open=!1,this.closeOnBlur=i=>{this.menuElement&&"relatedTarget"in i&&(this.menuElement.contains(i.relatedTarget)||this.closeDeferred())},this.handleDocumentClick=i=>{const o=i.composedPath()[0];if(!o)return;const s=this.toggleElement&&!nt(this.toggleElement,o),a=this.menuElement&&!nt(this.menuElement,o);s&&a&&this.closeDeferred()},this.handleIframeClick=()=>{this.closeDeferred()},this.handleKeydown=i=>{switch(i.key){case"Tab":{this.options.tabInside||this.close();break}case"Escape":{this.close();break}case"ArrowDown":{this.items[this.nextLinkIndex(1)]?.focus();break}case"ArrowUp":{this.items[this.nextLinkIndex(-1)]?.focus();break}}},this.host.addController(this)}get toggleElement(){return this.options.queryToggleElement()}get menuElement(){return this.options.queryMenuElement()}get items(){const e=this.options?.queryItems&&this.options.queryItems();return Array.from(e??[])}get focusedItem(){return this.options?.queryFocused?this.options.queryFocused():null}hostDisconnected(){this.removeListeners()}toggle(){this.open=!this.open,this.host.requestUpdate(),this.open?this.addListeners():setTimeout(()=>{this.removeListeners()})}close(){this.open&&this.toggle()}closeDeferred(){setTimeout(()=>this.close())}addListeners(){setTimeout(()=>{this.options.tabInside&&this.menuElement?.addEventListener("focusout",this.closeOnBlur,!0),this.iframeDocument?.addEventListener("click",this.handleIframeClick,!0)}),document.addEventListener("click",this.handleDocumentClick,!0),this.host.addEventListener("keydown",this.handleKeydown,!0)}removeListeners(){this.options.tabInside&&this.menuElement?.removeEventListener("focusout",this.closeOnBlur,!0),document.removeEventListener("click",this.handleDocumentClick,!0),this.iframeDocument?.removeEventListener("click",this.handleIframeClick,!0),this.host.removeEventListener("keydown",this.handleKeydown,!0)}get iframeDocument(){return document.querySelector("bkd-portal")?.shadowRoot?.querySelector("bkd-content")?.shadowRoot?.querySelector("iframe")?.contentDocument??null}activeLinkIndex(){const e=this.focusedItem?this.items.indexOf(this.focusedItem):-1;return e===-1?null:e}nextLinkIndex(e){const n=this.activeLinkIndex(),i=0,o=this.items.length-1;if(n===null)return e>0?i:o;const s=n+e;return s>o?i:s<i?o:s}}class Nt extends Ln{constructor(e){if(super(e),this.it=Ie,e.type!==Ii.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===Ie||e==null)return this._t=void 0,this.it=e;if(e===Ri)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const n=[e];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}Nt.directiveName="unsafeHTML",Nt.resultType=1;const Q=Rn(Nt),_o=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="m22 15.975-1.775 1.775L12 9.525 3.775 17.75 2 15.975l10-10 10 10Z"/></svg>
`,Eo=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M2 8.025 3.775 6.25 12 14.475l8.225-8.225L22 8.025l-10 10-10-10Z"/></svg>
`;function Un(t){return[{key:"myProfile",label:b("Mein Profil"),href:te("myProfile")},{key:"mySettings",label:b("Einstellungen"),href:te("mySettings")},{key:"videos",label:b("Video-Tutorials"),href:t==="de-CH"?"https://www.youtube.com/playlist?list=PLLDtLiOuctbx-_EQWgWqTO1MRbX845OEf":"https://www.youtube.com/playlist?list=PLLDtLiOuctbyEegnquAkaW4u8cm62lFAU",img:"/icons/external-link.svg",external:!0},{key:"logout",label:b("Logout"),href:"#",img:"/icons/logout.svg"}]}var Ao=Object.defineProperty,So=Object.getOwnPropertyDescriptor,zn=(t,e,n,i)=>{for(var o=i>1?void 0:i?So(e,n):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(o=(i?a(e,n,o):a(o))||o);return i&&o&&Ao(e,n,o),o};let it=class extends D{constructor(){super(),this.openGroup=null,this.handleKeyup=t=>{t.key==="Tab"&&this.openGroupOfFocusedItem()},new K(this,u)}connectedCallback(){super.connectedCallback(),this.openGroupOfCurrentItem(),this.addEventListener("keyup",this.handleKeyup)}disconnectedCallback(){this.removeEventListener("keyup",this.handleKeyup),super.disconnectedCallback()}openGroupOfCurrentItem(){this.openGroup||(this.openGroup=u.navigationGroup)}openGroupOfFocusedItem(){const t=this.shadowRoot?.activeElement;if(t instanceof HTMLElement){const e=t.dataset.itemKey;if(e){const{group:n}=Li(Oe.navigation,e);n&&n.label!==this.openGroup?.label&&(this.openGroup=n)}}}handleGroupClick(t,e){t.preventDefault(),this.openGroup=e.label!==this.openGroup?.label?e:null}handleNavItemClick(t,e){t.preventDefault(),this.dispatchEvent(new CustomEvent("bkdnavitemclick",{detail:{item:e},composed:!0,bubbles:!0}))}handleSettingsItemClick(t,e){this.dispatchEvent(new CustomEvent("bkdsettingsitemclick",{detail:{item:e,event:t},composed:!0,bubbles:!0}))}renderGroup(t){const e=t.label===this.openGroup?.label;return h`
      <li
        class=${fe({group:!0,open:e})}
        aria-expanded=${e}
      >
        <button
          class="group-header"
          tabindex="-1"
          @click=${n=>this.handleGroupClick(n,t)}
        >
          <label> ${t.label} </label>
          ${Q(e?_o:Eo)}
        </button>
        <ul class="items">
          ${pe(t.items,n=>n.label,this.renderNavItem.bind(this))}
        </ul>
      </li>
    `}renderNavItem(t){const e=t.key===u.navigationItemKey;return h`
      <li
        class=${fe({item:!0,active:e})}
      >
        <a
          href=${te(t)}
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
      ${t.img?h`<img src=${t.img} alt="" width="24" height="24" />`:Ie}
    </li>`}render(){return h`
      <nav role="navigation" aria-label=${b("Mobile Navigation")}>
        <ul class="nav">
          ${pe(u.navigation,t=>t.label,this.renderGroup.bind(this))}
        </ul>
        <div class="service-nav">
          <ul>
            ${pe(Un(u.locale),t=>t.key,this.renderSettingsItem.bind(this))}
          </ul>
          ${Y(u.allowedLocales.length>1,()=>h`<bkd-language-switcher></bkd-language-switcher>`)}
        </div>
      </nav>
    `}};it.styles=[P,R`
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
    `];zn([be()],it.prototype,"openGroup",2);it=zn([N("bkd-mobile-nav"),$()],it);var xo=Object.defineProperty,Co=Object.getOwnPropertyDescriptor,qt=(t,e,n,i)=>{for(var o=i>1?void 0:i?Co(e,n):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(o=(i?a(e,n,o):a(o))||o);return i&&o&&xo(e,n,o),o};let Re=class extends D{constructor(){super(),this.open=!1,new K(this,u)}handleItemClick(t,e){t.preventDefault(),this.dispatchEvent(new CustomEvent("bkdnavitemclick",{detail:{item:e},composed:!0,bubbles:!0}))}renderItem(t){const e=t.key===u.navigationItemKey;return h`
      <li role="presentation" class=${fe({active:e})}>
        <a
          role="menuitem"
          href=${te(t)}
          @click=${n=>this.handleItemClick(n,t)}
          >${t.label}</a
        >
      </li>
    `}render(){if(!(!this.group||!this.open))return h`
      <ul role="menu">
        ${pe(this.group.items,t=>t.key,this.renderItem.bind(this))}
      </ul>
    `}};Re.styles=[P,R`
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
    `];qt([M()],Re.prototype,"group",2);qt([M()],Re.prototype,"open",2);Re=qt([N("bkd-nav-group-dropdown"),$()],Re);var Oo=Object.defineProperty,Io=Object.getOwnPropertyDescriptor,Ne=(t,e,n,i)=>{for(var o=i>1?void 0:i?Io(e,n):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(o=(i?a(e,n,o):a(o))||o);return i&&o&&Oo(e,n,o),o};let ne=class extends D{constructor(){super(...arguments),this.dropdown=new De(this,{queryToggleElement:()=>this.toggleElement??null,queryMenuElement:()=>this.menuElement?.shadowRoot?.querySelector('ul[role="menu"]')??null,queryItems:()=>this.menuElement?.shadowRoot?.querySelectorAll("a[role='menuitem']")??null,queryFocused:()=>this.menuElement?.shadowRoot?.activeElement??null})}toggle(t){t.preventDefault(),this.dropdown.toggle()}handleItemClick(){this.dropdown.close()}render(){if(this.group)return h`
      <a
        href="#"
        @click=${this.toggle.bind(this)}
        class=${fe({active:!!this.active})}
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
    `}};ne.styles=[P,R`
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
    `];Ne([M()],ne.prototype,"group",2);Ne([M({type:Boolean})],ne.prototype,"active",2);Ne([j("a")],ne.prototype,"toggleElement",2);Ne([j("bkd-nav-group-dropdown")],ne.prototype,"menuElement",2);ne=Ne([N("bkd-nav-group-toggle"),$()],ne);var Ro=Object.getOwnPropertyDescriptor,Lo=(t,e,n,i)=>{for(var o=i>1?void 0:i?Ro(e,n):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(o=a(o)||o);return o};let $t=class extends D{constructor(){super(),new K(this,u)}renderGroupToggle(t,e){return h`
      <bkd-nav-group-toggle
        .group=${t}
        ?active=${e}
      ></bkd-nav-group-toggle>
    `}render(){return h`<nav role="navigation" aria-label=${b("Hauptnavigation")}>
      ${pe(u.navigation,t=>t.label,t=>this.renderGroupToggle(t,t.label===u.navigationGroup?.label))}
    </nav>`}};$t.styles=[P,R`
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
    `];$t=Lo([N("bkd-nav"),$()],$t);var Po=Object.defineProperty,Do=Object.getOwnPropertyDescriptor,Fn=(t,e,n,i)=>{for(var o=i>1?void 0:i?Do(e,n):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(o=(i?a(e,n,o):a(o))||o);return i&&o&&Po(e,n,o),o};let ot=class extends D{constructor(){super(...arguments),this.open=!1}toggle(){this.dispatchEvent(new CustomEvent("bkdhamburgertoggle",{bubbles:!0,composed:!0}))}render(){const t=this.open?"/icons/close.svg":"/icons/hamburger.svg";return h`
      <button
        class="hamburger"
        aria-expanded=${this.open}
        aria-label=${b("Menü")}
        @click=${this.toggle.bind(this)}
      >
        <img src=${t} alt="" width="32" height="32" />
      </button>
    `}};ot.styles=[P,R`
      :host {
        display: flex;
      }

      button {
        background: transparent;
        border: none;
        cursor: pointer;
      }
    `];Fn([M()],ot.prototype,"open",2);ot=Fn([N("bkd-hamburger"),$()],ot);const No='<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path fill="currentColor" d="M16 2a2.25 2.25 0 0 0-2.25 2.25v1.043C9.87 6.293 7 9.807 7 14v7.5h18V14c0-4.193-2.87-7.707-6.75-8.707V4.25A2.25 2.25 0 0 0 16 2M4 24.5v3h9.404A3 3 0 1 0 19 29a3 3 0 0 0-.407-1.5H28v-3z"/></svg>',$o='<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" preserveAspectRatio="xMidYMid" style="margin:auto;background:#fff 0 0;display:block;shape-rendering:auto" viewBox="0 0 100 100"><g transform="translate(82 50)"><circle r="6"><animateTransform attributeName="transform" begin="-0.8571428571428571s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.8571428571428571s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(51.429 -42.913 110.137)"><circle r="6" fill-opacity=".857"><animateTransform attributeName="transform" begin="-0.7142857142857143s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.7142857142857143s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(102.857 -10.937 57.696)"><circle r="6" fill-opacity=".714"><animateTransform attributeName="transform" begin="-0.5714285714285714s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.5714285714285714s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(154.286 3.294 34.358)"><circle r="6" fill-opacity=".571"><animateTransform attributeName="transform" begin="-0.42857142857142855s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.42857142857142855s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(-154.286 14.706 15.642)"><circle r="6" fill-opacity=".429"><animateTransform attributeName="transform" begin="-0.2857142857142857s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.2857142857142857s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(-102.857 28.937 -7.696)"><circle r="6" fill-opacity=".286"><animateTransform attributeName="transform" begin="-0.14285714285714285s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.14285714285714285s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(-51.429 60.913 -60.137)"><circle r="6" fill-opacity=".143"><animateTransform attributeName="transform" begin="0s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="0s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g></svg>',Mo='<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path fill="currentColor" d="m13 3-1.333 1.333H5V7h21.333V4.333h-6.666L18.333 3zM6.333 9.667V27c0 1.467 1.2 2.667 2.667 2.667h13.333C23.8 29.667 25 28.467 25 27V9.667z"/></svg>';const{entries:Hn,setPrototypeOf:kn,isFrozen:Uo,getPrototypeOf:zo,getOwnPropertyDescriptor:Fo}=Object;let{freeze:O,seal:z,create:Mt}=Object,{apply:Ut,construct:zt}=typeof Reflect<"u"&&Reflect;O||(O=function(e){return e});z||(z=function(e){return e});Ut||(Ut=function(e,n){for(var i=arguments.length,o=new Array(i>2?i-2:0),s=2;s<i;s++)o[s-2]=arguments[s];return e.apply(n,o)});zt||(zt=function(e){for(var n=arguments.length,i=new Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];return new e(...i)});const Xe=I(Array.prototype.forEach),Ho=I(Array.prototype.lastIndexOf),Tn=I(Array.prototype.pop),_e=I(Array.prototype.push),jo=I(Array.prototype.splice),Ke=I(String.prototype.toLowerCase),xt=I(String.prototype.toString),Ct=I(String.prototype.match),Ee=I(String.prototype.replace),Go=I(String.prototype.indexOf),qo=I(String.prototype.trim),F=I(Object.prototype.hasOwnProperty),C=I(RegExp.prototype.test),Ae=Bo(TypeError);function I(t){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var n=arguments.length,i=new Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];return Ut(t,e,i)}}function Bo(t){return function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return zt(t,n)}}function f(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ke;kn&&kn(t,null);let i=e.length;for(;i--;){let o=e[i];if(typeof o=="string"){const s=n(o);s!==o&&(Uo(e)||(e[i]=s),o=s)}t[o]=!0}return t}function Wo(t){for(let e=0;e<t.length;e++)F(t,e)||(t[e]=null);return t}function B(t){const e=Mt(null);for(const[n,i]of Hn(t))F(t,n)&&(Array.isArray(i)?e[n]=Wo(i):i&&typeof i=="object"&&i.constructor===Object?e[n]=B(i):e[n]=i);return e}function Se(t,e){for(;t!==null;){const i=Fo(t,e);if(i){if(i.get)return I(i.get);if(typeof i.value=="function")return I(i.value)}t=zo(t)}function n(){return null}return n}const _n=O(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Ot=O(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),It=O(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Vo=O(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Rt=O(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Xo=O(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),En=O(["#text"]),An=O(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Lt=O(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Sn=O(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Ye=O(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Yo=z(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Ko=z(/<%[\w\W]*|[\w\W]*%>/gm),Zo=z(/\$\{[\w\W]*/gm),Qo=z(/^data-[\-\w.\u00B7-\uFFFF]+$/),Jo=z(/^aria-[\-\w]+$/),jn=z(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),er=z(/^(?:\w+script|data):/i),tr=z(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Gn=z(/^html$/i),nr=z(/^[a-z][.\w]*(-[.\w]+)+$/i);var xn=Object.freeze({__proto__:null,ARIA_ATTR:Jo,ATTR_WHITESPACE:tr,CUSTOM_ELEMENT:nr,DATA_ATTR:Qo,DOCTYPE_NAME:Gn,ERB_EXPR:Ko,IS_ALLOWED_URI:jn,IS_SCRIPT_OR_DATA:er,MUSTACHE_EXPR:Yo,TMPLIT_EXPR:Zo});const xe={element:1,text:3,progressingInstruction:7,comment:8,document:9},ir=function(){return typeof window>"u"?null:window},or=function(e,n){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let i=null;const o="data-tt-policy-suffix";n&&n.hasAttribute(o)&&(i=n.getAttribute(o));const s="dompurify"+(i?"#"+i:"");try{return e.createPolicy(s,{createHTML(a){return a},createScriptURL(a){return a}})}catch{return console.warn("TrustedTypes policy "+s+" could not be created."),null}},Cn=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function qn(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ir();const e=d=>qn(d);if(e.version="3.3.1",e.removed=[],!t||!t.document||t.document.nodeType!==xe.document||!t.Element)return e.isSupported=!1,e;let{document:n}=t;const i=n,o=i.currentScript,{DocumentFragment:s,HTMLTemplateElement:a,Node:p,Element:T,NodeFilter:U,NamedNodeMap:re=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:Xn,DOMParser:Yn,trustedTypes:Ue}=t,ve=T.prototype,Kn=Se(ve,"cloneNode"),Zn=Se(ve,"remove"),Qn=Se(ve,"nextSibling"),Jn=Se(ve,"childNodes"),ze=Se(ve,"parentNode");if(typeof a=="function"){const d=n.createElement("template");d.content&&d.content.ownerDocument&&(n=d.content.ownerDocument)}let S,we="";const{implementation:ct,createNodeIterator:ei,createDocumentFragment:ti,getElementsByTagName:ni}=n,{importNode:ii}=i;let x=Cn();e.isSupported=typeof Hn=="function"&&typeof ze=="function"&&ct&&ct.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:dt,ERB_EXPR:ut,TMPLIT_EXPR:ht,DATA_ATTR:oi,ARIA_ATTR:ri,IS_SCRIPT_OR_DATA:si,ATTR_WHITESPACE:Vt,CUSTOM_ELEMENT:ai}=xn;let{IS_ALLOWED_URI:Xt}=xn,k=null;const Yt=f({},[..._n,...Ot,...It,...Rt,...En]);let _=null;const Kt=f({},[...An,...Lt,...Sn,...Ye]);let v=Object.seal(Mt(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),ye=null,pt=null;const se=Object.seal(Mt(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let Zt=!0,ft=!0,Qt=!1,Jt=!0,ae=!1,Fe=!0,J=!1,mt=!1,gt=!1,le=!1,He=!1,je=!1,en=!0,tn=!1;const li="user-content-";let bt=!0,ke=!1,ce={},G=null;const vt=f({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let nn=null;const on=f({},["audio","video","img","source","image","track"]);let wt=null;const rn=f({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ge="http://www.w3.org/1998/Math/MathML",qe="http://www.w3.org/2000/svg",W="http://www.w3.org/1999/xhtml";let de=W,yt=!1,kt=null;const ci=f({},[Ge,qe,W],xt);let Be=f({},["mi","mo","mn","ms","mtext"]),We=f({},["annotation-xml"]);const di=f({},["title","style","font","a","script"]);let Te=null;const ui=["application/xhtml+xml","text/html"],hi="text/html";let y=null,ue=null;const pi=n.createElement("form"),sn=function(r){return r instanceof RegExp||r instanceof Function},Tt=function(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(ue&&ue===r)){if((!r||typeof r!="object")&&(r={}),r=B(r),Te=ui.indexOf(r.PARSER_MEDIA_TYPE)===-1?hi:r.PARSER_MEDIA_TYPE,y=Te==="application/xhtml+xml"?xt:Ke,k=F(r,"ALLOWED_TAGS")?f({},r.ALLOWED_TAGS,y):Yt,_=F(r,"ALLOWED_ATTR")?f({},r.ALLOWED_ATTR,y):Kt,kt=F(r,"ALLOWED_NAMESPACES")?f({},r.ALLOWED_NAMESPACES,xt):ci,wt=F(r,"ADD_URI_SAFE_ATTR")?f(B(rn),r.ADD_URI_SAFE_ATTR,y):rn,nn=F(r,"ADD_DATA_URI_TAGS")?f(B(on),r.ADD_DATA_URI_TAGS,y):on,G=F(r,"FORBID_CONTENTS")?f({},r.FORBID_CONTENTS,y):vt,ye=F(r,"FORBID_TAGS")?f({},r.FORBID_TAGS,y):B({}),pt=F(r,"FORBID_ATTR")?f({},r.FORBID_ATTR,y):B({}),ce=F(r,"USE_PROFILES")?r.USE_PROFILES:!1,Zt=r.ALLOW_ARIA_ATTR!==!1,ft=r.ALLOW_DATA_ATTR!==!1,Qt=r.ALLOW_UNKNOWN_PROTOCOLS||!1,Jt=r.ALLOW_SELF_CLOSE_IN_ATTR!==!1,ae=r.SAFE_FOR_TEMPLATES||!1,Fe=r.SAFE_FOR_XML!==!1,J=r.WHOLE_DOCUMENT||!1,le=r.RETURN_DOM||!1,He=r.RETURN_DOM_FRAGMENT||!1,je=r.RETURN_TRUSTED_TYPE||!1,gt=r.FORCE_BODY||!1,en=r.SANITIZE_DOM!==!1,tn=r.SANITIZE_NAMED_PROPS||!1,bt=r.KEEP_CONTENT!==!1,ke=r.IN_PLACE||!1,Xt=r.ALLOWED_URI_REGEXP||jn,de=r.NAMESPACE||W,Be=r.MATHML_TEXT_INTEGRATION_POINTS||Be,We=r.HTML_INTEGRATION_POINTS||We,v=r.CUSTOM_ELEMENT_HANDLING||{},r.CUSTOM_ELEMENT_HANDLING&&sn(r.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(v.tagNameCheck=r.CUSTOM_ELEMENT_HANDLING.tagNameCheck),r.CUSTOM_ELEMENT_HANDLING&&sn(r.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(v.attributeNameCheck=r.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),r.CUSTOM_ELEMENT_HANDLING&&typeof r.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(v.allowCustomizedBuiltInElements=r.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),ae&&(ft=!1),He&&(le=!0),ce&&(k=f({},En),_=[],ce.html===!0&&(f(k,_n),f(_,An)),ce.svg===!0&&(f(k,Ot),f(_,Lt),f(_,Ye)),ce.svgFilters===!0&&(f(k,It),f(_,Lt),f(_,Ye)),ce.mathMl===!0&&(f(k,Rt),f(_,Sn),f(_,Ye))),r.ADD_TAGS&&(typeof r.ADD_TAGS=="function"?se.tagCheck=r.ADD_TAGS:(k===Yt&&(k=B(k)),f(k,r.ADD_TAGS,y))),r.ADD_ATTR&&(typeof r.ADD_ATTR=="function"?se.attributeCheck=r.ADD_ATTR:(_===Kt&&(_=B(_)),f(_,r.ADD_ATTR,y))),r.ADD_URI_SAFE_ATTR&&f(wt,r.ADD_URI_SAFE_ATTR,y),r.FORBID_CONTENTS&&(G===vt&&(G=B(G)),f(G,r.FORBID_CONTENTS,y)),r.ADD_FORBID_CONTENTS&&(G===vt&&(G=B(G)),f(G,r.ADD_FORBID_CONTENTS,y)),bt&&(k["#text"]=!0),J&&f(k,["html","head","body"]),k.table&&(f(k,["tbody"]),delete ye.tbody),r.TRUSTED_TYPES_POLICY){if(typeof r.TRUSTED_TYPES_POLICY.createHTML!="function")throw Ae('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof r.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Ae('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');S=r.TRUSTED_TYPES_POLICY,we=S.createHTML("")}else S===void 0&&(S=or(Ue,o)),S!==null&&typeof we=="string"&&(we=S.createHTML(""));O&&O(r),ue=r}},an=f({},[...Ot,...It,...Vo]),ln=f({},[...Rt,...Xo]),fi=function(r){let l=ze(r);(!l||!l.tagName)&&(l={namespaceURI:de,tagName:"template"});const c=Ke(r.tagName),g=Ke(l.tagName);return kt[r.namespaceURI]?r.namespaceURI===qe?l.namespaceURI===W?c==="svg":l.namespaceURI===Ge?c==="svg"&&(g==="annotation-xml"||Be[g]):!!an[c]:r.namespaceURI===Ge?l.namespaceURI===W?c==="math":l.namespaceURI===qe?c==="math"&&We[g]:!!ln[c]:r.namespaceURI===W?l.namespaceURI===qe&&!We[g]||l.namespaceURI===Ge&&!Be[g]?!1:!ln[c]&&(di[c]||!an[c]):!!(Te==="application/xhtml+xml"&&kt[r.namespaceURI]):!1},q=function(r){_e(e.removed,{element:r});try{ze(r).removeChild(r)}catch{Zn(r)}},ee=function(r,l){try{_e(e.removed,{attribute:l.getAttributeNode(r),from:l})}catch{_e(e.removed,{attribute:null,from:l})}if(l.removeAttribute(r),r==="is")if(le||He)try{q(l)}catch{}else try{l.setAttribute(r,"")}catch{}},cn=function(r){let l=null,c=null;if(gt)r="<remove></remove>"+r;else{const w=Ct(r,/^[\r\n\t ]+/);c=w&&w[0]}Te==="application/xhtml+xml"&&de===W&&(r='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+r+"</body></html>");const g=S?S.createHTML(r):r;if(de===W)try{l=new Yn().parseFromString(g,Te)}catch{}if(!l||!l.documentElement){l=ct.createDocument(de,"template",null);try{l.documentElement.innerHTML=yt?we:g}catch{}}const A=l.body||l.documentElement;return r&&c&&A.insertBefore(n.createTextNode(c),A.childNodes[0]||null),de===W?ni.call(l,J?"html":"body")[0]:J?l.documentElement:A},dn=function(r){return ei.call(r.ownerDocument||r,r,U.SHOW_ELEMENT|U.SHOW_COMMENT|U.SHOW_TEXT|U.SHOW_PROCESSING_INSTRUCTION|U.SHOW_CDATA_SECTION,null)},_t=function(r){return r instanceof Xn&&(typeof r.nodeName!="string"||typeof r.textContent!="string"||typeof r.removeChild!="function"||!(r.attributes instanceof re)||typeof r.removeAttribute!="function"||typeof r.setAttribute!="function"||typeof r.namespaceURI!="string"||typeof r.insertBefore!="function"||typeof r.hasChildNodes!="function")},un=function(r){return typeof p=="function"&&r instanceof p};function V(d,r,l){Xe(d,c=>{c.call(e,r,l,ue)})}const hn=function(r){let l=null;if(V(x.beforeSanitizeElements,r,null),_t(r))return q(r),!0;const c=y(r.nodeName);if(V(x.uponSanitizeElement,r,{tagName:c,allowedTags:k}),Fe&&r.hasChildNodes()&&!un(r.firstElementChild)&&C(/<[/\w!]/g,r.innerHTML)&&C(/<[/\w!]/g,r.textContent)||r.nodeType===xe.progressingInstruction||Fe&&r.nodeType===xe.comment&&C(/<[/\w]/g,r.data))return q(r),!0;if(!(se.tagCheck instanceof Function&&se.tagCheck(c))&&(!k[c]||ye[c])){if(!ye[c]&&fn(c)&&(v.tagNameCheck instanceof RegExp&&C(v.tagNameCheck,c)||v.tagNameCheck instanceof Function&&v.tagNameCheck(c)))return!1;if(bt&&!G[c]){const g=ze(r)||r.parentNode,A=Jn(r)||r.childNodes;if(A&&g){const w=A.length;for(let L=w-1;L>=0;--L){const X=Kn(A[L],!0);X.__removalCount=(r.__removalCount||0)+1,g.insertBefore(X,Qn(r))}}}return q(r),!0}return r instanceof T&&!fi(r)||(c==="noscript"||c==="noembed"||c==="noframes")&&C(/<\/no(script|embed|frames)/i,r.innerHTML)?(q(r),!0):(ae&&r.nodeType===xe.text&&(l=r.textContent,Xe([dt,ut,ht],g=>{l=Ee(l,g," ")}),r.textContent!==l&&(_e(e.removed,{element:r.cloneNode()}),r.textContent=l)),V(x.afterSanitizeElements,r,null),!1)},pn=function(r,l,c){if(en&&(l==="id"||l==="name")&&(c in n||c in pi))return!1;if(!(ft&&!pt[l]&&C(oi,l))){if(!(Zt&&C(ri,l))){if(!(se.attributeCheck instanceof Function&&se.attributeCheck(l,r))){if(!_[l]||pt[l]){if(!(fn(r)&&(v.tagNameCheck instanceof RegExp&&C(v.tagNameCheck,r)||v.tagNameCheck instanceof Function&&v.tagNameCheck(r))&&(v.attributeNameCheck instanceof RegExp&&C(v.attributeNameCheck,l)||v.attributeNameCheck instanceof Function&&v.attributeNameCheck(l,r))||l==="is"&&v.allowCustomizedBuiltInElements&&(v.tagNameCheck instanceof RegExp&&C(v.tagNameCheck,c)||v.tagNameCheck instanceof Function&&v.tagNameCheck(c))))return!1}else if(!wt[l]){if(!C(Xt,Ee(c,Vt,""))){if(!((l==="src"||l==="xlink:href"||l==="href")&&r!=="script"&&Go(c,"data:")===0&&nn[r])){if(!(Qt&&!C(si,Ee(c,Vt,"")))){if(c)return!1}}}}}}}return!0},fn=function(r){return r!=="annotation-xml"&&Ct(r,ai)},mn=function(r){V(x.beforeSanitizeAttributes,r,null);const{attributes:l}=r;if(!l||_t(r))return;const c={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:_,forceKeepAttr:void 0};let g=l.length;for(;g--;){const A=l[g],{name:w,namespaceURI:L,value:X}=A,he=y(w),Et=X;let E=w==="value"?Et:qo(Et);if(c.attrName=he,c.attrValue=E,c.keepAttr=!0,c.forceKeepAttr=void 0,V(x.uponSanitizeAttribute,r,c),E=c.attrValue,tn&&(he==="id"||he==="name")&&(ee(w,r),E=li+E),Fe&&C(/((--!?|])>)|<\/(style|title|textarea)/i,E)){ee(w,r);continue}if(he==="attributename"&&Ct(E,"href")){ee(w,r);continue}if(c.forceKeepAttr)continue;if(!c.keepAttr){ee(w,r);continue}if(!Jt&&C(/\/>/i,E)){ee(w,r);continue}ae&&Xe([dt,ut,ht],bn=>{E=Ee(E,bn," ")});const gn=y(r.nodeName);if(!pn(gn,he,E)){ee(w,r);continue}if(S&&typeof Ue=="object"&&typeof Ue.getAttributeType=="function"&&!L)switch(Ue.getAttributeType(gn,he)){case"TrustedHTML":{E=S.createHTML(E);break}case"TrustedScriptURL":{E=S.createScriptURL(E);break}}if(E!==Et)try{L?r.setAttributeNS(L,w,E):r.setAttribute(w,E),_t(r)?q(r):Tn(e.removed)}catch{ee(w,r)}}V(x.afterSanitizeAttributes,r,null)},mi=function d(r){let l=null;const c=dn(r);for(V(x.beforeSanitizeShadowDOM,r,null);l=c.nextNode();)V(x.uponSanitizeShadowNode,l,null),hn(l),mn(l),l.content instanceof s&&d(l.content);V(x.afterSanitizeShadowDOM,r,null)};return e.sanitize=function(d){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=null,c=null,g=null,A=null;if(yt=!d,yt&&(d="<!-->"),typeof d!="string"&&!un(d))if(typeof d.toString=="function"){if(d=d.toString(),typeof d!="string")throw Ae("dirty is not a string, aborting")}else throw Ae("toString is not a function");if(!e.isSupported)return d;if(mt||Tt(r),e.removed=[],typeof d=="string"&&(ke=!1),ke){if(d.nodeName){const X=y(d.nodeName);if(!k[X]||ye[X])throw Ae("root node is forbidden and cannot be sanitized in-place")}}else if(d instanceof p)l=cn("<!---->"),c=l.ownerDocument.importNode(d,!0),c.nodeType===xe.element&&c.nodeName==="BODY"||c.nodeName==="HTML"?l=c:l.appendChild(c);else{if(!le&&!ae&&!J&&d.indexOf("<")===-1)return S&&je?S.createHTML(d):d;if(l=cn(d),!l)return le?null:je?we:""}l&&gt&&q(l.firstChild);const w=dn(ke?d:l);for(;g=w.nextNode();)hn(g),mn(g),g.content instanceof s&&mi(g.content);if(ke)return d;if(le){if(He)for(A=ti.call(l.ownerDocument);l.firstChild;)A.appendChild(l.firstChild);else A=l;return(_.shadowroot||_.shadowrootmode)&&(A=ii.call(i,A,!0)),A}let L=J?l.outerHTML:l.innerHTML;return J&&k["!doctype"]&&l.ownerDocument&&l.ownerDocument.doctype&&l.ownerDocument.doctype.name&&C(Gn,l.ownerDocument.doctype.name)&&(L="<!DOCTYPE "+l.ownerDocument.doctype.name+`>
`+L),ae&&Xe([dt,ut,ht],X=>{L=Ee(L,X," ")}),S&&je?S.createHTML(L):L},e.setConfig=function(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Tt(d),mt=!0},e.clearConfig=function(){ue=null,mt=!1},e.isValidAttribute=function(d,r,l){ue||Tt({});const c=y(d),g=y(r);return pn(c,g,l)},e.addHook=function(d,r){typeof r=="function"&&_e(x[d],r)},e.removeHook=function(d,r){if(r!==void 0){const l=Ho(x[d],r);return l===-1?void 0:jo(x[d],l,1)[0]}return Tn(x[d])},e.removeHooks=function(d){x[d]=[]},e.removeAllHooks=function(){x=Cn()},e}var rr=qn();const sr={ALLOWED_TAGS:["br","div","span","a","ul","ol","li","sup","sub","code","cite"],ALLOWED_ATTR:["style","href"]};function On(t){return rr.sanitize(t,sr)}var ar=Object.defineProperty,lr=Object.getOwnPropertyDescriptor,at=(t,e,n,i)=>{for(var o=i>1?void 0:i?lr(e,n):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(o=(i?a(e,n,o):a(o))||o);return i&&o&&ar(e,n,o),o};let me=class extends D{constructor(){super(...arguments),this.open=!1,this.state=Ze.PENDING,this.notifications=[]}handleDeleteAllNotifications(){this.dispatchEvent(new CustomEvent("bkddeleteallnotifications",{bubbles:!0,composed:!0}))}handleDeleteNotification(t){this.dispatchEvent(new CustomEvent("bkddeletenotification",{bubbles:!0,composed:!0,detail:{id:t}}))}renderContent(){return this.state===Ze.ERROR?h`<div class="error">
        ${b("Fehler beim Laden der Benachrichtigungen")}
      </div>`:this.state===Ze.PENDING?h`<div class="pending">${Q($o)}</div>`:this.notifications.length===0?h`<div class="notification">${b("Keine Benachrichtigungen")}</div>`:pe(this.notifications,t=>t.id,t=>this.renderNotification(t))}renderNotification(t){const e=On(t.subject),n=On(t.body);return h`<div class="notification">
      <div class="text">
        <div class="subject">${Q(e)}</div>
        <div class="body">${Q(n)}</div>
      </div>
      <button
        type="button"
        aria-label="${b("Benachrichtigung löschen")}"
        @click=${()=>this.handleDeleteNotification(t.id)}
      >
        ${Q(Mo)}
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
    </div>`}};me.styles=[P,R`
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
    `];at([M()],me.prototype,"open",2);at([M()],me.prototype,"state",2);at([M()],me.prototype,"notifications",2);me=at([N("bkd-notifications-dropdown"),$()],me);var cr=Object.defineProperty,dr=Object.getOwnPropertyDescriptor,$e=(t,e,n,i)=>{for(var o=i>1?void 0:i?dr(e,n):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(o=(i?a(e,n,o):a(o))||o);return i&&o&&cr(e,n,o),o};const Ft=Ht();typeof Ft?.notificationRefreshTime!="number"&&(Ft.notificationRefreshTime=30);var Ze=(t=>(t.PENDING="pending",t.ERROR="error",t.SUCCESS="success",t))(Ze||{});let ie=class extends D{constructor(){super(...arguments),this.state="pending",this.dropdown=new De(this,{queryToggleElement:()=>this.toggleElement??null,queryMenuElement:()=>this.dropdownElement?.shadowRoot??null,queryItems:()=>this.dropdownElement?.shadowRoot?.querySelectorAll("button")??null,queryFocused:()=>this.dropdownElement?.shadowRoot?.activeElement??null})}connectedCallback(){super.connectedCallback(),this.fetch(),this.interval=setInterval(()=>this.fetch(),Ft.notificationRefreshTime*1e3)}disconnectedCallback(){clearInterval(this.interval),super.disconnectedCallback()}handleDeleteAllNotifications(){const t=[];wn(t),this.notifications=t}handleDeleteNotification(t){if(!this.notifications)return;const e=this.notifications.filter(n=>n.id!==t.detail.id);wn(e),this.notifications=e}async fetch(){try{this.notifications=await Pi(),this.state="success"}catch{this.state="error"}}render(){return h` <button
        id="notifications-toggle"
        type="button"
        aria-label="${b("Benachrichtigungen")}"
        aria-expanded=${this.dropdown.open}
        @click="${()=>this.dropdown.toggle()}"
      >
        ${Q(No)}
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
      </bkd-notifications-dropdown>`}};ie.styles=[P,R`
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
    `];$e([j("button")],ie.prototype,"toggleElement",2);$e([j("bkd-notifications-dropdown")],ie.prototype,"dropdownElement",2);$e([be()],ie.prototype,"notifications",2);$e([be()],ie.prototype,"state",2);ie=$e([N("bkd-notifications-toggle"),$()],ie);const ur=`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="7.4" fill="none"><path fill="currentColor" d="m6 7.4-6-6L1.4 0 6 4.6 10.6 0 12 1.4Z"/></svg>
`,hr=`<svg xmlns="http://www.w3.org/2000/svg" width="11.414" height="11.414" fill="none"><path stroke="currentColor" stroke-width="2" d="m.707.707 10 10m-10 0 10-10"/></svg>
`,pr=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M2 20v-2.8a3 3 0 0 1 .425-1.563A2.794 2.794 0 0 1 3.6 14.55c1-.5 2.038-.883 3.113-1.15 1.074-.267 2.17-.4 3.287-.4.417 0 .833.03 1.25.088.417.058.833.129 1.25.212v1.575c-.75.367-1.354.85-1.813 1.45-.458.6-.687 1.383-.687 2.35V20H2Zm10 0v-1.4c0-.4.104-.77.313-1.113a1.76 1.76 0 0 1 .887-.737c.6-.25 1.22-.438 1.863-.563a10.11 10.11 0 0 1 3.874 0 9.604 9.604 0 0 1 1.863.563c.383.15.68.396.887.738.209.341.313.712.313 1.112V20H12Zm5-5c-.7 0-1.292-.242-1.775-.725-.483-.483-.725-1.075-.725-1.775s.242-1.292.725-1.775C15.708 10.242 16.3 10 17 10s1.292.242 1.775.725c.483.483.725 1.075.725 1.775s-.242 1.292-.725 1.775C18.292 14.758 17.7 15 17 15Zm-7-3c-1.1 0-2.042-.392-2.825-1.175C6.392 10.042 6 9.1 6 8s.392-2.042 1.175-2.825C7.958 4.392 8.9 4 10 4s2.042.392 2.825 1.175C13.608 5.958 14 6.9 14 8s-.392 2.042-1.175 2.825C12.042 11.608 11.1 12 10 12Z"/></svg>
`;function fr(t,e,n){const i=document.createElement("form");i.method=t,i.style.visibility="hidden",i.action=e,Object.keys(n).forEach(o=>{const s=document.createElement("input");s.type="hidden",s.name=o,s.value=n[o],i.appendChild(s)}),document.body.appendChild(i),i.submit()}function*Bn(t,e){if(t!==void 0){let n=0;for(const i of t)yield e(i,n++)}}var mr=Object.defineProperty,gr=Object.getOwnPropertyDescriptor,lt=(t,e,n,i)=>{for(var o=i>1?void 0:i?gr(e,n):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(o=(i?a(e,n,o):a(o))||o);return i&&o&&mr(e,n,o),o};let ge=class extends D{constructor(){super(...arguments),this.availableSubstitutions=[],this.activeSubstitution=null,this.open=!1}get displayedSubstitutions(){return this.availableSubstitutions.filter(t=>!this.activeSubstitution||t.Id===this.activeSubstitution.Id)}handleSubstitutionClick(t,e){t.preventDefault(),this.dispatchEvent(new CustomEvent("bkdsubstitutionstart",{detail:{substitution:e},composed:!0,bubbles:!0}))}handleStopClick(){this.dispatchEvent(new CustomEvent("bkdsubstitutionstop",{composed:!0,bubbles:!0}))}handleCloseClick(){this.dispatchEvent(new CustomEvent("bkdclose"))}renderSubstitution(t){const e=t.Id===this.activeSubstitution?.Id;return h`
      <li role="presentation" class=${fe({active:e})}>
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
        ${Bn(this.displayedSubstitutions,this.renderSubstitution.bind(this))}
        ${Y(this.activeSubstitution,()=>h`<li role="presentation" class="dropdown-menu-stop">
              <button role="menuitem" @click=${this.handleStopClick.bind(this)}>
                ${b("Stellvertretung beenden")}
              </button>
            </li>`)}
      </ul>
    `}};ge.styles=[P,R`
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
    `];lt([M()],ge.prototype,"availableSubstitutions",2);lt([M()],ge.prototype,"activeSubstitution",2);lt([M()],ge.prototype,"open",2);ge=lt([N("bkd-substitutions-dropdown"),$()],ge);var br=Object.defineProperty,vr=Object.getOwnPropertyDescriptor,Me=(t,e,n,i)=>{for(var o=i>1?void 0:i?vr(e,n):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(o=(i?a(e,n,o):a(o))||o);return i&&o&&br(e,n,o),o};let oe=class extends D{constructor(){super(),this.availableSubstitutions=[],this.activeSubstitution=null,this.dropdown=new De(this,{queryToggleElement:()=>this.toggleElement??null,queryMenuElement:()=>this.menuElement?.shadowRoot??null,tabInside:!this.isLargeScreen(),queryItems:()=>this.menuElement?.shadowRoot?.querySelectorAll("a[role='menuitem']")??null,queryFocused:()=>this.menuElement?.shadowRoot?.activeElement??null}),new K(this,u)}connectedCallback(){super.connectedCallback(),this.fetch()}async fetch(){const t=await Di();this.availableSubstitutions=t.filter(n=>this.isNotInFuture(n)).sort((n,i)=>n.Holder.localeCompare(i.Holder));const e=this.getActiveSubstitutionId();this.activeSubstitution=this.availableSubstitutions.find(n=>n.Id===e)??null}isNotInFuture(t){return!!t.DateFrom&&new Date(t.DateFrom)<=new Date}getActiveSubstitutionId(){return m.accessTokenPayload?.substitutionId??null}toggle(t){t.preventDefault(),this.activeSubstitution&&this.isLargeScreen()?this.stopSubstitution():this.dropdown.toggle()}isLargeScreen(){return window.innerWidth>1200}startSubstitution(t){this.activeSubstitution||this.redirect(t,"start")}stopSubstitution(){this.activeSubstitution&&this.redirect(this.activeSubstitution,"stop")}redirect(t,e){const{oAuthServer:n,oAuthPrefix:i}=Ht(),o=`${n}/${i}/Authorization/Substitutions/${t.Id}/${e}`;fr("POST",o,{access_token:m.accessToken??"",redirect_uri:te("home")})}handleSubstitutionStart(t){this.dropdown.close(),this.startSubstitution(t.detail.substitution)}handleSubstitutionStop(){this.dropdown.close(),this.stopSubstitution()}getLabel(){return this.activeSubstitution?.Holder||b("Stellvertretung ausüben")}isAllowed(){return u.app.scope==="Tutoring"}render(){if(!(!this.isAllowed()||this.availableSubstitutions.length===0))return h`
      <button
        class=${fe({active:!!this.activeSubstitution,open:this.dropdown.open})}
        @click=${this.toggle.bind(this)}
        aria-label=${this.getLabel()}
        aria-expanded=${this.dropdown.open}
        aria-haspopup="menu"
      >
        <div class="icon">${Q(pr)}</div>
        <div class="label">${this.getLabel()}</div>
        <div class="icon-caret">
          ${Q(this.activeSubstitution?hr:ur)}
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
    `}};oe.styles=[P,R`
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
    `];Me([j("button")],oe.prototype,"toggleElement",2);Me([j("bkd-substitutions-dropdown")],oe.prototype,"menuElement",2);Me([be()],oe.prototype,"availableSubstitutions",2);Me([be()],oe.prototype,"activeSubstitution",2);oe=Me([N("bkd-substitutions-toggle"),$()],oe);var wr=Object.defineProperty,yr=Object.getOwnPropertyDescriptor,Bt=(t,e,n,i)=>{for(var o=i>1?void 0:i?yr(e,n):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(o=(i?a(e,n,o):a(o))||o);return i&&o&&wr(e,n,o),o};let Le=class extends D{constructor(){super(),this.dropdown=new De(this,{queryToggleElement:()=>this.toggleElement??null,queryMenuElement:()=>this.menuElement??null,queryItems:()=>this.shadowRoot?.querySelectorAll("a[role='menuitem']")??null,queryFocused:()=>this.shadowRoot?.activeElement??null}),new K(this,u)}handleSettingsItemClick(t,e){this.dropdown.close(),this.dispatchEvent(new CustomEvent("bkdsettingsitemclick",{detail:{item:e,event:t},composed:!0,bubbles:!0}))}renderSettingsItem(t){return h`<li role="presentation">
      <a
        role="menuitem"
        href=${t.href}
        target=${t.external?"_blank":"_self"}
        @click=${e=>this.handleSettingsItemClick(e,t)}
      >
        ${t.label}</a
      >
      ${t.img?h`<img src=${t.img} alt="" width="24" height="24" />`:Ie}
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
        ${Bn(Un(u.locale),this.renderSettingsItem.bind(this))}
      </ul>
    `}};Le.styles=[P,R`
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
    `];Bt([j("button")],Le.prototype,"toggleElement",2);Bt([j('ul[role="menu"]')],Le.prototype,"menuElement",2);Le=Bt([N("bkd-user-settings"),$()],Le);var kr=Object.defineProperty,Tr=Object.getOwnPropertyDescriptor,Wn=(t,e,n,i)=>{for(var o=i>1?void 0:i?Tr(e,n):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(o=(i?a(e,n,o):a(o))||o);return i&&o&&kr(e,n,o),o};let rt=class extends D{constructor(){super(),this.mobileNavOpen=!1,new K(this,u)}render(){return h`
      <nav role="navigation" aria-label=${b("Servicenavigation")}>
        <bkd-substitutions-toggle></bkd-substitutions-toggle>
        <bkd-notifications-toggle></bkd-notifications-toggle>
        <bkd-user-settings></bkd-user-settings>
        ${Y(u.allowedLocales.length>1,()=>h`<bkd-language-switcher></bkd-language-switcher>`)}
        <bkd-hamburger .open=${this.mobileNavOpen}></bkd-hamburger>
      </nav>
    `}};rt.styles=[P,R`
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
    `];Wn([M()],rt.prototype,"mobileNavOpen",2);rt=Wn([N("bkd-service-nav"),$()],rt);var _r=Object.defineProperty,Er=Object.getOwnPropertyDescriptor,Wt=(t,e,n,i)=>{for(var o=i>1?void 0:i?Er(e,n):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(o=(i?a(e,n,o):a(o))||o);return i&&o&&_r(e,n,o),o};let Pe=class extends D{constructor(){super(),this.mobileNav=new De(this,{queryToggleElement:()=>this.serviceNavElement?.shadowRoot?.querySelector("bkd-hamburger")??null,queryMenuElement:()=>this.mobileNavElement?.shadowRoot??null,tabInside:!0}),new K(this,u)}handleLogoClick(t){t.preventDefault(),u.navigationItemKey=Oe.navigationHome.key,u.appPath=Oe.navigationHome.appPath}handleNavItemClick(t){const{item:e}=t.detail;u.navigationItemKey=e.key,this.mobileNav.close()}handleSettingsItemClick(t){const{item:e,event:n}=t.detail;e.external||(n.preventDefault(),e.key==="logout"?this.dispatchEvent(new CustomEvent("bkdlogout",{composed:!0,bubbles:!0})):u.navigationItemKey=e.key),this.mobileNav.close()}render(){return h`
      <header role="banner">
        <a
          class="logo"
          href=${te("home")}
          @click=${this.handleLogoClick.bind(this)}
          ><img src="logo.svg" alt=${b("Evento Startseite")}
        /></a>
        <div class="logo-caption">${u.instanceName}</div>
        ${Y(navigator.onLine,()=>h`<bkd-service-nav
              .mobileNavOpen=${this.mobileNav.open}
              @bkdhamburgertoggle=${()=>this.mobileNav.toggle()}
              @bkdsettingsitemclick=${this.handleSettingsItemClick.bind(this)}
            ></bkd-service-nav> `)}
        ${Y(navigator.onLine,()=>h` <bkd-nav
              @bkdnavitemclick=${this.handleNavItemClick.bind(this)}
            ></bkd-nav>`)}
        ${Y(this.mobileNav.open,()=>h`<bkd-mobile-nav
              @bkdnavitemclick=${this.handleNavItemClick.bind(this)}
              @bkdsettingsitemclick=${this.handleSettingsItemClick.bind(this)}
            ></bkd-mobile-nav>`)}
      </header>
    `}};Pe.styles=[P,R`
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
    `];Wt([j("bkd-service-nav")],Pe.prototype,"serviceNavElement",2);Wt([j("bkd-mobile-nav")],Pe.prototype,"mobileNavElement",2);Pe=Wt([N("bkd-header"),$()],Pe);var Ar=Object.defineProperty,Sr=Object.getOwnPropertyDescriptor,Vn=(t,e,n,i)=>{for(var o=i>1?void 0:i?Sr(e,n):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(o=(i?a(e,n,o):a(o))||o);return i&&o&&Ar(e,n,o),o};const Qe=lo(),xr=(async function(){await co(Qe,$i(),Ni()),u.init()})();Mi(R`
    ${Ui}
    :root {
      ${zi}
    }
  `.toString());let st=class extends D{constructor(){super(),this.authReady=!1,this.subscriptions=[],this.handleMessage=({data:t,origin:e})=>{if(e===window.location.origin)switch(t.type){case"bkdAppPushState":{const n=t.args[2];this.updateUrlAndNavigationState(n,!1);break}case"bkdAppReplaceState":{const n=t.args[2];At(St(n),!0);break}case"bkdAppHashChange":{const{url:n}=t;At(St(n));break}}},xr.then(()=>this.authReady=!0),new K(this,u)}connectedCallback(){super.connectedCallback(),u.initialized.then(()=>setTimeout(()=>{m.scope!==u.app.scope&&Pt(Qe,u.app.scope,u.locale)})),this.subscriptions.push(u.subscribeScopeAndLocale((e,n)=>Pt(Qe,e,n),!0)),this.subscriptions.push(u.subscribeInstanceName(this.updateTitle.bind(this))),this.subscriptions.push(u.subscribeNavigationItem(this.updateTitle.bind(this))),window.addEventListener("message",this.handleMessage);const t=new URL(location.href);u.actualAppPath=t.hash,window.addEventListener("hashchange",this.handleHashChange)}disconnectedCallback(){super.disconnectedCallback(),this.subscriptions.forEach(t=>t()),window.removeEventListener("message",this.handleMessage),window.removeEventListener("hashchange",this.handleHashChange)}updateTitle(){const{instanceName:t,navigationItem:e}=u,n=e?.label&&e?.key!==Oe.navigationHome.key;document.title=n?[e?.label,t].join(" ― "):t}updateUrlAndNavigationState(t,e){const n=St(t);At(n,e);const i=Fi(u.navigation,n);i?.item?.key&&i.item.key!==u.navigationItemKey?(u.actualAppPath=n,u.navigationItemKey=i.item.key):u.appPath=n}handleHashChange(t){const e=new URL(t.newURL);u.appPath=e.hash}handleLogout(){uo(Qe)}render(){return h`
      ${Y(this.authReady&&m.authenticated,()=>h`
          <bkd-header @bkdlogout=${this.handleLogout.bind(this)}></bkd-header>
          <bkd-content></bkd-content>
          <bkd-footer></bkd-footer>
        `)}
    `}};st.styles=[P,R`
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
    `];Vn([be()],st.prototype,"authReady",2);st=Vn([N("bkd-portal"),$()],st);
