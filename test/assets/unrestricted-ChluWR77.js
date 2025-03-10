import{p as s,v as h,w as l,x as b,S as f,y as d,z as k,n as x,Y as w,B as u,C as p,D as v,A as z,Q as _,R as $,U as P}from"./LanguageSwitcher-STJSscpL.js";var y=Object.defineProperty,O=Object.getOwnPropertyDescriptor,C=(t,r,a,n)=>{for(var e=n>1?void 0:n?O(r,a):r,o=t.length-1,i;o>=0;o--)(i=t[o])&&(e=(n?i(r,a,e):i(e))||e);return n&&e&&y(r,a,e),e};s.init();let m=class extends b{constructor(){super(),new f(this,s)}renderFooterContent(){return d`
      ${k(s.navigationItemKey,[["contact",()=>d`<bkd-contact></bkd-contact>`],["legal",()=>d`<bkd-legal></bkd-legal>`],["imprint",()=>d`<bkd-imprint></bkd-imprint>`]],()=>d``)}
    `}render(){const t=x.footer.find(({key:a})=>a===s.navigationItemKey),r=t?w(t):null;return d`
      <main role="main">
        ${u(r==null?void 0:r.heading,()=>d`<h1>${t==null?void 0:t.label}</h1>`)}
        ${u(!t,()=>d`<h1>Not found</h1>`)}
        ${this.renderFooterContent()}
      </main>
    `}};m.styles=[h,l`
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
    `];m=C([p("bkd-content-unrestricted"),v()],m);var D=Object.defineProperty,j=Object.getOwnPropertyDescriptor,S=(t,r,a,n)=>{for(var e=n>1?void 0:n?j(r,a):r,o=t.length-1,i;o>=0;o--)(i=t[o])&&(e=(n?i(r,a,e):i(e))||e);return n&&e&&D(r,a,e),e};let g=class extends b{render(){return d`
      <header role="banner">
        <img class="logo" src="../logo.svg" alt=${z("Evento")} />
        <div class="logo-caption">Evento</div>
        <bkd-language-switcher></bkd-language-switcher>
      </header>
    `}};g.styles=[h,l`
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
    `];g=S([p("bkd-header-unrestricted"),v()],g);var U=Object.defineProperty,F=Object.getOwnPropertyDescriptor,L=(t,r,a,n)=>{for(var e=n>1?void 0:n?F(r,a):r,o=t.length-1,i;o>=0;o--)(i=t[o])&&(e=(n?i(r,a,e):i(e))||e);return n&&e&&U(r,a,e),e};s.init();_(l`
    ${$}
    :root {
      ${P}
    }
  `.toString());let c=class extends b{constructor(){super(),new f(this,s)}render(){return d`
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
    `];c=L([p("bkd-portal-unrestricted"),v()],c);
