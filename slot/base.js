// 创建一个自定义元素类
class MyElement extends HTMLElement {
    constructor() {
      super(); // 调用超类（HTMLElement）的constructor
      const template = document.getElementById('my-element-template').content;
      const shadowRoot = this.attachShadow({mode: 'open'}).appendChild(template.cloneNode(true));
    }
}
// 定义新的自定义元素
customElements.define('my-element', MyElement);