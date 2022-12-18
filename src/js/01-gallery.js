// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galleryRef = document.querySelector(".gallery");

function createGalleryMarkup(obj) {
  return obj
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
        <img 
        class="gallery__image" 
        src="${preview}" 
        alt="${description}" />
    </a>
`;
    })
    .join(" ");
}
const markupGallery = createGalleryMarkup(galleryItems);

galleryRef.innerHTML = markupGallery;



let lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});

