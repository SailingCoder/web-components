class MyElement extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
      <style>
        p { color: black; }
      </style>
      <p>Shadow DOM</p>
    `;
  }
}
customElements.define('my-element', MyElement);

/**
 * open 模式的 Shadow DOM。
 */
class OpenMyElement extends HTMLElement {
  constructor() {
    super();
    // 创建一个 open 模式的 Shadow DOM
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
      <style>
        p { color: red; }
      </style>
      <p>这是一个 open 模式的 Shadow DOM</p>
    `;
  }
}
customElements.define('open-my-element', OpenMyElement);

/**
 * closed 模式的 Shadow DOM。
 */
class ClosedMyElement extends HTMLElement {
  constructor() {
    super();
    // 创建一个 closed 模式的 Shadow DOM
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.innerHTML = `
      <style>
        p { color: blue; }
      </style>
      <p>这是一个 closed 模式的 Shadow DOM</p>
    `;
  }
}
customElements.define('closed-my-element', ClosedMyElement);
