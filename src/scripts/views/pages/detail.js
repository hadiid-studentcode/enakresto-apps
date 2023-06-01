import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import {createRestaurantDetailTemplate} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurants = await RestaurantSource.detailRestaurant(url.id);
    const restaurantsContainer = document.querySelector('#restaurant');
    restaurantsContainer.innerHTML =
      createRestaurantDetailTemplate(restaurants);

       LikeButtonInitiator.init({
         likeButtonContainer: document.querySelector('#likeButtonContainer'),
         restaurants: {
           id: restaurants.restaurant.id,
           name: restaurants.restaurant.name,
           city: restaurants.restaurant.city,
           description: restaurants.restaurant.description,
           pictureId: restaurants.restaurant.pictureId,
           address: restaurants.restaurant.address,
           rating: restaurants.restaurant.rating,
         },
       });
  },
};

export default Detail;
