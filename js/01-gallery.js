import { galleryItems } from './gallery-items.js';
// Change code below this line
// Variables
const galleryEl = document.querySelector('.gallery');
const markupGallery = createGalleryItemsMarkup(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", markupGallery);
// Run functions
// Listeners
galleryEl.addEventListener('click', targetClickHandler);
// Functions
// 2. Event delegation to 'div.gallery'. Get a large-image url.
// 4. Open Modal by ckick on the IMG
// *instance basicLightbox demo
// basicLightbox.create(`
// 	<img width="1400" height="900" src="https://placehold.it/1400x900">
// `).show()
// 5. Change src in a Modal before opening
function targetClickHandler(event) {
    event.preventDefault();
    if (event.target.tagName !== 'IMG') return;  // check: image clicked?
    const dataSource = event.target.dataset.source;
    const imgModal = basicLightbox.create(
        `<img src='${dataSource}'>`, {onShow: () => {document.addEventListener('keydown', targetKeyHandler)}, onClose: () => {document.removeEventListener('keydown', targetKeyHandler)}}
    );
    imgModal.show();
    // Optional. Add closing the Modal after clicking Escape. Listening takes place only when the Modal is open. 
    // * Instance basicLightbox: instance.close(), onShow(), onClose().
    function targetKeyHandler(event) {
        console.log(imgModal);
        if (event.code === 'Escape') {
        imgModal.close(); 
        }
        }
    }
// 1. Create & render markup
function createGalleryItemsMarkup(items) {
    const galleryItemsMarkup = items.map(({ preview, original, description }) => `<div class='gallery__item'>
            <a class="gallery__link" href='${original}'>
                <img
                    class='gallery__image'
                    src='${preview}'
                    data-source='${original}'
                    alt='${description}'
                />
            </a>
        </div>`
    ).join('');
    // console.log(galleryItemsMarkup);
    return galleryItemsMarkup;
}