# web-components doc

Web components是一套不同的技术，允许您创建可重用的定制元素（它们的功能封装在您的代码之外）并且在您的 web 应用中使用它们。Web components 是由 W3C 组织标准化，并被现代浏览器广泛支持的技术。

Web components 主要包括以下几个部分：

1. **Custom Elements（自定义元素）**：
   - 允许开发者定义新的HTML元素，并决定这些元素的行为。这些元素可以像普通的HTML元素一样使用。
2. **Shadow DOM（影子DOM）**：
   - 提供了一个方法，允许将隐藏的DOM树附加到常规的DOM树中。这可以防止元素的内容与页面上的其他JavaScript、CSS和DOM结构冲突。
3. **Templates（模板）**：
   - `<template>` 和 `<slot>` 元素允许您编写不在页面渲染中显示的标记模板。然后可以在JavaScript中实例化模板，并将它们的内容插入到DOM中。
4. **HTML Imports**：
   - 虽然现在已经被废弃，但它最初提供了一个包含和重用Web组件的方法。现在，更推荐使用ES6模块或其它模块系统来导入组件。

使用Web components的好处包括：

- **可重用性**：可以在不同的页面和项目中重复使用自定义元素。
- **封装性**：Shadow DOM提供了一种方式，使得组件的内部结构和样式不会影响到页面上的其他元素。
- **自定义性**：开发者可以根据自己的需求定义和创建新的HTML元素。

Web components的示例代码如下所示：

```html
<!-- 定义一个自定义元素 -->
<template id="my-element-template">
  <style>
    /* 在这里定义一些样式 */
  </style>
  <div class="my-element">
    <slot name="content">默认内容</slot>
  </div>
</template>
<script>
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
</script>
```

然后你可以在HTML中像使用常规HTML元素一样使用`<my-element>`：

```html
<my-element>
  <span slot="content">这是我的内容</span>
</my-element>
```
