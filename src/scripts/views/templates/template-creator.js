import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = ({restaurant}) => `



<h2 class="restaurant__title">${restaurant.name}</h2>
      <img
        class="restaurant__poster lazyload" 
        data-src="${CONFIG.BASE_IMAGE_LARGE_URL}${restaurant.pictureId}"
        alt="asdaas"
      />
      <div class="restaurant__info">
        <h3>Information</h3>
        <h4>Address</h4>
        <p>${restaurant.address}</p>
        <h4>Rating</h4>
        <p><i class="far fa-star "></i>${restaurant.rating}</p>
        <h4>City</h4>
        <p>${restaurant.city}</p>
        <h4>description</h4>
        <p>${restaurant.description}</p>
        <h4>Menu Makanan</h4>
        <p>
        ${restaurant.menus.foods.map(
          (food) => `
          <button class="btnmenu">${food.name}</button>
          
          `,
        )}
       
        </p>
        <h4>Menu Minuman</h4>
        <p>
          ${restaurant.menus.drinks.map(
            (drink) => `<button class="btnmenu">${drink.name}</button>`,
          )}
        </p>
      </div>
       <div class="restaurant__overview">
        <h3>Review Pelanggan</h3>
       <div class="review">
  <div class="review__content">
            
            ${restaurant.customerReviews.map(
              (custumer) => `
            
              <h3 class="review__name">${custumer.name}</h3>
    <p class="review__text">${custumer.review}</p>
  <p class="text-muted">${custumer.date}</p>
            `,
            )}
  
  </div>
</div>

      </div>
 

`;

const createRestaurantItemTemplate = (restaurant) => `
  <li class="restaurant-item">
    <div class="city-label"><span class="city-label-text">${
      restaurant.city
    }</span></div>
    <img class="lazyload"
      data-src="${CONFIG.BASE_IMAGE_MEDIUM_URL + restaurant.pictureId}"
      alt="${restaurant.name}"
    />
    <div class="restaurant-title">
      <a id="detail-link" href="#/detail/${restaurant.id}">${restaurant.name}</a>
      <p></p>
      <p class="rating"><i class="far fa-star"></i>${restaurant.rating}</p>
      <p>
       ${restaurant.description}
      </p>
    </div>
  </li>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
