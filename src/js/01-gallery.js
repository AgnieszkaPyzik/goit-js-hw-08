import _default from '../../node_modules/simplelightbox/dist/simple-lightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const photo = galleryItems
  .map(
    galleryItem =>
      `<div class="gallery__item"> <a class="gallery__link" href="${galleryItem.original}"> <img class="gallery__image" src="${galleryItem.preview}" data-source="${galleryItem.original}" alt="${galleryItem.description}"/></a> </div>`
  )
  .join('');
gallery.insertAdjacentHTML('beforeend', photo);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 300,
});
console.log(lightbox);
