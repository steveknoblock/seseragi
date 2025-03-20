/**
 * panel-menu.js
 * (c)2020 Steve Knoblock
 * MIT LICENSE
 */
customElements.define('panel-menu',

class PanelMenu extends HTMLDivElement {
  constructor() {
    super();

    document.addEventListener('DOMContentLoaded', function () {
      console.log('DOM Loaded');
    });

      const template = document.getElementById('panel-menu');
      const templateContent = template.content;
      
      const shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.appendChild(templateContent.cloneNode(true));

      const shadowButton = shadowRoot.querySelector('#panel-menu-button');
      const shadowMenuOpen = shadowRoot.querySelector('#panel-menu-open');
      const shadowMenuClose = shadowRoot.querySelector('#panel-menu-close');

      const shadowNav = shadowRoot.querySelector('#menu-nav');

      shadowButton.addEventListener('click', function(e) { 
        //console.log("heard the click");
        shadowNav.classList.toggle('hide');
        shadowNav.classList.toggle('roll');
        shadowMenuOpen.classList.toggle('hide');
        shadowMenuClose.classList.toggle('hide');
      });

    }
}
, { extends: 'div'} );