const BASE_URL = 'https://randomfox.ca';

const mountNode = document.getElementById('images');

const addButton = document.querySelector('button');
function addImagen() {
  const src = `${BASE_URL}/images/${random()}.jpg`;
  const newImage = createImageNode(src);
  mountNode.append(newImage);
}

addButton.addEventListener('click', addImagen);

function random() {
  const maximum = 122;
  const minimum = 1;
  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
}

function createImageNode(src) {
  const container = document.createElement('div');
  container.className = 'p-4';

  const image = document.createElement('img');
  image.className = 'mx-auto';
  image.width = 320;
  image.src = src;

  container.appendChild(image);

  return container;
}
