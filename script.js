const images = document.querySelectorAll('.gallery img');

images.forEach(image => {
  image.addEventListener('click', () => {
    image.classList.toggle('enlarge');
  });
});
