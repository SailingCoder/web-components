class MyElementImport extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'}).innerHTML = `
      <style>
        .my-element {
          padding: 10px;
          border: 1px solid black;
        }
      </style>
      <div class="my-element">
        <slot name="content">默认内容</slot>
      </div>
    `;
  }
}
// 定义新的自定义元素
customElements.define('my-element-import', MyElementImport);