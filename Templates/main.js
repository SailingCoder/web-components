class MyButton extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const template = document.getElementById('my-button-template');
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
customElements.define('my-button', MyButton);