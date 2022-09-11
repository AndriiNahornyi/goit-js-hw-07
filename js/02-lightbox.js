import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

const markupGallery = createGalleryItemsMarkup(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", markupGallery);
// Listeners
galleryEl.addEventListener('click', targetClickHandler);
// Functions
// 3. Ініціалізація бібліотеки після створення і додання елементів галереї у div.gallery.
// (SimpleLightbox: «Usage», «Markup»).
// *instance SimpleLightBox:
// var lightbox = new SimpleLightbox('.gallery a', { /* options */ }); or
// var lightbox = $('.gallery a').simpleLightbox({ /* options */ });
// 4. SimpleLightbox («Options»): як додати відображення підписів до зображень з атрибута alt. Підпис має бути знизу і з'являєтись через 250 мілісекунд після відкриття зображення.
// Options: captionsData: get the caption from given attribute; 
// captionPosition: top, bottom or outside;
// captionDelay: adds a delay before the caption shows(in ms);
function targetClickHandler(event) {
    event.preventDefault();
}
let lightbox = new SimpleLightbox('.gallery a', { 
    captionsData:	'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
 });
// 1. Create & render markup
function createGalleryItemsMarkup(items) {
    const galleryItemsMarkup = items.map(({ preview, original, description }) => `<a class="gallery__item" href='${original}'>
                <img class='gallery__image'
                    src='${preview}'
                    alt='${description}'
                />
            </a>`
    ).join('');
    console.log(galleryItemsMarkup);
    return galleryItemsMarkup;
}  
// console.log(galleryItems);