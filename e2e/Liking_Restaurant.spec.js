const assert = require('assert');
const {async} = require('regenerator-runtime');

Feature('Liking Restaurant');

Before(({I}) => {
  // root URL : http:localhost:9000
  I.amOnPage('/#/like');
});

Scenario('liking one restaurant', async ({I}) => {
  I.seeElement('#restaurant-list');
  pause();
  I.see('', '#restaurant-list');

  // URL: /
  I.amOnPage('/');
  I.seeElement('#detail-link');

  const firstResto = locate('#detail-link').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  // URL: /detil/:id

  I.seeElement('#likeButton');
  I.click('#likeButton');

  // URL: /#/like
  I.amOnPage('#/like');
  const likedRestoTitle = await I.grabTextFrom(
    '#detail-link',
  );
  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('unliking one restaurant', async ({I}) => {
  I.seeElement('#restaurant-list');
  pause();
  I.see('', '#restaurant-list');

  // URL: /
  I.amOnPage('/');


  I.seeElement('#detail-link');

  const firstResto = locate('#detail-link').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);


  // URL: /detil/:id

  I.seeElement('#likeButton');
  I.click('#likeButton');

  // URL: /#/like
  I.amOnPage('#/like');
  const likedRestoTitle = await I.grabTextFrom('#detail-link');
  assert.strictEqual(firstRestoTitle, likedRestoTitle);
  I.click(firstResto);
  // URL: /detil/:id

  I.seeElement('#likeButton');
  I.click('#likeButton');
    I.amOnPage('#/like');
});
