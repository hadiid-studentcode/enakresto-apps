class AppMain extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    
      <div id="mainContent">
        <section>
          <h2>Popular Restaurants</h2>
          <ul id="restaurant-list"></ul>
        </section>
      </div>
    
    `;
  }
}

customElements.define('app-main', AppMain);

