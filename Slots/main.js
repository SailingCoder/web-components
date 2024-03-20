class MyButton extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
      <style>
        /* ...样式代码保持不变... */
      </style>
      <button>
        <slot>Click Me!</slot>
      </button>
    `;
  }
}
customElements.define('my-button', MyButton);