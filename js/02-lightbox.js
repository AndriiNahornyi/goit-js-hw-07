import { galleryItems } from './gallery-items.js';
// Change code below this line
// Variables
const galleryEl = document.querySelector('.gallery');

const markupGallery = createGalleryItemsMarkup(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", markupGallery);

// Listeners
galleryEl.addEventListener('click', targetClickHandler);

// Functions
// 3. Initializing the library after creation & додання gallery items to 'div.gallery'.
// (SimpleLightbox: «Usage», «Markup»).
// *instance SimpleLightBox:
// var lightbox = new SimpleLightbox('.gallery a', { /* options */ }); or
// var lightbox = $('.gallery a').simpleLightbox({ /* options */ });
// 4. SimpleLightbox («Options»): add IMG captions from given attribute 'alt'; captions position: bottom; caption delay: 250 ms after open the IMG.
// Options:  captionsData: get the caption from given attribute; 
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