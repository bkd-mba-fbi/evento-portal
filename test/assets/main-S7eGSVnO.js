import{u as kr,f as _r,t as A,g as Tr,a as jn,b as st,c as Er,i as Ar,T as Sr,d as Wt,e as Cr,h as Or,L as xr,s as Rr,j as Vt,k as En,l as Ir,p as v,m as ue,n as ze,o as Fn,q as Hn,E as Ue,r as Pr,v as B,w as q,x as W,S as ie,y,z as Lr,A as O,B as oe,C as V,D as X,F as Dr,G as Nr,H as Mr,I as Te,J as _e,K as An,M as $r,N as zr,O as Ur,P as jr,Q as Fr,R as Hr,U as qr,V as It,W as Pt,X as Gr}from"./LanguageSwitcher-CJifvITC.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Br={attribute:!0,type:String,converter:kr,reflect:!1,hasChanged:_r},Wr=(e=Br,t,n)=>{const{kind:r,metadata:o}=n;let a=globalThis.litPropertyMetadata.get(o);if(a===void 0&&globalThis.litPropertyMetadata.set(o,a=new Map),a.set(n.name,e),r==="accessor"){const{name:s}=n;return{set(c){const l=t.get.call(this);t.set.call(this,c),this.requestUpdate(s,l,e)},init(c){return c!==void 0&&this.P(s,void 0,e),c}}}if(r==="setter"){const{name:s}=n;return function(c){const l=this[s];t.call(this,c),this.requestUpdate(s,l,e)}}throw Error("Unsupported decorator location: "+r)};function Y(e){return(t,n)=>typeof n=="object"?Wr(e,t,n):((r,o,a)=>{const s=o.hasOwnProperty(a);return o.constructor.createProperty(a,s?{...r,wrapped:!0}:r),s?Object.getOwnPropertyDescriptor(o,a):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Se(e){return Y({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vr=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Q(e,t){return(n,r,o)=>{const a=s=>{var c;return((c=s.renderRoot)==null?void 0:c.querySelector(e))??null};return Vr(n,r,{get(){return a(this)}})}}function Xr(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),n}var Lt={exports:{}},Sn;function Yr(){return Sn||(Sn=1,function(e,t){(function(n,r){e.exports=r()})(self,()=>(()=>{var n={985:(s,c,l)=>{Object.defineProperty(c,"__esModule",{value:!0}),c.OAuth2Client=void 0,c.generateQueryString=_;const f=l(854),w=l(129);function h(p,d){return new URL(p,d).toString()}function _(p){const d=new URLSearchParams;for(const[g,T]of Object.entries(p))if(Array.isArray(T))for(const k of T)d.append(g,k);else T!==void 0&&d.set(g,T.toString());return d.toString()}c.OAuth2Client=class{constructor(p){this.discoveryDone=!1,this.serverMetadata=null,p!=null&&p.fetch||(p.fetch=fetch.bind(globalThis)),this.settings=p}async refreshToken(p,d){if(!p.refreshToken)throw new Error("This token didn't have a refreshToken. It's not possible to refresh this");const g={grant_type:"refresh_token",refresh_token:p.refreshToken};this.settings.clientSecret||(g.client_id=this.settings.clientId),d!=null&&d.scope&&(g.scope=d.scope.join(" ")),d!=null&&d.resource&&(g.resource=d.resource);const T=await this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",g));return!T.refreshToken&&p.refreshToken&&(T.refreshToken=p.refreshToken),T}async clientCredentials(p){var d;const g=["client_id","client_secret","grant_type","scope"];if(p!=null&&p.extraParams&&Object.keys(p.extraParams).filter(k=>g.includes(k)).length>0)throw new Error(`The following extraParams are disallowed: '${g.join("', '")}'`);const T={grant_type:"client_credentials",scope:(d=p==null?void 0:p.scope)===null||d===void 0?void 0:d.join(" "),resource:p==null?void 0:p.resource,...p==null?void 0:p.extraParams};if(!this.settings.clientSecret)throw new Error("A clientSecret must be provided to use client_credentials");return this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",T))}async password(p){var d;const g={grant_type:"password",...p,scope:(d=p.scope)===null||d===void 0?void 0:d.join(" ")};return this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",g))}get authorizationCode(){return new w.OAuth2AuthorizationCodeClient(this)}async introspect(p){const d={token:p.accessToken,token_type_hint:"access_token"};return this.request("introspectionEndpoint",d)}async revoke(p,d="access_token"){let g=p.accessToken;d==="refresh_token"&&(g=p.refreshToken);const T={token:g,token_type_hint:d};return this.request("revocationEndpoint",T)}async getEndpoint(p){if(this.settings[p]!==void 0)return h(this.settings[p],this.settings.server);if(p!=="discoveryEndpoint"&&(await this.discover(),this.settings[p]!==void 0))return h(this.settings[p],this.settings.server);if(!this.settings.server)throw new Error(`Could not determine the location of ${p}. Either specify ${p} in the settings, or the "server" endpoint to let the client discover it.`);switch(p){case"authorizationEndpoint":return h("/authorize",this.settings.server);case"tokenEndpoint":return h("/token",this.settings.server);case"discoveryEndpoint":return h("/.well-known/oauth-authorization-server",this.settings.server);case"introspectionEndpoint":return h("/introspect",this.settings.server);case"revocationEndpoint":return h("/revoke",this.settings.server)}}async discover(){var p;if(this.discoveryDone)return;let d;this.discoveryDone=!0;try{d=await this.getEndpoint("discoveryEndpoint")}catch{return void console.warn('[oauth2] OAuth2 discovery endpoint could not be determined. Either specify the "server" or "discoveryEndpoint')}const g=await this.settings.fetch(d,{headers:{Accept:"application/json"}});if(!g.ok)return;if(!(!((p=g.headers.get("Content-Type"))===null||p===void 0)&&p.startsWith("application/json")))return void console.warn("[oauth2] OAuth2 discovery endpoint was not a JSON response. Response is ignored");this.serverMetadata=await g.json();const T=[["authorization_endpoint","authorizationEndpoint"],["token_endpoint","tokenEndpoint"],["introspection_endpoint","introspectionEndpoint"],["revocation_endpoint","revocationEndpoint"]];if(this.serverMetadata!==null){for(const[k,C]of T)this.serverMetadata[k]&&(this.settings[C]=h(this.serverMetadata[k],d));this.serverMetadata.token_endpoint_auth_methods_supported&&!this.settings.authenticationMethod&&(this.settings.authenticationMethod=this.serverMetadata.token_endpoint_auth_methods_supported[0])}}async request(p,d){const g=await this.getEndpoint(p),T={"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json"};let k=this.settings.authenticationMethod;switch(this.settings.clientSecret||(k="client_secret_post"),k||(k="client_secret_basic"),k){case"client_secret_basic":T.Authorization="Basic "+btoa(this.settings.clientId+":"+this.settings.clientSecret);break;case"client_secret_post":d.client_id=this.settings.clientId,this.settings.clientSecret&&(d.client_secret=this.settings.clientSecret);break;default:throw new Error("Authentication method not yet supported:"+k+". Open a feature request if you want this!")}const C=await this.settings.fetch(g,{method:"POST",body:_(d),headers:T});let I,x,te;if(C.status!==204&&C.headers.has("Content-Type")&&C.headers.get("Content-Type").match(/^application\/(.*\+)?json/)&&(I=await C.json()),C.ok)return I;throw I!=null&&I.error?(x="OAuth2 error "+I.error+".",I.error_description&&(x+=" "+I.error_description),te=I.error):(x="HTTP Error "+C.status+" "+C.statusText,C.status===401&&this.settings.clientSecret&&(x+=". It's likely that the clientId and/or clientSecret was incorrect"),te=null),new f.OAuth2HttpError(x,te,C,I)}async tokenResponseToOAuth2Token(p){var d;const g=await p;if(!(g!=null&&g.access_token))throw console.warn("Invalid OAuth2 Token Response: ",g),new TypeError("We received an invalid token response from an OAuth2 server.");return{accessToken:g.access_token,expiresAt:g.expires_in?Date.now()+1e3*g.expires_in:null,refreshToken:(d=g.refresh_token)!==null&&d!==void 0?d:null}}}},129:(s,c,l)=>{Object.defineProperty(c,"__esModule",{value:!0}),c.OAuth2AuthorizationCodeClient=void 0,c.generateCodeVerifier=async function(){const d=h();if(d){const g=new Uint8Array(32);return d.getRandomValues(g),p(g)}{const g=l(483);return new Promise((T,k)=>{g.randomBytes(32,(C,I)=>{C&&k(C),T(I.toString("base64url"))})})}},c.getCodeChallenge=w;const f=l(854);async function w(d){const g=h();if(g!=null&&g.subtle)return["S256",p(await g.subtle.digest("SHA-256",_(d)))];{const T=l(483).createHash("sha256");return T.update(_(d)),["S256",T.digest("base64url")]}}function h(){if(typeof window<"u"&&window.crypto)return window.crypto;if(typeof self<"u"&&self.crypto)return self.crypto;const d=l(483);return d.webcrypto?d.webcrypto:null}function _(d){const g=new Uint8Array(d.length);for(let T=0;T<d.length;T++)g[T]=255&d.charCodeAt(T);return g}function p(d){return btoa(String.fromCharCode(...new Uint8Array(d))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}c.OAuth2AuthorizationCodeClient=class{constructor(d){this.client=d}async getAuthorizeUri(d){const[g,T]=await Promise.all([d.codeVerifier?w(d.codeVerifier):void 0,this.client.getEndpoint("authorizationEndpoint")]),k=new URLSearchParams({client_id:this.client.settings.clientId,response_type:"code",redirect_uri:d.redirectUri});if(g&&(k.set("code_challenge_method",g[0]),k.set("code_challenge",g[1])),d.state&&k.set("state",d.state),d.scope&&k.set("scope",d.scope.join(" ")),d.resource)for(const C of[].concat(d.resource))k.append("resource",C);if(d.responseMode&&d.responseMode!=="query"&&k.append("response_mode",d.responseMode),d.extraParams)for(const[C,I]of Object.entries(d.extraParams)){if(k.has(C))throw new Error(`Property in extraParams would overwrite standard property: ${C}`);k.set(C,I)}return T+"?"+k.toString()}async getTokenFromCodeRedirect(d,g){const{code:T}=this.validateResponse(d,{state:g.state});return this.getToken({code:T,redirectUri:g.redirectUri,codeVerifier:g.codeVerifier})}validateResponse(d,g){var T;let k=(d=new URL(d)).searchParams;if(!k.has("code")&&!k.has("error")&&d.hash.length>0&&(k=new URLSearchParams(d.hash.slice(1))),k.has("error"))throw new f.OAuth2Error((T=k.get("error_description"))!==null&&T!==void 0?T:"OAuth2 error",k.get("error"));if(!k.has("code"))throw new Error(`The url did not contain a code parameter ${d}`);if(g.state&&g.state!==k.get("state"))throw new Error(`The "state" parameter in the url did not match the expected value of ${g.state}`);return{code:k.get("code"),scope:k.has("scope")?k.get("scope").split(" "):void 0}}async getToken(d){const g={grant_type:"authorization_code",code:d.code,redirect_uri:d.redirectUri,code_verifier:d.codeVerifier,resource:d.resource};return this.client.tokenResponseToOAuth2Token(this.client.request("tokenEndpoint",g))}}},854:(s,c)=>{Object.defineProperty(c,"__esModule",{value:!0}),c.OAuth2HttpError=c.OAuth2Error=void 0;class l extends Error{constructor(w,h){super(w),this.oauth2Code=h}}c.OAuth2Error=l,c.OAuth2HttpError=class extends l{constructor(f,w,h,_){super(f,w),this.httpCode=h.status,this.response=h,this.parsedBody=_}}},238:(s,c)=>{Object.defineProperty(c,"__esModule",{value:!0}),c.OAuth2Fetch=void 0,c.OAuth2Fetch=class{constructor(l){this.token=null,this.activeGetStoredToken=null,this.activeRefresh=null,this.refreshTimer=null,(l==null?void 0:l.scheduleRefresh)===void 0&&(l.scheduleRefresh=!0),this.options=l,l.getStoredToken&&(this.activeGetStoredToken=(async()=>{this.token=await l.getStoredToken(),this.activeGetStoredToken=null})()),this.scheduleRefresh()}async fetch(l,f){const w=new Request(l,f);return this.mw()(w,h=>fetch(h))}mw(){return async(l,f)=>{const w=await this.getAccessToken();let h=l.clone();h.headers.set("Authorization","Bearer "+w);let _=await f(h);if(!_.ok&&_.status===401){const p=await this.refreshToken();h=l.clone(),h.headers.set("Authorization","Bearer "+p.accessToken),_=await f(h)}return _}}async getToken(){return this.token&&(this.token.expiresAt===null||this.token.expiresAt>Date.now())?this.token:this.refreshToken()}async getAccessToken(){return await this.activeGetStoredToken,(await this.getToken()).accessToken}async refreshToken(){var l,f;if(this.activeRefresh)return this.activeRefresh;const w=this.token;this.activeRefresh=(async()=>{var h,_;let p=null;try{w!=null&&w.refreshToken&&(p=await this.options.client.refreshToken(w))}catch{console.warn("[oauth2] refresh token not accepted, we'll try reauthenticating")}if(p||(p=await this.options.getNewToken()),!p){const d=new Error("Unable to obtain OAuth2 tokens, a full reauth may be needed");throw(_=(h=this.options).onError)===null||_===void 0||_.call(h,d),d}return p})();try{const h=await this.activeRefresh;return this.token=h,(f=(l=this.options).storeToken)===null||f===void 0||f.call(l,h),this.scheduleRefresh(),h}catch(h){throw this.options.onError&&this.options.onError(h),h}finally{this.activeRefresh=null}}scheduleRefresh(){var l;if(!this.options.scheduleRefresh||(this.refreshTimer&&(clearTimeout(this.refreshTimer),this.refreshTimer=null),!(!((l=this.token)===null||l===void 0)&&l.expiresAt)||!this.token.refreshToken))return;const f=this.token.expiresAt-Date.now();f<12e4||(this.refreshTimer=setTimeout(async()=>{try{await this.refreshToken()}catch(w){console.error("[fetch-mw-oauth2] error while doing a background OAuth2 auto-refresh",w)}},f-6e4))}}},483:()=>{}},r={};function o(s){var c=r[s];if(c!==void 0)return c.exports;var l=r[s]={exports:{}};return n[s](l,l.exports,o),l.exports}var a={};return(()=>{var s=a;Object.defineProperty(s,"__esModule",{value:!0}),s.OAuth2HttpError=s.OAuth2Error=s.OAuth2Fetch=s.generateCodeVerifier=s.OAuth2AuthorizationCodeClient=s.OAuth2Client=void 0;var c=o(985);Object.defineProperty(s,"OAuth2Client",{enumerable:!0,get:function(){return c.OAuth2Client}});var l=o(129);Object.defineProperty(s,"OAuth2AuthorizationCodeClient",{enumerable:!0,get:function(){return l.OAuth2AuthorizationCodeClient}}),Object.defineProperty(s,"generateCodeVerifier",{enumerable:!0,get:function(){return l.generateCodeVerifier}});var f=o(238);Object.defineProperty(s,"OAuth2Fetch",{enumerable:!0,get:function(){return f.OAuth2Fetch}});var w=o(854);Object.defineProperty(s,"OAuth2Error",{enumerable:!0,get:function(){return w.OAuth2Error}}),Object.defineProperty(s,"OAuth2HttpError",{enumerable:!0,get:function(){return w.OAuth2HttpError}})})(),a})())}(Lt)),Lt.exports}var Xt=Yr(),ke={},le={},Cn;function qn(){if(Cn)return le;Cn=1,Object.defineProperty(le,"__esModule",{value:!0}),le.OAuth2HttpError=le.OAuth2Error=void 0;class e extends Error{constructor(r,o){super(r),this.oauth2Code=o}}le.OAuth2Error=e;class t extends e{constructor(r,o,a,s){super(r,o),this.httpCode=a.status,this.response=a,this.parsedBody=s}}return le.OAuth2HttpError=t,le}var ce={};const Kr={},Zr=Object.freeze(Object.defineProperty({__proto__:null,default:Kr},Symbol.toStringTag,{value:"Module"})),Dt=Xr(Zr);var On;function Gn(){if(On)return ce;On=1,Object.defineProperty(ce,"__esModule",{value:!0}),ce.OAuth2AuthorizationCodeClient=void 0,ce.generateCodeVerifier=n,ce.getCodeChallenge=r;const e=qn();class t{constructor(l){this.client=l}async getAuthorizeUri(l){const[f,w]=await Promise.all([l.codeVerifier?r(l.codeVerifier):void 0,this.client.getEndpoint("authorizationEndpoint")]),h=new URLSearchParams({client_id:this.client.settings.clientId,response_type:"code",redirect_uri:l.redirectUri});if(f&&(h.set("code_challenge_method",f[0]),h.set("code_challenge",f[1])),l.state&&h.set("state",l.state),l.scope&&h.set("scope",l.scope.join(" ")),l.resource)for(const _ of[].concat(l.resource))h.append("resource",_);if(l.responseMode&&l.responseMode!=="query"&&h.append("response_mode",l.responseMode),l.extraParams)for(const[_,p]of Object.entries(l.extraParams)){if(h.has(_))throw new Error(`Property in extraParams would overwrite standard property: ${_}`);h.set(_,p)}return w+"?"+h.toString()}async getTokenFromCodeRedirect(l,f){const{code:w}=this.validateResponse(l,{state:f.state});return this.getToken({code:w,redirectUri:f.redirectUri,codeVerifier:f.codeVerifier})}validateResponse(l,f){var w;l=new URL(l);let h=l.searchParams;if(!h.has("code")&&!h.has("error")&&l.hash.length>0&&(h=new URLSearchParams(l.hash.slice(1))),h.has("error"))throw new e.OAuth2Error((w=h.get("error_description"))!==null&&w!==void 0?w:"OAuth2 error",h.get("error"));if(!h.has("code"))throw new Error(`The url did not contain a code parameter ${l}`);if(f.state&&f.state!==h.get("state"))throw new Error(`The "state" parameter in the url did not match the expected value of ${f.state}`);return{code:h.get("code"),scope:h.has("scope")?h.get("scope").split(" "):void 0}}async getToken(l){const f={grant_type:"authorization_code",code:l.code,redirect_uri:l.redirectUri,code_verifier:l.codeVerifier,resource:l.resource};return this.client.tokenResponseToOAuth2Token(this.client.request("tokenEndpoint",f))}}ce.OAuth2AuthorizationCodeClient=t;async function n(){const c=o();if(c){const l=new Uint8Array(32);return c.getRandomValues(l),s(l)}else{const l=Dt;return new Promise((f,w)=>{l.randomBytes(32,(h,_)=>{h&&w(h),f(_.toString("base64url"))})})}}async function r(c){const l=o();if(l!=null&&l.subtle)return["S256",s(await l.subtle.digest("SHA-256",a(c)))];{const w=Dt.createHash("sha256");return w.update(a(c)),["S256",w.digest("base64url")]}}function o(){if(typeof window<"u"&&window.crypto)return window.crypto;if(typeof self<"u"&&self.crypto)return self.crypto;const c=Dt;return c.webcrypto?c.webcrypto:null}function a(c){const l=new Uint8Array(c.length);for(let f=0;f<c.length;f++)l[f]=c.charCodeAt(f)&255;return l}function s(c){return btoa(String.fromCharCode(...new Uint8Array(c))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}return ce}var xn;function Qr(){if(xn)return ke;xn=1,Object.defineProperty(ke,"__esModule",{value:!0}),ke.OAuth2Client=void 0,ke.generateQueryString=o;const e=qn(),t=Gn();class n{constructor(s){this.discoveryDone=!1,this.serverMetadata=null,s!=null&&s.fetch||(s.fetch=fetch.bind(globalThis)),this.settings=s}async refreshToken(s,c){if(!s.refreshToken)throw new Error("This token didn't have a refreshToken. It's not possible to refresh this");const l={grant_type:"refresh_token",refresh_token:s.refreshToken};this.settings.clientSecret||(l.client_id=this.settings.clientId),c!=null&&c.scope&&(l.scope=c.scope.join(" ")),c!=null&&c.resource&&(l.resource=c.resource);const f=await this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",l));return!f.refreshToken&&s.refreshToken&&(f.refreshToken=s.refreshToken),f}async clientCredentials(s){var c;const l=["client_id","client_secret","grant_type","scope"];if(s!=null&&s.extraParams&&Object.keys(s.extraParams).filter(w=>l.includes(w)).length>0)throw new Error(`The following extraParams are disallowed: '${l.join("', '")}'`);const f={grant_type:"client_credentials",scope:(c=s==null?void 0:s.scope)===null||c===void 0?void 0:c.join(" "),resource:s==null?void 0:s.resource,...s==null?void 0:s.extraParams};if(!this.settings.clientSecret)throw new Error("A clientSecret must be provided to use client_credentials");return this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",f))}async password(s){var c;const l={grant_type:"password",...s,scope:(c=s.scope)===null||c===void 0?void 0:c.join(" ")};return this.tokenResponseToOAuth2Token(this.request("tokenEndpoint",l))}get authorizationCode(){return new t.OAuth2AuthorizationCodeClient(this)}async introspect(s){const c={token:s.accessToken,token_type_hint:"access_token"};return this.request("introspectionEndpoint",c)}async revoke(s,c="access_token"){let l=s.accessToken;c==="refresh_token"&&(l=s.refreshToken);const f={token:l,token_type_hint:c};return this.request("revocationEndpoint",f)}async getEndpoint(s){if(this.settings[s]!==void 0)return r(this.settings[s],this.settings.server);if(s!=="discoveryEndpoint"&&(await this.discover(),this.settings[s]!==void 0))return r(this.settings[s],this.settings.server);if(!this.settings.server)throw new Error(`Could not determine the location of ${s}. Either specify ${s} in the settings, or the "server" endpoint to let the client discover it.`);switch(s){case"authorizationEndpoint":return r("/authorize",this.settings.server);case"tokenEndpoint":return r("/token",this.settings.server);case"discoveryEndpoint":return r("/.well-known/oauth-authorization-server",this.settings.server);case"introspectionEndpoint":return r("/introspect",this.settings.server);case"revocationEndpoint":return r("/revoke",this.settings.server)}}async discover(){var s;if(this.discoveryDone)return;this.discoveryDone=!0;let c;try{c=await this.getEndpoint("discoveryEndpoint")}catch{console.warn('[oauth2] OAuth2 discovery endpoint could not be determined. Either specify the "server" or "discoveryEndpoint');return}const l=await this.settings.fetch(c,{headers:{Accept:"application/json"}});if(!l.ok)return;if(!(!((s=l.headers.get("Content-Type"))===null||s===void 0)&&s.startsWith("application/json"))){console.warn("[oauth2] OAuth2 discovery endpoint was not a JSON response. Response is ignored");return}this.serverMetadata=await l.json();const f=[["authorization_endpoint","authorizationEndpoint"],["token_endpoint","tokenEndpoint"],["introspection_endpoint","introspectionEndpoint"],["revocation_endpoint","revocationEndpoint"]];if(this.serverMetadata!==null){for(const[w,h]of f)this.serverMetadata[w]&&(this.settings[h]=r(this.serverMetadata[w],c));this.serverMetadata.token_endpoint_auth_methods_supported&&!this.settings.authenticationMethod&&(this.settings.authenticationMethod=this.serverMetadata.token_endpoint_auth_methods_supported[0])}}async request(s,c){const l=await this.getEndpoint(s),f={"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json"};let w=this.settings.authenticationMethod;switch(this.settings.clientSecret||(w="client_secret_post"),w||(w="client_secret_basic"),w){case"client_secret_basic":f.Authorization="Basic "+btoa(this.settings.clientId+":"+this.settings.clientSecret);break;case"client_secret_post":c.client_id=this.settings.clientId,this.settings.clientSecret&&(c.client_secret=this.settings.clientSecret);break;default:throw new Error("Authentication method not yet supported:"+w+". Open a feature request if you want this!")}const h=await this.settings.fetch(l,{method:"POST",body:o(c),headers:f});let _;if(h.status!==204&&h.headers.has("Content-Type")&&h.headers.get("Content-Type").match(/^application\/(.*\+)?json/)&&(_=await h.json()),h.ok)return _;let p,d;throw _!=null&&_.error?(p="OAuth2 error "+_.error+".",_.error_description&&(p+=" "+_.error_description),d=_.error):(p="HTTP Error "+h.status+" "+h.statusText,h.status===401&&this.settings.clientSecret&&(p+=". It's likely that the clientId and/or clientSecret was incorrect"),d=null),new e.OAuth2HttpError(p,d,h,_)}async tokenResponseToOAuth2Token(s){var c;const l=await s;if(!(l!=null&&l.access_token))throw console.warn("Invalid OAuth2 Token Response: ",l),new TypeError("We received an invalid token response from an OAuth2 server.");return{accessToken:l.access_token,expiresAt:l.expires_in?Date.now()+l.expires_in*1e3:null,refreshToken:(c=l.refresh_token)!==null&&c!==void 0?c:null}}}ke.OAuth2Client=n;function r(a,s){return new URL(a,s).toString()}function o(a){const s=new URLSearchParams;for(const[c,l]of Object.entries(a))if(Array.isArray(l))for(const f of l)s.append(c,f);else l!==void 0&&s.set(c,l.toString());return s.toString()}return ke}var Jr=Qr(),eo=Gn();function to(...e){}var Bn=(e=>(e.Refresh="refresh",e.Access="access",e))(Bn||{});const $e={refresh:void 0,access:void 0};function no({renewRefreshToken:e,renewAccessToken:t}){et("refresh",A.refreshTokenPayload,e),A.onRefreshTokenUpdate(n=>et("refresh",n,e)),et("access",A.accessTokenPayload,t),A.onAccessTokenUpdate(n=>et("access",n,t))}function ro(){Object.values(Bn).forEach(e=>{$e[e]&&clearTimeout($e[e])})}function et(e,t,n){if($e[e]&&clearTimeout($e[e]),!t)return;const r=Tr(t),o=r-Sr;if(r<=0)return;const a=o>0?o:Math.max(r+1e3,0);$e[e]=setTimeout(()=>oo(e,t,n),a)}function oo(e,t,n){const{scope:r,locale:o}=t;io(r,async()=>{const a=e==="access"?jn(r):st(r),s=a?Er(a):null;s&&(Ar(s)?await n(s.scope,s.locale):e==="access"?A.accessToken=a:A.refreshToken=a)})}function io(e,t){navigator.locks.request(`bkdTokenRenewal_${e}`,async()=>{await t()})}const M=Wt();if(typeof(M==null?void 0:M.oAuthServer)!="string")throw new Error("Invalid 'oAuthServer' setting");if(typeof(M==null?void 0:M.oAuthPrefix)!="string")throw new Error("Invalid 'oAuthPrefix' setting");if(typeof(M==null?void 0:M.oAuthClientId)!="string")throw new Error("Invalid 'clientId' setting");function so(){return new Xt.OAuth2Client({server:M.oAuthServer,clientId:M.oAuthClientId,tokenEndpoint:`${M.oAuthPrefix}/Authorization/Token`,get authorizationEndpoint(){return co()},fetch:(...e)=>fetch(...e)})}async function ao(e,t,n){no({renewRefreshToken:(s,c)=>Ft(e,s,c),renewAccessToken:(s,c)=>Ft(e,s,c)});const r=Cr(),o=await ho(e,r);if(o){po(o,r);return}const a=fo();if(a){mo(a);return}await jt(e,t,n)}async function jt(e,t,n){if(uo(t,n),Or(A.refreshTokenPayload))return at(e,t,n);if(!A.accessToken)return Ft(e,t,n)}async function at(e,t,n,r=new URL(document.location.href)){r.searchParams.set(xr,n);const o=new URL(await e.getEndpoint("authorizationEndpoint")),a=await Xt.generateCodeVerifier();Rr(a,r.toString());const[s,c]=await eo.getCodeChallenge(a);o.searchParams.set("clientId",e.settings.clientId),o.searchParams.set("redirectUrl",r.toString()),o.searchParams.set("culture_info",n),o.searchParams.set("application_scope",t),o.searchParams.set("response_type","code"),o.searchParams.set("code_challenge_method",s),o.searchParams.set("code_challenge",c),document.location.href=o.toString()}async function lo(e){const t=Vt();if(!t)throw new Error("No instance available");const{accessToken:n,scope:r,locale:o}=A;if(!(!n||!r||!o))try{await bo(e,t,n)}catch(a){if(!(a instanceof SyntaxError))throw a}finally{A.resetAllTokens(),ro(),await at(e,r,o,new URL(ue(ze.navigationHome)))}}function co(){const e=Vt();return e?`${M.oAuthPrefix}/Authorization/${e}/Login`:`${M.oAuthPrefix}/Authorization/Login`}function uo(e,t){if(En(A.accessToken,e,t))return;const n=jn(e);if(En(n,e,t)){A.accessToken=n,A.refreshToken=st(e);return}A.accessToken=null,A.refreshToken=st(e)}async function ho(e,t){return new URLSearchParams(document.location.search).get("code")&&(t!=null&&t.redirectUri)?await e.authorizationCode.getTokenFromCodeRedirect(document.location.href,{redirectUri:t.redirectUri,codeVerifier:t.codeVerifier}):null}function po({refreshToken:e,accessToken:t},n){var o;A.refreshToken=e,A.accessToken=t;const r=(o=A.accessTokenPayload)==null?void 0:o.instanceId;r&&Ir(r),n!=null&&n.redirectUri&&v.navigate(new URL(n.redirectUri))}function fo(){const e=new URLSearchParams(document.location.search),t=e.get("access_token"),n=e.get("expires_in"),r=e.get("refresh_token");return t?{accessToken:t,expiresAt:n?Date.now()+parseInt(n,10)*1e3:null,refreshToken:r||null}:null}function mo(e){const{refreshToken:t,accessToken:n}=e;A.refreshToken=t,A.accessToken=n;const r=new URL(document.location.href);r.searchParams.delete("access_token"),r.searchParams.delete("expires_in"),r.searchParams.delete("refresh_token"),window.parent===window?history.replaceState({},"",r):window.parent.location.assign(r)}async function Ft(e,t,n){const r=Vt(),o=st(t);if(!r||!o)return at(e,t,n);try{const{refreshToken:a,accessToken:s}=await go(e,r,t,n,o);to("Received renewed tokens"),A.refreshToken=a,A.accessToken=s}catch{return at(e,t,n)}}async function go(e,t,n,r,o){const{access_token:a,refresh_token:s,expires_in:c}=await Wn(e,`${M.oAuthPrefix}/Authorization/${t}/Token`,{refresh_token:o,grant_type:"refresh_token",client_id:M.oAuthClientId,culture_info:r,scope:n});return{accessToken:a,refreshToken:s,expiresAt:c?Date.now()+c*1e3:null}}function bo(e,t,n){return Wn(e,`${M.oAuthPrefix}/Authorization/${t}/Logout`,{access_token:n})}async function Wn(e,t,n){var f;const r=new URL(t,e.settings.server).toString(),o={"Content-Type":"application/x-www-form-urlencoded"},a=await fetch(r,{method:"POST",body:n&&Jr.generateQueryString(n),headers:o});if(a.ok)return await a.json();let s,c,l;throw(f=a.headers.get("Content-Type"))!=null&&f.startsWith("application/json")&&(s=await a.json()),s!=null&&s.error?(c="OAuth2 error "+s.error+".",s.error_description&&(c+=" "+s.error_description),l=s.error):(c="HTTP Error "+a.status+" "+a.statusText,l=null),new Xt.OAuth2Error(c,l)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vo=Fn(class extends Hn{constructor(){super(...arguments),this.key=Ue}render(e,t){return this.key=e,t}update(e,[t,n]){return t!==this.key&&(Pr(e),this.key=t),n}});var wo=Object.defineProperty,yo=Object.getOwnPropertyDescriptor,Vn=(e,t,n,r)=>{for(var o=r>1?void 0:r?yo(t,n):t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(o=(r?s(t,n,o):s(o))||o);return r&&o&&wo(t,n,o),o};let lt=class extends W{constructor(){super(),this.renderedOffline=!1,this.handleMessage=e=>{switch(e.data.type){case"bkdAppResize":{this.handleResize(e.data.height);break}}},this.handleOnline=()=>{this.renderedOffline&&window.location.reload()},new ie(this,v)}connectedCallback(){super.connectedCallback(),window.addEventListener("message",this.handleMessage),window.addEventListener("online",this.handleOnline)}disconnectedCallback(){window.removeEventListener("message",this.handleMessage),window.removeEventListener("online",this.handleOnline),super.disconnectedCallback()}handleResize(e){this.iframe&&(this.iframe.height=e)}renderAppIframe(){return y`${vo(v.app.root,y`
        <iframe
          id="app"
          title=${v.app.key}
          src=${`/${v.app.root}${v.appPath}`}
        ></iframe>
      `)}`}renderFooterContent(){return y`
      ${Lr(v.navigationItemKey,[["contact",()=>y`<bkd-contact></bkd-contact>`],["legal",()=>y`<bkd-legal></bkd-legal>`],["imprint",()=>y`<bkd-imprint></bkd-imprint>`]],()=>y``)}
    `}render(){return this.renderedOffline=!navigator.onLine,navigator.onLine?A.scope!==v.app.scope?y`<main role="main"></main>`:y`
      <main role="main">
        ${oe(v.app.heading,()=>y`<h1>${v.navigationItem.label}</h1>`)}
        ${oe(v.app.key==="footer",()=>this.renderFooterContent(),()=>this.renderAppIframe())}
      </main>
    `:y`<main role="main">
        <h1>${O("Offline")}</h1>
        <p>${O("Keine Verbindung vorhanden.")}</p>
      </main>`}};lt.styles=[B,q`
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
    `];Vn([Q("iframe")],lt.prototype,"iframe",2);lt=Vn([V("bkd-content"),X()],lt);function ct(e,t){if(e===t||e.contains(t))return!0;if("shadowRoot"in e&&e.shadowRoot)return ct(e.shadowRoot,t);for(const n of Array.from(e.children))if(ct(n,t))return!0;return!1}class qe{constructor(t,n){this.host=t,this.options=n,this.open=!1,this.closeOnBlur=r=>{this.menuElement&&"relatedTarget"in r&&(this.menuElement.contains(r.relatedTarget)||this.closeDeferred())},this.handleDocumentClick=r=>{const o=r.composedPath()[0];if(!o)return;const a=this.toggleElement&&!ct(this.toggleElement,o),s=this.menuElement&&!ct(this.menuElement,o);a&&s&&this.closeDeferred()},this.handleIframeClick=()=>{this.closeDeferred()},this.handleKeydown=r=>{switch(r.key){case"Tab":{this.options.tabInside||this.close();break}case"Escape":{this.close();break}case"ArrowDown":{const o=this.items[this.nextLinkIndex(1)];o==null||o.focus();break}case"ArrowUp":{const o=this.items[this.nextLinkIndex(-1)];o==null||o.focus();break}}},this.host.addController(this)}get toggleElement(){return this.options.queryToggleElement()}get menuElement(){return this.options.queryMenuElement()}get items(){var n;const t=((n=this.options)==null?void 0:n.queryItems)&&this.options.queryItems();return Array.from(t??[])}get focusedItem(){var t;return(t=this.options)!=null&&t.queryFocused?this.options.queryFocused():null}hostDisconnected(){this.removeListeners()}toggle(){this.open=!this.open,this.host.requestUpdate(),this.open?this.addListeners():setTimeout(()=>{this.removeListeners()})}close(){this.open&&this.toggle()}closeDeferred(){setTimeout(()=>this.close())}addListeners(){setTimeout(()=>{var t,n;this.options.tabInside&&((t=this.menuElement)==null||t.addEventListener("focusout",this.closeOnBlur,!0)),(n=this.iframeDocument)==null||n.addEventListener("click",this.handleIframeClick,!0)}),document.addEventListener("click",this.handleDocumentClick,!0),this.host.addEventListener("keydown",this.handleKeydown,!0)}removeListeners(){var t,n;this.options.tabInside&&((t=this.menuElement)==null||t.removeEventListener("focusout",this.closeOnBlur,!0)),document.removeEventListener("click",this.handleDocumentClick,!0),(n=this.iframeDocument)==null||n.removeEventListener("click",this.handleIframeClick,!0),this.host.removeEventListener("keydown",this.handleKeydown,!0)}get iframeDocument(){var o,a;const t=(o=document.querySelector("bkd-portal"))==null?void 0:o.shadowRoot,n=(a=t==null?void 0:t.querySelector("bkd-content"))==null?void 0:a.shadowRoot,r=n==null?void 0:n.querySelector("iframe");return(r==null?void 0:r.contentDocument)??null}activeLinkIndex(){const t=this.focusedItem?this.items.indexOf(this.focusedItem):-1;return t===-1?null:t}nextLinkIndex(t){const n=this.activeLinkIndex(),r=0,o=this.items.length-1;if(n===null)return t>0?r:o;const a=n+t;return a>o?r:a<r?o:a}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ht extends Hn{constructor(t){if(super(t),this.it=Ue,t.type!==Dr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===Ue||t==null)return this._t=void 0,this.it=t;if(t===Nr)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const n=[t];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}Ht.directiveName="unsafeHTML",Ht.resultType=1;const se=Fn(Ht),ko=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="m22 15.975-1.775 1.775L12 9.525 3.775 17.75 2 15.975l10-10 10 10Z"/></svg>
`,_o=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M2 8.025 3.775 6.25 12 14.475l8.225-8.225L22 8.025l-10 10-10-10Z"/></svg>
`;function Xn(e){return[{key:"myProfile",label:O("Mein Profil"),href:ue("myProfile")},{key:"mySettings",label:O("Einstellungen"),href:ue("mySettings")},{key:"videos",label:O("Video-Tutorials"),href:e==="de-CH"?"https://www.youtube.com/playlist?list=PLLDtLiOuctbx-_EQWgWqTO1MRbX845OEf":"https://www.youtube.com/playlist?list=PLLDtLiOuctbyEegnquAkaW4u8cm62lFAU",img:"/icons/external-link.svg",external:!0},{key:"logout",label:O("Logout"),href:"#",img:"/icons/logout.svg"}]}var To=Object.defineProperty,Eo=Object.getOwnPropertyDescriptor,Yn=(e,t,n,r)=>{for(var o=r>1?void 0:r?Eo(t,n):t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(o=(r?s(t,n,o):s(o))||o);return r&&o&&To(t,n,o),o};let dt=class extends W{constructor(){super(),this.openGroup=null,this.handleKeyup=e=>{e.key==="Tab"&&this.openGroupOfFocusedItem()},new ie(this,v)}connectedCallback(){super.connectedCallback(),this.openGroupOfCurrentItem(),this.addEventListener("keyup",this.handleKeyup)}disconnectedCallback(){this.removeEventListener("keyup",this.handleKeyup),super.disconnectedCallback()}openGroupOfCurrentItem(){this.openGroup||(this.openGroup=v.navigationGroup)}openGroupOfFocusedItem(){var t,n;const e=(t=this.shadowRoot)==null?void 0:t.activeElement;if(e instanceof HTMLElement){const r=e.dataset.itemKey;if(r){const{group:o}=Mr(ze.navigation,r);o&&o.label!==((n=this.openGroup)==null?void 0:n.label)&&(this.openGroup=o)}}}handleGroupClick(e,t){var n;e.preventDefault(),this.openGroup=t.label!==((n=this.openGroup)==null?void 0:n.label)?t:null}handleNavItemClick(e,t){e.preventDefault(),this.dispatchEvent(new CustomEvent("bkdnavitemclick",{detail:{item:t},composed:!0,bubbles:!0}))}handleSettingsItemClick(e,t){this.dispatchEvent(new CustomEvent("bkdsettingsitemclick",{detail:{item:t,event:e},composed:!0,bubbles:!0}))}renderGroup(e){var n;const t=e.label===((n=this.openGroup)==null?void 0:n.label);return y`
      <li
        class=${Te({group:!0,open:t})}
        aria-expanded=${t}
      >
        <button
          class="group-header"
          tabindex="-1"
          @click=${r=>this.handleGroupClick(r,e)}
        >
          <label> ${e.label} </label>
          ${se(t?ko:_o)}
        </button>
        <ul class="items">
          ${_e(e.items,r=>r.label,this.renderNavItem.bind(this))}
        </ul>
      </li>
    `}renderNavItem(e){const t=e.key===v.navigationItemKey;return y`
      <li
        class=${Te({item:!0,active:t})}
      >
        <a
          href=${ue(e)}
          data-item-key=${e.key}
          @click=${n=>this.handleNavItemClick(n,e)}
        >
          ${e.label}
        </a>
      </li>
    `}renderSettingsItem(e){return y`<li>
      <a
        href=${e.href}
        target=${e.external?"_blank":"_self"}
        @click=${t=>this.handleSettingsItemClick(t,e)}
      >
        ${e.label}
      </a>
      ${e.img?y`<img src=${e.img} alt="" width="24" height="24" />`:Ue}
    </li>`}render(){return y`
      <nav role="navigation" aria-label=${O("Mobile Navigation")}>
        <ul class="nav">
          ${_e(v.navigation,e=>e.label,this.renderGroup.bind(this))}
        </ul>
        <div class="service-nav">
          <ul>
            ${_e(Xn(v.locale),e=>e.key,this.renderSettingsItem.bind(this))}
          </ul>
          ${oe(v.allowedLocales.length>1,()=>y`<bkd-language-switcher></bkd-language-switcher>`)}
        </div>
      </nav>
    `}};dt.styles=[B,q`
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
    `];Yn([Se()],dt.prototype,"openGroup",2);dt=Yn([V("bkd-mobile-nav"),X()],dt);var Ao=Object.defineProperty,So=Object.getOwnPropertyDescriptor,Yt=(e,t,n,r)=>{for(var o=r>1?void 0:r?So(t,n):t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(o=(r?s(t,n,o):s(o))||o);return r&&o&&Ao(t,n,o),o};let je=class extends W{constructor(){super(),this.open=!1,new ie(this,v)}handleItemClick(e,t){e.preventDefault(),this.dispatchEvent(new CustomEvent("bkdnavitemclick",{detail:{item:t},composed:!0,bubbles:!0}))}renderItem(e){const t=e.key===v.navigationItemKey;return y`
      <li role="presentation" class=${Te({active:t})}>
        <a
          role="menuitem"
          href=${ue(e)}
          @click=${n=>this.handleItemClick(n,e)}
          >${e.label}</a
        >
      </li>
    `}render(){if(!(!this.group||!this.open))return y`
      <ul role="menu">
        ${_e(this.group.items,e=>e.key,this.renderItem.bind(this))}
      </ul>
    `}};je.styles=[B,q`
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
    `];Yt([Y()],je.prototype,"group",2);Yt([Y()],je.prototype,"open",2);je=Yt([V("bkd-nav-group-dropdown"),X()],je);var Co=Object.defineProperty,Oo=Object.getOwnPropertyDescriptor,Ge=(e,t,n,r)=>{for(var o=r>1?void 0:r?Oo(t,n):t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(o=(r?s(t,n,o):s(o))||o);return r&&o&&Co(t,n,o),o};let he=class extends W{constructor(){super(...arguments),this.dropdown=new qe(this,{queryToggleElement:()=>this.toggleElement??null,queryMenuElement:()=>{var e,t;return((t=(e=this.menuElement)==null?void 0:e.shadowRoot)==null?void 0:t.querySelector('ul[role="menu"]'))??null},queryItems:()=>{var e,t;return((t=(e=this.menuElement)==null?void 0:e.shadowRoot)==null?void 0:t.querySelectorAll("a[role='menuitem']"))??null},queryFocused:()=>{var e,t;return((t=(e=this.menuElement)==null?void 0:e.shadowRoot)==null?void 0:t.activeElement)??null}})}toggle(e){e.preventDefault(),this.dropdown.toggle()}handleItemClick(){this.dropdown.close()}render(){if(this.group)return y`
      <a
        href="#"
        @click=${this.toggle.bind(this)}
        class=${Te({active:!!this.active})}
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
    `}};he.styles=[B,q`
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
    `];Ge([Y()],he.prototype,"group",2);Ge([Y({type:Boolean})],he.prototype,"active",2);Ge([Q("a")],he.prototype,"toggleElement",2);Ge([Q("bkd-nav-group-dropdown")],he.prototype,"menuElement",2);he=Ge([V("bkd-nav-group-toggle"),X()],he);var xo=Object.defineProperty,Ro=Object.getOwnPropertyDescriptor,Io=(e,t,n,r)=>{for(var o=r>1?void 0:r?Ro(t,n):t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(o=(r?s(t,n,o):s(o))||o);return r&&o&&xo(t,n,o),o};let qt=class extends W{constructor(){super(),new ie(this,v)}renderGroupToggle(e,t){return y`
      <bkd-nav-group-toggle
        .group=${e}
        ?active=${t}
      ></bkd-nav-group-toggle>
    `}render(){return y`<nav role="navigation" aria-label=${O("Hauptnavigation")}>
      ${_e(v.navigation,e=>e.label,e=>{var t;return this.renderGroupToggle(e,e.label===((t=v.navigationGroup)==null?void 0:t.label))})}
    </nav>`}};qt.styles=[B,q`
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
    `];qt=Io([V("bkd-nav"),X()],qt);var Po=Object.defineProperty,Lo=Object.getOwnPropertyDescriptor,Kn=(e,t,n,r)=>{for(var o=r>1?void 0:r?Lo(t,n):t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(o=(r?s(t,n,o):s(o))||o);return r&&o&&Po(t,n,o),o};let ut=class extends W{constructor(){super(...arguments),this.open=!1}toggle(){this.dispatchEvent(new CustomEvent("bkdhamburgertoggle",{bubbles:!0,composed:!0}))}render(){const e=this.open?"/icons/close.svg":"/icons/hamburger.svg";return y`
      <button
        class="hamburger"
        aria-expanded=${this.open}
        aria-label=${O("Menü")}
        @click=${this.toggle.bind(this)}
      >
        <img src=${e} alt="" width="32" height="32" />
      </button>
    `}};ut.styles=[B,q`
      :host {
        display: flex;
      }

      button {
        background: transparent;
        border: none;
        cursor: pointer;
      }
    `];Kn([Y()],ut.prototype,"open",2);ut=Kn([V("bkd-hamburger"),X()],ut);const Do='<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path fill="currentColor" d="M16 2a2.25 2.25 0 0 0-2.25 2.25v1.043C9.87 6.293 7 9.807 7 14v7.5h18V14c0-4.193-2.87-7.707-6.75-8.707V4.25A2.25 2.25 0 0 0 16 2M4 24.5v3h9.404A3 3 0 1 0 19 29a3 3 0 0 0-.407-1.5H28v-3z"/></svg>',No='<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" preserveAspectRatio="xMidYMid" style="margin:auto;background:#fff 0 0;display:block;shape-rendering:auto" viewBox="0 0 100 100"><g transform="translate(82 50)"><circle r="6"><animateTransform attributeName="transform" begin="-0.8571428571428571s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.8571428571428571s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(51.429 -42.913 110.137)"><circle r="6" fill-opacity=".857"><animateTransform attributeName="transform" begin="-0.7142857142857143s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.7142857142857143s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(102.857 -10.937 57.696)"><circle r="6" fill-opacity=".714"><animateTransform attributeName="transform" begin="-0.5714285714285714s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.5714285714285714s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(154.286 3.294 34.358)"><circle r="6" fill-opacity=".571"><animateTransform attributeName="transform" begin="-0.42857142857142855s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.42857142857142855s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(-154.286 14.706 15.642)"><circle r="6" fill-opacity=".429"><animateTransform attributeName="transform" begin="-0.2857142857142857s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.2857142857142857s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(-102.857 28.937 -7.696)"><circle r="6" fill-opacity=".286"><animateTransform attributeName="transform" begin="-0.14285714285714285s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="-0.14285714285714285s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g><g transform="rotate(-51.429 60.913 -60.137)"><circle r="6" fill-opacity=".143"><animateTransform attributeName="transform" begin="0s" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="scale" values="1.54 1.54;1 1"/><animate attributeName="fill-opacity" begin="0s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/></circle></g></svg>',Mo='<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path fill="currentColor" d="m13 3-1.333 1.333H5V7h21.333V4.333h-6.666L18.333 3zM6.333 9.667V27c0 1.467 1.2 2.667 2.667 2.667h13.333C23.8 29.667 25 28.467 25 27V9.667z"/></svg>';/*! @license DOMPurify 3.2.4 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.4/LICENSE */const{entries:Zn,setPrototypeOf:Rn,isFrozen:$o,getPrototypeOf:zo,getOwnPropertyDescriptor:Uo}=Object;let{freeze:F,seal:K,create:Qn}=Object,{apply:Gt,construct:Bt}=typeof Reflect<"u"&&Reflect;F||(F=function(t){return t});K||(K=function(t){return t});Gt||(Gt=function(t,n,r){return t.apply(n,r)});Bt||(Bt=function(t,n){return new t(...n)});const tt=H(Array.prototype.forEach),jo=H(Array.prototype.lastIndexOf),In=H(Array.prototype.pop),Ie=H(Array.prototype.push),Fo=H(Array.prototype.splice),rt=H(String.prototype.toLowerCase),Nt=H(String.prototype.toString),Pn=H(String.prototype.match),Pe=H(String.prototype.replace),Ho=H(String.prototype.indexOf),qo=H(String.prototype.trim),Z=H(Object.prototype.hasOwnProperty),j=H(RegExp.prototype.test),Le=Go(TypeError);function H(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return Gt(e,t,r)}}function Go(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return Bt(e,n)}}function E(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:rt;Rn&&Rn(e,null);let r=t.length;for(;r--;){let o=t[r];if(typeof o=="string"){const a=n(o);a!==o&&($o(t)||(t[r]=a),o=a)}e[o]=!0}return e}function Bo(e){for(let t=0;t<e.length;t++)Z(e,t)||(e[t]=null);return e}function de(e){const t=Qn(null);for(const[n,r]of Zn(e))Z(e,n)&&(Array.isArray(r)?t[n]=Bo(r):r&&typeof r=="object"&&r.constructor===Object?t[n]=de(r):t[n]=r);return t}function De(e,t){for(;e!==null;){const r=Uo(e,t);if(r){if(r.get)return H(r.get);if(typeof r.value=="function")return H(r.value)}e=zo(e)}function n(){return null}return n}const Ln=F(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Mt=F(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),$t=F(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Wo=F(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),zt=F(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Vo=F(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Dn=F(["#text"]),Nn=F(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Ut=F(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Mn=F(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),nt=F(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Xo=K(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Yo=K(/<%[\w\W]*|[\w\W]*%>/gm),Ko=K(/\$\{[\w\W]*/gm),Zo=K(/^data-[\-\w.\u00B7-\uFFFF]+$/),Qo=K(/^aria-[\-\w]+$/),Jn=K(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Jo=K(/^(?:\w+script|data):/i),ei=K(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),er=K(/^html$/i),ti=K(/^[a-z][.\w]*(-[.\w]+)+$/i);var $n=Object.freeze({__proto__:null,ARIA_ATTR:Qo,ATTR_WHITESPACE:ei,CUSTOM_ELEMENT:ti,DATA_ATTR:Zo,DOCTYPE_NAME:er,ERB_EXPR:Yo,IS_ALLOWED_URI:Jn,IS_SCRIPT_OR_DATA:Jo,MUSTACHE_EXPR:Xo,TMPLIT_EXPR:Ko});const Ne={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},ni=function(){return typeof window>"u"?null:window},ri=function(t,n){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let r=null;const o="data-tt-policy-suffix";n&&n.hasAttribute(o)&&(r=n.getAttribute(o));const a="dompurify"+(r?"#"+r:"");try{return t.createPolicy(a,{createHTML(s){return s},createScriptURL(s){return s}})}catch{return console.warn("TrustedTypes policy "+a+" could not be created."),null}},zn=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function tr(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ni();const t=b=>tr(b);if(t.version="3.2.4",t.removed=[],!e||!e.document||e.document.nodeType!==Ne.document||!e.Element)return t.isSupported=!1,t;let{document:n}=e;const r=n,o=r.currentScript,{DocumentFragment:a,HTMLTemplateElement:s,Node:c,Element:l,NodeFilter:f,NamedNodeMap:w=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:h,DOMParser:_,trustedTypes:p}=e,d=l.prototype,g=De(d,"cloneNode"),T=De(d,"remove"),k=De(d,"nextSibling"),C=De(d,"childNodes"),I=De(d,"parentNode");if(typeof s=="function"){const b=n.createElement("template");b.content&&b.content.ownerDocument&&(n=b.content.ownerDocument)}let x,te="";const{implementation:gt,createNodeIterator:ir,createDocumentFragment:sr,getElementsByTagName:ar}=n,{importNode:lr}=r;let z=zn();t.isSupported=typeof Zn=="function"&&typeof I=="function"&&gt&&gt.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:bt,ERB_EXPR:vt,TMPLIT_EXPR:wt,DATA_ATTR:cr,ARIA_ATTR:dr,IS_SCRIPT_OR_DATA:ur,ATTR_WHITESPACE:Qt,CUSTOM_ELEMENT:hr}=$n;let{IS_ALLOWED_URI:Jt}=$n,P=null;const en=E({},[...Ln,...Mt,...$t,...zt,...Dn]);let D=null;const tn=E({},[...Nn,...Ut,...Mn,...nt]);let R=Object.seal(Qn(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Ce=null,yt=null,nn=!0,kt=!0,rn=!1,on=!0,me=!1,_t=!0,ae=!1,Tt=!1,Et=!1,ge=!1,Ve=!1,Xe=!1,sn=!0,an=!1;const pr="user-content-";let At=!0,Oe=!1,be={},ve=null;const ln=E({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let cn=null;const dn=E({},["audio","video","img","source","image","track"]);let St=null;const un=E({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ye="http://www.w3.org/1998/Math/MathML",Ke="http://www.w3.org/2000/svg",ne="http://www.w3.org/1999/xhtml";let we=ne,Ct=!1,Ot=null;const fr=E({},[Ye,Ke,ne],Nt);let Ze=E({},["mi","mo","mn","ms","mtext"]),Qe=E({},["annotation-xml"]);const mr=E({},["title","style","font","a","script"]);let xe=null;const gr=["application/xhtml+xml","text/html"],br="text/html";let L=null,ye=null;const vr=n.createElement("form"),hn=function(i){return i instanceof RegExp||i instanceof Function},xt=function(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(ye&&ye===i)){if((!i||typeof i!="object")&&(i={}),i=de(i),xe=gr.indexOf(i.PARSER_MEDIA_TYPE)===-1?br:i.PARSER_MEDIA_TYPE,L=xe==="application/xhtml+xml"?Nt:rt,P=Z(i,"ALLOWED_TAGS")?E({},i.ALLOWED_TAGS,L):en,D=Z(i,"ALLOWED_ATTR")?E({},i.ALLOWED_ATTR,L):tn,Ot=Z(i,"ALLOWED_NAMESPACES")?E({},i.ALLOWED_NAMESPACES,Nt):fr,St=Z(i,"ADD_URI_SAFE_ATTR")?E(de(un),i.ADD_URI_SAFE_ATTR,L):un,cn=Z(i,"ADD_DATA_URI_TAGS")?E(de(dn),i.ADD_DATA_URI_TAGS,L):dn,ve=Z(i,"FORBID_CONTENTS")?E({},i.FORBID_CONTENTS,L):ln,Ce=Z(i,"FORBID_TAGS")?E({},i.FORBID_TAGS,L):{},yt=Z(i,"FORBID_ATTR")?E({},i.FORBID_ATTR,L):{},be=Z(i,"USE_PROFILES")?i.USE_PROFILES:!1,nn=i.ALLOW_ARIA_ATTR!==!1,kt=i.ALLOW_DATA_ATTR!==!1,rn=i.ALLOW_UNKNOWN_PROTOCOLS||!1,on=i.ALLOW_SELF_CLOSE_IN_ATTR!==!1,me=i.SAFE_FOR_TEMPLATES||!1,_t=i.SAFE_FOR_XML!==!1,ae=i.WHOLE_DOCUMENT||!1,ge=i.RETURN_DOM||!1,Ve=i.RETURN_DOM_FRAGMENT||!1,Xe=i.RETURN_TRUSTED_TYPE||!1,Et=i.FORCE_BODY||!1,sn=i.SANITIZE_DOM!==!1,an=i.SANITIZE_NAMED_PROPS||!1,At=i.KEEP_CONTENT!==!1,Oe=i.IN_PLACE||!1,Jt=i.ALLOWED_URI_REGEXP||Jn,we=i.NAMESPACE||ne,Ze=i.MATHML_TEXT_INTEGRATION_POINTS||Ze,Qe=i.HTML_INTEGRATION_POINTS||Qe,R=i.CUSTOM_ELEMENT_HANDLING||{},i.CUSTOM_ELEMENT_HANDLING&&hn(i.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(R.tagNameCheck=i.CUSTOM_ELEMENT_HANDLING.tagNameCheck),i.CUSTOM_ELEMENT_HANDLING&&hn(i.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(R.attributeNameCheck=i.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),i.CUSTOM_ELEMENT_HANDLING&&typeof i.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(R.allowCustomizedBuiltInElements=i.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),me&&(kt=!1),Ve&&(ge=!0),be&&(P=E({},Dn),D=[],be.html===!0&&(E(P,Ln),E(D,Nn)),be.svg===!0&&(E(P,Mt),E(D,Ut),E(D,nt)),be.svgFilters===!0&&(E(P,$t),E(D,Ut),E(D,nt)),be.mathMl===!0&&(E(P,zt),E(D,Mn),E(D,nt))),i.ADD_TAGS&&(P===en&&(P=de(P)),E(P,i.ADD_TAGS,L)),i.ADD_ATTR&&(D===tn&&(D=de(D)),E(D,i.ADD_ATTR,L)),i.ADD_URI_SAFE_ATTR&&E(St,i.ADD_URI_SAFE_ATTR,L),i.FORBID_CONTENTS&&(ve===ln&&(ve=de(ve)),E(ve,i.FORBID_CONTENTS,L)),At&&(P["#text"]=!0),ae&&E(P,["html","head","body"]),P.table&&(E(P,["tbody"]),delete Ce.tbody),i.TRUSTED_TYPES_POLICY){if(typeof i.TRUSTED_TYPES_POLICY.createHTML!="function")throw Le('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof i.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Le('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');x=i.TRUSTED_TYPES_POLICY,te=x.createHTML("")}else x===void 0&&(x=ri(p,o)),x!==null&&typeof te=="string"&&(te=x.createHTML(""));F&&F(i),ye=i}},pn=E({},[...Mt,...$t,...Wo]),fn=E({},[...zt,...Vo]),wr=function(i){let u=I(i);(!u||!u.tagName)&&(u={namespaceURI:we,tagName:"template"});const m=rt(i.tagName),S=rt(u.tagName);return Ot[i.namespaceURI]?i.namespaceURI===Ke?u.namespaceURI===ne?m==="svg":u.namespaceURI===Ye?m==="svg"&&(S==="annotation-xml"||Ze[S]):!!pn[m]:i.namespaceURI===Ye?u.namespaceURI===ne?m==="math":u.namespaceURI===Ke?m==="math"&&Qe[S]:!!fn[m]:i.namespaceURI===ne?u.namespaceURI===Ke&&!Qe[S]||u.namespaceURI===Ye&&!Ze[S]?!1:!fn[m]&&(mr[m]||!pn[m]):!!(xe==="application/xhtml+xml"&&Ot[i.namespaceURI]):!1},J=function(i){Ie(t.removed,{element:i});try{I(i).removeChild(i)}catch{T(i)}},Je=function(i,u){try{Ie(t.removed,{attribute:u.getAttributeNode(i),from:u})}catch{Ie(t.removed,{attribute:null,from:u})}if(u.removeAttribute(i),i==="is")if(ge||Ve)try{J(u)}catch{}else try{u.setAttribute(i,"")}catch{}},mn=function(i){let u=null,m=null;if(Et)i="<remove></remove>"+i;else{const N=Pn(i,/^[\r\n\t ]+/);m=N&&N[0]}xe==="application/xhtml+xml"&&we===ne&&(i='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+i+"</body></html>");const S=x?x.createHTML(i):i;if(we===ne)try{u=new _().parseFromString(S,xe)}catch{}if(!u||!u.documentElement){u=gt.createDocument(we,"template",null);try{u.documentElement.innerHTML=Ct?te:S}catch{}}const $=u.body||u.documentElement;return i&&m&&$.insertBefore(n.createTextNode(m),$.childNodes[0]||null),we===ne?ar.call(u,ae?"html":"body")[0]:ae?u.documentElement:$},gn=function(i){return ir.call(i.ownerDocument||i,i,f.SHOW_ELEMENT|f.SHOW_COMMENT|f.SHOW_TEXT|f.SHOW_PROCESSING_INSTRUCTION|f.SHOW_CDATA_SECTION,null)},Rt=function(i){return i instanceof h&&(typeof i.nodeName!="string"||typeof i.textContent!="string"||typeof i.removeChild!="function"||!(i.attributes instanceof w)||typeof i.removeAttribute!="function"||typeof i.setAttribute!="function"||typeof i.namespaceURI!="string"||typeof i.insertBefore!="function"||typeof i.hasChildNodes!="function")},bn=function(i){return typeof c=="function"&&i instanceof c};function re(b,i,u){tt(b,m=>{m.call(t,i,u,ye)})}const vn=function(i){let u=null;if(re(z.beforeSanitizeElements,i,null),Rt(i))return J(i),!0;const m=L(i.nodeName);if(re(z.uponSanitizeElement,i,{tagName:m,allowedTags:P}),i.hasChildNodes()&&!bn(i.firstElementChild)&&j(/<[/\w]/g,i.innerHTML)&&j(/<[/\w]/g,i.textContent)||i.nodeType===Ne.progressingInstruction||_t&&i.nodeType===Ne.comment&&j(/<[/\w]/g,i.data))return J(i),!0;if(!P[m]||Ce[m]){if(!Ce[m]&&yn(m)&&(R.tagNameCheck instanceof RegExp&&j(R.tagNameCheck,m)||R.tagNameCheck instanceof Function&&R.tagNameCheck(m)))return!1;if(At&&!ve[m]){const S=I(i)||i.parentNode,$=C(i)||i.childNodes;if($&&S){const N=$.length;for(let G=N-1;G>=0;--G){const ee=g($[G],!0);ee.__removalCount=(i.__removalCount||0)+1,S.insertBefore(ee,k(i))}}}return J(i),!0}return i instanceof l&&!wr(i)||(m==="noscript"||m==="noembed"||m==="noframes")&&j(/<\/no(script|embed|frames)/i,i.innerHTML)?(J(i),!0):(me&&i.nodeType===Ne.text&&(u=i.textContent,tt([bt,vt,wt],S=>{u=Pe(u,S," ")}),i.textContent!==u&&(Ie(t.removed,{element:i.cloneNode()}),i.textContent=u)),re(z.afterSanitizeElements,i,null),!1)},wn=function(i,u,m){if(sn&&(u==="id"||u==="name")&&(m in n||m in vr))return!1;if(!(kt&&!yt[u]&&j(cr,u))){if(!(nn&&j(dr,u))){if(!D[u]||yt[u]){if(!(yn(i)&&(R.tagNameCheck instanceof RegExp&&j(R.tagNameCheck,i)||R.tagNameCheck instanceof Function&&R.tagNameCheck(i))&&(R.attributeNameCheck instanceof RegExp&&j(R.attributeNameCheck,u)||R.attributeNameCheck instanceof Function&&R.attributeNameCheck(u))||u==="is"&&R.allowCustomizedBuiltInElements&&(R.tagNameCheck instanceof RegExp&&j(R.tagNameCheck,m)||R.tagNameCheck instanceof Function&&R.tagNameCheck(m))))return!1}else if(!St[u]){if(!j(Jt,Pe(m,Qt,""))){if(!((u==="src"||u==="xlink:href"||u==="href")&&i!=="script"&&Ho(m,"data:")===0&&cn[i])){if(!(rn&&!j(ur,Pe(m,Qt,"")))){if(m)return!1}}}}}}return!0},yn=function(i){return i!=="annotation-xml"&&Pn(i,hr)},kn=function(i){re(z.beforeSanitizeAttributes,i,null);const{attributes:u}=i;if(!u||Rt(i))return;const m={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:D,forceKeepAttr:void 0};let S=u.length;for(;S--;){const $=u[S],{name:N,namespaceURI:G,value:ee}=$,Re=L(N);let U=N==="value"?ee:qo(ee);if(m.attrName=Re,m.attrValue=U,m.keepAttr=!0,m.forceKeepAttr=void 0,re(z.uponSanitizeAttribute,i,m),U=m.attrValue,an&&(Re==="id"||Re==="name")&&(Je(N,i),U=pr+U),_t&&j(/((--!?|])>)|<\/(style|title)/i,U)){Je(N,i);continue}if(m.forceKeepAttr||(Je(N,i),!m.keepAttr))continue;if(!on&&j(/\/>/i,U)){Je(N,i);continue}me&&tt([bt,vt,wt],Tn=>{U=Pe(U,Tn," ")});const _n=L(i.nodeName);if(wn(_n,Re,U)){if(x&&typeof p=="object"&&typeof p.getAttributeType=="function"&&!G)switch(p.getAttributeType(_n,Re)){case"TrustedHTML":{U=x.createHTML(U);break}case"TrustedScriptURL":{U=x.createScriptURL(U);break}}try{G?i.setAttributeNS(G,N,U):i.setAttribute(N,U),Rt(i)?J(i):In(t.removed)}catch{}}}re(z.afterSanitizeAttributes,i,null)},yr=function b(i){let u=null;const m=gn(i);for(re(z.beforeSanitizeShadowDOM,i,null);u=m.nextNode();)re(z.uponSanitizeShadowNode,u,null),vn(u),kn(u),u.content instanceof a&&b(u.content);re(z.afterSanitizeShadowDOM,i,null)};return t.sanitize=function(b){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=null,m=null,S=null,$=null;if(Ct=!b,Ct&&(b="<!-->"),typeof b!="string"&&!bn(b))if(typeof b.toString=="function"){if(b=b.toString(),typeof b!="string")throw Le("dirty is not a string, aborting")}else throw Le("toString is not a function");if(!t.isSupported)return b;if(Tt||xt(i),t.removed=[],typeof b=="string"&&(Oe=!1),Oe){if(b.nodeName){const ee=L(b.nodeName);if(!P[ee]||Ce[ee])throw Le("root node is forbidden and cannot be sanitized in-place")}}else if(b instanceof c)u=mn("<!---->"),m=u.ownerDocument.importNode(b,!0),m.nodeType===Ne.element&&m.nodeName==="BODY"||m.nodeName==="HTML"?u=m:u.appendChild(m);else{if(!ge&&!me&&!ae&&b.indexOf("<")===-1)return x&&Xe?x.createHTML(b):b;if(u=mn(b),!u)return ge?null:Xe?te:""}u&&Et&&J(u.firstChild);const N=gn(Oe?b:u);for(;S=N.nextNode();)vn(S),kn(S),S.content instanceof a&&yr(S.content);if(Oe)return b;if(ge){if(Ve)for($=sr.call(u.ownerDocument);u.firstChild;)$.appendChild(u.firstChild);else $=u;return(D.shadowroot||D.shadowrootmode)&&($=lr.call(r,$,!0)),$}let G=ae?u.outerHTML:u.innerHTML;return ae&&P["!doctype"]&&u.ownerDocument&&u.ownerDocument.doctype&&u.ownerDocument.doctype.name&&j(er,u.ownerDocument.doctype.name)&&(G="<!DOCTYPE "+u.ownerDocument.doctype.name+`>
`+G),me&&tt([bt,vt,wt],ee=>{G=Pe(G,ee," ")}),x&&Xe?x.createHTML(G):G},t.setConfig=function(){let b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};xt(b),Tt=!0},t.clearConfig=function(){ye=null,Tt=!1},t.isValidAttribute=function(b,i,u){ye||xt({});const m=L(b),S=L(i);return wn(m,S,u)},t.addHook=function(b,i){typeof i=="function"&&Ie(z[b],i)},t.removeHook=function(b,i){if(i!==void 0){const u=jo(z[b],i);return u===-1?void 0:Fo(z[b],u,1)[0]}return In(z[b])},t.removeHooks=function(b){z[b]=[]},t.removeAllHooks=function(){z=zn()},t}var oi=tr();const ii={ALLOWED_TAGS:["br","div","span","a","ul","ol","li","sup","sub","code","cite"],ALLOWED_ATTR:["style","href"]};function Un(e){return oi.sanitize(e,ii)}var si=Object.defineProperty,ai=Object.getOwnPropertyDescriptor,ft=(e,t,n,r)=>{for(var o=r>1?void 0:r?ai(t,n):t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(o=(r?s(t,n,o):s(o))||o);return r&&o&&si(t,n,o),o};let Ee=class extends W{constructor(){super(...arguments),this.open=!1,this.state=ot.PENDING,this.notifications=[]}handleDeleteAllNotifications(){this.dispatchEvent(new CustomEvent("bkddeleteallnotifications",{bubbles:!0,composed:!0}))}handleDeleteNotification(e){this.dispatchEvent(new CustomEvent("bkddeletenotification",{bubbles:!0,composed:!0,detail:{id:e}}))}renderContent(){return this.state===ot.ERROR?y`<div class="error">
        ${O("Fehler beim Laden der Benachrichtigungen")}
      </div>`:this.state===ot.PENDING?y`<div class="pending">${se(No)}</div>`:this.notifications.length===0?y`<div class="notification">${O("Keine Benachrichtigungen")}</div>`:_e(this.notifications,e=>e.id,e=>this.renderNotification(e))}renderNotification(e){const t=Un(e.subject),n=Un(e.body);return y`<div class="notification">
      <div class="text">
        <div class="subject">${se(t)}</div>
        <div class="body">${se(n)}</div>
      </div>
      <button
        type="button"
        aria-label="${O("Benachrichtigung löschen")}"
        @click=${()=>this.handleDeleteNotification(e.id)}
      >
        ${se(Mo)}
      </button>
    </div> `}render(){if(this.open)return y`<div id="notifications-dropdown">
      <div class="header">
        <h2>${O("Benachrichtigungen")}</h2>
        <button
          type="button"
          ?disabled=${!this.notifications||this.notifications.length===0}
          @click="${()=>this.handleDeleteAllNotifications()}"
        >
          ${O("Alle löschen")}
        </button>
      </div>
      <div class="content">${this.renderContent()}</div>
    </div>`}};Ee.styles=[B,q`
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
    `];ft([Y()],Ee.prototype,"open",2);ft([Y()],Ee.prototype,"state",2);ft([Y()],Ee.prototype,"notifications",2);Ee=ft([V("bkd-notifications-dropdown"),X()],Ee);var li=Object.defineProperty,ci=Object.getOwnPropertyDescriptor,Be=(e,t,n,r)=>{for(var o=r>1?void 0:r?ci(t,n):t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(o=(r?s(t,n,o):s(o))||o);return r&&o&&li(t,n,o),o};const Me=Wt();typeof(Me==null?void 0:Me.notificationRefreshTime)!="number"&&(Me.notificationRefreshTime=30);var ot=(e=>(e.PENDING="pending",e.ERROR="error",e.SUCCESS="success",e))(ot||{});let pe=class extends W{constructor(){super(...arguments),this.state="pending",this.dropdown=new qe(this,{queryToggleElement:()=>this.toggleElement??null,queryMenuElement:()=>{var e;return((e=this.dropdownElement)==null?void 0:e.shadowRoot)??null},queryItems:()=>{var e,t;return((t=(e=this.dropdownElement)==null?void 0:e.shadowRoot)==null?void 0:t.querySelectorAll("button"))??null},queryFocused:()=>{var e,t;return((t=(e=this.dropdownElement)==null?void 0:e.shadowRoot)==null?void 0:t.activeElement)??null}})}connectedCallback(){super.connectedCallback(),this.fetch(),this.interval=setInterval(()=>this.fetch(),Me.notificationRefreshTime*1e3)}disconnectedCallback(){clearInterval(this.interval),super.disconnectedCallback()}handleDeleteAllNotifications(){const e=[];An(e),this.notifications=e}handleDeleteNotification(e){if(!this.notifications)return;const t=this.notifications.filter(n=>n.id!==e.detail.id);An(t),this.notifications=t}async fetch(){try{this.notifications=await $r(),this.state="success"}catch{this.state="error"}}render(){var e,t;return y` <button
        id="notifications-toggle"
        type="button"
        aria-label="${O("Benachrichtigungen")}"
        aria-expanded=${this.dropdown.open}
        @click="${()=>this.dropdown.toggle()}"
      >
        ${se(Do)}
        <span
          class="circle"
          ?hidden=${this.state!=="success"||((e=this.notifications)==null?void 0:e.length)===0}
        >
          ${(t=this.notifications)==null?void 0:t.length}
        </span>
      </button>
      <bkd-notifications-dropdown
        .open=${this.dropdown.open}
        .state=${this.state}
        .notifications=${this.notifications}
        @bkddeleteallnotifications=${this.handleDeleteAllNotifications.bind(this)}
        @bkddeletenotification=${this.handleDeleteNotification.bind(this)}
      >
      </bkd-notifications-dropdown>`}};pe.styles=[B,q`
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
    `];Be([Q("button")],pe.prototype,"toggleElement",2);Be([Q("bkd-notifications-dropdown")],pe.prototype,"dropdownElement",2);Be([Se()],pe.prototype,"notifications",2);Be([Se()],pe.prototype,"state",2);pe=Be([V("bkd-notifications-toggle"),X()],pe);const di=`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="7.4" fill="none"><path fill="currentColor" d="m6 7.4-6-6L1.4 0 6 4.6 10.6 0 12 1.4Z"/></svg>
`,ui=`<svg xmlns="http://www.w3.org/2000/svg" width="11.414" height="11.414" fill="none"><path stroke="currentColor" stroke-width="2" d="m.707.707 10 10m-10 0 10-10"/></svg>
`,hi=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M2 20v-2.8a3 3 0 0 1 .425-1.563A2.794 2.794 0 0 1 3.6 14.55c1-.5 2.038-.883 3.113-1.15 1.074-.267 2.17-.4 3.287-.4.417 0 .833.03 1.25.088.417.058.833.129 1.25.212v1.575c-.75.367-1.354.85-1.813 1.45-.458.6-.687 1.383-.687 2.35V20H2Zm10 0v-1.4c0-.4.104-.77.313-1.113a1.76 1.76 0 0 1 .887-.737c.6-.25 1.22-.438 1.863-.563a10.11 10.11 0 0 1 3.874 0 9.604 9.604 0 0 1 1.863.563c.383.15.68.396.887.738.209.341.313.712.313 1.112V20H12Zm5-5c-.7 0-1.292-.242-1.775-.725-.483-.483-.725-1.075-.725-1.775s.242-1.292.725-1.775C15.708 10.242 16.3 10 17 10s1.292.242 1.775.725c.483.483.725 1.075.725 1.775s-.242 1.292-.725 1.775C18.292 14.758 17.7 15 17 15Zm-7-3c-1.1 0-2.042-.392-2.825-1.175C6.392 10.042 6 9.1 6 8s.392-2.042 1.175-2.825C7.958 4.392 8.9 4 10 4s2.042.392 2.825 1.175C13.608 5.958 14 6.9 14 8s-.392 2.042-1.175 2.825C12.042 11.608 11.1 12 10 12Z"/></svg>
`;function pi(e,t,n){const r=document.createElement("form");r.method=e,r.style.visibility="hidden",r.action=t,Object.keys(n).forEach(o=>{const a=document.createElement("input");a.type="hidden",a.name=o,a.value=n[o],r.appendChild(a)}),document.body.appendChild(r),r.submit()}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*nr(e,t){if(e!==void 0){let n=0;for(const r of e)yield t(r,n++)}}var fi=Object.defineProperty,mi=Object.getOwnPropertyDescriptor,mt=(e,t,n,r)=>{for(var o=r>1?void 0:r?mi(t,n):t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(o=(r?s(t,n,o):s(o))||o);return r&&o&&fi(t,n,o),o};let Ae=class extends W{constructor(){super(...arguments),this.availableSubstitutions=[],this.activeSubstitution=null,this.open=!1}get displayedSubstitutions(){return this.availableSubstitutions.filter(e=>!this.activeSubstitution||e.Id===this.activeSubstitution.Id)}handleSubstitutionClick(e,t){e.preventDefault(),this.dispatchEvent(new CustomEvent("bkdsubstitutionstart",{detail:{substitution:t},composed:!0,bubbles:!0}))}handleStopClick(){this.dispatchEvent(new CustomEvent("bkdsubstitutionstop",{composed:!0,bubbles:!0}))}handleCloseClick(){this.dispatchEvent(new CustomEvent("bkdclose"))}renderSubstitution(e){var n;const t=e.Id===((n=this.activeSubstitution)==null?void 0:n.Id);return y`
      <li role="presentation" class=${Te({active:t})}>
        <a
          role="menuitem"
          href="#"
          @click=${r=>this.handleSubstitutionClick(r,e)}
          >${e.Holder}</a
        >
      </li>
    `}render(){if(this.open)return y`
      <ul role="menu" id="substitutions-menu">
        <li role="presentation" class="dropdown-menu-header">
          <button
            role="menuitem"
            class="dropdown-menu-close"
            @click=${this.handleCloseClick.bind(this)}
          >
            <img src="icons/close.svg" alt=${O("Schliessen")} />
          </button>
          <div class="dropdown-menu-heading">
            ${O("Stellvertretung ausüben")}
          </div>
        </li>
        ${nr(this.displayedSubstitutions,this.renderSubstitution.bind(this))}
        ${oe(this.activeSubstitution,()=>y`<li role="presentation" class="dropdown-menu-stop">
              <button role="menuitem" @click=${this.handleStopClick.bind(this)}>
                ${O("Stellvertretung beenden")}
              </button>
            </li>`)}
      </ul>
    `}};Ae.styles=[B,q`
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
    `];mt([Y()],Ae.prototype,"availableSubstitutions",2);mt([Y()],Ae.prototype,"activeSubstitution",2);mt([Y()],Ae.prototype,"open",2);Ae=mt([V("bkd-substitutions-dropdown"),X()],Ae);var gi=Object.defineProperty,bi=Object.getOwnPropertyDescriptor,We=(e,t,n,r)=>{for(var o=r>1?void 0:r?bi(t,n):t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(o=(r?s(t,n,o):s(o))||o);return r&&o&&gi(t,n,o),o};let fe=class extends W{constructor(){super(),this.availableSubstitutions=[],this.activeSubstitution=null,this.dropdown=new qe(this,{queryToggleElement:()=>this.toggleElement??null,queryMenuElement:()=>{var e;return((e=this.menuElement)==null?void 0:e.shadowRoot)??null},tabInside:!this.isLargeScreen(),queryItems:()=>{var e,t;return((t=(e=this.menuElement)==null?void 0:e.shadowRoot)==null?void 0:t.querySelectorAll("a[role='menuitem']"))??null},queryFocused:()=>{var e,t;return((t=(e=this.menuElement)==null?void 0:e.shadowRoot)==null?void 0:t.activeElement)??null}}),new ie(this,v)}connectedCallback(){super.connectedCallback(),this.fetch()}async fetch(){const e=await zr();this.availableSubstitutions=e.filter(n=>this.isNotInFuture(n)).sort((n,r)=>n.Holder.localeCompare(r.Holder));const t=this.getActiveSubstitutionId();this.activeSubstitution=this.availableSubstitutions.find(n=>n.Id===t)??null}isNotInFuture(e){return!!e.DateFrom&&new Date(e.DateFrom)<=new Date}getActiveSubstitutionId(){var e;return((e=A.accessTokenPayload)==null?void 0:e.substitutionId)??null}toggle(e){e.preventDefault(),this.activeSubstitution&&this.isLargeScreen()?this.stopSubstitution():this.dropdown.toggle()}isLargeScreen(){return window.innerWidth>1200}startSubstitution(e){this.activeSubstitution||this.redirect(e,"start")}stopSubstitution(){this.activeSubstitution&&this.redirect(this.activeSubstitution,"stop")}redirect(e,t){const{oAuthServer:n,oAuthPrefix:r}=Wt(),o=`${n}/${r}/Authorization/Substitutions/${e.Id}/${t}`;pi("POST",o,{access_token:A.accessToken??"",redirect_uri:ue("home")})}handleSubstitutionStart(e){this.dropdown.close(),this.startSubstitution(e.detail.substitution)}handleSubstitutionStop(){this.dropdown.close(),this.stopSubstitution()}getLabel(){var e;return((e=this.activeSubstitution)==null?void 0:e.Holder)||O("Stellvertretung ausüben")}isAllowed(){return v.app.scope==="Tutoring"}render(){if(!(!this.isAllowed()||this.availableSubstitutions.length===0))return y`
      <button
        class=${Te({active:!!this.activeSubstitution,open:this.dropdown.open})}
        @click=${this.toggle.bind(this)}
        aria-label=${this.getLabel()}
        aria-expanded=${this.dropdown.open}
        aria-haspopup="menu"
      >
        <div class="icon">${se(hi)}</div>
        <div class="label">${this.getLabel()}</div>
        <div class="icon-caret">
          ${se(this.activeSubstitution?ui:di)}
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
    `}};fe.styles=[B,q`
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
    `];We([Q("button")],fe.prototype,"toggleElement",2);We([Q("bkd-substitutions-dropdown")],fe.prototype,"menuElement",2);We([Se()],fe.prototype,"availableSubstitutions",2);We([Se()],fe.prototype,"activeSubstitution",2);fe=We([V("bkd-substitutions-toggle"),X()],fe);var vi=Object.defineProperty,wi=Object.getOwnPropertyDescriptor,Kt=(e,t,n,r)=>{for(var o=r>1?void 0:r?wi(t,n):t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(o=(r?s(t,n,o):s(o))||o);return r&&o&&vi(t,n,o),o};let Fe=class extends W{constructor(){super(),this.dropdown=new qe(this,{queryToggleElement:()=>this.toggleElement??null,queryMenuElement:()=>this.menuElement??null,queryItems:()=>{var e;return((e=this.shadowRoot)==null?void 0:e.querySelectorAll("a[role='menuitem']"))??null},queryFocused:()=>{var e;return((e=this.shadowRoot)==null?void 0:e.activeElement)??null}}),new ie(this,v)}handleSettingsItemClick(e,t){this.dropdown.close(),this.dispatchEvent(new CustomEvent("bkdsettingsitemclick",{detail:{item:t,event:e},composed:!0,bubbles:!0}))}renderSettingsItem(e){return y`<li role="presentation">
      <a
        role="menuitem"
        href=${e.href}
        target=${e.external?"_blank":"_self"}
        @click=${t=>this.handleSettingsItemClick(t,e)}
      >
        ${e.label}</a
      >
      ${e.img?y`<img src=${e.img} alt="" width="24" height="24" />`:Ue}
    </li>`}render(){return y`
      <button
        type="button"
        @click=${()=>this.dropdown.toggle()}
        aria-label=${O("Menü Benutzereinstellungen")}
        aria-expanded=${this.dropdown.open}
        aria-haspopup="menu"
      >
        <img src="/icons/settings.svg" alt="" width="32" height="32" />
      </button>
      <ul role="menu" ?hidden=${!this.dropdown.open}>
        ${nr(Xn(v.locale),this.renderSettingsItem.bind(this))}
      </ul>
    `}};Fe.styles=[B,q`
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
    `];Kt([Q("button")],Fe.prototype,"toggleElement",2);Kt([Q('ul[role="menu"]')],Fe.prototype,"menuElement",2);Fe=Kt([V("bkd-user-settings"),X()],Fe);var yi=Object.defineProperty,ki=Object.getOwnPropertyDescriptor,rr=(e,t,n,r)=>{for(var o=r>1?void 0:r?ki(t,n):t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(o=(r?s(t,n,o):s(o))||o);return r&&o&&yi(t,n,o),o};let ht=class extends W{constructor(){super(),this.mobileNavOpen=!1,new ie(this,v)}render(){return y`
      <nav role="navigation" aria-label=${O("Servicenavigation")}>
        <bkd-substitutions-toggle></bkd-substitutions-toggle>
        <bkd-notifications-toggle></bkd-notifications-toggle>
        <bkd-user-settings></bkd-user-settings>
        ${oe(v.allowedLocales.length>1,()=>y`<bkd-language-switcher></bkd-language-switcher>`)}
        <bkd-hamburger .open=${this.mobileNavOpen}></bkd-hamburger>
      </nav>
    `}};ht.styles=[B,q`
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
    `];rr([Y()],ht.prototype,"mobileNavOpen",2);ht=rr([V("bkd-service-nav"),X()],ht);var _i=Object.defineProperty,Ti=Object.getOwnPropertyDescriptor,Zt=(e,t,n,r)=>{for(var o=r>1?void 0:r?Ti(t,n):t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(o=(r?s(t,n,o):s(o))||o);return r&&o&&_i(t,n,o),o};let He=class extends W{constructor(){super(),this.mobileNav=new qe(this,{queryToggleElement:()=>{var e,t;return((t=(e=this.serviceNavElement)==null?void 0:e.shadowRoot)==null?void 0:t.querySelector("bkd-hamburger"))??null},queryMenuElement:()=>{var e;return((e=this.mobileNavElement)==null?void 0:e.shadowRoot)??null},tabInside:!0}),new ie(this,v)}handleLogoClick(e){e.preventDefault(),v.navigationItemKey=ze.navigationHome.key,v.appPath=ze.navigationHome.appPath}handleNavItemClick(e){const{item:t}=e.detail;v.navigationItemKey=t.key,this.mobileNav.close()}handleSettingsItemClick(e){const{item:t,event:n}=e.detail;t.external||(n.preventDefault(),t.key==="logout"?this.dispatchEvent(new CustomEvent("bkdlogout",{composed:!0,bubbles:!0})):v.navigationItemKey=t.key),this.mobileNav.close()}render(){return y`
      <header role="banner">
        <a
          class="logo"
          href=${ue("home")}
          @click=${this.handleLogoClick.bind(this)}
          ><img src="logo.svg" alt=${O("Evento Startseite")}
        /></a>
        <div class="logo-caption">${v.instanceName}</div>
        ${oe(navigator.onLine,()=>y`<bkd-service-nav
              .mobileNavOpen=${this.mobileNav.open}
              @bkdhamburgertoggle=${()=>this.mobileNav.toggle()}
              @bkdsettingsitemclick=${this.handleSettingsItemClick.bind(this)}
            ></bkd-service-nav> `)}
        ${oe(navigator.onLine,()=>y` <bkd-nav
              @bkdnavitemclick=${this.handleNavItemClick.bind(this)}
            ></bkd-nav>`)}
        ${oe(this.mobileNav.open,()=>y`<bkd-mobile-nav
              @bkdnavitemclick=${this.handleNavItemClick.bind(this)}
              @bkdsettingsitemclick=${this.handleSettingsItemClick.bind(this)}
            ></bkd-mobile-nav>`)}
      </header>
    `}};He.styles=[B,q`
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
    `];Zt([Q("bkd-service-nav")],He.prototype,"serviceNavElement",2);Zt([Q("bkd-mobile-nav")],He.prototype,"mobileNavElement",2);He=Zt([V("bkd-header"),X()],He);var Ei=Object.defineProperty,Ai=Object.getOwnPropertyDescriptor,or=(e,t,n,r)=>{for(var o=r>1?void 0:r?Ai(t,n):t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(o=(r?s(t,n,o):s(o))||o);return r&&o&&Ei(t,n,o),o};const it=so(),Si=async function(){await ao(it,jr(),Ur()),v.init()}();Fr(q`
    ${Hr}
    :root {
      ${qr}
    }
  `.toString());let pt=class extends W{constructor(){super(),this.authReady=!1,this.subscriptions=[],this.handleMessage=({data:e})=>{switch(e.type){case"bkdAppPushState":{const t=e.args[2];this.updateUrlAndNavigationState(t,!1);break}case"bkdAppReplaceState":{const t=e.args[2];It(Pt(t),!0);break}case"bkdAppHashChange":{const{url:t}=e;It(Pt(t));break}}},Si.then(()=>this.authReady=!0),new ie(this,v)}connectedCallback(){super.connectedCallback(),v.initialized.then(()=>setTimeout(()=>{A.scope!==v.app.scope&&jt(it,v.app.scope,v.locale)})),this.subscriptions.push(v.subscribeScopeAndLocale((t,n)=>jt(it,t,n),!0)),this.subscriptions.push(v.subscribeInstanceName(this.updateTitle.bind(this))),this.subscriptions.push(v.subscribeNavigationItem(this.updateTitle.bind(this))),window.addEventListener("message",this.handleMessage);const e=new URL(location.href);v.actualAppPath=e.hash,window.addEventListener("hashchange",this.handleHashChange)}disconnectedCallback(){super.disconnectedCallback(),this.subscriptions.forEach(e=>e()),window.removeEventListener("message",this.handleMessage),window.removeEventListener("hashchange",this.handleHashChange)}updateTitle(){const{instanceName:e,navigationItem:t}=v,n=(t==null?void 0:t.label)&&(t==null?void 0:t.key)!==ze.navigationHome.key;document.title=n?[t==null?void 0:t.label,e].join(" ― "):e}updateUrlAndNavigationState(e,t){var o;const n=Pt(e);It(n,t);const r=Gr(v.navigation,n);(o=r==null?void 0:r.item)!=null&&o.key&&r.item.key!==v.navigationItemKey?(v.actualAppPath=n,v.navigationItemKey=r.item.key):v.appPath=n}handleHashChange(e){const t=new URL(e.newURL);v.appPath=t.hash}handleLogout(){lo(it)}render(){return y`
      ${oe(this.authReady&&A.authenticated,()=>y`
          <bkd-header @bkdlogout=${this.handleLogout.bind(this)}></bkd-header>
          <bkd-content></bkd-content>
          <bkd-footer></bkd-footer>
        `)}
    `}};pt.styles=[B,q`
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
    `];or([Se()],pt.prototype,"authReady",2);pt=or([V("bkd-portal"),X()],pt);
