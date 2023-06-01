import 'regenerator-runtime'; /* for async await transpile */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import './components/app-bar';
import './components/app-hero';
import './components/app-main';
import './components/app-footer';
import '../styles/main.css';
import '../styles/responsive.css';
import swRegister from './utils/sw-register';

import App from './views/app';


const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

const skipLink = document.querySelector('.skip-link');
const mainContent = document.querySelector('main');

skipLink.addEventListener('click', (event) => {
  event.preventDefault();
  mainContent.scrollIntoView({behavior: 'smooth'});
  skipLink.blur();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
