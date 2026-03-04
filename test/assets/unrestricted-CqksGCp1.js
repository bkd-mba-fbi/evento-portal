import{p as s,v as h,w as l,x as b,S as u,z as x,y as n,l as f,Y as w,B as v,C as p,D as k,A as z,Q as y,R as $,U as _}from"./LanguageSwitcher-Csf5yWOV.js";var O=Object.getOwnPropertyDescriptor,C=(r,a,d,o)=>{for(var e=o>1?void 0:o?O(a,d):a,t=r.length-1,i;t>=0;t--)(i=r[t])&&(e=i(e)||e);return e};s.init();let g=class extends b{constructor(){super(),new u(this,s)}renderFooterContent(){return n`
      ${x(s.navigationItemKey,[["contact",()=>n`<bkd-contact></bkd-contact>`],["legal",()=>n`<bkd-legal></bkd-legal>`],["imprint",()=>n`<bkd-imprint></bkd-imprint>`]],()=>n``)}
    `}render(){const r=f.footer.find(({key:d})=>d===s.navigationItemKey),a=r?w(r):null;return n`
      <main role="main">
        ${v(a?.heading,()=>n`<h1>${r?.label}</h1>`)}
        ${v(!r,()=>n`<h1>Not found</h1>`)}
        ${this.renderFooterContent()}
      </main>
    `}};g.styles=[h,l`
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
    `];g=C([p("bkd-content-unrestricted"),k()],g);var D=Object.getOwnPropertyDescriptor,P=(r,a,d,o)=>{for(var e=o>1?void 0:o?D(a,d):a,t=r.length-1,i;t>=0;t--)(i=r[t])&&(e=i(e)||e);return e};let m=class extends b{render(){return n`
      <header role="banner">
        <img class="logo" src="../logo.svg" alt=${z("Evento")} />
        <div class="logo-caption">Evento</div>
        <bkd-language-switcher></bkd-language-switcher>
      </header>
    `}};m.styles=[h,l`
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
          "lang lang"
          "logo ."
          "logo-caption logo-caption";
      }

      .logo {
        grid-area: logo;
        display: block;
        width: 150px;
      }

      .logo-caption {
        grid-area: logo-caption;
        align-self: baseline;
        max-width: 21rem;
        line-height: 2.5625rem;
        vertical-align: middle;
      }

      bkd-language-switcher {
        grid-area: lang;
        justify-self: end;
      }

      /* Medium screen */

      @media screen and (max-width: 1200px) {
        :host {
          --bkd-header-margin-horizontal: var(--bkd-margin-horizontal-medium);
        }

        .logo {
          width: 110px;
        }

        .logo-caption {
          margin-top: 12px;
          font-size: 0.75rem;
          font-weight: 400;
          line-height: 0.75rem;
          max-width: 13.125rem;
        }
      }

      /* Small screen */

      @media screen and (max-width: 767px) {
        :host {
          --bkd-header-margin-horizontal: var(--bkd-margin-horizontal-small);
        }
      }
    `];m=P([p("bkd-header-unrestricted"),k()],m);var S=Object.getOwnPropertyDescriptor,j=(r,a,d,o)=>{for(var e=o>1?void 0:o?S(a,d):a,t=r.length-1,i;t>=0;t--)(i=r[t])&&(e=i(e)||e);return e};s.init();y(l`
    ${$}
    :root {
      ${_}
    }
  `.toString());let c=class extends b{constructor(){super(),new u(this,s)}render(){return n`
      <bkd-header-unrestricted></bkd-header-unrestricted>
      <bkd-content-unrestricted></bkd-content-unrestricted>
      <bkd-footer></bkd-footer>
    `}};c.styles=[h,l`
      :host {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        width: 100%;
        max-width: 1920px;
        margin: 0 auto;
      }

      bkd-content-unrestricted {
        flex: auto;
      }
    `];c=j([p("bkd-portal-unrestricted"),k()],c);
