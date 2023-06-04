class AppHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `

    <style>
   .app-hero{
      background-image: url("images/hero-image_3-large.png");

      @media screen and (min-width: 320px) and (max-width: 425px) {

        background-image: url("images/hero-image_3-small.png");
      }
    }
    </style>
    
       <div class="app-hero">
        <div class="hero-text">
          <h1>Welcome to Enak Resto</h1>
          <p>
            Temukan makanan terbaik di dekat Anda dan simpan favorit Anda untuk
            dipesan nanti!
          </p>
          <button>Pesan Sekarang !</button>
        </div>
      </div>
    
    `;
  }
}

customElements.define('app-hero', AppHero);
