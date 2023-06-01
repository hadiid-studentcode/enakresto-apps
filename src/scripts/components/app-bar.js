class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    
       <div class="app-bar">
        <nav>
          <div class="logo">
           <picture>
        <source media="(max-width: 600px)" srcset="images/enakrestologo-small.png">
        <img src='images/enakrestologo-small.png' 
             alt="dirt rally poster">
      </picture>
        
          </div>
          <ul>
            <li><a href="#/home">Home</a></li>
            <li><a href="#/like">Favorites</a></li>
            <li>
              <a
                href="https://www.linkedin.com/in/hadiid-andri-yulison-984a69200/"
                >About Us</a
              >
            </li>
          </ul>
          <button class="hamburger" id="hamburgerButton">&#9776;</button>

          <div class="menu" id="navigationDrawer">
            <div class="logo">
              <picture>
        <source media="(max-width: 600px)" srcset="images/enakresto-small.png">
        <img src='images/enakresto-large.png' 
             alt="dirt rally poster">
      </picture>
            </div>
            <a href="#/home">
              <img src="icon/home.svg" alt="home" id="home" />
              Home</a
            >
            <hr />
            <a href="#/like" class="active"
              ><img
                src="icon/favorite.svg"
                alt="favorites"
                id="favorites"
              />Favorites</a
            >
             <hr />
            <a href="https://www.linkedin.com/in/myname/">
              <img src="icon/alert.svg" alt="about" id="about" />About
              Us</a
            >
             <hr />
          </div>
        </nav>
      </div>
    
    `;
  }
}
customElements.define('app-bar', AppBar);
