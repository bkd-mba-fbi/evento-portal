import{$ as e,G as t,H as n,J as r,Q as i,U as a,V as o,W as s,Y as c,c as l,d as u,l as d,m as f,p,s as m,u as h,y as g}from"./LanguageSwitcher-Ba4qSt2f.js";p.init();var _=class extends c{static{this.styles=[u,e`
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
    `]}constructor(){super(),new n(this,p)}renderFooterContent(){return i`
      ${m(p.navigationItemKey,[[`contact`,()=>i`<bkd-contact></bkd-contact>`],[`legal`,()=>i`<bkd-legal></bkd-legal>`],[`imprint`,()=>i`<bkd-imprint></bkd-imprint>`]],()=>i``)}
    `}render(){let e=o.footer.find(({key:e})=>e===p.navigationItemKey);return i`
      <main role="main">
        ${t((e?g(e):null)?.heading,()=>i`<h1>${e?.label}</h1>`)}
        ${t(!e,()=>i`<h1>Not found</h1>`)}
        ${this.renderFooterContent()}
      </main>
    `}};_=f([r(`bkd-content-unrestricted`),a()],_);var v=class extends c{static{this.styles=[u,e`
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
    `]}render(){return i`
      <header role="banner">
        <img class="logo" src="../logo.svg" alt=${s(`Evento`)} />
        <div class="logo-caption">Evento</div>
        <bkd-language-switcher></bkd-language-switcher>
      </header>
    `}};v=f([r(`bkd-header-unrestricted`),a()],v),p.init(),h(e`
    ${d}
    :root {
      ${l}
    }
  `.toString());var y=class extends c{static{this.styles=[u,e`
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
    `]}constructor(){super(),new n(this,p)}render(){return i`
      <bkd-header-unrestricted></bkd-header-unrestricted>
      <bkd-content-unrestricted></bkd-content-unrestricted>
      <bkd-footer></bkd-footer>
    `}};y=f([r(`bkd-portal-unrestricted`),a()],y);