
/**
 * 添加 DOM 元素方式
 * @innerHTML
 */
class MyElementInnerHTML extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
      <style>
        p { color: black; }
      </style>
      <p>使用 innerHTML</p>
    `;
  }
}
customElements.define('my-element-inner', MyElementInnerHTML);


/**
 * 添加 DOM 元素方式
 * @createElement 和 appendChild
 */

const wrapper = document.createElement('p');
wrapper.textContent = '使用 createElement 和 appendChild';

var style = document.createElement('style');
style.textContent = `
p { color: gray; }
`;
class MyElementAppend extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    
    shadowRoot.appendChild(wrapper);
    shadowRoot.appendChild(style);
  }
}
customElements.define('my-element-append', MyElementAppend);

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
