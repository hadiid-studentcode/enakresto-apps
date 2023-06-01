import RestaurantSource from '../../data/restaurant-source';
import {createRestaurantItemTemplate} from '../templates/template-creator';

const Home ={
  async render() {
    return `
    
      <div id="mainContent">
        <section>
          <h2>Popular Restaurants</h2>
          <ul id="restaurant-list">
          </ul>
        </section>
      </div>

        `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.homeRestaurant();
    const restaurantsContainer = document.querySelector('#restaurant-list');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML +=
         createRestaurantItemTemplate(restaurant);
    });
  },
};


export default Home;
