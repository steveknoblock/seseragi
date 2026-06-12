/**
 * panel-menu.js
 * A web component panel menu.
 * Autonomous custom element — no Shadow DOM, styles in minimal.css.
 * Uses a <template id="panel-menu"> in the page HTML for markup.
 * (c)2020-2026 Steve Knoblock
 * MIT LICENSE
 */

class PanelMenu extends HTMLElement {

connectedCallback() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => this._init());
  } else {
    this._init();
  }
}

_init() {
  const template = document.getElementById('panel-menu');
  const clone = template.content.cloneNode(true);
  this.appendChild(clone);

  const toggle = this.querySelector('#menu-toggle');
  const iconO  = this.querySelector('#icon-open');
  const iconC  = this.querySelector('#icon-close');
  const nav    = document.getElementById('panel-nav');

  toggle.addEventListener('click', function () {
    const isOpen = nav.classList.toggle('open');
    iconO.classList.toggle('hide', isOpen);
    iconC.classList.toggle('hide', !isOpen);
    toggle.setAttribute('aria-expanded', isOpen);
  });
}

}

customElements.define('panel-menu', PanelMenu);
