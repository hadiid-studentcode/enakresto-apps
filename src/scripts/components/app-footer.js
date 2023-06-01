class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    
        <p>&copy; 2023 - Enak Resto App</p>
    
    `;
  }
}

customElements.define('app-footer', AppFooter);
