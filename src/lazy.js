const isIntersecting = (entry) => {
  return entry.isIntersecting; // true (dentro de la pantalla)
};

const loadImage = (entry) => {
  const container = entry.target;
  const image = container.firstChild;
  const src = image.dataset.src;

  image.src = src;
  observer.unobserve(entry.target);
};

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(loadImage);
});

export const registerImage = (image) => {
  observer.observe(image);
};
