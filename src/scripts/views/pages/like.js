import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import {createRestaurantItemTemplate} from '../templates/template-creator';


const Like = {
  async render() {
    return `
    
         <div id="mainContent">
        <section>
          <h2>Favorite Restaurants</h2>
          <ul id="restaurant-list">
          </ul>
        </section>
      </div>

        `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('#restaurant-list');

    if (restaurants.length === 0) {
      restaurantContainer.innerHTML = `
             
      `;
    }

    restaurants.forEach((restaurant)=>{
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};


export default Like;
