class MyButton extends HTMLElement {
    constructor() {
        super(); // 调用HTMLElement的constructor
        const template = document.getElementById('my-button-template');
        const content = template.content.cloneNode(true);
        this.attachShadow({mode: 'open'}).appendChild(content);
        // 在这里添加事件监听器
        this.shadowRoot.querySelector('button').addEventListener('click', () => {
            alert('按钮被点击了！');
        });
    }
}
// 定义自定义元素
customElements.define('my-button', MyButton);