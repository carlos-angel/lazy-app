import h from '../_snowpack/pkg/hyperscript.js';
import { registerImage } from './lazy.js';

const BASE_URL = 'https://randomfox.ca';

const mountNode = document.getElementById('images');

const addButton = document.querySelector('button');
function addImagen() {
  const src = `${BASE_URL}/images/${random()}.jpg`;
  const newImage = createImageNode(src);
  mountNode.append(newImage);
  registerImage(newImage);
}

addButton.addEventListener('click', addImagen);

function random() {
  const maximum = 122;
  const minimum = 1;
  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
}

function createImageNode(src) {
  const image = h('img.mx-auto', {
    width: 320,
    'data-src': src,
  });

  const container = h('div.p-4', image);

  return container;
}
