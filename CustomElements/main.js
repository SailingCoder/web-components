class MyButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                button {
                    background-color: #4CAF50;
                    border: none;
                    color: white;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 16px;
                    margin: 4px 2px;
                    cursor: pointer;
                    padding: 10px 24px;
                    border-radius: 4px;
                }
            </style>
            <button>Click Me!</button>
        `;
        this.shadowRoot.querySelector('button').addEventListener('click', () => {
            alert('按钮被点击了！');
        });
    }
}

customElements.define('my-button', MyButton);